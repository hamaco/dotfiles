// ==UserScript==
// @name swf anti maximizer
// @version 1.0.1
// @include *.swf
// ==/UserScript==

(function(){
    if( ! /\.swf$/.test(location.href) ) return; // ex) hoge.swf.html
    var embed = document.body.firstChild;

    var width  = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;

    embed.setAttribute("width",  width - 100);
    embed.setAttribute("height", height - 100);

    embed.style.marginTop = "50px";
    embed.style.marginLeft = "50px";

    // maximize on doubleclick.
    document.addEventListener("dblclick",function(){
        document.removeEventListener("dblclick",arguments.callee,false);
        embed.setAttribute("width","100%");
        embed.setAttribute("height","100%");
    },false);
})();
