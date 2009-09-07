// ==UserScript==
// @name fastladder - prevent overscroll
// @description prevent overscroll on Opera.
// @author miya2000
// @namespace http://d.hatena.ne.jp/miya2000/
// @version 1.0.0
// @include http://fastladder.com/reader/
// @include http://reader.livedoor.com/reader/
// ==/UserScript==
(function(){
    var expFeedContainer  = document.createExpression('ancestor-or-self::*[@id="subs_container"]', null);
    var expEntryContainer = document.createExpression('ancestor-or-self::*[@id="right_container"]', null);
    window.addEventListener('mousewheel', function(e) {
        var container = expFeedContainer.evaluate(e.target, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
                     || expEntryContainer.evaluate(e.target, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (!container) {
            e.preventDefault();
            return;
        }
        if (e.detail > 0 && container.scrollTop == container.scrollHeight - container.offsetHeight) {
            e.preventDefault();
        }
    }, false);
})()

