// ==UserScript==
// @name            AutoPatchWork for Opera
// @author          os0x, edvakf
// @namespace       http://ss-o.net/
// @description     Automatically loads the next page and inserts into current page when you reach the end of the page. like AutoPagerize.
// @license         The MIT License
// @version         0.2
// @include         *
// @released        2010-07-07
// @updated         2010-07-07
// @compatible      Opera10.60+
// ==/UserScript==

window.opera && (function(){
  var debug = false;
  function log(msg) {if (debug) console.log(msg); return msg;}

  if(window.name.indexOf('AutoPatchWork-Request-') === 0) return;

  var iframeSrc = 'http://0.0.0.0/AutoPatchWorkSITEINFOLoader';

  if (location.href === iframeSrc) {
    var pf = 'AutoPatchWork_SITEINFO_'; // prefix for each key of localStorage
    var id = Math.floor((Date.now() + Math.random()) * 1000) + '';
    var LS = localStorage;
    var url; // url of parent page
    var port; // message port to talk to parent page

    var channel = new MessageChannel;
    window.parent.postMessage({message: 'connect', src: iframeSrc}, '*', [channel.port2]);
    port = channel.port1;
    port.onmessage = function(e) {
      // connection established, get url of parent
      if (e.data.message !== 'connected') return;
      url = e.data.url;
      checkServer();
    };

    function checkServer() {
      log(arguments.callee.name);
      // send ping to the server. if there is a reply, send request. if no reply, start server
      LS[pf + 'ping'] = JSON.stringify({from: id, to: LS[pf + 'server']});
      addEventListener('storage', waitPong, false);
      var timer = setTimeout(function timeoutPing() {
        log(arguments.callee.name);
        removeEventListener('storage', waitPong, false);
        startServer();
      }, 100);
      function waitPong(e) {
        log(arguments.callee.name);
        if (e.key !== pf + 'pong') return;
        var data = JSON.parse(e.newValue);
        if (data.to !== id) return;
        requestSiteinfo();
        removeEventListener('storage', waitPong, false);
        clearTimeout(timer);
      }
    }

    function requestSiteinfo() {
      log(arguments.callee.name);
      LS[pf + 'request'] = JSON.stringify({from: id, to: LS[pf + 'server'], url: url});
      addEventListener('storage', function onResponse(e) {
        if (e.key !== pf + 'response') return;
        log(arguments.callee.name);
        var data = JSON.parse(e.newValue);
        if (data.to !== id || data.url !== url) return;
        port.postMessage({message: 'found', url: url, siteinfo: data.siteinfo});
        port.postMessage({message: 'disconnect'});
        removeEventListener('storage', onResponse, false);
      }, false);
    }

    function startServer() {
      log(arguments.callee.name);
      LS[pf + 'server'] = id;
      // update siteinfo
      var siteinfo = LS[pf + 'data'];
      var updated = LS[pf + 'updated'] || 0;
      if (!siteinfo || Date.now() - updated > 24*60*60*1000) { // more than 1 day old
        updateSiteinfo();
      } else {
        reallyStartServer(JSON.parse(siteinfo));
      }
    }

    function updateSiteinfo() {
      log(arguments.callee.name);
      var timer = setTimeout(function timeoutJSONP(e) {
        log(arguments.callee.name);
        var siteinfo = LS[pf + 'data'];
        if (!siteinfo) return;
        window.AutoPagerizeCallbackSiteinfo = function() {};
        reallyStartServer(siteinfo);
        LS[pf + 'updated'] = Date.now();
      }, 5000);

      if (document.readyState === 'complete') return loadJSONP();
      document.addEventListener('DOMContentLoaded', loadJSONP, false);

      function loadJSONP() {
        log(arguments.callee.name);
        window.AutoPagerizeCallbackSiteinfo = function AutoPagerizeCallbackSiteinfo(siteinfo) {
          log(arguments.callee.name);
          LS[pf + 'data'] = JSON.stringify(siteinfo)
          LS[pf + 'updated'] = Date.now();
          reallyStartServer(siteinfo);
          clearTimeout(timer);
        }
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = 'http://ss-o.net/json/wedataAutoPagerizeSITEINFO.js';
        document.body.appendChild(s);
      }
    }

    function reallyStartServer(siteinfo) {
      log(arguments.callee.name);
      var lookup = SiteinfoLookupper(siteinfo);
      port.postMessage({message: 'found', url: url, siteinfo: lookup(url)});
      addEventListener('storage', function onStorageMessage(e) {
        log(arguments.callee.name);
        log(e.key + ' : ' + e.newValue);
        if (e.key === pf + 'request') {
          var data = JSON.parse(e.newValue);
          if (data.to !== id) return;
          log('request');
          LS[pf + 'response'] = JSON.stringify({from: id, to: data.from, url: data.url, siteinfo: lookup(data.url)});
        } else if (e.key === pf + 'ping') {
          var data = JSON.parse(e.newValue);
          if (data.to !== id) return;
          log('ping');
          LS[pf + 'pong'] = JSON.stringify({from: id, to: data.from});
        } else if (e.key === pf + 'server' && e.newValue !== id) {
          // this happens when accidentally start two servers at once
          log('server change');
          port.postMessage({message: 'disconnect'});
          removeEventListener('storage', arguments.callee, false);
        }
      }, false);
    }

    function SiteinfoLookupper(_siteinfo) {
      log(arguments.callee.name);
      var siteinfo = [];
      var microformats = [];
      var n = _siteinfo.length;
      while(--n) {
        var info = _siteinfo[n];
        var re = new RegExp(info.url);
        if (re.test('http://a')) {
          // isolate siteinfo that matches any url
          microformats.push(info);
        } else {
          siteinfo.push([re, info]);
        }
      }
	microformats.push({
		url          : '^https?://.',
		nextLink     : '//a[@rel="next"] | //link[@rel="next"]',
		insertBefore : '//*[contains(concat(" ",@class," "), " autopagerize_insert_before ")]',
		pageElement  : '//*[contains(concat(" ",@class," "), " autopagerize_page_element ")]'
	}
	,{
		url          : '^https?://.',
		nextLink     : '//link[@rel="next"] | //a[contains(concat(" ",@rel," "), " next ")] | //a[contains(concat(" ",@class," "), " next ")]',
		pageElement  : '//*[contains(concat(" ",@class," "), " hfeed ") or contains(concat(" ",@class," "), " xfolkentry ")]'
	});
      return function lookupSITEINFO(url) {
        log(arguments.callee.name);
        if (/^http:\/\/(www|images)\.google\.(?:[^.]+\.)?[^.\/]+\/images\?./.test(url)) {
          url = url.replace(/^http:\/\/www/,'http://images') + '&gbv=1'; // Google Images hack see oAutoPagerize.js
        }
        var results = [];
        var n = siteinfo.length;
        var info;
        while(info = siteinfo[--n]) {
          var re = info[0];
          if (re.test(url)) results.push(info[1]);
        };
        return results.concat(microformats);
      }
    }

  } else if (window.self === window.top) {


  }
})();
var head = document.head || document.getElementsByTagName('head')[0];
var sendRequest = this.chrome ? function(data,callback){
	if (callback) {
		chrome.extension.sendRequest(data,callback);
	} else {
		chrome.extension.sendRequest(data);
	}
} : this.safari ? (function(){
	var eventData = {};
	safari.self.addEventListener('message',function(evt){
		(evt.name in eventData) && eventData[evt.name](evt.message);
	},false);
	return function(data, callback, name){
		name = (name || '') + (Date.now() + Math.random().toString(36));
		callback && (eventData[name] = callback);
		safari.self.tab.dispatchMessage(name,data);
	}
}()) : this.opera ? (function(){
	var iframeSrc = 'http://0.0.0.0/AutoPatchWorkSITEINFOLoader';
	var callback , frame, url;
	opera.addEventListener('BeforeEvent.message', function (ujsevent) {
		var e = ujsevent.event;
		if (!(e.origin === 'http://0.0.0.0' 
			  && e.data 
			  && e.data.message === 'connect' 
			  && e.data.src === iframeSrc 
			  && e.ports)) return;
		ujsevent.preventDefault();
		var port = e.ports[0];
		port.postMessage({message: 'connected', url: url});
		port.onmessage = function(e) {
			var message = e.data.message;
			if (message === 'found') {
				// launch autopager
				//log('found');
				//var ev = document.createEvent('Event');
				//ev.initEvent('AutoPatchWork_SiteinfoLoaded', true, false);
				//ev.SITEINFO = e.data.siteinfo;
				//document.dispatchEvent(ev);
				callback && callback({siteinfo:e.data.siteinfo});
			}
			if (message === 'disconnect') {
				//log('disconnect');
				frame.parentNode.removeChild(frame);
				port = port.onmessage = null; // cut reference
			}
		};
	}, false);
	return function(data, _callback, name){
		Object.keys || (Object.keys = function(o){var r=[];for(var k in o)o.hasOwnProperty(k)&&r.push(k);return r;});
		if (name === 'AutoPatchWork.init' && window.name !== 'AutoPatchWork-SITEINFOLoader'){
			callback = _callback;
			url = data.url;
			frame = document.createElement('iframe');
			frame.src = iframeSrc;
			frame.name = 'AutoPatchWork-SITEINFOLoader';
			frame.style = 'position:absolute; top:0; left:0; height:1px; width:1px; border:none; visibility: hidden;';
			document.body.appendChild(frame);
		}
	};
}()) : function(){};
(function(g, loaded){
	if(window.name.indexOf('AutoPatchWork-') === 0) return;
	if(window.opera && !loaded){
		var f = arguments.callee;
		return document.addEventListener('DOMContentLoaded',function(e){
			f(g, true);
		},false);
	}
	var options = {
		BASE_REMAIN_HEIGHT:400,
		FORCE_TARGET_WINDOW:true,
		DEFAULT_STATE:true,
		TARGET_WINDOW_NAME:'_blank',
		css:''
	};
	var status = {
		state:true,
		page_number:1,
		nextLink:null,
		pageElement:null,
		last_element:null,
		insert_point:null,
		append_point:null,
		bottom:null,
		remain_height:null
	};
	var Root = /BackCompat/.test(document.compatMode) ? document.body : document.documentElement;
	var debug = false;
	var isXHTML = document.documentElement.nodeName !== 'HTML'
		&& document.createElement('p').nodeName !== document.createElement('P').nodeName;
	window.addEventListener('AutoPatchWork.siteinfo',siteinfo,false);
	var bar;
	sendRequest({url:location.href,isFrame:top!=self},init,'AutoPatchWork.init');
	function init(info){
		if (info.config) {
			options.BASE_REMAIN_HEIGHT = info.config.remain_height;
			options.DEFAULT_STATE = info.config.auto_start;
			options.FORCE_TARGET_WINDOW = info.config.target_blank;
			options.css = info.css;
			debug = info.config.debug_mode;
		}
		var fails = [];
		var r = info.siteinfo.some(function(s){
			return AutoPatchWork(s) || (fails.push(s),false);
		});
		if (r === false){
			sendRequest({failed_siteinfo:fails});
		} else {
			initStyle();
		}
	}
	function siteinfo(evt){
		if (evt.siteinfo && !window.AutoPatchWork) {
			AutoPatchWork(evt.siteinfo);
		} else if (evt.siteinfo){
			var ev = document.createEvent('Event');
			ev.initEvent(type, true, true);
			for (var k in evt.siteinfo)
				ev[k] = evt.siteinfo[k];
			document.dispatchEvent(ev);
		}
	}
	function AutoPatchWork(siteinfo){
		if (window.AutoPatchWork) return true;
		if (isXHTML){
			status.resolver = function(){
				return document.documentElement.namespaceURI;
			};
			get_next = x_get_next;
			get_next_elements = x_get_next_elements;
			createHTML = createXHTML;
			siteinfo.nextLink = addDefaultPrefix(siteinfo.nextLink);
			siteinfo.pageElement = addDefaultPrefix(siteinfo.pageElement);
		}

		var loading = false;
		var nextLink     = status.nextLink     = siteinfo.nextLink;
		var pageElement = status.pageElement = siteinfo.pageElement;

		var next = get_next(document);
		if (!next){
			return message('nextLink not found.');
		}
		if (next.host && next.host !==location.host){
			request = request_iframe;
		}
		if (/^http:\/\/www\.google\.(?:[^.]+\.)?[^.\/]+\/images\?./.test(location.href)) {
			request = request_iframe;
		} else if (location.host==='matome.naver.jp'){
			var _get_next = get_next;
			get_next = function(doc){
				var next = _get_next(doc);
				var nextpage = next.getAttribute('onclick').match(/(\d+)/)[1];
				var form=document.getElementsByName('missionViewForm')[0];
				var param=[].slice.call(form).map(function(i){return i.name+'='+(i.name==='page'?nextpage:i.value);}).join('&');
				next.href = location.pathname+'?'+param;
				return next;
			};
			next = get_next(document);
		}

		var page_elements = get_next_elements(document);
		if (!page_elements.length)
			return message('pageElement not found.');

		var last_element = status.last_element = page_elements.pop();
		var insert_point = status.insert_point = last_element.nextSibling;
		var append_point = status.append_point = last_element.parentNode;

		var loaded_url = {};
		var page_num = 0;
		loaded_url[location.href] = true;
		loaded_url[next.href] = true;
		status.remain_height || (status.remain_height = calc_remain_height());
		window.addEventListener('scroll', check_scroll, false);
		window.addEventListener('AutoPatchWork.request', request, false);
		window.addEventListener('AutoPatchWork.load', load, false);
		window.addEventListener('AutoPatchWork.error', error_event, false);
		window.addEventListener('AutoPatchWork.reset', reset, false);
		window.addEventListener('AutoPatchWork.state', state, false);
		window.addEventListener('AutoPatchWork.terminated', terminated, false);
		window.addEventListener('AutoPatchWork.toggle', toggle, false);
		if (options.FORCE_TARGET_WINDOW){
			window.addEventListener('AutoPatchWork.DOMNodeInserted', target_rewrite, false);
		} else {
			window.addEventListener('AutoPatchWork.DOMNodeInserted', pushState, false);
		}
		if (debug) {
			var bottom = status.bottom = document.createElement('div');
			var line = document.createElement('div');
			bottom.setAttribute('style','position:absolute;width:0px;left:0px;top:0px;');
			line.setAttribute('style','position:absolute;height:10px;background-color:rgba(0,0,0,0.1);left:0px;');
			bottom.style.height = Root.scrollHeight + 'px';
			line.style.width = Root.scrollWidth + 'px';
			line.style.bottom = status.remain_height + 'px';
			bottom.appendChild(line);
			document.body.appendChild(bottom);
		}
		bar  = document.createElement('div');
		bar.id = 'AutoPatchWork-Bar';
		bar.className = 'on';
		document.body.appendChild(bar);
		bar.addEventListener('click',function(){
			if(bar.className === 'on'){
				bar.className = 'off';
				state_off();
			} else if(bar.className === 'off') {
				bar.className = 'on';
				state_on();
			}
		},false);
		var style = document.createElement('style');
		style.textContent = options.css;
		style.id = 'AutoPatchWork-style';
		head.appendChild(style);
		var pageHeight = Root.offsetHeight;
		if (window.innerHeight >= pageHeight) {
			check_scroll();
		}
		dispatch_event('AutoPatchWork.initialized',status);
		if (!options.DEFAULT_STATE){
			state_off();
		}
		sendRequest({message:'AutoPatchWork.initialized', siteinfo:siteinfo});
		window.AutoPatchWork = AutoPatchWork;

		return true;

		function reset(evt){
			for (var k in status){
				if (!evt[k]) {
					status[k] = evt[k];
				}
			}
			window.removeEventListener('scroll', check_scroll, false);
			window.removeEventListener('AutoPatchWork.request', request, false);
			window.removeEventListener('AutoPatchWork.load', load, false);
			window.removeEventListener('AutoPatchWork.error', error_event, false);
			window.removeEventListener('AutoPatchWork.reset', reset, false);
			window.removeEventListener('AutoPatchWork.DOMNodeInserted', target_rewrite, false);
			window.removeEventListener('AutoPatchWork.DOMNodeInserted', pushState, false);
			window.removeEventListener('AutoPatchWork.state', state, false);
			if (status.bottom && status.bottom.parentNode) {
				status.bottom.parentNode.removeChild(status.bottom);
			}
			AutoPatchWork({nextLink:status.nextLink,pageElement:status.pageElement});
		}
		function error_event(evt){
			error(evt.message);
		}
		function state(evt){
			if (evt.status === 'on') {
				state_on();
			} else if (evt.status === 'off') {
				state_off();
			}
		}
		function toggle(){
			if (status.state) {
				state_off();
			} else {
				state_on();
			}
		}
		function terminated(evt){
			status.state = false;
			window.removeEventListener('scroll', check_scroll, false);
			bar.className = 'terminated';
			setTimeout(function(){
				bar && bar.parentNode && bar.parentNode.removeChild(bar);
			},1000);
			if (status.bottom && status.bottom.parentNode) {
				status.bottom.parentNode.removeChild(status.bottom);
			}
		}
		function message(message){
			if (debug && this.console) console.log(message,siteinfo);
			return false;
		}
		function error(message){
			if (debug && this.console) console.log(message,siteinfo);
			status.state = false;
			window.removeEventListener('scroll', check_scroll, false);
			if (status.bottom && status.bottom.parentNode) {
				status.bottom.parentNode.removeChild(status.bottom);
			}
			bar.className = 'error';
			return false;
		}
		function dispatch_event(type,opt){
			var ev = document.createEvent('Event');
			ev.initEvent(type, true, false);
			if (opt) {
				Object.keys(opt).forEach(function(k){
					if (!ev[k]) {
						ev[k] = opt[k];
					}
				});
			}
			document.dispatchEvent(ev);
		}
		function dispatch_mutation_event(opt){
			var ev = document.createEvent('MutationEvent');
			with (opt) {
				ev.initMutationEvent(opt.type, canBubble, cancelable, relatedNode, prevValue, newValue, attrName, attrChange);
				targetNode.dispatchEvent(ev);
			}
		}
		function check_scroll(){
			if (loading) return;
			var remain = Root.scrollHeight - window.innerHeight - window.pageYOffset;
			if (status.state && remain < status.remain_height)
				dispatch_event('AutoPatchWork.request');
		}
		function target_rewrite(evt){
			if (evt && evt.target){
				var as = evt.target.getElementsByTagName('a');
				for (var i = 0, l = as.length;i < l;i++){
					var a = as[i], _a = a.getAttribute('href');
					if (_a && !/^javascript:/.test(_a) && !/^#/.test(_a))
						a.setAttribute('target',options.TARGET_WINDOW_NAME);
				}
			}
		}
		function pushState(evt){
			if (evt && evt.target){
				var as = evt.target.getElementsByTagName('a');
				var url = evt.newValue;
				for (var i = 0, l = as.length;i < l;i++){
					var a = as[i], _a = a.getAttribute('href');
					if (_a && !/^javascript:/.test(_a) && !/^#/.test(_a))
						a.addEventListener('click',function(e){
							//document.body.scrollTop = 0;
							history.pushState && history.pushState('', '', url);
						},false);
				}
			}
		}
		function state_on(){
			status.state = true;
			bar.className = 'on';
		}
		function state_off(){
			status.state = false;
			bar.className = 'off';
		}
		function request(){
			if(!loading){
				loading = true;
				bar.className = 'loading';
			}
			var url = next.href || next.getAttribute('href') || next.action || next.value;
			var x = new XMLHttpRequest();
			x.onload = function() {
				dispatch_event('AutoPatchWork.load',{response:x,url:url});
			};
			x.onerror = function(){
				dispatch_event('AutoPatchWork.error',{message:'request failed. status:' + x.status});
			};
			x.open('GET', url, true);
			x.send(null);
		}
		function request_iframe(){
			if(!loading){
				loading = true;
				bar.className = 'loading';
			}
			var url = next.href || next.getAttribute('href') || next.action || next.value;
			var iframe = document.createElement('iframe');
			iframe.style.display = 'none';
			iframe.name = 'AutoPatchWork-Request-' + url;
			iframe.onload = function(){
				var doc = iframe.contentDocument;
				dispatch_event('AutoPatchWork.load',{htmlDoc:doc, url:url});
			};
			iframe.onerror = function(){
				dispatch_event('AutoPatchWork.error',{message:'request failed. status:' + x.status});
			};
			iframe.src = url;
			document.body.appendChild(iframe);
		}
		function load(evt){
			if (!evt.response && !evt.htmlDoc) {
				return;
			}
			var url = evt.url, htmlDoc;
			if (evt.response) {
				var html = evt.response.responseText.replace(/<script(?:[ \t\r\n][^>]*)?>[\S\s]*?<\/script[ \t\r\n]*>|<\/?(?:i?frame|html|script|object)(?:[ \t\r\n][^<>]*)?>/gi, ' ');
				htmlDoc = createHTML(html);
			} else if (evt.htmlDoc) {
				htmlDoc = evt.htmlDoc;
			} else {
				return;
			}
			var root,node;
			if (/^tbody$/i.test(status.append_point.localName)) {
				var colNodes = document.evaluate('child::tr[1]/child::*[self::td or self::th]',
					status.append_point, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
				var colums = 0;
				for (var i = 0, l = colNodes.snapshotLength;i<l;i++) {
					var col = colNodes.snapshotItem(i).getAttribute('colspan');
					colums += parseInt(col,10) || 1;
				}
				node = document.createElement('td');
				root = document.createElement('tr');
				node.setAttribute('colspan',colums);
				root.appendChild(node);
			} else {
				root = node = document.createElement('div');
			}
			node.className = 'autopagerize_page_separator_blocks';
			var hr = node.appendChild(document.createElement('hr'));
			hr.className = 'autopagerize_page_separator';
			var p = node.appendChild(document.createElement('p'));
			p.className = 'autopagerize_page_info';
			var a = p.appendChild(document.createElement('a'));
			a.className = 'autopagerize_link';
			a.href = url;
			a.setAttribute('number',++status.page_number);
			status.append_point.insertBefore(root, status.insert_point);
			var docs = get_next_elements(htmlDoc);
			docs.forEach(function(doc,i,docs){
				var insert_node = status.append_point.insertBefore(document.importNode(doc, true), status.insert_point);
				var mutation = {
					targetNode:insert_node,
					type:'AutoPatchWork.DOMNodeInserted',
					canBubble:true,
					cancelable:false,
					relatedNode:status.append_point,
					prevValue:null,
					newValue:url,
					attrName:null,
					attrChange:null,
				};
				dispatch_mutation_event(mutation);
				docs[i] = insert_node;
			});
			if (status.bottom) status.bottom.style.height = Root.scrollHeight + 'px';
			next = get_next(htmlDoc);
			if (!next) {
				dispatch_event('AutoPatchWork.terminated',{message:'nextLink not found.'});
			} else {
				next_href = next.getAttribute('href') || next.getAttribute('action') || next.getAttribute('value');
				if (next_href && !loaded_url[next_href]) {
					loaded_url[next_href] = true;
				} else {
					return dispatch_event('AutoPatchWork.error',{message:next_href + ' is already loaded.'});
				}
				bar.className = status.state ? 'on' : 'off';
			}
			setTimeout(function(){
				loading = false;
				var pageHeight = Root.offsetHeight;
				if (window.innerHeight >= pageHeight) {
					setTimeout(check_scroll, 1000);
				}
			}, 0);
			dispatch_event('AutoPatchWork.pageloaded');
		}
		function createXHTML(str){
			return new DOMParser().parseFromString(str, 'application/xhtml+xml');
		}
		function createHTML(source){
			// http://gist.github.com/198443
			var doc = document.implementation.createHTMLDocument ?
				document.implementation.createHTMLDocument('HTMLParser') :
				document.implementation.createDocument(null, 'HTMLParser', null);
			var range = document.createRange();
			range.selectNodeContents(document.documentElement);
			var fragment = range.createContextualFragment(source);
			var headChildNames = {title: true, meta: true, link: true, script: true, style: true, /*object: true,*/ base: true/*, isindex: true,*/};
			var child, head = doc.createElement('head'), body = doc.createElement('body');
			while ((child = fragment.firstChild)) {
				if (
					(child.nodeType === Node.ELEMENT_NODE && !(child.nodeName.toLowerCase() in headChildNames)) || 
					(child.nodeType === Node.TEXT_NODE &&/\S/.test(child.nodeValue))
				   )
					break;
				head.appendChild(child);
			}
			body.appendChild(fragment);
			doc.documentElement.appendChild(head);
			doc.documentElement.appendChild(body);
			return doc;
		}
		function get_next(doc){
			return doc.evaluate(status.nextLink,doc,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;
		}
		function get_next_elements(doc){
			var r = doc.evaluate(status.pageElement, doc, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
			for (var i = 0,l = r.snapshotLength, res = new Array(l);i<l;i++) res[i] = r.snapshotItem(i);
			return res;
		}
		function x_get_next(doc){
			return doc.evaluate(status.nextLink,doc,status.resolver,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;
		}
		function x_get_next_elements(doc){
			var r = doc.evaluate(status.pageElement, doc, status.resolver, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
			for (var i = 0,l = r.snapshotLength, res = (l && new Array(l)) || [];i<l;i++) res[i] = r.snapshotItem(i);
			return res;
		}
		function calc_remain_height(){
			var bottom;
			var _point = insert_point;
			while (_point && !_point.getBoundingClientRect) {
				_point = _point.nextSibling;
			}
			if (_point) {
				var rect = _point.getBoundingClientRect();
				bottom = rect.top + window.pageYOffset;
			} else if (append_point && append_point.getBoundingClientRect) {
				var rect = append_point.getBoundingClientRect();
				bottom = rect.top + rect.height + window.pageYOffset;
			}
			if (!bottom) {
				bottom = Math.round(Root.scrollHeight * 0.8);
			}
			return Root.scrollHeight - bottom + options.BASE_REMAIN_HEIGHT;
		}
		function addDefaultPrefix(xpath, prefix) {
			var tokenPattern = /([A-Za-z_\u00c0-\ufffd][\w\-.\u00b7-\ufffd]*|\*)\s*(::?|\()?|(".*?"|'.*?'|\d+(?:\.\d*)?|\.(?:\.|\d+)?|[\)\]])|(\/\/?|!=|[<>]=?|[\(\[|,=+-])|([@$])/g;
			var TERM = 1, OPERATOR = 2, MODIFIER = 3;
			var tokenType = OPERATOR;
			prefix += ':';
			function replacer(token, identifier, suffix, term, operator, modifier) {
				if (suffix) {
					tokenType =
						(suffix == ':' || (suffix == '::' && (identifier == 'attribute' || identifier == 'namespace')))
						? MODIFIER : OPERATOR;
				} else if (identifier) {
					if (tokenType == OPERATOR && identifier != '*') {
						token = prefix + token;
					}
					tokenType = (tokenType == TERM) ? OPERATOR : TERM;
				} else {
					tokenType = term ? TERM : operator ? OPERATOR : MODIFIER;
				}
				return token;
			}
			return xpath.replace(tokenPattern, replacer);
		}
	}
	function initStyle(){
		var css = (function(){/*
.autopagerize_page_separator_blocks .autopagerize_link:before{
  content:"page: " attr(number);
}
.autopagerize_page_separator_blocks .autopagerize_link:hover:before{
  content:"";
}
.autopagerize_page_separator_blocks .autopagerize_link:hover:after{
  content:attr(href);
}

#AutoPatchWork-Bar{
	position:fixed !important;
	bottom:0px !important;
	left:0px !important;
	right:0px !important;
	height:0px !important;
	background:rgba(0,255,0,0) !important;
	border-top   :12px solid rgba(0, 255, 0, 0.01) !important;
	border-bottom: 1px solid rgba(0, 255, 0,    1) !important;
	-webkit-transition:all 0.3s ease-in-out;
	-o-transition:all 0.3s ease-in-out;
	transition:all 0.3s ease-in-out;
	color:rgba(0,0,0,0) !important;
	z-index:10000 !important;
}
#AutoPatchWork-Bar.off{
	border-top   : 2px solid rgba(128, 128, 128, 0.1) !important;
	border-bottom: 2px solid rgba(128, 128, 128, 0.1) !important;
	-webkit-transition:all 0.3s ease-in-out;
	-o-transition:all 0.3s ease-in-out;
	transition:all 0.3s ease-in-out;
}
#AutoPatchWork-Bar:hover{
	border-top-width:0px !important;
	height:24px !important;
	color:rgba(0,0,0,1) !important;
	background-color:rgba(222,222,222,.75) !important;
	-webkit-transition:all 0.3s ease-in-out;
	-o-transition:all 0.3s ease-in-out;
	transition:all 0.3s ease-in-out;
}
#AutoPatchWork-Bar:hover:after{
	display:block;
	text-align:center !important;
	content:"AutoPatchWork / ON" !important;
	font-size:15px !important;
}
#AutoPatchWork-Bar.loading{
	-webkit-animation-name: loading;
	-webkit-animation-duration: 1s;
	-webkit-animation-iteration-count:infinite;
	-o-animation-name: loading;
	-o-animation-duration: 1s;
	-o-animation-iteration-count:infinite;
	animation-name: loading;
	animation-duration: 1s;
	animation-iteration-count:infinite;
	background-color:rgba(0, 255, 255, 0.75) !important;
	-o-transition:all 1s ease-in-out;
}
@-webkit-keyframes loading {
	from {
		border-top-color   :rgba(0, 255, 255, 0.75);
		border-bottom-color:rgba(0, 128, 255, 0.75);
		border-top-width:1px;
		border-bottom-width:12px;
	}
	to {
		border-top-color   :rgba(0, 128, 255, 0.75);
		border-bottom-color:rgba(0, 128, 255, 0.75);
		border-top-width:12px;
		border-bottom-width:1px;
	}
}
@-o-keyframes loading {
	from {
		border-top-color   :rgba(0, 255, 255, 0.75);
		border-bottom-color:rgba(0, 128, 255, 0.75);
		border-top-width:1px;
		border-bottom-width:12px;
	}
	to {
		border-top-color   :rgba(0, 128, 255, 0.75);
		border-bottom-color:rgba(0, 128, 255, 0.75);
		border-top-width:12px;
		border-bottom-width:1px;
	}
}
@keyframes loading {
	from {
		border-top-color   :rgba(0, 255, 255, 0.75);
		border-bottom-color:rgba(0, 128, 255, 0.75);
		border-top-width:1px;
		border-bottom-width:12px;
	}
	to {
		border-top-color   :rgba(0, 128, 255, 0.75);
		border-bottom-color:rgba(0, 128, 255, 0.75);
		border-top-width:12px;
		border-bottom-width:1px;
	}
}
#AutoPatchWork-Bar.terminated{
	border-top   :12px solid rgba(255, 128, 64, .5) !important;
	border-bottom: 1px solid rgba(255, 128, 64, .5) !important;
	-webkit-transition: all 0.5s ease-in-out;
	-o-transition: all 0.5s ease-in-out;
	transition: all 0.5s ease-in-out;
}
#AutoPatchWork-Bar.error{
	border-top   :12px solid rgba(255, 0, 0, .5) !important;
	border-bottom: 1px solid rgba(255, 0, 0, .5) !important;
	-webkit-transition: all 0.5s ease-in-out;
	-o-transition: all 0.5s ease-in-out;
	transition: all 0.5s ease-in-out;
}
#AutoPatchWork-Bar.loading:hover:after{
	content:"loading..." !important;
}
#AutoPatchWork-Bar.terminated:hover:after{
	content:"terminated." !important;
}
#AutoPatchWork-Bar.error:hover:after{
	content:"error" !important;
}
#AutoPatchWork-Bar.remove{
	display:none !important;
}
#AutoPatchWork-Bar.off:hover:after{
	content:"AutoPatchWork / OFF" !important;
	color:#444 !important;
}
*/}).toString().replace(/^.*?\/\*([\s\S]+)\*\/\}/,'$1');
		var style = document.createElement('style');
		style.textContent = css;
		head.appendChild(style);
	}
})(this);
