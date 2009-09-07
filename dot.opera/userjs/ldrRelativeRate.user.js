// ==UserScript==
// @name           ldr_relative_rate
// @namespace      http://d.hatena.ne.jp/kusigahama/
// @include        http://reader.livedoor.com/reader/*
// @include        http://fastladder.com/reader/*
// ==/UserScript==

window.addEventListener("load", function() {
	function get_rate() {
		return parseInt(document.getElementById('rate_img').src.replace(/^.*(\d)\.gif$/, '$1'), 10);
	}

	var w = (typeof unsafeWindow == 'undefined') ? window : unsafeWindow;
	w.Keybind.add('w', function(){ w.vi[get_rate()+1](); });
	w.Keybind.add('q', function(){
		var rate = get_rate();
		if (rate === 0) {
			w.Control.unsubscribe();
		} else {
			w.vi[rate-1]();
		}
	});
}, false);
