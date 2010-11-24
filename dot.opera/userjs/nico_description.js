// ==UserScript==
// @name      nico description
// @namespace http://looxu.blogspot.com/
// @include   http://www.nicovideo.jp/watch/*
// @author    Arc Cosine
// @version   3.0
// ==/UserScript==
(function(){

    var NDesc = {
      com_style : {
        'color' : '#1259C7',
        'text-decoration' : 'underline',
        'padding-left' : '5px',
        'cursor' : 'pointer'
      },
      options : [
        { 'text' : '広告表示',  'func' : function(){ NDesc.ad_toggle(); } },
        { 'text' : 'Video詳細', 'func' : function(){ NDesc.description_toggle(); } }
      ],
      init : function(){
          //add Input Box
          NDesc.createInput();

          //hide parts
          NDesc.description_toggle();
          NDesc.ad_toggle();

          //add focus key event
          document.addEventListener( 'keypress', function(e){
            if( e.target.tagName != 'INPUT' && e.keyCode == 32 ){
              NDesc.use_hotkey();
              e.preventDefault();
            }
          },false );


          for( var i=NDesc.options.length; i-- > 0; ){
            NDesc.createParts(NDesc.options[i]);
          }
        },
        createParts : function( data ) {
          var insert_node1 = document.querySelector('div.des_1 p.font12');
          var insert_node2 = document.querySelector('div.des_2 p.font12');
          var node = document.createElement('span');
          node.appendChild(document.createTextNode(data.text));
          for( var option in NDesc.com_style ){
            var st_op = option.replace(/-([a-z])/,function(m){ return m[1].toUpperCase();});
            node.style[st_op] = NDesc.com_style[option];
          }
          node.addEventListener( 'click', function(){ data['func'].apply(); } ,false );
          var node2 = node.cloneNode(true);
          node2.addEventListener( 'click', function(){ data['func'].apply(); } ,false );
          insert_node1.appendChild(node);
          insert_node2.appendChild(node2);
        },

        toggleObject : function( selector ){
            var target = document.querySelector(selector);
            if( target ){
              target.style.display = (target.style.display == 'none' ) ? '' : 'none';
            }
        },

        description_toggle : function() {
            NDesc.toggleObject('div.info_frm');
            NDesc.toggleObject('div.des_2 table');
        },
        ad_toggle : function() {
            NDesc.toggleObject('#WATCHFOOTER');
            NDesc.toggleObject('#PAGEFOOTER');
        },
        createInput : function(){
            if( window.parent != window ) return;
            var input_work = document.createElement('input');
            input_work.readOnly = true;
            input_work.autocomplete = 'off';
            input_work.style.margin = '0px 0px 5px 10px';
            input_work.addEventListener('focus', function(){
              input_work.style.backgroundColor = '#fcc';
              input_work.value = 'Hotkey available';
            },false );
            input_work.addEventListener('blur',function(){
              input_work.style.backgroundColor = '#9D9';
              input_work.value = 'Hotkey unavailable';
            },false );
            input_work.addEventListener('keypress', NDesc.key_event, false );

            var video_title = document.querySelector('.video_title');
            video_title.parentNode.insertBefore( input_work, video_title.nextSibling );
            NDesc.input = input_work;
        },

        use_hotkey : function(){
          NDesc.input.focus();
        },

        play_pause : function(){
          var flvplayer = document.getElementById('flvplayer');
          if( !flvplayer ) return;
          if( flvplayer.ext_getStatus() == 'playing' ){
            flvplayer.ext_play(0);
          }else{
            flvplayer.ext_play(1);
          }
        },

        volumeup : function(){
          NDesc.volume(5);
        },
        volumedown : function(){
          NDesc.volume(-5);
        },
        seekleft : function(){
          NDesc.seek(-10);
        },
        seekright : function(){
          NDesc.seek(10);
        },
        seek2top : function(){
          NDesc.seek(Number.NEGATIVE_INFINITY);
        },
        volume : function(vol){
          var flvplayer = document.getElementById('flvplayer');
          if (!flvplayer) return;
          var cur = Number(flvplayer.ext_getVolume());
          var to = cur + Number(vol);
          if (to > 100) to = 100;
          if (to < 0  ) to = 0;
          flvplayer.ext_setVolume(to);
        },
        seek : function(time) {
          var flvplayer = document.getElementById('flvplayer');
          if (!flvplayer) return;
          var len = Number(flvplayer.ext_getTotalTime());
          var cur = Number(flvplayer.ext_getPlayheadTime());
          var to = cur + Number(time);
          if (to > len) to = len;
          if (to < 0  ) to = 0;
          flvplayer.ext_setPlayheadTime(to);
          // for shotage of backward seek.
          var cur = Number(flvplayer.ext_getPlayheadTime());
          if (time < 0 && cur - to > 5 && to > 10) {
              flvplayer.ext_setPlayheadTime(to - 10);
          }
        },
        key_event : function(e) {
          var handler = {
            'o' : function(){ NDesc.description_toggle(); },
            'a' : function(){ NDesc.ad_toggle(); },
            ' ' : function(){ NDesc.play_pause();  },
            'k' : function(){ NDesc.volumeup(); },
            'j' : function(){ NDesc.volumedown(); },
            'h' : function(){ NDesc.seekleft(); },
            'l' : function(){ NDesc.seekright(); },
            'H' : function(){ NDesc.seek2top(); }   //Shift+H
          };
          var t = e.target;
          var pressKey = String.fromCharCode(e.which);
          if( t.nodeType == 1 && typeof handler[pressKey] == "function" ){
            e.preventDefault();
            handler[pressKey].apply();
          }
        }
   };

    document.addEventListener('DOMContentLoaded', function(){
     NDesc.init();
    },false );

})();
