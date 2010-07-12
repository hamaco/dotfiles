// ==UserScript==
// @name            AutoPagerizeSITEINFOLoader.js
// @author          edvakf
// @namespace       http://d.hatena.ne.jp/edvakf/
// @description     Help loading AutoPagerize SITEINFO
// @license         The MIT License
// @version         0.2
// @include         *
// @released        2010-06-06
// @updated         2010-06-06
// @compatible      Opera
// ==/UserScript==

(function() {
  var debug = false;
  function log(msg) {if (debug) console.log(msg); return msg;}

  var iframeSrc = 'http://0.0.0.0/AutoPagerizeSITEINFOLoader';

  if (location.href === iframeSrc) {
    var pf = 'AutoPagerize_SITEINFO_'; // prefix for each key of localStorage
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
        }
        return results.concat(microformats);
      }
    }

  } else if (window.self === window.top) {

    opera.addEventListener('BeforeEvent.DOMContentLoaded', function() {
      var f = document.createElement('iframe');
      f.src = iframeSrc;
      f.style = 'position:absolute; top:0; left:0; height:1px; width:1px; border:none; visibility: hidden;';
      document.body.appendChild(f);

      opera.addEventListener('BeforeEvent.message', function (ujsevent) {
        var e = ujsevent.event;
        if (!(e.origin === 'http://0.0.0.0' 
            && e.data 
            && e.data.message === 'connect' 
            && e.data.src === iframeSrc 
            && e.ports)) return;
        ujsevent.preventDefault();

        var port = e.ports[0];
        port.postMessage({message: 'connected', url: location.href});
        port.onmessage = function(e) {
          var message = e.data.message;
          if (message === 'found') {
            // launch autopager
            log('found');
            var ev = document.createEvent('Event');
            ev.initEvent('AutoPagerize_SiteinfoLoaded', true, false);
            ev.SITEINFO = e.data.siteinfo;
            document.dispatchEvent(ev);
          }
          if (message === 'disconnect') {
            log('disconnect');
            f.parentNode.removeChild(f);
            port = port.onmessage = null; // cut reference
          }
        }
      }, false);
    }, false);

  }
}());
