// ==UserScript==
// @name           LDR Ad-Entry Blocker
// @namespace  http://endflow.net/
// @description  Block advertisement entries such as "AD: ...", "PR: ..." on LDR and fLDR.
// @include        http://reader.livedoor.com/reader/
// @include        http://fastladder.com/reader/
// ==/UserScript==
// @author         Yuki KODAMA {twitter: kuy, skype: netkuy}
// @version        0.1.4 [2008-06-19]
// @history        [2007-11-05] 0.1.0 first version
//                 [2007-11-20] 0.1.1 cleaned
//                 [2007-12-07] 0.1.2 added option: skip ad-entry
//                 [2008-02-01] 0.1.3 supported Opera
//                 [2008-06-19] 0.1.4 supported fLDR

(function(){
/////////////// configurations ////////////////
var cfg = {
    // judgement patterns of entry title
    patterns: [/^[\s【]*(AD|PR|ＡＤ|ＰＲ)[\s】]*[:：]/i],
    // advertisement entries style (apply this style to title link <a>)
    style: {
        color: '#aaa',
        fontSize: '12px'
    },
    // apply interval
    interval: 1000,
    // skip ad-entry
    skip: true
}
///////////////////////////////////////////////
var w = this.unsafeWindow || window;
w.addEventListener('load', function(){with(w){
    register_hook('AFTER_PRINTFEED', function() {
        var hist = [];
        var isComp = function(){
            var len = hist.length;
            if(len < 3) return false;
            return hist[len - 1] == hist[len - 2] && hist[len - 2] == hist[len - 3];
        }
        var blocker = function(){
            var titles = $x('//h2[@class="item_title"]/a');
            hist.push(titles.length);
            titles.each(function(title){
                cfg.patterns.each(function(rx){
                    if((new RegExp(rx)).test(title.innerHTML)){
                        setStyle(title, cfg.style);
                        addClass(title.parentNode, 'blocked');
                        var childs = title.parentNode.parentNode.parentNode.childNodes;
                        for(var i = 0; i < childs.length; i++){
                            var e = childs[i];
                            if(e.nodeType !== 1 || hasClass(e, 'item_header')) continue;
                            DOM.hide(e);
                        }
                        return false;
                    }
                }, this);
            }, this);
            isComp() || setTimeout(blocker, cfg.interval);
        }
        setTimeout(blocker, cfg.interval);
    });
    if(cfg.skip){
        var j_func = Keybind._keyfunc['j'];
        Keybind.add('j|enter', function(){
            j_func();
            var info = get_active_item(true);
            hasClass(info.element, 'blocked') && j_func();
        });
        var k_func = Keybind._keyfunc['k'];
        Keybind.add('k|shift+enter', function(){
            k_func();
            var info = get_active_item(true);
            hasClass(info.element, 'blocked') && k_func();
        });
    }
}}, false);
// Array.each
Array.prototype.each = function(callback, _this){
    for(var i = 0, len = this.length; i < len; i++){
        if(callback.call(_this, this[i], i, this.length) === false) break;
    }
};
// XPath util compressed version (original written by cho45 [http://lowreal.net/logs/2006/03/16/1])
function $x(b,c){if(!c)c=document;var d=function(a){var o=document.createNSResolver(c)(a);
return o?o:(document.contentType=="text/html")?"":"http://www.w3.org/1999/xhtml"}
var b=document.createExpression(b,d);var e=b.evaluate(c,XPathResult.ANY_TYPE,null);
switch(e.resultType){case XPathResult.STRING_TYPE:return e.stringValue;
case XPathResult.NUMBER_TYPE:return e.numberValue;case XPathResult.BOOLEAN_TYPE:return e.booleanValue;
case XPathResult.UNORDERED_NODE_ITERATOR_TYPE:{e=b.evaluate(c,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var f=[];for(var i=0,len=e.snapshotLength;i<len;i++){f.push(e.snapshotItem(i))}return f}}return null}
})();
