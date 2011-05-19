// ==UserScript==
// @name         Faviconize Google (nested icons)
// @namespace    http://userscripts.ru/js/faviconize-google/
// @description  Adds favicons to each link offered by Google search results.
// @include      http://www.google.*/search?*
// @include      https://encrypted.google.*/search?*
// @include      http://www.google.*/webhp*
// @include      http://www.google.*/#*
// @include      http://groups.google.*/groups/search?* 
// @copyright    2009+, Nikita Vasilyev (http://userscripts.org/scripts/show/58177)
// @version      1.9
// @licence      Apache 2.0
// @icon         http://nv.github.com/faviconize-google.js/chrome/icon_48.png
// ==/UserScript==


(function(){

	(typeof GM_addStyle != 'undefined' ? GM_addStyle : function addStyle(css) {
		var head = document.getElementsByTagName('head')[0];
		var style = document.createElement("style");
		style.type = "text/css";
		style.appendChild(document.createTextNode(css));
		head.appendChild(style);
	})(".favicon {\
	padding-right: 20px;\
	vertical-align: middle;\
	border: none;\
}\
.f .favicon {\
	left: 0;\
	position: absolute;\
	left: 0px;\
	bottom: 6px;\
	z-index: 9;\
}\
");

	var FAVICON_GRABBER = 'http://www.google.com/s2/favicons?domain='; // 'http://favicon.yandex.net/favicon/'
var QUERY = '#res li.g h3 a, #res > div.g > a';

/**
 * @param {NodeList} links
 */
function add_favicons_to(links) {
	for (var i=0; i<links.length; i++) {
		if (links[i].firstChild.className != 'favicon') {
			var host = links[i].href.replace(/.*https?:\/\//, '').replace(/\/.*$/,'');
			var img = document.createElement('IMG');
			img.src = FAVICON_GRABBER + host;
			img.width = '16';
			img.height = '16';
			img.className = 'favicon';
			links[i].insertBefore(img, links[i].firstChild);
		}
	}
}

add_favicons_to(document.querySelectorAll(QUERY));

/**
 * Debounce function from http://code.google.com/p/jquery-debounce/
 */
function debounce(fn, timeout, invokeAsap, context) {
	if (arguments.length == 3 && typeof invokeAsap != 'boolean') {
		context = invokeAsap;
		invokeAsap = false;
	}
	var timer;
	return function() {
		var args = arguments;
		if(invokeAsap && !timer) {
			fn.apply(context, args);
		}
		clearTimeout(timer);
		timer = setTimeout(function() {
			if(!invokeAsap) {
				fn.apply(context, args);
			}
			timer = null;
		}, timeout);
	};
}

document.body.addEventListener('DOMNodeInserted', debounce(function handleNewFavicons(event){
		if (event.target.className != 'favicon') {
			add_favicons_to(document.querySelectorAll(QUERY));
		}
	}, 500)
, false);

})();
