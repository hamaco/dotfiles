// ==UserScript==
// @name                LDR Custom Keybinds
// @include             http://reader.livedoor.com/*
// @include             http://fastladder.com/*
// ==/UserScript==

window.addEventListener("load", function() {
	var unsafeWindow = typeof unsafeWindow != 'undefined' ? unsafeWindow : window;
	with(unsafeWindow){
		Keybind.add('v', function(){
			var item = get_active_item(true);
			if (!item) return;
			window.open(item.link, "_blank").blur();
		})
	}
},false);
