// ==UserScript==
// @name           0AutoPagerize SITEINFO
// @namespace      http://ss-o.net/
// @description    oAutoPagerize SITEINFO
// @include        http*
// @checkurl       http://ss-o.net/userjs/0AutoPagerize.SITEINFO.js
// ==/UserScript==
(this.contentWindow||window).AutoPagerizeWedataSiteinfo = [
{
"pageElement":"//div[starts-with(@id, \"illust_c\")]",
"url":"^http://www\\.pixiv\\.net/(?:bookmark(?:_new_illust|(?!_illust_user)(?!.+?type=user))|(?:member|(?:mypixiv_)?new)_illust|search|tags|tools|event_birthday_illust)",
"nextLink":"//div[starts-with(@id, \"content\")]//a[starts-with(text(), \"\u6b21\u306e\")][contains(@href,\"p=\")]"
},
{
"pageElement":"id(\"paperRes authorRes confRes jourRes igRes paperList\")",
"url":"^http://libra\\.msra\\.cn/(?:[Aa]uthor(?:[Dd]etail|Result)|ConferenceResult|IGResult(?:_paper)?|JournalResult|[Pp]aper(?:cited|[Rr]esult))\\.aspx.",
"nextLink":"id(\"pageLst_next\")"
},
{
"pageElement":"id(\"nesycms\")/*[not(@class=\"related\")]",
"url":"^http://www\\.itarchitect\\.jp/(?:beginners|issue|xml|enterprise|methodology_and_design|technology_and_programming|news)/-/\\d+(?:-\\d+)*?\\.html",
"nextLink":"//p[@class=\"pagenav\"]/a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\u3078\"]"
},
{
"pageElement":"id(\"hot_kuchikomi\")",
"url":"^http://(?:www\\.)?mogo2\\.jp/(?:top|home(?:/archive_(?:all|res)|/res)?|(?:(?:member(?:/keyword)?|comment|keyword/search)/)?[1-9])",
"nextLink":"id(\"t_all_read\")/p/a[last()]"
},
{
"pageElement":"//table[@width=\"600\"]//hr/following-sibling::table[@cellpadding=\"16\"]",
"url":"^http://(?:www\\.)?discas\\.net/netdvd/(?:newRelease|releaseCalendar|stillNew|freeSearch|campaignIndex|genre[A-Z]|vodGenre[A-Z])",
"nextLink":"//table[@width=\"100%\" and @cellpadding=\"2\"]/preceding-sibling::table[1]//a[last()]"
},
{
"pageElement":"id(\"blog_entries\") | id(\"list_entries diary_entries\")/ul | id(\"content_panel_container\")/div[@class=\"person_medium\"]",
"url":"^http://www\\.iknow\\.co\\.jp/(?:lists/(?:search\\?|tagged/)|user(?:/[^/]+/journal|s/diaries/tagged/)|search/(?:diaries|user))",
"nextLink":"//div[@class=\"paging_right\"]/a[@class=\"selected\"]/following-sibling::a[1]"
},
{
"pageElement":"//span[@class=\"thumb\"]",
"url":"^http://(?:(?:cuulgle\\.com|booru\\.makai-anime\\.net)|(?:ebolacola\\.org|dontstickthatthere\\.com)/shimmie)/post/list/",
"nextLink":"id(\"paginator\")/b/following::a"
},
{
"insertBefore":"//div[@class=\"section\"]/following-sibling::node()",
"pageElement":"//div[@class=\"section\"]",
"url":"^http://photozou\\.jp/(?:photo|video|mypage)/(?:list|everyone|friend|popular|favorite|cc|tagged|community_photo)/",
"nextLink":"//li[@class=\"page_next\"]/a"
},
{
"pageElement":"//div[@class=\"main\"]/p",
"url":"^http://(?:(?:nightgs|talker)\\.sakura\\.ne\\.jp/denpa[^/]*/izumimain/.|green\\.ribbon\\.to/.+?koneta/denpa/[^/]+/.)",
"nextLink":"//div[@class=\"main\"]/a[contains(text(),\"NEXT\")]"
},
{
"pageElement":"//table[@cellspacing=\"1\" and @cellpadding=\"1\" and @border=\"0\"]",
"url":"^https://trading[14]\\.sbisec\\.co\\.jp/ETGate/?\\?[^?#]*\\b_ActionID=(?:getListByBusinessKind|searchByIndustryType)",
"nextLink":"//a[contains(node(), \"\u2192\")]"
},
{
"pageElement":"id(\"illust_list badge_list follow_list\")/div",
"url":"^http://www.pixa.cc/(?:(badges|follows)/list_\\1|illustrations/list_(?:follows|main|search)|profiles/show/\\d)",
"nextLink":"(//a[contains(concat(\" \",@class,\" \"),\" next_page \")])[1]"
},
{
"pageElement":"//table[@class=\"PeopleRS\"]",
"url":"^http://(?:assets\\d|cn|de|es|it|jp|nl|p(?:l|t(?:-br)?)|ru|tw|upload|www)\\.zooomr\\.com/search/people/",
"nextLink":"//a[@class=\"Next\"]"
},
{
"pageElement":"id(\"productReviews\")//table",
"url":"^https?://www\\.amazon\\.(?:c(?:a|o(?:m|\\.(?:jp|uk)))|de|fr)/(?:[^/]+/)?(?:customer|product)-reviews/",
"nextLink":"//span[@class=\"paging\"]/span[@class=\"on\"]/following-sibling::a[1]"
},
{
"insertBefore":"//form[@name=\"editItems\"][last()]/table/following-sibling::node()",
"pageElement":"//form[@name=\"editItems\"]/table",
"url":"^http://www\\.amazon\\.(?:co(?:m|\\.jp)|de)/gp/registry/(?:wishlist[/?]|registry\\.html.+type=wishlist)",
"nextLink":"//a[(contains(., \"Next\") or contains(., \"\u6b21\") or contains(., \"Weiter\")) and contains(parent::td, \">>\")]"
},
{
"pageElement":"//div[@class=\"main\"]",
"url":"^https://www\\.lib\\.toyonaka\\.osaka\\.jp/licsxp-opac/WOpacTif(?:SchCmpdExec|TilListDisp)Action\\.do",
"nextLink":"//a[contains(text(), \"\u6b21\u3078\")]"
},
{
"pageElement":"//dl",
"url":"^http://(?:members\\.jcom\\.home\\.ne\\.jp/w3c/omake/diary\\.html|noz\\.hp\\.infoseek\\.co\\.jp/diary/)",
"nextLink":"//dt[contains(text(), \"\u524d\")]/following::dd[2]/a"
},
{
"pageElement":"id(\"SubNav\")/following-sibling::table[1]/tbody[1]/tr[1]/td[1]/table[1]",
"url":"^http://(?:assets\\d|cn|de|es|it|jp|nl|p(?:l|t(?:-br)?)|ru|tw|upload|www)\\.zooomr\\.com/photos/",
"nextLink":"//a[@class=\"Next\"]"
},
{
"pageElement":"id(\"rounded_container\")/table[1]/tbody[1]/tr[1]/td[2]/table[1]",
"url":"^http://(?:assets\\d|cn|de|es|it|jp|nl|p(?:l|t(?:-br)?)|ru|tw|upload|www)\\.zooomr\\.com/search/",
"nextLink":"//a[@class=\"Next\"]"
},
{
"pageElement":"id(\"threadslist posts\") | id(\"inlinemodform\")/table[starts-with(@id, \"post\")]",
"url":"^http://(?:www\\.)?(?:neogaf\\.com/forum|ga-forum\\.com)/(?:forumdisplay|showthread|search)\\.php",
"nextLink":"//div[@class=\"pagenav\"]//a[text()=\">\"]"
},
{
"pageElement":"//div[@class=\"ListView\"]/div/div[contains(@class,\"mg_widget_item\")]",
"url":"^http://www\\.goodsmile\\.info/page/all/jpn/product/category/bishojo/all/all/all/[^.]+\\.html",
"nextLink":"//a[@class=\"pagerNext\"]"
},
{
"pageElement":"id(\"content\")",
"url":"^http://(?:cn\\.last\\.fm|www\\.last(?:\\.fm|fm\\.(?:com\\.[bt]r|[^./]{2})))/user/[^/]+/journal",
"nextLink":"id(\"content\")//div[contains(concat(\" \", @class, \" \"), \" pagination \")]/a[contains(concat(\" \", @class, \" \"), \" nextlink \")]"
},
{
"insertBefore":"id(\"googlead\")",
"pageElement":"//div[@class=\"frame\"]/div[@class=\"main\"]/table",
"url":"^http://(?:www\\.)?gumonji\\.net/cgi-bin/(?:(?:community|diary|zone)_list|message_box)\\.cgi",
"nextLink":"//div[@class=\"frame\"]/div[@class=\"main\"]/div[@class=\"page2\"]/div[@class=\"pager_next\"]/a"
},
{
"insertBefore":"id(\"content\")/div[@class=\"skylineRight\"]/div[@class=\"skyWrap\"]/div[@class=\"pagination\"]",
"pageElement":"id(\"users\")",
"url":"^http://(?:cn\\.last\\.fm|www\\.last(?:\\.fm|fm\\.(?:com\\.[bt]r|[^./]{2})))/user/[^/]+/friends",
"nextLink":"id(\"content\")/div[@class=\"skylineRight\"]/div[@class=\"skyWrap\"]/div[@class=\"pagination\"]/a[@class=\"nextlink\"]"
},
{
"pageElement":"//table[@class=\"candyStriped tracklist\"]",
"url":"^http://(?:cn\\.last\\.fm|www\\.last(?:\\.fm|fm\\.(?:com\\.[bt]r|[^./]{2})))/user/[^/]+/tracks",
"nextLink":"//a[@class=\"nextlink\"]"
},
{
"pageElement":"//div[@class=\"news\"]/div[contains(@class, \"alert\")]",
"url":"^https?://github\\.com/(?:$|dashboard|(?:timeline|[^/]+/[^/]+/(?:comments|network/feed)))",
"nextLink":"//a[@hotkey=\"l\"]"
},
{
"insertBefore":"//div[@class=\"pagination\"][last()]",
"pageElement":"id(\"deletablert\")",
"url":"^http://(?:cn\\.last\\.fm|www\\.last(?:\\.fm|fm\\.(?:com\\.[bt]r|[^./]{2})))/user/[^/]+/charts",
"nextLink":"//a[@class=\"nextlink\"]"
},
{
"pageElement":"id(\"rightResults atfResults btfResults\")//div[@class=\"listView\" or @class=\"defaultView\"]|id(\"Results\")/table",
"url":"^https?://www\\.amazon\\.(?:c(?:a|o(?:m|\\.(?:jp|uk)))|de|fr)/(?:[^/]+/)?(?:[bs]|gp/search)",
"nextLink":"id(\"pagnNextLink\")"
},
{
"pageElement":"id(\"body\")//ul[@class=\"fanlist\"]",
"url":"^http://www\\.hatena\\.ne\\.jp/[a-zA-Z][\\w-]{1,30}[a-zA-Z\\d]/(?:f(?:a(?:n|vorite)|riend)s)",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//div[@class='tBlock']/div[contains(@class, 'productBlock ') or @id='specialtab']",
"url":"^http://www\\.bhphotovideo\\.com/(?:c/(?:shop|category)/|bnh/controller/home\\?.*A=Search)",
"nextLink":"//a[@class='pagination'][span[text()='Next']]"
},
{
"pageElement":"id(\"timeline\")",
"url":"^http://(?:assets\\d|cn|de|es|it|jp|nl|p(?:l|t(?:-br)?)|ru|tw|upload|www)\\.zooomr\\.com/",
"nextLink":"id(\"timeline\")/following-sibling::h2[1]/a[last()]"
},
{
"pageElement":"id(\"listPlanArea listHotelArea\")",
"url":"^http://web\\.travel\\.rakuten\\.co\\.jp/portal/my/(?:mt_map\\.chk|ry_kensaku\\.k2)(?:\\?|$)",
"nextLink":"//div[@class=\"pagingArea\"]//a[starts-with(text(), \"\u6b21\")]"
},
{
"pageElement":"id(\"addon-listing\") | //ul[@class=\"thumbs\"] | id(\"content-main\")/*[@class=\"pagination\"]/preceding-sibling::div",
"url":"^https://addons\\.mozilla\\.org/[^/]+/[^/]+/(?:browse/type:[124]/cat:|reviews/|search)",
"nextLink":"//li[contains(concat(\" \", @class, \" \"), \" next \")]/a"
},
{
"pageElement":"//ul[@class=\"artistsWithInfo\"]",
"url":"^http://(?:cn\\.last\\.fm|www\\.last(?:\\.fm|fm\\.(?:com\\.[bt]r|[^./]{2})))/music/[^/]+/",
"nextLink":"//div[@class=\"pagination\"]/a[@class=\"nextlink\"]"
},
{
"pageElement":"//div[@id=\"content2\"]//div[./a/img] | //div[@id=\"content2\"]//div[./a/img][position()=last()]/following-sibling::br[position()=1]",
"url":"^http://www\\.pixiv\\.net/(?:bookmark.+type=(?:reg_)?user|mypixiv_all|personal_tags)",
"nextLink":"//div[starts-with(@id,\"content\")]//a[starts-with(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"results\")/ul[@class=\"sb_results\"]",
"url":"^http://(?:cnweb\\.)?search\\.(?:live|msn)\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/results\\.aspx",
"nextLink":"id(\"results_area\")//a[contains(concat(\" \",@class,\" \"),\" sb_pagN \")]"
},
{
"pageElement":"//div[@class=\"main\"]/center/table/tbody/tr[2]/td/table",
"url":"^https?://(?:www\\.)?amusement-center\\.com/project/emusic/cgi/eggmusic_catalog\\.cgi",
"nextLink":"//div[@class=\"main\"]/center/table/tbody/tr[1]/td[last()]/a[last()]"
},
{
"pageElement":"id(\"resultsBody\")/table[1]",
"url":"^http://(?:www\\.)?excite\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/search\\.gw\\?.*?\\btarget=image",
"nextLink":"id(\"resultsBody\")/table[last()]//a[contains(text(),\">>\")]"
},
{
"pageElement":"id(\"ytrvTmWrMain\")/div[@class=\"ytrvTmWrDomMain\" or @class=\"ytrvTmWrAbrMain\"]/div[@class=\"ytrvTmWrDomMainBody\" or @class=\"ytrvTmWrAbrMainBody\"]/div[@class=\"ytrvTmMdTdList\" or @class=\"ytrvTmMdRepList\" or @class=\"ytrvTmMdLine\"]",
"url":"^http://community\\.travel\\.yahoo\\.co\\.jp/(?:abroad|domestic).*/b(?:log|uzz)\\.html",
"nextLink":"//li[contains(concat(\" \",@class,\" \"), \" next \")]/a"
},
{
"pageElement":"id(\"issuetable\")/tbody/tr",
"url":"^http://(?:www\\.)?jetbrains\\.net/jira/secure/(?:IssueNavigator|QuickSearch)\\.jspa",
"nextLink":"//a[text()=\"Next >>\"]"
},
{
"pageElement":"id(\"content\")/div[last()]",
"url":"^http://events\\.php\\.gr\\.jp/(?:events(?:/(?:index(?:/(?:page(?::\\d*)?)?)?)?)?)?$",
"nextLink":"id(\"pagination\")/a[last()]"
},
{
"pageElement":"id(\"body\")/div/ul/li/div[1]",
"url":"^http://www\\.hatena\\.ne\\.jp/[a-zA-Z][\\w-]{1,30}?[a-zA-Z\\d]/a(?:ntenna|ctivities)",
"nextLink":"//a[contains(text(),\"\u6b21\u306e100\u4ef6>\")]"
},
{
"pageElement":"//table[@class=\"resultTable\"]",
"url":"^http://(?:www\\.)?hikaku\\.com/shopping/index\\.html\\?module=search&action=Search",
"nextLink":"//a[starts-with(text(), \"\u6b21\u3078\uff1e\")]"
},
{
"pageElement":"//div[@class=\"profile-results-section\"]",
"url":"^https?://www\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/profiles\\?[^?#]*?\\bq=[^?#=&;]",
"nextLink":"//div[@class=\"profile-results-paginator\"]//a[descendant::img[contains(@src, \"/nav_next.gif\")]]"
},
{
"pageElement":"id(\"content\")/table",
"url":"^http://www\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/coop/subscribedlinks/directory/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pager \")]/a[last() - 1]"
},
{
"pageElement":"//div[@class=\"chapter\" or @class=\"section\" or @class=\"preface\" or @class=\"part\" or @class=\"toc\" or @class=\"appendix\"]",
"url":"^https?://(?:[^.]+\\.(?:redhat\\.com|centos\\.org)/docs|docs\\.fedoraproject\\.org)/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"result_1\")/..",
"url":"^http://www\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/hws/search\\?.*?\\bclient=fenrir",
"nextLink":"id(\"nextPageUrl\")"
},
{
"pageElement":"//*[preceding-sibling::table[descendant::img[@src=\"../../images/next_icon.gif\"]]][following-sibling::table[descendant::img[@src=\"../../images/next_icon.gif\"]]]",
"url":"^http://www\\.nhk\\.or\\.jp/nikki/(?:bbs(?:_\\d)?|enquete|nikki)/\\d+/page\\d+\\.html",
"nextLink":"//img[@src=\"../../images/next_icon.gif\"]/.."
},
{
"pageElement":"id(\"photonews\")/ul/li",
"url":"^http://(?:[^.]+\\.keizai\\.biz|www\\.(?:hama|shibu)kei\\.com)/photonews/archives/",
"nextLink":"id(\"pageswitch\")/a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"issuetable\")/tbody/tr",
"url":"^https://issues\\.apache\\.org/jira/secure/(?:IssueNavigator|QuickSearch)\\.jspa",
"nextLink":"//a[text()=\"Next >>\"]"
},
{
"insertBefore":"https://search.sbisec.co.jp/v2/popwin/tools/yutai/yutai_search_c1.html",
"pageElement":"//td[contains(text(), \"\u9298\u67c4\")]/ancestor::table[2]",
"url":"^https://search\\.sbisec\\.co\\.jp/v2/popwin/tools/yutai/yutai_search_c\\d+\\.html",
"nextLink":"//a[contains(node(), \"\u2192\")]"
},
{
"pageElement":"id(\"headline\")/div[@class=\"articles\"]",
"url":"^http://(?:[^.]+\\.keizai\\.biz|www\\.(?:hama|shibu)kei\\.com)/headline/archives/",
"nextLink":"id(\"pageswitch\")/a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"blog-head blog-body-container trackback comment\")",
"url":"^http://(?:(?:[^.]+\\.)+?webry\\.info|blog\\.tendice\\.jp)/\\d+/article_\\d+\\.html",
"nextLink":"//table[@class=\"navi\"]/tbody/tr/td[1]/a"
},
{
"pageElement":"id(\"main\")//form/div[4]/table",
"url":"^https://trading[14]\\.sbisec\\.co\\.jp/ETGate/?\\?[^?#]*\\b_ActionID=DefaultAID",
"nextLink":"//a[contains(node(), \"\u2192\")]"
},
{
"pageElement":"//div[@class=\"navheader\"]/following-sibling::div[following-sibling::div[@class=\"navfooter\"]]",
"url":"^http://docs\\.amazonwebservices\\.com/AWSECommerceService/\\d{4}-\\d{2}-\\d{2}/",
"nextLink":"//a[@accesskey=\"n\"]"
},
{
"pageElement":"//dd[@class=\"body\"]/ol",
"url":"^http://(?:www\\.)?mypress\\.jp/v2_writers/tomihiro/idx/\\?.*\\bmycategory_id=.",
"nextLink":"//b/following-sibling::a"
},
{
"pageElement":"id(\"list\")",
"url":"^http://service\\.osa-p\\.net/rea-log/member/member/index\\.html\\?member_no=\\d",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//td[@align=\"center\"]/table[@width=\"600\"]/tbody/tr/td/table[last()]",
"url":"^http://(?:www\\.)?discas\\.net/netdvd/hotrankingTop(?:Total|Monthly|Weekly)",
"nextLink":"//td[@nowrap]/span[@class=\"movie-ttl\"]/following-sibling::a[1]"
},
{
"pageElement":"//*[@class=\"ResultBoxMar\"]",
"url":"^http://(?:www\\.)?itp\\.ne\\.jp/servlet/jp\\.ne\\.itp\\.sear\\.SGSSVWebDspCtrl\\?",
"nextLink":"//a[preceding-sibling::strong][1]"
},
{
"pageElement":"id(\"res\")/div[ol or div]",
"url":"^http://[^.]+\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/(?:c(?:se|ustom)|search)",
"nextLink":"id(\"nav\")//td[last()]/a | id(\"nn\")/parent::a"
},
{
"pageElement":"//td[@width=\"425\"]/table[2]",
"url":"^https://trading\\d\\.sbisec\\.co\\.jp/ETGate/\\?.*\\b_PageID=WPLETmkR001Ndtl10",
"nextLink":"//a[contains(text(),\"\u2192\")]"
},
{
"pageElement":"//div[@class=\"body1\"]",
"url":"^http://(?:www\\.)?mypress\\.jp/v2_writers/tomihiro/story/\\?.*\\bstory_id=.",
"nextLink":"id(\"NAVIGATION-ITEM-PREV\")/a"
},
{
"pageElement":"id(\"posts\")",
"url":"^http://www\\.tumblr\\.com/(?:dashboard|show|tumblelog|filter)[^-]*\\?back$",
"nextLink":"id(\"pagination\")/a[contains(text(), \"Previous page\")]"
},
{
"pageElement":"id(\"content_top2\")/div[@class=\"item_list_box\"]",
"url":"^https://www\\.iy-net\\.jp/nsmarket/(get[a-z]*products|searchresult)\\.do\\?",
"nextLink":"//span[@class=\"span_next\"]/parent::a"
},
{
"pageElement":"id(\"headmenu\")/following-sibling::*[descendant::*[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\" or text()=\"\u524d\u306e\u30da\u30fc\u30b8\"]][1]/following-sibling::*[following-sibling::*/descendant::*[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\" or text()=\"\u524d\u306e\u30da\u30fc\u30b8\"]]",
"url":"^http://jibun\\.atmarkit\\.co\\.jp/(?:[^/]+/)*rensai/(?:[^/]+/)*[^/]+\\.html",
"nextLink":"//a[descendant-or-self::*[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]]"
},
{
"pageElement":"id(\"threadslist\")",
"url":"^http://(?:www\\.)?(?:akiba-online|hongfire)\\.com/forum/forumdisplay\\.php",
"nextLink":"//div[@class=\"pagenav\"]/descendant::a[contains(@title,\"Next Page\")]"
},
{
"pageElement":"id(\"Main\")/table[@class]",
"url":"^http://(?:www\\.)?flickr\\.com/explore/interesting/[0-9]+/[0-9]+/[0-9]+/",
"nextLink":"id(\"Main\")//a[@class=\"Next\"]"
},
{
"insertBefore":"//div[@class=\"maincontbox\"]",
"pageElement":"//div[@class=\"maincontoutboxatt\"]",
"url":"^https?://groups\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/group/[^/]+/topics",
"nextLink":"(//div[@class=\"maincontbox\"]//a[@class=\"uitl\"])[last()]"
},
{
"pageElement":"//td[@class=\"overflow-hide\"]/*",
"url":"^https?://groups\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/group/[^/]+/search",
"nextLink":"id(\"bottom_marker\")/descendant::a[last()]"
},
{
"insertBefore":"(//span[@class=\"thumb\"])[last()]/following-sibling::node()",
"pageElement":"//span[@class=\"thumb\"]",
"url":"^http://(?:(?:(?:dan|safe)boo|mieza)ru\\.donmai\\.us|nekobooru\\.net)/post",
"nextLink":"id(\"paginator\")/div[@class=\"pagination\"]/a[last()]"
},
{
"pageElement":"//div[@class=\"l600\"]/comment()[string()=\"BODY\"]/following-sibling::node()[not(descendant::a[text()=\"\u524d\u306e\u30da\u30fc\u30b8\"]) and not(descendant::a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]) and following::comment()[string()=\"BODYEND\"]] | id(\"r400\")/node()[preceding::*[@class=\"cmsabstract\"] and following::*[descendant::*[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\") or contains(text(), \"\u524d\u306e\u30da\u30fc\u30b8\")]]]",
"url":"^http://(?:www|plusd)\\.itmedia\\.co\\.jp/[^/]+/articles/0(?:[0-5]|60[12])",
"nextLink":"//a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"id(\"EntryBlock\")//div[@class=\"EntryInnerBlock\"] | id(\"content\")//div[@class=\"entry_body\"] | id(\"entry\")//div[@class=\"pad\"] | id(\"entryarea\")/node()[@class!=\"page_navi\"] | id(\"e-zone\")/node()[@class!=\"PageLinkBlock\"] | id(\"Contents\")/div[@id=\"Left\"] | id(\"main\")/*[@class=\"entry_table\" or @align=\"center\"] | id(\"contents\")/div[@class=\"entry\"]",
"url":"^http://[^.]+\\.blog\\.shinobi\\.jp/(?:Category|Date|Entry|Page|Search|$)",
"nextLink":"//*[contains(\" PageLinkBlock EntryInnerBlock navi page_navi entry_navi contents_10link \", concat(\" \", @class, \" \")) or contains(\" PageLinkBlock EntryBlock prev_next NaviBlock \", concat(\" \", @id, \" \"))]//a[contains(text(), \"\u6b21\") or contains(translate(text(), \"etx\", \"ETX\"), \"NEXT\") or contains(text(), \">>\") or contains(text(), \"\u904e\u53bb\")]"
},
{
"pageElement":"id(\"Main\")/table[@class=\"DetailResults\" or @class=\"GroupsResults\" or @class=\"PeopleResults\"]/tbody/tr",
"url":"^http://(?:www\\.)?flickr\\.com/search(?:/groups|/people)?/?\\?(?:.*&)?q=",
"nextLink":"//a[@class=\"Next\"]"
},
{
"pageElement":"id(\"resultArea\")",
"url":"^http://web\\.travel\\.rakuten\\.co\\.jp/portal/my/tabimado_search\\.main\\?",
"nextLink":"//a[starts-with(text(), \"\u6b21\")]"
},
{
"insertBefore":"id(\"sideBarArea\")",
"pageElement":"id(\"mainContentsArea\")",
"url":"^http://blogs\\.yahoo\\.co\\.jp/[^/]+/(?:MYBLOG/yblog|folder/[^.]+)\\.html",
"nextLink":"id(\"mainContentsArea\")/div[last()]/p[@class=\"forwardNext\" and last()]/a[last()]"
},
{
"pageElement":"id(\"main-content\")/table[1]/tbody/tr",
"url":"^http://sourceforge\\.jp/search/[^?]*\\?.*?\\bt(?:ype_of_search)?=soft\\b",
"nextLink":"id(\"main-content\")/table[2]//a[contains(@href,\"offset=\")]"
},
{
"pageElement":"id(\"bodyCell\")//div[contains(concat(\" \",@class,\" \"),\" bPageBlock \")]//table[1]",
"url":"^https?://(?:ap|emea|na[1-6]|ssl)\\.salesforce\\.com/[0-9a-zA-Z]{3}[/?]",
"nextLink":"id(\"bodyCell\")/div[contains(concat(\" \",@class,\" \"),\" bNext \")]//div[contains(concat(\" \",@class,\" \"),\" next \")]/a[last()]"
},
{
"pageElement":"//td[@background=\"images/index_ura_r5_c4.gif\"]/ancestor::tr[2]/following-sibling::tr",
"url":"^http://www\\.nhk\\.or\\.jp/nikki/ura/index(?:_re)?_main(?:_\\d+)?\\.html",
"nextLink":"//img[@name=\"index_ura_r5_c9\"]/.."
},
{
"pageElement":"id(\"related-article-links\")",
"url":"^http://(?:www|entertainment|women|technology)\\.timesonline\\.co\\.uk/",
"nextLink":"//a[text()=\"Next Page\"]"
},
{
"insertBefore":"//div[@class=\"navcont_Footer\"]",
"pageElement":"//div[@class=\"navboxauto_InfoSpace\"]",
"url":"^http://www\\.iajapan\\.org/anti_spam/portal/Tech/RFC/RFC[-_\\d]+\\.html",
"nextLink":"//div[@class=\"navboxauto_InfoSpace\"]/table/tbody/tr/td[@width=\"15%\"]/div/a"
},
{
"pageElement":"id(\"content2\")/div[contains(@class,\"link_visited\")]",
"url":"^http://www\\.pixiv\\.net/bookmark_illust_user\\.php\\?.*?\\billust_id=\\d",
"nextLink":"id(\"content2\")/div/a[contains(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"//table[descendant::hr][position() > 1]",
"url":"^http://(?:www\\.)?itp\\.ne\\.jp/servlet/jp\\.ne\\.itp\\.sear\\.SKWSVmain\\?",
"nextLink":"//a[text() = \"\u6b21\u3000\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"id(\"ytrvTmWrSearchBody\")/div[@class=\"ytrvTmMdSearchTdList\" or @class=\"ytrvTmMdSearchRepList\" or @class=\"ytrvTmMdLine\"]",
"url":"^http://community\\.travel\\.yahoo\\.co\\.jp/search/search_result\\.html",
"nextLink":"//li[contains(concat(\" \",@class,\" \"), \" next \")]/a"
},
{
"insertBefore":"id(\"primaryContent\")/div[contains(concat(\" \", @class, \" \"), \" pageNavigation \")]",
"pageElement":"id(\"primaryContent\")",
"url":"^http://secondlife\\.reuters\\.com/stories/category/second-life/blog/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pageNavigation \")][last()]/a[last() and text()=\"Older Stories >\"]"
},
{
"insertBefore":"id(\"AdArea\")",
"pageElement":"id(\"ListArea\")",
"url":"^http://(?:ip\\.)?tosp\\.co\\.jp/[bB][kK]/[tT][oO][sS][bB][kK]100\\.asp",
"nextLink":"id(\"NaviArea\")/a"
},
{
"insertBefore":"//address",
"pageElement":"id(\"entries\")",
"url":"^http://community\\.livejournal\\.com/vintagephoto/\\d{4}/\\d{2}/\\d{2}/",
"nextLink":"id(\"skiplinks\")/li[last()]/a"
},
{
"insertBefore":"id(\"googlead\")",
"pageElement":"id(\"shikakusanlist\")",
"url":"^http://(?:www\\.)?gumonji\\.net/cgi-bin/(?:footprint|user_list)\\.cgi",
"nextLink":"//div[@class=\"frame\"]/div[@class=\"main\"]/div[@class=\"page2\"]/div[@class=\"pager_next\"]/a"
},
{
"pageElement":"id(\"contenuPhotoReportage\")",
"url":"^http://www\\.tomshardware\\.com/picturestory/\\d+(?:-\\d)?-[^/]+\\.html",
"nextLink":"//a[text()=\"Next Picture\"] | //*[@class=\"next\"]//a"
},
{
"pageElement":"//div[@class=\"pts-mb30\"]",
"url":"^http://(?:www\\.)?4travel\\.jp/(?:domestic|overseas)/.+?/travelogue/",
"nextLink":"//div[@class=\"common-page-list-right\"]/a"
},
{
"pageElement":"id(\"content\")/table",
"url":"^http://vimperator\\.org/trac/gitweb/\\?p=vimperator\\.git;a=shortlog",
"nextLink":"id(\"content\")//tr[last()]//a"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" article \")]/ul",
"url":"^http://dic\\.nicovideo\\.jp/(?:m/[nu]/(?:[avu]|oekaki|mml)|s/[tb]/)",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pager \")]/a[starts-with(text(), \"\u6b21\")]"
},
{
"pageElement":"id(\"mainpic\")|//div[@class=\"mainPhotoInfo\"]",
"url":"^http://[^.]+\\.oricon\\.co\\.jp/news/photo/index\\.php\\?(?:.+&)?p_id=",
"nextLink":"//img[@name=\"button_nextPct_bottom\"]/.."
},
{
"pageElement":"id(\"wrapMain\")/table[last()-1]",
"url":"^http://happy\\.woman\\.rakuten\\.co\\.jp/gourmet/recipe/search.html\\?",
"nextLink":"id(\"wrapMain\")/table[last()]//b/a[last()]"
},
{
"pageElement":"id(\"main\")/child::*[self::h2 or self::div[@id=\"year\" or @class=\"topentry-body\" or @class=\"footer\"]]",
"url":"^http://shopdd\\.blog51\\.fc2\\.com/(?:$|page|blog-category|category)",
"nextLink":"//div[@class=\"pageselect\"]/descendant::a[@title=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"insertBefore":"//div[@class=\"container\"]/div[@class=\"home\"]",
"pageElement":"//div[@class=\"container\"]/div[@class=\"main\"]",
"url":"^https?://(?:www\\.)?amusement-center\\.com/project/emusic/news\\.php",
"nextLink":"//div[@class=\"container\"]/div[@class=\"main\"]/div[@class=\"newsitemnavi\"]/table/tbody/tr/td/a"
},
{
"pageElement":"//div[@class=\"listList\"]",
"url":"^https://employment\\.en-japan\\.com/search/area_search_list\\.cfm\\?.",
"nextLink":"//a[starts-with(text(), \"\u6b21\u306e\")]"
},
{
"insertBefore":"id(\"navbar\")",
"pageElement":"id(\"m\")/div[2]",
"url":"^http://blogsearch\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/blogsearch",
"nextLink":"id(\"navbar\")//a[child::img[@src=\"nav_next.gif\"]]"
},
{
"pageElement":"//div[@class=\"pageTitle\"]/following-sibling::table[1]",
"url":"^http://[^.]+\\.amazon\\.co(?:m|\\.[^./]+)/gp/(?:best|move|most|new)",
"nextLink":"//td[@class=\"paginationCurPage\"]/following-sibling::td[2]/a"
},
{
"pageElement":"//div[@class=\"articleContent\"]",
"url":"^http://journal\\.mycom\\.co\\.jp/(?:articles|column|special|series)",
"nextLink":"//li[@class=\"nextBtn\"]/a[last()]"
},
{
"pageElement":"id(\"bookmarked_user\")",
"url":"^ttp://b\\.hatena\\.ne\\.jp/(?!entry/)[a-zA-Z][-\\w]{1,30}[a-zA-Z\\d]/",
"nextLink":"//a[@class=\"pager-next\" or @class=\"pager-prev\"]"
},
{
"pageElement":"//td[@class=\"cat\"]//table[@class=\"maintable\"]//tr[2]/td[@class=\"alt1\"]/table",
"url":"^http://www\\.furaffinity\\.net/(?:gallery|scraps|favorites)/[^/]+/",
"nextLink":"//form[child::button[@value=\"Next\"]]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" entryList \")]",
"url":"^http://www\\.instructables\\.com/tag/type:id/.+?\\bsort=FEATURED\\b",
"nextLink":"//div[@class=\"pager\"]/div[1]/a[last()]"
},
{
"pageElement":"id(\"log\")",
"url":"^http://(?:www\\.)?zftalk\\.com/logs/view/[^/]+/\\d{4}/\\d{2}/\\d{2}/",
"nextLink":"id(\"paginationControl\")//a[contains(text(), \"Next\")]"
},
{
"pageElement":"//body/div[@class=\"b\"]|//body/table[@class=\"e\"]",
"url":"^https?://www\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/reader/m/view/",
"nextLink":"//a[@accesskey=\"0\"]"
},
{
"pageElement":"//img[contains(@src, \"title.jpg\")]/../../following-sibling::tr[following::img[contains(@src, \"try_next.gif\") or contains(@src, \"try_back.gif\")]]",
"url":"^http://www\\.dosv\\.jp/(?:feature|sp_page|wdc|other|intel)/[^/]+/",
"nextLink":"//img[contains(@src, \"try_next.gif\")]/../preceding-sibling::td/a[last()] | //a[text()=\"Next\"]"
},
{
"pageElement":"id(\"ImgCont\")/table | id(\"ImgContent\")",
"url":"^http://images\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/images.+gbv=1",
"nextLink":"id(\"nn\")/parent::a | id(\"navbar\")//td[last()]/a"
},
{
"pageElement":"id(\"items\")/div[@class=\"item\"]",
"url":"^https?://www\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/reader/shared/",
"nextLink":"id(\"more\")/a"
},
{
"pageElement":"//td[@class=\"gh_box_b g_pt5\"]/ancestor::table[1]",
"url":"^http://(rikunabi2010\\.yahoo\\.co\\.jp|2010\\.rikunabi\\.com)/bin/.+",
"nextLink":"//a[starts-with(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"id(\"news-content\")/div[@class=\"snap_shots\"] | id(\"news-content\")",
"url":"^http://www\\.tomshardware\\.com/reviews/[^,/]+,\\d+(?:-\\d+)?\\.html",
"nextLink":"//ul[@class=\"paginationReviews clearfix\"]/li[@class=\"pagin next\"]/a"
},
{
"pageElement":"//span[@class=\"thumb\"]",
"url":"^http://(?:www\\.kawaiyume\\.net|danbooru\\.nyaatorrents\\.org)/post",
"nextLink":"id(\"paginator\")//a[contains(text(),\">>\")]"
},
{
"pageElement":"//div[@class=\"jive-thread-list\"]",
"url":"^http://(?:forums|otn)\\.oracle\\.co(?:m|\\.jp)/forums?/forum\\.jspa",
"nextLink":"//a[text()=\"Next\" or text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"//div[@class=\"g\"]",
"url":"^http://[^.]+\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/c(?:ustom|se)",
"nextLink":"//td[@class=\"b\"][last()]//a"
},
{
"pageElement":"//div[contains(@class, \"under_line3\")]",
"url":"^http://www\\.kagoshima-u\\.ac\\.jp/html/(?:Infomation|Topics)List",
"nextLink":"//div[@class=\"tugi\"]/a"
},
{
"pageElement":"//table[@summary=\"\u8a18\u4e8b\u4e00\u89a7\"]/tbody/tr",
"url":"^http://(?:aurasoul\\.)?mb2\\.jp/_[^/]+/p[0-9]+(?:-[0-9]+)?\\.html",
"nextLink":"//td[@class=\"page_past\"]/a[text()=position()+1]"
},
{
"pageElement":"//div[contains(concat(\" \",@class,\" \"), \" ytrvKlgQstn \")]",
"url":"^http://chiebukuro\\.travel\\.yahoo\\.co\\.jp/(?:list|search)\\.html",
"nextLink":"//li[contains(concat(\" \",@class,\" \"), \" next \")]/a"
},
{
"pageElement":"//table[@id=\"bangumi_onair\" or @id=\"bangumi\"]",
"url":"^http://mataanimemitetari\\.shimasu\\.net/(?:index\\.php)?(?:$|\\?)",
"nextLink":"//a[contains(text(),\"\u2192\")]"
},
{
"pageElement":"//table[@class=\"BgColor06\" and @summary=\"layout\"]",
"url":"^https://www\\.mydocomo\\.com/dcm/dfw/i_mode/myd/storage/addrlist",
"nextLink":"//a[@class=\"color-0035c9u\" and contains(text(),\"\u6b21\u306e\")]"
},
{
"insertBefore":"id(\"discussion_buttons\")",
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" journal \")]",
"url":"^http://slashdot\\.jp/(?:(?:~[^/]+|authors)/journal|journal\\.pl)",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" journalpage \")]//a[contains(text(), \"\u4ee5\u524d\u306e\")] | //div[contains(concat(\" \", @class, \" \"), \" storylinks \")]//a[contains(text(), \"\u5f8c\u306e\")]"
},
{
"pageElement":"id(\"Contents ContentsBlog\")[1]/*",
"url":"^http://(?:www\\.)?pipa\\.jp/tegaki/V(?:BlogList|New|Rank|Search)",
"nextLink":"//*[(self::td or self::div) and @class=\"PageBar\"][1]/a[last()-1]"
},
{
"pageElement":"descendant::table[.//td//small[contains(text(),\"\u56de\u7b54\u5185\u5bb9\")]][last()]",
"url":"^http://my\\.chiebukuro\\.yahoo\\.co\\.jp/my/myspace_ansdetail\\.php",
"nextLink":"//a[contains(text(),\"\u6b21\u3078\")]"
},
{
"pageElement":"id(\"reactions results\")",
"url":"^http://(?:www\\.)?technorati\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/blogs/",
"nextLink":"id(\"pages\")/ol/li[@class=\"next\"]/a"
},
{
"insertBefore":"id(\"notice\")",
"pageElement":"id(\"tmplBody\")/div[@class=\"inner\"]/child::*[not(@class=\"ctrl\")]",
"url":"^http://bizmakoto\\.jp/makoto/articles/(?:09(?:0[4-9]|1)|[1-9])",
"nextLink":"id(\"next\")/a"
},
{
"pageElement":"id(\"main gadget_list skin_list\") | //div[@class=\"main_content has_right_sidebar\"]",
"url":"^https?://www\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/ig/directory",
"nextLink":"//p[@class=\"pagelinks\"]//a[last()]"
},
{
"pageElement":"id(\"results\")/table | //table[@class=\"dsp-downloads\"]//tr[child::td]",
"url":"^http://www\\.microsoft\\.com/downloads/(?:[^/]+/)?results\\.aspx",
"nextLink":"//p[@id=\"position\" and last()]/nobr/span/a[last()] | id(\"ctl00_ctl15_ResultPager1_NextAnchor\")"
},
{
"insertBefore":"id(\"Footer\")",
"pageElement":"id(\"Center\")",
"url":"^http://sns\\.my-freedom\\.org/\\?m=pc&a=page_h_diary_list_friend",
"nextLink":"//div[@class=\"parts\"]/div[@class=\"pagerRelative\" and position()=2]/p[@class=\"next\" and last()]/a"
},
{
"insertBefore":"id(\"content\")/div[@class=\"xhnewbb\"]/div[@class=\"topicviewctrl\"][last()]",
"pageElement":"id(\"content\")/div/table",
"url":"^http://www\\.thinkpad-club\\.net/modules/xhnewbb/viewtopic\\.php",
"nextLink":"id(\"content\")/div/table/tbody/tr[@class=\"foot\"]/td/a[last()]"
},
{
"insertBefore":"id(\"content\")/div[2]/following-sibling::node()",
"pageElement":"id(\"content\")/div[2]",
"url":"^http://mangahelpers\\.com/downloads/read\\-online/[0-9]+/[0-9]+",
"nextLink":"id(\"content\")/div[2]/a[1]"
},
{
"pageElement":"//p[.//td[@bgcolor=\"#f5f5f5\"]]",
"url":"^http://tanasinn\\.web\\.infoseek\\.co\\.jp/cgi-bin/tanasinn\\.cgi",
"nextLink":"//td[./input[contains(@value, \"NEXT5\")]]//b/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"contents_left\"]",
"url":"^http://www\\.ntticc\\.or\\.jp/Exhibition/2009/MetaverseProject/",
"nextLink":"//span[@class=\"tonext\"]/a"
},
{
"pageElement":"id(\"addon-entries\")/div[@class=\"entry\"]",
"url":"^https://addons\\.mozilla\\.jp/firefox/(?:extensions/|search\\?)",
"nextLink":"id(\"addon-entries\")/div[@class=\"footer-pagination\"]/p[@class=\"pages\"]/strong/following-sibling::a"
},
{
"pageElement":"id(\"More\")/ul",
"url":"^http://crossreview\\.jp/(?:[\\w-]+/)?friends/(?:follower|more)",
"nextLink":"//a[@rel=\"next\"]"
},
{
"insertBefore":"id(\"paging\")",
"pageElement":"id(\"search-results\")",
"url":"^http://(?:green\\.)?search\\.goo\\.ne\\.jp/(?:search|web\\.jsp)\\?",
"nextLink":"id(\"paging\")/a[last()]"
},
{
"pageElement":"//p[table[@class=\"msg_table\"]] | //table[@class=\"msg_table\" and not(parent::p)]",
"url":"^http://otn\\.oracle\\.co\\.jp/otn_pl/otn_tool2/search_forum_exe",
"nextLink":"//p[@align=\"right\"]/b/font[@color=\"red\"]/../following-sibling::b[1]/a"
},
{
"pageElement":"//div[@class=\"index\"]/form/fieldset/table",
"url":"^https://siteexplorer\\.search\\.yahoo\\.co\\.jp/mysite/advsearch",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"( //div[contains(concat(\" \", @class, \" \"), \" header \") or contains(concat(\" \", @class, \" \"), \" title_text \") or contains(concat(\" \", @class, \" \"), \" log_body \")] )",
"url":"^http://vimperator\\.org/trac/gitweb/\\?p=vimperator\\.git;a=log",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" page_nav \")]/a[last()]"
},
{
"pageElement":"//form[@action=\"http://www.sofmap.com/product_compare/exec/\"]",
"url":"^http://www\\.sofmap\\.com/(?:product_list|search_result)/exec/",
"nextLink":"//form[@action=\"http://www.sofmap.com/product_compare/exec/\"]/preceding::a[1]"
},
{
"pageElement":"id(\"right_area\")/div[1]/following-sibling::*[following::hr[last()-3]]",
"url":"^http://(?:s\\d\\.)?bannch\\.jp/bc/Search210\\?.*sel2=[35](?:&|$)",
"nextLink":"//a[text()=\"\u6b21\u306e3\u4ef6\"]"
},
{
"insertBefore":"id(\"yschpg\")",
"pageElement":"//div[@class=\"Extends-details\"]",
"url":"^http://detail\\.chiebukuro\\.yahoo\\.co\\.jp/qa/question_detail/",
"nextLink":"id(\"yschnxtb\")/a"
},
{
"insertBefore":"id(\"commentForm\")",
"pageElement":"id(\"Center\")",
"url":"^http://sns\\.my-freedom\\.org/\\?.*?target_c_commu_topic_id=\\d+",
"nextLink":"//div[@class=\"parts\"]/div[@class=\"pagerRelative\" and position()=3]/p[@class=\"next\"]/a"
},
{
"pageElement":"//div[@class=\"content_col\" or @id=\"main_padding\"]/table[1]",
"url":"^http://www\\.web-career\\.com/contents/(?:buyuden|engineer25)/",
"nextLink":"//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\u3078\u2192\"]"
},
{
"pageElement":"id(\"search-results\")",
"url":"^http://[^.]+\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/videosearch",
"nextLink":"id(\"main-pagi-next\")"
},
{
"pageElement":".//div[1]/table[1]/tbody/tr[1]/td[1]/div[1]/p[contains(@align, \"center\")]",
"url":"^http://(?:www\\.)?bible\\.or\\.jp/vers_search/vers_search\\.cgi",
"nextLink":".//a[contains(@href, \"flag_pre_next=next\")]"
},
{
"pageElement":"id(\"yschqlist\")/ol/li",
"url":"^http://search\\.chiebukuro\\.yahoo\\.co\\.jp/search/search\\.php",
"nextLink":"id(\"yschpg\")/p[2]/big/b/a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"browseList\")/li",
"url":"^http://www\\.veoh\\.com/(?:browse|search)/(?:videos|channels)",
"nextLink":"id(\"browse-videos-top-next\")"
},
{
"pageElement":"id(\"kiji\")",
"url":"^http://itpro\\.nikkeibp\\.co\\.jp/article/(?:COLUMN|Interview)",
"nextLink":"//a[text()=\">>\"]"
},
{
"pageElement":"//table[@class=\"res\"]/tbody/tr[contains(@class, \"valign\")]",
"url":"^https?://www\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/bookmarks/",
"nextLink":"//td[contains(concat(\" \", @class, \" \"), \" bl \")][last() - 1]/a"
},
{
"insertBefore":"//div[@class=\"photor_thumb_wrap\"]",
"pageElement":"//div[@class=\"leaf_body\"]",
"url":"^http://japan\\.zdnet\\.com/sp/feature/ziddy/story/[\\d,]+\\.htm",
"nextLink":"id(\"script_pagination_next\")"
},
{
"pageElement":"//div[starts-with(@id, \"illust_c\")]",
"url":"^http://www\\.pixiv\\.net/(?:(?:personal_)?tags.+?tag=|search)",
"nextLink":"//a[starts-with(text(), \"\u6b21\u306e\")]"
},
{
"insertBefore":"//div[@class=\"related\"][last()]",
"pageElement":"//div[@class=\"documentwrapper\"]",
"url":"^http://docs\\.python\\.org/dev/[a-z]+/(?!index\\.html).+\\.html",
"nextLink":"//a[@accesskey=\"N\"]"
},
{
"pageElement":"id(\"ListTableIn\")/table",
"url":"^http://www\\.tagindex\\.com/cgi-lib/(?:q[1-4])?bbs/patio\\.cgi",
"nextLink":"//div[@class=\"PageLinks\"]/strong/following-sibling::a[1]"
},
{
"pageElement":"//tbody[@id=\"content_body\"]/tr",
"url":"^http://(?:(?:www|gold)\\.)?darkthrone\\.com/userlist/attack\\?",
"nextLink":"//a[text()=\"Next\"]"
},
{
"insertBefore":"id(\"bodyMainArea\")/div[@class=\"relationDiary\"]/div[@class=\"pageNavigation01\"][last()]",
"pageElement":"id(\"bodyMainArea\")/div[@class=\"relationDiary\"]/div[@class=\"quoteDiaryArea01\"]|id(\"bodyMainArea\")/div[@class=\"newsList\"]/div[@class=\"contents\"]",
"url":"^http://news\\.mixi\\.jp/list_(?:quote_diar|news_categor)y\\.pl",
"nextLink":"//div[@class=\"pageNavigation01\"]/div[@class=\"pageList02\"]/ul/li/a[text()=\"\u6b21\u3092\u8868\u793a\"]"
},
{
"pageElement":"//div[@class=\"booklist\"]",
"url":"^http://www\\.books-sanseido\\.co\\.jp/reserve/bookSearch\\.do\\?",
"nextLink":"//a[@class=\"page-link\"][text()=\"\u6b21\u30da\u30fc\u30b8\u3078\"]"
},
{
"pageElement":"//table[@width=580][2]",
"url":"^http://www\\.businessweekly\\.com\\.tw/webarticle2?\\.php\\?id=.",
"nextLink":"//a[contains(text(), \"\u4e0b\u4e00\u9801\")]"
},
{
"insertBefore":"id(\"footer\")",
"pageElement":"id(\"content\")",
"url":"^http://www\\.vox\\.com/(?:reader/neighborhood|explore)/posts/",
"nextLink":"//ul[@class=\"pager-list\"]/li[@class=\"item next\"]/a"
},
{
"insertBefore":"id(\"navbar\")",
"pageElement":"//*[self::div[@class=\"h\"] or self::pre[@class=\"j\"] or self::div[@class=\"f\"]]",
"url":"^http://[^.]+\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/codesearch",
"nextLink":"(id(\"navbar\")//td[@class=\"b\"]/a)[last()]"
},
{
"pageElement":"//div[@class=\"Code\"]/div[contains(@class, \"Table01\")]",
"url":"^http://(?:www\\.)?starbucks\\.co\\.jp/search/result_store\\.php",
"nextLink":"//td[last()]/u/font[last()]/a"
},
{
"pageElement":"id(\"main\")/div[contains(concat(\" \",@class,\" \"),\" block \")]",
"url":"^http://www\\.osaka-info\\.jp/jp/search/list/sightseeing\\.php",
"nextLink":"id(\"listnavigation\")/ul/li[last()]/a[text()=\"NEXT\ue280\ue280\"]"
},
{
"pageElement":"//table[@bgcolor=\"#ffffff\"][.//b[text()=\"\u8a55\u4fa1\uff1a\"]]",
"url":"^http://rating\\d*\\.auctions\\.yahoo\\.co\\.jp/jp/show/rating\\?",
"nextLink":"//small/b/a[text()=\"\u6b21\u306e25\u4ef6\"]"
},
{
"pageElement":"id(\"site-body\")//table[@summary=\"\"]",
"url":"^http://ch\\.nicovideo\\.jp/(?:community|member|search|video)",
"nextLink":"id(\"site-body\")//a[starts-with(normalize-space(text()), \"\u6b21\")]"
},
{
"pageElement":"//table[3]/following-sibling::node()[ following::div[contains(concat(\" \", @class, \" \"), \" n \")] ]",
"url":"^http://scholar\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/scholar",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" n \")]/table/tbody/tr/td[last()]/a"
},
{
"pageElement":"id(\"search-stories\")",
"url":"^http://(?:[^.]+\\.)?google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/news",
"nextLink":"id(\"end-next\")/.."
},
{
"pageElement":"//ul[@class=\"excerptedpostblock\"]",
"url":"^https?://www\\.sociomedia\\.co\\.jp/category/uidesignpatterns",
"nextLink":"//li[@class=\"active_page\"]/following-sibling::li[1]/a"
},
{
"pageElement":"id(\"Imagesmain\")/table",
"url":"^http://(?:booru\\.nanochan\\.org|shimmie\\.shishnet\\.org/v2)/",
"nextLink":"id(\"main\")/p[@class=\"paginator\"]/b/following::a"
},
{
"pageElement":"id(\"mainbn\")/ul/li[contains(@class,\"bn\")]",
"url":"^http://event\\.media\\.yahoo\\.co\\.jp/nikkeibp/archives\\.html",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"//p|//center",
"url":"^http://yotsuba\\.saiin\\.net/~heart-of-haa/[a-z]+[0-9]+\\.htm",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"//table[@cellspacing=\"0\" and @cellpadding=\"3\" and @border=\"0\" and @width=\"100%\"]",
"url":"^http://www\\.bk1\\.jp/webap/user/Sch(?:Detail)?BibList\\.do\\?",
"nextLink":"//a[text()=\"\u6b21\u3078\u2192\"]"
},
{
"pageElement":"id(\"contents\")/table/tbody/tr/td[1]/table",
"url":"^http://(?:www\\.)?shomei\\.tv/signature/signature_list\\.php",
"nextLink":"id(\"contents\")/table/tbody/tr/td[1]/div[2]/a[last()-1]"
},
{
"pageElement":"//table[@class=\"res\"]",
"url":"^https?://www\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/history/",
"nextLink":"//td[@class=\"bl\"][last()-1]/a|//div[@class=\"nn\"]/parent::a"
},
{
"insertBefore":"id(\"notice\")",
"pageElement":"//div[@class=\"newart\"]/div[@class=\"headline\"]/following-sibling::*[not(@class=\"ctrl\") and not(@class=\"endkwd\") and not(@id=\"notice\") and following::*[@class=\"ctrl\"]]",
"url":"^http://bizmakoto\\.jp/makoto/articles/\r\n0(?:[0-8]|90[1-3])",
"nextLink":"id(\"next\")/a"
},
{
"pageElement":"//div[contains(@class,\"setWrap\")]",
"url":"^http://(?:www\\.)?shouga-bu\\.com/recipe/search/result\\.php",
"nextLink":"//ul[contains(@class,\"pageNav\")]/li[@class=\"next\"]/a"
},
{
"pageElement":"//div[@class=\"rbroundbox2\"]/div[@class=\"rbcontent\"]/node()[self::div[contains(concat(\" \", @class, \" \"), \" forum_box \")] or self::br]",
"url":"^http://projecteuler\\.net/index\\.php\\?section=forum&id=\\d+",
"nextLink":"//li[@class=\"currentpage\"]/following-sibling::li[1]/a"
},
{
"insertBefore":"//div[@class=\"Pages\"]",
"pageElement":"id(\"Main\")/table[last()]",
"url":"^http://(?:www\\.)?flickr\\.com/photos/[^/]+/sets/.+/detail/",
"nextLink":"//a[@class=\"Next\"]"
},
{
"pageElement":"id(\"rank-tbl\")",
"url":"^http://blogscouter\\.cyberbuzz\\.jp/list/daily_ranking\\.php",
"nextLink":"id(\"rank-box\")//a[contains(text(), \"next>>\")]"
},
{
"insertBefore":"//div[@class=\"frame\"]/div[@class=\"main\"]/div[@class=\"page2\"]",
"pageElement":"//div[@class=\"frame\"]/div[@class=\"main\"]/table",
"url":"^http://www\\.gumonji\\.net/cgi-bin/(?:idea_list|beam)\\.cgi",
"nextLink":"//div[@class=\"frame\"]/div[@class=\"main\"]/div[@class=\"page2\"]/div[@class=\"pager_next\"]/a"
},
{
"insertBefore":"id(\"btmbox5\")",
"pageElement":"id(\"ppbox\")",
"url":"^http://www\\.style\\.com/peopleparties/search/thumb/person",
"nextLink":"(//a[@class=\"paginator\"])[last()]"
},
{
"pageElement":"id(\"center\")/div[not(@class=\"paging\")]",
"url":"^http://wwwx\\.fujitv\\.co\\.jp/zoo/blog/index\\.jsp\\?cid=233",
"nextLink":"//div[@class=\"paging-next\"]/a"
},
{
"pageElement":"id(\"articlebody m_body\")",
"url":"^http://www\\.nikkeibp\\.co\\.jp/article/column/[^/]+/[^/]+/",
"nextLink":"id(\"pages\")//a[@class=\"next\" or contains(text(), \"\u6b21\")]"
},
{
"pageElement":"id(\"RES\")/div",
"url":"^http://(?:aurasoul\\.)?mb2\\.jp/_[^/]+/[0-9]+_[0-9]+\\.html",
"nextLink":"//span[@class=\"ryaku\"]/a[text()=\"\u2193\u6b21\u306e\u30da\u30fc\u30b8\u3092\u8aad\u3080\"]"
},
{
"insertBefore":"id(\"comments sponsors_link\")",
"pageElement":"id(\"entryBody\")",
"url":"^http://wiredvision\\.jp/(?:news|blog/[^/]+)/\\d+/\\d+\\.html",
"nextLink":"id(\"entryBody\")/p/a[contains(text(), \"\u3078\u7d9a\u304f\")]"
},
{
"pageElement":"//div[@class=\"listing\"]/div[not(@class=\"pagination\")]",
"url":"^http://(?:www\\.)?apolon\\.jp/(?:pro(?:file|ject)s|offers)",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"pageElement":"id(\"content_top\")/div[@id=\"recipi_menu_chanco\" or class=\"bob_sen2\"]",
"url":"^https://www\\.iy-net\\.jp/nsmarket/recipe/recipelist\\.do\\?",
"nextLink":"//span[@class=\"span_next\"]/parent::a"
},
{
"pageElement":"//div[@class=\"SearchResult\"]",
"url":"^http://blogsearch\\.livedoor\\.com/search/(?:article|blog)",
"nextLink":"//span[@class=\"pageNext\"]/a"
},
{
"pageElement":"id(\"issuetable\")/tbody/tr[position()>1]",
"url":"^http://jira\\.secondlife\\.com/secure/IssueNavigator\\.jspa",
"nextLink":"//a[text()=\"Next >>\"]"
},
{
"pageElement":"id(\"commonBgColor\")",
"url":"^http://ichiba\\.nicovideo\\.jp/search/(?:az|gg|mobile|ys)/",
"nextLink":"//a[text()=\"\u6b21\u3078 >>\"]"
},
{
"pageElement":"id(\"sentences_list\") | //div[contains(concat(\" \", @class, \" \"), \" column_left \") and contains(concat(\" \", @class, \" \"), \" clr \")]//ul[@class=\"courses\"]",
"url":"^http://www\\.iknow\\.co\\.jp/(?:courses|sentences/search\\?)",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pagination \")]/a[@rel=\"next\"]"
},
{
"insertBefore":"//div[@class=\"year_calendar\"]",
"pageElement":"//div[@class=\"story\" or @class=\"date\"]",
"url":"^http://mplus-fonts\\.sourceforge\\.jp/cgi-bin/blosxom\\.cgi",
"nextLink":"//div[@class=\"entries\"]//a"
},
{
"pageElement":"//td[@width=\"100%\"][@valign=\"top\"]/table[@class=\"tborder\"]",
"url":"^http://(?:www|forum)\\.pcdvd\\.com\\.tw/forumdisplay\\.php\\?",
"nextLink":"//div[@class=\"pagenav\"]//a[text()=\"\u4e0b\u4e00\u9801\"]"
},
{
"insertBefore":"//div[@class=\"pagedListing\"]",
"pageElement":"id(\"blocks\")",
"url":"^http://widgets\\.opera\\.com/(?:new|search|popular|rated)/",
"nextLink":"//div[@class=\"pagedListing\"]/ol/li[last()]/a"
},
{
"pageElement":"id(\"content\")/div[@class=\"blog\"]",
"url":"^http://[^.]+\\.sblo\\.jp/(?:archives|category)/[^.]+\\.html",
"nextLink":"//div[not(preceding-sibling::div[@class=\"navi\"])][not(following-sibling::div[@class=\"navi\"]/a[text()=\">>\"])]/a[text()=\"<<\"]|//div[preceding-sibling::div[@class=\"navi\"]][@class=\"navi\"]/a[text()=\">>\"]"
},
{
"pageElement":"//ul[contains(concat(\" \",@class,\" \"), \" ytrvKlgDetailAns \")]/li",
"url":"^http://chiebukuro\\.travel\\.yahoo\\.co\\.jp/detail/.+\\.html",
"nextLink":"//li[contains(concat(\" \",@class,\" \"), \" next \")]/a"
},
{
"pageElement":"//center[position() > 3 and position() < last()-2]",
"url":"^http://www[^.]*\\.oekakibbs\\.com/bbs/[^/]+/oekakibbs.cgi",
"nextLink":"//center[4]//td[last()]/a[last()]"
},
{
"pageElement":"id(\"article_body\")",
"url":"^http://www\\.washingtonpost\\.com/wp-dyn/content/article/",
"nextLink":"id(\"pagination_bottom\")//a[text()=\"Next\"]"
},
{
"pageElement":"id(\"list01\")",
"url":"^http://(?!page)(?:[^.]+\\.){1,2}auctions\\.yahoo\\.co\\.jp/",
"nextLink":"//img[contains(@src, \"arrow_next\")]/parent::a"
},
{
"pageElement":"//td[@class=\"fo12_33\"]/../../.. | //table[@class=\"fo10x12_33\"] | //table[@class=\"fo10_gr\"] | //br[@class=\"fo12\"]/following-sibling::node()[following::a[text()=\"\u2190 b_a_c_k \" or text()=\"n_e_x_t \u2192\"]] | //div[@id='linkalert-box']/following-sibling::table",
"url":"^http://(?:www\\.)?japandesign\\.ne\\.jp/HTM/(?:REPORT|NY)/",
"nextLink":"//a[text()=\"N E X T\" or text()=\"n_e_x_t \u2192\"] | //font[text()=\"N E X T\"]/.."
},
{
"insertBefore":"//h1/following-sibling::table/following-sibling::node()",
"pageElement":"//h1/following-sibling::table",
"url":"^http://www\\.vim\\.org/scripts/script_search_results\\.php",
"nextLink":"//a[text()=\"next\"]"
},
{
"insertBefore":"//td[@class=\"maintext\"]/p[1]/following-sibling::node()",
"pageElement":"//td[@class=\"maintext\"]/p[1]",
"url":"^http://(?:[^.]+\\.)?hardwarezone\\.com/articles/view\\.php",
"nextLink":"//td[@class=\"maintext\"]//a[@class=\"page\" and contains(text(),\">>\")]"
},
{
"insertBefore":"id(\"footerArea\")",
"pageElement":"id(\"oldContents\")/table",
"url":"^http://(?:video\\.)?mixi\\.jp/search_(?:review|video)\\.pl",
"nextLink":"//a[text()=\"\u6b21\u3092\u8868\u793a\"]"
},
{
"pageElement":"id('shouhinlist')//table[contains(@class,'item')]",
"url":"^http://shop\\.kitamura\\.jp/disp/CSfDispListPage_001\\.jsp",
"nextLink":"id('shouhinlist')//a[text()='\u6b21\u3078']\r\n"
},
{
"pageElement":"id(\"main\")/div[contains(@class, \"leaf_body\")]",
"url":"^http://medical\\.nikkeibp\\.co\\.jp/(?:[^/]+/)+[^/]+\\.html",
"nextLink":"//*[@class=\"arrow_next\"]/descendant::a"
},
{
"pageElement":"id(\"logs\")",
"url":"^http://www2\\.jrt\\.co\\.jp/cgi-bin3/ikuniweb/tomozo\\.cgi",
"nextLink":"id(\"navi\")/ul/li[last()]/a"
},
{
"pageElement":"//tr[not(@class=\"ch\") and starts-with(@id, \"taw\")]",
"url":"^http://www\\.technobahn\\.com/(?:apps|cgi-bin)/fn/plot\\?",
"nextLink":"//img[contains(@src, \"nav_next.png\") or contains(@src, \"nav_next_small.gif\")]/.."
},
{
"pageElement":"id(\"CtgObj\")",
"url":"^https?://(?:www\\.)?biccamera\\.com/bicbic/(?:ap|js)p/w/",
"nextLink":"id(\"CtgPgNum\")//a[contains(@href,\"BUTTON_ID=NEXT\")]"
},
{
"pageElement":"id(\"commit\")/div",
"url":"^https?://github\\.com/(?:changelog|[^/]+/[^/]+/commits)",
"nextLink":"//a[@hotkey=\"l\"]"
},
{
"pageElement":"id(\"main\")/div/div[@class=\"result\"]/div[@class=\"itemrow\"]",
"url":"^http://(?:www\\.)?monoclip\\.jp/[^/]+/(?:mono|user)list/",
"nextLink":"//a[@title=\"next page\"]"
},
{
"pageElement":"//table[@class=\"forumline\"]",
"url":"^http://torrent-jp\\.info/forum/view(?:forum|topic)\\.php",
"nextLink":"//span[@class=\"nav\"]/a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"column-main\")/ul",
"url":"^http://r\\.tabelog\\.com/.+/(?:rst_?)?lst/(?!#searchbox)",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//table[contains(@class, \"rsi\")]",
"url":"^http://books\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/books",
"nextLink":"//a[descendant::img[@src=\"/nav_next.gif\"]]"
},
{
"insertBefore":"//div[@class=\"l_b_bott\"]",
"pageElement":"//div[@class=\"l_b_cen\"]",
"url":"^https?://cgi2\\.nhk\\.or\\.jp/gatten/archive/program\\.cgi",
"nextLink":"//div[@class=\"up_page\"]/div[./img[@class=\"l\"]]/div[@class=\"tab01\"]/a"
},
{
"pageElement":"//div[@class=\"bbs-box\"]",
"url":"^http://mypage\\.toei-anim\\.co\\.jp/tv/fresh_precure/bbs/",
"nextLink":"//div[@class=\"nextpage\"]/a[contains(text(), \"\u6b21\u3078\")]"
},
{
"pageElement":"id(\"posts\") | id(\"posts\")/following-sibling::div[@align=\"center\"][position() < last()]",
"url":"^http://(?:www|forum)\\.pcdvd\\.com\\.tw/showthread\\.php\\?",
"nextLink":"//div[@class=\"pagenav\"]//a[text()=\"\u4e0b\u4e00\u9801\"]"
},
{
"pageElement":"id(\"headline\")/p[contains(concat(\" \", @class, \" \"), \" article \")] | id(\"headline\")/*[not(@id=\"kiji\") and preceding::*[@class=\"headline\" or @class=\"headline2\"][last()] and following::*[@class=\"hit_navi\"][last()]]",
"url":"^http://it\\.nikkei\\.co\\.jp/[^/]+/[^/]+/\\w+\\.aspx\\?n=\\w+",
"nextLink":"id(\"kiji\")/a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"id(\"contentpanel\")/table",
"url":"^http://maps\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/maps\\?",
"nextLink":"//a[descendant::div[@id=\"nn\"]]"
},
{
"pageElement":"id(\"article\")",
"url":"^http://(?:markezine|careerzine)\\.jp/article/detail/\\d+",
"nextLink":"//table[@class=\"pg_bar\"]//td[@class=\"pg_bar_next\"]/a"
},
{
"insertBefore":"id(\"ygrp-msg-ext\")/div/table[@class=\"datatable\"]/following-sibling::node()",
"pageElement":"id(\"ygrp-msg-ext\")/div/table[@class=\"datatable\"]",
"url":"^http://[^.]+\\.groups\\.yahoo\\.com/group/[^/]+/messages/",
"nextLink":"//td[@class=\"viewright\"]/a[contains(text(), \">\")]"
},
{
"pageElement":"//table[@class=\"questionlisttable\"]",
"url":"^http://q\\.hatena\\.ne\\.jp/[^/]+/(?:question|answer)list",
"nextLink":"//div[@class=\"pager\"]/strong/following-sibling::a"
},
{
"pageElement":"id(\"PageBodyArea\")//div[@class=\"Box08F\"]",
"url":"^http://(?:www\\.)?yodobashi\\.com/ec/(?:category|search)",
"nextLink":"id(\"PageBodyArea\")//ul[@class=\"LeftList\"]/li/a[contains(text(),\"\u6b21\")]"
},
{
"pageElement":"//div[@class=\"novel\"]",
"url":"^http://(?:www\\.)?syosetu\\.net/pc/.*(?:main|novel)\\.php",
"nextLink":"//img[contains(@src,\"next.gif\")][last()]/parent::a"
},
{
"pageElement":"id(\"main\")/dl[contains(@class,\"search-result\")]",
"url":"^http://gourmet\\.yahoo\\.co\\.jp/restaurant/shoplist/\\w+",
"nextLink":"//span[contains(@class,\"listNext\")]/a"
},
{
"pageElement":"id(\"contents\")/div[@id=\"pager\"]/preceding-sibling::*[not(@class=\"topbanner\" or @class=\"colum_banner\")]",
"url":"^http://events\\.nikkeibp\\.co\\.jp/skillup/column/[^/]+/",
"nextLink":"id(\"pager\")//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"insertBefore":"id(\"pages\")",
"pageElement":"id(\"pages\")/preceding-sibling::*",
"url":"^http://www\\.nikkeibp\\.co\\.jp/(?:style/(?:biz|eco)|lc)",
"nextLink":"id(\"pages\")/a[last()]"
},
{
"pageElement":"id(\"photos\")",
"url":"^http://rephoto\\.jpn\\.org/(?:$|photo|recent|color|r18)",
"nextLink":"//a[@class=\"pager\" and contains(@title,\"Next\")]"
},
{
"pageElement":"id(\"article_body\")/*[not(@class=\"ctrl\") and not(@class=\"endkwd\") and not(@id=\"notice\") and not(descendant::*[@id=\"red\" and @class=\"box\"])] | //div[@class=\"newart\"]/h5/following-sibling::*[not(@class=\"ctrl\") and not(@class=\"endkwd\") and not(@id=\"notice\") and following::p[@id=\"byline\"]]",
"url":"^http://(?:www|plusd)\\.itmedia\\.co\\.jp/[^/]+/articles/",
"nextLink":"id(\"next\")/a|//a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"id(\"content02\")/form[@name=\"frm0\"]/table[2]",
"url":"^http://(?:www\\.)?sunhayato\\.co\\.jp/products/list\\.php",
"nextLink":"id(\"content02\")//a[starts-with(text(),\"\u6b21\")]"
},
{
"pageElement":"id(\"orders_shipped\")/tbody/tr/td/table",
"url":"^https://www\\.amazon\\.co\\.jp/gp/css/history/view\\.html",
"nextLink":"//font[contains(text(),\"\u305d\u306e\u4ed6\u306e\u6ce8\u6587\")]/../child::font[last()]/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"text\"]",
"url":"^http://www\\.nikkeibp\\.co\\.jp/article/(?:nba|skillup)/",
"nextLink":"//a[@class=\"next\"]"
},
{
"insertBefore":"//div[contains(@class, \"gallery\")]/ul[contains(@class, \"menu\")]",
"pageElement":"//div[contains(@class, \"galleryContent\")]",
"url":"^http://wiredvision\\.jp/(?:gallery|news)/\\d+/\\d+\\.html",
"nextLink":"//div[contains(@class, \"galleryContent\")]//ul[contains(@class, \"navigation\")]/li/a"
},
{
"insertBefore":"id(\"googlead\")",
"pageElement":"id(\"album_list\")",
"url":"^http://(?:www\\.)?gumonji\\.net/cgi-bin/album_list\\.cgi",
"nextLink":"//div[@class=\"pager_next\"]/a"
},
{
"pageElement":"//center/table",
"url":"^http://[^.]+\\.oekakibbs\\.com/bbs/[^/]+/oekakibbs\\.cgi",
"nextLink":"//font[contains(text(),\"\u6b21\")]/.."
},
{
"pageElement":"//ul[contains(concat(\" \", @class, \" \"), \" activities \")]",
"url":"^http://mitter\\.jp/[^/]+/(?:friends|videos|tv_ratings)",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pagination \")][last()]/a[last()]"
},
{
"pageElement":"//div[@class=\"tepore_main\"]/table[@class=\"table_height\"]//table[@bgcolor=\"#fa8610\" and @width=\"550\"]",
"url":"^http://(?:www\\.)?tepore\\.com/cooking/mitsukete/list/.",
"nextLink":"//table[@class=\"page_navi_table\"]//a[last()]"
},
{
"pageElement":"//div[@class=\"list\"]/ul/li",
"url":"^http://cu\\.yahoo\\.co\\.jp/\\?.*\\ba=page_c_member_list\\b",
"nextLink":"//div[@class=\"page_manage2\"]/ul/li[@class=\"pager\"]/a[contains(text(),\"\u6b21\")]"
},
{
"pageElement":"//table[@cellspacing=\"3\"]/following-sibling::table[position()=1]/following-sibling::table[@cellspacing=\"4\"][position()=1]/preceding-sibling::table[@cellspacing=\"0\"]",
"url":"^http://directory\\.rakuten\\.co\\.jp/rms/sd/directory/vc",
"nextLink":"//b[starts-with(text(), \"\u6b21\")]/parent::a"
},
{
"pageElement":"id(\"hatena-archive\")/div[@class=\"day\"]/div",
"url":"^https?://(?:d|[^.]+\\.g)\\.hatena\\.ne\\.jp/[^/]+/archive",
"nextLink":"id(\"hatena-archive\")/div[@class=\"calendar\"]/a[contains(text(), \"\u53e4\u3044\")]"
},
{
"pageElement":"//div[contains(@class, \"thumbnailBorder\")]",
"url":"^http://(?:www\\.)?dirtydirtydancing\\.com/default\\.aspx",
"nextLink":"//span[@class=\"ArchiveLinks\"]/following-sibling::a[1]"
},
{
"insertBefore":"id(\"m_link\")",
"pageElement":"id(\"m_body\")",
"url":"^http://www\\.nikkeibp\\.co\\.jp/style/biz/column/tahara/",
"nextLink":"id(\"pages\")//a[last()]"
},
{
"insertBefore":"id(\"kiji\")/following-sibling::node()[1]",
"pageElement":"id(\"kiji\")",
"url":"^http://itpro\\.nikkeibp\\.co\\.jp/article/Watcher/[\\d/]+",
"nextLink":"//a[@class=\"tonext\"]"
},
{
"pageElement":"//center/table//center/table",
"url":"^http://(?:www\\.)?mr-lee-catcam\\.de/pe_catcam\\d+\\.htm",
"nextLink":"//a[text()=\"Continue to next trip\"]"
},
{
"pageElement":"//div[contains(@class, \"leaf_body\")]|//div[@class=\"story_body\"]",
"url":"^http://japan\\.cnet\\.com/(:?[^/]+/)+story/[^/.]+\\.htm",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"//div[@class=\"pageTitle\"]/following-sibling::table[1]",
"url":"^http://[^.]+\\.amazon\\.de/gp/(?:best|mo(?:st|ve)|new)",
"nextLink":"//td[@class=\"paginationCurPage\"]/following-sibling::td[2]/a"
},
{
"pageElement":"//div[@class=\"snap_shots\"]",
"url":"^http://www\\.tomshardware\\.com/reviews/(?:\\d+\\.html)?",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"posts\")",
"url":"^http://forums\\.animesuki\\.com/showthread\\.php\\?t=\\d+",
"nextLink":"//a[starts-with(@title, \"Next Page\")]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" iconList03 \")]",
"url":"^http://mixi\\.jp/list_(?:friend|community|member)\\.pl",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pageNavigation01 \")]//a[starts-with(text(), \"\u6b21\u3092\")]"
},
{
"insertBefore":"id(\"googlead\")",
"pageElement":"//div[@class=\"frame\"]/div[@class=\"main\"]",
"url":"^http://(?:www\\.)?gumonji\\.net/cgi-bin/beam_list\\.cgi",
"nextLink":"//div[@class=\"pager_next\"]/a"
},
{
"pageElement":"//table[@class=\"ok_list\"]",
"url":"^http://(?:[^.]+\\.)?okwave\\.jp/(?:\\d+/)*c[^.]+\\.html$",
"nextLink":"//div[@class=\"ok_paging\"]//a[contains(text(), \"\u6b21\u3078\")]"
},
{
"pageElement":"//table[@class=\"n\" or .//td/a[@onmousedown]]",
"url":"^http://(?:www\\.)?baidu\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/s",
"nextLink":"//a[@class=\"nx\"] | //div[@class=\"p\"]/a[last()]"
},
{
"pageElement":"/html/*",
"url":"^http://cse\\.naro\\.affrc\\.go\\.jp/takezawa/r-tips/r/\\d",
"nextLink":"//p[1]/a[3]"
},
{
"pageElement":"id(\"main\")",
"url":"^http://ekizo\\.mandarake\\.co\\.jp/shop/ja/search.do\\?.",
"nextLink":"//a[normalize-space()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"insertBefore":"(//div[@class=\"clearFix pagingNavi2\"])[last()]",
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://blogs\\.yahoo\\.co\\.jp/[^/]+/MYBLOG/yblog\\.html",
"nextLink":"((//p[@class=\"forwardNext\"]/a))[2]"
},
{
"insertBefore":"//table[@width=\"100%\"]/following-sibling::*[1][self::p][@class=\"maT6B6\"]",
"pageElement":"//table[@class=\"maT10\"]/tr/td[@class=\"alignT\"]",
"url":"^http://select-baito\\.weban\\.jp/webapp/sel/list\\.aspx",
"nextLink":"//span[@id=\"pager2\"]/span[@class=\"txt12_orange\"]/following-sibling::*[1][self::a]"
},
{
"pageElement":"id(\"main\")/div[@class=\"inner\"]",
"url":"^http://(?:www\\.)?gamemeter\\.net/(?:s|u/\\d+/gamelist)",
"nextLink":"id(\"main\")/div[@class=\"inner\"]/center/a[contains(text(),\"\u2192next\")]"
},
{
"pageElement":"//div[@class=\"essay\"]/h3 | //div[@class=\"message\"]",
"url":"^http://(?:www\\.)?theit\\.jp/(?:essay|talk)/column/\\d+",
"nextLink":"//div[@class=\"essay\"]/div[@class=\"pieces\"]/dl/*[2][not(a)]/../../following-sibling::div/dl/*[2]/a[1]"
},
{
"pageElement":"//div[starts-with(@id,\"list_box\")]",
"url":"^http://www\\.sengoku\\.co\\.jp/mod/sgk_cart/search\\.php",
"nextLink":"id(\"list_txt02\")//a[starts-with(text(),\"\u6b21\")]"
},
{
"pageElement":"id(\"categoryLR\")/p[@class=\"cate_text2\"]/following-sibling::div[1]",
"url":"^https?://(?:www\\.)?marutsu\\.co\\.jp/user/ichiran\\.php",
"nextLink":"id(\"nextpage\")/a[position()=1 and following-sibling::br]"
},
{
"pageElement":"id(\"content-in\")/div[contains(concat(\" \", @class, \" \"), \" container \")]",
"url":"^http://miterew\\.sparrow\\.tv/(?:ranking|kiterew)\\.php",
"nextLink":"id(\"content-in\")/div[contains(concat(\" \", @class, \" \"), \" pagination \")]//a[contains(text(), \"\u9032\u3080\")]"
},
{
"insertBefore":"//p[@class=\"pagination\"][2]",
"pageElement":"id(\"default_right_area\")",
"url":"^http://www\\.futabasha\\.co\\.jp/booksdb/book/listview/",
"nextLink":"//p[@class=\"pagination\"][2]/a[starts-with(text(), \"\u6b21\u3078\")]"
},
{
"pageElement":"//td[contains(concat(\" \",@class,\" \"),\" fsmall \")]/../../../../table[2]",
"url":"^http://media\\.excite\\.co\\.jp/book/news/topics/[^/]+/",
"nextLink":"//a[descendant::img[@src=\"../images/topics_next.gif\"]]"
},
{
"insertBefore":"id(\"jobListButton\")",
"pageElement":"id(\"pageset\")/form/div[@class=\"jobListList\"]",
"url":"^https://haken\\.en-japan\\.com/jobsearch/job_list\\.cfm",
"nextLink":"id(\"pageset\")/div[contains(@class,\"jobListLink\")][last()]/a[contains(@class,\"next\")]"
},
{
"pageElement":"id(\"articlebody\")",
"url":"^http://(?:blog\\.livedoor\\.jp|[^.]+\\.livedoor\\.biz)/.",
"nextLink":"id(\"articlebody\")/div[@class=\"blogbody\"]/div[@class=\"menu\"]/a[2]"
},
{
"insertBefore":"//div[@class=\"Pages\"]",
"pageElement":"id(\"favoriteThumbs\")",
"url":"^http://(?:www\\.)?flickr\\.com/photos/[^/]+/favorites/",
"nextLink":"//a[@class=\"Next\"]"
},
{
"pageElement":"//div/table[1]",
"url":"^http://(?:www\\.)?net-sprout\\.com/bandstory/.+?\\.html",
"nextLink":"//a[child::img[contains(@src, \"next.gif\") or contains(@src, \"next3.gif\")] or text()=\"\u6b21\u306e\u30a8\u30d4\u30bd\u30fc\u30c9\u3078\"]"
},
{
"pageElement":"id(\"titlelist\")",
"url":"^http://www\\.cisco-records\\.co\\.jp/search/search\\.php",
"nextLink":"id(\"under_pagelink\")/li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"punviewtopic\")/div[contains(concat(\" \", @class, \" \"), \" blockpost \")]",
"url":"^http://forum\\.ubuntulinux\\.jp/viewtopic\\.php\\?id=\\d+",
"nextLink":"id(\"punviewtopic\")//p[contains(concat(\" \", @class, \" \"), \" pagelink \")]/strong/following-sibling::a[1]"
},
{
"pageElement":"id(\"beta-inner\")/div[contains(concat(\" \", @class, \" \"), \" entry \")]",
"url":"^http://foo\\.secondlifeherald\\.com/slh/[^/]+/[^/]+/.",
"nextLink":"//p[@class=\"content-nav\"]/a[1 and text()!=\"Main\"]"
},
{
"pageElement":"id('main')",
"url":"^http://[^.]+\\.asablo\\.jp/blog/\\d{4}/\\d{2}/\\d{2}/\\d+",
"nextLink":"id(\"navi-top\")/a[1]"
},
{
"pageElement":"//div[@id=\"searchResultsPageView\"]/div[@class=\"milClearfix\"]/div[@class=\"milColumn1\"]",
"url":"^https://jp\\.match\\.com/search/searchsubmit\\.aspx\\?.",
"nextLink":"//a[@id=\"hypNext\""
},
{
"pageElement":"id(\"main\")/table//table//table//tr",
"url":"^http://v\\.search\\.goo\\.ne\\.jp/convenience/shop\\.cgi",
"nextLink":"//span[@class=\"cur\"]/following-sibling::span[@class=\"fb\"]/a"
},
{
"insertBefore":"//center//center/table[4]",
"pageElement":"//center//center/table[3]",
"url":"^http://(?:www\\.)?autumnleaf\\.jp/shop/show_unit\\.php",
"nextLink":"//center//center/table[4]//td[2]//a"
},
{
"insertBefore":"id(\"googlead\")",
"pageElement":"id(\"list\")",
"url":"^http://(?:www\\.)?gumonji\\.net/cgi-bin/bbs_list\\.cgi",
"nextLink":"id(\"main\")/div[@class=\"page2\"]/div[@class=\"pager_next\"]/a"
},
{
"pageElement":"//table[@class=\"FixFrame\"]//tr[position()>1]",
"url":"^http://www\\.toranoana\\.jp/cgi-bin/R2/allsearch\\.cgi",
"nextLink":"//td[@class=\"DTW_td_r\"]//a[child::b[contains(text(),\">\")]][last()]"
},
{
"pageElement":".//div[@class='entry' or @class='spacer20']",
"url":"^http://space\\.geocities\\.yahoo\\.co\\.jp/gl/alice0775",
"nextLink":"id(\"glnavi\")/a[last()]"
},
{
"insertBefore":"id(\"ask_your_comment\")",
"pageElement":"id(\"m_body\")",
"url":"^http://www\\.nikkeibp\\.co\\.jp/style/biz/[^/]+/[^/]+/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"//table[@class=\"result\"]/tbody/tr",
"url":"^http://www2\\.kget\\.jp/releaseresult/index\\.aspx\\?d=",
"nextLink":"(//ul[contains(concat(\" \",@class,\" \"),\" fll \")][last()]/li[last()]/a[last()])[1]"
},
{
"insertBefore":"id(\"bottom\")",
"pageElement":"id(\"content\")/table",
"url":"^http://www\\.trek(?:earth|lens|nature)\\.com/gallery/",
"nextLink":"id(\"content\")/div[@id=\"pages\"]/a[last()-1]"
},
{
"pageElement":"id(\"articlecontent\")/p",
"url":"^http://realsimple\\.nikkeibp\\.co\\.jp/article/columns",
"nextLink":"id(\"articlecontent\")/div/table//tr/td[last()]/a[@class=\"noborder\"]"
},
{
"pageElement":"//div[contains(@class, \"main-item\")] | //div[contains(@class, \"main-content\")]/div[contains(@class, \"post\")]",
"url":"^http://www\\.warsow\\.net/forum/view(?:forum|topic)\\.",
"nextLink":"//div[contains(@id, \"brd-pagepost-end\")]/p[contains(@class, \"paging\")]/a[last()]"
},
{
"pageElement":"id(\"content\")/table[contains(@class,\"gadget\")]",
"url":"^http://desktop\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/",
"nextLink":"id(\"content\")/table[@class=\"header\"]/tbody/tr/td/a[contains(text(),\"\u6b21\u3078\")]"
},
{
"pageElement":"//div[@class=\"nav_element\"][ not(.//form) ]",
"url":"^http://(?:www\\.)?morguefile\\.com/archive/index\\.php",
"nextLink":"//div[@class=\"nav_element\"]//input/following-sibling::a"
},
{
"pageElement":"//div[@id=\"popular_tag\"]",
"url":"^http://www\\.pixiv\\.net/(?:personal_)?tags(?!.+tag=)",
"nextLink":"//div[@id=\"content3\"]//a[starts-with(text(),\"\u6b21\u306e\")][contains(@href,\"p=\")]"
},
{
"insertBefore":"//div[@class=\"paging\"]",
"pageElement":"//div[@class=\"search_related\" or @class=\"blog_related\"]",
"url":"^http://blog\\.search\\.goo\\.ne\\.jp/search_goo/result/",
"nextLink":"//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\u2192\"]"
},
{
"pageElement":"id(\"cart_list_add\")/h2[1]/following-sibling::*",
"url":"^http://www\\.yoteihyo\\.com/shop/[a-z]+/date/.+\\.html",
"nextLink":"//div[@class=\"rinkcascade\"]/a/img[@src=\"/img/next.gif\"]/.."
},
{
"pageElement":"id(\"seihin_wrap\")",
"url":"^https?://(?:www\\.)?marutsu\\.co\\.jp/user/seihin\\.php",
"nextLink":"//a[img[@src=\"seihin_img/seihin_next.gif\"]]"
},
{
"pageElement":"id(\"update\")/following-sibling::node()[not(self::div[@class=\"ctrl\"])][not(self::div[@id=\"notice\"])][following::div[@class=\"ctrl\"]]",
"url":"^http://www\\.itmedia\\.co\\.jp/[^/]+/articles/.+\\.html",
"nextLink":"id(\"next\")/a"
},
{
"pageElement":"id(\"centercol\")/node()[following::img[contains(@src, \"next.gif\") or contains(@src, \"prev.gif\")]]",
"url":"^http://www\\.atmarkit\\.co\\.jp/club/print/print\\.php",
"nextLink":"//img[contains(@src, \"next.gif\")]/parent::a"
},
{
"pageElement":"id(\"Center\")",
"url":"^http://sns\\.my-freedom\\.org/\\?m=pc&a=page_fh_diary",
"nextLink":"//div[contains(@class, \"parts\")]/p[@class=\"prev\"]/a[1]"
},
{
"insertBefore":"//table/tbody/tr/td[3]/form/following-sibling::node()",
"pageElement":"//table/tbody/tr/td[3]/form",
"url":"^http://www\\.eb-store\\.com/NASApp/mnas/MxMProduct\\?",
"nextLink":"//table/tbody/tr/td[3]/form/table/tbody/tr/td/font[@class=\"size3\"]/following-sibling::font[@class=\"size2\"]/a"
},
{
"pageElement":"//table[@cellspacing=\"5\"]",
"url":"^http://www\\.e-tomcat\\.com/shop/(?:category|goods)/",
"nextLink":"//a[normalize-space()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"//table[@class=\"callstable\"]",
"url":"^https?://myaccount\\.voiparound\\.com/clx/calls\\.php",
"nextLink":"//table[@class=\"pagination\"]//span[@class=\"thispage\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"contents\")/div[contains(@class,\"search_result_list02\") or contains(@class,\"clear_space\")]",
"url":"^https?://www\\.find-job\\.net/fj/(?:search|new)\\.cgi",
"nextLink":"id(\"contents\")//li[@class=\"foreward\"]/a"
},
{
"pageElement":"//div[@id = \"container\" or @id = \"content\" or @class = \"main\" or count(child::div) >= 10 or count(child::div[contains(@class, \"post\")]) >= 5]/div[@class !=\"footer\" and @class != \"navigation\" and @class != \"calendar\" and @class != \"page\"]",
"url":"^http://[^.]+\\.tumblr\\.com/(?:page|tagged|search|$)",
"nextLink":"//a[contains(@href,\"/page/\")][number(substring-after(self::a/@href,\"/page/\"))-number(substring-after(preceding-sibling::a/@href,\"/page/\")) = 2 or number(substring-after(self::a/@href,\"/page/\"))-number(substring-after(following-sibling::a/@href,\"/page/\")) = 2] | //a[starts-with(@href, \"/\")][contains(@href,\"/page/\")][number(substring-after(self::a/@href,\"/page/\")) = 2][number(substring-after(following-sibling::a/@href,\"/page/\")) != 4 and number(substring-after(preceding-sibling::a/@href,\"/page/\")) != 4]"
},
{
"pageElement":"id(\"content\")/table[2]//table[(position()>2) and (position()<last()-2)]",
"url":"^http://direct\\.ips\\.co\\.jp/directsys/search\\.cfm\\?",
"nextLink":"id(\"content\")//a[contains(text(),\"\u6b21\u306e\u7d50\u679c\")]"
},
{
"pageElement":"//div[@class=\"mibbs_thread\"][2]",
"url":"^http://www\\.e-mansion\\.co\\.jp/cgi-local/mibbs\\.cgi",
"nextLink":"id(\"mibbs_main\")//div[@class=\"pages\"]/span[@class=\"current\"]/following-sibling::a"
},
{
"insertBefore":"id(\"wordListsResults\")/p",
"pageElement":"id(\"wordListsResults\")",
"url":"^http://www\\.mnemonicdictionary\\.com/wordlist\\.html",
"nextLink":"id(\"wordListsResults\")/p/a"
},
{
"pageElement":"//table[@class=\"MSP9\"][1]",
"url":"^http://(?:www\\.)?whss\\.biz/~culdds/database\\.cgi\\?",
"nextLink":"//a[text()=\"NEXT\"][1]"
},
{
"pageElement":"//div[@id=\"XbcShellBody\"]/div[@class=\"XbcProfileTableContainer\"]/table[@class=\"XbcProfileTable XbcFriendsListTable\"]",
"url":"^http://live\\.xbox\\.com/[^/]+/profile/Friends\\.aspx",
"nextLink":"//div[@id=\"XbcPag\"]/a[@class=\"XbcNP\"]"
},
{
"pageElement":"id(\"posts\")/div",
"url":"^http://ubuntuforums\\.org/showthread\\.php\\?[tp]=\\d+",
"nextLink":"//div[@class=\"pagenav\"]//a[text()=\">\"]"
},
{
"pageElement":"id(\"Main\")",
"url":"^http://www\\.asahi-net\\.or\\.jp\\/~ye5n-mrfj/journal/",
"nextLink":"descendant::link[@rel=\"prev\"]"
},
{
"pageElement":"//tr[td[@class=\"boxmidlrg\"]]",
"url":"^http://www\\.orkut\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/Main",
"nextLink":"//td[@class=\"boxmidlrg\"]/form/span/a[contains(text(), \">\")]"
},
{
"pageElement":"(((.//select[@name=\"order\"]/ancestor::tr)/following-sibling::tr[.//img])[1]/descendant::table)[1]",
"url":"^http://www\\.etsy\\.com/(?:search_results|shop)\\.php",
"nextLink":"//td[@class=\"orange_link\"]/following-sibling::td[1]//a"
},
{
"pageElement":"id(\"content\")",
"url":"^http://(?:psd|net|vector|audio|ae)\\.tutsplus\\.com/",
"nextLink":"//div[@class=\"wp-pagenavi\"]/a[last()]"
},
{
"pageElement":"//*[preceding-sibling::a[@id=\"main\"]][following-sibling::table[@class=\"graph-date\"]]",
"url":"^http://www\\.yomiuri\\.co\\.jp/photonews/photo\\.htm\\?",
"nextLink":"//td[@class=\"r\"]/a"
},
{
"pageElement":"//center[descendant::img]",
"url":"^http://kato-manga\\.sakura\\.ne\\.jp/.+[0-9]{2}\\.html",
"nextLink":"//a[text()=\"\u6b21\u3078\" or descendant::img[contains(@src,\"NEXT.jpg\")]]"
},
{
"pageElement":"id(\"searchResults\")/ul",
"url":"^https://developer\\.mozilla\\.org/[^?]+\\?.*\\bsearch=",
"nextLink":"id(\"pagePagination\")/a[last()]"
},
{
"pageElement":"id(\"content-body-inner\")/div[last()]/div[@class=\"books\"]",
"url":"^http://stack\\.nayutaya\\.jp/(?:user/[^/]+/)?author/",
"nextLink":"//div[@class=\"pagination\"]/span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"contents\"]/*[self::h3 or self::*[preceding-sibling::h3]][following-sibling::ul[@class=\"pager\"]]",
"url":"^http://b\\.hatena\\.ne\\.jp/html/backstage_interview/",
"nextLink":"//ul[@class=\"pager\"]//img[contains(@src,\"_o.gif\")]/ancestor::li/following-sibling::li[1]/a"
},
{
"pageElement":"id('MainContainerFull')",
"url":"^http://gallery\\.live\\.com/results\\.aspx\\?bt=1&pl=1",
"nextLink":"id(\"ctl00_ContentPlaceHolder1_PageNext2\")"
},
{
"pageElement":"//table[@class=\"forumline\"]/tbody/tr",
"url":"^http://(?:[^.]+\\.)?atbb\\.jp/[^/]+/viewtopic\\.php\\?",
"nextLink":"//span[@class=\"nav\" and last()]/a[last() and text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"id(\"tr-maincontent2\")/div",
"url":"^http://(?:www\\.)?4travel\\.jp/traveler/[^/]+/album/",
"nextLink":"(//li[contains(concat(\" \", @class, \" \"), \" linkend \")][last()]/a[last()])[last()]"
},
{
"insertBefore":"//td[@class=\"zh\"]/../../../../*/following-sibling::node()[last()]",
"pageElement":"//td[@class=\"zh\"]/../../..",
"url":"^http://news\\.baidu\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/ns",
"nextLink":"//div[@class=\"pg\"]/a[last()][child::font]"
},
{
"insertBefore":"//div[@class=\"frame\"]/div[@class=\"main\"]/div[@class=\"page2\"]",
"pageElement":"//div[@class=\"frame\"]/div[@class=\"main\"]/ul",
"url":"^http://www\\.gumonji\\.net/cgi-bin/friend_list\\.cgi",
"nextLink":"//div[@class=\"frame\"]/div[@class=\"main\"]/div[@class=\"page2\"]/div[@class=\"pager_next\"]/a"
},
{
"pageElement":"id(\"right\")",
"url":"^http://bookweb\\.kinokuniya\\.co\\.jp/guest/cgi-bin/",
"nextLink":"id(\"right\")/div[@class=\"page-list\"]/div[@class=\"page-pw\"]/a"
},
{
"pageElement":"id(\"block_story\")/*[not(self::h3 and position()=last())]",
"url":"^http://japan\\.zdnet\\.com/[\\w/]+/story/[\\d,]+\\.htm",
"nextLink":"id(\"script_pagination_next\")"
},
{
"insertBefore":"(//table[@class=\"box\"])[last()]",
"pageElement":"//table[@class=\"entrybox\"]",
"url":"^http://community\\.livejournal\\.com/something2see/",
"nextLink":"//a[text()=\"earlier\"]"
},
{
"pageElement":"id(\"content_inner\")/div[@class=\"simage section\"]/ul[@class=\"image style01\"]",
"url":"^http://image\\.search\\.naver\\.com/search\\.naver\\?.",
"nextLink":"id(\"content_inner\")/div[@class=\"paging\"]/a[@class=\"next\"]"
},
{
"pageElement":"//div[@class=\"fileinfo\" or @class=\"fileinfo_odd\"]",
"url":"^http://www\\.(?:nyhash|sharedb)\\.info/index\\.php/.",
"nextLink":"//a[contains(text(),\"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"//table[@class=\"topiclist\"]",
"url":"^http://my\\.opera\\.com/community/forums/forum\\.dml",
"nextLink":"//p[@class=\"pagenav\"]/span[last()]/a"
},
{
"pageElement":"id(\"CenterCntBox\")//table[starts-with(@class, \"DispListTable\")]",
"url":"^http://www\\.edion\\.com/(?:disp/)?CSfDispListPage_",
"nextLink":"id(\"CenterCntBox\")//a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8 >>\")]"
},
{
"pageElement":"id(\"relyingParties\")/table/tbody/tr",
"url":"^http://mixi\\.jp/openid_history\\.pl(?:\\?page=\\d+)?",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pageNavigation01 \")]//a[starts-with(text(), \"\u6b21\u3092\")]"
},
{
"insertBefore":"//div[@class=\"page_transit cmn_cl\"]",
"pageElement":"//div[@class=\"interviewcont01\" or @class=\"interviewcont02\"]",
"url":"^http://r25\\.jp/b/honshi/a/long_interview_details/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"body\")/div[@class=\"section\"]/ul[@class=\"commentlist\"]",
"url":"^https://www\\.hatena\\.ne\\.jp/shop/benefit\\.comment",
"nextLink":"id(\"body\")/p[@class=\"pager\"]/a[@rel=\"next\"]"
},
{
"insertBefore":"//div[@class=\"mainfloatleft\"]",
"pageElement":"id(\"maincontents02\")/ul[@class=\"ulnewsmore\" or @class=\"uleventmore\"]",
"url":"^http://www\\.chuo-u\\.ac\\.jp/chuo-u/(?:news|event)/",
"nextLink":"//div[@class=\"mainfloatright\"]/a[text()=\"\u6b21\u306e10\u4ef6>>\"]"
},
{
"pageElement":"id(\"picture\")",
"url":"^http://mangahelpers\\.com/(?:[^/]+/)*read-?online/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//form[@class=\"productListForm\"]/div[contains(@class, \"productList01\")]",
"url":"^http://www\\.conran\\.ne\\.jp/shop/ProductSearch\\.do",
"nextLink":"//div[contains(@class, \"bottom\")]/div[@class=\"pageNavigation\"]/a[last()]"
},
{
"pageElement":"id(\"content\")/table",
"url":"^http://userscripts\\.org/(?:scripts|forums/|users)",
"nextLink":"id(\"content\")/div[@class=\"pagination\"]/a[contains(@rel,'next')]"
},
{
"pageElement":"//img[contains(@src,\"./image/back.gif\") or contains(@src,\"./image/next.gif\")]/ancestor::table[2]",
"url":"^http://ordermade\\.net/con/(?:sample|cr)_list\\.cgi",
"nextLink":"(//a[descendant::img[@src=\"./image/next.gif\"]])[1]"
},
{
"pageElement":"id(\"main\")/table",
"url":"^http://(?:kita\\.kitaa\\.net|10\\.niceboat\\.org)/10/",
"nextLink":"id(\"main\")/a[last()]"
},
{
"pageElement":"//div[@class=\"fpost\"]",
"url":"^http://my\\.opera\\.com/community/forums/topic\\.dml",
"nextLink":"//p[@class=\"pagenav\"]/span[last()]/a"
},
{
"pageElement":"//div[@class=\"section\"]/div[@class=\"section\"]",
"url":"^http://return0\\.dyndns\\.org/log/[^/]+/[^/]+/[^/]+",
"nextLink":"id(\"navigation\")/p/a[text()=\"<<\"]"
},
{
"pageElement":"//span[@class=\"listshopname\"]/ancestor::table[parent::div[@class=\"main\"]]/tbody/tr/td/table/tbody/tr",
"url":"^http://g\\.pia\\.co\\.jp/front/contents/pseosearch/",
"nextLink":"//span[@class=\"listlink\"]/strong/following-sibling::a[1]"
},
{
"pageElement":"id(\"right\")/div[@class=\"gallery\"]",
"url":"^http://(?:www\\.)?public-domain-photos\\.com/[^/]+",
"nextLink":"(//div[contains(concat(\" \", @class, \" \"), \" navigation \")]/a[last()])[last()]"
},
{
"pageElement":"id(\"maincol\")/div[@class=\"content\"]",
"url":"^http://gigazine\\.net/index\\.php\\?/news/comments/",
"nextLink":"id(\"maincol\")//*[contains(text(), \"\u524d\u306e\u8a18\u4e8b:\")]/a"
},
{
"pageElement":"id(\"resizeableText\")",
"url":"^http://(?:president\\.)?jp\\.reuters\\.com/article/",
"nextLink":"//span[@class=\"article_pagenation_next\"]/a"
},
{
"pageElement":"id(\"contentmid\")/div[@class=\"artikel\"]/*[not(@id=\"contentUntereGrenze\")]",
"url":"^http://(?:www\\.)?hbe-shop\\.de/katalog/index\\.php",
"nextLink":"id(\"contentUntereGrenze_links\")//a[@class=\"seitenzahl\" and contains(text(),\"weiter\")]"
},
{
"pageElement":"id(\"tenpo_list\")",
"url":"^http://demae-can\\.com/search/shop_list2\\.html\\?.",
"nextLink":"id(\"shop_count\")/a[last()]"
},
{
"pageElement":"id(\"mainContents\")\r\n",
"url":"^http://www\\.ventforet\\.co\\.jp/vfkblog/dailyblog/",
"nextLink":"//p[contains(concat(\" \",normalize-space(@class),\" \"), \" alCenter \")]/a[contains(text(), \"\u675f\")]\r\n"
},
{
"pageElement":"//form[contains(text(), \"\u753b\u50cf\u30bf\u30a4\u30c8\u30eb\")]/node()[following::input[@value=\"\u524a\u9664\"]]",
"url":"^http://sylphys\\.ddo\\.jp/upld2nd/[^/]+/[^.]+\\.htm",
"nextLink":"descendant::form[last()]"
},
{
"pageElement":"id(\"columnA_2columns\")/*[self::div[contains(@class,\"thumbnail\")] or self::br]",
"url":"^http://www\\.freecsstemplates\\.org/css-templates/",
"nextLink":"id(\"columnA_2columns\")/div[@class=\"pager\"]/a[last()]"
},
{
"pageElement":"//ul[@class=\"image-list\"]",
"url":"^http://serif\\.hatelabo\\.jp/serif_generator/image",
"nextLink":"(//a[contains(concat(\" \", @class, \" \"), \" pager-next \")][last()])[last()]"
},
{
"pageElement":"//table[@class=\"table\"]",
"url":"^http://(?:www\\.)?kakakuportal\\.com/search\\.php\\?",
"nextLink":"//a[descendant::img[@src=\"images/button_next.gif\"]]"
},
{
"insertBefore":"//form[last()]",
"pageElement":"//table",
"url":"^http://selenic\\.com/repo/index\\.cgi/hg/shortlog/",
"nextLink":"//a[text()=\"-60\"]"
},
{
"pageElement":"id(\"SerachList\")/table",
"url":"^http://rd?s\\.gnavi\\.co\\.jp/search/search\\.php\\?.",
"nextLink":"//a[descendant::font[contains(text(),\"\u6b21\")]]"
},
{
"pageElement":"id(\"result_box\")",
"url":"^http://jp\\.misumi-ec\\.com/ec/CategorySearchView/",
"nextLink":"id(\"pagerNext_0\")"
},
{
"pageElement":"id(\"detailNews\")",
"url":"^http://dailynews\\.yahoo\\.co\\.jp/.+?/news_list/\\?",
"nextLink":"id(\"mainMargin\")/div[@class=\"pagelinkArea clr\"]/ul/li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"articlebody\")",
"url":"^http://kuraki\\.livedoor\\.jp/archives/[^.]+\\.html",
"nextLink":"//div[@class=\"menu\"]/a[starts-with(text(),\"\u524d\")]"
},
{
"pageElement":"id(\"aspnetForm\")/div",
"url":"^http://minkara\\.carview\\.co\\.jp/userid/\\d+/blog/",
"nextLink":"//a[contains(@id,\"HyperLink_Next\")]"
},
{
"pageElement":"id(\"ae-datastore-entities\")",
"url":"^http://appengine\\.google\\.com/datastore/explorer",
"nextLink":"//div[@class=\"ae-paginate\"]//a[last()]"
},
{
"pageElement":"//div[table/descendant::td[@class=\"sqtdq\"]]",
"url":"^http://(?:[^.]+\\.)?thinkexist\\.com/quotes/[^/]+/",
"nextLink":"//a[img[contains(@src,\"paging/next.gif\")]]"
},
{
"pageElement":"id(\"table\")",
"url":"^http://r\\.hatena\\.ne\\.jp/(?:[^/]+/)+\\?mode=table",
"nextLink":"//a[starts-with(text(), \"<\u524d\u306e\")]"
},
{
"pageElement":"id(\"articleTextnews1\")//div[@class=\"child c2 cf\"]/div[@class=\"_LSUCS\" or (@class=\"image\" and following::div[@id=\"newsBack\"])]",
"url":"^http://sankei\\.jp\\.msn\\.com/\\w+/\\w+/\\d+/.+\\.htm$",
"nextLink":"id(\"newsNext\")[self::a]|//div[@class=\"_LSUCS\"]/p[contains(text(),\"\uff1d\")]/a[contains(text(),\"\u7d9a\u304f\")]"
},
{
"pageElement":"//table[@align=\"center\"]",
"url":"^http://wordgear\\.x0\\.com/.*diary\\.cgi\\?mode=view",
"nextLink":"//a[text()=\"\u6b21\u3078\u9032\u3080\u2191\"]"
},
{
"insertBefore":"//table[3]//table[@cellspacing=\"1\"]/following-sibling::node()",
"pageElement":"//table[3]//table[@cellspacing=\"1\"]",
"url":"^http://(?:www\\.)?utamap\\.com/searchkasi\\.php\\?.+",
"nextLink":"//a[contains(text(), \">>>\")][last()]"
},
{
"pageElement":"//div[@id=\"posts\"]/div/div[@class=\"page\"]/div",
"url":"^http://forums\\.secondlife\\.com/showthread\\.php\\?",
"nextLink":"//td[@class=\"alt1\"]/a[text()=\">\"]"
},
{
"insertBefore":"//table[@cellpadding=\"7\"]/following-sibling::node()",
"pageElement":"//table[@cellpadding=\"7\"]",
"url":"^http://(?:www\\.)?netkeiba\\.com/news/.+backnumber",
"nextLink":"//div[@align=\"center\"]/a[last()]"
},
{
"pageElement":"//div[contains(concat(\" \",@class,\" \"),\" contribution \")]",
"url":"^http://www\\.ohloh\\.net/projects/\\d+/contributors",
"nextLink":"//div[contains(concat(\" \",@class,\" \"),\" pagination \")]/a[last()]"
},
{
"pageElement":"descendant::table[contains(concat(\" \",normalize-space(@class),\" \"),\" scripts \") or contains(concat(\" \",normalize-space(@class),\" \"),\" users \")]",
"url":"^http://(?:beta\\.)?wescript\\.net/(?:script|user)s",
"nextLink":"descendant::a[contains(concat(\" \",normalize-space(@class),\" \"),\" next_page \")]"
},
{
"pageElement":"//div[contains(@class,\"trivial\")]",
"url":"^http://sea-mew\\.jp/nox/modules/webarc/2ch/[^/]+/",
"nextLink":"//a[contains(text(),\"\u6b21\u3078\")]"
},
{
"pageElement":"id(\"maincontents\")/div/div[@class=\"entry\"]",
"url":"^http://(?:www\\.)?motordays\\.com/newcar/articles/",
"nextLink":"id(\"maincontents\")//a[contains(@class,\"nextpage\")]"
},
{
"pageElement":"//table[@class=\"userTable\" or @class=\"memberTable\"]/tbody/tr",
"url":"^http://riro\\.jp/comment/(list|image|flag)\\.html",
"nextLink":"//a[@class=\"navi\" and starts-with(text(),\"\u6b21\")]"
},
{
"pageElement":"id(\"yvidweb\")/ol",
"url":"^http://video-search\\.yahoo\\.co\\.jp/web_search\\?",
"nextLink":"//a[@class=\"mmsnxtb\"]"
},
{
"pageElement":"id(\"schedules-matrix-body\")",
"url":"^http://tv\\.so-net\\.ne\\.jp/chart/[\\w/]+?\\.action",
"nextLink":"//td[@class=\"time-after\"]/a"
},
{
"pageElement":"id('content')/div[@class=\"post\"]",
"url":"^http://tumblr\\.inucara\\.net/(?:page/|search/|$)",
"nextLink":"id('footer')/a[contains(text(), \"Next\")]"
},
{
"insertBefore":"id(\"footer\")/preceding-sibling::table[1]",
"pageElement":"//table[@class=\"bumblebee\" and .//tr[@class=\"results\"]]",
"url":"^http://developer\\.apple\\.com/cgi-bin/search\\.pl",
"nextLink":"//tr[@class=\"results\"]//span[@class=\"right\"]/a[contains(., \"Next\")]"
},
{
"pageElement":"id(\"left\")/div[@class=\"leaderboard\"]/div[@class=\"content\"]/*",
"url":"^http://www\\.mygamercard\\.net/leaderboard\\.php\\?",
"nextLink":"id(\"left\")//div[@class=\"rightColumn\"]/a"
},
{
"insertBefore":"id(\"leftRes\")//div[@class=\"pg\"]",
"pageElement":"id(\"leftRes\")/table[@class=\"list\"]",
"url":"^http://mp3\\.baidu\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/m",
"nextLink":"id(\"leftRes\")//div[@class=\"pg\"]/a[last()][child::font]"
},
{
"pageElement":"id(\"newslist\")/tbody/tr",
"url":"^http://www\\.jsgoal\\.jp/news/(?:list_\\d+\\.html)?",
"nextLink":"//a[starts-with(text(), \"\u524d\u306e\")]"
},
{
"pageElement":"id(\"clublist\")/tbody/tr",
"url":"^http://www\\.jsgoal\\.jp/club/(?:list_\\d+\\.html)?",
"nextLink":"id(\"clubarea\")/div[@class=\"nextbackarea\" and position()=1]/div[@class=\"nextback\"]/a"
},
{
"pageElement":"id(\"content-body-inner\")/div[@class=\"books\"]",
"url":"^http://stack\\.nayutaya\\.jp/user/[^/]+/books/\\w+",
"nextLink":"id(\"content-body-inner\")/div[@class=\"pagination\"]/a[last()]"
},
{
"pageElement":"id(\"content\")/*",
"url":"^http://www\\.fileformat\\.info/info/unicode/char/",
"nextLink":"//a[img[@src=\"/images/20x20/vcrforward.png\"]]"
},
{
"pageElement":"//div[@class=\"inner\"]/table/tbody/tr[contains(@class, \"tr_bg\")]",
"url":"^http://book\\.akahoshitakuya\\.com/u/\\d+/favorite",
"nextLink":"//a[contains(text(), \"\u2192next\")]"
},
{
"pageElement":"id(\"main\")/div",
"url":"^http://latlonglab\\.yahoo\\.co\\.jp/macro/list\\.rb",
"nextLink":"//div[@class=\"contents\"]/a[last()]"
},
{
"pageElement":"//div[@class=\"listc\"]/*[not(self::p)]",
"url":"^http://www\\.ebest\\.co\\.jp/shop/goods/goods\\.asp",
"nextLink":"//a[contains(text(), \"\u6b21\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"//a/img[starts-with(@src,\"http://image.www.rakuten.co.jp/com/img/icon/\") or starts-with(@src,\"http://auction.thumbnail.image.rakuten.co.jp/\")]/ancestor::table[2]",
"url":"^http://esearch\\.rakuten\\.co\\.jp/rms/sd/esearch/",
"nextLink":"//a[child::*[starts-with(text(), \"\u6b21\")]]"
},
{
"pageElement":"id(\"kiji\")",
"url":"^http://itpro\\.nikkeibp\\.co\\.jp/article/lecture/",
"nextLink":"//a[@class=\"tonext\"]"
},
{
"pageElement":"id(\"rightContents\")/div[contains(@class,\"contentsBox\")]",
"url":"^http://search\\.books\\.rakuten\\.co\\.jp/bksearch/",
"nextLink":"id(\"yajirushi\")"
},
{
"pageElement":"id(\"dt2\")",
"url":"^http://search\\.rental\\.rakuten\\.co\\.jp/dvdcd/s/",
"nextLink":"//a[starts-with(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"//node()[preceding-sibling::hr and following-sibling::hr]",
"url":"^http://(?:www\\.)?alabout\\.com/list\\.php\\?sid=\\d",
"nextLink":"//a[contains(text(),\"\u6b21\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"//div[contains(@class, \"CommentList\")]",
"url":"^http://(?:www\\.)?pipa\\.jp/techan/VThreadComment",
"nextLink":"//div[contains(@class, \"PageBar\")]//a[last()-1]"
},
{
"pageElement":"id(\"aspnetForm\")/table",
"url":"^http://(?:www\\.)?designlinkdatabase\\.net/datas/",
"nextLink":"id(\"_ctl0_cphMain_lnkNext2\")"
},
{
"pageElement":"id(\"results\")/*",
"url":"^http://www\\.technorati\\.jp/(?:search|channel)/.",
"nextLink":"id(\"pages\")/ol/li[@class=\"next\"]/a"
},
{
"pageElement":"//form[@name=\"theForm\"]/table | //table[following-sibling::div[@class=\"horizontal_bar\"]][last()] | id(\"_ctl0_ContentPlaceHolder2_ProListing1_MyList\")",
"url":"^http://[^.]+\\.aventertainments\\.com/[^.]+\\.aspx",
"nextLink":"//a[font[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]] | id(\"_ctl0_ContentPlaceHolder2_RecordPagingTxt\")/a[last()]"
},
{
"pageElement":"id(\"revisions\")//tr",
"url":"^http://(?:[^.]+\\.)?jottit\\.com/[^?]+\\?m=history",
"nextLink":"id(\"pagination\")/strong/a[text()=\"Next\"]"
},
{
"pageElement":"id(\"Tertiary\")/following-sibling::table[position()=1]",
"url":"^http://(?:www\\.)?flickr\\.com/photos/[^/]+/tags/",
"nextLink":"//a[@class=\"Next\"]"
},
{
"insertBefore":"id(\"yschimgbot\")",
"pageElement":"id(\"yschimg\")",
"url":"^http://images\\.search\\.yahoo\\.com/search/images",
"nextLink":"id(\"yschnxtb\")/big/a"
},
{
"insertBefore":"//div[@class=\"Pages\"]",
"pageElement":"//div[@class=\"HoldPhotos\"]",
"url":"^http://(?:www\\.)?flickr\\.com/groups/[^/]+/pool/",
"nextLink":"//a[@class=\"Next\"]"
},
{
"pageElement":"//div[@class=\"blog\"]",
"url":"^http://(?:www\\.)?socialnetworking\\.jp/archives/",
"nextLink":"id(\"menu\")/a[1]"
},
{
"pageElement":"//table[preceding-sibling::font[@color=\"#cd5c5c\"]][following-sibling::table[descendant::a[@class=\"sLink\"]]]",
"url":"^http://(?:www\\.)?junkudo\\.co\\.jp/search2\\.jsp\\?",
"nextLink":"//img[@src=\"ar.gif\"]/.."
},
{
"pageElement":"//pre",
"url":"^http://www\\.lib\\.city\\.yokohama\\.jp/cgi-bin/Sw.",
"nextLink":"//img[@src=\"/image/next0.gif\"]/parent::*"
},
{
"pageElement":"//div[@class=\"listbody\"]",
"url":"^http://minkara\\.carview\\.co\\.jp/(?:note|parts)/",
"nextLink":"//a[contains(@id,\"HyperLink_Next\")]"
},
{
"pageElement":"//table//table//table//table[2]",
"url":"^http://(?:www\\.)?reloadbags\\.com/bags/list\\.php",
"nextLink":"//p/a[preceding-sibling::strong][1]"
},
{
"insertBefore":"//div[contains(@class, \"footer\")]",
"pageElement":"//div[contains(@class, \"main\")]",
"url":"^http://ninjin[^.]*\\.x0\\.com/wolf[^/]*/index\\.rb",
"nextLink":"//div[contains(@class, \"main\")]/a[last()]"
},
{
"pageElement":"id(\"content\")",
"url":"^https?://ubiquity\\.mozilla\\.com/trac/report/\\d",
"nextLink":"//span[@class=\"next\"]/a"
},
{
"pageElement":"id(\"page-body\")//ul[contains(concat(\" \",@class,\" \"), \" topics \")]",
"url":"^http://forums\\.mozillazine\\.org/viewforum\\.php",
"nextLink":"id(\"page-body\")//a[contains(concat(\" \",@class,\" \"), \" right \")]"
},
{
"pageElement":"id(\"ContentsBlog\")/*",
"url":"^http://(?:www\\.)?pipa\\.jp/tegaki/VBlog\\.jsp\\?.",
"nextLink":"//td[@class=\"Navi_P\"]/a"
},
{
"pageElement":"//*[contains(concat(\" \", @class, \" \"), \" list \") or contains(concat(\" \", @class, \" \"), \" communityBlock \")]",
"url":"^http://mixi\\.jp/search_(?:diary|community)\\.pl",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pageNavigation01 \")]//a[starts-with(text(), \"\u6b21\u3092\")]"
},
{
"insertBefore":"id(\"page-body\")/div[@class=\"topic-actions\"][2]",
"pageElement":"id(\"page-body\")/div[starts-with(@class, \"post\")]",
"url":"^http://forums\\.mozillazine\\.org/viewtopic\\.php",
"nextLink":"//a[starts-with(@href, \"./viewtopic.php\") and text()=\"Next\"]"
},
{
"pageElement":"//div[@class=\"jive-search-results\"]/ol",
"url":"^http://forums\\.oracle\\.com/forums/search\\.jspa",
"nextLink":"//a[text()=\"Next\"]"
},
{
"pageElement":"id(\"hyouji\")/following-sibling::div[@class=\"navipage_\"][1]/following-sibling::*[./following-sibling::*/descendant-or-self::div[@class=\"navipage_\"]]",
"url":"^http://(?:[es]c\\.)?akizukidenshi\\.com/catalog/",
"nextLink":"id(\"hyouji\")/following-sibling::div[@class=\"navipage_\"]/a[img[starts-with(@alt,\"\u6b21\")]]"
},
{
"pageElement":"//div[@class=\"commentlinks\"]",
"url":"^http://\\w+\\.engadget\\.com/\\d{4}/\\d{2}/\\d{2}/.+",
"nextLink":"id(\"cmt_paging\")/strong/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"box_w_data\"]/parent::div",
"url":"^http://(?:www\\.)?eroshare\\.com/(?:$|all/|tag/)",
"nextLink":"//span[@class=\"paginations\"][number(text())>0]/following::a[1]"
},
{
"insertBefore":"id(\"pages\")",
"pageElement":"id(\"pages\")/preceding-sibling::*",
"url":"^http://www\\.nikkeibp\\.co\\.jp/style/secondstage",
"nextLink":"id(\"p_next\")"
},
{
"insertBefore":"id(\"main\")/div[@class=\"page2\"]",
"pageElement":"id(\"main\")/div[@class=\"bbs\"]/div[@class=\"comment_body\"]",
"url":"^http://(?:www\\.)?gumonji\\.net/cgi-bin/bbs\\.cgi",
"nextLink":"id(\"main\")/div[@class=\"page2\"]/div[@class=\"pager_next\"]/a"
},
{
"insertBefore":"id(\"kiji\")/following-sibling::node()[1]",
"pageElement":"id(\"kiji\")",
"url":"^http://itpro\\.nikkeibp\\.co\\.jp/article/COLUMN/",
"nextLink":"//img[@src=\"/image/2006/leaf/next.gif\"]/.."
},
{
"pageElement":"(//*[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"])[1]/ancestor::table[1]/following-sibling::table[1]",
"url":"^http://biz\\.yahoo\\.co\\.jp/stockholder/search\\?",
"nextLink":"//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"id(\"contents\")//div[@class=\"article\"]/descendant::span[starts-with(@class, \"article_inner\")][last()]/*[not(@class=\"archiveheader\")]",
"url":"^http://v\\.japan\\.cnet\\.com/(?!\\d{4}/templates)",
"nextLink":"id(\"contents\")//div[contains(concat(\" \", @class, \" \"), \" paging \")]//li[@class=\"rsaquo\"]/a"
},
{
"pageElement":"//div[@class=\"pagenate\"][1]/following-sibling::*[not(@class=\"pagenate\") and not(@class=\"adsense\")]",
"url":"^http://(?:www\\.)?(?:ura-)?rephoto\\.orig\\.jp/.+",
"nextLink":"//div[@class=\"pagenate\"]/a[text()=\"\u6b21 >\"]"
},
{
"pageElement":"id(\"ZSEARCH_ZR_home-searccolumn-searchlist\")",
"url":"^http://zozo\\.jp/_search/search_result\\.html\\?.",
"nextLink":"id(\"ZSEARCH_ZR_home-searccolumn-searchpage-all2\")/a[contains(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"gsContent\")",
"url":"http://imagebase\\.davidniblack\\.com/main\\.php\\?",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"descendant::*[.//span[@class=\"AUTHOR\"] and .//*[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]][last()]/*[not(.//a[text()=\"\u30ed\u30b0\u30a4\u30f3\"]) and following-sibling::*/descendant-or-self::*[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]]",
"url":"^http://(?:blog\\.excite\\.co|[^.]+\\.exblog)\\.jp/",
"nextLink":"//a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"id(\"vf\")",
"url":"^http://forum\\.ubuntulinux\\.jp/viewforum\\.php\\?",
"nextLink":"//div[@class=\"linksb\"]/div/p[@class=\"pagelink conl\"]/strong/following-sibling::a"
},
{
"pageElement":"id(\"center\")/div[4]",
"url":"^http://(?:www\\.)?picfor\\.me/(?:popular|recent)",
"nextLink":"//div[@class=\"next\"]/.."
},
{
"pageElement":"//center",
"url":"^http://(?:www\\.)?big-men\\.net/face/joyful\\.cgi",
"nextLink":"//td/b/following-sibling::a[1]"
},
{
"pageElement":"//tr[td[@id=\"TDlink\"] and position()>1]",
"url":"^http://(?:www\\.)?loadingvault\\.com/search\\.php",
"nextLink":"//a[text()=\">\"]"
},
{
"pageElement":"id(\"main_area\")/div[contains(@class, \"movie_block\")]",
"url":"^http://(?:beta\\.)?nantokadoga\\.com/search\\.php",
"nextLink":"//div[@class=\"paging\"]/a[not(following-sibling::a)]"
},
{
"pageElement":"//div[@class=\"archiveList\"]",
"url":"^http://mixi\\.jp/(?:re(?:cent|s)|list)_echo\\.pl",
"nextLink":"//div[@class=\"pageNavigation01\"]//a[text()=\"\u6b21\u3092\u8868\u793a\"]"
},
{
"pageElement":"//div[@class=\"aw_tb\"] | //p[@class=\"rev\"] | //div[@class=\"bd\"]",
"url":"^http://info\\.movies\\.yahoo\\.co\\.jp/userreview/",
"nextLink":"//p[@class=\"flR\" and position()=3]/a[text()=\"\u6b21\u306e10\u4ef6\"]"
},
{
"pageElement":"//td[descendant::form[@action=\"/\"]]/div",
"url":"^http://db\\.netkeiba\\.com/(?:horse/bbs|.*board)",
"nextLink":"//td[descendant::form[@action=\"/\"]]/p[@class=\"ml\"]/a[last()]"
},
{
"pageElement":"//table[@class='maintable']",
"url":"^http://www\\.underground-gamer\\.com/browse\\.php",
"nextLink":"//b[contains(text(),'Next >>')]"
},
{
"pageElement":"//table[@border=\"2\"]",
"url":"^http://(?:www\\.)?domo2\\.net/search/search\\.cgi",
"nextLink":"//a[starts-with(text(), \"\u6b21\")]"
},
{
"pageElement":"id(\"searchtable\")/tbody/tr",
"url":"^http://sourceforge\\.net/s(?:earch|oftwaremap)/",
"nextLink":"id(\"searchtable\")/tfoot/tr/td/form/a[last()]"
},
{
"pageElement":"//table[@class='tablebg']",
"url":"^http://www\\.ngamer\\.es/foros/viewtopic\\.php\\?",
"nextLink":"//a[contains(text(),'Siguiente')]"
},
{
"pageElement":"//*",
"url":"^http://www\\.geocities\\.co\\.jp/SweetHome/1863/",
"nextLink":"//a[last()]"
},
{
"pageElement":"//p[@class=\"time\"]/following-sibling::*[not(p[@class=\"pagenp\"]) and not(@class=\"acolumn\") and (following::self[@class=\"acolumn\"] or following::p[@class=\"pagenp\"])]",
"url":"^http://www\\.computerworld\\.jp/(?:topic|new)s/",
"nextLink":"id(\"article\")/div[@class=\"boxadd\"]/p/*/following-sibling::a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\u3078\")]"
},
{
"pageElement":"id(\"discographyContentWrapper\")/div[position()>1 and position()< last()]",
"url":"^http://(?:www\\.)?8bitpeoples\\.com/discography",
"nextLink":"//div[@class=\"discographyPagesBlock\"]/a[contains(text(), \"NEXT\")]"
},
{
"pageElement":"id(\"_ctl0_MainContentHolder_prolisting1_MyList\")/tbody/tr",
"url":"^http://(?:[^.]+\\.)?avfantasy\\.com/[^.]+\\.aspx",
"nextLink":"//a[font[text()=\"Next\"]]"
},
{
"insertBefore":"//hr/following-sibling::table[@align=\"right\"]",
"pageElement":"//hr/following-sibling::table[@align=\"right\"]/preceding-sibling::node()[not(self::center or self::p or self::hr and @width)]",
"url":"^http://[^.]+\\.2chan\\.net/[^/]+/[\\da-z]+\\.htm$",
"nextLink":"//form[substring(@action, string-length(@action) - string-length(\".htm\") + 1) = \".htm\"][last()]"
},
{
"pageElement":"//table[preceding-sibling::table[@cellpadding=\"3\"]][following-sibling::img[@src=\"/shop/image/spacer.gif\"]]",
"url":"^http://www\\.tsutaya\\.co\\.jp/shop/dis-l\\.zhtml",
"nextLink":"//a[contains(@href,\"dis-l.zhtml\")][text()=\"\u6b21\u3078\uff1e\"]"
},
{
"insertBefore":"id(\"threadslist\")/following-sibling::node()",
"pageElement":"id(\"threadslist\")",
"url":"^http://forums\\.civfanatics\\.com/forumdisplay.",
"nextLink":"//a[text()=\">\"]"
},
{
"pageElement":"//tr",
"url":"^http://www2\\.jasrac\\.or\\.jp/eJwid/main\\.jsp\\?",
"nextLink":"//a[descendant::img[@src=\"img/nextArrowOn.png\"]]"
},
{
"insertBefore":"id(\"pgnm2\")",
"pageElement":"id(\"cnt\")/div[@class=\"htkt\"]",
"url":"^http://www\\.feecle\\.jp/blog/hitokoto\\.php\\?b=",
"nextLink":"id(\"pgnm2\")/ul[@class=\"prnx\"]/li[@class=\"next\"]/a"
},
{
"pageElement":"//table[@class=\"forumline\"]",
"url":"^http://forums\\.mozillazine\\.jp/viewforum\\.php",
"nextLink":"//td[@class=\"bodyline\"]/form/table[last()]/tbody/tr[1]/td[last()]/span[@class=\"nav\" and last()]/a[last()]"
},
{
"pageElement":"id(\"tcmainlay\")",
"url":"^http://[^.]+\\.ap\\.teacup\\.com/[^/]+/\\d+\\.html",
"nextLink":"//div[@class=\"nextpage\"]/a[last()]"
},
{
"insertBefore":"http://ajaxrain.com/tagcloud.php?tag=jquery",
"pageElement":"//div[@class=\"scriptdis\"]",
"url":"^http://(?:www\\.)ajaxrain\\.com/tagcloud\\.php\\?",
"nextLink":"//a[@class=\"paging1\"]"
},
{
"pageElement":"id(\"zebra\")/table[@class=\"qlist\"]",
"url":"^http://(?:www\\.)?moug\\.net/faq/viewforum\\.php",
"nextLink":"id(\"center\")/div[@class=\"txtC\"]/a[starts-with(text(),\"\u6b21\u3078\")]"
},
{
"pageElement":"//table[@class=\"tabular_data\"]",
"url":"^http://(?:www\\.)?pledgie\\.org/explore/pledges",
"nextLink":"//div[@class=\"pagination\"]//a[last()]"
},
{
"pageElement":"//table[@class=\"medium\"]",
"url":"^http://www\\.hikari-one\\.com/tv/vod/sakuhin/.+",
"nextLink":"//p[@class=\"medium top10 bot10\"]/a[text()=\"\u6b21\u306e\u7d50\u679c\"]"
},
{
"pageElement":"id(\"maintable\")",
"url":"^http://www\\.empireonline\\.com/500/[0-9]+\\.asp",
"nextLink":"//img[@name=\"img1\"]/parent::a"
},
{
"pageElement":"id(\"index_content\")//table[@summary=\"\u4e00\u89a7\"]",
"url":"^http://www\\.niconicommons\\.jp/(?:recent|tag)/",
"nextLink":"id(\"index_content\")//a[@class=\"arrow_next\"]"
},
{
"insertBefore":"//form[@name=\"form2\"]",
"pageElement":"//form[@name=\"form2\"]/ancestor::td[2]/table/tbody/tr/td/table[position()!=last()]",
"url":"^http://www\\.hmv\\.co\\.jp/search/index\\.asp\\?.+",
"nextLink":"//form[@name=\"form2\"]//table/tbody/tr/td[8]/a[last()]"
},
{
"pageElement":"//ol[@class=\"searchList\"]",
"url":"^http://search\\.nifty\\.com/websearch/search\\?.",
"nextLink":"//span[@class=\"next\"]/a"
},
{
"pageElement":"id(\"content\")//ol[contains(concat(\" \", @class, \" \"), \" statuses \")] | id(\"content\")//table[contains(concat(\" \", @class, \" \"), \" doing \")]",
"url":"^ttps?://(?:(?:api|explore|m)\\.)?twitter\\.com/",
"nextLink":"//a[contains(concat(\" \", translate(normalize-space(@rel), \"EPRV\", \"eprv\"), \" \"), \" prev \") or contains(concat(\" \", translate(normalize-space(@rel), \"ENTX\", \"entx\"), \" \"), \" next \")]"
},
{
"pageElement":"(id(\"articleHead artHeader\")|id(\"contdefault\")/h1)/following-sibling::*[not(@class=\"newauthor\" or @class=\"sbm\") and following::div[contains(@class, \"pager\") or contains(@class, \"pages pgbottom\")]]",
"url":"^http://(?:www\\.)?ascii\\.jp/elem/(?:[^/]+/){4}",
"nextLink":"//a[@class=\"next\" or parent::span[@class=\"next\"]]| //span[@class=\"next\" and last()]/a[contains(text(),\"\u6b21\")]"
},
{
"pageElement":"//div[@class=\"content\"]/child::*[not(@class=\"navigation\")]",
"url":"^http://google-mania\\.net/(?:$|tag/|archives/)",
"nextLink":"//div[@class=\"navigation\"]/div[@class=\"alignleft\"]/a"
},
{
"pageElement":"id(\"LeftCullum\")",
"url":"^http://(?:www\\.)?webdesign(?:file|clip)\\.com/",
"nextLink":"//div[@class=\"wp-pagenavi\"]/a[last()-1]"
},
{
"pageElement":"id(\"headmenu\")/following-sibling::*[following-sibling::*[(descendant::img[@src=\"/images/next2.gif\" or @src=\"/images/prev.gif\"]) or (descendant::img[@src=\"/images/thispag2.gif\"] and not(preceding-sibling::*/descendant::img[@src=\"/images/next2.gif\" or @src=\"/images/prev.gif\"]))]]",
"url":"^http://(?:www|jibun)\\.atmarkit\\.co\\.jp/.*five",
"nextLink":"//img[@src=\"/images/thispag2.gif\"]/ancestor::tr/following-sibling::tr[1]//a"
},
{
"pageElement":"id(\"maincontent\")/*[position() > 1 and position() < 4]",
"url":"^http://yourfilehost-browser\\d?\\.opal\\.ne\\.jp/",
"nextLink":"//a[contains(@title,\"Go to Next Page\")]"
},
{
"pageElement":"//table[@class=\"data_table\"]/tbody/tr[2]",
"url":"^http://www\\.slmame\\.com/admin/atja_point\\.php",
"nextLink":"//div[@class=\"block\"]/a[starts-with(text(),\"\u675f\")]"
},
{
"pageElement":"id(\"searchresult\")/div[@class=\"content\"]/div[contains(@class,\"unit\")]",
"url":"^http://search-web\\.slmame\\.com/cgi-bin/search",
"nextLink":"id(\"searchresult\")//p[contains(concat(\" \",@class,\" \"),\" pager \") and last()]/a[last() and contains(text(),\"\u6b21\")]"
},
{
"pageElement":"id(\"wikipedia\")",
"url":"^http://(?:www\\.)?flinker\\.jp/keyword/fkeyword",
"nextLink":"id(\"wikipedia\")/following::div[@class=\"right\"]/a"
},
{
"insertBefore":"//td[@width=\"540\" and @align=\"center\"]/ancestor::table[last()]/following-sibling::node()[1]",
"pageElement":"//td[@width=\"540\" and @align=\"center\"]/ancestor::table[last()]",
"url":"^http://portal\\.nifty\\.com/special\\d+/\\d+/\\d+/",
"nextLink":"//td[@width=\"540\" and @align=\"center\"]//a[contains(string(.),\"\uff1e\")]"
},
{
"pageElement":"//div[@class=\"page_left\"]/div[(position() > 2) and (position() < last() - 1)]",
"url":"^http://xlink\\.planex\\.co\\.jp/procedure_74_jp/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"results\")",
"url":"^https?://ubiquity\\.mozilla\\.com/trac/search\\?",
"nextLink":"//span[@class=\"next\"]/a"
},
{
"pageElement":"id(\"mp-ie\")/preceding-sibling::*",
"url":"^http://(jbpress|wedge)\\.ismedia\\.jp/articles/",
"nextLink":"id(\"multipage\")/div[@class=\"next_p\"]//a[last()]"
},
{
"pageElement":"id('main')",
"url":"^http://[^.]+\\.asablo\\.jp/blog/(?:$|\\?offset=)",
"nextLink":"id(\"navi-top\")/a[last()]"
},
{
"pageElement":"//div[@class=\"detail\"]/ol",
"url":"^http://100\\.yahoo\\.co\\.jp/(?:search|category)",
"nextLink":"//span[@class=\"listNext\"]/a"
},
{
"pageElement":"//div[@class=\"review-list\"]",
"url":"^http://[ru]\\.tabelog\\.com/.+/(rst|dtl)?rvwlst",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//div[@class=\"torikumi_boxbg\"]|//table[following-sibling::div[@class=\"torikumi_boxbg\"]]",
"url":"^http://sumo\\.goo\\.ne\\.jp/hon_basho/hoshitori/",
"nextLink":"//td[a[contains(@href,\"hoshitori\")]][preceding-sibling::td[strong or b]][1]/a"
},
{
"insertBefore":"id(\"content\")/p",
"pageElement":"id(\"content\")/*[@class=\"item\" or @class=\"ishinfo\" or @class=\"ishno\" or @class=\"ishdate\"]",
"url":"^http://(?:[^.]+\\.)?alistapart\\.com/articles/*",
"nextLink":"//a[starts-with(., \"Next page\")]"
},
{
"insertBefore":"//div[contains(@class, \"photo-info\")]",
"pageElement":"//div[contains(@class, \"photo-body\")]",
"url":"^http://\\w+\\.engadget\\.com/photos/[^/]+/[^/]+/",
"nextLink":"//div[contains(@class, \"photo-body\")]/a"
},
{
"pageElement":"//*[preceding-sibling::div[@class=\"pager1\"]][following-sibling::div[@class=\"pager2\"]]",
"url":"^http://www\\.microsoft\\.com/japan/powerpro/TF/",
"nextLink":"//span[@class=\"next\"]/a"
},
{
"pageElement":"id(\"widgets_list\")",
"url":"^http://(?:www\\.)?chumby.com/guide/category/.+",
"nextLink":"//div[@class=\"paginator\"]//a[@class=\"current_page\"]/following-sibling::a[1]"
},
{
"pageElement":"id('article')",
"url":"^http://event\\.media\\.yahoo\\.co\\.jp/nikkeibp/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"insertBefore":"id(\"albumnav\")",
"pageElement":"id(\"mypix\")",
"url":"^http://my\\.opera\\.com/[^/]+/albums/show\\.dml",
"nextLink":"id(\"albumnav\")/p[@class=\"pagenav\"]/span[last()]/a"
},
{
"pageElement":"//table[contains(@class, \"goods_search_list_style\")]",
"url":"^http://www\\.nagomi\\.ne\\.jp/Page/GOODS_SEARCH",
"nextLink":"//a[@title=\"\u6b21\u306e\u30da\u30fc\u30b8\u3078\"]"
},
{
"insertBefore":"id(\"vsPagination\")",
"pageElement":"id(\"setThumbs\")",
"url":"^http://(?:www\\.)?flickr\\.com/photos/.+/sets/",
"nextLink":"//a[@class=\"Next\"]"
},
{
"pageElement":"id(\"zebra\")/table[@class=\"qlist\"]",
"url":"^http://(?:www\\.)?moug\\.net/faq/search\\.php\\?",
"nextLink":"id(\"center\")/table//a[starts-with(text(),\"\u6b21\u3078\")]"
},
{
"pageElement":"id(\"STContent\")",
"url":"^http://www\\.okidata\\.co\\.jp/dtp/\\w+/.+\\.html",
"nextLink":"id(\"STContent\")/table[@class=\"table-standard-noborder\"]//td[@align=\"right\"]/p/a"
},
{
"pageElement":"//div[contains(@class, \"articles\")]/div[@class=\"btnlist\"]/following-sibling::node()[not(self::div[@class=\"ctrl\"]) and following::div[(@id=\"notice\") or (@id=\"red\" and @class=\"box\")]]",
"url":"^http://(?:mag\\.)?executive\\.itmedia\\.co\\.jp/",
"nextLink":"id(\"next\")/a"
},
{
"insertBefore":"//div[contains(@class,\"bottombar\")]",
"pageElement":"id('lt_catalog_list')",
"url":"^http://www\\.librarything\\.com/catalog_bottom",
"nextLink":"(//a[contains(@class,\"pageShuttleButton\")])[last()]"
},
{
"pageElement":"id('searchResult')/table",
"url":"^http://(?:www\\.)?nikkeibook\\.com/errata\\.php",
"nextLink":"id('searchResult')//a[contains(text(), \">>\")]"
},
{
"pageElement":"id(\"page\")/div[contains(@class, \"floatRight\")]",
"url":"^http://www\\.smileycat\\.com/design_elements/.",
"nextLink":"id(\"page\")/div[contains(@class, \"floatRight\")]/p[last()]/a[preceding-sibling::text()[contains(self::text(), \"Page\")]][1]"
},
{
"pageElement":"id(\"category main-inner\")",
"url":"^http://web\\.doujindou\\.com/(?:category|new)/",
"nextLink":"//a[contains(text(), \"\u6b21\u306e\u30ea\u30b9\u30c8\")]"
},
{
"insertBefore":"//b[contains(text(), \"Next >>\")]/ancestor::p[1]",
"pageElement":"//img[contains(@src,\"pic/dl.gif\")]/ancestor::table[1]",
"url":"^http://(?:[^.]+\\.)?empornium\\.us/browse\\.php",
"nextLink":"//center/p[last()]/a[last()]"
},
{
"insertBefore":"id(\"showcase\")/p[@class=\"foot\"]",
"pageElement":"id(\"showcase\")",
"url":"^http://www\\.csselite\\.com/category/showcase/",
"nextLink":"id(\"showcase\")/p[@class=\"pagenav\"][2]/a[contains(text(),\"Next\")]"
},
{
"pageElement":"//table[contains(concat(' ',@class,' '),\" newslist \")]/tbody/tr",
"url":"^http://www\\.fezero\\.jp/notice_newslist\\.aspx",
"nextLink":"id(\"ctl00_ctl00__MainContent__MainContent__NextPage\")[descendant::img[@src=\"/images/com/button_next.gif\"]]"
},
{
"pageElement":"//table[@class=\"tabTable\"]",
"url":"^http://(?:www\\.)?ontonson\\.com/index\\.php\\?.",
"nextLink":"//a[@title=\" \u6b21\u306e\u30da\u30fc\u30b8 \"]"
},
{
"pageElement":"//td[@class=\"main01\"]/table[last()]",
"url":"^http://www\\.tbs\\.co\\.jp/gacchiri/[^.]+\\.html",
"nextLink":"//td[@class=\"main01\"]/table[last()]/tbody/tr[2]/td[2]/div[last()]/a"
},
{
"pageElement":"id(\"search_contents\")",
"url":"^http://(?!www)(?:[^.]+\\.)?fooooo\\.com/search",
"nextLink":"id(\"pg_area\")/span/following-sibling::a"
},
{
"pageElement":"id(\"index\")/following-sibling::tr",
"url":"^http://(?:www\\.)?freespot\\.com/map/list\\.php",
"nextLink":"//a[text()=\"\u6b21\u3092\u8868\u793a\"]"
},
{
"pageElement":"//td[@class=\"repo_mainbox\"]/parent::tr",
"url":"^http://www\\.carview\\.co\\.jp/road_impression/",
"nextLink":"//div[@class=\"next\"]/a"
},
{
"pageElement":"id(\"ynsubnav\")/following-sibling::table[2]//table[3]//table[position()>1 and position()<last()]",
"url":"^http://backnumber\\.dailynews\\.yahoo\\.co\\.jp/",
"nextLink":"id(\"ynsubnav\")/following-sibling::table[2]//a[(contains(@href,\"prevnect\") and contains(text(),\"\u6b21\")) and last()]"
},
{
"pageElement":"//td[contains(@class,\"bbsCont1\")]/table[contains(@class,\"bbsContEnt\")]",
"url":"^http://(?:www\\.)?[^-]+-bbs\\.com/cgi-bin/bbs/",
"nextLink":"//a[starts-with(@href,\"?page=\") and preceding-sibling::b]"
},
{
"pageElement":"id(\"ListProducts\")",
"url":"^http://(?:www\\.)?takeoff-clothing\\.com/shop/",
"nextLink":"id(\"pageNaviBottom\")/a[@title=\"next page\"]"
},
{
"pageElement":"id(\"resultstable\")//tr",
"url":"^http://code\\.google\\.com/p/(?:[^/]+/){2}list",
"nextLink":"id(\"bub\")//div[contains(concat(\" \", @class, \" \"), \" pagination \")]/a[contains(., \"\ue280\")]"
},
{
"insertBefore":"id(\"select\")",
"pageElement":"id(\"results\")",
"url":"^http://(?:www\\.)?haskell\\.org/hoogle/3/\\?q=.",
"nextLink":"id(\"select\")/a[@class=\"active\"]/following-sibling::a[1]"
},
{
"insertBefore":"//td[@width=\"640\" and @align=\"center\"]/ancestor::table[last()]/following-sibling::node()[1]",
"pageElement":"//td[@width=\"640\" and @align=\"center\"]/ancestor::table[last()]",
"url":"^http://portal\\.nifty\\.com/[0-9a-z]+/\\d+/\\d+/",
"nextLink":"(//td[@width=\"640\" and @align=\"center\"]//a[contains(string(.), \"\uff1e\")])[last()]"
},
{
"pageElement":"//div[@class=\"forum_content_main\"]",
"url":"^http://www\\.mobile01\\.com/topicdetail\\.php\\?",
"nextLink":"//a[@class=\"page\"][contains(., \"\u4e0b\u4e00\")]"
},
{
"insertBefore":"//form/center/table[@width=\"95%\"]/following-sibling::*",
"pageElement":"//form/center/table[@width=\"95%\"]",
"url":"^http://nijinochocolate\\.homelinux\\.net/niji/",
"nextLink":"(//form/center/span/a[text()=\"\u6b21\"])[last()]"
},
{
"pageElement":"//b[.=\"Next>\"]/ancestor::table[2]//table[contains(.,\"suitable\")]",
"url":"^http://(?:www\\.)?sexydesktop\\.co\\.uk/.+\\.htm",
"nextLink":"//b[.=\"Next>\"]/parent::a"
},
{
"insertBefore":"//form[@name=\"narabi\"]/following-sibling::table[2]",
"pageElement":"//form[@name=\"narabi\"]/following-sibling::table[1]",
"url":"^http://www\\.bh-jinbocho\\.com/zkin/bhj_search",
"nextLink":"//img[@src=\"/img/next.gif\"]/parent::a"
},
{
"pageElement":"id(\"read\")",
"url":"^http://(?:www\\.)?coolboys\\.jp/pic/face\\d\\d?/",
"nextLink":"id(\"page\")/a[contains(text(),\"\u6b2120\u4ef6\")]"
},
{
"pageElement":"id(\"alpha-inner\")/div[position() > 1 and position() < 12]",
"url":"^http://[^.]+\\.vox\\.com/explore/neighborhood/",
"nextLink":"//div[@class=\"pager-inner\"]/ul/li[@class=\"item next\"]/a"
},
{
"pageElement":"//table[@class=\"result\"]//tr[position()!=1]",
"url":"^http://www\\.chefkoch\\.de/(?:rs/s|suche\\.php)",
"nextLink":"//strong/a[contains(text(),\"n\u8fb0chste\")]"
},
{
"insertBefore":"//hr",
"pageElement":"//dl",
"url":"^http://yui\\.cynthia\\.bne\\.jp/test/read\\.cgi/",
"nextLink":"//a[text()=\"\u6b2125\"]"
},
{
"insertBefore":"id(\"pager\")",
"pageElement":"(//div[@class=\"results\"]/*[not(self::h2) and not(@id=\"pager\") and not(self::p)] | //div[@class=\"results\"]/text())",
"url":"^http://(?:www\\.)?filestube\\.com/search\\.html",
"nextLink":"id(\"pager\")/a[text()=\"Next\"]"
},
{
"pageElement":"//table[@class=\"repo\"]",
"url":"^https?://github\\.com/(?:repositories|search)",
"nextLink":"//a[@hotkey=\"l\"]"
},
{
"pageElement":"id(\"tmplBody\")|id(\"update\")/following-sibling::*[not(@class=\"ctrl\") and not(@id=\"notice\") and following::*[@class=\"ctrl\"]]",
"url":"^http://bizmakoto\\.jp/bizid/articles/.+\\.html",
"nextLink":"id(\"next\")/a"
},
{
"pageElement":"id(\"mb_title\")/following-sibling::node() | id(\"author_profile\")",
"url":"^http://www\\.nikkeibp\\.co\\.jp/style/biz/abc/",
"nextLink":"id(\"pages\")/tbody/tr/td[last()]/a"
},
{
"pageElement":"//*[@class=\"category_itemnamelink\"]/../../../..",
"url":"^http://item\\.rakuten\\.co\\.jp/(?:[^/]+/)+?c/",
"nextLink":"//*[@class=\"selectb\"]/a[contains(text(), \"\u6b21\u306e\")]"
},
{
"pageElement":"id('main_frame')/div[@class=\"pa_t10\"][2]",
"url":"^http://(?:www\\.)?tvais\\.jp/more_list\\.php.+",
"nextLink":"id('main_frame')/div[4]/div/table/descendant::td/a[last()]"
},
{
"pageElement":"//div[@class=\"ImgCenter\"]",
"url":"^http://www\\.asahi\\.com/travel/rail/gallery/",
"nextLink":"//p[@class=\"Next\"]/a"
},
{
"insertBefore":"id(\"intelliTxt\")/following-sibling::node()[1]",
"pageElement":"id(\"intelliTxt\")",
"url":"^http://www\\.oreillynet\\.com/pub/a/.+?\\.html",
"nextLink":"id(\"page-break\")//p[@class=\"secondary\"]/a[last()]"
},
{
"insertBefore":"(//div[@class=\"clearFix pagingNavi2\"])[last()]",
"pageElement":"id(\"newestImages2\")",
"url":"^http://blogs\\.yahoo\\.co\\.jp/[^/]+/GALLERY/.",
"nextLink":"//p[@class=\"forwardNext\"]/a[2]"
},
{
"pageElement":"id(\"index\")/div[position()!=1 and position()!=last()]",
"url":"^http://wiredvision\\.jp/(?:news|blog)/[^/]+/",
"nextLink":"id(\"index\")/div[1]/p[@class=\"forward\"]/a"
},
{
"pageElement":"//tr[@class=\"itemviewColor02\"]/following-sibling::tr",
"url":"^http://kakaku\\.com/item/[^/]+/pricehistory/",
"nextLink":"//a[@class=\"arrowNext01\"]"
},
{
"insertBefore":"//div[@class=\"pager\"][last()]",
"pageElement":"id(\"hourlyreport\")/table",
"url":"^http://counter\\.hatena\\.ne\\.jp/.+?/report\\?",
"nextLink":"//div[@class=\"pager\"][last()]/a[last()]"
},
{
"pageElement":"id(\"left\")/div[@class=\"leaderboard\"]/div[@class=\"content\"]",
"url":"^http://[^.]+\\.mygamercard\\.net/clboard\\.php",
"nextLink":"//div[@class=\"rightColumn\"]/a"
},
{
"pageElement":"//div[@class=\"archive_detail_inner\" or @class=\"archive_index_inner\"]",
"url":"^http://(?:www\\.)?voiceplus-php\\.jp/archive/",
"nextLink":"//*[@class=\"archive_detail_page\" or @class=\"backnumber_links\"]//a[text()=\"\u6b21\"]"
},
{
"insertBefore":"id(\"national-giographic\")/p[contains(@class,\"more\")]",
"pageElement":"id(\"national-giographic\")/div[contains(@class,\"entryBody\")]",
"url":"^http://news\\.nifty\\.com/cs/magazine/detail/",
"nextLink":"id(\"national-giographic\")/p[contains(@class,\"more\")]/a"
},
{
"insertBefore":"id(\"lastpost\")",
"pageElement":"id(\"posts\")/div/div/parent::node()",
"url":"^http://forums\\.civfanatics\\.com/showthread.",
"nextLink":"//a[text()=\">\"]"
},
{
"insertBefore":"//center/center[2]",
"pageElement":"//center/table[2]",
"url":"^http://www\\.getchu\\.com/php/calendar\\.phtml",
"nextLink":"//center/a[last()]"
},
{
"insertBefore":"id(\"Main\")/div[@class=\"Pages\"]",
"pageElement":"id(\"Main\")/div[@class=\"HoldPhotos\"]",
"url":"^http://(?:www\\.)?flickr\\.com/photos/friends",
"nextLink":"id(\"Main\")/div[@class=\"Pages\"]/div[@class=\"Paginator\"]/a[@class=\"Next\"]"
},
{
"insertBefore":"//div[@class=\"bPost bPostpublished\"][last()]/following-sibling::h2",
"pageElement":"//div[@class=\"bPost bPostpublished\"]",
"url":"^http://www\\.feedfinder\\.net/you_sexy_thing/",
"nextLink":"//a[contains(text(), \"Next Page\")][last()]"
},
{
"pageElement":"id(\"punwrap\")",
"url":"^http://bbs\\.archlinux\\.org/viewtopic\\.php\\?",
"nextLink":"id(\"punviewtopic\")/div[@class=\"postlinksb\"]/div[@class=\"inbox\"]/p[@class=\"pagelink conl\"]/strong/following-sibling::a[1]"
},
{
"pageElement":"id(\"wrapper\")",
"url":"^http://(?:www\\.)?glendenny\\.com/Portfolios/",
"nextLink":"id(\"arrows\")//a[contains(text(), \">\")] "
},
{
"pageElement":"id(\"main\")/div[contains(@class,\"kiji\")]",
"url":"^http://fxwiki\\.blog63\\.fc2\\.com/(?:$|page-)",
"nextLink":"id(\"page_navi\")/table/tbody/tr/td[last()]/a"
},
{
"pageElement":"//div[@class=\"bloc01\"]/div",
"url":"^http://(?:www\\.)?k-seven\\.co\\.jp/blog_mori/",
"nextLink":"//td[@class=\"nb_right\"]/a[child::img[@title=\"\u6b21\u306e\u30da\u30fc\u30b8\u3078\"]]"
},
{
"pageElement":"id(\"punwrap\")",
"url":"^http://bbs\\.archlinux\\.org/viewforum\\.php\\?",
"nextLink":"id(\"punviewforum\")/div[@class=\"linksb\"]/div[@class=\"inbox\"]/p[@class=\"pagelink conl\"]/strong/following-sibling::a[1]"
},
{
"insertBefore":"//form[last()]",
"pageElement":"//table",
"url":"^http://selenic\\.com/repo/index\\.cgi/hg/log/",
"nextLink":"//a[text()=\"-10\"]"
},
{
"pageElement":"//ul[@class=\"list\"]",
"url":"^http://pupe\\.ameba\\.jp/cute/community/goods",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"insertBefore":"id(\"trackback\")/following-sibling::node()",
"pageElement":"id(\"content\")/div[@class=\"blog\"]",
"url":"^http://[^.]+\\.seesaa\\.net/article/\\d+\\.html",
"nextLink":"id(\"content\")/div[@class=\"navi\"]/a[text()=\"<<\"]"
},
{
"insertBefore":"id(\"trackback\")/following-sibling::node()\r\n",
"pageElement":"id(\"content\")/div[@class=\"blog\"]",
"url":"^http://nekoyanagi\\.net/article/\\d+\\.html\r\n",
"nextLink":"id(\"content\")/div[@class=\"navi\"]/a[contains(text(), \"<<\")]"
},
{
"pageElement":"//table[.//img[contains(@src,'up.gif')]]",
"url":"^http://phonebook\\.yahoo\\.co\\.jp/bin/search",
"nextLink":"((//table[.//img[contains(@src,'up.gif')]]/following-sibling::table)[1])//a[last()]"
},
{
"pageElement":"id(\"content\")/div[@class=\"blog\" or @id=\"comments\"]",
"url":"^http://[^.]+\\.sblo\\.jp/article/[^.]+\\.html",
"nextLink":"id(\"content\")/div[@class=\"navi\"]/a"
},
{
"pageElement":"id(\"tsukurepo-list\")",
"url":"^http://cookpad\\.com/category/\\d+/tsukurepo",
"nextLink":"//p[contains(concat(\" \",@class,\" \"), \" paging \")]/a[@rel=\"next\"]"
},
{
"pageElement":"//table[@class=\"listtable2\"]",
"url":"^http://g\\.hatena\\.ne\\.jp/grouplist(?:$|\\?)",
"nextLink":"//a[@class=\"next\"]"
},
{
"insertBefore":"id(\"footer\")",
"pageElement":"id(\"content\")",
"url":"^http://[^.]+\\.vox\\.com/library/posts/tags/",
"nextLink":"//ul[@class=\"pager-list\"]/li[@class=\"item next\"]/a"
},
{
"pageElement":"id(\"pixiv\")/div[2]/div[3]",
"url":"^http://www\\.pixiv\\.net/event_member\\.php.+",
"nextLink":"//a[starts-with(text(), \"\u6b21\u306e\")]"
},
{
"pageElement":"//tr[contains(@class,\"resultGroup\")]",
"url":"^http://www\\.altavista\\.com/video/results\\?",
"nextLink":"//b[contains(concat(\" \",@class,\" \"),\" m \")][last()]/a[contains(text(),\"Next\")]"
},
{
"pageElement":"//table[2]/tbody/tr/td[1]/table[1]",
"url":"^http://www\\.altavista\\.com/audio/results\\?",
"nextLink":"//b[contains(concat(\" \",@class,\" \"),\" m \")][last()]/a[contains(text(),\"Next\")]"
},
{
"pageElement":"//tr[contains(@class, \"resultGroup\")]",
"url":"^http://www\\.altavista\\.com/image/results\\?",
"nextLink":"//b[contains(concat(\" \", @class, \" \"), \" m \")][last()]/a[contains(text(), \"Next\")]"
},
{
"insertBefore":"//td[@class=\"bodyline\"]/table/tbody/tr/td/form",
"pageElement":"//table[@class=\"forumline\"]",
"url":"^http://(?:www\\.)?jpmp3\\.com/viewforum\\.php",
"nextLink":"//td[@class=\"bodyline\"]/form/table/tbody/tr/td[3]/span[@class=\"nav\"]/a[last()]"
},
{
"insertBefore":"/html/body/table/tbody/tr/td/table[6]",
"pageElement":"//table[@class=\"forumline\"]",
"url":"^http://(?:www\\.)?jpmp3\\.com/viewtopic\\.php",
"nextLink":"//td[@class=\"bodyline\"]/table/tbody/tr/td[3]/span[@class=\"nav\"]/a[last()]"
},
{
"pageElement":"//div[@class=\"results_container\"]/div",
"url":"^http://search\\.secondlife\\.com/search\\.php",
"nextLink":"//div[contains(concat(\" \",@class,\" \"),\" navigation \")]/a[last() and contains(text(),\"Next\")]"
},
{
"pageElement":"//table[tbody/tr/td[contains(@class, \"celltext_title\")]]",
"url":"^http://(?:www\\.)?softpedia\\.com/progSearch",
"nextLink":"//a[starts-with(@href, \"/progSearch/\")]/../b/following::a"
},
{
"insertBefore":"//div[@align=\"center\"]/preceding-sibling::hr[1]",
"pageElement":"//div[@align=\"left\"]/node()[self::text() or self::br]",
"url":"^http://(?:www\\.)?nkst\\.jp/[^/]+/novel\\.php",
"nextLink":"//a[@title=\"next\"]"
},
{
"pageElement":"//table[@class=\"table-listing\"]",
"url":"^https://skypecasts\\.skype\\.com/skypecasts/",
"nextLink":"id(\"pagination\")/a[@class=\"next\" and last()]"
},
{
"pageElement":"//div[@class=\"photo\"]",
"url":"^http://www\\.fg-site\\.net/(?:content|tag)s/",
"nextLink":"//div[@class=\"wide_box\"]/div[last()]/a[last()]"
},
{
"pageElement":"id(\"body\")",
"url":"^http://www\\.theregister\\.co\\.uk/(\\d+/){3}.",
"nextLink":"id(\"pages-nav\")/li[@class=\"last\"]/a"
},
{
"pageElement":"id(\"yschnpg\")/following-sibling::ul",
"url":"^http://list\\.chiebukuro\\.yahoo.co.jp/list/",
"nextLink":"id(\"yschnpg\")//a[contains(@class,\"next\")]"
},
{
"insertBefore":"//center/table/tbody/tr/td/table[last()-1]",
"pageElement":"//center/table/tbody/tr/td/table[last()-2]",
"url":"^http://blog-search\\.yahoo\\.co\\.jp/search\\?",
"nextLink":"//a[child::img[contains(@src, \"ar_next.gif\")]]"
},
{
"pageElement":"//*[contains(concat(\" \", @class, \" \"), \" bbsList01 \")]",
"url":"^http://mixi\\.jp/search_(?:topic|event)\\.pl",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pageNavigation01 \")]//a[starts-with(text(), \"\u6b21\u3092\")]"
},
{
"insertBefore":"//*[text()='\u6b21\u3078\uff1a']/../..",
"pageElement":"//*[text()=\"\u2605\u6700\u65b0\u30c8\u30c3\u30d7\u30cb\u30e5\u30fc\u30b9\"]/../../../../../../..",
"url":"^http://japan\\.internet\\.com/linuxtutorial/",
"nextLink":"//*[text()='\u6b21\u3078\uff1a']/../a"
},
{
"insertBefore":"//div[@class=\"ok_search_wrapper\"][last()]",
"pageElement":"id(\"ok_main\")//table[@class=\"ok_seach_list\"]",
"url":"^http://(?:[^.]+\\.)?okwave\\.jp/search\\.php3",
"nextLink":"//div[@class=\"ok_search_wrapper\"]//a[last()]"
},
{
"pageElement":"//table",
"url":"^http://uni\\d+\\.ogame\\.jp/game/pranger\\.php",
"nextLink":"//a[contains(text(), \">>\")]"
},
{
"pageElement":"//div[@class=\"article\"]",
"url":"^http://developer\\.mozilla\\.org/[^/]+/docs/",
"nextLink":"//div[@class=\"prevnext\"]/p//span[last()]/a"
},
{
"pageElement":"//tr",
"url":"^http://ichi5c2\\.mint\\.aisnet\\.jp/ponihuri/",
"nextLink":"//a[contains(text(),\"NEXT\")]"
},
{
"pageElement":"//div[@class=\"yui-u first photolist section\"]/table",
"url":"^http://(?:www\\.)?bcphotoshare\\.com/photos/",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"pageElement":"//div[.//h4]",
"url":"^http://sandbox\\.sourcelabs\\.com/delimages/",
"nextLink":"//a[text()=\"rss\"]/preceding-sibling::a"
},
{
"pageElement":"//table[@class=\"table-list\"]//tr[contains(@class,\"hatena-star-entry\")]",
"url":"^http://d\\.hatena\\.ne\\.jp/designset(?:$|\\?)",
"nextLink":"//div[@class=\"pager-r\"]/a[last()]"
},
{
"pageElement":"id('result_3')/div[@class='newsarea']",
"url":"^http://www\\.kyoto-np\\.co\\.jp/search\\.php\\?",
"nextLink":"//div[@style='text-align: center;']/a[contains(text(),'\u6b21\u306e')]"
},
{
"pageElement":"id(\"paperI\")/div[@class=\"content rs\"]/div[@class=\"cc\"]",
"url":"^http://bandaancha\\.eu/foro/cable/r-galicia",
"nextLink":"id(\"forums_forum\")/div/div/strong[1]/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"article\"]",
"url":"^http://news\\.livedoor\\.com/article/detail/",
"nextLink":"//div[@class=\"article-page\"]//td[@class=\"link-next\"]/a"
},
{
"pageElement":"//dl[contains(@class, \"section\")]",
"url":"^http://giraffe\\.iseteki\\.net/applis/search",
"nextLink":"//div[@class=\"pageBrowser\"]/p[1]/a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\uff1e\")]"
},
{
"pageElement":"//div/center/table/tbody/tr/td[@class=\"ItemCell\"]/div/center",
"url":"^http://impre\\.net/php/impre/impreshow\\.php",
"nextLink":"//a[text()=\"NEXT>>\"]"
},
{
"pageElement":"//div[@class=\"pagenavcounter\"]/parent::td/parent::tr",
"url":"^http://www\\.clustermonkey\\.net/.*/content/",
"nextLink":"//div[@class=\"pagenavbar\"]//a[text()=\"Next Page >>\"]"
},
{
"insertBefore":"id(\"articlebody\")/div[@class=\"nextPagePreview\"]",
"pageElement":"id(\"articlebody\")/*[not(@class=\"magGuidance\") and not(@class=\"nextPagePreview\") and following::div[@id=\"naviBottom\"] and not(descendant::*[contains(text(), \"\u65e5\u7d4c\u30d3\u30b8\u30cd\u30b9\u7279\u5225\u8cfc\u8aad\u306f\u3053\u3061\u3089\u304b\u3089\") or contains(text(), \"\u6b21\u30da\u30fc\u30b8\u4ee5\u964d\u306f\u300cNBonline\u4f1a\u54e1\u300d\")])]",
"url":"^http://business\\.nikkeibp\\.co\\.jp/article/",
"nextLink":"id(\"naviBottom\")//a[text()=\">>\"]"
},
{
"pageElement":"//div[@class=\"keyword-list\"]/ul/li[not(@class=\"pager\")]",
"url":"^http://d\\.hatena\\.ne\\.jp/keywordlist($|\\?)",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//table[@class=\"borderinterior\"]",
"url":"^http://brokenstones\\.(?:me|cn)/browse\\.php",
"nextLink":"//table[@class=\"borderinterior\"]/following-sibling::p/a/b[contains(text(),\"Next\")]/parent::a"
},
{
"pageElement":"id(\"latest\")/tbody/tr",
"url":"^http://labs\\.trolltech\\.com/forums/forum/",
"nextLink":"//a[contains(@class, \"next\")]"
},
{
"pageElement":"id(\"gridlist\")/li",
"url":"^http://image-search\\.yahoo\\.co\\.jp/search",
"nextLink":"//a[@class=\"next\"]"
},
{
"insertBefore":"//center/div[3]/table[last()-2]",
"pageElement":"//center/div[3]/table[1]",
"url":"^http://www\\.getchu\\.com/php/search\\.phtml",
"nextLink":"//a[@title=\"next page\"]"
},
{
"pageElement":"//table//table[2]/tbody/tr[position()!=last()]",
"url":"^http://(?:www\\.)?spirituosen-volland\\.de/",
"nextLink":"//a[.=\">>\"]"
},
{
"pageElement":"id(\"container\")//center/table",
"url":"^http://www\\.nicomimi\\.com/ranking(?:$|\\?)",
"nextLink":"//a[@next=\"\"]"
},
{
"pageElement":"id(\"illust_c5\")/child::*",
"url":"^http://www\\.pixiv\\.net/random_pickup\\.php",
"nextLink":"id(\"illust_c5\")/../a[last()]"
},
{
"insertBefore":"//div[@class=\"listboxfoot\"]",
"pageElement":"//div[@class=\"listbox\"]/div[@class=\"listboxin\"]",
"url":"^http://knowledge\\.livedoor\\.com/[^/]+/\\d+",
"nextLink":"//a[@accesskey=\"n\"]"
},
{
"pageElement":"id(\"blog\")",
"url":"^http://www\\.sweetnote\\.com/board/takeshi/",
"nextLink":"//div[@class=\"pages\"]//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"id(\"main\")/div",
"url":"^http://newser\\.s312\\.xrea\\.com/(?:$|page)",
"nextLink":"id(\"main\")/div[last()]/a[last()]"
},
{
"pageElement":"//div[@class=\"Wireless_AreaSearchDetail\"]/table/tbody/tr[position()>2]",
"url":"^http://wireless\\.yahoo\\.co\\.jp/bin/list\\?",
"nextLink":"//span[@class=\"Pager\"]/a[contains(text(),\"\u6b21\")]"
},
{
"pageElement":"//div[@class=\"left\"]/*[self::h3 or self::div[@class=\"body\"]]",
"url":"^http://imihu\\.blog30\\.fc2\\.com/(?:$|page)",
"nextLink":"//a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"//comment()[contains(., \"\u5546\u54c1\u4e00\u89a7\u30c6\u30fc\u30d6\u30eb START\")]/following-sibling::table[1]/tbody/tr[not(descendant::td[@class=\"table_title\"])]",
"url":"^http://www\\.bestgate\\.net/search\\.phtml\\?",
"nextLink":"//div[@class=\"page\"]/a[starts-with(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"maincol\")/div[@class=\"content\"]",
"url":"^http://(?:www\\.)?gigazine\\.net/(?:$|.+/p)",
"nextLink":"//div[@class=\"paginate\"]/a[contains(text(),\"\u6b21\u3078\")]"
},
{
"insertBefore":"//h2[@class=\"next\"]",
"pageElement":"//h2[@class=\"next\"]/preceding-sibling::* | //div[@class=\"pages\"][last()]/preceding-sibling::*",
"url":"^http://www\\.nikkeibp\\.co\\.jp/netmarketing",
"nextLink":"//img[contains(@src, \"p_next.gif\")]/parent::a"
},
{
"pageElement":"id(\"listPhoto\")/*[not(@class=\"container-pagelinks\") and not(@title)]",
"url":"^http://www\\.ashinari\\.com/category\\.php\\?",
"nextLink":"//a[text()=\">\"]"
},
{
"pageElement":"id(\"box3\")",
"url":"^http://(?:www\\.)?desktoptopia\\.com/browse",
"nextLink":"id(\"pager\")//span[a/b]/following-sibling::*[1]/a"
},
{
"pageElement":"//div[@class=\"storycontent\"]",
"url":"^http://www\\.octech\\.jp/modules/wordpress/",
"nextLink":"//div[@class=\"feedback\"]/span/a[text()=string(number(//div[@class=\"feedback\"]/span/text()[string-length(normalize-space(self::text()))!=0]+1))]"
},
{
"insertBefore":"//div[@class=\"Pages\"]/following-sibling::node()[1]",
"pageElement":"id(\"GoodStuff\")/div",
"url":"^http://(?:www\\.)?flickr\\.com/photos/tags/",
"nextLink":"//a[@class=\"Next\"]"
},
{
"pageElement":"id(\"pagehistory\")/li",
"url":"/index\\.php\\?(?:.+&)?action=history(?:&|$)",
"nextLink":"//a[@rel=\"next\"]"
},
{
"insertBefore":"id(\"story\")/following-sibling::node()[1]",
"pageElement":"id(\"story\")",
"url":"^http://www\\.excite\\.co\\.jp/webad/special/",
"nextLink":"//span[@class=\"nextnx\"]/a"
},
{
"insertBefore":"//table[@class=\"userdelete\"]",
"pageElement":"//form[@id=\"delform\"]/*/preceding-sibling::node()[not(table[@class=\"delform\"])]",
"url":"^http://img\\.gurochan\\.net/[^/]+/.+\\.html$",
"nextLink":"//form[child::input[@value=\"Next\"]]"
},
{
"pageElement":"//div/div[4]/table[1]/tbody/tr/td/div[1]/form",
"url":"^http://www\\.webcg\\.net/WEBCG/impressions/",
"nextLink":"//a[contains(img/@src,\"/image/btn_contents_next.gif\")]"
},
{
"insertBefore":"//div[@class=\"pagingContainer\"]",
"pageElement":"//div[@class=\"latestVideos\"]/div[@class=\"mediaDisplay\"]",
"url":"^http://(?:[^.]+\\.)?pornotube\\.com/.+\\.php",
"nextLink":"//ul[@class=\"paging\"]/li[last()]/a"
},
{
"pageElement":"id(\"main\")/ul[contains(@class,\"pList\")]",
"url":"^http://(?:www\\.)?photolibrary\\.jp/search/",
"nextLink":"id(\"main\")/div[@class=\"paging\" and last()]/span[@class=\"next\" and last()]/a"
},
{
"pageElement":"//table[3]/tbody/tr/td/div/table[2]/tbody/tr/td/table",
"url":"^http://www\\.altavista\\.com/news/results\\?",
"nextLink":"//b[contains(concat(\" \",@class,\" \"),\" m \")][last()]/a[contains(text(),\"Next\")]"
},
{
"pageElement":"//div[form]",
"url":"^http://music\\.j-total\\.net/db/search\\.cgi",
"nextLink":"//center/a[text()=\"\u6b21\u30da\u30fc\u30b8\u2192\"]"
},
{
"insertBefore":"id(\"mainImpPostform\")",
"pageElement":"id(\"mainImpEntry\")/*[not(self::ul[@class=\"commonPrevNextNavi\"])]",
"url":"^http://www\\.eigaseikatu\\.com/imp/\\d+/\\d+/",
"nextLink":"(//ul[@class=\"commonPrevNextNavi\"]/li[@class=\"next\"]/a)[last()]"
},
{
"insertBefore":"id(\"main_in680\")/form/div[@class=\"page_navi mt20\"]",
"pageElement":"id(\"form_content_list\")",
"url":"^http://(?:www\\.)?piapro\\.jp/content_list/",
"nextLink":"id(\"form_content_list\")/div[@class=\"page_navi mt30\"]/ul/li[@class=\"jmp page_navi_sp\"][last()]/a"
},
{
"pageElement":"id(\"article\")",
"url":"^http://enterprisezine\\.jp/article/detail/",
"nextLink":"//td[@class=\"pg_bar_next\"]/a"
},
{
"pageElement":"id(\"content\")",
"url":"^http://coderepos\\.org/share/changeset/\\d*",
"nextLink":"//link[@rel=\"prev\"]"
},
{
"pageElement":"id(\"watchers\")",
"url":"^https?://github\\.com/[^/]+/[^/]+/watchers",
"nextLink":"//div[@class=\"pagination\"]/span[@class=\"current\"]/following-sibling::a"
},
{
"pageElement":"//ul[contains(@class,\"vList_hDetails\")]",
"url":"^http://www\\.veoh\\.com/userVideos\\.html\\?.",
"nextLink":"//li[@class=\"page_current\"]/following-sibling::li/a"
},
{
"pageElement":"//div[@class=\"list\"]",
"url":"^http://r\\.tabelog\\.com/.+/(rvwr_|user)lst",
"nextLink":"//a[@rel=\"next\"]"
},
{
"insertBefore":"//body/center/a[@href=\"confirm.htm\"]/preceding-sibling::br[1]",
"pageElement":"//table[@class=\"torrents\"]//th[text()=\"Active torrents\"]/ancestor::table[@class=\"torrents\"]",
"url":"^http://mullemeck\\.serveftp\\.org/jps_beta/",
"nextLink":"//table[@class=\"torrents\"]//th[text()=\"Active torrents\"]/ancestor::table[@class=\"torrents\"]//td[@class=\"torrentsFoot\"]/a[text()=\"Next\"]"
},
{
"pageElement":"//div[@class=\"entry-asset asset\"]",
"url":"^http://blog\\.parco-city\\.com/blog-across/",
"nextLink":"//link[@rel=\"prev\"]"
},
{
"pageElement":"id(\"in-center\")/div[@class=\"content-2c\"]/div[@class=\"content-body\"]/div[@class=\"mod-entry-set\"]/div[@class=\"entry\"]",
"url":"^http://blog\\.goo\\.ne\\.jp/thetrailstore/e/",
"nextLink":"id(\"in-center\")/div[@class=\"content-2c\"]/div[@class=\"content-body\"]/div[@class=\"mod-entry-set\"]/div[@class=\"entry\"]/div[@class=\"entry-body\"]/div[@class=\"entry-body-text\"]/a"
},
{
"pageElement":"id(\"main_block\")",
"url":"^http://vipvipblogblog\\.blog119\\.fc2\\.com/",
"nextLink":"//div[@class=\"pnavi\"]/a[last()]"
},
{
"insertBefore":"//div[@class=\"pagination\"][2]",
"pageElement":"//div[@class=\"thumbnails\"]",
"url":"^http://(?:[^.+]\\.)?everystockphoto\\.com/",
"nextLink":"//div[@class=\"pagination\"]/a[last()]"
},
{
"pageElement":"//div[@class=\"ybks-md17\" or @class=\"ybks-md117\"]",
"url":"^http://books\\.yahoo\\.co\\.jp/new_release/",
"nextLink":"//a[text()=\"\u6b21\u306e20\u4ef6\"]"
},
{
"pageElement":"id(\"days\")/div",
"url":"^https?://(?:d|[^.]+\\.g)\\.hatena\\.ne\\.jp/",
"nextLink":"//a[@rel=\"prev\"]"
},
{
"pageElement":"id(\"ctl00_CPH1_MediaViewList1_ListView1_groupPlaceholderContainer\")",
"url":"^http://(?:www\\.)?parasitestage\\.net/Page",
"nextLink":"id(\"ctl00_CPH1_QueryPager2_NextLink\")"
},
{
"pageElement":"//table[contains(@class, \"thamb\")]",
"url":"^http://(?:www\\.)?tinami\\.com/search/list",
"nextLink":"//span[contains(@class, \"pages\") and count(preceding::span[contains(@class, \"pages\")]) = 2]/a"
},
{
"pageElement":"id(\"punwrap\")",
"url":"^http://bbs\\.archlinux\\.org/search\\.php\\?",
"nextLink":"id(\"punsearch\")/div[@class='linkst']/div[@class='inbox']/p[@class='pagelink']/strong/following-sibling::a[1]"
},
{
"insertBefore":"id(\"paginator\")",
"pageElement":"id(\"post-list-posts\")",
"url":"^http://moe\\.imouto\\.org/(post|pool/show)",
"nextLink":"id(\"paginator\")/div[@class=\"pagination\"]/a[last()]"
},
{
"pageElement":"//table[@width=\"99%\"] | //tr[@height=\"26\"]",
"url":"^http://(?:www\\.)?w-canvas\\.com/shopping/",
"nextLink":"//a[text()=\"\uff1e\"]"
},
{
"pageElement":"//div[@class=\"blogbody\"]",
"url":"^http://guideline\\.livedoor\\.biz/archives",
"nextLink":"//a[@class=\"amenu\"][1]"
},
{
"insertBefore":"//div[@class=\"pager\"][last()]",
"pageElement":"id(\"log_table\")",
"url":"^http://counter\\.hatena\\.ne\\.jp/.+?/log\\?",
"nextLink":"//div[@class=\"pager\"][last()]/a[last()]"
},
{
"pageElement":"id(\"primary\")/div[1]/div[last()]",
"url":"^http://www\\.nikkeibp\\.co\\.jp/article/sj/",
"nextLink":"id(\"primary\")//div[@class=\"primary_pagination\"]//a[last()]"
},
{
"pageElement":"//div[./div[contains(@id, \"spot\")]]",
"url":"^http://www\\.instructables\\.com/id/[^/]+/",
"nextLink":"id(\"nextstepbutton\")"
},
{
"pageElement":"//td[@width=\"95%\"]/font",
"url":"^http://www\\.tsutaya\\.co\\.jp/item/artist/",
"nextLink":"(//td[@align=\"right\"]/font/a)[last()]"
},
{
"pageElement":"id(\"FolderView\")//input/ancestor::div[1]|id(\"FolderView\")//input/ancestor::div[1]/following-sibling::b[1]",
"url":"^http://mobile\\.live\\.com/hm/folder\\.aspx",
"nextLink":"//a[@accesskey=\"3\"]"
},
{
"insertBefore":"id(\"footer_with_ads_block\")",
"pageElement":"id(\"content\")",
"url":"^http://(?:www\\.)?wherewedowhatwedo\\.com/",
"nextLink":"//li[contains(@class, \"pagination_link\")]/a[contains(text(),\"Next Page\")]"
},
{
"pageElement":"//div[@class=\"listRulesArea\"]",
"url":"^http://mixi\\.jp/rules\\.pl(?:\\?mode=.+)?$",
"nextLink":"id(\"subCategoryNavi\")/p/a[@class=\"selected\"]/following-sibling::a[1]"
},
{
"pageElement":"//p",
"url":"^http://yamagata\\.int21h\\.jp/tool/Markov/",
"nextLink":"//a[@accesskey=\"#\"]"
},
{
"insertBefore":"id(\"pages\")",
"pageElement":"id(\"main\")//div[@class=\"articlebody\"]",
"url":"^http://trendy\\.nikkeibp\\.co\\.jp/article/",
"nextLink":"id(\"pages\")/a[@class=\"next\"]"
},
{
"insertBefore":"(//a[text()=\"NEXT>\" or text()=\">>\"])[2]/ancestor::table[1]",
"pageElement":"id(\"_ctl1_DataList1\")",
"url":"^http://www\\.altphotos\\.com/Gallery\\.aspx",
"nextLink":"//a[text()=\"NEXT>\" or text()=\">>\"]"
},
{
"insertBefore":"//p[@class=\"menu_bottom\"]",
"pageElement":"//div[@class=\"main\"]",
"url":"^http://www5e\\.biglobe\\.ne\\.jp/~aji/3min/",
"nextLink":"//p[@class=\"menu_bottom\"]/span[3]/a"
},
{
"pageElement":"//table[@class=\"table1\"]",
"url":"^http://(?:www\\.)?suruga-ya\\.jp/database/",
"nextLink":"//a[contains(text(), \">>\")]"
},
{
"pageElement":"//ul[@class=\"articleList\"]/div",
"url":"^http://plaza\\.rakuten\\.co\\.jp/gnr(?:/g)?",
"nextLink":"//div[contains(concat(\" \",@class,\" \"),\" pageNavi \")]/a[contains(text(),\"\u6b21\")]"
},
{
"insertBefore":"id(\"maincontent\")/form/div[@class=\"pgbox\" and position()=2]",
"pageElement":"id(\"maincontent\")/form/div[@class=\"pgbox\" and position()=1]",
"url":"^http://aur\\.archlinux\\.org/packages\\.php",
"nextLink":"id(\"pages\")/a[@class=\"page_num\" and text()=\"Next\"]"
},
{
"pageElement":"//tr[preceding-sibling::tr[descendant::b]][following-sibling::tr[descendant::b]]",
"url":"^http://coupons\\.yahoo\\.co\\.jp/bin/search",
"nextLink":"//small[contains(text(),\"[\")]/a[contains(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" body \") or contains(concat(\" \", @class, \" \"), \" search-result \")]",
"url":"^http://wiki\\.livedoor\\.jp/[^/]+/search\\?",
"nextLink":"//a[starts-with(@href,\"search?keywords\") and preceding-sibling::*[position()=1 and self::strong]]"
},
{
"pageElement":"id(\"main_middle\")/div[1]/div[2]/*",
"url":"^http://any6\\.jp/(?:search\\.php|watch_b/)",
"nextLink":"id(\"main_middle\")/div[1]/div[2]/a[last()][img]"
},
{
"pageElement":"id(\"entries\")",
"url":"^http://(?:www\\.)?whitepages\\.com\\.au/wp/",
"nextLink":"//a[text()=\"Next\"]"
},
{
"insertBefore":"id(\"content\")/following-sibling::node()",
"pageElement":"id(\"content\")",
"url":"^http://www\\.unmatchedstyle\\.com/gallery/",
"nextLink":"//div[@class=\"navigation\"]/div[@class=\"alignleft\"]/a[contains(text(), \"Previous\")]"
},
{
"pageElement":"id(\"SnapArchiveContainer\")",
"url":"^http://www\\.fashionsnap\\.com/streetsnap/",
"nextLink":"//p[@class=\"look-more\"]/a  |//a[@class=\"next-page\"]"
},
{
"pageElement":"id(\"kiji\")",
"url":"^http://techon\\.nikkeibp\\.co\\.jp/article/",
"nextLink":"id(\"pageNumber\")/div[@class=\"next\"]/a"
},
{
"pageElement":"//div[@class=\"resultBox\"]/div[contains(@class,\"resultInfo\")]",
"url":"^http://www\\.pixiv\\.net/event_circle\\.php",
"nextLink":"id(\"pager\")/a[last()]"
},
{
"pageElement":"id(\"contents\")/div[contains(@class,\"entry\")]",
"url":"^http://blog\\.wakakitamiki\\.coolblog\\.jp/",
"nextLink":"//p[@class=\"page\"]/a[text()=\">>\"]"
},
{
"insertBefore":"id(\"result-main-l-in\")/ol[last()]/following-sibling::node()",
"pageElement":"id(\"result-main-l-in\")/ol",
"url":"^http://blog-search\\.yahoo\\.co\\.jp/search",
"nextLink":"id(\"next\")/a"
},
{
"pageElement":"//center/a",
"url":"^http://mure\\.hp\\.infoseek\\.co\\.jp/comic/",
"nextLink":"//center/a"
},
{
"pageElement":"id(\"main\")/table[contains(@class, \"entry_table\")]",
"url":"^http://nihonnagonago\\.blog115\\.fc2\\.com/",
"nextLink":"//div[@class=\"entry_navi\"]/a[last()]"
},
{
"pageElement":"//ul[contains(@class, \"items\")]",
"url":"^http://wedata\\.net/databases/[^/]+/items",
"nextLink":"//div[@class=\"pagination\"]/a[@rel=\"next\"]"
},
{
"insertBefore":"id(\"_threads_link_\")[2]",
"pageElement":"//div[@align=\"center\"]/table[@width=\"95%\"]",
"url":"^http://(?:xera|moepic.?)\\.moe-ren\\.net/",
"nextLink":"id(\"_threads_link_\")/table/tbody/tr/td/strong/following-sibling::a"
},
{
"pageElement":"id(\"mainbox\")/*",
"url":"^http://diary\\.jp\\.aol\\.com/juicyfruits/",
"nextLink":"id(\"mainbox\")/p[last()]//a[last()]"
},
{
"pageElement":"//ul[@class=\"book_thumbs\"]",
"url":"^http://(?:www\\.)?bookcoverarchive\\.com/",
"nextLink":"id(\"nav_btm\")/ul/li/a[1]"
},
{
"pageElement":"id(\"container\")//div[@class=\"entry\"]",
"url":"^http://blog\\.canpan\\.info/[^/]+/archive",
"nextLink":"id(\"container\")/div[@class=\"page\"]/a"
},
{
"insertBefore":"//table[@id=\"mobile_window\"]/tbody/tr/td/hr[1]",
"pageElement":"//div[@id=\"pcfrm_mobile\"]",
"url":"^http://www\\.mbga\\.jp/\\.pc/_novel_page.+",
"nextLink":"//table[@id=\"mobile_window\"]/tbody/tr/td/center/a[contains(text(), \"\u6b21\u3078#\u2192\")]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" cate \")]/following-sibling::node()[following::div[contains(concat(\" \", @class, \" \"), \" cate \")]]",
"url":"^http://esupa\\.xrea\\.jp/nicky/nicky\\.cgi",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pastlink \")]/a[text() = \">>\"]"
},
{
"pageElement":"//div[contains(concat(\" \",@class,\" \"), \" recipe-preview \")]",
"url":"^http://cookpad\\.com/category/\\d+/recipe",
"nextLink":"//div[contains(concat(\" \",@class,\" \"), \" center paginate \")]/a[@rel=\"next\"]"
},
{
"pageElement":"id(\"memo-navigation-top\")//div[@class=\"box-body\"]/*[preceding-sibling::*[contains(@class,\"chapter\")]][following-sibling::div[@class=\"channel-navigation\"]]",
"url":"^http://ugomemo\\.hatena\\.ne\\.jp/opening_",
"nextLink":"id(\"memo-navigation-top\")//div[@class=\"channel-navigation\"]//img[@alt=\"NEXT\"]/parent::a"
},
{
"pageElement":"//table[@class=\"tablebg\"]",
"url":"^http://www\\.macserialjunkie\\.com/forum/",
"nextLink":"//*[@class=\"gensmall\" or @class=\"nav\" or @class=\"pagination\"]/b/a[contains(text(),\"Next\")]"
},
{
"pageElement":"id(\"styleboxarea\")",
"url":"^http://(?:www\\.)?rasysa\\.com/pkg/style/",
"nextLink":"//img[@src=\"/pkg/style/image/style1/icn_next1.gif\"]/parent::a"
},
{
"pageElement":"id(\"pagecontainer\")",
"url":"^http://www\\.photogen\\.com/free\\-photos/",
"nextLink":"//b[@class=\"pagingon\"]/following-sibling::a"
},
{
"insertBefore":"//div[@class=\"paging\"]",
"pageElement":"//dl[@class=\"doc\"]",
"url":"^https?://[^:/]+:1978/node/.+?/search_ui",
"nextLink":"//a[@title=\"Go forward one page\"]"
},
{
"pageElement":"//hr[1]/following-sibling::*[following::hr[2]]",
"url":"^http://hp\\d+\\.0zero\\.jp/novel/page\\.php",
"nextLink":"//a[@accesskey=\"3\"]"
},
{
"pageElement":"//form[@name=\"cart_whole\"]/table[1]",
"url":"^http://www\\.7andy\\.jp/\\w+/search_result",
"nextLink":"//small/b/a[contains(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"//img[contains(@src, \"main_img02.jpg\")]/../../../../../../following-sibling::tr[following::img[contains(@src, \"try_next.gif\") or contains(@src, \"try_back.gif\")]]",
"url":"^http://www\\.dosv\\.jp/back_number/[^/]+/",
"nextLink":"//img[contains(@src, \"try_next.gif\")]/../preceding-sibling::td/a[last()]"
},
{
"insertBefore":"id(\"maincol\")/p",
"pageElement":"id(\"serp\")",
"url":"^http://code\\.google\\.com/hosting/search",
"nextLink":"id(\"maincol\")/div[last()]/a[last()]"
},
{
"insertBefore":"//table[2]",
"pageElement":"//p",
"url":"^http://opiumhero\\.web\\.fc2.com/pict_com",
"nextLink":"//a[starts-with(@href,\"pict_com\")]"
},
{
"pageElement":"//div[@class=\"day\"]",
"url":"^http://(?:www\\.)?freedomcat\\.com/diary/",
"nextLink":"//div[@class=\"adminmenu\"]//a[contains(text(),\"\u524d\")]"
},
{
"insertBefore":"id(\"answers\")/h2",
"pageElement":"//div[starts-with(@class,\"answer\")]",
"url":"^http://stackoverflow\\.com/questions/\\d+",
"nextLink":"//div[@class=\"pager\"]/a[last()]"
},
{
"pageElement":"id(\"mainContents\")//div[@class=\"node\"]/div[@class=\"content\"]/*[not(@class=\"next_page\") and following::*[@class=\"pager\"]]",
"url":"^http://web-tan\\.forum\\.impressrd\\.jp/e/",
"nextLink":"id(\"mainContents\")//*[@class=\"pager-current\"]/following-sibling::a[position()=1]"
},
{
"pageElement":"//div[@class=\"Nav\" or @class=\"Post\"]",
"url":"^http://buddyhentai\\.net/(?:page/\\d+/)?$",
"nextLink":"//div[@class=\"Nav\"]/strong[@class=\"on\"]/following-sibling::a[1]"
},
{
"pageElement":"//table//table[@width = \"100%\"]",
"url":"^http://www\\.sicovideo\\.com/(?:new/\\d+)?",
"nextLink":"//div[@class = \"title\"][select]/a[contains(text(), \"\u6b21\")]"
},
{
"pageElement":"id(\"main2\")/table[1]",
"url":"^http://offy\\.jp/communities/\\d+/members",
"nextLink":"//div[@class=\"next\"]/a"
},
{
"pageElement":"//div[@class=\"ys\"]",
"url":"^http://www\\.amazon\\.co\\.jp/gp/yourstore",
"nextLink":"id(\"ysMoreResults\")/parent::a"
},
{
"pageElement":"//table[@class=\"list3\"]",
"url":"^http://www\\.a-cute\\.jp/top\\.php\\?pg=\\d+",
"nextLink":"//table[@class=\"list6\"]/tbody/tr/td[last()]/a[text()=\"\u6b21\u306e10\u4ef6\"]"
},
{
"insertBefore":"//div[@class=\"splitnavR\"]",
"pageElement":"//div[@class=\"story\"]",
"url":"^http://[a-z]+\\.nationalgeographic\\.com/",
"nextLink":"//a[text()=\"Next Page >>\"]"
},
{
"pageElement":"id(\"photogallery\")",
"url":"http://www.friendster.com/viewphotos.php",
"nextLink":"//div[@class=\"paginglinksmodule\"]/a[last()]"
},
{
"pageElement":"//div[@class=\"h\"]",
"url":"^http://(?:[^.]+\\.)?m\\.yahoo\\.com/p/mail",
"nextLink":"//div[@class=\"l\"]/text()/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"article\"]",
"url":"^http://d\\.moccori\\.com/(?:$|index\\.php)",
"nextLink":"//a[@title=\"next page\"]"
},
{
"pageElement":"id(\"beta-inner\")",
"url":"^http://my_sarisari_store\\.typepad\\.com/",
"nextLink":"//span[@class=\"chevron\" and contains(text(),\"\u640d\")]"
},
{
"insertBefore":"id(\"articlecontent\")/ul[@class=\"page-number\"]",
"pageElement":"id(\"articlecontent\")/*[@class=\"articleBody\" or @class=\"page\"]",
"url":"^http://arena\\.nikkeibp\\.co\\.jp/article/",
"nextLink":"(id(\"articlecontent\")/ul[@class=\"page\"]//a)[last()]"
},
{
"pageElement":"(//a[text()=\"\u300e\u623b\u308b\u300f\"]/preceding-sibling::*[preceding::form])[position() > 1 and position() < last()-1]",
"url":"^http://hide\\.maruo\\.co\\.jp/lib/hilight/",
"nextLink":"//a[text()=\"\u300e\u623b\u308b\u300f\"]/preceding-sibling::table[position()=1]//td[child::b]/following-sibling::td[position()=1]/a"
},
{
"insertBefore":"//div[@class=\"content_pane\"]/p[last()]",
"pageElement":"//div[@class=\"content_pane\"]/dl",
"url":"^http://find\\.2ch\\.net/(?:index\\.php)?\\?",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"//table[@class=\"list\"]",
"url":"^http://www\\.aozora\\.gr\\.jp/index_pages/",
"nextLink":"//a[contains(text(),\"\u6b21\u306e50\u4ef6\")]"
},
{
"pageElement":"id(\"posts\")/*",
"url":"^http://www\\.tumblr\\.com/dashboard/\\d+/-",
"nextLink":"id(\"previous_page_link\")"
},
{
"pageElement":"//div[@class=\"articlePost\"]",
"url":"^http://posterous\\.com/posts/readinglist",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"pageElement":"id(\"wrapper\")/div[@class=\"clip-global\"]",
"url":"^http://clip\\.livedoor\\.com/(?:site|tag)",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"cathandList\")",
"url":"^http://(?:www\\.)?watts-jp\\.com/cathand/",
"nextLink":"id(\"cathandList\")/div[@class=\"menu\"]/a[@class=\"link-menu\"][last()]"
},
{
"pageElement":"//div[@id=\"izaListWithPaging\"]",
"url":"^http://www\\.iza\\.ne\\.jp/news/newsphoto/",
"nextLink":"//li[@class=\"skips\"][last() - 1]/a"
},
{
"pageElement":"id(\"articlebody\")/table//tr/td/div[2]",
"url":"^http://(?:www\\.)?technologyreview\\.com/",
"nextLink":"//a[text()=\"Next \u640d\"]"
},
{
"insertBefore":"//div[@class=\"day\"]/div[last()]/following-sibling::node()",
"pageElement":"//div[@class=\"day\"]/div",
"url":"^http://models\\.modulobe\\.com/model/list",
"nextLink":"//div[@class=\"paging\"]/p/a[last()]"
},
{
"pageElement":"//div[@class=\"txt01\"]",
"url":"^http://www\\.richcontent\\.jp/relayessay/",
"nextLink":"//div[@class=\"page_link\"]//a[text()=\">>\"]"
},
{
"pageElement":"id(\"srchContent\")/ol[@class=\"srchSearchResult\"]",
"url":"^http://query\\.nytimes\\.com/search/query",
"nextLink":"id(\"srchContent\")/div[@class=\"searchWebResults\"]/a[text()=\"Next \u640d\"]"
},
{
"pageElement":"id(\"fontzoom\")/p",
"url":"^http://www\\.ftchinese\\.com/story\\.php\\?",
"nextLink":"//div[@class=\"pagination\"]/a[text()=\"\u4e0b\u4e00\ue9a1\"]"
},
{
"pageElement":"id(\"main\")//div[contains(concat(\" \", @class, \" \"), \" entry \")]/node()[not(starts-with(@id, \"ads_\")) and not(starts-with(@id, \"ad_\"))]",
"url":"^http://www\\.(?:gizmodo|lifehacker)\\.jp/",
"nextLink":"id(\"main\")//li[contains(concat(\" \", @class, \" \"), \" next \")]/a"
},
{
"insertBefore":"(//div[@class=\"containerPagination\"])[last()]",
"pageElement":"id(\"containerThumbnails\")",
"url":"^http://[^.]+\\.photobucket\\.com/albums/",
"nextLink":"//a[text()=\"next\"]"
},
{
"pageElement":"//div[@class=\"floatholder\"]/*",
"url":"^http://(?:www\\.)?iconlet\\.com/search\\?",
"nextLink":"//div[@class=\"navigation\"][last()]/a[text()=\"Next\"]"
},
{
"pageElement":"id(\"contents\")//div[@class=\"main-pager\"]/..",
"url":"^http://blog\\.oricon\\.co\\.jp/_contents/",
"nextLink":"id(\"contents\")//div[@class=\"main-pager\"]/a[last()]"
},
{
"pageElement":"//div[@class=\"flow_container\"]",
"url":"^http://(?:www\\.)?daitrombe\\.net/image/",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"pageElement":"id(\"content\")/table[.//img]",
"url":"^http://www\\.adiumxtras\\.com/index\\.php",
"nextLink":"id(\"content\")/table[last()]//a[contains(text(),\"Next Page\")]"
},
{
"pageElement":"id(\"article-C2\")",
"url":"^http://www\\.adobe\\.com/(?:jp/)?devnet/",
"nextLink":"//dd[@class=\"next\"]/a[last()]"
},
{
"pageElement":"//center/table",
"url":"^http://cragra\\.h\\.fc2\\.com/bg[0-9]{2}/",
"nextLink":"//a[contains(text(),\"\u9032\u3080\")]"
},
{
"pageElement":"id(\"results\")",
"url":"^http://www\\.altavista\\.com/web/results",
"nextLink":"//b[contains(concat(\" \", @class, \" \"), \" m \")][last()]/a[text()=\"Next >>\"]"
},
{
"pageElement":"id(\"pageBody\")",
"url":"^http://punto-informatico\\.it/\\d+/[^/]+",
"nextLink":"id(\"pageNavigator\")/a[contains(text(),\"continua\")]"
},
{
"pageElement":"id(\"resList\")/form/div[contains(@class,\"list_group\")]",
"url":"^http://www\\.bookoffonline\\.co\\.jp/disp",
"nextLink":"//a[contains(text(),\"\u6b21\u3078\")]"
},
{
"insertBefore":"//div[@id=\"content\"]/div[@class=\"navigation\"]",
"pageElement":"//div[@id=\"content\"]",
"url":"^http://www\\.css(?:heroes|reboot)\\.com/",
"nextLink":"//div[@id=\"content\"]/div[@class=\"navigation\"]/div[@class=\"wp-pagenavi\"]/a[contains(text(), \"\u640d\")]"
},
{
"insertBefore":"//div[@class=\"pagination clear\"]",
"pageElement":"//ul[@class=\"results\"]",
"url":"^http://(?:www\\.)?apple\\.com/downloads/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id(\"blog\")",
"url":"^http://www\\.akiyan\\.com/blog/archives/",
"nextLink":"//div[@class=\"sibling-navigation-previous\"]/a"
},
{
"pageElement":"id(\"Contents\")/div[@class=\"Entry\" or @id=\"Comment-View\" or @id=\"Comment-Form\" or @id=\"Trackback-View\"]",
"url":"^http://specialnotes\\.blog77\\.fc2\\.com/",
"nextLink":"//a[@title=\"\u524d\u306e\u8a18\u4e8b\" or @title=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"//form[@name=\"KentoForm\"]",
"url":"^http://www\\.baitoru\\.com/jobSearch\\.do",
"nextLink":"//td[@id=\"pager\"]/span/following-sibling::*[1][self::a]"
},
{
"pageElement":"id(\"article_body\")/node()[not(@id or self::iframe)]",
"url":"^http://(?:articles|www)\\.latimes\\.com/",
"nextLink":"//span[@class=\"next_url\"]/a"
},
{
"pageElement":"id(\"ok_main\")/table[@class=\"ok_list\"]",
"url":"^http://[^.]+\\.goo\\.ne\\.jp/c[^.]+\\.html",
"nextLink":"id(\"ok_main\")/div[@class=\"ok_paging\"]/div[@class=\"ok_right\"]/a[text()=\"\u6b21\u3078 >\"]"
},
{
"pageElement":"id(\"main\")/div[2]/div[2]/p",
"url":"^http://(?:www\\.)?zakzak\\.co\\.jp/[^/?#]",
"nextLink":"id(\"main\")/div[2]/div[2]/p/a"
},
{
"pageElement":"//div[contains(concat(\" \",@class,\" \"), \" keyword-list-blog \")]",
"url":"^http://k\\.hatena\\.ne\\.jp/[^/]+/visited",
"nextLink":"//div[contains(concat(\" \",@class,\" \"), \" pager \")]/a[last()]"
},
{
"insertBefore":"//table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr/td[@class=\"etNextPrev\"]",
"pageElement":"//table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr/td/div/div[@class=\"etBodyBg\"]",
"url":"^http://blog\\.goo\\.ne\\.jp/moonglass_net",
"nextLink":"//table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr/td[@class=\"etNextPrev\"]/a"
},
{
"pageElement":"//center/table[1]",
"url":"^http://dyna\\.ws/(?:yaoi|15)/viewa\\.php",
"nextLink":"//a[contains(text(), \"\u6b21\u3078>>\")]"
},
{
"pageElement":"id(\"content\")/table",
"url":"^http://userscripts\\.org/scripts/search",
"nextLink":"id(\"content\")/p[last()]/text()[number(self::text()) > 0 or number(substring-after(self::text(), \"Pages:\")) > 0 ]/following::a[1]"
},
{
"pageElement":"//table[contains(@summary,\"\u5199\")]",
"url":"^http://www\\.ryukyujima\\.net/photo\\.php",
"nextLink":"//a[@title=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"id(\"contents\")/div[@class=\"event-list\" and last()]/div",
"url":"^http://clip\\.eventcast\\.jp/(?:recent)?",
"nextLink":"//p[@class=\"more\"]/a[last() and contains(text(),\"\u65b0\u7740\")] | //div[contains(concat(\" \",@class,\" \"),\" pager \")]/a[last() and contains(concat(\" \",@class,\" \"),\" next \")]"
},
{
"pageElement":"id(\"newarrival\")/div[not(contains(@class,\"mb16\"))]",
"url":"^http://uad\\.nicovideo\\.jp/main/latest/",
"nextLink":"id(\"newarrival\")//a[contains(@class,\"next\")]"
},
{
"pageElement":"id(\"graphlist\")",
"url":"^http://graph\\.hatena\\.ne\\.jp/graphlist",
"nextLink":"id(\"body\")//div[@class=\"pager\"]/a[contains(text(), \">\")]"
},
{
"pageElement":"//ul[@class=\"searchResultItem\"]",
"url":"^http://www\\.nioibu\\.com/smell/category",
"nextLink":"id(\"searchSmell\")/div[@class=\"unitPager\"]//li[@class=\"next\"]//a"
},
{
"pageElement":"//td[@class=\"left_outline\"]/../td[2]/*[position() < 3]",
"url":"^http://netamichelin\\.blog68\\.fc2\\.com/",
"nextLink":"//center/a[@title=\"\u306d\u305f\u30df\u30b7\u30e5\u30e9\u30f3\"]/following-sibling::a[1]"
},
{
"pageElement":"//ol[@class=\"results\"]",
"url":"^http://(?:www\\.)?yandex\\.ru/yandsearch",
"nextLink":"id(\"pager\")/span[@class=\"active\"]/following-sibling::a[1]"
},
{
"pageElement":"//hr[last()]/preceding-sibling::ul[1]/li",
"url":"^http://search\\.vector\\.co\\.jp/search\\?",
"nextLink":"//hr[last()]/preceding-sibling::div[1]/a"
},
{
"pageElement":"//div[@class=\"yaut-md166\"]",
"url":"^http://drive\\.yahoo\\.co\\.jp/map/search",
"nextLink":"//div[@class=\"st03\"]/dl/dd/a[contains(text(),\"\u6b21\u3078\")]"
},
{
"pageElement":"id(\"content\")//div[contains(@class, \"videoTagBox\")]|id(\"tagCloud\")",
"url":"^http://www\\.nicotag\\.jp/(?:tag|search)",
"nextLink":"id(\"content\")//div[contains(@class, \"pager\")][1]//a[starts-with(text(), \"\u6b21\u3078\")]"
},
{
"insertBefore":"(id(\"mgb_blog\")/div[@class=\"mgc_box_md\"]/div[@class=\"mgc_pic_m_set\"])[last()]/following-sibling::node()[1]",
"pageElement":"id(\"mgb_blog\")/div[@class=\"mgc_box_md\"]/div[@class=\"mgc_pic_m_set\"]",
"url":"^http://blog\\.days\\.yahoo\\.co\\.jp/blog/",
"nextLink":"id(\"mgb_blog\")/div[@class=\"mgc_box_md\"]/div[@class=\"mgc_pagenation\"]/a[last()]"
},
{
"insertBefore":"//table[5]",
"pageElement":"//table[4]",
"url":"http://bt\\.aisex\\.com/bt/thread\\.php\\?.",
"nextLink":"//table[last()]/tbody/tr/td/b/following-sibling::a"
},
{
"pageElement":"id(\"Imagesmain\")/table",
"url":"^http://(?:www\\.)?thedoi\\.net/post/list",
"nextLink":"(id(\"main\")//a[contains(text(), \"Next\")])[1]"
},
{
"insertBefore":"id(\"pager\")",
"pageElement":"id(\"result\")",
"url":"^http://pulpsite\\.net/satsucolla/word/.",
"nextLink":"id(\"pager\")/a[not(following-sibling::a)]"
},
{
"pageElement":"id(\"main-ttl-box\")/following-sibling::div/div[contains(@class, \"recipe_box\")]",
"url":"^http://cookpad\\.com/search/recipe\\.cfm",
"nextLink":"id(\"main-page-nav\")/p/a[starts-with(text(), \"\u6b21\u3078\")]"
},
{
"pageElement":"id(\"maincol\")/div",
"url":"^http://japan\\.internet\\.com/blog/[^/]+",
"nextLink":"//div[@class=\"content-nav\"]/a[last()]"
},
{
"pageElement":"//img",
"url":"^http://www5a\\.biglobe\\.ne\\.jp/~yo-he-/",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"global_area_tabs_ctn\")/div",
"url":"^http://(?:[^.]+\\.)?steampowered\\.com/",
"nextLink":"id(\"global_area_tabs_search\")/descendant::div[@class=\"search_pagination_right\"]/a[last()]"
},
{
"insertBefore":"id(\"mainpage\")/div[last()]",
"pageElement":"id(\"mainpage\")/table",
"url":"^http://(?:www\\.)?megaporn\\.com/video/",
"nextLink":"id(\"mainpage\")/table/tbody/tr/td[last()]/div/div[last()]/div/table/tbody/tr/td[last()]/a"
},
{
"pageElement":"//div[contains(@class, \"entry_unit\")]",
"url":"^http://kaisun1192\\.blog121\\.fc2\\.com/",
"nextLink":"id(\"navi\")/a[1]"
},
{
"insertBefore":"id(\"PostActions\")/table[@class=\"dataTabular\"]/following-sibling::node()[1]",
"pageElement":"id(\"PostActions\")/table[@class=\"dataTabular\"]",
"url":"^http://v3\\.newzbin\\.com/search/query/",
"nextLink":"(id(\"PostActions\")/div[@class=\"selection\"]/ul[@class=\"inline paging\"]//a)[last()-1]"
},
{
"insertBefore":"id(\"menu\")",
"pageElement":"id(\"content\")",
"url":"^http://(?:www\\.)?kenshukan\\.net/john/",
"nextLink":"id(\"content\")/a[last()]"
},
{
"pageElement":"//div[@class=\"lineListings\"]",
"url":"^http://(?:www\\.)?ebuyer\\.com/search\\?",
"nextLink":"//li[@class=\"currentPage\"]/following-sibling::li[1]/a"
},
{
"pageElement":"//table[@summary=\"\u8a18\u4e8b\u4e00\u89a7\"]/tbody/tr[position()>2]",
"url":"^http://(?:aurasoul\\.)?mb2\\.jp/_[^/]+/",
"nextLink":"id(\"M\")/a[text()=position()+1]"
},
{
"insertBefore":"id(\"lower_nav\")",
"pageElement":"//div[@class=\"image\"]",
"url":"^http://okurete\\.suimasendeshita\\.com/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//a[text()=\"\u300e\u623b\u308b\u300f\"]/preceding-sibling::node()[(position() > 3) and (position() < last() - 9)]",
"url":"^http://hide\\.maruo\\.co\\.jp/lib/macro/",
"nextLink":"//a[text()=\"\u300e\u623b\u308b\u300f\"]/preceding-sibling::table[position()=1]//td[child::b]/following-sibling::td[position()=1]/a"
},
{
"pageElement":"//tr",
"url":"^http://iphone-rejectdb\\.appspot\\.com/",
"nextLink":"id(\"main\")/div[@class=\"index\"]/node()[not(self::a) and (number(self::text())>0)]/following-sibling::a[1]"
},
{
"pageElement":"id(\"content\")/div",
"url":"^http://www\\.massively\\.com/category/.",
"nextLink":"id(\"content\")/p/a[last() and text()=\"Next Page \u640d\"]"
},
{
"pageElement":"//div[contains(@class,\"book\")]",
"url":"^http://book\\.akahoshitakuya\\.com/[us]",
"nextLink":"//div[@class=\"inner\"]/center/a[contains(text(),\"next\")]"
},
{
"pageElement":"id(\"overmenu\")/following-sibling::*[1] | //table[@class=\"text\" and @cellspacing=\"1\" and @cellpadding=\"2\"]",
"url":"^http://www\\.dmm\\.co(?:m|\\.jp)/.+=text",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"insertBefore":"//div[@class=\"detail\"]/p[position()=last()-1]",
"pageElement":"//div[@class=\"detail\"]",
"url":"^http://[a-z.]+moneycentral\\.msn\\.com/",
"nextLink":"//a[text()=\"next >\"]"
},
{
"pageElement":"//ul[@class=\"list-plain\"]",
"url":"^http://d\\d?\\.hatena\\.ne\\.jp/diarylist",
"nextLink":"//a[@rel=\"next\"]"
},
{
"insertBefore":"id(\"print\")/div[@class=\"paging\"]",
"pageElement":"id(\"article\")",
"url":"^http://moneyzine\\.jp/article/detail/.",
"nextLink":"id(\"print\")/div[@class=\"paging\"]/table[@class=\"pg_bar\"]/tbody/tr/td[@class=\"pg_bar_next\"]/a"
},
{
"pageElement":"id('main')/div",
"url":"^http://4b\\.yahoo\\.co\\.jp/contents/\\w+",
"nextLink":"//span[@class=\"pageRight\"]/a"
},
{
"insertBefore":"id(\"pagenum\")",
"pageElement":"id(\"a-e_col1\")/div",
"url":"^http://www\\.javaworld\\.com/javaworld/",
"nextLink":"id(\"next\")/a[@class=\"noline\"]"
},
{
"pageElement":"id(\"main\")/div[contains(@class,\"content\")]",
"url":"^http://karafuto50\\.blog117\\.fc2\\.com/",
"nextLink":"//p[@class=\"nav\"]/a[last()]"
},
{
"pageElement":"id(\"entry\")",
"url":"^http://kenz0\\.s201\\.xrea\\.com/weblog/",
"nextLink":"//div[@class=\"prev\"]/a"
},
{
"pageElement":"id(\"contents\")/div[contains(concat(\" \", @class, \" \"), \" message \")]",
"url":"^http://(?:www\\.)?meister\\.ne\\.jp/bbs/",
"nextLink":"id(\"contents\")/p/a[starts-with(text(), \"NEXT>>\")]"
},
{
"pageElement":"id(\"centercol\")/div[@class=\"articleBox\"]/*[following-sibling::table/tbody/tr/td//img[(contains(@src, \"next\") or contains(@src, \"prev\")) and contains(@src, \".gif\")]]",
"url":"^http://www\\.atmarkit\\.co\\.jp/fcoding/",
"nextLink":"//img[contains(@src, \"next\") and contains(@src, \".gif\")]/parent::a"
},
{
"insertBefore":"id(\"pageNumber\")",
"pageElement":"id(\"kiji\")",
"url":"^http://eco\\.nikkeibp\\.co\\.jp/article/",
"nextLink":"id(\"pageNumber\")/div[last()]/a[last()]"
},
{
"pageElement":"//div[@class=\"ently_outline\" or @class=\"comment_outline\" or @class=\"trackback_outline\"]",
"url":"^http://yaruomatome\\.blog10\\.fc2\\.com/",
"nextLink":"//p[@class=\"page_navi\"]/a[contains(@title,\"\u6b21\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"id(\"main\")//div[@class=\"day\" and not(h2[text()=\"\u306f\u3066\u306a\u30c0\u30a4\u30a2\u30ea\u30fc\u4ee5\u5916\u306e\u30d6\u30ed\u30b0\u304b\u3089\"])]",
"url":"^http://k\\.hatena\\.ne\\.jp/keywordblog/",
"nextLink":"//a[contains(text(),\"\u904e\u53bb\u306e20\u4ef6\")]"
},
{
"pageElement":"//div[contains(concat(\" \",@class,\" \"),\" NewsBody \")]",
"url":"^http://mainichi\\.jp/enta/mantan/news/",
"nextLink":"//a[@class=\"Next\"]"
},
{
"pageElement":"id(\"wrapper\")/dl",
"url":"^http://clip\\.livedoor\\.com/watchlist/",
"nextLink":"//a[@accesskey=\"n\"]"
},
{
"pageElement":"id(\"kiji-main\")/div[2]/p|id(\"kiji-main\")/div[2]/div",
"url":"^http://premium\\.nikkeibp\\.co\\.jp/itm/",
"nextLink":"//a[descendant::img[@id=\"NEXT\"]]|//a[descendant::img[@id=\"next\"]]"
},
{
"pageElement":"//table[@class=\"tbl\"]",
"url":"^https://www\\.bk1\\.jp/myaccount/order/",
"nextLink":"//a[text()=\"\u6b21\u3078\u2192\"]"
},
{
"pageElement":"//div[contains(@class, \"content\")]/child::*[self::ul[contains(@class, \"threada\")] or self::table[contains(@class, \"thread\")]]",
"url":"^http://bbs\\.avi\\.jp/(?:bbs\\.php|\\d+/)",
"nextLink":"//div[@class=\"pagemove\"]/span/following-sibling::a"
},
{
"pageElement":"//div[@class=\"content_672\"]/table[@summary=\"video\" or @summary=\"list\"]",
"url":"^http://[^.]+\\.nicovideo\\.jp/(?!watch)",
"nextLink":"//div[@class=\"pagelink\"]/a[@class=\"nextpage\"]"
},
{
"pageElement":"id(\"content\")/div[preceding::div[@class=\"s_navi1\"]]",
"url":"^http://www\\.cyzo\\.com/(?:\\d+\\.html)?$",
"nextLink":"id(\"content\")/div[@class=\"s_navi\"]/a[last()]"
},
{
"pageElement":"//table[@class=\"ThreadsTableOut\"]",
"url":"^http://support\\.wondercatstudio\\.com/",
"nextLink":"id(\"PageTextLinkBack\")/a"
},
{
"pageElement":"id(\"blog_article\")",
"url":"^http://hadakadenkyu\\.flnet\\.org/blog/",
"nextLink":"id(\"title_area\")/a[1]"
},
{
"insertBefore":"/html/body/hr[last()]",
"pageElement":"//a[starts-with(text(),\"\u6b21\") or contains(text(),\"\u9032\u3080\")]/preceding-sibling::*[self::img or self::br or self::hr]",
"url":"^http://ueharasan\\.y\\.ribbon\\.to/html/",
"nextLink":"//a[starts-with(text(),\"\u6b21\") or contains(text(),\"\u9032\u3080\")][1]"
},
{
"insertBefore":"id(\"main_in680\")/form/div[@class=\"page_navi mt30\"]",
"pageElement":"id(\"form_bookmark\")",
"url":"^http://(?:www\\.)?piapro\\.jp/bookmark/",
"nextLink":"id(\"form_bookmark\")/div[@class=\"page_navi mt30\"]/ul/li[@class=\"jmp page_navi_sp\"][last()]/a"
},
{
"pageElement":"id(\"content\")/table",
"url":"^http://userscripts\\.org/scripts/show/",
"nextLink":"//div[@class=\"pagination\"]/span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"tcmainlay\")/div[@class=\"postdate\"]",
"url":"^http://[^.]+\\.ap\\.teacup\\.com/[^/]+/$",
"nextLink":"//div[@class=\"nextpage\"]/a[last()]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" vranking \")]",
"url":"^http://www\\.nicotag\\.jp/videoranking/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" bottomnavi \")]/a[contains(text(), \"\u226b\")]"
},
{
"pageElement":"//td[@width=\"720\"]/table[not(descendant::table)][2]",
"url":"^http://www\\.nicovideo\\.jp/related_tag",
"nextLink":"//a[contains(concat(\" \", @class, \" \"), \" nextpage \")]"
},
{
"pageElement":"id(\"tho\")|//form[@name=\"f\"]/table[1]//td[@align=\"right\"]/b/following-sibling::a[1]",
"url":"^https?://mail\\.google\\.com/mail/[hx]/",
"nextLink":"//form[@name=\"f\"]"
},
{
"pageElement":"id(\"main\")/div",
"url":"^http://portal\\.nifty\\.com/cs/catalog/",
"nextLink":"id(\"main\")/ul[@class=\"pnlink\"]/li[@class=\"nex\"]/a"
},
{
"pageElement":"//html",
"url":"^http://www\\.lahiguera\\.net/musicalia/",
"nextLink":"//body/center/table/tbody/tr/td/table/tbody/tr/td/div/center/table/tbody/tr/td/b[1]/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"serpBody\"]",
"url":"^http://(?:www\\.)?figator\\.com/search/",
"nextLink":"//a[text()=\"Next\"]"
},
{
"pageElement":"//div[@id=\"main\" and @class=\"main\"]/div[@class=\"wrapper\"]",
"url":"^http://www\\.animepaper\\.net/gallery/",
"nextLink":"//a[contains(text(),\"\u640d\")]"
},
{
"pageElement":"(//table[@class=(\"table_simple_outerflame\" or \"table_common_main_innerflame\" or \"table_common_main_innerflame_blue\") and @summary=\"data\"])",
"url":"^http://www\\.toranoana\\.jp/mailorder/",
"nextLink":"//a[text()=\">\"]"
},
{
"pageElement":"id(\"content\")/*",
"url":"^http://pastie\\.org/(?:pastes|search)",
"nextLink":"//p/a[text()=\"Next page\"]"
},
{
"pageElement":"id(\"blog\")",
"url":"^http://(?:www\\.)?chinkoup\\.net:8084/",
"nextLink":"id(\"ps_top\")/p/a[last()]"
},
{
"pageElement":"//img[@class=\"video_w48\"]/ancestor::table[1]",
"url":"^http://www\\.nicovideo\\.jp/openlist/.",
"nextLink":"//a[@class=\"nextpage\"]"
},
{
"pageElement":"id(\"main_block\")/div[contains(@class,\"entry_block\")]",
"url":"^http://news23vip\\.blog109\\.fc2\\.com/",
"nextLink":"//div[@class=\"pnavi\"]/a[last()]"
},
{
"insertBefore":"//div[@class=\"pager\"]",
"pageElement":"//div[@class=\"page\"]/div[@class=\"content\"]/*[preceding-sibling::div[@class=\"submitted\"]][not(@class=\"pager\")]",
"url":"^http://www\\.popsci\\.com(?:/[^/]+){4}",
"nextLink":"//span[@class=\"pagination\"]/a[contains(text(),\"next\")]"
},
{
"pageElement":"id(\"contentleft\")",
"url":"^http://(?:www\\.)?deletedimages\\.com/",
"nextLink":"(//a[contains(@href, \"paged=\")])[last()]"
},
{
"insertBefore":"//div[@class=\"article_navi\"]",
"pageElement":"//div[@class=\"heading_area\"] | //div[@class=\"contents_area\"]",
"url":"^http://premium\\.nikkeibp\\.co\\.jp/em/",
"nextLink":"//div[@class=\"article_navi_right_on\"]/a"
},
{
"pageElement":"id(\"content\")/div[contains(@class, \"post\")]",
"url":"^http://garakuta\\.oops\\.jp/wordpress/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" browse \")]/a[last()]"
},
{
"pageElement":"id(\"album_container megaboxx search_results\")",
"url":"^http://www\\.(?:new\\.)?facebook\\.com/",
"nextLink":"//ul[@class=\"pagerpro\"]/li[@class=\"current\"]/following-sibling::li[1]/a"
},
{
"pageElement":"//table[contains(concat(\" \",@class,\" \"),\" project-list-table \")]/tbody/tr",
"url":"^http://(?:www\\.)?shomei\\.tv/project/",
"nextLink":"//div[@class=\"align_right\"]/a[contains(text(),\"\u6b21\")]"
},
{
"insertBefore":"//table[@class=\"main_naka\"]/ybody/tr/td[last()]",
"pageElement":"id(\"delform\")/table/tbody/tr",
"url":"^http://[^.]+\\.blog\\.shinobi\\.jp/hoge",
"nextLink":"//td[@class=\"changebg\"]/a[text()=\"\u6b21\"]"
},
{
"pageElement":"//div[@class=\"content-body\"]",
"url":"^http://blog\\.goo\\.ne\\.jp/yukoyajima/",
"nextLink":"//li[@class=\"mod-pre-nex-prev\"]/a"
},
{
"pageElement":"id(\"photo-list\")",
"url":"^http://r\\.tabelog\\.com/.+/photo_?lst",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//div[@class=\"pagePos\"]/parent::div",
"url":"^http://dictionary\\.goo\\.ne\\.jp/srch/",
"nextLink":"//a[@title=\"next page\"]"
},
{
"pageElement":"id(\"ev-view\")",
"url":"^http://(?:www\\.)?cotosaga\\.com/list/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"//div[@class=\"container\"]/div[5]",
"url":"^http://www\\.dafont\\.com/theme\\.php\\?",
"nextLink":"//div[@class=\"titlebar\"]/div[@class=\"noindex\"]/a[last()]"
},
{
"pageElement":"//div[@class=\"image-pagenation\"][1]/following-sibling::*[1]",
"url":"^http://journal\\.mycom\\.co\\.jp/photo/",
"nextLink":"//img[@src=\"/images/btn_next02.gif\"][1]/parent::a"
},
{
"insertBefore":"//div[@class=\"Pages\"]",
"pageElement":"//table[@class=\"PhotoStream\"]",
"url":"^http://(?:www\\.)?flickr\\.com/photos/",
"nextLink":"//a[@class=\"Next\"]"
},
{
"insertBefore":"//table[@class=\"main_naka\"]/tbody/tr/td/table/tbody/tr/td/form/table/tbody/tr[last()]",
"pageElement":"//table[@class=\"main_naka\"]/tbody/tr/td/table/tbody/tr/td/form/table/tbody/tr",
"url":"^http://[^.]+\\.blog\\.shinobi\\.jp/hoge",
"nextLink":"//td[@class=\"changebg2\"]/div/a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"//div/img",
"url":"^http://hirotaku\\.fc2web\\.com/mannga/",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"productReviews\")",
"url":"^https?://www\\.amazon\\.co\\.jp/review/",
"nextLink":"//span[@class=\"paging\"]/span[@class=\"on\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"content-main1\")/form/table[@class=\"search-results\" and position()=3]/tbody/tr",
"url":"^http://w3\\.ibm\\.com/search/do/search",
"nextLink":"//th[contains(concat(\" \",@class,\" \"),\" results-sequence \")]/a[text()=\"Next\"]"
},
{
"pageElement":"//div[@class=\"ys\"]/table[2]/tbody/tr[position()>2]",
"url":"^http://www\\.amazon\\.de/gp/yourstore/",
"nextLink":"//a[child::img[contains(@src, \"more-results\")]]"
},
{
"pageElement":"//div[@class=\"searchresult\"]/dl",
"url":"^http://search\\.livedoor\\.com/search/",
"nextLink":"//a[descendant::img[@src=\"/img/cmn/pager_arrow_after.gif\"]]"
},
{
"pageElement":"//ul[@class=\"view-photo\"]",
"url":"^http://gree\\.jp/\\?mode=dir&act=album",
"nextLink":"//div[@class=\"paging\"]/a[last()]"
},
{
"insertBefore":"id(\"searchresult\")/following-sibling::*[1][self::div] | id(\"storeContent\")",
"pageElement":"id(\"searchresult\") | //div[@class=\"itemListWrapper\"]",
"url":"^http://www\\.muji\\.net/store/cmdty/se",
"nextLink":"//p[@class=\"next\"]/a"
},
{
"pageElement":"id(\"Search\")/div[not(@class=\"pagination\")]",
"url":"^http://crossreview\\.jp/search/result",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"pageElement":"id(\"body\")//div[@class=\"published\"]",
"url":"^http://bakery\\.cakephp\\.org/articles",
"nextLink":"id(\"body\")//div[@class=\"paging\"]//a[contains(text(), \"next\")]"
},
{
"pageElement":"//td[contains(@class, \"articl_color\")]/../../..",
"url":"^http://(?:www\\.)?hotexpress\\.co\\.jp/",
"nextLink":"//img[contains(@src, \"next_before\")]/.."
},
{
"pageElement":"id(\"in-center\")/div[@class=\"content-2c\"]/div[@class=\"content-body\"]/div[@class=\"mod-entry-set\"]/div[@class=\"entry\"]",
"url":"^http://blog\\.goo\\.ne\\.jp/sppw6739/e/",
"nextLink":"id(\"in-center\")/div[@class=\"content-2c\"]/div[@class=\"content-body\"]/div[@class=\"mod-entry-set\"]/div[@class=\"entry\"]/div[@class=\"entry-body\"]/div[@class=\"entry-body-text\"]/a"
},
{
"pageElement":"//span[@class=\"nonprint\"]",
"url":"^http://(?:www\\.)?wtop(?:news)?\\.com/",
"nextLink":"//a[text()=\"Next page\"]"
},
{
"insertBefore":"id(\"pageNavi\")",
"pageElement":"id(\"tabContents\")//div[contains(concat(\" \", @class, \" \"), \" box05 \")]",
"url":"^http://(bbs|review)\\.kakaku\\.com/\\1/",
"nextLink":"id(\"pageNavi\")//a[@class=\"arrowNext01\"]"
},
{
"insertBefore":"//hr/following-sibling::table[@align=\"right\"]",
"pageElement":"//hr/following-sibling::table[@align=\"right\"]/preceding-sibling::node()[not(self::center or self::p or self::hr and @width)]",
"url":"^http://alfh\\.sakura\\.ne\\.jp/.+\\.htm$",
"nextLink":"//form[substring(@action, string-length(@action) - string-length(\".htm\") + 1) = \".htm\"][last()]"
},
{
"pageElement":"//div[contains(concat(' ',@class,' '),' entry-asset ')]",
"url":"^http://kossie\\.net/blog/[^/]+/[^/]+/",
"nextLink":"//div[@class=\"content-nav\"]/a[starts-with(text(),\"\u675f\")]"
},
{
"insertBefore":"//div[@class=\"ranking-button-area clearfix\"]",
"pageElement":"id(\"ranking-top\")",
"url":"^http://(?:www\\.)?woopie\\.jp/ranking/",
"nextLink":"//div[@class=\"page-navigation clearfix\"]/a[@class=\"page-next\"]"
},
{
"pageElement":"//td[contains(.,\" views\")]/..|//*[contains(text(), \"Goto page\")]/../following-sibling::tr",
"url":"^http://(?:[^.]+\\.)?lazygirls\\.info/.",
"nextLink":"//*[contains(text(), \"Goto page\")]/a[last()]"
},
{
"pageElement":"id(\"article\")",
"url":"^http://www\\.macdevcenter\\.com/pub/a/",
"nextLink":"id(\"page-break\")//td[last()]//a"
},
{
"insertBefore":"//div[@class=\"footer-copy-text\"]",
"pageElement":"//div[1]/table[1]/tbody/tr[3]/td/table/tbody/tr[3]/td[2]/table[1]",
"url":"^http://portal\\.acm\\.org/results\\.cfm",
"nextLink":"//a[contains(text(), \"next\")][last()]"
},
{
"insertBefore":"//p[last()]",
"pageElement":"//table[@class=\"gamebrowser_table\"]",
"url":"^http://(?:www\\.)?boardgamegeek\\.com/",
"nextLink":"//div[@class=\"simplebox\"]/table/tbody/tr/td/table/tbody/tr/td/p/a[last()-1]"
},
{
"pageElement":"id(\"main\")/div[contains(concat(\" \", @class, \" \"), \" article \")][1]/following-sibling::img[1]/following-sibling::*[following::img[contains(concat(\" \", @class, \" \"), \" border \")][contains(@src, \"/img/round_l_t.gif\")]]",
"url":"^http://dic\\.nicovideo\\.jp/m/[nu]/res",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pager \")]/a[starts-with(text(), \"\u6b21\")]"
},
{
"pageElement":"//div[@class=\"inarticleBox\"]",
"url":"^http://waga\\.nikkei\\.co\\.jp/comfort/",
"nextLink":"//li[@class=\"onLink\"]/a[contains(text(),\"\u6b21\u3078\")]"
},
{
"pageElement":"id(\"bodyMainArea\")/div[contains(concat(\" \", @class, \" \"), \" newFriendDiaryArea \")]",
"url":"^http://mixi\\.jp/new_friend_diary\\.pl",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pageNavigation01 \")]//a[starts-with(text(),\"\u6b21\u3092\")]"
},
{
"pageElement":"//table[@cellpadding=\"4\" and @align=\"center\"]/following-sibling::table[@cellpadding=\"2\"]",
"url":"^http://cure\\.livedoor\\.com/category/",
"nextLink":"//table[@cellpadding=\"4\" and @align=\"center\"]//td[@align=\"right\"]/a[text()=\"\u6b21\u3078>>\" or text()=\"\u6b21\u306e\u30da\u30fc\u30b8>>\"]"
},
{
"pageElement":"//div[@class=\"twit\"]",
"url":"^http://(?:www\\.)?textism\\.com/favrd/",
"nextLink":"//a[@class=\"older\"]"
},
{
"pageElement":"id(\"story\")",
"url":"^http://www\\.builderau\\.com\\.au/news/",
"nextLink":"//div[@class=\"pages\"]/a[last()]"
},
{
"insertBefore":"id(\"pageLink\")/p",
"pageElement":"id(\"contents\")",
"url":"^http://nanigashi3\\.blog40\\.fc2\\.com/",
"nextLink":"id(\"pageLink\")/p/a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8 \u226b\"]"
},
{
"pageElement":"id(\"overmenu\")/following-sibling::*[following-sibling::*[@id=\"undermenu\"] and position()>4 and position()<last()-4]",
"url":"^http://www\\.dmm\\.com/digital/bandai/",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"insertBefore":"//*[@class=\"content-nav_head\"]",
"pageElement":"//*[@class=\"entry-asset asset\"]",
"url":"^http://gs\\.dengeki\\.com/suteki/blog/",
"nextLink":"//*[@class=\"content-nav_foot\"]/a[1]"
},
{
"pageElement":"//center",
"url":"^http://www\\.cepolina\\.com/freephoto/",
"nextLink":"//center/table/tbody/tr/td/a[last()]"
},
{
"pageElement":"//div[@class=\"publicRatingAll\"]//div[@class=\"commentContainer\"]",
"url":"^http://tv\\.yahoo\\.co\\.jp/review/\\d+/",
"nextLink":"//span[@class=\"paging\"]/a[last()]"
},
{
"pageElement":"id(\"co_explain\")/*[not(@id=\"co_explainLink\") and not(descendant::img[contains(@src, \"btn_print.gif\")])]",
"url":"^http://pc\\.nikkeibp\\.co\\.jp/article/",
"nextLink":"id(\"co_pagenumLink\")/p[@class=\"arrowR\"]/a"
},
{
"insertBefore":"id(\"nextpage\")",
"pageElement":"id(\"body\")",
"url":"^http://www\\.channelregister\\.co\\.uk/",
"nextLink":"//a[starts-with(text(), \"Next\")]"
},
{
"pageElement":"id(\"article\")/span[@class=\"body\"]/p\r\n",
"url":"^http://www\\.securityfocus\\.com/news/",
"nextLink":"//span[@class=\"pages\"]/a[text()=\"next\"]"
},
{
"pageElement":"id(\"content\")/div[@class=\"photo_box_main\"]/div[@class=\"photo_main_left\"]/a/img",
"url":"^http://(?:www\\.)?ota-suke\\.jp/photo/",
"nextLink":"id(\"content\")/div[@class=\"photo_box_main\"]/div[@class=\"photo_main_left\"]/a"
},
{
"pageElement":"id(\"main\")/div[starts-with(@class,\"articles\")]",
"url":"^http://[^.]+\\.blog\\.so-net\\.ne\\.jp/",
"nextLink":"//span[@class=\"previousLink\"]/a"
},
{
"pageElement":"//div[@class=\"section graphs\"]",
"url":"^http://xpath\\.kayac\\.com/search\\?q=",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"//div[@class=\"navheader\"]/../div",
"url":"^http://(?:www\\.)?producingoss\\.com/",
"nextLink":"//div[@class=\"navheader\"]//a[@accesskey=\"n\"]"
},
{
"pageElement":"id(\"article\")",
"url":"^http://codezine\\.jp/article/detail/",
"nextLink":"//td[@class=\"pg_bar_next\"]/a"
},
{
"pageElement":"id(\"left_area\")//div[@class=\"left_page\"][1]/following-sibling::*[following::*[@class=\"left_page\"]]",
"url":"^http://isec-rss\\.ipa\\.go\\.jp/search",
"nextLink":"id(\"left_area\")//div[@class=\"left_page\"]//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"main-content\")/table[@class=\"group-detail\"] | id(\"main-content\")/table[@class=\"group-detail\"]/preceding-sibling::hr[position()=1]",
"url":"^http://sourceforge\\.jp/softwaremap/",
"nextLink":"id(\"main-content\")//a[normalize-space(text())=\"Next >>\"]"
},
{
"pageElement":"//center/table/tbody/tr/td[2]/child::node()",
"url":"^http://w6\\.oroti\\.com/~amaran/rank/",
"nextLink":"//a[@class=\"selected\"]/parent::td/following-sibling::td[1]/a[@class=\"noselected\"]"
},
{
"pageElement":"id(\"photo-list-inner\")",
"url":"^http://idolpics\\.jp/Pics/searchPic/",
"nextLink":"id(\"content\")/ul[@class=\"pagination\"]/li[@class=\"nolink\"]/following-sibling::li/a"
},
{
"pageElement":"id(\"news_con\")/node()[following::*[@id=\"bm_page2\"]] | id(\"centerside\")/div[@class=\"news_con\"]/node()[following::*[@class=\"bm_page2\"]]",
"url":"^https?://(?:www\\.)?toyokeizai\\.net/",
"nextLink":"//a[text()=\"\u6b21\u3078\uff1e\"]"
},
{
"pageElement":"//div[contains(@class,\"thumb\")]",
"url":"^http://themes\\.wordpress\\.net/page/",
"nextLink":"//p[contains(concat(\" \",@class,\" \"),\" pagenav \")]/a[last()]"
},
{
"insertBefore":"(//div[@class=\"page_links\"])[3]",
"pageElement":"//p[@class=\"storybody\"]",
"url":"^http://www\\.computerworld\\.com\\.au/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"insertBefore":"(//span[@class=\"thumb\"])[last()]/following-sibling::node()",
"pageElement":"//span[@class=\"thumb\"]",
"url":"^http://img\\.lolisuki\\.com/post/list",
"nextLink":"id(\"paginator\")/b/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://medt00lz\\.s59\\.xrea\\.com/wp/",
"nextLink":"//a[text()=\"Next \u640d\"]"
},
{
"insertBefore":"id(\"main\")/ul[@class=\"topics_ul\"]/following-sibling::*[1]",
"pageElement":"id(\"main\")/ul[@class=\"topics_ul\"]",
"url":"^http://jp\\.meritdemerit\\.com/topics",
"nextLink":"id(\"main\")/a[contains(text(), \"Next\")]"
},
{
"pageElement":"//*[@class=\"entry\"]",
"url":"^http://yaplog\\.jp/[^/]+/(?!archive)",
"nextLink":"//*[@class=\"page\" or @class=\"page s\" or @class=\"posted\" or @class=\"pagenavi01\"]//a[contains(text(),\"\u524d\u3078\") or contains(text(),\"BACK\")]"
},
{
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://blog\\.nicovideo\\.jp/.+\\.php$",
"nextLink":"id(\"navibar\")/a[1]"
},
{
"pageElement":"//div[@class=\"mgnTop10\"]",
"url":"^http://drawr\\.net/(new|thread)\\.php",
"nextLink":"(//p[@class=\"left-food-link\"])[last()]/a"
},
{
"pageElement":"id(\"content\")/div[contains(@class,\"post\")]",
"url":"^http://status\\.secondlifegrid\\.net/",
"nextLink":"//div[contains(concat(\" \",@class,\" \"),\" alignleft \")]/a[starts-with(text(),\"\u675f\")]"
},
{
"pageElement":"id(\"inner\")",
"url":"^http://people\\.zozo\\.jp/[^/]+/diary",
"nextLink":"//a[contains(text(), \"\u6b21\u306e5\u4ef6\")]"
},
{
"pageElement":"id(\"mb_articlebody\")",
"url":"^http://trendy\\.nikkeibp\\.co\\.jp/lc/",
"nextLink":"id(\"pages\")/a[@class=\"b\"][last()] | //a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"id(\"main\")/table[last()]",
"url":"^http://live23\\.be-to\\.org/jlab-10s/",
"nextLink":"id(\"main\")/a[last()]"
},
{
"pageElement":"id(\"article_box\")/p",
"url":"^http://(?:www\\.)?iht\\.com/articles/",
"nextLink":"id(\"pagination\")/a[text()=\"Next Page\"]"
},
{
"pageElement":"id(\"fullpagecontent\")/div[@class=\"normal\"] | id(\"articleend\")",
"url":"^http://techreport\\.com/articles\\.x/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id(\"main\")/div",
"url":"^http://netreview3\\.blog7\\.fc2\\.com/",
"nextLink":"//li[@class=\"older\"]/a"
},
{
"pageElement":"id(\"content\")",
"url":"^http://drawr\\.net/fav(ing|ter)\\.php",
"nextLink":"//div[@class=\"floright\"]/a[starts-with(text(), \"Next\")]"
},
{
"pageElement":"//tr[child::td[@class=\"f10pt130\"]][descendant::h2]",
"url":"^http://www\\.stackasterisk\\.jp/tech/",
"nextLink":"//span[@class=\"prevNext\"][contains(text(),\">>\")]/parent::a"
},
{
"pageElement":"//div[@class=\"oneEntry\" or @id=\"comment-trackback\"]",
"url":"^http://blog\\.goo\\.ne\\.jp/ikedanobuo",
"nextLink":"//a[child::span[@class=\"etNextPrev\"]]"
},
{
"pageElement":"//div[@class=\"blog\"]/div[@class=\"blogbody\"]",
"url":"^http://twwatcher\\.blog20\\.fc2\\.com/",
"nextLink":"//div[@class=\"pagenavi\"]/a[last()]"
},
{
"pageElement":"id(\"yschpri\")",
"url":"^http://search\\.yahoo\\.co\\.jp/search",
"nextLink":"id('yschnxtb')/a"
},
{
"pageElement":".//div[@class=\"data\"]//li",
"url":"^http://(?:search|www)\\.pandora\\.tv/",
"nextLink":".//div[@class=\"paging\"]/a[@class=\"on\"]/following-sibling::a[1]"
},
{
"insertBefore":"id(\"discuss\")",
"pageElement":"id(\"article\")",
"url":"^http://www\\.sciam\\.com/article\\.cfm",
"nextLink":"id(\"article\")/span[@class=\"pagination\"]/a"
},
{
"pageElement":"id(\"main\")/div[not(@class=\"page_navi\")]",
"url":"^http://irohairo\\.blog108\\.fc2\\.com/",
"nextLink":"//div[@class=\"page_navi\"]/a[start-with(text(),\"\u675f\")]"
},
{
"pageElement":"id(\"content\")/descendant::*[./following-sibling::*/descendant-or-self::p[@class=\"hrz\"]]",
"url":"^http://news\\.www\\.infoseek\\.co\\.jp/",
"nextLink":"id(\"content\")//p[@class=\"hrz\"]/b[2]/a"
},
{
"pageElement":"(//div[contains(@id, \"product_\")]/ancestor::table)[last()]",
"url":"^http://(?:www\\.)?threadless\\.com/\\w",
"nextLink":"//a[contains(concat(\" \", @class, \" \"), \" selected \")]/following-sibling::a[1]"
},
{
"pageElement":"id(\"left\")/child::node()",
"url":"^http://vocaloid\\.blog120\\.fc2\\.com/",
"nextLink":"id(\"left\")/a[last()]"
},
{
"pageElement":"//div[@class=\"content-body\"]",
"url":"^http://blog\\.goo\\.ne\\.jp/herbsaison",
"nextLink":"//a[child::span[text()=\"\u524d\u30da\u30fc\u30b8\"]]"
},
{
"pageElement":"//div[@class=\"phxcms_normal_format\"]",
"url":"^http://www\\.phoronix\\.com/scan\\.php",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" phxcms_navigation_format \")][last() - 1]/div[contains(concat(\" \", @class, \" \"), \" phxcms_navigation_hover_box \")][last()]/a"
},
{
"pageElement":"id(\"maincolumn\")//h2//following-sibling::node()[following::div[@id=\"pagenav\"]]",
"url":"^http://www\\.techworld\\.jp/channels/",
"nextLink":"//p[contains(concat(\" \", @class, \" \"), \" pagenp \")][last()]/a[last()]"
},
{
"pageElement":"id(\"content\")/table[@class=\"tlist\"]",
"url":"^http://sukebe\\.nyaatorrents\\.org/\\?",
"nextLink":"id(\"content\")/table[@class=\"tlist\"]/following-sibling::table/tbody/tr/td[starts-with(text(),\"[\")]/following-sibling::td[1]/a"
},
{
"pageElement":"//div[@class=\"result\"]/div[contains(@class, \"thumb\")]",
"url":"^http://(?:www\\.)?logosauce\\.com/\\w+",
"nextLink":"id(\"next\")/a"
},
{
"insertBefore":"//hr[2]",
"pageElement":"id(\"sample\")/div[2]/node()[self::div[not(descendant::img)] or self::hr[not(preceding-sibling::hr)] or self::br or self::text()][following::form]",
"url":"^http://blegi\\.jp/novel/[0-9]+/view/",
"nextLink":"//a[text()=\"\u6b21\u3078\u226b\"]"
},
{
"pageElement":"//ul[@class=\"UserList\"]",
"url":"^http://wassr\\.(?:jp|com)/my/friend/",
"nextLink":"id(\"PagerNextLink\")"
},
{
"pageElement":"//table[@class=\"barter_list\"]",
"url":"^http://mediamarker\\.net/barter/list",
"nextLink":"//div[@class=\"adbook_pagenavi\"]/a[last()]"
},
{
"pageElement":"id(\"content\")//div[starts-with(@id,\"article\")]",
"url":"^http://www\\.instapaper\\.com/archive",
"nextLink":"//a[span[contains(text(), \"Older items\")]]"
},
{
"pageElement":"id(\"center\")/div[contains(@class,\"ently_outline\")]",
"url":"^http://2channel2\\.blog32\\.fc2\\.com/",
"nextLink":"//p[@class=\"page_navi\"]/a[last()]"
},
{
"pageElement":"id(\"pixflow\")",
"url":"^http://whytheluckystiff\\.net/quiet/",
"nextLink":"id(\"header\")/a[last()]"
},
{
"pageElement":"id(\"brd-main\")",
"url":"^http://crunchbanglinux\\.org/forums",
"nextLink":"//a[contains(text(),\"Next\")]"
},
{
"pageElement":"id(\"main\")",
"url":"^http://pulpsite\\.net/erohoo/word/.",
"nextLink":"id(\"navi\")/a[last()]"
},
{
"insertBefore":"//p[table/tbody/tr/td/font/b[starts-with(text(), \"Go to page:\")]]",
"pageElement":"//td[p/table/tbody/tr/td/font/b[normalize-space(text())=\"Go to page:\"]]/p[3]/following::node()[following::node()/table/tbody/tr/td/font/b[normalize-space(text())=\"Go to page:\"]]",
"url":"^http://(?:www\\.)?wi-fiplanet\\.com/",
"nextLink":"//a[text()=\"Next\"]"
},
{
"pageElement":"//div[@class=\"day\"]",
"url":"^http://(?:www\\.)?fobj\\.com/hisa/d/",
"nextLink":"//span[@class=\"adminmenu\"][1]/a"
},
{
"pageElement":"id(\"main\")/div[contains(@class,\"entry\")]",
"url":"^http://newsteam\\.blog95\\.fc2\\.com/",
"nextLink":"//li[contains(concat(\" \",@class,\" \"),\" older \")]/a"
},
{
"pageElement":"//div[@class=\"cent\"]/div[contains(@class,\"entry\")]",
"url":"^http://kanasoku\\.blog82\\.fc2\\.com/",
"nextLink":"//div[@class=\"cent\"]/div[@class=\"pagenavi\" and position()=24]/div[@class=\"pagenavi_text\"]/a[last()]"
},
{
"pageElement":"id(\"content\")/div[contains(concat(\" \",@class,\" \"),\" post \")]",
"url":"^http://www\\.asaeda\\.com/wordpress/",
"nextLink":"//div[contains(concat(\" \",@class,\" \"),\" alignleft \")]/a[starts-with(text(),\"\u675f\")]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" elementBox \")]",
"url":"^http://kakaku\\.com/.+/ranking_\\d+/",
"nextLink":"//p[contains(concat(\" \", @class, \" \"), \" paging \")]/a[last()]"
},
{
"pageElement":"(//td[@class=\"padder\"]/table)[last()]",
"url":"^http://(?:www\\.)?youmama\\.ru/foto/",
"nextLink":"id(\"Navigator\")/span[@class=\"Page\"]/following-sibling::a[1]"
},
{
"pageElement":"//center/table[last()]/tbody/tr/td/table[@bgcolor=\"#d6ccbb\"]",
"url":"^http://messages\\.yahoo\\.co\\.jp/bbs",
"nextLink":"//center/table/tbody/tr/td//form/small/a"
},
{
"insertBefore":"id(\"main\")/form/table[@class=\"listing\"]/following-sibling::node()[1]",
"pageElement":"id(\"main\")/form/table[@class=\"listing\"]",
"url":"^http://(?:www\\.)?tokyotosho\\.info/",
"nextLink":"id(\"main\")/form/table//tr/td[@class=\"nav\"]/a[contains(text(),\"Next\")]"
},
{
"pageElement":"id(\"main-column\")/div[contains(@class,\"EntryBlock\")]",
"url":"^http://urasoku\\.blog106\\.fc2\\.com/",
"nextLink":"//div[@class=\"pageLink\"]/a[last()]"
},
{
"pageElement":"id(\"main main-column center main_block Main primary-column blog content\")[1]/div | id(\"contents Contents\")[1]/div[not(@id)] | id(\"main\")/table[starts-with(@class, \"entry\")] | id(\"blog_content\")/div[@class] | id(\"right\")/div[@class=\"contents\"] | id(\"primary\")/div[@class=\"entry\"] | id(\"mainBlock\")/div[div] | id(\"entry\") | id(\"box_main\")/table | id(\"left\")/div[@class=\"body\"]",
"url":"^http://[^.]+\\.blog[^.]+\\.fc2\\.com/",
"nextLink":"descendant::a[contains(@href,\"fc2.com/page-\")][last()] | /descendant::a[contains(translate(text(), \"ENTX\", \"entx\"), \"next\")][last()]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" list_view \")] | //table[contains(concat(\" \", @class, \" \"), \" p_v_table \")]",
"url":"^http://(?:[^.]+\\.)?xvn\\.jp/ja/list",
"nextLink":"//div[@class=\"pagination\"]/a[contains(text(), \"\u6b21\u3078\")]"
},
{
"insertBefore":"id(\"date\")",
"pageElement":"id(\"date\")/preceding-sibling::p",
"url":"^http://www\\.urbanhonking\\.com/owl/",
"nextLink":"//a[text()=\"<<\"]"
},
{
"pageElement":"id(\"bbs\")/dl",
"url":"^http://dic\\.nicovideo\\.jp/b/[avu]/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pager \")]/a[starts-with(text(), \"\u6b21\")]"
},
{
"pageElement":"id(\"mainContents\")/div[contains(concat(\" \", @class, \" \"), \" section \")]",
"url":"^http://www\\.sixapart\\.jp/business/",
"nextLink":"//ul[contains(concat(\" \", @class, \" \"), \" entryNavi \")]/li[contains(concat(\" \", @class, \" \"), \" next \")]/a"
},
{
"insertBefore":"id(\"main\")/div[@class=\"pager\"]",
"pageElement":"id(\"main\")/div[@class=\"list\"]",
"url":"^http://s\\.hatena\\.ne\\.jp/.+?/stars",
"nextLink":"id(\"main\")/div[@class=\"pager\"]/a[last()]"
},
{
"pageElement":"id(\"multipage\")/preceding-sibling::*[preceding-sibling::p/@class=\"leafDate\"]|//ul[@class=\"listSet\"]",
"url":"^http://kenplatz\\.nikkeibp\\.co\\.jp/",
"nextLink":"id(\"multipage\")/a[contains(text(),\">\")]"
},
{
"insertBefore":"id(\"main\")/div[@class=\"home_table\"]",
"pageElement":"id(\"main\")/div[@class=\"entry_table\"]",
"url":"^http://eq2bell\\.blog113\\.fc2\\.com/",
"nextLink":"id(\"main\")/div[@class=\"home_table\"]/ul[@class=\"entry_navi\"]/li[last()]/a"
},
{
"pageElement":"id(\"primarycontent\")/div[contains(@class,\"hentry\")]",
"url":"^http://(?:www\\.)?ae-users\\.com/jp/",
"nextLink":"id(\"primarycontent\")/div[@class=\"navigation\"]/div[@class=\"left\"]/a"
},
{
"pageElement":"id(\"mainSearch\")",
"url":"^http://(?:www\\.)?istockphoto\\.com/",
"nextLink":"//div[@class=\"navBar\"]//a[@accesskey=\"n\"]"
},
{
"insertBefore":"//div[@class=\"pager\"]",
"pageElement":"//div[@class=\"content\"]",
"url":"^http://(?:www\\.)?thestandard\\.com/",
"nextLink":"//a[text()=\"next \ue280\"]"
},
{
"pageElement":"//div[@class=\"contentsbox\"]//div[@class=\"text\"][2]",
"url":"^http://(?:www\\.)?webdedb\\.com/cat/",
"nextLink":"id(\"p_navi\")//a[starts-with(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"//div[@class=\"Story\"]",
"url":"^http://www\\.browardpalmbeach\\.com/",
"nextLink":"//span[@class=\"Pagination\"]/a[text()=\"Next Page \u640d\"]"
},
{
"insertBefore":"//div/div[@class=\"page\"]/div/div/table/tbody/tr/td/table/tbody/tr/td/div[@class=\"smallfont\"]",
"pageElement":"//table[@id=\"threadslist\"]",
"url":"^http://www\\.eq2flames\\.com/[^/]+/$",
"nextLink":"//form[@id=\"inlinemodform\"]/table/tbody/tr/td/div[@class=\"pagenav\"]/table[@class=\"tborder\"]/tbody/tr/td[@class=\"alt1\"][last()-1]/a[@class=\"smallfont\"]"
},
{
"insertBefore":"id(\"footer\")",
"pageElement":"//div[@class=\"page_container\"]",
"url":"^http://dev\\.mysql\\.com/doc/refman/",
"nextLink":"//link[@rel=\"next\"]"
},
{
"pageElement":"id(\"main\")/div[starts-with(@id,\"entry\")]",
"url":"^http://appteam\\.blog114\\.fc2\\.com/",
"nextLink":"//li[@class=\"prev\"]/a"
},
{
"pageElement":"id(\"results\")",
"url":"^http://coderepos\\.org/share/search",
"nextLink":"//span[contains(concat(\" \",@class,\" \"),\" next \") and last()]/a"
},
{
"pageElement":"id(\"content\")/div[@class=\"post\"]",
"url":"^http://home\\.officesnapshots\\.com/",
"nextLink":"//a[contains(text(), \"Previous Entries\")]"
},
{
"pageElement":"id(\"wrapper\")/div[@class=\"clip-global\"]",
"url":"^http://clip\\.livedoor\\.com/recent/",
"nextLink":"//a[contains(@class,\"pager-next\")]"
},
{
"pageElement":"descendant::table[preceding-sibling::div/a[contains(text(),\"\u6b21\u3078\")]][1]",
"url":"^http://mkpl\\.jp/(?:item|sellers?)/",
"nextLink":"descendant::div/a[contains(text(),\"\u6b21\u3078\")]"
},
{
"pageElement":"id(\"results\")/ul",
"url":"^http://search\\.twitter\\.com/search",
"nextLink":"id(\"pager-bottom\")/a[@class=\"next\"]"
},
{
"pageElement":"id(\"main_block\")/div[@class=\"entry_block\"]",
"url":"^http://chiquita\\.blog17\\.fc2\\.com/",
"nextLink":"//div[@class=\"pnavi\"]/a[text()=\"NEXT\"]"
},
{
"pageElement":"//ul[@class=\"topic-list\" or @id=\"article_list\"]/li",
"url":"^http://www\\.smashingmagazine\\.com/",
"nextLink":"//div[@class=\"wp-pagenavi\"]/span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"//div[span/@class=\"pagelink\"] | //table[@class=\"ttable\"] | id(\"posts\")",
"url":"^https?://[^?#]+?/showthread\\.php\\?",
"nextLink":"//a[text()=\">\"]"
},
{
"pageElement":"id(\"block_story block_listing\")/*",
"url":"^http://builder\\.japan\\.zdnet\\.com/",
"nextLink":"//span[@class=\"this-page\"]/following-sibling::a"
},
{
"pageElement":"(//td[@class=\"fsM\"]/a[font[@color=\"blue\"]]/ancestor::table[2])[1]/following-sibling::table[1]",
"url":"^https?://joshinweb\\.jp/srh\\.html\\?",
"nextLink":"//td[@class=\"fsM\"]/a[font[@color=\"blue\"]]/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"DIV\"]",
"url":"^http://plaza\\.rakuten\\.co\\.jp/\\w+/",
"nextLink":"//div[@class=\"DIV\"]/following-sibling::h3[1]/a[contains(text(),\"\u524d\")]"
},
{
"pageElement":"//div[@class=\"page\"]/img[1]|//div[@class=\"interview_text\"]",
"url":"^http://touch-ds\\.jp/dsi/interview/",
"nextLink":"//img[starts-with(@name,\"menu\") and parent::td]/ancestor::tr/following-sibling::tr//a"
},
{
"pageElement":"id(\"contents\")/div",
"url":"^http://(?:www\\.)?salchu\\.net/blog/",
"nextLink":"//p[contains(concat(\" \", @class, \" \"), \" pagenavi \")][last()]/a[last()]"
},
{
"pageElement":"id(\"entries\")/div[contains(@class, \"entry\")]",
"url":"^http://(?:[^.]{6}\\.)?sa\\.yona\\.la/",
"nextLink":"id(\"entries\")/div[@class=\"pagination\" and position()=1]/a[@class=\"next_page\" and last()]"
},
{
"insertBefore":"//div[@class=\"resultslinkbar\"]",
"pageElement":"id(\"listing\")",
"url":"^http://iconfactory\\.com/freeware/.",
"nextLink":"id(\"next\")/a"
},
{
"pageElement":"id(\"mainContArea\")/div[@class=\"contents\"][last()]",
"url":"^http://robot\\.tsukumo\\.co\\.jp/dir/",
"nextLink":"id(\"mainContArea\")/div[@class=\"contents\"]/table[@class=\"pageNavi\"][last()]/tbody/tr/td[@class=\"next\"]/a"
},
{
"pageElement":"//div[@class=\"primary-column\"]/div[contains(@class, \"section\")]",
"url":"^http://omoroid\\.blog103\\.fc2\\.com/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"//div[@class='header-navigation-container']/following-sibling::table[1]",
"url":"^http://www\\.evilmadscientist\\.com/",
"nextLink":"//div[@class='pagenav']/a[text()='Next']"
},
{
"pageElement":"id(\"main\")/ul[@class=\"pictures\"]",
"url":"^http://www\\.brusheezy\\.com/brushes",
"nextLink":"//div[@class=\"pager\"]/ul/li[@class=\"nextpage\"]/a"
},
{
"pageElement":"//table[@class=\"contentpaneopen\"]/tbody/tr[descendant::table[@class=\"contenttoc\"]]",
"url":"^http://www\\.photozone\\.de/[^/]+/\\d",
"nextLink":"//div[@class=\"pagenavbar\"]//a[last()]"
},
{
"pageElement":"//div[@class=\"thumb_frm\"]/parent::div",
"url":"^http://www\\.nicovideo\\.jp/ranking/",
"nextLink":"//a[starts-with(@href, \"http://www.nicovideo.jp/ranking/mylist/daily/all\") and contains(text(), \">>\")]"
},
{
"insertBefore":"//div[@class=\"storyCopy\"]//table[//h3]",
"pageElement":"//div[@class=\"storyCopy\"]",
"url":"^http://www\\.popularmechanics\\.com/",
"nextLink":"//a[text()=\"Next \u640d\"]"
},
{
"insertBefore":"id(\"main\")//td[@width=\"510\"]/table/following-sibling::node()",
"pageElement":"id(\"main\")//td[@width=\"510\"]/table",
"url":"^http://blog\\.goo\\.ne\\.jp/kinokoweb",
"nextLink":"//span[@class=\"etNextPrev\"]/parent::a"
},
{
"insertBefore":"//div/div[@class=\"page\"]/div/div/table/tbody/tr/td/div/div[@class=\"page\"]/div",
"pageElement":"//div[@id=\"posts\"]/div/div[@class=\"page\"]/div",
"url":"^http://www\\.eq2flames\\.com/[^/]+/.",
"nextLink":"//div/div[@class=\"page\"]/div/div/table/tbody/tr/td/div/div[@class=\"page\"]/div/table/tbody/tr/td/div[@class=\"pagenav\"]/table[@class=\"tborder\"]/tbody/tr/td[@class=\"alt1\"][last()]/a[@class=\"smallfont\"]"
},
{
"insertBefore":"id(\"contents_search\")/div[@class=\"tohead_kdbc spb10\"]",
"pageElement":"id(\"contents_search\")/div[@class=\"item\"]",
"url":"^http://www\\.hotpepper\\.jp/A_11100/",
"nextLink":"id(\"contents_search\")/div[@class=\"count2 spb20\"]/table/tbody/tr/td[@class=\"icon_next_kdbc\"]/a"
},
{
"pageElement":"//div[contains(concat(\" \",@class,\" \"),\" centerbox \")]/div[contains(concat(\" \",@class,\" \"),\" post \")]",
"url":"^http://www\\.sl-educationblog\\.org/",
"nextLink":"//div[contains(concat(\" \",@class,\" \"),\" alignleft \")]/a[contains(text(),\"Previous\")]"
},
{
"pageElement":"id(\"List1_p\")",
"url":"^http://kakaku\\.com/search_results/",
"nextLink":"id(\"PNavi_PNavi\")//a[@class=\"next\"]"
},
{
"pageElement":"//div[@class=\"entrybody\"]",
"url":"^http://blogmag\\.ascii\\.jp/kodera/",
"nextLink":"//div[@class=\"entryback-next\"]/dl/dd[1]/p/a"
},
{
"pageElement":"//div[@class=\"section\" or @class=\"chapter\" or @class=\"book\"]",
"url":"^http://diveintogreasemonkey\\.org/",
"nextLink":"//div[contains(text(), \"\u2192\")]/a"
},
{
"insertBefore":"//div[@class=\"pager\"]",
"pageElement":"//div[@class=\"page\"]",
"url":"^http://(?:www\\.)?popsci\\.com\\.au/",
"nextLink":"//a[text()=\"next \ue280\"]"
},
{
"insertBefore":"//div[@class=\"resultPages bottom\"]",
"pageElement":"id(\"searchResults\")//div[contains(@class, \"icon\")]",
"url":"^http://(?:www\\.)?iconfinder\\.net/",
"nextLink":"//a[text()=\"Next\"]"
},
{
"insertBefore":"//div[@class=\"fL pS\"]/../..",
"pageElement":"(//div[@class=\"mR165\"]/*)[descendant::*[@class=\"fL pS\"]]/preceding-sibling::*",
"url":"^http://www\\.msnbc\\.msn\\.com/id/\\d",
"nextLink":"//div[@class=\"fL pS\"]/a[contains(text(), \"Next\")]"
},
{
"pageElement":"id(\"left\")/div[contains(@class,\"content\")]",
"url":"^http://ikapani\\.blog55\\.fc2\\.com/",
"nextLink":"id(\"left\")/a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"id(\"bodySection-col1\")",
"url":"^https?://[^.]+\\.backlog\\.jp/rev/.",
"nextLink":"id(\"revisionPagerSection\")/a[contains(text(), \"\u524d\u306e\u30ea\u30d3\u30b8\u30e7\u30f3\")]"
},
{
"pageElement":"id(\"content-main\")/div[@class=\"report\"]/*[following-sibling::ul]",
"url":"^http://(?:[^.]+\\.)?autoc-one\\.jp/",
"nextLink":"id(\"content-main\")//li[@class=\"next\"]/a"
},
{
"pageElement":"//div[@class=\"list\"]",
"url":"^http://[^.]+\\.fotolia\\.com/search",
"nextLink":"//a[@class=\"next\"][1]"
},
{
"pageElement":"id(\"main\")/div",
"url":"^http://www\\.webhistory\\.jpn\\.org/",
"nextLink":"//li[@class=\"older\"]/a"
},
{
"pageElement":"id(\"main\")/div[contains(@class, \"content\")]",
"url":"^http://turenet\\.blog91\\.fc2\\.com/",
"nextLink":"//a[last()][descendant::img[@src=\"http://blog17.fc2.com/u/usedpc/file/to_nextentry.gif\"]]"
},
{
"pageElement":"//div[@class=\"Body\"]",
"url":"^http://arstechnica\\.com/articles/",
"nextLink":"//p[contains(concat(\" \",@class,\" \"),\" Paging \")]/a[last()]"
},
{
"pageElement":"//body/div[@id='banner']/following-sibling::table[1]",
"url":"^http://www\\.512x\\.net/seller/\\w+/",
"nextLink":"//body/table/tbody/tr/td/div[@class='nav']/a[@title='next page']"
},
{
"insertBefore":"id(\"maincontent\")/div[@class=\"pagerize\"]/ul",
"pageElement":"id(\"maincontent\")/div[@class=\"recentList\"]",
"url":"^http://ki(?:chiku|kuchi)\\.oq\\.la/",
"nextLink":"id(\"maincontent\")/div[@class=\"pagerize\"]/ul/li[@class=\"pagelink\"]/a[text()=\">\"]"
},
{
"insertBefore":"//table[@class=\"result-navi\"]",
"pageElement":"//table[@class=\"search-result\"]",
"url":"^http://search\\.smatch\\.jp/smatch/",
"nextLink":"//table[@class=\"result-navi\"]//td[@class=\"page-navi\"]/a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\u3078\"]"
},
{
"pageElement":"id(\"subbody\")/ul[contains(concat(\" \",@class,\" \"),\" file_list \")]/li",
"url":"^http://www\\.vector\\.co.jp/vpack/.",
"nextLink":"id(\"subbody\")/div[contains(concat(\" \",@class,\" \"),\" pagenav \") and last()]/node()[not(self::a) and (number(translate(self::text(),\"|\",\"\")) > 0)]/following-sibling::a[1]"
},
{
"pageElement":"//table[descendant::tr[1]/td/a/font[normalize-space(text())=\"\u25b2\"]]",
"url":"^http://tv\\.www\\.infoseek\\.co\\.jp/",
"nextLink":"//td[img[contains(@src,\"/content/tv/bt_\")]]/following-sibling::td[1]/a"
},
{
"pageElement":"//div[@class=\"gallery-image\"]/child::*[following-sibling::ul[@id=\"gallery-nav\"]]",
"url":"^http://gizmodo\\.com/photogallery/",
"nextLink":"id(\"gallery-next\")/a"
},
{
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://[^.]+\\.cocolog-nifty\\.com/",
"nextLink":"//link[@rel=\"prev\"] | //div[@class=\"entry-nav\"]/p/a"
},
{
"pageElement":"//comment()[string()=\"results\"]/following-sibling::*[following::comment()[string()=\"end results\"]]",
"url":"^http://search\\.cpan\\.org/search\\?",
"nextLink":"//div[@class=\"pages\"]//td//a[last()]"
},
{
"insertBefore":"//div[contains(concat(\" \", @class, \" \"), \" pager-bottom \")][last()]",
"pageElement":"//ol[@class=\"clips\"]",
"url":"^http://clip\\.livedoor\\.com/clips/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"search_result\")/div[@class and not(@class=\"pagelink\")]",
"url":"^http://live\\.nicovideo\\.jp/recent",
"nextLink":"//a[@class=\"nextpage\"]"
},
{
"pageElement":"id(\"slidecontent\")",
"url":"^http://www\\.r6rs\\.org/final/html/",
"nextLink":"//div[@class=\"navigation\"]//a[text()=\"next\"]"
},
{
"pageElement":"id(\"searchresults\")",
"url":"^http://(?:www\\.)?iconfinder\\.net/",
"nextLink":".//div[@class=\"pageslist\"]/a[@class=\"next\"]"
},
{
"pageElement":"//div[@class=\"entry\"][position() > 1]",
"url":"^http://h\\.hatena\\.(?:ne\\.jp|com)/",
"nextLink":"//a[contains(concat(\" \", normalize-space(@rel), \" \"), \" next \")]"
},
{
"pageElement":"id(\"right\")/div[contains(@class, \"items\")]",
"url":"^http://www\\.sunrain-records\\.com/",
"nextLink":"//a[descendant::img[@src=\"../img/navi3_1.gif\"]]"
},
{
"pageElement":"//div[@class=\"daily\"] | id(\"entries\")",
"url":"^http://www\\.urbandictionary\\.com/",
"nextLink":"id(\"paginate_next\") | //a[@rel=\"next\"]"
},
{
"pageElement":"id(\"es\")/div[2]/following-sibling::node()[following-sibling::div]",
"url":"^http://www\\.nikki\\.ne\\.jp/es/\\d+/",
"nextLink":"id(\"es\")/div/b/font[contains(@color, \"cc6600\")]/following::a"
},
{
"pageElement":"//table[@summary=\"item list\"]",
"url":"^http://www\\.graniph\\.com/product/",
"nextLink":"//td[@class=\"newsnext\"]/a[last()]"
},
{
"pageElement":"//div[contains(@class, \"box\")]",
"url":"^http://(?:www\\.)?planet-php\\.org/",
"nextLink":"//span[1]/a"
},
{
"pageElement":"id(\"frame-left\")/div[@class=\"post\"]",
"url":"^http://(?:www\\.)?macthemes2\\.net/",
"nextLink":"//div[@class=\"navigation\"]/div[@class=\"alignleft\"]/a"
},
{
"pageElement":"//ol[@class=\"literature\"]",
"url":"^http://100\\.yahoo\\.co\\.jp/detail/",
"nextLink":"//p[@class=\"more\"]/a"
},
{
"pageElement":"//ul[@class=\"applistverticalwide\"]/li",
"url":"http://iphone\\.orelabo\\.jp/search/",
"nextLink":"//div[@class=\"yui-g\"]/div[@class=\"page\"]/a[starts-with(text(),\"\u6b21\")]"
},
{
"pageElement":"id(\"unitBlockLeft\")/*[not(self::div[@id=\"locationTop\" or @class=\"pageNavi\"])]",
"url":"^http://globe\\.asahi\\.com/article/",
"nextLink":"//p[@class=\"next\"]/a"
},
{
"insertBefore":"//div[@class=\"pagination\"]",
"pageElement":"//div[@class=\"entries\"]",
"url":"^http://mitter\\.jp/(?:videos|tag)/",
"nextLink":"//link[@rel=\"next\"]"
},
{
"pageElement":"id(\"main-contents\")/*[following-sibling::*[@class=\"nextprev\"]]",
"url":"^http://monoist\\.atmarkit\\.co\\.jp/",
"nextLink":"//div[@class=\"nextprev\"]//li[last()][starts-with(@id, \"next\")]/a"
},
{
"pageElement":"id(\"main-column\")/div[contains(@class,\"EntryBlock\")]",
"url":"^http://ksklog\\.blog108\\.fc2\\.com/",
"nextLink":"//div[@class=\"pageLink\"]/a[last()]"
},
{
"pageElement":"id(\"left\")/div[contains(@class, \"post\")]",
"url":"^http://visublog\\.mechafetus\\.com/",
"nextLink":"id(\"footer\")/a[contains(text(),\"Next\")]"
},
{
"pageElement":"//ol",
"url":"^http://www\\.rsvp\\.com\\.au/search/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"//ul[@class=\"pictures\"]",
"url":"^http://www\\.vecteezy\\.com/gallery",
"nextLink":"//div[@class=\"pager\"]/ul/li[@class=\"nextpage\"]/a"
},
{
"pageElement":"//div[@class=\"linkarea\"][1]/preceding-sibling::*[preceding-sibling::div[@class=\"tit_bor\"]]|//ul[@class=\"collist00\"]",
"url":"^http://sportsnavi\\.yahoo\\.co\\.jp/",
"nextLink":"//div[@class=\"linkarea\"]//b[text()=\"\u25c6\u524d\u5f8c\u306e\u30da\u30fc\u30b8\"]/following-sibling::b/following-sibling::a|//small/center/a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"insertBefore":"//div[@class=\"nav\"]",
"pageElement":"//div[@class=\"post-cat1\"]",
"url":"^http://www\\.supercentral\\.org/lk/",
"nextLink":"//div[@class=\"navold\"]/a[last()]"
},
{
"pageElement":"id(\"visiblebms\")/div[contains(@class, \"saveitem\")]",
"url":"^http://bookmarks\\.yahoo\\.co\\.jp/.",
"nextLink":"//a[contains(concat(\" \", @class, \" \"), \" next \")]"
},
{
"pageElement":"//div[@class=\"post\"]",
"url":"^http://my\\.opera\\.com/[^/]+/blog/",
"nextLink":"//span[@class=\"nxt\"]/a"
},
{
"insertBefore":"id(\"body\")/div[@class=\"pager-index\"]",
"pageElement":"//table[@class=\"list\"]",
"url":"^http://m\\.hatena\\.(?:ne\\.jp|com)/",
"nextLink":"id(\"body\")/div[@class=\"pager-index\"]/a[contains(text(), \">\")]"
},
{
"pageElement":"//div[@class=\"section\"]",
"url":"^http://(?:www\\.)?cakephp\\.jp/doc/",
"nextLink":"//a[@accesskey=\"n\"]"
},
{
"insertBefore":"(//div[@class=\"pageNavigationArea\"])[last()]",
"pageElement":"//ul[@class=\"memo\"]",
"url":"^http://1470\\.net/list/memo/recent",
"nextLink":"(//div[@class=\"pageNavigationArea\"]//a)[last()]"
},
{
"insertBefore":"//div[@class=\"resultNum3\"]",
"pageElement":"//div[@class=\"epfbMain\"]",
"url":"^http://(?:www\\.)?bellemaison\\.jp/",
"nextLink":"//div[@class=\"resultNum3\"]/a[last()]"
},
{
"insertBefore":"id('mtFooter')",
"pageElement":"//div[@class='mtDaily']",
"url":"^http://idm\\.s9\\.xrea\\.com/ratio/",
"nextLink":"//div[@class='hornavi']/a"
},
{
"pageElement":"id(\"main\")/div[contains(@class,\"entry\")]",
"url":"^http://liosk\\.blog103\\.fc2\\.com/",
"nextLink":"id(\"main\")/div[@class=\"navi\" and last()]/a[last()]"
},
{
"insertBefore":"//*[@class=\"list-more\"]",
"pageElement":"//ol[@class=\"organic\"]",
"url":"^http://clusty\\.(?:com|jp)/search",
"nextLink":"//a[@class=\"listnext\"][1]"
},
{
"pageElement":"//table[@class='maintable']",
"url":"^http://bitgamer\\.com/browse\\.php",
"nextLink":"//b[contains(text(),'Next >>')]"
},
{
"pageElement":"//div[@class=\"post\"]",
"url":"^http://akane-m\\.net/lo/rakugaki/",
"nextLink":"//a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")][last()]"
},
{
"pageElement":"id(\"storybody\")",
"url":"^http://(?:www\\.)?wvgazette\\.com/",
"nextLink":"//a[@class=\"nextPage\"]"
},
{
"insertBefore":"id(\"pages\")",
"pageElement":"id(\"video-listing\")",
"url":"^http://(?:[^.]+\\.)?youporn\\.com/",
"nextLink":"id(\"pages\")/a[last()]"
},
{
"pageElement":"//td[contains(@class, \"main-td\")]/table/tbody/tr/td[2]/table",
"url":"^http://doujinshi\\.mugimugi\\.org/",
"nextLink":"//a[normalize-space()=\"NEXT\"]"
},
{
"insertBefore":"id(\"bodypagelink\")",
"pageElement":"id(\"article\")",
"url":"^http://allabout\\.co\\.jp/finance/",
"nextLink":"//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"id(\"search_result\")/ul/li",
"url":"^http://search2\\.naturum\\.co\\.jp/",
"nextLink":"//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8>>\"]"
},
{
"insertBefore":"id(\"content\")/ul",
"pageElement":"id(\"content\")/*[self::div or self::h2]",
"url":"^http://www\\.newsfirex\\.com/blog/",
"nextLink":"id(\"content\")/ul[@class=\"postfoot\"]/li[@class=\"icon prev\"]/a[last()]"
},
{
"pageElement":"//div[contains(concat(\" \",@class,\" \"),\" post \")]",
"url":"^http://alpha\\.mixi\\.co\\.jp/blog/",
"nextLink":"//a[contains(text(),\"\u6b21\u30da\u30fc\u30b8\u3078\")]"
},
{
"pageElement":"//div[@class=\"wrap\"]/div[@class=\"left\"]/div[@class=\"border channel\"]",
"url":"^http://up\\.b9dm\\.com/search\\.php",
"nextLink":"id(\"multi_page\")/a[@class=\"nextpage\"]"
},
{
"pageElement":"id(\"content\")/div[contains(@class,\"post\")]",
"url":"^http://www\\.kagitaku\\.com/diary/",
"nextLink":"//span[@class=\"current\"]/following-sibling::a[1]"
},
{
"insertBefore":"//div[@class=\"wpPagination\"]",
"pageElement":"//div[@class=\"wpDisplay\"]",
"url":"^http://www\\.socwall\\.com/browse/",
"nextLink":"//div[@class=\"wpPagination\"]/a[last()]"
},
{
"pageElement":"id(\"_____01\")",
"url":"^http://fashion\\.chintai\\.net/pc/",
"nextLink":"id(\"_____3\")//img[@src=\"images/memberunder1_03.gif\"]/parent::node()"
},
{
"pageElement":"id(\"posts\")",
"url":"^http://www\\.pagalguy\\.com/forum/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"insertBefore":"//table[@class=\"highlighttable\"][2]",
"pageElement":"//table[@class=\"highlighttable\"][1]/following-sibling::table",
"url":"^http://(?:www\\.)?shoutcast\\.com/",
"nextLink":"//a[text()=\"[ Next ]\"]"
},
{
"pageElement":"id(\"conts\")",
"url":"^http://[^.]+\\.\\d+\\.dtiblog\\.com/",
"nextLink":"id(\"entry_guide\")/li[last()]/a"
},
{
"pageElement":"id(\"content\")/div",
"url":"^http://(?:www\\.)?1mpage\\.com/b/.",
"nextLink":"//a[@title=\"next page\"]"
},
{
"pageElement":"id(\"contents_inner\")/div[contains(@class, \"latest_posts\")]",
"url":"^http://www\\.secondtimes\\.net/vw/",
"nextLink":"//span[@class=\"next\"]/a"
},
{
"pageElement":"id(\"video_grid\")",
"url":"^http://(?:[^.]+\\.)?youtube\\.com/",
"nextLink":"//span[@class=\"pagerCurrent\"]/following-sibling::a"
},
{
"pageElement":"id(\"videosPofileVideos favoritesPofileVideos user_friends-body user_subscribers-body user_subscriptions-body\")",
"url":"^http://www\\.youtube\\.com/profile",
"nextLink":"id(\"videosPofileVideos favoritesPofileVideos user_friends-body user_subscribers-body user_subscriptions-body\")//a[contains(@href, \"start=\") and position()=last()]"
},
{
"insertBefore":"(//div[@class=\"navigator\"])[last()]",
"pageElement":"//div[@class=\"navigator\"]/ancestor::center/*[not(@class=\"navigator\")]",
"url":"^http://knuttz\\.net/hosted_pages/",
"nextLink":"((//div[@class=\"navigator\"])[last()]//a)[last()]"
},
{
"pageElement":".//div[@class=\"section entry\"]",
"url":"^http://(?:www\\.)?ideaxidea\\.com/",
"nextLink":".//a[parent::li[@class=\"older\"]]"
},
{
"pageElement":"id(\"threadslist\")",
"url":"^https?://.+?/forumdisplay\\.php\\?",
"nextLink":"//table/tbody/tr/td[@class='alt2' and span]/following-sibling::td[@class='alt1'][1]/a[string-length(text())>0 and translate(text(),'0123456789','')=''] "
},
{
"pageElement":"//ul[@class=\"users\"]/li",
"url":"^http://stack\\.nayutaya\\.jp/users",
"nextLink":"id(\"content-body-inner\")/div[last()]/div[@class=\"pagination\" and last()]/a[last()]"
},
{
"pageElement":"id(\"main\")/div[contains(@class,\"entry\")]",
"url":"^http://cento\\.sakura\\.ne\\.jp/sb/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//*[not(self::div) and preceding-sibling::div[@class=\"text\"]]",
"url":"^http://c\\.wjob\\.jp/srch\\.php\\?.+",
"nextLink":"//div[@class=\"text\" and position()=last()]/a[contains(text(),\"\u6b21\")]"
},
{
"pageElement":"(//table[@class=\"topicslist\"] | id(\"reslist\"))",
"url":"^http://komachi\\.yomiuri\\.co\\.jp/",
"nextLink":"//a[@class=\"nxt\"]"
},
{
"pageElement":"id(\"search_result\")/table",
"url":"^http://nico\\.grn-web\\.net/search",
"nextLink":"//div[@class=\"page\"]/a[@class=\"now\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"main\")/div",
"url":"^http://doupon\\.blog36\\.fc2\\.com/",
"nextLink":"//div[@class=\"page_navi2\"]/a[last()]"
},
{
"pageElement":"id(\"main-column\")/div[contains(@class,\"EntryBlock\")]",
"url":"^http://alsoku\\.blog47\\.fc2\\.com/",
"nextLink":"//div[@class=\"pageLink\"]/a[last()]"
},
{
"insertBefore":"//a[@class=\"pagination\"]/parent::span/parent::div/preceding-sibling::div[1]",
"pageElement":"id(\"searchResults\")",
"url":"^http://www\\.cafepress\\.com/buy/*",
"nextLink":"//a[@class=\"pagination\"][text()=\" Next >\"]"
},
{
"pageElement":"//div[@class=\"blackborder\"]",
"url":"^http://(?:www\\.)?hel-looks\\.com/",
"nextLink":"//a[text()=\"NEXT >>\"]"
},
{
"pageElement":"id(\"allfeatures\")/div[.//img]",
"url":"^http://(?:www\\.)?weardrobe\\.com/",
"nextLink":"//a[contains(concat(\" \",@class,\" \"),\" pagelink \")][last()]"
},
{
"pageElement":"//table[contains(concat(\" \",@class,\" \"),\" blog \")]//tr",
"url":"^http://(?:www\\.)?2lifeblog\\.com/",
"nextLink":"//a[contains(concat(\" \",@class,\" \"),\" pagenav \") and starts-with(text(),\"Next\")]"
},
{
"pageElement":"//div[@class=\"entry-body\"]",
"url":"^http://gura5\\.blog120\\.fc2\\.com/",
"nextLink":"//p[@class=\"prev-next-navi\"]/a[contains(@title,\"\u6b21\u9801\")]"
},
{
"pageElement":"//li[@class=\"thumb\"]",
"url":"^http://www\\.animemahou\\.com/post",
"nextLink":"id(\"paginator\")/a[@class=\"arrow\"][last()]"
},
{
"pageElement":"id(\"centercol\")/p[@class=\"nextprev\" or span[@class=\"nextprev\"]]/following-sibling::node()[following-sibling::p[@class=\"nextprev\"] or following-sibling::p/span[@class=\"nextprev\"]]",
"url":"^http://www\\.atmarkit\\.co\\.jp/im/",
"nextLink":"id(\"centercol\")//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\" or strong[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]]"
},
{
"pageElement":"id(\"article-body\")",
"url":"^http://sourceforge\\.jp/magazine/",
"nextLink":"//a[@class=\"next-page\"]"
},
{
"pageElement":"id(\"left_box\")/div[(position()>1) and (position()<last())]",
"url":"^http://www\\.namaan\\.net/result\\?",
"nextLink":"//a[descendant::img[@src=\"http://www.namaan.net/img/foot-an.gif\"]]"
},
{
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://(?:[^.]+\\.)+typepad\\.com/",
"nextLink":"//a[span=\"Next\"]"
},
{
"pageElement":"id(\"GALLERY\")//table[@class=\"maintableb\"]/tbody/tr[position()<last()-1]",
"url":"^http://moefactor\\.fan-site\\.net/",
"nextLink":"id(\"GALLERY\")//td[@class=\"tableb_compact\"]/following-sibling::td[@class=\"navmenu\"][1]/a"
},
{
"pageElement":"id(\"scored_results\")",
"url":"^http://(?:www\\.)?macupdate\\.com/",
"nextLink":"id(\"pagedNavigation\")/a[@class=\"navpage curpage\"]/following-sibling::a[@class=\"navpage\"]"
},
{
"pageElement":"//table//table//tr/td",
"url":"^http://campus\\.nikki\\.ne\\.jp/\\?.",
"nextLink":"//table//table//tr/td/font/div/a"
},
{
"pageElement":"//table[@class=\"brdr\"]",
"url":"^http://mai-net\\.ath\\.cx/bbs/sst/",
"nextLink":"//table[@class=\"brdr\"]//a[contains(text(), \"\u6b21\u3092\u8868\u793a\u3059\u308b\")]"
},
{
"pageElement":"id(\"main-content\")",
"url":"^http://www\\.fringebloggers\\.com/",
"nextLink":".//div[@class=\"Nav\"]/strong[@class=\"on\"]/following-sibling::a[1]"
},
{
"pageElement":"//div[1]",
"url":"^http://www\\.freerangestock\\.com/",
"nextLink":"//span[@class=\"current\"]/following-sibling::a"
},
{
"pageElement":"//table[@class=\"listtable\"]",
"url":"^http://[^.]+\\.supleks\\.jp/search",
"nextLink":"//td[@class=\"tsp\"]/a[contains(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"web\")/ol",
"url":"^http://search\\.yahoo\\.com/search",
"nextLink":"id(\"pg-next\")"
},
{
"pageElement":"id(\"page6_contents\")/*[following::div[@class=\"article_paging\"]]",
"url":"^http://jp\\.ibtimes\\.com/article/",
"nextLink":"//a[text()=\"\u6b21\"]"
},
{
"pageElement":"//p[@class=\"searchList\"]",
"url":"^http://hashdb\\.com/search\\.php\\?",
"nextLink":"//a[starts-with(text(), \"\u6b21\u3078\")]"
},
{
"pageElement":"//p[starts-with(@id, \"story-body\")]",
"url":"^http://www\\.chicagotribune\\.com/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"//div[@class=\"contents\"]/div/*[following-sibling::div[descendant::img[contains(@src, \"back.gif\") or contains(@src, \"next.gif\")]]] | //div[@class=\"contents\"]/*[following-sibling::div[descendant::img[contains(@src, \"back.gif\") or contains(@src, \"next.gif\")]]]",
"url":"^http://www\\.techscore\\.com/tech/",
"nextLink":"//a[img[@src=\"/image/next.gif\"]]"
},
{
"pageElement":"//div[@class=\"tutorial\"]",
"url":"^http://www\\.good-tutorials\\.com/",
"nextLink":"//div[@class=\"pagination\"]/a[last()]"
},
{
"insertBefore":"id(\"postnavi\")",
"pageElement":"//div[contains(@class,\"post\")]",
"url":"^http://tech\\.lampetty\\.net/tech/",
"nextLink":"//span[contains(@class,\"older\") or contains(@class,\"next\")]/a"
},
{
"pageElement":"id(\"leaf_body\") | id(\"center\")/div[@class=\"text\"]",
"url":"^http://www\\.nikkeibp\\.co\\.jp/sj/",
"nextLink":"//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"] | id(\"next\")//a[last()]"
},
{
"insertBefore":"//div[@class=\"pageNavigation01 bottom\"]",
"pageElement":"//dl[@class=\"commentList01\"]",
"url":"^http://mixi\\.jp/view_bbs\\.pl\\?.+",
"nextLink":"//div[@class=\"pageNavigation01 top\"]//li[@class=\"on\"]/following-sibling::li[1]/a"
},
{
"pageElement":"id(\"list01\")/table",
"url":"^http://koukan\\.yahoo\\.co\\.jp/jp/",
"nextLink":"id(\"page-nav\")/div[@class=\"next\"]/a[last()]"
},
{
"pageElement":"//table[@class=\"font_12px\"]/tbody/tr",
"url":"^http://www\\.demonoid\\.com/files/",
"nextLink":"(//a[contains(concat(\" \",@class,\" \"),\" menu \")][last()])[contains(text(),\"Next\")]"
},
{
"pageElement":"//ul[@class='novel-list']",
"url":"^http://tategakibunko\\.mydns\\.jp/",
"nextLink":"//a[@rel='next']"
},
{
"pageElement":"//table[@summary=\"files\"]",
"url":"^http://foobar2000\\.xrea\\.jp/up/",
"nextLink":"//p[@class=\"tline\"]/strong/following-sibling::a[1]"
},
{
"pageElement":".//div[@class='mediaItem']",
"url":"^http://(?:www\\.)?humorpix\\.com/",
"nextLink":".//div[@class='paginate']/span[@class='current']/following-sibling::a[1]"
},
{
"pageElement":"//div[contains(concat(\" \",@class,\" \"),\" entry \")]",
"url":"^http://[^.]+\\.blog\\.drecom\\.jp/",
"nextLink":"//div[contains(concat(\" \",@class,\" \"),\" entry \") and last()]/following::a[contains(text(),\"\u6b21\") and last()]"
},
{
"pageElement":"//table[preceding-sibling::center[div[normalize-space(@class)=\"fnt\"]]]",
"url":"^http://(?:www\\.)?uc2\\.jpn\\.org/",
"nextLink":"descendant::div[normalize-space(@class) = \"fnt\"][2]/text()[not(normalize-space(self::text()) = \"Page:\") and (number(normalize-space(self::text())) > 0 or normalize-space(self::text()) = \"Page:0\") ]/following-sibling::a[1]"
},
{
"pageElement":"//ul[@class=\"results\"]/li[contains(@class, \"item\")]",
"url":"^http://www\\.apple\\.com/webapps/",
"nextLink":"(//a[contains(concat(\" \", @class, \" \"), \" next \")])[1]"
},
{
"pageElement":"//div[@class=\"day\" and child::div[@class=\"body\"]]",
"url":"^http://www\\.rubyist\\.net/~matz/",
"nextLink":"//div[@class=\"adminmenu\"]//a[contains(text(),\"\u524d\")]"
},
{
"insertBefore":"//div[@class=\"pagination\"]",
"pageElement":"//div[@class=\"content_text\"]",
"url":"^http://www\\.computerworld\\.com/",
"nextLink":"id(\"next_page\")/a"
},
{
"pageElement":"//div[@class=\"articleBody\"]",
"url":"^http://[^.]+\\.ign\\.com/articles",
"nextLink":"//a[@accesskey=\"n\"]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" columnleft \")]",
"url":"^http://(?:www\\.)?web2rain\\.com/",
"nextLink":"//a[starts-with(text(), \"Next\")]"
},
{
"pageElement":"id(\"siteTable\")",
"url":"^http://(?:[^.]+\\.)?reddit\\.com/",
"nextLink":"//p[@class=\"nextprev\"]/a[last()]"
},
{
"pageElement":"id(\"content3\")/table",
"url":"^http://www\\.pixiv\\.net/ranking.",
"nextLink":"//div[1]/strong/following-sibling::a[1]"
},
{
"pageElement":"id(\"contenedor\")",
"url":"^http://(?:www\\.)?espalpsp\\.com/",
"nextLink":"//a[@class=\"pagi_pv\" and contains(text(),\"Siguiente \u640d\")]"
},
{
"pageElement":"//table[@class=\"blog\"]",
"url":"^http://www\\.clustermonkey\\.net/",
"nextLink":"//a[@class=\"pagenav\"][@title=\"Next\"]"
},
{
"insertBefore":"//div[1]/img[2]",
"pageElement":"//div[1]/node()[self::text() or self::img[not(preceding-sibling::img)] or self::br or self::font[not(preceding-sibling::font)]][preceding-sibling::div[@align=\"center\"]]",
"url":"^http://no-ichigo\\.jp/read/page/",
"nextLink":"//a[@alt=\"#\"]"
},
{
"pageElement":".//div[@class=\"result result_0\" or @class=\"result result_1\"]",
"url":"^http://(?:www\\.)?dilandau\\.com/",
"nextLink":"id(\"next_page\")"
},
{
"pageElement":"id(\"content\")//div[contains(concat(\" \",@class,\" \"), \"post\")]",
"url":"^http://www\\.twingly\\.com/search",
"nextLink":"//div[@class=\"page\"]//li[contains(concat(\" \",@class,\" \"), \"active\")]/following-sibling::*[position()=1]//a"
},
{
"insertBefore":"//table[@cellpadding=\"30\"]/following-sibling::node()",
"pageElement":"//table[@cellpadding=\"30\"]",
"url":"^http://(?:www\\.)?419eater\\.com/",
"nextLink":"//a[child::img[contains(@src, \"nxt_page.gif\")]]"
},
{
"pageElement":"id(\"quickModForm\")",
"url":"^http://sc4devotion\\.com/forums/",
"nextLink":"id(\"quickModForm\")/table/tbody/tr/td[@class=\"middletext\"]/b[not(contains(text(),\"...\"))]/following-sibling::a[1]"
},
{
"pageElement":"id(\"content\")",
"url":"^http://fake\\.dj/secondlife/txp/",
"nextLink":"id(\"content\")/p[last()]/a[text()=\"\u53e4\u3044\u9806\"]"
},
{
"pageElement":".//div[@class='section']/div[@class='video-box']",
"url":"^http://(?:www\\.)?alotporn\\.com/",
"nextLink":".//a[@class='pagination_next']"
},
{
"pageElement":"id(\"primary-column\")/div[@class=\"section\"]",
"url":"^http://e0166\\.blog89\\.fc2\\.com/",
"nextLink":"//p[@class=\"prev-next-navi\"]/a[child::strong[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]]"
},
{
"pageElement":"id(\"wrap\")",
"url":"^http://iorel69\\.wordpress\\.com/",
"nextLink":"//a[contains(text(),\"\u675f Previous Entries\")]"
},
{
"insertBefore":"/html/body/div[@class=\"spacer\"][last()]",
"pageElement":"//table[@width=\"98%\"]",
"url":"^http://\\d+\\.teacup\\.com/\\w+/bbs",
"nextLink":"//a[@class=\"PL_JUMP\"][last()]"
},
{
"pageElement":"//table[contains(concat(\" \", @class, \" \"), \" revisions \")]",
"url":"^http://dic\\.nicovideo\\.jp/revs/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pager \")]/a[starts-with(text(), \"\u6b21\")]"
},
{
"pageElement":"//table[@class=\"list\"]",
"url":"^http://twitter\\.1x1\\.jp/search/",
"nextLink":"//a[text()=\">>\"]"
},
{
"pageElement":"id(\"content\")",
"url":"^http://(?:www\\.)?mp3realm\\.org/",
"nextLink":".//li[@class=\"nextpage\"]/a"
},
{
"pageElement":"//ul[@class=\"flow\"]/li",
"url":"^http://(?:www\\.)?buzzfeed\\.com/",
"nextLink":"//ul[@class=\"paging\"]/li[@class=\"older\"]/a"
},
{
"insertBefore":"id(\"footer\")",
"pageElement":"id(\"article\")",
"url":"^http://www\\.onlamp\\.com/pub/a/.",
"nextLink":"id(\"page-break\")//td/p[@class=\"secondary\"]/a"
},
{
"pageElement":"//div[@class=\"padder\"]/div[@class=\"content\"][2]",
"url":"^http://(?:www\\.)?cssremix\\.com/",
"nextLink":"//dl[@id=\"pagination\"]/dd[@class=\"next_page\"]/a"
},
{
"pageElement":"//div[starts-with(@id, \"illust_c\")]|//div[starts-with(@id, \"illust_c\")]/following-sibling::div[@class=\"clear\"]",
"url":"^http://www\\.pixiv\\.net/response",
"nextLink":"id(\"pixiv\")//a[starts-with(text(), \"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"kiji\")",
"url":"^http://itpro\\.nikkeibp\\.co\\.jp/",
"nextLink":"id(\"naviBottom\")/div[@class=\"pageNumber\"]/a[@class=\"now\"]/following-sibling::a[@class=\"tonext\"]|id(\"next\")/parent::a"
},
{
"pageElement":"id(\"main\")/div[1]/div",
"url":"^http://backtweets\\.com/search\\?",
"nextLink":"id(\"main\")/div[1]/ol/li[2]/a"
},
{
"pageElement":"id(\"contents_column\")/div/div/node()[@id=false() or @id!=\"media_navi\"]",
"url":"^http://photozou\\.jp/photo/show/",
"nextLink":"//link[@rel=\"next\"]"
},
{
"pageElement":"//ul[@class=\"activities\"]",
"url":"^http://mitter\\.jp/[^/]+/friends",
"nextLink":"id(\"main\")/div[contains(@class,\"pagination\")]/a[contains(text(),\"\u640d\")]"
},
{
"pageElement":"//div[@class=\"column\"]",
"url":"^http://bizplus\\.nikkei\\.co\\.jp/",
"nextLink":"//div[@class=\"page_nation\"]/a[starts-with(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"(id(\"blogEntries\") | //div[contains(concat(\" \", @class, \" \"), \" listBlogs \")])/dl | //dl[@class=\"dlReview\" and not(@id=\"reviewFormContainer\")]",
"url":"^http://[^.]+\\.stumbleupon\\.com/",
"nextLink":"id(\"paginationNext\")"
},
{
"insertBefore":"(//div[@class=\"infomation_2\"])[last()]/table[last()]",
"pageElement":"(//div[@class=\"infomation_2\"])[last()]/table[count(tbody/tr) > 2]",
"url":"^http://(?:[^.]+\\.)?dlsite\\.com/",
"nextLink":"//a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\u3078>>\")]"
},
{
"insertBefore":"id(\"pagelink_bottom\")",
"pageElement":"id(\"main\")/div[@class=\"genre\"]",
"url":"^http://diskunion\\.net/clubt/ct/",
"nextLink":"id(\"pagelink_bottom\")/a[contains(text(),\"\u6b21\u306e10\u4ef6\")]"
},
{
"pageElement":"id(\"rightCol\")",
"url":"^http://www\\.photoshoplady\\.com/",
"nextLink":"//div[@class=\"wp-pagenavi\"]/a[last()-1]"
},
{
"insertBefore":"//b[contains(text(),\">>\") or contains(text(),\"<<\")]/ancestor::table[2]/following::b[contains(text(),\">>\") or contains(text(),\"<<\")]/ancestor::table[2]/following::node()[2]",
"pageElement":"//b[contains(text(),\">>\") or contains(text(),\"<<\")]/ancestor::table[2]/preceding-sibling::node()[2]/following-sibling::*[./following-sibling::*/descendant-or-self::b[contains(text(),\">>\") or contains(text(),\"<<\")]/ancestor::table[2]]",
"url":"^http://review\\.rakuten\\.co\\.jp/",
"nextLink":"//b[contains(text(),\">>\")]/parent::a"
},
{
"pageElement":"//table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr/td/p",
"url":"^http://slnn\\.com/article/[^/]+/",
"nextLink":"//a[contains(concat(\" \",@class,\" \"),\" non_active_page \")][contains(text(),\"Next\")]"
},
{
"insertBefore":"(//span[@class=\"thumb\"])[last()]/following-sibling::node()",
"pageElement":"//span[@class=\"thumb\"]",
"url":"^http://(?:www\\.)?gelbooru\\.com/",
"nextLink":"//a[@name=\"next\"]"
},
{
"pageElement":"id(\"container\")/div/div/table",
"url":"^http://www\\.nicomimi\\.com/tag/.",
"nextLink":"//a[@next=\"\"]"
},
{
"insertBefore":"id(\"middleFooter\")",
"pageElement":"id(\"middleContent\")",
"url":"^http://(?:www\\.)?xkcd\\.com/\\d+/",
"nextLink":"//a[@accesskey=\"n\" and @href!= \"#\"]"
},
{
"pageElement":"id(\"body\")/div",
"url":"^http://book\\.cakephp\\.org/view/",
"nextLink":"//span[contains(concat(\" \",@class,\" \"),\" next \")]/a[last()]"
},
{
"pageElement":"id(\"presentation\")",
"url":"^http://www\\.swtspts\\.com/taste/",
"nextLink":"id(\"navigation\")/div/a[last()]"
},
{
"pageElement":"//table/tbody/tr/td[2]/table",
"url":"^http://www\\.boxshots\\.org/style",
"nextLink":"//a[text()=\"Prev \u640d\"]"
},
{
"insertBefore":"//div[@class=\"footer\"]",
"pageElement":"//div[@class=\"t4\"]/following-sibling::*[self::div[@class=\"path\"] or self::ul]",
"url":"^http://search\\.cpan\\.org/recent",
"nextLink":"//td[1]/a[starts-with(@href, \"/recent?d=\")]"
},
{
"insertBefore":"id(\"YshpMdSearchPagingLarge\")",
"pageElement":"id(\"YshpMdSearchResultItemsDefault\")",
"url":"^http://shopping\\.yahoo\\.co\\.jp/",
"nextLink":"//td[@class=\"elNxt\"]/a"
},
{
"pageElement":"//div[@class=\"article_content\"]",
"url":"^http://www\\.thetechlounge\\.com/",
"nextLink":"//a[text()=\"Next \"]"
},
{
"pageElement":"//table[@cellpadding=\"2\"]",
"url":"^http://thumb[^.]*\\.uploda\\.org/",
"nextLink":"//a[font[contains(translate(text(),\"ENTX\",\"entx\"),\"next\")]]"
},
{
"pageElement":"//div[@class=\"blog-posts hfeed\"]",
"url":"^http://www\\.nowimyourblog\\.com/",
"nextLink":"//a[text()=\"Older Posts\"]"
},
{
"insertBefore":"//div[contains(@class,\"dbTabAreaBtm\") or contains(@class,\"myTabAreaBtm\") or contains(@class,\"myTab40AreaBtm\")]",
"pageElement":"//div[contains(@class,\"dbCntBoxInnerList\") or contains(@class,\"dbCntBoxInnerListNoPb\") or contains(@class,\"myCntBoxInnerList\")]",
"url":"^http://(?:[^.]+\\.)*?ganref\\.jp/",
"nextLink":"//a[@class=\"tabNext\"]"
},
{
"pageElement":"id(\"contArt\")/*[following-sibling::div[@class=\"pager\"]]",
"url":"^http://news\\.dengeki\\.com/elem/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id(\"wrapper\")/div[@class=\"clip-global\"]",
"url":"^http://clip\\.livedoor\\.com/hot/",
"nextLink":"//a[contains(@class,\"pager-yesterday\")]"
},
{
"pageElement":"//div[@class=\"titlebox\"]/following-sibling::*[following::a[text()=\"\u524d\u30da\u30fc\u30b8\" or text()=\"\u6b21\u30da\u30fc\u30b8\"]]",
"url":"^http://www\\.security-next\\.com/",
"nextLink":"//a[text()=\"\u6b21\u30da\u30fc\u30b8\"]"
},
{
"insertBefore":"id(\"footer\")",
"pageElement":"id(\"footer\")/preceding-sibling::p/preceding-sibling::p",
"url":"^http://[^.]+\\.craigslist\\.org/",
"nextLink":"id(\"footer\")/preceding-sibling::p/font/a"
},
{
"pageElement":"id(\"main\")",
"url":"^http://jp\\.makezine\\.com/blog/",
"nextLink":"id(\"main\")/p[@class=\"box\"]/span/a[@rel=\"next\"]"
},
{
"insertBefore":"id(\"page_foot\")",
"pageElement":"id(\"content\")",
"url":"^http://ja\\.doukaku\\.org/unread",
"nextLink":"id(\"content\")/a[starts-with(text(),\"next\")]"
},
{
"pageElement":"id(\"bdy\")/div[contains(concat(\" \",@class,\" \"),\" triple_wrap \")]",
"url":"^http://www\\.cuil\\.com/search\\?",
"nextLink":"id(\"a_next\")"
},
{
"pageElement":"//div[@class=\"iArea_top\"]",
"url":"^http://www\\.selectsquare\\.com/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":".//div[@class='entry']",
"url":"^http://fmusic\\.sakura\\.ne\\.jp/",
"nextLink":".//div[@class='ArchivePage-navi']/a[contains(text(),'Next')] | .//div[@class='main-next']/a[contains(text(),'NEXT')]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" post \")]",
"url":"^http://www\\.dezinerfolio\\.com/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" wp-pagenavi \")]/a[position()=last()-2]"
},
{
"insertBefore":"id(\"archive\")/div[@class=\"pagination\" and position()=2]",
"pageElement":"id(\"mini\")",
"url":"^http://www\\.mostinspired\\.com/",
"nextLink":"id(\"archive\")/div[@class=\"pagination\"]/a[contains(text(), \"\u640d\")]"
},
{
"insertBefore":"id(\"hatena-search-pager\")",
"pageElement":"//div[@class=\"hatena-search-result-item\" or @class=\"hatena-search-result-item \" or @class=\"rakuten-item\" or @class=\"video-item-imagelist\"]",
"url":"^http://search\\.hatena\\.ne\\.jp/",
"nextLink":"id(\"hatena-search-pager\")//a[starts-with(text(), \"\u6b21\")]"
},
{
"pageElement":"//td[contains(text(), 'Page') and contains(text(), 'of')]/ancestor::table[1]/following-sibling::*[following::table[descendant::td[contains(text(), 'Page') and contains(text(), 'of')]]]",
"url":"^http://(?:www\\.)?lingoes\\.net/",
"nextLink":"//td[contains(text(), 'Page') and contains(text(), 'of')]//a[preceding-sibling::*[descendant::b]][1]"
},
{
"pageElement":"//div[@class=\"article_content\"]",
"url":"^http://www\\.sbbit\\.jp/article/",
"nextLink":"//td/a[ img[contains(@src, \"_r.gif\")] ]"
},
{
"pageElement":".//div[@class=\"clear_box\"]",
"url":"^http://yourfilehost-navi\\.com/",
"nextLink":".//a[child::img[contains(@src,\"/next.jpg\")]]"
},
{
"pageElement":"id(\"main\")//table[@class=\"product_list\"][last()]",
"url":"^http://www\\.junodownload\\.com/",
"nextLink":"//table[@class=\"pagination\"]//a[text()=\"Next Page\"]"
},
{
"pageElement":"id(\"articleBody\")",
"url":"^http://(?:\\w+\\.)?nytimes\\.com/",
"nextLink":"id(\"pageLinks\")/a[@class=\"next\"]"
},
{
"pageElement":"id(\"selectTemplate\")/div[@class=\"formArea clearfix\"]/div[@class=\"templateArea\"]/form/div[@class=\"itemboxL clearfix\"]",
"url":"^http://order\\.mixi-nenga\\.jp/.",
"nextLink":"id(\"selectTemplate\")/div[@class=\"formArea clearfix\"]/div[@class=\"templateArea\"]/form/div[@class=\"pagerNaviClass\"]/p[@class=\"pagerBtn\"]/a[last()]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" idea_twit \")]",
"url":"^http://ryo\\.hayamin\\.com/idea/",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"pageElement":"id(\"SrchObj\")",
"url":"^http://search\\.biccamera\\.com/",
"nextLink":"id(\"SrchBaseMain\")//a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\u2192\")]"
},
{
"pageElement":"id(\"news-contents\") | id(\"right-box\")/table",
"url":"^http://(?:www\\.)?carp\\.co\\.jp/",
"nextLink":"//a[contains(text(), \"\uff1c\uff1c\u524d\u3078\")] | //a[contains(text(), \"<<BACK\")]"
},
{
"pageElement":"//ul[@class=\"countlist\"]/li[contains(@class,\"countbox\")]",
"url":"^http://counting\\.hatelabo\\.jp/",
"nextLink":"(//div[contains(concat(\" \",@class,\" \"),\" pager-next \")][last()]/a[last()])[1]"
},
{
"pageElement":"id(\"main\")",
"url":"^http://www\\.miraikonishi\\.com/",
"nextLink":"id(\"blog-pager-older-link\")/a[contains(text(),\"\u524d\u306e\u6295\u7a3f\")]"
},
{
"pageElement":"id(\"blog\")/div[contains(@class, \"blogbody\")]",
"url":"^http://blog\\.willcomnews\\.com/",
"nextLink":"id(\"blog\")/div[last()]/a[last()]"
},
{
"pageElement":"id(\"article_body\")",
"url":"^http://(?:www\\.)?itworld\\.com/",
"nextLink":"//a[text()=\"next\"]"
},
{
"pageElement":"//*[@id=\"dResultSet\" or @class=\"liversltset\"]",
"url":"^http://search\\.microsoft\\.com/",
"nextLink":"//*[@class=\"apPaginationNext\" or @class=\"nxt\"]/a"
},
{
"insertBefore":"//div[contains(concat(\" \", @class, \" \"), \" hr \") and contains(concat(\" \", @class, \" \"), \" footline \")]",
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" hfeed \")]",
"url":"^http://unknownplace\\.org/memo/",
"nextLink":"//p[@class=\"pager\"]/span[@class=\"current_page\"]/following-sibling::a[1]"
},
{
"insertBefore":"id(\"diaryComment\")/following-sibling::node()[1]",
"pageElement":"//div[@class=\"viewDiaryBox\"] | id(\"diaryComment\")",
"url":"^http://mixi\\.jp/view_diary\\.pl",
"nextLink":"//div[@class=\"diaryPagingLeft\"]/a"
},
{
"pageElement":"//div[@class=\"container\"]/div[@class=\"wrapper\"]/div[@class=\"main_cont\"]/div[@class=\"entry_box\"]",
"url":"^http://fc23\\.blog63\\.fc2\\.com/",
"nextLink":"//a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"//ul[@class=\"wallpapers\"]",
"url":"^http://(?:www\\.)?photos8\\.com/",
"nextLink":"//div[@class=\"pagination\"]/a[last()]"
},
{
"pageElement":".//table[@class=\"resultbox\"] | //table[@class=\"resultbox\"]/following-sibling::br",
"url":"^http://(?:www\\.)?skreemr\\.com/",
"nextLink":".//a[child::img[@alt=\"next\"]]"
},
{
"insertBefore":"id(\"container\")/div[@class=\"basic\"]/div[@class=\"footer block-center\"]",
"pageElement":"id(\"search-item-body\")",
"url":"^https://www\\.moshimo\\.com/shop",
"nextLink":"id(\"search-item-body\")/div[@class=\"bottom-pager inline-center\"]/div[@class=\"pager\"]/a[number(last())-1]"
},
{
"pageElement":"id(\"intellitxt\")",
"url":"^http://www\\.pcmag\\.com/article",
"nextLink":"//a[text()=\"Next >\"]"
},
{
"pageElement":"id(\"bodyMainAreaMain\")//div[starts-with(@class,\"listDiaryBlock\")]",
"url":"^http://mixi\\.jp/list_diary\\.pl",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pageNavigation01 \")]//a[starts-with(text(),\"\u6b21\u3092\")]"
},
{
"pageElement":"//div[starts-with(@id, \"post-\")]",
"url":"^http://www\\.slconvention\\.org/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" alignleft \")]/a[contains(text(), \"Older\")]"
},
{
"pageElement":"id(\"main\")/div[contains(@class,\"node\")]",
"url":"^http://(?:www\\.)?slcn\\.tv/blog",
"nextLink":"//div[contains(concat(\" \",@class,\" \"),\" pager \")]/a[contains(concat(\" \",@class,\" \"),\" pager-next active \")]"
},
{
"pageElement":"id(\"contentPageShadow\")",
"url":"^http://www\\.ifixit\\.com/Guide/",
"nextLink":"id(\"contentPageFooter\")//a[contains(text(), \"next\")]"
},
{
"pageElement":"//table[contains(@id,'post')]|//tr[contains(td/@id,'td_threadstatusicon_')]|id('message_list')|id('pagenumbers')/following-sibling::*[following-sibling::div[@id='copyright']]",
"url":"^http://forums\\.animesuki\\.com/",
"nextLink":"//a[@rel='next']|id('pagenumbers')/b[2]/following-sibling::a"
},
{
"pageElement":"//ul[@class=\"databases autopagerize_page_element\"]",
"url":"^http://wedata\\.net/databases\\?",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//div[@class=\"story_copy\"]",
"url":"^http://www\\.linux-mag\\.com/id/",
"nextLink":"//a[text()=\"Next \u640d\"]"
},
{
"pageElement":"id(\"content\")/table[@class=\"tlist\"]",
"url":"^http://www\\.nyaatorrents\\.org/",
"nextLink":"id(\"content\")/table[@class=\"tlist\"]/following-sibling::table/tbody/tr/td[starts-with(text(),\"[\")]/following-sibling::td[1]/a"
},
{
"pageElement":"id(\"blogBody\")/div[@class=\"entryBody\"]/div",
"url":"^http://secondlife\\.drops\\.bz/.",
"nextLink":"id(\"blogBody\")/div[@class=\"pagingLink\"]/a[1]"
},
{
"insertBefore":"id(\"view_photo\")/div[@class=\"pagetext_bottom inlineList\"]",
"pageElement":"id(\"view_photo\")/div[@class=\"inner_line_list\"]",
"url":"^http://mixi\\.jp/view_album\\.pl",
"nextLink":"//a[starts-with(text(), \"\u6b21\u3092\")]"
},
{
"pageElement":"id(\"imageMain\")",
"url":"^http://ameblo\\.jp/[^/]+/image-",
"nextLink":"id(\"frame mainArea\")//ul/li[@class=\"nextLink\"]/p/a"
},
{
"pageElement":"id(\"container\")/div[1]/ul",
"url":"^http://www\\.fooooo\\.com/search",
"nextLink":"id(\"container\")/div/div/div/div/ul/li[@class=\"next\"]/a"
},
{
"pageElement":"//p[@class=\"story2\"]",
"url":"^http://www\\.telegraph\\.co\\.uk/",
"nextLink":"//div[@class=\"psnext\"]/a"
},
{
"insertBefore":"id(\"infobox\")",
"pageElement":"id(\"photobox\")",
"url":"^http://(?:www\\.)?jpgaday\\.com/",
"nextLink":"id(\"image-navigate\")/ul/li[@class=\"left\"]/a"
},
{
"pageElement":"id(\"posts\")/li",
"url":"^http://www\\.tumblr\\.com/iphone",
"nextLink":"id(\"footer\")/a[last()]"
},
{
"pageElement":"id(\"vidCont\")",
"url":"^http://(?:www\\.)?empflix\\.com/",
"nextLink":"id(\"pagination_holder\")/div/a[last()]"
},
{
"pageElement":"id(\"mu\")/table/tbody/tr/td/div[@style=\"float: left;\" or @style=\"FLOAT: left\" or @style=\"float:left\"]/../../../..",
"url":"^http://www\\.dmm\\.co(?:m|\\.jp)/",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"//div[@class=\"text\"]",
"url":"^http://www\\.rollingstone\\.com/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id(\"search_results\")",
"url":"^http://(?:www\\.)?tnaflix\\.com/",
"nextLink":"id(\"search_results\")/div[last()]/div/a[last()]"
},
{
"pageElement":"id(\"school-detail-body\") | //p[@class=\"next-vol\"] | id(\"contact-section\")",
"url":"^http://www\\.phppro\\.jp/school/",
"nextLink":"//li[@class=\"page-now\"]/following-sibling::li[1]/a"
},
{
"pageElement":"id(\"userPhotos\")",
"url":"^http://photo\\.ameba\\.jp/user/.",
"nextLink":"//a[@class=\"nextOn\"]"
},
{
"pageElement":"id(\"lft\")/div[starts-with(@class,\"pst-bx\")]",
"url":"^http://www\\.feecle\\.jp/blog/\\?",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"//dl",
"url":"^http://dic\\.nicovideo\\.jp/b/c/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pager \")]/a[starts-with(text(), \"\u6b21\")]"
},
{
"pageElement":"id(\"main\")/div[@class=\"entry\"]",
"url":"^http://memo\\.andperseand\\.com/",
"nextLink":"id(\"main\")/div[@class=\"entry_state\"]/a[contains(text(), \">>\")]"
},
{
"insertBefore":"//h3[@class=\"main-navi\"]",
"pageElement":"//div[@class=\"entry\"][position()!=1]",
"url":"^http://labs\\.ceek\\.jp/hbnews/.",
"nextLink":"//h3[@class=\"main-navi\"]/a[last()]"
},
{
"pageElement":"//dl[contains(@class, \"article\")]",
"url":"^http://www\\.graniph\\.com/news/",
"nextLink":"//td[@class=\"newsnext\"]/a[last()]"
},
{
"pageElement":"id(\"browse2-stream shop-browse browse-collections\")/descendant-or-self::div[contains(concat(\" \", @class, \" \"), \" stream \")][1]/div",
"url":"^http://[^.]+\\.deviantart\\.com/",
"nextLink":"id(\"output\")//div[contains(concat(\" \", @class, \" \"), \" nav \")]//a[text()=\"Next Page\"]"
},
{
"insertBefore":"id(\"content\")/div[last()]/following-sibling::node()",
"pageElement":"id(\"content\")/div",
"url":"^http://www\\.android-app\\.info/",
"nextLink":"//div[@class=\"navlink\"]/a[text()=\"\u53e4\u3044\u6295\u7a3f \u640d\"]"
},
{
"pageElement":"//table[3]",
"url":"^http://pentax\\.mydns\\.jp/exif/",
"nextLink":"//a[text()='+']"
},
{
"pageElement":"//table[starts-with(@id, \"forum_\")]",
"url":"^http://www\\.discuz\\.net/forum-",
"nextLink":"(//div[@class=\"pages\"]/strong/following-sibling::a[last()])[last()]"
},
{
"pageElement":"id(\"container\")/a[img[@class=\"thumbnail\"]]",
"url":"^http://www\\.tumblr\\.com/photos",
"nextLink":"id(\"footer\")/a[contains(text(), \"next page\")]"
},
{
"insertBefore":"//table[@class=\"MainTable\"]/tbody/tr/td[@class=\"Main\"]/div[@class=\"Menu\"]",
"pageElement":"//table[@class=\"MainTable\"]/tbody/tr/td[@class=\"Main\"]/div[@class=\"MessageParagraph\"]",
"url":"^http://bbs1\\.oebit\\.jp/amiami/",
"nextLink":"id(\"PageTextLinkBack\")/a"
},
{
"pageElement":"id(\"content\")",
"url":"^http://(?:www\\.)?kamamoto\\.jp/",
"nextLink":"id(\"content\")/div[last()]/a[last()]"
},
{
"pageElement":"id(\"top_main\")/div",
"url":"^http://wintelmac\\.net/sqmovie/",
"nextLink":"id(\"next_navi_box\")/div[@class=\"l\"]/a"
},
{
"pageElement":"id(\"content\")/div[contains(@class, \"post\")]",
"url":"^http://www\\.pinktentacle\\.com/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" alignleft \")]/a"
},
{
"pageElement":"id(\"article_main\") | //div[@class=\"article_main\"] | //tr[td[span[a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\") or contains(text(), \"\u524d\u306e\u30da\u30fc\u30b8\")]]]]/following-sibling::*[following::*[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\") or contains(text(), \"\u524d\u306e\u30da\u30fc\u30b8\")]]",
"url":"^https?://www\\.thinkit\\.co\\.jp/",
"nextLink":"descendant::a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")][last()]"
},
{
"pageElement":"(//table//table)[2]",
"url":"^http://news\\.ycombinator\\.com/",
"nextLink":"//a[text()='More']"
},
{
"insertBefore":"((//a[@class=\"paging\"])[1]/ancestor::table)[2]",
"pageElement":"((//a[@class=\"paging\"])[1]/ancestor::table)[2]/preceding-sibling::table",
"url":"^http://thomasmayerarchive\\.de/",
"nextLink":"//a[@class=\"paging\"][starts-with(text(),\"Next page\")]"
},
{
"pageElement":"id(\"gallery\")/ul/li[contains(@class,\"gallery-item\")]",
"url":"^http://www\\.getpersonas\\.com/",
"nextLink":"id(\"pagination\")/ul/li[last()]/a"
},
{
"insertBefore":"id(\"trackback\")/following-sibling::node()",
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" blog \")]",
"url":"^http://yamarena\\.seesaa\\.net/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"insertBefore":"//table[@class='ST2'][last()]",
"pageElement":"//div[@class='ImgArea']/*[@class!='ST2']",
"url":"^http://pentax\\.photoble\\.net/",
"nextLink":"//a[contains(text(),'>>')]"
},
{
"insertBefore":"//div[@id=\"content\"]/div[@id=\"nav-below\"]",
"pageElement":"//div[@id=\"content\"]/div[@id=\"nav-above\"]",
"url":"^http://www\\.odysseygate\\.com/",
"nextLink":"//div[@id=\"content\"]/div[@class=\"navigation\"]/a[contains(text(), \"\u675f\")]"
},
{
"pageElement":"id(\"headmenu\")/following-sibling::*[following-sibling::table/tbody/tr/td//img[(contains(@src, \"next\") or contains(@src, \"prev\")) and contains(@src, \".gif\")]] | id(\"centercol\")/div[@class=\"articleBox\"]/*[following-sibling::table/tbody/tr/td//img[(contains(@src, \"next\") or contains(@src, \"prev\")) and contains(@src, \".gif\")]]",
"url":"^http://www\\.atmarkit\\.co\\.jp/",
"nextLink":"//img[contains(@src, \"next\") and contains(@src, \".gif\")]/parent::a"
},
{
"pageElement":"//table[tbody/tr/td/span/@class='nav'] | //table[@class='forumline'] | //table[tbody/tr/td/@class='nav'] | //div[@id='page-body'] | //table[@class='border-bleu-jos']",
"url":"^https?://.+?/viewtopic\\.php\\?",
"nextLink":"//span[@class='gensmall' or @class='genmed']/b/b/following-sibling::a[1][substring(@href,1,11) != \"profile.php\"] | (//table/tbody/tr/td[@class='nav'])[last()]/b[last()]/following-sibling::a[1]  | //div[@class=\"pagination\"]/span/strong/following-sibling::a[1]"
},
{
"pageElement":"//form[table/@class='forumline'] | //div[@id='page-body']",
"url":"^https?://.+?/viewforum\\.php\\?",
"nextLink":"//span[@class='gensmall']/b/b/following-sibling::a[1] | (//table/tbody/tr/td[@class='nav'])[last()]/b[last()]/following-sibling::a[1]  | //div[@class=\"pagination\"]/span/strong/following-sibling::a[1] | //a[text()='Next']"
},
{
"pageElement":"//div[contains(@class, \"listing\")]",
"url":"^http://(?:www\\.)?faveup\\.com/",
"nextLink":"(//ol[@class=\"pagination\"]/li[./a[@class=\"active\"]]/following-sibling::li)[1]/a"
},
{
"pageElement":"id(\"content\")//div[@class=\"dmpi_pagination\"]/div[contains(concat(\" \", @class, \" \"), \" dmpi_list \")]/div",
"url":"^http://www\\.dailymotion\\.com/",
"nextLink":"id(\"content\")//div[@class=\"dmpi_pagination\"]//div[@class=\"next\"]/a"
},
{
"pageElement":"id(\"content\")",
"url":"^http://pics\\.livedoor\\.com/u/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"insertBefore":"id(\"content\")/div[@class=\"navigation\"]",
"pageElement":"id(\"content\")/div[not(@class=\"navigation\")]",
"url":"^http://blog\\.secondlife\\.com/",
"nextLink":"id(\"content\")/div[@class=\"navigation\"]/div[@class=\"alignleft\"]/a[text()=\"\u675f Previous Entries\"]"
},
{
"pageElement":"//a[contains(text(), \"\u640d\")]/ancestor::table/following-sibling::table[1]",
"url":"^http://(www\\.)?noisemp3\\.com/",
"nextLink":"//a[contains(text(), \"\u640d\")]"
},
{
"pageElement":"//table",
"url":"^http://crystal\\.opal\\.ne\\.jp/",
"nextLink":"//a[contains(text(),\"\u6b21\u3078\")]"
},
{
"pageElement":"//div[@class=\"dirbox\"]",
"url":"^http://appjet\\.com/directory/",
"nextLink":"//div[@class=\"pagenav\"]/a[text()=\"next\"]"
},
{
"pageElement":"id(\"photos\")/p[contains(@class, \"entry\")]",
"url":"^http://(?:www\\.)?photie\\.com/",
"nextLink":"//span[last()]/a[last()]"
},
{
"pageElement":"//div[@class=\"node_body\"] | id(\"squeeze\")//div[contains(concat(\" \",normalize-space(@class),\" \"), \" view \")]",
"url":"^http://www\\.edge-online\\.com/",
"nextLink":"//a[contains(@title, \"Go to next page\")]"
},
{
"pageElement":"//table[(@class=\"show\" or @id=\"ad_square\") and position()=1]",
"url":"^http://www\\.wretch\\.cc/album/",
"nextLink":"//a[@id=\"next\"]"
},
{
"insertBefore":"//div[@class=\"pagination\"]",
"pageElement":"//ul[@id=\"notes\" or @class=\"pending\"]",
"url":"^http://(?:www\\.)?pownce\\.com/",
"nextLink":"//div[@class=\"pagination\"]/a[text()=\"Next Page ?\"]"
},
{
"insertBefore":"id(\"pageNav\")",
"pageElement":"//div[@class=\"ListBetaItems\"]",
"url":"^http://www\\.betamarker\\.com/*",
"nextLink":"id(\"pageNav\")//a[@class=\"Next\"]"
},
{
"insertBefore":"id(\"container\")/div[@class=\"pager\"][last()]",
"pageElement":"id(\"container\")/table",
"url":"^http://q\\.hatena\\.ne\\.jp/list",
"nextLink":"id(\"container\")/div[@class=\"pager\"][last()]/a[last()]"
},
{
"pageElement":"id(\"centerarea\")/div/h1/following-sibling::*[position()>1 and following::*[@class=\"pagenum\"]]",
"url":"^http://(?:[^.]+\\.)?tedia\\.jp/",
"nextLink":"//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"id(\"left\")/div[contains(concat(\" \", normalize-space(@class), \" \"), \" post \")]",
"url":"^http://www\\.melon-peach\\.com/",
"nextLink":"id(\"left\")/descendant::a[starts-with(normalize-space(text()), \"Next\")]"
},
{
"pageElement":"//td[@class=\"bg_01\"]/table | //div[@class=\"border_01\"]/table",
"url":"^http://yonige\\.so-netsns\\.jp/",
"nextLink":"//div[@class=\"padding_s\"]/a[last()]"
},
{
"pageElement":"id(\"pbox\")/div[contains(@class, \"post\")]",
"url":"^http://(?:www\\.)?theync\\.com/",
"nextLink":"id(\"pbox\")//div[contains(@class, \"navi\")]/a"
},
{
"insertBefore":"//td[1][@class=\"story-container\"]/div[last()][@class=\"pagenav\"]",
"pageElement":"//td[1][@class=\"story-container\"]/table",
"url":"^http://www\\.macosxhints\\.com/",
"nextLink":"//td[1][@class=\"story-container\"]/div[last()][@class=\"pagenav\"]/a[text()=\"Next\" or starts-with(text(), \"More results\")]"
},
{
"pageElement":"//div[@class=\"photospace\"]",
"url":"^http://www\\.jsgoal\\.jp/photo/",
"nextLink":"//div[@class=\"back\"]/a"
},
{
"pageElement":"//div[(contains(@class, \"SlidePhoto\") and child::a/child::img) or (contains(@class, \"caption\"))]",
"url":"^http://mainichi.jp/.+?/graph/",
"nextLink":"//li[contains(@class, \"Next\")]//a"
},
{
"pageElement":"id(\"container\")/div/div/table",
"url":"^http://www\\.nicomimi\\.com/new",
"nextLink":"//a[@next=\"\"]"
},
{
"pageElement":"//tr[following-sibling::tr//a[@class=\"storypaginator\"] and td/div[contains(@class,\"roundedcornr_box\")]]",
"url":"^http://(?:www\\.)?doggdot\\.us/",
"nextLink":"//a[@title=\">>>\"]"
},
{
"pageElement":"id('content')",
"url":"^http://(?:us\\.)?gizmodo\\.com/",
"nextLink":"//div[contains(@class,'page_navigation')]/a[last()]"
},
{
"pageElement":"id(\"content\")/div[contains(@class,\"post\")]",
"url":"^http://modelrr\\.net/taksware/",
"nextLink":"(//div[contains(concat(\" \",@class,\" \"),\" alignleft \")]/a)[contains(text(),\"Previous Entries\")]"
},
{
"pageElement":"id(\"content\")//h3/following-sibling::table",
"url":"^http://rubyforge\\.org/search/",
"nextLink":"id(\"content\")//a[contains(text(),\"Next Results\")]"
},
{
"pageElement":"id(\"mnc\")/div/div[contains(@class,\"ybx-articleCmn\")]",
"url":"^http://xbrand\\.yahoo\\.co\\.jp/",
"nextLink":"//td[@class=\"st02\"]/a"
},
{
"pageElement":"//div[@class=\"cover\"]",
"url":"^http://www\\.nearch\\.jp/[^/]+/",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"pageElement":"id(\"leftcolumn\")",
"url":"^http://www\\.designflavr\\.com/",
"nextLink":"//div[@class=\"pagination\"]/a[position()=last()]"
},
{
"pageElement":"id(\"gsAllArticle665\")",
"url":"^http://tag\\.allabout\\.co\\.jp/",
"nextLink":"id(\"mainCulumnAllPager\")/div[@class=\"next\"]/a"
},
{
"pageElement":"//div[@class=\"articlebody\"]",
"url":"^http://discovermagazine\\.com/",
"nextLink":"//span[@class=\"next\"]/a"
},
{
"pageElement":"id('content')/node()[not(@id='ad-footer') and not(@class='wp-pagenavi')]",
"url":"^http://www\\.cinemaonline\\.jp/",
"nextLink":".//div[@class='wp-pagenavi']/span[@class='current']/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"postunit\"]",
"url":"^http://[^.]+\\.posterous\\.com/",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"pageElement":"id(\"content\")",
"url":"^http://www\\.freevectors\\.net/",
"nextLink":"//div[@class=\"pageNumbers\"]/a[last()]"
},
{
"pageElement":"id(\"oldfish\")/p[contains(concat(\" \",@class,\" \"),\" urllist \")]",
"url":"^http://megalodon\\.jp/history/",
"nextLink":"id(\"next\")/a"
},
{
"pageElement":".//div[@class='results-body']",
"url":"^http://search\\.blogmura\\.com/",
"nextLink":".//div[@class='list-navigation']/a[@class='list-next']"
},
{
"pageElement":"id(\"content\")/div[@class=\"post\"]",
"url":"^http://bungu\\.blueblack\\.net/",
"nextLink":"//div[@class=\"navigation\"]/div[@class=\"alignleft\"]/a[1]"
},
{
"pageElement":"id(\"resultList\")//li",
"url":"^http://www\\.yahoo-search\\.jp/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"//div[./div/a/img]",
"url":"^http://www\\.pixiv\\.net/comike",
"nextLink":"//a[starts-with(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"//div[@class=\"entry-inner\"]",
"url":"^http://[^.]+\\.nowa\\.jp/entry/",
"nextLink":"//li[starts-with(@class, \"prev-page\")][1]/a[1]"
},
{
"pageElement":"id(\"article\")",
"url":"^http://mrs\\.allabout\\.co\\.jp/",
"nextLink":"id(\"pageChange\")//a[starts-with(text(),\"\u6b21\")]"
},
{
"pageElement":"//table[@class=\"outside_table\"]/tbody/tr/td[@class=\"outer_content_cell\"]/table[@class=\"content_table\"]/tbody/tr/td[@class=\"content_cell\"]/table[@class=\"freestuff_result_table\"]",
"url":"^http://www\\.renderosity\\.com/",
"nextLink":"//table[@class=\"outside_table\"]/tbody/tr/td[@class=\"outer_content_cell\"]/table[@class=\"content_table\"]/tbody/tr/td[@class=\"content_cell\"]/div[@class=\"resultPageDisplay\"]/a[contains(text(), \"\ue280\")]"
},
{
"pageElement":"//ol[contains(@class, \"bookmarks\")]",
"url":"^http://vi\\.sualize\\.us/[\\w-]+",
"nextLink":"//a[contains(concat(\" \", @class, \" \"), \" next \")]"
},
{
"pageElement":"id(\"entry\")",
"url":"^http://labs\\.gmo\\.jp/blog/ku/",
"nextLink":"//li[@class=\"previousentry\"]/a"
},
{
"pageElement":"//table[contains(@class,\"pastes\")]",
"url":"^http://(?:www\\.)?hpaste\\.org/",
"nextLink":"//div[contains(@class,\"pager\")]//a[last()]"
},
{
"insertBefore":"//form[@name=\"nr_form\"]",
"pageElement":"//p[@class=\"mainSearchUrls\"]",
"url":"^http://web\\.archive\\.org/web/",
"nextLink":"//a/b[text()=\"Next\"]/.."
},
{
"pageElement":"id(\"Content\")",
"url":"^http://userstyles\\.org/forum/",
"nextLink":"//ol[@class=\"PageList\"]/li[last()]/a"
},
{
"insertBefore":"//div[@class=\"pageCtrl\"]/following-sibling::*[2]",
"pageElement":"//div[@class=\"pageCtrl\"]/following-sibling::*[1]",
"url":"^http://album\\.blog\\.yam\\.com/",
"nextLink":"//a[text()=\"\u4e0b\u4e00\u9801\"]"
},
{
"pageElement":"id(\"body\")/div[@class=\"entries\"]/div[@class=\"entry\"]",
"url":"^http://hhs\\.trashsuite\\.org/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"ipbwrapper\")",
"url":"^http[^?]+\\?.*?\\bshowforum=\\d",
"nextLink":"//a[text()=\">\" or text()=\"\ue280\" or text()=\"Next\"]"
},
{
"pageElement":"id(\"news-box\")/div[contains(concat(\" \", @class, \" \"), \" box2-body \")]",
"url":"^http://www\\.phppro\\.jp/news/",
"nextLink":"id(\"page-navi\")/p[last()]/a[last()]"
},
{
"pageElement":"id(\"topics_container\")|id(\"content\")/div[@class=\"listing\"]",
"url":"^http://getsatisfaction\\.com/",
"nextLink":"//span[@class=\"next_link\"]/a"
},
{
"pageElement":"id(\"result\")",
"url":"^http://www\\.iconseeker\\.com/",
"nextLink":".//div[@class=\"pager\"]/div/strong/following-sibling::a[1]"
},
{
"pageElement":"//table[3]/tbody/tr/td/table/tbody/tr/td/table/tbody/tr/td/table[2]",
"url":"^http://www\\.freepixels\\.com/",
"nextLink":"//p[@class=\"text\"]/b/following-sibling::a"
},
{
"pageElement":"//div[@class=\"post_container\"]",
"url":"^http://(?:www\\.)?picvi\\.com/",
"nextLink":"//li[@class=\"page_numbers_floating_selected\"]/following-sibling::li[1]/a"
},
{
"pageElement":"//table[@class='ipbtable' or @class='tablepad' or @class='tborder'] | //div[@class='borderwrap' and div[1]/@class='maintitle' and div[2]/@class='tablepad'] | //table[tbody/tr/td/span/@id='page-jump']",
"url":"^http[^?]+\\?.*?\\bshowtopic=\\d",
"nextLink":"//a[text()='>' or text()='\ue280' or text()='Next']"
},
{
"pageElement":"id(\"tableItems\")/tbody/tr",
"url":"^http://www\\.esnips\\.com/web/",
"nextLink":"//a[text()=\"Next \u640d\"]"
},
{
"pageElement":"//div[@class=\"white_top_content3\"]",
"url":"^http://www\\.slideshare\\.net/",
"nextLink":"//div[@class=\"pageNo_box\"]/a[contains(text(),\"Next\")]"
},
{
"pageElement":"//table[@class=\"t1\"]",
"url":"^http://mp3\\.sogou\\.com/music",
"nextLink":"id(\"pagebar\")/font[@color=\"black\"]/following-sibling::a"
},
{
"pageElement":"//div[@class=\"contentsttl\" or @class=\"googlebox\"]/following::table[1][@width=\"100%\"]",
"url":"^http://4koma\\.livedoor\\.com/",
"nextLink":"//div[@class=\"align_r\" or @align=\"right\"]/small/a[contains(text(),\"\u6b21\u306e\")]"
},
{
"insertBefore":"//hr[last()]",
"pageElement":"(//html/body/node() | //html/node())[preceding-sibling::hr and following-sibling::hr]",
"url":"^http://(?:www\\.)?c-faq\\.com/",
"nextLink":"//a[img[@alt=\"next\"]]"
},
{
"pageElement":"//div[@class=\"content\"]/div[contains(concat(\" \",@class,\" \"),\" post \")]",
"url":"^http://satully\\.lolipop\\.jp/",
"nextLink":"//div[contains(concat(\" \",@class,\" \"),\" content \")]/p/a[text()=\"\u675f Previous Entries\"]"
},
{
"pageElement":"id(\"main\")/div[contains(@class, \"post\")]",
"url":"^http://(?:www\\.)?cpluv\\.com/",
"nextLink":"//a[contains(concat(\" \", @class, \" \"), \" next \") and contains(concat(\" \", @class, \" \"), \" bold \")]"
},
{
"pageElement":"id(\"searchList\")",
"url":"^http://search\\.takamiya\\.jp/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id(\"leftColumn\")/div[contains(@class,\"bookmarkItem\")]",
"url":"^http://www\\.diigo\\.com/user/",
"nextLink":"(//span[contains(concat(\" \",@class,\" \"),\" pagination \")]/a[last() - 1])[last()]"
},
{
"pageElement":"id(\"novel\")",
"url":"^http://ncode\\.syosetu\\.com/n",
"nextLink":"//a[contains(text(), \"NEXT\")]"
},
{
"pageElement":"id(\"content\")/div[@class=\"post\"]",
"url":"^http://www\\.japanprobe\\.com/",
"nextLink":"id(\"content\")/div[@class=\"navigation\"]//a[contains(text(),\"Previous Entries\")]"
},
{
"pageElement":"//ul[contains(concat(\" \", @class, \" \"), \" logs \")]",
"url":"^http://mitter\\.jp/[^/]+/tag/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//div[@class=\"item\"]",
"url":"^http://www\\.esnips\\.com/_t_/",
"nextLink":"//a[text()=\"Next \u640d\"]"
},
{
"insertBefore":"id(\"content\")/div[@class=\"nav\"]",
"pageElement":"id(\"content\")",
"url":"^http://www\\.cssimpress\\.com/",
"nextLink":"id(\"content\")/div[@class=\"nav\"]/a[last()]"
},
{
"pageElement":"//div[contains(@class, \"teaserModule\")]",
"url":"^http://www\\.behancemag\\.com/",
"nextLink":"id(\"homePagePad\")/a[last()]"
},
{
"insertBefore":"id(\"contents_left\")/div[@class=\"wp-pagenavi\"]",
"pageElement":"id(\"contents_left\")/div[@class=\"content\"]",
"url":"^http://anjo\\.dekiteharu\\.jp/",
"nextLink":"id(\"contents_left\")/div[@class=\"wp-pagenavi\"]/a[contains(text(), \"\u640d\")]"
},
{
"insertBefore":"//div[@class=\"paging\"]",
"pageElement":"id(\"estresult\")/dl",
"url":"^https?://[^?]+?/estseek\\.cgi",
"nextLink":"//a[@class=\"navi\"][text()=\"NEXT\"]"
},
{
"pageElement":".//div[@class='result']",
"url":"^http://(?:www\\.)?vpleer\\.ru/",
"nextLink":".//div[@class='pageactive']/following-sibling::div[@class='pages']/a"
},
{
"pageElement":"id(\"browse-artists genres\")/table[@width=\"100%\"]",
"url":"^http://(?:www\\.)?drimr\\.com/",
"nextLink":".//p[@class=\"pagination\"]/strong/following-sibling::a[1]"
},
{
"pageElement":"//table[@class=\"file\"]",
"url":"^http://balsamic\\d?\\.fam\\.cx/",
"nextLink":"//div[@class=\"page_info\"][2]/a[preceding-sibling::em]"
},
{
"insertBefore":"//div[@class=\"pager\" or @id=\"pager\"]",
"pageElement":"//div[@class=\"node\"]/div[@class=\"content\"]",
"url":"^http://[^.]+\\.impressrd\\.jp/",
"nextLink":"//a[@class=\"pager-next active\" or @class=\"pager-last active\"]"
},
{
"pageElement":"//div[@class=\"topic-path\"]//following-sibling::*",
"url":"^http://jintrick\\.net/agenda/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"insertBefore":"//form/table/tbody/tr/td[@class=\"subnormal\"]",
"pageElement":"//form/table/tbody/tr/td[@class=\"bgctblframe\"]/table",
"url":"^https?://www2\\.it-ex\\.com/va",
"nextLink":"//form/table/tbody/tr/td/table/tbody/tr/td/a[@class=\"subnormal\"]"
},
{
"pageElement":"id(\"dyna_contents\")/*[self::div[@id=\"m2\"]//img[starts-with(@src, \"thumb/\")] or self::br[@clear]]|//img[starts-with(@src, \"thumb/\")]/ancestor::div[@id=\"m2\"]/preceding-sibling::*[1][self::hr]\r\n",
"url":"^http://dyna\\.ws/(?:yaoi|15)/",
"nextLink":"//a[contains(text(), \"\u6b21\u3078\")]"
},
{
"insertBefore":"//ul[@class=\"bookmark-list\"]/following-sibling::node()",
"pageElement":"//ul[@class=\"bookmark-list\"]",
"url":"^http://bm\\.straightline\\.jp/",
"nextLink":"//li[@class=\"next-page\"]/a"
},
{
"pageElement":"id(\"bodytext\")",
"url":"^http://www\\.theatlantic\\.com",
"nextLink":"//a[text()=\"next>\"]"
},
{
"pageElement":"id(\"innerframe\")/table/tbody//tr",
"url":"^http://sourceforge\\.net/top/",
"nextLink":"d(\"innerframe\")/table//a[contains(text(),\"More\")]"
},
{
"pageElement":"//div[@class=\"blog\"] | //table[@class=\"entry\"]",
"url":"^http://blog\\.oricon\\.co\\.jp/",
"nextLink":"//a[contains(text(),\"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"insertBefore":"id(\"sgmtMain\")/div[last()]",
"pageElement":"id(\"sgmtMain\")/ul",
"url":"^http://mediajam\\.info/topic/",
"nextLink":"id(\"sgmtMain\")/div[last()]//li[@class=\"nextPage\"]/a"
},
{
"pageElement":"id(\"result\")",
"url":"^http://video\\.baidu\\.com/v\\?",
"nextLink":"id(\"pg\")/a[last()][child::font]"
},
{
"pageElement":"id(\"articlePhotonews1\")",
"url":"^http://sankei\\.jp\\.msn\\.com/",
"nextLink":"id(\"photoNext\")"
},
{
"insertBefore":"id(\"pagenr\")",
"pageElement":"//div[@class=\"individualapps\" or @class=\"comment\"] | //table[@class=\"list\"]",
"url":"^http://[^.]+\\.iusethis\\.com/",
"nextLink":"id(\"pagenr\")//a[text()=\"next\"]"
},
{
"pageElement":"//div[@class=\"container\"]/div[@id=\"welcome\" or @class=\"content\"]",
"url":"^http://learn\\.github\\.com/p/",
"nextLink":"//a[contains(text(), \"next\")]"
},
{
"insertBefore":"//h2[@class=\"shirttail\"]",
"pageElement":"id(\"storyBody\")",
"url":"^http://www\\.kansascity\\.com/",
"nextLink":"//a[b=\"Next page >\"]"
},
{
"pageElement":"//div[@class=\"contents\"]",
"url":"^http://oshiete\\.goo\\.ne\\.jp/",
"nextLink":"id(\"page_link_next\")"
},
{
"pageElement":"//div[@id='rightcontent']",
"url":"^http://www\\.elotrolado\\.net/",
"nextLink":"//a[contains(text(),'Siguiente')]"
},
{
"pageElement":"//div[@class=\"left\"]/div[contains(@class, \"lbox_list\")]",
"url":"^http://www\\.sharenator\\.com/",
"nextLink":"//a[contains(concat(\" \", @class, \" \"), \" pages \")][last()]"
},
{
"pageElement":"id(\"articlebody\")",
"url":"^http://www\\.vanityfair\\.com/",
"nextLink":"//a[@class=\"paginationNext\"]"
},
{
"insertBefore":"id(\"paginator\")",
"pageElement":"id(\"pool-index\")/table[@class=\"highlightable\"]",
"url":"^http://moe\\.imouto\\.org/pool",
"nextLink":"id(\"paginator\")/div[@class=\"pagination\"]/a[last()]"
},
{
"insertBefore":"id(\"pager\")",
"pageElement":"id(\"main\")",
"url":"^http://ttyshare\\.com/recent/",
"nextLink":"id(\"pager\")/p[@class=\"pages\"]/a[@class=\"next\"]"
},
{
"pageElement":"id(\"nav\")/preceding-sibling::ul",
"url":"^http://www\\.googlelabs\\.com/",
"nextLink":"id(\"nav\")//td[@class=\"cur\"]/following-sibling::td[1]/a"
},
{
"pageElement":"id(\"postcontainer\")",
"url":"^http://www\\.siliconera\\.com/",
"nextLink":"//div[@id='nextprev']/div[@class='alignright']/p/a | //div[@id='nextprev2']/div[@class='alignleft']/p/a"
},
{
"insertBefore":"//tr[td[@class=\"catBottom\"]]",
"pageElement":"//table[@class=\"forumline\"]/tbody/tr[th[@class=\"thLeft\"]]/following::node()[following::node()[@class=\"catBottom\"]]",
"url":"^http://spacefellowship\\.com/",
"nextLink":"//a[text()=\"Next\"]"
},
{
"pageElement":".//div[@class=\"post\"]",
"url":"^http://www\\.fastpasstv\\.com/",
"nextLink":".//div[@class=\"pagenavi\"]/span[@class=\"alignleft\"]/a"
},
{
"pageElement":"id(\"text\")/div[@class=\"body\"]",
"url":"^http://(?:www\\.)?cactco\\.jp/",
"nextLink":"//a[@title=\"next page\"]"
},
{
"insertBefore":"id(\"ad_b\")",
"pageElement":"id(\"content\")/*[not(starts-with(@id, \"ad_\")) and not(@class=\"navigation\")]",
"url":"^http://www\\.rue89japon\\.com/",
"nextLink":"//a[contains(concat(\" \", normalize-space(@class), \" \"), \" next \")]"
},
{
"pageElement":"//ul[@class=\"logList01\"]",
"url":"^http://mixi\\.jp/show_log\\.pl",
"nextLink":"//div[@class=\"pageNavigation01 top\"]//a[starts-with(@href, \"show_log.pl?page=2\")]"
},
{
"insertBefore":"//table[@class=\"pager\"][2]",
"pageElement":"id(\"issues-table\")",
"url":"^https?://[^.]+\\.backlog\\.jp/",
"nextLink":"id(\"pager-next\")"
},
{
"pageElement":"//div[@class=\"thumbnail_format\"]",
"url":"^http://(?:www\\.)?vimeo\\.com/",
"nextLink":"(//li[@class=\"arrow\"])[last()]/a"
},
{
"pageElement":"id(\"body\")/div[contains(concat(\" \", normalize-space(@class), \" \"), \" section \")]/div[contains(concat(\" \",normalize-space(@class),\" \"),\" entries \")]",
"url":"^http://bottle\\.hatelabo\\.jp/",
"nextLink":"id(\"body\")/div[@class=\"pager\"]/a[last()]"
},
{
"pageElement":"id(\"content\")/div[contains(@class,\"post\")]",
"url":"http://www\\.syuhari\\.jp/blog/",
"nextLink":"//span[contains(concat(\" \",@class,\" \"),\" previous-entries \")]/a"
},
{
"pageElement":"//table",
"url":"^http://labs\\.ceek\\.jp/wassr/",
"nextLink":"//div[@class=\"navi\"]/a[last()]"
},
{
"insertBefore":"//div[@class=\"pages\"]",
"pageElement":"//div[@class=\"gallery\"]",
"url":"^http://smile-pro\\.net/photo/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"insertBefore":"(//div[@class=\"blog-pager\"])[last()]",
"pageElement":"//div[contains(@class, \"blog-posts\")]",
"url":"^http://[^.]+\\.blogspot\\.com/",
"nextLink":"id(\"blog-pager-older-link\")/a"
},
{
"insertBefore":"//div[@class=\"pageNavigation01\"][2]/div[@class=\"pageList02\"][last()]",
"pageElement":"//dl[@class=\"bbsList01\"]",
"url":"^http://mixi\\.jp/list_bbs\\.pl",
"nextLink":"//div[@class=\"pageList02\"]//a"
},
{
"pageElement":"//div[@class=\"day\"]",
"url":"^http://diary\\.lampetty\\.net/",
"nextLink":"//span[@class=\"adminmenu\"][contains(string(.), \"\u524d\")]/a"
},
{
"pageElement":"//td[@class=\"CELL_140\"]/..",
"url":"^http://cart\\d+\\.lolipop\\.jp/",
"nextLink":"//td[@style=\"text-align: left;\"]/a"
},
{
"pageElement":"id(\"ystcon\")/div[@class=\"yst-photo\"]/table",
"url":"^http://one\\.cn\\.yahoo\\.com/s",
"nextLink":"id(\"page\")/a[@class=\"nxt\"]"
},
{
"insertBefore":"//div[@class=\"videorownormal\"]/ul[@class=\"pagination\"]",
"pageElement":"//div[@class=\"videorownormal\"]",
"url":"^http://(?:www\\.)?flurl\\.com/",
"nextLink":"//ul[@class=\"pagination\"]/li[last()]/a[@class=\"prevnext\"]"
},
{
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://zeak\\.air-nifty\\.com/",
"nextLink":"//div[@class=\"entry-nav\"]//a[1]"
},
{
"pageElement":"//div[@class=\"TableRow\"]",
"url":"^http://www\\.imeem\\.com/tag/",
"nextLink":"id(\"PagingControl\")//a[text()=\"Next\"]"
},
{
"insertBefore":"id(\"bodyMainArea\")/div[@class=\"newBbsArea\"]/ul[@class=\"entryList01\"]/following-sibling::node()",
"pageElement":"id(\"bodyMainArea\")/div[@class=\"newBbsArea\"]/ul[@class=\"entryList01\"]",
"url":"^http://mixi\\.jp/new_bbs\\.pl",
"nextLink":"//a[starts-with(text(), \"\u6b21\u3092\")]"
},
{
"pageElement":"id(\"gallery\")/div[contains(@class,\"app\")]",
"url":"^http://www\\.appsafari\\.com/",
"nextLink":"//a[contains(concat(\" \",@class,\" \"),\" pagenext \")]"
},
{
"pageElement":"//div[@class='post-content']",
"url":"^http://www\\.thoranime\\.org/",
"nextLink":"//a[contains(text(),'\u675f Older Entries')]"
},
{
"pageElement":"id(\"list\")",
"url":"^http://(?:[^.]+\\.)?asg\\.to/",
"nextLink":"id(\"list\")/p/node()[not(self::a) and (number(translate(self::text(),\"|\",\" \"))>0)]/following-sibling::a[1]"
},
{
"insertBefore":"id(\"footer\")",
"pageElement":"id(\"comic\")",
"url":"^http://www\\.abominable\\.cc/",
"nextLink":"//div[@class=\"nav\"]/a[contains(text(),\"Next\")]"
},
{
"pageElement":"//div[@class=\"post\"]",
"url":"^http://upsidedowndogs\\.com/",
"nextLink":"id(\"footer\")/a[contains(text(),\"Next\")]"
},
{
"insertBefore":"//div[@class=\"block-geturls-GetUrls\"]",
"pageElement":"id(\"gsImageView\")",
"url":"^http://pix\\.jj\\.am/gallery/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id(\"content-body-inner\")/div[@class=\"books\"]",
"url":"^http://stack\\.nayutaya\\.jp/",
"nextLink":"id(\"content-body-inner\")/div[@class=\"pagination\" and last()]/a[last()]"
},
{
"pageElement":"id(\"files\")",
"url":"^http://gist\\.github\\.com/.+",
"nextLink":"//a[@hotkey=\"l\"]"
},
{
"pageElement":"id(\"main\")/div[h2]",
"url":"^http://www\\.milanello\\.net/",
"nextLink":"id(\"flip2\")/li[@class=\"older\"]/a\r\n"
},
{
"insertBefore":"id(\"pagination\")",
"pageElement":"//div[@class=\"articlePage\"]",
"url":"^http://www\\.portfolio\\.com/",
"nextLink":"//a[starts-with(text(), \"NEXT\")]"
},
{
"insertBefore":"id(\"col1\")/div[@class=\"navigation\"][last()]",
"pageElement":"id(\"col1\")/div[contains(@class,\"excerpt\")]",
"url":"^http://jp\\.techcrunch\\.com/",
"nextLink":"//div[@class=\"navigation\"]//a[1]"
},
{
"pageElement":"id(\"article_body\")",
"url":"^http://thinkit\\.jp/article/",
"nextLink":"(//*[@class=\"article_page\"]//a)[last() and contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"id(\"photo-area\")",
"url":"^http://(?:www\\.)?jiji\\.com/",
"nextLink":"//span[@class=\"bt_next\"]/a"
},
{
"insertBefore":"id(\"squeeze\")/div[@class=\"pager\"]",
"pageElement":"id(\"project-overview\")",
"url":"^http://drupal\\.org/project/",
"nextLink":"id(\"squeeze\")/div[@class=\"pager\"]/a[@class=\"pager-next active\" or @class=\"pager-last active\"]"
},
{
"insertBefore":"//div[@class=\"search-nav\"]",
"pageElement":"//div[@class=\"applist\"]",
"url":"^http://www\\.feedmyapp\\.com/",
"nextLink":"//p[@class=\"paging\"]//a[@class=\"current\"]/following-sibling::a"
},
{
"pageElement":"//div[@class=\"OneTopic\"]/div[contains(@class,\"OneMsg\")]",
"url":"^https?://wassr\\.com/status/",
"nextLink":"id(\"PagerNextLink\")"
},
{
"pageElement":"id(\"main\")",
"url":"^http://blog\\.makezine\\.com/",
"nextLink":"id(\"main\")/div[@class=\"box\"]/div/a[last()]"
},
{
"insertBefore":"id(\"content\")/p",
"pageElement":"id(\"content\")/div",
"url":"^http://aquapple\\.jugem\\.jp/",
"nextLink":"id(\"content\")/div[@class=\"pagingLink\"]/p/a[last()]"
},
{
"pageElement":"id(\"samlist\")",
"url":"^http://sukima\\.vip2ch\\.com/",
"nextLink":"id(\"pagenavi1\")/span[2]/a"
},
{
"pageElement":"id(\"maincolumn\")/div[@class=\"post\"]",
"url":"^http://www\\.baysidenet\\.tv/",
"nextLink":"id(\"maincolumn\")/div[@class=\"browse\"]/a[1]"
},
{
"pageElement":"//div[@class=\"report\"]",
"url":"^http://mrtweet\\.net/report/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"insertBefore":"id(\"navright\")",
"pageElement":"//div[contains(@class,\"content\")]",
"url":"^http://www\\.citeulike\\.org/",
"nextLink":"//div[contains(@class,\"content\")]/table/tbody/tr/td/b/a"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" searchresult \")]",
"url":"^http://www\\.similarr\\.com/.",
"nextLink":"//a[@class=\"linknext\"]"
},
{
"pageElement":"//td[@class=\"main\"]/div[@class=\"binder_data\"]",
"url":"^http://mediamarker\\.net/u/.",
"nextLink":"//div[@class=\"navi_binder\"]/a[last()]"
},
{
"insertBefore":"//div[@class=\"block-core-Navigator\"]",
"pageElement":"//div[@class=\"gallery-albums\" or @class=\"gallery-items\"]",
"url":"^http://pigmag\\.com/gallery/",
"nextLink":"//a[@class=\"next\"]"
},
{
"insertBefore":"//div[@class=\"pager\"]",
"pageElement":"//div[@class=\"article_body\"]",
"url":"^http://www\\.maximumpc\\.com/",
"nextLink":"//a[text()=\"next \ue280\"]"
},
{
"pageElement":"//div[@class=\"community_find_all_result\"]/ul",
"url":"^http://cu\\.yahoo\\.co\\.jp/\\?",
"nextLink":"//div[@class=\"page_manage2\"]/ul/li[@class=\"pager\" and last()]/a[contains(text(),\"\u6b21\u3092\u8868\u793a\")]"
},
{
"insertBefore":"//div[@align=\"center\"]",
"pageElement":"//div[@class=\"recipe_box\"]",
"url":"^http://cookpad\\.com/search/",
"nextLink":"//div[@align=\"center\"]/a[starts-with(text(), \"\u6b21\u3078\")]"
},
{
"pageElement":"//div[contains(@class, \"blog-posts\")]",
"url":"^http://blog\\.kamicopi\\.net/",
"nextLink":"id(\"Blog1_blog-pager-older-link\")"
},
{
"pageElement":"id(\"fourColumnFrame\")",
"url":"^http://dsc\\.discovery\\.com/",
"nextLink":"id(\"pagination\")/div/a[@class=\"nextprev\" and contains(text(),\"Next\")]"
},
{
"pageElement":"id(\"EntryMessages\")",
"url":"^https?://wassr\\.(?:jp|com)/",
"nextLink":"id(\"PagerNextLink\")"
},
{
"pageElement":"id(\"status_list\")",
"url":"^http://ibeer\\.appspot\\.com/",
"nextLink":"id(\"older\")"
},
{
"insertBefore":"//div[@class=\"pager-l\"][last()]",
"pageElement":"id(\"body\")",
"url":"^http://anond\\.hatelabo\\.jp/",
"nextLink":"//div[@class=\"pager-l\"][last()]/a[last()]"
},
{
"insertBefore":"//div[@class=\"pages\"]",
"pageElement":"//div[contains(@class, \"news-summary\")]",
"url":"^http://(?:www\\.)?digg\\.com/",
"nextLink":"//div[@class=\"pages\"]/a[last()][@class=\"nextprev\"]"
},
{
"insertBefore":"id(\"left-col\")/p[@class=\"wp-pagenavi\"]",
"pageElement":"id(\"left-col\")/div[@class=\"content\"]",
"url":"^http://bestwebgallery\\.com/",
"nextLink":"id(\"left-col\")/p[@class=\"wp-pagenavi\"]/a[contains(text(), \"\ue280\")]"
},
{
"pageElement":".//div[@id=\"contentcolumn\" or @id=\"contentcolumn2\"]/table",
"url":"^http://(?:[^.]+\\.)*?tu\\.tv/",
"nextLink":".//a[@class=\"enlace_si\"]"
},
{
"insertBefore":"id(\"body\")/following-sibling::node()",
"pageElement":"id(\"body\")",
"url":"^http://serif\\.hatelabo\\.jp/",
"nextLink":"//a[@class=\"pager-next\"][1]"
},
{
"pageElement":"//div[@class=\"segment\"]",
"url":"^http://lifestyle\\.msn\\.com/",
"nextLink":"//a[contains(., \"Next\")]"
},
{
"pageElement":"//li[contains(@id,\"rank\")]",
"url":"^http://www\\.nicochart\\.jp/.",
"nextLink":"//ul[@class=\"pager\"]//em/../following-sibling::li/a"
},
{
"pageElement":"//div[@class=\"profile_seach_result\"]/dl",
"url":"^http://cu\\.yahoo\\.co\\.jp/\\?",
"nextLink":"//div[@class=\"page_manage1\"]/ul/li[@class=\"pager\" and last()]/a[contains(text(),\"\u6b21\u3092\u8868\u793a\")]"
},
{
"pageElement":"//h2//img",
"url":"^http://www\\.taikaisyu\\.com/",
"nextLink":"//h2/a"
},
{
"pageElement":"//div[@class=\"list\"]",
"url":"^http://fridge\\.nettabo\\.jp/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//a[contains(@class, \"thickbox\")]",
"url":"^http://rephoto\\.jpn\\.org/s/",
"nextLink":"//a[@accesskey=\"n\"]"
},
{
"pageElement":"//ul[@class=\"bookmark\"]/li[contains(@class, \"ticket-t\")]",
"url":"^http://pookmark\\.jp/popular",
"nextLink":"//p[contains(concat(\" \", @class, \" \"), \" page \")][1]/a[1]"
},
{
"pageElement":"id(\"view-detail view-simple picture-content member-wrapper recent-photo mycure-simpleview guestbook-body\") | id(\"album-view-simple album-view-list recent-photos recent-diary-list schedule-content\")/table",
"url":"^http://[^.]+\\.curecos\\.com/",
"nextLink":"//li[@class=\"next\"]/a | //a[@class=\"next-navi\"]"
},
{
"pageElement":"//dl",
"url":"^https?://[^?]+?/namazu\\.cgi",
"nextLink":"//strong[text()=\"Page:\" or text()=\"\u30da\u30a4\u30b8:\"]/following-sibling::strong/following-sibling::a[1]"
},
{
"pageElement":"id(\"gallery\")",
"url":"^http://123freevectors\\.com/",
"nextLink":"id(\"wp_page_numbers\")//li[last()]/a"
},
{
"pageElement":"id(\"wrapper\")/table//td[@class=\"back2\"]/div/div[@class=\"entry\"]",
"url":"^http://usami-mi\\.jugem\\.jp/",
"nextLink":"id(\"wrapper\")/table//td[@class=\"back2\"]/div/ul[@class=\"navi\"]/li[@class=\"next\"]/a"
},
{
"insertBefore":"id(\"box-entry-page\")",
"pageElement":"id(\"box-entry-page\")/preceding-sibling::*",
"url":"^http://blog-log\\.jugem\\.jp/",
"nextLink":"id(\"txt-page-next\")/a"
},
{
"pageElement":"//div[@class=\"article_body\"]",
"url":"^http://media\\.yucasee\\.jp/",
"nextLink":"//li[@class=\"nextback\"]/a[contains(text(), \"\u6b21\u3078 >\")]"
},
{
"pageElement":"id(\"main\")",
"url":"^http://www\\.monotaro\\.com/",
"nextLink":"//img[@alt=\"\u6b21\u306e\u30da\u30fc\u30b8\u3078\"]/parent::a"
},
{
"insertBefore":"//div[@class=\"in\"]/div[@class=\"ido\"]",
"pageElement":"//div[@class=\"in\"]/*[@class=\"btitle\" or @class=\"bitem\" or @class=\"more\" or @class=\"iitem\"]",
"url":"^http://zapanet\\.info/blog/",
"nextLink":"//div[@class=\"in\"]/div[@class=\"ido\"]/span[@class=\"next\"]/a"
},
{
"pageElement":".//div[@class='blog-posts hfeed']",
"url":"^http://cd\\.tamahobby\\.com/",
"nextLink":"id('blog-pager-older-link')/a[contains(@title,'\u524d\u306e\u6295\u7a3f')]"
},
{
"pageElement":"id(\"mainBlock\")",
"url":"^http://www\\.phileweb\\.com/",
"nextLink":"id(\"pagenext\")/a"
},
{
"pageElement":"id(\"content-body\")",
"url":"^http://rozen\\.sync2ch\\.cc/",
"nextLink":"id(\"roozen-next\")/a"
},
{
"pageElement":".//td[@width='630' and @valign='top']//table[@cellspacing='0' and @cellpadding='13' and @border='0' and @width='100%']",
"url":"^http://www\\.tubeseek\\.com/",
"nextLink":".//tr[@class='tr_page_numbers']/td/a[contains(text(),'Next')]"
},
{
"insertBefore":"//div[@class=\"move cmn_cl\"]",
"pageElement":"//div[@class=\"inner_section\"]/h1/following-sibling::node()",
"url":"^http://r25\\.jp/b/report/a/",
"nextLink":"//div[@class=\"move cmn_cl\"]/a"
},
{
"pageElement":"//table[ .//div[contains(@class, \"post_uppers\")] ]",
"url":"^http://[^.]+\\.mopoto\\.com/",
"nextLink":"id(\"previous_page\")"
},
{
"pageElement":"//div[@class=\"thumn-line\"]",
"url":"^http://www\\.nicovide\\.jp/.",
"nextLink":"//ul[@class=\"navi\"]/following-sibling::h4/a"
},
{
"insertBefore":"//div[@class=\"banner_top\"][last()]",
"pageElement":"//table[@class=\"thumb\"]",
"url":"^http://up\\.nm78\\.com/thumb",
"nextLink":"//p[@class=\"menu\"]/a[last()]"
},
{
"pageElement":"//div[@class=\"content\"]/p",
"url":"^http://www\\.observer\\.com/",
"nextLink":"//div[@class=\"content\"]/div[@class=\"pager\"]/a[@class=\"active\"]"
},
{
"pageElement":"//ul[@class=\"article_list\"]/li",
"url":"^http://web\\.meet-i\\.com/\\?",
"nextLink":"//li[last()]/a[contains(concat(\" \",@class,\" \"),\" page_num \") and text()=\">>\"]"
},
{
"pageElement":"id(\"contents\")/div",
"url":"^http://wii\\.com/jp/.+/crv/",
"nextLink":"id(\"next_page_btn\")/a"
},
{
"pageElement":"id(\"main\")/div[1]/div[2]/ul",
"url":"^http://twicco\\.jp/channels",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"insertBefore":"id(\"content\")/div[@class=\"blog\"]/div[@class=\"menu\"]",
"pageElement":"id(\"content\")/div[@class=\"blog\"]",
"url":"^http://[^.]+\\.slmame\\.com/",
"nextLink":"id(\"content\")/div[@class=\"blog\"]/div[@class=\"menu\"]/a[last()]"
},
{
"insertBefore":"//div[@class=\"day\"][last()]/following-sibling::node()",
"pageElement":"//div[@class=\"day\"]",
"url":"^http://[^.]+\\.tdiary\\.net/",
"nextLink":"//span[@class=\"adminmenu\"][contains(string(.), \"\u524d\")]/a"
},
{
"pageElement":"//div[@class=\"blog\"]",
"url":"^http://[^.]+\\.slmame\\.com/",
"nextLink":"id(\"content\")/div[@class=\"blog\"]/div[@class=\"blogbody\"]/div[@class=\"posted\"]/div[@class=\"menu\"]/a[@class=\"amenu\" and (position()=2)]"
},
{
"pageElement":"//div[table/@class=\"cuerpo\"]",
"url":"^http://www\\.espalwii\\.com/",
"nextLink":"//a[@class=\"pagi_pv\" and contains(text(),\"Siguiente \u640d\")]"
},
{
"pageElement":"id(\"content\")/*",
"url":"^http://blog\\.innx\\.co\\.jp/",
"nextLink":"id(\"content\")/div[last()]/a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8 \u640d\"]"
},
{
"insertBefore":"id(\"contentFooter\")",
"pageElement":"id(\"contentBody\")",
"url":"^http://[^.]+\\.pixnet\\.net/",
"nextLink":"//a[@class=\"pageNext\"]"
},
{
"pageElement":"id(\"cColContent\")",
"url":"^http://[a-z]+\\.hexus\\.net/",
"nextLink":"//td[@class=\"nextPage\"]/a"
},
{
"pageElement":"//div[@class=\"articleBody\"]",
"url":"^http://www\\.techradar\\.com",
"nextLink":"//a[span=\"Next\"]"
},
{
"pageElement":"id(\"question\")/*",
"url":"^http://stackoverflow\\.com/",
"nextLink":"//div[@class=\"pager\"]/a[last()]"
},
{
"insertBefore":"id(\"content\")/div[last()]",
"pageElement":"id(\"content\")/div[@class=\"blog\"]",
"url":"^http://[^.]+\\.seesaa\\.net/",
"nextLink":"id(\"content\")/div[@class=\"navi\"]/a[contains(text(), \">>\")]"
},
{
"pageElement":"//div[@class=\"content_box\"]",
"url":"^http://www\\.voiceblog\\.jp/",
"nextLink":"//div[@class=\"content_next\"]/a"
},
{
"pageElement":"//div[@class=\"story\"]",
"url":"^http://www\\.newsweek\\.com/",
"nextLink":"//a[text()=\"Next Page \u640d\"]"
},
{
"pageElement":"//div[contains(concat(\" \",normalize-space(@class),\" \"),\" container \")]/div[not(contains(concat(\" \",normalize-space(@class),\" \"),\" header \") or contains(concat(\" \",normalize-space(@class),\" \"),\" footer \") or contains(concat(\" \",@class,\" \"),\" last \"))]",
"url":"^http://book\\.git-scm\\.com/",
"nextLink":"//div[@class=\"nav\"]/a[normalize-space(text())=\"Next\"]"
},
{
"pageElement":"//div[@class=\"post\"]",
"url":"^http://www\\.j-tokkyo\\.com/",
"nextLink":"id(\"content\")/a[contains(text(),\"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"id(\"Center\")/div[contains(@class,\"tryBox\")]|//td[preceding-sibling::td[@class=\"sidebar\"] and following-sibling::td[@class=\"sidebar\"]]/table[position()<last()]|//table[@class=\"entry\"]",
"url":"^http://www\\.zkaiblog\\.com/",
"nextLink":"//a[normalize-space(text())=\"\u6b21\u3078\"]"
},
{
"insertBefore":"//span[@class=\"text\"]/p[last()-1]",
"pageElement":"//span[@class=\"text\"]",
"url":"^http://www\\.king-mag\\.com/",
"nextLink":"//a[text()=\"NEXT\"]"
},
{
"insertBefore":"id(\"contentarea\")/div[@class=\"padding\"][last()]",
"pageElement":"id(\"contentarea\")/div[3]",
"url":"^http://interfacelift\\.com/",
"nextLink":"id(\"pagenums\")/div/div/a[text()=\"next page >\"]"
},
{
"insertBefore":"id(\"page\")/div[@class=\"purple\"]",
"pageElement":"id(\"page\")/div[@id=\"wallpaper\"]",
"url":"^http://interfacelift\\.com/",
"nextLink":"id(\"page\")/div[@class=\"pagenums_bottom\"]/div/a[text()=\"next page >\"]"
},
{
"pageElement":"//table[@width=760][last()]",
"url":"^http://www\\.gse\\.jp/format",
"nextLink":"//div[@align=\"right\"]/a[last()]"
},
{
"pageElement":"id(\"content\")/div[contains(@class,\"tweet\")]",
"url":"^http://twitter\\.memol\\.us/",
"nextLink":"//a[contains(concat(\" \",@class,\" \"),\" next_page \")]"
},
{
"insertBefore":"id(\"paging\")",
"pageElement":"id(\"content\")/*[not(self::ul[@id=\"paging\"])]",
"url":"^http://\\w+\\.engadget\\.com/",
"nextLink":"id(\"paging\")/li/a[contains(.,\"\u2192\")]"
},
{
"insertBefore":"id(\"footer\")",
"pageElement":"id(\"comic\")",
"url":"^http://mulele\\.com/comics/",
"nextLink":"//div[@class=\"nav\"]/a[last()]"
},
{
"pageElement":"id(\"wideMainColumn\")//div[contains(@class,\"widePopList\")]",
"url":"^http://tv\\.rayrac\\.co\\.jp/",
"nextLink":"id(\"wideMainColumn\")//div[@class=\"page\"]/a[contains(text(),\"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"id(\"editList01\")/ul",
"url":"^http://mixi\\.jp/search\\.pl",
"nextLink":"//div[@class=\"pageList02\"]//li[last()]/a[last()]"
},
{
"insertBefore":"//div[@class=\"footercontainer\"]/div[@class=\"navigation\"]",
"pageElement":"id(\"container\")",
"url":"^http://www\\.webcreme\\.com/",
"nextLink":"//div[@class=\"footercontainer\"]/div[@class=\"navigation\"]/a[contains(text(), \"\u640d\")]"
},
{
"pageElement":"id(\"main\")/form[@action=\"/multiIepg.tvpi\"]",
"url":"^http://tv\\.so-net\\.ne\\.jp/",
"nextLink":"//table[@class=\"switch-under\"]/tbody/tr/td[@class=\"next\" and last()]/a"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" brush_list \")]/ul",
"url":"^http://www\\.brushking\\.eu/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pagination \")]/a[starts-with(text(), \"next\")]"
},
{
"pageElement":"id('contentarea')/div[@align='center']/table",
"url":"^http://moviesforfree\\.tv/",
"nextLink":"id('contentarea')/div[@align='center']/a[contains(text(),'Next')]"
},
{
"insertBefore":"//div[a[starts-with(text(), \"Next Page\")]]",
"pageElement":"id(\"storyText\")",
"url":"http://www\\.politico\\.com/",
"nextLink":"//a[starts-with(text(), \"Next Page\")]"
},
{
"pageElement":"//div[@class=\"rightColumnAreaCnt\"]|//div[@id=\"Contents\" and count(child::div[@class=\"entryBody\"]) > 0]/*[contains(@class, \"entry\")]|//div[@class=\"entryWrapper\"]",
"url":"^http://blog\\.kcg\\.ne\\.jp/",
"nextLink":"//div[@class=\"pager\"]/a[contains(child::text(), \">>\")]"
},
{
"insertBefore":"id(\"navigation\")",
"pageElement":"id(\"contents\")",
"url":"^http://blog\\.smatch\\.jp/.",
"nextLink":"id(\"unnext\")/a"
},
{
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://garari\\.jugem\\.jp/",
"nextLink":"//div[@class=\"paging\"]/a[contains(text(), \"old\")]"
},
{
"insertBefore":"id(\"contents\")/div[@class=\"internalBlock\"]/div/form/a[last()]",
"pageElement":"id(\"contents\")/div[@class=\"internalBlock\"]/div/form/table",
"url":"^http://tv\\.yahoo\\.co\\.jp/",
"nextLink":"id(\"contents\")/div[@class=\"internalBlock\"]/div/form/a[last()]"
},
{
"pageElement":"id(\"main\")/div[contains(@class,\"section\")]",
"url":"^http://youtube-spot\\.com/",
"nextLink":"//div[@class=\"wp-pagenavi\"]/a[last()]"
},
{
"pageElement":"//div[@class=\"content MT\"]",
"url":"^http://www\\.cracked\\.com/",
"nextLink":"//a[text()=\"Next\"]"
},
{
"pageElement":"id(\"main\")/div[contains(@class,\"section\")]",
"url":"^http://blog\\.kyosuke\\.jp/",
"nextLink":"//li[contains(concat(\" \",@class,\" \"),\" older \")]/a"
},
{
"pageElement":"id('SelectAristByGenre')/div[@class='ListingRow1' or @class='ListingRow2']",
"url":"^http://www\\.mp3\\.com\\.au/",
"nextLink":".//li[@class='LHPagingSelected']/following-sibling::li[1]/a[1]"
},
{
"insertBefore":"//p[@class=\"paging\"]",
"pageElement":"id(\"bookmarks\")",
"url":"^http://ro\\.bot-z\\.net/bm/",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"table13\")",
"url":"^http://rapidlibrary\\.com/",
"nextLink":"//span[@class='now']/following-sibling::a[1]"
},
{
"insertBefore":"//form[1]/hr[last()]",
"pageElement":"//form[1][@action=\"futaba.php\"][contains(text(),\":\")]/*[not(self::table[contains(@align,\"right\")])]",
"url":"^http://[^.]+\\.2chan\\.net/",
"nextLink":"//form[contains(@action,\".htm\")][last()]"
},
{
"pageElement":"id(\"content\")/div[@class=\"feed all_mixes\"]/div[@class=\"section clear\"]",
"url":"^http://8tracks\\.com/mixes",
"nextLink":"id(\"content\")/div[@class=\"pagination clear\"]/a[@class=\"next_page\"]"
},
{
"insertBefore":"id(\"flip2\")",
"pageElement":"id(\"main\")/div",
"url":"^http://blog\\.nrpg-a\\.com/",
"nextLink":"id(\"flip2\")/a[contains(text(), \">>\")]"
},
{
"pageElement":"//ul[@class=\"fotolist\"] | //div[@class=\"foto-body\"]",
"url":"^http://f\\.hatena\\.ne\\.jp/",
"nextLink":"//a[text()=\"next>\"]"
},
{
"insertBefore":"//div[@class=\"pager\"][2]",
"pageElement":"//div[@class=\"dot_list\"]",
"url":"^http://favicon2dots\\.com/",
"nextLink":"//div[@class=\"pager\"][1]/a[@class=\"pager-next\"]"
},
{
"insertBefore":"id(\"main\")/div[@class=\"pager\"]",
"pageElement":"id(\"main-body\")",
"url":"^http://r\\.hatena\\.ne\\.jp/",
"nextLink":"id(\"next_page\")"
},
{
"insertBefore":"id(\"search_suggestions\")",
"pageElement":"id(\"search_results\")",
"url":"^http://www\\.spock\\.com/q/",
"nextLink":"id(\"search_page_number_links_bottom\")/a[last()]"
},
{
"pageElement":"//table[@class=\"table-list\"]/tbody/tr",
"url":"^http://i\\.hatena\\.ne\\.jp/",
"nextLink":"//div[@class=\"pager-r\"]/a[starts-with(text(), \"\u6b21\u306e\")]"
},
{
"insertBefore":"id(\"pager_bottom\")",
"pageElement":"//ol[2]",
"url":"^http://a\\.hatena\\.ne\\.jp/",
"nextLink":"id(\"pager_bottom\")/a[@class=\"navi_next\"]"
},
{
"pageElement":"id(\"mainContents\")/div[contains(@class, \"contentsKijiSpace\")]",
"url":"^http://find\\.teacup\\.com/",
"nextLink":"id(\"mainContents\")/div[@class=\"searchPage\" and position()=3]/a[last()]"
},
{
"pageElement":"id(\"main\")/div[@class=\"inner\"]",
"url":"^http://ipodtouchlab\\.com/",
"nextLink":"//div[@class=\"inner\"]/p[last()]/a[contains(text(),\"\u6b21\")]"
},
{
"insertBefore":"//div[@class=\"pagemenu\"]",
"pageElement":"//div[@class=\"body\"]",
"url":"^http://opentechpress\\.jp/",
"nextLink":"//div[@class=\"pagemenu\"]/a[@title=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"//form[@action=\"/servlet/Delete\"]",
"url":"^http://i-bbs\\.sijex\\.net/",
"nextLink":"//table//td[@class=\"normal\"]//b[text()=\"\uff1e\"]/parent::a"
},
{
"pageElement":"id(\"entries\")",
"url":"^http://blog\\.volume2\\.jp/",
"nextLink":"//ul[@class=\"pageBute\"]/li[@class=\"nextBtn\"]/a"
},
{
"insertBefore":"//table[@width=533]/td/div[last()-1]",
"pageElement":"//table[@width=533]//div[contains(@style, \"525px\") and contains(@style, \"padding: 0px\") or contains(@style, \"ber02\\.jpg\")]",
"url":"^http://www\\.naps-jp\\.com/",
"nextLink":"//div[@class=\"j10\"]/a[@title=\"next page\"]"
},
{
"pageElement":".//div[@class='listchannel']",
"url":"^http://www\\.wisevid\\.com/",
"nextLink":".//div[@class='pagingnav']/span[@class='pagingnav']/following-sibling::a[1]"
},
{
"pageElement":"//ul[@class=\"bookmark\"]",
"url":"^http://pookmark\\.jp/user/",
"nextLink":"id(\"main\")/p[@class=\"page\" and position()=1]/a[last()-1]"
},
{
"pageElement":".//div[@class=\"white-back\" or @class=\"channel-one\"]",
"url":"^http://(?:www\\.)?b92\\.fm/",
"nextLink":".//div[@class=\"next-active\"]/a"
},
{
"insertBefore":"id(\"subMsg\")/following-sibling::*|//div[@class=\"Cont\"]/following-sibling::*",
"pageElement":"//*[preceding-sibling::table[.//@class=\"pg\"]][following-sibling::table[.//@class=\"pg\"]]|id(\"tbList\")|//div[@class=\"Cont\"]",
"url":"^http://tieba\\.baidu\\.com/",
"nextLink":"//*[@class=\"pg\"]/a[.//text()=\"\u4e0b\u4e00\ue9a1\"]"
},
{
"pageElement":"id(\"left\")/li[contains(@class, \"story\")]",
"url":"^http://www\\.rssmeme\\.com/",
"nextLink":"//span[contains(concat(\" \", @class, \" \"), \" next \")]/a[last()]"
},
{
"pageElement":"id(\"feed\")/div | id(\"page\")//table[@class=\"usergrid\"]",
"url":"^https?://friendfeed\\.com/",
"nextLink":"id(\"page\")//div[contains(concat(\" \",@class,\" \"),\" pager \")]/a[last()]"
},
{
"insertBefore":"id(\"footer\")",
"pageElement":"//form[@name=\"delform\"]",
"url":"^http://[^.]+\\.4chan\\.org/",
"nextLink":"//table[contains(@class, \"pages\")]//b/following-sibling::a"
},
{
"pageElement":"id(\"gsArticle\")",
"url":"^http://allabout\\.co\\.jp/.",
"nextLink":"id(\"mainCulumnPager\")/div[@class=\"next\"]/a"
},
{
"pageElement":"id(\"contents-wrap\")/div[@class=\"statuses\"]",
"url":"^http://twiple\\.jp/status/",
"nextLink":"id(\"contents-wrap\")/div[@class=\"paging\"]/a[last()]"
},
{
"pageElement":"//div[@class='nwbody']/div[not(descendant::*[contains(text(), '\u6b21\u306e\u30da\u30fc\u30b8') or contains(text(), '\u524d\u306e\u30da\u30fc\u30b8')])]",
"url":"^http://news\\.goo\\.ne\\.jp/",
"nextLink":"//a[contains(text(), '\u6b21\u306e\u30da\u30fc\u30b8')]"
},
{
"insertBefore":"id(\"maincontent\")/div[@class=\"inside\"]/div[@class=\"wp-pagenavi\"]",
"pageElement":"id(\"maincontent\")/div[@class=\"inside\"]",
"url":"^http://www\\.cssclip\\.com/",
"nextLink":"id(\"maincontent\")/div[@class=\"inside\"]/div[@class=\"wp-pagenavi\"]/a[contains(text(), \"\u640d\")]"
},
{
"pageElement":"id(\"maincolumn\")/table[@class=\"nopad\"]//tr/td[1]/table",
"url":"^http://www\\.slpulse\\.com/",
"nextLink":"//a[contains(concat(\" \", @class, \" \"), \" pagenav \") and contains(text(), \"Next\")]"
},
{
"pageElement":"//table[contains(@class, \"ebItemlist\")]",
"url":"^http://stores\\.ebay\\.com/",
"nextLink":"//img[@title=\"Continue\"]/parent::a"
},
{
"pageElement":"//div[contains(concat(\" \",@class,\" \"), \" recipe-preview \")]",
"url":"^http://cookpad\\.com/[^/]+",
"nextLink":"//div[contains(concat(\" \",@class,\" \"), \" paging-top \")]/a[@rel=\"next\"]"
},
{
"pageElement":"id(\"story-body story-body2\")",
"url":"^http://www\\.newsday\\.com/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"//td[@valign=\"top\"]/div/following-sibling::node()[ following::div[@class=\"nextprev\"] ]",
"url":"^http://blog\\.waybig\\.com/",
"nextLink":"//a[contains(strong/text(),\"Next Page(Older) \u640d\")]"
},
{
"insertBefore":"//div[@class=\"PageNav\"][last()]",
"pageElement":"//div[@class=\"ChannelMessages\"][last()]",
"url":"^http://wassr\\.jp/channel/",
"nextLink":"id(\"PagerNextLink\")[last()]"
},
{
"pageElement":"id(\"ctl00_ctl00_ctl00_DocumentBody\")/div[3]",
"url":"^http://forums\\.xbox\\.com/",
"nextLink":"id(\"ctl00_ctl00_ctl00_MainContent_PageContent_BodyContentRegion_PostFlatView_ctl00_Pager_Next\")"
},
{
"insertBefore":"//div[@class=\"paging\"]",
"pageElement":"//ul[@class=\"stream\"]",
"url":"^http://[^.]+\\.jaiku\\.com/",
"nextLink":"//div[@class=\"paging\"]/a[last()]"
},
{
"pageElement":"id(\"channel-list\")/ul[@class=\"listing\"]",
"url":"^http://www\\.mogulus\\.com/",
"nextLink":".//div[@class=\"footer\"]/ul[@class=\"buttons right\"]/li/a[@class=\"next\"]"
},
{
"pageElement":"//ul[starts-with(@class,\"articleList\")]",
"url":"^http://gihyo\\.jp/.*serial",
"nextLink":"//p[@class=\"next\"]/a[last()]"
},
{
"insertBefore":"id(\"pg\")",
"pageElement":"id(\"c\")",
"url":"^http://image\\.baidu\\.jp/i",
"nextLink":"id(\"pg\")/a[@class=\"nx\"]"
},
{
"pageElement":"//table[@class=\"list\"]",
"url":"^http://www\\.infocart\\.jp/",
"nextLink":"//td[@class=\"normal\"]/a[last()]"
},
{
"pageElement":"id(\"updates\")/div[contains(@class,\"url\")]",
"url":"^http://www\\.browzmi\\.com/",
"nextLink":"//div[@class=\"next\"]/span/a"
},
{
"pageElement":"descendant::table[descendant::a[@class=\"s\"]][last()]",
"url":"^http://www\\.redtube\\.com/",
"nextLink":"//a[@class=\"p\" and contains(text(),\"Next\")]"
},
{
"pageElement":"//div[@class=\"video\"]",
"url":"^http://www\\.stagehd\\.com/",
"nextLink":"//a[@class=\"pagination-number\"][contains(text(), \">>\")]"
},
{
"pageElement":"id(\"left\")/div[position() > 1]",
"url":"^http://www\\.moongift\\.jp/",
"nextLink":"id(\"left\")/p[@class=\"pagenav\"]/a[contains(text(), \"\u6b21\u306e\u8a18\u4e8b\")]"
},
{
"pageElement":"//hr[1]/following-sibling::node()[following-sibling::hr]",
"url":"^http://www\\.lua\\.org/pil/",
"nextLink":"//img[@alt=\"Next\"]/.."
},
{
"pageElement":"id(\"alpha-inner\")",
"url":"^http://www\\.hiroike\\.com/",
"nextLink":"//link[@rel=\"prev\"]"
},
{
"pageElement":"id('content-left')//div[@class='entrytitle-container']/parent::div/parent::div",
"url":"^http://blog\\.iwa-ya\\.net/",
"nextLink":"//div[@class='wp-pagenavi']/span[@class='current']/following-sibling::a[1]"
},
{
"pageElement":"id(\"indexRightBodyPad\")/div/table",
"url":"^http://www\\.behance\\.net/",
"nextLink":"id(\"indexRightBodyPad\")/div/a[last()]"
},
{
"pageElement":"//ul[@class=\"pipelist\"]",
"url":"^http://pipes\\.yahoo\\.com/",
"nextLink":"//a[starts-with(text(),\"Next\")]"
},
{
"insertBefore":"id(\"paginator\")",
"pageElement":"id(\"post-list-posts\")",
"url":"^http://konachan\\.com/post",
"nextLink":"id(\"paginator\")/div[@class=\"pagination\"]/a[last()]"
},
{
"pageElement":"id(\"primary\")",
"url":"^http://www\\.gnarbs\\.com/",
"nextLink":"id(\"paging\")/a[contains(text(),\"Next\")]"
},
{
"insertBefore":"//div[@class=\"wp_link_pages\"]",
"pageElement":"//div[@class=\"postbody\"]",
"url":"^http://venturebeat\\.com/",
"nextLink":"//div[@class=\"wp_link_pages\"]/p/a[string-length(../text()[1])=9 and position()=1 or position()=number(../text()[number()>0])]"
},
{
"pageElement":"id(\"textArea\")/p | id(\"photoBox\")",
"url":"^http://www\\.sanspo\\.com/",
"nextLink":"//span[@class=\"nextP\"]/a"
},
{
"pageElement":"//div[@class=\"result_tag_body\"]/div[contains(concat(\" \",@class,\" \"),\" result_tag_box \")]",
"url":"http://search\\.zoome\\.jp/",
"nextLink":"//ul[@class=\"change_page_ul\"]/li[@class=\"next change_page_li\"]/a[starts-with(text(),\"\ue296\")]"
},
{
"pageElement":"id(\"main\")/div[h2]",
"url":"^http://www\\.hide10\\.com/",
"nextLink":"id(\"flip2\")/li[@class=\"older\"]/a"
},
{
"pageElement":"id(\"mainContent\")",
"url":"^http://vector4free\\.com/",
"nextLink":"//div[@class=\"pagination\"]/a[last()]"
},
{
"pageElement":"//div[@class=\"ContentBody\"]",
"url":"^http://arstechnica\\.com/",
"nextLink":"//a[text()=\"Next Page >\" and not (@class=\"Inactive\")]"
},
{
"pageElement":"id(\"contents\")",
"url":"^http://typing-tube\\.net/",
"nextLink":"id(\"nextPage\")"
},
{
"pageElement":"id(\"article_body\")",
"url":"^http://www\\.avclub\\.com/",
"nextLink":"//a[text()=\"Next \u640d\"]"
},
{
"pageElement":"id(\"spArticleBody\")",
"url":"^http://www\\.spiegel\\.de/",
"nextLink":"//a[text()=\"Next\"]"
},
{
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://blog\\.stco\\.info/",
"nextLink":"//div[@class=\"page\"]/a[last()]"
},
{
"pageElement":"//div[contains(@class, \"ido\")]/table[contains(@class, \"itg\")] | //div[contains(@class, \"g5\")]/table[contains(@class, \"g3\")]",
"url":"^http://g\\.e-hentai\\.org/",
"nextLink":"//a[normalize-space()=\">\"]"
},
{
"pageElement":"//div[contains(@class, \"box\")]/div[contains(@class,\"item\")]",
"url":"^http://www\\.ustream\\.tv/",
"nextLink":"//ul[contains(concat(\" \",@class,\" \"),\" paging \")][1]/li[last()]/a"
},
{
"pageElement":"//div[contains(@class, \"news\")]/div[contains(@class, \"alert\")]",
"url":"^http://github\\.com/[^/?]",
"nextLink":"//a[@hotkey=\"l\"]"
},
{
"insertBefore":"id(\"content\")/div[@class=\"wp-pagenavi\"]",
"pageElement":"id(\"content\")",
"url":"^http://stylecrunch\\.com/",
"nextLink":"id(\"content\")/div[@class=\"wp-pagenavi\"]/a[contains(text(), \"\u640d\")]"
},
{
"pageElement":"//div[@id=\"content\"]/div[@class=\"heightLine\"]",
"url":"^http://www\\.zzrock\\.net/",
"nextLink":"id(\"foot-navi\")/div[@class=\"wp-pagenavi\"]/a[contains(text(), \"\u640d\")]"
},
{
"pageElement":"id(\"contents\")",
"url":"^http://nyarla\\.net/blog/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//td[@colspan=\"6\"]/..",
"url":"^http://beta\\.vreel\\.net/",
"nextLink":"//a[contains(text(), \"next\")]"
},
{
"pageElement":"id(\"posts\")/*",
"url":"^http://www\\.tumblr\\.com/",
"nextLink":"id(\"pagination\")/a[last()]"
},
{
"pageElement":"//table[@class=\"tbl_sl\"]",
"url":"^http://www\\.coneco\\.net/",
"nextLink":"//div[@class=\"txt06re\"]/a[last()]"
},
{
"pageElement":"id(\"main\")/table",
"url":"^http://[^.]+\\.20ch\\.net/",
"nextLink":"//a[contains(text(), \"\u6b21\u3078\")]"
},
{
"pageElement":"//div[@class=\"maintxt\"]",
"url":"^http://www\\.4gamer\\.net/",
"nextLink":"//div[@class=\"paging\"][last()]/a[last()]"
},
{
"pageElement":"id(\"content\")/div",
"url":"^http://www\\.pi-kun\\.com/",
"nextLink":"(//td[contains(concat(\" \", @class, \" \"), \" press \")]/a)[last()]"
},
{
"insertBefore":"//div[@class=\"entry\"][last()]/p",
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://flickrbabes\\.com/",
"nextLink":"//span[@class=\"previous\"]/a"
},
{
"pageElement":"(//table[@width=478])[1]/tbody/*[preceding::*[@class=\"news_title_\"] and following::img[@alt=\"\u6b21\u306b\u9032\u3080\" or @alt=\"\u524d\u306b\u623b\u308b\"]]",
"url":"^http://zai\\.diamond\\.jp/",
"nextLink":"//a[descendant::img[@alt=\"\u6b21\u306b\u9032\u3080\"]]"
},
{
"pageElement":"id('content')",
"url":"^http://interflicks\\.net/",
"nextLink":".//strong[@class='on']/following-sibling::a[1]"
},
{
"pageElement":"id(\"storyText\")",
"url":"^http://abcnews\\.go\\.com/",
"nextLink":"//a[@class=\"paginationN\"]"
},
{
"pageElement":"//ul[contains(@class, \"people\")]/li[contains(@class,\"vcard\")]",
"url":"^http://tatsuj\\.in/people",
"nextLink":"(//a[contains(concat(\" \",@class,\" \"),\" next_page \")])[last()]"
},
{
"pageElement":"//div[@class=\"showPage\"]",
"url":"^http://www\\.boston\\.com/",
"nextLink":"id(\"next\")/a"
},
{
"pageElement":"//div[@class=\"contentpaneopen\"]/*[position() < last() - 1]",
"url":"^http://www\\.ryuzee\\.com/",
"nextLink":"//div[@class=\"contentpaneopen\"]/p/a[contains(text(), \"\u524d\")]"
},
{
"pageElement":".//div[@class='section'] | .//div[@class='section']/following-sibling::div[1]",
"url":"http://ffffoundtape\\.com/",
"nextLink":".//div[@class='pagination']/span[@class='current']/following-sibling::a[1]"
},
{
"pageElement":"id(\"news-item\")",
"url":"^http://arstechnica\\.com/",
"nextLink":"id(\"pager-wrapper\")/ul/li/a[contains(text(),\"Next\")]"
},
{
"insertBefore":"//div[@class=\"pagebreaknav\" and @id=\"teaserdiv\"]",
"pageElement":"//div[@class=\"pagebreaknav\" and @id=\"pagecntltop\"]/../p",
"url":"^http://health\\.msn\\.com/",
"nextLink":"//a[text()=\"Next >\"]"
},
{
"pageElement":"//div[@class=\"post\"]",
"url":"^http://www\\.health\\.com/",
"nextLink":"//div[@class=\"next-page-link\"]/a"
},
{
"insertBefore":"id(\"ToolsCopyright\")",
"pageElement":"//center[position()>1]",
"url":"^http://[^.]+\\.oebit\\.jp/",
"nextLink":"id(\"PageTextLinkBack\")//a"
},
{
"insertBefore":"id(\"stream\")/hr[21]",
"pageElement":"id(\"stream\")",
"url":"^http://brightkite\\.com/.",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"pageElement":"id(\"article_listing\")",
"url":"^http://www\\.avclub\\.com/",
"nextLink":".//div[@class=\"pager onpage_\"]/a[@class=\"pager_nav next\"]"
},
{
"insertBefore":"id(\"search_result_in\")/following-sibling::node()",
"pageElement":"id(\"search_result_in\")",
"url":"^http://saguri\\.jp/search",
"nextLink":"id(\"paging\")/a[last()]"
},
{
"pageElement":"//div[@id=\"post_content\"]]/div[@class=\"post clear_fix\"]",
"url":"^http://www\\.cotopa\\.com/",
"nextLink":"//div[@id=\"foot-navi\"]/div[@class=\"wp-pagenavi clear_fix\"]/ul/li/a"
},
{
"insertBefore":"(//a[text()=\"Next page\"]/ancestor::table)[last()]",
"pageElement":"id(\"ctl00_ContentPlaceHolder1_dlImages\")",
"url":"^http://supermodels\\.nl/",
"nextLink":"//a[text()=\"Next page\"]"
},
{
"insertBefore":"id(\"main\")/div[contains(@class, \"pagination\")]",
"pageElement":"id(\"main\")/*[@class=\"log-date-heading\" or @class=\"logs\" or contains(@class, \"logs\")]",
"url":"^http://mitter\\.jp/[^/]+",
"nextLink":"id(\"main\")/div[contains(@class, \"pagination\")]/a[contains(text(),\"\u640d\")]"
},
{
"pageElement":"id(\"contentsColumn\")",
"url":"^http://www\\.cinra\\.net/",
"nextLink":"//div[@class=\"pageNum alignTop\"]/p[@class=\"txtNext\"]/a"
},
{
"insertBefore":"id(\"first-inner\")/*[last()]",
"pageElement":"id(\"first-inner\")/div",
"url":"^http://[^.]+\\.nowa\\.jp/",
"nextLink":"//li[@class=\"next-page\"]/a"
},
{
"pageElement":"id(\"body\")/div[@class=\"wrap\"]",
"url":"^http://ejohn\\.org/blog/",
"nextLink":"id(\"body\")/div[@class=\"wrap\"]/a[last()]"
},
{
"pageElement":"id(\"photos\")/ul",
"url":"^http://idoltube\\.in/i/.",
"nextLink":"id(\"photos\")/div[contains(concat(\" \",@class,\" \"),\" nextpage \")]/a"
},
{
"insertBefore":"id(\"next\")/..",
"pageElement":"id(\"recent-entry-list\")",
"url":"^http://nowa\\.jp/recent/",
"nextLink":"id(\"next\")/a"
},
{
"pageElement":"//div[@class=\"BodyTxt\"]",
"url":"^http://www\\.asahi\\.com/",
"nextLink":"//p[@class=\"Next\"]/a"
},
{
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://www\\.spike\\.com/",
"nextLink":"//li[@class=\"pagenext\"]/a"
},
{
"pageElement":"//div[starts-with(@id,\"entry\")]",
"url":"^http://alice\\.in2d\\.jp/",
"nextLink":"//div[@class=\"content-nav\"]/a[starts-with(text(),\"\u675f\")]"
},
{
"pageElement":"//div[@class=\"blogbody\"]",
"url":"^http://la\\.ma\\.la/blog/",
"nextLink":"//div[@class=\"prev\"]/a"
},
{
"pageElement":"id(\"content-main\")/div[@class=\"post\"]",
"url":"^http://lifehacking\\.jp/",
"nextLink":"//p[@align=\"right\" or @align=\"center\"]/a[contains(text(),\"\u53e4\u3044\u8a18\u4e8b\") or contains(text(),\"Next\")]"
},
{
"insertBefore":"id(\"mainContent\")/div[@class=\"pages pkg\"]/div[@class=\"paginator\"]",
"pageElement":"id(\"mainContent\")/ol[@class=\"bookmarks clear\"]",
"url":"^http://vi\\.sualize\\.us/",
"nextLink":"id(\"mainContent\")/div[@class=\"pages pkg\"]/div[@class=\"paginator\"]/a[@class=\"next\"]"
},
{
"insertBefore":"//body/table[last()]",
"pageElement":"id(\"delform\")",
"url":"^http://2ch\\.ru/\\w{1,2}/",
"nextLink":"//body/table[last()]/tbody/tr/td[last()]/form"
},
{
"pageElement":"id(\"illust_c5\")",
"url":"^http://www\\.pixiv\\.net/",
"nextLink":"id(\"content3\")/div/a[contains(text(),\"\u6b21\") and last()]"
},
{
"insertBefore":"//a[p[text()=\"click here for more >\"] or div[@class=\"mag_link\"]]",
"pageElement":"id(\"news_article\")/p[2]",
"url":"^http://men\\.style\\.com/",
"nextLink":"//a[p[text()=\"click here for more >\"] or div[@class=\"mag_link\"]]"
},
{
"pageElement":"id(\"Main\")/div[contains(@class, \"Review01\")]",
"url":"^http://crossreview\\.jp/",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"pageElement":"//*[contains(@id,\"post-\")]",
"url":"^http://infoisland\\.org/",
"nextLink":"//div[contains(concat(\" \",@class,\" \"),\" content \")]/p/a[contains(text(),\"Previous\")]"
},
{
"insertBefore":"id(\"toolbox_art_bot\")",
"pageElement":"id(\"article_text\")",
"url":"^http://www\\.wired\\.com/",
"nextLink":"id(\"toolbox_art_bot\")/div[@class=\"float_r\"]/div[@class=\"tool\"][2]/ul/li[last()]/a"
},
{
"pageElement":"id(\"main\")/div[h2]",
"url":"^http://blog\\.y17e\\.com/",
"nextLink":"id(\"flip2\")/li[@class=\"older\"]/a"
},
{
"insertBefore":"id(\"content\")/div[last()]",
"pageElement":"id(\"content\")/div[@class=\"blog\"]\r\n",
"url":"^http://nekoyanagi\\.net/",
"nextLink":"id(\"content\")/div[@class=\"navi\"]/a[contains(text(), \">>\")]"
},
{
"pageElement":"//div[@id=\"content\" and @class=\"narrowcolumn\"]/div[contains(@class, \"post\")]",
"url":"^http://mozillazine\\.jp/",
"nextLink":"//div[@class=\"alignleft\"]/a[last()]"
},
{
"pageElement":"id(\"contentmiddle\")/div[contains(@id,\"post_wide\") or contains(@class,\"entry\") or contains(@id,\"comment_top\") or contains(@id,\"commentblock\")]",
"url":"^http://www\\.slzin\\.com/",
"nextLink":"//div[contains(concat(\" \",@class,\" \"),\" navigation \")]//a[text()=\"NEXT:>\"]"
},
{
"pageElement":"id(\"posts\")/div[contains(concat(\" \",@class,\" \"),\" list \")]/ul/li",
"url":"^http://github\\.com/blog",
"nextLink":"//div[contains(concat(\" \",@class,\" \"),\" pagination \")]/a[contains(text(),\"Next\")]"
},
{
"insertBefore":"id(\"pgnm\")",
"pageElement":"id(\"entr\")",
"url":"^http://www\\.feecle\\.jp/",
"nextLink":"id(\"pgnm\")/ul[@class=\"prnx\"]/li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"content_inner\")/ul",
"url":"^http://identi\\.ca/group",
"nextLink":"//li[@class=\"nav_next\"]/a"
},
{
"pageElement":"//div[@class=\"POST\" or @class=\"post\"]",
"url":"^http://blog\\.auone\\.jp/",
"nextLink":"//table//a[text()=\"\u6b21\u3078\"]"
},
{
"insertBefore":"//div[@class=\"insideMain\"]//following-sibling::h1",
"pageElement":"//div[@class=\"insideMain\"]",
"url":"^http://www\\.tube8\\.com/",
"nextLink":"//td[@class=\"videoGridPager\"]/a[@class=\"nounder\"][last()]"
},
{
"insertBefore":"//div[@class=\"pageToggle\"]",
"pageElement":"//div[@class=\"postDetails\"]",
"url":"^http://lifehacker\\.com/",
"nextLink":"//a[contains(string(.), \"next\")]"
},
{
"pageElement":"id('main')/div[@class='entry']",
"url":"^http://poab\\.jugem\\.jp/",
"nextLink":".//ul[@class='navi']/li[@class='next']/a"
},
{
"insertBefore":"//span[@class=\"pagination\"]",
"pageElement":"id(\"article\")",
"url":"^http://www\\.sciam\\.com/",
"nextLink":"//a[text()=\"Next\u640d\"]"
},
{
"pageElement":"id(\"main\")",
"url":"^http://blog\\.s21g\\.com/",
"nextLink":"//a[@class=\"back\"]"
},
{
"insertBefore":"id(\"main\")/table/following-sibling::node()",
"pageElement":"id(\"main\")/table",
"url":"^http://cal\\.syoboi\\.jp/",
"nextLink":"//a[text()=\"\u6b21\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"//div[@class=\"txt\"]|id(\"entryBody\")",
"url":"^http://trend\\.gyao\\.jp/",
"nextLink":"//div[@class=\"txt\"]//a[contains(text(),\"\u8a18\u4e8b\u5168\u6587>>\")]"
},
{
"pageElement":"id(\"main\")/div[contains(@class, \"section\")]",
"url":"^http://barca\\.daa\\.jp/",
"nextLink":"//p[@class=\"archives\"]/a"
},
{
"insertBefore":"id(\"paging\")",
"pageElement":"id(\"paging\")/preceding-sibling::*",
"url":"^http://weheartit\\.com/",
"nextLink":"id(\"next\")/a"
},
{
"insertBefore":"id(\"rcol\")/*[last() + 1]",
"pageElement":"id(\"rcontent\")",
"url":"^http://lart\\.no/lpaste",
"nextLink":"//link[@rel=\"next\"]"
},
{
"pageElement":"id(\"content\")",
"url":"^http://nicometer\\.net/",
"nextLink":"//a[contains(@id, \"pager\")][@class=\"current\"]/following-sibling::a[1]"
},
{
"insertBefore":"//div[@class='partner']",
"pageElement":"//div[@class='segment']",
"url":"^http://tech\\.msn\\.com/",
"nextLink":"//a[contains(text(), 'Next >')]"
},
{
"pageElement":"id('cnbc_textbody')",
"url":"^http://www\\.cnbc\\.com/",
"nextLink":"//a[text()=\"Next >\"]"
},
{
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://eniyilogo\\.com/",
"nextLink":"//div[@class=\"wp-pagenavi\"]/a[last()]"
},
{
"insertBefore":"id(\"jumper\")",
"pageElement":"id(\"catalog\")",
"url":"^http://ona55\\.orz\\.hm/",
"nextLink":"id(\"jumper\")/span[last()]/a"
},
{
"pageElement":"id(\"main_content_main_panel\")/ul/*",
"url":"^http://photohito\\.com/",
"nextLink":"id(\"pagination\")//a[@rel=\"next\"]"
},
{
"pageElement":"//ul[@class=\"entries\"]/li",
"url":"^http://mitter\\.jp/edit",
"nextLink":"//link[@rel=\"next\"]"
},
{
"pageElement":"id(\"content\")//ul[contains(concat(\" \", @class, \" \"), \" bookmarks \") and not(@id=\"bookmarklist_your\")]//li[contains(concat(\" \", @class, \" \"), \" post \")]",
"url":"^http://delicious\\.com/",
"nextLink":"id(\"pagination\")/a[contains(@class, \"next\")]"
},
{
"insertBefore":"//div[@class=\"paginator_panel\"]",
"pageElement":"id(\"media_listing_hor\")",
"url":"^http://www\\.abum\\.com/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"//div[@class=\"artTxt\"]",
"url":"^http://www\\.time\\.com/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id(\"AutoNumber229\")",
"url":"^http://www\\.eyje\\.com/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pagination \")]/a[starts-with(text(), \"next\")]"
},
{
"pageElement":"//div[@class=\"shop\"]",
"url":"^http://tabetime\\.com/.",
"nextLink":"//p[@class=\"nextback\"]/a[text()=\"\u6b21\u3092\u8868\u793a\"]"
},
{
"pageElement":"//div[@class=\"content_pane\"]//dl",
"url":"^http://find\\.2ch\\.net/",
"nextLink":"//a[text()=\"\u6b21\u3078\"] "
},
{
"pageElement":"id(\"KIZI\")",
"url":"^http://furosiki\\.net/_",
"nextLink":"id(\"KIZI\")//a[starts-with(text(),\"NEXT\")]"
},
{
"insertBefore":"//div[@class=\"insert\"]",
"pageElement":"//div[@class=\"content\"]",
"url":"^http://sasapanda\\.net/",
"nextLink":"//div[@class=\"previous\"]/a[1]"
},
{
"insertBefore":"//a[4]",
"pageElement":"//a[1]",
"url":"^http://uchihara\\.info/",
"nextLink":"//a[4]"
},
{
"pageElement":"id(\"content\")/div[@class=\"content_c\"]",
"url":"^http://iralog\\.net/b/.",
"nextLink":"id(\"content\")/div/div[@class=\"head_pager\"]/a[contains(text(), \"\u6b21\")]"
},
{
"insertBefore":"id(\"pagination_container\")",
"pageElement":"//ul[@class=\"photo_list\"]",
"url":"^http://photohito\\.com/",
"nextLink":"//a[contains(concat(\" \", normalize-space(@rel), \" \"), \" next \")]"
},
{
"insertBefore":"//div[@class=\"NAV\"]",
"pageElement":"//div[@class=\"SC\"]",
"url":"^http://northisup\\.com/",
"nextLink":"//a[text()=\"\u640d\"][1]"
},
{
"insertBefore":"id(\"assets\")/div[last()]",
"pageElement":"//blockquote",
"url":"^http://ffffound\\.com/",
"nextLink":"id(\"paging-next\")"
},
{
"pageElement":"id('content')",
"url":"^http://fleshbot\\.com/",
"nextLink":"id('searchpager')/li[child::span[@class='currentPage']]/following-sibling::li[1]/a[1]"
},
{
"pageElement":"//div[@class=\"dot\"]/table[contains(@class,\"zalk_table\")]",
"url":"^http://memori\\.ru/\\w+",
"nextLink":"//div[@class=\"dot_new\"]//b/following-sibling::a[1]"
},
{
"insertBefore":"//ul[@class=\"pagination\"]",
"pageElement":"//div[@class=\"section entries\"]",
"url":"^http://ab\\.wryy\\.net/",
"nextLink":"(//ul[@class=\"pagination\"]/li/a)[last()]"
},
{
"insertBefore":"id(\"content\")/div[@class=\"pagination\"]",
"pageElement":"id(\"content\")/ul[@class=\"gallery\"]",
"url":"^http://welovewp\\.com/",
"nextLink":"id(\"content\")/div[@class=\"pagination\"]/a[contains(text(), \"\u640d\")]"
},
{
"pageElement":"//table[following-sibling::div[@class=\"page\"]]/tbody/tr",
"url":"^http://say-move\\.net/",
"nextLink":"//div[@class=\"page\"]/a[contains(text(),\"\u9032\u3080\")]"
},
{
"pageElement":"id(\"content\")/div[@class=\"entry\"]",
"url":"^http://digimaga\\.net/",
"nextLink":"//div[@class=\"wp-pagenavi\"]/span[@class=\"current\"]/following-sibling::a[1]"
},
{
"insertBefore":"id(\"content\")//div[@class=\"pagination\"]",
"pageElement":"id(\"content\")",
"url":"^http://logopond\\.com/",
"nextLink":"id(\"content\")//div[@class=\"pagination\"]/a[contains(text(), \"\u640d\")]"
},
{
"insertBefore":"id(\"nav-below\")",
"pageElement":"id(\"content\")//div[2]/following-sibling::div[not(@id=\"nav-below\")]",
"url":"^http://mashable\\.com/",
"nextLink":"//div[@class=\"pagebar\"]//span[@class=\"this-page\"]/following-sibling::a"
},
{
"pageElement":"id(\"content\")/table",
"url":"^http://sadsteve\\.com/",
"nextLink":".//td[@class=\"right\"]/a[contains(text(),\"Next\")]"
},
{
"pageElement":"id(\"contents_date\")/following-sibling::*[following-sibling::p[@id=\"page_index\"]]",
"url":"^http://manganavi\\.jp/",
"nextLink":"id(\"page_navigation\")/a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\u3078\"]"
},
{
"pageElement":"id(\"main\")/ul[@class=\"caps\"]",
"url":"^http://cssmania\\.com/",
"nextLink":"id(\"main\")/div[@class=\"mtpag\"]/p/a[last()]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" post \")]",
"url":"^http://faildogs\\.com/",
"nextLink":"id(\"footer\")/a[last()]"
},
{
"pageElement":"//div[@class=\"content\"]",
"url":"^http://netafull\\.net/",
"nextLink":"//link[@rel=\"prev\"]"
},
{
"pageElement":"id(\"page\")",
"url":"^http://dezignus\\.com/",
"nextLink":"id(\"bg\")/div[@class=\"wp-pagenavi\"]/a[contains(text(), \"next\")]"
},
{
"insertBefore":"//div[@class=\"paging marg\"][2]",
"pageElement":"//ol[@class=\"snippets marg\"]",
"url":"^http://snipplr\\.com/",
"nextLink":"//div[@class=\"paging marg\"]/a[contains(text(), \"Next\")]"
},
{
"pageElement":"id(\"content\")",
"url":"^http://tv-dome\\.net/",
"nextLink":".//a[child::span[@class=\"navforward\"]]"
},
{
"pageElement":"//td[@class=\"content\"]/table/tbody/tr/td/table[not(contains(.,\"Preis:\") and contains(.,\"aufsteigend\") and contains(.,\"absteigend\"))]/tbody/tr",
"url":"^http://www\\.elv\\.de/",
"nextLink":"//td[@class=\"content\"]/table/tbody/tr/td/table[contains(.,\"Preis:\") and contains(.,\"aufsteigend\") and contains(.,\"absteigend\")]//a[contains(./b,\"\u640d\")]"
},
{
"insertBefore":"id(\"google_adsense\")",
"pageElement":"id(\"articles\")/div",
"url":"^http://slashdot\\.jp/",
"nextLink":"id(\"articles\")/a[last()]"
},
{
"pageElement":"//div[@id='main_nobg']/div[@id='thumbs']",
"url":"^http://www\\.sxc\\.hu/",
"nextLink":"//form[@id='nav_form_2']/div/table/tbody/tr/td/a[contains(text(),'Next')]"
},
{
"insertBefore":"id(\"paging\")",
"pageElement":"id(\"content\")/div[@class=\"section day\"]",
"url":"^http://lowreal\\.net/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"content\")",
"url":"^http://nettuts\\.com/",
"nextLink":"//div[@class=\"nav-previous\"]/a"
},
{
"insertBefore":"//div[contains(@id, \"footer_ad\")]",
"pageElement":"id(\"sub_main\")/div[contains(@class, \"entry\") or @id=\"comment_module\"]",
"url":"^http://ameblo\\.jp/.+",
"nextLink":"id(\"sub_main\")/div[contains(@class, \"page\")]/a[@class=\"nextPage\"]"
},
{
"pageElement":"id(\"content\")",
"url":"^http://pshero\\.com/",
"nextLink":"//div[@class=\"wp-pagenavi\"]/a[last()-1]"
},
{
"pageElement":"id(\"content\")",
"url":"^http://kotaku\\.com/",
"nextLink":"//div[@class=\"page_navigation bottom_navigation\"]/a[last()]"
},
{
"insertBefore":"//div[@id=\"body\"]/div[@class=\"content\\_main\"]/div[@class=\"page-navi\"][last()]",
"pageElement":"//div[@id=\"body\"]/div[@class=\"content\\_main\"]/table[@class=\"own_item_view\"]",
"url":"^http://zigsow\\.jp/.",
"nextLink":"//div[@id=\"body\"]/div[@class=\"content\\_main\"]/div[@class=\"page-navi\"]/span[@class=\"next\"]/a"
},
{
"pageElement":"id(\"main\")/div[@class=\"section article\"]/*[@class=\"article-lead\"]/following-sibling::*[following::*[@class=\"section pagination\"]]|id(\"main\")/div[@class=\"section newtopics\"]/div",
"url":"^http://diamond\\.jp/",
"nextLink":"//a[starts-with(text(), \"\u6b21\u306b\")]"
},
{
"pageElement":"id(\"list_item\")/table",
"url":"^http://calamel\\.jp/",
"nextLink":"//p[@class=\"number\"]/a[last()]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" article \")]",
"url":"^http://breakr\\.net/",
"nextLink":"//a[contains(concat(\" \", @class, \" \"), \" next_page \")]"
},
{
"pageElement":"//form[@name=\"FrmPrdCompare\"]/table",
"url":"^http://kakaku\\.com/",
"nextLink":"//span[@class=\"next\"]/a"
},
{
"pageElement":"//td[@class=\"td_w532\"]/node()[@class=\"topics-news\" or @class=\"table_w532\" or contains(@id,\"entry-\") or @width=\"528\"]",
"url":"^http://newsing\\.jp/",
"nextLink":"//a[child::img[@id=\"pager_next\"] or child::img[@id=\"pager-next-bottom\"]]"
},
{
"pageElement":"id(\"divTipBody\")",
"url":"^http://twitxr\\.com/",
"nextLink":"id(\"divTipBody\")/div/p/a[last()]"
},
{
"pageElement":"id(\"recently-posted\")",
"url":"^http://hypem\\.com/",
"nextLink":"//span[@class=\"this-page\"]/following-sibling::a"
},
{
"pageElement":"id(\"content\")",
"url":"^http://cyblog\\.jp/",
"nextLink":"id(\"content\")//a[child::u[contains(text(), \"\u640d\")] or contains(text(), \"\u524d\u306e\u30a8\u30f3\u30c8\u30ea\")]"
},
{
"insertBefore":"//div[@class=\"ft\"]",
"pageElement":"//div[@class=\"mtb\"]",
"url":"^http://oekyo\\.org/",
"nextLink":"//li[last()]/a"
},
{
"pageElement":"//div[@class=\"left\"]/div[2]/div[contains(@class, \"video-results-area\")]",
"url":"^http://woopie\\.jp/",
"nextLink":"//a[@class=\"page-next\"]"
},
{
"pageElement":"//ol[contains(concat(\" \", @class, \" \"), \" item-list \")]/li",
"url":"^http://cotoe\\.net/",
"nextLink":"//ul[contains(concat(\" \", @class, \" \"), \" pager \")]/li[last()]/a"
},
{
"pageElement":"id(\"content\")/div[@class=\"list_box\"]",
"url":"^http://okyuu\\.com/",
"nextLink":"//div[@class=\"pager\"]/a[@rel=\"next\"]"
},
{
"pageElement":"id(\"first-time\")/div",
"url":"^http://sinri\\.net/",
"nextLink":"id(\"first-time\")/p/a"
},
{
"pageElement":"id(\"content\")",
"url":"^http://drawr\\.net/",
"nextLink":"(//li[@class=\"left-food-link\"])[last()]/a"
},
{
"pageElement":"//a[text()=\"<<\u524d\u3078\" or text()=\"\u6b21\u3078>>\"][1]/following-sibling::table[1]",
"url":"^http://hissi\\.org/",
"nextLink":"//a[text()=\"\u6b21\u3078>>\"][1]"
},
{
"pageElement":"id(\"notices\")",
"url":"^http://identi\\.ca/",
"nextLink":"id(\"nav_pagination\")/li[@class=\"after\"]/a[1]"
},
{
"insertBefore":"id(\"content\")/div[last()]",
"pageElement":"id(\"content\")/div[@class=\"post\"]",
"url":"^http://matsuk\\.in/",
"nextLink":"id(\"footer\")/a[@rel=\"next\"]"
},
{
"pageElement":"id(\"content\")/node()[self::div[contains(concat(\" \",@class,\" \"),\" post \") or contains(concat(\" \",@class,\" \"),\" navigation \")] or self::h2]",
"url":"^http://s-tomo\\.jp/",
"nextLink":"id(\"content\")/div[last()]/a[contains(text(),\"\u640d\")]"
},
{
"pageElement":"id(\"story\")",
"url":"^http://nymag\\.com/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"//ol[@id=\"conversations-shouts\" or parent::div/@id=\"shouts\" or parent::div/@class=\"results\"]",
"url":"^http://rejaw\\.com/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"insertBefore":"//div[@class=\"pagination\"]",
"pageElement":"id(\"note_list\")",
"url":"^http://jisko\\.net/",
"nextLink":"//div[@class=\"pagination\"]/*[position() = last() and local-name() = \"A\"]"
},
{
"pageElement":"//div[starts-with(@class,\"readingContent\")]/*[not(starts-with(@class, \"pageSwitch\")) and not(@class=\"adBanner\")]",
"url":"^http://gihyo\\.jp/",
"nextLink":"(//*[@class='next']//a)[1]"
},
{
"pageElement":"//p[contains(@class, \"c\")]",
"url":"^http://eiga\\.com/",
"nextLink":"//a[@title=\"Next\"]"
},
{
"pageElement":"id(\"main\")",
"url":"^http://pettan.jp/",
"nextLink":"//a[contains(@title,\"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"//ul[@class=\"salelist_money\"]",
"url":"^http://duga\\.jp/.",
"nextLink":"//a[contains(text(),\"\u6b21\u306e10\u4ef6\")]"
},
{
"pageElement":"//ul[@class=\"mw-search-results\"]",
"url":".\\?(?:.+&)?search=",
"nextLink":"//a[@class=\"mw-nextlink\"]"
},
{
"pageElement":"//div[@class=\"section\"]/div[@class=\"box\" and position()=3]",
"url":"^http://mf247\\.jp/",
"nextLink":"//a[@class=\"next\" or child::img[@class=\"next\"]]"
},
{
"pageElement":"id(\"quotes\")/div[contains(@class,\"quote\") and not(.//*[@class=\"paging-big\"])]",
"url":"^http://inyo\\.jp/",
"nextLink":"id(\"paging-next\")"
},
{
"pageElement":"//div[contains(@class, \"mainmaru\")]",
"url":"^http://10e\\.org/",
"nextLink":"//div[contains(@class, \"page\")]/a[text()=\"Next\"]"
},
{
"pageElement":"id(\"blips userFavorites\")",
"url":"^http://blip\\.fm/",
"nextLink":"//div[@class=\"next\"]/a"
},
{
"pageElement":"//div[@class=\"pinkback\"]/form",
"url":"^http://gazo\\.in/",
"nextLink":"//a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"insertBefore":"id(\"pager\")",
"pageElement":"id(\"main\")",
"url":"^http://miau\\.jp/",
"nextLink":"//li[@class=\"pagerpage\"]/a[@accesskey=\"n\"]"
},
{
"insertBefore":"//body/center",
"pageElement":"//div[@class=\"ArticleText\"]",
"url":"^http://lwn\\.net/",
"nextLink":"//ul/li/a[contains(text(), \"Next \")]"
},
{
"insertBefore":"//div[@class=\"pager\"]",
"pageElement":"//div[@class=\"bm_list_box\"]",
"url":"^http://saaf\\.jp/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id(\"box_list\")",
"url":"^http://omyc\\.jp/",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"pageElement":"//div[@class=\"lbox\"]/div[@class=\"result\"]",
"url":"^http://ask\\.jp/",
"nextLink":"//div[@class=\"pages\"]/a[contains(text(),\">>\")]"
},
{
"pageElement":"//*[contains(concat(\" \", @class, \" \"), \" hentry \")]",
"url":"^https?://.",
"nextLink":"//link[contains(concat(\" \", translate(normalize-space(@rel),\"NEXT\",\"next\"), \" \"), \" next \")] | //a[contains(concat(\" \", translate(normalize-space(@rel),\"NEXT\",\"next\"), \" \"), \" next \")]"
}
];