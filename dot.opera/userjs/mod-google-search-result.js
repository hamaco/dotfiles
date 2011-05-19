// ==UserScript==
// @name          mod-google-search-result
// @author        mattz
// @namespace     http://mattz.xii.jp
// @license       public domain
// @description   add link to qdr=m3 and qdr=m6 on side-bar
// @published     2011-04-06
// @version       0.0.1
// @include       http://www.google.com/search?*
// @include       http://www.google.co.jp/search?*
// ==/UserScript==
(function(){
  var create_qdr = function(m) {
    var ml = document.createElement('li');
    ml.setAttribute('class', 'tbou');
    ml.id = 'qdr_m' + m;
    var a = document.createElement('a');
    a.href = location.href.replace(/[&\?](tbs|as_qdr)=[^&]*/, '') + '&as_qdr=m' + m;
    a.appendChild(document.createTextNode(m + 'か月以内'));
    ml.appendChild(a);
    return ml;
  }
  var init_qdr = function() {
    var std = document.querySelector('#qdr_m6');
    if (! std) std = document.querySelector('#qdr_y');
    if (! std) return false;
    if (! document.querySelector('#qdr_m3')) {
      std.parentNode.insertBefore(create_qdr(3), std);
    }
    if (! document.querySelector('#qdr_m6')) {
      std.parentNode.insertBefore(create_qdr(6), std);
    }
  }
  window.addEventListener('DOMContentLoaded', init_qdr, false);
})();
