// ==UserScript==
// @name        nicovideo - wnp
// @description windowised nicovideo player.
// @author      miya2000
// @namespace   http://d.hatena.ne.jp/miya2000/
// @version     1.15
// @include     http://*.nicovideo.jp/*
// @exclude     http://www.nicovideo.jp/watch/*
// @exclude     http://*http*
// ==/UserScript==
/*
 [usage]
 Open http://www.nicovideo.jp/
 and you can start with the right-bottom button on the page.

 @see http://d.hatena.ne.jp/kotas/20070925/playlist
      http://abc.s65.xrea.com/prox/wiki/%A5%D5%A5%A3%A5%EB%A5%BF%A1%A2%A5%EA%A5%B9%A5%C8%B8%F8%B3%AB/nicovideo/#iroiro
      http://blog.fulltext-search.biz/articles/2008/01/31/nico-nico-player-wrapper
      http://blog.guron.net/2009/06/04/636.php
*/
// ==== preparation ==== //
(function(f) {
    if (typeof unsafeWindow == "undefined" && !/Chrome[/]/.test(navigator.userAgent)) return f;
    return function() {
        var s = document.createElement('script');
        s.setAttribute('type', 'text/javascript');
        s.setAttribute('style', 'display: none;');
        s.textContent = '(' + f.toString() + ')()';
        (document.body || document.documentElement).appendChild(s);
    };
})
// ==== wnp ==== //
(function() {
    
    if (typeof window.wnp != 'undefined') return;
    
    var WNP = {};
    
    // ==== Prefs ==== //
    WNP.PREFS = {
        /*
        observe_interval : 500, // (ms)  observe interval.
        page_timeout     : 80,  // (sec) page load timeout.
        video_timeout    : 60,  // (sec) video play timeout.
        menu_width_ratio : 50,  // (%)   menu width ratio when showing menu.
        loop               : false,       // "loop" on startup.
        comment_off        : false,       // "comment-off" on startup.
        always_on_top      : false,       // "always on top" on startup.
        playlist_style_simple : false,    // "playlist style simple" on startup.
        remove_on_finish   : true,        // "remove on finish" on startup.
        use_history        : true,        // "use history" on startup.
        skip_deleted_video : true,        // "skip deleted movie" on startup.
        use_offtimer     : true,  // use offtimer or not.
        offtimer_minute  : 60,    // (min) off timer.
        use_loop_break   : true,  // use loop break or not.
        loop_break_count : 3      // exit from the loop video by specified count. 
        cancel_jump : false       // if the video page jumped to another page, go to next video.
        */
    };
    
    // ==== shortcut keys ==== //
    WNP.SHOPRTCUT = [
        /*
        { command: 'PlayPause',      key: 'Space' },
        { command: 'PlayPrev',       key: 'PageUp' },
        { command: 'PlayNext',       key: 'PageDown' },
        { command: 'VolumeUp',       key: 'Up' },
        { command: 'VolumeUp+',      key: 'Up Shift' },
        { command: 'VolumeDown',     key: 'Down' },
        { command: 'VolumeDown-',    key: 'Down Shift' },
        { command: 'SeekForward',    key: 'Right' },
        { command: 'SeekForward+',   key: 'Right Shift' },
        { command: 'SeekBackward',   key: 'Left' },
        { command: 'SeekBackward-',  key: 'Left Shift' },
        { command: 'SeekBackward--', key: 'Left Ctrl' },
        { command: 'SelectNextItem',     key: 'j' },
        { command: 'SelectNextItem',     key: 'Enter' },
        { command: 'SelectPrevItem',     key: 'k' },
        { command: 'PlaySelectedItem',   key: 'o' },
        { command: 'DeleteSelectedItem', key: 'DEL' },
        { command: 'MenuNext',       key: 's' },
        { command: 'MenuPrev',       key: 'a' },
        { command: 'Playlist',       key: 'n' },
        { command: 'History',        key: 'h' },
        { command: 'Preference',     key: 'p' },
        { command: 'Comment',        key: 'c' },
        { command: 'Loop',           key: 'l' },
        { command: 'Repeat',         key: 'r' },
        { command: 'Mute',           key: 'm' },
        { command: 'Open',           key: 'w' },
        { command: 'View',           key: 'v' }
        */
    ];
    
    // ==== const ==== //
    var Consts = {
        WNP_TITLE : 'WNP',
        WNP_GLOBAL_NAME : 'WNP',     // global name of WNP entry object.
        WNP_IMAGE_SAVE  : 'data:image/gif;base64,R0lGODlhEAAQAIAAAAAAAPD4%2FyH5BAEAAAAALAAAAAAQABAAAAIhhI%2Bpq%2BEPHYo0zAovlscy4BnhMo7N9IHoV6Ytq23pTAMFADs%3D',
        WNP_IMAGE_PLAY  : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAAt0lEQVQ4y2NgoCL4%2F%2F8%2FXnnB0NBQFyAtQA0DJVatWtUPVHALRAP5kpQaqAmUvAzE%2F4D4OxDvB4rZAzE7uQZqASWvQA2EgSchISG5oKAgy4X%2F%2Fv27DMR%2Fgfg%2FDAPBm5UrV07AFQSkuvA%2FoSAgx0BkcAnkE3K8jAxgXn8CTFL56OFJjgvxxjipBr4BpskJ%2BNIkPgO1gV67geZFvEmGkIFKQMntQPyB2ERNTF6WAnoxjdhsR4yBZJU2AAcDLeBOG3M7AAAAAElFTkSuQmCC',
        WNP_IMAGE_PAUSE : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAAe0lEQVQ4y2NgoCL4%2F%2F8%2FfgWhoaFuxIgRYyDLqlWrooAKfoJoEB%2BHGCOxBnIAJTf9h4BNID4OsYEzkP3fv38b%2F0HARhAfhxjDqJeHsJc5gN7aAdIJomEGYhEj2stsQMl2UGCBaBAfhxjRLgQDYBZrICBGmoG4NOISAxkIAIbuKTCbOZywAAAAAElFTkSuQmCC',
        WNP_IMAGE_EMPTY : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQI12P4DwQACfsD%2FWMmxY8AAAAASUVORK5CYII%3D',
        WNP_IMAGE_PREF  : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAOUlEQVQoz2NgoCbg4uIC0x9%2B%2FP%2BPjInSTHVNeA3Bp4lojTCFRDkbXSNR%2Fh1YTSQHP20jm%2Bg4ohYAAAU6%2FYWVfvgIAAAAAElFTkSuQmCC',
        WNP_IMAGE_OPEN  : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAABKklEQVQ4y2NgoCL4%2F%2F8%2FYUWcnJwywcHBeQoKCmYUG8jFxcU3c%2BbMJUCF%2Fy9cuHBFTk5OnxIDuZcuXTrlPxI4e%2FbsQVkgIMdApoULF84BKvjx79%2B%2F%2F0D87%2B%2Ffv%2F9Ahp45c2YLIyOjPCkGMl%2B5cmUe0ICfQPwfZiDITBAbCH7fv3%2F%2FJFCdIkED%2Bfj4GC9evMjw9u3b%2F1jwP2T%2Bu3fvfsrIyOA30NHRkQFoO8ObN2%2BIws3NzYS9DLLV3d2dKEzQyyAXrlq1Kg1o%2B1MofoTEfgxjv3r16jmQvgVSS9CFK1euTANKfAeFPjQS%2FkPZ%2F5DYILwfpJaggSBbQXpA%2BC8omrGwoWZ%2FQHchVgB14WUQBmq8jIN9A0hvR3chVgC0FURpArEWEo3O1gZiJQZ6AAC9TX6jYSwl0gAAAABJRU5ErkJggg%3D%3D',
        WNP_THUMB_PLACEHOLDER : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAAyCAIAAACMIyF9AAAAVklEQVRo3u3PAQkAMAwDsPt3OQeXcAuDwhgnFdA2p3q5QSpIp%2F8wMDAwMDAwMDD8b1jyI9llYGBgYGBgYGBgYGBgYBg3LPmR7DIwMDAwMDAwMDAwzBgeCliYGam%2FHsoAAAAASUVORK5CYII%3D',
        WNP_STORAGE_SWF : 'http://github.com/miya2000/wnp/raw/master/storage/wnp.swf',
        WNP_INITIAL_PLAYER_WIDTH  : 610,
        WNP_INITIAL_PLAYER_HEIGHT : 470,
        ORG_PLAYER_VIEW_WIDTH  : 544,
        ORG_PLAYER_VIEW_HEIGHT : 384,
        ORG_PLAYER_CONTROL_HEIGHT : 63,
        ORG_PLAYER_MINIMUM_WIDTH  : 561,
        WNP_GATEWAY_URL : 'http://www.nicovideo.jp/mylist_add/'
    }
    WNP.Consts = Consts;
    Consts.svg_xml_base = [
        '<?xml version="1.0" encoding="utf-8" ?>',
        '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 380 230">',
        '<defs>',
        '    <linearGradient id="liGrad" x1="0" y1="0" x2="0" y2="1">',
        '        <stop offset="0" stop-color="white" stop-opacity="0.2" />',
        '        <stop offset="0.3" stop-color="white" stop-opacity="1" />',
        '    </linearGradient>',
        '    <clipPath id="clip_txt">',
        '        <path d="m 0 0 h 220 v 150 h -220 v -150 z" />',
        '    </clipPath>',
        '</defs>',
        '<rect width="380" height="250" fill="white" />',
        '<g transform="translate(0,50)">',
        '    <image x="10" width="130" height="100" xlink:href="%u%" />',
        '    <image id="mirror" x="10" width="130" height="100" xlink:href="%u%" transform="matrix(1,0,0,-1,0,200)" />',
        '    <rect id="grad" y="100" width="150" height="100" fill="url(#liGrad)" />',
        '</g>',
        '<g clip-path="url(#clip_txt)" transform="translate(150,50)" font-family="Verdana,sans-serif" font-weight="bold">',
        '    <text y="30" style="font-size: 15px;">%t%',
        '        <animate attributeName="x" values="0;0;-300" keyTimes="0;0.25;1" dur="10s" repeatDur="indefinite" /> ',
        '    </text>',
        '    <text x="5" y="75" style="font-size: 12px;">%c%</text>',
        '    <g id="videoinfo" style="display: none">',
        '        <text x="5"  y="110" style="font-size: 10px;">\u518D\u751F</text>',
        '        <text x="60" y="110" style="font-size: 10px;" id="count">%vp%</text>',
//        '        <text x="5"  y="120" style="font-size: 10px;">\u30B3\u30E1\u30F3\u30C8</text>',
//        '        <text x="60" y="120" style="font-size: 10px;">%vc%</text>',
        '        <text x="5"  y="120" style="font-size: 10px;">\u30DE\u30A4\u30EA\u30B9\u30C8</text>',
        '        <text x="60" y="120" style="font-size: 10px;">%vm%</text>',
        '    </g>',
        '</g>',
        '<script type="text/javascript">',
        '<![CDATA[',
        '    if (navigator.userAgent.indexOf("Gecko/") != -1) {',
        '        document.getElementById("mirror").style.display = "none";',
        '        document.getElementById("grad").style.display = "none";',
        '    }',
        '    if (navigator.userAgent.indexOf("Safari") != -1) {',
        '        document.getElementById("mirror").setAttribute("transform", "matrix(1,0,0,-1,0,199)");',
        '    }',
        '    if (document.getElementById("count").textContent.length > 0) {',
        '        document.getElementById("videoinfo").style.display = "";',
        '    }',
        ']]>',
        '</script>',
        '</svg>'
        ].join('\n');
    Consts.svg_mime_type = 'image/svg+xml';
    
    // ==== color settings ==== //
    var Colors = {
        item_hover:    '#D7EBFF',
        item_selected: '#B4DAFF',
        item_dragging: '#FFCCCC',
        status_error:  'red',
        control_loop: 'yellow',
        control_repeat: 'yellow',
        control_comment_off: 'yellow',
        control_mute: 'yellow',
        control_always_on_top: 'yellow'
    };
    WNP.Colors = Colors;
    
    var Lang = {
        COMMAND_PlayStop  : '\u52D5\u753B\u306E\u518D\u751F\u3092\u958B\u59CB\uFF0F\u7D42\u4E86\u3057\u307E\u3059\u3002',
        COMMAND_PlayPause : '\u52D5\u753B\u306E\u518D\u751F\u3092\u4E00\u6642\u505C\u6B62\uFF0F\u518D\u958B\u3057\u307E\u3059\u3002',
        COMMAND_PlayPrev  : '\u4E00\u3064\u524D\u306E\u52D5\u753B\u3092\u518D\u751F\u3057\u307E\u3059\u3002',
        COMMAND_PlayNext  : '\u4E00\u3064\u5F8C\u306E\u52D5\u753B\u3092\u518D\u751F\u3057\u307E\u3059\u3002',
        CLICK_Volume             : '\u30AF\u30EA\u30C3\u30AF\u3057\u305F\u4F4D\u7F6E\u306B\u97F3\u91CF\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002',
        COMMAND_VolumeUp         : '\u97F3\u91CF\u3092\u4E0A\u3052\u307E\u3059\u3002',
        COMMAND_VolumeUp_Plus    : '\u97F3\u91CF\u3092\u5927\u304D\u304F\u4E0A\u3052\u307E\u3059\u3002',
        COMMAND_VolumeDown       : '\u97F3\u91CF\u3092\u4E0B\u3052\u307E\u3059\u3002',
        COMMAND_VolumeDown_Minus : '\u97F3\u91CF\u3092\u5927\u304D\u304F\u4E0B\u3052\u307E\u3059\u3002',
        CLICK_Seek                      : '\u30AF\u30EA\u30C3\u30AF\u3057\u305F\u7B87\u6240\u306B\u518D\u751F\u4F4D\u7F6E\u3092\u79FB\u52D5\u3057\u307E\u3059\u3002',
        COMMAND_SeekForward             : '\u518D\u751F\u4F4D\u7F6E\u3092\u524D\u65B9\u306B\u79FB\u52D5\u3057\u307E\u3059\u3002',
        COMMAND_SeekForward_Plus        : '\u518D\u751F\u4F4D\u7F6E\u3092\u524D\u65B9\u306B\u5927\u304D\u304F\u79FB\u52D5\u3057\u307E\u3059\u3002',
        COMMAND_SeekBackward            : '\u518D\u751F\u4F4D\u7F6E\u3092\u5F8C\u65B9\u306B\u79FB\u52D5\u3057\u307E\u3059\u3002',
        COMMAND_SeekBackward_Minus      : '\u518D\u751F\u4F4D\u7F6E\u3092\u5F8C\u65B9\u306B\u5927\u304D\u304F\u79FB\u52D5\u3057\u307E\u3059\u3002',
        COMMAND_SeekBackward_MinusMinus : '\u518D\u751F\u4F4D\u7F6E\u3092\u52D5\u753B\u306E\u5148\u982D\u306B\u79FB\u52D5\u3057\u307E\u3059\u3002',
        COMMAND_SelectNextItem : '\u4E00\u3064\u5F8C\u306E\u52D5\u753B\u3092\u9078\u629E\u72B6\u614B\u306B\u3057\u307E\u3059\u3002',
        COMMAND_SelectPrevItem : '\u4E00\u3064\u524D\u306E\u52D5\u753B\u3092\u9078\u629E\u72B6\u614B\u306B\u3057\u307E\u3059\u3002',
        COMMAND_PlaySelectedItem   : '\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u52D5\u753B\u3092\u518D\u751F\u3057\u307E\u3059\u3002',
        COMMAND_DeleteSelectedItem : '\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u52D5\u753B\u3092\u524A\u9664\u3057\u307E\u3059\u3002',
        COMMAND_Menu        : '\u30E1\u30CB\u30E5\u30FC\u306E\u8868\u793A\u3092\u5207\u308A\u66FF\u3048\u307E\u3059\u3002',
        COMMAND_MenuNext    : '\u6B21\u306E\u30E1\u30CB\u30E5\u30FC\u3092\u8868\u793A\u3057\u307E\u3059\u3002',
        COMMAND_MenuPrev    : '\u524D\u306E\u30E1\u30CB\u30E5\u30FC\u3092\u8868\u793A\u3057\u307E\u3059\u3002',
        COMMAND_Playlist    : '\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306E\u8868\u793A\u3092\u5207\u308A\u66FF\u3048\u307E\u3059\u3002',
        COMMAND_History     : '\u8996\u8074\u5C65\u6B74\u306E\u8868\u793A\u3092\u5207\u308A\u66FF\u3048\u307E\u3059\u3002',
        COMMAND_Preference  : '\u8A2D\u5B9A\u753B\u9762\u306E\u8868\u793A\u3092\u5207\u308A\u66FF\u3048\u307E\u3059\u3002',
        COMMAND_Comment     : '\u30B3\u30E1\u30F3\u30C8\u306E\u8868\u793A\u3092\u5207\u308A\u66FF\u3048\u307E\u3059\u3002',
        COMMAND_Loop        : '\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u7E70\u308A\u8FD4\u3057\u518D\u751F\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u5207\u308A\u66FF\u3048\u307E\u3059\u3002',
        COMMAND_Repeat      : '\u52D5\u753B\u3092\u7E70\u308A\u8FD4\u3057\u518D\u751F\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u5207\u308A\u66FF\u3048\u307E\u3059\u3002',
        COMMAND_Mute        : '\u52D5\u753B\u306E\u97F3\u58F0\u3092\u6D88\u3059\u304B\u3069\u3046\u304B\u3092\u5207\u308A\u66FF\u3048\u307E\u3059\u3002',
        COMMAND_Open        : '\u5165\u529B\u3055\u308C\u305F\u52D5\u753B\u3092\u958B\u304D\u307E\u3059\u3002\u52D5\u753BID\u3084\u52D5\u753B\u306EURL\u3092\u5165\u529B\u3067\u304D\u307E\u3059\u3002',
        COMMAND_View        : '\u30D7\u30EC\u30A4\u30E4\u30FC\u306E\u8868\u793A\u3092\u5207\u308A\u66FF\u3048\u307E\u3059\u3002',
        COMMAND_NicoControl : '\u30CB\u30B3\u30CB\u30B3\u52D5\u753B\u30D7\u30EC\u30A4\u30E4\u30FC\u672C\u4F53\u306E\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u306E\u8868\u793A\u3092\u5207\u308A\u66FF\u3048\u307E\u3059\u3002',
        COMMAND_AlwaysOnTop : '\u5E38\u306B\u5168\u753B\u9762\u8868\u793A\u3057\u307E\u3059\u3002\uFF08\u7C21\u6613\u5B9F\u88C5\u3067\u3059\uFF09',
        COMMAND_Shuffle : '\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306E\u518D\u751F\u9806\u3092\u30B7\u30E3\u30C3\u30D5\u30EB\u3057\u307E\u3059\u3002',
        PREF_SIMPLE_PLAYLIST_VIEW : '\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u30B7\u30F3\u30D7\u30EB\u8868\u793A\u306B\u3059\u308B',
        DESC_SIMPLE_PLAYLIST_VIEW : '\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u30B7\u30F3\u30D7\u30EB\u8868\u793A\u306B\u3057\u307E\u3059\u3002',
        PREF_REMOVE_ON_FINISH : '\u518D\u751F\u304C\u7D42\u308F\u3063\u305F\u3089\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304B\u3089\u524A\u9664\u3059\u308B',
        DESC_REMOVE_ON_FINISH : '\u518D\u751F\u304C\u7D42\u308F\u3063\u305F\u3089\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304B\u3089\u524A\u9664\u3057\u307E\u3059\u3002',
        PREF_USE_HISTORY : '\u5C65\u6B74\u3092\u4F7F\u7528\u3059\u308B',
        DESC_USE_HISTORY : '\u5C65\u6B74\u3092\u6709\u52B9\u306B\u3057\u307E\u3059\u3002',
        PREF_SKIP_DELETED_VIDEO : '\u524A\u9664\u3055\u308C\u305F\u52D5\u753B\u3092\u30B9\u30AD\u30C3\u30D7\u3059\u308B',
        PREF_USE_OFFTIMER : '\u30AA\u30D5\u30BF\u30A4\u30DE\u30FC\u3092\u4F7F\u7528\u3059\u308B',
        PREF_MINUTE : '\u5206',
        PREF_USE_LOOP_BREAK : '\u30EB\u30FC\u30D7\u3059\u308B\u52D5\u753B\u3092\u6307\u5B9A\u56DE\u6570\u3067\u6B62\u3081\u308B',
        PREF_COUNT : '\u56DE',
        PREF_CANCEL_JUMP : '\u5225\u306E\u52D5\u753B\u306B\u79FB\u52D5\u3057\u306A\u3044\u3088\u3046\u306B\u3059\u308B',
        PREF_FORCE_VISIT_ON_OPERA : '\u518D\u751F\u6642\u306B\u300C\u8A2A\u554F\u6E08\u307F\u300D\u306B\u3059\u308B\u0028Opera\u306E\u307F\u0029',
        PREF_DEFAULT : '\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u8A2D\u5B9A\u306B\u623B\u3057\u307E\u3059\u3002',
        PLEASE_LOGIN : '\u30ED\u30B0\u30A4\u30F3\u3057\u3066\u304F\u3060\u3055\u3044',
        OVER_ACCESS : '\u77ED\u6642\u9593\u3067\u306E\u9023\u7D9A\u30A2\u30AF\u30BB\u30B9',
        MISSING     : '\u304A\u63A2\u3057\u306E\u52D5\u753B\u306F\u518D\u751F\u3067\u304D\u307E\u305B\u3093',
        SAVE_PLAYLIST_USAGE : '\u3053\u306E\u30EA\u30F3\u30AF\u306F\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u30EC\u30C3\u30C8\u3067\u3059\u3002\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u306B\u767B\u9332\u3059\u308B\u3053\u3068\u3067\u3053\u306E\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u5FA9\u5143\u3067\u304D\u307E\u3059\u3002\n\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u30EC\u30C3\u30C8\u306F\u30CB\u30B3\u30CB\u30B3\u52D5\u753B(http://www.nicovideo.jp/)\u306E\u30C9\u30E1\u30A4\u30F3\u4E0A\u3067\u5B9F\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002',
        PLEASE_INPUT_VIDEOID_OR_URL : '\u52D5\u753B\u306EID\u0028\u300Csm9\u300D\u306A\u3069\u0029\u3082\u3057\u304F\u306FURL\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002'
    };
    WNP.Lang = Lang;
    
    // ==== main ==== //
    var fn = {};
    WNP.fn = fn;
    BUILD_FUNC(fn);
    var browser = fn.browser;
    var ie = fn.ie;
    var $e = fn.$e;
    var isNative = fn.isNative;
    var toJSON = fn.toJSON;
    var getAbsolutePosition = fn.getAbsolutePosition;
    var addStyle = fn.addStyle;
    var getStyle = fn.getStyle;
    var $XS = fn.$XS;
    var findVideoTitle = fn.findVideoTitle;
    var createPlayInfo = fn.createPlayInfo;
    WNP.html = function() { 
        var browser = WNP.fn.browser;
        var borderBox = browser.mozilla ? '-moz-box-sizing : border-box;' : browser.webkit ? '-webkit-box-sizing : border-box;' : '';
        var backgroundSize = browser.opera ? '-o-background-size' : browser.mozilla ? '-moz-background-size' :  browser.webkit ? 'webkit-background-size' : 'background-size';
        return [
        '<!DOCTYPE html PUBLIC "-\/\/W3C\/\/DTD HTML 4.01 Transitional\/\/EN" "http:\/\/www.w3.org/TR/html4/loose.dtd">',
        '<html>',
        '<head>',
        '<meta http-equiv="Content-Type" content="text/html; charset=utf-8">',
        '<meta http-equiv="Content-Script-Type" content="text/javascript">',
        '<meta http-equiv="Content-Style-Type" content="text/css">',
        '<meta http-equiv="X-UA-Compatible" content="IE=8">',
        '<title>' + Consts.WNP_TITLE + '</title>',
        '<style type="text/css">',
        'html, body, div, p, ul, dl, li, img { margin: 0; padding: 0; border: none; }',
        'html, body {',
        '    width: 100%; height: 100%; background-color: black;',
        '}',
        'div.wnp_player { ',
        '    width: 100%; height: 100%;',
        '    position: relative;',
        '    overflow: hidden;',
        '    background-color: black;',
        '    line-height: 1.1em;',
        '    font-size: 12px;',
        '}',
        'div.wnp_header, div.wnp_footer {',
        '    box-sizing: border-box;', borderBox,
        '    width: 100%;',
        '    height: 20px;',
        '    color: #F0F8FF;',
        '    background-color: #050608;',
        '    font-family:\'\u30D2\u30E9\u30AE\u30CE\u89D2\u30B4\u0020Pro\u0020W3\',\'\u30E1\u30A4\u30EA\u30AA\',Meiryo,Verdana,sans-serif;',
        '    font-size: 14px;',
        '    font-weight: bold;',
        '    line-height: 20px;',
        '    padding: 0 5px;',
        '    position: relative;',
        '    z-index: 1;',
        '    overflow: hidden;',
        '}',
        'div.wnp_footer {',
        '    padding-top: 2px;',
        '}',
        'div.wnp_header div.header_left {',
        '    text-align: left;',
        '    position: absolute;',
        '}',
        'div.wnp_header div.header_right {',
        '    text-align: right;',
        '}',
        'div.wnp_header a, div.wnp_footer a {',
        '    color: inherit;',
        '    text-decoration: none;',
        '    margin: 0 0.4em;',
        '}',
        'div.wnp_header a:visited, div.wnp_footer a:visited {',
        '    color: inherit;',
        '}',
        'div.wnp_header button, div.wnp_footer button {',
        '    color: inherit;',
        '    font-family: inherit;',
        '    cursor: pointer;',
        '    background-color: transparent;',
        '    border: none;',
        '    margin: 0; padding: .25em 0 0;',
        '}',
        'div.wnp_header .control, div.wnp_footer .control {',
        '    visibility: hidden;',
        '}',
        'div.wnp_header:hover .control, div.wnp_footer:hover .control {',
        '    visibility: visible;',
        '    cursor: pointer;',
        '}',
        'div.wnp_footer:hover .wnp_control_panel {',
        '    visibility: visible;',
        '}',
        'div.wnp_view {',
        '    box-sizing: border-box;', borderBox,
        '    width: 100%; height: 100%;',
        '    margin: -20px 0;',
        '    border: #050608 solid;',
        '    border-width: 20px 0;',
        '    z-index: 0;',
        '}',
        'div.wnp_menu {',
        '    box-sizing: border-box;', borderBox,
        '    position: absolute;',
        '    z-index: 0;',
        '    top: 0px;',
        '    right: 0;',
        '    width: 0;',
        '    height: 100%;',
        '    padding: 20px 0;',
        '    border-right: #050608 solid 0px;',
        '    overflow: hidden;',
        '}',
        'div.wnp_menu .wnp_menu_slider {',
        '    clear: both;',
        '    width: 15px;',
        '    height: 100%;',
        '    position: absolute;',
        '    top: 0; left: 0;',
        '    background-color: #696969;',
        '    opacity: 0.05;', /*@cc_on 'filter: alpha(opacity=5);', @*/
        '    z-index: 2;',
        '    cursor: e-resize;',
        '}',
        'div.wnp_menu .wnp_menu_slider:hover {',
        '    opacity: 0.6;', /*@cc_on 'filter: alpha(opacity=60);', @*/
        '}',
        'div.wnp_menu_container {',
        '    width: 500%;',
        '    height: 100%;',
        '}',
        'div.wnp_menu_content {',
        '    width: 20%;',
        '    height: 100%;',
        '    float: left;',
        '}',
        '.wnp_menu_header {',
        '    height: 19px;',
        '    border-bottom: #CCC solid 1px;',
        '    padding: 0 5px 0;',
        '    position: relative;',
        '    z-index: 1;',
        '    overflow: hidden;',
        '    background-color: #5E95FF;',
        '    color: #F0F0F0;',
        '    line-height: 18px;',
        '    font-size: 12px;',
        '    font-weight: bold;',
        '}',
        '.wnp_history_header {',
        '    background-color: #EA7DB0;',
        '}',
        '.wnp_preference_header {',
        '    background-color: #5DCFA0;',
        '}',
        '.wnp_playlist_items {',
        '    box-sizing: border-box;', borderBox,
        '    background-color: #D0DAEF;',
        '    list-style: none;',
        '    height: 100%;',
        '    position: relative;',
        '    z-index: 0;',
        '    overflow: auto;',
        '    border-style: solid;',
        '    border-width: 20px 0 20px;',
        '    margin-top: -20px;',
        '    margin-bottom: -20px;',
        '    border-right: #CCC solid 1px;',
        '}',
        '.wnp_menu_footer {',
        '    height: 19px;',
        '    border-top: #CCC solid 1px;',
        '    padding: 0 5px 0 0;',
        '    position: relative;',
        '    z-index: 1;',
        '    overflow: hidden;',
        '    background-color: #E7E7EF;',
        '    color: #000;',
        '    line-height: 18px;',
        '    font-size: 12px;',
        '}',
        '.wnp_menu_footer input {',
        '    margin: 0 .2em 0 .5em;',
        '    vertical-align: middle;',
        '}',
        'ul.wnp_playlist_items li {',
        '    height: 50px;',
        '    line-height: 24px;',
        '    border: transparent solid;',
        '    border-width: 0 0 0 3px;',
        '    border-bottom: white solid 1px;',
        '    padding: 3px 0 2px;',
        '    overflow: hidden;',
        backgroundSize + ': 130px auto;',
        '}',
        'ul.wnp_playlist_items li div.video_info {',
        '    width: 80px;',
        '    float: left;',
        '}',
        'ul.wnp_playlist_items li div.video_info .playmark {',
        '    margin-left: -0.7em;',
        '    margin-right: 3px;',
        '    visibility: hidden;',
        '    color: #3D7FEA;',
        '    font-size: 16px;',
        '}',
        'ul.wnp_playlist_items li div.video_info .thumbnail {',
        '    width: 65px;',
        '    height: 50px;',
        '    vertical-align: middle;',
        '}',
        'ul.wnp_playlist_items li div.video_desc {',
        '    white-space: nowrap;',
        '    overflow: hidden;',
        '    font-size: 12px;',
        '}',
        'ul.wnp_playlist_items li a {',
        '    color: #000;',
        '    text-decoration: none;',
        '}',
        'ul.wnp_playlist_items li a:visited {',
        '    color: #595959;',
        '}',
        'ul.wnp_playlist_items li a[href]:hover {',
        '    background-color: #B0D0FF;',
        '}',
        'input, button {',
        '    font-size: 12px;',
        '    line-height: 1.1em;',
        '}',
        'div.wnp_footer span.wnp_status_bar {',
        '    color: white;',
        '    font-weight: normal;',
        '}',
        'div.wnp_player select.mylist {',
        '    margin-left: 5px;',
        '    width: 130px;',
        '}',
        'div.wnp_player button.default_button { }',
        'div.wnp_player img.button { vertical-align: middle; }',
        'div.wnp_player.playing #WNP_C_PLAY, div.wnp_player.loading #WNP_C_PLAY {',
        '    text-decoration: line-through;',
        '}',
        'div.wnp_player .loop {',
        '    color: yellow !important;',
        '}',
        'div.wnp_player ul.wnp_playlist_items li.playing .video_desc {',
        '    font-weight: bold;',
        '}',
        'div.wnp_player ul.wnp_playlist_items li.playing .playmark {',
        '    visibility: visible;',
        '}',
        'div.wnp_control_panel {',
        '    box-sizing: border-box;', borderBox,
        '    background-color: #050608;',
        '    margin-left: 20px;',
        '    visibility: hidden;',
        '    position: absolute;',
        '    top: 0; left: 0;',
        '    width: 100%;',
        '    height: 20px;',
        '}',
        'div.wnp_seekbar {',
        '    float: left;',
        '    width: 45%;',
        '    height: 100%;',
        '    cursor: pointer;',
        '    margin: 0 10px 0 5px;',
        '}',
        'div.wnp_seekbar > div {',
        '    width: 100%;',
        '    height: 5px;',
        '    margin-top: 8px;',
        '    background-color: #84AFCF;',
        '}',
        'div.wnp_seekbar > div > div {',
        '    height: 100%;',
        '    width: 0;',
        '    background-color: #548FCF;',
        '}',
        'div.wnp_volumebar {',
        '    float: left;',
        '    width: 55px;',
        '    height: 100%;',
        '    cursor: pointer;',
        '    margin: 0 10px 0 5px;',
        '    padding: 8px 0;',
        '}',
        'div.wnp_volumebar > div {',
        '    width: auto;',
        '    height: 5px;',
        '    background-color: #FFE4E1;',
        '}',
        'div.wnp_volumebar > div > div {',
        '    height: 100%;',
        '    width: 0%;',
        '    background-color: #F08080;',
        '}',
        'div.wnp_footer div.wnp_control_panel .control {',
        '    font-size: 14px;', 
        '    margin: 2px 0.2em 0;', browser.mozilla ? 'font-size: 12px; margin: 0 0.2em; ' : '',
        '    padding: 0;',
        '    visibility: inherit;',
        '}',
        'div.wnp_etcbar {',
        '    float: left;',
        '    width: 40%;',
        '    overflow: visible;',
        '    height: 100%;',
        '}',
        'span.wnp_button_container {',
        '    float: left;',
        '    width: 20px;', 
        '    text-align: right;',
        '}',
        /*@cc_on 
        'ul.wnp_playlist_items > li {',
        '    overflow: hidden;',
        '}',
        'ul.wnp_playlist_items > li > div {',
        '    position: relative;',
        '}',
        'ul.wnp_playlist_items > li > img.wnp_iecover {',
        '    left: 0;',
        '    cursor: default;',
        '    height: 53px;',
        '}',
        'div.wnp_volumebar {',
        '    position: relative;',
        '}',
        'div.wnp_volumebar img.wnp_iecover {',
        '    top: 0;',
        '}',
        @*/
        'ul.wnp_pref_list {',
        '    padding: 5px 0 0 15px; ',
        '    list-style: none;',
        '}',
        'ul.wnp_pref_list li {',
        '    padding: 3px; ',
        '    margin-left: 20px; ',
        '    line-height: 1.2; ',
        '    text-indent: -20px; ',
        '}',
        'ul.wnp_pref_list li input[type="checkbox"] {',
        '    margin-right: .5em; ',
        '}',
        '.wnp_pref_separator {',
        '    margin: 0.5em 10px 0.5em 15px; ',
        '}',
        '</style>',
        '</head>',
        '<body>',
        '<div class="wnp_player" id="WNP_PLAYER">',
        '    <div class="wnp_header" id="WNP_HEADER">',
        '        <div class="header_left">',
        '            <button class="control" id="WNP_C_SCREEN" title="' + Lang.COMMAND_View + '">\u25A0</button>',
        '            <button class="control" id="WNP_C_ALWAYS_ON_TOP" title="' + Lang.COMMAND_AlwaysOnTop + '">\u22BF</button>',
        '        </div>',
        '        <div class="header_right">',
        '            <a class="control" id="WNP_C_PREV" title="' + Lang.COMMAND_PlayPrev + '" href="about:blank">&lt;</a>',
        '            <button class="control" id="WNP_C_PLAY" title="' + Lang.COMMAND_PlayStop + '">\u266A</button>',
        '            <a class="control" id="WNP_C_NEXT" title="' + Lang.COMMAND_PlayNext + '" href="about:blank">&gt;</a>',
        '            <button class="control" id="WNP_C_LOOP" title="' + Lang.COMMAND_Loop + '">\u221E</button>',
        '            <a class="control" id="WNP_C_PLAYLIST_URI" title="' + Lang.SAVE_PLAYLIST_USAGE + '" href="about:blank"><img class="button" src="' + Consts.WNP_IMAGE_SAVE + '" alt=""></a>',
        '            <button class="control default_button" id="WNP_C_PLAYLIST" title="' + Lang.COMMAND_Playlist + '">\u25BD</button>',
        '            <button class="control" id="WNP_C_HISTORY" title="' + Lang.COMMAND_History + '">\u25BC</button>',
        '            <button class="control" id="WNP_C_PREFERENCE" title="' + Lang.COMMAND_Preference + '"><img class="button" src="' + Consts.WNP_IMAGE_PREF + '" alt=""></button>',
        '        </div>',
        '    </div>',
        '    <div class="wnp_view" id="WNP_VIEW"></div>',
        '    <div class="wnp_footer" id="WNP_FOOTER">',
        '        <button class="control default_button" title="' + Lang.COMMAND_NicoControl + '" id="WNP_C_NICO_MENU">\u25B3</button>',
        '        <span class="wnp_status_bar" id="WNP_STATUS_BAR"></span>',
        '        <div class="wnp_control_panel" id="WNP_CONTROL_PANEL">',
        '            <span class="wnp_button_container"><button class="control" title="' + Lang.COMMAND_Open + '" id="WNP_C_NICO_OPEN"><img src="' + Consts.WNP_IMAGE_OPEN + '"></button></span>',
        '            <span class="wnp_button_container"><button class="control" title="' + Lang.COMMAND_PlayPause + '" id="WNP_C_NICO_PAUSE"><img src="' + Consts.WNP_IMAGE_PLAY + '"></button></span>',
        '            <div class="wnp_seekbar" id="WNP_C_NICO_SEEKBAR" title="' + Lang.CLICK_Seek + '"><div><div id="WNP_C_NICO_SEEKBAR_BAR"></div></div></div>',
        '            <div class="wnp_etcbar">',
        '                <span class="wnp_button_container"><button class="control" id="WNP_C_NICO_MUTE" title="' + Lang.COMMAND_Mute + '">\u03BC</button></span>',
        '                <div class="wnp_volumebar" id="WNP_C_NICO_VOLUMEBAR" title="' + Lang.CLICK_Volume + '"><div><div id="WNP_C_NICO_VOLUMEBAR_BAR"></div></div></div>',
        '                <button class="control" id="WNP_C_NICO_COMM" title="' + Lang.COMMAND_Comment + '">\u24D2</button>',
        '                <button class="control" id="WNP_C_NICO_REPEAT" title="' + Lang.COMMAND_Repeat + '">\u03C3</button>',
        '            </div>',
        '        </div>',
        '    </div>',
        '    <div class="wnp_menu" id="WNP_MENU">',
        '        <div class="wnp_menu_slider" id="WNP_MENU_SLIDER"></div>',
        '        <div class="wnp_menu_container" id="WNP_MENU_CONTAINER">',
        '            <div class="wnp_menu_content" id="WNP_MENU_PLAYLIST">',
        '                <p class="wnp_menu_header">playlist</p>',
        '                <ul class="wnp_playlist_items" id="WNP_PLAYLIST_ITEMS"></ul>',
        '                <p class="wnp_menu_footer">',
        '                    <input id="WNP_C_PLAYLIST_STYLE" type="checkbox" title="' + Lang.DESC_SIMPLE_PLAYLIST_VIEW + '"><label for="WNP_C_PLAYLIST_STYLE" title="' + Lang.DESC_SIMPLE_PLAYLIST_VIEW + '">simple</label>',
        '                    <input id="WNP_C_REMOVE_ON_FINISH" type="checkbox" title="' + Lang.DESC_REMOVE_ON_FINISH + '"><label for="WNP_C_REMOVE_ON_FINISH" title="' + Lang.DESC_REMOVE_ON_FINISH + '">remove on finish</label>',
        '                    <input id="WNP_C_SHUFFLE" type="button" title="' + Lang.COMMAND_Shuffle + '" value="shuffle">',
        '                </p>',
        '            </div>',
        '            <div class="wnp_menu_content" id="WNP_MENU_HISTORY">',
        '                <p class="wnp_menu_header wnp_history_header">history</p>',
        '                <ul class="wnp_playlist_items" id="WNP_HISTORY_ITEMS"></ul>',
        '                <p class="wnp_menu_footer">',
        '                    <input id="WNP_C_USE_HISTORY" type="checkbox"><label for="WNP_C_USE_HISTORY" title="' + Lang.DESC_USE_HISTORY + '">use history</label>',
        '                </p>',
        '            </div>',
        '            <div class="wnp_menu_content" id="WNP_MENU_PREFERENCE">',
        '                <p class="wnp_menu_header wnp_preference_header">preference</p>',
        '                <div class="wnp_playlist_items" >',
        '                <ul class="wnp_pref_list">',
        '                    <li><input id="WNP_C_PREF_PLAYLIST_STYLE" type="checkbox"><label for="WNP_C_PREF_PLAYLIST_STYLE">' + Lang.PREF_SIMPLE_PLAYLIST_VIEW + '</label></li>',
        '                    <li><input id="WNP_C_PREF_REMOVE_ON_FINISH" type="checkbox" checked="checked"><label for="WNP_C_PREF_REMOVE_ON_FINISH">' + Lang.PREF_REMOVE_ON_FINISH + '</label></li>',
        '                    <li><input id="WNP_C_PREF_USE_HISTORY" type="checkbox" checked="checked"><label for="WNP_C_PREF_USE_HISTORY">' + Lang.PREF_USE_HISTORY + '</label></li>',
        '                    <li><input id="WNP_C_PREF_SKIP_DELETED_VIDEO" type="checkbox" checked="checked"><label for="WNP_C_PREF_SKIP_DELETED_VIDEO">' + Lang.PREF_SKIP_DELETED_VIDEO + '</label></li>',
        '                    <li><input id="WNP_C_PREF_USE_OFFTIMER" type="checkbox" checked="checked"><label for="WNP_C_PREF_USE_OFFTIMER">' + Lang.PREF_USE_OFFTIMER + '</label> <select id="WNP_C_PREF_OFFTIMER_MINUTE"><option value="10">10<option value="30">30<option value="60" selected="selected">60<option value="120">120</select>' + Lang.PREF_MINUTE + '</li>',
        '                    <li><input id="WNP_C_PREF_USE_LOOP_BREAK" type="checkbox" checked="checked"><label for="WNP_C_PREF_USE_LOOP_BREAK">' + Lang.PREF_USE_LOOP_BREAK + '</label> <select id="WNP_C_PREF_LOOP_BREAK_COUNT"><option value="0">0<option value="1">1<option value="2">2<option value="3" selected="selected">3<option value="10">10</select>' + Lang.PREF_COUNT + '</li>',
        '                    <li><input id="WNP_C_PREF_CANCEL_JUMP" type="checkbox"><label for="WNP_C_PREF_CANCEL_JUMP">' + Lang.PREF_CANCEL_JUMP + '</label></li>',
        '                </ul>',
        '                <hr class="wnp_pref_separator">',
        '                <ul class="wnp_pref_list">',
        '                    <li><input id="WNP_C_PREF_FORCE_VISIT_ON_OPERA" type="checkbox"><label for="WNP_C_PREF_FORCE_VISIT_ON_OPERA">' + Lang.PREF_FORCE_VISIT_ON_OPERA + '</label></li>',
        '                </ul>',
        '                </div>',
        '                <p class="wnp_menu_footer">',
        '                    <input id="WNP_C_SET_DEFAULT" type="button" value="default" title="' + Lang.PREF_DEFAULT + '">',
        '                </p>',
        '            </div>',
        '        </div>',
        '    </div>',
        '</div>',
        '<script type="text/javascript">' + BUILD_FUNC.toString() + '</script>',
        '<script type="text/javascript">' + BUILD_WNP.toString() + '</script>',
        '<script type="text/javascript">',
        '    var Consts = (' + toJSON(Consts) + ');',
        '    var Colors = (' + toJSON(Colors) + ');',
        '    var Lang = (' + toJSON(Lang) + ');',
        '    BUILD_FUNC();',
        '    BUILD_WNP();',
        '</script>',
        '</body>',
        '</html>'
        ].join('\n');
    };
    WNP.pageStyle = function(pref) { 
        var browser = WNP.fn.browser;
        var borderBox = browser.mozilla ? '-moz-box-sizing : border-box;' : browser.webkit ? '-webkit-box-sizing : border-box;' : '';
        return [
        '.wnp_tooltip {',
        '    width: 168px;',
        '    opacity: 0.4; ', /*@cc_on 'filter:alpha(opacity=40);', @*/
        '    position: absolute; ',
        '    z-index: 999; ',
        '}',
        '.wnp_tooltip:hover {',
        '    opacity: 1; ', /*@cc_on 'filter:alpha(opacity=100);', @*/
        '}',
        '.wnp_tooltip a {',
        '    cursor: pointer;',
        '    display: block;',
        '    width: 54px;',
        '    height: 0;',
        '    line-height: 22px;',
        '    font-family: cursive;',
        '    font-size: 14px;',
        '    font-weight: bold;',
        '    text-align: center;',
        '    text-decoration: none;',
        '    color: #F0F0F0;',
        '    border-style: solid;',
        '    border-width: 15px 0;',  /*@cc_on 'border-width: 15px 0 16px;', @*/
        '    border-top-color: #555;',
        '    border-bottom-color: #000;',
        '    padding: 0;',
        '    float: left;',
        '    margin-right: 2px;',
        '}',
        '.wnp_tooltip * span {',
        '    box-sizing: border-box;', borderBox,
        '    border: 1px solid #DDD;',
        '    display: inline-block;',
        '    width: 50px;', /*@cc_on 'width: 48px;', @*/
        '    height: 24px;',
        '    position: absolute;',
        '    top: 0px;',
        '    margin-top: 3px;',
        '    margin-left: 2px;',
        '}',
        '.wnp_tooltip a:hover {',
        '    border-top-color: #666;',
        '}',
        '.wnp_tooltip a:hover span {',
        '    color: #FFF;',
        '    border-color: #FFF;',
        '}',
        '.wnp_tooltip a span:active { padding: 1px 0 0 2px; }',
        ].join('\n');
    };

function BUILD_FUNC(T) {
    if (T == null) T = window;
    // -- utils --
    // browser
    var browser = {
        opera   : (navigator.appName.indexOf("Opera") >= 0),
        mozilla : (navigator.userAgent.indexOf("Gecko/") >= 0),
        webkit  : (navigator.userAgent.indexOf("AppleWebKit/") >= 0),
        ie      : /*@cc_on!@*/false
    };
    T.browser = browser;
    var ie = {};
    ie.cssStandard = (document.compatMode && document.compatMode == 'CSS1Compat');
    ie.clientWidth = (function() {
        return ie.cssStandard ? function(d) { return (d || document).documentElement.clientWidth }
                              : function(d) { return (d || document).body.clientWidth }
    })();
    ie.clientHeight = (function() {
        return ie.cssStandard ? function(d) { return (d || document).documentElement.clientHeight }
                              : function(d) { return (d || document).body.clientHeight }
    })();
    ie.window = function(element) {
        return element.parentWindow || element.ownerDocument.parentWindow || window;
    };
    T.ie = ie;
    // event.
    var $e = (function() {
        if ('addEventListener' in window) return function(element) { return element };
        function preventDefault()  { this.returnValue  = false; }
        function stopPropagation() { this.cancelBubble = true;  }
        function compat(e, el) {
            if (!('preventDefault'  in e)) e.preventDefault = preventDefault;
            if (!('stopPropagation' in e)) e.stopPropagation = stopPropagation;
            if (!('target'          in e)) e.target = e.srcElement;
            if (!('relatedTarget'   in e)) e.relatedTarget = (e.srcElement === e.toElement) ? e.fromElement : e.toElement;
            if (!('currentTarget'   in e)) e.currentTarget = el;
            var d = el.ownerDocument || el.document || el;
            if (!('pageX'           in e)) e.pageX = (d.body.scrollLeft||d.documentElement.scrollLeft) + e.clientX;
            if (!('pageY'           in e)) e.pageY = (d.body.scrollTop ||d.documentElement.scrollTop ) + e.clientY;
            if (!e.detail && e.wheelDelta) e.detail = -(e.wheelDelta/120)*4;
        }
        function indexOf(listeners, a, b, c) {
            for (var i = 0, len = listeners.length; i < len; i++) {
                var l = listeners[i];
                if (l.a === a && l.b === b && l.c === c) return i;
            }
            return -1;
        }
        if ('attachEvent' in window) {
            return function $e(element) {
                if ('addEventListener' in element) return element;
                return (function(el) {
                    var listeners = [];
                    el.addEventListener = function(a, b, c) {
                        if (indexOf(listeners, a, b, c) >= 0) return;
                        var f = function(e) { compat(e, el); b.call(el, e); };
                        el.attachEvent('on' + a, f);
                        listeners.push({ a: a, b: b, c: c, f: f});
                    };
                    el.removeEventListener = function(a, b, c) {
                        var index = indexOf(listeners, a, b, c);
                        if (index < 0) return;
                        el.detachEvent('on' + a, listeners[index].f);
                        listeners.splice(index, 1);
                    };
                    return el;
                })(element);
            }
        }
        else {
            return function(el) {
                if (el.addEventListener) return el;
                el.addEventListener = el.removeEventListener = function() {};
                throw 'Neither "addEventListener" nor "attachEvent" is supported on this browser.';
            }
        }
    })();
    T.$e = $e;
    /**
     * IECover (for drag & drop)
     */
    /*@cc_on
    var IECover = {
        STYLE : [
            '.wnp_iecover {',
            '    position: absolute;',
            '    width: 100%;',
            '    height: 100%;',
            '    filter: alpha(opacity=0);',
            '}'
        ].join('\n'),
        initialize : function() {
            addStyle(IECover.STYLE);
            delete IECover.STYLE;
            delete IECover.initialize;
        },
        putCover: function(element) {
            if (IECover.initialize) IECover.initialize();
            var img = element.ownerDocument.createElement('img');
            img.src = Consts.WNP_IMAGE_EMPTY;
            img.className = 'wnp_iecover';
            element.insertBefore(img, element.firstChild);
        },
        process : function(func) {
            func();
        },
        processCover : function(element, func) {
            var cover = element.querySelector('.wnp_iecover');
            if (!cover && hasClass(element, 'wnp_iecover')) {
                cover = element;
            }
            if (cover) func(cover);
        }
    }
    T.IECover = IECover;
    @*/

    function isNative(func) {
        return typeof func == 'function' && /^function\s+\w+\([^)]*?\)\s*\{\s*\[native code\]\s*\}$/.test(func.toString());
    }
    T.isNative = isNative;
    function uescape(s) {
        return escape(s).replace(/%([0-9A-F]{2})/g, '\\u00$1').replace(/%u/g, '\\u');
    }
    T.uescape = uescape;
    function toJSON(o) {
        if (o == null) return 'null';
        var c = o.constructor;
        if (c === Boolean) return o.toString();
        if (c === Number ) return isNaN(o) ? '"NaN"' : !isFinite(o) ? '"Infinity"' : o.toString(10);
        if (c === String ) return '"' + uescape(o) + '"';
        if (c === Array  ) {
            var tmp = [];
            for (var i = 0; i < o.length; i++) {
                tmp[i] = toJSON(o[i]);
            }
            return '[' + tmp.join(',') + ']';
        }
        if (typeof o == 'object') {
            var tmp = [];
            for (var i in o) {
                if (Object.prototype.hasOwnProperty.call(o, i)) {
                    tmp.push('"' + uescape(i) + '":' + toJSON(o[i]));
                }
            }
            return '{' + tmp.join(',') + '}';
        }
        return '\"' + uescape(o.toString()) + '\"';
    }
    T.toJSON = toJSON;
    var escapeHTML = (function() {
        var dv;
        return function escapeHTML(str, d) {
            if (dv == null) {
                dv = (d||document).createElement('div');
                setTimeout(function() { dv = null; }, 0);
            }
            dv.textContent = /*@cc_on dv.innerText = @*/ str;
            return dv.innerHTML;
        };
    })();
    T.escapeHTML = escapeHTML;
    function formatNumber(d) {
        return d.toString().replace(/(\d{1,3})(?=(?:\d\d\d)+$)/g, "$1,"); //http://nanto.asablo.jp/blog/2007/12/07/2479257
    };
    T.formatNumber = formatNumber;
    function getAbsolutePosition(el) {
        var p = el.offsetParent, x = el.offsetLeft, y = el.offsetTop;
        while (p) {
            x += p.offsetLeft; y += p.offsetTop;
            if (!browser.webkit) {  x -= p.scrollLeft; y -= p.scrollTop; }
            p = p.offsetParent;
        }
        return { x : x, y : y }
    };
    T.getAbsolutePosition = getAbsolutePosition;
    function hasClass(el, className) {
        //http://d.hatena.ne.jp/higeorange/20090613/1244821192
        return new RegExp('(?:^|\\s)' + className + '(?:\\s|$)').test(el.className);
    }
    T.hasClass = hasClass;
    function appendClass(el, className) {
        if (!el) return;
        if (new RegExp('(?:^|\\s)' + className + '\\s*$').test(el.className)) return;
        removeClass(el, className);
        el.className += ' ' + className;
    }
    T.appendClass = appendClass;
    function removeClass(el, className) {
        if (!el) return;
        var orgClassName = el.className;
        var newClassName = orgClassName.replace(new RegExp('(?:^|\\s)' + className + '(?:\\s|$)', 'g'), '').replace(/\s+/g, ' ').replace(/^\s|\s$/, '');
        if (orgClassName != newClassName) {
            el.className = newClassName;
        }
    }
    T.removeClass = removeClass;
    function addStyle(styleStr, doc) {
        var document = doc || window.document;
        var style = document.createElement('style');
        style.type = 'text/css';
        style.style.display = 'none';
        if (/*@cc_on !@*/true) { style.textContent = styleStr; } else { style.styleSheet.cssText = styleStr; }
        document.body.appendChild(style);
        return style;
    }
    T.addStyle = addStyle;
    function setStyleEnabled(style, enabled) {
        style.disabled = !enabled;
        if (style.sheet) style.sheet.disabled = !enabled; // Webkit.
    }
    T.setStyleEnabled = setStyleEnabled;
    function getStyle(element, property, pseudo) {
        return (
            element.currentStyle
            ||
            element.ownerDocument.defaultView.getComputedStyle(element, pseudo || '')
        )[property];
    }
    T.getStyle = getStyle;
    function $XS(xpath, context) {
        return document.evaluate(xpath,context||document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;
    }
    T.$XS = $XS;
    function replace (x, y) {
        if (!y || x === y) {
            var p = x.parentNode;
            var n = x.nextSibling;
            p.removeChild(x);
            p.insertBefore(x, n);
        }
        else {
            x.parentNode.replaceChild(y, x);
        }
    }
    T.replace = replace;
    var indexOf = (function() {
        if (Array.prototype.indexOf) {
            return function indexOf(array, element)  {
                return array.indexOf(element);
            }
        }
        else {
            return function indexOf(array, element)  {
                for (var i = 0, len = array.length; i < len; i++) {
                    if (element === array[i]) return i;
                }
                return -1;
            }
        }
    })();
    T.indexOf = indexOf;
    var lastIndexOf = (function() {
        if (Array.prototype.lastIndexOf) {
            return function lastIndexOf(array, element)  {
                return array.lastIndexOf(element);
            }
        }
        else {
            return function lastIndexOf(array, element)  {
                for (var i = array.length - 1; i >= 0; i--) {
                    if (element === array[i]) return i;
                }
                return -1;
            }
        }
    })();
    T.lastIndexOf = lastIndexOf;
    function findVideoTitle(a) {
        var title = '';
        if (!/<script/i.test(a.innerHTML)) {
            var title = (a.textContent/*@cc_on || a.innerText || '' @*/).replace(/^\s+|\s+$/g, '');
            if (!title) {
                var img = a.getElementsByTagName('img')[0];
                if (img) title = (img.alt || '').replace(/^\s+|\s+$/g, '');
            }
        }
        if (!title) {
            var videoid = a.href.replace(/.*?watch\/(\w+).*/, '$1');
            if (document.evaluate) {
                var aa = $XS('/\/a[contains(@href,"watch/' + videoid + '") and not(descendant::img)]', a.ownerDocument);
                if (aa) title = (aa.textContent/*@cc_on || aa.innerText || '' @*/).replace(/^\s+|\s+$/g, '');
            }
            else {
                var an = a.ownerDocument.getElementsByTagName('a');
                var findHref = 'watch/' + videoid;
                for (var i = 0, len = an.length; i < len; i++) {
                    var aa = an[i];
                    if (aa.href.indexOf(findHref) >= 0 && !/<script|<img/i.test(aa.innerHTML)) {
                        title =  (aa.textContent/*@cc_on || aa.innerText || '' @*/).replace(/^\s+|\s+$/g, '');
                        if (title) break;
                    }
                }
            }
        }
        return title;
    }
    T.findVideoTitle = findVideoTitle;
    function createPlayInfo(el) {
        var an = el.getElementsByTagName('a');
        if (an.length == 0 && el.nodeName == 'A') {
            an = [el];
        }
        var items = [],
            video = {},
            title = {},
            image = {};
        for (var i = 0; i < an.length; i++) {
            var a = an[i];
            if (a != el && /\bnofollow\b/.test(a.getAttribute('rel'))) continue;
            var m;
            if (m = /(http:\/\/www\.nicovideo\.jp\/watch\/(\w+))/.exec(a.href)) {
                var videoid = m[2];
                if (!video[videoid]) {
                    items.push(videoid);
                    video[videoid] = m[1];
                }
                if (/<script/i.test(a.innerHTML)) continue;
                var img = a.getElementsByTagName('img')[0];
                if (img && /\/_\.gif$/.test(img.src)) continue; // lazyimage.
                if (img) {
                    title[videoid] = title[videoid] || img.alt;
                    image[videoid] = image[videoid] || img.src;
                }
                if (!title[videoid]) {
                    var desc = a.textContent/*@cc_on || a.innerText || '' @*/;
                    if (!/^\s*http/.test(desc)) {
                        title[videoid] = desc;
                    }
                }
            }
        }
        return { items: items, video: video, title: title, image: image }
    }
    T.createPlayInfo = createPlayInfo;
    function createVideoInfo(playInfo, index) {
        var videoid = playInfo.items[index || 0];
        return {
            id        : videoid,
            url       : playInfo.video ? playInfo.video[videoid] : null,
            title     : playInfo.title ? playInfo.title[videoid] : null,
            thumbnail : playInfo.image ? playInfo.image[videoid] : null
        }
    }
    T.createVideoInfo = createVideoInfo;
    function createPlayInfoFromUrl(url, callback) {
        var loader = document.createElement('iframe');
        loader.src = url;
        loader.style.display = 'none';
        $e(loader).addEventListener('load', function() {
            var playlist = createPlayInfo(loader.contentWindow.document.documentElement);
            loader.parentNode.removeChild(loader);
            callback(playlist);
        }, false);
        document.getElementsByTagName('body')[0].appendChild(loader);
    }
    T.createPlayInfoFromUrl = createPlayInfoFromUrl;
    var makeNicoLinks = (function() {
        var makeNicoReg = /(https?:\/\/[-_.!~*()a-zA-Z0-9;\/?:@&=+$,%#]+)|\b([a-z]{2}\d+)|(mylist\/\d+)|(^|\D)(\d{10})(?!\d)/mg;
        return function makeNicoLinks(str) {
            return str.replace(makeNicoReg, function(str, $1, $2, $3, $4, $5){
                if ($1) return ' <a href="' + $1 + '" target="_blank">' + $1 + '</a> ';
                if ($2) {
                    if ($2 == 'mp3') return $2;
                    var co = $2.substring(0, 2) == 'co';
                    if (co) return ' <a href="http://com.nicovideo.jp/community/' + $2 + '" target="_blank">'+ $2 + '</a> ';
                    else    return ' <a href="http://www.nicovideo.jp/watch/' + $2 + '" target="_blank">'+ $2 + '</a> ';
                }
                if ($3) return ' <a href="http://www.nicovideo.jp/' + $3 + '" target="_blank">'+ $3 + '</a> ';
                if ($5) return $4 + ' <a href="http://www.nicovideo.jp/watch/' + $5 + '" target="_blank">'+ $5 + '</a> ';
            });
        };
    })();
    T.makeNicoLinks = makeNicoLinks;
    function createPlayInfoFromText(text) {
        var dv = document.createElement('div');
        if (text.indexOf('>') > 0) {
            dv.innerHTML = text.replace(/<script(?:[ \t\r\n][^>]*)?>[\S\s]*?<\/script[ \t\r\n]*>|<\/?(?:i?frame|html|script|object)(?:[ \t\r\n][^<>]*)?>/gi, ' '); // from oAutoPagerize.
        }
        else {
            dv.innerHTML = makeNicoLinks(text);
        }
        return createPlayInfo(dv);
    }
    T.createPlayInfoFromText = createPlayInfoFromText;
    function extend(d, s) {
        for (var p in s) d[p] = s[p];
        return d;
    }
    T.extend = extend;
    function postError(e) {
        if (window.opera) opera.postError(e);
        else if (window.console) {
            if (e.name != null && e.message != null) {
                console.error('[Error:\nname: ' + e.name + '\nmessage: ' + e.message + '\n]');
            }
            else {
                console.error(e);
            }
        }
    }
    T.postError = postError;
    /**
     * EventDispatcher
     * @see http://www.fladdict.net/blog-jp/archives/2005/06/javascript.php
     * @see http://www.adobe.com/support/documentation/jp/flex/1/mixin/mixin3.html
     */
    var EventDispatcher = function() {};
    (function() {
        var ec = '__ed_eventContainer';
        EventDispatcher.prototype.addEventListener = function(type, listener) {
            if (this[ec]       == null) this[ec]       = new Object(); 
            if (this[ec][type] == null) this[ec][type] = new Array(); 
            this.removeEventListener(type, listener);
            this[ec][type].push(listener);
        };
        EventDispatcher.prototype.removeEventListener = function(type, listener) {
            if (this[ec] == null || this[ec][type] == null) return;
            var listeners = this[ec][type];
            for (var i = listeners.length - 1; i >= 0; i--) {
                if ((listeners[i] === listener) ? listeners.splice(i, 1) : false) break;
            }
        };
        EventDispatcher.prototype.dispatchEvent = function(event) {
            if (this[ec] == null || this[ec][event.type] == null) return;
            if (event.target == null) event.target = this;
            var listeners = this[ec][event.type];
            for (var i = 0, len = listeners.length; i < len; i++) {
                try {
                    var l = listeners[i];
                    if (typeof(l) == 'function') l.call(this, event);
                    else new Function(l).call(this, event);
                }
                catch(e) {
                    postError(e);
                }
            }
        };
    })()
    EventDispatcher.initialize = function(obj) {
        extend(obj, EventDispatcher.prototype);
    };
    T.EventDispatcher = EventDispatcher;
    /**
     * class ListElementIterator
     */
    function ListElementIterator(listElement) {
        this.initialize.apply(this, arguments);
    }
    ListElementIterator.prototype = {
        initialize : function(listElement) {
            this.listElement = listElement;
            this.item = null;
        },
        count : function() {
            var n = 0, childs = this.listElement.childNodes;
            for (var i = 0, len = childs.length; i < len; i++) {
                if (childs[i].nodeType == 1) n++;
            }
            return n;
        },
        indexOf : function(item) {
            var n = 0, childs = this.listElement.childNodes;
            for (var i = 0, len = childs.length; i < len; i++) {
                if (childs[i].nodeType == 1) {
                    if (childs[i] === item) return n;
                    n++;
                }
            }
            return -1;
        },
        current : function(item) {
            if (item && item.parentNode != this.listElement) throw 'illegal argument.';
            if (arguments.length > 0) this.item = item;
            return this;
        },
        first : function() {
            var c = this.listElement.firstChild;
            while (c && c.nodeType != 1) { c = c.nextSibling };
            return this.current(c);
        },
        last : function() {
            var c = this.listElement.lastChild;
            while (c && c.nodeType != 1) { c = c.previousSibling };
            return this.current(c);
        },
        index : function(index) {
            var n = 0, c = this.listElement.firstChild;
            while (c) {
                if (c.nodeType == 1) {
                    if (n == index) break;
                    n++;
                }
                c = c.nextSibling;
            }
            return this.current(c);
        },
        next : function(item) {
            var c = item || this.item;
            if (c) do { c = c.nextSibling } while (c && c.nodeType != 1);
            return this.current(c);
        },
        prev : function(item) {
            var c = item || this.item;
            if (c) do { c = c.previousSibling } while (c && c.nodeType != 1);
            return this.current(c);
        },
        isNullThenFirst : function() {
            if (this.item == null) this.first();
            return this;
        },
        isNullThenLast : function() {
            if (this.item == null) this.last();
            return this;
        }
    };
    T.ListElementIterator = ListElementIterator;
    /**
     * class Soar
     *   increase(decrease) target's property value rapidly.
     * -- public fields -- *
     * [constructor]
     *   object           - target object.
     *   option           - (optional)
     *     dualation        soaring time.
     *     delay            soaring interval time.
     *     coe              soaring ratio (0-1).
     * [method]
     *   from(attr)       - initial property values.
     *   to(attr)         - last property values.
     *   go()             - begin soaring.
     *   cancel()         - cancel soaring.
     * [propety]
     * [event]
     *   finish           - finish soaring.
     * ------------------- *
     * -- examples ------- *
     * 1.
     *   var soar = new Soar(div);
     *   soar.to({scrollTop: 100});
     *   soar.go();
     * 2.
     *   new Soar(div.style).from({width:'100px'}).to({width:'200px'}).go();
     *   new Soar(div.style).from({marginLeft:'0'}).to({marginLeft:'-100.0%'}).go();
     */
    function Soar(object, option) {
        this.object = object;
        var o = option || {};
        this.duration = o.duration || 500;
        this.delay = o.delay || 10;
        this.coe = (o.coe != null) ? o.coe : 0.15;
    }
    EventDispatcher.initialize(Soar.prototype);
    Soar.prototype.from = function(attr) {
        this._from = attr;
        return this;
    };
    Soar.prototype.to = function(attr) {
        this._to = attr;
        return this;
    }
    Soar.prototype.go = function (win) {
        this.cancel();
        var obj = this.object;
        this.window = win || (obj.ownerDocument ? (obj.ownerDocument.defaultView/*@cc_on || ie.window(obj) @*/) : null) || window;
        for (var p in this._from) {
            obj[p] = this._from[p];
        }
        var target = [];
        for (var p in this._to) {
            var start = parseFloat(obj[p]);
            var m = /(-?[0-9]+\.?([0-9]*))(.*)/.exec(this._to[p]);
            var dest  = parseFloat(m[1]);
            var scale = m[2].length;
            var unit  = m[3] || /[^0-9]*$/.exec(obj[p]);
            target.push({ prop: p, cur: start, dest: dest, scale: scale, unit: unit });
        }
        var n = Math.ceil(this.duration / this.delay);
        var self = this;
        var startTime = new Date().getTime();
        self.tid = this.window.setTimeout(function() {
            var now = new Date().getTime();
            var nn = (self.duration - (now - startTime)) / self.delay;
            while (n > nn && n > 0) {
                for (var i = 0, len = target.length; i < len; i++) {
                    var t = target[i];
                    t.cur = t.cur + (t.dest - t.cur) * (1/n + (1-1/n) * self.coe);
                }
                n--;
            }
            var finishCount = 0;
            for (var i = 0, len  = target.length; i < len; i++) {
                var t = target[i];
                var next = t.cur.toFixed(t.scale);
                obj[t.prop] = next + t.unit;
                if (next == t.dest) finishCount++;
            }
            if (finishCount != target.length && n > 0) {
                self.tid = self.window.setTimeout(arguments.callee, self.delay);
            }
            else {
                self.isActive = false;
                self.dispatchEvent({ type: 'finish' });
            }
        }, 0);
        this.isActive = true;
    }
    Soar.prototype.cancel = function() {
        if (this.isActive) {
            this.window.clearTimeout(this.tid);
            this.isActive = false;
        }
        this._from = null;
        return this;
    }
    T.Soar = Soar;
    /**
     * class ListUtil
     *   append useful features to list element.
     * -- public fields -- *
     * [constructor]
     *   listElement      - target element.
     * [method]
     *   select(item)     - select item.
     *   cancel()         - cancel drag.
     *   getSelectedItems() - get selected items.
     * [propety]
     *   hoverColor       - hover item's background-color.
     *   draggingColor    - dragging item's background-color.
     *   selectedColor    - selected item's background-color.
     * [event]
     *   selectioncanged  - fire event when select item.
     *   itemover         - fire event when mouseover item(except dragging).
     *   itemout          - fire event when mouseout item(except dragging).
     *   dragstart        - fire event when drag start.
     *   dragging         - fire event when dragging.
     *   dragover         - fire event when drag over other draggable element.
     *   dragend          - fire event when drag end.
     *   dragcancel       - fire event when drag cancel.
     * ------------------- *
     */
    function ListUtil() {
        this.initialize.apply(this, arguments);
    }
    EventDispatcher.initialize(ListUtil.prototype);
    ListUtil.prototype.initialize = function(listElement) {
        this.listElement = listElement;
        this.initEvents();
        this.hoverColor = '#D7EBFF';
        this.draggingColor = '#FFCCCC';
        this.selectedColor = '#B4DAFF';
        this.current = {
            selectedItems   : [],
            isMouseDown     : false,
            mouseDownItem   : null,
            mouseDownPoint  : null,
            isDragging      : false,
            dragTargetItem  : null,
            dragTargetImage : null,
            dropTargetItem  : null,
            hoveringItem    : null
        };
    };
    ListUtil.prototype.select = function(element, option) {
        var opt = option || {};
        var items = this.current.selectedItems;
        for (var i = 0, len = items.length; i < len; i++) {
            var item = items[i];
            item.style.backgroundColor = '';
            if (item === this.current.hoveringItem) {
                item.style.backgroundColor = this.hoverColor;
            }
        }
        if (element) {
            this.current.selectedItems = getSelection.call(this, element);
            var items = this.current.selectedItems;
            for (var i = 0, len = items.length; i < len; i++) {
                var item = items[i];
                item.style.backgroundColor = this.selectedColor;
            }
        }
        if (option) { // call from outer.
            this.dispatchEvent({ type: 'selectioncanged', lastSelectedItem: (this.current.selectedItems.length > 0 ? this.current.lastSelectedItem : null) });
        }
        function getSelection(element) {
            // if no modifyer key pressed, select exclusive.
            if (!opt.ctrl && !opt.shift) {
                this.current.lastSelectedItem = element;
                return [element];
            }
            // toggle select.
            if (opt.ctrl && !opt.shift) {
                var next = cleanupSelection.call(this);
                var li = lastIndexOf(next, element);
                if (li < 0) next.push(element);
                else        next.splice(li, 1);
                this.current.lastSelectedItem = element;
                return next;
            }
            // range select
            if (opt.shift) {
                var lastSelectedItem = this.current.lastSelectedItem;
                if (!lastSelectedItem || lastSelectedItem === element) {
                    return [element];
                }
                var items = (opt.ctrl ? cleanupSelection.call(this) : []);
                var next = items.concat();
                var itr = new ListElementIterator(this.listElement).first();
                var inRange = false, isEdge  = false;
                while (itr.item) {
                    var item = itr.item;
                    if (item == lastSelectedItem || item == element) {
                        isEdge = true; inRange = !inRange;
                    }
                    else {
                        isEdge = false;
                    }
                    if (inRange || isEdge) {
                        if (lastIndexOf(items, item) < 0) next.push(item);
                    }
                    itr.next();
                }
                return next;
            }
        }
        function cleanupSelection() {
            var next = [];
            var items = this.current.selectedItems;
            for (var i = 0, len = items.length; i < len; i++) {
                var item = items[i];
                if (item && item.parentNode === this.listElement) next.push(item);
            }
            return next;
        };
    };
    ListUtil.prototype.selectAll = function() {
        var itr = new ListElementIterator(this.listElement).first();
        var items = [];
        while (itr.item) {
            var item = itr.item;
            items.push(item);
            item.style.backgroundColor = this.selectedColor;
            itr.next();
        }
        this.current.selectedItems = items;
        this.dispatchEvent({ type: 'selectioncanged', lastSelectedItem: this.current.selectedItems[0] });
    };
    ListUtil.prototype.isSelectedItem = function(element) {
        var items = this.current.selectedItems;
        for (var i = 0, len = items.length; i < len; i++) {
            if (items[i] === element) return true;
        }
        return false;
    };
    ListUtil.prototype.getSelectedItems = function() {
        var next = [];
        var items = this.current.selectedItems;
        for (var i = 0, len = items.length; i < len; i++) {
            var item = items[i];
            if (item && item.parentNode === this.listElement) next.push(item);
        }
        this.current.selectedItems = next;
        if (next.length <= 1) return next.concat();
        // sort. (slow?)
        var next = [];
        var items = this.current.selectedItems;
        var itr = new ListElementIterator(this.listElement).first();
        while (itr.item) {
            if (indexOf(items, itr.item) >= 0) next.push(itr.item);
            itr.next();
        }
        this.current.selectedItems = next;
        return next.concat();
    };
    ListUtil.prototype.itemOver = function(element) {
        if (!this.isSelectedItem(element)) {
            element.style.backgroundColor = this.hoverColor;
        }
        this.dispatchEvent({ type: 'itemover', item: element });
    };
    ListUtil.prototype.itemOut = function(element) {
        if (this.isSelectedItem(element)) return;
        element.style.backgroundColor = '';
        this.dispatchEvent({ type: 'itemout', item: element });
    };
    ListUtil.prototype.dragStart = function(element) {
        if (this.current.dragTargetItem) {
            this.current.dragTargetItem.style.backgroundColor = '';
        }
        if (this.current.dropTargetItem) {
            this.current.dropTargetItem.style.background = '';
        }
        this.current.dragTargetItem = element;
        this.current.dragTargetItem.style.backgroundColor = this.draggingColor;
        this.current.dragTargetImage = this.current.dragTargetItem.querySelector('img.thumbnail').src;
        this.listElement.style.cursor = 'move';

        // deselect Text.
        if (typeof getSelection == 'function') {
            var selection = getSelection();
            if (selection && typeof selection.removeAllRanges == 'function') {
                selection.removeAllRanges();
            }
        }
        /*@cc_on 
        document.selection.empty();
        IECover.processCover(this.current.dragTargetItem, function(cover) {
            cover.style.cursor = 'move';
        }); @*/
        this.dispatchEvent({ type: 'dragstart' });
    };
    ListUtil.prototype.dragging = function() {
        this.dispatchEvent({ type: 'dragging' });
    };
    ListUtil.prototype.dragOver = function(element) {
        if (this.current.dropTargetItem && this.current.dropTargetItem !== this.current.dragTargetItem) {
            this.current.dropTargetItem.style.backgroundImage = '';
            this.current.dropTargetItem.style.backgroundPosition = '';
            this.current.dropTargetItem.style.backgroundRepeat = '';
        }
        this.current.dropTargetItem = element;
        if (this.current.dropTargetItem !== this.current.dragTargetItem) {
            this.current.dropTargetItem.style.backgroundImage = 'url("' + this.current.dragTargetImage + '")';
            this.current.dropTargetItem.style.backgroundPosition = 'center top';
            this.current.dropTargetItem.style.backgroundRepeat = 'no-repeat';
        }
        this.dispatchEvent({ type: 'dragover', item: element });
    };
    ListUtil.prototype.dragEnd = function() {
        var element = this.current.dragTargetItem;
        this.current.dragTargetItem.style.backgroundColor = this.selectedColor;
        if (this.current.dropTargetItem) {
            if (this.current.dropTargetItem !== this.current.dragTargetItem) {
                var document =  this.listElement.ownerDocument;
                for (var p = this.current.dropTargetItem; p && p !== this.current.dragTargetItem; p = p.previousSibling);
                var downTo = !!p;
                var items = this.getSelectedItems();
                var dropPlace;
                if (indexOf(items, this.current.dropTargetItem) < 0) {
                    this.current.dropTargetItem.style.background = '';
                    dropPlace = this.current.dropTargetItem;
                }
                else {
                    this.current.dropTargetItem.style.background = this.selectedColor;
                    dropPlace = document.createTextNode('');
                    this.listElement.insertBefore(dropPlace, this.current.dropTargetItem);
                }
                var df = document.createDocumentFragment();
                for (var i = 0; i < items.length; i++) {
                    df.appendChild(items[i]);
                }
                this.listElement.insertBefore(df, downTo ? dropPlace.nextSibling : dropPlace);
                if (dropPlace.nodeType == 3) dropPlace.parentNode.removeChild(dropPlace);
            }
            this.current.dropTargetItem = null;
        }
        this.current.dragTargetItem = null;
        this.listElement.style.cursor = '';
        /*@cc_on
        IECover.processCover(element, function(cover) {
            cover.style.cursor = '';
        }); @*/
        this.dispatchEvent({ type: 'dragend', item: element });
    };
    ListUtil.prototype.dragCancel = function() {
        var element = this.current.dragTargetItem;
        if (this.current.dropTargetItem) {
            this.current.dropTargetItem.style.background = '';
            this.current.dropTargetItem = null;
        }
        this.current.dragTargetItem.style.backgroundColor = this.selectedColor;
        this.current.dragTargetItem = null;
        this.listElement.style.cursor = '';
        /*@cc_on
        IECover.processCover(element, function(cover) {
            cover.style.cursor = '';
        }); @*/
        this.dispatchEvent({ type: 'dragcancel' });
    };
    ListUtil.prototype.createProxy = function(el) {
        var proxy = el.cloneNode(true);
        proxy.removeAttribute('id');
        var an = proxy.getElementsByTagName('a');
        for (var i = 0, len = an.length; i < len; i++) {
            an[i].removeAttribute('href');
        }
        return proxy;
    };
    ListUtil.prototype.cancel = function() {
        if (!this.current.isDragging) return;
        this.current.isDragging = false;
        this.scrollingCancel();
        this.dragCancel();
    };
    ListUtil.prototype.initEvents = function() {
        var document = this.listElement.ownerDocument;
        var window = document.defaultView/*@cc_on || ie.window(document) @*/;
        var self = this;
        var scrollTid = null;
        var direction = null;
        var range = 60;
        this.scrollingCancel = function() {
            if (scrollTid) {
                window.clearInterval(scrollTid);
                scrollTid = direction = null;
            }
        };
        $e(document).addEventListener('keydown', this.event_keydown = function(e) {
            if (e.keyCode === 27) {
                self.current.isMouseDown = false;
                self.current.mouseDownItem = null;
                self.current.mouseDownPoint = null;
                self.cancel();
            }
            if (e.ctrlKey && String.fromCharCode(e.keyCode || e.charCode).toLowerCase() == 'a') {
                if (getStyle(self.listElement, 'visibility') == 'hidden' || getStyle(self.listElement, 'display') == 'none') {
                    return;
                }
                self.selectAll();
            }
        }, false);
        $e(document).addEventListener('mouseup', this.event_document_mouseup = function(e) {
            self.current.isMouseDown = false;
            self.scrollingCancel();
            if (self.current.isDragging) {
                self.current.isDragging = false;
                var pos = getAbsolutePosition(self.listElement);
                pos.x += self.listElement.clientLeft;
                pos.y += self.listElement.clientTop;
                if (e.clientX >= pos.x && e.clientX <= (pos.x + self.listElement.clientWidth) && e.clientY >= pos.y && e.clientY <= (pos.y + self.listElement.clientHeight)) {
                    self.dragEnd();
                }
                else {
                    self.dragCancel();
                }
            }
            if (self.current.keyupSelect) {
                self.current.keyupSelect = false;
                self.select(self.current.mouseDownItem, { ctrl : false, shift : false });
            }
            self.current.mouseDownItem = null;
            self.current.mouseDownPoint = null;
        }, false);
        $e(document).addEventListener('mousemove', this.event_document_mousemove = function(e) {
            if (!self.current.isDragging && self.current.isMouseDown && self.current.mouseDownItem) {
                var point = self.current.mouseDownPoint;
                var r = 2;
                if (e.pageX < point.x - r || e.pageX > point.x + r || e.pageY < point.y - r || e.pageY > point.y + r) {
                    self.current.isDragging = true;
                    self.dragStart(self.current.mouseDownItem);
                    self.current.keyupSelect = false;
                }
            }
            if (self.current.isDragging) {
                e.preventDefault();
                if (e.clientY < (self.listElement.offsetTop + 25)) {
                    // scroll up
                    var sub = (self.listElement.offsetTop + 25) - e.clientY;
                    range = 50 * (Math.ceil(sub/20));
                    if (scrollTid && direction != 1) {
                        window.clearInterval(scrollTid);
                    }
                    if (direction != 1) {
                        direction = 1;
                        scrollTid = window.setInterval(function() {
                            self.listElement.scrollTop -= range;
                        }, 100);
                    }
                }
                else if (e.clientY > (self.listElement.offsetTop + self.listElement.offsetHeight - 25)) {
                    // scroll down
                    var sub = e.clientY - (self.listElement.offsetTop + self.listElement.offsetHeight - 25);
                    range = 50 * (Math.ceil(sub/20));
                    if (scrollTid && direction != 2) {
                        window.clearInterval(scrollTid);
                    }
                    if (direction != 2) {
                        direction = 2;
                        scrollTid = window.setInterval(function() {
                            self.listElement.scrollTop += range;
                        }, 100);
                    }
                }
                else {
                    self.scrollingCancel();
                }
                self.dragging();
            }
        }, false);
        $e(this.listElement).addEventListener('mousedown', this.event_element_mousedown = function(e) {
            if (e.target === e.currentTarget) return;
            var item = e.target;
            while (item.parentNode !== e.currentTarget) item = item.parentNode;
            self.current.isMouseDown = true;
            e.preventDefault();
            self.current.mouseDownItem = item;
            self.current.mouseDownPoint = { x: e.pageX, y: e.pageY };
            if (self.current.selectedItems.length > 1 && !e.ctrlKey && !e.shiftKey && self.isSelectedItem(item)) {
                self.current.keyupSelect = true;
            }
            else {
                self.select(item, { ctrl : e.ctrlKey, shift : e.shiftKey });
            }
        }, false);
        $e(this.listElement).addEventListener('mouseover', this.event_element_mouseover = function(e) {
            if (!self.current.isDragging) {
                // disable mousedown event on an inline element. (and enable link drag on Opera)
                if (e.target === e.currentTarget || /^(a|span|img|input|select|button|object|embed|iframe)$/i.test(e.target.nodeName)) {
                    $e(self.listElement).removeEventListener('mousedown', self.event_element_mousedown, false);
                }
                else {
                    $e(self.listElement).addEventListener('mousedown', self.event_element_mousedown, false);
                }
                /*@cc_on
                IECover.processCover(e.target, function(cover) {
                    $e(self.listElement).addEventListener('mousedown', self.event_element_mousedown, false);
                });@*/
            }
            /*@cc_on IECover.process(function() { e.preventDefault() }); @*/
            if (e.target !== e.currentTarget) {
                var item = e.target;
                while (item && item.parentNode !== e.currentTarget) item = item.parentNode;
                if (!item) return;
                if (item !== self.current.hoveringItem) {
                    self.current.hoveringItem = item;
                    if (self.current.isDragging) {
                        self.dragOver(item);
                    }
                    else {
                        self.itemOver(item);
                    }
                }
            }
        }, false);
        $e(this.listElement).addEventListener('mouseout', this.event_element_mouseout = function(e) {
            if (self.current.hoveringItem) {
                var currentItem = self.current.hoveringItem;
                var item = e.relatedTarget;
                while (item && item !== self.current.hoveringItem) item = item.parentNode;
                if (item !== self.current.hoveringItem) {
                    self.current.hoveringItem = null;
                    if (!self.current.isDragging) {
                        self.itemOut(currentItem);
                    }
                }
            }
        }, false);
        $e(this.listElement).addEventListener('click', this.event_element_click = function(e) {
            if (e.ctrlKey || e.shiftKey) {
                e.preventDefault();
                e.stopPropagation();
            }
        }, true);
    };
    T.ListUtil = ListUtil;
    /**
     * class TimerManager.
     */
    function TimerManager(win) {
        this.win = win || window;
        this.timeouts = {};
        this.intervals = {};
    }
    TimerManager.prototype.setTimeout = function(name, func, delay) {
        this.clear(name);
        var self = this;
        this.timeouts[name] = this.win.setTimeout(function() {
            delete self.timeouts[name];
            func();
        }, delay);
    };
    TimerManager.prototype.setInterval = function(name, func, delay) {
        this.clear(name);
        this.intervals[name] = this.win.setInterval(func, delay);
    };
    TimerManager.prototype.clear = function(name) {
        if (this.timeouts[name]) {
            this.win.clearTimeout(this.timeouts[name]);
            delete this.timeouts[name];
        }
        if (this.intervals[name]) {
            this.win.clearInterval(this.intervals[name]);
            delete this.intervals[name];
        }
    };
    T.TimerManager = TimerManager;
    /**
     * Cookie.
     */
    var Cookie = {
        get : function(key) {
            return decodeURIComponent((new RegExp('(?: |^)' + key + '=([^;]*)').exec(document.cookie) || / _ / )[1]);
        },
        set : function(key, value, expires, path, domain) {
            document.cookie = key + '=' + encodeURIComponent(value) + 
                (expires ? ('; expires=' + new Date(expires).toGMTString()) : '') +
                (path    ? ('; path=' + path) : '') +
                (domain  ? ('; domain=' + domain) : '');
        },
        del : function(key) {
            document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
        }
    };
    T.Cookie = Cookie;
    /**
     * class ListedKeyMap.
     * Map implementation which has listed keys.
     */
    function ListedKeyMap() {
        this._keys = [];
        this._values = {};
    }
    ListedKeyMap.prototype = {
        has : function(key) {
            return this._values.hasOwnProperty(key);
        },
        get : function(key) {
            return this._values[key];
        },
        getAt : function(index) {
            return this._values[this._keys[index]];
        },
        add : function(key, value) {
            if (this.has(key)) this.remove(key);
            this._values[key] = value;
            this._keys.push(key);
        },
        insertAt : function(index, key, value) {
            if (this.has(key)) return;
            this._values[key] = value;
            this._keys.splice(index, 0, key);
        },
        remove : function(key) {
            if (this.has(key)) {
                this._keys.splice(this.indexOf(key), 1);
                delete this._values[key];
            }
        },
        removeAt : function(index) {
            var key = this._keys[index];
            this._keys.splice(index, 1);
            delete this._values[key];
        },
        indexOf : (function() {
            if (Array.prototype.indexOf) {
                return function(key) { return this._keys.indexOf(key); }
            }
            else {
                return function(key) { 
                    var keys = this._keys;
                    for (var i = 0, len = keys.length; i < len; i++) {
                        if (keys[i] === key) return i;
                    }
                    return -1;
                }
            }
        })(),
        keys : function() {
            return this._keys.concat();
        },
        count : function() {
            return this._keys.length;
        }
    };
    T.ListedKeyMap = ListedKeyMap;
    /**
     * class SwfStorage.
     */
    function SwfStorage(swfUrl) {
        this.url = swfUrl;
        this.isLoaded = false;
        this.onload = null;
        this.onerror = null;
        this.timer = new TimerManager();
        this.load();
    }
    SwfStorage.prototype = {
        load : function() {
            var swf = document.createElement('embed');
            swf.setAttribute('type', 'application/x-shockwave-flash');
            swf.setAttribute('allowScriptAccess', 'always');
            swf.setAttribute('wmode', 'transparent');
            swf.setAttribute('src', this.url);
            swf.setAttribute('width', '1');
            swf.setAttribute('height', '1');
            swf.style.cssText = 'position: absolute; z-index: -1; top: 0; left: 0; width: 1px; height: 1px;';
            (document.body || document.documentElement).appendChild(swf);
            this.swf = swf;
            this.observeLoad();
        },
        observeLoad : function() {
            var self = this;
            var retry = 100;
            this.timer.setInterval('observe', function() {
                try {
                    if (test()) {
                        self.isLoaded = true;
                        self.timer.clear('observe');
                        if (self.onload) try { self.onload(); } catch(ee) { postError(ee); }
                    }
                }
                catch (e) {
                    if (--retry == 0) {
                        self.timer.clear('observe');
                        postError(e);
                        if (self.onerror) try { self.onerror(); } catch(ee) { postError(ee); }
                    }
                }
            }, 200);
            function test() {
                self.swf.setData('test', 'test', '_tmp');
                if (self.swf.getData('test', '_tmp') == 'test') {
                    self.swf.clear('_tmp');
                    return true;
                }
                return false;
            }
        },
        getData : function(key, name) {
            return this.swf.getData(key, name);
        },
        setData : function(key, data, name) {
            return this.swf.setData(key, data, name);
        },
        clear : function(name) {
            this.swf.clear(name);
        }
    };
    /**
     * class LocalStorage.
     */
    function LocalStorage(category) {
        this.isLoaded = (typeof window.localStorage != 'undefined');
        this.category = category || '';
        var self = this;
        setTimeout(function() {
            if (self.onload) try { self.onload(); } catch(e) {}
        }, 10);
    }
    LocalStorage.prototype = {
        getData : function(key, name) {
            var keyName = (this.category ? (this.category + '/') : '') + (name != null ? (name + '.' + key) : key);
            return localStorage.getItem(keyName);
        },
        setData : function(key, data, name) {
            var keyName = (this.category ? (this.category + '/') : '') + (name != null ? (name + '.' + key) : key);
            if (data == null) {
                return localStorage.removeItem(keyName);
            }
            else {
                return localStorage.setItem(keyName, data);
            }
        },
        clear : function(name) {
            var prefix = (this.category ? (this.category + '/') : '') + (name != null ? (name + '.') : '');
            var keys = [];
            if (prefix) {
                for (var i = 0, len = localStorage.length; i < len; i++) {
                    var key = localStorage.key(i);
                    if (key.indexOf(prefix) == 0) keys.push(key);
                }
            }
            else {
                for (var i = 0, len = localStorage.length; i < len; i++) {
                    var key = localStorage.key(i);
                    if (key.indexOf('/') < 0 && key.indexOf('.') < 0) keys.push(key);
                }
            }
            for (var i = 0; i < keys.length; i++) {
                localStorage.removeItem(keys[i]);
            }
        }
    };
    var createStorage = (function() {
        var storage = null;
        if (window.localStorage) {
            return function() {
                return storage || (storage = new LocalStorage('wnp'));
            }
        }
        else {
            return function() {
                return storage || (storage = new SwfStorage(Consts.WNP_STORAGE_SWF));
            }
        }
    })();
    T.createStorage = createStorage;
    /**
     * class KeyBind.
     */
    function KeyBind(target) {
        this.target = target || document;
        this.binds = [];
        this.listeners = {
            keydown: null,
            keypress: null,
            keyup: null
        };
        this.allowFilter = [];
    };
    KeyBind.KEY_MAP = {
        'backspace' : 8,
        'tab'       : 9,
        'enter'     : 13,
        'shift'     : 16,
        'ctrl'      : 17,
        'alt'       : 18,
        'pause'     : 19,
        'esc'       : 27,
        'space'     : 32,
        'pageup'    : 33,
        'pagedown'  : 34,
        'end'       : 35,
        'home'      : 36,
        'left'      : 37,
        'up'        : 38,
        'right'     : 39,
        'down'      : 40,
        'ins'       : 45,
        'del'       : 46
    };
    KeyBind.prototype.start = function() {
        var self = this;
        var isControlKindKey = false;
        var keydownCode = -1;
        var keypressCode = -1;
        $e(this.target).addEventListener('keydown', this.listeners.keydown = function(e) {
            if (!('repeat' in e)) {
                if (keydownCode === e.keyCode) {
                    e.repeat = true;
                }
                keydownCode = e.keyCode;
            }
            isControlKindKey = checkControlKindKey(e);
            if (!browser.opera) {
                if (!checkEventTarget(e) && !checkAllowFilter(e)) return;
                if (isControlKindKey) {
                    processKey(e);
                }
                else if (browser.ie || browser.webkit) {
                    if (e.ctrlKey || e.altKey) {
                        processKey(e);
                    }
                }
            }
        }, false);
        $e(this.target).addEventListener('keypress', this.listeners.keypress = function(e) {
           if (!('repeat' in e)) {
                if (keypressCode === e.keyCode) {
                    e.repeat = true;
                }
                keypressCode = e.keyCode;
            }
            if (!checkEventTarget(e) && !checkAllowFilter(e)) return;
            if (!browser.opera) {
                if (!isControlKindKey) processKey(e);
            }
            else {
                processKey(e);
            }
        }, false);
        $e(this.target).addEventListener('keyup', this.listeners.keyup = function(e) {
            keydownCode = -1;
            keypressCode = -1;
        }, false);
        function processKey(e) {
            for (var i = 0, binds = self.binds, len = binds.length; i < len; i++) {
                var shortcut = binds[i];
                if (self.checkShortcut(shortcut, e, isControlKindKey)) {
                    e.preventDefault();
                    shortcut.fn(e);
                }
            }
        }
        function checkControlKindKey(e) {
            var keyCode = e.keyCode;
            if (keyCode == KeyBind.KEY_MAP.space) return false;
            if (keyCode == KeyBind.KEY_MAP.enter) return false;
            if (keyCode >= 112 && keyCode <=135) return true; // function keys.
            for (var k in KeyBind.KEY_MAP) {
                if (KeyBind.KEY_MAP[k] == keyCode) return true;
            }
            return false;
        }
        function checkEventTarget(e) {
            if (this.target === e.target) return true;
            var target = e.target;
            var nodeName = target.nodeName.toLowerCase();
            var keyCode = e.keyCode || e.charCode;
            var available = true;
            // textarea             -> no keys are available.
            // textfield            -> only up or dowm is available.
            // select               -> available excludes tab, enter, space, up, down, pageup, pagedown.
            // other input(buttons) -> available excludes tab, enter, space.
            // other (body, etc)    -> all keys are available.
            if (nodeName == 'textarea') {
                available = false;
            }
            else if (nodeName == 'input' && _in(target.type, 'text', 'password', 'file')) {
                available = isControlKindKey && _in(keyCode, KeyBind.KEY_MAP.up, KeyBind.KEY_MAP.down);
            }
            else if (nodeName == 'select') {
                available = !_in(keyCode, KeyBind.KEY_MAP.space, KeyBind.KEY_MAP.enter) && !(isControlKindKey && _in(keyCode, KeyBind.KEY_MAP.tab, KeyBind.KEY_MAP.up, KeyBind.KEY_MAP.down, KeyBind.KEY_MAP.pageup, KeyBind.KEY_MAP.pagedown));
            }
            else if (_in(nodeName, 'input', 'button')) {
                available = !_in(keyCode, KeyBind.KEY_MAP.space, KeyBind.KEY_MAP.enter) && !(isControlKindKey && _in(keyCode, KeyBind.KEY_MAP.tab));
            }
            // always available if target is hiding.
            if (!available) {
                if (getStyle(target, 'visibility') == 'hidden' || getStyle(target, 'display') == 'none') {
                    available = true;
                }
            }
            return available;
        }
        function _in (val /*, n1, n2, ..*/) {
            for (var i = 1; i < arguments.length; i++) {
                if (val == arguments[i]) return true;
            }
            return false;
        }
        function checkAllowFilter(e) {
            var filters = self.allowFilter;
            for (var i = 0, len = filters.length; i < len; i++) {
                if (filters[i](e)) return true;
            }
            return false;
        }
    };
    KeyBind.prototype.stop = function() {
        this.target.removeEventListener('keydown', this.listeners.keydown, false);
        this.target.removeEventListener('keypress', this.listeners.keypress, false);
        this.target.removeEventListener('keyup', this.listeners.keyup, false);
        this.listeners.keydown = null;
        this.listeners.keypress = null;
        this.listeners.keyup = null;
    };
    KeyBind.prototype.clear = function() {
        this.binds = [];
    };
    KeyBind.prototype.dispose = function() {
        this.stop();
        delete this.binds;
        delete this.target;
    };
    KeyBind.prototype.add = function(ch, fn) {
        var shortcut = this.parseShortcut(ch);
        shortcut.fn = fn;
        this.binds.push(shortcut);
    };
    KeyBind.prototype.remove = function(ch) {
        var sha = this.parseShortcut(ch);
        var newBinds = null;
        for (var i = 0, binds = this.binds, len = binds.length; i < len; i++) {
            var shb = binds[i];
            if (sha.ch    === shb.ch    &&
                sha.shift === shb.shift &&
                sha.alt   === shb.alt   &&
                sha.ctrl  === shb.ctrl
            ) {
                if (!newBinds) newBinds = binds.slice(0, i);
            }
            else {
                if (newBinds) newBinds.push(shb);
            }
        }
        if (newBinds != null) {
            this.binds = newBinds;
        }
    };
    KeyBind.prototype.addAllowFilter = function(func) {
        this.allowFilter.push(func);
    };
    KeyBind.prototype.parseShortcut = function(str) {
        var shortcut = {};
        var cmds = str.toLowerCase().split(/\s+/);
        for(var i = 0, len = cmds.length; i < len; i++) {
            var cmd = cmds[i];
            if      (cmd === 'shift') shortcut.shift = true;
            else if (cmd === 'alt'  ) shortcut.alt   = true;
            else if (cmd === 'ctrl' ) shortcut.ctrl  = true;
        }
        shortcut.ch = cmds[0];
        return shortcut;
    };
    KeyBind.prototype.checkShortcut = function(shortcut, e, isControlKindKey) {
        if (shortcut.ch == '*') return true;
        if (/^(?:[0-9A-Za-z]|enter|space)$/.test(shortcut.ch)) {
            if (!!shortcut.shift != e.shiftKey) return false;
        }
        else {
            if (shortcut.shift && !e.shiftKey) return false;
        }
        if (!!shortcut.alt   != e.altKey ) return false;
        if (!!shortcut.ctrl  != e.ctrlKey) return false;
        var keyCode = e.keyCode || e.charCode;
        if (shortcut.ch == 'space') return keyCode == KeyBind.KEY_MAP.space;
        if (shortcut.ch == 'enter') return keyCode == KeyBind.KEY_MAP.enter;
        if (KeyBind.KEY_MAP[shortcut.ch] != null) {
            return keyCode == KeyBind.KEY_MAP[shortcut.ch] && isControlKindKey;
        }
        if (/^f\d+$/.test(shortcut.ch)) {
            return shortcut.ch == ('f' + (keyCode - 111)) && isControlKindKey; // "f1" : 112
        }
        return shortcut.ch == String.fromCharCode(keyCode).toLowerCase() && !isControlKindKey;
    };
    T.KeyBind = KeyBind;
    /**
     * class Platform
     */
    function Platform() {
        this.commands = new ListedKeyMap();
        this.currentMode = '';
        this.keyBinds = {};
        this.currentKeyBind = this.keyBinds[''] = new KeyBind();
        this.currentKeyBind.start();
    }
    Platform.prototype.bindCommand = function(command) {
        this.commands.add(command.name, command);
    };
    Platform.prototype.doCommand = function(commandName) {
        var cmd = this.commands.get(commandName);
        if (cmd) {
            cmd.fn.apply(this, Array.prototype.slice.call(arguments, 1));
        }
    };
    Platform.prototype.bindShortcut = function(commandName, key, mode) {
        var self = this;
        var keyBind = this.keyBinds[mode || ''];
        if (!keyBind) {
            keyBind = this.keyBinds[mode] = new KeyBind();
        }
        keyBind.add(key, function(e) { self.doCommand(commandName, e); });
    };
    Platform.prototype.unbindShortcut = function(key, mode) {
        var keyBind = this.keyBinds[mode || ''];
        if (!keyBind) return;
        keyBind.remove(key);
    };
    Platform.prototype.changeMode = function(mode) {
        if (this.currentKeyBind) this.currentKeyBind.stop();
        this.currentKeyBind = this.keyBinds[mode || ''];
        if (this.currentKeyBind) this.currentKeyBind.start();
    };
    Platform.prototype.clearMode = function(mode) {
        this.changeMode(null);
    };
    T.Platform = Platform;
    /**
     * class ClipboardReciever 
     * -- public fields -- *
     * [constructor]
     *   doc     - document object to observe.
     * [property]
     *   text    - pasted text.
     * [event]
     *   onpaste - fire event when pasted text.
     * ------------------- *
     */
    function ClipboardReciever(doc) {
        this.build(doc || document);
        this.onpaste = null;
    }
    ClipboardReciever.prototype.build = function(document) {
        var txt = document.createElement('textarea');
        txt.style.cssText = 'position: absolute; top: -1px; left: -1px; width : 1px; height: 1px; ';
        var self = this;
        
        function attach() {
            txt.value = '';
            document.body.appendChild(txt);
            txt.focus();
        }
        function detach() {
            txt.blur();
            if (txt.parentNode) txt.parentNode.removeChild(txt);
        }
        function onpaste() {
            self.text = txt.value;
            txt.value = '';
            if (self.onpaste) self.onpaste(self);
            self.text = null;
        }
        $e(document).addEventListener('keydown', function(e) {
            if (e.keyCode == 17) {
                attach();
            }
        }, false);
        $e(txt).addEventListener('blur', detach, false);
        $e(txt).addEventListener('keyup', function(e) {
            if (e.keyCode == 86) {
                if (txt.value) onpaste();
            }
            if (e.keyCode == 17) {
                detach();
            }
        }, false);
        function observeKey(e) {
            if (e.keyCode == 86) {
                if (txt.value) onpaste();
            }
            else {
                //e.preventDefault();
            }
        }
        $e(txt).addEventListener('keydown', observeKey, false);
        $e(txt).addEventListener('keypress', observeKey, false);
        this.element = txt;
    };
    T.ClipboardReciever = ClipboardReciever;
}
WNP.BUILD_FUNC = BUILD_FUNC;
function BUILD_WNP(T) {
    if (!T) T = window;
    /**
     * class WNPCore
     *   nicovideo viewer.
     * -- public fields -- *
     * [method]
     *   play(videoid)    - play the video of videoid(or url).
     *   stop()           - stop playing video.
     *   fillView()       - resize player to container size.
     *   restoreView()    - cancel fill.
     *   alternativeView()- show alternative still image.
     *   setControlShowing(boolean) - show or hide control of flv player.
     * [propety]
     *   element          - player element.
     *   current          - current statuses.
     *       videoinfo        - set when video loaded. (has [videoid, url, thumb, title, desc] property.)
     *       style            - current style.
     *                          fill      : fill view.
     *                          restore   : original page view.
     *                          alternate : alternative still image.
     *       isPlaying        - if playing video then true, else false.
     *       isControlShowing - if control showing then true else false.
     *       errorWhenDeleted - raise error when the movie has been deleted.
     * [event]
     *   load             - fire event when the video page loaded.
     *   start            - fire event when the video started.
     *   error            - fire event when could't load video. (deleted or other)
     *   finish           - fire event when finished playing video.
     *   fatal            - fire event when fatal error occured. (logout, overaccess)
     * ------------------- *
     */
    function WNPCore() {
        this.initialize.apply(this, arguments);
    };
    WNPCore.STYLE_FILL      = 'fill';
    WNPCore.STYLE_RESTORE   = 'restore';
    WNPCore.STYLE_ALTERNATE = 'alternate';
    WNPCore.emptyFunc = new Function();
    EventDispatcher.initialize(WNPCore.prototype);
    WNPCore.prototype.initialize = function(document, name) {
        this.element = this.build(document || window.document, name);
        this.current = {
            videoinfo : null,
            location  : null,
            isPlaying : false,
            isPausing : false,
            isLoading : false,
            isHiding  : false,
            isMute    : false,
            isRepeat  : false,
            isCommentOff : false,
            style     : WNPCore.STYLE_FILL,
            isControlShowing : false,
            autoRelayout : true,
            errorWhenDeleted : true,
            alternativeElement : null,
            alternativeElementSize : null
        };
        this.observeInterval = 500;
        this.emptyView();
        this.timer = new TimerManager(this.element.ownerDocument.defaultView || ie.window(this.element));
    }
    WNPCore.prototype.build = function(document, name) {
        this._ = {};
        var dv = document.createElement('div');
        var borderBox = browser.mozilla ? '-moz-box-sizing : border-box;' : browser.webkit ? '-webkit-box-sizing : border-box;' : '';
        dv.style.cssText = [
            'box-sizing: border-box;', borderBox,
            'width: 100%; height: 100%;',
            'color: white;',
            'background-color: #4F586D;',
            'margin: 0; padding: 0;',
            'border-style: solid;',
            'border-color: #050608 black;',
            'border-width: 0;',
            'overflow: hidden;',
            'position: relative;'
        ].join('');
        dv.innerHTML = [
            '<div style="position: absolute; margin: 0; padding: 0; border: none; width: 100%; height: 100%; display: none; border-style: solid; box-sizing: border-box; ', borderBox, 'border-color: #050608 black;">',
            '  <img style="display: none">',
            '  <p style="position:absolute; right: 5px; bottom: 15px; font-size: 30px; font-weight: bold; color: #AAA;"></p>',
            '</div>',
            '<iframe name="' + (name || '') + '" class="wnp_nicoflame" style="margin: 0; padding: 0; border: none; " frameborder="0" scrolling="no" width="970" height="540" src="about:blank"></iframe>',
        ].join('');
        this._.container = dv;
        this._.loadingbx = dv.childNodes[0];
        this._.loadimage = dv.childNodes[0].getElementsByTagName('img')[0];
        this._.caption = dv.childNodes[0].getElementsByTagName('p')[0];
        this._.nicoframe = dv.childNodes[1];
        return this._.container;
    };
    WNPCore.prototype.show = function() {
        this.current.isHiding = false;
        this.element.style.width = '100%';
        this.element.style.height = '100%';
        this.layout();
    };
    WNPCore.prototype.hide = function() {
        this.current.isHiding = true;
        this.element.style.width = '0';
        this.element.style.height = '0';
        this.element.style.borderWidth = '0';
        this._.loadingbx.style.display = 'none';
    };
    WNPCore.prototype.detach = function() {
        if (this.element && this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
        }
    };
    WNPCore.prototype.nico = function() {
        var nicoWindow   = (this._.nicoframe.parentNode) ? this._.nicoframe.contentWindow : null; // for ie.
        var nicoDocument = (nicoWindow) ? nicoWindow.document : null;
        return {
            window : nicoWindow,
            document : nicoDocument,
            getPlayer : getPlayer
        }
        function getPlayer() {
            return nicoDocument ? nicoDocument.getElementById('flvplayer') : null;
        }
    };
    WNPCore.prototype.loadingStart = function() {
        this.current.isLoading = true;
        this._.caption.innerHTML = 'now loading.';
        this._.caption.style.display = '';
    };
    WNPCore.prototype.loadingEnd = function() {
        this.current.isLoading = false;
        this._.caption.style.display = 'none';
    };
    WNPCore.prototype.setAlternativeView = function(element, width, height) {
        if (element == null) {
            this.current.alternativeElement = null;
            this.current.alternativeElementSize = null;
            return;
        }
        this.current.alternativeElement = element;
        this.current.alternativeElementSize = { width: width, height: height };
        if (this.current.style == WNPCore.STYLE_ALTERNATE) {
            this.alternativeView();
        }
    };
    WNPCore.prototype.play = function(videoinfo) {
        // resume if 0 arguments.
        if (!videoinfo && this.current.isPlaying) {
            this.resume();
            return;
        }
        this._.container.style.backgroundColor = 'black';
        this.current.videoinfo = videoinfo;
        var video_url = videoinfo.url || videoinfo.id || videoinfo;
        if (!/^http:/.test(video_url)) video_url = 'http://www.nicovideo.jp/watch/' + video_url;
        if (this._.nicoframe.parentNode === this._.container) {
            this._.container.removeChild(this._.nicoframe);
        }
        this._.nicoframe.src = video_url;
        this.current.isPlaying = true;
        this.current.isPausing = false;
        this.loadingStart();
        this.layout();
        this._.container.appendChild(this._.nicoframe);
        this.current.location = this._.nicoframe.src;
        this.current.loaded = 0;
        this.current.playhead = 0;
        this.observeLoad();
    };
    WNPCore.prototype.stop = function() {
        this.current.isPlaying = false;
        this.current.isPausing = false;
        this.timer.clear('observe');
        this.emptyView();
        this.current.videoinfo = null;
        this.current.location = null;
        this.current.loaded = 0;
        this.current.playhead = 0;
        this.current.alternativeElement = null;
    };
    WNPCore.prototype.pause = function() {
        this.current.isPausing = true;
        var flvplayer = this.nico().getPlayer();
        if (!flvplayer) return;
        try {
            flvplayer.ext_play(0);
        }
        catch(e) { postError(e) }
    };
    WNPCore.prototype.resume = function() {
        this.current.isPausing = false;
        var flvplayer = this.nico().getPlayer();
        if (!flvplayer) return;
        try {
            flvplayer.ext_play(1);
        }
        catch(e) { postError(e) }
    };
    WNPCore.prototype.setStyle = function(style) {
        if (this.current.style != style) {
            this.current.style = style;
            this.layout();
        }
    };
    WNPCore.prototype.layout = function() {
        if (this.current.isHiding) return;
        if (!this.current.isPlaying) {
            this.emptyView();
            return;
        }
        if (this.current.isLoading && this.current.style === WNPCore.STYLE_FILL) {
            this.alternativeView();
            this.current.style = WNPCore.STYLE_FILL;
            return;
        }
        switch (this.current.style) {
            case WNPCore.STYLE_RESTORE:   this.restoreView();     break;
            case WNPCore.STYLE_ALTERNATE: this.alternativeView(); break;
            default:                      this.fillView();        break;
        }
    };
    WNPCore.prototype.sight = function() {
        try {
            var nico = this.nico();
            var flvplayer = nico.getPlayer();
            var p = getAbsolutePosition(flvplayer);
            if (this.current.size.viewW && this.current.size.viewW < Consts.ORG_PLAYER_MINIMUM_WIDTH) {
                p.x += (Consts.ORG_PLAYER_MINIMUM_WIDTH - this.current.size.viewW) / 2;
            }
            nico.window.scrollTo(p.x, p.y);
        }
        catch(e) { postError(e) }
    };
    WNPCore.prototype.emptyView = function() {
        this._.container.style.borderWidth = '0';
        this._.container.style.backgroundColor = '#4F586D';
        this._.loadingbx.style.display = 'none';
        if (this._.nicoframe.parentNode == this._.container) {
            this._.container.removeChild(this._.nicoframe);
        }
    };
    WNPCore.prototype.fillView = function() {
        if (!this.current.isPlaying) return;
        this.current.style = WNPCore.STYLE_FILL;
        this.current.isControlShowing = false;
        try {
            // calculate player width, height.
            var w = this._.container.offsetWidth;
            var h = this._.container.offsetHeight;
            this._.nicoframe.style.display = 'none'; // for performance.
            this._.nicoframe.style.visibility = 'hidden'; // for performance.
            this._.nicoframe.style.width = '100%';
            this._.nicoframe.style.height = '100%';
            this._.loadingbx.style.display = 'none';
            var viewW = w; // wmp frame
            var viewH = Math.floor(viewW * Consts.ORG_PLAYER_VIEW_HEIGHT / Consts.ORG_PLAYER_VIEW_WIDTH);
            if (viewH > h) {
                viewH = h;
                viewW = Math.floor(viewH * Consts.ORG_PLAYER_VIEW_WIDTH / Consts.ORG_PLAYER_VIEW_HEIGHT);
            }
            var playerW = Math.max(viewW, Consts.ORG_PLAYER_MINIMUM_WIDTH);
            var playerH = viewH + Consts.ORG_PLAYER_CONTROL_HEIGHT;
            this.current.size = { viewW: viewW, viewH: viewH, playerW: playerW, playerH: playerH };
            // set container's border.
            this._.container.style.borderWidth = 
                Math.ceil((h - viewH) / 2) + 'px ' + 
                Math.floor((w - viewW) / 2) + 'px ' + 
                Math.floor((h - viewH) / 2) + 'px ' + 
                Math.ceil((w - viewW) / 2) + 'px';
            // player resize.
            if (!this._.nicoframe.contentWindow || !this._.nicoframe.contentWindow.document) return;
            var nico = this.nico();
            if (!browser.mozilla) {
                nico.document.documentElement.style.overflow = 'hidden';
            }
            var flvplayer = nico.getPlayer();
            if (!flvplayer) return;
            // set player width, height.
            if (nico.window.maximizePlayer !== WNPCore.emptyFunc) {
                this._.org_maximizePlayer = nico.window.maximizePlayer;
                nico.window.maximizePlayer = WNPCore.emptyFunc;
            }
            if (!this._.wnp_restorePlayer) {
                var self = this;
                this._.wnp_restorePlayer = function() {
                    try {
                        java.lang.Thread.sleep(1000); /// prevent auto restorePlayer when then video finished.
                    }
                    catch(e) { postError(e) }
                    try {
                        self._.org_restorePlayer();
                    }
                    catch(e) { postError(e) }
                }
            }
            if (nico.window.restorePlayer !== this._.wnp_restorePlayer) {
                this._.org_restorePlayer = nico.window.restorePlayer;
                nico.window.restorePlayer = this._.wnp_restorePlayer;
            }
            flvplayer.ext_setVideoSize('fit');
            flvplayer.style.width = flvplayer.parentNode.style.width = playerW + 'px';    // for scroll.
            flvplayer.style.height = flvplayer.parentNode.style.height = playerH + 'px';
            
            // scroll to player top-left.
            this._.nicoframe.style.display = '';
            this.sight();
            this._.nicoframe.style.visibility = 'visible';
        }
        catch (e) {
            postError(e);
            this._.nicoframe.style.display = '';
            this._.nicoframe.style.visibility = 'visible';
        }
    };
    WNPCore.prototype.restoreView = function() {
        if (!this.current.isPlaying) return;
        this.current.style = WNPCore.STYLE_RESTORE;
        this.current.isControlShowing = false;
        this._.nicoframe.style.display = 'none'; // for performance.
        this._.nicoframe.style.width = '100%';
        this._.nicoframe.style.height = '100%';
        this._.container.style.borderWidth = '0';
        this._.loadingbx.style.display = 'none';
        try {
            var nico = this.nico();
            if (!browser.mozilla) {
                nico.document.documentElement.style.overflow = 'scroll';
            }
            if (this._.org_maximizePlayer && nico.window.maximizePlayer === WNPCore.emptyFunc) {
                nico.window.maximizePlayer = this._.org_maximizePlayer;
                delete this._.org_maximizePlayer;
            }
            if (this._.org_restorePlayer && nico.window.restorePlayer === this._.wnp_restorePlayer) {
                nico.window.restorePlayer = this._.org_restorePlayer;
                delete this._.org_restorePlayer;
            }
            var flvplayer = nico.getPlayer();
            flvplayer.style.width = flvplayer.parentNode.style.width = '';
            flvplayer.style.height = flvplayer.parentNode.style.height = '';
            if (browser.mozilla) {
                // avoid error on firefox3.5
                nico.window.location.href = 'javascript:void($("flvplayer").ext_setVideoSize("normal"))';
            }
            else {
                flvplayer.ext_setVideoSize('normal');
            }
        }
        catch(e) { postError(e) }
        this._.nicoframe.style.display = '';
    };
    WNPCore.prototype.alternativeView = function() {
        if (!this.current.isPlaying) return;
        this.current.style = WNPCore.STYLE_ALTERNATE;
        this._.nicoframe.style.width = '1px';  // minimum viewing.
        this._.nicoframe.style.height = '1px';
        this._.container.style.borderWidth = '0';
        this._.loadingbx.style.display = 'none';
        // set alternative element.
        var alterElement = this.current.alternativeElement;
        var alterSize = this.current.alternativeElementSize || {};
        if (!alterElement) {
            alterElement = this._.container.ownerDocument.createElement('img');
            if (this.current.videoinfo && this.current.videoinfo.thumbnail) {
                alterElement.src = this.current.videoinfo.thumbnail;
                alterSize = { width: 130, height: 100 };
            }
            else {
                alterElement.src = 'http://ec1.images-amazon.com/images/G/09/nav2/dp/no-image-no-ciu.gif';
                alterSize = { width: 192, height: 192 };
            }
        }
        alterElement.style.width = alterElement.style.height = '100%';
        alterElement.style.margin = alterElement.style.padding = '0';
        alterElement.style.border = 'none';
        alterElement.style.backgroundColor = 'black';
        this._.loadingbx.replaceChild(alterElement, this._.loadimage);
        this._.loadimage = alterElement;
        // set loadingbx border.
        var imageW = alterSize.width || 130;
        var imageH = alterSize.height || 100;
        var w = this._.container.offsetWidth, h = this._.container.offsetHeight;
        var viewW = w - 30; // fine adjustment.
        var viewH = Math.floor(viewW * imageH / imageW);
        if (viewH > h) {
            viewH = h;
            viewW = Math.floor(viewH * imageW / imageH);
        }
        this._.loadingbx.style.borderWidth = 
            Math.ceil((h - viewH) / 2) + 'px ' + 
            Math.floor((w - viewW) / 2) + 'px ' + 
            Math.floor((h - viewH) / 2) + 'px ' + 
            Math.ceil((w - viewW) / 2) + 'px';
        this._.loadingbx.style.display = 'block';
    };
    WNPCore.prototype.setControlShowing = function(show) {
        if (!this.current.isPlaying || this.current.style != WNPCore.STYLE_FILL) return;
        if (this.current.isControlShowing === !!show) return;
        this.current.isControlShowing = !!show;
        var controlHeight = Consts.ORG_PLAYER_CONTROL_HEIGHT;
        this.nico().window.scrollBy(0, controlHeight * (show ? 1 : -1));
    };
    WNPCore.prototype.setCommentOff = function(off) {
        this.current.isCommentOff = !!off;
        if (!this.current.isPlaying) return;
        var flvplayer = this.nico().getPlayer();
        if (!flvplayer) return;
        try {
            flvplayer.ext_setCommentVisible(!this.current.isCommentOff);
        }
        catch(e) { postError(e) }
    };
    WNPCore.prototype.setRepeat = function(repeat) {
        this.current.isRepeat = !!repeat;
        if (!this.current.isPlaying) return;
        var flvplayer = this.nico().getPlayer();
        if (!flvplayer) return;
        try {
            flvplayer.ext_setRepeat(this.current.isRepeat);
        }
        catch(e) { postError(e) }
    };
    WNPCore.prototype.setMute = function(mute) {
        this.current.isMute = !!mute;
        if (!this.current.isPlaying) return;
        var flvplayer = this.nico().getPlayer();
        if (!flvplayer) return;
        try {
            flvplayer.ext_setMute(this.current.isMute);
        }
        catch(e) { postError(e) }
    };
    WNPCore.prototype.seek = function(time) {
        if (!this.current.isPlaying) return;
        var flvplayer = this.nico().getPlayer();
        if (!flvplayer) return;
        try {
            var len = Number(flvplayer.ext_getTotalTime());
            var cur = Number(flvplayer.ext_getPlayheadTime());
            if (this.nextSeekTo != null) {
                if (time > 0 && cur < this.nextSeekTo) cur = this.nextSeekTo;
                if (time < 0 && cur > this.nextSeekTo) cur = this.nextSeekTo;
            }
            var to = cur + Number(time) - 2.5; // fine adjustment.
            if (isNaN(to)) return;
            if (to > len) to = len;
            if (to < 0  ) to = 0;
            this.nextSeekTo = to;
            flvplayer.ext_setPlayheadTime(to);
            flvplayer.ext_setVolume(Number(flvplayer.ext_getVolume())-1e-14); // for silence after ext_setPlayheadTime. (2009/08/07)
            var self = this;
            this.timer.setTimeout('seek', function() {
                self.nextSeekTo = null;
                self.seekTid = null;
                // for shotage of backward seek.
                var cur = Number(flvplayer.ext_getPlayheadTime());
                if (time < 0 && cur - to > 7) {
                    flvplayer.ext_setPlayheadTime(Math.max(to - 10, 0));
                    flvplayer.ext_setVolume(Number(flvplayer.ext_getVolume())+1e-14);
                }
                // for shotage of forward seek (for seekDisabled).
                if (time > 0 && to - cur > 7) {
                    flvplayer.ext_setPlayheadTime(Math.min(to + 10, len));
                    flvplayer.ext_setVolume(Number(flvplayer.ext_getVolume())+1e-14);
                }
            }, 100);
            return to;
        }
        catch(e) { postError(e) }
    };
    WNPCore.prototype.seekTo = function(sec) {
        if (!this.current.isPlaying) return;
        var flvplayer = this.nico().getPlayer();
        if (!flvplayer) return;
        try {
            var len = Number(flvplayer.ext_getTotalTime());
            var to = Number(sec);
            if (isNaN(to)) return;
            if (to > len) to = len;
            if (to <= 0) to = 0;
            flvplayer.ext_setPlayheadTime(to);
            flvplayer.ext_setVolume(Number(flvplayer.ext_getVolume())-1e-14);
            return to;
        }
        catch(e) { postError(e) }
    };
    WNPCore.prototype.playhead = function() {
        if (!this.current.isPlaying) return 0;
        return this.current.playhead || 0;
    };
    WNPCore.prototype.length = function() {
        if (!this.current.isPlaying) return -1;
        return this.current.videoinfo.length;
    };
    WNPCore.prototype.volume = function(vol) {
        if (vol == null || isNaN(vol)) return this.current.volume;
        var cur = this.current.volume;
        if (cur == null) cur = 50;
        var to = cur + Number(vol);
        return this.volumeTo(to);
    };
    WNPCore.prototype.volumeTo = function(vol) {
        if (isNaN(vol)) throw "invalid vol.";
        var to = Number(vol);
        if (to > 100) to = 100;
        if (to < 0  ) to = 0;
        this.current.volume = to;
        var flvplayer = this.nico().getPlayer();
        if (flvplayer) {
            try {
                flvplayer.ext_setVolume(to);
            }
            catch(e) { 
                postError(e);
            }
        }
        return to;
    };
    WNPCore.prototype.loaded = function() {
        if (!this.current.isPlaying) return 0;
        return this.current.loaded || 0;
    };
    WNPCore.prototype.commentNum = function() { // not work on new player.
        if (!this.current.isPlaying) return 0;
        var flvplayer = this.nico().getPlayer();
        if (!flvplayer) return 0;
        var num = Number(flvplayer.GetVariable('last_resno'));
        return num;
    };
    WNPCore.prototype.layoutIfNecessary = function() {
        if (!this.current.autoRelayout) return;
        if (!this.containerSize) this.containerSize = {};
        var container = this._.container;
        var containerSize = this._.containerSize;
        if (containerSize.width != container.offsetWidth || containerSize.height != container.offsetHeight) {
            containerSize.width = container.offsetWidth;
            containerSize.height = container.offsetHeight;
            this.layout();
            this.dispatchEvent({ type: 'resize' });
        }
    };
    WNPCore.prototype.observeLoad = function() {
        var self = this;
        this._.containerSize = { width: this._.container.offsetWidth, height: this._.container.offsetHeight };
        var retry = 50;
        this.timer.setInterval('observe', function() {
            try {
                var nico = self.nico();
                if (!nico.window)   return;
                if (!nico.document) return;
                var location;
                try { location = nico.window.location.href; } catch (e) { /* redirected to other domain. */ }
                if (location == 'about:blank') return;
                // unexpected redirect.
                if (!/^http:\/\/www\.nicovideo\.jp\/watch\/.*/.test(location)) {
                    self.stop();
                    var event = { type: 'error', message : 'unexpected redirect.' };
                    self.dispatchEvent(event);
                    if (typeof self.onerror == 'function') try { self.onerror(event); } catch(e) { postError(e) }
                    return;
                }
                // logout check.
                if (nico.window.User && !nico.window.User.id) {
                    var event = { type: 'fatal', message : Lang.PLEASE_LOGIN };
                    self.dispatchEvent(event);
                    if (typeof self.onfatal == 'function') try { self.onfatal(event); } catch(e) { postError(e) }
                    return;
                }
                var h1 = nico.document.getElementsByTagName('h1')[0];
                if (h1) {
                    // over access.
                    var h1Text = h1.textContent || h1.innerText;
                    if (h1Text.indexOf(Lang.OVER_ACCESS) >= 0 && nico.document.title.indexOf(h1Text) < 0) {
                        var event = { type: 'fatal', message : h1Text };
                        self.dispatchEvent(event);
                        if (typeof self.onfatal == 'function') try { self.onfatal(event); } catch(e) { postError(e) }
                        return;
                    }
                    // missing. 
                    if (h1Text.indexOf(Lang.MISSING) >= 0 && nico.document.title.indexOf(h1Text) < 0) {
                        self.stop();
                        var event = { type: 'error', message : h1Text };
                        self.dispatchEvent(event);
                        if (typeof self.onerror == 'function') try { self.onerror(event); } catch(e) { postError(e) }
                        return;
                    }
                }
                if (self.current.errorWhenDeleted) {
                    // delete check 1.
                    if (nico.document.getElementById('deleted_message_default')) {
                        self.stop();
                        var event = { type: 'error', message : 'this video got deleted.' };
                        self.dispatchEvent(event);
                        if (typeof self.onerror == 'function') try { self.onerror(event); } catch(e) { postError(e) }
                        return;
                    }
                    // delete check 2.
                    if (nico.window.Video && nico.window.Video.isDeleted) {
                        self.stop();
                        var event = { type: 'error', message : 'this video got deleted.' };
                        self.dispatchEvent(event);
                        if (typeof self.onerror == 'function') try { self.onerror(event); } catch(e) { postError(e) }
                        return;
                    }
                }
                self.layoutIfNecessary();
                var flvplayer = nico.getPlayer();
                if (!flvplayer) return;
                try {
                    var status = flvplayer.ext_getStatus();
                    var loadedRatio =  Number(flvplayer.ext_getLoadedRatio());
                    var totalTime = Number(flvplayer.ext_getTotalTime());
                    if (status == 'paused' || 
                       ((status == 'playing' || status == 'stopped' || status == 'load') && (loadedRatio > 0.05 || loadedRatio * totalTime > 30))) {
                        flvplayer.ext_setMute(1); // cut first noise.
                        flvplayer.ext_play(1);
                    }
                    else if (Number(flvplayer.ext_getPlayheadTime()) > 1) {
                        flvplayer.ext_play(1);
                    }
                    else {
                        return;
                    }
                }
                catch(e) {
                    return;
                }
                // stop page observing and go to next state.
                self.timer.clear('observe');
                self.nicoFrameLoaded();
                var event = { type: 'load' };
                self.dispatchEvent(event);
                if (self.onload) try { self.onload(event); } catch(e) { postError(e) }
                self.observePlay();
            }
            catch (e) {
                postError(e);
                // on error(perhaps security error), quit observing.
                if (--retry == 0) {
                    self.stop();
                    throw e;
                }
            }
        }, 200);
    };
    WNPCore.prototype.observePlay = function() {
        var self = this;
        var videoStarted = false;
        var videoFinished = false;
        var prePos = 0;
        var retry = 10;
        this.timer.setInterval('observe', function() {
            try {
                var nico = self.nico();
                // reload if location changed.
                if (!nico.window) {
                    self.stop();
                    return;
                }
                var location;
                try { location = nico.window.location.href; } catch (e) { /* redirected to other domain. */ }
                // unexpected redirect.
                if (!/^http:\/\/www\.nicovideo\.jp\/watch\/.*/.test(location)) {
                    self.stop();
                    var event = { type: 'error', message : 'unexpected redirect.' };
                    self.dispatchEvent(event);
                    if (typeof self.onerror == 'function') try { self.onerror(event); } catch(e) { postError(e) }
                    return;
                }
                if (self.current.location != location) {
                    var oldLocation = self.current.location;
                    self.current.location = location;
                    self.observeLoad();
                    var event = { type: 'jump', from: oldLocation, to: location };
                    self.dispatchEvent(event);
                    if (typeof self.onjump == 'function') try { self.onjump(event); } catch(e) { postError(e) }
                    return;
                }
                self.layoutIfNecessary();
                var flvplayer = nico.getPlayer();
                // start check.
                if (!videoStarted) {
                    if (!self.current.isPausing) {
                        flvplayer.ext_play(1);
                        var move = Number(flvplayer.ext_getPlayheadTime());
                        if (isNaN(move) || move < 2) return;
                    }
                    videoStarted = true;
                    self.dispatchEvent({ type: 'start' });
                    if (self.onstart) try { self.onstart(self) } catch(e) { postError(e) }
                }
                if (self.current.style == WNPCore.STYLE_FILL && flvplayer.ext_getVideoSize() != 'fit') { // for nicowari
                    flvplayer.ext_setVideoSize('normal');
                    self.current.style = WNPCore.STYLE_FILL;
                    if (!self.timer.timeouts['relayout']) {
                        self.timer.setTimeout('relayout', function() {
                            self.layout();
                        }, 1000);
                    }
                }
                // save current status
                var volume = flvplayer.ext_getVolume();
                if (volume != null) self.current.volume = Number(volume);
                var playhead = flvplayer.ext_getPlayheadTime();
                if (playhead != null) self.current.playhead = Number(playhead);
                if (self.current.loaded !== 1) {
                    var loaded = flvplayer.ext_getLoadedRatio();
                    if (loaded != null) self.current.loaded = Number(loaded);
                }
                
                // backward seek event.
                if (playhead < prePos) {
                    self.dispatchEvent({ type: 'back' });
                    if (self.onback) try { self.onback(self) } catch(e) { postError(e) }
                }
                prePos = playhead;
                
                // finish check.
                if (flvplayer.ext_getStatus() == 'end') {
                    if (flvplayer.ext_isRepeat()) return;
                    if (!videoFinished) {
                        videoFinished = true;
                        self.dispatchEvent({ type: 'finish' });
                        if (self.onfinish) try { self.onfinish(self) } catch(e) { postError(e) }
                        if (!self.isPlaying) return;
                    }
                }
                else {
                    videoFinished = false;
                }
            }
            catch (e) {
                postError(e);
                // on error(maybe security error), quit observing.
                if (--retry == 0) {
                    self.timer.clear('observe');
                    throw e;
                }
            }
        }, this.observeInterval || 500);
    };
    WNPCore.prototype.nicoFrameLoaded = function() {
        this.loadingEnd();
        try {
            var nico = this.nico();
            this.current.location = nico.window.location.href; // for video redirect.
            this.current.videoinfo = nico.window.Video;
            var flvplayer = nico.getPlayer();
            flvplayer.SetVariable('Overlay.onRelease', ''); // onPress 
            flvplayer.SetVariable('Overlay.hitArea', 0);
            this.setCommentOff(this.current.isCommentOff);
            this.setRepeat(this.current.isRepeat);
            this.setMute(this.current.isMute);
            if (this.current.isPausing) {
                this.pause();
            }
            if (this.current.volume != null) {
                this.volumeTo(this.current.volume);
            }
            // http://orera.g.hatena.ne.jp/miya2000/20090711/p0
            if (browser.opera && nico.window.Element.scrollTo && !/setTimeout/.test(nico.window.Element.scrollTo)) {
                var org_scrollTo = nico.window.Element.scrollTo;
                Element.scrollTo = function() { var args = arguments; setTimeout(function() { org_scrollTo.apply(this, args) }, 0.01); };
            }
            // for fix header position. (firefox, mac opera)
            if (browser.mozilla || browser.opera) {
                var header = flvplayer.ownerDocument.querySelector('div.bg_headmenu');
                if (header) {
                    header.style.position = 'absolute';
                }
            }
        }
        catch(e) { postError(e) }
        this.layout();
    };
    T.WNPCore = WNPCore;
    /**
     * WMP
     *   main object.
     */
    function WNP(Prefs) {
        this.initialize.apply(this, arguments);
    };
    WNP.prototype.initialize = function(prefs) {
        this.wnpWindow = window;
        this.build();
        this.applyPreferences();
        if (prefs) this.applyPreferences(prefs);
        this.playlist = { items: [], video: {}, title: {}, image: {} };
        this.isForceFilled = true; // fill on startup.
        this.lastOperationTime = new Date();
        this.lastUpdate = 0;
        this.menuCount = new ListElementIterator(this.wnpWindow.document.getElementById('WNP_MENU_CONTAINER')).count();
        this.currentMenuIndex = null;
        this.menuHide();
    };
    WNP.prototype.build = function() {
        var d = this.wnpWindow.document;
        this.wnpElement = d.getElementById('WNP_PLAYER');
        this.wnpCore = new WNPCore(d, 'nico_frame');
        d.getElementById('WNP_VIEW').appendChild(this.wnpCore.element);
        var self = this;
        
        var platform = new Platform();
        // bind commands.
        platform.bindCommand({ name: 'PlayStop',  fn: function() { self.playToggle(); }, desc: Lang.COMMAND_PlayStop });
        platform.bindCommand({ name: 'PlayPause', fn: function() { self.pauseToggle(); }, desc: Lang.COMMAND_PlayPause });
        platform.bindCommand({ name: 'PlayPrev',  fn: function() { self.schedulePrev(); }, desc: Lang.COMMAND_PlayPrev });
        platform.bindCommand({ name: 'PlayNext',  fn: function() { self.scheduleNext(); }, desc: Lang.COMMAND_PlayNext });
        platform.bindCommand({ name: 'VolumeUp',     fn: function() { self.volume(  5); }, desc: Lang.COMMAND_VolumeUp });
        platform.bindCommand({ name: 'VolumeUp+',    fn: function() { self.volume( 20); }, desc: Lang.COMMAND_VolumeUp_Plus });
        platform.bindCommand({ name: 'VolumeDown',   fn: function() { self.volume( -5); }, desc: Lang.COMMAND_VolumeDown });
        platform.bindCommand({ name: 'VolumeDown-',  fn: function() { self.volume(-20); }, desc: Lang.COMMAND_VolumeDown_Minus });
        platform.bindCommand({ name: 'SeekForward',    fn: function() { self.seek( 15); }, desc: Lang.COMMAND_SeekForward });
        platform.bindCommand({ name: 'SeekForward+',   fn: function() { self.seek( 60); }, desc: Lang.COMMAND_SeekForward_Plus });
        platform.bindCommand({ name: 'SeekBackward',   fn: function() { self.seek(-15); }, desc: Lang.COMMAND_SeekBackward });
        platform.bindCommand({ name: 'SeekBackward-',  fn: function() { self.seek(-65); }, desc: Lang.COMMAND_SeekBackward_Minus });
        platform.bindCommand({ name: 'SeekBackward--', fn: function() { self.seek(Number.NEGATIVE_INFINITY); }, desc: Lang.COMMAND_SeekBackward_MinusMinus });
        platform.bindCommand({ name: 'SelectNextItem',     fn: function(e) { self.selectNextItem(e.repeat); }, desc: Lang.COMMAND_SelectNextItem });
        platform.bindCommand({ name: 'SelectPrevItem',     fn: function(e) { self.selectPrevItem(e.repeat); }, desc: Lang.COMMAND_SelectPrevItem });
        platform.bindCommand({ name: 'PlaySelectedItem',   fn: function() { self.playSelectedItem(); }, desc: Lang.COMMAND_PlaySelectedItem });
        platform.bindCommand({ name: 'DeleteSelectedItem', fn: function() { self.deleteSelectedItem(); }, desc: Lang.COMMAND_DeleteSelectedItem });
        platform.bindCommand({ name: 'Menu',       fn: function() { self.menuToggle(); }, desc: Lang.COMMAND_Menu });
        platform.bindCommand({ name: 'MenuNext',   fn: function() { self.scrollMenuItem(self.currentMenuIndex + 1); }, desc: Lang.COMMAND_MenuNext });
        platform.bindCommand({ name: 'MenuPrev',   fn: function() { self.scrollMenuItem(self.currentMenuIndex - 1); }, desc: Lang.COMMAND_MenuPrev });
        platform.bindCommand({ name: 'Playlist',   fn: function() { self.playlistToggle(); }, desc: Lang.COMMAND_Playlist });
        platform.bindCommand({ name: 'History',    fn: function() { self.historyToggle(); }, desc: Lang.COMMAND_History });
        platform.bindCommand({ name: 'Preference', fn: function() { self.preferenceToggle(); }, desc: Lang.COMMAND_Preference });
        platform.bindCommand({ name: 'Comment', fn: function() { self.commentOnOff(); }, desc: Lang.COMMAND_Comment });
        platform.bindCommand({ name: 'Loop',    fn: function() { self.loopOnOff(); }, desc: Lang.COMMAND_Loop });
        platform.bindCommand({ name: 'Repeat',  fn: function() { self.repeatOnOff(); }, desc: Lang.COMMAND_Repeat });
        platform.bindCommand({ name: 'Mute',    fn: function() { self.muteOnOff(); }, desc: Lang.COMMAND_Mute });
        platform.bindCommand({ name: 'Open',    fn: function() { self.openPrompt(); }, desc: Lang.COMMAND_Open });
        platform.bindCommand({ name: 'View',    fn: function() { self.layoutToggle(); }, desc: Lang.COMMAND_View });
        platform.bindCommand({ name: 'NicoControl', fn: function() { self.controlToggle(); }, desc: Lang.COMMAND_NicoControl });
        platform.bindCommand({ name: 'AlwaysOnTop', fn: function() { self.applyPreferences({ always_on_top: !self.prefs.always_on_top }); }, desc: Lang.COMMAND_AlwaysOnTop });
        platform.bindCommand({ name: 'Shuffle',    fn: function() { self.shuffle(); }, desc: Lang.COMMAND_Shuffle });
        // bind default shortcut.
        var shortcutList = this.getDefaultKeybordShortcut();
        for (var i = 0; i < shortcutList.length; i++) {
            var item = shortcutList[i];
            platform.bindShortcut(item.command, item.key);
        }
        this.platform = platform;
        
        // release focus by force.
        this._blur = function () {
            if (!self._blurInput) {
                var input = d.createElement('input');
                input.type = 'radio';
                input.style.cssText = 'position:absolute; top: -1px; left: -1px; width: 1px; height: 1px; ';
                var menu = d.getElementById('WNP_MENU');
                menu.parentNode.insertBefore(input, menu);
                self._blurInput = input;
            }
            self._blurInput.focus();
        };
        
        function escapeKey(e) {
            self._blur();
            self.restoreControlPanel();
            self.scheduleCancel();
            if (self.isSliding) {
                self.isSliding = false;
                d.getElementById('WNP_MENU_SLIDER').style.backgroundColor = '';
                d.body.style.cursor = '';
            }
            if (self.isVolumeSliding) {
                self.isVolumeSliding = false;
            }
        }
        
        $e(d).addEventListener('keypress', function(e) { if (e.keyCode == 27) e.preventDefault(); }, false); // prevent restore fullscreen. (Please restore by F11.)
        $e(d).addEventListener('keydown', function(e) { if (e.keyCode == 27) escapeKey(e); }, false);
        this.wnpCore.addEventListener('load', this._wnp_load = function(e) {
            var wnpCore = this;
            var iframe = wnpCore.element.querySelector('.wnp_nicoflame');
            $e(iframe.contentWindow).addEventListener('focus', function(e) { 
                if (wnpCore.current.style != WNPCore.STYLE_RESTORE) {
                    self._blur(); // for ie, firefox, chrome.
                    setTimeout(function() { wnpCore.sight(); }, 10); // for chrome.
                }
            }, false);
        }, false);
        
        function bindEventCommand(el, type, command) {
            $e(el).addEventListener(type, function(e) {
                e.preventDefault();
                e.stopPropagation();
                platform.doCommand(command);
            }, false);
        }
        function bindEventFunc(el, type, func, p, s, c) {
            $e(el).addEventListener(type, function(e) {
                if (p) e.preventDefault();
                if (s) e.stopPropagation();
                func(e);
            }, !!c);
        }
        
        bindEventCommand(d.getElementById('WNP_C_PREV'), 'click', 'PlayPrev');
        bindEventCommand(d.getElementById('WNP_C_PLAY'), 'click', 'PlayStop');
        bindEventCommand(d.getElementById('WNP_C_NEXT'), 'click', 'PlayNext');
        bindEventCommand(d.getElementById('WNP_C_LOOP'), 'click', 'Loop');
        bindEventCommand(d.getElementById('WNP_C_NICO_REPEAT'), 'click', 'Repeat');
        bindEventCommand(d.getElementById('WNP_C_NICO_COMM'), 'click', 'Comment');
        bindEventCommand(d.getElementById('WNP_C_NICO_MUTE'), 'click', 'Mute');
        bindEventCommand(d.getElementById('WNP_C_NICO_OPEN'), 'click', 'Open');
        bindEventCommand(d.getElementById('WNP_C_PLAYLIST'), 'click', 'Playlist');
        bindEventCommand(d.getElementById('WNP_C_HISTORY'), 'click', 'History');
        bindEventCommand(d.getElementById('WNP_C_PREFERENCE'), 'click', 'Preference');
        bindEventCommand(d.getElementById('WNP_C_SCREEN'), 'click', 'View');
        bindEventCommand(d.getElementById('WNP_C_NICO_PAUSE'), 'click', 'PlayPause');
        bindEventCommand(d.getElementById('WNP_HEADER'), 'click', 'Menu');
        bindEventCommand(d.getElementById('WNP_FOOTER'), 'click', 'NicoControl');
        bindEventCommand(d.getElementById('WNP_C_ALWAYS_ON_TOP'), 'click', 'AlwaysOnTop');
        bindEventCommand(d.getElementById('WNP_C_SHUFFLE'), 'click', 'Shuffle');
        
        bindEventFunc(d.getElementById('WNP_C_PLAYLIST_URI'), 'click', function(e) { self.wnpWindow.alert(Lang.SAVE_PLAYLIST_USAGE); }, true, true);
        bindEventFunc(d.getElementById('WNP_HEADER'), 'mousemove', function(e) { self.hideHeaderAfter(5000); });
        bindEventFunc(d.getElementById('WNP_FOOTER'), 'mouseover', function(e) { self.restoreControlPanel(); });
        bindEventFunc(d.getElementById('WNP_FOOTER'), 'mousemove', function(e) { self.hideFooterAfter(5000); });
        bindEventFunc(d.getElementById('WNP_C_PLAYLIST_STYLE'), 'click', function(e) { self.applyPreferences({ playlist_style_simple: e.currentTarget.checked }, true); }, false, true);
        bindEventFunc(d.getElementById('WNP_C_REMOVE_ON_FINISH'), 'click', function(e) { self.applyPreferences({ remove_on_finish: e.currentTarget.checked }, true); }, false, true);
        bindEventFunc(d.getElementById('WNP_C_USE_HISTORY'), 'click', function(e) { self.applyPreferences({ use_history: e.currentTarget.checked }, true); }, false, true);
        bindEventFunc(d.getElementById('WNP_C_PREF_PLAYLIST_STYLE'), 'click', function(e) { self.applyPreferences({ playlist_style_simple: e.currentTarget.checked }, true); }, false, true);
        bindEventFunc(d.getElementById('WNP_C_PREF_REMOVE_ON_FINISH'), 'click', function(e) { self.applyPreferences({ remove_on_finish: e.currentTarget.checked }, true); }, false, true);
        bindEventFunc(d.getElementById('WNP_C_PREF_USE_HISTORY'), 'click', function(e) { self.applyPreferences({ use_history: e.currentTarget.checked }, true); }, false, true);
        bindEventFunc(d.getElementById('WNP_C_PREF_SKIP_DELETED_VIDEO'), 'click', function(e) { self.applyPreferences({ skip_deleted_video: e.currentTarget.checked }, true); }, false, true);
        bindEventFunc(d.getElementById('WNP_C_PREF_USE_OFFTIMER'), 'click', function(e) { self.applyPreferences({ use_offtimer: e.currentTarget.checked }, true); }, false, true);
        bindEventFunc(d.getElementById('WNP_C_PREF_OFFTIMER_MINUTE'), 'change', function(e) { self.applyPreferences({ offtimer_minute: e.currentTarget.value }, true); }, false, true);
        bindEventFunc(d.getElementById('WNP_C_PREF_USE_LOOP_BREAK'), 'click', function(e) { self.applyPreferences({ use_loop_break: e.currentTarget.checked }, true); }, false, true);
        bindEventFunc(d.getElementById('WNP_C_PREF_LOOP_BREAK_COUNT'), 'change', function(e) { self.applyPreferences({ loop_break_count: e.currentTarget.value }, true); }, false, true);
        bindEventFunc(d.getElementById('WNP_C_PREF_CANCEL_JUMP'), 'click', function(e) { self.applyPreferences({ cancel_jump: e.currentTarget.checked }, true); }, false, true);
        bindEventFunc(d.getElementById('WNP_C_PREF_FORCE_VISIT_ON_OPERA'), 'click', function(e) { self.applyPreferences({ force_visit_on_opera: e.currentTarget.checked }, true); }, false, true);
        bindEventFunc(d.getElementById('WNP_C_SET_DEFAULT'), 'click', function(e) { self.setDefaultPreferences(); }, false, true);

        bindEventFunc(d.getElementById('WNP_C_NICO_SEEKBAR'), 'click', function(e) {
            if (!self.wnpCore.current.isPlaying) return;
            var seekbar = e.currentTarget;
            var width = seekbar.offsetWidth;
            var loc = (e.offsetX != null) ? e.offsetX : (e.layerX - seekbar.offsetLeft);
            var len = self.wnpCore.length();
            if (len) {
                self.wnpCore.seekTo(len * (loc / width));
                self.updateControlPanelStatus();
            }
        }, false, true);
        
        var volumeBar = d.getElementById('WNP_C_NICO_VOLUMEBAR');
        bindEventFunc(volumeBar, 'click', function() {}, false, true);
        /*@cc_on IECover.putCover(volumeBar); @*/
        bindEventFunc(volumeBar, 'mousedown', function(e) {
            self.isDragging = true;
            self.isVolumeSliding = true;
            setVolume(e);
            var controlPanel = self.wnpWindow.document.getElementById('WNP_CONTROL_PANEL');
            controlPanel.style.visibility = 'visible';
        }, true, true);
        
        var menuSlider = d.getElementById('WNP_MENU_SLIDER');
        /*@cc_on IECover.putCover(menuSlider); @*/
        bindEventFunc(menuSlider, 'mousedown', function(e) {
            self.isDragging = true;
            self.isSliding = true;
            menuSlider.style.backgroundColor = '#696969';
            d.body.style.cursor = 'e-resize';
        }, true, true);
        bindEventFunc(d, 'mousemove', function(e) {
            /*@cc_on
            if (self.isDragging) e.preventDefault();
            @*/
            if (self.isVolumeSliding) {
                setVolume(e);
            }
        });
        bindEventFunc(d, 'mouseup', function(e) {
            if (self.isDragging) {
                self.showControlPanel();
            }
            if (self.isSliding) {
                self.isSliding = false;
                menuSlider.style.backgroundColor = '';
                d.body.style.cursor = '';
                var w = self.wnpWindow.innerWidth || ie.clientWidth(d);
                var h = self.wnpWindow.innerHeight || ie.clientHeight(d);
                var x = e.clientX;
                var y = e.clientY;
                if (y >= 0 && y <= h) {
                    var ratio = Math.ceil((1 - x / w) * 100);
                    if (ratio < 10 ) ratio = 10;
                    if (ratio > 100) ratio = 100;
                    self.prefs.menu_width_ratio = ratio;
                    self.menuShow();
                }
            }
            if (self.isVolumeSliding) {
                 self.isVolumeSliding = false;
            }
            if (self.isDragging) {
                self.timer.setTimeout('slide_end', function() { // for ie's click event.
                    self.isDragging = false;
                }, 100);
            }
        });
        
        function setVolume(e) {
            var p = getAbsolutePosition(volumeBar);
            var width = volumeBar.offsetWidth;
            var loc = (e.clientX <= p.x)         ? 0 :
                      (e.clientX >= p.x + width) ? 100
                                                 : (e.clientX - p.x);
            var len = 100;
            self.wnpCore.volumeTo(len * (loc / width));
            self.updateControlPanelStatus();
        }

        function updateLastOperationTime() { 
            self.lastOperationTime = new Date();
        }
        bindEventFunc(d, 'keydown', updateLastOperationTime, false, false, true);
        bindEventFunc(d, 'mousemove', updateLastOperationTime, false, false, true);
        //bindEventFunc(this.wnpWindow, 'focus', updateLastOperationTime);
        bindEventFunc(this.wnpWindow, 'resize', updateLastOperationTime);
        bindEventFunc(this.wnpWindow, 'blur', function() {
            if (self.prefs.always_on_top) {
                self.timer.setTimeout('always_on_top', function() {
                    self.wnpWindow.focus();
                }, 500);
            }
        }, false);
        
        var list = d.getElementById('WNP_PLAYLIST_ITEMS');
        var listUtil = new ListUtil(list);
        listUtil.addEventListener('dragend', function() {
            self.updatePlaylistURI();
        });
        listUtil.addEventListener('selectioncanged', function(e) {
            self.selectionIterator.current(e.lastSelectedItem);
        });
        listUtil.addEventListener('itemover', function(e) {
            var videoInfo = createVideoInfo(createPlayInfo(e.item));
            self.showStatus(videoInfo.title, 5);
        });
        listUtil.addEventListener('itemout', function(e) {
            self.clearStatus();
        });
        listUtil.hoverColor = Colors.item_hover;
        listUtil.selectedColor = Colors.item_selected;
        listUtil.draggingColor = Colors.item_dragging;
        this.listUtil = listUtil;
        
        bindEventFunc(list, 'click', function(e) {
            if (e.target === e.currentTarget) return;
            var item = e.target;
            var a = null;
            while (item.parentNode !== e.currentTarget) {
                if (item.nodeName == 'A') { a = item; }
                item = item.parentNode;
            }
            if (e.target.getAttribute('name') == 'deleteButton') {
                self.remove(item);
                e.preventDefault();
            }
            if (a) {
                if (/(http:\/\/www\.nicovideo\.jp\/watch\/\w+)/.test(a.href)) {
                    self.play(self.playlistIterator.indexOf(item));
                    e.preventDefault();
                }
            }
        });
        
        var histroy_list = d.getElementById('WNP_HISTORY_ITEMS');
        bindEventFunc(histroy_list, 'click', function(e) {
            if (e.target === e.currentTarget) return;
            var item = e.target;
            var a = null;
            while (item.parentNode !== e.currentTarget) {
                if (item.nodeName == 'A') { a = item; }
                item = item.parentNode;
            }
            if (e.target.getAttribute('name') == 'deleteButton') {
                histroy_list.removeChild(item);
                e.preventDefault();
            }
            if (a) {
                if (/(http:\/\/www\.nicovideo\.jp\/watch\/\w+)/.test(a.href)) {
                    var pl = createPlayInfo(item);
                    if (self.wnpCore.current.isPlaying) {
                        WNP.insert(pl);
                    }
                    else {
                        WNP.play(pl);
                    }
                    histroy_list.removeChild(item);
                    e.preventDefault();
                }
            }
        });

        this.thumbnailMap = {};
        var lazyLoad = function() { self.lazyloadThumbnailImagesLater(); };
        bindEventFunc(this.wnpWindow, 'resize', lazyLoad);
        bindEventFunc(list, 'scroll', lazyLoad);

        this.timer = new TimerManager(this.wnpWindow);
        this.preloads = new ListedKeyMap();

        this.playlistIterator = new ListElementIterator(list);
        this.selectionIterator = new ListElementIterator(list);

        this.prefs = this.getDefaultPreferences();
        
        this.storage = createStorage();
        this.storage.onload = function () {
            self.loadPreferences();
        };
        
        // Clipboard Support.
        var clipboard = new ClipboardReciever(d);
        clipboard.onpaste = function() {
            var playlist = createPlayInfoFromText(clipboard.text);
            if (playlist.items.length > 0) {
                self.addEx(playlist, { start: !self.wnpCore.current.isPlaying });
            }
        };
        platform.keyBinds[''].addAllowFilter(function(e) {
            return e.target === clipboard.element || e.target === self._blurInput;
        });
    };
    WNP.prototype.openPrompt = function() {
        var text = this.wnpWindow.prompt(Lang.PLEASE_INPUT_VIDEOID_OR_URL, '');
        if (text) {
            var playlist = createPlayInfoFromText(text);
            if (playlist.items.length > 0) {
                this.addEx(playlist, { start: !this.wnpCore.current.isPlaying });
            }
        }
    };
    WNP.prototype.selectNextItem = function(isKeyRepeat) {
        if (!this.selectionIterator.item) {
            this.selectionIterator.current(this.playlistIterator.item);
        }
        this.selectionIterator.next();
        if (isKeyRepeat) {
            this.selectionIterator.isNullThenLast();
        }
        else {
            this.selectionIterator.isNullThenFirst();
        }
        if (this.selectionIterator.item == null) return;
        this.listUtil.select(this.selectionIterator.item);
        this.scrollPlaylistTo(this.selectionIterator.item);
    };
    WNP.prototype.selectPrevItem = function(isKeyRepeat) {
        if (!this.selectionIterator.item) {
            this.selectionIterator.current(this.playlistIterator.item).isNullThenFirst();
        }
        else {
            this.selectionIterator.prev();
            if (isKeyRepeat) {
                this.selectionIterator.isNullThenFirst();
            }
            else {
                this.selectionIterator.isNullThenLast();
            }
        }
        if (this.selectionIterator.item == null) return;
        this.listUtil.select(this.selectionIterator.item);
        this.scrollPlaylistTo(this.selectionIterator.item);
    };
    WNP.prototype.playSelectedItem = function() {
        this.scheduleItem(this.selectionIterator.item);
    };
    WNP.prototype.deleteSelectedItem = function() {
        if (!this.isMenuShowing || this.currentMenuIndex != 0) return;
        var items = this.listUtil.getSelectedItems();
        for (var i = 0, len = items.length; i < len; i++) {
            var item = items[i];
            if (this.selectionIterator.item === item) {
                this.selectionIterator.next();
            }
            this.remove(item);
        }
        this.selectionIterator.isNullThenLast();
        if (this.selectionIterator.item) {
            this.listUtil.select(this.selectionIterator.item);
        }
        this.scrollPlaylistTo(this.selectionIterator.item);
    };
    WNP.prototype.scrollPlaylistTo = function(item) {
        if (!item) return;
        if (item.nodeType != 1) return;
        if (this.scrollSoar != null) {
            this.scrollSoar.cancel();
        }
        var list = this.wnpWindow.document.getElementById('WNP_PLAYLIST_ITEMS');
        this.scrollSoar = new Soar(list);
        var allowance = item.offsetHeight; // 1row.
        this.scrollSoar
            .to({scrollTop: Math.min(Math.max(item.offsetTop - list.clientTop - allowance, 0), list.scrollHeight - list.clientHeight)})
            .go(this.wnpWindow);
        var self = this;
        this.scrollSoar.addEventListener('finish', function() {
            self.scrollSoar = null;
        });
    };
    WNP.prototype.seek = function(time) {
        this.wnpCore.seek(time);
        if (time != Number.NEGATIVE_INFINITY) {
            this.showControlPanel();
        }
        else {
            // delay.
            var self = this;
            this.wnpWindow.setTimeout(function(){ self.showControlPanel(); }, 10);
        }
    };
    WNP.prototype.volume = function(vol) {
        this.wnpCore.volume(vol);
        this.showControlPanel();
    };
    WNP.prototype.showControlPanel = function() {
        this.clearStatus();
        this.updateControlPanelStatus();
        var controlPanel = this.wnpWindow.document.getElementById('WNP_CONTROL_PANEL');
        controlPanel.style.visibility = 'visible';
        this.timer.setTimeout('controlPanel', function(){
            controlPanel.style.visibility = '';
        }, 3000);
    };
    WNP.prototype.hideControlPanel = function() {
        this.timer.clear('controlPanel');
        var controlPanel = this.wnpWindow.document.getElementById('WNP_CONTROL_PANEL');
        controlPanel.style.visibility = 'hidden';
    };
    WNP.prototype.updateControlPanelStatus = function() {
        var cur = this.wnpCore.playhead();
        var len = this.wnpCore.length();
        this.wnpWindow.document.getElementById('WNP_C_NICO_SEEKBAR_BAR').style.width = (len ? (Math.ceil(cur / len * 100) + '%') : '0');
        var vol = this.wnpCore.volume();
        if (vol != null) {
            this.wnpWindow.document.getElementById('WNP_C_NICO_VOLUMEBAR_BAR').style.width = Math.ceil(vol / 100 * 100) + '%';
        }
    };
    WNP.prototype.observingVideoStart = function() {
        var self = this;
        this.timer.setInterval('observingVideo', function() {
            self.updateControlPanelStatus();
        }, 1000);
    };
    WNP.prototype.observingVideoStop = function() {
        this.timer.clear('observingVideo');
    };
    WNP.prototype.restoreControlPanel = function() {
        if (this.isDragging) return;
        this.timer.clear('controlPanel');
        var controlPanel = this.wnpWindow.document.getElementById('WNP_CONTROL_PANEL');
        controlPanel.style.visibility = '';
    };
    WNP.prototype.hideHeaderAfter = function(sec) {
        if (!this._hideHeaderStyle) {
            var hide_style_str = [
                'div.wnp_header:hover .control { visibility: hidden; }'
            ].join('\n');
            this._hideHeaderStyle = addStyle(hide_style_str, this.wnpWindow.document);
        }
        var style = this._hideHeaderStyle;
        setStyleEnabled(style, false);
        var self = this;
        this.timer.setTimeout('hideHeaderAfter', function() {
            setStyleEnabled(style, true);
        }, sec);
    };
    WNP.prototype.hideFooterAfter = function(sec) {
        if (!this._hideFooterStyle) {
            var hide_style_str = [
                'div.wnp_footer:hover .control { visibility: hidden; }',
                'div.wnp_footer:hover .wnp_control_panel { visibility: hidden; }'
            ].join('\n');
            this._hideFooterStyle = addStyle(hide_style_str, this.wnpWindow.document);
        }
        var style = this._hideFooterStyle;
        setStyleEnabled(style, false);
        var self = this;
        this.timer.setTimeout('hideHeaderAfter', function() {
            setStyleEnabled(style, true);
        }, sec);
    };
    WNP.prototype.controlToggle = function() {
        if (this.isDragging) return;
        this.wnpCore.setControlShowing(!this.wnpCore.current.isControlShowing);
    };
    WNP.prototype.menuToggle = function() {
        if (this.isMenuShowing) {
            this.menuHide();
        }
        else {
            this.showMenuItem(this.currentMenuIndex);
        }
    };
    WNP.prototype.playlistToggle = function() {
        this.toggleMenuItem(0);
    };
    WNP.prototype.historyToggle = function() {
        this.toggleMenuItem(1);
    };
    WNP.prototype.preferenceToggle = function() {
        this.toggleMenuItem(2);
    };
    WNP.prototype.toggleMenuItem = function(index) {
        if (this.currentMenuIndex === index) {
            if (this.isMenuShowing) this.menuHide();
            else                    this.menuShow();
        }
        else {
            this.showMenuItem(index);
        }
    };
    WNP.prototype.scrollMenuItem = function(index) {
        if (!this.isMenuShowing) {
            if (index >= 0) {
                this.showMenuItem(0);
            }
            else {
                this.showMenuItem(this.menuCount - 1);
            }
        }
        else {
            if (this.menuSoar && this.menuSoar.isActive) {
                this.menuSoar.cancel();
            }
            if (this.isMenuShowing && (index < 0 || index >= this.menuCount)) {
                this.menuHide();
            }
            else {
                var menuContainer = this.wnpWindow.document.getElementById('WNP_MENU_CONTAINER');
                var menus = menuContainer.querySelectorAll('.wnp_menu_content');
                for (var i = 0; i < menus.length; i++) {
                    menus[i].style.visibility = '';
                }
                if (!this.menuSoar) {
                    this.menuSoar = new Soar(menuContainer.style);
                    this.menuSoar.from({marginLeft: '0.0%'});
                    var self = this;
                    this.menuSoar.addEventListener('finish', function() {
                        self.showMenuItem(self.currentMenuIndex);
                    }, false);
                }
                if (browser.mozilla) {
                    this.showMenuItem(index);
                }
                else {
                    this.menuSoar.to({marginLeft: -(100 * index) + '.0%'}).go(this.wnpWindow);
                    this.currentMenuIndex = index;
                }
            }
        }
    };
    WNP.prototype.showMenuItem = function(index) {
        if (index == null) index = 0;
        if (index < 0) index = 0;
        if (index >= this.menuCount) index = this.menuCount - 1;
        var menuContainer = this.wnpWindow.document.getElementById('WNP_MENU_CONTAINER');
        
        // hide other panel to avoid focus invisible controls.
        var menus = menuContainer.querySelectorAll('.wnp_menu_content');
        for (var i = 0; i < menus.length; i++) {
            if (i == index) {
                menus[i].style.visibility = '';
            }
            else {
                menus[i].style.visibility = 'hidden';
            }
        }
        
        // for Opera10.10 bug (can't operate select element's index from script.)
        if (index == 2) {
            replace(document.getElementById('WNP_C_PREF_OFFTIMER_MINUTE'));
            replace(document.getElementById('WNP_C_PREF_LOOP_BREAK_COUNT'));
        }
        
        menuContainer.style.marginLeft = -(100 * index) + '%';
        if (!this.isMenuShowing) this.menuShow();
        this.currentMenuIndex = index;
    };
    WNP.prototype.menuShow = function() {
        var menu = this.wnpWindow.document.getElementById('WNP_MENU');
        var view = this.wnpWindow.document.getElementById('WNP_VIEW');
        menu.style.borderRightWidth = '5px'; // for Opera9.5
        menu.style.visibility = '';
        menu.style.width = this.prefs.menu_width_ratio + '%';
        view.style.width = (100-this.prefs.menu_width_ratio) + '%';
        this.isMenuShowing = true;
    };
    WNP.prototype.menuHide = function() {
        var menu = this.wnpWindow.document.getElementById('WNP_MENU');
        var view = this.wnpWindow.document.getElementById('WNP_VIEW');
        menu.style.borderRightWidth = '0'; // for Opera9.5
        menu.style.visibility = 'hidden';
        menu.style.width = '0';
        view.style.width = '100%';
        this.isMenuShowing = false;
        this.currentMenuIndex = null;
    };
    WNP.prototype.playToggle = function() {
        if (this.wnpCore.current.isPlaying) this.stop();
        else {
            if (!this.playlistIterator.item) {
                this.playlistIterator.first();
            }
            this.play();
        }
    };
    WNP.prototype.pauseToggle = function() {
        if (!this.wnpCore.current.isPlaying) {
            this.playToggle();
            return;
        }
        if (this.wnpCore.current.isPausing) {
            this.wnpCore.resume();
        }
        else {
            this.wnpCore.pause();
        }
        this.updatePauseButton();
    };
    WNP.prototype.updatePauseButton = function() {
        var button = this.wnpWindow.document.getElementById('WNP_C_NICO_PAUSE');
        if (this.wnpCore.current.isPausing || !this.wnpCore.current.isPlaying) {
            button.innerHTML = '<img src="' + Consts.WNP_IMAGE_PLAY + '">';
        }
        else {
            button.innerHTML = '<img src="' + Consts.WNP_IMAGE_PAUSE + '">';
        }
    };
    WNP.prototype.commentOnOff = function() {
        this.applyPreferences({ comment_off: !this.wnpCore.current.isCommentOff });
        this.showControlPanel();
    };
    WNP.prototype.loopOnOff = function() {
        this.applyPreferences({ loop: !this.prefs.loop });
    };
    WNP.prototype.repeatOnOff = function() {
        this.applyPreferences({ repeat: !this.wnpCore.current.isRepeat });
        this.showControlPanel();
    };
    WNP.prototype.muteOnOff = function() {
        this.applyPreferences({ mute: !this.wnpCore.current.isMute });
        this.showControlPanel();
    };
    WNP.prototype.addEx = function(playlist, option) {
        var opt = option || {};
        this.lastOperationTime = new Date();
        var start = opt.start && (new Date() - this.lastUpdate >= 1000); // ignore start when last update within 1sec.
        var startPoint = wnp.playlist.items.length; // add point.
        var newList = null;
        if (/^(?:http:\/\/www\.nicovideo\.jp\/watch\/)?((?:[a-z]{2})?[0-9]+)/.test(playlist.toString())) {
            newList = {items: [RegExp.$1], video: {}, title: {}, image: {}};
        }
        else if (/^http:\/\/www\.nicovideo\.jp\/.*/.test(playlist.toString())) {
            var self = this;
            createPlayInfoFromUrl(playlist.toString(), function(playlist) {
                self.addEx(playlist, option);
            });
            return;
        }
        else {
            newList = playlist;
        }

        var document = this.wnpWindow.document;
        var ul = document.getElementById('WNP_PLAYLIST_ITEMS');
        var df = document.createDocumentFragment();
        for (var i = 0, len = newList.items.length; i < len; i++) {
            var videoinfo = createVideoInfo(newList, i);
            var li = this.createPlaylistItem(videoinfo, i >= 10);
            df.appendChild(li);
        }

        var firstItem = df.firstChild;
        if (opt.type == 'insertBeforeCurrent') {
            var target = this.playlistIterator.item || ul.firstChild;
            ul.insertBefore(df, target);
        }
        else if (opt.type == 'insertAfterCurrent') {
            var target = this.playlistIterator.item || ul.firstChild;
            ul.insertBefore(df, target ? target.nextSibling : null);
        }
        else {
            ul.appendChild(df);
        }

        if (start && firstItem) {
            var self = this;
            this.wnpWindow.setTimeout(function() {
                self.lastOperationTime = 0; // scroll to start point by force.
                self.play(self.playlistIterator.indexOf(firstItem));
                self.lastOperationTime = new Date();
            }, 0); // for firefox exception.
        }
        this.updatePlaylistURI();
        this.lazyloadThumbnailImagesLater(1000);
    };
    WNP.prototype.addHistory = function(newList) {
        if (!newList) return;
        var document = this.wnpWindow.document;
        var ul = document.getElementById('WNP_HISTORY_ITEMS');
        var df = document.createDocumentFragment();
        for (var i = 0, len = newList.items.length; i < len; i++) {
            var videoInfo = createVideoInfo(newList, i);
            var li = this.createPlaylistItem(videoInfo, false);
            df.appendChild(li);
        }
        ul.appendChild(df);
    };
    WNP.prototype.createPlaylistItem = function(info, suppressThumbnail) {
        var wnpDocument = this.wnpWindow.document;
        var li = wnpDocument.createElement('li');
        var url = info.url;
        if (!url) url = 'http://www.nicovideo.jp/watch/' + info.id;
        var title = info.title || info.id;
        var thumbnail = info.thumbnail;
        if (!thumbnail) {
            if (/^[a-z]{2}/.test(info.id)) {
                thumbnail = 'http:\/\/tn-skr2.smilevideo.jp/smile?i=' + info.id.slice(2);
            }
            else {
                thumbnail = Consts.WNP_THUMB_PLACEHOLDER;
            }
        }
        if (suppressThumbnail) {
            this.thumbnailMap[info.id] = thumbnail;
            thumbnail = Consts.WNP_THUMB_PLACEHOLDER;
        }
        li.innerHTML = [
            '<div class="video_info">',
            '  <span class="playmark">\u25C6</span>',
            '  <a href="' + url + '" title="' + title + '" target="nico_frame">',
            '    <img class="thumbnail ' + (suppressThumbnail ? 'lazyLoad' : '') + '" name="' + info.id + '" src="' + thumbnail + '" width="65" height="50" alt="' + title + '">',
            '  </a>',
            '</div>',
            '<div class="video_desc">',
            '  <a href="' + url + '" name="' + info.id + '" title="' + title + '" target="nico_frame">' + title + '</a><br>',
            '  <button name="deleteButton">\u00D7</button>',
            '</div>',
        ].join('');
        /*@cc_on IECover.putCover(li); @*/
        return li;
    };
    WNP.prototype.lazyloadThumbnailImagesLater = function(delay) {
        this.timer.clear('lazyloadThumbnailImages');
        var self = this;
        if (delay == null) {
            delay = 200;
        }
        this.timer.setTimeout('lazyloadThumbnailImages', function() {
            self.lazyloadThumbnailImages();
        }, delay);
    };
    WNP.prototype.lazyloadThumbnailImages = function() {
        var ul = this.wnpWindow.document.getElementById('WNP_PLAYLIST_ITEMS');
        var lazyImages = ul.querySelectorAll('img.lazyLoad');
        if (lazyImages.length == 0) {
             this.thumbnailMap = {};
             return;
        }
        var allowance = Math.max(ul.clientHeight / 5, 150);
        var topMargin = ul.clientTop;
        var scrollTop = ul.scrollTop + topMargin;
        var scrollBottom = ul.scrollTop + topMargin + ul.clientHeight + allowance;
        for (var i = 0, len = lazyImages.length; i < len; i++) {
            var img = lazyImages[i];
            var offsetTop = img.offsetTop;
            var offsetHeight = img.offsetHeight;
            /*@cc_on
            var rect = img.getBoundingClientRect();
            offsetTop = rect.top + ul.scrollTop - ul.offsetTop;
            @*/
            if (offsetTop + offsetHeight < scrollTop) continue;
            if (offsetTop > scrollBottom) break;
            removeClass(img, 'lazyLoad');
            var thumbUrl = this.thumbnailMap[img.name];
            img.src = thumbUrl;
        }
    };
    WNP.prototype.clear = function() {
        this.playlist = { items: [], video: {}, title: {}, image: {} };
        this.playlistIterator.current(null);
        this.selectionIterator.current(null);
        var ul = this.wnpWindow.document.getElementById('WNP_PLAYLIST_ITEMS');
        while(ul.lastChild) ul.removeChild(ul.lastChild);
        this.updatePlaylistURI();
    };
    WNP.prototype.remove = function(item) {
        this.removePreload(createVideoInfo(createPlayInfo(item)));
        var ul = this.wnpWindow.document.getElementById('WNP_PLAYLIST_ITEMS');
        if (item.parentNode === ul) {
            if (item === this.playlistIterator.item) {
                // cutting corners.
                var dummy = this.wnpWindow.document.createTextNode('');
                ul.insertBefore(dummy, item);
                this.playlistIterator.current(dummy);
            }
            ul.removeChild(item);
        }
        this.lazyloadThumbnailImagesLater(1000);
        this.updatePlaylistURI();
    };
    WNP.prototype.shuffle = function() {
        var document = this.wnpWindow.document;
        var ul = document.getElementById('WNP_PLAYLIST_ITEMS');

        var childs = [];
        for (var i = 0, len = ul.childNodes.length; i < len; i++) {
            childs.push(ul.childNodes[i]);
        }
        
        // http://la.ma.la/blog/diary_200608300350.htm
        var i = childs.length;
        while(i) {
            var j = Math.random() * i | 0;
            var t = childs[--i];
            childs[i] = childs[j];
            childs[j] = t;
        }
        
        var df = document.createDocumentFragment();
        for (var i = 0, len = childs.length; i < len; i++) {
            df.appendChild(childs[i]);
        }
        ul.appendChild(df);
        
        if (this.wnpCore.current.isPlaying) {
            this.scrollPlaylistTo(this.playlistIterator.item);
        }
        this.updatePlaylistURI();
        this.lazyloadThumbnailImagesLater();
    };
    WNP.prototype.updatePlaylistURI = function() {
        this.timer.clear('updatePlaylistURI');
        var self = this;
        this.timer.setTimeout('updatePlaylistURI', function() {
            var document = self.wnpWindow.document;
            var items = document.getElementById('WNP_PLAYLIST_ITEMS');
            var playlist = { items : [], video : {}, title : {}, image : {} };
            var itr = new ListElementIterator(items).first();
            while (itr.item) {
                var playinfo = createPlayInfo(itr.item);
                var videoid = playinfo.items[0];
                playlist.items.push(videoid);
                playlist.title[videoid] = playinfo.title[videoid];
                if (/^http/.test(playinfo.image[videoid])) {
                    playlist.image[videoid] = playinfo.image[videoid];
                }
                itr.next();
            }
            self.playlist = playlist;
            var save = document.getElementById('WNP_C_PLAYLIST_URI');
            save.href = 'javascript:' + encodeURIComponent(Consts.WNP_GLOBAL_NAME + '.open(' + toJSON(playlist) + ')');
            var date = new Date();
            save.title = [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-') + '.pls';
            save.firstChild.alt = save.title;
            self.updatePrevAndNext();
            self.lastUpdate = new Date();
            //self.updateAlternativeView();
        }, 2000);
    };
    WNP.prototype.updatePrevAndNext = function() {
        var document = this.wnpWindow.document;
        var currentItem = this.playlistIterator.item;
        var itr = new ListElementIterator(document.getElementById('WNP_PLAYLIST_ITEMS'));
        var button = document.getElementById('WNP_C_PREV');
        if (itr.prev(currentItem).item) {
            var playinfo = createPlayInfo(itr.item);
            this.bindVideoInfo(button, playinfo.video[playinfo.items[0]], playinfo.title[playinfo.items[0]]);
        }
        else {
            this.unbindVideoInfo(button);
        }
        var button = document.getElementById('WNP_C_NEXT');
        if (itr.next(currentItem).item) {
            var playinfo = createPlayInfo(itr.item);
            this.bindVideoInfo(button, playinfo.video[playinfo.items[0]], playinfo.title[playinfo.items[0]]);
        }
        else{
            this.unbindVideoInfo(button);
        }
    };
    WNP.prototype.bindVideoInfo = function(a, url, title) {
        a.href = url;
        var self = this;
        a.onmouseover = function() {
            self.showStatus(title, 5);
        };
        a.onmouseout = function() {
            self.clearStatus();
        };
    };
    WNP.prototype.unbindVideoInfo = function(a) {
        a.href = 'about:blank';
        a.onmouseover = null;
        a.onmouseout = null;
    };
    WNP.prototype.play = function(index) {
        if (this.playingItem) {
            removeClass(this.playingItem, 'playing');
            this.playingItem = null;
        }
        var currentItem = this.playlistIterator.item;
        if (arguments.length > 0) {
            currentItem = this.playlistIterator.index(index).item;
        }
        if (!currentItem) {
            this.stop();
            return;
        }
        var videoinfo = createVideoInfo(createPlayInfo(currentItem));
        var title = videoinfo.title;

        this.scheduleCancel();
        this.observingVideoStop();
        this.timer.clear('preload');

        var self = this;
        
        var preloaded = this.preloads.has(videoinfo.id);
        if (preloaded) {
            var oldCore = this.wnpCore;
            this.wnpCore = this.preloads.get(videoinfo.id);
            this.preloads.remove(videoinfo.id);
            this.wnpCore.setStyle(oldCore.current.style);
            this.wnpCore.seekTo(0);
            this.wnpCore.setCommentOff(oldCore.current.isCommentOff);
            this.wnpCore.setMute(oldCore.current.isMute);
            //this.wnpCore.setRepeat(oldCore.current.isRepeat);
            this.wnpCore.volumeTo(oldCore.volume());
            this.wnpCore.observeInterval = this.prefs.observe_interval;
            this.wnpCore.current.errorWhenDeleted = this.prefs.skip_deleted_video;
            oldCore.pause();
            oldCore.hide();
            this.wnpWindow.setTimeout(function() { // for Opera 10 freeze.
                oldCore.detach();
            }, 10);
            this.wnpCore.show();
        }

        this.timer.setTimeout('play', function() {
            if (preloaded) {
                self.wnpCore.resume();
                if (!self.wnpCore.current.isLoading) { // already loaded.
                    self.wnpCore.onload();
                    self.wnpCore.onstart();
                }
            }
            else {
                self.wnpCore.play(videoinfo);
            }
            if (videoinfo.title) {
                self.wnpWindow.document.title = title + ' - ' + Consts.WNP_TITLE;
                self.showStatus(title, 5);
            }
            self.updatePauseButton();
        }, 500); // for smooth scroll.
        if (!browser.ie) this.setAlternativeView(videoinfo);

        // timeout, etc.
        this.timer.setTimeout('playTimeout', function() {
            self.showStatus("load timeout. go to next.", 5);
            self.next();
        }, this.prefs.page_timeout * 1000 + 500);
        this.wnpCore.onload = function() {
            self.timer.setTimeout('playTimeout', function() {
                self.showStatus("play timeout. go to next.", 5);
                self.next();
            }, self.prefs.video_timeout * 1000);
            // show actual title.
            if (!title || title == videoinfo.id) {
                title = self.wnpCore.current.videoinfo.title;
                self.wnpWindow.document.title = title + ' - ' + Consts.WNP_TITLE;
                self.showStatus(title, 5);
            }
            // update title and thumbnail image.
            var video_id = self.wnpCore.current.videoinfo.id;
            var thumbnail = self.wnpCore.current.videoinfo.thumbnail;
            var elements = self.wnpWindow.document.getElementsByName(video_id);
            if (elements.length == 0 && self.wnpCore.current.videoinfo.v) {
                elements = self.wnpWindow.document.getElementsByName(self.wnpCore.current.videoinfo.v);
            }
            for (var i = 0; i < elements.length; i++) {
                var el = elements[i];
                if (el.nodeName == 'IMG') {
                    if (el.src != thumbnail) el.src = thumbnail;
                    el.setAttribute('alt', title);
                }
                if (el.nodeName == 'A') {
                    el.setAttribute('title', title);
                    el.textContent = /*@cc_on el.innerText = @*/ title;
                }
            }
            self.updatePlaylistURI();
            self.timer.setTimeout('preload', function() {
                self.preloadNext();
            }, 30000);
        };
        this.wnpCore.onstart = function() {
            self.updateAlternativeView();
            self.timer.clear('playTimeout');
            self.observingVideoStart();
            if (browser.opera && self.prefs.force_visit_on_opera) {
                // force visit.
                self.wnpWindow.setTimeout(function() {
                    var w = self.wnpWindow.open(videoinfo.url, '', 'width=1,height=1,menubar=no,toolbar=no,scrollbars=no,top=0,left=10000');
                    w.blur();
                    self.wnpWindow.setTimeout(function() { w.close(); }, 800);
                    self.wnpWindow.setTimeout(function() { if (!w.closed) w.close(); }, 3000);
                    self.wnpWindow.setTimeout(function() { if (!w.closed) w.close(); }, 10000);
                }, 5000);
            }
        };
        this.wnpCore.onerror = function(e) {
            self.showStatus((e.message || 'error.') + ' go to next.', 5);
            self.next();
        };
        this.wnpCore.onfatal = function(e) {
            self.stop();
            self.wnpWindow.alert(e.message || 'fatal error.');
            self.showStatus((e.message || 'fatal error.'), 5, true);
        };
        this.wnpCore.onfinish = function() {
            if (self.prefs.use_history) {
                var playinfo = createPlayInfo(currentItem);
                self.addHistory(playinfo);
            }
            if (self.prefs.remove_on_finish) {
                self.remove(currentItem);
            }
            if (self.prefs.use_offtimer) {
                if ((new Date() - (self.lastOperationTime || 0)) > self.prefs.offtimer_minute * 60 * 1000) {
                    self.stop();
                    return;
                }
            }
            self.next();
        };
        this.wnpCore.onback = (function() {
            var backCount = 0;
            return function() {
                if (self.wnpCore.current.isRepeat) {
                    backCount = 0;
                    return;
                }
                if (new Date() - (self.lastOperationTime || 0) > 5000) {
                    backCount++;
                }
                else {
                    backCount = 0;
                }
                if (self.prefs.use_loop_break) {
                    if (backCount > self.prefs.loop_break_count) {
                        self.wnpCore.onfinish();
                    }
                }
            }
        })();
        this.wnpCore.onjump = function(e) {
            title = null; // update when jumped video onload.
            if (self.prefs.cancel_jump) {
                self.wnpCore.onfinish();
            }
        };
        
        appendClass(this.wnpElement, 'playing');
        appendClass(currentItem, 'playing');
        this.playingItem = currentItem;

        this.updatePrevAndNext();
        if ((new Date() - (this.lastOperationTime || 0)) > 10000) {
            this.scrollPlaylistTo(currentItem);
        }
    };
    WNP.prototype.stop = function() {
        this.wnpCore.stop();
        this.scheduleCancel();
        this.observingVideoStop();
        var wnpDocument = this.wnpWindow.document;
        wnpDocument.title = Consts.WNP_TITLE;
        removeClass(this.wnpElement, 'playing');
        if (this.playingItem) removeClass(this.playingItem, 'playing');
        this.timer.clear('playTimeout');
        this.timer.clear('preload');
        this.updatePauseButton();
        this.wnpWindow.document.getElementById('WNP_C_NICO_SEEKBAR').firstChild.firstChild.style.width = '0';
    };
    WNP.prototype.prev = function() {
        this.playlistIterator.prev();
        this.play();
    };
    WNP.prototype.next = function() {
        if (this.prefs.loop) this.playlistIterator.next().isNullThenFirst();
        else                 this.playlistIterator.next();
        this.play();
    };
    WNP.prototype.schedulePrev = function() {
        if (!this.scheduleIterator) {
            this.scheduleIterator = new ListElementIterator(this.wnpWindow.document.getElementById('WNP_PLAYLIST_ITEMS'));
            this.scheduleIterator.current(this.playlistIterator.item);
        }
        this.scheduleIterator.prev().isNullThenFirst();
        this.schedulePlay();
    };
    WNP.prototype.scheduleNext = function() {
        if (!this.scheduleIterator) {
            this.scheduleIterator = new ListElementIterator(this.wnpWindow.document.getElementById('WNP_PLAYLIST_ITEMS'));
            this.scheduleIterator.current(this.playlistIterator.item);
            this.scheduleIterator.next().isNullThenFirst();
        }
        else {
            this.scheduleIterator.next().isNullThenLast();
        }
        this.schedulePlay();
    };
    WNP.prototype.scheduleItem = function(item) {
        if (!item) return;
        if (!this.scheduleIterator) {
            this.scheduleIterator = new ListElementIterator(this.wnpWindow.document.getElementById('WNP_PLAYLIST_ITEMS'));
        }
        this.scheduleIterator.current(item);
        this.schedulePlay();
    };
    WNP.prototype.schedulePlay = function() {
        if (!this.scheduleIterator) return;
        var videoInfo = createVideoInfo(createPlayInfo(this.scheduleIterator.item));
        this.showStatus("next: " + videoInfo.title, 3);
        var self = this;
        this.timer.setTimeout('schedulePlay', function() {
            self.timer.clear('schedulePlay');
            if (self.playlistIterator.item === self.scheduleIterator.item) {
                self.scheduleIterator = null;
                return;
            }
            self.playlistIterator.current(self.scheduleIterator.item);
            self.scheduleIterator = null;
            self.play();
        }, 3000);
    };
    WNP.prototype.scheduleCancel = function() {
        if (this.timer.timeouts['schedulePlay']) {
            this.timer.clear('schedulePlay');
            this.showStatus("cancel.", 3);
        }
        this.scheduleIterator = null;
    };
    WNP.prototype.preloadNext = function() {
        var preloadIterator = new ListElementIterator(this.wnpWindow.document.getElementById('WNP_PLAYLIST_ITEMS'));
        preloadIterator.current(this.playlistIterator.item).next();
        if (this.prefs.loop) preloadIterator.isNullThenFirst();
        var nextItem = preloadIterator.item;
        this.timer.clear('preload');
        if (!nextItem || this.wnpCore.loaded() < 1) {
            var self = this;
            this.timer.setTimeout('preload', function() {
                self.preloadNext();
            }, 3000);
            return;
        }
        this.preload(createVideoInfo(createPlayInfo(nextItem)));
    };
    WNP.prototype.preload = function(videoinfo) {
        var preloads = this.preloads;
        if (preloads.has(videoinfo.id)) return;
        while (preloads.count() >= 2) {
            preloads.getAt(0).detach();
            preloads.removeAt(0);
        }
        var wnpCore = new WNPCore(this.wnpWindow.document, 'nico_frame');
        preloads.add(videoinfo.id, wnpCore);
        wnpCore.observeInterval = this.prefs.observe_interval;
        wnpCore.current.errorWhenDeleted = this.prefs.skip_deleted_video;
        wnpCore.hide();
        wnpCore.onerror = wnpCore.onfatal = function() {
            wnpCore.detach();
            preloads.remove(videoinfo.id);
        };
        wnpCore.addEventListener('load', this._wnp_load, false);
        this.wnpWindow.document.getElementById('WNP_VIEW').appendChild(wnpCore.element);
        wnpCore.play(videoinfo);
        wnpCore.pause();
        wnpCore.setMute(true);
        // update last mute state.
        var self = this;
        wnpCore.addEventListener('load', function() {
            wnpCore.removeEventListener('load', arguments.callee, false);
            if (!self.wnpCore.current.isMute) {
                self.wnpCore.volume(1e-14); // cancel mute.
            }
        }, false);
    };
    WNP.prototype.removePreload = function(videoinfo) {
        if (this.preloads.has(videoinfo.id)) {
            this.preloads.get(videoinfo.id).detach();
            this.preloads.remove(videoinfo.id);
        }
    };
    WNP.prototype.clearPreloads = function() {
        for (var i = 0, len = this.preloads.count(); i < len; i++) {
            var wnpCore = this.preloads.getAt(i);
            if (wnpCore !== this.wnpCore) {
                wnpCore.detach();
            }
        }
        this.preloads = new ListedKeyMap();
    };
    WNP.prototype.layoutToggle = function() {
        var nextStyle;
        switch (this.wnpCore.current.style) {
            case WNPCore.STYLE_FILL:    nextStyle = WNPCore.STYLE_RESTORE;   break;
            case WNPCore.STYLE_RESTORE: nextStyle = WNPCore.STYLE_ALTERNATE; break;
            default:                    nextStyle = WNPCore.STYLE_FILL;      break;
        }
        this.wnpCore.setStyle(nextStyle);
    };
    WNP.prototype.clearStatus = function() {
        var statusBar = this.wnpWindow.document.getElementById('WNP_STATUS_BAR');
        statusBar.innerHTML = '';
    };
    WNP.prototype.showStatus = function(msg, sec, error) {
        var statusBar = this.wnpWindow.document.getElementById('WNP_STATUS_BAR');
        this.timer.clear('clearStatusMessage');
        if (error) {
            statusBar.style.backgroundColor = Colors.status_error;
            statusBar.style.fontWeight = 'bold';
        }
        else {
            statusBar.style.backgroundColor = '';
            statusBar.style.fontWeight = '';
        }
        this.hideControlPanel();
        statusBar.textContent = /*@cc_on statusBar.innerText = @*/ msg;
        if (sec) {
            var self = this;
            this.timer.setTimeout('clearStatusMessage', function(){
                self.clearStatus();
                self.restoreControlPanel();
            }, sec * 1000);
        }
    };
    WNP.prototype.setAlternativeView = function(info) {
        var iframe = this.wnpWindow.document.createElement('iframe');
        iframe.setAttribute('scrolling', 'no');
        this.alternativeView = iframe;
        this.updateAlternativeView(info);
        this.wnpCore.setAlternativeView(iframe, 380, 230);
    };
    WNP.prototype.updateAlternativeView = function(info) {
        if (!this.alternativeView) return;
        var videoinfo = info || this.wnpCore.current.videoinfo;
        if (!videoinfo) return;
        var thumb_url = videoinfo.thumbnail || 'about:blank';
        var title    = escapeHTML(videoinfo.title || videoinfo.id || '', this.wnpWindow.document);
        var total = this.playlistIterator.count();
        var current = this.playlistIterator.indexOf(this.playlistIterator.item) + 1;
        var video_play, video_comment, video_mylist;
        if (videoinfo.viewCount != null) {
            video_play    = formatNumber(Number(videoinfo.viewCount));
            video_comment = formatNumber(this.wnpCore.commentNum());
            video_mylist  = formatNumber(videoinfo.mylistCount);
        }
        else {
            video_play = video_comment = video_mylist = '';
        }
        var svg_xml = Consts.svg_xml_base.replace(/%.+?%/g, function(r) {
            if (r == '%u%') return thumb_url;
            if (r == '%t%') return title;
            if (r == '%c%') return current + ' / ' + total;
            if (r == '%vp%') return video_play;
            if (r == '%vc%') return video_comment;
            if (r == '%vm%') return video_mylist;
            return '';
        });
        var svg_url = 'data:' + Consts.svg_mime_type + ';charset=utf-8,' + encodeURIComponent(svg_xml);
        this.alternativeView.src = 'about:blank';
        this.alternativeView.src = svg_url;
    };
    WNP.prototype.getDefaultPreferences = function() {
        return {
            observe_interval      : 500,
            page_timeout          : 80,
            video_timeout         : 60,
            menu_width_ratio      : 50,
            loop                  : false,
            comment_off           : false,
            always_on_top         : false,
            playlist_style_simple : false,
            remove_on_finish      : true,
            use_history           : true,
            skip_deleted_video    : true,
            use_offtimer          : true,
            offtimer_minute       : 30,
            use_loop_break        : true,
            loop_break_count      : 3,
            cancel_jump           : false,
            force_visit_on_opera  : false
        };
    };
    WNP.prototype.loadPreferences = function() {
        if (!this.storage.isLoaded) return;
        var prefKeys = [
            'playlist_style_simple',
            'remove_on_finish',
            'use_history',
            'skip_deleted_video',
            'use_offtimer',
            'offtimer_minute',
            'use_loop_break',
            'loop_break_count',
            'cancel_jump',
            'force_visit_on_opera'
        ];
        var values = {};
        for (var i = 0; i < prefKeys.length; i++) {
            var key = prefKeys[i];
            var value = this.storage.getData(key);
            if (value != null) {
                values[key] = value;
            }
        }
        if (this._tmpPreferences) {
            var t = this._tmpPreferences;
            for (var i = 0; i < prefKeys.length; i++) {
                var key = prefKeys[i];
                if (key in t && t[key] != null) {
                    this.storage.setData(key, t[key]);
                    values[key] = t[key];
                }
            }
            delete this._tmpPreferences;
        }
        this.applyPreferences(values);
    };
    WNP.prototype.storePreference = function(key, value) {
        if (!this.storage.isLoaded) {
            if (!this._tmpPreferences) this._tmpPreferences = {};
            this._tmpPreferences.key = value;
        }
        else {
            this.storage.setData(key, value.toString());
        }
    };
    WNP.prototype.setDefaultPreferences = function() {
        this.storage.clear();
        this.prefs = this.getDefaultPreferences();
        this.applyPreferences();
    };
    WNP.prototype.applyPreferences = function(prefs, save) {
        var prefs = prefs || this.prefs;
        var key;
        key = 'observe_interval';
        if (key in prefs && prefs[key] != null) {
            this.prefs[key] = Number(prefs[key]) || 500;
            this.wnpCore.observeInterval = this.prefs[key];
        }
        key = 'page_timeout';
        if (key in prefs && prefs[key] != null) {
            this.prefs[key] = Number(prefs[key]) || 80;
        }
        key = 'video_timeout';
        if (key in prefs && prefs[key] != null) {
            this.prefs[key] = Number(prefs[key]) || 60;
        }
        key = 'menu_width_ratio';
        if (key in prefs && prefs[key] != null) {
            this.prefs[key] = Number(prefs[key]) || 50;
        }
        key = 'loop';
        if (key in prefs && prefs[key] != null) {
            this.prefs[key] = (prefs[key] == true);
            this.setPreferenceUI(key, this.prefs[key]);
        }
        key = 'comment_off';
        if (key in prefs && prefs[key] != null) {
            this.prefs[key] = (prefs[key] == true);
            this.setPreferenceUI(key, this.prefs[key]);
            this.wnpCore.setCommentOff(this.prefs[key]);
        }
        key = 'mute';
        if (key in prefs && prefs[key] != null) {
            this.prefs[key] = (prefs[key] == true);
            this.setPreferenceUI(key, this.prefs[key]);
            this.wnpCore.setMute(this.prefs[key]);
        }
        key = 'repeat';
        if (key in prefs && prefs[key] != null) {
            this.prefs[key] = (prefs[key] == true);
            this.setPreferenceUI(key, this.prefs[key]);
            this.wnpCore.setRepeat(this.prefs[key]);
        }
        key = 'always_on_top';
        if (key in prefs && prefs[key] != null) {
            this.prefs[key] = (prefs[key] == true);
            this.setPreferenceUI(key, this.prefs[key]);
        }
        key = 'playlist_style_simple';
        if (key in prefs && prefs[key] != null) {
            this.prefs[key] = (prefs[key] == true);
            if (!this._simplePlaylistStyle) {
                var simple_style_str = [
                    'ul.wnp_playlist_items li div.video_info .thumbnail { display: none }',
                    'ul.wnp_playlist_items li div.video_info { width: 10px }',
                    'ul.wnp_playlist_items li { height: 25px }',
                    'ul.wnp_playlist_items li div.video_desc * { display: none }',
                    'ul.wnp_playlist_items li div.video_desc a { display: inline }',
                ].join('\n');
                /*@cc_on IECover.process(function(cover) { simple_style_str += ' ul.wnp_playlist_items li img.wnp_iecover { height: 28px; } ' }); @*/
                var style = addStyle(simple_style_str, this.wnpWindow.document);
                this._simplePlaylistStyle = style;
            }
            setStyleEnabled(this._simplePlaylistStyle, this.prefs[key]);
            this.setPreferenceUI(key, this.prefs[key]);
            if (save) this.storePreference(key, this.prefs[key] ? '1' : '0');
            if (!this.prefs[key]) {
                this.lazyloadThumbnailImagesLater(1000);
            }
        }
        key = 'remove_on_finish';
        if (key in prefs && prefs[key] != null) {
            this.prefs[key] = (prefs[key] == true);
            this.setPreferenceUI(key, this.prefs[key]);
            if (save) this.storePreference(key, this.prefs[key] ? '1' : '0');
        }
        key = 'use_history';
        if (key in prefs && prefs[key] != null) {
            this.prefs[key] = (prefs[key] == true);
            this.setPreferenceUI(key, this.prefs[key]);
            if (save) this.storePreference(key, this.prefs[key] ? '1' : '0');
        }
        key = 'skip_deleted_video';
        if (key in prefs && prefs[key] != null) {
            this.prefs[key] = (prefs[key] == true);
            this.setPreferenceUI(key, this.prefs[key]);
            this.wnpCore.current.errorWhenDeleted = this.prefs[key];
            if (save) this.storePreference(key, this.prefs[key] ? '1' : '0');
        }
        key = 'use_offtimer';
        if (key in prefs && prefs[key] != null) {
            this.prefs[key] = (prefs[key] == true);
            this.setPreferenceUI(key, this.prefs[key]);
            if (save) this.storePreference(key, this.prefs[key] ? '1' : '0');
        }
        key = 'offtimer_minute';
        if (key in prefs && prefs[key] != null) {
            this.prefs[key] = Number(prefs[key]) || 60;
            this.setPreferenceUI(key, this.prefs[key]);
            if (save) this.storePreference(key, this.prefs[key].toString());
        }
        key = 'use_loop_break';
        if (key in prefs && prefs[key] != null) {
            this.prefs[key] = (prefs[key] == true);
            this.setPreferenceUI(key, this.prefs[key]);
            if (save) this.storePreference(key, this.prefs[key] ? '1' : '0');
        }
        key = 'loop_break_count';
        if (key in prefs && prefs[key] != null) {
            this.prefs[key] = (!isNaN(prefs[key])) ? Number(prefs[key]) : 3;
            this.setPreferenceUI(key, this.prefs[key]);
            if (save) this.storePreference(key, this.prefs[key].toString());
        }
        key = 'cancel_jump';
        if (key in prefs && prefs[key] != null) {
            this.prefs[key] = (prefs[key] == true);
            this.setPreferenceUI(key, this.prefs[key]);
            if (save) this.storePreference(key, this.prefs[key] ? '1' : '0');
        }
        key = 'force_visit_on_opera';
        if (key in prefs && prefs[key] != null) {
            this.prefs[key] = (prefs[key] == true);
            this.setPreferenceUI(key, this.prefs[key]);
            if (save) this.storePreference(key, this.prefs[key] ? '1' : '0');
        }
    };
    WNP.prototype.setPreferenceUI = function(key, value) {
        if (value == null) return;
        var document = this.wnpWindow.document;
        switch(key) {
            case 'loop' :
                var button = document.getElementById('WNP_C_LOOP');
                if (value == true) button.style.color = Colors.control_loop;
                else               button.style.color = '';
                break;
            case 'comment_off' :
                var button = document.getElementById('WNP_C_NICO_COMM');
                if (value == true) {
                    button.style.color = Colors.control_comment_off;
                    button.style.textDecoration = 'line-through';
                }
                else {
                    button.style.color = '';
                    button.style.textDecoration = '';
                }
                break;
            case 'mute' :
                var button = document.getElementById('WNP_C_NICO_MUTE');
                if (value == true) {
                    button.style.color = Colors.control_mute;
                    button.style.textDecoration = 'line-through';
                }
                else {
                    button.style.color = '';
                    button.style.textDecoration = '';
                }
                break;
            case 'repeat' :
                var button = document.getElementById('WNP_C_NICO_REPEAT');
                if (value == true) button.style.color = Colors.control_repeat;
                else               button.style.color = '';
                break;
            case 'always_on_top' :
                var button = document.getElementById('WNP_C_ALWAYS_ON_TOP');
                if (value == true) button.style.color = Colors.control_always_on_top;
                else               button.style.color = '';
                break;
            case 'playlist_style_simple' :
                document.getElementById('WNP_C_PREF_PLAYLIST_STYLE').checked = (value == true);
                document.getElementById('WNP_C_PLAYLIST_STYLE').checked = (value == true);
                break;
            case 'remove_on_finish' :
                document.getElementById('WNP_C_PREF_REMOVE_ON_FINISH').checked = (value == true);
                document.getElementById('WNP_C_REMOVE_ON_FINISH').checked = (value == true);
                break;
            case 'use_history' :
                document.getElementById('WNP_C_PREF_USE_HISTORY').checked = (value == true);
                document.getElementById('WNP_C_USE_HISTORY').checked = (value == true);
                break;
            case 'skip_deleted_video' :
                document.getElementById('WNP_C_PREF_SKIP_DELETED_VIDEO').checked = (value == true);
                break;
            case 'use_offtimer' :
                document.getElementById('WNP_C_PREF_USE_OFFTIMER').checked = (value == true);
                break;
            case 'offtimer_minute' :
                document.getElementById('WNP_C_PREF_OFFTIMER_MINUTE').value = value.toString();
                break;
            case 'use_loop_break' :
                document.getElementById('WNP_C_PREF_USE_LOOP_BREAK').checked = (value == true);
                break;
            case 'loop_break_count' :
                document.getElementById('WNP_C_PREF_LOOP_BREAK_COUNT').value = value.toString();
                break;
            case 'cancel_jump' :
                document.getElementById('WNP_C_PREF_CANCEL_JUMP').checked = (value == true);
                break;
            case 'force_visit_on_opera' :
                document.getElementById('WNP_C_PREF_FORCE_VISIT_ON_OPERA').checked = (value == true);
                break;
            default:
                return;
        }
    };
    WNP.prototype.getDefaultKeybordShortcut = function() {
        return [
            { command: 'PlayPause',      key: 'Space' },
            { command: 'PlayPrev',       key: 'PageUp' },
            { command: 'PlayNext',       key: 'PageDown' },
            { command: 'VolumeUp',       key: 'Up' },
            { command: 'VolumeUp+',      key: 'Up Shift' },
            { command: 'VolumeDown',     key: 'Down' },
            { command: 'VolumeDown-',    key: 'Down Shift' },
            { command: 'SeekForward',    key: 'Right' },
            { command: 'SeekForward+',   key: 'Right Shift' },
            { command: 'SeekBackward',   key: 'Left' },
            { command: 'SeekBackward-',  key: 'Left Shift' },
            { command: 'SeekBackward--', key: 'Left Ctrl' },
            { command: 'SelectNextItem',     key: 'j' },
            { command: 'SelectNextItem',     key: 'Enter' },
            { command: 'SelectPrevItem',     key: 'k' },
            { command: 'PlaySelectedItem',   key: 'o' },
            { command: 'DeleteSelectedItem', key: 'DEL' },
            { command: 'MenuNext',       key: 's' },
            { command: 'MenuPrev',       key: 'a' },
            { command: 'Playlist',       key: 'n' },
            { command: 'History',        key: 'h' },
            { command: 'Preference',     key: 'p' },
            { command: 'Comment',        key: 'c' },
            { command: 'Loop',           key: 'l' },
            { command: 'Repeat',         key: 'r' },
            { command: 'Mute',           key: 'm' },
            { command: 'Open',           key: 'w' },
            { command: 'View',           key: 'v' }
        ]
    };
    WNP.prototype.applyKeybordShortcut = function(shortcutList) {
        if (!shortcutList) return;
        for (var i = 0; i < shortcutList.length; i++) {
            var item = shortcutList[i];
            this.platform.unbindShortcut(item.key);
            this.platform.bindShortcut(item.command, item.key);
        }
    };
    WNP.open = function(playlist) {
        if (playlist) this.play(playlist);
    };
    WNP.play = function(playlist) {
        if (playlist) this.wnp().addEx(playlist, { start: true, type: 'insertBeforeCurrent' });
    };
    WNP.add = function(playlist, name, start) {
        if (playlist) this.wnp().addEx(playlist);
    };
    WNP.insert = function(playlist, name) {
        if (playlist) this.wnp().addEx(playlist, { start: false, type: 'insertAfterCurrent' });
    };
    WNP.wnp = function() {
        return window.wnp;
    };
    WNP.initialize = function(pref) {
        window.wnp = new WNP(pref);
    };
    T.WNP = WNP;
    window[Consts.WNP_GLOBAL_NAME] = WNP;
}
WNP.BUILD_WNP = BUILD_WNP;

    // WNP entry point.
    WNP.open = function(playlist, name) {
        var wnpWindow = this.wnp(name);
        if (playlist) {
            wnpWindow.setTimeout(function() {
                wnpWindow[Consts.WNP_GLOBAL_NAME].open(playlist);
            }, 50);
        }
    };
    WNP.play = function(playlist, name) {
        var wnpWindow = this.wnp(name);
        if (!playlist) playlist = createPlayInfo(document.getElementsByTagName('body')[0]);
        wnpWindow.setTimeout(function() {
            wnpWindow[Consts.WNP_GLOBAL_NAME].play(playlist);
        }, 50);
    };
    WNP.add = function(playlist, name) {
        var wnpWindow = this.wnp(name);
        if (!playlist) playlist = createPlayInfo(document.getElementsByTagName('body')[0]);
        wnpWindow.setTimeout(function() {
            wnpWindow[Consts.WNP_GLOBAL_NAME].add(playlist);
        }, 50);
    };
    WNP.insert = function(playlist, name) {
        var wnpWindow = this.wnp(name);
        if (!playlist) playlist = createPlayInfo(document.getElementsByTagName('body')[0]);
        wnpWindow.setTimeout(function() {
            wnpWindow[Consts.WNP_GLOBAL_NAME].insert(playlist);
        }, 50);
    };
    WNP.calcPosition = function() {
        if (browser.opera) {
            return { top: 0, left: window.top.innerWidth - WNP.Consts.WNP_INITIAL_PLAYER_WIDTH };
        }
        if (browser.webkit) {
            var top = window.screenTop + 110;
            var left = window.screenLeft + window.outerWidth - WNP.Consts.WNP_INITIAL_PLAYER_WIDTH - 25;
            return { top: top, left: left };
        }
        if (browser.mozilla) {
            var top = window.screenY + 110;
            var left = window.screenX + window.outerWidth - WNP.Consts.WNP_INITIAL_PLAYER_WIDTH - 25;
            return { top: top, left: left };
        }
        return { top: 0, left: (window.innerWidth || ie.clientWidth()) - WNP.Consts.WNP_INITIAL_PLAYER_WIDTH };
    };
    WNP.wnp = function(name) {
        var loc = 'javascript:void(0)'; /*@cc_on loc = ''; @*/;
        var pos = this.calcPosition();
        var w = window.open(loc, name || 'wnp', 'top=' + pos.top + ',left=' + pos.left + ',width=' + WNP.Consts.WNP_INITIAL_PLAYER_WIDTH + ',height=' +  WNP.Consts.WNP_INITIAL_PLAYER_HEIGHT + ',scrollbars=yes,resizable=yes,menubar=yes,status=no');
        var wnp = w.wnp;
        if (wnp == null) {
            var html = WNP.html();
            var d = w.document;
            d.open();
            d.write(html);
            try { d.close(); } catch(e) {}
            w[Consts.WNP_GLOBAL_NAME].initialize(WNP.PREFS);
            w.wnp.applyKeybordShortcut(WNP.SHOPRTCUT);
        }
        w.focus();
        return w;
    };
    WNP.showToolTipIfNecessary = (function() {
        var tooltip = null;
        var tid = null;
        var pls = null;
        return function showToolTipIfNecessary(target) {
            var a = target;
            while(a) {
                if (a.nodeName == 'A') break;
                a = a.parentNode;
            }
            if (!a) return;
            var m;
            if (m = /(http:\/\/www\.nicovideo\.jp\/watch\/(\w+))/.exec(a.href)) {
                pls = createPlayInfo(a);
            }
            else if (/^http:\/\/www\.nicovideo\.jp\/.*/.test(a.href)) {
                pls = a.href;
            }
            else {
                return;
            }
            if (!tooltip) {
                tooltip = document.createElement('div');
                tooltip.className = 'wnp_tooltip';
                var panel_html = [
                    '<a href="javascript:void(0)" rel="nofollow"><span>play</span></a>',
                    '<a href="javascript:void(0)" rel="nofollow"><span>add</span></a>',
                    '<a href="javascript:void(0)" rel="nofollow"><span>insert</span></a>'
                ].join('');
                if (browser.mozilla) {
                    var bk = '<img src="about:blank" style="display:none"><br style="display:none">';
                    panel_html = panel_html.replace(/<span>/g, bk + '<span>');
                }
                tooltip.innerHTML = panel_html;
                $e(window).addEventListener('mouseup', function(e) { tooltip.style.display = 'none'; }, false);
                $e(window).addEventListener(browser.mozilla ? 'DOMMouseScroll' : 'mousewheel', function(e) {
                    tooltip.style.display = 'none';
                }, false);
                var an = tooltip.getElementsByTagName('a');
                $e(an[0]).addEventListener('click', function(e) { e.preventDefault(); if (pls) WNP.play(pls); }, false);
                $e(an[1]).addEventListener('click', function(e) { e.preventDefault(); if (pls) WNP.add(pls); }, false);
                $e(an[2]).addEventListener('click', function(e) { e.preventDefault(); if (pls) WNP.insert(pls); }, false);
                document.getElementsByTagName('body')[0].appendChild(tooltip);
            }
            else {
                // refresh.
                for (var i = 0, len = tooltip.childNodes.length; i < len; i++) {
                    var node = tooltip.childNodes[i];
                    if (node.innerHTML) node.innerHTML = node.innerHTML;
                }
            }

            var title = findVideoTitle(a);
            if (pls.title && !pls.title[pls.items[0]]) {
                pls.title[pls.items[0]] = title;
            }
            var open_href = 'javascript:' + encodeURIComponent('void((window.' + Consts.WNP_GLOBAL_NAME + ')?' + Consts.WNP_GLOBAL_NAME + '.open(' + toJSON(pls) + '):location.href="' + a.href +'")');
            var an = tooltip.getElementsByTagName('a');
            for (var i = 0; i < an.length; i++) {
                an[i].setAttribute('href', open_href);
                an[i].setAttribute('title', title);
            }
            if (browser.mozilla) {
                for (var i = 0; i < an.length; i++) {
                    an[i].firstChild.setAttribute('alt', title);
                }
            }

            var p = getAbsolutePosition(a);
            var x = p.x, y = p.y,
                w = a.offsetWidth, h = a.offsetHeight,
                width  = 80, height = 25;
            if (browser.mozilla || browser.webkit) {
                var thumb = a.getElementsByTagName('img')[0];
                if (thumb) {
                    var p = getAbsolutePosition(thumb);
                    x = Math.min(x, p.x);
                    y = Math.min(y, p.y);
                    w = Math.max(w, thumb.offsetWidth);
                    h = Math.max(h, thumb.offsetHeight);
                }
            }
            tooltip.style.left = Math.min(Math.max(x + Math.min(20, w-5), (x + w - width)), (window.innerWidth || ie.clientWidth()) - 190) + 'px';
            tooltip.style.top  = Math.min(y - 10, y + (h / 2) - 15 - height)  + 'px';
            tooltip.style.display = 'block';

            if (tid) clearTimeout(tid);
            tid = setTimeout(function() {
                if (getStyle(tooltip, 'opacity') == '1') { // why work on ie?
                    setTimeout(arguments.callee, 1000);
                    return;
                }
                tooltip.style.display = 'none';
                tid = null;
                pls = null;
            }, 2200);
        }
    })();
    WNP.showWnpControlPanel = function showWnpControlPanel() {
        var controlPanel = document.createElement('div');
        controlPanel.id = 'WNP_CONTAROL_PANEL';
        controlPanel.className = 'wnp_tooltip';
        controlPanel.style.cssText = 'position: fixed; bottom: 5px; right: 5px; width: 228px; z-index: 998; ';
        var open_href = 'javascript:' + encodeURIComponent('void((window.' + Consts.WNP_GLOBAL_NAME + ')?' + Consts.WNP_GLOBAL_NAME + '.open("' + location.href + '"):location.href="' + location.href + '")');
        var title = document.title;
        var panel_html = [
            '<a href="' + open_href + '" title="open WNP" rel="nofollow"><span>open</span></a>',
            '<a href="' + open_href + '" title="' + title + '" rel="nofollow"><span>play</span></a>',
            '<a href="' + open_href + '" title="' + title + '" rel="nofollow"><span>add</span></a>',
            '<a href="' + open_href + '" title="' + title + '" rel="nofollow"><span>insert</span></a>'
        ].join('');
        if (browser.mozilla) {
            var bk = '<img src="about:blank" style="display:none" alt="' + title + '"><br style="display:none">';
            panel_html = panel_html.replace(/<span>/g, bk + '<span>');
        }
        controlPanel.innerHTML = panel_html;
        var an = controlPanel.getElementsByTagName('a');
        $e(an[0]).addEventListener('click', function(e) { e.preventDefault(); WNP.open(); }, false);
        $e(an[1]).addEventListener('click', function(e) { e.preventDefault(); WNP.play(); }, false);
        $e(an[2]).addEventListener('click', function(e) { e.preventDefault(); WNP.add(); }, false);
        $e(an[3]).addEventListener('click', function(e) { e.preventDefault(); WNP.insert(); }, false);
        document.getElementsByTagName('body')[0].appendChild(controlPanel);
    };
    WNP.init = function init() {
        addStyle(WNP.pageStyle(WNP.Prefs));
        WNP.showWnpControlPanel();
        $e(document).addEventListener('mouseover', function(e) {
            WNP.showToolTipIfNecessary(e.target);
        }, false);
    }
    
    var json = (typeof JSON != 'undefined' ? JSON : null);
    WNP.parseRequest = function(str) {
        var req;
        if (json && isNative(json.parse)) {
            req =  json.parse(str);
        }
        else {
            // not safe!! use this to the string from trusted domain only.
            req =  eval('(' + str + ')');
        }
        return req;
    };
    WNP.serializeRequest = function(command, playlist) {
        var obj = {
            command: command,
            playlist: playlist
        };
        // don't use native JSON.stringify for prototype.js (http://d.hatena.ne.jp/Gimite/20091129/1259495440)
        return toJSON(obj);
    };
    
    if (location.href == Consts.WNP_GATEWAY_URL) {
        WNP.acceptDomain = function(url) {
            if (/^http:\/\/\w*[.]?nicovideo\.jp/.test(url)) {
                return true;
            }
            return false;
        };
        WNP.receiveMessage = function(e) {
            if (this.acceptDomain(e.origin)) {
                var request = this.parseRequest(e.data);
                if (request) {
                    switch(request.command) {
                        case 'open'  : this.open(request.playlist);   break;
                        case 'play'  : this.play(request.playlist);   break;
                        case 'add'   : this.add(request.playlist);    break;
                        case 'insert': this.insert(request.playlist); break;
                    }
                }
            }
        };
        window.addEventListener("message", function(e) {
            WNP.receiveMessage(e);
        }, false);
    }
    if (location.href.indexOf('http://www.nicovideo.jp/') < 0) {
        
        var gateway = document.createElement('iframe');
        gateway.src = Consts.WNP_GATEWAY_URL;
        gateway.setAttribute('width', '1');
        gateway.setAttribute('height', '1');
        gateway.setAttribute('style', 'position: absolute; top: 0; right: 0; display: none;');
        ready(function() { document.body.appendChild(gateway); });
        
        WNP.open = function(playlist) {
            gateway.contentWindow.postMessage(this.serializeRequest('open', playlist), Consts.WNP_GATEWAY_URL);
        };
        WNP.play = function(playlist) {
            if (!playlist) playlist = createPlayInfo(document.getElementsByTagName('body')[0]);
            gateway.contentWindow.postMessage(this.serializeRequest('play', playlist), Consts.WNP_GATEWAY_URL);
        };
        WNP.add = function(playlist) {
            if (!playlist) playlist = createPlayInfo(document.getElementsByTagName('body')[0]);
            gateway.contentWindow.postMessage(this.serializeRequest('add', playlist), Consts.WNP_GATEWAY_URL);
        };
        WNP.insert = function(playlist) {
            if (!playlist) playlist = createPlayInfo(document.getElementsByTagName('body')[0]);
            gateway.contentWindow.postMessage(this.serializeRequest('insert', playlist), Consts.WNP_GATEWAY_URL);
        };
        delete WNP.wnp;
    }
    
    window[Consts.WNP_GLOBAL_NAME] = WNP;

    // entry point.
    function main() {
        setTimeout(function() { WNP.init(); }, 0); // delay for customize.
    }
    
    function ready(func) {
        if (document.getElementsByTagName('body')[0]) func();
        else if (window.opera) document.addEventListener('DOMContentLoaded', func, false);
        else                   $e(window).addEventListener('load', func, false);
    }
    
    if (!document.documentElement) return;
    if (location.href.indexOf('http://www.nicovideo.jp/wnp/') === 0 && /^#(?:\w{2})?\d+$/.test(location.hash)) {
        var videoid = location.hash.replace(/^#/, '');
        // delay for ie8.
        setTimeout(function() {
            var html = WNP.html();
            document.open();
            document.write(html);
            try { d.close(); } catch(e) {}
            window.WNP.initialize(WNP.Prefs);
            window.WNP.open(videoid);
        }, 50);
    }
    else {
        ready(main);
    }
})();
