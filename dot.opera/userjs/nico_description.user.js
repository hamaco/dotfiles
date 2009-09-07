// ==UserScript==
// @name      nico description
// @namespace http://looxu.blogspot.com/
// @include   http://www.nicovideo.jp/watch/*
// @author    Arc Cosine
// @version   1.3
// ==/UserScript==
(function(){
    /** simple version of $X
     * $X(exp);
     * $X(exp, context);
     * @source http://gist.github.com/3242.txt
     */
    var $X = function (exp, context) {
      context || (context = document);
      var expr = (context.ownerDocument || context).createExpression(exp, function (prefix) {
        return document.createNSResolver(context.documentElement || context).lookupNamespaceURI(prefix) ||
          context.namespaceURI || document.documentElement.namespaceURI || "";
      });
     
      var result = expr.evaluate(context, XPathResult.ANY_TYPE, null);
        switch (result.resultType) {
          case XPathResult.STRING_TYPE : return result.stringValue;
          case XPathResult.NUMBER_TYPE : return result.numberValue;
          case XPathResult.BOOLEAN_TYPE: return result.booleanValue;
          case XPathResult.UNORDERED_NODE_ITERATOR_TYPE:
            // not ensure the order.
            var ret = [], i = null;
            while (i = result.iterateNext()) ret.push(i);
            return ret;
        }
      return null;
    }

    //無駄なオブジェクト指向www
    var NDesc = function(){
        this.init();
    }

    NDesc.prototype.init = function(){
        this.description_toggle();
        this.advert_toggle();

        //add key event
        document.addEventListener( 'keypress', this.key_event, false );
    }

    NDesc.prototype.toggleObject = function(xpath){
        var t= $X(xpath)[0];
        t.style.display = ( t.style.display == 'none' ) ? 'block' : 'none';
    }

    NDesc.prototype.description_toggle = function(){
        this.toggleObject('//p[@class="video_description"]');
    }

    NDesc.prototype.advert_toggle = function(){
        this.toggleObject('//div[@id="WATCHFOOTER"]');
        this.toggleObject('//div[@id="PAGEFOOTER"]');
    }


    NDesc.prototype.popup = function() {
        // For eyevio
        var normalized_url = location.href;
        var url = "http://mitter.jp/bookmarklet/popup", v = "0";
        url += '?v=' + v + '&url=' + encodeURIComponent(normalized_url) + '&title=' + encodeURIComponent(document.title);
        var options = 'toolbar=0,resizable=1,scrollbars=1,status=1,width=450,height=430';
        var open_func = function() {
            var w = window.open(url, 'mitter', options);
            if (!w) {
                alert('Popup window from Mitter seems to be blocked. Please allow popup window to post on Mitter.');
            } else {
                w.focus();
            }
        };
        open_func();
    }

    NDesc.prototype.togglePlay = function() {
        var player = this._getplayer();

        (player.ext_getStatus() !== "playing")
            ? player.ext_play(true)
            : player.ext_play(false);
    }

    NDesc.prototype._getplayer = function() {
        var flvplayer = document.getElementById("flvplayer");
        if (!flvplayer) throw new Error("flvplayer is not found");

        return flvplayer.wrappedJSObject || flvplayer;
    }


    NDesc.prototype.key_event = function(e){
        var handler = {
            'o' : function(){ NDesc.prototype.description_toggle(); },
            'm' : function(){ NDesc.prototype.popup(); },
            'a' : function(){ NDesc.prototype.advert_toggle(); },
            'p' : function(){ NDesc.prototype.togglePlay(); }
        };
        var t = e.target;
        if( t.nodeType == 1 ){
           var tn = t.tagName.toLowerCase();
           if( tn == 'input' || tn == 'textarea' ){
               return;
           }
           var pressKey = String.fromCharCode(e.which);
           if( typeof handler[pressKey] == "function" ){
               e.preventDefault();    //Stop Default Event
               handler[pressKey].apply();
           }
        }
    }

    var o = new NDesc();
})();
