// ==UserScript==
// @name           Hatebu_Commentator
// @version        0.04
// @namespace      http://d.hatena.ne.jp/takuma104/
// @description    Display Hatena-bookmark comments as Hatena-diary comments 
// @include        http://d.hatena.ne.jp/*
// ==/UserScript==

// Based on ldrhatebucomments.user.js
// http://userjs.seesaa.net/article/24057562.html
(function () {
	
	// -------------------- $X by cho45--------------------
	// http://lowreal.net/blog/2007/11/17/
	// $X(exp);
	// $X(exp, context);
	// $X(exp, type);
	// $X(exp, context, type);
	function $X (exp, context, type /* want type */) {
	    if (typeof context == "function") {
	        type    = context;
	        context = null;
	    }
	    if (!context) context = document;
	    var exp = (context.ownerDocument || context).createExpression(exp, function (prefix) {
	        var o = document.createNSResolver(context).lookupNamespaceURI(prefix);
	        if (o) return o;
	        return (document.contentType == "application/xhtml+xml") ? "http://www.w3.org/1999/xhtml" : "";
	    });

	    switch (type) {
	        case String:
	            return exp.evaluate(
	                context,
	                XPathResult.STRING_TYPE,
	                null
	            ).stringValue;
	        case Number:
	            return exp.evaluate(
	                context,
	                XPathResult.NUMBER_TYPE,
	                null
	            ).numberValue;
	        case Boolean:
	            return exp.evaluate(
	                context,
	                XPathResult.BOOLEAN_TYPE,
	                null
	            ).booleanValue;
	        case Array:
	            var result = exp.evaluate(
	                context,
	                XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
	                null
	            );
	            var ret = [];
	            for (var i = 0, len = result.snapshotLength; i < len; i++) {
	                ret.push(result.snapshotItem(i));
	            }
	            return ret;
	        case undefined:
	            var result = exp.evaluate(context, XPathResult.ANY_TYPE, null);
	            switch (result.resultType) {
	                case XPathResult.STRING_TYPE : return result.stringValue;
	                case XPathResult.NUMBER_TYPE : return result.numberValue;
	                case XPathResult.BOOLEAN_TYPE: return result.booleanValue;
	                case XPathResult.UNORDERED_NODE_ITERATOR_TYPE: {
	                    // not ensure the order.
	                    var ret = [];
	                    var i = null;
	                    while (i = result.iterateNext()) {
	                        ret.push(i);
	                    }
	                    return ret;
	                }
	            }
	            return null;
	        default:
	            throw(TypeError("$X: specified type is not valid type."));
	    }
	}
	// -------------------- $X by cho45--------------------
	
	
	var jsonapiurl = "http://b.hatena.ne.jp/entry/json/";
	
	var w;

	try {
		w = unsafeWindow;
	} catch(e) {
		w = window;   // for Opera
	}
	
	with (w) {
		var comments_root = null;
		var comments = [];
		
		function getComment(link) {
			if (link) {
				var url = jsonapiurl + '?url=' + escape(link) + '&callback=appendComment';
				var jsonp = document.createElement('script');
				jsonp.src = url;
				jsonp.onload = function() {
					// loaded
					document.body.removeChild(jsonp);
				};
				// loading...
				document.body.appendChild(jsonp);
			}
		}
		
		w.appendComment = function(json) {
			if (!json) return;

			var bm = json.bookmarks;
			var len = bm.length;
			var c_len = comments.length;

			for (var i = len-1; i >= 0; i--) {
				var user = bm[i];
				if (user.comment) {
					var p = document.createElement('p');
					p.setAttribute("class", "hatebu-comment");
					var name = user.user;
					var date = getDate(user.timestamp);
					var timestamp = getTimestamp(user.timestamp);
					var bookmark_time = getBookmarkTime(user.timestamp);
					p.innerHTML = '<span class="commentator"><img src="http://www.hatena.ne.jp/users/' + name.substring(0,2) + '/' + name + '/profile_s.gif">'
						+ ' <a href="http://b.hatena.ne.jp/' + name + '/">' + name + '</a></span>'
						+ '<span class="timestamp"><a href="http://b.hatena.ne.jp/' + name + '/' + date + '#bookmark-' + json.eid + '">' + bookmark_time + '</a></span>'
						+ '<span class="commentbody">' + user.comment + '</span>';
					
					var added = false;
					for (var t = 0; t < c_len; t++) {
						if (comments[t][0] > timestamp) {
							comments_root.insertBefore(p, comments[t][1]);
							added = true;
							break;
						}
					}

					if (!added) {
						var last_p = $X('p[@class="commentform" or @class="commentmessage"]', comments_root)[0];
						if (last_p){
							comments_root.insertBefore(p, last_p);
						}
						else {
							comments_root.appendChild(p);
						}
					}
				}
				
			}
		};
	
		comments_root = $X('//div[@class="commentshort"]')[0];
		if (comments_root) {
			comments = getCommentTimestamps(comments_root);
			getComment(getUrl());
		} else {
			comments_root = $X('//div[@class="comment"]')[0];
			if (comments_root) {
				var cs = document.createElement('div');
				cs.setAttribute("class", "commentshort");
				comments_root = comments_root.appendChild(cs);
				getComment(getUrl());
			}
		}
	}
	
	function getUrl() {
		var url = window.location.href;
		var m = url.match(/^http:\/\/d.hatena.ne.jp\/.+?\/\d+(\/[p\d]+)?/);
		if (m) {
			return m[0];
		}
		return null;
	}
		
	function getCommentTimestamps(comments_root) {
		var ret = [];
		var timestamp_a = $X('p/span[@class="timestamp"]/a',comments_root);
		var len = timestamp_a.length;
		for (var i = 0; i < len; i++) {
			var a = timestamp_a[i];
			var c_time = a.getAttribute('name');
			var time = parseInt(c_time.match(/^c(\d+)$/)[1]);
			var p = a.parentNode.parentNode;
			ret.push([time,p]);
		}
		return ret;
	}
	
	function getTimestamp(d) {
		var date = new Date(d);
		return date.getTime() / 1000;
	}
	
	function getDate(d) {
		var date = new Date(d);
		var y = date.getFullYear();
		var m = date.getMonth() + 1;
		var d = date.getDate();
		if (m < 10) m = "0" + m;
		if (d < 10) d = "0" + d;
		return y + m + d;
	}

	function getBookmarkTime(d) {
		return d.substring(0,16);
	}

})();
