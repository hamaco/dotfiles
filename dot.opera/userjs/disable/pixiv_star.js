// ==UserScript==
// @name      pixiv star
// @namespace http://looxu.blogspot.com/
// @include   http://www.pixiv.net/member_illust*
// @author    Arc Cosine
// @version   2.0
// ==/UserScript==
// License    Public Domain
(function(){
  var PIXIV = {
    hover_size : 26,
    my_rate : 0,
    mode : false,
    handler : {
      'h' : function(){ PIXIV.rateChange(-1); },
      'l' : function(){ PIXIV.rateChange(1); },
      'Left' : function(){ PIXIV.rateChange(-1); },
      'Right' : function(){ PIXIV.rateChange(1); },
      'm' : function(){ PIXIV.rateSend(); },
      'b' : function(){ PIXIV.bookMark(); },
      'q' : function(){ PIXIV.moveLink(0); },
      'w' : function(){ PIXIV.moveLink(1); },
      'o' : function(){ PIXIV.addWatch(); },
      'j' : function(){ PIXIV.comicScroll(1); },
      'k' : function(){ PIXIV.comicScroll(-1); },
      'Down' : function(){ PIXIV.comicScroll(1); },
      'Up' : function(){ PIXIV.comicScroll(-1); },
      'i' : function(){ PIXIV.modeChange(); }
    },
    specialKey : {
      '13' : 'Ent',
      '37' : 'Left',
      '38' : 'Up',
      '39' : 'Right',
      '40' : 'Down'
    },
    init : function(){
      var handle = (window.opera) ? 'keypress' : 'keydown';
      window.addEventListener( handle, function(e){ PIXIV.addKeyBind(e) },false );

      var modeBox = document.createElement('div');
      modeBox.id = 'modeBox';
      modeBox.style.position = 'fixed';
      modeBox.style.height = '32px';
      modeBox.style.width= '32px';
      modeBox.style.top = '8px';
      modeBox.style.right = '16px';
      modeBox.style.background = '#880000';

      document.body.appendChild(modeBox);

      var searchClass = document.querySelectorAll('.ahref_type05');
      if( searchClass.length > 0 ){
        var tarBtn = document.querySelectorAll('.works_iconsBlock ul')[0];
        if( tarBtn ){
          var registLi = document.createElement('li');
          var registLink = registLi.appendChild(document.createElement('span'));
          registLink.addEventListener('click', function(){ PIXIV.bookMark(); }, false );
          registLink.innerHTML = '一発ブクマ';
          registLink.className = 'ahref_type05';
          registLink.style.cursor = 'pointer';
          registLink.style.color = '#007ff8';

          tarBtn.appendChild(registLi);
        }
      }

      searchClass = document.querySelectorAll('.person_menu');
      if( searchClass.length > 0 ){
        var fav = document.getElementById('favoriteUserButton');
        if( fav.title.indexOf('お気に入りです') < 0 ){
          var profRegistLi = document.createElement('li');
          var registLink = profRegistLi.appendChild(document.createElement('span'));
          registLink.addEventListener('click', function(){ PIXIV.addWatch(); }, false );
          registLink.innerHTML = 'お気に入りに一発追加';
          registLink.style.padding = '6px 0px 0px 0px';
          registLink.style.width = '190px';
          registLink.style.height = '23px';
          registLink.style.display = 'block';
          registLink.style.cursor = 'pointer';
          registLink.style.color = '#007ff8';

          searchClass[0].insertBefore( profRegistLi, searchClass[0].childNodes[2] );
        }

      }

      if( location.href.indexOf('mode=manga') > -1 ){  PIXIV.modeChange(); }
    },
    addKeyBind : function( eve ){
      var t=eve.target;
      var n=t.tagName.toLowerCase();
      if( t.nodeType != 1 || n == 'input' || n == 'textarea' ){
        return;
      }
      var pressKey = (eve.which || eve.keyCode);
      var keyChar = (eve.ctrlKey?'C-':'') + (eve.altKey?'A-':'') + (eve.shiftKey?'S-':'') + ((typeof PIXIV.specialKey[pressKey] == 'undefined' )?String.fromCharCode(pressKey).toLowerCase():PIXIV.specialKey[pressKey]);
      if( typeof PIXIV.handler[keyChar] == 'function' ){
        if( /(j|k|Down|Up)/.test(keyChar) && !PIXIV.mode ) return;
        eve.preventDefault();    //Stop Default Event 
        PIXIV.handler[keyChar].apply();
      }
    },
    rateChange : function(num){
      PIXIV['my_rate'] += num;
      if( PIXIV['my_rate'] < 0  ) { PIXIV['my_rate'] =  0 };
      if( PIXIV['my_rate'] > 10 ) { PIXIV['my_rate'] = 10 };
      var chk = document.getElementsByClassName('r1-unit')[0];
      if( chk.tagName.toLowerCase() == 'li' ){
        return;
      }
      for( var i=1; i<11; i++ ){  //It's bad roop code ...;-)
        var rate_star = document.getElementsByClassName('r'+i+'-unit')[0];
        if( i <= PIXIV['my_rate'] ){
          rate_star.style.background = "url('http://source.pixiv.net/source/images/rating.png') left center";
          rate_star.style.zIndex = 2;
          rate_star.style.width = (PIXIV['hover_size']) + 'px'
        }else{
          rate_star.style.background = "url('http://source.pixiv.net/source/images/rating.png') left top";
          rate_star.style.zIndex = 1;
        }
      }
    },
    rateSend : function(){
      var w = (typeof unsafeWindow != 'undefined' ) ? unsafeWindow : window;
      w.send_rating(PIXIV['my_rate']);  //pixiv api
    },
    bookMark : function(){
      var illust_id= document.getElementById('rpc_i_id').textContent;
      var tt = document.getElementsByName('tt')[0].value;
      var url = 'bookmark_add.php';
      var params = 'mode=add&type=illust&id=' + illust_id + '&tt=' + tt;

      var req = 'http://www.pixiv.net/' + url;
      var xhr = new XMLHttpRequest();
      xhr.open('POST',req, true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onreadystatechange = function(){
        if( xhr.readyState == 4 && xhr.status == 200 ){
          location.reload();
        }
      }

      var loadingDiv = document.createElement('div');
      loadingDiv.style.position = 'fixed';
      loadingDiv.style.width = '640px';
      loadingDiv.style.height = '480px';
      loadingDiv.style.margin = '-320px 0px 0px -240px';
      loadingDiv.style.opacity = '0.5';
      loadingDiv.style.fontSize = '48px';
      loadingDiv.style.textAlign = 'center';
      loadingDiv.style.background = '#000000';
      loadingDiv.style.color = '#ffffff';
      loadingDiv.style.borderRadius = '1em';
      loadingDiv.style.MozBorderRadius = '1em';
      loadingDiv.style.top = '50%';
      loadingDiv.style.left= '50%';
      loadingDiv.style.lineHeight = '480px';
      loadingDiv.innerHTML ='ブックマークに追加中……';
      loadingDiv.style.zIndex = '999';

      document.body.appendChild(loadingDiv);

      xhr.send(params);

    },
    addWatch : function(){
      var f = document.querySelectorAll('.profile_edit form');
      if( f[0] ){
        var iframe = document.createElement('iframe');
        iframe.name = 'pixiv_star_work';
        document.body.appendChild(iframe);
        f[0].target = 'pixiv_star_work';
        f[0].submit();

        iframe.addEventListener('load',function(){
          location.reload();
        },false )
      }
      /*var user_id= document.getElementById('rpc_u_id').textContent;
      var url = 'bookmark_add.php';
      var params = 'type=user&id=' + user_id;

      PIXIV.createRequest( url, params, 'お気に入り' );*/
    },
    /*createRequest : function(url,params,msg){

      var iframe = document.createElement('iframe');
      iframe.src = url + '?' + params;
      iframe.style.display = 'none';

      document.body.appendChild(iframe);

      var loadingDiv = document.createElement('div');
      loadingDiv.style.position = 'fixed';
      loadingDiv.style.width = '640px';
      loadingDiv.style.height = '480px';
      loadingDiv.style.margin = '-320px 0px 0px -240px';
      loadingDiv.style.opacity = '0.5';
      loadingDiv.style.fontSize = '48px';
      loadingDiv.style.textAlign = 'center';
      loadingDiv.style.background = '#000000';
      loadingDiv.style.color = '#ffffff';
      loadingDiv.style.borderRadius = '1em';
      loadingDiv.style.MozBorderRadius = '1em';
      loadingDiv.style.top = '50%';
      loadingDiv.style.left= '50%';
      loadingDiv.style.lineHeight = '480px';
      loadingDiv.innerHTML = msg + 'に追加中……';
      loadingDiv.style.zIndex = '999';

      document.body.appendChild(loadingDiv);

      var cnt=0;
      iframe.addEventListener( 'load', function(){ 
        if( cnt++ == 0 ){
          var ifDocumet = iframe.contentDocument;
          var forms = ifDocumet.getElementsByTagName('form');
          for( var i=0; i<forms.length; i++ ){
            var action = forms[i].action.replace(/http:\/\/www.pixiv.net\//,'');
            if( action == url ){
              var evt = document.createEvent( "MouseEvents" );
              evt.initEvent( "click", false, true );
              var inputBox = forms[i].getElementsByTagName('input');
              var elem;
              for( var j=0;j<inputBox.length; j++ ){
                if( inputBox[j].type == 'submit' ){
                  elem = inputBox[j];
                  break;
                }
              }
              elem.dispatchEvent( evt );
              break;
            }
          }
        }else{
          location.reload();
        }
      }, false );

    },*/
    moveLink : function(pos){
      var aLink= document.querySelectorAll('div.centeredNavi ul li.linkstyle a');
      var navLink = [];
      for( var i=0, l=aLink.length; i<l; i++ ){
        if( aLink[i].href.match(/member_illust.php\?mode=medium\&illust_id=[^#]*$/) ){
          navLink.push(aLink[i].href);
        }
      }
      if( navLink.length > 1 ){
        location.href = navLink[pos];
      }else{
        if( typeof navLink[0] != 'undefined' ){
          location.href = navLink[0];
        }
      }
    },
    comicScroll : function(n){
      var loc = location.href; 
      if( loc.indexOf('mode=manga') > -1 ){
        var p_num = loc.match(/page(\d+)/);
        if( !p_num ){
          location.href = loc+'#page1';
        }else{
          var page = parseInt(p_num[1])+n;
          if( page < 0 ) page = 0;
          if( !document.getElementById('page'+page) ){ page -= 1; }
          location.href = loc.replace(/#page\d+/,'') + '#page'+page;
        }
      }
    },
    modeChange : function(){
      PIXIV.mode = !PIXIV.mode;
      document.getElementById('modeBox').style.background = (PIXIV.mode)?'#008800':'#880000';
    }
  };


  document.addEventListener('DOMContentLoaded',function(){
    PIXIV.init();
  },false );

})();