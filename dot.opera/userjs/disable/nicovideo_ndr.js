// ==UserScript==
// @name      nicovideo - niconico douga RSS reader.
// @namespace http://d.hatena.ne.jp/miya2000/
// @author    miya2000
// @version   beta
// @include   http://www.nicovideo.jp/ndr/
// ==/UserScript==
/*
 * $Date:: 2008-06-01 23:31:20 +0900#$
 */
(function() {

    // == Feed List == //
    var NDR_FEEDS = [
//        'http://b.hatena.ne.jp/video/rss',
//        'http://zio3.net/nicoRss/NewEntry.ashx',
//        'http://www.nicovideo.jp/mylist/3091300?rss=2.0',
//        'http://www.nicovideo.jp/mylist/3091300?rss=1.0',
//        'http://www.nicovideo.jp/mylist/3091300?rss=atom',
//        'http://www.nicovideo.jp/mylist/1399500?rss=2.0',
//        'http://www.nicovideo.jp/mylist/27336?rss=2.0',
//        'http://www.casluck.com/niko/nikorank.xml',
    ];
    var NDR_KEY = {
        NextEntry : 'j',
        PrevEntry : 'k',
        NextFeed  : 's',
        PrevFeed  : 'a',
        View      : 'v',
        Pin       : 'p',
        OpenPin   : 'o'
    };
    
    // ==== options ==== //
    var NDR_MIX_MAX = 30;
    var NDR_ENABLE_HATENASTAR = true;
    var NDR_ENABLE_HATENABOOKMARK = false;
    var NDR_ENABLE_STORAGE = true;
    var WNP_GLOBAL_NAME = 'WNP';    // global name of WNP entry object.
    
    // ==== const ==== //
    var NDR_DEF_FAVICON = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8%2F9hAAAANklEQVR42mNgoCL4TyLGAP%2F%2BEwlwGUCs%2Fn%2BUGvCfZgb8G3UByQYwDr5opNwALPgfGo03M5EFAD%2FlDgo8c6q7AAAAAElFTkSuQmCC';
    var NDR_IMG_LOADING = 'data:image/gif;base64,R0lGODlhFAAUAIIAAC8vL%2BTl5EdFR%2FT09Dk6OVNVU%2Bzr7Pz%2B%2FCH%2FC05FVFNDQVBFMi4wAwEAAAAh%2BQQADQAAACwAAAAAFAAUAAIDSHi6awLCsDlNkVZSGpsY20SIITN0igOW6XVkLONAa6wMBKHZygPwDACAULPhhB%2FgIVc0MpUK5I43pCmlSpxO6SBCCYCmbRhLAAAh%2BQQADQAAACwAAAAAFAAUAAIDVHi6awLCsDlNkVZSGpsY20SIITN0igOW6XVkLBM8aPw%2BxGofEQHosUHOJ9gphoDc7iRUGg%2BD5PPmA7KaM4KGZSB8qEHvVnglaEVWhtfKDAnTBykjAQAh%2BQQADQAAACwAAAAAFAAUAAIDVni6awLCsDlNkVZSGpsY20SIITN0igOW6XVkLBM8X7wQD7HaZ0AAh11MRyDMbMHPT6BDgn5CHmCEDJ6gTpyRqdkMikUDyEENfQZCQzMUvZWrwTX8%2B04AACH5BAANAAAALAAAAAAUABQAAgNOeLprAsKwOU2RVlIamxjbRIghM3SKA5bpdWQsEzxofJwAsdoKkO%2B8XI63IPg%2BxJsRyDMmU4QRcXBaxgYEQZQQkMYiIJCXBTwxm2fbkJIAACH5BAANAAAALAAAAAAUABQAAgNJeLprAsKwOU2RVlIamxjbRIghM3SKA5bpdWQs40BrrAwEodnKA%2FAMAIBQs52EH%2BBhMCwaCT%2Flkag8CGlKpJOFQ%2FEcuip0GxvGEgAh%2BQQADQAAACwAAAAAFAAUAAIDUHi6awLCsDlNkVZSGpsY20SIITN0igOW6XVkLBM8aHycALHaCuDzC5wOqAgQch8gTcMb5ALEG4EgiFKNu9hgOG12pdnQabXlTXc18VDhHE0SACH5BAANAAAALAAAAAAUABQAAgNXeLprAsKwOU2RVlIamxjbRIghM3SKA5bpdWQsEzxunD5EYC8RAa2x08AnmO0OA0BOQACWhhCkk0XIHRXJ6m4wJPSmJm%2B1cxqVIlzgULMBK7RX7CeOVE4SACH5BAANAAAALAAAAAAUABQAAgNNeLprAsKwOU2RVlIamxjbRIghM3SKA5bpdWQsEzxofJwAsdoK4PMMQg6oGAg%2FxENuBxQyeT4BcWB0xqoEgiAwsn2ooO7VpEsqasDqJgEAOw%3D%3D';
    var NDR_IMG_COMPLETE = 'data:image/gif;base64,R0lGODlhFAAUAIIAADAvMOPl40hHSPT19Dg5OFRWVOzs7Pz%2B%2FCH5BAANAAAALAAAAAAUABQAAgNNeLpqAmSwOU0xx2I6h9iZIHEMMZnk4oHOmGYXDL5HIBAfrT6Gqw8QHcMTFC4ASKOCGFFmCACREwlwHh5NZQDqdHCNXpuSQMCUjdkoKQEAIfkEACgAAAAsAAAAABQAFAACA0Z4umcCZLA5TTHtUjoEVo60McRUjkv3NYKIZpi1vizg0RM04wfEm4AfA%2BLiDQgRoYIAKPJ8ygMzOoAqmU7a8XQl7LQAGyoBACH5BAANAAAALAAAAAAUABQAAgNGeLpqAmSwOU0xx2I6h9iZIHEMMZnk4oHOmGYXDL4h8NGMYc%2F4w9MDCI5CAAxzRdfwcTsGCT%2Ba8LgoUhdTqgd6zey6AFsqAQAh%2BQQADQAAACwAAAAAFAAUAAIDSni6POcsSiOIMDIfU8zgmLYM10JB4kFEa%2FqUyuluggPODwFYoUsBF5RLB8MNdL0ZaYdjAHbC2bPVXAKaJgIVu0sqBUBsrCtWhTUJACH5BAANAAAALAAAAAAUABQAAgNLeLrc%2Fm0cCZ8RRJjaTDGDt3GTtlwURzQreRDjgZJGtom0AACYyV07zSAFAQJgLpmOFyMtCYHkZEcgupbSEwGQXRy7JWTXwARvBZUEACH5BAAKAAAALAAAAAAUABQAAgNKeLo85yxKI4gwMh9TzOCYtgzXQkHiQURr%2BpTK6W6CA84PAVihSwEXlEsHww10vRlph2MAdsLZs9VcApomAhW7SyoFQGysK1aFNQkAIfkEAAoAAAAsAAAAABQAFAACA0Z4umoCZLA5TTHHYjqH2JkgcQwxmeTigc6YZhcMviHw0Yxhz%2FjD0wMIjkIADHNF1%2FBxOwYJP5rwuChSF1OqB3rN7LoAWyoBACH5BAAUAAAALAAAAAAUABQAAgNGeLpnAmSwOU0x7VI6BFaOtDHEVI5L9zWCiGaYtb4s4NETNOMHxJuAHwPi4g0IEaGCACjyfMoDMzqAKplO2vF0Jey0ABsqAQAh%2BQQADQAAACwAAAAAFAAUAAIDS3i6ZwJksDlNMe1SOgRWjrQxxFSOS%2Fc1gohmmLW%2BLODREzTjBnHiig4EyABAXLgB4UhUPABIHrN58EWohICAWlVGaZEfUHVrQmyjBAAh%2BQQADQAAACwAAAAAFAAUAAIDT3i6ZwJksDlNMe1SOgRWjrQxxFSOS%2Fc1gohmmLW%2BLODREzTjBnHiig4EyADoiAehzcXz7WgDAoCJ8%2FmoqN4giiS0Dr8qhgtUKW5AW3K5SQAAIfkEAA0AAAAsAAAAABQAFAACA1J4umcCZLA5TTHtUjoEVo60McRUjkv3NYKIZpi1vizg0ROEtbhC2IYTbvADhHqHH%2BGGhAxcvR%2BS4Zw2CNgZbRkQCGmOGHMbORC%2FI9UiTCPm0IcEACH5BADIAAAALAAAAAAUABQAAgNXeLpqAmSwOU0xx2I6h9iZIHEMMZnk4oHOmGYXDL4hIASHS0NOSys8EepHsOGGtKJR9DsAeLFmMaJ7DSC2WcpBJXyI3wwByekxVq%2BxbjB%2B3ShmzpU5gSwSADs%3D';
    var NDR_HATENASTAR_TOKEN = '43176db8ca94b7e759246873fc3dad868c75fd6f';
    var NDR_STORAGE_SWF = 'http://miya2000.up.seesaa.net/storage/ndr.swf';
    
    // ==== main ==== //
    var opera9_50 = (navigator.appName.indexOf("Opera") >= 0 && navigator.appVersion.indexOf("9.50") >= 0);
    var opera9_5Ab = (window.opera && parseFloat(opera.version()) >= 9.5);
    var NDR_HTML = [
        NDR_ENABLE_STORAGE ? '<embed id="NDR_STORAGE" type="application/x-shockwave-flash" src="' + NDR_STORAGE_SWF + '" width="1" height="1" wmode="transparent" allowScriptAccess="always">' : '',
        '<div class="ndr_top">',
        '    <p class="ndr_hidariue" id="NDR_HIDARIUE">[PR]\u5DE6\u4E0A\u30B5\u30F3\u30D7\u30EB\u30D7\u30EC\u30BC\u30F3\u30C8\uFF01</p>',
        '    <p class="ndr_migiue"   id="NDR_MIGIUE">\u304A\u9810\u304B\u308A\u3057\u305F\u500B\u4EBA\u60C5\u5831\u306F\u53F3\u4E0A\u306B\u306E\u307F\u4F7F\u7528\u3055\u305B\u3066\u3044\u305F\u3060\u304D\u307E\u3059</p>',
        '</div>',
        '<h1 class="ndr_title"><a href="http://www.nicovideo.jp/" target="_blank"><img src="/favicon.ico" width="16" height="16"></a><a href="http://www.nicovideo.jp/ndr/">niconico douga Reader</a></h1>',
        '<div class="ndr_status"><img id="NDR_STATUS_IMAGE" width="20" height="20" src="' + NDR_IMG_LOADING + '">&lt; <span id="NDR_STATUS_MESSAGE">Welcome.</span></div>',
        '<form id="NDR_NICO_SEARCH" class="ndr_search_form" action="/search" method="get" target="ndr_search_result">',
        '    <p>\u30AD\u30FC\u30EF\u30FC\u30C9\u691C\u7D22',
        '        <input id="NDR_C_NICO_SEARCH_TEXT" type="text" name="s" value="" class="search">',
        '        <input type="submit" value="\u691C\u7D22">',
        '    </p>',
        '</form>',
        '<div class="ndr_header">',
        '    <p class="ndr_feed_controls">',
        '        <button class="ndr_control" id="NDR_C_MYFEED">\u30DE\u30A4\u30D5\u30A3\u30FC\u30C9</button>',
        '        <button class="ndr_control" id="NDR_C_HISTORY">\u6700\u8FD1\u898B\u305F\u52D5\u753B</button>',
        '        <button class="ndr_control" id="NDR_C_MIX">MIX</button>',
        '    </p>',
        '    <p class="ndr_entries_controls">',
        '        <button class="ndr_control" id="NDR_C_PREV_ENTRY">\u25B2</button>',
        '        <button class="ndr_control" id="NDR_C_NEXT_ENTRY">\u25BC</button>',
        '        <label id="NDR_C_PINNED_LIST" for="NDR_PINNED_LIST"><span class="ndr_opera_icon ndr_pin"></span><span id="NDR_PINNED_COUNT">0</span></label>',
        '    </p>',
        '    <ul class="ndr_pinned_list" id="NDR_PINNED_LIST"></ul>',
        '    <p class="ndr_unread_info">\u672A\u8AAD <span id="NDR_UNREAD_FEED_COUNT">0</span>\u30D5\u30A3\u30FC\u30C9\u0020 | <span id="NDR_UNREAD_ENTRY_COUNT">0</span>\u30A8\u30F3\u30C8\u30EA</p>',
        '</div>',
        '<div class="ndr_content">',
        '    <div class="ndr_feed_pane" id="NDR_FEED_PANE">',
        '        <ul class="ndr_feed_menu" id="NDR_FEED_MENU">',
        '            <li class="ndr_feed_reload"><button class="ndr_control" id="NDR_C_FEED_RELOAD">\u66F4\u65B0</button></li>',
        NDR_ENABLE_STORAGE ? '            <li class="ndr_feed_edit"><button class="ndr_control" id="NDR_C_FEED_EDIT">\u7DE8\u96C6</button></li>' : '',
        NDR_ENABLE_STORAGE ? '            <li class="ndr_feed_add"><button class="ndr_control" id="NDR_C_FEED_ADD">\u8FFD\u52A0</button></li>' : '',
        '            <li class="ndr_feed_search"><input type="text" id="NDR_C_FEED_SEARCH" autocomplete="off"></li>',
        '        </ul>',
        '        <div class="ndr_feed_lists" id="NDR_FEED_LISTS">',
        '            <ul class="ndr_feed_list" id="NDR_FEED_LIST"></ul>',
        '            <ul class="ndr_feed_list ndr_temporary_feed_list" id="NDR_TEMPORARY_FEED_LIST"></ul>',
        '        </div>',
        '    </div>',
        '    <div class="ndr_entry_pane">',
        '        <div class="ndr_entries" id="NDR_ENTRIES"></div>',
        '    </div>',
        '</div>',
    ].join('\n');
    
    var NDR_STYLE = [
        'body { width: 97%; min-width: 580px; overflow: hidden; } ',
        'a, a:hover, a:active { color: inherit; text-decoration: underline; } ',
        'h1 a { text-decoration: none !important; } ',
        '.ndr_body { height: 100%; } ',
        '.ndr_top {',
        '    height: 32px; ',
        '} ',
        '.ndr_top p {',
        '    color: white; ',
        '    font-weight: normal; ',
        '    font-size: 12px; ',
        '    line-height: 26px; ',
        '    overflow: hidden; ',
        '} ',
        '.ndr_top p.ndr_hidariue { float: left; } ',
        '.ndr_top p.ndr_migiue   { float: right; font-weight: bold; } ',
        'h1.ndr_title {',
        '    height: 35px; ',
        '    width: 250px; ',
        '    font: bold 20px cursive; ',
        '    overflow: hidden; ',
        '} ',
        'h1.ndr_title img {',
        '    vertical-align: middle; ',
        '    margin: 0 4px 0 2px;',
        '} ',
        '.ndr_status {',
        '    height: 35px; ',
        '    margin-top: -35px; ',
        '    margin-left: 255px; ',
        '    font-size: 15px; ',
        '    line-height: 35px; ',
        '    overflow: hidden; ',
        '} ',
        '.ndr_status img {',
        '    vertical-align: middle; ',
        '    margin: 0 4px 0 2px;',
        '} ',
        '.ndr_search_form {',
        '    height: 35px; ',
        '    margin-top: -35px; ',
        '    text-align: right; ',
        '    font-weight: bold; ',
        '    font-size: 12px; ',
        '    line-height: 35px; ',
        '    overflow: hidden; ',
        '} ',
        '.ndr_header {',
        '    background-color: #FCFFFC; ',
        '    border-color: #CCCCCC; ',
        '    border-style: solid; ',
        '    border-width: 1px 0; ',
        '    height: 30px; ',
        '    font-weight: normal; ',
        '    font-size: 12px; ',
        '    line-height: 30px; ',
        '    position: relative; ',
        '} ',
        '.ndr_feed_controls {',
        '    height: 100%; ',
        '    padding-left: 1em; ',
        '    text-align: left; ',
        '    overflow: hidden; ',
        '} ',
        'button.ndr_control {',
        '    border: 0; ',
        '    padding: 1px 3px; ',
        '    margin: 0 10px 0 0; ',
        '    text-align: center; ',
        '    background-color: transparent; ',
        '    cursor: pointer; ',
        '} ',
        '.ndr_entries_controls {',
        '    height: 100%; ',
        '    padding-right: 1em; ',
        '    margin-top: -30px; ',
        '    margin-left: 257px; ',
        '    overflow: hidden; ',
        '} ',
        '.ndr_entries_controls button {',
        '    margin: 0; ',
        '    padding: 0 7px; ',
        '} ',
        '.ndr_entries_controls label {',
        '    font-weight: bold; ',
        '} ',
        '.ndr_entries_controls label * {',
        '    vertical-align: middle; ',
        '    margin-left: 5px; ',
        '} ',
        '.ndr_pinned_list {',
        '    display: none; ',
        '    position: absolute; ',
        '    top: 30px; ',
        '    left: 255px; ',
        '    z-index: 100; ',
        '    background-color: #FDFEF9; ',
        '    width: 400px; ',
        '    border: #9FA9B2 solid; ',
        '    border-width: 1px 2px 2px 1px; ',
        '    margin: 0; ',
        '    padding: 0; ',
        '    list-style-type: none; ',
        '} ',
        '.ndr_pinned_list > li {',
        '    font-size: larger; ',
        '    line-height: 1.3; ',
        '    padding: 2px 1px; ',
        '    border-bottom: #9FA9B2 dotted 1px; ',
        '} ',
        '.ndr_pinned_list > li.clear {',
        '    background-color: #EEEEEE; ',
        '    border-bottom: none; ',
        '} ',
        '.ndr_unread_info {',
        '    height: 100%; ',
        '    padding-right: 1em; ',
        '    margin-top: -30px; ',
        '    text-align: right; ',
        '    overflow: hidden; ',
        '} ',
        '.ndr_content {',
        '    box-sizing: border-box; ',
        '    height: 100%; ',
        '    margin-top: -100px; ',
        '    padding: 110px 0 45px; ',
        '    overflow: hidden; ',
        '} ',
        '.ndr_feed_pane {',
        '    float: left; ',
        '    width: 250px; ',
        '    height: 100%; ',
        '    box-sizing: border-box; ',
        '    padding-top: 61px; ',
        '    position: relative; ',
        '    z-index: 10; ',
        '    overflow: hidden; ',
        '} ',
        'ul.ndr_feed_menu {',
        '    background: #FFFFFF url(/img/index/bg_ads_bottom.gif) repeat-x scroll center bottom; ',
        '    border-color: #CCCCCC; ',
        '    border-style: solid; ',
        '    border-width: 1px 0 1px; ',
        '    list-style-type: none; ',
        '    margin: 0; ',
        '    padding: 2px 10px; ',
        '    position: absolute; ',
        '    z-index: 11; ',
        '    top: 0; ',
        '} ',
        '.ndr_feed_lists {',
        '    position: relative; ',
        '    z-index: 10; ',
        '    width: 100%; ',
        '    height: 100%; ',
        '    overflow: auto; ',
        '} ',
        '.ndr_feed_reload, .ndr_feed_edit, .ndr_feed_add {',
        '    width: 5em; ',
        '    height: 30px; ',
        '    font-weight: normal; ',
        '    font-size: 15px; ',
        '    line-height: 28px; ',
        '    float: left; ',
        '} ',
        // http://orera.g.hatena.ne.jp/higeorange/20061210/1165754993
        '.ndr_feed_reload:before {',
        '    content: ""; ',
        '    background-image: -o-skin("Reload"); ',
        '    width: 16px; ',
        '    height: 16px; ',
        '    margin: 8px 0 0 2px; ',
        '    display: inline-block;',
        '    position: absolute;',
        '} ',
        '.ndr_feed_edit:before {',
        '    content: ""; ',
        '    background-image: -o-skin("Widget"); ',
        '    width: 16px; ',
        '    height: 16px; ',
        '    margin: 8px 0 0 2px; ',
        '    display: inline-block;',
        '    position: absolute;',
        '} ',
        '.ndr_feed_add:before {',
        '    content: ""; ',
        '    background-image: -o-skin("RSS"); ',
        '    width: 16px; ',
        '    height: 16px; ',
        '    margin: 8px 0 0 2px; ',
        '    display: inline-block;',
        '    position: absolute;',
        '} ',
        '.ndr_feed_search {',
        '    width: auto; ',
        '    height: 25px; ',
        '    font-size: 15px; ',
        '    line-height: 30px; ',
        '    clear: both; ',
        '} ',
        '.ndr_feed_search:before {',
        '    content: ""; ',
        '    background-image: -o-skin("Search"); ',
        '    width: 16px; ',
        '    height: 16px; ',
        '    margin: 3px 0 0 3px; ',
        '    display: inline-block;',
        '    position: absolute;',
        '} ',
        '.ndr_feed_search > input[type="text"] {',
        '    width: 100%; ',
        '    box-sizing: border-box; ',
        '    height: 18px; ',
        '    padding-left: 25px; ',
        '    border: #888888 solid 1px; ',
        '    background-color: white; ',
        '} ',
        '.ndr_feed_menu > li > button {',
        '    width: 100%; ',
        '    height: 100%; ',
        '    padding: 3px 5px; ',
        '} ',
        '.ndr_feed_list {',
        '    list-style-type: none; ',
        '    margin: 0; ',
        '    padding: 0; ',
        '    color: #939393; ',
        '    font-size: 13px; ',
        '    line-height: 1.4; ',
        '} ',
        '.ndr_feed_list > li {',
        '    padding: 3px 5px 3px 25px; ',
        '    cursor: pointer; ',
        '} ',
        'li.ndr_unread_feed {',
        '    color: black; ',
        '} ',
        '.ndr_feed_list > li:before {',
        '    content: url("' + NDR_DEF_FAVICON + '"); ',
        '    width: 16px; ',
        '    height: 16px; ',
        '    margin: 1px 0 0 -20px; ',
        '    display: inline-block;',
        '    position: absolute;',
        '} ',
        '.ndr_feed_list > li.ndr_feed_origin_nico:before, .ndr_temporary_feed_list > li:before {',
        '    content: url("/favicon.ico"); ',
        '} ',
        '.ndr_temporary_feed_list {',
        '    border-top: #CCCCCC solid 1px; ',
        '    margin-top: 5px; ',
        '    padding-top: 5px; ',
        '} ',
        '.ndr_temporary_feed_list button {',
        '    margin: 0 5px; ',
        '    padding: 0 5px; ',
        '} ',
        '.ndr_entry_pane {',
        '    float: left; ',
        '    margin-left: -250px; ',
        '    width: 100%; ',
        '    height: 100%; ',
        '    overflow: hidden; ',
        '} ',
        '.ndr_entry_pane > .ndr_entries {',
        '    margin-left: 255px; ',
        '    background-color: #FDFDFD; ',
        '    height: 100%; ',
        '    overflow: auto; ',
        '    position: relative; ',
        '} ',
        '.ndr_entries h2.ndr_title {',
        '    font-weight: normal; ',
        '    font-size: 21px; ',
        '    line-height: 1.3; ',
        '    background-color: #F0FAFF; ',
        '    border-top: #CCCCCC solid 1px; ',
        '    padding: 10px 10px 0; ',
        '} ',
        '.ndr_entries h2 a {',
        '    text-decoration: none; ',
        '} ',
        '.ndr_entries h3.ndr_subtitle {',
        '    font-weight: normal; ',
        '    font-size: 15px; ',
        '    line-height: 1.2; ',
        '    background-color: #F0FAFF; ',
        '    padding: 3px 10px 5px; ',
        '} ',
        '.ndr_entry_menu {',
        '    position: relative; ',
        '    height: 20px; ',
        '    font-size: 13px; ',
        '    line-height: 20px; ',
        '    background-color: #F0FAFF; ',
        '    margin: 2px 0 0; ',
        '    padding: 3px 10px; ',
        '    border-bottom: #CCCCCC solid 2px; ',
        '    list-style-type: none; ',
        '} ',
        '.ndr_entry_menu li {',
        '    float: left; ',
        '    width: 10em; ',
        '} ',
        '.ndr_page_button {',
        '    position: absolute; ',
        '    right: 25px; ',
        '    margin-top: -25px; ',
        '    width: 200px; ',
        '    height: 20px; ',
        '    text-align: right; ',
        '} ',
        'button.ndr_reload_button {',
        '    position: static; ',
        '    height: 20px; ',
        '    font-size: 12px; ',
        '    line-height: 18px; ',
        '    padding: 1px 3px 0; ',
        '    margin: 0 5px; ',
        '} ',
        'button.ndr_page_button {',
        '    position: static; ',
        '    color: #89A8EF; ',
        '    width: 30px; ',
        '    height: 20px; ',
        '    font-weight: bold; ',
        '    font-size: 15px; ',
        '    line-height: 18px; ',
        '    text-align: center; ',
        '    background-color: #C7FEFF; ',
        '    border: #A5C5FF solid 1px; ',
        '    padding: 1px 0 0 3px; ',
        '    margin: 0 0 0 5px; ',
        '} ',
        'button.ndr_page_button[disabled] {',
        '    color: #808080; ',
        '    background-color: #CCC; ',
        '    border: #808080 solid 1px; ',
        '} ',
        '.ndr_entry {',
        '    border-bottom: #CCCCCC solid 2px; ',
        '    font-size: 90%; ',
        '    line-height: 1.5; ',
        '    padding: 3px 10px 5px; ',
        '} ',
        '.ndr_entry_even {',
        '    background-color: #F5F5F5; ', opera9_5Ab ? 'background-color: transparent; ' : '',
        '} ',
        opera9_5Ab ? '.ndr_entry:nth-child(even) { background-color: #F5F5F5; } ' : '',
        '.ndr_mylist_pane {',
        '    box-sizing: border-box;',
        '    background-color: white;',
        '    border: #488BFF solid 4px; ',
        '    width: 90%; ',
        '    margin: 0 auto 20px; ',
        '    padding: 10px; ',
        '    color: #000; ',
        '    display: none; ',
        '} ',
        '.ndr_mylist_pane select {',
        '    width: 130px; ',
        '} ',
        '.ndr_mylist_pane input[type="submit"] {',
        '    margin: 0 5px; ',
        '} ',
        '.ndr_mylist_pane span {',
        '    font-size: small; ',
        '} ',
        '.ndr_entry_clip .ndr_mylist_pane {',
        '    display: block; ',
        '} ',
        '.ndr_entry_clip button.ndr_clip {',
        '    background-color: #E8E8E8 !important; ',
        '    border: inset gray 1px !important; ',
        '} ',
        '.ndr_entry_pin {',
        '    background-color: #FFF0F0 !important; ',
        '} ',
        '.ndr_entry_pin button.ndr_pin {',
        '    background-color: #E8E8E8 !important; ',
        '    border: inset gray 1px !important; ',
        '} ',
        '.ndr_entry h4 {',
        '    padding-right: 80px; ',
        '} ',
        '.ndr_entry h4 a {',
        '    color: #000; ',
        '    text-decoration: none; ',
        '} ',
        '.ndr_entry h4 a:visited {',
        '    color: #595959; ',
        '} ',
        'p.ndr_entry_thumbnail {',
        '    width: 100%; ',
        '    overflow: auto; ',
        '} ',
        'img.ndr_entry_thumbnail {',
        '    border: #333333 solid 1px; ',
        '    float: left; ',
        '    margin: 0 10px 10px 0; ',
        '} ',
        '.ndr_entry_footer {',
        '    color: #747474; ',
        '    height: 20px; ',
        '    font-size: 12px; ',
        '    line-height: 20px; ',
        '    margin-top: 8px; ',
        '    padding: 3px 0; ',
        '    border-top: #CCCCCC dotted 1px; ',
        '} ',
        '.ndr_thumb_res {',
        '    background-color: #FFF; ',
        '    border:2px solid #CCCCCC; ',
        '    margin-top: 4px;; ',
        '    padding: 6px; ',
        '} ',
        'a.ndr_visited_checker {',
        '    position: absolute; ',
        '    top: 0; ',
        '    left: 0; ',
        '    z-index: -1000; ',
        '    visibility: hidden; ',
        '    display: block !important; ',
        '    width: 10px !important; ',
        '    height: 10px !important; ',
        '} ',
        'a.ndr_visited_checker:visited {',
        '    display: none !important; ',
        '} ',
        '.ndr_entry_controls {',
        '    position: absolute; ', opera9_50 ? 'position: static; float: right; ' : '', // Booooooooo!!!
        '    right: 30px; ',
        '    width: 100px; ',
        '    text-align: right; ',
        '    margin-top: 5px; ',
        '} ',
        '.ndr_entry_controls > button {',
        '    background-color: transparent;',
        '    border: transparent solid 1px;',
        '    padding: 4px 3px 5px;',
        '} ',
        '.ndr_entry_controls > button:active {',
        '    background-color: #E8E8E8;',
        '    border: inset gray 1px;',
        '} ',
        '.ndr_opera_icon {',
        '    display: inline-block;',
        '    width: -o-skin; ',
        '    height: -o-skin; ',
        '} ',
        '.ndr_clip .ndr_opera_icon {',
        '    background-image: -o-skin("Mail Attachment"); ',
        '} ',
        '.ndr_pin .ndr_opera_icon, .ndr_opera_icon.ndr_pin {',
        '    background-image: -o-skin("News Read"); ',
        '} ',
        '.ndr_mark_as_read .ndr_opera_icon {',
        '    background-image: -o-skin("Mark as read"); ',
        '} ',
        '#NDR_STORAGE {',
        '    position: absolute; ',
        '    top: 0; right: 0; ',
        '    width: 1px; height: 1px; ',
        '    opacity: 0; ',
        '} ',
        'ul.ndr_feed_edit_list {',
        '    list-style-type: none; ',
        '    margin: 10px 0; ',
        '    padding: 0; ',
        '} ',
        'ul.ndr_feed_edit_list li {',
        '    padding: 3px 5px; ',
        '    line-height: 1.4; ',
        '} ',
    ].join('\n');
    var NDR_STYLE_HIDE_FEED_PANE = [
        '.ndr_feed_pane {',
        '    display: none; ',
        '} ',
        '.ndr_entry_pane {',
        '    margin-left: 0; ',
        '} ',
        '.ndr_entry_pane > .ndr_entries {',
        '    margin-left: 0; ',
        '} ',
    ].join('\n');
    
    var NDR_STYLE_MINITV = [
        'body > .minitv_container {',
        '    position: fixed;',
        '    top: 25px; right: 25px;',
        '    box-sizing: border-box;',
        '    width: 300px; height: 230px;',
        '    background-color: #EEE;',
        '    border: none;',
        '    z-index: 1001;',
        '    display : none; ',
        '}',
        'body > .wnp_footer {',
        '    display : none; ',
        '}',
        '@media projection {',
        '    body { margin: 0; padding: 0; width: 100%; height: 100%; } ',
        '    body > * {',
        '        display: none;',
        '    }',
        '    body .minitv_container {',
        '        display: block;',
        '        position: static;',
        '        border: #050608 solid;',
        '        border-width: 20px 0;',
        '        width: 100%; height: 100%;',
        '        page-break-after: avoid;',
        '    }',
        '    body .wnp_footer {',
        '        display : block; ',
        '        height : 20px; ',
        '        margin-top : -20px; ',
        '        font-size: 14px;',
        '        line-height: 20px;',
        '        overflow: hidden;',
        '    }',
        '    body .wnp_footer .control {',
        '        color: red;',
        '        background-color: transparent;',
        '        border: none;',
        '        visibility: hidden;',
        '    }',
        '    body .wnp_footer:hover .control {',
        '        visibility: visible;',
        '    }',
        '}',
    ].join('\n');
    
    function addStyle(styleStr, doc) {
        var document = doc || window.document;
        var style = document.createElement('style');
        style.type = 'text/css';
        style.style.display = 'none';
        style.innerHTML = styleStr;
        style.ownerDocument.body.appendChild(style);
        return style;
    }
    function hasClass(el, className) {
        return new RegExp('\\b' + className + '\\b').test(el.className);
    }
    function appendClass(el, className) {
        if (!el) return;
        if (new RegExp('\\b' + className + '$').test(el.className)) return;
        removeClass(el, className);
        el.className += ' ' + className;
        return el;
    }
    function removeClass(el, className) {
        if (!el) return;
        var orgClassName = el.className;
        var newClassName = orgClassName.replace(new RegExp('\\b' + className + '\\b', 'g'), '');
        if (orgClassName != newClassName) {
            el.className = newClassName;
        }
        return el;
    }

    var stripTag = (function() {
        var dv = document.createElement('div');
        return function (str) {
            dv.innerHTML = str;
            return dv.textContent;
        };
    })();
    
    function escAttr(str) {
        return str.replace(/'/g, '&#39;').replace(/"/g, '&quot;');
    }

    function parseDate(s) {
        if (!s) return new Date(0);
        if (s.indexOf('T') > 0) return new Date(s.replace(/T/, ' ').replace(/\+09:00/, ''));
        return new Date(s);
    }
    function formatDate(d) {
        return d.getFullYear() + ('/' + (d.getMonth()+1) + '/' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()).replace(/(\D)(\d)(?!\d)/g, '$10$2');
    }
    function formatNumber(d) {
        // http://nanto.asablo.jp/blog/2007/12/07/2479257
        return d.toString().replace(/(\d{1,3})(?=(?:\d\d\d)+$)/g, "$1,");
    }
    function formatLength(l) {
        return l.replace(/:(\d)(?!\d)/g, ":0$1");
    }
    
    function toJSON(o) {
        if (o == void(0)) {
            return 'null';
        }
        var c = o.constructor;
        if (c == Boolean) {
            return o.toString();
        }
        if (c == Number) {
            return isNaN(o) ? '"NaN"' : !isFinite(o) ? '"Infinity"' : o.toString(10);
        }
        if (c == String) {
            return '"' + uescape(o) + '"';
        }
        if (c == Array) {
            var tmp = [];
            for (var i=0; i<o.length; i++) {
                tmp[i] = toJSON(o[i]);
            }
            return '[' + tmp.join(',') + ']';
        }
        if (o.toString() == '[object Object]') {
            var tmp = [];
            for (var i in o) {
                if (o.hasOwnProperty(i)) {
                    tmp.push('"' + uescape(i) + '":' + toJSON(o[i]));
                }
            }
            return '{' + tmp.join(',') + '}';
        }
        return '\"' + uescape(o.toString()) + '\"';
    }
    function uescape(s) {
        return escape(s).replace(/%([0-9A-F]{2})/g,'\\u00$1').replace(/%u/g,'\\u');
    }

    var makeNicoReg = /(https?:\/\/[-_.!~*()a-zA-Z0-9;\/?:@&=+$,%#]+)|([a-z]{2}\d+)|(mylist\/\d+)|(^|\D)(\d{10})(?!\d)/mg;
    function makeNicoLinks(str) {
        return str
            .replace(makeNicoReg, function(str, $1, $2, $3, $4, $5, $6){
                if ($1 != null) return ' <a href="' + $1 + '" target="_blank" rel="nofollow">' + $1 + '</a> ';
                if ($2 != null) return ($2 == 'mp3') ? $2 : ' <a href="http://www.nicovideo.jp/watch/' + $2 + '" target="_blank" rel="nofollow">'+ $2 + '</a> ';
                if ($3 != null) return ' <a href="http://www.nicovideo.jp/' + $3 + '" target="_blank" rel="nofollow">'+ $3 + '</a> ';
                if ($5 != null) return $4 + ' <a href="http://www.nicovideo.jp/watch/' + $5 + '" target="_blank" rel="nofollow">'+ $5 + '</a> ';
            });
    }

    function createPlayInfo(el) {
        var an = el.getElementsByTagName('a');
        if (an.length == 0 && /a/i.test(el.nodeName)) {
            an = [el];
        }
        var items = [],
            video = {},
            title = {},
            image = {};
        for (var i = 0; i < an.length; i++) {
            var a = an[i];
            if (/\bnofollow\b/.test(a.getAttribute('rel'))) continue;
            var href = a.href;
            if (/^\/?watch\/(.*)/.exec(href)) href = 'http://www.nicovideo.jp/watch/' + RegExp.$1;
            if (/http:\/\/www\.nicovideo\.jp\/watch\/(\w*)$/.test(href)) {
                var videoid = RegExp.$1;
                if (!video[videoid]) {
                    items.push(videoid);
                    video[videoid] = href;
                }
                var img = a.getElementsByTagName('img')[0];
                if (img) {
                    title[videoid] = title[videoid] || img.alt;
                    image[videoid] = image[videoid] || img.src;
                }
                if (!title[videoid]) {
                    title[videoid] = a.textContent || a.innerText;
                }
            }
        }
        return {items: items, video: video, title: title, image: image }
    }

    /**
     * class KeyBind.
     */
    var KeyBind = function(target) {
        this.target = target || window;
        this.binds = [];
        this.init();
    };
    KeyBind.prototype.init = function() {
        var self = this;
        this.target.addEventListener('keypress', function(e) {
            if (/input|textarea/i.test(e.target.nodeName)) return;
            var binds = self.binds;
            for (var i = 0; i < binds.length; i++) {
                var bind = binds[i];
                if (bind.ch == String.fromCharCode(e.which).toUpperCase()) {
                    bind.fn(e);
                }
            }
        }, false);
    };
    KeyBind.prototype.add = function(ch, fn) {
        this.binds.push({ ch: ch.toUpperCase(), fn : fn });
    };
    
    /**
     * class ListedKeyMap.
     * Map implementation that has listed keys.
     */
    function ListedKeyMap() {
        this.keyList = [];
        this.values = {};
    }
    ListedKeyMap.prototype = {
        has : function(key) {
            return this.values.hasOwnProperty(key);
        },
        get : function(key) {
            return this.values[key];
        },
        put : function(key, value) {
            this.remove(key);
            this.values[key] = value;
            this.keyList.push(key);
        },
        remove : function(key) {
            if (this.has(key)) {
                for (var keys = this.keyList, i = 0, len = keys.length; i < len; i++) {
                    if (keys[i] == key) {
                        keys.splice(i, 1);
                        break;
                    }
                }
                delete this.values[key];
            }
        },
        keys : function() {
            return this.keyList;
        },
        size : function() {
            return this.keyList.length;
        }
    }
    
    /**
     * class ListElementIterator (from wnp)
     */
    function ListElementIterator(listElement, targetClass) {
        this.listElement = listElement;
        this.classTest = (targetClass) ? new RegExp('\\b' + targetClass + '\\b')
                                       : { test: function() { return true } };
        this.item = null;
    }
    ListElementIterator.prototype = {
        count : function() {
            var n = 0, childs = this.listElement.childNodes;
            for (var i = 0, len = childs.length; i < len; i++) {
                if (childs[i].nodeType == 1) n++;
            }
            return n;
        },
        indexOf : function(item) {
            var n = 0, childs = this.listElement.childNodes;
            var classTest = this.classTest;
            for (var i = 0, len = childs.length; i < len; i++) {
                var c = childs[i];
                if (c.nodeType == 1 && classTest.test(c.className)) {
                    if (c == item) return n;
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
            var classTest = this.classTest;
            while (c && (c.nodeType != 1 || !classTest.test(c.className))) { c = c.nextSibling };
            return this.current(c);
        },
        last : function() {
            var c = this.listElement.lastChild;
            var classTest = this.classTest;
            while (c && (c.nodeType != 1 || !classTest.test(c.className))) { c = c.previousSibling };
            return this.current(c);
        },
        index : function(index) {
            var n = 0, c = this.listElement.firstChild;
            var classTest = this.classTest;
            while (c) {
                if (c.nodeType == 1 && classTest.test(c.className)) {
                    if (n == index) break;
                    n++;
                }
                c = c.nextSibling;
            }
            return this.current(c);
        },
        next : function(item) {
            var c = item || this.item;
            var classTest = this.classTest;
            if (c) do { c = c.nextSibling } while (c && (c.nodeType != 1 || !classTest.test(c.className)));
            return this.current(c);
        },
        previous : function(item) {
            var c = item || this.item;
            var classTest = this.classTest;
            if (c) do { c = c.previousSibling } while (c && (c.nodeType != 1 || !classTest.test(c.className)));
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

    /**
     * class Soar (from wnp)
     */
    var Soar = function(object, option) {
        this.object = object;
        var o = option || {};
        this.duration = o.duration || 500;
        this.delay = o.delay || 10;
        this.coe = (o.coe != null) ? o.coe : 0.15;
    }
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
        this.window = win || window;
        for (var p in this._from) {
            obj[p] = this._from[p];
        }
        var target = [];
        for (var p in this._to) {
            var start = Number(obj[p].toString().replace(/([0-9]*).*/,'$1'));
            var dest  = Number(this._to[p].toString().replace(/([0-9]*)(.*)/,'$1'));
            var unit = RegExp.$2;
            target.push({ prop: p, cur: start, dest: dest, unit: unit });
        }
        var n = Math.ceil(this.duration / this.delay);
        var self = this;
        var start = new Date().getTime();
        self.tid = this.window.setTimeout( function() {
            var now = new Date().getTime();
            var nn = (self.duration - (now - start)) / self.delay;
            while (n > nn && n > 0) {
                for (var i = 0, len = target.length; i < len; i++) {
                    var t = target[i];
                    t.cur = t.cur + (t.dest - t.cur) * ( 1/n + (1-1/n) * self.coe);
                }
                n--;
            }
            var finishCount = 0;
            for (var i = 0, len  = target.length; i < len; i++) {
                var t = target[i];
                var next = Math.round(t.cur);
                obj[t.prop] = next + t.unit;
                if (next == t.dest) finishCount++;
            }
            if (finishCount != target.length && n > 0) {
                self.tid = self.window.setTimeout(arguments.callee, self.delay);
            }
            else {
                self.isActive = false;
                if (self.onFinish) self.onFinish(self);
            }
        }, 0);
        this.isActive = true;
    }
    Soar.prototype.cancel = function() {
        if (this.isActive) {
            this.window.clearTimeout(this.tid);
            this.isActive = false;
        }
    }

    /**
     * class RequestPool.
     *   limit number of Ajax request.
     */
    function RequestPool(poolCount) {
        this.poolCount = poolCount;
        this.requestQueue = [];
        this.working = 0;
        this.timeout = 5000;
    }
    RequestPool.prototype = {
        getRequest : function(usecache) {
            var xhr = new XMLHttpRequest();
            var self = this;
            xhr.send = function(content) {
                if (!usecache) xhr.setRequestHeader('Connection', 'keep-alive');
                self.requestQueue.push( { xhr: xhr, content : content } );
                self.next();
            };
            return xhr;
        },
        next : function() {
            if (this.requestQueue.length == 0) {
                this.isActive = false;
                return;
            }
            while(this.requestQueue.length > 0 && this.working < this.poolCount) {
                this.working++;
                this.request(this.requestQueue.shift());
            }
        },
        request: function(target) {
            this.isActive = true;
            var xhr = target.xhr;
            var orgListener = xhr.onload;
            var self = this;
            var requestTid = setTimeout(function() {
                try { xhr.abort(); } catch(e) {}
                self.working--;
                self.next();
                if (orgListener) orgListener.apply(xhr, []);
            }, this.timeout);
            xhr.onload = function() {
                clearTimeout(requestTid);
                self.working--;
                self.next();
                if (orgListener) orgListener.apply(xhr, []);
            };
            XMLHttpRequest.prototype.send.call(xhr, target.content);
        }
    };
    var requestPool = new RequestPool(2);
    function sameDomainRequest(href, callback, usecache) {
        var xhr = requestPool.getRequest(usecache);
        xhr.onload = function() {
            callback(xhr);
        };
        xhr.open('GET', href, true);
        xhr.send(null);
        return xhr;
    }

    // for Cross Domain Access. (http://orera.g.hatena.ne.jp/misttrap/20080302/p1)
    var requestScripts = [];
    var requestCallbacks = [];
    function crossDomainRequest(href, callback, usecache) {
        var reqUrl = href;
        if (!usecache) reqUrl = href + ((href.indexOf('?') < 0) ? '?' : '&') + new Date().getTime();
        // http://labs.cybozu.co.jp/blog/takesako/2007/06/opera_img-jsonp.html
        var asyncImage = document.createElement('img');
        var loaded = false;
        asyncImage.onerror = function() {
            document.body.removeChild(asyncImage);
            var script = document.createElement('script');
            requestScripts.push(script);
            requestCallbacks.push(callback);
            script.style.display = 'none';
            script.src = reqUrl;
            document.body.appendChild(script);
        };
        asyncImage.style.cssText = 'position: absolute; top: -1px; left: -1px; width: 1px; height: 1px;';
        asyncImage.setAttribute('src', reqUrl);
        document.body.appendChild(asyncImage);
    }
    function crossDomainListener(e) {
        var script = e.element;
        for (var i = 0; i < requestScripts.length; i++) {
            if (script === requestScripts[i]) {
                e.preventDefault();
                requestScripts.splice(i, 1);
                var callback = requestCallbacks[i];
                requestCallbacks.splice(i, 1);
                callback({ responseText: script.text });
                break;
            }
        }
        e.preventDefault();
        script.parentNode.removeChild(script);
    }
    opera.addEventListener('BeforeScript', crossDomainListener, false);
    function beforeExternalScriptListener(e) {
        var script = e.element;
        for (var i = 0; i < requestScripts.length; i++) {
            if (script == requestScripts[i]) return;
        }
        e.preventDefault();
    }
    opera.addEventListener('BeforeExternalScript', beforeExternalScriptListener, false);
    document.addEventListener('DOMContentLoaded', function() { document.body.removeAttribute('onload') }, false);
    
    var isSameDomain = (function() {
        var homeAddress = location.href.match(/.*?[/][/].*?[/]/).toString();
        return function(url) {
            return url.indexOf(':') < 0 || url.indexOf(homeAddress) == 0
        }
    })();
    function feedRequest(href, callback) {
        if (isSameDomain(href)) {
            sameDomainRequest(href, callback);
        }
        else {
            crossDomainRequest(href, callback);
        }
    }
    
    /**
     * class ThumbnailInfo.
     */
    var ThumbnailInfo = {
        BASE : 'http://www.nicovideo.jp/api/getthumbinfo/',
        IMG_DELETED : 'http://www.nicovideo.jp/img/thumb/del_img.jpg'
    }
    ThumbnailInfo.Instance = function() {
        this.cache = {};
        this.requestPool = new RequestPool(1);
        this.requestPool.timeout = 2000;
    };
    ThumbnailInfo.Instance.prototype = {
        getThumbnailInfo : function(uri, callback) {
            if (this.cache[uri]) {
                callback(this.cache[uri]);
                return;
            }
            this.request(uri, callback);
        },
        request: function(uri, callback) {
            var video_id = /[a-z]{0,2}[0-9]+(?=\?|#|$)/.exec(uri)[0];
            var thumb_url = ThumbnailInfo.BASE + video_id;
            var xhr = this.requestPool.getRequest(true);
            xhr.open('GET', thumb_url, true);
            var self = this;
            xhr.onload = function() {
                var thumb_info;
                if (xhr.readyState < 4) { // timeouted.
                    thumb_info = {
                        timeout : true
                    };
                }
                else {
                    var thumb_doc = xhr.responseXML;
                    if (thumb_doc.documentElement.getAttribute('status') != 'ok') {
                        thumb_info = {
                            deleted : true,
                            title : uri + ' (' + thumb_doc.getElementsByTagName('code')[0].textContent + ')',
                            link  : uri,
                            description : thumb_doc.getElementsByTagName('description')[0].textContent,
                            date  : '',
                            image : ThumbnailInfo.IMG_DELETED
                        };
                    }
                    else {
                        thumb_info = {
                            title : thumb_doc.getElementsByTagName('title')[0].textContent,
                            link  : uri,
                            description : thumb_doc.getElementsByTagName('description')[0].textContent,
                            date  : thumb_doc.getElementsByTagName('first_retrieve')[0].textContent,
                            image : thumb_doc.getElementsByTagName('thumbnail_url')[0].textContent,
                            length: thumb_doc.getElementsByTagName('length')[0].textContent,
                            response : thumb_doc.getElementsByTagName('last_res_body')[0].textContent,
                            type  : thumb_doc.getElementsByTagName('thumb_type')[0].textContent,
                            view  : Number(thumb_doc.getElementsByTagName('view_counter')[0].textContent),
                            comment : Number(thumb_doc.getElementsByTagName('comment_num')[0].textContent),
                            mylist  : Number(thumb_doc.getElementsByTagName('mylist_counter')[0].textContent),
                            tags  : (function(t) {
                                    var tags = [];
                                    for (var i = 0; i < t.length; i++) {
                                        tags.push(t[i].textContent);
                                    }
                                    return tags;
                                })(thumb_doc.getElementsByTagName('tag'))
                        };
                    }
                    self.cache[uri] = thumb_info;
                }
                try { callback(thumb_info); } catch (e) {}
            };
            xhr.send(null);
        }
    };
    var thumbnailInfo = new ThumbnailInfo.Instance();
    
    /**
     * class HateneStar.
     */
    var HatenaStar = {
        BASE     : 'http://s.hatena.ne.jp/',
        ENTRY    : 'http://s.hatena.ne.jp/entry.json',
        ENTRIES  : 'http://s.hatena.ne.jp/entries.json',
        ADD      : 'http://s.hatena.ne.jp/star.add.json',
        IMG_STAR : 'http://s.hatena.ne.jp/images/star.gif',
        IMG_BUTTON : 'http://s.hatena.ne.jp/images/add.gif'
    };
    HatenaStar.Instance = function(token) {
        this.token = token; // need to use the hatena star from outside of the hatena.
        this.rks   = null;  // get from entries.json.
        this.session = encodeURIComponent(new Date().getTime());
        this.cache = {};
        this.requests = [];
    };
    HatenaStar.Instance.prototype = {
        /**
         * @param req: request object that has property uri, title and place.
         */
        register : function(req) {
            if (this.cache[req.uri]) {
                this.attachStar(req, this.cache[req.uri]);
                return;
            }
            this.requests.push(req);
            // load 1sec after the last item was added. 
            if (this.loadTid) clearTimeout(this.loadTid);
            var self = this;
            this.loadTid = setTimeout(function() {
                self.loadStar();
            }, 1000);
        },
        loadStar : function() {
            var requests = this.requests;
            this.requests = [];
            var uris = [], dup = {};
            for (var i = 0; i < requests.length; i++) {
                var req = requests[i];
                if (this.cache[req.uri]) { // loaded while waiting 1sec.
                    this.attachStar(req, this.cache[req.uri]);
                    continue;
                }
                if (!dup[req.uri]) uris.push(req.uri);
                dup[req.uri] = true;
            }
            var url = HatenaStar.ENTRIES + '?uri=' + uris.join('&uri=') + '&' + this.session;
            var self = this;
            crossDomainRequest(url, function(xhr) {
                var json = eval('(' + xhr.responseText + ')'); // trust s.hatena
                self.rks = json.rks;
                var entries = json.entries;
                for (var i = 0; i < entries.length; i++) {
                    var entry = entries[i];
                    self.cache[entry.uri] = entry;
                }
                for (var i = 0; i < requests.length; i++) {
                    var req = requests[i];
                    var entry = self.cache[req.uri];
                    if (!entry) {
                        entry = self.cache[req.uri] = { uri: req.uri, stars: [] };
                    }
                    self.attachStar(req, entry);
                }
            }, true);
        },
        attachStar : function(req, entry) {
            this.showStarButton(req);
            var stars = entry.stars;
            var df = req.place.ownerDocument.createDocumentFragment();
            for (var i = 0; i < stars.length; i++) {
                if (isNaN(stars[i])) this.showStar(stars[i], df);
                else                 this.showStarNum(stars[i], entry.uri, df);
            }
            req.place.appendChild(df);
        },
        showStarButton : function (req) {
            var img = req.place.ownerDocument.createElement('img');
            img.src = HatenaStar.IMG_BUTTON;
            img.setAttribute('width', '16');
            img.setAttribute('height', '16');
            img.style.cssText = 'margin: 2px; vertical-align: middle; cursor: pointer;';
            img.alt = img.title = 'Add Star';
            var self = this;
            img.addEventListener('click', function(e) {
                self.showStar({quote: '', name: ''}, req.place);
                self.addStar(req.uri, req.title);
                self.cache[req.uri].stars.push({quote: '', name: ''});
            }, false);
            req.place.appendChild(img);
        },
        showStar : function (star, place) {
            var img = place.ownerDocument.createElement('img');
            img.src = HatenaStar.IMG_STAR;
            img.setAttribute('width', '11');
            img.setAttribute('height', '10');
            img.style.cssText = 'vertical-align: middle;';
            img.alt = img.title = star.name;
            place.appendChild(img);
        },
        showStarNum : function (number, uri, place) {
            var numPlace = place.ownerDocument.createElement('span');
            numPlace.textContent = number;
            numPlace.style.cssText = 'color: #F4B128; font-weight: bold; font-size: 80%; font-family: "arial", sans-serif; margin: 0 2px; cursor: pointer;';
            var self = this;
            numPlace.addEventListener('click', function(e) {
                self.expandStar(uri, numPlace);
            }, false);
            place.appendChild(numPlace);
        },
        expandStar : function(uri, numPlace) {
            var url = HatenaStar.ENTRY + '?uri=' + uri + '&' + this.session;
            var self = this;
            crossDomainRequest(url, function(xhr) {
                var json = eval('(' + xhr.responseText + ')');
                var stars = json.entries[0].stars;
                var df = numPlace.ownerDocument.createDocumentFragment();
                for (var i = 1, len = stars.length - 1; i < len; i++) { // remove first and last.
                    self.showStar(stars[i], df);
                }
                numPlace.parentNode.replaceChild(df, numPlace);
            }, true);
        },
        addStar : function (uri, title) {
            if (!this.rks) throw "rks.";
            var url = HatenaStar.ADD + '?uri=' + encodeURIComponent(uri) + (title ? ('&title=' + encodeURIComponent(title)) : '') + '&token=' + this.token + '&rks=' + this.rks + '&' + new Date().getTime();
            new Image().src = url;
        }
    };
    var hatenaStar = new HatenaStar.Instance(NDR_HATENASTAR_TOKEN);
    
    /** 
     * class SimpleDeferred
     */
    var SimpleDeferred = function() {
        this.funcs = [];
    };
    SimpleDeferred.prototype.addCallback = function(f) {
        this.funcs.push(f);
    };
    SimpleDeferred.prototype.callback = function(initArg) {
        var result = initArg;
        for (var i = 0; i < this.funcs.length; i++) {
            result = this.funcs[i](result);
        }
    };
    var Deferred = SimpleDeferred;
    
    /**
     * class NicoMylist.
     */
    var NicoMylist = {
        GROUP_EDIT : '/mylistgroup_edit',
        EDIT       : '/mylist_edit',
        STATUS     : {
            'loading':'\u8FFD\u52A0\u4E2D\u3067\u3059\u2026\u3002',
            //'success':'<a href="%HREF%">%NAME%</a> \u306B\u767B\u9332\u3057\u307E\u3057\u305F\u3002',
            'duperror':'\u3059\u3067\u306B\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u3059\u3002',
            'maxerror':'\u6700\u5927\u767B\u9332\u6570\u3092\u30AA\u30FC\u30D0\u30FC\u3057\u3066\u3044\u307E\u3059\u3002',
            'error':'\u767B\u9332\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002'
        },
        REQUEST_INTERVAL : 3
    };
    NicoMylist.Instance = function() {
        this.mylistGroup = null;
        this.requestQueue = [];
        this.isRunning = false;
        this.loadMylistGroup();
    };
    NicoMylist.Instance.prototype = {
        loadMylistGroup : function() {
            var self = this;
            sameDomainRequest(NicoMylist.GROUP_EDIT, function(x) {
                if (x.status == 200) {
                    var group_list = [];
                    var group_info = {};
                    var m = x.responseText.match(/href\s*=\s*"mylist\/\d+"[^>]*>.+?<\/a>/g);
                    if (!m) return;
                    for (var i = 0; i < m.length; i++) {
                        var info = m[i].match(/href\s*=\s*"(mylist\/(\d+))"[^>]*>(.+?)<\/a>/);
                        group_list.push(info[2]);
                        group_info[info[2]] = { group_name: info[3], group_uri: '/' + info[1] };
                    }
                    self.mylistGroup = { group_list: group_list, group_info: group_info };
                }
            });
        },
        request : function(win, method, url, data, callback) {
            var x = new win.XMLHttpRequest();
            x.open(method, url, true);
            x.onload = function() { callback(x) };
            x.onerror = function() { throw "XMLHttpRequest error." };
            x.setRequestHeader('X-Requested-With', 'XMLHttpRequest'); // for niconico API.
            x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8'); // for niconico API.
            x.send(data);
            return x;
        },
        add : function(video_id, group_id, callback) {
            var self = this;
            this.enqueueRequest(function() {
                var d = new Deferred();
                self.request(window, 'POST', '/watch/' + video_id, 'mylist=add&group_id=' + group_id + '&ajax=1', 
                    function(x) { d.callback(x) }
                );
                d.addCallback(function(x) { 
                    try {
                        callback(eval(x.responseText).result);
                    }
                    catch(e) {}
                });
                return d;
            });
        },
        enqueueRequest : function(func) {
            this.requestQueue.push(func);
            if (!this.isRunning) this.next();
        },
        next : function() {
            if (this.requestQueue.length == 0) {
                this.isRunning = false;
                return;
            }
            this.isRunning = true;
            var d = this.requestQueue.shift()();
            var self = this;
            d.addCallback(function() {
                setTimeout(function() {
                    self.next();
                }, NicoMylist.REQUEST_INTERVAL * 1000)
            });
        }
    };
    var nicoMylist = new NicoMylist.Instance();
    
    
    // class RSSProcessor (RSS2.0)
    function RSSProcessor() {
        this.initialize.apply(this, arguments);
    }
    RSSProcessor.prototype.initialize = function() {
        this.xProps = {
            title       : '//channel/title',
            link        : '//channel/link',
            description : '//channel/description'
        };
        this.xItems = '//item';
        this.xItemProps = {
            title       : 'title',
            link        : 'link',
            description : 'description',
            date        : 'pubDate'
        };
    };
    RSSProcessor.prototype.createResolver = function(document) {
        return null;
    };
    RSSProcessor.prototype.toObject = function(document) {
        var data = {};
        var resolver = this.createResolver(document);
        for (var k in this.xProps) {
            if (this.xProps.hasOwnProperty(k)) {
                data[k] = document.evaluate(this.xProps[k], document, resolver, XPathResult.STRING_TYPE, null).stringValue;
            }
        }
        var keys = [];
        var exps = {};
        for (var k in this.xItemProps) {
            if (this.xItemProps.hasOwnProperty(k)) {
                keys.push(k);
                exps[k] = document.createExpression(this.xItemProps[k], resolver);
            }
        }
        var rss_items = [];
        var items = document.evaluate(this.xItems, document, resolver, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        for (var i = 0, len = items.snapshotLength; i < len; i++) {
            var item = items.snapshotItem(i);
            var itemData = {};
            for (var j = 0; j < keys.length; j++) {
                var k = keys[j];
                itemData[k] = exps[k].evaluate(item, XPathResult.STRING_TYPE, null).stringValue;
            }
            rss_items.push(itemData);
        }
        data.items = rss_items;
        return data;
    };
    // class RSS1Processor
    function RSS1Processor() {
        this.initialize.apply(this, arguments);
    }
    RSS1Processor.prototype = new RSSProcessor();
    RSS1Processor.prototype.initialize = function() {
        this.xProps = {
            title       : '//rss1:channel/rss1:title',
            link        : '//rss1:channel/rss1:link',
            description : '//rss1:channel/rss1:description'
        };
        this.xItems = '//rss1:item';
        this.xItemProps = {
            title       : 'rss1:title',
            link        : 'rss1:link',
            description : '*[self::content:encoded or self::rss1:description]',
            date        : 'dc:date'
        };
    };
    RSS1Processor.prototype.createResolver = function(document) {
        // http://subtech.g.hatena.ne.jp/cho45/20071119/1195408940
        return function(prefix) {
            if (prefix == 'rss1') {
                return 'http://purl.org/rss/1.0/';
            }
            var c = document.createNSResolver(document.documentElement).lookupNamespaceURI(prefix);
            if (c) return c;
            return (document.documentElement.namespaceURI ? "http://www.w3.org/1999/xhtml" : "");
        }
    };
    // class AtomProcessor.
    function AtomProcessor() {
        this.initialize.apply(this, arguments);
    }
    AtomProcessor.prototype = new RSSProcessor();
    AtomProcessor.prototype.initialize = function() {
        this.xProps = {
            title       : '//atom:feed/atom:title',
            link        : '//atom:feed/atom:link[@rel="alternate" or true()]/@href',
            description : '//atom:feed/atom:subtitle'
        };
        this.xItems = '//atom:entry';
        this.xItemProps = {
            title       : 'atom:title',
            link        : 'atom:link/@href',
            description : 'atom:content',
            date        : 'atom:published'
        };
    };
    AtomProcessor.prototype.createResolver = function(document) {
        return function(prefix) {
            if (prefix == 'atom') {
                return 'http://www.w3.org/2005/Atom';
            }
            var c = document.createNSResolver(document.documentElement).lookupNamespaceURI(prefix);
            if (c) return c;
            return (document.documentElement.namespaceURI ? "http://www.w3.org/1999/xhtml" : "");
        }
    };
    // class AtomProcessor.
    function HtmlProcessor() {
    }
    HtmlProcessor.prototype.toObject = function(document) {
        var data = {
            title : document.title,
            link  : '',
            description : '',
            items : []
        };
        if (!data.title) {
            var title = document.getElementsByTagName('title')[0];
            if (title) data.title = title.textContent;
        }
        var items = data.items;
        var playinfo = createPlayInfo(document);
        var pitems = playinfo.items;
        for (var i = 0; i < pitems.length; i++) {
            var video_id = pitems[i];
            items.push({
                title : playinfo.title[video_id],
                link  : playinfo.video[video_id],
                image : playinfo.image[video_id],
                description : '',
                date : ''
            });
        }
        return data;
    };
    function parseObject(str) {
        var responseDocument = null;
        if (/^\s*<\?xml/.test(str)) {
            responseDocument = new DOMParser().parseFromString(str, 'application/xml');
        }
        else {
            // cutting corners
            var doc = document.implementation.createHTMLDocument('');
            var range = doc.createRange();
            range.selectNodeContents(doc.documentElement);
            range.deleteContents();
            range.insertNode(range.createContextualFragment(str));
            responseDocument = doc;
        }
        var rssProcessor;
        switch (responseDocument.documentElement.nodeName) {
            case 'rss'    : rssProcessor = new RSSProcessor();  break;
            case 'rdf:RDF': rssProcessor = new RSS1Processor(); break;
            case 'feed'   : rssProcessor = new AtomProcessor(); break;
            default       : rssProcessor = new HtmlProcessor(); break;
        }
        var obj = rssProcessor.toObject(responseDocument);
        return obj;
    }
    
    /**
     * VisitUtil
     */
    var VisitUtil = {
        checker : null,
        isVisited : function(url) {
            if (!VisitUtil.checker) {
                VisitUtil.checker = document.createElement('a');
                appendClass(VisitUtil.checker, 'ndr_visited_checker');
                document.body.insertBefore(VisitUtil.checker, document.body.firstChild);
                setTimeout(function() {
                    document.body.removeChild(VisitUtil.checker);
                    VisitUtil.checker = null;
                }, 1000);
            }
            VisitUtil.checker.href = url;
            return (VisitUtil.checker.offsetHeight == 0);
        },
        pseudoVisit : function(link) {
            var iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = link;
            document.body.appendChild(iframe);
            document.body.removeChild(iframe);
        }
    }
    
    /**
     * SimpleNicovideoPlayer.
     *   http://orera.g.hatena.ne.jp/miya2000/20070925/p0
     */
    function SimpleNicovideoPlayer(name) {
        this.playlist = [];
        this.name = name || 'SimpleNicovideoPlayer';
    }
    SimpleNicovideoPlayer.prototype = {
        add : function(playlist) {
            this.playlist = this.playlist.concat(playlist);
            if (this.isPlaying) {
                this.focus();
            }
            else {
                this.play();
            }
        },
        play : function() {
            if (this.playlist.length == 0) {
                this.isPlaying = false;
                return;
            };
            this.isPlaying = true;
            var nextVideo = this.playlist.shift();
            var w = window.open(nextVideo, this.name);
            w.focus();
            this.focus = function() {
                w.focus();
            };
            var self = this;
            var tid = setInterval(function(){
                if (w.closed) {
                    clearInterval(tid);
                    self.isPlaying = false;
                    self.playlist = [];
                }
                var d,p,t,v;
                if((d=w.document)&&(p=d.getElementById('flvplayer'))&&(t=p.GetVariable('ContentLength'))&&(v=p.GetVariable('LastVpos'))){
                    if (/deleted/.test(p.GetVariable('o'))) {
                        clearInterval(tid);
                        self.play();
                        return;
                    }
                    if (t-v<=8&&l==v){
                        clearInterval(tid);
                        self.play();
                        return;
                    }
                    l=v;
                }
            }, 5000);
        }
    };
    
    var NDR = function(feedList) {
        this.pref = {
            feedList : feedList
        };
        this.feedItems = {};
        for (var i = 0; i < feedList.length; i++) {
            this.feedItems[feedList[i]] = null;
        }
        this.isFeedPaneShowing = true;
        this.faviconClass = {};
        this.pinnedMap = new ListedKeyMap();
        this.build();
        this.openHistory();
        this.reloadFeeds();
        this.loadPreference();
        this.player = new SimpleNicovideoPlayer('NDR');
    }
    NDR.prototype.build = function() {
        addStyle(NDR_STYLE);
        var body = document.getElementsByTagName('body')[0];
        var ndrBody = document.createElement('div');
        appendClass(ndrBody, 'ndr_body');
        ndrBody.innerHTML = NDR_HTML;
        body.appendChild(ndrBody);
        
        var feed_pane = document.getElementById('NDR_FEED_PANE');
        var feed_menu = document.getElementById('NDR_FEED_MENU');
        feed_pane.style.paddingTop = feed_menu.offsetHeight + 'px';
        
        window.addEventListener('resize', function() {
            // force redraw.
            feed_pane.style.display = 'none';
            feed_pane.style.display = '';
        }, false);
        
        var self = this;
        
        var nicoSearchForm = document.getElementById('NDR_NICO_SEARCH');
        nicoSearchForm.addEventListener('submit', function(e) {
            if (e.shiftKey) {
                setTimeout(function() { nicoSearchForm.s.value = '' }, 0);
            }
            else {
                e.preventDefault();
                self.openTemporaryFeed('http://www.nicovideo.jp/search/' + nicoSearchForm.s.value);
                setTimeout(function() { nicoSearchForm.s.value = '' }, 0);
            }
        }, false);
        
        var myFeedButton = document.getElementById('NDR_C_MYFEED');
        myFeedButton.addEventListener('click', function(e) {
            e.preventDefault();
            self.toggleFeedPane();
        }, false);
        
        var historyButton = document.getElementById('NDR_C_HISTORY');
        historyButton.addEventListener('click', function(e) {
            e.preventDefault();
            self.openHistory();
        }, false);
        
        var mixButton = document.getElementById('NDR_C_MIX');
        mixButton.addEventListener('click', function(e) {
            e.preventDefault();
            self.openMix();
        }, false);
        
        var feedReloadButton = document.getElementById('NDR_C_FEED_RELOAD');
        feedReloadButton.addEventListener('click', function(e) {
            e.preventDefault();
            self.loadPreference();
            self.reloadFeeds();
        }, false);
        
        var feedEditButton = document.getElementById('NDR_C_FEED_EDIT');
        feedEditButton && feedEditButton.addEventListener('click', function(e) {
            e.preventDefault();
            self.loadPreference();
            self.openFeedEdit();
        }, false);
        
        var feedAddButton = document.getElementById('NDR_C_FEED_ADD');
        feedAddButton && feedAddButton.addEventListener('click', function(e) {
            e.preventDefault();
            self.loadPreference();
            self.addFeedURL();
        }, false);
        
        var feedSearchBox = document.getElementById('NDR_C_FEED_SEARCH');
        var feedSearchTid = null;
        var intervalCount = 0;
        feedSearchBox.addEventListener('keypress', function(e) {
            if (e.keyCode == 38) {
                self.selectPreviousFeed();
                e.preventDefault();
            }
            if (e.keyCode == 40) {
                self.selectNextFeed();
                e.preventDefault();
            }
        }, false);
        feedSearchBox.addEventListener('keydown', function(e) {
            if (feedSearchTid) return;
            var preWord = null;
            var feedSearchTid = setInterval(function() {
                if (preWord != feedSearchBox.value) {
                    self.feedSearch(feedSearchBox);
                    preWord = feedSearchBox.value;
                    intervalCount = 0;
                }
                else {
                    if (++intervalCount > 10) {
                        clearInterval(feedSearchTid);
                    }
                }
            }, 500);
            e.stopPropagation();
        }, false);
        
        var prevEntryButton = document.getElementById('NDR_C_PREV_ENTRY');
        prevEntryButton.addEventListener('click', function(e) {
            self.selectPreviousEntry();
        }, false);
        prevEntryButton.addEventListener('dblclick', function(e) {
            e.preventDefault();
            self.selectPreviousEntry();
        }, false);
        var nextEntryButton = document.getElementById('NDR_C_NEXT_ENTRY');
        nextEntryButton.addEventListener('click', function(e) {
            self.selectNextEntry();
        }, false);
        nextEntryButton.addEventListener('dblclick', function(e) {
            e.preventDefault();
            self.selectNextEntry();
        }, false);
        
        var pinnedListButton = document.getElementById('NDR_C_PINNED_LIST');
        var pinnedList = document.getElementById('NDR_PINNED_LIST');
        var pinTooltipTid = null;
        pinnedListButton.addEventListener('click', function(e) {
            self.viewPinnedEntries();
        }, false);
        pinnedListButton.addEventListener('mouseover', function(e) {
            self.showPinnedList();
        }, false);
        pinnedList.addEventListener('mouseover', function(e) {
            self.showPinnedList();
        }, false);
        pinnedListButton.addEventListener('mouseout', function(e) {
            self.hidePinnedListLater();
        }, false);
        pinnedList.addEventListener('mouseout', function(e) {
            self.hidePinnedListLater();
        }, false);
        
        var entries = document.getElementById('NDR_ENTRIES');
        this.entrySelectionIterator = new ListElementIterator(entries, 'ndr_entry');
        this.feedSelectionIterator = new ListElementIterator(document.getElementById('NDR_FEED_LIST'));
        var keyBind = new KeyBind();
        NDR_KEY['NextEntry'] != null && keyBind.add(NDR_KEY['NextEntry'], function(e) {
            e.preventDefault();
            self.selectNextEntry();
        });
        NDR_KEY['PrevEntry'] != null && keyBind.add(NDR_KEY['PrevEntry'], function(e) {
            e.preventDefault();
            self.selectPreviousEntry();
        });
        NDR_KEY['NextFeed'] != null && keyBind.add(NDR_KEY['NextFeed'], function(e) {
            e.preventDefault();
            self.selectNextFeed();
        });
        NDR_KEY['PrevFeed'] != null && keyBind.add(NDR_KEY['PrevFeed'], function(e) {
            e.preventDefault();
            self.selectPreviousFeed();
        });
        NDR_KEY['View'] != null && keyBind.add(NDR_KEY['View'], function(e) {
            e.preventDefault();
            self.viewEntry();
        });
        NDR_KEY['Pin'] != null && keyBind.add(NDR_KEY['Pin'], function(e) {
            e.preventDefault();
            self.pinToggle();
        });
        NDR_KEY['OpenPin'] != null && keyBind.add(NDR_KEY['OpenPin'], function(e) {
            e.preventDefault();
            self.viewPinnedEntries();
        });
        
        // miniTV
        /*
        if (window.WNPCore) {
            addStyle(NDR_STYLE_MINITV);
            this.wnpCore = new WNPCore();
            var dv = document.createElement('div');
            appendClass(dv, 'minitv_container');
            dv.appendChild(this.wnpCore.element);
            document.body.appendChild(dv);
            this.wnpContainer = dv;
            
            var wnp_footer = document.createElement('div');
            appendClass(wnp_footer, 'wnp_footer');
            wnp_footer.innerHTML = '<button class="control default_button" title="Show Nicovideo Player Controls" id="WNP_C_NICO_MENU">\u25B3</button>';
            wnp_footer.addEventListener('click', function(e) {
                self.wnpCore.setControlShowing(!self.wnpCore.isControlShowing);
            }, false);
            document.body.appendChild(wnp_footer);
            
            window.addEventListener('keydown', function(e) {
                if (e.keyCode == 17) {
                    if (self.isVideoMode) self.normalMode();
                    else                  self.videoMode();
                }
                if (self.isVideoMode) {
                    if (e.keyCode == 38) { // up
                        e.preventDefault(); e.stopPropagation();
                        dv.style.top = '25px';
                        dv.style.bottom = 'auto';
                    }
                    else if (e.keyCode == 40) {
                        e.preventDefault(); e.stopPropagation();
                        dv.style.top = 'auto';
                        dv.style.bottom = '25px';
                    }
                    else if (e.keyCode == 37) {
                        e.preventDefault(); e.stopPropagation();
                        dv.style.left = '25px';
                        dv.style.right = 'auto';
                    }
                    else if (e.keyCode == 39) {
                        e.preventDefault(); e.stopPropagation();
                        dv.style.left = 'auto';
                        dv.style.right = '25px';
                    }
                }
            }, false);
        }
        */
    };
    NDR.prototype.videoMode = function() {
        if (this.isVideoMode) return;
        this.isVideoMode = true;
        var wnpCore = this.wnpCore;
        var wnpContainer = this.wnpContainer;
        wnpContainer.style.display = 'block';
        this.currentHeight = wnpContainer.offsetHeight;
        wnpCore.autoRelayout = false;
        wnpContainer.style.height = (this.currentHeight + 86 * (wnpCore.zoom||0)) + 'px';
        var videoModeScreen = document.createElement('div');
        videoModeScreen.style.cssText = 'width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: 1000;';
        videoModeScreen.innerHTML = [
            '<div style="position: absolute; width: 100%; height: 100%; background-color: #000; opacity: .8;"></div>',
            '<div>aaaa</div>',
        ].join('');
        document.body.appendChild(videoModeScreen);
        this.videoModeScreen = videoModeScreen;
    };
    NDR.prototype.normalMode = function() {
        this.isVideoMode = false;
        if (this.videoModeScreen) {
            var range = document.createRange();
            range.selectNode(this.videoModeScreen);
            range.deleteContents();
        }
        this.wnpContainer.style.height = '';
        if (!this.wnpCore.isPlaying) this.wnpContainer.style.display = '';
        this.wnpCore.autoRelayout = true;
        this.videoModeScreen = null;
    };
    NDR.prototype.toggleFeedPane = function() {
        if (this.isFeedPaneShowing) {
            if (!this.hideFeedPaneStyle) {
                this.hideFeedPaneStyle = addStyle(NDR_STYLE_HIDE_FEED_PANE);
            }
            this.hideFeedPaneStyle.disabled = false;
        }
        else {
            this.hideFeedPaneStyle.disabled = true;
        }
        this.isFeedPaneShowing = !this.isFeedPaneShowing;
    };
    NDR.prototype.feedSearch = function(feedSearchBox) {
        var phrase = feedSearchBox.value;
        var tester = (phrase) ? new RegExp(phrase)
                              : { test: function() { return true } };
        var feedIterator = new ListElementIterator(document.getElementById('NDR_FEED_LIST'));
        feedIterator.first();
        while (feedIterator.item) {
            if (tester.test(feedIterator.item.textContent)) {
                feedIterator.item.style.display = '';
            }
            else {
                feedIterator.item.style.display = 'none';
            }
            feedIterator.next();
        }
    }
    NDR.prototype.scrollTo = function(item) {
        if (this.scrollSoar != null) {
            this.scrollSoar.cancel();
        }
        var list = document.getElementById('NDR_ENTRIES');
        var nextScrollTop = Math.min(item.offsetTop, list.scrollHeight - list.clientHeight);
        this.scrollSoar = new Soar(list);
        this.scrollSoar.to({scrollTop: nextScrollTop}).go();
        var self = this;
        this.scrollSoar.onFinish = function() {
            self.scrollSoar = null;
        };
    };
    NDR.prototype.currentViewingEntry = function() {
        var entries = this.entrySelectionIterator.listElement;
        var scrollTop = entries.scrollTop;
        var scrollBottom = scrollTop + entries.clientHeight;
        var current = this.entrySelectionIterator.item;
        if (current && !current.parentNode) { // replaced entries.
            current = null;
        }
        if (current) {
            if ((current.offsetTop + current.offsetHeight) > scrollTop && current.offsetTop < scrollBottom) {
                return current;
            }
        }
        var iterator = new ListElementIterator(entries, 'ndr_entry');
        for (iterator.first(); iterator.item; iterator.next()) {
            if (iterator.item.offsetTop >= scrollTop || (iterator.item.offsetTop + iterator.item.offsetHeight) >= scrollBottom) {
                break;
            }
        }
        return iterator.item;
    };
    NDR.prototype.selectNextEntry = function() {
        var nextEntry = null;
        if (this.scrollSoar) { // now scrolling.
            nextEntry = this.entrySelectionIterator.next().isNullThenFirst().item;
        }
        else {
            var entries = this.entrySelectionIterator.listElement;
            var currentEntry = this.currentViewingEntry();
            if (currentEntry) {
                this.entrySelectionIterator.current(currentEntry);
                if (currentEntry != this.currentSelectedItem && currentEntry.offsetTop > entries.scrollTop) {
                    nextEntry = this.entrySelectionIterator.item;
                }
                else if (currentEntry.offsetTop > entries.scrollTop && (currentEntry.offsetTop + currentEntry.offsetHeight) > (entries.scrollTop + entries.clientHeight)) {
                    nextEntry = this.entrySelectionIterator.item;
                }
                else {
                    nextEntry = this.entrySelectionIterator.next().isNullThenFirst().item;
                }
            }
        }
        if (nextEntry) {
            this.selectEntryItem(nextEntry);
            this.scrollTo(nextEntry);
        }
    };
    NDR.prototype.selectPreviousEntry = function() {
        var prevEntry = null;
        if (this.entrySelectionIterator.item == this.entrySelectionIterator.listElement.firstChild) {
            prevEntry = this.entrySelectionIterator.last().item;
        }
        else if (this.scrollSoar) { // now scrolling.
            prevEntry = this.entrySelectionIterator.previous().item;
        }
        else {
            var entries = this.entrySelectionIterator.listElement;
            var currentEntry = this.currentViewingEntry();
            if (currentEntry) {
                this.entrySelectionIterator.current(currentEntry);
                if (currentEntry.offsetTop < entries.scrollTop) {
                    prevEntry = this.entrySelectionIterator.item;
                }
                else {
                    prevEntry = this.entrySelectionIterator.previous().item;
                }
            }
        }
        if (this.entrySelectionIterator.item == null) {
            prevEntry = this.entrySelectionIterator.current(this.entrySelectionIterator.listElement.firstChild).item;
        }
        if (prevEntry) {
            this.selectEntryItem(prevEntry);
            this.scrollTo(prevEntry);
        }
    };
    NDR.prototype.selectEntryItem = function(item) {
        if (this.currentSelectedItem) this.currentSelectedItem.style.backgroundColor = '';
        this.currentSelectedItem = item;
        if (hasClass(this.entrySelectionIterator.item, 'ndr_entry')) this.currentSelectedItem.style.backgroundColor = '#E4F5FF';
    };
    NDR.prototype.unselectEntryItem = function() {
        if (this.currentSelectedItem) this.currentSelectedItem.style.backgroundColor = '';
        this.currentSelectedItem = null;
    };
    NDR.prototype.selectFeedItem = function(item) {
        if (this.currenFeedItem) {
            this.currenFeedItem.style.color = '';
            this.currenFeedItem.style.backgroundColor = '';
        }
        this.currenFeedItem = item;
        this.currenFeedItem.style.color = 'white';
        this.currenFeedItem.style.backgroundColor = '#80A0DF';
    };
    NDR.prototype.selectNextFeed = function(item) {
        var current = this.feedSelectionIterator.item;
        this.feedSelectionIterator.next();
        while (this.feedSelectionIterator.item && this.feedSelectionIterator.item.offsetHeight == 0) {
            this.feedSelectionIterator.next();
        }
        this.feedSelectionIterator.isNullThenFirst();
        while (this.feedSelectionIterator.item && this.feedSelectionIterator.item !== current && this.feedSelectionIterator.item.offsetHeight == 0) {
            this.feedSelectionIterator.next();
        }
        if (this.feedSelectionIterator.item == null) return;
        if (this.selectionFeedTid) clearTimeout(this.selectionFeedTid);
        this.selectFeedItem(this.feedSelectionIterator.item);
        var self = this;
        this.selectionFeedTid = setTimeout(function() {
            var evt = document.createEvent('MouseEvents');
            evt.initEvent('click', false, false);
            self.feedSelectionIterator.item.dispatchEvent(evt);
        }, 100);
        var container = document.getElementById('NDR_FEED_LISTS');
        container.scrollTop = Math.min(self.feedSelectionIterator.item.offsetTop - 30, container.scrollHeight - container.clientHeight);
    };
    NDR.prototype.selectPreviousFeed = function(item) {
        var current = this.feedSelectionIterator.item;
        this.feedSelectionIterator.previous();
        while (this.feedSelectionIterator.item && this.feedSelectionIterator.item.offsetHeight == 0) {
            this.feedSelectionIterator.previous();
        }
        this.feedSelectionIterator.isNullThenLast();
        while (this.feedSelectionIterator.item && this.feedSelectionIterator.item !== current && this.feedSelectionIterator.item.offsetHeight == 0) {
            this.feedSelectionIterator.previous();
        }
        if (this.feedSelectionIterator.item == null) return;
        if (this.selectionFeedTid) clearTimeout(this.selectionFeedTid);
        this.selectFeedItem(this.feedSelectionIterator.item);
        var self = this;
        this.selectionFeedTid = setTimeout(function() {
            var evt = document.createEvent('MouseEvents');
            evt.initEvent('click', false, false);
            self.feedSelectionIterator.item.dispatchEvent(evt);
        }, 100);
        var container = document.getElementById('NDR_FEED_LISTS');
        container.scrollTop = Math.min(self.feedSelectionIterator.item.offsetTop - 30, container.scrollHeight - container.clientHeight);
    };
    NDR.prototype.loadFeed = function(url) {
        var self = this;
        feedRequest(url, function(e) {
            try {
                if (e.readyState < 4) { // timeout.
                    var rssObj = {
                        title : url,
                        link : url,
                        description: '\u901A\u4FE1\u3092\u4E2D\u65AD\u3057\u307E\u3057\u305F\u3002',
                        items : [],
                        url : url
                    };
                    self.addFeedItem(self.filter(rssObj));
                }
                else {
                    var rssObj = parseObject(e.responseText);
                    rssObj.url = url;
                    if (!rssObj.link) rssObj.link = url;
                    rssObj = self.filter(rssObj);
                    self.addFeedItem(rssObj);
                    var list = self.pref.feedList;
                    for (var i = 0; i < list.length; i++) {
                        if (list[i] == url) return;
                    }
                    self.pref.feedList.push(url);
                    self.storePreference();
                }
            }
            catch (e) {
                throw e; // alert or ..
            }
        });
    };
    NDR.prototype.reloadFeed = function(url) {
        var self = this;
        feedRequest(url, function(e) {
            try {
                var rssObj;
                if (e.readyState < 4) { // timeout.
                    rssObj = {
                        title : url,
                        link : url,
                        description: '\u901A\u4FE1\u3092\u4E2D\u65AD\u3057\u307E\u3057\u305F\u3002',
                        items : [],
                        url : url
                    };
                }
                else {
                    rssObj = parseObject(e.responseText);
                    rssObj.url = url;
                    if (!rssObj.link) rssObj.link = url;
                }
                self.openFeed(self.filter(rssObj));
            }
            catch (e) {
                throw e; // alert or ..
            }
        });
    };
    NDR.prototype.openTemporaryFeed = function(url) {
        var self = this;
        feedRequest(url, function(e) {
            try {
                if (e.readyState < 4) { // timeout.
                    var rssObj = {
                        title : url,
                        link : url,
                        description: '\u901A\u4FE1\u3092\u4E2D\u65AD\u3057\u307E\u3057\u305F\u3002',
                        items : [],
                        url : url
                    };
                    self.addFeedItem(rssObj);
                }
                else {
                    var rssObj = parseObject(e.responseText);
                    rssObj.url = url;
                    if (!rssObj.link) rssObj.link = url;
                    rssObj = self.filter(rssObj);
                    self.addTemporaryFeedItem(rssObj);
                    self.openFeed(rssObj);
                }
            }
            catch (e) {
                throw e; // alert or ..
            }
        });
    };
    NDR.prototype.reloadFeeds = function() {
        var statusImg = document.getElementById('NDR_STATUS_IMAGE');
        statusImg.src = NDR_IMG_LOADING;
        this.clearFeedItems();
        var list = this.pref.feedList;
        for (var i = 0; i < list.length; i++) {
            var url = list[i];
            if (!url) continue;
            this.loadFeed(url);
        }
    };
    NDR.prototype.refreshFeed = function() {
        this.clearFeedItems();
        var self = this;
        var list = this.pref.feedList;
        for (var i = 0; i < list.length; i++) {
            var url = list[i];
            if (!url) continue;
            this.addFeedItem(this.feedItems[url]); // TODO: feedItem has not read yet.
        }
    };
    NDR.prototype.clearFeedItems = function() {
        this.unreadMixItems = [];
        var range = document.createRange();
        var list = document.getElementById('NDR_FEED_LIST');
        range.selectNodeContents(list);
        range.deleteContents();
        document.getElementById('NDR_UNREAD_FEED_COUNT').textContent = '0';
        document.getElementById('NDR_UNREAD_ENTRY_COUNT').textContent = '0';
    };
    NDR.prototype.filter = function(rssObj) {
        var items = rssObj.items;
        var newOne = [];
        var readItems = [];
        var unreadItems = [];
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.feedTitle = rssObj.title;
            item.feedLink  = rssObj.link;
            item.feedURL   = rssObj.url;
            if (item.link.indexOf('http://www.nicovideo.jp/watch/') == 0) {
                newOne.push(item);
                if (VisitUtil.isVisited(items[i].link)) {
                    readItems.push(item);
                }
                else {
                    unreadItems.push(item);
                }
            }
        }
        rssObj.items = newOne;
        rssObj.readItems = readItems;
        rssObj.unreadItems = unreadItems;
        return rssObj;
    }
    NDR.prototype.addFeedItem = function(rssObj) {
        var feedList = document.getElementById('NDR_FEED_LIST');
        var li = document.createElement('li');
        li.innerHTML = stripTag(rssObj.title);
        if (rssObj.unreadItems && rssObj.unreadItems.length > 0) {
            li.innerHTML += '<span class="ndr_unread_count"> (' + rssObj.unreadItems.length + ')</span>';
            appendClass(li, 'ndr_unread_feed');
        }
        var self = this;
        // enable text selection. (x :hover)
        li.addEventListener('mouseover', function() { if (li != self.currenFeedItem) li.style.backgroundColor = '#E8E8E8'; }, false);
        li.addEventListener('mouseout', function() { if (li != self.currenFeedItem) li.style.backgroundColor = ''; }, false);
        
        appendClass(li, this.getFeedItemClass(rssObj.link));
        feedList.appendChild(li);
        this.feedItems[rssObj.url] = rssObj;
        li.addEventListener('click', function(e) {
            e.preventDefault();
            self.feedSelectionIterator.current(li);
            self.selectFeedItem(li);
            self.openFeed(rssObj);
        }, false);
        if (rssObj.unreadItems && rssObj.unreadItems.length > 0) {
            var unreadFeedCount = document.getElementById('NDR_UNREAD_FEED_COUNT');
            unreadFeedCount.textContent = Number(unreadFeedCount.textContent) + 1;
            var unreadEntryCount = document.getElementById('NDR_UNREAD_ENTRY_COUNT');
            unreadEntryCount.textContent = Number(unreadEntryCount.textContent) + rssObj.unreadItems.length;
        }
        if (rssObj.unreadItems) {
            this.unreadMixItems = this.unreadMixItems.concat(rssObj.unreadItems);
        }
        // loading completed.
        if (this.pref.feedList.length == this.feedSelectionIterator.count()) {
            var statusImg = document.getElementById('NDR_STATUS_IMAGE');
            statusImg.src = NDR_IMG_COMPLETE;
            var statusMsg = document.getElementById('NDR_STATUS_MESSAGE');
            statusMsg.textContent = 'Loading completed.';
        }
    };
    NDR.prototype.addTemporaryFeedItem = function(rssObj) {
        var feedList = document.getElementById('NDR_TEMPORARY_FEED_LIST');
        var li = document.createElement('li');
        li.innerHTML = stripTag(rssObj.title);
        if (rssObj.unreadItems && rssObj.unreadItems.length > 0) {
            li.innerHTML += '<span class="ndr_unread_count"> (' + rssObj.unreadItems.length + ')</span>';
            li.style.color = 'black';
            li.style.fontWeight = 'bold';
        }
        var self = this;
        // enable text selection. (x :hover)
        li.addEventListener('mouseover', function() { if (li != self.currenFeedItem) li.style.backgroundColor = '#E8E8E8'; }, false);
        li.addEventListener('mouseout', function() { if (li != self.currenFeedItem) li.style.backgroundColor = ''; }, false);
        
        feedList.appendChild(li);
        this.feedItems[rssObj.url] = rssObj;
        li.addEventListener('click', function(e) {
            e.preventDefault();
            self.selectFeedItem(li);
            self.openFeed(rssObj);
        }, false);
        var delButton = document.createElement('button');
        delButton.textContent = '\u00D7';
        delButton.addEventListener('click', function(e) {
            e.stopPropagation();
            li.parentNode.removeChild(li);
            delete self.feedItems[rssObj.url];
        }, false);
        li.appendChild(delButton, li.firstChild);
    };
    NDR.prototype.getFeedItemClass = function(url) {
        if (!url) return "";
        if (/nicovideo\.jp/.test(url)) {
            return 'ndr_feed_origin_nico';
        }
        var m = /^([^/]*?\/\/)([^/]*)/.exec(url);
        if (!m) return "";
        var hostName = m[2];
        var className = this.faviconClass[hostName];
        if (className != null) return className;
        className = 'ndr_feed_origin_' + hostName.replace(/\./g, '_');
        this.faviconClass[hostName] = className;
        var favicon_url = m[1] + m[2] + '/favicon.ico';
        var styleStr = [
            '.ndr_feed_list > li.' + className + ':before {',
            '    content: url("' + favicon_url + '"); ',
            '    width: 16px; ',
            '    height: 16px; ',
            '    margin: 1px 0 0 -20px; ',
            '    display: inline-block;',
            '    position: absolute;',
            '} '
        ].join('\n');
        var style = addStyle(styleStr);
        var favicon_img = new Image();
        var self = this;
        favicon_img.onerror = function(e) {
            self.faviconClass[hostName] = '';
            style.parentNode.removeChild(style);
        };
        favicon_img.src = favicon_url;
        return className;
    };
    NDR.prototype.openMix = function() {
        var rssObj = {
            title : 'MIX',
            link : '',
            description: '',
            items : []
        };
        var items = rssObj.items;
        if (this.unreadMixItems.length == 0) {
            rssObj.description = '\u672A\u8996\u8074\u306E\u52D5\u753B\u306F\u3042\u308A\u307E\u305B\u3093\u3002';
            this.openFeed(rssObj);
            return;
        }
        var start = new Date();
        opera.postError('::sort start.');
        this.unreadMixItems.sort(function(a, b){
            return parseDate(b.date) - parseDate(a.date)
        });
        opera.postError('::sort time: ' + (new Date() - start) + '(ms)');
        var count = 0;
        var dup = {};
        for (var i = 0; i < this.unreadMixItems.length; i++) {
            var uitem = this.unreadMixItems[i];
            if (!dup[uitem.link]) {
                var mixItem = {
                    title       : uitem.title,
                    link        : uitem.link,
                    description : '',
                    date        : uitem.date,
                    mixFrom     : [uitem.feedTitle]
                }
                items.push(mixItem);
                dup[uitem.link] = mixItem;
                if (++count >= NDR_MIX_MAX) break;
            }
            else {
                dup[uitem.link].mixFrom.push(uitem.feedTitle);
            }
        }
        rssObj.unreadItems = items;
        this.openFeed(rssObj);
    };
    NDR.prototype.openHistory = function() {
        var rssObj = {
            title : '\u6700\u8FD1\u898B\u305F\u52D5\u753B',
            link : 'http://www.nicovideo.jp/history',
            description: '',
            items : []
        };
        var items = rssObj.items;
        var cookie = document.cookie;
        var nicohistory = /nicohistory=[^;]+/.exec(cookie);
        if (!nicohistory) {
            rssObj.description = '\u5C65\u6B74\u306F\u3042\u308A\u307E\u305B\u3093\u3002';
            this.openFeed(rssObj);
            return;
        }
        var histories = decodeURIComponent(nicohistory[0].slice(12)).split(',');
        for (var i = 0; i < histories.length; i++) {
            var video_id = histories[i].split(':')[0];
            if (!video_id) continue;
            items.push({
                title: video_id,
                link: 'http://www.nicovideo.jp/watch/' + video_id,
                description: '',
                date: ''
            });
        }
        this.openFeed(rssObj);
    };
    NDR.prototype.openFeed = function(rssObj, showVisited) {
        if (this.openFeedTid) clearTimeout(this.openFeedTid);
        this.openFeedTid = null;
        var range = document.createRange();
        var entriesPane = document.getElementById('NDR_ENTRIES');
        range.selectNodeContents(entriesPane);
        range.deleteContents();
        entriesPane.scrollTop = 0;
        
        var head_dv = document.createElement('div');
        head_dv.style.display = 'none';
        var title = (rssObj.link) ? '<a href="' + escAttr(rssObj.link) + '" target="_blank">' + stripTag(rssObj.title) + '</a>'
                                  : stripTag(rssObj.title)
        head_dv.innerHTML = [
            '<h2 class="ndr_title">' + title + '</h2>',
            '<h3 class="ndr_subtitle">' + stripTag(rssObj.description) + '</h3>',
            '<ul class="ndr_entry_menu">',
            '    <li>\u65B0\u7740: ' + (rssObj.unreadItems ? rssObj.unreadItems.length : 0) + ' entry</li>',
            '</ul>',
        ].join('');
        document.createDocumentFragment().appendChild(head_dv); // for selectNodeContents.
        range.selectNodeContents(head_dv);
        entriesPane.appendChild(range.extractContents());
        
        var entryPageButtons = document.createElement('div');
        appendClass(entryPageButtons, 'ndr_page_button');
        entriesPane.appendChild(entryPageButtons);
        
        var self = this;
        //var entryPageButtons = document.getElementById('NDR_ENTRY_PAGE_BUTTONS');
        if (rssObj.readItems) {
            var reloadButton = document.createElement('button');
            appendClass(reloadButton, 'ndr_reload_button');
            reloadButton.textContent = '\u66F4\u65B0';
            reloadButton.addEventListener('click', function(e) {
                self.reloadFeed(rssObj.url);
            }, false);
            entryPageButtons.appendChild(reloadButton);
            
            var prevButton = document.createElement('button');
            appendClass(prevButton, 'ndr_page_button');
            prevButton.textContent = '<';
            if (!showVisited) prevButton.setAttribute('disabled', 'disabled');
            prevButton.addEventListener('click', function(e) {
                self.openFeed(rssObj);
            }, false);
            entryPageButtons.appendChild(prevButton);
            var nextButton = document.createElement('button');
            appendClass(nextButton, 'ndr_page_button');
            nextButton.textContent = '>';
            if (rssObj.readItems.length == 0 || showVisited) nextButton.setAttribute('disabled', 'disabled');
            nextButton.addEventListener('click', function(e) {
                self.openFeed(rssObj, true);
            }, false);
            entryPageButtons.appendChild(nextButton);
        }
        
        var items = (showVisited ? rssObj.readItems : rssObj.unreadItems) || rssObj.items;
        if (items.length == 0 && rssObj.items.length > 0) {
            if (rssObj.readItems) items = [rssObj.readItems[0]];
            else                  items = [rssObj.items[0]];
        }
        if (showVisited && rssObj.unreadItems && rssObj.unreadItems.length == 0) {
            items = items.slice(1);
        }
        items = items.concat(); // clone.
        var regTrim = /^[\s]+|[\s]+$/g,
            regCRLF = /\r?\n/,
            regThum = /(http:\/\/tn-skr[0-9a-z]*\.smilevideo\.jp\/smile\?i=[\d]+)/,
            regV_ID = /[a-z]{0,2}[0-9]+(?=\?|$)/,
            regNumb = /\d+/;
        var process = function(i) {
            var item = items[i];
            var buf = [];
            var dv = document.createElement('div');
            appendClass(dv, 'ndr_entry');
            if (i % 2 == 1) appendClass(dv, 'ndr_entry_even'); // 1 origin.
            if (self.pinAdded(item.link)) {
                appendClass(dv, 'ndr_entry_pin');
            }
            var video_id = regV_ID.exec(item.link)[0];
            var title_str = stripTag(item.title);
            buf.push('<div class="ndr_entry_controls">');
            buf.push('    <button class="ndr_clip"><span class="ndr_opera_icon"></span></button>');
            buf.push('    <button class="ndr_pin"><span class="ndr_opera_icon"></span></button>');
            buf.push('    <button class="ndr_mark_as_read"><span class="ndr_opera_icon"></span></button>');
            buf.push('</div>');
            buf.push('<h4>');
            buf.push('<a href="' + escAttr(item.link) + '" target="_blank">' + title_str + '</a>');
            buf.push('</h4>');
            var thumbnailURL = item.image || (regThum.exec(item.description) ? RegExp.$1 : null);
            if (!thumbnailURL) {
                thumbnailURL = 'http://tn-skr2.smilevideo.jp/smile?i=' + regNumb.exec(video_id)[0];
            }
            buf.push('<p class="ndr_entry_thumbnail">');
            buf.push('<a href="' + escAttr(item.link) + '" target="_blank"><img src="' + escAttr(thumbnailURL) + '" class="ndr_entry_thumbnail" width="130" height="100" alt="' + escAttr(title_str) + '"></a>');
            if (NDR_ENABLE_HATENABOOKMARK) buf.push('<a href="http://b.hatena.ne.jp/entry/' + escAttr(item.link) + '" target="_blank"><img src="http://b.hatena.ne.jp/entry/image/normal/' + escAttr(item.link) + '" height="13" alt=""></a><br>');
            buf.push('<span id="NDR_HSTAR_' + video_id + '"></span>');
            if (item.mixFrom) {
                buf.push('<br>mix from :');
                for (var j = 0; j < item.mixFrom.length; j++) {
                    buf.push('<br>');
                    buf.push(stripTag(item.mixFrom[j]));
                }
            }
            buf.push('</p>');

            var desc_html = makeNicoLinks(stripTag(item.description).replace(regTrim, '').split(regCRLF).join('<br>'));
            buf.push('<p>' + desc_html + '</p>');
            buf.push('<p class="ndr_entry_footer">\u6295\u7A3F: ' + (item.date ? formatDate(parseDate(item.date)) : '') + ' | </p>');
            dv.innerHTML = buf.join('');
            
            dv.addEventListener('click', function(e) {
                if (/^(?:a|input|button|img)$/i.test(e.target.nodeName)) return;
                if (dv != self.currentSelectedItem) {
                    self.entrySelectionIterator.current(dv);
                    self.selectEntryItem(dv);
                }
                else {
                    self.entrySelectionIterator.current(null);
                    self.unselectEntryItem(dv);
                }
            }, false);
            
            var clipButton = document.evaluate('descendant::button[contains(@class, "ndr_clip")]', dv, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            var mylistPanel = null;
            clipButton.addEventListener('mousedown', function(e) {
                if (!hasClass(dv, 'ndr_entry_clip')) {
                    if (!mylistPanel) {
                        mylistPanel = self.createMylistPanel();
                        if (!mylistPanel) return;
                        var s = mylistPanel.getElementsByTagName('select')[0];
                        var b = mylistPanel.getElementsByTagName('input')[0];
                        mylistPanel.addEventListener('click', function(e) {
                            e.stopPropagation();
                        }, false);
                        b.addEventListener('click', function(e) {
                            nicoMylist.add(video_id, s.value);
                            removeClass(dv, 'ndr_entry_clip');
                        }, false);
                    }
                    var entry_title = dv.getElementsByTagName('h4')[0];
                    entry_title.parentNode.insertBefore(mylistPanel, entry_title.nextSibling);
                    appendClass(dv, 'ndr_entry_clip');
                }
                else {
                    removeClass(dv, 'ndr_entry_clip');
                }
            }, false);
            
            var pinButton = document.evaluate('descendant::button[contains(@class, "ndr_pin")]', dv, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            pinButton.addEventListener('mousedown', function(e) {
                if (!hasClass(dv, 'ndr_entry_pin')) {
                    appendClass(dv, 'ndr_entry_pin');
                    self.pinAdd(item.link, item.title);
                }
                else {
                    removeClass(dv, 'ndr_entry_pin');
                    self.pinRemove(item.link);
                }
            }, false);
            
            var markAsReadButton = document.evaluate('descendant::button[contains(@class, "ndr_mark_as_read")]', dv, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            markAsReadButton.addEventListener('click', function(e) {
                if (!showVisited) {
                    if (!VisitUtil.isVisited(item.link)) VisitUtil.pseudoVisit(item.link);
                    if (rssObj.unreadItems) {
                        var unread = rssObj.unreadItems;
                        for (var i = 0; i < unread.length; i++) {
                            if (unread[i] === item) {
                                unread.splice(i, 1);
                                if (!rssObj.readItems) rssObj.readItems = [];
                                rssObj.readItems.unshift(item);
                                break;
                            }
                        }
                    }
                    if (dv.parentNode) dv.parentNode.removeChild(dv);
                    if (nextButton   ) nextButton.removeAttribute('disabled', 'disabled');
                }
            }, false);
            var starPlace = document.evaluate('descendant::span[@id="NDR_HSTAR_' + video_id + '"]', dv, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            var starRequest = { uri: item.link, title: item.title, place: starPlace };
            if (NDR_ENABLE_HATENASTAR) {
                hatenaStar.register(starRequest);
            }
            // if item's description is null then load thumbnail info.
            if (!item.description) {
                thumbnailInfo.getThumbnailInfo(item.link, function(thumb_info) {
                    if (thumb_info.timeout) {
                        dv.insertBefore(document.createTextNode('\u901A\u4FE1\u3092\u4E2D\u65AD\u3057\u307E\u3057\u305F\u3002'), dv.lastChild);
                        return;
                    }
                    items[i] = thumb_info;
                    item = thumb_info;
                    starRequest.title = thumb_info.title;
                    dv.getElementsByTagName('h4')[0].innerHTML = '<a href="' + escAttr(thumb_info.link) + '" target="_blank">' + thumb_info.title + '</a>';
                    var thumbnail = dv.getElementsByTagName('img')[0];
                    thumbnail.src = thumb_info.image;
                    thumbnail.setAttribute('alt', thumb_info.title);
                    if (!thumb_info.deleted) {
                        dv.lastChild.previousSibling.innerHTML = [
                            formatLength(thumb_info.length) + '<br>',
                            '\u518D\u751F\uFF1A' + formatNumber(thumb_info.view) + '<br>',
                            '\u30B3\u30E1\u30F3\u30C8\uFF1A' + formatNumber(thumb_info.comment) + '<br>',
                            '\u30DE\u30A4\u30EA\u30B9\u30C8\uFF1A' + formatNumber(thumb_info.mylist) + '<br>',
                        ].join('');
                        var p = document.createElement('p');
                        p.innerHTML = makeNicoLinks(thumb_info.description);
                        dv.insertBefore(p, dv.lastChild);
                        var res = document.createElement('p');
                        appendClass(res, 'ndr_thumb_res');
                        res.innerHTML = thumb_info.response;
                        dv.insertBefore(res, dv.lastChild);
                        dv.lastChild.innerHTML = '\u6295\u7A3F: ' + formatDate(parseDate(thumb_info.date)) + ' | ';
                    }
                });
            }
            
            return dv;
        };
        var df = document.createDocumentFragment();
        for (var i = 0; i < 5 && i < items.length; i++) {
            df.appendChild(process(i));
        }
        entriesPane.appendChild(df);
        if (i < items.length) {
            this.openFeedTid = setTimeout(function() {
                var start = new Date();
                var df = document.createDocumentFragment();
                for (; new Date() - start < 300 && i < items.length; i++) {
                    df.appendChild(process(i));
                }
                entriesPane.appendChild(df);
                if (i < items.length) {
                    self.openFeedTid = setTimeout(arguments.callee, 300);
                }
                else {
                    self.openFeedTid = null;
                }
            }, 2000);
        }
    };
    NDR.prototype.addFeedURL = function() {
        var url = prompt('\u30D5\u30A3\u30FC\u30C9\u306EURL\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002','http://');
        if (!url) return;
        var list = this.pref.feedList;
        for (var i = 0; i < list.length; i++) {
            if (list[i] == url) {
                alert('already exists.');
                return;
            }
        }
        var storage = document.getElementById('NDR_STORAGE');
        if (storage && storage.setData) {
            this.loadFeed(url);
        }
        else {
            this.openTemporaryFeed(url);
        }
    };
    NDR.prototype.loadPreference = function() {
        if (!NDR_ENABLE_STORAGE) return;
        var count = 0;
        var self = this;
        setTimeout(function(){
            var storage = document.getElementById('NDR_STORAGE');
            if (!storage || !storage.getData) {
                if (count++ < 50) {
                    setTimeout(arguments.callee, 500);
                }
                return;
            }
            var storedPref = storage.getData();
            var pref = eval('(' + storedPref + ')');
            self.mergePreference(pref);
        }, 500);
    };
    NDR.prototype.mergePreference = function(pref) {
        if (!pref) return;
        var list = pref.feedList;
        var self = this;
        for (var i = 0; i < list.length; i++) {
            var url = list[i];
            if (this.feedItems[url] === undefined) {
                this.pref.feedList.push(url);
                this.feedItems[url] = null;
                this.loadFeed(url);
            }
        }
    };
    NDR.prototype.storePreference = function(list) {
        var storage = document.getElementById('NDR_STORAGE');
        if (!storage || !storage.setData) {
            throw 'storage is unavailable.';
        }
        storage.setData(toJSON(this.pref).replace(/\\u/g,'\\u005cu'));
    };
    NDR.prototype.openFeedEdit = function() {
        var storage = document.getElementById('NDR_STORAGE');
        if (!storage || !storage.setData) {
            alert('storage is unavailable. (9.5b is not supported)');
            return;
        }
        if (this.openFeedTid) clearTimeout(this.openFeedTid);
        this.openFeedTid = null;
        
        var range = document.createRange();
        var entriesPane = document.getElementById('NDR_ENTRIES');
        range.selectNodeContents(entriesPane);
        range.deleteContents();
        entriesPane.scrollTop = 0;

        var dv = document.createElement('div');
        dv.innerHTML = [
            '<h2 class="ndr_title">\u30A2\u30A4\u30C6\u30E0\u306E\u7DE8\u96C6</h2>',
            '<ul class="ndr_entry_menu">',
            '    <li></li>',
            '</ul>',
            '<div class="ndr_entry"></div>'
        ].join('');
        
        var self = this;
        var entry = dv.lastChild;
        var controls = document.createElement('p');
        controls.style.cssText = 'margin-top: 5px;';
        var saveButton = document.createElement('button');
        saveButton.innerHTML = '\u4FDD\u5B58\u3059\u308B';
        
        controls.appendChild(saveButton);
        entry.appendChild(controls);
        
        var feedEditList = document.createElement('ul');
        appendClass(feedEditList, 'ndr_feed_edit_list');
        var list = this.pref.feedList;
        var delMark = new Array(list.length);
        for (var i = 0; i < list.length; i++) {
            var item = list[i];
            var feedItem = this.feedItems[item];
            var li = document.createElement('li');
            li.textContent = feedItem ? (feedItem.title + ' (' + item + ')') : item;
            feedEditList.appendChild(li);
            with ({ i: i, li: li }) {
                li.addEventListener('click', function(e) {
                    if (li.style.textDecoration == 'line-through') {
                        li.style.textDecoration = '';
                        li.style.backgroundColor = '';
                        delMark[i] = false;
                    }
                    else {
                        li.style.textDecoration = 'line-through';
                        li.style.backgroundColor = 'lightgray';
                        delMark[i] = true;
                    }
                }, false);
            }
        }
        entry.appendChild(feedEditList);
        
        saveButton.addEventListener('click', function(e) {
            var newList = [];
            for (var i = 0; i < delMark.length; i++) {
                if (!delMark[i]) {
                    newList.push(list[i]);
                }
            }
            self.pref.feedList = newList;
            self.storePreference();
            self.refreshFeed();
            self.openFeedEdit();
        }, false);
        
        document.createDocumentFragment().appendChild(dv);
        range.selectNodeContents(dv);
        entriesPane.appendChild(range.extractContents());
    };
    NDR.prototype.createMylistPanel = function(video_id) {
        if (!nicoMylist.mylistGroup) return null;
        if (!this.mylistPanel) {
            var mylist = nicoMylist.mylistGroup;
            var dv = document.createElement('div');
            dv.innerHTML = '\u30DE\u30A4\u30EA\u30B9\u30C8<br>';
            appendClass(dv, 'ndr_mylist_pane');
            var select = document.createElement('select');
            for (var i = 0; i < mylist.group_list.length; i++) {
                var group_id = mylist.group_list[i];
                select.add(new Option(mylist.group_info[group_id].group_name, group_id));
            }
            var button = document.createElement('input');
            button.type = 'submit';
            button.value = '\u767B\u9332';
            button.className = 'submit';
            dv.appendChild(select);
            dv.appendChild(button);
            this.mylistPanel = dv;
        }
        var mylistPanel = this.mylistPanel.cloneNode(true);
        return mylistPanel;
    };
    NDR.prototype.viewEntry = function() {
        var currentEntry = this.currentViewingEntry();
        if (!currentEntry) return;
        var playInfo = createPlayInfo(currentEntry);
        if (playInfo.items.length == 0) return;
        var video_id = playInfo.items[0];
        /*
        if (this.wnpCore) {
            if (!e.shiftKey) {
                this.wnpContainer.style.display = 'block';
                this.wnpCore.play({id: video_id, url: playInfo.video[video_id], title: playInfo.title[video_id], image: playInfo.image[video_id]});
            }
            else {
                this.wnpContainer.style.display = '';
                this.wnpCore.stop();
            }
        }
        else {
        */
        setTimeout(function(){ window.open(playInfo.video[video_id], 'NDR').focus() }, 0);
    };
    NDR.prototype.viewPinnedEntries = function() {
        this.hidePinnedListLater(0);
        var pinnedMap = this.pinnedMap;
        this.pinClear();
        this.player.add(pinnedMap.keys());
    };
    NDR.prototype.pinToggle = function() {
        var currentEntry = this.currentViewingEntry();
        if (!currentEntry) return;
        var playInfo = createPlayInfo(currentEntry);
        if (playInfo.items.length == 0) return;
        var videoid = playInfo.items[0],
            url     = playInfo.video[videoid],
            title   = playInfo.title[videoid];
        if (!hasClass(currentEntry, 'ndr_entry_pin')) {
            appendClass(currentEntry, 'ndr_entry_pin');
            this.pinAdd(url, title);
        }
        else {
            removeClass(currentEntry, 'ndr_entry_pin');
            this.pinRemove(url);
        }
    };
    NDR.prototype.pinAdd = function(url, title) {
        this.pinnedMap.put(url, { url: url, title: title });
        var count = document.getElementById('NDR_PINNED_COUNT');
        count.textContent = this.pinnedMap.size();
    };
    NDR.prototype.pinAdded = function(url) {
        return this.pinnedMap.has(url);
    };
    NDR.prototype.pinRemove = function(url) {
        this.pinnedMap.remove(url);
        var count = document.getElementById('NDR_PINNED_COUNT');
        count.textContent = this.pinnedMap.size();
    };
    NDR.prototype.pinClear = function(time) {
        this.pinnedMap = new ListedKeyMap();
        var items = document.evaluate('//div[contains(@class, "ndr_entry_pin")]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        var pinnedEntries = [];
        for (var i = 0, len = items.snapshotLength; i < len; i++) {
            pinnedEntries.push(items.snapshotItem(i));
        }
        for (var i = 0, len = pinnedEntries.length; i < len; i++) {
            removeClass(pinnedEntries[i], 'ndr_entry_pin');
        }
        var count = document.getElementById('NDR_PINNED_COUNT');
        count.textContent = '0';
    };
    NDR.prototype.showPinnedList = function() {
        if (this.pinTooltipTid) clearTimeout(this.pinTooltipTid);
        if (this.pinnedMap.size() == 0) return;
        var pinnedList = document.getElementById('NDR_PINNED_LIST');
        if (pinnedList.style.display == 'block') return;
        var range = document.createRange();
        range.selectNodeContents(pinnedList);
        range.deleteContents();
        var self = this;
        var keys = this.pinnedMap.keys();
        for (var i = 0; i < keys.length; i++) {
            var item = this.pinnedMap.get(keys[i]);
            var li = document.createElement('li');
            with({ li: li, item: item }) {
                li.textContent = item.title;
                li.addEventListener('mouseover', function(e) {
                    li.style.backgroundColor = '#B6BDD2';
                }, false);
                li.addEventListener('mouseout', function(e) {
                    li.style.backgroundColor = '';
                }, false);
                li.addEventListener('click', function(e) {
                    self.hidePinnedListLater(0);
                    self.pinRemove(item.url);
                    self.player.add([item.url]);
                    var items = document.evaluate('/\/div[contains(@class, "ndr_entry_pin") and descendant::a[position()=1 and @href="' + escAttr(item.url) + '"]]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                    var pinnedEntries = [];
                    for (var i = 0, len = items.snapshotLength; i < len; i++) {
                        pinnedEntries.push(items.snapshotItem(i));
                    }
                    for (var i = 0, len = pinnedEntries.length; i < len; i++) {
                        removeClass(pinnedEntries[i], 'ndr_entry_pin');
                    }
                }, false);
                range.insertNode(li);
            }
        }
        var clearLi = document.createElement('li');
        clearLi.textContent = 'Clear'
        appendClass(clearLi, 'clear');
        clearLi.addEventListener('click', function(e) {
            self.pinClear();
            self.hidePinnedListLater(0);
        }, false);
        range.insertNode(clearLi);
        pinnedList.style.display = 'block';
    };
    NDR.prototype.hidePinnedListLater = function(time) {
        if (this.pinTooltipTid) clearTimeout(this.pinTooltipTid);
        var self = this;
        this.pinTooltipTid = setTimeout(function() { 
            self.pinTooltipTid = null;
            var pinnedList = document.getElementById('NDR_PINNED_LIST');
            pinnedList.style.display = '';
        }, (time == 0) ? 0 : time || 1000);
    };

    function main() {
        document.title = 'niconico douga Reader - ' + document.title;
        var range = document.createRange();
        range.selectNodeContents(document.getElementsByTagName('body')[0]);
        range.deleteContents();
        new NDR(NDR_FEEDS);
    }
    document.addEventListener('DOMContentLoaded', main, false);
})();
