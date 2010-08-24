// ==UserScript==
// @name           Colorful Favstar.fm
// @namespace      http://moco.nond.es/
// @description    Change tweet color and font size by favourites count like Favotter.net.
// @version        0.1.1.20100808
// @include        http://favstar.fm/*
// @include        http://ja.favstar.fm/*
// @include        http://de.favstar.fm/*
// ==/UserScript==
(function (_d) {
  function init(){
    var css = [
      '.theTweet {'
        ,'line-height: 1.4;'
        ,'color: #333;'
      ,'}'
      ,'.theTweet a {'
        ,'color: #1a75d2;'
      ,'}'
      ,'.cofav2 {'
        ,'font-weight: bold;'
        ,'color: #008e00;'
      ,'}'
      ,'.cofav3 {'
        ,'font-weight: bold;'
        ,'color: #5f008f;'
      ,'}'
      ,'.cofav4 {'
        ,'font-weight: bold;'
        ,'color: #5f008f;'
      ,'}'
      ,'.cofav5 {'
        ,'line-height: 1.3;'
        ,'font-weight: bold;'
        ,'color: #f40000;'
      ,'}'
    ].join('');

    var style = _d.createElement('style');
    style.type = 'text/css';
    style.appendChild(_d.createTextNode(css));
    _d.getElementsByTagName('head')[0].appendChild(style);
    
    var favCounts = _d.getElementsByClassName('favouritesCount');
    for (var i=favCounts.length; i-- > 0; ){
      var fav = parseInt(favCounts[i].innerHTML, 10);
      var parent = favCounts[i].parentNode.parentNode;
      if (!isNaN(fav) && fav >= 1) {
        setColorfulClass(fav, parent);
      }
    }
  }
  
  function setColorfulClass (favCount, node) {
    if (node.className !== 'tweetContainer') {return;}
    var tweet = node.getElementsByClassName('theTweet');
    if (favCount <= 4) {
      tweet[0].className += ' cofav'+favCount;
    } else if (favCount >= 5) {
      tweet[0].className += ' cofav5';
    }
  }
  
  _d.addEventListener('DOMContentLoaded', function(){ init(); }, false );
})(document);
