// ==UserScript==
// @name           0AutoPagerize SITEINFO
// @namespace      http://ss-o.net/
// @description    oAutoPagerize SITEINFO
// @include        http*
// @checkurl       http://ss-o.net/userjs/0AutoPagerize.SITEINFO.js
// ==/UserScript==
(function(){
	if (this.chrome) {
		window.addEventListener('ChromeAutoPagerizeInitialize',function(evt){
			evt.setSiteinfo(window.AutoPagerizeWedataSiteinfo);
		}, false);
	}

window.AutoPagerizeWedataSiteinfo = [
{
"pageElement":"id(\"bodyContent\")//ul[last()]|id(\"bodyContent\")//ol[contains(concat(\" \", @class, \" \"), \" special \")]",
"url":"^http://[^.]+\\.wik(?:i(?:[mp]edia|books|news|quote|s(?:ource|pecies)|versity)|tionary)\\.org/w(?:iki/|/index\\.php\\?title=)(?:Special|%E7%89%B9%E5%88%A5)(?::|%3A)(?:(?:Ancient|Deadend|Lonely|New|MostLinked|Short|Uncategorized)Pages|(?:MostLink|Un(?:categoriz|us)|Want)ed(?:Categori|Templat)es|AbuseLog|BlockList|(?:Broken|Double)Redirects|C(?:ategorie|ontribution|rossNamespaceLink)s|Disambiguations|FewestRevisions|Global(?:BlockList|Users)|L(?:i(?:nkSearch|st(?:Redirect|User)s)|og)|Most(?:Categorie|Revision)s|Protected(?:Page|Title)s|W(?:hatLinksHere|ithoutInterwiki|anted(?:File|Page)s)|%E(?:3%8(?:2%AB%E3%83%86%E3%82%B4%E3%83%AA%E3%81%AE%E5%A4%9A%E3%81%84%E3%83%9A%E3%83%BC%E3%82%B8|3%AD%E3%82%B0)|6%(?:8A%95%E7%A8%BF%E8%A8%98%E9%8C%B2|96%B0%E(?:3%81%97%E3%81%84%E3%83%9A%E3%83%BC%E3%82%B8|7%9D%80%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB))|7%B7%A8%E9%9B%86%E5%B1%A5%E6%AD%B4%E3%81%AE%E5%A4%9A%E3%81%84%E3%83%9A%E3%83%BC%E3%82%B8|8%A2%AB%E3%83%AA%E3%83%B3%E3%82%AF%E3%81%AE%E5%A4%9A%E3%81%84%E3%83%(?:86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88|9(?:5%E3%82%A1%E3%82%A4%E3%83%AB|A%E3%83%BC%E3%82%B8))))",
"nextLink":"//a[@rel=\"next\" or @class=\"mw-nextlink\"]"
},
{
"pageElement":"id(\"content pane2\")/div[@class=\"post\"]",
"url":"^http://(?:(?:a(?:ctinglikeanimals|utocompleteme)|b(?:ab(?:iesmakingfaces|ysaur)|obshouseofvideogames)|c(?:hatroulettetrolling|omixed|razythingsparentssay)|dailysquee|e(?:ngrishfunny|p(?:icute|icwinftw))|f(?:ailbook|riendsofirony)|graphjam|ha(?:ckedirl|wtness)|i(?:canhascheezburger|fshoescouldkill|hasahotdog|tmademyday)|l(?:earnfrommyfail|ovelylisting)|m(?:thruf|usthavecute|yfoodlooksfunny)|o(?:ddlyspecific|nceuponawin)|p(?:(?:ictureisunrelat|oorlydress)ed|robablybadnews|unditkitchen)|r(?:idiculousposes|oflrazzi)|senorgif|t(?:h(?:atwillbuffout|ereifixedit|ingsthataredoingit|isisphotobomb)|otallylookslike|weetbaggery)|u(?:gliesttattoo|pnextinsport)s|verydemotivational|wedinator)\\.com|thedailywh\\.at|failblog\\.org)/",
"nextLink":"(id(\"content\")|id(\"pane2\")/div[@class=\"navigation\"])//a[contains(., \"\u00bb\")]"
},
{
"pageElement":"id(\"pagination\")/preceding-sibling::*",
"url":"^http://blogs\\.(?:browardpalmbeach|citypages|dallasobserver|houstonpress|laweekly|miaminewtimes|ocweekly|p(?:hoenixnewtimes|itch)|riverfronttimes|s(?:eattle|f)weekly|villagevoice|westword)\\.com/",
"nextLink":"id(\"paginationNext\")/a"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" content_body \") or contains(concat(\" \", @class, \" \"), \" slideshow_area \")]/*|//div[@class=\"gsa_search\"]/ul",
"url":"^http://www\\.(?:browardpalmbeach|citypages|dallasobserver|houstonpress|laweekly|miaminewtimes|ocweekly|p(?:hoenixnewtimes|itch)|riverfronttimes|s(?:eattle|f)weekly|villagevoice|westword)\\.com/",
"nextLink":"//span[@class=\"PaginationSelected\"]/following-sibling::a[1]"
},
{
"insertBefore":"id(\"toolbox_art_bot\")",
"pageElement":"id(\"article_text\")",
"url":"^http://www\\.wired\\.com/(?!(?:[^/]+/)*multimedia/|autopia|dangerroom|epicenter|g(?:a(?:dgetlab|melife)|eekdad)|rawfile|th(?:isdayintech|reatlevel)|underwire|wiredscience)",
"nextLink":"id(\"toolbox_art_bot\")/div[@class=\"float_r\"]/div[@class=\"tool\"][2]/ul/li[last()]/a"
},
{
"pageElement":"//div[@class=\"coment\"]",
"url":"^http://erogamescape\\.d(?:do\\.jp|yndns\\.org)/~ap2/ero/toukei_kaiseki/(?:(?:game_|pov_)?comment(?:_(?:(?:before|new)game|respons|t(?:ime|ouhyou)))?|usersql_list)\\.php",
"nextLink":"//a[contains(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"//div[starts-with(@id, \"illust_c\")]",
"url":"^http://www\\.pixiv\\.net/(?:bookmark(?:_new_illust|(?!_illust_user)(?!.+?type=user))|(?:member|(?:mypixiv_)?new)_illust|search|tags|tools|event_birthday_illust)",
"nextLink":"//div[starts-with(@id, \"content\")]//a[starts-with(text(), \"\u6b21\u306e\")][contains(@href,\"p=\")]"
},
{
"pageElement":"id(\"PAGEBODY\")//table[@class=\"pager\"]/preceding-sibling::*[not(./descendant-or-self::form[@name=\"sort\"])]|id(\"PAGEBODY\")//table[@summary=\"pager\"]/following-sibling::table[@class=\"font12\"]",
"url":"^http://www\\.nicovideo\\.jp/(?:newarrival|myvideo|mylist_search|migiue|openlist|recent|related_tag|search|tag|(?:my|user/\\d+)/(?:channel|community|watchlist))",
"nextLink":"id(\"PAGEBODY\")//table[@class=\"pager\"]/tbody/tr/td/span/following-sibling::a[1]"
},
{
"pageElement":"id(\"paginator\")/preceding::table[@class=\"highlightable\"]",
"url":"^http://(?:danbooru\\.donmai\\.us|nekobooru\\.net|(?:chan\\.sankakucomplex|konachan)\\.com|moe\\.imouto\\.org|nekobooru\\.net)/(?:artist|pool|tag)(?:$|[#/?])",
"nextLink":"id(\"paginator\")/div[@class=\"pagination\"]/a[.=\">>\"]"
},
{
"pageElement":"//table[@class=\"standard_list\"]",
"url":"^https?://(?:www\\.k\\.kyoto-u\\.ac\\.jp|student\\.iimc\\.kyoto-u\\.ac\\.jp/iwproxy/KULASIS)/student/(?:la|[gu]/[a-z]+)/(?:syllabus/|timeslot/lecture_)search",
"nextLink":"//a[@class=\"pager_link\"][contains(text(), \"\u6b21\u306e\")]"
},
{
"pageElement":"//div[@class=\"coment\"][2]",
"url":"^http://erogamescape\\.d(?:do\\.jp|yndns\\.org)/~ap2/ero/toukei_kaiseki/user_(?:pov_)?comment(?:_(?:group|(?:hi)?touhyou|respons(?:ed)?|tokuten))?\\.php",
"nextLink":"//a[contains(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"content\")/div[starts-with(@id, \"post\")]",
"url":"^http://www\\.wired\\.com/(?:autopia|dangerroom|epicenter|g(?:a(?:dgetlab|melife)|eekdad)|rawfile|th(?:isdayintech|reatlevel)|underwire|wiredscience)",
"nextLink":"//div[@class=\"navigation\"]/div[@class=\"back\"]/a"
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
"pageElement":"//table[@class=\"mediainfo\"]/following-sibling::*[./following-sibling::table[@class=\"mediainfo\"]]",
"url":"^http://(?:as(?:ian|s)|bbw|etc|f(?:acial|oot|unny)|ghetto|hentai|l(?:atina|esbian)|m(?:ilf|outh)|pussy|redhead|skinny|tits|vintage)fap\\.com/",
"nextLink":"//table[@class=\"mediainfo\"]//a[contains(., \"NEXT\")]"
},
{
"pageElement":"//div[@class=\"usersearch_box\" or @class=\"line_h24px\" or @class=\"work_list_item\"]",
"url":"^http://(?:[^/]+\\.)?novelist\\.jp/(?:category|(?:ranking_(?:author|day|week))|tag(?:_list)?|(?:user_)?search|work_list(?:_all)?)\\.php",
"nextLink":"//a[@title=\"next page\"]"
},
{
"pageElement":"id(\"badge_list follow_list illust_list\")/*[not(@id=\"page_select\")]",
"url":"^http://www.pixa.cc/(?:(badges|follows)/list_(?:\\1|search)|illustrations/list_(?:follows|main|nickname|search|tag)|profiles/show/\\d)",
"nextLink":"id(\"page_next\")/parent::a"
},
{
"pageElement":"id(\"content\")/div[@class=\"page-navi\"]/preceding-sibling::*|id(\"content\")/ul[@class=\"stream\"]",
"url":"^http://(?:a(?:pplemania|utokult)|(?:fotoblog|hdtvman)ia|lajfmajster|g(?:adzetomania|rrr)|komorkomania|niezlekino|simblog|vbeta).pl/",
"nextLink":"id(\"content\")/div[@class=\"page-navi\"]/div[@class=\"wp-pagenavi\"]/span[@class=\"current\"]/following-sibling::a|id(\"content\")//a[@class=\"nextpostslink\"]"
},
{
"pageElement":"id(\"hot_kuchikomi\")",
"url":"^http://(?:www\\.)?mogo2\\.jp/(?:top|home(?:/archive_(?:all|res)|/res)?|(?:(?:member(?:/keyword)?|comment|keyword/search)/)?[1-9])",
"nextLink":"id(\"t_all_read\")/p/a[last()]"
},
{
"pageElement":"//ul[contains(concat(\" \", @class, \" \"), \" thumbList \")][./*]|id(\"group-comments\")/ul[@class=\"commentList\"]",
"url":"^http://www\\.veoh\\.com/(?:(?:collection|group|users)/|(?:browse|search)/(?:channels|groups|m(?:ovies|usic)|videos|webseries))",
"nextLink":"//ul[contains(concat(\" \", @class, \" \"), \" pagination \") and contains(concat(\" \", @class, \" \"), \" noNumbers \")]/li[2]/a"
},
{
"pageElement":"id(\"body\")/div",
"url":"^http://(?:booru\\.nanochan\\.org|(?:www\\.)?dontstickthatthere\\.com/shimmie)/(?:(?:comment|post)/list(?:$|[#/?])|$|[#?])",
"nextLink":"id(\"paginator\")/b/following-sibling::a[1]"
},
{
"pageElement":"id(\"productReviews\")//table",
"url":"^https?://www\\.amazon\\.(?:c(?:a|o(?:m|\\.(?:jp|uk)))|de|fr)/(?:[^/]+/)?(?:(?:customer|product)-reviews|review/product)/",
"nextLink":"//span[@class=\"paging\"]/span[@class=\"on\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"Main\")/form/div",
"url":"^https?://lib-www\\.smt\\.city\\.sendai\\.jp/licsxp-opac/WOpacTif(?:.*?SchCmpdExec|JunlChoSelect|TilListDisp)Action\\.do",
"nextLink":"id(\"Main\")//div[contains(concat(\" \",@class,\" \"),\" paging \")]/a[.=\"\u6b21\u3078\"]"
},
{
"pageElement":"//div[@align=\"center\" or contains(@style, \"text-align: center;\")][a]",
"url":"^http://(?:dl|www)\\.toranoana\\.jp/(?:comiholi_a|webcomic/holic)/[^/]+(?:/webcomic)?/(?:\\d+|comics/summary)/.+\\.html",
"nextLink":"//div[@align=\"center\" or contains(@style, \"text-align: center;\")]/a"
},
{
"pageElement":"//span[@class=\"hotranking-number\"]/ancestor::table[1]",
"url":"^http://(?:www\\.)?discas\\.net/netdvd/hotranking(?:Top(?:Monthly|Total|Weekly)|GenreDetail[MTW]|GenerationDetail[MW])",
"nextLink":"//table[@width=\"775\"]/descendant::table[@width=\"540\"][1]//td[child::strong]/following-sibling::td[2]//a"
},
{
"pageElement":"//div[@class=\"main\"]/p",
"url":"^http://(?:(?:nightgs|talker)\\.sakura\\.ne\\.jp/denpa[^/]*/izumimain/.|green\\.ribbon\\.to/.+?koneta/denpa/[^/]+/.)",
"nextLink":"//div[@class=\"main\"]/a[contains(text(),\"NEXT\")]"
},
{
"pageElement":"id(\"follow_grid\")/*",
"url":"^https?://(?:api\\.)?twitter\\.com/(?:(?:[^/]+/)?follow(?:ers|ing)|[^/]+/[^/]+/(?:members|subscribers)|search/users)",
"nextLink":"//a[@rel=\"me next\"]"
},
{
"insertBefore":"//div[@class=\"section\"]/following-sibling::node()",
"pageElement":"//div[@class=\"section\"]",
"url":"^http://photozou\\.jp/(?:photo|video|mypage)/(?:list|everyone|friend|popular|favorite|cc|tagged|community_photo)/",
"nextLink":"//li[@class=\"page_next\"]/a"
},
{
"pageElement":"id(\"listFeatured listStandard\")/tbody/tr",
"url":"^https?://(?:(?:ssl|www)\\.)?(?:a(?:llegro\\.pl|ukro\\.(?:cz|bg|sk|ua))|molotok\\.ru|teszvesz\\.hu|tizo\\.ro)/",
"nextLink":"id(\"pagerTop\")//strong[@class=\"orange\"]/following-sibling::a[1]"
},
{
"pageElement":"//h1[1] | //h1[1]/following-sibling::node()",
"url":"^https?://[^?#]+/(?:19|20)\\d\\d(?:-?(?:0[1-9]|1[0-2])|-[A-Z][a-z]+)/(?:msg)?\\d+\\.html(?:\\?[^#]*(?:#.*)?)?$",
"nextLink":"//a[text()=\"Thread Next\"][1] | //li[starts-with(normalize-space(), \"Next message:\")][1]/a"
},
{
"pageElement":"id(\"page_all\")/*",
"url":"^http://www\\.(?:(?:b(?:ella|uzz)|casa|f(?:ab|it)|geek|lil|p(?:et|op)|savvy|tres|yum)sugar|celebstyle)\\.com/",
"nextLink":"id(\"pager\")/a[contains(concat(\" \", @class, \" \"), \" pager-next \")]"
},
{
"pageElement":"id(\"paginator\")/preceding-sibling::div[1][./*[(self::ul and @id=\"post-list-posts\" and ./*[contains(concat(\" \", @class, \" \"), \" javascript-hide \")]) or (self::span and contains(concat(\" \", @class, \" \"), \" blacklisted \"))]]/../*",
"url":"^http://(?:danbooru\\.donmai\\.us|konachan\\.com|moe\\.imouto\\.org|nekobooru\\.net)/(?:note|post)(?:$|[#/?])",
"nextLink":"id(\"paginator\")/div[@class=\"pagination\"]/a[.=\">>\"]"
},
{
"pageElement":"id(\"nsi-body\")//font[@class=\"QWZ12-120\"]/a[contains(text(), \"\u306e\u30da\u30fc\u30b8\")]/ancestor::table[1]/following-sibling::table[./following::font[@class=\"QWZ12-120\"]/a[contains(text(), \"\u306e\u30da\u30fc\u30b8\")]]",
"url":"^https?://rikunabi-next\\.yahoo\\.co\\.jp/rnc/docs/cp_s0(?:0(?:05|4[36]|7[16]|8[689]|90)0|2(?:04|20)0)\\.jsp",
"nextLink":"id(\"nsi-body\")//font[@class=\"QWZ12-120\"]/a[starts-with(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"//table[@class=\"file\"]",
"url":"^http://[^.]+\\.(?:seattleserv0\\.)?(?:d(?:do|ip|yndns)|m(?:oehome|ydns))\\.(?:jp|org|tv)/up(?:[_/]|loader/)",
"nextLink":"//div[@class=\"page_info\"]/em/following-sibling::*[1][self::a]"
},
{
"pageElement":"id(\"rightResults atfResults btfResults Results\")//div[@class=\"listView\" or @class=\"defaultView\"]|id(\"Results\")/table",
"url":"^https?://www\\.amazon\\.(?:c(?:a|o(?:m|\\.(?:jp|uk)))|de|fr)/(?:[^/]+/)?(?:[bs]|(?:gp|exec/obidos)/search)",
"nextLink":"id(\"pagnNextLink\")"
},
{
"pageElement":"id(\"showcase\")",
"url":"^http://(?:directory|esearch)\\.rakuten\\.co\\.jp/rms/sd/(?:directory|esearch)/vc\\?[^#]*\\bv=3(?:[&#]|$)",
"nextLink":"//td[img[@src=\"http://image.www.rakuten.co.jp/com/img/icon/tri/w14/right.gif\"]]/preceding-sibling::td[1]//a[b]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" item \") or contains(concat(\" \", @class, \" \"), \" review \")]|//ul[contains(concat(\" \", @class, \" \"), \" thumbs \")]",
"url":"^https://addons\\.mozilla\\.org/[^/]+/[^/]+/(?:browse/type:[124]/cat:|(?:collection|reviews|tag)/|search)",
"nextLink":"//a[@rel=\"next\"]"
},
{
"insertBefore":"id(\"maintitle\")/following-sibling::node()[last()]",
"pageElement":"id(\"maintitle\")/following-sibling::*[./following-sibling::h2]",
"url":"^http://(?:members\\.jcom\\.home\\.ne\\.jp/w3c/omake/diary\\.html|noz\\.hp\\.infoseek\\.co\\.jp/diary/)",
"nextLink":"//h2/following::dt[contains(text(), \"\u524d\")]/following-sibling::dd[2]/a"
},
{
"pageElement":"//table[@class=\"PeopleRS\"]",
"url":"^http://(?:assets\\d|cn|de|es|it|jp|nl|p(?:l|t(?:-br)?)|ru|tw|upload|www)\\.zooomr\\.com/search/people/",
"nextLink":"//a[@class=\"Next\"]"
},
{
"pageElement":"id(\"DeleteForm\")",
"url":"^http://(?:www\\.)?ib4f\\.com/board/bara0/(?:(?:draw|gaiji)n|f(?:it|urry)|oekaki|(?:re|soci)al|videos)/",
"nextLink":"id(\"DeleteForm\")/table/tbody/tr/td/table/tbody/tr/td/b/following-sibling::a"
},
{
"pageElement":"//div[@class=\"contBlockNB\"]//div[starts-with(@id, \"schedule-\") or contains(concat(\" \", @class, \" \"), \" utileList \")]",
"url":"^http://tv\\.so-net\\.ne\\.jp/(?:m/schedulesByFilter\\.action\\?|s(?:chedulesBySearch\\.action\\?|/))",
"nextLink":"//a[@class=\"linkArrowE\"]"
},
{
"pageElement":"id(\"chiecoListSmall chiecoListLarge productListSmall productListLarge reviewListSmall reviewListLarge keyword-qa-list keyword-product-list keyword-ranking-list keyword-review-list product-qa-list product-review-list\")/*",
"url":"^http://www\\.cosme\\.net/(brand|effect|item|product)/\\1_id/\\d+/(?:chieco|products|ranking|reviews)",
"nextLink":"id(\"pagination\")/li[@class=\"next\"]/a|id('keyword-ranking-header')//li[@class=\"on\"]/following-sibling::li[1]/a|//div[@class=\"cmn-modules-paging clearfix\"]//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"PhotoStream\")/* | //td[contains(@class,\"PhotosColumn\")]/*",
"url":"^http://www\\.flickr\\.com/photos/(?!(?:friend|tag)s(?:[/?#]|$))[^/?#]+(?:/(?:page\\d|[?#]|$)|[?#]|$)",
"nextLink":"//a[@class=\"Next\"]"
},
{
"insertBefore":"id(\"google_adsense\")",
"pageElement":"id(\"articles\")/div",
"url":"^http://slashdot\\.jp/(?!\\w+/[\\d/]+\\.shtml|(?:article|journal)\\.pl\\?|(?:~[^/]+|authors)/journal)",
"nextLink":"id(\"articles\")/a[last()]"
},
{
"pageElement":"id(\"search-results\")/dl",
"url":"^http://(?:community\\.adobe\\.com/help/search\\.html|www\\.adobe\\.com/cfusion/search/index.cfm)\\?",
"nextLink":"id(\"searchPagination\")//a[contains(., \"\u00bb\")]"
},
{
"pageElement":"//table[@class=\"review\"]|//table[@class=\"listtable\"]/tbody/tr[position()>1]|//table[@class=\"polaroid\"]/ancestor::table[1]",
"url":"^http://(?:c(?:hahan|urry)|ramen)db\\.supleks\\.jp/(?:commentlist/|rank|s(?:corelist|earch)|photo/)",
"nextLink":"//span[@class=\"tsb\"]/following-sibling::*[1][self::a]"
},
{
"pageElement":"id(\"fans_comments\")/div[@class=\"line-height_comment\"]/div[not(@class=\"display_where_case\")]",
"url":"^http://erogamescape\\.d(?:do\\.jp|yndns\\.org)/~ap2/ero/toukei_kaiseki/creater_fans_comments\\.php",
"nextLink":"//a[contains(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"pov_contents comments\")/div",
"url":"^http://erogamescape\\.d(?:do\\.jp|yndns\\.org)/~ap2/ero/toukei_kaiseki/povlist(?:_comment)?\\.php",
"nextLink":"//a[contains(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"site-body\")//div[@class=\"pagenavi\"][1]/following-sibling::*[1][self::div or self::table]",
"url":"^http://c(?:h|om).nicovideo.jp/(?:c(?:hannel|om(?:_new|munity))|live_archives|member|search|video)",
"nextLink":"id(\"site-body\")//div[@class=\"pagenavi\"]//a[@class=\"next\"]"
},
{
"pageElement":"id(\"pbBlock3080024 pbBlock3166169 pbBlock3230957\")//div[@class=\"tolCitColumnAWrap\" or @class=\"tolListRvwContainerB\" or contains(@class,\"tolListRvwWrapB\")]/following-sibling::*",
"url":"^http://store\\.tsutaya\\.co\\.jp/(?:item/(?:s(?:tore_search/|earch_))|storelocator/)result\\.html",
"nextLink":"id(\"pbBlock3080024 pbBlock3166169 pbBlock3230957\")//li[@class=\"tolLRWBliEnd\"]/a"
},
{
"pageElement":"id(\"quick-edit\")/following-sibling::*[1][self::div]/span | id(\"note-list\")/div/span | id(\"post-list-posts\")/li",
"url":"^http://(?:danbooru\\.donmai\\.us|konachan\\.com|moe\\.imouto\\.org|nekobooru\\.net)/(?:post|note)",
"nextLink":"id(\"paginator\")/div[@class=\"pagination\"]/a[.=\">>\"]"
},
{
"pageElement":"id(\"wrapper\")/*",
"url":"^http://(?:us\\.)?(?:deadspin|g(?:awker|izmodo)|io9|j(?:alopnik|ezebel)|kotaku|lifehacker)\\.com/",
"nextLink":"//a[@class=\"current_page\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"threadslist posts\") | id(\"inlinemodform\")/table[starts-with(@id, \"post\")]",
"url":"^http://(?:www\\.)?(?:neogaf\\.com/forum|ga-forum\\.com)/(?:forumdisplay|showthread|search)\\.php",
"nextLink":"//div[@class=\"pagenav\"]//a[text()=\">\"]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" reportMainBox \")]",
"url":"^http://www\\.carview\\.co\\.jp/(?:green/report/road_imp|magazine/market_watch|road_impression)/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pagingNumBox \")]/ul/li/a[contains(text(), \"\u6b21\u3078\")]"
},
{
"pageElement":"id(\"rounded_container\")/table[1]/tbody[1]/tr[1]/td[2]/table[1]",
"url":"^http://(?:assets\\d|cn|de|es|it|jp|nl|p(?:l|t(?:-br)?)|ru|tw|upload|www)\\.zooomr\\.com/search/",
"nextLink":"//a[@class=\"Next\"]"
},
{
"pageElement":"id(\"SubNav\")/following-sibling::table[1]/tbody[1]/tr[1]/td[1]/table[1]",
"url":"^http://(?:assets\\d|cn|de|es|it|jp|nl|p(?:l|t(?:-br)?)|ru|tw|upload|www)\\.zooomr\\.com/photos/",
"nextLink":"//a[@class=\"Next\"]"
},
{
"insertBefore":"//td[@class=\"outer\"]/div",
"pageElement":"//td[@class=\"outer\"]/table[@width]",
"url":"^http://(?:www\\.)?animecentral\\.com\\.br/forums\\.php\\?(?:[^?#]*&)?action=view(?:forum|topic)",
"nextLink":"//td[@class=\"outer\"]/p[1]//a[.=\"Next >>\"]"
},
{
"pageElement":"id(\"bannerB2\")/preceding-sibling::*",
"url":"^http://www\\.(?:new-akiba\\.com|ura-akiba\\.jp)/(?:entry/[^/]+/)?archives/\\d+/\\d+/\\w+\\.html",
"nextLink":"//div[@class=\"kiji-column-main\"]/div[@align=\"center\"]/p/a"
},
{
"insertBefore":"(//td[table/@cellspacing=\"3\"]|//div[@class=\"col1\"])/table[.//font=\"\u25cf\u4ee5\u4e0b\u306e\u30b8\u30e3\u30f3\u30eb\u304c\u898b\u3064\u304b\u308a\u307e\u3057\u305f\"]/following-sibling::*",
"pageElement":"(//td[table/@cellspacing=\"3\"]|//div[@class=\"col1\"])/table[.//@bgcolor=\"#f6f6dc\"]",
"url":"^http://(?:(?:directory|esearch)?\\.rakuten\\.co\\.jp/rms/sd|search\\.rakuten\\.co\\.jp/search)/",
"nextLink":"//td[img[@src=\"http://image.www.rakuten.co.jp/com/img/icon/tri/w14/right.gif\"]]/preceding-sibling::td[1]//a[b]"
},
{
"pageElement":"id(\"content\")",
"url":"^http://(?:cn\\.last\\.fm|www\\.last(?:\\.fm|fm\\.(?:com\\.[bt]r|[^./]{2})))/user/[^/]+/journal",
"nextLink":"id(\"content\")//div[contains(concat(\" \", @class, \" \"), \" pagination \")]/a[contains(concat(\" \", @class, \" \"), \" nextlink \")]"
},
{
"insertBefore":"//form[@name=\"editItems\"][last()]/table/following-sibling::node()",
"pageElement":"//form[@name=\"editItems\"]/table",
"url":"^https?://www\\.amazon\\.(?:co(?:m|\\.jp)|de)/(?:gp/)?registry/(?:wishlist[/?]|registry\\.html)",
"nextLink":"//span[contains(concat(\" \",normalize-space(@class),\" \"), \" pagSide \")][last()]/a"
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
"insertBefore":"//div[@class=\"pagination\"][last()]",
"pageElement":"id(\"deletablert\")",
"url":"^http://(?:cn\\.last\\.fm|www\\.last(?:\\.fm|fm\\.(?:com\\.[bt]r|[^./]{2})))/user/[^/]+/charts",
"nextLink":"//a[@class=\"nextlink\"]"
},
{
"pageElement":"id(\"photoflash headlinephoto\")",
"url":"^http://(?:[^.]+\\.keizai\\.biz|www\\.(?:hama|shibu)kei\\.com)/(?:photoflash|headline/photo)/",
"nextLink":"id(\"nextItemLink\")"
},
{
"insertBefore":"id(\"googlead\")",
"pageElement":"//div[@class=\"frame\"]/div[@class=\"main\"]/table",
"url":"^http://(?:www\\.)?gumonji\\.net/cgi-bin/(?:(?:community|diary|zone)_list|message_box)\\.cgi",
"nextLink":"//div[@class=\"frame\"]/div[@class=\"main\"]/div[@class=\"page2\"]/div[@class=\"pager_next\"]/a"
},
{
"pageElement":"id(\"pagecontent\")",
"url":"^http://(?:nwnw(?:01|\\.globat)\\.com|torone\\.net:8080/torone)/view(?:forum|topic)\\.php\\?",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"//div[contains(@class, \"post_table\")]",
"url":"^http://[^.]+\\.areablog\\.jp/(?!blog/[^/]+/.+\\.html|(?:more_post|page_(?:img|list))\\.asp)",
"nextLink":"//a[descendant::font[text()=\"\u4ee5\u524d\u306e\u8a18\u4e8b\u3078>>\"]]"
},
{
"pageElement":"id(\"body\")//ul[@class=\"fanlist\"]",
"url":"^http://www\\.hatena\\.ne\\.jp/[a-zA-Z][\\w-]{1,30}[a-zA-Z\\d]/(?:f(?:a(?:n|vorite)|riend)s)",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"listPlanArea listHotelArea\")",
"url":"^http://web\\.travel\\.rakuten\\.co\\.jp/portal/my/(?:mt_map\\.chk|ry_kensaku\\.k2)(?:\\?|$)",
"nextLink":"//div[@class=\"pagingArea\"]//a[starts-with(text(), \"\u6b21\")]"
},
{
"pageElement":"//div[@class=\"jive-entry-list\"]|//div[@class=\"jive-search-results\"]/ol|//table[@class=\"jive-search-results\"]",
"url":"^http://developer\\.amazonwebservices\\.com/connect/(?:kbcategory|(?:kb)?search)\\.jspa\\?",
"nextLink":"//span[@class=\"jive-paginator\"]/*[self::b or (self::a and @class=\"jive-current\")]/following-sibling::a[1]"
},
{
"pageElement":"id(\"article\")/*[(self::table and .//p[@class=\"secondary\"]/b) or (self::div and @class=\"noindex\")][1]/preceding-sibling::*[./preceding-sibling::*[self::h2 or (self::p and @class=\"secondary\")]]|id(\"article\")[not(./*[(self::table and .//p[@class=\"secondary\"]/b) or (self::div and @class=\"noindex\")])]/p[@class=\"secondary\"][1]/following-sibling::*|id(\"article\")/div[@class=\"noindex\" and ./div[@class=\"feedback\"]]",
"url":"^http://(?:(?:linux|mac|windows)devcenter|on(?:java|lamp)|www\\.(?:perl|xml))\\.com/pub/a/",
"nextLink":"id(\"article\")/table//p[@class=\"secondary\"]/b/following-sibling::a[1]"
},
{
"pageElement":"//ul[@class=\"artistsWithInfo\" or @class=\"artistList\"]",
"url":"^http://(?:cn\\.last\\.fm|www\\.last(?:\\.fm|fm\\.(?:com\\.[bt]r|[^./]{2})))/music/[^/]+/",
"nextLink":"//div[@class=\"pagination\"]/a[@class=\"nextlink\"]"
},
{
"pageElement":"//div[@class=\"news\"]/div[contains(@class, \"alert\")]",
"url":"^https?://github\\.com/(?:$|dashboard|(?:timeline|[^/]+/[^/]+/(?:comments|network/feed)))",
"nextLink":"//a[@hotkey=\"l\"]"
},
{
"pageElement":"//table[contains(@class, \"list\")] | //dl[@class=\"hist\"]",
"url":"^http://www8\\.atpages\\.jp/owatamap/(?:index\\.php(?:/menu\\.php)?)?\\?(?:[hl]ist|ss)\\b",
"nextLink":"//a[contains(text(), \">>\")]"
},
{
"pageElement":"//ul[@class=\"SRList01\"]",
"url":"^http://mixi-search\\.naver\\.jp/(?:search|topics|image|video|web|blog|bbs|theme|matome)?",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"(/html/*[not(self::body)]|/html/body/*)[.//@class=\"resourcepage_photoGalleryImage\" or .//@class=\"resourcepage_caption\"]|/html/body/script",
"url":"^http://[^/]+\\.impress\\.co\\.jp/img/\\w+/docs/\\d+/\\d+/photogallery/[^/]+\\.jpg\\.html",
"nextLink":"//div[@class=\"next_link\"]/a"
},
{
"pageElement":"//hr/following-sibling::table[@align=\"right\"]/preceding-sibling::node()[not(self::center or self::p or self::hr and @width)]",
"url":"^http://(?:[^.]+\\.(?:dreamhosters\\.com|komica\\.org)|2cat\\.twbbs\\.org/~twocat)/[^/]+/",
"nextLink":"//form[substring(@action, string-length(@action) - string-length(\".htm\") + 1) = \".htm\"][last()]"
},
{
"pageElement":"id(\"timeline\")",
"url":"^http://(?:assets\\d|cn|de|es|it|jp|nl|p(?:l|t(?:-br)?)|ru|tw|upload|www)\\.zooomr\\.com/",
"nextLink":"id(\"timeline\")/following-sibling::h2[1]/a[last()]"
},
{
"pageElement":"id(\"resultsBody\")/table[1]",
"url":"^http://(?:www\\.)?excite\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/search\\.gw\\?.*?\\btarget=image",
"nextLink":"id(\"resultsBody\")/table[last()]//a[contains(text(),\">>\")]"
},
{
"pageElement":"id(\"content\")/div[contains(concat(\" \", @class, \" \"), \" section \")]/ul",
"url":"^http://(?:cafeblog|image|kin|news|video|web)\\.search\\.naver\\.com/search\\.naver\\?",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id(\"ytrvTmWrMain\")/div[@class=\"ytrvTmWrDomMain\" or @class=\"ytrvTmWrAbrMain\"]/div[@class=\"ytrvTmWrDomMainBody\" or @class=\"ytrvTmWrAbrMainBody\"]/div[@class=\"ytrvTmMdTdList\" or @class=\"ytrvTmMdRepList\" or @class=\"ytrvTmMdLine\"]",
"url":"^http://community\\.travel\\.yahoo\\.co\\.jp/(?:abroad|domestic).*/b(?:log|uzz)\\.html",
"nextLink":"//li[contains(concat(\" \",@class,\" \"), \" next \")]/a"
},
{
"pageElement":"id(\"posts threadslist\")",
"url":"^http://(?:(?:www\\.)?candlepowerforums|forum\\.gamevn|www\\.e-cigarette-forum)\\.com/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"story-body-text\")/node()|id(\"story-body\")[not(id(\"story-body-text\"))]/*|id(\"gallery-slideshow\")/span[@class=\"holder\"]|//ul[@class=\"results-list\"]",
"url":"^http://www\\.chicagotribune\\.com/(?:search/|[^.]+\\.(?:column|(?:photogalle|sto)ry))",
"nextLink":"//ul/li[@class=\"next\"]/a|id(\"photo-next-right\")/a"
},
{
"pageElement":"id(\"body\")/div/ul/li/div[1]",
"url":"^http://www\\.hatena\\.ne\\.jp/[a-zA-Z][\\w-]{1,30}?[a-zA-Z\\d]/a(?:ntenna|ctivities)",
"nextLink":"//a[contains(text(),\"\u6b21\u306e100\u4ef6>\")]"
},
{
"pageElement":"id(\"video_grid\")|id(\"baseDiv\")[not(id(\"video_grid\"))]//div[@class=\"list-view\"]",
"url":"^http://www\\.youtube\\.com/(?:(?:channel|result)s|vi(?:deos|ew_play_list))(?:$|[#?])",
"nextLink":"id(\"baseDiv\")//div[@class=\"searchFooterBox\"]/div[@class=\"yt-uix-pager\"]/*[last()][@href]"
},
{
"pageElement":"id(\"ypsausit\")/div[@class=\"bd\"]/table/tbody/tr",
"url":"^http://tw\\.(?:search\\.)?bid\\.yahoo\\.com/(?:tw/.*?category-leaf\\.html|search/ac)",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"//div[@class=\"main\"]/center/table/tbody/tr[2]/td/table",
"url":"^https?://(?:www\\.)?amusement-center\\.com/project/emusic/cgi/eggmusic_catalog\\.cgi",
"nextLink":"//div[@class=\"main\"]/center/table/tbody/tr[1]/td[last()]/a[last()]"
},
{
"pageElement":"id(\"list01\")",
"url":"^http://(?:search\\d*|list\\d+|storeuser\\d+|openuser)?\\.auctions\\.yahoo\\.co\\.jp/",
"nextLink":"//img[contains(@src, \"arrow_next\")]/parent::a"
},
{
"pageElement":"id(\"pagecontent\")",
"url":"^http://(?:torrentjp\\.com/gdfjp/|gdf\\.torrentjp\\.com/)view(?:forum|topic)\\.php\\?",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"//table[@class=\"forumline\"]",
"url":"^http://(?:[^.]+\\.)?atbb\\.jp/[^/]+/viewtopic\\.php\\?(?:f=[1-9][0-9]*[&;])?t=[1-9]",
"nextLink":"//span[@class=\"nav\"]/b/following-sibling::a[1]"
},
{
"pageElement":"id(\"content\")/div[last()]",
"url":"^http://events\\.php\\.gr\\.jp/(?:events(?:/(?:index(?:/(?:page(?::\\d*)?)?)?)?)?)?$",
"nextLink":"id(\"pagination\")/a[last()]"
},
{
"pageElement":"//div[@class=\"profile-results-section\"]",
"url":"^https?://www\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/profiles\\?[^?#]*?\\bq=[^?#=&;]",
"nextLink":"//div[@class=\"profile-results-paginator\"]//a[descendant::img[contains(@src, \"/nav_next.gif\")]]"
},
{
"pageElement":"//div[@id=\"content2\"]//div[./a/img] | //div[@id=\"content2\"]//div[./a/img][position()=last()]/following-sibling::br[position()=1]",
"url":"^http://www\\.pixiv\\.net/(?:bookmark.+type=(?:reg_)?user|mypixiv_all|personal_tags)",
"nextLink":"//div[starts-with(@id,\"content\")]//a[starts-with(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"mats\")",
"url":"^http://cgi4\\.nhk\\.or\\.jp/gatten/(?:archive/back_number|recipe/recipe_list)\\.cgi",
"nextLink":"id(\"broadcasts recipes\")//strong[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"article\")/a[@name] | id(\"articles commentwrap commentlisting\")|id(\"articles-suffix\")/div",
"url":"^http://slashdot\\.jp/(?:\\w+/[\\d/]+\\.shtml|article\\.pl\\?(?:[^?#]*&)?sid=[\\d/])",
"nextLink":"id(\"articles-suffix\")/div[contains(@class,\"comments-suffix-prev-next\")]/ul/li[@class=\"start\"]/span/a"
},
{
"pageElement":"//div[@class=\"chapter\" or @class=\"section\" or @class=\"preface\" or @class=\"part\" or @class=\"toc\" or @class=\"appendix\"]",
"url":"^https?://(?:[^.]+\\.(?:redhat\\.com|centos\\.org)/docs|docs\\.fedoraproject\\.org)/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"yarticle yphtsingle yphtgallery\")//div[@class=\"mbd\" or @class=\"mft\"]",
"url":"^http://tw\\.myblog\\.yahoo\\.com/[^/]+/(?:ar(?:chiv|ticl)e|gallery|photo)(?:[?#]|$)",
"nextLink":"//span[@class=\"next\"]/a"
},
{
"pageElement":"//p[@class=\"g\"]/..",
"url":"^http://www\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/hws/search\\?.*?\\bclient=fenrir",
"nextLink":"id(\"nextPageUrl\")"
},
{
"insertBefore":"id(\"content\")/div[@class=\"xhnewbb\"]/hr[@class=\"notification\"]",
"pageElement":"id(\"content\")/div[@class=\"xhnewbb\"]/*[self::form or self::table]",
"url":"^http://www\\.thinkpad-club\\.net/modules/xhnewbb/view(?:all)?(?:forum|topic)\\.php",
"nextLink":"id(\"content\")//*[(self::div and @class=\"bbsviewctrl\") or (self::td and @class=\"pagenav\")]/b/following-sibling::a[1]"
},
{
"pageElement":"id(\"blog-head blog-body-container trackback comment\")",
"url":"^http://(?:(?:[^.]+\\.)+?webry\\.info|blog\\.tendice\\.jp)/\\d+/article_\\d+\\.html",
"nextLink":"//table[@class=\"navi\"]/tbody/tr/td[1]/a"
},
{
"pageElement":"id(\"ctl00_cphBrowse_ucBrowseItems_dtlItemsImage ctl00_cphBrowse_ucBrowseCategoryLinkList_ucBrowseItems_dtlItemsImage\")/tbody/tr",
"url":"^http://(?:(?:boatingsavings|w(?:ww|orkwearsavings))\\.)?sportsmansguide\\.com/net/",
"nextLink":"id(\"ctl00_cphBrowse_ucBrowseItems_ucBrowsePageLinksTop_lnkPageNext ctl00_cphBrowse_ucBrowseCategoryLinkList_ucBrowseItems_ucBrowsePageLinksTop_lnkPageNext\")[@href]"
},
{
"pageElement":"//td/div[contains(@class,\"listitem\")] | //div[contains(@class,\"contents_list\") or contains(@class,\"gsc-webResult\")] | //div[contains(@class,\"pager\")]/following-sibling::dl | id(\"article\")/* | //div[@class=\"app\"]/div[contains(@class,\"listitem\")]",
"url":"^http://(?:c(?:areer|ode)|enterprise|m(?:arke|oney)|)zine\\.jp/(?:article/|search)",
"nextLink":"//td[@class=\"pg_bar_next\"]/a|//div[@class=\"utility\"]//li[@class=\"next\"]/a|//td[@class=\"active\"]/following-sibling::td[1]/a|//span[@class=\"pg_next\"]/a"
},
{
"pageElement":"//*[@class=\"ResultBoxMar\"]",
"url":"^http://(?:www\\.)?itp\\.ne\\.jp/servlet/jp\\.ne\\.itp\\.sear\\.SGSSVWebDspCtrl\\?",
"nextLink":"//a[preceding-sibling::strong][1]"
},
{
"pageElement":"//h1[@class=\"top\"]/following-sibling::table",
"url":"^http://www\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/coop/subscribedlinks/directory/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pager \")]/a[contains(., \"\u203a\")]"
},
{
"pageElement":"id(\"posts\")/*",
"url":"^http://www\\.tumblr\\.com/(?:dashboard|show|tumblelog|filter|tagged)[^-]*\\?back$",
"nextLink":"id(\"pagination\")/a[contains(text(), \"Previous page\")]"
},
{
"pageElement":"id(\"photonews\")/ul/li",
"url":"^http://(?:[^.]+\\.keizai\\.biz|www\\.(?:hama|shibu)kei\\.com)/photonews/archives/",
"nextLink":"id(\"pageswitch\")/a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"l_anime\")/ancestor::div[1]/following-sibling::*[self::div or self::br]",
"url":"^http://asame\\d+\\.(?:web\\.infoseek\\.co|sakura\\.ne)\\.jp/cgi-bin/bbsnote\\.cgi",
"nextLink":"//a[./b[contains(.,\"BACK\")]]"
},
{
"insertBefore":"https://search.sbisec.co.jp/v2/popwin/tools/yutai/yutai_search_c1.html",
"pageElement":"//td[contains(text(), \"\u9298\u67c4\")]/ancestor::table[2]",
"url":"^https://search\\.sbisec\\.co\\.jp/v2/popwin/tools/yutai/yutai_search_c\\d+\\.html",
"nextLink":"//a[contains(node(), \"\u2192\")]"
},
{
"insertBefore":"id(\"Main\")//div[@class=\"Pages\"]",
"pageElement":"id(\"Main\")//div[@class=\"HoldPhotos\"]",
"url":"^http://www\\.flickr\\.com/(?:groups/[^/]+/pool|photos(?:/friends|of))(?:[/?#]|$)",
"nextLink":"id(\"Main\")//a[@class=\"Next\"]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" day \")]",
"url":"^http://www\\.perfume-web\\.jp/(?:information|fanclub|pta/(?:report|staff|blog))/",
"nextLink":"//a[@rel=\"Next\"]"
},
{
"pageElement":"//div[@class=\"search-data-content\"]",
"url":"^http://(?:search|class)\\.ruten\\.com\\.tw/(?:search|category)/s(?:0|ub)00\\.php",
"nextLink":"//span[@class=\"next\"]/a"
},
{
"pageElement":"id(\"headline\")/div[@class=\"articles\"]",
"url":"^http://(?:[^.]+\\.keizai\\.biz|www\\.(?:hama|shibu)kei\\.com)/headline/archives/",
"nextLink":"id(\"pageswitch\")/a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"//div[@class=\"navheader\"]/following-sibling::div[following-sibling::div[@class=\"navfooter\"]]",
"url":"^http://docs\\.amazonwebservices\\.com/AWSECommerceService/\\d{4}-\\d{2}-\\d{2}/",
"nextLink":"//a[@accesskey=\"n\"]"
},
{
"pageElement":"id(\"list\")",
"url":"^http://service\\.osa-p\\.net/rea-log/member/member/index\\.html\\?member_no=\\d",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//table[@class=\"group result\"]",
"url":"^http://(?:www\\.)?nomu\\.com/pro/index/module/BuildingRef/action/DetailSearch/.",
"nextLink":"//div[@id=\"index01\"]//li[@class=\"last\"]/a"
},
{
"pageElement":"id(\"main\")/*",
"url":"^http://realtimeweb\\.jp/(?:archives/(?:(?:category|date|tag)/.|\\d)|page/\\d|$)",
"nextLink":"id(\"pnavi\")//span[@class=\"current\"]/following-sibling::a[1]|id(\"navi\")/span[@class=\"next\"]/a"
},
{
"insertBefore":"//a[contains(text(),\"\u8a18\u4e8b\u5168\u6587\")]/following-sibling::*|//a[contains(text(),\"\u8a18\u4e8b\u5168\u6587\")]/../following-sibling::*|//a[contains(text(),\"\u8a18\u4e8b\u5168\u6587\")]/../../following-sibling::*",
"pageElement":"id(\"detailHeadline detailNewsOpen ynDetail\")|//div[@class=\"magDetailedArticle\"]",
"url":"^http://(?:(?:daily|zasshi\\.)new|headline)s\\.yahoo\\.co\\.jp/(?:article|fc|hl)",
"nextLink":"//a[contains(text(),\"\u8a18\u4e8b\u5168\u6587\")]"
},
{
"pageElement":"id(\"cardFileList\")|//table[@class=\"tradeTables\"]",
"url":"^http://[ps]\\d+\\.3gokushi\\.jp/(?:card|union)/(?:deck|index|learn|trade)\\.php",
"nextLink":"//ul[@class=\"pager\"]/li[@class=\"last\"]/a[1]"
},
{
"pageElement":"id(\"articleMain\")/div[@class=\"articleContent\"]/*",
"url":"^http://journal\\.mycom\\.co\\.jp/(?:articles|column|kikaku|s(?:eries|pecial))/",
"nextLink":"//li[@class=\"nextBtn\"]/a"
},
{
"pageElement":"id(\"res\")/div[ol or div]|id(\"ofr\")",
"url":"^https?://[^.]+\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/(?:c(?:se|ustom)|search)",
"nextLink":"id(\"nav\")//td[last()]/a | id(\"nn\")/parent::a"
},
{
"pageElement":"//td[@width=\"425\"]/table[2]",
"url":"^https://trading\\d\\.sbisec\\.co\\.jp/ETGate/\\?.*\\b_PageID=WPLETmkR001Ndtl10",
"nextLink":"//a[contains(text(),\"\u2192\")]"
},
{
"pageElement":"//dd[@class=\"body\"]/ol",
"url":"^http://(?:www\\.)?mypress\\.jp/v2_writers/tomihiro/idx/\\?.*\\bmycategory_id=.",
"nextLink":"//b/following-sibling::a"
},
{
"pageElement":"id(\"content\")",
"url":"^http://www\\.enecho\\.meti\\.go\\.jp/topics/hakusho/2009kaisetu/wakarukaisetu/",
"nextLink":"id(\"content\")//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"//table[@class=\"tablebg\"]",
"url":"^http://(?:nwnw(?:01|\\.globat)\\.com|torone\\.net:8080/torone)/search\\.php\\?",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"contestRanking\")/table/tbody/tr",
"url":"^http://contest\\.pets\\.yahoo\\.co\\.jp/hiroba/photocontest/contest/\\d+/list/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"//hr[1]/following-sibling::*[not(self::hr)]",
"url":"^http://www\\.ntticc\\.or\\.jp/Archive/1995/The_Museum_Inside_The_Network/mega/",
"nextLink":"//a[contains(text(), \"\u6b21\u306e\u65e5\u8a18\u3078\")]"
},
{
"pageElement":"id(\"ImageResultColumn\")|id(\"jobs\")|//ol[@class=\"news\"]|id(\"listings\")/ol|//div[@class=\"results\"][not(id(\"ImageResultColumn\") or ./ol[@class=\"news\"])]/div",
"url":"^http://(?:news|search|jobs|yellowpages)\\.lycos\\.(?:[^.]{2,3}\\.)?[^.]{2,3}/",
"nextLink":"//div[@class=\"pagination\"]/span[number()=normalize-space()]/following-sibling::a[1]"
},
{
"pageElement":"//ul[@class=\"messages-stream\" and ./li]",
"url":"^http://www\\.furaffinity\\.net/(?:browse|(?:favorites|gallery|scraps)/[^/]+)/",
"nextLink":"//button[@value=\"Next\"]/parent::form"
},
{
"pageElement":"(//node()[self::p or self::center])[1] | (//node()[self::p or self::center])[1]/following-sibling::node()",
"url":"^http://heppocology\\.fc2web\\.com/(?:neneko|kanokanowake|tonanenebangai|yaji)",
"nextLink":"//a[contains(.,\"NEXT\")]"
},
{
"pageElement":"//div[@class=\"article-image\"]",
"url":"^http://natalie\\.mu/(?:[^/]+/)*?gallery/show/news_id/\\d+[/&]image_id[/=]\\d",
"nextLink":"//a[contains(text(),\"\u6b21\u306e\u753b\u50cf\")]"
},
{
"pageElement":"//ul[@class=\"floatlist memolist\"]",
"url":"^http://(?:flipnote\\.hatena\\.com|ugomemo\\.hatena\\.ne\\.jp)/(?:ch/|movies)",
"nextLink":"id(\"memo-navigation-bottom\")//span[@class=\"pager\"]//span[@class=\"right-arrow-btn\"]/.."
},
{
"pageElement":"id(\"main\")/div/table/tbody/tr[contains(@class, \"tr_bg\")]|id(\"main\")/div/div[contains(@class,\"tr_bg\")]",
"url":"^http://book\\.akahoshitakuya\\.com/(?:u/\\d+/(?:favorite|log_list)|yomitomo)",
"nextLink":"id(\"main\")/div/center/a[contains(text(), \"\u2192next\")]|id(\"main\")/div/div[@class=\"page_navis\"]/span[@class=\"now_page\"]/following-sibling::span/a"
},
{
"pageElement":"id(\"content_top2\")/div[@class=\"item_list_box\"]",
"url":"^https://www\\.iy-net\\.jp/nsmarket/(get[a-z]*products|searchresult)\\.do\\?",
"nextLink":"//span[@class=\"span_next\"]/parent::a"
},
{
"pageElement":"id(\"threadlist postlist\")",
"url":"^http://(?:www\\.)?hongfire\\.com/forum/(?:forumdisplay|showthread)\\.php\\?",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//table[descendant::hr][position() > 1]",
"url":"^http://(?:www\\.)?itp\\.ne\\.jp/servlet/jp\\.ne\\.itp\\.sear\\.SKWSVmain\\?",
"nextLink":"//a[text() = \"\u6b21\u3000\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"id(\"resultArea\")",
"url":"^http://web\\.travel\\.rakuten\\.co\\.jp/portal/my/tabimado_search\\.main\\?",
"nextLink":"//a[starts-with(text(), \"\u6b21\")]"
},
{
"pageElement":"//div[@class=\"body1\"]",
"url":"^http://(?:www\\.)?mypress\\.jp/v2_writers/tomihiro/story/\\?.*\\bstory_id=.",
"nextLink":"id(\"NAVIGATION-ITEM-PREV\")/a"
},
{
"pageElement":"//table[@class=\"tableBorder\"][2]",
"url":"^http://www\\.taipeimarathon\\.org\\.tw/forum/forum_(?:post|topic)s\\.asp\\?",
"nextLink":"//a[@class=\"pageLink\" and @title=\"\u4e0b\u500b\u6708 \u9801\u9762\"]"
},
{
"pageElement":"id(\"pixiv\") | id(\"manga_top\")/parent::div",
"url":"^http://www\\.pixiv\\.net/member_illust\\.php\\?(?:[^?#&]*&)*?illust_id=\\d",
"nextLink":"id(\"content2\")//a[contains(@href, \"member_illust.php?mode=manga\")]"
},
{
"pageElement":"//table[@class=\"video_list\"]",
"url":"^http://(?:de|es|tw)\\.nicovideo\\.jp/(?:newarrival|recent|(?:search|tag)/)",
"nextLink":"//a[@class=\"nextpage\"]"
},
{
"pageElement":"id(\"content2\")/div[contains(@class,\"link_visited\")]",
"url":"^http://www\\.pixiv\\.net/bookmark_illust_user\\.php\\?.*?\\billust_id=\\d",
"nextLink":"id(\"content2\")/div/a[contains(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"//td[contains(@class,\"overflow-hide\")]/*",
"url":"^https?://groups\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/group/[^/]+/search",
"nextLink":"id(\"bottom_marker\")/descendant::a[last()]"
},
{
"pageElement":"//div[@class=\"l600\"]/comment()[string()=\"BODY\"]/following-sibling::node()[not(descendant::a[text()=\"\u524d\u306e\u30da\u30fc\u30b8\"]) and not(descendant::a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]) and following::comment()[string()=\"BODYEND\"]] | id(\"r400\")/node()[preceding::*[@class=\"cmsabstract\"] and following::*[descendant::*[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\") or contains(text(), \"\u524d\u306e\u30da\u30fc\u30b8\")]]] | id(\"rap-in\")//div[@class=\"articlebody-in\"]/*[not(@class=\"toolbar\") and not(@class=\"box\") and following::*[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\") or contains(text(), \"\u524d\u306e\u30da\u30fc\u30b8\")]]",
"url":"^http://(?:www|plusd)\\.itmedia\\.co\\.jp/[^/]+/articles/0(?:[0-5]|60[12])",
"nextLink":"//a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"insertBefore":"//div[@class=\"maincontbox\"]",
"pageElement":"//div[@class=\"maincontoutboxatt\"]",
"url":"^https?://groups\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/group/[^/]+/topics",
"nextLink":"(//div[@class=\"maincontbox\"]//a[@class=\"uitl\"])[last()]"
},
{
"pageElement":"//div[@class=\"results\"]",
"url":"^http://m\\.facebook\\.com/(?!(?:eventhome|grouphome|notes|stories)\\.php)",
"nextLink":"//div[@class=\"pager\"]/a[last()]"
},
{
"pageElement":"//div[@class=\"listview\"]",
"url":"^http://(?:www\\.)?argos\\.(?:co\\.uk|ie)/webapp/wcs/stores/servlet/Search",
"nextLink":"//div[@class=\"paginglinks\"]/a[(text()=\"Next >\")]"
},
{
"pageElement":"id(\"mainContentsArea\")/*[(self::div and @class=\"entry\") or (self::a and @name)]",
"url":"^http://blogs\\.yahoo\\.co\\.jp/[^/]+/(?:MYBLOG/yblog|folder/[^.]+)\\.html",
"nextLink":"//p[@class=\"sequentialNavi\"]/b/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"clip-global\"]",
"url":"^http://clip\\.livedoor\\.com/(?:(?:adult/)?hot|recent|s(?:earch|ite)|tag)",
"nextLink":"//a[@rel=\"next\"]|//a[contains(concat(\" \", @class, \" \"),\" pager-yesterday \")]"
},
{
"pageElement":"id(\"main\")//div[@class=\"res\" or @class=\"goiken_res\"]",
"url":"^https?://cgi2\\.nhk\\.or\\.jp/ss-real/(?:goiken|memberbbs)/form2\\.cgi\\?",
"nextLink":"id(\"main\")//span[@class=\"now\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"Main\")//table[@class=\"GroupsResults\" or @class=\"PeopleResults\"]/tbody/tr | id(\"ResultsThumbsDiv\") | id(\"Main\")//div[@class=\"DetailResults\"]/div[@class=\"box\"]",
"url":"^http://www\\.flickr\\.com/search(?:/(?:groups|people))?/?\\?(?:[^&]+&)*q=",
"nextLink":"//a[@class=\"Next\"]"
},
{
"pageElement":"id(\"news-content\")/div[contains(concat(\" \", @class, \" \"), \" KonaBody \")]/*|id(\"main\")/ul[contains(concat(\" \", @class, \" \"), \" results \")]|id(\"internalMain\")//div[@class=\"basicCentral-elm\" and ./h2]",
"url":"^http://www\\.tomshardware\\.com/(?:(?:articl|news|reviews)/|search\\.php)",
"nextLink":"id(\"main\")//li[contains(concat(\" \", @class, \" \"), \" next \")]/a"
},
{
"pageElement":"(id(\"pmt user_list\")|//table[@class=\"thread\"])/tbody/tr[./td]",
"url":"^http://(?:(?:www|gold)\\.)?darkthrone\\.com/(?:forum/|userlist/attack\\?)",
"nextLink":"//a[@class=\"nav\" and .=\"Next\"]|//span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"//table[2]//tr/td[2]/node()[./following-sibling::table]",
"url":"^http://(?:nin-r\\.com|www\\.ne\\.jp/asahi/shin/ya/uneisha)/n(?:etbaka|v)/",
"nextLink":"//a[contains(.,\"\u6b21\u3078\u9032\u3080\")]"
},
{
"pageElement":"//td[@background=\"images/index_ura_r5_c4.gif\"]/ancestor::tr[2]/following-sibling::tr",
"url":"^http://www\\.nhk\\.or\\.jp/nikki/ura/index(?:_re)?_main(?:_\\d+)?\\.html",
"nextLink":"//img[@name=\"index_ura_r5_c9\"]/.."
},
{
"pageElement":"id(\"EntryBlock\")//div[@class=\"EntryInnerBlock\"] | id(\"content\")//div[@class=\"entry_body\"] | id(\"entry\")//div[@class=\"pad\"] | id(\"entryarea\")/node()[@class!=\"page_navi\"] | id(\"e-zone\")/node()[@class!=\"PageLinkBlock\"] | id(\"Contents\")/div[@id=\"Left\"] | id(\"main\")/*[@class=\"entry_table\" or @align=\"center\"] | id(\"contents\")/div[@class=\"entry\"]",
"url":"^http://[^.]+\\.blog\\.shinobi\\.jp/(?:Category|Date|Entry|Page|Search|$)",
"nextLink":"//*[contains(\" PageLinkBlock EntryInnerBlock navi page_navi entry_navi contents_10link \", concat(\" \", @class, \" \")) or contains(\" PageLinkBlock EntryBlock prev_next NaviBlock \", concat(\" \", @id, \" \"))]//a[contains(text(), \"\u6b21\") or contains(translate(text(), \"etx\", \"ETX\"), \"NEXT\") or contains(text(), \">>\") or contains(text(), \"\u904e\u53bb\")]"
},
{
"pageElement":"//table/tbody/tr[td[b/font or img]]",
"url":"^http://www5c\\.biglobe\\.ne\\.jp/~kurekure/isidaasakura/[iy]?\\d+\\.html",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"ImgCont\")/table | id(\"ImgContent\")",
"url":"^http://images\\.google(?:\\.[^./]{2,3}){1,2}/images\\?(?:[^?#]*&)?gbv=1",
"nextLink":"id(\"nn\")/parent::a | id(\"navbar navcnt\")//td[last()]/a"
},
{
"insertBefore":"id(\"vsPagination\")",
"pageElement":"id(\"setThumbs\")",
"url":"^http://www\\.flickr\\.com/photos/[^/]+/sets/(?![^/]+/detail(?:[/?#]|$))",
"nextLink":"//a[@class=\"Next\"]"
},
{
"pageElement":"id(\"page\")/*",
"url":"^http://www.goodsmile.info/page/[^/]+/product/all/[^/]+/all/all/all/all/",
"nextLink":"id(\"pagination\")//a[contains(., \"\u6b21\u3078\")]"
},
{
"pageElement":"id(\"diary_comment\")",
"url":"^http://www\\.otakuma\\.net/index\\.php/diary/(?:member|newdiary|search)",
"nextLink":"id(\"diary_pageing\")/table/tbody/tr/td[last()]/span/b/following-sibling::a[1]"
},
{
"pageElement":"id(\"content designers people_panel search_results\")/div[@class=\"page_links\"][1]/following-sibling::div[./following-sibling::div[@class=\"page_links\"]]|//div[@class=\"activity\" or @class=\"topic_glance\" or @class=\"post\"]|id(\"forum_posts\")/tbody/tr[./td[@class=\"who\"]]|id(\"designer_patterns\")/tbody/tr",
"url":"^http://www\\.ravelry\\.com/(?:d(?:esigner|iscus)|pattern|project|yarn)s",
"nextLink":"//div[@class=\"pagination\"]/text()[number()=normalize-space()]/following-sibling::a[1]"
},
{
"pageElement":"id(\"ytrvTmWrSearchBody\")/div[@class=\"ytrvTmMdSearchTdList\" or @class=\"ytrvTmMdSearchRepList\" or @class=\"ytrvTmMdLine\"]",
"url":"^http://community\\.travel\\.yahoo\\.co\\.jp/search/search_result\\.html",
"nextLink":"//li[contains(concat(\" \",@class,\" \"), \" next \")]/a"
},
{
"insertBefore":"//address",
"pageElement":"id(\"entries\")",
"url":"^http://community\\.livejournal\\.com/vintagephoto/\\d{4}/\\d{2}/\\d{2}/",
"nextLink":"id(\"skiplinks\")/li[last()]/a"
},
{
"pageElement":"//table[@class=\"tablebg\"]",
"url":"^http://(?:torrentjp\\.com/gdfjp/|gdf\\.torrentjp\\.com/)search\\.php\\?",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"center\")/../*",
"url":"^http://bookweb\\.kinokuniya\\.jp/bookfair/worldliteraturecup\\d*\\.html",
"nextLink":"id(\"container\")/table/tbody/tr[@class=\"kikakusya\"]/td/div[@align=\"right\"]/b/a[.=\"\u2192\u6b21\u3078\"]"
},
{
"pageElement":"id(\"results\")/ul[@class=\"sb_results\"]",
"url":"^http://(?:www|cnweb)\\.bing\\.com/(?:[^/]+/)*?(?:results\\.aspx|search)",
"nextLink":"id(\"results_area\")//a[contains(concat(\" \",@class,\" \"),\" sb_pagN \")]"
},
{
"pageElement":"id(\"frmMain\")/div[@style]",
"url":"^http://kindai\\.(?:da\\.)?ndl\\.go\\.jp/scrpt/ndlimageviewer-rgc\\.aspx",
"nextLink":"id(\"lnkNextPage\")"
},
{
"pageElement":"id(\"ContentsBody\")",
"url":"^http://trend\\.netadguide\\.yahoo\\.co\\.jp/guide/(?:adcolumn|feature)/",
"nextLink":"//a[starts-with(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"bodyCell\")//div[contains(concat(\" \",@class,\" \"),\" bPageBlock \")]//table[1]",
"url":"^https?://(?:ap|emea|na[1-6]|ssl)\\.salesforce\\.com/[0-9a-zA-Z]{3}[/?]",
"nextLink":"id(\"bodyCell\")/div[contains(concat(\" \",@class,\" \"),\" bNext \")]//div[contains(concat(\" \",@class,\" \"),\" next \")]/a[last()]"
},
{
"pageElement":"id(\"mainpic\")|//div[@class=\"mainPhotoInfo\"]",
"url":"^http://[^.]+\\.oricon\\.co\\.jp/news/photo/index\\.php\\?(?:.+&)?p_id=",
"nextLink":"//img[@name=\"button_nextPct_bottom\"]/.."
},
{
"pageElement":"id(\"jive-content-results\")/*",
"url":"^http://blogs\\.secondlife\\.com/community/\\w+\\?(?:[^?#]*&)?view=blog",
"nextLink":"//a[@class=\"jive-pagination-next\"]"
},
{
"pageElement":"//div[@class=\"pagination-center\"]/following-sibling::node()[1]/preceding-sibling::*",
"url":"^http://(?:www|entertainment|women|technology)\\.timesonline\\.co\\.uk/",
"nextLink":"//a[contains(concat(\" \", @class, \" \"), \" next \")]"
},
{
"pageElement":"id(\"col1\")/div[starts-with(@id, \"post-\")]",
"url":"^http://([^.]+\\.)?(?:crunchgear|mobilecrunch|techcrunch(?:it)?)\\.com/",
"nextLink":"id(\"col1\")/div[@class=\"navigation\"]/div[contains(concat(\" \", @class, \" \"), \" alignright \")]/a"
},
{
"insertBefore":"id(\"AdArea\")",
"pageElement":"id(\"ListArea\")",
"url":"^http://(?:ip\\.)?tosp\\.co\\.jp/[bB][kK]/[tT][oO][sS][bB][kK]100\\.asp",
"nextLink":"id(\"NaviArea\")/a"
},
{
"pageElement":"//table[contains(concat(\" \",@class,\" \"),\" newslist \")]/tbody/tr",
"url":"^http://www\\.fezero\\.jp/notice_(?:event|mente|news|update)list\\.aspx",
"nextLink":"id(\"ctl00_ctl00__MainContent__MainContent__NextPage\")[descendant::img[@src=\"/images/com/button_next.gif\"]]"
},
{
"pageElement":"id(\"blocks\")",
"url":"^http://widgets\\.opera\\.com/(?:[^/]+/)?(?:new|search|popular|rated)/",
"nextLink":"//div[@class=\"pagedListing\"]/ol/li[last()]/a"
},
{
"insertBefore":"id(\"googlead\")",
"pageElement":"id(\"shikakusanlist\")",
"url":"^http://(?:www\\.)?gumonji\\.net/cgi-bin/(?:footprint|user_list)\\.cgi",
"nextLink":"//div[@class=\"frame\"]/div[@class=\"main\"]/div[@class=\"page2\"]/div[@class=\"pager_next\"]/a"
},
{
"pageElement":"id(\"bookmarked_user\")",
"url":"^ttp://b\\.hatena\\.ne\\.jp/(?!entry/)[a-zA-Z][-\\w]{1,30}[a-zA-Z\\d]/",
"nextLink":"//a[@class=\"pager-next\" or @class=\"pager-prev\"]"
},
{
"pageElement":"//div[@class=\"user\"]",
"url":"^http://asahi\\.co\\.jp/php/precure_heartcatch/bbs/view\\.php(?:\\?|$)",
"nextLink":"//div[@class=\"next\"]/a"
},
{
"pageElement":"id(\"container\")//div[@class=\"node\"] | id(\"container\")//dl[@class=\"search-results\"]",
"url":"^http://plugins\\.jquery\\.com/(?:latest_releases|most_popular|search)",
"nextLink":"id(\"container\")//div[@class=\"pager\"]/a[contains(., \"next\")]"
},
{
"pageElement":"//div[@class=\"summary\" and not(@id=\"search\")]/following-sibling::div[not(./a[@accesskey=\"6\"])]",
"url":"^http://m\\.facebook\\.com/(?:eventhome|grouphome|notes|stories)\\.php",
"nextLink":"//a[@accesskey=\"6\"]/parent::div/preceding-sibling::div[@class=\"pager\"][1]/node()[local-name()=\"a\" and position()=last()-1 and normalize-space(./following-sibling::text())=\"\u00a0\"]"
},
{
"pageElement":"//td[@width=\"520\"]/table[@width=\"520\"]",
"url":"http://www\\.hayakawa-online\\.co\\.jp/product/item_search_list\\.php",
"nextLink":"//table[@class=\"bodyS\"]/tbody/tr/td[@class=\"titleS\"]/a[contains(text(),\"\u6b21\")]"
},
{
"pageElement":"//div[contains(concat(\" \",@class,\" \"),\" elementListBrown \" )] | //table[contains(concat(\" \",@class,\" \"),\" tableList \")]",
"url":"^http://www\\.goodreads\\.com/(?:book/show|search/search|review/list)",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//div[./div/div/a/img[contains(@src,\"i.americanapparel.net\")]]",
"url":"^http://i\\.americanapparel\\.net/storefront/UGCStyle/BestBottom2010/",
"nextLink":"//div/a[./img[contains(@src,\"Next.png\")]]"
},
{
"pageElement":"id(\"log\")",
"url":"^http://(?:www\\.)?zftalk\\.com/logs/view/[^/]+/\\d{4}/\\d{2}/\\d{2}/",
"nextLink":"id(\"paginationControl\")//a[contains(text(), \"Next\")]"
},
{
"pageElement":"id(\"primaryContent\")/div[@class=\"pageNavigation\"]/preceding-sibling::*",
"url":"^http://secondlife\\.reuters\\.com/stories/category/second-life/blog/",
"nextLink":"id(\"primaryContent\")/div[@class=\"pageNavigation\"]/a[contains(., \">\")]"
},
{
"pageElement":"id(\"res\")",
"url":"^https?://[^.]+\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/[^#]*(?:#|fp=)",
"nextLink":"id(\"nav\")//td[last()]/a | id(\"nn\")/parent::a"
},
{
"pageElement":"id(\"postlist\")",
"url":"^http://favlook\\.osa-p\\.net/(?:best|favorites|hot|index|new)\\.html",
"nextLink":"id(\"next\")"
},
{
"pageElement":"id(\"main\")/child::*[self::h2 or self::div[@id=\"year\" or @class=\"topentry-body\" or @class=\"footer\"]]",
"url":"^http://shopdd\\.blog51\\.fc2\\.com/(?:$|page|blog-category|category)",
"nextLink":"//div[@class=\"pageselect\"]/descendant::a[@title=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"//div[@class=\"pts-mb30\"]",
"url":"^http://(?:www\\.)?4travel\\.jp/(?:domestic|overseas)/.+?/travelogue/",
"nextLink":"//div[@class=\"common-page-list-right\"]/a"
},
{
"pageElement":"id(\"JL_D\")/tbody/tr[@class=\"jl_odd_row\" or @class=\"jl_even_row\"]",
"url":"^http://www\\.careerbuilder\\.com/JobSeeker/Jobs/JobResults\\.aspx\\?",
"nextLink":"id(\"JL_MXDLPagination1\")/a[contains(., \"Next\")]"
},
{
"pageElement":"//table[2]",
"url":"^http://www\\.taipeimarathon\\.org\\.tw/.+/(?:Image|Thum)\\d*\\.html$",
"nextLink":"//img[@src=\"navigator_s.gif\"]/following-sibling::map/area[@coords=\"58,0,82,21\"] | //a[contains(text(),\"\u4e0b\u4e00\u500b\")] | //img[@src=\"navigator_t.gif\"]/following-sibling::map/area[@coords=\"87,0,111,21\"]"
},
{
"pageElement":"//div[@class=\"list\"]",
"url":"^http://[^.]+\\.amazon\\.co(?:m|\\.[^./]+)/gp/(?:best|move|most|new)",
"nextLink":"//td[@class=\"paginationCurPage\"]/following-sibling::td[2]/a"
},
{
"pageElement":"id(\"main-content\")/*[(self::table and not(@id)) or self::div and @class=\"internal\"]",
"url":"^http://(?:[^.]+\\.)?sourceforge\\.jp/(?:s(?:earch|oftwaremap)|top)/",
"nextLink":"id(\"main-content\")//div[@class=\"paging_nav_bar_next\"]/a|id(\"main-content\")/a[contains(., \">\")]"
},
{
"pageElement":"id(\"container\")/*",
"url":"^http://www\\.aoky\\.net/articles/why_poignant_guide_to_ruby/chapter",
"nextLink":"id(\"banner\")//a[.=\"\u6b21\u3078\"][@href!=\"index.html\"]"
},
{
"pageElement":"id(\"blogManagement\")|id(\"wlppScope\")/*",
"url":"^http://[^.]+\\.spaces\\.live\\.com/(?:Blog/|\\?(?:.*&)*_c=BlogPart)",
"nextLink":"id(\"actionToolbarNext\")|id(\"ctl00_MainContentPlaceholder_ctl01_Toolbar_Internal_RightToolbarList\")/li[@class=\"sppLast\"]/a[contains(., \"<\")]"
},
{
"pageElement":"id(\"productsTable\")/tbody/tr|//div[@class=\"adsContainer\"]",
"url":"^http://www\\.ikea\\.com/(?:[a-z]{2}/){2}catalog/(?:categorie|new)s/",
"nextLink":"//a[@class=\"active\"]/following-sibling::a[position()=1 and not(contains(@href, \"?pageNumber=0\"))]"
},
{
"pageElement":"//div[@class=\"jive-thread-list\"]",
"url":"^http://(?:forums|otn)\\.oracle\\.co(?:m|\\.jp)/forums?/forum\\.jspa",
"nextLink":"//a[text()=\"Next\" or text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"history_table\")",
"url":"^https://point\\.rakuten\\.co\\.jp/PointHistory/PointHistoryDisplay/",
"nextLink":"//a[contains(@href,\"/PointHistoryDisplay/?page=\")][starts-with(.,\"\u6b21\u306e\")]"
},
{
"pageElement":"//div[@class=\"video_thumbnails\" or @class=\"screenshot_thumbnails\" or @class=\"stream_thumbnails\"]/*|//tr[contains(concat(\" \", @class, \" \"), \" altrows_row1 \") or contains(concat(\" \", @class, \" \"), \" altrows_row2 \")]",
"url":"^http://www\\.xfire\\.com/(?:downloads|live_video|screenshot|video)/",
"nextLink":"//span[@class=\"pagination_current_page\"]/following-sibling::a[1]|//td[@class=\"file_sort_footer_right\"]/a"
},
{
"insertBefore":"//div[@class=\"Pages\"]",
"pageElement":"id(\"Main\")/table[last()]",
"url":"^http://www\\.flickr\\.com/photos/[^/]+/sets/[^/]+/detail(?:[/?#]|$)",
"nextLink":"//a[@class=\"Next\"]"
},
{
"insertBefore":"id(\"navbar\")",
"pageElement":"id(\"m\")/div[2]",
"url":"^http://blogsearch\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/blogsearch",
"nextLink":"id(\"navbar\")//a[child::img[@src=\"nav_next.gif\"]]"
},
{
"pageElement":"descendant::table[.//td//small[contains(text(),\"\u56de\u7b54\u5185\u5bb9\")]][last()]",
"url":"^http://my\\.chiebukuro\\.yahoo\\.co\\.jp/my/myspace_ansdetail\\.php",
"nextLink":"//a[contains(text(),\"\u6b21\u3078\")]"
},
{
"pageElement":"id(\"table1\")",
"url":"^http://www\\.enecho\\.meti\\.go\\.jp/topics/hakusho/2009energyhtml/",
"nextLink":"(//table)[last()]//a[descendant::*[text()=\"\u6b21\u306e\u9805\u76ee\u306b\u9032\u3080\"]]"
},
{
"pageElement":"id(\"incontents\")/*",
"url":"^http://(?:green\\.)?search\\.goo\\.ne\\.jp/(?:search|web\\.jsp)\\?",
"nextLink":"//div[@class=\"paging\"]/span[@class=\"cur\"]/following-sibling::span[1]/a"
},
{
"pageElement":"id(\"items\")/div[@class=\"item\"]",
"url":"^https?://www\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/reader/shared/",
"nextLink":"id(\"more\")/a"
},
{
"pageElement":"id(\"artwork\")/*",
"url":"^http://4koma\\.livedoor\\.com/manga(?:life|time)/[^/]+/[^/]+/\\d+/",
"nextLink":"id(\"artwork\")/div/a[img[contains(@title,@alt)]]|id(\"artwork\")/div/ul/li[@class=\"next\"]/a"
},
{
"pageElement":"//div[@class=\"cLeft\"]//div[@class=\"oneBox\" or @class=\"commentBox\"]",
"url":"^http://www\\.csselite\\.com/category/(?:resources|showcase)(?:$|/)",
"nextLink":"//div[@class=\"wp-pagenavi\"]/span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"id('area-left')/div[contains(@class,'rsv-list-hotel')]",
"url":"^http://reserve\\.4travel\\.jp/domestic/hotel/result(?:\\.php\\?|/)",
"nextLink":"id('area-left')/div[contains(@class, 'dm-result-page')][1]/a[last()]"
},
{
"pageElement":"//body/div[@class=\"b\"]|//body/table[@class=\"e\"]",
"url":"^https?://www\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/reader/m/view/",
"nextLink":"//a[@accesskey=\"0\"]"
},
{
"pageElement":"//table[@id=\"bangumi_onair\" or @id=\"bangumi\"]",
"url":"^http://mataanimemitetari\\.shimasu\\.net/(?:index\\.php)?(?:$|\\?)",
"nextLink":"//a[contains(text(),\"\u2192\")]"
},
{
"pageElement":"id(\"user_list\")",
"url":"^http://www\\.otakuma\\.net/index\\.php/community/userlist/details/",
"nextLink":"id(\"box2\")/div[@class=\"pager\"][last()]/b/following-sibling::a[1]"
},
{
"pageElement":"id(\"main\")/form/table[@class=\"listing\"]",
"url":"^http://(?:www\\.)?(:?tokyotosho\\.(?:info|se)|tokyo-tosho\\.net)/",
"nextLink":"id(\"main\")/form/table//tr/td[@class=\"nav\"]/a[contains(text(),\"Next\")]"
},
{
"pageElement":"id(\"textsizer\")/following-sibling::*",
"url":"^http://www\\.iwakamiyasumi\\.com/column/politics/item_\\d+\\.html",
"nextLink":"id(\"flip1\")/li[@class=\"newer\"]/a"
},
{
"pageElement":"id(\"adlist\")//tr[@id and td[contains(@class, \"search_ad\")]]",
"url":"^http://kopen\\.marktplaats\\.nl/(?:search\\.php.|.+/c\\d+\\.html)",
"nextLink":"//a[@class=\"paginatorActive\" and last()]"
},
{
"pageElement":"id(\"contentsContainer\")/form/div[contains(@class,\"itemListArea\")]",
"url":"^http://www\\.kakuyasu\\.co\\.jp/ec/disp/CSfDispListPage_001\\.jsp",
"nextLink":"id(\"contentsContainer\")/div[@class=\"pagerArea\"]//a[@class=\"next\"]"
},
{
"pageElement":"//table[@summary=\"upinfo\"]",
"url":"^http://imas(?:\\.ath\\.cx|upd\\.ddo\\.jp)/~imas/cgi-bin/.+\\.html",
"nextLink":"//a[contains(text(), \"[HOME]\")]/following-sibling::text()[not(a) and normalize-space(self::text())]/following-sibling::a"
},
{
"pageElement":"//div[@class=\"g\"]",
"url":"^http://[^.]+\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/c(?:ustom|se)",
"nextLink":"//td[@class=\"b\"][last()]//a"
},
{
"pageElement":"(id(\"forum primaryInner tracker\")|id(\"primary\")[not(id(\"forum primaryInner tracker\"))])/*",
"url":"^http://(?:(?:a|www\\.bran)dsoftheworld\\.com|creativebits\\.org)/",
"nextLink":"id(\"forum primary primaryInner tracker\")/div[@class=\"item-list-pager\" or @class=\"item-list\"]/ul/li[@class=\"pager-next\"]/a"
},
{
"pageElement":"//div[contains(@class, \"under_line3\")]",
"url":"^http://www\\.kagoshima-u\\.ac\\.jp/html/(?:Infomation|Topics)List",
"nextLink":"//div[@class=\"tugi\"]/a"
},
{
"pageElement":"//ul[contains(concat(\" \", @class, \" \"), \" newsList \")]",
"url":"^http://(?:www\\.)?mantan-web\\.jp/[^/]+/archive(?:\\\\d+)?\\.html",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"(id(\"contentsHead\")/*[not(self::h2 or self::address)] | id(\"article\")/*) | id(\"contents_body\") | //img[contains(@src, \"title.jpg\")]/../../following-sibling::tr[following::img[contains(@src, \"try_next.gif\") or contains(@src, \"try_back.gif\")]]",
"url":"^http://www\\.dosv\\.jp/(?:feature|sp_page|wdc|other|intel)/[^/]+/",
"nextLink":"id(\"next\")/a | //img[contains(@src, \"try_next.gif\")]/../preceding-sibling::td/a[last()] | //a[text()=\"Next\"]"
},
{
"pageElement":"//div[@id=\"expandarticle\" or @class=\"story\"]/p[@class=\"wordlink\"]",
"url":"^http://www\\.nationalgeographic\\.co\\.jp/news/news_article\\.php",
"nextLink":"//div[@id=\"expandarticle\" or @class=\"story\"]//a[contains(text(), \"\u8a18\u4e8b\u5168\u6587\")]"
},
{
"pageElement":"//p[.//td[@bgcolor=\"#f5f5f5\"]]",
"url":"^http://tanasinn\\.web\\.infoseek\\.co\\.jp/cgi-bin/tanasinn\\.cgi",
"nextLink":"//td[./input[contains(@value, \"NEXT5\")]]//b/following-sibling::a[1]"
},
{
"pageElement":"id(\"main\")[not(./div[@id=\"sub_contents\"])]//div[@class=\"entry\"] | id(\"main\")[./div[@id=\"sub_contents\"]]//div[@class=\"entry\"]/node()",
"url":"^http://(?:www\\.)?(?:gizmodo|kotaku|lifehacker|myspiritual)\\.jp/",
"nextLink":"id(\"main\")//ul[@class=\"page_navi\"]/li[@class=\"next\"]/a"
},
{
"pageElement":"//table[@summary=\"\u8a18\u4e8b\u4e00\u89a7\"]/tbody/tr",
"url":"^http://(?:aurasoul\\.)?mb2\\.jp/_[^/]+/p[0-9]+(?:-[0-9]+)?\\.html",
"nextLink":"//td[@class=\"page_past\"]/a[text()=position()+1]"
},
{
"pageElement":"id(\"postlist\")/node()",
"url":"^http://(?:www\\.)?militaryphotos\\.net/forums/showthread\\.php\\?",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"form_bookmark form_content_list form_message_delete\")/div[not(contains(concat(\" \", @class, \" \"), \" page_navi \"))]",
"url":"^http://(?:www\\.)?piapro\\.jp/(?:bookmark|content_list|message)/",
"nextLink":"id(\"form_bookmark form_content_list form_message_delete\")/div[contains(concat(\" \", @class, \" \"), \" page_navi \")]/ul/li[last()]/a"
},
{
"pageElement":"id(\"content-main\")//div[@class=\"content\"]/node()",
"url":"^http://www\\.businessweekly\\.com\\.tw/webarticle2?\\.php\\?id=.",
"nextLink":"id(\"content-main\")//li[@class=\"current\"]/following-sibling::li[1]/a"
},
{
"pageElement":"//div[@class=\"forabg\"]",
"url":"^http://bbs\\.operachina\\.com/search\\.php\\?(?!.*\\bkeywords=).",
"nextLink":"//p[@class=\"rightside pagination\"]/a[last()]"
},
{
"pageElement":"//table[@class=\"BgColor06\" and @summary=\"layout\"]",
"url":"^https://www\\.mydocomo\\.com/dcm/dfw/i_mode/myd/storage/addrlist",
"nextLink":"//a[@class=\"color-0035c9u\" and contains(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"results\")/table | //table[@class=\"dsp-downloads\"]//tr[child::td]",
"url":"^http://www\\.microsoft\\.com/downloads/(?:[^/]+/)?results\\.aspx",
"nextLink":"//p[@id=\"position\" and last()]/nobr/span/a[last()] | id(\"ctl00_ctl15_ResultPager1_NextAnchor\")"
},
{
"pageElement":"//div[@class=\"photo_sbox\"]",
"url":"^http://www\\.otakuma\\.net/index\\.php/album/(?:member/|search.)",
"nextLink":"id(\"diary_pageing\")/table/tbody/tr/td[last()]//b/following-sibling::a[1]"
},
{
"pageElement":"//table[@bgcolor=\"#ffffff\"][.//b[text()=\"\u8a55\u4fa1\uff1a\"]]",
"url":"^http://rating\\d*\\.auctions\\.yahoo\\.co\\.jp/jp/show/rating\\?",
"nextLink":"//small/b/a[text()=\"\u6b21\u306e25\u4ef6\"]"
},
{
"pageElement":"id(\"right_area\")/hr[last()-3]/preceding-sibling::*",
"url":"^http://(?:s\\d\\.)?bannch\\.jp/bc/Search210\\?.*sel2=[35](?:&|$)",
"nextLink":"id(\"right_area\")/a[.=\"\u6b21\u306e3\u4ef6\"][last()]"
},
{
"pageElement":"//div[@class=\"booklist\"]",
"url":"^http://www\\.books-sanseido\\.co\\.jp/reserve/bookSearch\\.do\\?",
"nextLink":"//a[@class=\"page-link\"][text()=\"\u6b21\u30da\u30fc\u30b8\u3078\"]"
},
{
"pageElement":"id(\"main gadget_list skin_list\") | //div[@class=\"main_content has_right_sidebar\"]",
"url":"^https?://www\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/ig/directory",
"nextLink":"//p[@class=\"pagelinks\"]//a[last()]"
},
{
"insertBefore":"id(\"Footer\")",
"pageElement":"id(\"Center\")",
"url":"^http://sns\\.my-freedom\\.org/\\?m=pc&a=page_h_diary_list_friend",
"nextLink":"//div[@class=\"parts\"]/div[@class=\"pagerRelative\" and position()=2]/p[@class=\"next\" and last()]/a"
},
{
"pageElement":"id(\"issuetable\")/tbody/tr[starts-with(@id, \"issuerow\")]",
"url":"^https?://(?:[^/]+/)+secure/(?:IssueNavigator|QuickSearch)\\.jspa",
"nextLink":"//a[text()=\"Next >>\"]"
},
{
"insertBefore":"id(\"lastpost\") | id(\"threadslist\")/following-sibling::node()",
"pageElement":"id(\"posts\")/div/div/parent::node() | id(\"threadslist\")",
"url":"^http://forums\\.civfanatics\\.com/(?:forumdisplay|showthread)\\.",
"nextLink":"//a[text()=\">\"]"
},
{
"insertBefore":"id(\"commentForm\")",
"pageElement":"id(\"Center\")",
"url":"^http://sns\\.my-freedom\\.org/\\?.*?target_c_commu_topic_id=\\d+",
"nextLink":"//div[@class=\"parts\"]/div[@class=\"pagerRelative\" and position()=3]/p[@class=\"next\"]/a"
},
{
"pageElement":"id(\"Contents ContentsBlog\")[1]/*",
"url":"^http://(?:www\\.)?pipa\\.jp/tegaki/V(?:BlogList|New|Rank|Search)",
"nextLink":"//*[(self::td or self::div) and @class=\"PageBar\"][1]/a[last()-1]"
},
{
"insertBefore":"id(\"discussion_buttons\")",
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" journal \")] | id(\"commentwrap commentlisting\")",
"url":"^http://slashdot\\.jp/(?:(?:~[^/]+|authors)/journal|journal\\.pl)",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" journalpage \")]//a[contains(text(), \"\u4ee5\u524d\u306e\")] | //div[contains(concat(\" \", @class, \" \"), \" storylinks \")]//a[not(starts-with(text(),substring(@title,0,10))) or contains(text(), \"\u5f8c\u306e\")]"
},
{
"pageElement":"id(\"main\")//div[@class=\"article\"]/table[@class=\"menulist\" or @class=\"oekaki-list\"]",
"url":"^http://dic\\.nicovideo\\.jp/(?:m/[nu]|s)/(?:[aciuv]|oekaki|mml)/",
"nextLink":"id(\"main\")//div[@class=\"article\"]/div[@class=\"pager\"]/*[last()][self::a and @class=\"navi\"]"
},
{
"pageElement":"id(\"yschqlist\")/ol/li",
"url":"^http://search\\.chiebukuro\\.yahoo\\.co\\.jp/search/search\\.php",
"nextLink":"id(\"yschpg\")/p[2]/big/b/a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"main\")/div[4]",
"url":"^https://www\\.welbox\\.com/WelboxSecondEdition/welbox/WelboxTop/",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"//div[@class=\"index\"]/form/fieldset/table",
"url":"^https://siteexplorer\\.search\\.yahoo\\.co\\.jp/mysite/advsearch",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"//div[@class=\"contents_left\"]",
"url":"^http://www\\.ntticc\\.or\\.jp/Exhibition/2009/MetaverseProject/",
"nextLink":"//span[@class=\"tonext\"]/a"
},
{
"insertBefore":"id(\"pagi\")",
"pageElement":"id(\"suggestion-bottom\")/preceding-sibling::div",
"url":"^http://[^.]+\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/videosearch",
"nextLink":"id(\"main-pagi-next\")"
},
{
"pageElement":"id(\"contents\")/div[@class=\"ytrvCmnMltCol\"]/div[@class=\"ytrvCmnMltCol bottom-col\"]",
"url":"^http://domestic\\.hotel\\.travel\\.yahoo\\.co\\.jp/bin/ajsearch",
"nextLink":"//a[contains(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"Contents\")/div[@class=\"GridSet\"]",
"url":"^http://www\\.hitachi\\.co\\.jp/Prod/comp/Secureplaza/sec_trend/",
"nextLink":"id(\"Contents\")//*[@class=\"next\"]/a"
},
{
"pageElement":"id(\"lt_catalog_list\")",
"url":"^http://[^.]+\\.librarything\\.[^.]{2,3}/catalog_bottom\\.php\\?",
"nextLink":"//a[contains(concat(\" \", @class, \" \"), \" pageShuttleButton \") and not(contains(@href,\"offset=0\"))]"
},
{
"pageElement":"//div[@class=\"newsbox\"]/*",
"url":"^https?://www\\.amusement-center\\.com/project/emusic/news\\.php",
"nextLink":"//a[@title=\"Next item\"]"
},
{
"insertBefore":"id(\"block_story\")//div[contains(concat(\" \", @class, \" \"), \" photopanel \")]",
"pageElement":"id(\"block_story\")/*",
"url":"^http://japan\\.zdnet\\.com/sp/feature/ziddy/story/[\\d,]+\\.htm",
"nextLink":"id(\"block_story\")//div[contains(concat(\" \", @class, \" \"), \" photopaging \")]//a[contains(concat(\" \", @class, \" \"), \" button next \")]"
},
{
"pageElement":"//div[@class=\"Code\"]/*[(self::div and @class=\"Table01\") or (self::p and not(./*))]",
"url":"^http://(?:www\\.)?starbucks\\.co\\.jp/search/result_store\\.php",
"nextLink":"//table[@class=\"ResultNavi\"]//a[contains(., \"\u6b21\")]"
},
{
"pageElement":"id(\"punviewtopic\")//div[contains(concat(\" \", @class, \" \"), \" blockpost \")]",
"url":"^https?://(?:[^/]*/)+viewtopic\\.php\\?(?:[^?#;&]*[;&])*id=[1-9]",
"nextLink":"//p[@class=\"pagelink conl\"]/strong/following-sibling::*[1][self::a]"
},
{
"insertBefore":"//div[@class=\"related\"][last()]",
"pageElement":"//div[@class=\"documentwrapper\"]",
"url":"^http://docs\\.python\\.org/dev/[a-z]+/(?!index\\.html).+\\.html",
"nextLink":"//a[@accesskey=\"N\"]"
},
{
"pageElement":"id(\"cntFdWrp\")/div[@class=\"cntFdHead\" or @class=\"cntFdBody\"]",
"url":"^http://(?:ejje|shuwa|thesaurus|www)\\.weblio\\.jp/content_find/",
"nextLink":"id(\"cntFdWrp\")/div[@class=\"cntFdPaging\"]/a[contains(text(), \"\u6b21\u306e\")]"
},
{
"pageElement":"//div[@align=\"center\"]/a[img]",
"url":"^http://www\\.h7\\.dion\\.ne\\.jp/~n_circus/hybrid/hi\\d+\\.html",
"nextLink":"//div[@align=\"center\"]/a[img]"
},
{
"pageElement":"id(\"_ctl6_ProductImageList\")/*",
"url":"^https://netsuper\\.aeon\\.jp/[^/]+/shop/category_list\\.aspx\\?",
"nextLink":"id(\"_ctl6_PagerU__ctl0_lnkNext\")[@href]"
},
{
"pageElement":"id(\"mainbn\")/ul/li[contains(@class,\"bn\")]",
"url":"^http://event\\.media\\.yahoo\\.co\\.jp/nikkeibp/archives\\.html",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" Extends-details \")]",
"url":"^http://detail\\.chiebukuro\\.yahoo\\.co\\.jp/qa/question_detail",
"nextLink":"id(\"yschnxtb\")/a"
},
{
"pageElement":"id(\"addon-entries\")/div[@class=\"entry\"]",
"url":"^https://addons\\.mozilla\\.jp/firefox/(?:extensions/|search\\?)",
"nextLink":"id(\"addon-entries\")/div[@class=\"footer-pagination\"]/p[@class=\"pages\"]/strong/following-sibling::a"
},
{
"pageElement":".//div[1]/table[1]/tbody/tr[1]/td[1]/div[1]/p[contains(@align, \"center\")]",
"url":"^http://(?:www\\.)?bible\\.or\\.jp/vers_search/vers_search\\.cgi",
"nextLink":".//a[contains(@href, \"flag_pre_next=next\")]"
},
{
"pageElement":"//p[table[@class=\"msg_table\"]] | //table[@class=\"msg_table\" and not(parent::p)]",
"url":"^http://otn\\.oracle\\.co\\.jp/otn_pl/otn_tool2/search_forum_exe",
"nextLink":"//p[@align=\"right\"]/b/font[@color=\"red\"]/../following-sibling::b[1]/a"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" view-content \")]/*",
"url":"^http://(?:extensions|templates)\\.services\\.openoffice\\.org/",
"nextLink":"//strong[@class=\"pager-current\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"dt\")/*",
"url":"^http://search\\.rental\\.rakuten\\.co\\.jp/(?:c|dv(?:dc)?)d/s/",
"nextLink":"id(\"result\")//a[contains(., \"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"More\")/ul",
"url":"^http://crossreview\\.jp/(?:[\\w-]+/)?friends/(?:follower|more)",
"nextLink":"//a[@rel=\"next\"]"
},
{
"insertBefore":"id(\"bodyMainArea\")/div[@class=\"relationDiary\"]/div[@class=\"pageNavigation01\"][last()]",
"pageElement":"id(\"bodyMainArea\")/div[@class=\"relationDiary\"]/div[@class=\"quoteDiaryArea01\"]|id(\"bodyMainArea\")/div[@class=\"newsList\"]/div[@class=\"contents\"]",
"url":"^http://news\\.mixi\\.jp/list_(?:quote_diar|news_categor)y\\.pl",
"nextLink":"//div[@class=\"pageNavigation01\"]/div[@class=\"pageList02\"]/ul/li/a[text()=\"\u6b21\u3092\u8868\u793a\"]"
},
{
"insertBefore":"id(\"navbar\")",
"pageElement":"//*[self::div[@class=\"h\"] or self::pre[@class=\"j\"] or self::div[@class=\"f\"]]",
"url":"^http://[^.]+\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/codesearch",
"nextLink":"(id(\"navbar\")//td[@class=\"b\"]/a)[last()]"
},
{
"pageElement":"//form[@action=\"http://www.sofmap.com/product_compare/exec/\"]",
"url":"^http://www\\.sofmap\\.com/(?:product_list|search_result)/exec/",
"nextLink":"//form[@action=\"http://www.sofmap.com/product_compare/exec/\"]/preceding::a[text()=\"\u6b21\u3078\"]"
},
{
"insertBefore":"id(\"notice\")",
"pageElement":"id(\"tmplBody\")/div[@class=\"inner\"]/*[not(@id=\"notice\" or contains(@class, \"ctrl\") or contains(@class, \"endkwd\") )]",
"url":"^http://bizmakoto\\.jp/makoto/articles/(?:09(?:0[4-9]|1)|[1-9])",
"nextLink":"id(\"next\")/a"
},
{
"pageElement":"id(\"list\")",
"url":"^http://monster-girl\\.homelinux\\.net/(?:upload\\.cgi|index|$)",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//td[@background=\"p/bg002.gif\"]/ancestor::table[1]",
"url":"^http://(?:www\\.)?minnano-av\\.com/(?:actress|free)_list\\.php",
"nextLink":"//a[contains(text(), \"\u6b21\u3078\")]"
},
{
"pageElement":"id(\"ListTableIn\")/table",
"url":"^http://www\\.tagindex\\.com/cgi-lib/(?:q[1-4])?bbs/patio\\.cgi",
"nextLink":"//div[@class=\"PageLinks\"]/strong/following-sibling::a[1]"
},
{
"pageElement":"//table[@class=\"res\"]/tbody/tr[contains(@class, \"valign\")]",
"url":"^https?://www\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/bookmarks/",
"nextLink":"//td[contains(concat(\" \", @class, \" \"), \" bl \")][last() - 1]/a"
},
{
"pageElement":"id(\"topicsnewslist\")/ul[@class=\"linklist16\"]/li",
"url":"^http://topics\\.jp\\.msn\\.com/(?:[^/]+/)+?articleindex\\.aspx",
"nextLink":"id(\"tpnewslinkbottom\")/ul/li[@class=\"last\" and last()]/a"
},
{
"pageElement":"id(\"TelegraphPics\")/preceding-sibling::*",
"url":"^http://www\\.telegraph\\.co\\.uk/[^/]+/[^/]*picturegalleries/",
"nextLink":"id(\"nextGallImg\")/a"
},
{
"pageElement":"//ul[@class=\"excerptedpostblock\"]",
"url":"^https?://www\\.sociomedia\\.co\\.jp/category/uidesignpatterns",
"nextLink":"//li[@class=\"active_page\"]/following-sibling::li[1]/a"
},
{
"pageElement":"id(\"threadslist\")",
"url":"^http://(?:www\\.)?akiba-online\\.com/forum/forumdisplay\\.php",
"nextLink":"//div[@class=\"pagenav\"]/descendant::a[contains(@title,\"Next Page\")]"
},
{
"pageElement":"id(\"content\")/div/form[@action=\"viewforum.php\"]",
"url":"^http://xoops\\.ec-cube\\.net/modules/newbb/viewforum\\.php\\?",
"nextLink":"id(\"content\")//span[@class=\"orange\"]/following-sibling::a[1]"
},
{
"pageElement":"//td[@width=\"100%\"][@valign=\"top\"]/table[@class=\"tborder\"]",
"url":"^http://(?:www|forum)\\.pcdvd\\.com\\.tw/forumdisplay\\.php\\?",
"nextLink":"//div[@class=\"pagenav\"]//a[text()=\"\u4e0b\u4e00\u9801\"]"
},
{
"pageElement":"id(\"center\")/div[not(@class=\"paging\")]",
"url":"^http://wwwx\\.fujitv\\.co\\.jp/zoo/blog/index\\.jsp\\?cid=233",
"nextLink":"//div[@class=\"paging-next\"]/a"
},
{
"pageElement":"id(\"entrycontainer\")/*[not(@class=\"rectanglead\")]",
"url":"^http://www\\.(?:geekologie|iwatchstuff|thesuperficial)\\.com/",
"nextLink":"id(\"mainbody\")/div[@class=\"navigation\"]//a[contains(., \"Next\")]"
},
{
"pageElement":"id(\"gsThumbMatrix\")/tbody/tr",
"url":"^http://(?:4gifs\\.com|pix\\.(?:jj\\.am|4gifs\\.com))/gallery/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"//td[@colspan=\"2\"]/a/img",
"url":"^http://akiba-pc\\.watch\\.impress\\.co\\.jp/hotline/.+/image/",
"nextLink":"//td[@align=\"right\"]/small/a"
},
{
"pageElement":"//div[starts-with(@id, \"illust_c\")]",
"url":"^http://www\\.pixiv\\.net/(?:(?:personal_)?tags.+?tag=|search)",
"nextLink":"//a[starts-with(text(), \"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"in-center\")//div[@class=\"content-body\"]/node()[@class=\"mod-entry-set\" or position()=last()]|id(\"mod-comments\")",
"url":"^http://blog\\.goo\\.ne\\.jp/victory-sakuragawamegu(?:$|[/?#])",
"nextLink":"id(\"mod-prev-next\")//li[@class=\"mod-pre-nex-prev\"]/a"
},
{
"pageElement":"id(\"search-stories\")",
"url":"^http://(?:[^.]+\\.)?google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/news",
"nextLink":"id(\"end-next\")/.."
},
{
"pageElement":"id(\"headline\")/p[contains(concat(\" \", @class, \" \"), \" article \")] | id(\"headline\")/*[not(@id=\"kiji\") and preceding::*[@class=\"headline\" or @class=\"headline2\"][last()] and following::*[@class=\"hit_navi\"][last()]]",
"url":"^http://it\\.nikkei\\.co\\.jp/[^/]+/[^/]+/\\w+\\.aspx\\?n=\\w+",
"nextLink":"id(\"kiji\")/a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"//form[@name=\"gs\"]/following-sibling::node()[ following::div[contains(concat(\" \", @class, \" \"), \" n \")] ]",
"url":"^http://scholar\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/scholar",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" n \")]/table/tbody/tr/td[last()]/a"
},
{
"pageElement":"id('contentsBody')/table",
"url":"^http://ichiba\\.nicovideo\\.jp/search/(?:az|gg|mobile|ys|nd)/",
"nextLink":"//a[text()=\"\u6b21\u3078 >>\"]"
},
{
"pageElement":"//div[@class=\"rbroundbox2\"]/div[@class=\"rbcontent\"]/node()[self::div[contains(concat(\" \", @class, \" \"), \" forum_box \")] or self::br]",
"url":"^http://projecteuler\\.net/index\\.php\\?section=forum&id=\\d+",
"nextLink":"//li[@class=\"currentpage\"]/following-sibling::li[1]/a"
},
{
"pageElement":"//p|//center",
"url":"^http://yotsuba\\.saiin\\.net/~heart-of-haa/[a-z]+[0-9]+\\.htm",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id('middleContentArea')/table",
"url":"^http://(?:www\\.)?netto-online\\.de/angebote/handzettel\\.php",
"nextLink":"//a[text()=\"\u00bb\u00bb\u00bb\"]"
},
{
"pageElement":"id(\"rank-tbl\")",
"url":"^http://blogscouter\\.cyberbuzz\\.jp/list/daily_ranking\\.php",
"nextLink":"id(\"rank-box\")//a[contains(text(), \"next>>\")]"
},
{
"pageElement":"id(\"bbsSpace\")/div[@class=\"bbsGroup\"]",
"url":"^http://profile\\.ameba\\.jp/general/bbs/showCommentList\\.do",
"nextLink":"id(\"bbsSpace\")/div[@class=\"paging\"]/a[@class=\"right\"]"
},
{
"pageElement":"id(\"content_top\")/div[@id=\"recipi_menu_chanco\" or @class=\"bob_sen2\"]",
"url":"^https://www\\.iy-net\\.jp/nsmarket/recipe/recipelist\\.do\\?",
"nextLink":"//span[@class=\"span_next\"]/parent::a"
},
{
"insertBefore":"id(\"comments sponsors_link\")",
"pageElement":"id(\"entryBody\")",
"url":"^http://wiredvision\\.jp/(?:news|blog/[^/]+)/\\d+/\\d+\\.html",
"nextLink":"id(\"entryBody\")/ul[@class=\"entryPaging\"]/li[@class=\"forward\"]/a|id(\"entryBody\")/p/a[contains(text(), \"\u3078\u7d9a\u304f\")]"
},
{
"pageElement":"//div/table",
"url":"^http://www\\.nijibox3\\.com/magical/futaba/[^/]+/viewa\\.php",
"nextLink":"//div/a[contains(text(),\"\u6b21\u3078\")]"
},
{
"pageElement":"//table[@class=\"tablebg\" and //div[@class=\"postbody\"]] | //tr[td[contains(@class,\"row\")] and //node()[@class=\"postbody\"]] | //table[@class=\"forumline\"] | //table[tbody/tr/td/@class=\"nav\"] | //div[@id=\"page-body\"] | //table[@class=\"border-bleu-jos\"]",
"url":"^https?://.+?/viewtopic\\.php\\?(?:f=[1-9][0-9]*[&;])?t=[1-9]",
"nextLink":"//node()[@class=\"gensmall\" or @class=\"genmed\"]//a[contains(@href, \"viewtopic.php\") and preceding-sibling::node()[not(self::a) and number()>0]] | (//table/tbody/tr/td[@class=\"nav\"])[last()]/b[last()]/following-sibling::a[1] | //div[@class=\"pagination\"]/span/strong/following-sibling::a[1]"
},
{
"pageElement":"//table[@class=\"res\"]",
"url":"^https?://www\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/history/",
"nextLink":"//td[@class=\"bl\"][last()-1]/a|//div[@class=\"nn\"]/parent::a"
},
{
"pageElement":"id(\"pulldown\")/following-sibling::*[not(@class=\"pagination\")]",
"url":"^http://(?:www\\.)?futabasha\\.co\\.jp/booksdb/book/listview/",
"nextLink":"id(\"default_right_area\")/p[@class=\"pagination\"]/strong/following-sibling::a[1]"
},
{
"pageElement":"id(\"content\")/table[contains(concat(\" \", @class, \" \"), \" listing \")]|id(\"results\")",
"url":"^https?://ubiquity\\.mozilla\\.com/trac/(?:report/|search\\?)",
"nextLink":"//span[@class=\"next\"]/a"
},
{
"insertBefore":"//table//table[last()]//tr[@bgcolor = \"#eaf6ff\" or @bgcolor = \"#ffffff\"][last()]",
"pageElement":"//table//table[last()]//tr[@bgcolor = \"#eaf6ff\" or @bgcolor = \"#ffffff\"][position() < last()]",
"url":"^http://(?:www\\.)?digitalmars\\.com/webnews/newsgroups\\.php",
"nextLink":"//a[img[contains(@src, \"next_arrow.gif\")]]"
},
{
"insertBefore":"//div[@class=\"footer\"]",
"pageElement":"//table[@class=\"message_list\"]",
"url":"^https?://[^.]+\\.collaboware\\.net/[^?]*\\?.*\\baction=board",
"nextLink":"//a[@class=\"arrow_next\"]"
},
{
"insertBefore":"id(\"answers\")/node()[last()]",
"pageElement":"id(\"mainbar questions\")/div[@class=\"question-summary\"]|id(\"answers\")/div[@class=\"pager-answers\"][1]/following-sibling::*[./following-sibling::div[@class=\"pager-answers\"]]",
"url":"^http://s(?:erverfault|tackoverflow|uperuser|tackapps)\\.com/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//div[contains(@class,\"setWrap\")]",
"url":"^http://(?:www\\.)?shouga-bu\\.com/recipe/search/result\\.php",
"nextLink":"//ul[contains(@class,\"pageNav\")]/li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"content\")/div[@class=\"blog\"]",
"url":"^http://[^.]+\\.sblo\\.jp/(?:archives|category)/[^.]+\\.html",
"nextLink":"//div[not(preceding-sibling::div[@class=\"navi\"])][not(following-sibling::div[@class=\"navi\"]/a[text()=\">>\"])]/a[text()=\"<<\"]|//div[preceding-sibling::div[@class=\"navi\"]][@class=\"navi\"]/a[text()=\">>\"]"
},
{
"insertBefore":"//div[@class=\"Pages\"]",
"pageElement":"id(\"favoriteThumbs\")",
"url":"^http://www\\.flickr\\.com/photos/[^/]+/favorites(?:[/?#]|$)",
"nextLink":"//a[@class=\"Next\"]"
},
{
"pageElement":"//ul[@class=\"topiclist\"] | //div[@class=\"post postbg\"] | //form[fieldset/@class=\"display-options\"]",
"url":"^http://bbs\\.operachina\\.com/search\\.php\\?.*\\bkeywords=",
"nextLink":"//p[@class=\"rightside pagination\"]/a[last()]"
},
{
"pageElement":"id(\"c\")",
"url":"^http://image\\.baidu\\.jp/i\\?(?:[^?#]*&)?tn=baiduimagenojs",
"nextLink":"id(\"pg\")/a[@class=\"nx\"]"
},
{
"pageElement":"id(\"content\")//ul[@class=\"pageNumber\"]/following-sibling::*[./following-sibling::p[@class=\"pageTop\"]]",
"url":"^https?://(?:www\\.)?marutsu\\.co\\.jp/user/ichiran\\.php\\?",
"nextLink":"//li[@class=\"stay\"]/following-sibling::li[1]/a"
},
{
"pageElement":"//table[.//font[.=\"\u767a\u751f\u65e5\u6642\"]]",
"url":"^https://partner\\.afl\\.rakuten\\.co\\.jp/af/a_report\\.cgi",
"nextLink":"//a[contains(@href,\"/a_report.cgi?\")][starts-with(.,\"\u6b21\u306e\")]"
},
{
"pageElement":"//div[@class=\"KonaBody\"]",
"url":"^http://(?:www\\.)?hardwarezone\\.com/articles/view\\.php\\?",
"nextLink":"//a[@class=\"page\" and contains(., \">\")]"
},
{
"pageElement":"//div[@class=\"Wireless_AreaSearchDetail\"]/table/tbody/tr[position()>1]",
"url":"^http://wireless\\.yahoo\\.co\\.jp/search/accessPointList\\?",
"nextLink":"//span[@class=\"Pager\"]/a[contains(., \"\u6b21\u306e\")]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" mainCont01ProBox01 \")]",
"url":"^http://(?:www\\.)?askul\\.jp/product/(?:category|search)\\?",
"nextLink":"//img[@alt=\"\u6b21\u306e\u30da\u30fc\u30b8\u3078\"]/parent::a"
},
{
"pageElement":"id(\"result\")/*",
"url":"^http://(?:home|sale)\\.adpark\\.co\\.jp/ws/rhSrch.action\\?",
"nextLink":"id(\"listPage\")//a[contains(., \"\u6b21\")]"
},
{
"insertBefore":"//div[@class=\"frame\"]/div[@class=\"main\"]/div[@class=\"page2\"]",
"pageElement":"//div[@class=\"frame\"]/div[@class=\"main\"]/table",
"url":"^http://www\\.gumonji\\.net/cgi-bin/(?:idea_list|beam)\\.cgi",
"nextLink":"//div[@class=\"frame\"]/div[@class=\"main\"]/div[@class=\"page2\"]/div[@class=\"pager_next\"]/a"
},
{
"pageElement":"id(\"RES\")/div",
"url":"^http://(?:aurasoul\\.)?mb2\\.jp/_[^/]+/[0-9]+_[0-9]+\\.html",
"nextLink":"//span[@class=\"ryaku\"]/a[text()=\"\u2193\u6b21\u306e\u30da\u30fc\u30b8\u3092\u8aad\u3080\"]"
},
{
"pageElement":"id(\"articlebody m_body overwrite\")",
"url":"^http://www\\.nikkeibp\\.co\\.jp/article/column/[^/]+/[^/]+/",
"nextLink":"id(\"pages\")//a[@class=\"next\" or contains(text(), \"\u6b21\")]|//a[@class=\"next visited-off\"]"
},
{
"pageElement":"id(\"content\")/table",
"url":"^https?://userscripts\\.org/(?:(?:forum|tag|user)s/|scripts)",
"nextLink":"id(\"content\")/div[@class=\"pagination\"]/a[contains(@rel,'next')]"
},
{
"pageElement":"id(\"chartColumn\")",
"url":"^http://tv\\.so-net\\.ne\\.jp/(?:chart/[\\w/]+?\\.action|m/)",
"nextLink":"//a[descendant::img[@src=\"/tv/digital/img/btn/btn_arrow_j.gif\"]]"
},
{
"pageElement":"id(\"yschnpg\")/following-sibling::ul",
"url":"^http://list\\.chiebukuro\\.yahoo.co\\.jp/(?:list/|dir/list)",
"nextLink":"id(\"yschnpg\")//a[contains(@class,\"next\")]"
},
{
"pageElement":"id(\"alpha-inner\")",
"url":"^http://www\\.the-journal\\.jp/contents/[^/]+/\\d{4}/\\d\\d/",
"nextLink":"id(\"alpha-inner\")/p[@class=\"content-nav\"]/a[1][starts-with(.,\"\u00ab\")]"
},
{
"pageElement":"id(\"content_productgroup\")",
"url":"^http://www\\.urbanoutfitters\\.com/urban/catalog/.+\\.jsp.+",
"nextLink":"//li[@class=\"filtering_next\"]/a"
},
{
"pageElement":"//a[img/@class=\"manga-page\"]",
"url":"^http://(?:[^./]+\\.)*?(?:one|1000)manga\\.com/(?:[^/]+/){3}",
"nextLink":"//a[img/@class=\"manga-page\"]"
},
{
"pageElement":"id(\"posts\") | id(\"posts\")/following-sibling::div[@align=\"center\"][position() < last()]",
"url":"^http://(?:www|forum)\\.pcdvd\\.com\\.tw/showthread\\.php\\?",
"nextLink":"//div[@class=\"pagenav\"]//a[text()=\"\u4e0b\u4e00\u9801\"]"
},
{
"pageElement":"//form[@action=\"/Database/MovieDatabase.php\"]/table/tbody/tr[position()>2 and position()<last()-2]",
"url":"^http://movie\\.ontvjapan\\.com/Database/MovieDatabase\\.php",
"nextLink":"//td[@class=\"large\"]/b/following-sibling::a[1]"
},
{
"pageElement":"//div[@align=\"right\"]//following-sibling::h3[not(@class)]|//div[@align=\"right\"]//following-sibling::p[@class=\"bbs\"]",
"url":"^http://(?:www|shigoto)\\.nikki\\.ne\\.jp/(?:\\?action=)?bbs",
"nextLink":"//div[@align=\"right\"]//font[@color=\"#cc6600\"]/parent::b/following-sibling::b[1]/a"
},
{
"pageElement":"//div[@class=\"listing\"]/div[not(@class=\"pagination\")]",
"url":"^http://(?:www\\.)?apolon\\.jp/(?:pro(?:file|ject)s|offers)",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"pageElement":"//div[@class=\"itemList02\"]/*",
"url":"^http://www\\.nitori-net\\.jp/shop/category/category\\.aspx",
"nextLink":"//p[@class=\"navi\"]/a[contains(., \">\")]"
},
{
"pageElement":"id(\"logs\")",
"url":"^http://www2\\.jrt\\.co\\.jp/cgi-bin3/ikuniweb/tomozo\\.cgi",
"nextLink":"id(\"navi\")/ul/li[last()]/a"
},
{
"pageElement":"id(\"content\")/div/table[@class=\"outer\"]",
"url":"^http://xoops\\.ec-cube\\.net/modules/newbb/viewtopic\\.php",
"nextLink":"id(\"content\")//tr[@class=\"foot\"]//a[last()][u[contains(text(),\"\u6b21\u3078\u2192\")]]"
},
{
"pageElement":"//*[self::p or self::center or self::hr]",
"url":"^http://www\\.geocities\\.jp/asumithi/(?:[^/]+/)?\\w+\\.htm",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"//div[@class=\"illust_pict_all\"]|id(\"main_area_all\")/div[@class=\"search_theme_list\"]|id(\"theme_bbs_main\")/*|id(\"theme_area_c\")/div[contains(concat(\" \", @class, \" \"), \" theme_list_box \")]|id(\"res_list\")/table",
"url":"^http://seiga\\.nicovideo\\.jp/(?:bbs|illust|search|theme)/",
"nextLink":"//a[@rel=\"next\"]|id(\"res_list\")/div/a[contains(., \"\u6b21\")]"
},
{
"pageElement":"//div[@class=\"indentText\"]/ancestor::tr[1]",
"url":"^http://addons\\.miranda-im\\.org/(?:search|index)\\.php\\?",
"nextLink":"//a[@class=\"normal\" and contains(., \"Next\")]"
},
{
"insertBefore":"id(\"notice\")",
"pageElement":"//div[@class=\"outBody\"]/div[@class=\"inBody\"]/div/div[@class=\"maincol\"]/div[@class=\"newart\"]/div[@class=\"newart\"]",
"url":"^http://bizmakoto\\.jp/makoto/articles/rn0(?:[0-8]|90[1-3])",
"nextLink":"id(\"next\")/a"
},
{
"pageElement":"id(\"image-block tag-block\")",
"url":"^http://natalie\\.mu/(?:[^/]+/)*?(?:gallery/ho|hottag/lis)t",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" body \")]",
"url":"^http://crocro\\.com/write/manga_javascript/wiki\\.cgi\\?p=",
"nextLink":"//a[@class=\"wikipage\" and contains(., //div[@class=\"mainIn\"]/h1)]/parent::li/following-sibling::li[1]/a"
},
{
"insertBefore":"id(\"resultsBody\")/table[last()]",
"pageElement":"id(\"resultsBody\")/div[@class=\"hit\"][./table[not(@id) and ./preceding-sibling::*]]",
"url":"^http://(?:w(?:ww|oman)\\.)?excite\\.co\\.jp/search\\.gw\\?",
"nextLink":"id(\"resultsBody\")/table[last()]//a[contains(., \">>\")]"
},
{
"pageElement":"//div[@class=\"widget-wapper arrival1 ttl2Orange\"]//div[@class=\"widget-cont-inner\"]/table",
"url":"^http://\\w+\\.blogmura\\.com/tb_entry\\d+(?:_\\d+)?\\.html",
"nextLink":"//div[@class=\"page-tab\"]/ul/li[last()]/a"
},
{
"pageElement":"//td[@class=\"fo12_33\"]/../../.. | //table[@class=\"fo10x12_33\"] | //table[@class=\"fo10_gr\"] | //br[@class=\"fo12\"]/following-sibling::node()[following::a[text()=\"\u2190 b_a_c_k \" or text()=\"n_e_x_t \u2192\"]] | //div[@id='linkalert-box']/following-sibling::table",
"url":"^http://(?:www\\.)?japandesign\\.ne\\.jp/HTM/(?:REPORT|NY)/",
"nextLink":"//a[text()=\"N E X T\" or text()=\"n_e_x_t \u2192\"] | //font[text()=\"N E X T\"]/.."
},
{
"insertBefore":"//div[@class=\"pager\"]",
"pageElement":"id(\"hugeThumbs\")|//div[contains(concat(\" \", @class, \" \"), \" entryList \")]",
"url":"^http://www\\.instructables\\.com/tag/type-(?:id|question)/",
"nextLink":"//span[@class=\"current-page\"]/following-sibling::a[1]"
},
{
"insertBefore":"//h1/following-sibling::table/following-sibling::node()",
"pageElement":"//h1/following-sibling::table",
"url":"^http://www\\.vim\\.org/scripts/script_search_results\\.php",
"nextLink":"//a[text()=\"next\"]"
},
{
"insertBefore":"id(\"footerArea\")",
"pageElement":"id(\"oldContents\")/table",
"url":"^http://(?:video\\.)?mixi\\.jp/search_(?:review|video)\\.pl",
"nextLink":"//a[text()=\"\u6b21\u3092\u8868\u793a\"]"
},
{
"insertBefore":"id(\"ucML_Log1\")",
"pageElement":"id(\"ucML_Log1\")/preceding-sibling::div[not(@class)]",
"url":"^http://select-baito\\.weban\\.jp/webapp/sel/list\\.aspx\\?",
"nextLink":"id(\"ucML_ctl00_pager1\")/span[@class=\"txt12_orange\"]/following-sibling::a[1]"
},
{
"insertBefore":"id(\"btmbox5\")",
"pageElement":"id(\"ppbox\")",
"url":"^http://www\\.style\\.com/peopleparties/search/thumb/person",
"nextLink":"(//a[@class=\"paginator\"])[last()]"
},
{
"pageElement":"//div[contains(@class,\"item\")]",
"url":"^http://www\\.toysrus\\.co\\.jp/product/product_list\\.aspx",
"nextLink":"//div[contains(@class,\"listbar\")][1]//table//td[1]//td/a[preceding::b][1]"
},
{
"pageElement":"id(\"main\")/div[contains(concat(\" \", @class, \" \"), \" wrpreview \")]",
"url":"^http://restaurant\\.gourmet\\.yahoo\\.co\\.jp/\\d+/review/",
"nextLink":"id(\"main\")//div[contains(concat(\" \", @class, \" \"), \" list-tab \")]//a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"//hr[1]/following-sibling::node()[./following::hr]",
"url":"^http://www\\.lispworks\\.com/documentation/HyperSpec/Body/",
"nextLink":"//a[@rel=\"NEXT\"]"
},
{
"pageElement":"//div[@class=\"SearchResult\"]",
"url":"^http://blogsearch\\.livedoor\\.com/search/(?:article|blog)",
"nextLink":"//span[@class=\"pageNext\"]/a"
},
{
"pageElement":"id(\"mainColumn\")//div[@class=\"contentBox\"]",
"url":"^http://news\\.livedoor\\.com/(?:article|category)/images?/",
"nextLink":"id(\"mainColumn\")//li[@class=\"next\"]/a"
},
{
"pageElement":"//form[@name=\"cart_whole\"]",
"url":"^http://www\\.7netshopping\\.jp/.+/(?:rank|search_result)/",
"nextLink":"//a[contains(text(), \"\\u6b21\\u3078\")]"
},
{
"pageElement":"id(\"main_content\")/*",
"url":"^http://books\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/books",
"nextLink":"id(\"navbar\")//span[@class=\"navlink\"]/parent::a"
},
{
"insertBefore":"//div[contains(@class, \"gallery\")]/ul[contains(@class, \"menu\")]",
"pageElement":"//div[contains(@class, \"galleryContent\")]",
"url":"^http://wiredvision\\.jp/(?:gallery|news)/\\d+/\\d+\\.html",
"nextLink":"//div[contains(@class, \"galleryContent\")]//ul[contains(@class, \"navigation\")]/li/a"
},
{
"pageElement":"//form[@name=\"searchForm\"]",
"url":"^http://haken\\.en-japan\\.com/jobsearch/job_list\\.cfm\\?",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id(\"main\")/dl[contains(@class,\"search-result\")]",
"url":"^http://gourmet\\.yahoo\\.co\\.jp/restaurant/shoplist/\\w+",
"nextLink":"//span[contains(@class,\"listNext\")]/a"
},
{
"pageElement":"id(\"title\")/following-sibling::*[./following-sibling::div[@id=\"more\"]]",
"url":"^http://mplus-fonts\\.sourceforge\\.jp/cgi-bin/blosxom.cgi",
"nextLink":"id(\"more\")/a"
},
{
"pageElement":"//div[@class=\"tolMsrMainContainer\"]/div[not(./div[contains(concat(\" \", @class, \" \"), \" tolMsrMainWrapEx \")])]|//div[@class=\"tolMediaStory\"]/div[@class=\"tolMwrWrapA\"]/*|//div[@class=\"tolListRvw\"]/div[@class=\"tolListRvwWrapC\"]",
"url":"^http://www\\.tsutaya\\.co\\.jp/(?:artist/|search.html\\?)",
"nextLink":"//li[@class=\"tolLRWBliEnd\"]/a"
},
{
"pageElement":"//table[@class=\"questionlisttable\"]",
"url":"^http://q\\.hatena\\.ne\\.jp/[^/]+/(?:question|answer)list",
"nextLink":"//div[@class=\"pager\"]/strong/following-sibling::a"
},
{
"pageElement":"id(\"content02\")/form[@name=\"frm0\"]/table[2]",
"url":"^http://(?:www\\.)?sunhayato\\.co\\.jp/products/list\\.php",
"nextLink":"id(\"content02\")//a[starts-with(text(),\"\u6b21\")]"
},
{
"pageElement":"id(\"article_body\")",
"url":"^http://www\\.washingtonpost\\.com/wp-dyn/content/article/",
"nextLink":"id(\"pagination_bottom\")//a[text()=\"Next\"]"
},
{
"pageElement":"//tr[not(@class=\"ch\") and starts-with(@id, \"taw\")]",
"url":"^http://www\\.technobahn\\.com/(?:apps|cgi-bin)/fn/plot\\?",
"nextLink":"//img[contains(@src, \"nav_next.png\") or contains(@src, \"nav_next_small.gif\")]/.."
},
{
"pageElement":"//dl",
"url":"^http://nanabatu\\.web\\.fc2\\.com/.+?/\\d{10}_\\d+\\.html",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"posts\")",
"url":"^http://forums\\.animesuki\\.com/showthread\\.php\\?t=\\d+",
"nextLink":"//a[starts-with(@title, \"Next Page\")]"
},
{
"pageElement":"id(\"maincol commentsandtrackbacks\")/*",
"url":"^http://(?:www\\.)?publickey1?\\.jp/[^/]+/\\d+/\\w+\\.html",
"nextLink":"id(\"maincol\")/div[last()]/em[contains(.,\"\u226a\")]/following-sibling::a"
},
{
"pageElement":"//div[contains(@class, \"search_box01 \")]",
"url":"^https?://job\\.rikunabi\\.com/2011/search/company/result/",
"nextLink":"//div[contains(@class, \"search_page_top\")]//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"insertBefore":"id(\"ygrp-msg-ext\")/div/table[@class=\"datatable\"]/following-sibling::node()",
"pageElement":"id(\"ygrp-msg-ext\")/div/table[@class=\"datatable\"]",
"url":"^http://[^.]+\\.groups\\.yahoo\\.com/group/[^/]+/messages/",
"nextLink":"//td[@class=\"viewright\"]/a[contains(text(), \">\")]"
},
{
"pageElement":"//td[@background=\"../../common/images/page_back.gif\"]/*[(self::table and .//td[@class=\"box1\"]) or (self::br and ./preceding-sibling::*[1][self::table and .//td[@class=\"box1\"]])]",
"url":"^http://www\\.nhk\\.or\\.jp/nikki/(?:enquete|old_bbs_\\d)/",
"nextLink":"//img[@src=\"../../common/images/next_icon.gif\"]/parent::a"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" post \") or @class=\"month\"]|id(\"albums mypix\")",
"url":"^http://my\\.opera\\.com/[^/]+/(?:a(?:lbums|rchive)|blog)/",
"nextLink":"//a[@class=\"nxt\"]"
},
{
"pageElement":"//center[position() > 3 and position() < last()-2]",
"url":"^http://www[^.]*\\.oekakibbs\\.com/bbs/[^/]+/oekakibbs.cgi",
"nextLink":"//center[4]//td[last()]/a[last()]"
},
{
"pageElement":"id(\"orders_shipped\")/tbody/tr/td/table",
"url":"^https://www\\.amazon\\.co\\.jp/gp/css/history/view\\.html",
"nextLink":"//font[contains(text(),\"\u305d\u306e\u4ed6\u306e\u6ce8\u6587\")]/../child::font[last()]/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"novel\"]",
"url":"^http://(?:www\\.)?syosetu\\.net/pc/.*(?:main|novel)\\.php",
"nextLink":"//img[contains(@src,\"next.gif\")][last()]/parent::a"
},
{
"pageElement":"id(\"offeringCatList\")/*",
"url":"^http://www\\.adobe\\.com/cfusion/marketplace/index.cfm\\?",
"nextLink":"//img[@class=\"globalpaginateArrowRight\"]/parent::a"
},
{
"pageElement":"//td[@class=\"results\"]//table[@class=\"list\"]/tbody/tr[position()<last()]",
"url":"^http://support\\.microsoft\\.com/search/default\\.aspx\\?",
"nextLink":"//img[@class=\"nextSrch\"]/parent::a"
},
{
"pageElement":"id(\"Main\")/table[@class]",
"url":"^http://www\\.flickr\\.com/explore/interesting(?:/\\d+){3}",
"nextLink":"id(\"Main\")//a[@class=\"Next\"]"
},
{
"pageElement":"id(\"contents_main\")/div[@class = \"list\"]",
"url":"^http://www\\.otakuma\\.net/index\\.php/community/search/.",
"nextLink":"id(\"contents_main\")/p[(last())]/b/following-sibling::a[1]"
},
{
"pageElement":"id(\"left_side\")/div[@class=\"block_box\"]|id(\"left_side\")/div[contains(@style, \"clear\")][last()]",
"url":"^http://(?:www\\.)?fallout3nexus\\.com/downloads/cat\\.php",
"nextLink":"id(\"left_side\")/div[@class=\"cat_top\"]/a[contains(., \"\u00bb\")]"
},
{
"pageElement":"id(\"doodles\")|//div[contains(concat(\" \", @class, \" \"), \" title \")]",
"url":"^http://www\\.google\\.[^./]{2,3}(?:\\.[^./]{2,3})?/logos/",
"nextLink":"//div[@class=\"base-nav\"]//a[contains(., \"\u00ab\")]"
},
{
"pageElement":"id('main')",
"url":"^http://[^.]+\\.asablo\\.jp/blog/\\d{4}/\\d{2}/\\d{2}/\\d+",
"nextLink":"id(\"navi-top\")/a[1]"
},
{
"pageElement":"id(\"hatena-archive\")/div[@class=\"day\"]/div",
"url":"^https?://(?:d|[^.]+\\.g)\\.hatena\\.ne\\.jp/[^/]+/archive",
"nextLink":"id(\"hatena-archive\")/div[@class=\"calendar\"]/a[contains(text(), \"\u53e4\u3044\")]"
},
{
"insertBefore":"id(\"pages\")",
"pageElement":"id(\"pages\")/preceding-sibling::*",
"url":"^http://www\\.nikkeibp\\.co\\.jp/(?:style/(?:biz|eco)|lc)",
"nextLink":"id(\"pages\")/a[last()]"
},
{
"pageElement":"//div[@class=\"text\"]",
"url":"^http://www\\.nikkeibp\\.co\\.jp/article/(?:nba|skillup)/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id(\"ae-datastore-explorer-entities\")",
"url":"^https?://appengine\\.google\\.com/datastore/explorer\\?.",
"nextLink":"id(\"ae-datastore-explorer\")//a[@class=\"ae-paginate-next\"]"
},
{
"pageElement":"//div[@class=\"main\"]/div/table[@summary=\"result\"]",
"url":"^http://www5\\.big\\.or\\.jp/~seraph/ragna/ragna\\.cgi\\?",
"nextLink":"//div[@class=\"main\"]/p[last()]/span[not(./a)]/following-sibling::span/a"
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
"pageElement":"//td[@width=600]/*[preceding-sibling::table[tbody/tr/td[@background=\"img/search/line_title.gif\"]] and following-sibling::table[tbody/tr/td[@background=\"img/search/line_title.gif\"]]]",
"url":"^http://search\\.discas\\.net/netdvd/search.{0,4}Dvd\\.do",
"nextLink":"//table[@width=570]/descendant::td[@class=\"tx04\"]/descendant::a[starts-with(text(),\"\u6b21\u3078\")]"
},
{
"pageElement":"id(\"searchbar\")/following-sibling::div[@class=\"trp_photo\" or @class=\"rowsep\"]",
"url":"^http://photo\\.net/gallery/photocritique/filter(?:$|\\?)",
"nextLink":"//a[@class=\"nxt\"]"
},
{
"pageElement":"//center/table",
"url":"^http://[^.]+\\.oekakibbs\\.com/bbs/[^/]+/oekakibbs\\.cgi",
"nextLink":"//font[contains(text(),\"\u6b21\")]/.."
},
{
"pageElement":"//center/table//center/table",
"url":"^http://(?:www\\.)?mr-lee-catcam\\.de/pe_catcam\\d+\\.htm",
"nextLink":"//a[text()=\"Continue to next trip\"]"
},
{
"pageElement":"id(\"CtgObj\")/node()[not(self::input or self::hr)]",
"url":"^https?://(?:www\\.)?biccamera\\.com/bicbic/(?:ap|js)p/w/",
"nextLink":"//img[@alt=\"\u6b21\u30da\u30fc\u30b8\"]/parent::a"
},
{
"pageElement":"id(\"mp-ie\")/preceding-sibling::*[not(@class=\"frame2\")]",
"url":"^http://(?:jbpress|gendai|wedge)\\.ismedia\\.jp/articles/",
"nextLink":"id(\"multipage\")/div[@class=\"next_p\"]//a[last()]"
},
{
"pageElement":"//div[@class=\"archive\"]",
"url":"^http://(?:tanizawatomofumi\\.com|tnzwtmfm\\.jugem\\.cc)/",
"nextLink":"//span[@class=\"prev\"]/a"
},
{
"pageElement":"id(\"main\")/div[@class=\"unitResultList\"]",
"url":"^http://www\\.mikke\\.go\\.jp/p(?:ost|hotoGallery)/search",
"nextLink":"id(\"main\")/div[@class=\"navPager\"]/ul/li[@class=\"next\"]/a"
},
{
"pageElement":"//body/table[1]",
"url":"^http://www\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/movies",
"nextLink":"//td[@class=\"b\"]/a"
},
{
"pageElement":"id(\"recipe-list-wrap\")/table",
"url":"^http://recipe\\.gourmet\\.yahoo\\.co\\.jp/list\\.html\\?",
"nextLink":"id(\"recipe-list-wrap\")/div[4]/p[5]/span[@class=\"listNextcl\" or @class=\"listNext cl\"]/a"
},
{
"pageElement":"id(\"contents\")/div[@id=\"pager\"]/preceding-sibling::*[not(@class=\"topbanner\" or @class=\"colum_banner\")]",
"url":"^http://events\\.nikkeibp\\.co\\.jp/skillup/column/[^/]+/",
"nextLink":"id(\"pager\")//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"insertBefore":"//table/tbody/tr/td/table/tbody/tr[not(following-sibling::tr)]",
"pageElement":"//table/tbody/tr/td/table/tbody/tr",
"url":"^http://(?:www\\.)?showyourdick\\.org/cocks_archive\\.php",
"nextLink":"//table/tbody/tr/td/table/tbody/tr/td/h2/a"
},
{
"insertBefore":"id(\"pg pg_srp\")|id(\"yschrel_b\")/following-sibling::node()[last()]",
"pageElement":"id(\"cols yschweb yscharticle\")",
"url":"^http://hk\\.(?:blog|news\\.)?search\\.yahoo\\.com/search",
"nextLink":"id(\"pg-next\")|id(\"yschnxtb\")//a"
},
{
"pageElement":"//div[starts-with(@id,\"list_box\")]",
"url":"^http://www\\.sengoku\\.co\\.jp/mod/sgk_cart/search\\.php",
"nextLink":"id(\"list_txt02\")//a[starts-with(text(),\"\u6b21\")]"
},
{
"pageElement":"id(\"text\")/ancestor::table[1]",
"url":"^http://(?:www\\.)?hotpeek\\.com/(?:images|popular)\\.php",
"nextLink":"//b[contains(text(),\"Continue Peeking\")]/parent::a"
},
{
"pageElement":"id(\"paging\")/preceding::table[1]",
"url":"^http://v\\.search\\.goo\\.ne\\.jp/convenience/shop\\.cgi",
"nextLink":"id(\"paging\")/span[@class=\"cur\"]/following-sibling::span[1]/a"
},
{
"insertBefore":"id(\"banner2\")",
"pageElement":"id(\"content\")/div[@class=\"each_result\"]",
"url":"^http://search\\.www\\.infoseek\\.co\\.jp/(?:Blog|Web)\\?",
"nextLink":"id(\"pagenavi\")/span[@class=\"pn\"]/following-sibling::*[1][self::a]"
},
{
"pageElement":"//div[@class=\"pages\"]/parent::td/parent::tr",
"url":"^http://(?:[^./]+\\.)?imdb\\.com/(?:[^/]+/)+board/[^/]+/.",
"nextLink":"//div[@class=\"pages\"]/span[@class=\"current\"]/following-sibling::span[1]/a"
},
{
"pageElement":"id(\"main\")/div/div[@class=\"result\"]/div[@class=\"itemrow\"]",
"url":"^http://(?:www\\.)?monoclip\\.jp/[^/]+/(?:mono|user)list/",
"nextLink":"//a[@title=\"next page\"]"
},
{
"insertBefore":"id(\"googlead\")",
"pageElement":"id(\"album_list\")",
"url":"^http://(?:www\\.)?gumonji\\.net/cgi-bin/album_list\\.cgi",
"nextLink":"//div[@class=\"pager_next\"]/a"
},
{
"pageElement":"id(\"searchResults\")",
"url":"^http://[^.]+\\.farnell\\.com/jsp/search/results\\.jsp\\?",
"nextLink":"id(\"pages\")/ol/li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"blog\")/div[@class=\"autopagerize_page_element\"]|id(\"articletop articlebody articlebottom\")",
"url":"^http://blog\\.livedoor\\.jp/dqnplus/(?:archives|\\?p=|$)",
"nextLink":"//link[@rel=\"next\"]|//li[@class=\"prev\"]/a"
},
{
"pageElement":"id(\"main\")/div[@class=\"inner\"]",
"url":"^http://(?:www\\.)?gamemeter\\.net/(?:s|u/\\d+/gamelist)",
"nextLink":"id(\"main\")/div[@class=\"inner\"]/center/a[contains(text(),\"\u2192next\")]"
},
{
"pageElement":"//table[@class=\"n\" or .//td/a[@onmousedown]]",
"url":"^http://(?:www\\.)?baidu\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/s",
"nextLink":"//a[@class=\"nx\"] | //div[@class=\"p\"]/a[last()]"
},
{
"pageElement":"id(\"commit\")/div",
"url":"^https?://github\\.com/(?:changelog|[^/]+/[^/]+/commits)",
"nextLink":"//a[@hotkey=\"l\"]"
},
{
"insertBefore":"id(\"googlead\")",
"pageElement":"//div[@class=\"frame\"]/div[@class=\"main\"]",
"url":"^http://(?:www\\.)?gumonji\\.net/cgi-bin/beam_list\\.cgi",
"nextLink":"//div[@class=\"pager_next\"]/a"
},
{
"pageElement":"id(\"c2\")/div[@class=\"entry\" or @class=\"spacer20\"]",
"url":"^http://space\\.geocities\\.yahoo\\.co\\.jp/gl/alice0775",
"nextLink":"id(\"glnavi\")/a[contains(text(), \"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"pagination\")/preceding-sibling::p|id(\"resultTable\")/tbody/tr",
"url":"^http://(?:www\\.)?slate\\.com/(?:default\\.aspx\\?|id/)",
"nextLink":"id(\"pagination\")/span[@class=\"current_page\"]/following-sibling::a[1][not(@id=\"ViewAsSinglePage\")]|//a[@class=\"srch_nav\" and @title=\"next\"]"
},
{
"pageElement":"id(\"seihin_wrap\")",
"url":"^https?://(?:www\\.)?marutsu\\.co\\.jp/user/seihin\\.php",
"nextLink":"//a[img[@src=\"seihin_img/seihin_next.gif\"]]"
},
{
"pageElement":"id(\"main\")//div[@class=\"ymuiDotLine\"]",
"url":"^http://headlines\\.yahoo\\.co\\.jp/hl\\?a=.+\\.view-000",
"nextLink":"id(\"subNav\")/ul[@class=\"subNavPaging\"]/li[@class=\"last\"]/a"
},
{
"insertBefore":"//div[@class=\"paging\"]",
"pageElement":"//div[@class=\"search_related\" or @class=\"blog_related\"]",
"url":"^http://blog\\.search\\.goo\\.ne\\.jp/search_goo/result/",
"nextLink":"//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\u2192\"]"
},
{
"pageElement":"//table[@class=\"result\"]/tbody/tr",
"url":"^http://www2\\.kget\\.jp/releaseresult/index\\.aspx\\?d=",
"nextLink":"(//ul[contains(concat(\" \",@class,\" \"),\" fll \")][last()]/li[last()]/a[last()])[1]"
},
{
"pageElement":"//*[preceding-sibling::a[@id=\"main\"]][following-sibling::table[@class=\"graph-date\"]]",
"url":"^http://www\\.yomiuri\\.co\\.jp/photonews/photo\\.htm\\?",
"nextLink":"//td[@class=\"r\"]/a"
},
{
"pageElement":"//table[contains(\" article-table artist-table item-table \", concat(\" \", @class, \" \"))]",
"url":"^http://natalie\\.mu/(?:[^/]+/)*?(?:artist|news|pp|work)",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"block_story\")/*[not(self::h3 and position()=last())]",
"url":"^http://japan\\.zdnet\\.com/[\\w/-]+/story/[\\d,]+\\.htm",
"nextLink":"id(\"script_pagination_next\")"
},
{
"pageElement":"id(\"main\")/div[@class=\"mainBanner\"]/following-sibling::*[following-sibling::div[@class=\"trackbackurl\"]]",
"url":"^http://4koma\\.livedoor\\.com/special/[^/]+/[^/]+/\\d+/",
"nextLink":"id(\"main\")/div/ul/li[@class=\"next\"]/a"
},
{
"pageElement":"//ul[@class=\"title\"]/following-sibling::*[following::div[@class=\"pagenum\"]]",
"url":"^http://weiqi\\.sports\\.tom\\.com/php/listqipu.*\\.html",
"nextLink":"//div[@class=\"pagenum\"]/a[contains(text(),\"\u4e0b\")]"
},
{
"pageElement":"id(\"itemList\")",
"url":"^http://search\\.rakuten\\.com\\.tw/s/(?:search|paging).",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"//div[@class=\"article\"]/div[@class=\"recent-images\" or @class=\"archive-info\"]",
"url":"^http://earthobservatory\\.nasa\\.gov/IOTD/archive\\.php",
"nextLink":"//div[@class=\"article\"]/div[@class=\"archive-info\"]//li[1]/a"
},
{
"pageElement":"//table[@class='commonTables tables']",
"url":"^http://.\\d\\.3gokushi\\.jp/alliance/alliance_log\\.php",
"nextLink":"//div[@id='gray02Wrapper']/div/div/ul/li[@class='last']/a[1]"
},
{
"pageElement":"//div[@class=\"tepore_main\"]/table[@class=\"table_height\"]//table[@bgcolor=\"#fa8610\" and @width=\"550\"]",
"url":"^http://(?:www\\.)?tepore\\.com/cooking/mitsukete/list/.",
"nextLink":"//table[@class=\"page_navi_table\"]//a[last()]"
},
{
"pageElement":"//a[@class=\"buy\"]/ancestor::table[count(//a[@class=\"buy\"])=count(.//a[@class=\"buy\"])][1]",
"url":"^http://www\\.c(?:ircuitcity|ompusa)\\.com/applications/",
"nextLink":"//img[@src=\"http://images.highspeedbackbone.net/search/navbar_next.gif\"]/parent::a"
},
{
"pageElement":"id(\"normal\")/*|id(\"left\")/div[@class=\"section\"]/*",
"url":"^http://www\\.jsgoal\\.jp/(?:media|news|official|photo)/",
"nextLink":"//li[@class=\"backI\"]/a"
},
{
"pageElement":"id(\"main\")/table",
"url":"^http://(?:www\\.)?morimorisozai\\.net/photo/photo\\.php",
"nextLink":"id(\"main\")/p/b/following-sibling::a"
},
{
"pageElement":"id(\"main\")/div[@id=\"layout0\"]",
"url":"^http://ekizo\\.mandarake\\.co\\.jp/shop/ja/search.do\\?",
"nextLink":"id(\"list\")//a[normalize-space()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"id(\"sub-ranking\")/table/tbody/tr[position()>1]",
"url":"^http://puyo\\.sega\\.jp/cgi-bin/puyopuyo7/ranking\\.cgi",
"nextLink":"id(\"sub-ranking\")/ul/li[@class=\"list-next\"]/a"
},
{
"pageElement":"//div/table[1]",
"url":"^http://(?:www\\.)?net-sprout\\.com/bandstory/.+?\\.html",
"nextLink":"//a[child::img[contains(@src, \"next.gif\") or contains(@src, \"next3.gif\")] or text()=\"\u6b21\u306e\u30a8\u30d4\u30bd\u30fc\u30c9\u3078\"]"
},
{
"pageElement":"id(\"blog\")/div | id(\"content\")/div[@class=\"blog\"] | id(\"main\")/div[@class=\"column-inner\"]/div[@class=\"column-inner-2\"]",
"url":"^http://(?:blog\\.livedoor\\.jp|[^.]+\\.livedoor\\.biz)/",
"nextLink":"//div[@class=\"menu\"]/a[contains(text(),\"\u524d\u306e\u8a18\u4e8b\") or contains(text(),\"<<\")] | //a[contains(descendant::text(),\"\u6b21\u306e\u30da\u30fc\u30b8\")] | //li[@class=\"prev\"]/a"
},
{
"pageElement":"id(\"content\")/table[2]//table[(position()>2) and (position()<last()-2)]",
"url":"^http://direct\\.ips\\.co\\.jp/directsys/search\\.cfm\\?",
"nextLink":"id(\"content\")//a[contains(text(),\"\u6b21\u306e\u7d50\u679c\")]"
},
{
"pageElement":"id(\"Main\")//table[@class=\"list\"]/tbody/tr",
"url":"^https://www\\.lib\\.toyonaka\\.osaka\\.jp/licsxp-opac/",
"nextLink":"id(\"Main\")//span[@class=\"cur\"]/following-sibling::a[1]"
},
{
"pageElement":"//body/table[@class=\"mainouter\"]/tbody/tr/td[@class=\"outer\"]/table",
"url":"^http://(?:www\\.)?animecentral\\.com\\.br/browse\\.php",
"nextLink":"//b[text()=\"Next >>\"]"
},
{
"pageElement":"//div[@class=\"pageTitle\"]/following-sibling::table[1]",
"url":"^http://[^.]+\\.amazon\\.de/gp/(?:best|mo(?:st|ve)|new)",
"nextLink":"//td[@class=\"paginationCurPage\"]/following-sibling::td[2]/a"
},
{
"pageElement":"//div[contains(@class, \"main-item\")] | //div[contains(@class, \"main-content\")]/div[contains(@class, \"post\")]",
"url":"^http://www\\.warsow\\.net/forum/view(?:forum|topic)\\.",
"nextLink":"//div[contains(@id, \"brd-pagepost-end\")]/p[contains(@class, \"paging\")]/a[last()]"
},
{
"insertBefore":"//center//center/table[4]",
"pageElement":"//center//center/table[3]",
"url":"^http://(?:www\\.)?autumnleaf\\.jp/shop/show_unit\\.php",
"nextLink":"//center//center/table[4]//td[2]//a"
},
{
"pageElement":"//div[@class=\"milColumn1\"]/*",
"url":"^https://jp\\.match\\.com/search/searchsubmit\\.aspx\\?",
"nextLink":"id(\"hypNext\")"
},
{
"pageElement":"id(\"bks\")//tr[@bgcolor]/following-sibling::*[following-sibling::tr/td[@colspan]/table or position()=last() and /html/head/script]",
"url":"^http://www\\.bk1\\.jp/(?:books/s|keywordS)earchResult/",
"nextLink":"id(\"bks\")//a[text()=\"\u6b21\u3078\u2192\"]"
},
{
"pageElement":"id(\"content\")/*[(self::table and @class=\"gadget\") or (self::br and @style=\"clear: both;\")]",
"url":"^http://desktop\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/",
"nextLink":"id(\"content\")/table[@class=\"header\"]//a[contains(., \"\u00bb\")]"
},
{
"pageElement":"id('MainContainerFull')",
"url":"^http://gallery\\.live\\.com/results\\.aspx\\?bt=1&pl=1",
"nextLink":"id(\"ctl00_ContentPlaceHolder1_PageNext2\")"
},
{
"pageElement":"//p[./a/img[@src=\"image/icon5.gif\"]][1]/following-sibling::*[./following-sibling::p[./a/img[@src=\"image/icon5.gif\"]]]",
"url":"^http://cse\\.naro\\.affrc\\.go\\.jp/takezawa/r-tips/r/",
"nextLink":"//img[@src=\"image/icon5.gif\"]/parent::a[1]"
},
{
"pageElement":"//center[descendant::img]",
"url":"^http://kato-manga\\.sakura\\.ne\\.jp/.+[0-9]{2}\\.html",
"nextLink":"//a[text()=\"\u6b21\u3078\" or descendant::img[contains(@src,\"NEXT.jpg\")]]"
},
{
"pageElement":"id(\"article\")/br[@class=\"clearfix\"][1]/preceding-sibling::*",
"url":"^http://www\\.scientificamerican\\.com/article\\.cfm\\?",
"nextLink":"id(\"article\")/span[@class=\"pagination\"]/*[last()][self::a]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" sentence \")]|//div[@class=\"search_results\" or @class=\"collection\"]/*[not(@class=\"pagination\")]|//ul[contains(concat(\" \", @class, \" \"), \" user_results \") or contains(concat(\" \", @class, \" \"), \" friends \")]|id(\"blog_entries\")|id(\"list_items\")/tbody/tr",
"url":"^http://smart\\.fm/(?:goal|journal|item|sentence|user)s",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"jive-recent-content\")/div/table",
"url":"^http://blogs\\.secondlife\\.com/recent-updates.jspa\\?",
"nextLink":"//a[@class=\"jive-pagination-next\"]"
},
{
"insertBefore":"id(\"googlead\")",
"pageElement":"id(\"list\")",
"url":"^http://(?:www\\.)?gumonji\\.net/cgi-bin/bbs_list\\.cgi",
"nextLink":"id(\"main\")/div[@class=\"page2\"]/div[@class=\"pager_next\"]/a"
},
{
"pageElement":"//table[@class=\"MSP9\"][1]",
"url":"^http://(?:www\\.)?whss\\.biz/~culdds/database\\.cgi\\?",
"nextLink":"//a[text()=\"NEXT\"][1]"
},
{
"pageElement":"//ul[@class=\"list_g_simple\"]",
"url":"^http://(?:[^.]+\\.)?flash-screen\\.com/free-wallpaper/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"//table[@class=\"FixFrame\"]//tr[position()>1]",
"url":"^http://www\\.toranoana\\.jp/cgi-bin/R2/allsearch\\.cgi",
"nextLink":"//td[@class=\"DTW_td_r\"]//a[child::b[contains(text(),\">\")]][last()]"
},
{
"pageElement":"//table[@class=\"lst\"]",
"url":"^http://www1\\.axfc\\.net/uploader/[^/]+/search\\.pl\\?",
"nextLink":"id(\"main\")/p/a[text()=\"Next\"]"
},
{
"pageElement":"id(\"Main\")",
"url":"^http://www\\.asahi-net\\.or\\.jp\\/~ye5n-mrfj/journal/",
"nextLink":"descendant::link[@rel=\"prev\"]"
},
{
"pageElement":"id(\"izaListWithPaging\")/*",
"url":"^http://www\\.iza\\.ne\\.jp/(?:bookmark|izaword|voice)/",
"nextLink":"//li[@class=\"skips\"]/a[contains(., \">\")]"
},
{
"insertBefore":"id(\"box2\")/table[last()]/following-sibling::node()",
"pageElement":"id(\"box2\")/*[@class=\"comment_list\"]",
"url":"^http://www\\.otakuma\\.net/index\\.php/community/topic",
"nextLink":"id(\"box2\")/div[@class=\"topic_pager\"][last()]/b/following-sibling::a[1]"
},
{
"pageElement":"id(\"centercol\")/node()[following::img[contains(@src, \"next.gif\") or contains(@src, \"prev.gif\")]]",
"url":"^http://www\\.atmarkit\\.co\\.jp/club/print/print\\.php",
"nextLink":"//img[contains(@src, \"next.gif\")]/parent::a"
},
{
"pageElement":"id(\"searchResults\")/ul",
"url":"^https://developer\\.mozilla\\.org/[^?]+\\?.*\\bsearch=",
"nextLink":"id(\"pagePagination\")/a[last()]"
},
{
"pageElement":"id(\"contents_main\")/table",
"url":"^http://www\\.otakuma\\.net/index\\.php/event/eventlist",
"nextLink":"id(\"contents_main\")/p[(last())]/b/following-sibling::a[1]"
},
{
"pageElement":"id(\"leftColumn\")/*[(self::div and (@class=\"clear\" or @class=\"searchResults\" or contains(concat(\" \", @class, \" \"), \" videoYContainer \")) or (self::ul and @class=\"songList\")]",
"url":"^http://searchservice\\.myspace\\.com/.+(?!type=Images)",
"nextLink":"id(\"ctl00_ctl00_cpMain_Pager\")//span[@class=\"highlight\"]/following-sibling::a[1]"
},
{
"pageElement":"//table[@cellspacing=\"3\"]/following-sibling::table[position()=1]/following-sibling::table[@cellspacing=\"4\"][position()=1]/preceding-sibling::table[@cellspacing=\"0\"]",
"url":"^http://directory\\.rakuten\\.co\\.jp/rms/sd/directory/",
"nextLink":"//b[starts-with(text(), \"\u6b21\")]/parent::a"
},
{
"insertBefore":"id(\"ask_your_comment\")",
"pageElement":"id(\"m_body\")",
"url":"^http://www\\.nikkeibp\\.co\\.jp/style/biz/[^/]+/[^/]+/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"cart_list_add\")/h2[1]/following-sibling::*",
"url":"^http://www\\.yoteihyo\\.com/shop/[a-z]+/date/.+\\.html",
"nextLink":"//div[@class=\"rinkcascade\"]/a/img[@src=\"/img/next.gif\"]/.."
},
{
"insertBefore":"//div[@class=\"block-core-PeerList\"]",
"pageElement":"id(\"gsImageView\")",
"url":"^http://www\\.mccomix\\.com/members/gallery2/main\\.php",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id(\"viewer\")",
"url":"^http://(?:[^/]+\\.)?mangafox\\.com/manga/(?:[^/]+/){2}",
"nextLink":"id(\"viewer\")/a[img]"
},
{
"pageElement":"id(\"posts\")/div",
"url":"^http://ubuntuforums\\.org/showthread\\.php\\?[tp]=\\d+",
"nextLink":"//div[@class=\"pagenav\"]//a[text()=\">\"]"
},
{
"pageElement":"//table",
"url":"^http://www\\.geocities\\.jp/santaigreen/08hase-itiran/",
"nextLink":"//table//tbody//td[last()]//a"
},
{
"pageElement":"id(\"threadslist\")",
"url":"^http://www\\.akiba-online\\.com/forum/search\\.php\\?",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//div[@id=\"XbcShellBody\"]/div[@class=\"XbcProfileTableContainer\"]/table[@class=\"XbcProfileTable XbcFriendsListTable\"]",
"url":"^http://live\\.xbox\\.com/[^/]+/profile/Friends\\.aspx",
"nextLink":"//div[@id=\"XbcPag\"]/a[@class=\"XbcNP\"]"
},
{
"pageElement":"//table[@class=\"callstable\"]",
"url":"^https?://myaccount\\.voiparound\\.com/clx/calls\\.php",
"nextLink":"//table[@class=\"pagination\"]//span[@class=\"thispage\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"main_contents2\")/table",
"url":"^http://www\\.nitori-net\\.jp/shop/goods/search\\.aspx",
"nextLink":"//p[@class=\"navi\"]/a[contains(., \">\")]"
},
{
"pageElement":"id(\"ftsr_dataList\")",
"url":"^http://(?:www\\.)?seikatsusoken\\.jp/futuretimeline/.",
"nextLink":"id(\"ft_sr_top\")//li[./span[@class=\"ftsr_pnav_li_selected\"]]/following-sibling::li[1]//a"
},
{
"pageElement":"//div[@id=\"popular_tag\"]",
"url":"^http://www\\.pixiv\\.net/(?:personal_)?tags(?!.+tag=)",
"nextLink":"//div[@id=\"content3\"]//a[starts-with(text(),\"\u6b21\u306e\")][contains(@href,\"p=\")]"
},
{
"pageElement":"id(\"content\")/*",
"url":"^http://www\\.fakku\\.net/(?:manga|videos|games)\\.php",
"nextLink":"id(\"pagination\")/a[text()=\">\"]"
},
{
"pageElement":"id(\"body\")/div[@class=\"section\"]/ul[@class=\"commentlist\"]",
"url":"^https://www\\.hatena\\.ne\\.jp/shop/benefit\\.comment",
"nextLink":"id(\"body\")/p[@class=\"pager\"]/a[@rel=\"next\"]"
},
{
"pageElement":"id(\"contents\")/div[contains(@class,\"search_result_list02\") or contains(@class,\"clear_space\")]",
"url":"^https?://www\\.find-job\\.net/fj/(?:search|new)\\.cgi",
"nextLink":"id(\"contents\")//li[@class=\"foreward\"]/a"
},
{
"pageElement":"//div[@class=\"photo_sbox\"] | //div[@class=\"photo_sbox\"]/following-sibling::table[1]",
"url":"^http://www\\.otakuma\\.net/index\\.php/album/newalbum",
"nextLink":"//div[@class=\"photo_box\"]/table[last()]//td[last()]//b/following-sibling::a[1]"
},
{
"pageElement":"id(\"beta-inner\")/div[contains(concat(\" \", @class, \" \"), \" entry \")]",
"url":"^http://foo\\.secondlifeherald\\.com/slh/[^/]+/[^/]+/.",
"nextLink":"//p[@class=\"content-nav\"]/a[1 and text()!=\"Main\"]"
},
{
"pageElement":"id(\"relyingParties\")/table/tbody/tr",
"url":"^http://mixi\\.jp/openid_history\\.pl(?:\\?page=\\d+)?",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pageNavigation01 \")]//a[starts-with(text(), \"\u6b21\u3092\")]"
},
{
"pageElement":"id(\"news-body\")",
"url":"^http://natalie\\.mu/(?:(?!news/)[^/]+/)*news(?!/list)",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" btn-zoom-image \")]/a | //a[contains(text(), \"\\u6b21\\u306e\\u753b\\u50cf\")]"
},
{
"pageElement":"//p[./img]",
"url":"^http://www2d\\.biglobe\\.ne\\.jp/~ks_wca/comic/[^/]+/",
"nextLink":"//img[@src=\"nextpage.gif\" or @src=\"next.gif\"]/parent::a"
},
{
"pageElement":"//form[@class=\"productListForm\"]/div[contains(@class, \"productList01\")]",
"url":"^http://www\\.conran\\.ne\\.jp/shop/ProductSearch\\.do",
"nextLink":"//div[contains(@class, \"bottom\")]/div[@class=\"pageNavigation\"]/a[last()]"
},
{
"pageElement":"id(\"SerachList\")/table",
"url":"^http://rd?s\\.gnavi\\.co\\.jp/search/search\\.php\\?.",
"nextLink":"//a[descendant::font[contains(text(),\"\u6b21\")]]"
},
{
"pageElement":"//div[@class=\"page_full\"]",
"url":"^http://(?:[^./]+\\.)?creattica(?:\\.[^./]{2,3}){1,2}/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"insertBefore":"id(\"SnapArchiveContainer\")/node()[last()]",
"pageElement":"id(\"SnapArchiveContainer\")/div[@class=\"SnapRow\"]",
"url":"^http://www\\.fashionsnap\\.com/streetsnap/more\\.html",
"nextLink":"id(\"SnapArchiveContainer\")/div[@class=\"ArchiveNav\"]/a[contains(., \"\u6b21\")]"
},
{
"insertBefore":"id(\"ft\")",
"pageElement":"id(\"sorttable\")",
"url":"^http://admin\\.c(?:united\\.dyndns\\.org|yta\\.jp)/a/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//tr[td[@class=\"boxmidlrg\"]]",
"url":"^http://www\\.orkut\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/Main",
"nextLink":"//td[@class=\"boxmidlrg\"]/form/span/a[contains(text(), \">\")]"
},
{
"pageElement":"id(\"wordListsResults\")/div[@class=\"middleinside\" and ./h1]",
"url":"^http://www\\.mnemonicdictionary\\.com/wordlist\\.html",
"nextLink":"id(\"wordListsResults\")//img[@alt=\"Next\"]/parent::a"
},
{
"pageElement":"id(\"main\")/table",
"url":"^http://(?:kita\\.kitaa\\.net|10\\.niceboat\\.org)/10/",
"nextLink":"id(\"main\")/a[last()]"
},
{
"pageElement":"//div[@class=\"section entry\"]",
"url":"^http://[^.]+\\.tamiya-plamodelfactory\\.co\\.jp/blog/",
"nextLink":"//div[@class=\"wp-pagenavi\"]/a[starts-with(text(), \"\u6b21\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"id(\"post-list\")/div[@class=\"content\"]/div",
"url":"^http://(?:www\\.)?(?:gelbooru\\.com|safebooru\\.org)/",
"nextLink":"id(\"paginator\")//b/following-sibling::a[1]"
},
{
"pageElement":"//table[@class=\"page\"]//td[@valign=\"top\"]//tbody[contains(@id, \"collapseobj_module_\")]/tr",
"url":"^http://[^.]+\\.akiba-online\\.com/forum/main\\.php\\?",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"ContentsBlog\")/*",
"url":"^http://(?:www\\.)?pipa\\.jp/tegaki/VBlog\\d?\\.jsp\\?",
"nextLink":"id(\"ContentsBlog\")/div/table/tbody/tr/td[@class=\"Navi_P\"]/a[contains(text(),\"\u524d\u3078\")]"
},
{
"pageElement":"id(\"Center\")",
"url":"^http://sns\\.my-freedom\\.org/\\?m=pc&a=page_fh_diary",
"nextLink":"//div[contains(@class, \"parts\")]/p[@class=\"prev\"]/a[1]"
},
{
"pageElement":"//div[@class=\"searchresult\"]/ancestor::tr[1]",
"url":"^http://sketchup\\.google\\.com/3dwarehouse/search\\?",
"nextLink":"//div[@class=\"pager_next\"]/parent::a"
},
{
"insertBefore":"id(\"mainContent3\")/div[@id=\"diary_comment\"][last()]/following-sibling::node()",
"pageElement":"id(\"mainContent3\")/*",
"url":"^http://www\\.otakuma\\.net/index\\.php/diary/detail/",
"nextLink":"id(\"diary_pageing\")/table/tbody/tr/td[1]/span/a"
},
{
"insertBefore":"//div[@class=\"frame\"]/div[@class=\"main\"]/div[@class=\"page2\"]",
"pageElement":"//div[@class=\"frame\"]/div[@class=\"main\"]/ul",
"url":"^http://www\\.gumonji\\.net/cgi-bin/friend_list\\.cgi",
"nextLink":"//div[@class=\"frame\"]/div[@class=\"main\"]/div[@class=\"page2\"]/div[@class=\"pager_next\"]/a"
},
{
"pageElement":"id(\"table\")",
"url":"^http://r\\.hatena\\.ne\\.jp/(?:[^/]+/)+\\?mode=table",
"nextLink":"//a[starts-with(text(), \"<\u524d\u306e\")]"
},
{
"pageElement":"//table/tbody/tr[td[@background=\"http://i.yimg.jp/images/comics/free_magazine/list_bk_t_a.gif\"]]/following-sibling::tr",
"url":"http://comics.yahoo.co.jp/magazine/\\\\w+_\\\\d+.html",
"nextLink":"//a[contains(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"//table/tbody/tr/td/table[@class=\"p\"]",
"url":"^http://pixivrank\\.net/ht2?/tag[0-9]+/p[0-9]+\\.html",
"nextLink":"//table/tbody/tr/td/p/a[contains(text(),\"\u6b21\u306e\u30da\u30fc\u30b8\u2192\")]"
},
{
"pageElement":"//table[@class=\"table\"]",
"url":"^http://(?:www\\.)?kakakuportal\\.com/search\\.php\\?",
"nextLink":"//a[descendant::img[@src=\"images/button_next.gif\"]]"
},
{
"pageElement":"id(\"tr-maincontent2\")/div",
"url":"^http://(?:www\\.)?4travel\\.jp/traveler/[^/]+/album/",
"nextLink":"(//li[contains(concat(\" \", @class, \" \"), \" linkend \")][last()]/a[last()])[last()]"
},
{
"pageElement":"id(\"right\")",
"url":"^http://bookweb\\.kinokuniya\\.co\\.jp/guest/cgi-bin/",
"nextLink":"id(\"right\")/div[@class=\"page-list\"]/div[@class=\"page-pw\"]/a"
},
{
"pageElement":"id(\"contents\")/table[.//a[@class=\"sLink\"]]/following-sibling::table[./following-sibling::table[.//a[@class=\"sLink\"]]]",
"url":"^http://(?:www\\.)?junkudo\\.co\\.jp/search2\\.jsp\\?",
"nextLink":"id(\"contents\")/descendant::a[contains(., \"\u6b21\u306e\")][1]"
},
{
"pageElement":"//table[@align=\"center\"]",
"url":"^http://wordgear\\.x0\\.com/.*diary\\.cgi\\?mode=view",
"nextLink":"//a[text()=\"\u6b21\u3078\u9032\u3080\u2191\"]"
},
{
"pageElement":"//table[@cellspacing=\"5\"]",
"url":"^http://www\\.e-tomcat\\.com/shop/(?:category|goods)/",
"nextLink":"//a[normalize-space()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"id(\"dle-content\")/div[@class=\"list\"]|id(\"threadslist\")/tbody/tr|id(\"lastpost\")/preceding-sibling::*",
"url":"^http://www\\.freshwap\\.net/(?:forums|torrents/sub)/",
"nextLink":"id(\"pagination\")/ul/li[./a[@class=\"active\"]]/following-sibling::li[1]/a|//a[@rel=\"next\"]"
},
{
"pageElement":"//div[contains(@class, \"blog_list\") or contains(@class, \"photo_pickup_page\")]",
"url":"^http://[^.]+\\.areablog\\.jp/page_(?:img|list)\\.asp",
"nextLink":"//div[contains(@class, \"post_list_table\")]/div[last()]//a[preceding-sibling::font[@color=\"red\"] or text()=\"\u6b21\u3078\"]"
},
{
"insertBefore":"//div[@class=\"mainfloatleft\"]",
"pageElement":"id(\"maincontents02\")/ul[@class=\"ulnewsmore\" or @class=\"uleventmore\"]",
"url":"^http://www\\.chuo-u\\.ac\\.jp/chuo-u/(?:news|event)/",
"nextLink":"//div[@class=\"mainfloatright\"]/a[text()=\"\u6b21\u306e10\u4ef6>>\"]"
},
{
"pageElement":"id(\"BodyBlockMain\")/div[@class=\"contentsHeader\" or @class=\"contents\" or @class=\"contentsFooter\"]",
"url":"^http://minkara\\.carview\\.co\\.jp/userid/\\d+/blog/",
"nextLink":"id(\"BodyBlockMain\")/div[@class=\"paging\"]/a[contains(., \">\")]"
},
{
"pageElement":"(//div[contains(@class,\"navigation\")])[last()]/preceding-sibling::*[not(contains(@class,\"navigation\"))]",
"url":"^http://mitpress\\.mit\\.edu/sicp/full-text/book/book",
"nextLink":"//div[contains(@class,\"navigation\")]/span/a[starts-with(text(),\"next\")]"
},
{
"pageElement":"id(\"Plistbar\")/following-sibling::div[contains(concat(\" \", @class, \" \"), \" productBlock \") or @id=\"specialtab\"]",
"url":"^http://www\\.bhphotovideo\\.com/c/(?:buy/|search\\?)",
"nextLink":"id(\"PquickJump\")/div/span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"page\")/div[@class=\"page_inner\"]/div[@id]",
"url":"^http://(?:ae|audio|net|psd|vector)\\.tutsplus\\.com/",
"nextLink":"id(\"page\")/div[@class=\"page_inner\"]/div[@class=\"wp-pagenavi\"]/span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"fpost\"]",
"url":"^http://my\\.opera\\.com/community/forums/topic\\.dml",
"nextLink":"//p[@class=\"pagenav\"]/a[last() and @class=\"nxt\"]"
},
{
"insertBefore":"id(\"mainContent4\")/div[@id=\"diary_comment\"][last()]/following-sibling::node()",
"pageElement":"id(\"mainContent4\")/*",
"url":"^http://www\\.otakuma\\.net/index\\.php/album/detail/",
"nextLink":"id(\"diary_pageing\")/table/tbody/tr/td[1]/span/a"
},
{
"pageElement":"id(\"main\")/*",
"url":"^http://transit\\.map\\.yahoo\\.co\\.jp/search/result",
"nextLink":"id(\"main\")/dl[contains(concat(\" \", @class, \" \"), \" page-navi \")]/dd/a[starts-with(text(), \"\u6b21\u306e\")]"
},
{
"pageElement":"//table[@class=\"topiclist\"]",
"url":"^http://my\\.opera\\.com/community/forums/forum\\.dml",
"nextLink":"//p[@class=\"pagenav\"]/a[last() and @class=\"nxt\"]"
},
{
"pageElement":"//div[@class=\"article\"] | //noindex[following-sibling::div[@class=\"article\"] or preceding-sibling::div[@class=\"article\"]]",
"url":"^http://earthobservatory\\.nasa\\.gov/IOTD/view\\.php",
"nextLink":"//div[@class=\"article\"]/div[@class=\"image-navigation\"]/noindex[last()]/a"
},
{
"pageElement":"//div[@class=\"fileinfo\" or @class=\"fileinfo_odd\"]",
"url":"^http://www\\.(?:nyhash|sharedb)\\.info/index\\.php/.",
"nextLink":"//a[contains(text(),\"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"//div[@class=\"st_body\"]",
"url":"^http://owarai\\.variety\\.yahoo\\.co\\.jp/[qa]/list/",
"nextLink":"//p[@class=\"prenxt\"]/a[last()]"
},
{
"insertBefore":"//td[@class=\"zh\"]/../../../../*/following-sibling::node()[last()]",
"pageElement":"//td[@class=\"zh\"]/../../..",
"url":"^http://news\\.baidu\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/ns",
"nextLink":"//div[@class=\"pg\"]/a[last()][child::font]"
},
{
"pageElement":"//div[@class=\"commentlinks\"]",
"url":"^http://\\w+\\.engadget\\.com/\\d{4}/\\d{2}/\\d{2}/.+",
"nextLink":"id(\"cmt_paging\")/strong/following-sibling::a[1]"
},
{
"pageElement":"id(\"detailNews\")",
"url":"^http://dailynews\\.yahoo\\.co\\.jp/.+?/news_list/\\?",
"nextLink":"id(\"mainMargin\")/div[@class=\"pagelinkArea clr\"]/ul/li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"mainContent\")//table[@class=\"diary\"]",
"url":"^http://www\\.otakuma\\.net/index\\.php/diary/mydiary",
"nextLink":"id(\"diary_pageing_home\")/table/tbody/tr/td[last()]/span/b/following-sibling::a[1]"
},
{
"pageElement":"//table[@class=\"txt12\" and @width=\"608\"]",
"url":"^http://www\\.starchild\\.co\\.jp/artist/horie/diary/",
"nextLink":"//td[@bgcolor=\"#ffffff\"]/text()[not(normalize-space()=\"\")]/following-sibling::a[1]"
},
{
"pageElement":"id(\"result-body\")|id(\"result-body\")/following-sibling::div[@class=\"clear-dot-line\"][1]",
"url":"^http://www\\.tokyo-calendar\\.tv/dining/search\\.php",
"nextLink":"id(\"page_navi-next\")/a"
},
{
"pageElement":"//img[@alt=\"pixel\"][@height=\"1\"]/preceding-sibling::table/following-sibling::*",
"url":"^http://www\\.amazon\\.co\\.jp/gp/cdp/member-reviews/",
"nextLink":"//td[@class=\"small\"][@align=\"right\"]/b/child::text()[string()!=\" | \"][2]/following-sibling::a|//td[@class=\"small\"][@align=\"right\"]/b/a[position()=text()-1]"
},
{
"pageElement":"//hr[2]/following-sibling::*[ following::hr[last()] ]",
"url":"^http://www\\.cs\\.cmu\\.edu/Groups/AI/html/cltl/clm/",
"nextLink":"//img[@alt=\"next\"]/.."
},
{
"pageElement":"id(\"content-body-inner\")/div[last()]/div[@class=\"books\"]",
"url":"^http://stack\\.nayutaya\\.jp/(?:user/[^/]+/)?author/",
"nextLink":"//div[@class=\"pagination\"]/span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"listc\"]/*[not(self::p)]",
"url":"^http://www\\.ebest\\.co\\.jp/shop/goods/goods\\.asp",
"nextLink":"//a[contains(text(), \"\u6b21\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"id(\"gsThumbMatrix\")/tbody/tr",
"url":"^http://imagebase\\.davidniblack\\.com/main\\.php\\?",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"//div[@class=\"nwbody\"]/node()[not(descendant::*[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\") or contains(text(), \"\u524d\u306e\u30da\u30fc\u30b8\")])]",
"url":"^http://news\\.goo\\.ne\\.jp/(?:article|topstories)/",
"nextLink":"//a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]|id('incontents')/descendant::a[contains(text(), '\u7d9a\u304d\u3092\u8aad\u3080')][1]"
},
{
"pageElement":"//form[contains(text(), \"\u753b\u50cf\u30bf\u30a4\u30c8\u30eb\")]/node()[following::input[@value=\"\u524a\u9664\"]]",
"url":"^http://sylphys\\.ddo\\.jp/upld2nd/[^/]+/[^.]+\\.htm",
"nextLink":"descendant::form[last()]"
},
{
"pageElement":"id(\"CenterCntBox\")//table[starts-with(@class, \"DispListTable\")]",
"url":"^http://www\\.edion\\.com/(?:disp/)?CSfDispListPage_",
"nextLink":"id(\"CenterCntBox\")//a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8 >>\")]"
},
{
"pageElement":"id(\"main\")/div",
"url":"^http://latlonglab\\.yahoo\\.co\\.jp/macro/list\\.rb",
"nextLink":"//div[@class=\"contents\"]/a[last()]"
},
{
"pageElement":"id(\"mainContents\")rn",
"url":"^http://www\\.ventforet\\.co\\.jp/vfkblog/dailyblog/",
"nextLink":"//p[contains(concat(\" \",normalize-space(@class),\" \"), \" alCenter \")]/a[contains(text(), \"\u00ab\")]rn"
},
{
"pageElement":"//div[@class=\"section\"]/div[@class=\"section\"]",
"url":"^http://return0\\.dyndns\\.org/log/[^/]+/[^/]+/[^/]+",
"nextLink":"id(\"navigation\")/p/a[text()=\"<<\"]"
},
{
"pageElement":"//h1/following-sibling::div[./table]",
"url":"^http://ordermade\\.net/con/(?:sample|cr)_list\\.cgi",
"nextLink":"//img[@src=\"./image/next.gif\"]/parent::a"
},
{
"pageElement":"//div[@class=\"list-content\"]",
"url":"^http://(?:list|search[^.]*)\\.taobao\\.com/browse/.",
"nextLink":"//a[@class=\"page-next\"]"
},
{
"pageElement":"id(\"articlebody\")",
"url":"^http://kuraki\\.livedoor\\.jp/archives/[^.]+\\.html",
"nextLink":"//div[@class=\"menu\"]/a[starts-with(text(),\"\u524d\")]"
},
{
"pageElement":"id(\"contentmid\")/div[@class=\"artikel\"]/*[not(@id=\"contentUntereGrenze\")]",
"url":"^http://(?:www\\.)?hbe-shop\\.de/katalog/index\\.php",
"nextLink":"id(\"contentUntereGrenze_links\")//a[@class=\"seitenzahl\" and contains(text(),\"weiter\")]"
},
{
"pageElement":"id(\"body\")/div",
"url":"^http://shimmie\\.shishnet\\.org/v2/post/list(?:/|$)",
"nextLink":"//p[@class=\"paginator\"]/b/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"PostContent\"]",
"url":"^http://www\\.actionscript\\.org/resources/articles/",
"nextLink":"//div[@class=\"ArtNavLeft\"]/span/following-sibling::a[1]"
},
{
"pageElement":"id(\"intelliTxt\")//table[@class=\"narrow_listheadings_issk\" or @class=\"narrow_listheadings\"] | id(\"intelliTxt\")//div[@class=\"skres_notice\"]",
"url":"^http://(?:\\w+\\.)?softpedia\\.com/dyn-search\\.php",
"nextLink":"id(\"cse-search-box\")/preceding-sibling::a[contains(., \">>\")]"
},
{
"pageElement":"id(\"sr-con-inn\")/ul",
"url":"^http://(?:search\\.)?videotopics\\.yahoo\\.co\\.jp/",
"nextLink":"id(\"yschnxtb\")/a"
},
{
"insertBefore":"//table[@cellpadding=\"2\"][@cellspacing=\"2\"][@width=\"100%\"][last()]",
"pageElement":"//table[@cellpadding=\"2\"][@cellspacing=\"1\"][@width=\"100%\"]",
"url":"^http://(?:www\\.)?warez-bb\\.org/viewforum\\.php\\?",
"nextLink":"//a[text()=\"Next\"]"
},
{
"pageElement":"id(\"maincol\")/div[@class=\"content\"]",
"url":"^http://gigazine\\.net/index\\.php\\?/news/comments/",
"nextLink":"id(\"maincol\")//*[contains(text(), \"\u524d\u306e\u8a18\u4e8b:\")]/a"
},
{
"pageElement":"//span[@class=\"listshopname\"]/ancestor::table[parent::div[@class=\"main\"]]/tbody/tr/td/table/tbody/tr",
"url":"^http://g\\.pia\\.co\\.jp/front/contents/pseosearch/",
"nextLink":"//span[@class=\"listlink\"]/strong/following-sibling::a[1]"
},
{
"pageElement":"id(\"pageElement\")",
"url":"https?://[^.]+\\.latest\\.aipo-live\\.appspot\\.com/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"content\")//h1/following-sibling::*[./following-sibling::div[@align=\"center\"]]",
"url":"^http://(?:www\\.)?filehippo\\.com/(?:[^/]+/)?latest",
"nextLink":"id(\"content\")//h1/following-sibling::div[@align=\"center\"]/b[not(./a)]/following-sibling::a[1]"
},
{
"pageElement":"id(\"rightContents\")/div[contains(@class,\"contentsBox\")]",
"url":"^http://search\\.books\\.rakuten\\.co\\.jp/bksearch/",
"nextLink":"id(\"yajirushi\")"
},
{
"pageElement":"id(\"left\")/div[@class=\"leaderboard\"]/div[@class=\"content\"]/*",
"url":"^http://www\\.mygamercard\\.net/leaderboard\\.php\\?",
"nextLink":"id(\"left\")//div[@class=\"rightColumn\"]/a"
},
{
"pageElement":"//form[@action=\"/bare/vote.html\"]",
"url":"^http://musicbrainz\\.org/mod/search/results\\.html",
"nextLink":"//a[@title=\"Go to next page\"]"
},
{
"pageElement":"id(\"meisai\")",
"url":"^http://www\\.irisplaza\\.co\\.jp/Index\\.asp\\?KB=",
"nextLink":"id(\"contents\")//a[img[@src=\"img/item_next.gif\"]]"
},
{
"pageElement":"id(\"maincontents\")/div/div[@class=\"entry\"]",
"url":"^http://(?:www\\.)?motordays\\.com/newcar/articles/",
"nextLink":"id(\"maincontents\")//a[contains(@class,\"nextpage\")]"
},
{
"pageElement":"id(\"tcmainlay\")",
"url":"^http://[^.]+\\.ap\\.teacup\\.com/[^/]+/\\d+\\.html",
"nextLink":"//div[@class=\"nextpage\"]/a[last()]"
},
{
"pageElement":"id(\"gameList\")",
"url":"^http://(?:www\\.)?freegame\\.on\\.arena\\.ne\\.jp/",
"nextLink":"id(\"contents\")/div[@class=\"pageNavi\"]/a[@class=\"link_next\"]"
},
{
"pageElement":"//table//table//table//table[2]",
"url":"^http://(?:www\\.)?reloadbags\\.com/bags/list\\.php",
"nextLink":"//p/a[preceding-sibling::strong][1]"
},
{
"pageElement":"//div[@class=\"gradient\"]",
"url":"^http://(?:www\\.)?smileycat\\.com/design_elements/",
"nextLink":"//p[@class=\"paginate\"]/a[contains(., \"Next\")]"
},
{
"pageElement":"(//*[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"])[1]/ancestor::table[1]/following-sibling::table[1]",
"url":"^http://biz\\.yahoo\\.co\\.jp/stockholder/search\\?",
"nextLink":"//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"id(\"web\")/ol",
"url":"^http://custom\\.search\\.yahoo\\.co\\.jp/search\\?",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"revisions\")//tr",
"url":"^http://(?:[^.]+\\.)?jottit\\.com/[^?]+\\?m=history",
"nextLink":"id(\"pagination\")/strong/a[text()=\"Next\"]"
},
{
"pageElement":"//ul[@class=\"image-list\"]",
"url":"^http://serif\\.hatelabo\\.jp/serif_generator/image",
"nextLink":"(//a[contains(concat(\" \", @class, \" \"), \" pager-next \")][last()])[last()]"
},
{
"pageElement":"id(\"body\")/*[not(@id=\"article-mpu-container\" or @id=\"nextpage\")]|id(\"search-body\")/div[@class=\"story-list\"]/div[@class=\"story-ref\"]",
"url":"^http://(?:search|www)\\.channelregister\\.co\\.uk/",
"nextLink":"id(\"nextpage search-next\")/a"
},
{
"insertBefore":"//table[@cellpadding=\"7\"]/following-sibling::node()",
"pageElement":"//table[@cellpadding=\"7\"]",
"url":"^http://(?:www\\.)?netkeiba\\.com/news/.+backnumber",
"nextLink":"//div[@align=\"center\"]/a[last()]"
},
{
"pageElement":"//table[@bgcolor=\"#009999\"]",
"url":"^http://(?:www\\.)?utamap\\.com/searchkasi\\.php\\?",
"nextLink":"/descendant::a[contains(text(), \">>>\")][last()]"
},
{
"insertBefore":"//div[contains(@class, \"footer\")]",
"pageElement":"//div[contains(@class, \"main\")]",
"url":"^http://ninjin[^.]*\\.x0\\.com/wolf[^/]*/index\\.rb",
"nextLink":"//div[contains(@class, \"main\")]/a[last()]"
},
{
"pageElement":"//table[@class=\"tlist\"]",
"url":"^http://(?:(?:www|sukebei?)\\.)?nyaatorrents\\.org/",
"nextLink":"//tr[@class=\"pages\"]/td/a[text()=\">\"]"
},
{
"pageElement":"//tr",
"url":"^http://www2\\.jasrac\\.or\\.jp/eJwid/main\\.jsp\\?",
"nextLink":"//a[descendant::img[@src=\"img/nextArrowOn.png\"]]"
},
{
"insertBefore":"id(\"leftRes\")//div[@class=\"pg\"]",
"pageElement":"id(\"leftRes\")/table[@class=\"list\"]",
"url":"^http://mp3\\.baidu\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/m",
"nextLink":"id(\"leftRes\")//div[@class=\"pg\"]/a[last()][child::font]"
},
{
"pageElement":"//dl/../node()[self::dl or position()=last()]",
"url":"^http://(?:[^.]+\\.)*pksp\\.jp/[^/]+/t?bbs\\.cgi\\?",
"nextLink":"//a[@accesskey=\"3\"]"
},
{
"pageElement":"id(\"columnA_2columns\")/*[self::div[contains(@class,\"thumbnail\")] or self::br]",
"url":"^http://www\\.freecsstemplates\\.org/css-templates/",
"nextLink":"id(\"columnA_2columns\")/div[@class=\"pager\"]/a[last()]"
},
{
"pageElement":"id(\"result_box\")",
"url":"^http://jp\\.misumi-ec\\.com/ec/CategorySearchView/",
"nextLink":"id(\"pagerNext_0\")"
},
{
"pageElement":"//div[@class=\"result\"]",
"url":"^http://www\\.appbrain\\.com/(?:browse/|search\\?)'",
"nextLink":"//div[@class=\"paging\"]/span/following-sibling::a[1]"
},
{
"pageElement":"id(\"content\")/*[(self::h2 and @class=\"ishinfo\") or (self::div and @class=\"item\")]|id(\"results\")",
"url":"^http://www\\.alistapart\\.com/(?:articles|search)/",
"nextLink":"id(\"content\")/a[contains(., \"Next\")]|id(\"content\")/div[@class=\"pages\"]/strong/following-sibling::a[1]"
},
{
"pageElement":"id(\"container\")/div[contains(concat(\" \", @class, \" \"), \" featured \")]",
"url":"^http://eniyilogo\\.com/(?:category/)?logo-tasarim/",
"nextLink":"//a[@rel=\"prev\" or @class=\"nextpostslink\"]"
},
{
"pageElement":"id(\"mainColumn\")//div[@class=\"photo-detail\"]/img",
"url":"^http://news\\.livedoor\\.com/article/image_detail/",
"nextLink":"id(\"mainColumn\")//li[@class=\"link-next\"]/a"
},
{
"pageElement":"id(\"right\")/div[@class=\"gallery\"]",
"url":"^http://(?:www\\.)?public-domain-photos\\.com/[^/]+",
"nextLink":"(//div[contains(concat(\" \", @class, \" \"), \" navigation \")]/a[last()])[last()]"
},
{
"pageElement":"id(\"contentsArea\")/table[@class=\"textBlock\"]/tbody/tr",
"url":"^http://www\\.nintendo\\.co\\.jp/ir/library/events/",
"nextLink":"//a[contains(text(),\"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"insertBefore":"//td[@width=\"540\" and @align=\"center\"]/ancestor::table[last()]/following-sibling::node()[1]",
"pageElement":"//td[@width=\"540\" and @align=\"center\"]/ancestor::table[last()]",
"url":"^http://portal\\.nifty\\.com/special\\d+/\\d+/\\d+/",
"nextLink":"//td[@width=\"540\" and @align=\"center\"]//a[contains(string(.),\"\uff1e\")]"
},
{
"pageElement":"id(\"content-body-inner\")/div[@class=\"books\"]",
"url":"^http://stack\\.nayutaya\\.jp/user/[^/]+/books/\\w+",
"nextLink":"id(\"content-body-inner\")/div[@class=\"pagination\"]/a[last()]"
},
{
"pageElement":"id(\"comments view_topic\")",
"url":"^http://www\\.fakku\\.net/view(?:manga|topic)\\.php",
"nextLink":"id(\"more_comments_pag bot_right_bot\")/a[last()]"
},
{
"pageElement":"//div[table/descendant::td[@class=\"sqtdq\"]]",
"url":"^http://(?:[^.]+\\.)?thinkexist\\.com/quotes/[^/]+/",
"nextLink":"//a[img[contains(@src,\"paging/next.gif\")]]"
},
{
"pageElement":"id(\"main\")/div[@class=\"general_partsreview\"]/table",
"url":"^http://minkara\\.carview\\.co\\.jp/(?:note|parts)/",
"nextLink":"id(\"_ctl0_CPH1_Unit1_UnitList1_Pager1_lnkNext\")"
},
{
"pageElement":"id(\"threadlist postlist\")",
"url":"^https?://.+/(?:forum|thread-\\d+)-\\d+-\\d+\\.html",
"nextLink":"//div[@class=\"pages\"]/a[@class=\"next\"]"
},
{
"pageElement":"//div[@class=\"aw_tb\"] | //p[@class=\"rev\"] | //div[@class=\"bd\"]",
"url":"^http://info\\.movies\\.yahoo\\.co\\.jp/userreview/",
"nextLink":"//p[@class=\"flR\" and position()=3]/a[text()=\"\u6b21\u306e10\u4ef6\"]"
},
{
"pageElement":"id(\"mnc\")",
"url":"^http://autos\\.yahoo\\.co\\.jp/ncar/review/report/",
"nextLink":"//div[contains(@class, \"yaut-md01\")]/p/a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"descendant::table[contains(concat(\" \",normalize-space(@class),\" \"),\" scripts \") or contains(concat(\" \",normalize-space(@class),\" \"),\" users \")]",
"url":"^http://(?:beta\\.)?wescript\\.net/(?:script|user)s",
"nextLink":"descendant::a[contains(concat(\" \",normalize-space(@class),\" \"),\" next_page \")]"
},
{
"pageElement":"descendant::*[.//span[@class=\"AUTHOR\"] and .//*[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]][last()]/*[not(.//a[text()=\"\u30ed\u30b0\u30a4\u30f3\"]) and following-sibling::*/descendant-or-self::*[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]]",
"url":"^http://(?:blog\\.excite\\.co|[^.]+\\.exblog)\\.jp/",
"nextLink":"//a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"//tr[td[@id=\"TDlink\"] and position()>1]",
"url":"^http://(?:www\\.)?loadingvault\\.com/search\\.php",
"nextLink":"//a[text()=\">\"]"
},
{
"pageElement":"id(\"ismList_02\")/*|//div[@class=\"kiji500\"]",
"url":"^http://(?:www\\.)?excite\\.co\\.jp/ism/concierge/",
"nextLink":"//div[@class=\"pagelinks\" or @class=\"next\"]//strong/following-sibling::a[1]"
},
{
"pageElement":"//td[@class=\"border-top\"]/ancestor::tbody[1]/tr",
"url":"^http://posren\\.livedoor\\.com/(?:power_)?search/",
"nextLink":"id(\"pagingNext\")"
},
{
"pageElement":"//table[@class=\"userTable\" or @class=\"memberTable\"]/tbody/tr",
"url":"^http://riro\\.jp/comment/(list|image|flag)\\.html",
"nextLink":"//a[@class=\"navi\" and starts-with(text(),\"\u6b21\")]"
},
{
"pageElement":"//div[@class=\"comic\"]",
"url":"^http://(?:www\\.)?dominic-deegan\\.com/view\\.php",
"nextLink":"id(\"bottom\")//li/a[img[@alt=\"Next\"]]"
},
{
"pageElement":"id(\"content\")//div[@class=\"imgtable\"]/*",
"url":"^http://search\\.www\\.infoseek\\.co\\.jp/Image\\?",
"nextLink":"id(\"pagenavi\")/a[@class=\"next-url\"]"
},
{
"pageElement":"//table[@class=\"reader\"]",
"url":"^http://(?:[^.]+\\.)?mangatoshokan\\.com/read/[^/]",
"nextLink":"//td[@class=\"rpage\"]/a[img]"
},
{
"pageElement":"id(\"resultpg\")/ul",
"url":"^http://search\\.microsoft\\.com/Results\\.aspx\\?",
"nextLink":"//li[@class=\"nxt\"]/a"
},
{
"pageElement":"(id(\"content\")//table[descendant::div[@class=\"date-stamp\"]])[last()]",
"url":"^http://blog\\.trendmicro\\.co\\.jp/{1,2}archives/",
"nextLink":"id(\"content\")//a[img[@alt=\"\u6b21\u306e\u30da\u30fc\u30b8\u3078\"]]"
},
{
"pageElement":"//html/body/table",
"url":"^http://syosetu\\.com/pc/main\\.php.*ncode=.*novel",
"nextLink":"//a[contains(text(), \"NEXT\")]"
},
{
"pageElement":"id(\"maincontent\")/*[position() > 1 and position() < 4]",
"url":"^http://yourfilehost-browser\\d?\\.opal\\.ne\\.jp/",
"nextLink":"//a[contains(@title,\"Go to Next Page\")]"
},
{
"pageElement":"id(\"ZSEARCH_ZR_home-searccolumn-searchlist\")",
"url":"^http://zozo\\.jp/_search/search_result\\.html\\?.",
"nextLink":"id(\"ZSEARCH_ZR_home-searccolumn-searchpage-all2\")/a[contains(text(),\"\u6b21\u306e\")]"
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
"pageElement":"id(\"content\")/*",
"url":"^http://www\\.fileformat\\.info/info/unicode/char/",
"nextLink":"//a[img[contains(@src, \"vcrforward.png\")]]"
},
{
"pageElement":"//div[@class=\"jive-search-results\"]/ol",
"url":"^http://forums\\.oracle\\.com/forums/search\\.jspa",
"nextLink":"//a[text()=\"Next\"]"
},
{
"pageElement":"//center",
"url":"^http://(?:www\\.)?big-men\\.net/face/joyful\\.cgi",
"nextLink":"//td/b/following-sibling::a[1]"
},
{
"pageElement":"//div[contains(@class, \"CommentList\")]",
"url":"^http://(?:www\\.)?pipa\\.jp/techan/VThreadComment",
"nextLink":"//div[contains(@class, \"PageBar\")]//a[last()-1]"
},
{
"pageElement":"id('content')/div[@class=\"post\"]",
"url":"^http://tumblr\\.inucara\\.net/(?:page/|search/|$)",
"nextLink":"id('footer')/a[contains(text(), \"Next\")]"
},
{
"pageElement":"id(\"content\")//div[@class=\"entry-more\"]//tr",
"url":"^http://www\\.moeyo\\.com/\\d+/\\d+/_no\\d+\\.html",
"nextLink":"//a[descendant::img[@src=\"http://www.moeyo.com/blogparts/go.gif\"]]"
},
{
"pageElement":"id(\"novel_view\")/node()|//div[@class=\"searchkekka_box\"]",
"url":"^http://(?:mnlt|n(?:code|ovel18))\\.syosetu\\.com/",
"nextLink":"//a[@rel=\"next\" or @class=\"nextlink\"]"
},
{
"pageElement":"//center/table[@width=\"94%\"]",
"url":"^http://www\\.network54\\.com/Forum/47210/thread/.",
"nextLink":"//a[text()=\"Next Topic >>\"]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" paragraph \")]/node()|id(\"searchListNarrow\")/*",
"url":"^http://www\\.computerbild\\.de/(?:artikel|suche)/",
"nextLink":"//div[@class=\"next\"]/a"
},
{
"pageElement":"id(\"resultpg\")/ul",
"url":"^http://search\\.microsoft\\.com/results\\.aspx\\?",
"nextLink":"id(\"resultpg\")/div/ul/li[@class=\"nxt\"]/a"
},
{
"pageElement":"id(\"aspnetForm\")/table",
"url":"^http://(?:www\\.)?designlinkdatabase\\.net/datas/",
"nextLink":"id(\"_ctl0_cphMain_lnkNext2\")"
},
{
"pageElement":"id(\"main_area\")/div[contains(@class, \"movie_block\")]",
"url":"^http://(?:beta\\.)?nantokadoga\\.com/search\\.php",
"nextLink":"//div[@class=\"paging\"]/a[not(following-sibling::a)]"
},
{
"pageElement":"//div[@class=\"blog\"]",
"url":"^http://(?:www\\.)?socialnetworking\\.jp/archives/",
"nextLink":"id(\"menu\")/a[1]"
},
{
"pageElement":"id(\"gray02Wrapper\")/table[@class=\"commonTables\"]",
"url":"^http://[ps]\\d+\\.3gokushi\\.jp/user/status\\.php",
"nextLink":"id(\"gray02Wrapper\")/ul[@class=\"pager\"]/li[@class=\"last\"]/a[1]"
},
{
"pageElement":"//div[contains(@class,\"trivial\")]",
"url":"^http://sea-mew\\.jp/nox/modules/webarc/2ch/[^/]+/",
"nextLink":"//a[contains(text(),\"\u6b21\u3078\")]"
},
{
"pageElement":"//img[@src=\"images/title.gif\"]/ancestor::table[1]/following-sibling::*",
"url":"^http://media\\.excite\\.co\\.jp/book/news/topics/",
"nextLink":"//a[./img[contains(@src, \"images/topics_next.gif\")]]"
},
{
"pageElement":"//div[contains(@class,\"post_table\")]/../node()[self or following-sibling::br or following-sibling::script]",
"url":"^http://[^.]+\\.areablog\\.jp/blog/[^/]+/.+\\.html",
"nextLink":"id(\"blog_right\")/div[last()]//a[preceding-sibling::font[@color=\"red\"] or text()=\"\u6b21\u3078\"]"
},
{
"insertBefore":"id(\"page-body\")/div[@class=\"topic-actions\"][2]",
"pageElement":"id(\"page-body\")/div[starts-with(@class, \"post\")]",
"url":"^http://forums\\.mozillazine\\.org/viewtopic\\.php",
"nextLink":"//a[starts-with(@href, \"./viewtopic.php\") and text()=\"Next\"]"
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
"pageElement":"id(\"posts\")/*[starts-with(@id, \"edit\")]",
"url":"^http://(?:www\\.)?tarfandestan\\.com/forum/thread",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//ul[@class=\"linkedimglinkabslist1\"]/li",
"url":"^http://topics\\.jp\\.msn\\.com/photo/index\\.aspx",
"nextLink":"id(\"topicslstpagelinkbottom\")/ul/li[@class=\"last\" and last()]/a"
},
{
"pageElement":"id(\"page-body\")//ul[contains(concat(\" \",@class,\" \"), \" topics \")]",
"url":"^http://forums\\.mozillazine\\.org/viewforum\\.php",
"nextLink":"id(\"page-body\")//a[contains(concat(\" \",@class,\" \"), \" right \")]"
},
{
"pageElement":"id(\"listLeft\") | //div[@class=\"eventinfo\"]",
"url":"^http://event\\.jr-odekake\\.net/(?:sights|walk)/",
"nextLink":"//a[contains(text(), \"\u6b21\u3078\")]"
},
{
"pageElement":"//div[contains(concat(\" \",normalize-space(@class),\" \"), \" post \")]",
"url":"^http://www\\.optimagraphics\\.org/dannna_o/blog/",
"nextLink":"//a[contains(text(), \"\u00ab Older Entries\")]"
},
{
"pageElement":"//div[@class=\"results\"]/table",
"url":"^http://search\\.nttdocomo\\.co\\.jp/query\\.html",
"nextLink":"//a[last()][descendant::img[@src=\"http://www.nttdocomo.co.jp/images/mark/arrow_right_normal.gif\"]]"
},
{
"pageElement":"id(\"article_body\")/*[not(@id=\"notice\" or contains(@class, \"ctrl\") or contains(@class, \"endkwd\") or contains(@class, \"endlink\") or descendant::*[@id=\"red\" and contains(@class, \"box\")] )] | id(\"update\")/following-sibling::*[not(self::iframe or self::noscript or self::h1 or self::h2 or self::h5)][not(@id=\"articleIcon\" or @id=\"artHead\" or @id=\"notice\" or @id=\"byline\" or contains(@class, \"heading1\") or contains(@class, \"heading2\") or contains(@class, \"ctrl\")  or contains(@class, \"btnlist\") or contains(@class, \"endkwd\") or contains(@class, \"endlink\") )][following::*[@class=\"ctrl\"]]",
"url":"^http://[^/]+\\.itmedia\\.co\\.jp/[^/]+/articles/",
"nextLink":"id(\"next\")/a"
},
{
"pageElement":"//div[@class=\"forum_content_main\"]",
"url":"^http://www\\.mobile01\\.com/topicdetail\\.php\\?",
"nextLink":"//a[@class=\"page\"][contains(., \"\u4e0b\u4e00\")]"
},
{
"insertBefore":"//div[@id=\"pages_btns\"]",
"pageElement":"//div[@class=\"mainbox threadlist\"]",
"url":"^http://jpmp3\\.com/(?:forumdisplay|search)\\.php",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"//table[@class=\"data_table\"]/tbody/tr[2]",
"url":"^http://www\\.slmame\\.com/admin/atja_point\\.php",
"nextLink":"//div[@class=\"block\"]/a[starts-with(text(),\"\u00ab\")]"
},
{
"pageElement":"//td[@class=\"blue_bg\"]/table",
"url":"^http://seiji\\.yahoo\\.co\\.jp/vote/comment/list",
"nextLink":"//div[@class=\"page-link yjS\"]/em/a[starts-with(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"maintable\")",
"url":"^http://www\\.empireonline\\.com/500/[0-9]+\\.asp",
"nextLink":"//img[@name=\"img1\"]/parent::a"
},
{
"pageElement":"//td[@width=\"640\" and @align=\"center\"]/*",
"url":"^http://portal\\.nifty\\.com/[0-9a-z]+/\\d+/\\d+/",
"nextLink":"//td[@class=\"tx12px\"]/a[contains(., \"\uff1e\")]"
},
{
"pageElement":"id(\"body\")",
"url":"^http://www\\.theregister\\.co\\.uk/(?:\\d+/){3}.",
"nextLink":"id(\"page-nav\")/ul/li[last()]/a"
},
{
"pageElement":"//div[@class=\"detail\"]/ol",
"url":"^http://100\\.yahoo\\.co\\.jp/(?:search|category)",
"nextLink":"//span[@class=\"listNext\"]/a"
},
{
"pageElement":"id('main')",
"url":"^http://[^.]+\\.asablo\\.jp/blog/(?:$|\\?offset=)",
"nextLink":"id(\"navi-top\")/a[last()]"
},
{
"pageElement":"//center",
"url":"^http://(?:www\\.)?tefutefu\\.jp/bbs/index1\\.cgi",
"nextLink":"//td/b/following-sibling::a[1]"
},
{
"insertBefore":"//div[contains(@class, \"photo-info\")]",
"pageElement":"//div[contains(@class, \"photo-body\")]",
"url":"^http://\\w+\\.engadget\\.com/photos/[^/]+/[^/]+/",
"nextLink":"//div[contains(@class, \"photo-body\")]/a"
},
{
"pageElement":"//div[@class=\"main\"]",
"url":"^http://rinrin\\.saiin\\.net/~zshp/denpa_gs/main/",
"nextLink":"//a[text()=\"NEXT\"]"
},
{
"pageElement":"id(\"ynsubnav\")/following-sibling::table[2]//table[3]//table[position()>1 and position()<last()]",
"url":"^http://backnumber\\.dailynews\\.yahoo\\.co\\.jp/",
"nextLink":"id(\"ynsubnav\")/following-sibling::table[2]//a[(contains(@href,\"prevnect\") and contains(text(),\"\u6b21\")) and last()]"
},
{
"pageElement":"//table[@class=\"listBox\"]",
"url":"^http://www\\.pocketbooks-japan\\.com/index\\.php",
"nextLink":"//p[@class=\"listPrevNext\"]/strong/following-sibling::a[1]"
},
{
"pageElement":"id(\"results_links\")/*",
"url":"^http://(?:www\\.)?dilandau\\.com/download_music/",
"nextLink":"id(\"next_page\")"
},
{
"pageElement":"//table[@class=\"forumline\"]",
"url":"^http://forums\\.mozillazine\\.jp/viewforum\\.php",
"nextLink":"//td[@class=\"bodyline\"]/form/table[last()]/tbody/tr[1]/td[last()]/span[@class=\"nav\" and last()]/a[last()]"
},
{
"pageElement":"//div[@class=\"torikumi_boxbg\"]|//table[following-sibling::div[@class=\"torikumi_boxbg\"]]",
"url":"^http://sumo\\.goo\\.ne\\.jp/hon_basho/hoshitori/",
"nextLink":"//td[a[contains(@href,\"hoshitori\")]][preceding-sibling::td[strong or b]][1]/a"
},
{
"pageElement":"id(\"mod-prev-next\")/preceding-sibling::*",
"url":"^http://blog\\.goo\\.ne\\.jp/moonglass_net(?:/|$)",
"nextLink":"id(\"mod-prev-next\")//li[@class=\"mod-pre-nex-prev\"]/a"
},
{
"pageElement":"//hr[@size=\"1\" and @noshade=\"1\"]|//hr[@size=\"1\" and @noshade=\"1\"]/following-sibling::p[1]|//hr[@size=\"1\" and @noshade=\"1\"]/following-sibling::p[2]|//hr[@size=\"1\" and @noshade=\"1\"]/following-sibling::div[1]",
"url":"^http://www\\.imdb\\.com/title/[^/]+/usercomments",
"nextLink":"//img[@alt=\"[Next]\"]/ancestor::a"
},
{
"pageElement":"//td[@class=\"main01\"]/table[last()]",
"url":"^http://www\\.tbs\\.co\\.jp/gacchiri/[^.]+\\.html",
"nextLink":"//td[@class=\"main01\"]/table[last()]/tbody/tr[2]/td[2]/div[last()]/a"
},
{
"insertBefore":"//hr",
"pageElement":"//dl",
"url":"^http://yui\\.cynthia\\.bne\\.jp/test/read\\.cgi/",
"nextLink":"//a[text()=\"\u6b2125\"]"
},
{
"pageElement":"id(\"coupon_list\")/*",
"url":"^http://coupons\\.yahoo\\.co\\.jp/search_keyword/",
"nextLink":"id(\"list_page\")//span[@class=\"next\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"RightSideHolder\")/table/tbody/tr",
"url":"^http://(?:[^.]+\\.)?avfantasy\\.com/[^.]+\\.aspx",
"nextLink":"//a[@class=\"CurrentPageCss\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"hyouji\")/following-sibling::div[@class=\"navipage_\"][1]/following-sibling::*[./following-sibling::*/descendant-or-self::div[@class=\"navipage_\"]]",
"url":"^http://(?:[es]c\\.)?akizukidenshi\\.com/catalog/",
"nextLink":"id(\"hyouji\")/following-sibling::div[@class=\"navipage_\"]/a[img[starts-with(@alt,\"\u6b21\")]]"
},
{
"pageElement":"//table[@class=\"resultTable\"]|id(\"itemResultWindow\")/table|id(\"content\")/form[@name=\"prod_list\"]/table",
"url":"^http://(?:www\\.)?hikaku\\.com/(?:isp|shopping)/",
"nextLink":"//span[@class=\"current_page\"]/following-sibling::a[1]|id(\"itemPagerTOP\")/b/following-sibling::a[1]"
},
{
"pageElement":"id(\"read\")",
"url":"^http://(?:www\\.)?coolboys\\.jp/pic/face\\d\\d?/",
"nextLink":"id(\"page\")/a[contains(text(),\"\u6b2120\u4ef6\")]"
},
{
"pageElement":"id(\"headmenu\")/following-sibling::*[following-sibling::*[(descendant::img[@src=\"/images/next2.gif\" or @src=\"/images/prev.gif\"]) or (descendant::img[@src=\"/images/thispag2.gif\"] and not(preceding-sibling::*/descendant::img[@src=\"/images/next2.gif\" or @src=\"/images/prev.gif\"]))]]",
"url":"^http://(?:www|jibun)\\.atmarkit\\.co\\.jp/.*five",
"nextLink":"//img[@src=\"/images/thispag2.gif\"]/ancestor::tr/following-sibling::tr[1]//a"
},
{
"pageElement":"//ol[@class=\"p1\"]",
"url":"^http://(?:www\\.)?yandex\\.[a-z]{2,3}/yandsearch",
"nextLink":"//a[text()=\"\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f\"]"
},
{
"pageElement":"id(\"article\")",
"url":"^http://(?:www\\.)?legitreviews\\.com/article/\\d",
"nextLink":"id(\"article\")/h3/a"
},
{
"pageElement":"id(\"propertylist\")",
"url":"^http://www\\.penyards\\.com/SearchResults\\.aspx",
"nextLink":"//div[@id=\"property_search\"]//p[@class=\"pages\"]/a[last()]"
},
{
"pageElement":"//font/parent::b/parent::td/parent::tr/following-sibling::tr",
"url":"^http://(?:[^.]+\\.)?imdb\\.com/.+/board(?:$|\\?)",
"nextLink":"//td/font[starts-with(normalize-space(), \"Pages:\")]/b/following-sibling::a[1]"
},
{
"pageElement":"//ol[@class=\"searchList\"]",
"url":"^http://search\\.nifty\\.com/websearch/search\\?.",
"nextLink":"//span[@class=\"next\"]/a"
},
{
"pageElement":"id(\"squeeze\")//div[@class=\"view-content\"]/div[contains(concat(\" \", @class, \" \"), \" views-row \")]|id(\"squeeze\")//form/div/table",
"url":"^http://tech-seminar\\.jp/(?:$|seminar|admin|tag)",
"nextLink":"id(\"squeeze\")//li[@class=\"pager-next\"]/a|id(\"squeeze\")//span[@class=\"next\"]/a"
},
{
"pageElement":"id(\"entry_detail\")",
"url":"^http://lab\\.jibun\\.atmarkit\\.co\\.jp/entries/",
"nextLink":"//a[descendant-or-self::*[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]]"
},
{
"pageElement":"//div[@class=\"pager_box\"]/preceding-sibling::*",
"url":"^http://db\\.netkeiba\\.com/(?:horse/bbs|.*board)",
"nextLink":"//li[./span[@class=\"active\"]]/following-sibling::li[1]/a"
},
{
"pageElement":"id('article')",
"url":"^http://event\\.media\\.yahoo\\.co\\.jp/nikkeibp/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"//div[@class=\"SC\"]/*",
"url":"^http://jappydolls\\.net/(?:page/\\d+)?(?:$|[?#])",
"nextLink":"//div[@class=\"wp-pagenavi\"]/a[.=\"\u00bb\"]"
},
{
"pageElement":"id(\"content\")/div[contains(@id,\"post-\")]",
"url":"^http://techlife\\.cookpad\\.com/(?:$|[?#]|page/)",
"nextLink":"id(\"content\")/div[@class=\"navigation\"]/div[@class=\"alignleft\"]/a"
},
{
"pageElement":"//table[@class=\"tabTable\"]",
"url":"^http://(?:www\\.)?ontonson\\.com/index\\.php\\?.",
"nextLink":"//a[@title=\" \u6b21\u306e\u30da\u30fc\u30b8 \"]"
},
{
"pageElement":"id(\"Tertiary\")/following-sibling::table[position()=1]",
"url":"^http://www\\.flickr\\.com/photos/[^/]+/tags/[^/]",
"nextLink":"//a[@class=\"Next\"]"
},
{
"pageElement":"//div[@class=\"page_left\"]/div[(position() > 2) and (position() < last() - 1)]",
"url":"^http://xlink\\.planex\\.co\\.jp/procedure_74_jp/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"//center[not(script)] | //center[not(script)]/following-sibling::p",
"url":"^http://(?:apod|antwrp\\.gsfc)\\.nasa\\.gov/apod/",
"nextLink":"//a[contains(text(), \"<\")]"
},
{
"pageElement":"id(\"nowListArea\")/li",
"url":"^http://now\\.ameba\\.jp/[^/]+/follow(?:ers|ing)",
"nextLink":"id(\"mainArea\")/div[@class=\"paging\"]/a[@class=\"right\"]"
},
{
"insertBefore":"//b[contains(text(), \"Next >>\")]/ancestor::p[1]",
"pageElement":"//img[contains(@src,\"pic/dl.gif\")]/ancestor::table[1]",
"url":"^http://(?:[^.]+\\.)?empornium\\.us/browse\\.php",
"nextLink":"//center/p[last()]/a[last()]"
},
{
"pageElement":"//div[contains(concat(\" \",normalize-space(@class),\" \"), \" tlGray \") or contains(concat(\" \",normalize-space(@class),\" \"), \" tlWhite \")]",
"url":"^http://(?:www\\.movatwi|movatwitter)\\.jp/user/",
"nextLink":"//a[@accesskey=\"6\"]"
},
{
"pageElement":"id(\"teaser\")//table//table",
"url":"^http://(?:www\\.)?figator\\.(?:com|org)/search/",
"nextLink":"id(\"teaser\")//a[.=\"Next\"]"
},
{
"pageElement":"id(\"searchresult\")/div[@class=\"content\"]/div[contains(@class,\"unit\")]",
"url":"^http://search-web\\.slmame\\.com/cgi-bin/search",
"nextLink":"id(\"searchresult\")//p[contains(concat(\" \",@class,\" \"),\" pager \") and last()]/a[last() and contains(text(),\"\u6b21\")]"
},
{
"pageElement":"id('result_3')/div[@class='newsarea']",
"url":"^http://www\\.kyoto-np\\.co\\.jp/search\\.php\\?",
"nextLink":"//div[@style='text-align: center;']/a[contains(text(),'\u6b21\u306e')]"
},
{
"pageElement":"id(\"results\")/tbody/tr",
"url":"^http://(?:www\\.)?haskell\\.org/hoogle/3/\\?q=.",
"nextLink":"id(\"select\")/a[@class=\"active\"]/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"g-section cx-search-result\"]",
"url":"^https://chrome\\.google\\.com/extensions/list/.",
"nextLink":"//div[@class=\"g-section cx-paginator\"]//span[last()]/a"
},
{
"pageElement":"id(\"index\")/following-sibling::tr",
"url":"^http://(?:www\\.)?freespot\\.com/map/list\\.php",
"nextLink":"//a[text()=\"\u6b21\u3092\u8868\u793a\"]"
},
{
"insertBefore":"id(\"main\")/form[@class=\"quickJump\"]/following-sibling::node()[last()]",
"pageElement":"id(\"normalThreadsStatus\")|id(\"main\")/div[contains(concat(\" \", @class, \" \"), \" message \")]",
"url":"^http://www\\.percutio\\.de/network/index.php\\?",
"nextLink":"id(\"main\")//li[@class=\"active\"]/following-sibling::li[1]/a"
},
{
"pageElement":"//table[@class=\"problems\"]",
"url":"^http://www\\.spoj\\.pl/(?:problem|rank|statu)s/",
"nextLink":"//a[@class=\"pager_link\"][text()=\"Next\"]"
},
{
"pageElement":"//div[@id='main']",
"url":"^http://special\\.nikkeibp\\.co\\.jp/ts/article/",
"nextLink":"//a[img/@alt='Next']"
},
{
"pageElement":"//table[@class=\"result\"]//tr[position()!=1]",
"url":"^http://www\\.chefkoch\\.de/(?:rs/s|suche\\.php)",
"nextLink":"//strong/a[contains(text(),\"n\u00e4chste\")]"
},
{
"pageElement":"//div[@class=\"work_read_header\"]/following-sibling::node()[ following::div[@class=\"work_read_footer\"] ]",
"url":"^http://(?:[^/]+\\.)?novelist\\.jp/.+_p.+\\.html",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"pageElement":"//div[starts-with(@class, \"shop-detail\")]",
"url":"^http://www\\.fujiya-peko\\.co\\.jp/shop/result/",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"//div[@class=\"photo\"]",
"url":"^http://www\\.[fc]g-site\\.net/(?:content|tag)s/",
"nextLink":"//div[@class=\"wide_box\"]/div[last()]/span[@class=\"current\"]/following-sibling::*[1][self::span]/a"
},
{
"pageElement":"id(\"result\")/*[self::h3 or self::div and @class=\"word\" or self::p and @class=\"edit\"]",
"url":"^http://www\\.ctrans\\.org/cjdic/search\\.php\\?",
"nextLink":"id(\"result\")/div[@class=\"dot\"]//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"content\")/div[starts-with(@id, \"post-\")]",
"url":"^http://www\\.odysseygate\\.com/(?!archives/\\d)",
"nextLink":"id(\"nav-above\")/div[@class=\"nav-previous\"]/a"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" Row \") and ./div]",
"url":"^http://(?:www\\.)?muryou-anime-wallpaper\\.net/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" ControlButton \")]/b/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"unit\"]",
"url":"^http://webshop\\.montbell\\.jp/goods/list\\.php",
"nextLink":"//a[@title=\"\u6b21\u306e\u30da\u30fc\u30b8\u3078\"]"
},
{
"pageElement":"//p[@class=\"time\"]/following-sibling::*[not(p[@class=\"pagenp\"]) and not(@class=\"acolumn\") and (following::self[@class=\"acolumn\"] or following::p[@class=\"pagenp\"])]",
"url":"^http://www\\.computerworld\\.jp/(?:topic|new)s/",
"nextLink":"id(\"article\")/div[@class=\"boxadd\"]/p/*/following-sibling::a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\u3078\")]"
},
{
"pageElement":"id(\"container\")/div[@class=\"thumbListBox\"]",
"url":"^http://rapeco\\.jp/pecos/(?:hot|popular|recent)",
"nextLink":"id(\"container\")//div[@class=\"pagination\"]/a[@class=\"next_page\"]"
},
{
"pageElement":"//node()[preceding-sibling::hr and following-sibling::hr]",
"url":"^http://(?:www\\.)?alabout\\.com/s?list\\.php\\?",
"nextLink":"//a[contains(text(),\"\u6b21\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"id(\"listHotelArea\")",
"url":"^http://web\\.travel\\.rakuten\\.co\\.jp/portal/",
"nextLink":"//a[text()=\"\u6b21\u306e30\u4ef6\"]"
},
{
"pageElement":"//div[starts-with(@id, \"node-\")]",
"url":"^http://www\\.dezinerfolio\\.com/blog(?:[/?#]|$)",
"nextLink":"//li[@class=\"pager-next\"]/a"
},
{
"pageElement":"//*[preceding-sibling::div[@class=\"pager1\"]][following-sibling::div[@class=\"pager2\"]]",
"url":"^http://www\\.microsoft\\.com/japan/powerpro/TF/",
"nextLink":"//span[@class=\"next\"]/a"
},
{
"pageElement":"//a[./img[contains(@alt, \"Page\") or @alt=\"comic\"]]",
"url":"^http://(?:www\\.)?rice-boy\\.(?:com|jpn\\.org)/",
"nextLink":"//a[./img[contains(@alt, \"Page\") or @alt=\"comic\"]]"
},
{
"pageElement":"id(\"container\")/descendant::div[contains(concat(\" \", @class, \" \"), \" search_navi \")][1]/ancestor::table[1]/following-sibling::*[1][self::center]",
"url":"^http://www\\.nicomimi\\.net/(?:new|tag|ranking)",
"nextLink":"id(\"container\")//a[@class=\"next\"]"
},
{
"pageElement":"id(\"gridlist\")",
"url":"^http://image-search\\.yahoo\\.co\\.jp/search\\?",
"nextLink":"//a[@class=\"mmsnxtb\"]"
},
{
"pageElement":"id(\"center\")//ul|id(\"main\")/table[@class=\"pagenavi\"]/following-sibling::*[(self::div or self::table) and not(@class=\"mokuji\" or @class=\"pagenavi\")]",
"url":"^http://(s(?:earch|hopping)\\.)?goodsearch\\.jp/",
"nextLink":"//span[@class=\"rs\"]/following-sibling::a[1]|//img[@src=\"img/button_next.gif\"]/parent::a'"
},
{
"pageElement":"(id(\"articleHead artHeader\")|id(\"contdefault\")/h1)/following-sibling::*[not(@class=\"newauthor\" or @class=\"sbm\") and following::div[contains(@class, \"pager\") or contains(@class, \"pages pgbottom\")]]",
"url":"^http://(?:www\\.)?ascii\\.jp/elem/(?:[^/]+/){4}",
"nextLink":"//a[@class=\"next\" or parent::span[@class=\"next\"]]| //span[@class=\"next\" and last()]/a[contains(text(),\"\u6b21\")]"
},
{
"insertBefore":"id(\"attention\")",
"pageElement":"//div[@class=\"section\"]",
"url":"^http://www\\.jsgoal\\.jp/photo/\\d+/\\d+\\.html",
"nextLink":"//li[@class=\"backV\"]/a"
},
{
"pageElement":"id(\"mainContentsWrapSecond\")/div[@class=\"searchListInner\"]/div[contains(@class, \"article\")]",
"url":"^http://www\\.hotpepper\\.jp/(?:A_1[12]100|CSP)/",
"nextLink":"id(\"mainContentsWrapSecond\")/div[@class=\"searchListInner\"]/div[@class=\"searchResults\"]/div[@class=\"linearNav\"]/ul/li[contains(@class, \"next\")]/a"
},
{
"pageElement":"//div[@class=\"content-i\"]/table",
"url":"^http://(?:www\\.)?pimpyourfont\\.com/by-style/.",
"nextLink":"//a[contains(concat(\" \",@class,\" \"),\" nav_cur \")][last()]"
},
{
"pageElement":"id(\"allonline_content\")/*",
"url":"^http://www\\.livejasmin\\.com/listpage\\.php\\?",
"nextLink":"id(\"pagerContent\")/span[@class=\"allonlinepages_url\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"index_content\")//table[@summary=\"\u4e00\u89a7\"]",
"url":"^http://www\\.niconicommons\\.jp/(?:recent|tag)/",
"nextLink":"id(\"index_content\")//a[@class=\"arrow_next\"]"
},
{
"pageElement":"id(\"LeftCullum\")",
"url":"^http://(?:www\\.)?webdesign(?:file|clip)\\.com/",
"nextLink":"//div[@class=\"wp-pagenavi\"]/a[last()-1]"
},
{
"pageElement":"//table[@bordercolor=\"#cccccc\"]",
"url":"^http://admin-apps\\.isiknowledge\\.com+/JCR/JCR",
"nextLink":"//a[img[contains(@src,\"nextpga.gif\")]]"
},
{
"pageElement":"id(\"wikipedia\")",
"url":"^http://(?:www\\.)?flinker\\.jp/keyword/fkeyword",
"nextLink":"id(\"wikipedia\")/following::div[@class=\"right\"]/a"
},
{
"insertBefore":"id(\"universal\")/*[@class][last()]",
"pageElement":"id(\"universal\")/div[not(@*)]",
"url":"^http://www\\.google(?:\\.[^./]{2,3}){1,2}/m\\?.",
"nextLink":"//*[starts-with(text(), \"Next page\") or starts-with(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"id(\"brd-main\")/div[starts-with(@id, \"forum\")]/*",
"url":"^http://(?:www\\.)?crunchbanglinux\\.org/forums/",
"nextLink":"id(\"brd-pagepost-top\")/p/strong/following-sibling::a[1]"
},
{
"pageElement":"id(\"discographyContentWrapper\")/div[position()>1 and position()< last()]",
"url":"^http://(?:www\\.)?8bitpeoples\\.com/discography",
"nextLink":"//div[@class=\"discographyPagesBlock\"]/a[contains(text(), \"NEXT\")]"
},
{
"pageElement":"//div[@class=\"primaryContent\"]/div[@class=\"moduleBox\"]",
"url":"^http://president\\.jp\\.reuters\\.com/category/",
"nextLink":"//div[@class=\"pagenation\"]/a[contains(., \"\u6b21\")]"
},
{
"pageElement":"id('searchResult')/table",
"url":"^http://(?:www\\.)?nikkeibook\\.com/errata\\.php",
"nextLink":"id('searchResult')//a[contains(text(), \">>\")]"
},
{
"insertBefore":"//div[@class=\"pager\"][last()]",
"pageElement":"id(\"hourlyreport\")/table",
"url":"^http://counter\\.hatena\\.ne\\.jp/.+?/report\\?",
"nextLink":"//div[@class=\"pager\"][last()]/a[last()]"
},
{
"pageElement":"id(\"content\")//ol[contains(concat(\" \", @class, \" \"), \" statuses \")] | id(\"content\")//table[contains(concat(\" \", @class, \" \"), \" doing \")]",
"url":"^ttps?://(?:(?:api|explore|m)\\.)?twitter\\.com/",
"nextLink":"//a[contains(concat(\" \", translate(normalize-space(@rel), \"EPRV\", \"eprv\"), \" \"), \" prev \") or contains(concat(\" \", translate(normalize-space(@rel), \"ENTX\", \"entx\"), \" \"), \" next \")]"
},
{
"pageElement":"id(\"container\")/div[@class=\"main-area\"]/ol[@class=\"statuses\"]",
"url":"^http://libreq\\.net/tweets/(?:latest|mentioned)",
"nextLink":"id(\"container\")//div[@class=\"pagination\"]/a[@class=\"next_page\"]"
},
{
"insertBefore":"(//div[@class=\"clearFix pagingNavi2\"])[last()]",
"pageElement":"id(\"newestImages2\")",
"url":"^http://blogs\\.yahoo\\.co\\.jp/[^/]+/GALLERY/.",
"nextLink":"//p[@class=\"forwardNext\"]/a[2]"
},
{
"pageElement":"//ul[contains(concat(\" \", @class, \" \"), \" results  \")]",
"url":"^http://www\\.apple\\.com/(?:[^/]+/)?downloads/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id(\"main\")//div[contains(@class, \"article-main\")]/p[contains(@class, \"article-lead\")]/following-sibling::*",
"url":"^http://diamond\\.jp/series/[^/]+/(?!bn\\.html)",
"nextLink":"id(\"main\")//div[contains(@class, \"pagination\")]//a[@class=\"next\"]"
},
{
"pageElement":"id(\"main\")/descendant::table[last()]",
"url":"^https://trading[14]\\.sbisec\\.co\\.jp/ETGate/",
"nextLink":"id(\"main\")//u[contains(., \"\u6b21\u3078\")]/parent::a"
},
{
"pageElement":"//table[@class=\"list0\"]/tbody/tr",
"url":"^http://find\\.2ch\\.net/enq/result_index\\.php",
"nextLink":"//td[last()]/div[last()]/a[contains(text(),\">\")]"
},
{
"pageElement":"id(\"resultslist\")/div[@class=\"result\"]",
"url":"^http://developer\\.apple\\.com/search\\.php\\?",
"nextLink":"id(\"resultslistbottom\")//a[contains(., \"Next\")]"
},
{
"pageElement":"id(\"resultstable\")//tr",
"url":"^http://code\\.google\\.com/p/(?:[^/]+/){2}list",
"nextLink":"id(\"bub\")//div[contains(concat(\" \", @class, \" \"), \" pagination \")]/a[contains(., \"\u203a\")]"
},
{
"pageElement":"//table[@class=\"maintable\"]/tbody/tr",
"url":"^http://www\\.animewallpapers\\.com/wallpapers/",
"nextLink":"//table[@class=\"taborder\"]//a[contains(., \">\")]"
},
{
"pageElement":"//td[contains(@class,\"bbsCont1\")]/table[contains(@class,\"bbsContEnt\")]",
"url":"^http://(?:www\\.)?[^-]+-bbs\\.com/cgi-bin/bbs/",
"nextLink":"//a[starts-with(@href,\"?page=\") and preceding-sibling::b]"
},
{
"pageElement":"id(\"list\")",
"url":"^http://(?:www\\.)?readitlaterlist\\.com/unread",
"nextLink":"//a[@id=\"next\"][contains(concat(\" \",@class,\" \"),\" active \")]"
},
{
"pageElement":"//table[@class=\"listtable2\"]",
"url":"^http://g\\.hatena\\.ne\\.jp/grouplist(?:$|\\?)",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id(\"category\")/div[@class=\"line550-g\" or @class=\"list4\"]",
"url":"^http://web\\.doujindou\\.com/(?:category|new)/",
"nextLink":"id(\"category\")/div[@class=\"bottom-navi\" or @class=\"list_pager\"]//a[contains(., \"\u6b21\")]"
},
{
"pageElement":"//div[@class=\"day\"]",
"url":"^http://takagi-hiromitsu\\.jp/diary/\\d+\\.html",
"nextLink":"//div[@class=\"adminmenu\"]/span/a[contains(text(),\"\u524d\u306e\u65e5\u8a18\")]"
},
{
"pageElement":"id(\"maincol\")/div[@class=\"content\"]",
"url":"^http://(?:www\\.)?gigazine\\.net/(?:$|[^/]+/P)",
"nextLink":"id(\"maincol\")//div[@class=\"paginate\"]/a[contains(text(),\"\u6b21\u3078\") or text()=\">\"]"
},
{
"pageElement":"id(\"main\")//div[@class=\"headline\"]/p[@class=\"pageNavgation\"][1]/following-sibling::*[following-sibling::p[@class=\"pageNavgation\"]]",
"url":"^http://(?:www\\.)?spiralmarket\\.com/archives/",
"nextLink":"id(\"main\")//p[@class=\"pageNavgation\"]/span[last()]/a"
},
{
"pageElement":"id(\"mb_title\")/following-sibling::node() | id(\"author_profile\")",
"url":"^http://www\\.nikkeibp\\.co\\.jp/style/biz/abc/",
"nextLink":"id(\"pages\")/tbody/tr/td[last()]/a"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" item \")]",
"url":"^http://(?:www\\.)?idee-online\\.com/shopbrand/",
"nextLink":"//div[@class=\"page_list_top\"]//a[contains(text(),\"[\u6b21]\")]"
},
{
"pageElement":"//table[@class=\"table-list\"]//tr[contains(@class,\"hatena-star-entry\")]",
"url":"^http://d\\.hatena\\.ne\\.jp/designset(?:$|\\?)",
"nextLink":"//div[@class=\"pager-r\"]/a[last()]"
},
{
"pageElement":"//table",
"url":"^http://uni\\d+\\.ogame\\.jp/game/pranger\\.php",
"nextLink":"//a[contains(text(), \">>\")]"
},
{
"pageElement":"id(\"left\")/div[@class=\"leaderboard\"]/div[@class=\"content\"]",
"url":"^http://[^.]+\\.mygamercard\\.net/clboard\\.php",
"nextLink":"//div[@class=\"rightColumn\"]/a"
},
{
"pageElement":"//div[@class=\"searchresults\"]/div[not(contains(concat(\" \", @class, \" \"), \" resultspagelinks \"))]",
"url":"^http://support\\.mozilla\\.com/search\\.php\\?",
"nextLink":"//span[@class=\"current_page\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"liveItemsWrap\")/*",
"url":"^http://live\\.nicovideo\\.jp/(?:recent|search)",
"nextLink":"id(\"liveList\")//a[@class=\"next\"]"
},
{
"pageElement":"id(\"md_interviewdetail\")//div[@class=\"section\"]",
"url":"^http://r25\\.yahoo\\.co\\.jp/interview/detail/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"widgets_list\")",
"url":"^http://(?:www\\.)?chumby.com/guide/category/.+",
"nextLink":"//div[@class=\"paginator\"]//a[@class=\"current_page\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"main\")/div[@class=\"entry\"]",
"url":"^http://(?:(?:memo|tabi)\\.)?andperseand\\.com/",
"nextLink":"id(\"main\")/div[@class=\"entry_state\"]/a[contains(., \">>\")]"
},
{
"pageElement":"id(\"search_contents\")",
"url":"^http://(?!www)(?:[^.]+\\.)?fooooo\\.com/search",
"nextLink":"id(\"pg_area\")/span/following-sibling::a"
},
{
"pageElement":"id(\"resizeableText\")/*[not(@class=\"backtoTop\")]",
"url":"^http://president\\.jp\\.reuters\\.com/article/",
"nextLink":"//span[@class=\"article_pagenation_next\"]/a"
},
{
"pageElement":"id('tmplBody')/div/*[not(self::div[@id=\"notice\"]) and not(self::div[@class=\"ctrl\"])] | id(\"update\")/following-sibling::*[not(@class=\"ctrl\") and not(@id=\"notice\") and following::*[@class=\"ctrl\"]]",
"url":"^http://bizmakoto\\.jp/bizid/articles/.+\\.html",
"nextLink":"id(\"next\")/a"
},
{
"pageElement":"//*[contains(concat(\" \", @class, \" \"), \" category_itemnamelink \")]/../../../..",
"url":"^http://item\\.rakuten\\.co\\.jp/(?:[^/]+/)+?c/",
"nextLink":"//*[contains(concat(\" \", @class, \" \"), \" selectb \")]/a[contains(text(), \"\u6b21\u306e\")]"
},
{
"pageElement":"//div[@class=\"content\"]/child::*[not(@class=\"navigation\")]",
"url":"^http://google-mania\\.net/(?:$|tag/|archives/)",
"nextLink":"//div[@class=\"navigation\"]/div[@class=\"alignleft\"]/a"
},
{
"pageElement":"id(\"q_8\")/ancestor::div[.//*[@class=\"details\"]][1]/*",
"url":"^http://(?:[^.]+\\.){1,2}ebay(?:\\.[^.]+){1,2}/",
"nextLink":"id(\"q_8\")/parent::a[@class=\"enabled\"]"
},
{
"pageElement":"id(\"main\")/div[contains(@class,\"kiji\")]",
"url":"^http://fxwiki\\.blog63\\.fc2\\.com/(?:$|page-)",
"nextLink":"id(\"page_navi\")/table/tbody/tr/td[last()]/a"
},
{
"pageElement":"//table[last()]",
"url":"^http://cgiserv01\\.fc2web\\.com/g-i-m-g-s/top/",
"nextLink":"//a[starts-with(@href,\"top_\")][last()]"
},
{
"pageElement":"//td[@class=\"tcl\"]/ancestor::table[1]",
"url":"^https?://(?:[^/]*/)+viewforum\\.php\\?id=[1-9]",
"nextLink":"//p[contains(concat(\" \", @class, \" \"), \" pagelink \")]/strong/following-sibling::a[1]"
},
{
"pageElement":"id(\"ListProducts\")",
"url":"^http://(?:www\\.)?takeoff-clothing\\.com/shop/",
"nextLink":"id(\"pageNaviBottom\")/a[@title=\"next page\"]"
},
{
"insertBefore":"//form/center/table[@width=\"95%\"]/following-sibling::*",
"pageElement":"//form/center/table[@width=\"95%\"]",
"url":"^http://nijinochocolate\\.homelinux\\.net/niji/",
"nextLink":"(//form/center/span/a[text()=\"\u6b21\"])[last()]"
},
{
"insertBefore":"//form[@name=\"narabi\"]/following-sibling::table[2]",
"pageElement":"//form[@name=\"narabi\"]/following-sibling::table[1]",
"url":"^http://www\\.bh-jinbocho\\.com/zkin/bhj_search",
"nextLink":"//img[@src=\"/img/next.gif\"]/parent::a"
},
{
"pageElement":"//div[@class=\"keyword-list\"]/ul/li[not(@class=\"pager\")]",
"url":"^http://d\\.hatena\\.ne\\.jp/keywordlist($|\\?)",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//div[@align=\"center\"]/table[@width=\"85%\"]",
"url":"^http://www\\.getchu\\.com/php/calendar\\.phtml",
"nextLink":"//center/a[last()]"
},
{
"pageElement":"id(\"content\")/*",
"url":"^http://(?:www\\.)?fakku\\.net/viewonline\\.php",
"nextLink":"id(\"content\")/a"
},
{
"insertBefore":"//center/table/tbody/tr/td/table[last()-1]",
"pageElement":"//center/table/tbody/tr/td/table[last()-2]",
"url":"^http://blog-search\\.yahoo\\.co\\.jp/search\\?",
"nextLink":"//a[child::img[contains(@src, \"ar_next.gif\")]]"
},
{
"pageElement":"//div[@class=\"bloc01\"]/div",
"url":"^http://(?:www\\.)?k-seven\\.co\\.jp/blog_mori/",
"nextLink":"//td[@class=\"nb_right\"]/a[child::img[@title=\"\u6b21\u306e\u30da\u30fc\u30b8\u3078\"]]"
},
{
"pageElement":"//div[@class=\"forum_content_main\"]",
"url":"^http://www\\.mobile01\\.com/topiclist\\.php\\?",
"nextLink":"//a[@class=\"page\"][contains(., \"\u4e0b\u4e00\")]"
},
{
"pageElement":"//table//tr[//div]",
"url":"^http://followfinder\\.googlelabs\\.com/search",
"nextLink":"//td[@class=\"more\"]//a[last()]"
},
{
"pageElement":"//b[contains(text(), \"Filename\")]/ancestor::table[1]",
"url":"^http://lite\\.modarchive\\.org/index\\.php\\?",
"nextLink":"//form//a[contains(text(), \">\")]"
},
{
"pageElement":"id(\"articlebody\")/*[not(@class=\"magGuidance\") and not(@class=\"nextPagePreview\") and following::div[@id=\"naviBottom\"] and not(descendant::*[contains(text(), \"\u65e5\u7d4c\u30d3\u30b8\u30cd\u30b9\u7279\u5225\u8cfc\u8aad\u306f\u3053\u3061\u3089\u304b\u3089\") or contains(text(), \"\u6b21\u30da\u30fc\u30b8\u4ee5\u964d\u306f\u300cNBonline\u4f1a\u54e1\u300d\")])] | id('leaf-main')//div[@class=\"story\"]",
"url":"^http://business\\.nikkeibp\\.co\\.jp/article/",
"nextLink":"id(\"naviBottom\")//a[text()=\">>\"] | id('leaf-main')//div[@class=\"next_p\"]/a"
},
{
"pageElement":"//td[@class=\"middle\"]/div[@class=\"padding\"]/node()[@class=\"contentpaneopen\" or position()=last()]",
"url":"^http://www\\.mf-davinci\\.com/yoo/index\\.php",
"nextLink":"//th[@class=\"pagenav_next\"]/a"
},
{
"pageElement":"//ul[@class=\"nf_results\"]",
"url":"^http://suche\\.welt\\.de/woa/result\\.html\\?",
"nextLink":"//a[@class=\"forward\"]"
},
{
"pageElement":"id(\"LEFTSIDE_S\")/div[@class=\"pagenate\"]/preceding-sibling::*[not(self::h1 or self::h2)]",
"url":"^http://www\\.france\\.jp/servlet/Satellite\\?",
"nextLink":"id(\"LEFTSIDE_S\")/div[@class=\"pagenate\"]/a[@class=\"nextpage\"]"
},
{
"pageElement":"//div[@class=\"ytrvKlgQstn\"]|//ul[@class=\"ytrvKlgDetailAns\"]",
"url":"^http://chiebukuro\\.travel\\.yahoo\\.co\\.jp/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"wrapper\")",
"url":"^http://(?:www\\.)?glendenny\\.com/Portfolios/",
"nextLink":"id(\"arrows\")//a[contains(text(), \">\")] "
},
{
"pageElement":"//tr[contains(@class, \"resultGroup\")]",
"url":"^http://www\\.altavista\\.com/image/results\\?",
"nextLink":"//b[contains(concat(\" \", @class, \" \"), \" m \")][last()]/a[contains(text(), \"Next\")]"
},
{
"pageElement":"id(\"productsContainer\")/*",
"url":"^http://www\\.ikea\\.com/(?:\\w\\w/){2}search/",
"nextLink":"id(\"main\")/div/div[contains(@class,\"paginationMenu\")]//span[@class=\"paginationButtonTextPaddingNext\"]/a"
},
{
"pageElement":"//div[@class=\"thumb_list\"]",
"url":"^http://www\\.imdb\\.com/name/[^/]+/mediaindex",
"nextLink":"//div[@class=\"leftright\" and position()=1]//a[position()=last() and starts-with(normalize-space(text()), \"Next \")]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" explore_listing \")]",
"url":"^http://(?:www\\.)?wincustomize\\.com/explore/",
"nextLink":"//a[contains(concat(\" \", @class, \" \"), \" pnext \")]"
},
{
"pageElement":"id(\"content_article\")/node()[not((self::h2 and @class=\"content_sub_title\") or .//div[@class=\"ad_unit\"])]",
"url":"^http://www\\.associatedcontent\\.com/article/",
"nextLink":"//div[@class=\"pagination\"]/a[contains(concat(\" \", @class, \" \"), \" next \")]"
},
{
"pageElement":"//div[@class=\"CommonListArea\"]/*",
"url":"^http://windowsclient\\.net/downloads/folders/",
"nextLink":"//div[@class=\"CommonPagingArea\"]/a[contains(., \">\")]"
},
{
"pageElement":"//form[@class=\"comments\"]|//table[@class=\"normal\"]/tbody/tr",
"url":"^https?://support\\.mozilla\\.com/[^/]+/forum/",
"nextLink":"//div[@class=\"mini\"]/a[contains(., \"Next \u00bb\")]"
},
{
"insertBefore":"//div[@align=\"center\"]/preceding-sibling::hr[1]",
"pageElement":"//div[@align=\"left\"]/node()[self::text() or self::br]",
"url":"^http://(?:www\\.)?nkst\\.jp/[^/]+/novel\\.php",
"nextLink":"//a[@title=\"next\"]"
},
{
"pageElement":"//td[@class=\"contents\"]/table[2]",
"url":"^http://www\\.bh-recipe\\.jp/recipe/list\\.php",
"nextLink":"//td[@class=\"contents\"]/table[last()]//a[starts-with(text(), \"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"Box\")/*",
"url":"^http://maouyusya2828\\.web\\.fc2\\.com/matome",
"nextLink":"id(\"footer\")/ul/li/a[contains(text(),\"NEXT\")]"
},
{
"pageElement":"//ul[@class=\"list\"]",
"url":"^http://pupe\\.ameba\\.jp/cute/community/goods",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"//dl",
"url":"^https://www\\.codeblog\\.org/gonzui/search\\?",
"nextLink":"//div[@class=\"navi\"]/a[contains(text(),\"\u6b21\")]"
},
{
"pageElement":"id(\"hWrapper\")/div[@class=\"marubox\"]",
"url":"^http://karada\\.goo\\.ne\\.jp/(?:diary|user)/",
"nextLink":"id(\"hWrapper\")/div[@class=\"paging\"]/span[@class=\"cur\"]/following-sibling::span[1]/a"
},
{
"pageElement":"id(\"content\")/div[@class=\"blog\" or @id=\"comments\"]",
"url":"^http://[^.]+\\.sblo\\.jp/article/[^.]+\\.html",
"nextLink":"id(\"content\")/div[@class=\"navi\"]/a"
},
{
"insertBefore":"id(\"national-giographic\")/p[contains(@class,\"more\")]",
"pageElement":"id(\"national-giographic\")/div[contains(@class,\"entryBody\")]",
"url":"^http://news\\.nifty\\.com/cs/magazine/detail/",
"nextLink":"id(\"national-giographic\")/p[contains(@class,\"more\")]/a"
},
{
"pageElement":"//tr",
"url":"^http://ichi5c2\\.mint\\.aisnet\\.jp/ponihuri/",
"nextLink":"//a[contains(text(),\"NEXT\")]"
},
{
"pageElement":"//p[.//img]",
"url":"^http://mizzo\\.web\\.fc2\\.com/page\\d+\\.htm",
"nextLink":"//p//a[.//img]"
},
{
"pageElement":"//div[(@class=\"forabg\" and div/table/@class=\"ttopiclist\") or @class=\"pagination\"] | id(\"page-body\")/div[@class=\"buttons\"]",
"url":"^http://bbs\\.operachina\\.com/viewforum\\.php",
"nextLink":"//div[@class=\"pagination\"]/a[last()]"
},
{
"pageElement":"id('page-body')/div[@id!='headerspace'] | //div[@class='forabg']",
"url":"^http://bbs\\.operachina\\.com/viewtopic\\.php",
"nextLink":"id('paginationbottom')/a[last()]"
},
{
"pageElement":"//div[@class=\"entryBody\"]",
"url":"^http://news\\.nifty\\.com/cs/magazine/detail/",
"nextLink":"//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"id(\"main_right\")/div/div[div[@class=\"book\"]]",
"url":"^http://book\\.akahoshitakuya\\.com/u/\\d+/cat",
"nextLink":"id(\"main_right\")/div/div[@class=\"page_navis\"]/span[@class=\"now_page\"]/following-sibling::span/a"
},
{
"pageElement":"//table[@class=\"goodslist\"]",
"url":"^http://nagomiweb\\.jp/cgi-bin/search\\.cgi\\?",
"nextLink":"//td[@class=\"next\"]/a"
},
{
"pageElement":"//table[preceding-sibling::center[div[normalize-space(@class)=\"fnt\"]]]",
"url":"^http://(?:www\\.)?yourfilehostdatabase\\.com/",
"nextLink":"descendant::div[normalize-space(@class) = \"fnt\"][2]/text()[not(normalize-space(self::text()) = \"Page:\") and (number(normalize-space(self::text())) > 0 or normalize-space(self::text()) = \"Page:0\") ]/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"ImgCenter\"]",
"url":"^http://www\\.asahi\\.com/travel/rail/gallery/",
"nextLink":"//p[@class=\"Next\"]/a"
},
{
"pageElement":"id(\"mnc\")",
"url":"^http://fashion\\.yahoo\\.co\\.jp/snap/detail/",
"nextLink":"//div[@class=\"yfas-mn52\"]//p/a[2]"
},
{
"pageElement":"id(\"iza_SSMainBody\")//img[@class=\"content_img\"]",
"url":"^http://www\\.iza\\.ne\\.jp/news/.+/slideshow/",
"nextLink":"id(\"iza_SSMainBody\")//a"
},
{
"pageElement":"id(\"pixiv\")/div[2]/div[3]",
"url":"^http://www\\.pixiv\\.net/event_member\\.php.+",
"nextLink":"//a[starts-with(text(), \"\u6b21\u306e\")]"
},
{
"pageElement":"//div[@class=\"pagenavcounter\"]/parent::td/parent::tr",
"url":"^http://www\\.clustermonkey\\.net/.*/content/",
"nextLink":"//div[@class=\"pagenavbar\"]//a[text()=\"Next Page >>\"]"
},
{
"insertBefore":"id(\"story\")/following-sibling::node()[1]",
"pageElement":"id(\"story\")",
"url":"^http://www\\.excite\\.co\\.jp/webad/special/",
"nextLink":"//span[@class=\"nextnx\"]/a"
},
{
"pageElement":"//div/center/table/tbody/tr/td[@class=\"ItemCell\"]/div/center",
"url":"^http://impre\\.net/php/impre/impreshow\\.php",
"nextLink":"//a[text()=\"NEXT>>\"]"
},
{
"pageElement":"id(\"listForm:appList:tb\")/*",
"url":"^http://appworld\\.blackberry\\.com/webstore/",
"nextLink":"//span[@class=\"currentPageNumber\"]/following-sibling::a[1]"
},
{
"pageElement":"//td[@class=\"tcl\"]/ancestor::table[1]",
"url":"^http://bbs\\.archlinux\\.org/search\\.php\\?",
"nextLink":"//p[contains(concat(\" \", @class, \" \"), \" pagelink \")]/strong/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"mainEntryBlock\"]",
"url":"^http://daijyoyuukoharu\\.blog62\\.fc2\\.com/",
"nextLink":"//link[@rel=\"next\"]"
},
{
"pageElement":"id(\"page-body\")",
"url":"^http://asterisk\\.mydns\\.jp/search\\.php\\?",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"article-content\")/*[self::h1 or (self::p and @class=\"secondary\")]/following-sibling::*[not(@id=\"page-break\")]|id(\"content\")/div[@class=\"noindex\" and ./div[@class=\"feedback\"]]",
"url":"^http://oreilly.com/(?:pub/a/)?[^/]+/archive/",
"nextLink":"id(\"page-break\")//p[@class=\"secondary\"]/b/following-sibling::a[1]"
},
{
"pageElement":"id(\"diary\")/div[@class=\"diary\"]",
"url":"^http://www\\.ag-pro\\.net/cgi_bin/kuramania/",
"nextLink":"id(\"navi\")/ul/li[last()]/a"
},
{
"pageElement":"id(\"contentsColumn\")/div[contains(@class,\"entryImgBox\")]",
"url":"^http://(?:www\\.)?cinra\\.net/(?!interview/)",
"nextLink":"id(\"contentsColumn\")/div[contains(@class,\"pageNum\")]/p[@class=\"txtNext\"]/a"
},
{
"pageElement":"//div[@id=\"DIVtimeline\"]",
"url":"^http://(?:www\\.)?meyou\\.jp/modules/search/",
"nextLink":"//a[@title=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"id(\"content\")/div[starts-with(@id, \"post-\")]",
"url":"^http://www\\.pi-kun\\.com/(?!archives/\\d+$)",
"nextLink":"id(\"nav-above\")/div[@class=\"nav-previous\"]/a"
},
{
"insertBefore":"//h2[@class=\"next\"]",
"pageElement":"//h2[@class=\"next\"]/preceding-sibling::* | //div[@class=\"pages\"][last()]/preceding-sibling::*",
"url":"^http://www\\.nikkeibp\\.co\\.jp/netmarketing",
"nextLink":"//img[contains(@src, \"p_next.gif\")]/parent::a"
},
{
"pageElement":"//td[@class=\"normal3\"]/ancestor::tbody[3]/tr",
"url":"^http://(?:www\\.)?lahiguera\\.net/musicalia/",
"nextLink":"//td[@class=\"enlace\"]/b/following-sibling::a[1]"
},
{
"pageElement":"id(\"mod-prev-next\")/preceding-sibling::*",
"url":"^http://blog\\.goo\\.ne\\.jp/coordinator_2005",
"nextLink":"id(\"mod-prev-next\")//li[@class=\"mod-pre-nex-prev\"]/a"
},
{
"pageElement":"//div[form]",
"url":"^http://music\\.j-total\\.net/db/search\\.cgi",
"nextLink":"//center/a[text()=\"\u6b21\u30da\u30fc\u30b8\u2192\"]"
},
{
"pageElement":"//dl[contains(@class, \"section\")]",
"url":"^http://giraffe\\.iseteki\\.net/applis/search",
"nextLink":"//div[@class=\"pageBrowser\"]/p[1]/a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\uff1e\")]"
},
{
"insertBefore":"//div[@class=\"pager\"][last()]",
"pageElement":"id(\"log_table\")",
"url":"^http://counter\\.hatena\\.ne\\.jp/.+?/log\\?",
"nextLink":"//div[@class=\"pager\"][last()]/a[last()]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" result \")]",
"url":"^http://search\\.secondlife\\.com/web/search/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id(\"newsIn\")/div[@class=\"title\" or @class=\"content\"]",
"url":"^http://newser\\.s312\\.xrea\\.com/(?:$|page)",
"nextLink":"id(\"newsIn\")/div[last()]/a[.=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"id(\"threads replies\")/table",
"url":"^https?://forums\\.whirlpool\\.net\\.au/forum",
"nextLink":"(id(\"threads\")/div[@class=\"footbar\"]/ul[@class=\"pagination\"]|id(\"top_pagination\"))/li[contains(concat(\" \", @class, \" \"), \" current \")]/following-sibling::li[1]/a"
},
{
"pageElement":"//div[@class=\"article\"]",
"url":"^http://news\\.livedoor\\.com/article/detail/",
"nextLink":"//div[@class=\"article-page\"]//td[@class=\"link-next\"]/a"
},
{
"pageElement":"id(\"cen\")/table/tbody/tr",
"url":"^http://(?:www\\.)?fifialfa\\.com/index\\.php",
"nextLink":"id(\"cen\")/div[@align=\"center\"]/a[normalize-space() = id(\"cen\")/div[@align=\"center\"]/a[last()]/text() - floor(substring(id(\"cen\")/table/descendant::a[starts-with(@href, \"page.php?id=\")][1]/@href, string-length(\"page.php?id=\") + 1) div count(id(\"cen\")/table/tbody/tr/td) - 1) + 2]"
},
{
"pageElement":"//table[@class=\"borderinterior\"]",
"url":"^http://brokenstones\\.(?:me|cn)/browse\\.php",
"nextLink":"//table[@class=\"borderinterior\"]/following-sibling::p/a/b[contains(text(),\"Next\")]/parent::a"
},
{
"pageElement":"id(\"main_block\")",
"url":"^http://vipvipblogblog\\.blog119\\.fc2\\.com/",
"nextLink":"//div[@class=\"pnavi\"]/a[last()]"
},
{
"pageElement":"id(\"programBox\")/following-sibling::node()",
"url":"^http://www\\.allnightnippon\\.com/gold/\\w+/",
"nextLink":"id(\"prevLink\")/a"
},
{
"pageElement":"//tr[td[1][@valign=\"middle\"]][td[2][@class=\"standard\"]]",
"url":"^http://(?:[^.]+\\.)?imdb\\.com/mymovies/list",
"nextLink":"//td[@class=\"standard\"][@align=\"right\"]/a[text()=\"Next\"]"
},
{
"pageElement":"//table[3]/tbody/tr/td/div/table[2]/tbody/tr/td/table",
"url":"^http://www\\.altavista\\.com/news/results\\?",
"nextLink":"//b[contains(concat(\" \",@class,\" \"),\" m \")][last()]/a[contains(text(),\"Next\")]"
},
{
"pageElement":"id(\"index\")/div[position()!=1 and position()!=last()]",
"url":"^http://wiredvision\\.jp/(?:news|blog)/[^/]+/",
"nextLink":"id(\"index\")/div[1]/p[@class=\"forward\"]/a"
},
{
"insertBefore":"//div[@class=\"pagingContainer\"]",
"pageElement":"//div[@class=\"latestVideos\"]/div[@class=\"mediaDisplay\"]",
"url":"^http://(?:[^.]+\\.)?pornotube\\.com/.+\\.php",
"nextLink":"//ul[@class=\"paging\"]/li[last()]/a"
},
{
"pageElement":"id(\"blog_list_block\")",
"url":"^http://[^.]+\\.areablog\\.jp/more_post\\.asp",
"nextLink":"id(\"blog_list_block\")/following-sibling::table//a[preceding-sibling::font[@color=\"red\"] or text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"//tr[@class=\"itemviewColor02\"]/following-sibling::tr",
"url":"^http://kakaku\\.com/item/[^/]+/pricehistory/",
"nextLink":"//a[@class=\"arrowNext01\"]"
},
{
"pageElement":"//div[@class=\"listList\"]",
"url":"^https?://employment\\.en-japan\\.com/search/",
"nextLink":"//a[starts-with(text(), \"\u6b21\u306e\")]"
},
{
"pageElement":"//div[@class=\"sort_pager_wrap\"]/preceding-sibling::*",
"url":"^http://www\\.baitoru\\.com/jobSearch\\.do\\?",
"nextLink":"id(\"select_text\")/following-sibling::a[1]"
},
{
"pageElement":"id(\"serp\")/*",
"url":"^http://code\\.google\\.com/hosting/search\\?",
"nextLink":"id(\"serp\")/following::a[contains(., \"Next\")][1]"
},
{
"pageElement":"id(\"days\")/div",
"url":"^https?://(?:d|[^.]+\\.g)\\.hatena\\.ne\\.jp/",
"nextLink":"//a[@rel=\"prev\"]"
},
{
"pageElement":"id(\"tweetDetail\")/tbody/tr",
"url":"^http://(?:www\\.)?twimono\\.com/[^/]+/ASIN=.",
"nextLink":"//a[@class=\"page_next\"]"
},
{
"pageElement":"id(\"current-content\")/div[contains(@class,\"hentry\")]",
"url":"^http://selebriti\\.mentalmasturbasyon\\.com/",
"nextLink":"id(\"nav-below\")/div[@class=\"nav-previous\"]/a"
},
{
"pageElement":"//div[@class=\"left\"]/*[self::h3 or self::div[@class=\"body\"]]",
"url":"^http://imihu\\.blog30\\.fc2\\.com/(?:$|page)",
"nextLink":"//a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"id(\"photoGallery\")",
"url":"^http://www\\.friendster\\.com/viewphotos.php",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"//div/div/table/tbody/tr/td/table",
"url":"^http://www\\.getchu\\.com/php/search\\.phtml",
"nextLink":"//a[@title=\"next page\"]"
},
{
"pageElement":"id(\"friendList\")",
"url":"^http://profile\\.livedoor\\.com/[^/]+/friend",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"//div[@class=\"subcontent\"]",
"url":"^http://(?:www\\.)?anandtech\\.com/show/\\d+/",
"nextLink":"//div[@class=\"article_links\"]/a[@class=\"right\"]"
},
{
"pageElement":"//div[@class=\"article\"]",
"url":"^http://developer\\.mozilla\\.org/[^/]+/docs/",
"nextLink":"//div[@class=\"prevnext\"]/p//span[last()]/a"
},
{
"pageElement":"//center/a",
"url":"^http://mure\\.hp\\.infoseek\\.co\\.jp/comic/",
"nextLink":"//center/a"
},
{
"pageElement":"//table[@class=\"cal_container\"]",
"url":"^http://(?:www\\.)?myepisodes\\.com/cal\\.php",
"nextLink":"id(\"calendar\")//td[@class=\"cal_navi_right\"]/a"
},
{
"pageElement":"id(\"paperI\")/div[@class=\"content rs\"]/div[@class=\"cc\"]",
"url":"^http://bandaancha\\.eu/foro/cable/r-galicia",
"nextLink":"id(\"forums_forum\")/div/div/strong[1]/following-sibling::a[1]"
},
{
"pageElement":"id(\"contents\")/div",
"url":"^http://blog\\.wakakitamiki\\.coolblog\\.jp/",
"nextLink":"id(\"contents\")/ul[@class=\"navi\"]//a[text()=\">>\"]"
},
{
"pageElement":"id(\"main-contents\")/*[following::*[contains(@class, \"mp-ie\")]]",
"url":"^https?://(?:www\\.)?zai\\.ne\\.jp/articles/",
"nextLink":"id(\"multipage\")/*[contains(@class, \"next-p\")]/a"
},
{
"insertBefore":"//div[@class=\"content_pane\"]/p[last()]",
"pageElement":"//div[@class=\"content_pane\"]/dl",
"url":"^http://find\\.2ch\\.net/(?:index\\.php)?\\?",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"content\")",
"url":"^http://coderepos\\.org/share/changeset/\\d*",
"nextLink":"//link[@rel=\"prev\"]"
},
{
"insertBefore":"id(\"mod-trackbacks\")/following-sibling::node()[last()]",
"pageElement":"id(\"mod-prev-next\")/following-sibling::div[@class=\"mod-entry-set\"]",
"url":"^http://blog\\.goo\\.ne\\.jp/sppw6739(?:$|/)",
"nextLink":"//li[@class=\"mod-pre-nex-prev\"]/a"
},
{
"insertBefore":"id(\"ctl00_ctl00__MainContent__MainContent__ListView2\")",
"pageElement":"id(\"ctl00_ctl00__MainContent__MainContent__ListView\")",
"url":"^http://www\\.fezero\\.jp/com_imglist\\.aspx",
"nextLink":"id(\"ctl00_ctl00__MainContent__MainContent__NextPage\")"
},
{
"pageElement":"//div[@class=\"siv_artPara\" or @class=\"siv_artList\" or @class=\"siv_thumbs\"]/*",
"url":"^http://sportsillustrated\\.cnn\\.com/vault/",
"nextLink":"//td[@class=\"onpage\"]/following-sibling::td[@class=\"page\"][1]/a"
},
{
"pageElement":"id(\"brw\")/div[@class=\"containerdiv\"]",
"url":"^http://(?:www\\.)?subimg\\.net/browse\\.php",
"nextLink":"id(\"nav\")/a[contains(text(),\">\")]"
},
{
"insertBefore":"//body/center/a[@href=\"confirm.htm\"]/preceding-sibling::br[1]",
"pageElement":"//table[@class=\"torrents\"]//th[text()=\"Active torrents\"]/ancestor::table[@class=\"torrents\"]",
"url":"^http://mullemeck\\.serveftp\\.org/jps_beta/",
"nextLink":"//table[@class=\"torrents\"]//th[text()=\"Active torrents\"]/ancestor::table[@class=\"torrents\"]//td[@class=\"torrentsFoot\"]/a[text()=\"Next\"]"
},
{
"pageElement":"id(\"forums_forum\")//ul[@class=\"topics\"]",
"url":"^http://bandaancha\\.eu/foro/cable/r-galicia",
"nextLink":"id(\"forums_forum\")//div[@class=\"pages\"]/strong/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"search-results\"]",
"url":"^http://www\\.zdf\\.de/ZDFde/suche\\.html\\?",
"nextLink":"//li[@class=\"pr-highlight\" and ./span]/following-sibling::li[@class=\"pr-highlight\"]/a"
},
{
"insertBefore":"id(\"result-main-l-in\")/ol[last()]/following-sibling::node()",
"pageElement":"id(\"result-main-l-in\")/ol",
"url":"^http://blog-search\\.yahoo\\.co\\.jp/search",
"nextLink":"id(\"next\")/a"
},
{
"pageElement":"id(\"entries\")",
"url":"^http://(?:www\\.)?whitepages\\.com\\.au/wp/",
"nextLink":"//a[text()=\"Next\"]"
},
{
"insertBefore":"id(\"content\")/node()[last()]",
"pageElement":"id(\"content\")/table",
"url":"^http://[^.]+\\.meiwasuisan\\.com/bbs/[^/]+/",
"nextLink":"//font[@class=\"pagerCurrent\"]/parent::b/following-sibling::a[@class=\"pagerNotCurrent\"][1]"
},
{
"pageElement":"id(\"YshpMdResultGroupingGrid YshpMdResultGroupingList\")/*",
"url":"^http://shopping\\.yahoo\\.co\\.jp/search\\?",
"nextLink":"id(\"YshpMdSearchPagingBottom\")//td[@class=\"elNxt\"]/a"
},
{
"insertBefore":"//p[@class=\"menu_bottom\"]",
"pageElement":"//div[@class=\"main\"]",
"url":"^http://www5e\\.biglobe\\.ne\\.jp/~aji/3min/",
"nextLink":"//p[@class=\"menu_bottom\"]/span[3]/a"
},
{
"pageElement":"//ul[@class=\"articleList\"]/div",
"url":"^http://plaza\\.rakuten\\.co\\.jp/gnr(?:/g)?",
"nextLink":"//div[contains(concat(\" \",@class,\" \"),\" pageNavi \")]/a[contains(text(),\"\u6b21\")]"
},
{
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://www\\.skyarc\\.co\\.jp/engineerblog/",
"nextLink":"//a[@class=\"link_next\"]"
},
{
"pageElement":"//div[@class=\"entry-asset asset\"]",
"url":"^http://blog\\.parco-city\\.com/blog-across/",
"nextLink":"//link[@rel=\"prev\"]"
},
{
"pageElement":"id(\"aspnetForm\")//div[@class=\"contentsBorder\"]/div[not(contains(@class, \"kensu_hyoujiBorder\"))]",
"url":"^http://www\\.mapple\\.net/by(?:theme)?area/",
"nextLink":"//span[@class=\"kh_next\"]/a"
},
{
"pageElement":"id(\"con-list\")/div[@class=\"kekka-waku\"]",
"url":"^http://www\\.its-mo\\.com/contents/tourism/",
"nextLink":"id(\"con-list\")/div[@class=\"lst-pg\"]/span[@class=\"act\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"ipbwrapper\")/div[@class=\"tableborder\"]/*[self::table or self::div[@class=\"darkrow1\"]] | id(\"ipbwrapper\")/form/div[@class=\"tableborder\"]/table/tbody/tr",
"url":"^http://forum\\.aniguide\\.ru/index\\.php\\?",
"nextLink":"id(\"ipbwrapper\")/table/tbody/tr/td/a[1][text()=\"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u044b:\"]/following-sibling::b[1]/following-sibling::a[1][not(contains(@href, \"getnewpost\"))]"
},
{
"insertBefore":"id(\"maincontent\")/form/div[@class=\"pgbox\" and position()=2]",
"pageElement":"id(\"maincontent\")/form/div[@class=\"pgbox\" and position()=1]",
"url":"^http://aur\\.archlinux\\.org/packages\\.php",
"nextLink":"id(\"pages\")/a[@class=\"page_num\" and text()=\"Next\"]"
},
{
"pageElement":"//hr[1]/following-sibling::*[following::hr[2]]",
"url":"^http://hp\\d+\\.0zero\\.jp/novel/page\\.php",
"nextLink":"//a[@accesskey=\"3\"]"
},
{
"pageElement":"id(\"search_contents\")/div[contains(@class,\"search_results\")]",
"url":"^http://www\\.muji\\.net/store/cmdty/search2",
"nextLink":"id(\"i-search\")//div[contains(@class,\"paging_area_top\")]/a[.=\">>\"]"
},
{
"pageElement":"id(\"mainColumn\")/div[@class=\"entryWrap\"]",
"url":"^http://keiba\\.radionikkei\\.jp/keiba/news/",
"nextLink":"id(\"pager\")//a[contains(., \"\u6b21\")]"
},
{
"insertBefore":"(//a[text()=\"NEXT>\" or text()=\">>\"])[2]/ancestor::table[1]",
"pageElement":"id(\"_ctl1_DataList1\")",
"url":"^http://www\\.altphotos\\.com/Gallery\\.aspx",
"nextLink":"//a[text()=\"NEXT>\" or text()=\">>\"]"
},
{
"pageElement":"//div[@class=\"resultBox\"]/div[contains(@class,\"resultInfo\")]",
"url":"^http://www\\.pixiv\\.net/event_circle\\.php",
"nextLink":"id(\"pager\")/a[last()]"
},
{
"pageElement":"id(\"content_in\")",
"url":"^http://(?:ecopedia|vegegohan)\\.moura\\.jp/",
"nextLink":"//div[@class=\"navigation\"]/span[@class=\"alignleft\"]/a"
},
{
"pageElement":"id(\"main\")/table[contains(@class, \"entry_table\")]",
"url":"^http://nihonnagonago\\.blog115\\.fc2\\.com/",
"nextLink":"//div[@class=\"entry_navi\"]/a[last()]"
},
{
"pageElement":"id(\"mainbody\")/table[contains(concat(\" \", @class, \" \"), \" datatable_full \") or @class=\"mytable\"]/tbody/tr[./td[not(@class=\"thheadercell\")]]|id(\"mainbody\")/div[@class=\"list_wrapper\"]/table/tbody/tr[not(@class=\"sortable_headers\")]",
"url":"^http://www\\.mathworks\\.com/matlabcentral/",
"nextLink":"//img[@alt=\"nextpage\"]/parent::a|id(\"pageoptions\")//a[contains(., \">\")]|//a[@class=\"next\"]"
},
{
"pageElement":"id(\"feedcontent\")/following-sibling::*[./following-sibling::div[@class=\"readmore\"]]",
"url":"^http://(?:www\\.)?ebooksbay\\.org/.+/\\d+/$",
"nextLink":"id(\"items\")//a[@class=\"fl\"]"
},
{
"insertBefore":"//div[@class=\"div_l_main_left01\"]/ul[@class=\"ul02\"]",
"pageElement":"//div[@class=\"div_l_main_left01_left01\"]",
"url":"^http://www\\.weddingpark\\.net/(?!search/).",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"texts-list\")",
"url":"^http://(?:www\\.)?textsfromlastnight\\.com/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" body \") or contains(concat(\" \", @class, \" \"), \" search-result \")]",
"url":"^http://wiki\\.livedoor\\.jp/[^/]+/search\\?",
"nextLink":"//a[starts-with(@href,\"search?keywords\") and preceding-sibling::*[position()=1 and self::strong]]"
},
{
"pageElement":"//div[@class=\"ybks-md17\" or @class=\"ybks-md117\"]",
"url":"^http://books\\.yahoo\\.co\\.jp/new_release/",
"nextLink":"//a[text()=\"\u6b21\u306e20\u4ef6\"]"
},
{
"pageElement":"id(\"latest\")/tbody/tr",
"url":"^http://labs\\.trolltech\\.com/forums/forum/",
"nextLink":"//a[contains(@class, \"next\")]"
},
{
"pageElement":"//table//table[2]/tbody/tr[position()!=last()]",
"url":"^http://(?:www\\.)?spirituosen-volland\\.de/",
"nextLink":"//a[.=\">>\"]"
},
{
"pageElement":"id(\"main\")/ul[@class=\"pList\"]",
"url":"^http://(?:www\\.)?photolibrary\\.jp/search/",
"nextLink":"id(\"main\")//span[@class=\"next\"]/a"
},
{
"pageElement":"id(\"content\")/div[@class=\"entry-container-home\"]",
"url":"^http://(?:(?:us|www)\\.)?consumerist\\.com/",
"nextLink":"id(\"results-next-link\")/a"
},
{
"pageElement":"id(\"FolderView\")//input/ancestor::div[1]|id(\"FolderView\")//input/ancestor::div[1]/following-sibling::b[1]",
"url":"^http://mobile\\.live\\.com/hm/folder\\.aspx",
"nextLink":"//a[@accesskey=\"3\"]"
},
{
"pageElement":"//div/div[4]/table[1]/tbody/tr/td/div[1]/form",
"url":"^http://www\\.webcg\\.net/WEBCG/impressions/",
"nextLink":"//a[contains(img/@src,\"/image/btn_contents_next.gif\")]"
},
{
"pageElement":"id(\"kiji\")",
"url":"^http://techon\\.nikkeibp\\.co\\.jp/article/",
"nextLink":"id(\"pageNumber\")/div[@class=\"next\"]/a"
},
{
"insertBefore":"//form[1]/hr[last()]",
"pageElement":"//form[1][@action=\"magical.php\"][contains(text(),\"\uff1a\")]/*[not(self::table[contains(@align,\"right\")])]",
"url":"^http://www\\.nijibox3\\.com/magical/futaba/",
"nextLink":"//form[contains(@action,\".htm\")][last()]"
},
{
"pageElement":"id(\"primary\")//div[contains(@class, \"primary_leaf_body\")]",
"url":"^http://www\\.nikkeibp\\.co\\.jp/article/sj/",
"nextLink":"id('primary')//a[descendant::*[text()=\"\u6b21\u3078\"]]"
},
{
"pageElement":"id(\"pagehistory\")/li",
"url":"/index\\.php\\?(?:.+&)?action=history(?:&|$)",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"main\")/div[@class=\"post\"]",
"url":"^http://www\\.octech\\.jp/modules/wordpress/",
"nextLink":"id(\"wp_page_numbers\")/ul/li[@class=\"active_page\"]/following-sibling::li[1]/a"
},
{
"pageElement":"//div[@class=\"mibbs_thread\" and not(./div[@class=\"common_midashi\"])]",
"url":"^http://www\\.e-mansion\\.co\\.jp/bbs/board/",
"nextLink":"//span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"content\")/div",
"url":"^https?://twitter\\.com/[^/]+/status(?:es)?/",
"nextLink":"//span[contains(@class,\"entry-meta\")]/a[not(@class=\"entry-date\") and (starts-with(@href,\"http://twitter.com/\") or starts-with(@href,\"https://twitter.com/\")) and (contains(@href,\"/status/\") or contains(@href,\"/statuses/\"))]"
},
{
"insertBefore":"id(\"pages\")",
"pageElement":"id(\"wrapper\")//div[contains(concat(\" \", @class, \" \"), \" articlebody \")]",
"url":"^http://trendy\\.nikkeibp\\.co\\.jp/article/",
"nextLink":"id(\"pages\")/a[contains(concat(\" \", @class, \" \"), \" next \")]"
},
{
"pageElement":"//node()[preceding-sibling::p and (following-sibling::a/@accesskey or following-sibling::input) or preceding-sibling::node()[1]//@name=\"form1\"]",
"url":"^http://(?:www\\.)?accessup\\.org/\\w+/\\w+/",
"nextLink":"//a[@accesskey]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" cate \")]/following-sibling::node()[following::div[contains(concat(\" \", @class, \" \"), \" cate \")]]",
"url":"^http://esupa\\.xrea\\.jp/nicky/nicky\\.cgi",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pastlink \")]/a[text() = \">>\"]"
},
{
"pageElement":"id(\"memo-navigation-top\")//div[@class=\"box-body\"]/*[preceding-sibling::*[contains(@class,\"chapter\")]][following-sibling::div[@class=\"channel-navigation\"]]",
"url":"^http://ugomemo\\.hatena\\.ne\\.jp/opening_",
"nextLink":"id(\"memo-navigation-top\")//div[@class=\"channel-navigation\"]//img[@alt=\"NEXT\"]/parent::a"
},
{
"pageElement":"//p",
"url":"^http://yamagata\\.int21h\\.jp/tool/Markov/",
"nextLink":"//a[@accesskey=\"#\"]"
},
{
"pageElement":"id(\"items_list\")/table",
"url":"^http://(?:www\\.)?w-canvas\\.com/shopping/",
"nextLink":"id(\"items_list\")/div/b/following-sibling::a[1]"
},
{
"pageElement":"id(\"alpha-inner\")/*[(self::h2 and contains(concat(\" \", @class, \" \"), \" date-header \")) or (self::div and contains(concat(\" \", @class, \" \"), \" entry \"))]",
"url":"^http://(?:[^./]+\\.)+typepad\\.(?:com|jp)/",
"nextLink":"id(\"alpha-inner\")/div[contains(concat(\" \", @class, \" \"), \" pager \")]/div[@class=\"pager-inner\"]/span[@class=\"pager-right\"]/a"
},
{
"pageElement":"id(\"main_middle\")/div[1]/div[2]/*",
"url":"^http://any6\\.jp/(?:search\\.php|watch_b/)",
"nextLink":"id(\"main_middle\")/div[1]/div[2]/a[last()][img]"
},
{
"insertBefore":"//div[@class=\"main\"]",
"pageElement":"id(\"commentsArea\")",
"url":"^http://www\\.fark\\.com/cgi/comments.pl\\?",
"nextLink":"id(\"bodyHeadlineContainer\")/center//a[.=\"\u00bb\"]"
},
{
"pageElement":"id(\"list\")",
"url":"^https://www\\.google\\.com/a/cpanel/[^/]+/",
"nextLink":"//tr//ul[@class=\"inlinelist\"]//a[contains(text(),\"\u203a\")]"
},
{
"pageElement":"id(\\\"mypageWrapper\\\")",
"url":"^http://www\\.bookoffonline\\.co\\.jp/disp/",
"nextLink":"//div[@class=\\\"numNavi\\\"]//a[contains(text(),\\\">>\\\")]"
},
{
"pageElement":"id(\"leftCol\")/div[@class=\"mainPhoto\" or @class=\"photoDesc\"]",
"url":"^http://content\\.techrepublic\\.com\\.com/",
"nextLink":"id(\"leftCol\")/div[@class=\"imgNav\"]/a[last()]"
},
{
"pageElement":"//div[@class=\"results\"]",
"url":"^http://(?:www\\.)?torrentz\\.com/search\\?",
"nextLink":"//div[@class=\"results\"]/p//a[contains(., \"\u00bb\")]"
},
{
"pageElement":"//table[@class=\"list\"]",
"url":"^http://www\\.aozora\\.gr\\.jp/index_pages/",
"nextLink":"//a[contains(text(),\"\u6b21\u306e50\u4ef6\")]"
},
{
"pageElement":"//tr[1]/td[@class=\"text_white\"]/table",
"url":"^http://(?:www\\.)?uniforme\\.jp/shopbrand/",
"nextLink":"//td[@class=\"pagesita\"]//a[contains(text(),\"[\u6b21]\")]"
},
{
"pageElement":"id(\"content\")/fieldset/ul",
"url":"^http://(?:www\\.)?mp3realm\\.org/search\\?",
"nextLink":"//li[@class=\"Nextpage\"]/a"
},
{
"insertBefore":"(id(\"mgb_blog\")/div[@class=\"mgc_box_md\"]/div[@class=\"mgc_pic_m_set\"])[last()]/following-sibling::node()[1]",
"pageElement":"id(\"mgb_blog\")/div[@class=\"mgc_box_md\"]/div[@class=\"mgc_pic_m_set\"]",
"url":"^http://blog\\.days\\.yahoo\\.co\\.jp/blog/",
"nextLink":"id(\"mgb_blog\")/div[@class=\"mgc_box_md\"]/div[@class=\"mgc_pagenation\"]/a[last()]"
},
{
"pageElement":"//hr[last()]/preceding-sibling::ul[1]/li",
"url":"^http://search\\.vector\\.co\\.jp/search\\?",
"nextLink":"//hr[last()]/preceding-sibling::div[1]/a"
},
{
"pageElement":"id(\"rank\")/div[@class=\"rk\"]/table",
"url":"^http://cache001\\.ranking\\.goo\\.ne\\.jp/",
"nextLink":"id(\"rank\")/div[@class=\"rk\"]//span[@class=\"cur\"]/following-sibling::span[1]/a"
},
{
"pageElement":"//table[@class=\"medium tb_bd\"]/tbody/tr[@bgcolor=\"#ffffff\"]",
"url":"^http://www\\.auhikari\\.jp/tv/vod/sakuhin/",
"nextLink":"//a[.=\"\u6b21\u306e\u7d50\u679c\"]"
},
{
"pageElement":"id(\"forum\")/table|id(\"comments\")/*[not(@class=\"item-list\")]",
"url":"^http://portableapps\\.com/(?:forums|node)/",
"nextLink":"//li[@class=\"pager-next\"]/a"
},
{
"pageElement":"//div[@class=\"h\"]",
"url":"^http://(?:[^.]+\\.)?m\\.yahoo\\.com/p/mail",
"nextLink":"//div[@class=\"l\"]/text()/following-sibling::a[1]"
},
{
"pageElement":"//div[contains(@class,\"FeatureBody\")]",
"url":"^http://(?:www\\.)?dommune\\.com/ele-king/.",
"nextLink":"//span[@class=\"EntryNaviOn\"][count(a)=0]/following-sibling::node()/a"
},
{
"pageElement":"id(\"zebra\")//table[@class=\"qlist\"]",
"url":"^http://(?:www\\.)?moug\\.net/(?:faq|tech)/",
"nextLink":"(id(\"center\")/div[@class=\"txtC\"]|id(\"zebra\"))/b/following-sibling::a[1]"
},
{
"insertBefore":"//div[@class=\"Pages\"]/following-sibling::node()[1]",
"pageElement":"id(\"GoodStuff\")/div",
"url":"^http://www\\.flickr\\.com/photos/tags/[^/]",
"nextLink":"//a[@class=\"Next\"]"
},
{
"pageElement":"//div[@class=\"entry\"]|//table[@class=\"listing\"]",
"url":"^http://(?:(blog\\.)?jogger|techblog)\\.pl/",
"nextLink":"//div[@class=\"pager\"]/ul/li[@class=\"active\"]/following-sibling::li[1]/a|//div[@class=\"pager\"]/ul[not(./li[@class=\"active\"])]/li/a[contains(., \"\u00ab\")]"
},
{
"pageElement":"id(\"iza_SSMainBody\")//img[@class=\"content_img\"]",
"url":"^http://www\\.iza\\.ne\\.jp/news/newsphoto/",
"nextLink":"id(\"iza_SSMainChgLinks\")//a[img[@src=\"http://prt.iza.ne.jp/images/photo/photo_botan_02.gif\"]]"
},
{
"insertBefore":"id(\"footer_with_ads_block\")",
"pageElement":"id(\"content\")",
"url":"^http://(?:www\\.)?wherewedowhatwedo\\.com/",
"nextLink":"//li[contains(@class, \"pagination_link\")]/a[contains(text(),\"Next Page\")]"
},
{
"pageElement":"id(\"photoswftd\")/*",
"url":"^http://www\\.flickr\\.com/photos/[^/]+/\\d",
"nextLink":"//a[@class=\"contextThumbLink\"][./img[@class=\"nextprev_thumb\"]][1]"
},
{
"pageElement":"//ul[@class=\"videolist\"][1]",
"url":"^http://b\\.hatena\\.ne\\.jp/video(?:$|\\?)",
"nextLink":"//a[@class=\"pager-next\"][1]"
},
{
"insertBefore":"//table[@id=\"mobile_window\"]/tbody/tr/td/hr[1]",
"pageElement":"//div[@id=\"pcfrm_mobile\"]",
"url":"^http://www\\.mbga\\.jp/\\.pc/_novel_page.+",
"nextLink":"//table[@id=\"mobile_window\"]/tbody/tr/td/center/a[contains(text(), \"\u6b21\u3078#\u2192\")]"
},
{
"pageElement":"id(\"pixiv\")",
"url":"^http://www\\.pixiv\\.net/search_user\\.php",
"nextLink":"id(\"wrapper\")/div[@style]/div[@class=\"f14b\"]/following-sibling::div[1]/a[contains(text(), \">>\")]"
},
{
"pageElement":"id(\"watchers\")",
"url":"^https?://github\\.com/[^/]+/[^/]+/watchers",
"nextLink":"//div[@class=\"pagination\"]/span[@class=\"current\"]/following-sibling::a"
},
{
"pageElement":"//div[@class=\"ys\"]",
"url":"^http://www\\.amazon\\.co\\.jp/gp/yourstore",
"nextLink":"id(\"ysMoreResults\")/parent::a"
},
{
"pageElement":"//table[@width=\"300px\"]",
"url":"^http://www\\.shareapic\\.net/content\\.php",
"nextLink":"//td[last()]/div[contains(concat(\" \",@class,\" \"),\" prevNextThumbsHolder \")]/div[last()]/a"
},
{
"pageElement":"//div[@class=\"ResultUnder\"]/preceding-sibling::*",
"url":"^http://[^.]+\\.date-navi\\.jp/spot/result/",
"nextLink":"//div[@class=\"ResultUnder\"]/ul/li/a[contains(., \"\u6b21\")]"
},
{
"pageElement":"id(\"main_right\")/div/div/div[contains(@class, \"tr_bg\")]",
"url":"^http://book\\.akahoshitakuya\\.com/bl/\\d+",
"nextLink":"id(\"main_right\")/div/div/div[@class=\"page_navis\"]/span[@class=\"now_page\"]/following-sibling::span/a"
},
{
"pageElement":"id(\"links\")/preceding-sibling::div[@class=\"content\"][1]/*[not(contains(@class, \"pager\"))]",
"url":"^http://web-tan\\.forum\\.impressrd\\.jp/e/",
"nextLink":"id(\"main\")//a[@class=\"pager-next\"]"
},
{
"pageElement":"(//a[text()=\"\u300e\u623b\u308b\u300f\"]/preceding-sibling::*[preceding::form])[position() > 1 and position() < last()-1]",
"url":"^http://hide\\.maruo\\.co\\.jp/lib/hilight/",
"nextLink":"//a[text()=\"\u300e\u623b\u308b\u300f\"]/preceding-sibling::table[position()=1]//td[child::b]/following-sibling::td[position()=1]/a"
},
{
"pageElement":"id(\"td_body\")/div/table",
"url":"^http://(?:www\\.)?tinami\\.com/search/list",
"nextLink":"id(\"next-page\")/a"
},
{
"pageElement":"/descendant::table[@class=\"small-text\"][1]/ancestor::tr[1]/following-sibling::tr[@valign]",
"url":"^http://portal\\.acm\\.org/results\\.cfm\\?",
"nextLink":"/descendant::table[@class=\"small-text\"][last()]//a[contains(., \"next\")]"
},
{
"pageElement":"id(\"articlecontent\")",
"url":"^http://emedicine\\.medscape\\.com/article/",
"nextLink":"id(\"tocnextlink\")/a"
},
{
"pageElement":"id(\"content\")/*[(self::div and (@class=\"post\" or @class=\"postfoot\")) or self::h2]",
"url":"^http://www\\.newsfire(?:rss|x)\\.com/blog/",
"nextLink":"id(\"content\")/ul[@class=\"postfoot\"]/li[contains(concat(\" \", @class, \" \"), \" next \")]/a"
},
{
"pageElement":"//table[@class=\"table1\"]",
"url":"^http://(?:www\\.)?suruga-ya\\.jp/database/",
"nextLink":"//a[contains(text(), \">>\")]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" content \")]",
"url":"^http://(?:www\\.)?xbitlabs\\.com/articles/",
"nextLink":"//a[contains(concat(\" \", @class, \" \"), \" next-page \")]"
},
{
"pageElement":"id(\"main_content\")/div[descendant::div[contains(@id, \"spot\")]]",
"url":"^http://www\\.instructables\\.com/id/[^/]+/",
"nextLink":"id(\"nextstepbutton\")"
},
{
"pageElement":"id(\"posts\")/*",
"url":"^http://www\\.tumblr\\.com/dashboard/\\d+/-",
"nextLink":"id(\"previous_page_link\")"
},
{
"pageElement":"//div[@class=\"article\"]",
"url":"^http://d\\.moccori\\.com/(?:$|index\\.php)",
"nextLink":"//a[@title=\"next page\"]"
},
{
"pageElement":"id(\"pagecontainer\")",
"url":"^http://www\\.photogen\\.com/free\\-photos/",
"nextLink":"//b[@class=\"pagingon\"]/following-sibling::a"
},
{
"insertBefore":"//table[5]",
"pageElement":"//table[4]",
"url":"http://bt\\.aisex\\.com/bt/thread\\.php\\?.",
"nextLink":"//table[last()]/tbody/tr/td/b/following-sibling::a"
},
{
"pageElement":"//div[@class=\"list_mdb\"]/div[contains(concat(\" \", @class, \" \"), \" list_detail \")]",
"url":"^http://phonebook\\.yahoo\\.co\\.jp/search/",
"nextLink":"//span[@class=\"listNext\"]/a"
},
{
"pageElement":"//td[@class=\"entry\"]/div/table",
"url":"^http://blog\\.goo\\.ne\\.jp/thetrailstore/",
"nextLink":"//span[@class=\"etNextPrev\" and contains(., \"\u524d\")]/parent::a"
},
{
"pageElement":"id(\"contentsarea2_2\")/form/table",
"url":"^http://house\\.goo\\.ne\\.jp/(?:buy|rent)/",
"nextLink":"//a[text()=\"\u6b21\u3078\u2192\"]"
},
{
"pageElement":"id(\"ygrp-results\")/div[@class=\"ygrp-contentblock\"]/table[@class=\"datatable\"]",
"url":"^http://[^.]+\\.dir\\.groups\\.yahoo\\.com/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" headview \")]/a[contains(., \">\")]"
},
{
"pageElement":"//div[@class=\"products_body\"]",
"url":"^http://www\\.yodobashi\\.com/ec/category/",
"nextLink":"//div[@class=\"paging02\"]//li[preceding-sibling::li[span[@class=\"prepage_bg\"]]][1]/a"
},
{
"insertBefore":"//*[contains(concat(\" \",normalize-space(@class),\" \"), \" autopagerize_insert_before \")]",
"pageElement":"//*[contains(concat(\" \",normalize-space(@class),\" \"), \" autopagerize_page_element \")]",
"url":"^http://www\\.toranoana\\.jp/shop/arrival/",
"nextLink":"id(\"content\")/div[@class=\"pagenavi\"]//li[last()]/a"
},
{
"pageElement":"//td[@class=\"left_outline\"]/../td[2]/*[position() < 3]",
"url":"^http://netamichelin\\.blog68\\.fc2\\.com/",
"nextLink":"//center/a[@title=\"\u306d\u305f\u30df\u30b7\u30e5\u30e9\u30f3\"]/following-sibling::a[1]"
},
{
"pageElement":"//div[contains(@class, \"contents\")]/table",
"url":"^http://latlonglab\\.yahoo\\.co\\.jp/race/",
"nextLink":"//div[contains(@class, \"contents\")]/table/tbody/tr[1]/td/a[contains(text(), \"\u6b21\")]"
},
{
"pageElement":"//img",
"url":"^http://www5a\\.biglobe\\.ne\\.jp/~yo-he-/",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id('main')/div",
"url":"^http://4b\\.yahoo\\.co\\.jp/contents/\\w+",
"nextLink":"//span[@class=\"pageRight\"]/a"
},
{
"pageElement":"//body/table/tbody/tr/td/table[3]",
"url":"^http://opera-info\\.de/forum/thread\\.php",
"nextLink":"//link[@rel=\"next\"]"
},
{
"pageElement":"id(\"container\")//div[@class=\"entry\"]",
"url":"^http://blog\\.canpan\\.info/[^/]+/archive",
"nextLink":"id(\"container\")/div[@class=\"page\"]/a"
},
{
"pageElement":"id(\"mainContentsBody\")/div[contains(concat(\" \", @class, \" \"), \" albumDetail \")]",
"url":"^http://pcpp\\.jp/[^/]+/[^/]+/album/photo/",
"nextLink":"//a[@class=\"png_bg next-navi\"]"
},
{
"pageElement":"id(\"gl_content-wide-right\")/div[@class=\"story\" or @class=\"block-divider\"]|id(\"gl_content-wide-right\")/div[@class=\"block-box\"]/*[self::div or self::br]",
"url":"^http://(?:www\\.)?evilmadscientist\\.com/",
"nextLink":"id(\"gl_content-wide-right\")/div[@class=\"pagenav\"]/b/following-sibling::a[1]|id(\"gl_content-wide-right\")/div[@class=\"block-box\"]/p/a[.=\"Next\"]"
},
{
"pageElement":"//img[contains(@src,\"bar_top.gif\") or contains(@src,\"bar_l.gif\")]/ancestor::table[2]",
"url":"^http://widgets\\.yahoo\\.co\\.jp/gallery/",
"nextLink":"//a[contains(text(), \"\u6b21\u3078\")]"
},
{
"pageElement":"id(\"resList\")/form/div[contains(@class,\"list_group\")]",
"url":"^http://www\\.bookoffonline\\.co\\.jp/disp",
"nextLink":"//a[contains(text(),\"\u6b21\u3078\")]"
},
{
"pageElement":"id(\"contents\")//div[@class=\"main-pager\"]/..",
"url":"^http://blog\\.oricon\\.co\\.jp/_contents/",
"nextLink":"id(\"contents\")//div[@class=\"main-pager\"]/a[last()]"
},
{
"pageElement":"id(\"contents\")",
"url":"^http://(?:www\\.)?watts-jp\\.com/cathand/",
"nextLink":"id(\"cathandList\")/div[@class=\"menu\"]/*[last()][self::a]"
},
{
"pageElement":"//div[@class=\"txt01\"]",
"url":"^http://www\\.richcontent\\.jp/relayessay/",
"nextLink":"//div[@class=\"page_link\"]//a[text()=\">>\"]"
},
{
"pageElement":"id(\"contents\")/div[@class=\"textInfo\"]",
"url":"^http://sp\\.gnavi\\.co\\.jp/search/theme/",
"nextLink":"id(\"contents\")/div[@class=\"nav\"]/p[not(@class)]/strong/following-sibling::a[1]"
},
{
"pageElement":"//span[@class=\"paginando\"]/../preceding-sibling::*",
"url":"^http://(?:www\\.)?espal(?:psp|wii)\\.com/",
"nextLink":"//span[@class=\"paginando\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"content\")/table[.//img]",
"url":"^http://www\\.adiumxtras\\.com/index\\.php",
"nextLink":"id(\"content\")/table[last()]//a[contains(text(),\"Next Page\")]"
},
{
"pageElement":"id(\"content\")/h4/following-sibling::node()[following-sibling::form[@id=\"search\"]]",
"url":"^http://xoops\\.ec-cube\\.net/search\\.php",
"nextLink":"id(\"content\")//td[@align=\"right\"]/a[contains(text(),\">>\")]"
},
{
"pageElement":"id(\"boxes\")//table[following::p[@class=\"pager\"] and preceding::p[@class=\"pager\"]]",
"url":"^http://(?:cyrill|thimgup)\\.lilect\\.net/",
"nextLink":"id(\"boxes\")/p[@class=\"pager\"]/a[@title=\"next page\"]"
},
{
"pageElement":"id(\"beta-inner\")/div[starts-with(@id, \"entry-\")]",
"url":"^http://my_sarisari_store\\.typepad\\.com/",
"nextLink":"id(\"beta-inner\")//span[@class=\"pager-right\"]/a"
},
{
"pageElement":"id(\"contentbox\")/div[contains(@class,\"news-summary\")]",
"url":"^http://(?:www\\.)?applenewscentral\\.com/",
"nextLink":"//div[@class=\"pagination\"]/p/a[last()]"
},
{
"pageElement":"id(\"Contents\")/div[@class=\"Entry\" or @id=\"Comment-View\" or @id=\"Comment-Form\" or @id=\"Trackback-View\"]",
"url":"^http://specialnotes\\.blog77\\.fc2\\.com/",
"nextLink":"//a[@title=\"\u524d\u306e\u8a18\u4e8b\" or @title=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"//div[contains(concat(\" \",@class,\" \"), \" keyword-list-blog \")]",
"url":"^http://k\\.hatena\\.ne\\.jp/[^/]+/visited",
"nextLink":"//div[contains(concat(\" \",@class,\" \"), \" pager \")]/a[last()]"
},
{
"pageElement":"//form[@action=\"board.php\"]/table[@class=\"tableinborder\"]|//hr[@class=\"threadline\"]/ancestor::table[3]",
"url":"^http://[^.]+\\.pokerstrategy\\.com/forum/",
"nextLink":"//span[@class=\"smallfont\"]/span[@class=\"normalfont\"]/following-sibling::b[1]/a"
},
{
"pageElement":"id(\"NewsDetail\")",
"url":"^http://(?:www\\.)?zakzak\\.co\\.jp/[^/?#]",
"nextLink":"//a[@class=\"continue\"]"
},
{
"pageElement":"//table[contains(@summary,\"\u5199\")]",
"url":"^http://www\\.ryukyujima\\.net/photo\\.php",
"nextLink":"//a[@title=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"id(\"ime\")/parent::a",
"url":"^http://(?:www\\.)?subimg\\.net/eris\\.php",
"nextLink":"id(\"navm\")/a"
},
{
"pageElement":"id(\"_bandaiall\")/*",
"url":"^http://www\\.dmm\\.co(?:m|\\.jp)/digital/",
"nextLink":"id(\"_bandaiall\")/following-sibling::div[contains(concat(\" \", @class, \" \"), \" area-bottom \")]//a[contains(text(), \"\u6b21\u3078\")]"
},
{
"pageElement":"id(\"main2\")/table[1]",
"url":"^http://offy\\.jp/communities/\\d+/members",
"nextLink":"//div[@class=\"next\"]/a"
},
{
"pageElement":"//img[contains(@src, \"main_img02.jpg\")]/../../../../../../following-sibling::tr[following::img[contains(@src, \"try_next.gif\") or contains(@src, \"try_back.gif\")]]",
"url":"^http://www\\.dosv\\.jp/back_number/[^/]+/",
"nextLink":"//img[contains(@src, \"try_next.gif\")]/../preceding-sibling::td/a[last()]"
},
{
"pageElement":"//td[@class=\"dictionary_contents_left\"]/blockquote/*[self::ol or (self::p and not(@align)) or self::table]",
"url":"^http://www\\.excite\\.co\\.jp/dictionary/",
"nextLink":"//td[@class=\"dictionary_contents_left\"]/blockquote/p[last()]/a[contains(text(), \"\u6b21\")]|//td[@class=\"dictionary_contents_left\"]/blockquote/ol[@start=\"1\"]/*[last()=1 and self::li]/a"
},
{
"insertBefore":"id(\"_threads_link_\")[2]",
"pageElement":"//div[@align=\"center\"]/table[@width=\"95%\"]",
"url":"^http://(?:xera|moepic.?)\\.moe-ren\\.net/",
"nextLink":"id(\"_threads_link_\")/table/tbody/tr/td/strong/following-sibling::a"
},
{
"insertBefore":"//div[@class=\"inspecial_nx_bf\"]",
"pageElement":"//div[@class=\"inspecial_text\"]|//h3[preceding-sibling::div[@class=\"inspecial_read\"]][1]",
"url":"^http://finance\\.toremaga\\.com/.+\\.html",
"nextLink":"//div[@class=\"inspecial_nx_bf\"]//li[last()]/a|//li[@class=\"previous_entry\"]/a"
},
{
"pageElement":"//table[@class=\"tablebg\"]",
"url":"^http://www\\.macserialjunkie\\.com/forum/",
"nextLink":"//*[@class=\"gensmall\" or @class=\"nav\" or @class=\"pagination\"]/b/a[contains(text(),\"Next\")]"
},
{
"pageElement":"id(\"thread tree table\")",
"url":"^http://(?:www\\.)?dtptemple\\.org/imgbbs/",
"nextLink":"id(\"pager\")/ol/li[last()]/a"
},
{
"pageElement":"id(\"itemindex\")/tbody/tr",
"url":"^http://(?:www\\.)?kagoo-livingroom\\.com/",
"nextLink":"//table[@class=\"line\"]//a[contains(., \"\u6b21\")]"
},
{
"pageElement":"id(\"graphlist\")",
"url":"^http://graph\\.hatena\\.ne\\.jp/graphlist",
"nextLink":"id(\"body\")//div[@class=\"pager\"]/a[contains(text(), \">\")]"
},
{
"pageElement":"id(\"srchContent\")/ol[@class=\"srchSearchResult\"]",
"url":"^http://query\\.nytimes\\.com/search/query",
"nextLink":"id(\"srchContent\")/div[@class=\"searchWebResults\"]/a[text()=\"Next \u00bb\"]"
},
{
"pageElement":"//div[@class=\"yaut-md166\"]",
"url":"^http://drive\\.yahoo\\.co\\.jp/map/search",
"nextLink":"//div[@class=\"st03\"]/dl/dd/a[contains(text(),\"\u6b21\u3078\")]"
},
{
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://(?:bl\\.|jp\\.)?ranobe-mori\\.net/",
"nextLink":"//div[@class=\"content-nav\"]/a[not(position()=number())][1]"
},
{
"pageElement":"id(\"content-main-inner\")//div[contains(concat(\" \", @class, \" \"), \" article \")]",
"url":"^http://trendnews\\.yahoo\\.co\\.jp/\\d+/$",
"nextLink":"id(\"content-main-inner\")/div[@class=\"navigation\"]/ul/li[@class=\"current\"]/following-sibling::li[1]/a"
},
{
"insertBefore":"//div[@class=\"splitnavR\"]",
"pageElement":"//div[@class=\"story\"]",
"url":"^http://[a-z]+\\.nationalgeographic\\.com/",
"nextLink":"//a[text()=\"Next Page >>\"]"
},
{
"pageElement":"//*[self::br or self::img]",
"url":"^http://lambda\\.bugyo\\.tk/cdr/mwl\\d{2}/",
"nextLink":"//a[contains(text(),\"Next>\")]"
},
{
"pageElement":"//table[@class=\"maintable\"]",
"url":"^http://hypnopics-collective\\.net/cpg132/",
"nextLink":"//td[@class=\"tableb_compact\"]/following-sibling::td/a"
},
{
"insertBefore":"//table[2]",
"pageElement":"//p",
"url":"^http://opiumhero\\.web\\.fc2.com/pict_com",
"nextLink":"//a[starts-with(@href,\"pict_com\")]"
},
{
"pageElement":"//div[@class=\"info_list_box\"]",
"url":"^http://togetter\\.com/(?!li/\\d|tagcloud)",
"nextLink":"//div[@class=\"pagenation\"]/a[@rel=\"next\"]"
},
{
"pageElement":"id(\"articlebody\")/table//tr/td/div[2]",
"url":"^http://(?:www\\.)?technologyreview\\.com/",
"nextLink":"//a[text()=\"Next \u00bb\"]"
},
{
"pageElement":"//div[@class=\"floatholder\"]/div[@class=\"icon\" or @class=\"c\"]",
"url":"^http://(?:www\\.)?iconlet\\.com/search\\?",
"nextLink":"//div[@class=\"navigation\"]/*[last()][self::a]"
},
{
"pageElement":"id(\"primary\")//ul[starts-with(@class,\"articleList\") or contains(@class, \"article\")]",
"url":"^https?://gihyo\\.jp/[^/]+/(?:clip|serial)",
"nextLink":"id(\"primary\")//p[@class=\"next\"]/a[last()]"
},
{
"pageElement":"//center/table",
"url":"^http://cragra\\.h\\.fc2\\.com/bg[0-9]{2}/",
"nextLink":"//a[contains(text(),\"\u9032\u3080\")]"
},
{
"pageElement":"id(\"posts\")",
"url":"^http://(?:[^./]+\\.)*?elitistjerks\\.com/",
"nextLink":"//div[@class=\"pagenav\"]/table[@class=\"tborder\"]/tbody/tr/td/a[contains(text(),\">\")]"
},
{
"pageElement":"id(\"styleboxarea\")",
"url":"^http://(?:www\\.)?rasysa\\.com/pkg/style/",
"nextLink":"//img[@src=\"/pkg/style/image/style1/icn_next1.gif\"]/parent::a"
},
{
"pageElement":"//div[@class=\"ItemDesc\"]/div[1]/following-sibling::node()[following::div[@class=\"pagenavi\"]]",
"url":"^http://www\\.barks\\.jp/(?:feature|news)/",
"nextLink":"//span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"//table[@class=\"results_table\"]",
"url":"^http://www\\.hubmed\\.org/search\\.cgi\\?",
"nextLink":"//span[@class=\"prev_next\" and last()]/a[@accesskey=\"n\"]"
},
{
"pageElement":"id(\"content\")/*[self::table or (self::div and contains(concat(\" \", @class, \" \"), \" row \"))]",
"url":"^http://[^.]+\\.trek(?:lens|nature)\\.com/",
"nextLink":"id(\"pages\")/strong/following-sibling::a[1]"
},
{
"pageElement":".//div[@class=\"post-header\" or @class=\"photo\"]",
"url":"^http://hotchickswithdogswithboners\\.com/",
"nextLink":".//div[@class=\"navigation\"]//a[contains(text(),\"older\")]"
},
{
"pageElement":"//ul[@class=\"list-plain\"]",
"url":"^http://d\\d?\\.hatena\\.ne\\.jp/diarylist",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"center\")",
"url":"^http://www\\.below\\.mydns\\.jp/item/list",
"nextLink":"id(\"pagenate\")/a[last()]rn"
},
{
"pageElement":"//div[@class=\"tout\"]",
"url":"^http://search\\.time\\.com/results\\.html",
"nextLink":"//a[@title=\"Next\"]"
},
{
"pageElement":"//b[contains(text(), \"No.\")]/ancestor::table[1]",
"url":"^http://18starj\\.blogtan\\.net/list\\.php",
"nextLink":"//a[contains(text(), \">>\")]"
},
{
"pageElement":"//ul[@class=\"results-list\"]|id(\"table_images\")/tbody/tr",
"url":"^http://www\\.chicagotribune\\.com/search/",
"nextLink":"//li[@class=\"next\"]/a'"
},
{
"pageElement":"id(\"main\")/div[not(@class=\"archive-title\" or @class=\"link-area\")]",
"url":"^http://(?:www\\.)?playlog\\.jp/[^/]+/blog",
"nextLink":"id(\"main\")//a[@class=\"previousLink\"]"
},
{
"pageElement":"//div[contains(@class, \"content\")]/child::*[self::ul[contains(@class, \"threada\")] or self::table[contains(@class, \"thread\")]]",
"url":"^http://bbs\\.avi\\.jp/(?:bbs\\.php|\\d+/)",
"nextLink":"//div[@class=\"pagemove\"]/span/following-sibling::a"
},
{
"pageElement":"//ul[contains(@class, \"items\")]",
"url":"^http://wedata\\.net/databases/[^/]+/items",
"nextLink":"//div[@class=\"pagination\"]/a[@rel=\"next\"]"
},
{
"pageElement":"id(\"mainContent\")//div[contains(concat(\" \", @class, \" \"), \" story-text \")]/*",
"url":"^http://www\\.politico\\.com/news/stories/",
"nextLink":"id(\"mainContent\")//ul[@class=\"pagination\"]/li/a[contains(., \"\u00bb\")]"
},
{
"pageElement":"id(\"changes\")//tr",
"url":"^http://[^.]+\\.jottit\\.com/site/changes",
"nextLink":"id(\"pagination\")/strong/a[text()=\"Next\"]"
},
{
"pageElement":"id(\"centercol\")/div[@class=\"articleBox\"]/*[following-sibling::table/tbody/tr/td//img[(contains(@src, \"next\") or contains(@src, \"prev\")) and contains(@src, \".gif\")]]",
"url":"^http://www\\.atmarkit\\.co\\.jp/fcoding/",
"nextLink":"//img[contains(@src, \"next\") and contains(@src, \".gif\")]/parent::a"
},
{
"pageElement":"//div[@class=\"tile-row\"]",
"url":"^http://www\\.treehugger\\.com/galleries/",
"nextLink":"//div[@class=\"more-link\"]//a"
},
{
"pageElement":"id(\"mainBox\")/div[contains(concat(\" \", @class, \" \"), \" productList \")]",
"url":"^http://www\\.alibaba\\.co\\.jp/products/",
"nextLink":"id(\"mainBox\")//li[@class=\"forward\"]/a"
},
{
"pageElement":"id(\"center\")/*",
"url":"^http://www\\.netadreport\\.com/[0-9]+\\.",
"nextLink":"id(\"center\")//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"//div[@class=\"thumb_frm\"]/parent::div",
"url":"^http://www\\.nicovideo\\.jp/ranking/fav/",
"nextLink":"//a[starts-with(@href, \"http://www.nicovideo.jp/ranking/\") and contains(text(), \">>\")]"
},
{
"pageElement":"id(\"form1\")/../table[@class=\"cleantable\"]//tr[td/@class=\"alphabet\"]/following-sibling::tr|//a[@class=\"imagelink\"]",
"url":"^http://(?:www\\.)?manga\\.animea\\.net/.",
"nextLink":"id(\"form1\")/../ul[@class=\"paging\"]/li/a[.=\"Next\"]|//a[@class=\"imagelink\"]"
},
{
"pageElement":"id(\"contents\")/div[contains(concat(\" \", @class, \" \"), \" message \")]",
"url":"^http://(?:www\\.)?meister\\.ne\\.jp/bbs/",
"nextLink":"id(\"contents\")/p/a[starts-with(text(), \"NEXT>>\")]"
},
{
"pageElement":"//table[@class=\"ta\"]/parent::td/*[(self::table and @class=\"ta\" and ./tbody/tr/td[@class=\"rank\"]) or (self::br)]",
"url":"^http://www\\.rankbank\\.net/amaran/rank/",
"nextLink":"//a[@class=\"selected\"]/parent::td/following-sibling::td[1]/a[@class=\"noselected\"]"
},
{
"pageElement":"//div[@class=\"ently_outline\" or @class=\"comment_outline\" or @class=\"trackback_outline\"]",
"url":"^http://yaruomatome\\.blog10\\.fc2\\.com/",
"nextLink":"//p[@class=\"page_navi\"]/a[contains(@title,\"\u6b21\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"id(\"Imagesmain\")/*",
"url":"^http://(?:www\\.)?thedoi\\.net/post/list",
"nextLink":"id(\"main\")/p[@class=\"paginator\"]/b/following-sibling::a[1]"
},
{
"pageElement":"id(\"entry\")",
"url":"^http://kenz0\\.s201\\.xrea\\.com/weblog/",
"nextLink":"//div[@class=\"prev\"]/a"
},
{
"pageElement":"id(\"results\")/*",
"url":"^https?://www\\.visualzoo\\.com/search\\?",
"nextLink":"id(\"main\")/div[@class=\"paginate\"]//a[contains(text(), \"\u6b21\u3078\")]"
},
{
"pageElement":"//table[@class=\"lia-list-wide\"]|//div[contains(concat(\" \", @class, \" \"), \" message-list \")]",
"url":"^http://supportforums\\.blackberry\\.com/",
"nextLink":"//li[contains(concat(\" \", @class, \" \"), \" lia-paging-page-next \")]/a"
},
{
"pageElement":"id(\"overmenu\")/following-sibling::*[1] | //table[@class=\"text\" and @cellspacing=\"1\" and @cellpadding=\"2\"]",
"url":"^http://www\\.dmm\\.co(?:m|\\.jp)/.+=text",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"//ul[@class=\"searchResultItem\"]",
"url":"^http://www\\.nioibu\\.com/smell/category",
"nextLink":"id(\"searchSmell\")/div[@class=\"unitPager\"]//li[@class=\"next\"]//a"
},
{
"insertBefore":"/html/body/hr[last()]",
"pageElement":"//a[starts-with(text(),\"\u6b21\") or contains(text(),\"\u9032\u3080\")]/preceding-sibling::*[self::img or self::br or self::hr]",
"url":"^http://ueharasan\\.y\\.ribbon\\.to/html/",
"nextLink":"//a[starts-with(text(),\"\u6b21\") or contains(text(),\"\u9032\u3080\")][1]"
},
{
"pageElement":"id(\"main\")/div[contains(concat(\" \", @class, \" \"), \" section \") and not(@id=\"entry\")]",
"url":"^http://karafuto50\\.blog117\\.fc2\\.com/",
"nextLink":"id(\"flip2\")/li[@class=\"older\"]/a"
},
{
"pageElement":"id(\"contents\")/div[@class=\"event-list\" and last()]/div",
"url":"^http://clip\\.eventcast\\.jp/(?:recent)?",
"nextLink":"//p[@class=\"more\"]/a[last() and contains(text(),\"\u65b0\u7740\")] | //div[contains(concat(\" \",@class,\" \"),\" pager \")]/a[last() and contains(concat(\" \",@class,\" \"),\" next \")]"
},
{
"pageElement":"//div[contains(@class, \"entry_unit\")]",
"url":"^http://kaisun1192\\.blog121\\.fc2\\.com/",
"nextLink":"id(\"navi\")/a[1]"
},
{
"pageElement":"id(\"ok_main ok_area_lflx\")//table[@class=\"ok_list\"]/tbody/tr|id(\"q-list\")/*",
"url":"^http://(?:c\\.)?oshiete\\.goo\\.ne\\.jp/",
"nextLink":"id(\"ok_main\")/div[@class=\"ok_paging\"]//a[contains(., \">\")]|id(\"ok_area_lflx\")//a[@rel=\"next\"]|id(\"page_link_next\")"
},
{
"pageElement":"id(\"mu\")/table[.//td/@background]",
"url":"^http://www\\.dmm\\.co(?:m|\\.jp)/rental/",
"nextLink":"id(\"mu\")/table[.//@class=\"mg-b6\"]//a[.=\"\u6b21\u3078\"]"
},
{
"pageElement":"//table[@class=\"list\"]//tr | //div[@class=\"com_diary_push\"]//tr[not(@class)]",
"url":"^http://labola.jp/(?:community|recruits)/",
"nextLink":"//a[contains(text(), \"\u6b21\u3092\u8868\u793a\u226b\")]"
},
{
"pageElement":"//img[@class=\"img_box\"]/ancestor::table[1][@width=\"500px\"]",
"url":"^http://(?:www\\.)?free4uwallpapers\\.nl/",
"nextLink":"//img[@src=\"http://www.free4uwallpapers.nl/images/next_pg.png\"]/parent::a"
},
{
"insertBefore":"//hr/following-sibling::table[@align=\"right\"]",
"pageElement":"//hr/following-sibling::table[@align=\"right\"]/preceding-sibling::node()[not(self::center or self::p or self::hr and @width)]",
"url":"^http://alfh\\.sakura\\.ne\\.jp/.+\\.htm$",
"nextLink":"//form[substring(@action, string-length(@action) - string-length(\".htm\") + 1) = \".htm\"][last()]"
},
{
"pageElement":"//div[@class=\"vFullBox\"]",
"url":"^http://streetviewgallery\\.corank\\.com/",
"nextLink":"//a[text()=\"\u00bb next\"]"
},
{
"pageElement":"id(\"content\")//div[contains(@class, \"videoTagBox\")]|id(\"tagCloud\")",
"url":"^http://www\\.nicotag\\.jp/(?:tag|search)",
"nextLink":"id(\"content\")//div[contains(@class, \"pager\")][1]//a[starts-with(text(), \"\u6b21\u3078\")]"
},
{
"pageElement":"//a[text()=\"\u300e\u623b\u308b\u300f\"]/preceding-sibling::node()[(position() > 3) and (position() < last() - 9)]",
"url":"^http://hide\\.maruo\\.co\\.jp/lib/macro/",
"nextLink":"//a[text()=\"\u300e\u623b\u308b\u300f\"]/preceding-sibling::table[position()=1]//td[child::b]/following-sibling::td[position()=1]/a"
},
{
"pageElement":"id(\"newarrival\")/div[not(contains(@class,\"mb16\"))]",
"url":"^http://uad\\.nicovideo\\.jp/main/latest/",
"nextLink":"id(\"newarrival\")//a[contains(@class,\"next\")]"
},
{
"pageElement":"//div[@class=\"post-cat1\"]",
"url":"^http://(?:www\\.)?supercentral\\.org/lk/",
"nextLink":"id(\"middle\")/div[@class=\"nav\"]/div[@class=\"navold\"]/a[text()]"
},
{
"pageElement":"//div[@class=\"publicRatingAll\"]//div[@class=\"commentContainer\"]",
"url":"^http://tv\\.yahoo\\.co\\.jp/review/\\d+/",
"nextLink":"//span[@class=\"paging\"]/a[last()]"
},
{
"pageElement":"id(\"kiji\")/*",
"url":"^http://eco\\.nikkeibp\\.co\\.jp/article/",
"nextLink":"id(\"pageNumber\")/div[@class=\"next\"]/a"
},
{
"pageElement":"//div[@class=\"lineListings\"]",
"url":"^http://(?:www\\.)?ebuyer\\.com/search\\?",
"nextLink":"//li[@class=\"currentPage\"]/following-sibling::li[1]/a"
},
{
"pageElement":"id(\"samlist\")",
"url":"^http://(?:hirame|sukima)\\.vip2ch\\.com/",
"nextLink":"id(\"pagenavi1\")/span[2]/a"
},
{
"pageElement":"//span[@class=\"data_table\"]/*|id(\"dataTable1\")/tbody/tr",
"url":"^http://(?:suumo.jp|www\\.jj-navi\\.com)/",
"nextLink":"//li[@class=\"di\"]//a[contains(., \">\")]"
},
{
"pageElement":"id(\"content change_log\")/div[@class=\"topic_browser\" or @class=\"change_set\"] | id(\"blips\")",
"url":"^http://(?:www\\.)?getsatisfaction\\.com/",
"nextLink":"//span[@class=\"next_link\"]/a"
},
{
"pageElement":"//table[@class=\"lctCSS\"]",
"url":"^http://www\\.google\\.com/support/forum/",
"nextLink":"//div[@class=\"wppkrootCSS\"]/a[contains(text(), \">\")]"
},
{
"pageElement":"//div[@class=\"xg_module_body\" and ./h3]",
"url":"^http://mix\\.epicfu\\.com/profiles/blog/",
"nextLink":"//ul[contains(concat(\" \", @class, \" \"), \" pagination \")]/li[@class=\"left\"]/a"
},
{
"pageElement":"id(\"main\")//div[@class=\"day\" and not(h2[text()=\"\u306f\u3066\u306a\u30c0\u30a4\u30a2\u30ea\u30fc\u4ee5\u5916\u306e\u30d6\u30ed\u30b0\u304b\u3089\"])]",
"url":"^http://k\\.hatena\\.ne\\.jp/keywordblog/",
"nextLink":"//a[contains(text(),\"\u904e\u53bb\u306e20\u4ef6\")]"
},
{
"pageElement":"id(\"body\")/table[1]",
"url":"^http://wiki\\.optus\\.nu/igo/index\\.php",
"nextLink":"//form/following-sibling::a[last()]"
},
{
"pageElement":"id(\"tcmainlay\")/div[@class=\"postdate\"]",
"url":"^http://[^.]+\\.ap\\.teacup\\.com/[^/]+/$",
"nextLink":"//div[@class=\"nextpage\"]/a[last()]"
},
{
"pageElement":"id(\"articleBody\")",
"url":"^http://wol\\.nikkeibp\\.co\\.jp/article/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id(\"tl_result\")/*",
"url":"^https://search-voi\\.0101\\.co\\.jp/voi/",
"nextLink":"id(\"pageing_h\")/a[img[@src=\"/images/btn_next.gif\"]]"
},
{
"pageElement":"id(\"area-center-w-left\")/div[@class=\"mod-paginationinfo\" or @class=\"mod-articletext\"]|id(\"story-body-text\")/node()",
"url":"^http://(?:articles|www)\\.latimes\\.com/",
"nextLink":"id(\"mod-pagination story-body\")/descendant::a[contains(translate(., \"NEXT\", \"next\"), \"next\")][1]"
},
{
"pageElement":"id(\"contentsColumn\")/div[@class=\"entryWrapp\"]/*[not(@class=\"entryLImgBox\")]",
"url":"^http://(?:www\\.)?cinra\\.net/interview/",
"nextLink":"//span[@class=\"txtNext\"]/a"
},
{
"pageElement":"id(\"footer\")/preceding-sibling::*[(self::p or self::div) and ./*]",
"url":"^http://www\\.cliki\\.net/admin/search\\?",
"nextLink":"id(\"footer\")/preceding-sibling::center[1]//a[contains(., \"Next\")]"
},
{
"insertBefore":"id(\"blog\")/div[contains(@class, \"autopagerize_insert_before\")]",
"pageElement":"id(\"blog\")/div[contains(@class, \"autopagerize_page_element\")]",
"url":"^http://veadardiary\\.blog29\\.fc2\\.com/",
"nextLink":"id(\"blog\")//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"main\")",
"url":"^http://www\\.digicafe\\.jp/php/bbs\\.php",
"nextLink":"//div[@class=\"pager\"]/a[@title=\"next page\"]"
},
{
"pageElement":"id(\"view_forum\")/tbody/tr[@class=\"topic_row\"][td[text()=\"Topics\"]]/following-sibling::tr",
"url":"^http://www\\.fakku\\.net/viewforum\\.php",
"nextLink":"id(\"p_right\")/b/following-sibling::a"
},
{
"pageElement":"id(\"users_list\")/*",
"url":"^http://sinkan\\.net/\\?action_users=true",
"nextLink":"id(\"current\")/following-sibling::span[1]/a"
},
{
"pageElement":"id(\"maincol\")/div",
"url":"^http://japan\\.internet\\.com/blog/[^/]+",
"nextLink":"//div[@class=\"content-nav\"]/a[last()]"
},
{
"pageElement":"id(\"NewsPagination\")/preceding-sibling::*|id(\"pagecontent\")//table[@class=\"tablebg\"]",
"url":"^http://(?:www\\.)?spacefellowship\\.com/",
"nextLink":"id(\"NewsPagination\")/span[@class=\"PageButtonsSelected\"]/following-sibling::span[1]/a|id(\"pagecontent\")/descendant::a[.=\"Next\"][1]"
},
{
"pageElement":"id(\"article_title\")/following-sibling::*[./following-sibling::dl[contains(concat(\" \", @class, \" \"), \" menu \")]]",
"url":"^http://www\\.adobe\\.com/(?:jp/)?devnet/",
"nextLink":"//dd[@class=\"next\"]/a[last()]"
},
{
"pageElement":"id(\"arc_contents_area\")/a[@name=\"list_bottom\"]/preceding-sibling::*",
"url":"^http://www\\.japan-manganews\\.jp/\\?cat",
"nextLink":"//span[@class=\"current\"]/following-sibling::a"
},
{
"pageElement":"id(\"results\")",
"url":"^http://www\\.altavista\\.com/web/results",
"nextLink":"//b[contains(concat(\" \", @class, \" \"), \" m \")][last()]/a[text()=\"Next >>\"]"
},
{
"pageElement":"//table[@class=\"animelist\"]//tr",
"url":"^http://anidb\\.net/perl-bin/animedb\\.pl",
"nextLink":"//li[@class=\"next\"][1]/a"
},
{
"pageElement":"id(\"yan-questions\")/ul[@class=\"questions\"]|id(\"yan-answers\")/div[@class=\"bd\"]/ul[@class=\"shown\"]",
"url":"^http://([^.]+\\.)?answers\\.yahoo\\.com/",
"nextLink":"id(\"yan-questions yan-content\")/div[@class=\"pagination\"]/ul/li[@class=\"next\"]/a"
},
{
"insertBefore":"id(\"menu\")",
"pageElement":"id(\"content\")",
"url":"^http://(?:www\\.)?kenshukan\\.net/john/",
"nextLink":"id(\"content\")/a[last()]"
},
{
"pageElement":"id(\"mnc\")/div[@class=\"wr mg10t\"]/div[1]",
"url":"^http://xbrand\\.yahoo\\.co\\.jp/.+html$",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"div_kichikomi\")/*",
"url":"^http://www\\.weddingpark\\.net/search/.",
"nextLink":"id(\"wtOsusumeMainPageNavi\")/b[last()]/a"
},
{
"insertBefore":"//div[@class=\"article_navi\"]",
"pageElement":"//div[@class=\"heading_area\"] | //div[@class=\"contents_area\"]",
"url":"^http://premium\\.nikkeibp\\.co\\.jp/em/",
"nextLink":"//div[@class=\"article_navi_right_on\"]/a"
},
{
"insertBefore":"//table[@class=\"main_naka\"]/tbody/tr/td/table/tbody/tr/td/form/table/tbody/tr[last()]",
"pageElement":"//table[@class=\"main_naka\"]/tbody/tr/td/table/tbody/tr/td/form/table/tbody/tr",
"url":"^http://[^.]+\\.blog\\.shinobi\\.jp/hoge",
"nextLink":"//td[@class=\"changebg2\"]/div/a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"id(\"SearchTarget\")/*[not(starts-with(@id, \"SearchMore\"))]",
"url":"^http://www\\.garrysmod\\.org/downloads/",
"nextLink":"id(\"SearchTarget\")/div/a[contains(., \"Next\")]"
},
{
"pageElement":"id(\"search_results\")",
"url":"^http://video\\.excite\\.co\\.jp/search/",
"nextLink":"//a[contains(text(),\"\u6b21\u306e\u7d50\u679c>>\")]"
},
{
"pageElement":"//div[@class=\"content-body\"]",
"url":"^http://blog\\.goo\\.ne\\.jp/yukoyajima/",
"nextLink":"//li[@class=\"mod-pre-nex-prev\"]/a"
},
{
"pageElement":"id(\"global_area_tabs_ctn\")/div",
"url":"^http://(?:[^.]+\\.)?steampowered\\.com/",
"nextLink":"id(\"global_area_tabs_search\")/descendant::div[@class=\"search_pagination_right\"]/a[last()]"
},
{
"pageElement":"id(\"blog_article\")",
"url":"^http://hadakadenkyu\\.flnet\\.org/blog/",
"nextLink":"id(\"title_area\")/a[1]"
},
{
"pageElement":"//div[contains(@class,\"book\")]",
"url":"^http://book\\.akahoshitakuya\\.com/[us]",
"nextLink":"//div[@class=\"inner\"]/center/a[contains(text(),\"next\")]"
},
{
"pageElement":"//div[(@class=\"items tempA\" or @class=\"items tempB\" or @class=\"items tempC\")]",
"url":"^http://search\\.ruten\\.com\\.tw/search",
"nextLink":"//span[@class=\"next \"]/a"
},
{
"pageElement":"id(\"MAIN\")",
"url":"^http://urakaryu08\\.blog51\\.fc2\\.com/",
"nextLink":"id(\"NAVI\")//a[text()=\"NEXT\"]"
},
{
"pageElement":"//table[@class=\"tab_results\" and ./tbody/tr[@class=\"row_header\"]]",
"url":"^http://btjunkie\\.org/(?:browse|search)",
"nextLink":"//a[@class=\"WhtUnd\" and contains(., \">\")]"
},
{
"insertBefore":"id(\"pagenum\")",
"pageElement":"id(\"a-e_col1\")/div",
"url":"^http://www\\.javaworld\\.com/javaworld/",
"nextLink":"id(\"next\")/a[@class=\"noline\"]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" vranking \")]",
"url":"^http://www\\.nicotag\\.jp/videoranking/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" bottomnavi \")]/a[contains(text(), \"\u226b\")]"
},
{
"pageElement":"id(\"ratings\")/preceding-sibling::h2[1]/preceding-sibling::*",
"url":"^http://[a-z.]+moneycentral\\.msn\\.com/",
"nextLink":"id(\"ratings\")/preceding-sibling::*[1][self::p]/b/following-sibling::a[1]"
},
{
"pageElement":"//table[@class=\"ThreadsTableOut\"]",
"url":"^http://support\\.wondercatstudio\\.com/",
"nextLink":"id(\"PageTextLinkBack\")/a"
},
{
"insertBefore":"//table[@class=\"main_naka\"]/ybody/tr/td[last()]",
"pageElement":"id(\"delform\")/table/tbody/tr",
"url":"^http://[^.]+\\.blog\\.shinobi\\.jp/hoge",
"nextLink":"//td[@class=\"changebg\"]/a[text()=\"\u6b21\"]"
},
{
"pageElement":"//table[@class=\"tbl\"]",
"url":"^https://www\\.bk1\\.jp/myaccount/order/",
"nextLink":"//a[text()=\"\u6b21\u3078\u2192\"]"
},
{
"insertBefore":"id(\"PostActions\")/table[@class=\"dataTabular\"]/following-sibling::node()[1]",
"pageElement":"id(\"PostActions\")/table[@class=\"dataTabular\"]",
"url":"^http://v3\\.newzbin\\.com/search/query/",
"nextLink":"(id(\"PostActions\")/div[@class=\"selection\"]/ul[@class=\"inline paging\"]//a)[last()-1]"
},
{
"pageElement":"//div[@id=\"mainEntryBlock\" and not(.//div[@id=\"googleAdContainer\"])]/*",
"url":"^http://nanigashi3\\.blog40\\.fc2\\.com/",
"nextLink":"id(\"pageLink\")//a[contains(., \"\u226b\")]"
},
{
"pageElement":"id(\"archives_gallery archiveslist\")/ulrn",
"url":"^http://(?:www\\.)>unmatchedstyle\\.com/",
"nextLink":"//div[@class=\"navigation\"]/div[@class=\"alignleft\"]/a[contains(text(), \"Previous\")]"
},
{
"pageElement":"id(\"centerarea\")/div[1]/*[self::p or self::div[@class=\"image\"]]",
"url":"^http://(?:www\\.)?eetimes\\.jp/article/",
"nextLink":"id(\"centerarea\")//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"id(\"list_table\")/tbody/tr",
"url":"^http://gall\\.dcinside\\.com/list\\.php",
"nextLink":"//td[@class=\"gall_page\"]/strong/following-sibling::a[1]"
},
{
"insertBefore":"//form/hr",
"pageElement":"//form/center[1]",
"url":"^http://www1\\.ezbbs\\.net/19/dslender2/",
"nextLink":"//form/b/following-sibling::a"
},
{
"pageElement":"//div[@class=\"video-container\"]",
"url":"^http://(?:www\\.)?asstomouthtube\\.net/",
"nextLink":"//a[@class=\"nextpage\"]"
},
{
"pageElement":"//table[@summary=\"upinfo\"]",
"url":"^http://(?:up[0-9]+\\.)?viploader\\.net/",
"nextLink":"//small/small/text()[string-length(normalize-space()) > 1]/following-sibling::a[1]"
},
{
"pageElement":"id(\"ma_delivery_body_pager\")/div[not(@class=\"page_navi\")]",
"url":"^http://demae-can\\.com/search/delivery/",
"nextLink":"id(\"ma_delivery_body_pager\")/div[@class=\"page_navi\"]/a[contains(., \">\")]"
},
{
"pageElement":"id(\"article_headline_photo_box\")",
"url":"^http://news\\.walkerplus\\.com/.+/photo",
"nextLink":"id(\"article_headline_photo\")/div[@class=\"photo_next\"]/a"
},
{
"insertBefore":"//div[@class=\"paging\"]",
"pageElement":"//dl[@class=\"doc\"]",
"url":"^https?://[^:/]+:1978/node/.+?/search_ui",
"nextLink":"//a[@title=\"Go forward one page\"]"
},
{
"pageElement":"//table[@width=\"100%\"]/tbody/tr[./td[@class=\"line\"]]",
"url":"^http://(?:www\\.)?freem\\.ne\\.jp/game/",
"nextLink":"//font/a[.=\"\u6b21\u306e\u30da\u30fc\u30b8\u3078\"]"
},
{
"pageElement":"id(\"main_block\")/div[contains(@class,\"entry_block\")]",
"url":"^http://news23vip\\.blog109\\.fc2\\.com/",
"nextLink":"//div[@class=\"pnavi\"]/a[last()]"
},
{
"pageElement":"id(\"pageNavi\")/preceding-sibling::div[contains(concat(\" \", @class, \" \"), \" box05 \") or ./div[contains(concat(\" \", @class, \" \"), \" box05 \")]]",
"url":"^http://(bbs|review)\\.kakaku\\.com/\\1/",
"nextLink":"//a[@class=\"arrowNext01\"]"
},
{
"pageElement":"//tr[starts-with(@class, \"contents_\")]",
"url":"^http://www\\.lddb\\.com/search\\.php\\?",
"nextLink":"/descendant::td[starts-with(normalize-space(text()), \"Browse:\")][1]/b/following-sibling::a[1]"
},
{
"pageElement":"//td[contains(@class, \"articl_color\")]/../../..",
"url":"^http://(?:www\\.)?hotexpress\\.co\\.jp/",
"nextLink":"//img[contains(@src, \"next_before\")]/.."
},
{
"pageElement":"//td[@height=\"38\"]/descendant::div[contains(concat(\" \", @class, \" \"), \" head \") or contains(concat(\" \", @class, \" \"), \" indent \")][not(child::a[starts-with(@href,\"http://quiz.wordinfo.info/\")] or child::center)]",
"url":"^http://(?:www\\.)?wordinfo\\.info/words",
"nextLink":"//a[child::img[contains(@alt, \"Next\")]]"
},
{
"pageElement":"id(\"album_container megaboxx search_results\")",
"url":"^http://www\\.(?:new\\.)?facebook\\.com/",
"nextLink":"//ul[@class=\"pagerpro\"]/li[@class=\"current\"]/following-sibling::li[1]/a"
},
{
"pageElement":"//*[@class=\"post\"]",
"url":"^http://(.*)\\.bookoff-online\\.jp/blog/",
"nextLink":"id(\"container\")/div[@class=\"navigation\"]/a"
},
{
"pageElement":"id(\"tl_result\")/table",
"url":"^http://search-voi\\.0101\\.co\\.jp/voi/",
"nextLink":"id(\"pageing_f\")/a[img[@alt=\"\u6b21\u306e\u30da\u30fc\u30b8\u3078\"]]"
},
{
"pageElement":"//form[@name=\"f\"]",
"url":"^https?://mail\\.google\\.com/mail/[hx]/",
"nextLink":"id(\"tho\")|//form[@name=\"f\"]/table[1]//td[@align=\"right\"]/b/following-sibling::a[1]"
},
{
"pageElement":"id(\"main\")/div",
"url":"^http://portal\\.nifty\\.com/cs/catalog/",
"nextLink":"id(\"main\")/ul[@class=\"pnlink\"]/li[@class=\"nex\"]/a"
},
{
"insertBefore":"//div[@class=\"exsearch\"]",
"pageElement":"id(\"ctl00_CPH1_UCAssetList1_pnlFilter\")",
"url":"^http://[^./]+\\.androlib\\.com/r\\.aspx",
"nextLink":"id(\"ctl00_CPH1_UCAssetList1_Pg\")/div[@class=\"Pager\"]/div[@class=\"pg_lst\"]/b/following-sibling::a"
},
{
"pageElement":"id(\"content\")/div[@class=\"black\"]/node()[@class=\"picdetail\" or position()=last()]",
"url":"^http://movapic\\.com/(?:[^/]+/)?pic/\\d",
"nextLink":"id(\"imageNavi\")//td[@class=\"preNavi\"]/a"
},
{
"pageElement":"id(\"co_explain\")/*[not(@id=\"co_explainLink\" or @id=\"co_capArea\")]",
"url":"^http://pc\\.nikkeibp\\.co\\.jp/article/",
"nextLink":"id(\"co_pagenumLink\")/p[@class=\"arrowR\"]/a"
},
{
"pageElement":"id(\"rows\")",
"url":"^http://[^.]+\\.mercadolivre\\.com\\.br/",
"nextLink":"id(\"paginador\")/span/following-sibling::a[1]"
},
{
"insertBefore":"id(\"mainpage\")/div[last()]",
"pageElement":"id(\"mainpage\")/table",
"url":"^http://(?:www\\.)?megaporn\\.com/video/",
"nextLink":"id(\"mainpage\")/table/tbody/tr/td[last()]/div/div[last()]/div/table/tbody/tr/td[last()]/a"
},
{
"pageElement":"id(\"content\")/descendant::*[./following-sibling::*/descendant-or-self::p[@class=\"hrz\"]]",
"url":"^http://news\\.www\\.infoseek\\.co\\.jp/",
"nextLink":"id(\"content\")//p[@class=\"hrz\"]/b[2]/a"
},
{
"pageElement":"//div[@class=\"model_view\" or @class=\"model_relationships\"]",
"url":"^http://www\\.modulobe\\.com/models/list",
"nextLink":"//div[@class=\"pagination\"]/span[@class=\"current\"]/following-sibling::a"
},
{
"pageElement":"id(\"main\")/*[self::div and @class=\"entry\" or self::a and @name]",
"url":"^http://ironman\\.enlightenedperl\\.org/",
"nextLink":"id(\"main\")/span[@class=\"nav\"]/a[contains(., \">\")]"
},
{
"pageElement":"//table[@summary=\"\u8a18\u4e8b\u4e00\u89a7\"]/tbody/tr[position()>2]",
"url":"^http://(?:aurasoul\\.)?mb2\\.jp/_[^/]+/",
"nextLink":"id(\"M\")/a[text()=position()+1]"
},
{
"pageElement":"id(\"main\")/div[starts-with(@class,\"articles\")]",
"url":"^http://[^.]+\\.blog\\.so-net\\.ne\\.jp/",
"nextLink":"//span[@class=\"previousLink\"]/a"
},
{
"pageElement":"id(\"list\")//div[@class=\"otherbloc\"]",
"url":"^http://www\\.elle\\.co\\.jp/love/ikemen",
"nextLink":"id(\"list\")//div[@class=\"pagenation\"]//a[span=\">>\"]"
},
{
"pageElement":"id(\"lastpost\")/preceding-sibling::*",
"url":"^http://(?:www\\.)?sherdog\\.net/forums/",
"nextLink":"//div[@class=\"pagenav\"]//a[text()=\">\"]"
},
{
"pageElement":"id(\"contentArea\")/div/a[./img][last()=1]",
"url":"^http://journal\\.mycom\\.co\\.jp/photo/",
"nextLink":"id(\"contentArea\")/div[@class=\"image-pagenation\"]/a[2]"
},
{
"pageElement":"id(\"content\")/div",
"url":"^http://www\\.massively\\.com/category/.",
"nextLink":"id(\"content\")/p/a[last() and text()=\"Next Page \u00bb\"]"
},
{
"pageElement":"//tr",
"url":"^http://iphone-rejectdb\\.appspot\\.com/",
"nextLink":"id(\"main\")/div[@class=\"index\"]/node()[not(self::a) and (number(self::text())>0)]/following-sibling::a[1]"
},
{
"pageElement":"id(\"area-center-w-left\")/div[@class=\"mod-articletext\"]|id(\"area-center\")/div[@class=\"mod-articles\"]",
"url":"^http://articles\\.chicagotribune\\.com/",
"nextLink":"id(\"mod-pagination\")//a[contains(., \"Next\")]"
},
{
"pageElement":"id(\"list_photo_box\")/*",
"url":"^http://(?:www\\.)?ar-plus\\.jp/fashion/",
"nextLink":"//div[@class=\"page_navi\"]/a[last()][text()]"
},
{
"pageElement":"//div[@class=\"panelRight\"]/*[(self::div and @class=\"tresults\") or self::ul]|id(\"containerThumbnails\")",
"url":"^http://(?:[^.]+\\.)?photobucket\\.com/",
"nextLink":"//span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"content-body\"]",
"url":"^http://blog\\.goo\\.ne\\.jp/herbsaison",
"nextLink":"//a[child::span[text()=\"\u524d\u30da\u30fc\u30b8\"]]"
},
{
"pageElement":"id(\"vsForm\")/table/tbody/tr[position()>1]|id(\"DetailBrowse\")/div[@class=\"ProBox\"]",
"url":"^http://www\\.search\\.as-1\\.co\\.jp/.",
"nextLink":"id(\"pagination-digg\")/li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"main\")/*[not(self::div and @class=\"page_navi\")]",
"url":"^http://irohairo\\.blog108\\.fc2\\.com/",
"nextLink":"id(\"main\")/div[@class=\"page_navi\"]/a[@title=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"//div[@class=\"blog\"]/div[@class=\"blogbody\"]",
"url":"^http://twwatcher\\.blog20\\.fc2\\.com/",
"nextLink":"//div[@class=\"pagenavi\"]/a[last()]"
},
{
"pageElement":"//div[@class=\"DIV\"]",
"url":"^http://plaza\\.rakuten\\.co\\.jp/\\w+/",
"nextLink":"//div[@class=\"DIV\"]/following-sibling::h3[1]/a[contains(text(),\"\u524d\")]"
},
{
"pageElement":"id(\"body\")//div[@class=\"published\"]",
"url":"^http://bakery\\.cakephp\\.org/articles",
"nextLink":"id(\"body\")//div[@class=\"paging\"]//a[contains(text(), \"next\")]"
},
{
"insertBefore":"//*[@class=\"content-nav_head\"]",
"pageElement":"//*[@class=\"entry-asset asset\"]",
"url":"^http://gs\\.dengeki\\.com/suteki/blog/",
"nextLink":"//*[@class=\"content-nav_foot\"]/a[1]"
},
{
"pageElement":"id(\"container\")/a",
"url":"^http://omg\\.topherchris\\.com/photos/",
"nextLink":"id(\"footer\")/a[contains(text(),\"Next\")]"
},
{
"insertBefore":"id(\"comment\")/following-sibling::node()[last()]",
"pageElement":"//div[@class=\"single\"]",
"url":"^http://www\\.supernaturalislife\\.com/",
"nextLink":"id(\"Blog1_blog-pager-older-link\")"
},
{
"pageElement":"//div[@class=\"blog\"]",
"url":"^http://footballnet\\.sakura\\.ne\\.jp/",
"nextLink":"//a[@class=\"link_next\"]"
},
{
"pageElement":"//ol[contains(concat(\" \", @class, \" \"), \" noBorder_list \")] | //table[@class=\"table_item01\"]",
"url":"^http://shop\\.gallery2\\.co\\.jp/shop/",
"nextLink":"//div[@class=\"itemNav\"]//a[contains(text(), \"\u6b21\u306e\")]"
},
{
"pageElement":"//div[@class=\"content-nav\"]/preceding-sibling::*",
"url":"^http://socialitelife\\.celebuzz\\.com/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"search\")/div[@class=\"result\"]",
"url":"^http://goodol\\.kenjiro\\.jp/search\\?",
"nextLink":"id(\"paging\")/p/b/following-sibling::a[1]"
},
{
"pageElement":"id(\"content\")/div[contains(@class, \"post\")]",
"url":"^http://garakuta\\.oops\\.jp/wordpress/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" browse \")]/a[last()]"
},
{
"pageElement":"//form[@name=\"optForm\"]/ancestor::div[1]/div",
"url":"^http://www\\.honya-town\\.co\\.jp/hst/",
"nextLink":"//u[.=\"\u6b21\u30da\u30fc\u30b8\u3078\"]/parent::a"
},
{
"pageElement":"//div/img",
"url":"^http://hirotaku\\.fc2web\\.com/mannga/",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"//div[@class=\"oneEntry\" or @id=\"comment-trackback\"]",
"url":"^http://blog\\.goo\\.ne\\.jp/ikedanobuo",
"nextLink":"//a[child::span[@class=\"etNextPrev\"]]"
},
{
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://blog\\.nicovideo\\.jp/.+\\.php$",
"nextLink":"id(\"navibar\")/a[1]"
},
{
"pageElement":"id(\"bloc_center_unit_2c\")/div[@class=\"pager_unit\"]/following-sibling::*[./following-sibling::div[@class=\"pager_unit\"]]",
"url":"^http://(?:www\\.)?ebten\\.jp/eb-store/",
"nextLink":"//li[@class=\"selected\"]/following-sibling::li[1]/a"
},
{
"pageElement":"id(\"container\")/div[@class=\"content\"]//div[@class=\"pager\"]/preceding-sibling::*[not(@class=\"dek\" or @class=\"submitted\")]",
"url":"^http://www\\.popsci\\.com(?:/[^/]+){4}",
"nextLink":"id(\"container\")/div[@class=\"content\"]//span[@class=\"pagination\"]/a[contains(., \"next\")]"
},
{
"pageElement":"(//div[contains(@id, \"product_\")]/ancestor::table)[last()]",
"url":"^http://(?:www\\.)?threadless\\.com/\\w",
"nextLink":"//a[contains(concat(\" \", @class, \" \"), \" selected \")]/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"search-content-results-body\"]/*",
"url":"^http://(?:www\\.)?tineye\\.com/search/",
"nextLink":"id(\"pag_bottom\")/a[@class=\"next\"]"
},
{
"pageElement":"id(\"left\")/*[self::div or self::h3]",
"url":"^http://vocaloid\\.blog120\\.fc2\\.com/",
"nextLink":"id(\"left\")/a[contains(., \"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"main\")/div[@class=\"left-box\"][./div[@class=\"article\"]][1]/following-sibling::*[1][self::img]/following-sibling::*[./following-sibling::img/following-sibling::*[1][self:: div and @class=\"left-box\"][./div[@class=\"article\"]]]",
"url":"^http://dic\\.nicovideo\\.jp/m/[nu]/res",
"nextLink":"id(\"main\")//div[@class=\"article\"]/div[@class=\"pager\"]/*[last()][self::a and @class=\"navi\"]"
},
{
"pageElement":"//ul[@class=\"view-photo\"]",
"url":"^http://gree\\.jp/\\?mode=dir&act=album",
"nextLink":"//div[@class=\"paging\"]/a[last()]"
},
{
"pageElement":"//span[@class=\"nonprint\"]",
"url":"^http://(?:www\\.)?wtop(?:news)?\\.com/",
"nextLink":"//a[text()=\"Next page\"]"
},
{
"pageElement":"id(\"main\")/div[@class=\"content\"]/div[@class=\"rank\" or @class=\"rank_even\"]",
"url":"^http://blog\\.fc2\\.com/(?:sub)?genre/",
"nextLink":"id(\"main\")/div[@class=\"content\"]/div[@class=\"pagination\"]/a[@class=\"next_page\"]"
},
{
"pageElement":"//div[@class=\"ys\"]/table[2]/tbody/tr[position()>2]",
"url":"^http://www\\.amazon\\.de/gp/yourstore/",
"nextLink":"//a[child::img[contains(@src, \"more-results\")]]"
},
{
"pageElement":"id(\"threads\")/../*[not(@id=\"stickies\")]|id(\"posts searchbits\")|//h2[@class=\"searchlisthead\"]",
"url":"^http://www\\.burningwheel\\.org/forum/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//div[@class=\"phxcms_normal_format\"]",
"url":"^http://www\\.phoronix\\.com/scan\\.php",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" phxcms_navigation_format \")][last() - 1]/div[contains(concat(\" \", @class, \" \"), \" phxcms_navigation_hover_box \")][last()]/a"
},
{
"insertBefore":"(//div[@class=\"page_links\"])[3]",
"pageElement":"//p[@class=\"storybody\"]",
"url":"^http://www\\.computerworld\\.com\\.au/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"insertBefore":"//span[@class=\"pagination\"]",
"pageElement":"id(\"article\")",
"url":"^http://www\\.scientificamerican\\.com/",
"nextLink":"//a[text()=\"Next\u00bb\"]"
},
{
"insertBefore":"//div[contains(@class,\"bgfooter\")]",
"pageElement":"//div[@class=\"bgsearch\"]",
"url":"^http://modarchive\\.org/index\\.php\\?",
"nextLink":"//a[@class=\"navlink\"][contains(text(), \">\")]"
},
{
"pageElement":"//body/div[@class=\"container\"]/div[@class=\"span-18 commuStyle\"]",
"url":"^http://hinamiki\\.com/explore/timeline",
"nextLink":"//a[text()=\"Older \u00bb\"]"
},
{
"pageElement":"id(\"unitBlockContents\")[not(id(\"contentsPaging\"))]/*|id(\"contentsPaging\")/preceding-sibling::*",
"url":"^http://(?:www\\.)?globe\\.asahi\\.com/",
"nextLink":"//p[@class=\"next\" or @class=\"pagingNext\"]/a"
},
{
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://medt00lz\\.s59\\.xrea\\.com/wp/",
"nextLink":"//a[text()=\"Next \u00bb\"]"
},
{
"pageElement":"id(\"content\")/div[@class=\"photo_box_main\"]/div[@class=\"photo_main_left\"]/a",
"url":"^http://(?:www\\.)?ota-suke\\.jp/photo/",
"nextLink":"id(\"content\")/div[@class=\"photo_box_main\"]/div[@class=\"photo_main_left\"]/a"
},
{
"pageElement":"id(\"entradas\")/div",
"url":"^http://(?:[^./]+\\.)+anaitgames\\.com/",
"nextLink":"//div[@class=\"pag-anterior\"]/a"
},
{
"pageElement":"//div[@class=\"section graphs\"]",
"url":"^http://xpath\\.kayac\\.com/search\\?q=",
"nextLink":"//a[@class=\"next\"]"
},
{
"insertBefore":"//center[count(//center)-1]",
"pageElement":"//center[1]/following-sibling::node()[following::center[count(following::center)]]",
"url":"^http://www\\.mbga\\.jp/\\.pc/_msg_list",
"nextLink":"//a[@accesskey=\"#\"]"
},
{
"pageElement":"//div[@class=\"top_overview\"]",
"url":"^http://www\\.pornhost\\.com/top\\.html",
"nextLink":"//div[@class=\"top_overview\"]/p/a[@class=\"active\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"songlist\")/tbody/tr[position()>1]",
"url":"^http://mp3\\.sogou\\.com/music\\.so\\?",
"nextLink":"id(\"main\")/div[@class=\"pagebar\"]/a[contains(., \">\")]"
},
{
"pageElement":"id('spFotostreckeLeft spFotostreckeRight')",
"url":"^http://www\\.spiegel\\.de/fotostrecke/",
"nextLink":"id('spFotostreckeControlForw')"
},
{
"pageElement":"//div[@class=\"f_navi\"]/ancestor-or-self::*[./preceding-sibling::*][1]/preceding-sibling::*",
"url":"^http://(?:www\\.)?moura\\.jp/ecologue/",
"nextLink":"//div[@class=\"f_navi\"]//span/following-sibling::a[1]"
},
{
"insertBefore":"//center[2]",
"pageElement":"//a[@accesskey=\"5\"]/following-sibling::node()[following::center[2]]",
"url":"^http://www\\.mbga\\.jp/\\.pc/_tpc_list",
"nextLink":"//a[@accesskey=\"#\"]"
},
{
"pageElement":"//table[contains(., \"\u00bb\")]/following-sibling::*[./following-sibling::table[contains(., \"\u00bb\")]]",
"url":"^http://(?:www\\.)?1001freefonts\\.com/",
"nextLink":"//a[contains(., \"\u00bb\")]"
},
{
"pageElement":"//td[contains(.,\" views\")]/..|//*[contains(text(), \"Goto page\")]/../following-sibling::tr",
"url":"^http://(?:[^.]+\\.)?lazygirls\\.info/.",
"nextLink":"//*[contains(text(), \"Goto page\")]/a[last()]/img/parent::*"
},
{
"pageElement":"//div[@id=\"main\" and @class=\"main\"]/div[@class=\"wrapper\"]",
"url":"^http://www\\.animepaper\\.net/gallery/",
"nextLink":"//a[contains(text(),\"\u00bb\")]"
},
{
"pageElement":"(//table[@class=(\"table_simple_outerflame\" or \"table_common_main_innerflame\" or \"table_common_main_innerflame_blue\") and @summary=\"data\"])",
"url":"^http://www\\.toranoana\\.jp/mailorder/",
"nextLink":"//a[text()=\">\"]"
},
{
"pageElement":"//center/p[last()]/preceding-sibling::node()",
"url":"^http://www\\.dojinoh\\.com/\\d+\\.html",
"nextLink":"//p[last()]/a[last()]"
},
{
"pageElement":"id(\"board\")",
"url":"^http://shuugi\\.in/(?:[^/]+/)+?comment",
"nextLink":"//ul[@class=\"next\"]/li[last()]/a"
},
{
"pageElement":"id(\"article\")/span[@class=\"body\"]/prn",
"url":"^http://www\\.securityfocus\\.com/news/",
"nextLink":"//span[@class=\"pages\"]/a[text()=\"next\"]"
},
{
"pageElement":"//div[@class=\"result\"]/div[contains(@class, \"thumb\")]",
"url":"^http://(?:www\\.)?logosauce\\.com/\\w+",
"nextLink":"id(\"next\")/a"
},
{
"pageElement":"id(\"left_area\")//div[@class=\"left_page\"][1]/following-sibling::*[following::*[@class=\"left_page\"]]",
"url":"^http://isec-rss\\.ipa\\.go\\.jp/search",
"nextLink":"id(\"left_area\")//div[@class=\"left_page\"]//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"WS2m\")/ul",
"url":"^http://search\\.yahoo\\.co\\.jp/search",
"nextLink":"id(\"Sp1\")//span[.=\">\"]/parent::a"
},
{
"pageElement":"id(\"center-col\")/div[@class=\"article\"]/div[@class=\"article-text\"]",
"url":"^http://www\\.propublica\\.org/feature/",
"nextLink":"id(\"center-col\")//div[@class=\"pagination\"]/a[last()]"
},
{
"pageElement":"id(\"question_tab\")/following-sibling::*",
"url":"^http://qa-now\\.com/(?:q|qn|qa|an)/\\d",
"nextLink":"id(\"right_block\")//div[contains(concat(\" \", @class, \" \"), \" pager \")]/a[contains(text(), \"\u6b21\")]"
},
{
"pageElement":"id(\"mb_articlebody\")",
"url":"^http://trendy\\.nikkeibp\\.co\\.jp/lc/",
"nextLink":"id(\"pages\")/a[@class=\"b\"][last()] | //a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"//div[@class=\"searchresult\"]/dl",
"url":"^http://search\\.livedoor\\.com/search/",
"nextLink":"//a[descendant::img[@src=\"/img/cmn/pager_arrow_after.gif\"]]"
},
{
"pageElement":"id(\"collectionitems\")/tbody/tr[@id=\"row_\"]|//table[@class=\"forum_table\"]/tbody/tr[position()>1]",
"url":"^http://(?:www\\.)?boardgamegeek\\.com/",
"nextLink":"//b[contains(., \"Next\")]/parent::a"
},
{
"pageElement":"id(\"ev-view\")/div[@class=\"vevent\"]",
"url":"^http://(?:www\\.)?cotosaga\\.com/list/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"//div[@class=\"n-entry-show\"]",
"url":"^http://blog\\.practical-scheme\\.net/",
"nextLink":"//div[@class=\"content\"]/p/a[last()]"
},
{
"pageElement":"id(\"article_box\")/p",
"url":"^http://(?:www\\.)?iht\\.com/articles/",
"nextLink":"id(\"pagination\")/a[text()=\"Next Page\"]"
},
{
"pageElement":"id(\"mainContents\")//div[@class=\"paragraph\"][1]/*",
"url":"^http://www\\.insightnow\\.jp/article/",
"nextLink":"//span[@class=\"stay\"]/following-sibling::span[1]/a"
},
{
"pageElement":"//div[@class=\"mgnTop10\"]",
"url":"^http://drawr\\.net/(new|thread)\\.php",
"nextLink":"(//p[@class=\"left-food-link\"])[last()]/a"
},
{
"pageElement":"id(\"archive-view\")",
"url":"^http://practical-scheme\\.net/chaton/",
"nextLink":"//td[@class=\"to-next\"]/a"
},
{
"pageElement":"id(\"main main-column center main_block Main primary-column blog content\")[1]/div | id(\"contents Contents\")[1]/div[not(@id)] | id(\"main\")/table[starts-with(@class, \"entry\")] | id(\"blog_content\")/div[@class] | id(\"right\")/div[@class=\"contents\"] | id(\"primary\")/div[@class=\"entry\"] | id(\"mainBlock\")/div[div] | id(\"entry\") | id(\"box_main\")/table | id(\"left\")/div[@class=\"body\"] | //div[@align=\"center\"]/table[@width=\"740\"]/tbody/tr/td/table[@width=\"660\"]",
"url":"^http://[^.]+\\.blog[^.]+\\.fc2\\.com/",
"nextLink":"descendant::a[contains(@href,\"fc2.com/page-\")][last()] | /descendant::a[contains(translate(text(), \"ENTX\", \"entx\"), \"next\")][last()]"
},
{
"insertBefore":"//div[@class=\"fL pS\"]/../..",
"pageElement":"(//div[@class=\"mR165\"]/*)[descendant::*[@class=\"fL pS\"]]/preceding-sibling::*",
"url":"^http://www\\.msnbc\\.msn\\.com/id/\\d",
"nextLink":"//div[@class=\"fL pS\"]/a[contains(text(), \"Next\")]"
},
{
"pageElement":"id(\"block_story block_listing\")/*",
"url":"^http://builder\\.japan\\.zdnet\\.com/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//div[contains(concat(' ',@class,' '),' entry-asset ')]",
"url":"^http://kossie\\.net/blog/[^/]+/[^/]+/",
"nextLink":"//div[@class=\"content-nav\"]/a[starts-with(text(),\"\u00ab\")]"
},
{
"pageElement":"id(\"bbs\")/dl",
"url":"^http://dic\\.nicovideo\\.jp/b/[aiuv]/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pager \")]/a[starts-with(text(), \"\u6b21\")]"
},
{
"pageElement":"//div[@class=\"entryDetailBodyCopy\"]",
"url":"^http://(?:www\\.)?newsweekjapan\\.jp/",
"nextLink":"//a[contains(text(),\"Next>>\")]"
},
{
"pageElement":"//div[@class=\"navheader\"]/../div",
"url":"^http://(?:www\\.)?producingoss\\.com/",
"nextLink":"//div[@class=\"navheader\"]//a[@accesskey=\"n\"]"
},
{
"pageElement":"//table[@bgcolor=\"#d6ccbb\"]",
"url":"^http://messages\\.yahoo\\.co\\.jp/bbs",
"nextLink":"//td[@height=\"30\"]//a[contains(., \"\u6b21\u306e\")]"
},
{
"pageElement":"//tr[child::td[@class=\"f10pt130\"]][descendant::h2]",
"url":"^http://www\\.stackasterisk\\.jp/tech/",
"nextLink":"//span[@class=\"prevNext\"][contains(text(),\">>\")]/parent::a"
},
{
"pageElement":"//div[@class=\"primary-column\"]/div[contains(@class, \"section\")]",
"url":"^http://omoroid\\.blog103\\.fc2\\.com/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"content\")/div[contains(concat(\" \", @class, \" \"), \" nav \")]/preceding-sibling::*[not(contains(concat(\" \", @class, \" \"), \" nav \"))]",
"url":"^http://[^.]+\\.blogs\\.nytimes\\.com/",
"nextLink":"id(\"content\")/div[contains(concat(\" \", @class, \" \"), \" nav \")]/ul/li[@class=\"element1\"]/a"
},
{
"pageElement":"//table[contains(@class, \"detTable\")]//tr",
"url":"^https?://www\\.netsecurity\\.ne\\.jp/",
"nextLink":"//table[contains(@class, \"detTable\")]/following-sibling::div[1]/a[contains(text(), \">>\")]"
},
{
"pageElement":"//div[@class='borderShelf']",
"url":"^http://www\\.date2\\.jp/package_list/",
"nextLink":"//a[contains(text(),'>')]"
},
{
"pageElement":"id(\"pagebody\")//div[@class=\"plugin-block\"]",
"url":"^http://wordpress\\.org/extend/themes/",
"nextLink":"id(\"pagebody\")//a[contains(concat(\" \", @class, \" \"), \" next \")]"
},
{
"insertBefore":"//div[@class=\"story-pager\"]",
"pageElement":"id(\"storyText\")",
"url":"^http://(?:www\\.)?abcnews\\.go\\.com/",
"nextLink":"//a[@class=\"paginationN\"]"
},
{
"pageElement":"id(\"search_results\")/*",
"url":"^http://gentoo-portage\\.com/Search\\?",
"nextLink":"//img[@src=\"/img/forward.gif\"]/parent::a"
},
{
"pageElement":"id(\"contentsMain\")/div",
"url":"^http://search\\.mext\\.go\\.jp/search",
"nextLink":"//a[text()=\"\u6b21\u3078>\"]"
},
{
"pageElement":"id(\"AutoNumber5\")",
"url":"^http://www\\.iconspedia\\.com/search/",
"nextLink":".//div[@align=\"center\"]/a[contains(text(),\"Next\")]"
},
{
"pageElement":"id(\"main_block\")/div[@class=\"entry_block\"]",
"url":"^http://chiquita\\.blog17\\.fc2\\.com/",
"nextLink":"//div[@class=\"pnavi\"]/a[text()=\"NEXT\"]"
},
{
"pageElement":"id(\"style-list\")",
"url":"^http://userstyles\\.org/styles/browse",
"nextLink":"//div[@class=\"pagination\"]/a[@class=\"next_page\"]"
},
{
"pageElement":"id(\"Search\")/div[not(@class=\"pagination\")]",
"url":"^http://crossreview\\.jp/search/result",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"insertBefore":"//b[@class=\"n\"]/ancestor::p[1]/following-sibling::*[last()]",
"pageElement":"//b[@class=\"n\"]/ancestor::p[1]/preceding-sibling::*",
"url":"^http://([^.]+\\.)?advenbbs\\.net/bbs/",
"nextLink":"//b[@class=\"n\"]/following-sibling::a[@class=\"n\"][1]"
},
{
"pageElement":"id(\"ad\")/div | id(\"a5\")",
"url":"^http://s\\.luna\\.tv/search\\.aspx\\?",
"nextLink":"id(\"results_nav_next\")/a"
},
{
"pageElement":"id(\"main\")/*",
"url":"^http://ttyshare\\.com/(?:recent|tag)/",
"nextLink":"id(\"pager\")//a[@class=\"next\"]"
},
{
"pageElement":"//div[@class=\"camp\"]",
"url":"^https://oubo\\.rakuten\\.co\\.jp/list",
"nextLink":"//div[@class=\"pagination\"][1]/a[starts-with(@href,\"/list?\")][.=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"news_content\")/*[not(@id=\"LoginWindow\")]",
"url":"^http://www\\.chosunonline\\.com/news/",
"nextLink":"id(\"post\")/div[@class=\"relpost\"]/ul[1]//a[contains(text(), substring-before(//title/text(), \"\uff08\")) and ((contains(//title/text(), \"\uff08\u4e0a\uff09\") and (contains(text(), \"\uff08\u4e2d\uff09\") or contains(text(), \"\uff08\u4e0b\uff09\"))) or (contains(//title/text(), \"\uff08\u4e2d\uff09\") and contains(text(), \"\uff08\u4e0b\uff09\")))]"
},
{
"pageElement":"//td[@class=\"node-container\"]/table|//td[@class=\"node-container\"]/br",
"url":"^http://bugguide\\.net/node/view/\\d+/",
"nextLink":"//a[./img[@alt=\"next page\"]]"
},
{
"pageElement":"id(\"content\")/div[contains(@class,\"post\")]",
"url":"^http://status\\.secondlifegrid\\.net/",
"nextLink":"//div[contains(concat(\" \",@class,\" \"),\" alignleft \")]/a[starts-with(text(),\"\u00ab\")]"
},
{
"insertBefore":"id(\"main\")/div[@class=\"content\"][last()]",
"pageElement":"id(\"main\")/div[@class=\"page_navi\"][1]/preceding-sibling::*",
"url":"^http://appteam\\.blog114\\.fc2\\.com/",
"nextLink":"id(\"main\")/div[@class=\"page_navi\"][1]/a[contains(.,\"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"deal_list posts\")/*|id(\"threadslist\")/tbody/tr",
"url":"^http://(?:[^.]+\\.)?slickdeals\\.net/",
"nextLink":"//a[@class=\"search_pagenav_text\" and contains(., \"Next\")]"
},
{
"pageElement":"//div[@class=\"content_text\"]/p/img",
"url":"^http://www\\.japan-manganews\\.jp/it/",
"nextLink":"//div[@class=\"page_link_area\"]/p/a"
},
{
"pageElement":"//div[@class=\"stencil\"]",
"url":"^http://(?:www\\.)?graffletopia\\.com/",
"nextLink":"//div[@class=\"pagination\"]/a[last()]"
},
{
"pageElement":"id(\"content\")/*",
"url":"^http://pastie\\.org/(?:pastes|search)",
"nextLink":"//p/a[text()=\"Next page\"]"
},
{
"pageElement":"//div[@class=\"post\"]",
"url":"^http://www\\.basicthinking\\.de/blog/",
"nextLink":"//div[@class=\"navigation\"]/div[@class=\"alignleft\"]/a"
},
{
"pageElement":"id(\"alpha-inner\")/*[(self::h2 and @class=\"date-header\") or (self::a and @id) or (self::div and @class=\"entry\")]",
"url":"^http://(?:www\\.)?gamesetwatch\\.com/",
"nextLink":"id(\"alpha-inner\")/div[@class=\"pagination_nav\"]//a[contains(text(), \">>\")]"
},
{
"pageElement":"id(\"results\")|id(\"results\")/following-sibling::p[@class=\"clear\"]",
"url":"^http://www\\.google\\.com/products\\?",
"nextLink":"id(\"nn\")/parent::a"
},
{
"pageElement":"//table[@class=\"topics\"]",
"url":"^http://kanpoo\\.jp/(?:$|#|topic\\.p/)",
"nextLink":"//a[contains(text(),\"\uff1c\")][@href]"
},
{
"insertBefore":"id(\"main\")/div[@class=\"pager\"]",
"pageElement":"id(\"main\")/div[@class=\"list\"]",
"url":"^http://s\\.hatena\\.ne\\.jp/.+?/stars",
"nextLink":"id(\"main\")/div[@class=\"pager\"]/a[last()]"
},
{
"pageElement":"id(\"inner\")",
"url":"^http://people\\.zozo\\.jp/[^/]+/diary",
"nextLink":"//a[contains(text(), \"\u6b21\u306e5\u4ef6\")]"
},
{
"pageElement":"//div[@class=\"archive_detail_inner\" or @class=\"archive_index_inner\"]|//div[@class=\"webspecial_contents\"]|//div[@class=\"webserialization_contents\"]",
"url":"^http://(?:www\\.)?voiceplus-php\\.jp/",
"nextLink":"//*[@class=\"archive_detail_page\" or @class=\"backnumber_links\"]//a[text()=\"\u6b21\"]|//div[contains(concat(\" \", @class, \" \"), \" tac \")]/p[1]/a[1]"
},
{
"pageElement":"id(\"mainContArea\")/div[@class=\"contents\"][last()]",
"url":"^http://robot\\.tsukumo\\.co\\.jp/dir/",
"nextLink":"id(\"mainContArea\")/div[@class=\"contents\"]/table[@class=\"pageNavi\"][last()]/tbody/tr/td[@class=\"next\"]/a"
},
{
"pageElement":"id(\"main\")/div[@class=\"entry\"]/div[@class=\"body\" or @class=\"pager\"]",
"url":"^http://www\\.kumikomi\\.net/archives/",
"nextLink":"id(\"main\")/div[@class=\"entry\"]/div[@class=\"pager\"]/a[position()=last() and @class=\"arrow\"]"
},
{
"pageElement":"id(\"fullpagecontent\")/div[@class=\"normal\"] | id(\"articleend\")",
"url":"^http://techreport\\.com/articles\\.x/",
"nextLink":"//a[@class=\"next\"]"
},
{
"insertBefore":"id(\"mod-prev-next\")",
"pageElement":"id(\"in-center\")//div[@class=\"mod-entry-set\"]",
"url":"^http://blog\\.goo\\.ne\\.jp/kinokoweb",
"nextLink":"id(\"mod-prev-next\")//span[@class=\"etNextPrev\"]/parent::a"
},
{
"pageElement":"//table[@class=\"main\"]/tbody/tr/td[2]/table[2]/tbodyrn",
"url":"^http://www\\.bitme\\.org/browse\\.php",
"nextLink":"//a[descendant::*[contains(text(),\"Next\")]]"
},
{
"pageElement":"id(\"icons\")|id(\"icons\")/following-sibling::*[1][self::div and @class=\"clearboth\"]",
"url":"^http://www\\.iconfinder\\.com/search/",
"nextLink":"id(\"searchresults\")//a[@class=\"next\"]"
},
{
"pageElement":"id(\"centerside\")//div[contains(concat(\" \", @class, \" \"), \" news_con \")]/node()[following::div[@class=\"bm_page3\"]]",
"url":"^https?://(?:www\\.)?toyokeizai\\.net/",
"nextLink":"id(\"centerside\")//a[@class=\"next\"]"
},
{
"pageElement":".//div[@class=\"data\"]//li",
"url":"^http://(?:search|www)\\.pandora\\.tv/",
"nextLink":".//div[@class=\"paging\"]/a[@class=\"on\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"content\")//div[starts-with(@id,\"article\")]",
"url":"^http://www\\.instapaper\\.com/archive",
"nextLink":"//a[span[contains(text(), \"Older items\")]]"
},
{
"pageElement":"id(\"es\")/div[2]/following-sibling::node()[following-sibling::div]",
"url":"^http://www\\.nikki\\.ne\\.jp/es/\\d+/",
"nextLink":"id(\"es\")/div/b/font[contains(@color, \"cc6600\")]/following::a"
},
{
"pageElement":"(//td[@class=\"fsM\"]/a[font[@color=\"blue\"]]/ancestor::table[2])[1]/following-sibling::table[1]",
"url":"^https?://joshinweb\\.jp/srh\\.html\\?",
"nextLink":"//td[@class=\"fsM\"]/a[font[@color=\"blue\"]]/following-sibling::a[1]"
},
{
"pageElement":"id(\"main\")/table[@class=\"normal\"]|id(\"main\")//table[@class=\"small_review\"]",
"url":"http://www\\.animesachi\\.com/visitor/",
"nextLink":"id(\"main\")//a[@title=\"\u6b21\u306e\u30da\u30fc\u30b8\u3078\"]|(id(\"main\")//a[starts-with(., \"\u6b21\u3078\")])[last()]"
},
{
"insertBefore":"id(\"botPaging\")",
"pageElement":"id(\"hotelList\")",
"url":"^http://www\\.superbreak\\.com/search/",
"nextLink":"id(\"botPaging\")/ul[@class=\"pagination\"]/li[@class=\"rArrow\"]/a"
},
{
"pageElement":"id(\"groupsSearch-result-list\")",
"url":"^http://groups\\.yahoo\\.com/search\\?",
"nextLink":"//li[@class=\"page-active\"]/following-sibling::li[1]/a"
},
{
"pageElement":"//div[@class=\"entry-m\"]",
"url":"^http://eq2bell\\.blog113\\.fc2\\.com/",
"nextLink":"id(\"n-bottom\")/li/a[contains(., \"Prev\")]"
},
{
"pageElement":"id('content')",
"url":"^http://forums\\.somethingawful\\.com/",
"nextLink":"//a[@class='pagenumber' and @title='next page \u00bb']"
},
{
"pageElement":"id(\"searchResult\")",
"url":"^http://(?:www\\.)?thepiratebay\\.org/",
"nextLink":"//img[@src=\"http://static.thepiratebay.org/img/next.gif\"]/parent::a"
},
{
"pageElement":"id('newsnachricht')",
"url":"^http://www\\.serienjunkies\\.de/news/",
"nextLink":"//img[@alt=\"weiter\"]/parent::a"
},
{
"pageElement":".//div[@class=\"middle\"]",
"url":"^http://(?:www\\.)?stuffonmycat\\.com/",
"nextLink":".//a[@class=\"pagenav\" and @title=\"Next\"]"
},
{
"pageElement":"id(\"multipage\")/preceding-sibling::*[preceding-sibling::p/@class=\"leafDate\" and not(@class=\"keyword\")]|//ul[@class=\"listSet\"]",
"url":"^http://kenplatz\\.nikkeibp\\.co\\.jp/",
"nextLink":"id(\"multipage\")/a[contains(text(),\">\")]"
},
{
"pageElement":"id(\"entries\")/div[contains(@class, \"entry\")]",
"url":"^http://(?:[^.]{6}\\.)?sa\\.yona\\.la/",
"nextLink":"id(\"entries\")/div[@class=\"pagination\" and position()=1]/a[@class=\"next_page\" and last()]"
},
{
"insertBefore":"id(\"main\")/ul[@class=\"topics_ul\"]/following-sibling::*[1]",
"pageElement":"id(\"main\")/ul[@class=\"topics_ul\"]",
"url":"^http://jp\\.meritdemerit\\.com/topics",
"nextLink":"id(\"main\")/a[contains(text(), \"Next\")]"
},
{
"pageElement":"//table[@class=\"contentpaneopen\"]/tbody/tr[descendant::table[@class=\"contenttoc\"]]",
"url":"^http://www\\.photozone\\.de/[^/]+/\\d",
"nextLink":"//div[@class=\"pagenavbar\"]//a[last()]"
},
{
"pageElement":"id(\"main-column\")/div[contains(@class,\"EntryBlock\")]",
"url":"^http://urasoku\\.blog106\\.fc2\\.com/",
"nextLink":"//div[@class=\"pageLink\"]/a[last()]"
},
{
"pageElement":"id(\"main\")/div[contains(@class,\"entry\")]",
"url":"^http://newsteam\\.blog95\\.fc2\\.com/",
"nextLink":"//li[contains(concat(\" \",@class,\" \"),\" older \")]/a"
},
{
"pageElement":"//div[@class=\"cent\"]/div[@class=\"entry\"]",
"url":"^http://kanasoku\\.blog82\\.fc2\\.com/",
"nextLink":"//div[@class=\"pagenavi_text\"]/a[contains(., \"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"content\")",
"url":"^http://drawr\\.net/fav(ing|ter)\\.php",
"nextLink":"//div[@class=\"floright\"]/a[starts-with(text(), \"Next\")]"
},
{
"pageElement":"//span[@class=\"phpdigHighlight\"]/../preceding-sibling::*[self::blockquote or self::p]",
"url":"^http://www\\.autohotkey\\.com/search/",
"nextLink":"//span[@class=\"phpdigHighlight\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"pageElement\")",
"url":"^http://(?:www\\.)?nanos\\.jp/motsuko/",
"nextLink":"//a[@accesskey=\"#\"]"
},
{
"pageElement":"id(\"main-column\")/div[contains(@class,\"EntryBlock\")]",
"url":"^http://ksklog\\.blog108\\.fc2\\.com/",
"nextLink":"//div[@class=\"pageLink\"]/a[last()]"
},
{
"pageElement":"id(\"main-contents\")/*[following-sibling::*[@class=\"nextprev\"]]",
"url":"^http://monoist\\.atmarkit\\.co\\.jp/",
"nextLink":"//div[@class=\"nextprev\"]//li[last()][starts-with(@id, \"next\")]/a"
},
{
"pageElement":"id(\"column1\")//div[@class=\"post\"]",
"url":"^http://www\\.sl-educationblog\\.org/",
"nextLink":"id(\"page_nav\")//a[contains(., \"\u00ab\")]"
},
{
"pageElement":"//table[@class=\"forumline\"]",
"url":"^http://www\\.autohotkey\\.com/forum/",
"nextLink":"//span[@class=\"nav\"]/b/following-sibling::a[1]"
},
{
"pageElement":"id(\"left\")/div[contains(@class,\"content\")]",
"url":"^http://ikapani\\.blog55\\.fc2\\.com/",
"nextLink":"id(\"left\")/a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"id(\"sr_inbox\")/ul",
"url":"^http://live\\.nicovideo\\.jp/search/",
"nextLink":"id(\"sr_outbox\")/div[@class=\"pager\"]/a[@class=\"next\"]"
},
{
"pageElement":"id(\"photoImage\")",
"url":"^http://www\\.inside-games\\.jp/imgs/",
"nextLink":"id(\"photo\")//div[@class=\"photoPagingNext\"]//a"
},
{
"insertBefore":"id(\"footer\")",
"pageElement":"//div[@class=\"page_container\"]",
"url":"^http://dev\\.mysql\\.com/doc/refman/",
"nextLink":"//link[@rel=\"next\"]"
},
{
"pageElement":"//*[@class=\"entry\"]",
"url":"^http://yaplog\\.jp/[^/]+/(?!archive)",
"nextLink":"//*[@class=\"page\" or @class=\"page s\" or @class=\"posted\" or @class=\"pagenavi01\"]//a[contains(text(),\"\u524d\u3078\") or contains(text(),\"BACK\")]"
},
{
"insertBefore":"id(\"content\")/node()[last()]",
"pageElement":"id(\"content\")/div[contains(concat(\" \", @class, \" \"), \" blog \")]",
"url":"^http://[^.]+\\.seesaa\\.net/article/",
"nextLink":"id(\"content\")/div[@class=\"navi\"]/a[contains(., \"<<\")]"
},
{
"insertBefore":"//div[@class=\"storyCopy\"]//table[//h3]",
"pageElement":"//div[@class=\"storyCopy\"]",
"url":"^http://www\\.popularmechanics\\.com/",
"nextLink":"//a[text()=\"Next \u00bb\"]"
},
{
"pageElement":"id(\"article\")/div[@class=\"article_text\"]",
"url":"^http://www\\.betanews\\.com/article/",
"nextLink":"id(\"article\")//div[@class=\"article_paging\"]/a[strong=\"Next Page \u2192\"]"
},
{
"pageElement":"//div[@class=\"app\"]",
"url":"^http://[a-z]{2,3}\\.feedmyapp\\.com/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"insertBefore":"//ul[@class=\"pagination\"]",
"pageElement":"//div[@class=\"post_contain\"]/*[(self::div and contains(concat(\" \", @class, \" \"), \" post \")) or (self::a and starts-with(@name, \"m\"))]",
"url":"^http://www\\.fatwallet\\.com/forums/",
"nextLink":"//ul[@class=\"pagination\"]/li/strong/following-sibling::a[1]"
},
{
"pageElement":"id(\"cam-container\")/*",
"url":"^http://(?:www\\.)?pornhublive\\.com/",
"nextLink":"id(\"content\")/ul[@class=\"paginate\"]/li[@class=\"active\"]/following-sibling::li[1]/a"
},
{
"pageElement":"//table[@class=\"contentTable\"]",
"url":"^http://www\\.dpreview\\.com/reviews/",
"nextLink":"//div[@class=\"paging\"]/a[contains(., \">\")]"
},
{
"insertBefore":"//div[@class=\"pager\"]",
"pageElement":"//div[@class=\"page\"]",
"url":"^http://(?:www\\.)?popsci\\.com\\.au/",
"nextLink":"//a[text()=\"next \u203a\"]"
},
{
"pageElement":"//td[@class=\"ProductsDisplay\"]//div[contains(@style,\"border-top: 1px dashed rgb(224, 224, 224);\")]",
"url":"^http://(?:www\\.)?dealextreme\\.com/",
"nextLink":"//div[@class=\"ProductPager\"]//a[text()=\"Next Page\"]"
},
{
"pageElement":"//div[span/@class=\"pagelink\"] | //table[@class=\"ttable\"] | id(\"posts\")",
"url":"^https?://[^?#]+?/showthread\\.php\\?",
"nextLink":"//div[@class=\"pagenav\"]//a[contains(text(), \">\")]"
},
{
"pageElement":"id(\"content\")/div[@class=\"post\"]",
"url":"^http://home\\.officesnapshots\\.com/",
"nextLink":"//a[contains(text(), \"Previous Entries\")]"
},
{
"pageElement":"id(\"content mainColumn\")//div[@class=\"title-line\" or @class=\"articledetailBox\" or @class=\"articleBox\"]",
"url":"^http://news\\.livedoor\\.com/topics/",
"nextLink":"id(\"content mainColumn\")//div[@class=\"article\"]/p[@class=\"link\"]/a"
},
{
"insertBefore":"//hr[2]",
"pageElement":"id(\"sample\")/div[2]/node()[self::div[not(descendant::img)] or self::hr[not(preceding-sibling::hr)] or self::br or self::text()][following::form]",
"url":"^http://blegi\\.jp/novel/[0-9]+/view/",
"nextLink":"//a[text()=\"\u6b21\u3078\u226b\"]"
},
{
"pageElement":"id(\"columnA_2columns\")//div[@class=\"thumbnail\"]",
"url":"^http://www\\.freecsstemplates\\.org/",
"nextLink":"id(\"columnA_2columns\")//div[@class=\"bottomPager\"]//a[contains(@class,\"next\")]"
},
{
"pageElement":"id(\"content\")//div[@class=\"sitebox\" or @class=\"div-x\" or @class=\"div-y\"]",
"url":"^http://(?:www\\.)?matome-plus\\.com/",
"nextLink":"id(\"content\")//div[@class=\"pagination\"]/ul/li[last()]/a[not(@class=\"currentpage\")]"
},
{
"pageElement":"//table[@class=\"barter_list\"]",
"url":"^http://mediamarker\\.net/barter/list",
"nextLink":"//div[@class=\"adbook_pagenavi\"]/a[last()]"
},
{
"insertBefore":"//center/a",
"pageElement":"//center/table",
"url":"^http://www\\.geocities\\.jp/cba4jp/j",
"nextLink":"//center/table/tbody/tr/td[1]/a"
},
{
"pageElement":"//div[@class=\"contents\"]",
"url":"^http://www\\.geocities\\.jp/m_hiroi/",
"nextLink":"//center/small/a[contains(text(),\"NextPage\")]"
},
{
"pageElement":"id(\"content\")/div[position()>1]",
"url":"^http://www\\.sweetnote\\.com/board/.",
"nextLink":"id(\"content\")/div[@class=\"pages\"]//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"id(\"content\")/div[@class=\"blog\"]/*[@class=\"date\" or @class=\"blogbody\"]",
"url":"^http://(?:[^.]+\\.)+osakazine\\.net/",
"nextLink":"id(\"content\")//div[@class=\"menu\"]/a[contains(.,\"\u6b21\u306e\")]"
},
{
"pageElement":"//div[@class=\"col1\"]/div[@class=\"padded\"]/*[not(./p/b[@class=\"page\"])]",
"url":"^http://www\\.portablefreeware\\.com/",
"nextLink":"//a[@class=\"page\" and contains(., \">\")]"
},
{
"pageElement":"//div[@class=\"content\" and not(./ancestor::*[@class=\"content\"])]",
"url":"^http://www\\.urbanhonking\\.com/owl/",
"nextLink":"id(\"date\")/a[contains(., \"<\")]"
},
{
"pageElement":"(//td[@class=\"padder\"]/table)[last()]",
"url":"^http://(?:www\\.)?youmama\\.ru/foto/",
"nextLink":"id(\"Navigator\")/span[@class=\"Page\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"cam-container\")/*",
"url":"^http://(?:www\\.)?xvideoslive\\.com/",
"nextLink":"//li[@class=\"active\"]/following-sibling::li[1]/a"
},
{
"pageElement":"//div[@class=\"entry\"][position() > 1]",
"url":"^http://h\\.hatena\\.(?:ne\\.jp|com)/",
"nextLink":"//a[contains(concat(\" \", normalize-space(@rel), \" \"), \" next \")]"
},
{
"pageElement":"//div[@id=\"page\"]/div[4]",
"url":"^http://(?:www\\.)?mangastream\\.com/",
"nextLink":"//a[@class=\"button\" and span/@class=\"add\" and contains(span/text(),\"Next Page\")]"
},
{
"pageElement":"id(\"holder\")//div[@class=\"entry-content\"]/*",
"url":"^http://www\\.twingly\\.com/search\\?",
"nextLink":"id(\"holder\")//div[@class=\"page\"]//li[@class=\"active\"]/following-sibling::li[1]/a"
},
{
"pageElement":"//table//table//tr/td",
"url":"^http://campus\\.nikki\\.ne\\.jp/\\?.",
"nextLink":"//table//table//tr/td/font/div/a"
},
{
"pageElement":"//div[@class=\"site-main\"]/div[@class=\"main-sectioncontent\"][1]",
"url":"^http://(?:www\\.)?deviantclip\\.com/",
"nextLink":"//a[@rel=\"Next\"]"
},
{
"pageElement":"//div[@class=\"pagination\"]/preceding-sibling::*",
"url":"^http://www\\.designflavr\\.com/(?!$)",
"nextLink":"//a[@class=\"pg-next\"]"
},
{
"pageElement":"//ol[@class=\"roster\"]",
"url":"^http://www\\.tumblr\\.com/directory/",
"nextLink":"id(\"pagination\")/a[last()]"
},
{
"pageElement":"//table[@class=\"listheadings\"]",
"url":"^http://(?:[^.]+\\.)?softpedia\\.com/",
"nextLink":"//td[@class=\"contentheadings\"]/a[contains(., \">\")]"
},
{
"pageElement":"id(\"visiblebms\")/div[contains(@class, \"saveitem\")]",
"url":"^http://bookmarks\\.yahoo\\.co\\.jp/.",
"nextLink":"//a[contains(concat(\" \", @class, \" \"), \" next \")]"
},
{
"pageElement":"id(\"results\")/ul",
"url":"^http://search\\.twitter\\.com/search",
"nextLink":"id(\"pager-bottom\")/a[@class=\"next\"]"
},
{
"pageElement":"id(\"activity-list\")/div[contains(@class,\"activity-item\")]",
"url":"^http://www\\.typepad\\.com/dashboard",
"nextLink":"id(\"content-inner\")/div[@class=\"content-dashboard pkg\"]/div[@class=\"content-main col\"]/div[@class=\"pagination-bar\"]/a[contains(text(),\"Next\")]"
},
{
"pageElement":"//*[not(self::div) and preceding-sibling::div[@class=\"text\"]]",
"url":"^http://c\\.wjob\\.jp/srch\\.php\\?.+",
"nextLink":"//div[@class=\"text\" and position()=last()]/a[contains(text(),\"\u6b21\")]"
},
{
"insertBefore":"id(\"body\")/div[@class=\"pager-index\"]",
"pageElement":"//table[@class=\"list\"]",
"url":"^http://m\\.hatena\\.(?:ne\\.jp|com)/",
"nextLink":"id(\"body\")/div[@class=\"pager-index\"]/a[contains(text(), \">\")]"
},
{
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://[^./]+\\.[^-./]+-nifty\\.com/",
"nextLink":"//link[@rel=\"prev\"] | //div[@class=\"entry-nav\"]/p/a"
},
{
"pageElement":"id(\"results\")",
"url":"^http://www\\.uniprot\\.org/uniprot/.",
"nextLink":"//p[contains(concat(\" \", @class, \" \"), \" next \")]/a[@accesskey=\"n\"]"
},
{
"pageElement":"id(\"mainContents\")/div[contains(concat(\" \", @class, \" \"), \" section \")]",
"url":"^http://www\\.sixapart\\.jp/business/",
"nextLink":"//ul[contains(concat(\" \", @class, \" \"), \" entryNavi \")]/li[contains(concat(\" \", @class, \" \"), \" next \")]/a"
},
{
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://(?:blogs|search)\\.sun\\.com/",
"nextLink":"//div[@class=\"blockheadwrap\"]//a[contains(., \"\u00bb\")]"
},
{
"insertBefore":"//div/div[@class=\"page\"]/div/div/table/tbody/tr/td/table/tbody/tr/td/div[@class=\"smallfont\"]",
"pageElement":"//table[@id=\"threadslist\"]",
"url":"^http://www\\.eq2flames\\.com/[^/]+/$",
"nextLink":"//form[@id=\"inlinemodform\"]/table/tbody/tr/td/div[@class=\"pagenav\"]/table[@class=\"tborder\"]/tbody/tr/td[@class=\"alt1\"][last()-1]/a[@class=\"smallfont\"]"
},
{
"pageElement":"id(\"main\")/div[contains(@class, \"content\")]",
"url":"^http://turenet\\.blog91\\.fc2\\.com/",
"nextLink":"//a[last()][descendant::img[@src=\"http://blog17.fc2.com/u/usedpc/file/to_nextentry.gif\"]]"
},
{
"pageElement":"id(\"photo-list-inner\")/*",
"url":"^http://idolpics\\.jp/Pics/searchPic/",
"nextLink":"id(\"content\")/div[@class=\"pagination\"]/span[@class=\"current\"]/following-sibling::span[1]/a"
},
{
"pageElement":"id(\"contents\")/div",
"url":"^http://(?:www\\.)?salchu\\.net/blog/",
"nextLink":"//p[contains(concat(\" \", @class, \" \"), \" pagenavi \")][last()]/a[last()]"
},
{
"pageElement":"//div[@class=\"KonaBody\"]/node()",
"url":"^http://(?:www\\.)?brainyquote\\.com/",
"nextLink":"//span[@class=\"bigbold\"][1]/text()[string-length(normalize-space()) > 2]/following-sibling::a[1]"
},
{
"pageElement":"id(\"pagenumbers\")/preceding::table[1]",
"url":"^http://www\\.playhub\\.com/category/",
"nextLink":"id(\"pagenumbers\")/a[@class=\"active\"]/following-sibling::a[1]"
},
{
"pageElement":"//ol",
"url":"^http://www\\.rsvp\\.com\\.au/search/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"//div[@class=\"log2\"]",
"url":"^http://bbs\\d+\\.apricot-fizz\\.net/",
"nextLink":"//span[@class=\"seeker\"]/a[contains(text(),\"[\u6b21\u306e\")]"
},
{
"pageElement":"//table[@class=\"productListing\"]",
"url":"^http://www\\.thedifferentscent\\.de/",
"nextLink":"//a[contains(., \">\")]"
},
{
"pageElement":"//div[@class='wr mg10t' and div/@class='ybx-md36']",
"url":"^http://xbrand\\.yahoo\\.co\\.jp/.+/$",
"nextLink":"//a[contains(text(),'\u6b21\u306e\u30da\u30fc\u30b8')]"
},
{
"pageElement":"id(\"left\")/table",
"url":"^http://(?:www\\.)?hardsextube\\.com/",
"nextLink":"id(\"pagesel\")//a[contains(., \"\u00bb\")]"
},
{
"pageElement":"id(\"content\")/p[@class=\"pagebar\"][1]/following-sibling::*[./following-sibling::p[@class=\"pagebar\"]]",
"url":"^http://www\\.somethingawful\\.com/d/",
"nextLink":"id(\"content\")/p[@class=\"pagebar\"]/a[@class=\"curpage\"]/following-sibling::a[1]"
},
{
"pageElement":"//div[@id=\"posts\"]/div/div[@class=\"page\"]/div",
"url":"^http://www\\.eq2flames\\.com/[^/]+/.",
"nextLink":"//div[@class=\"pagenav\"]/table[@class=\"tborder\"]/tbody/tr/td[@class=\"alt1\"][not(@nowrap=\"nowrap\")][last()]/a[@class=\"smallfont\"]"
},
{
"insertBefore":"//p[table/tbody/tr/td/font/b[starts-with(text(), \"Go to page:\")]]",
"pageElement":"//td[p/table/tbody/tr/td/font/b[normalize-space(text())=\"Go to page:\"]]/p[3]/following::node()[following::node()/table/tbody/tr/td/font/b[normalize-space(text())=\"Go to page:\"]]",
"url":"^http://(?:www\\.)?wi-fiplanet\\.com/",
"nextLink":"//a[text()=\"Next\"]"
},
{
"pageElement":"id(\"main\")/div",
"url":"^http://www\\.webhistory\\.jpn\\.org/",
"nextLink":"//li[@class=\"older\"]/a"
},
{
"pageElement":"//body/div[@id='banner']/following-sibling::table[1]",
"url":"^http://www\\.512x\\.net/seller/\\w+/",
"nextLink":"//body/table/tbody/tr/td/div[@class='nav']/a[@title='next page']"
},
{
"pageElement":"id(\"alpha-inner\")[h1]/*",
"url":"^http://gatoh\\.com/weblog/\\d+/\\d+/",
"nextLink":"id(\"alpha-inner\")/div[@class=\"content-nav\"]/a[1]"
},
{
"pageElement":"//ol[@class=\"literature\"]",
"url":"^http://100\\.yahoo\\.co\\.jp/detail/",
"nextLink":"//p[@class=\"more\"]/a"
},
{
"insertBefore":"id(\"xcolumn1\")//div[@class=\"prevnext\"]",
"pageElement":"id(\"xcolumn1\")/table[@class=\"news_table\"]|id(\"xcolumn4\")//div[@class=\"spacer\"][2]/table",
"url":"^http://(?:www\\.)?sammynetbook\\.com",
"nextLink":"id(\"xcolumn1\")/div[@class=\"nextprev\"]/a[contains(., \">>\")]|id(\"xcolumn4\")//span[@class=\"mediumtext\"]/a[contains(., \">>\")]"
},
{
"pageElement":"//div[@class=\"linkarea\"][1]/preceding-sibling::*[preceding-sibling::div[@class=\"tit_bor\"]]|//ul[@class=\"collist00\"]",
"url":"^http://sportsnavi\\.yahoo\\.co\\.jp/",
"nextLink":"//div[@class=\"linkarea\"]//b[text()=\"\u25c6\u524d\u5f8c\u306e\u30da\u30fc\u30b8\"]/following-sibling::b/following-sibling::a|//small/center/a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"id(\"messageList\")/div|//div[contains(concat(\" \", @class, \" \"), \" linear-message-list \")]",
"url":"^http://boardsus\\.playstation\\.com/",
"nextLink":"id(\"pager\")/ul/li[contains(concat(\" \", @class, \" \"), \" lia-paging-page-next \")]/a"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" elementBox \")]",
"url":"^http://kakaku\\.com/.+/ranking_\\d+/",
"nextLink":"//p[contains(concat(\" \", @class, \" \"), \" paging \")]/a[last()]"
},
{
"pageElement":"//ul[@class=\"pager\"]/following-sibling::*[./following-sibling::ul[@class=\"pager\"]]",
"url":"^http://(?:no|ww)w\\.nicochart\\.jp/.",
"nextLink":"//ul[@class=\"pager\"]/li[./em]/following-sibling::li[1]/a"
},
{
"pageElement":"id(\"threadslist\")/tbody/tr[@class=\"alt1\" or @class=\"alt2\"]|id(\"lastpost\")/preceding-sibling::*|id(\"vba_news4\")/*|//td[@class=\"panel\"]/div[@class=\"pagenav\"]/following-sibling::*[./following-sibling::div[@class=\"pagenav\"]]|//div[@class=\"host_container\"]|id(\"mainContent\")/table[@class=\"tborder\" and ./tbody/tr/td[@class=\"thead\" and .=\"Thumb\"]]/tbody/tr[./td[@class=\"alt1\"]]|id(\"search\")//div[contains(concat(\" \", @class, \" \"), \" app_result \")]",
"url":"^http://(?:appstore\\.)?modmyi\\.com/",
"nextLink":"//a[@rel=\"next\"]|//span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"//table[contains(@class, \"blue_to_noline\")]",
"url":"^http://4travel\\.jp/dynamic/camera/.",
"nextLink":"//a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\u3078\")]"
},
{
"pageElement":"id(\"news-content\")/div[contains(concat(\" \", @class, \" \"), \" KonaBody \")]/*|id(\"searchResultsListing\")|id(\"intelliTXT\")/div[@class=\"basicCentral-elm\" and ./div[@class=\"title2\"]]/*",
"url":"^http://www\\.tomshardware\\.co\\.uk/",
"nextLink":"id(\"internalMain\")//li[contains(concat(\" \", @class, \" \"), \" next \")]/a"
},
{
"pageElement":"id(\"recent\")/div[contains(concat(\" \", @class, \" \"), \" post \")]",
"url":"^http://www\\.smashingmagazine\\.com/",
"nextLink":"//div[@class=\"next\"]/a"
},
{
"pageElement":"//div[@class=\"contentsbox\"]//div[@class=\"text\"][2]",
"url":"^http://(?:www\\.)?webdedb\\.com/cat/",
"nextLink":"id(\"p_navi\")//a[starts-with(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"//div[@class=\"article-entry section\"]",
"url":"^http://medical\\.nikkeibp\\.co\\.jp/",
"nextLink":"//a[@class=\"next visited-off\"]"
},
{
"pageElement":"id(\"Main\")/div[@class=\"post\"]",
"url":"^http://topwpthemes\\.com/(?:page/|$)",
"nextLink":"id(\"Main\")/p/a[contains(., \"\u00bb\")]"
},
{
"pageElement":"id(\"mainSearch\")/div[@class=\"srCell\" or @class=\"clear\"]",
"url":"^http://(?:www\\.)?istockphoto\\.com/",
"nextLink":"//span[@class=\"currentPage\"]/following-sibling::a[1]"
},
{
"pageElement":"//div[@class='navheader']/following-sibling::div[1]",
"url":"^http://www\\.drbd\\.jp/users-guide/.",
"nextLink":"//a[@accesskey='n']"
},
{
"pageElement":"id(\"data\")/div[starts-with(@class, \"search_result\")]",
"url":"^http://www\\.discogs\\.com/search\\?",
"nextLink":"id(\"data\")/div[@align=\"center\"]/a[@class=\"pagelinknorm\"][starts-with(text(), \"Next\")]"
},
{
"pageElement":"//div[@class=\"oneEntry\" or @id=\"comment-trackback\"]",
"url":"^http://blog\\.goo\\.ne\\.jp/warp50cd",
"nextLink":"//a[child::span[@class=\"etNextPrev\"]]"
},
{
"pageElement":"id(\"threadslist\")|id(\"lastpost\")/preceding-sibling::*",
"url":"^http://www\\.city-data\\.com/forum/",
"nextLink":"//div[@class=\"pagenav\"]//a[contains(., \">\")]"
},
{
"pageElement":"//div[@class=\"daily\"] | id(\"entries\")",
"url":"^http://www\\.urbandictionary\\.com/",
"nextLink":"id(\"paginate_next\") | //a[@rel=\"next\"]"
},
{
"pageElement":"id(\"right\")/div[contains(@class, \"items\")]",
"url":"^http://www\\.sunrain-records\\.com/",
"nextLink":"//a[descendant::img[@src=\"../img/navi3_1.gif\"]]"
},
{
"pageElement":"id(\"content-main\")/div[@class=\"report\"]/*[following-sibling::ul]",
"url":"^http://(?:[^.]+\\.)?autoc-one\\.jp/",
"nextLink":"id(\"content-main\")//li[@class=\"next\"]/a"
},
{
"pageElement":"//ul[@class=\"pictures\"]",
"url":"^http://www\\.vecteezy\\.com/gallery",
"nextLink":"//div[@class=\"pager\"]/ul/li[@class=\"nextpage\"]/a"
},
{
"pageElement":"//div[@class=\"commit\"]",
"url":"^http://newspeak\\.8-p\\.info/search",
"nextLink":"//div[@class=\"paginate\"]//strong/following-sibling::span/a"
},
{
"pageElement":"//div[@class=\"entry-body\"]",
"url":"^http://gura5\\.blog120\\.fc2\\.com/",
"nextLink":"//p[@class=\"prev-next-navi\"]/a[contains(@title,\"\u6b21\u9801\")]"
},
{
"pageElement":"//p[@class=\"searchList\"]",
"url":"^http://hashdb\\.com/search\\.php\\?",
"nextLink":"//a[starts-with(text(), \"\u6b21\u3078\")]"
},
{
"pageElement":"id(\"centercol\")/p[@class=\"nextprev\" or span[@class=\"nextprev\"]]/following-sibling::node()[following-sibling::p[@class=\"nextprev\"] or following-sibling::p/span[@class=\"nextprev\"]]",
"url":"^http://www\\.atmarkit\\.co\\.jp/im/",
"nextLink":"id(\"centercol\")//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\" or strong[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]]"
},
{
"pageElement":"id(\"b\")/a[@id=\"nextlink\" or @id=\"previouslink\"]/preceding-sibling::*",
"url":"^http://(?:www\\.)?mayoclinic\\.com/",
"nextLink":"id(\"nextlink\")"
},
{
"insertBefore":"//div[contains(concat(\" \", @class, \" \"), \" pager-bottom \")][last()]",
"pageElement":"//ol[@class=\"clips\"]",
"url":"^http://clip\\.livedoor\\.com/clips/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"searchContainer02\")/div[@class=\"epfbMain\"]/table",
"url":"^http://(?:www\\.)?bellemaison\\.jp/",
"nextLink":"//span[@class=\"num\"]/span/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"page\"]/img[1]|//div[@class=\"interview_text\"]",
"url":"^http://touch-ds\\.jp/dsi/interview/",
"nextLink":"//img[starts-with(@name,\"menu\") and parent::td]/ancestor::tr/following-sibling::tr//a"
},
{
"pageElement":"//center/table[3]/tbody/tr/td/table[2]",
"url":"^http://www\\.zorg\\.com/pub/photol.",
"nextLink":"//center/table[3]/tbody/tr/td/table[last()]/tbody/tr[last()]/td/table/tbody/tr/td[last()]/a"
},
{
"pageElement":"//ol[@class=\"itemArea\"]",
"url":"^http://www\\.graniph\\.com/product/",
"nextLink":"//dl[@class=\"naviBox\"]//a[contains(., \">\")]"
},
{
"pageElement":"//table[@class=\"keijibanwaku\"]",
"url":"^http://(?:www\\.)?info-fresh\\.com/",
"nextLink":"//td[@class=\"default\"]/a[text()=\">>\"]"
},
{
"pageElement":"id(\"body\")/div[@class=\"pagenavi\"]/preceding-sibling::*",
"url":"^http://cento\\.sakura\\.ne\\.jp/sb/",
"nextLink":"id(\"body\")//a[@rel=\"next\"]"
},
{
"insertBefore":"id(\"maincontent\")/div[@class=\"pagerize\"]/ul",
"pageElement":"id(\"maincontent\")/div[@class=\"recentList\"]",
"url":"^http://ki(?:chiku|kuchi)\\.oq\\.la/",
"nextLink":"id(\"maincontent\")/div[@class=\"pagerize\"]/ul/li[@class=\"pagelink\"]/a[text()=\">\"]"
},
{
"pageElement":"id(\"article_body\")/*[not(contains(concat(\" \", @class, \" \"), \" pagination \") or @id=\"intercept\")]|id(\"left_col\")/ul[./li/span[@class=\"publish_date\"]]|id(\"list_all\")|id(\"whitepaper_list webcast_list\")/*",
"url":"^http://www\\.computerworld\\.com/s/",
"nextLink":"id(\"next_page\")/a|id(\"columnone\")/div/a[contains(concat(\" \", @class, \" \"), \" next \")]"
},
{
"pageElement":"//center[a[@href=\"?fc=help\"]]",
"url":"^http://(?:[^.]+\\.)?oekakist\\.com/",
"nextLink":"//a[b[contains(text(), \"BACK\")]]"
},
{
"pageElement":"id(\"left_box\")/div[(position()>1) and (position()<last())]",
"url":"^http://www\\.namaan\\.net/result\\?",
"nextLink":"//a[descendant::img[@src=\"http://www.namaan.net/img/foot-an.gif\"]]"
},
{
"pageElement":"id(\"result\")/ul[@class=\"icons\"]",
"url":"^http://(?:www\\.)?iconseeker\\.com/",
"nextLink":"id(\"result\")/div[@class=\"pager\"]//a[contains(., \"Next\")]"
},
{
"pageElement":"//li[table/@class='item']",
"url":"^http://search2\\.naturum\\.co\\.jp/",
"nextLink":"id('result_bottom')/p[@class='page_bar']/a[contains(text(),'\u6b21\u306e\u30da\u30fc\u30b8>>')]"
},
{
"pageElement":"//div[@class=\"testoContainer\"]/node()",
"url":"^http://punto-informatico\\.it/\\d+/",
"nextLink":"id(\"pageNavigator\")/a[contains(text(),\"continua\")]"
},
{
"pageElement":"//p[@class=\"text\"]/preceding-sibling::table[.//td[@class=\"thumb\"]]|id(\"left\")/div[@class=\"entry\"]",
"url":"^http://(?:www\\.)?freepixels\\.com/",
"nextLink":"//p[@class=\"text\"]/a[@title=\"Next Page\"]|id(\"left\")//span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"leftcol\")//div[@class=\"article\"]/p",
"url":"http://(?:www\\.)?infoworld\\.com/d/",
"nextLink":"id(\"leftcol\")//div[@class=\"nextLink\"]/a"
},
{
"pageElement":"id(\"contents-inner\")/div[@class=\"main-entry\"]",
"url":"^http://alsoku\\.blog47\\.fc2\\.com/",
"nextLink":"id(\"contents-inner\")/ul[@class=\"entry-navi\"]//a[@title=\"\u6b21\u306e\u30da\u30fc\u30b8\u3078\"]"
},
{
"pageElement":"//div[contains(concat(\" \",normalize-space(@class),\" \"),\" walls-listing \")]",
"url":"^http://www\\.wallpapers-room\\.com/",
"nextLink":"//div[contains(concat(\" \",normalize-space(@class),\" \"),\" next-page-button \")]/a"
},
{
"pageElement":"id(\"spam-report\")/tbody/tr",
"url":"^http://tweetblocker\\.com/dashboard",
"nextLink":"//a[@rel=\"next\"][last()]"
},
{
"pageElement":"id(\"main\")/div[contains(@class,\"entry\")]",
"url":"^http://liosk\\.blog103\\.fc2\\.com/",
"nextLink":"id(\"main\")/div[@class=\"navi\" and last()]/a[last()]"
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
"pageElement":"//div[@class=\"wrap\"]/div[@class=\"left\"]/div[@class=\"border channel\"]",
"url":"^http://up\\.b9dm\\.com/search\\.php",
"nextLink":"id(\"multi_page\")/a[@class=\"nextpage\"]"
},
{
"pageElement":"//div[@class=\"entrybody\"]",
"url":"^http://blogmag\\.ascii\\.jp/kodera/",
"nextLink":"//div[@class=\"entryback-next\"]/dl/dd[1]/p/a"
},
{
"insertBefore":"/html/body/div[@class=\"spacer\"][last()]",
"pageElement":"//table[@width=\"98%\"]",
"url":"^http://\\d+\\.teacup\\.com/\\w+/bbs",
"nextLink":"//a[@class=\"PL_JUMP\"][last()]"
},
{
"pageElement":"id(\"main\")/div",
"url":"^http://doupon\\.blog36\\.fc2\\.com/",
"nextLink":"//div[@class=\"page_navi2\"]/a[last()]"
},
{
"pageElement":"//div[@class=\"post\"]",
"url":"^http://blog\\.parachutefonts\\.com/",
"nextLink":"id(\"nav_links\")/div[@class=\"alignleft\"]/a"
},
{
"pageElement":"id(\"leaf_body\") | id(\"center\")/div[@class=\"text\"]",
"url":"^http://www\\.nikkeibp\\.co\\.jp/sj/",
"nextLink":"//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"] | id(\"next\")//a[last()]"
},
{
"pageElement":".//div[@class=\"post\"]",
"url":"^http://wuhuiyu1983\\.blogbus\\.com/",
"nextLink":".//div[@class=\"pagenavi\"]/span/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"userStyled\"]/table",
"url":"^http://www\\.cracked\\.com/article_",
"nextLink":"//a[@class=\"next_arrow_active\"]"
},
{
"pageElement":"id(\"bodytext\")/div[@class=\"pagination\"]/preceding-sibling::*",
"url":"^http://www\\.ftchinese\\.com/story/",
"nextLink":"//span[@class=\"current\"]/following-sibling::a"
},
{
"pageElement":"descendant::table[preceding-sibling::div/a[contains(text(),\"\u6b21\u3078\")]][1]",
"url":"^http://mkpl\\.jp/(?:item|sellers?)/",
"nextLink":"descendant::div/a[contains(text(),\"\u6b21\u3078\")]"
},
{
"pageElement":"id(\"maincol\")/div[@class=\"newsentry\"][position()<last()]|id(\"pagecontent\")/table[@class=\"tablebg\"]",
"url":"^http://(?:www\\.)?gonintendo\\.com/",
"nextLink":"id(\"maincol\")/div[@class=\"newsentry\"][last()]/a[contains(., \"Older\")]|id(\"pagecontent\")//td[@class=\"gensmall\"]/"
},
{
"pageElement":"id(\"List1_p\")",
"url":"^http://kakaku\\.com/search_results/",
"nextLink":"id(\"PNavi_PNavi\")//a[@class=\"next\"]"
},
{
"pageElement":"id(\"showImage\")/parent::a",
"url":"^http://(?:www\\.)?fapdb\\.com/babe/",
"nextLink":"id(\"next\")"
},
{
"pageElement":"//div[@class=\"lifelog-list\" or @class=\"ptn-contents\"]",
"url":"^http://[^.]+\\.lifespacetime\\.com/",
"nextLink":"//div[@class=\"list-repage\"]/a[last() and text()=\">>\"]"
},
{
"pageElement":"id(\"main\")/div[@class=\"post\"]",
"url":"^http://www\\.thesimpledollar\\.com/",
"nextLink":"id(\"main\")/p/a[contains(., \"Older\")]"
},
{
"pageElement":"id(\"subbody\")/ul[contains(concat(\" \",@class,\" \"),\" file_list \")]/li",
"url":"^http://www\\.vector\\.co.jp/vpack/.",
"nextLink":"id(\"subbody\")/div[contains(concat(\" \",@class,\" \"),\" pagenav \") and last()]/node()[not(self::a) and (number(translate(self::text(),\"|\",\"\")) > 0)]/following-sibling::a[1]"
},
{
"pageElement":"id(\"entry\")/div[@class=\"entry_body\"]",
"url":"^https?://agri-biz\\.jp/item/detail/",
"nextLink":"id(\"main\")//ul[contains(@class, \"page_menu\")]/li[@class=\"pag_m3\"]/a"
},
{
"pageElement":"id(\"results\")",
"url":"^http://coderepos\\.org/share/search",
"nextLink":"//span[contains(concat(\" \",@class,\" \"),\" next \") and last()]/a"
},
{
"pageElement":"(//table[@class=\"topicslist\"] | id(\"reslist\"))",
"url":"^http://komachi\\.yomiuri\\.co\\.jp/",
"nextLink":"//a[@class=\"nxt\"]"
},
{
"pageElement":"id(\"content\")/div[starts-with(@id, \"entry-\")]",
"url":"^http://(?:www\\.)?boingboing\\.net/",
"nextLink":"id(\"continue-reading\")/a | id(\"archive-nav-bottom\")/div[@class=\"older\"]/a"
},
{
"pageElement":".//div[@class=\"tpwhite\"]",
"url":"^http://(?:www\\.)?freedocast\\.com/",
"nextLink":".//div[@class=\"pagingbg_div\"]//span[@class=\"pagingbg_div_active\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"content\")/table",
"url":"^http://blog\\.trendmicro\\.co\\.jp/",
"nextLink":"id(\"content\")//a[descendant::*[text()=\"\u524d\u306e\u8a18\u4e8b\"]]"
},
{
"pageElement":"id(\"content\")/div[@class=\"content_list\"]/div[@class=\"list\" or @class=\"clear\"]",
"url":"^http://[^.]+\\.fotolia\\.com/search",
"nextLink":"//a[@class=\"next\"]"
},
{
"insertBefore":"id(\"content\")//div[@class=\"YCB10701\"]",
"pageElement":"id(\"content\")//div[@class=\"YCB10202\"]",
"url":"^https://yorimo\\.yomiuri\\.co\\.jp/",
"nextLink":"id(\"content\")//div[@class=\"YCB10601-info\"]//a|id(\"content\")//li[@class=\"YCB10801-prev\"]/a"
},
{
"pageElement":"//span[@class=\"style1\"]/ancestor::table[2]",
"url":"^http://(?:www\\.)?tanaka-rie\\.com/",
"nextLink":"//a[contains(., \"\u524d\u306e\u65e5\u8a18>>\")]"
},
{
"insertBefore":"//div[@class=\"resultslinkbar\"]",
"pageElement":"id(\"listing\")",
"url":"^http://iconfactory\\.com/freeware/.",
"nextLink":"id(\"next\")/a"
},
{
"pageElement":"//div[contains(@class, \"box\")]",
"url":"^http://(?:www\\.)?planet-php\\.org/",
"nextLink":"//span[1]/a"
},
{
"pageElement":"id(\"main\")",
"url":"^http://www\\.mooter\\.co\\.jp/moot/",
"nextLink":"id(\"paging\")//img[contains(@src, \"/pagebtn_next.\")]/following-sibling::a"
},
{
"insertBefore":"//div[@class=\"content\"]/div[@class=\"pagination\"]",
"pageElement":"//div[@class=\"articleBody\"]",
"url":"^http://[^.]+\\.howstuffworks\\.com/",
"nextLink":"//a[text()=\"Next Page\"]"
},
{
"pageElement":"id(\"content_mainWrapper\")",
"url":"^http://www\\.pdb\\.org/pdb/results/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" toolbar \")]/table/tbody/tr/td[not(child::a) and last()]/following-sibling::td[position()=1]/a"
},
{
"pageElement":"id(\"contents\")/div/div/form/table",
"url":"^http://tv\\.yahoo\\.co\\.jp/search/",
"nextLink":"//a[contains(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"bodySection-col1\")",
"url":"^https?://[^.]+\\.backlog\\.jp/rev/.",
"nextLink":"id(\"revisionPagerSection\")/a[contains(text(), \"\u524d\u306e\u30ea\u30d3\u30b8\u30e7\u30f3\")]"
},
{
"pageElement":"//div[contains(concat(\" \",@class,\" \"),\" post \")]",
"url":"^http://alpha\\.mixi\\.co\\.jp/blog/",
"nextLink":"//a[contains(text(),\"\u6b21\u30da\u30fc\u30b8\u3078\")]"
},
{
"pageElement":"id(\"nav-below\")/preceding-sibling::*",
"url":"^http://visublog\\.mechafetus\\.com/",
"nextLink":"id(\"wp_page_numbers\")/ul/li[@class=\"active_page\"]/following-sibling::li[1]/a"
},
{
"pageElement":"//ul[@class=\"applistverticalwide\"]/li",
"url":"http://iphone\\.orelabo\\.jp/search/",
"nextLink":"//div[@class=\"yui-g\"]/div[@class=\"page\"]/a[starts-with(text(),\"\u6b21\")]"
},
{
"insertBefore":"//div[@id=\"pages_btns\"]",
"pageElement":"//div[@class=\"wrap\"]/form",
"url":"^http://jpmp3\\.com/viewthread\\.php",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id(\"contents\")/*",
"url":"^http://www\\.muji\\.net/lab/report/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"pages\")/preceding-sibling::node()",
"url":"^http://(?:[^./]+\\.)?youporn\\.com/",
"nextLink":"id(\"pages\")/a[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"firstonpage\"]/table",
"url":"^http://www\\.kickasstorrents\\.com/",
"nextLink":"//div[@class=\"pages\"]/span/following-sibling::a[1]"
},
{
"pageElement":"(//div[@class=\"PageHeadline\"])[2]/ancestor::tr[1]/following-sibling::tr[1]/td/node()[not(self::div[a[contains(@href, \"/jobs/\")]])]",
"url":"^https?://secunia\\.com/advisories/",
"nextLink":"(//div[@class=\"PageHeadline\"])[2]//td[text()=\" ] [ \"]/b[last()]/following-sibling::a[1]"
},
{
"pageElement":"id(\"kiji\")/child::node()",
"url":"^http://itpro\\.nikkeibp\\.co\\.jp/",
"nextLink":"id(\"naviBottom\")//a[@class=\"toNext\"]|id(\"naviBottom\")//a[@class=\"now\"]/following-sibling::a"
},
{
"pageElement":"//div[@class=\"gallery-image\"]/child::*[following-sibling::ul[@id=\"gallery-nav\"]]",
"url":"^http://gizmodo\\.com/photogallery/",
"nextLink":"id(\"gallery-next\")/a"
},
{
"pageElement":"id(\"contents\")/div[contains(@class,\"res-box\")]",
"url":"^http://jp\\.forum\\.appbank\\.net/",
"nextLink":"(//a[descendant::img[@src=\"/images/arrow-r_off.gif\"]])[last()]"
},
{
"pageElement":"id(\"predictad_div\")/../table[.//a/@class=\"menu\"]",
"url":"^http://www\\.demonoid\\.com/files/",
"nextLink":"id(\"fslispc\")//a[@class=\"menu\"][contains(.,\"Next >>\")]"
},
{
"pageElement":"id(\"ShelfErrorSwitch\")/following-sibling::*",
"url":"^http://www\\.walmart\\.com/browse/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" PageSkip \")]/b/following-sibling::a[1]"
},
{
"pageElement":"id(\"contentinner\")/*",
"url":"^http://www\\.rapidsharehunt\\.com/",
"nextLink":"id(\"wp_page_numbers\")//li[@class=\"active_page\"]/following-sibling::li[1]//a"
},
{
"pageElement":"//td[@class=\"outer\"]/table[last()]",
"url":"^https?://www\\.revolutiontt\\.net/",
"nextLink":"//a[not(contains(@href, \"page=-1\")) and b[contains(text(), \"Next\")] or text()=\"Next >>\"]"
},
{
"pageElement":"id(\"primary-column\")/div[@class=\"section\"]",
"url":"^http://e0166\\.blog89\\.fc2\\.com/",
"nextLink":"//p[@class=\"prev-next-navi\"]/a[child::strong[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]]"
},
{
"pageElement":"id(\"contents_area\")/div/div[4]/p",
"url":"^http://www\\.japan-manganews\\.jp/",
"nextLink":"id(\"contents_area\")/div/div[3]/p/a"
},
{
"pageElement":"id(\"cam-container\")/*",
"url":"^http://(?:www\\.)?streamate\\.com/",
"nextLink":"id(\"content\")/ul[@class=\"paginate\"]/li[@class=\"active\"]/following-sibling::li[1]/a"
},
{
"pageElement":"id(\"blog_index\")/div[@class=\"entry\"]",
"url":"^http://(?:www\\.)?usejquery\\.com/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"search_result\")/table",
"url":"^http://nico\\.grn-web\\.net/search",
"nextLink":"//div[@class=\"page\"]/a[@class=\"now\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"reviewList\")",
"url":"^http://review\\.rakuten\\.co\\.jp/",
"nextLink":"id(\"reviewList\")/p[contains(concat(\" \",normalize-space(@class),\" \"), \" pager \")]/a[contains(text(),\">>\")]"
},
{
"pageElement":"id(\"main\")/ol",
"url":"^http://pulpsite\\.net/erohoo/word/",
"nextLink":"id(\"navi\")/b/following-sibling::*[1][self::a]"
},
{
"pageElement":"id(\"cam-container\")/*",
"url":"^http://(?:www\\.)?youjizzlive.com/",
"nextLink":"id(\"content\")/ul[@class=\"paginate\"]/li[@class=\"active\"]/following-sibling::li[1]/a"
},
{
"pageElement":"//table[@class='maintable']",
"url":"^http://bitgamer\\.com/browse\\.php",
"nextLink":"//b[contains(text(),'Next >>')]"
},
{
"pageElement":"id(\"prodcatRow\")/following-sibling::tr",
"url":"^http://(?:www\\.)?macupdate\\.com/",
"nextLink":"id(\"pagedNavigation\")/a[contains(concat(\" \", @class, \" \"), \" curpage \")]/following-sibling::a[1]"
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
"insertBefore":"id(\"middleFooter\")",
"pageElement":"id(\"middleContent\")",
"url":"^http://(?:www\\.)?xkcd\\.com/\\d+/",
"nextLink":"//a[@accesskey=\"n\" and @href!= \"#\"]"
},
{
"pageElement":"id(\"results\")/div[@id=\"newresult\"]",
"url":"^http://(?:www\\.)?filestube\\.com/",
"nextLink":"id(\"pager\")/a[text()=\"Next\"]"
},
{
"pageElement":"id(\"pic\")",
"url":"^http://(?:www\\.)?subimg\\.net/jpg",
"nextLink":"id(\"go\")/div[@class=\"containerdiv\"]/a"
},
{
"pageElement":"id(\"content\")/div",
"url":"^http://shibuya\\.lisp-users\\.org/",
"nextLink":"//div[@class=\"navigation\"]/div[@class=\"alignleft\"]/a"
},
{
"pageElement":"//div[contains(@class, \"ytiras-mn2\")]",
"url":"^http://chirashi\\.yahoo\\.co\\.jp/",
"nextLink":"//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":".//div[@class=\"r\"]",
"url":"^http://(?:www\\.)?fileshunt\\.com/",
"nextLink":".//div[@class=\"pager\"]/span[@class=\"ap\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"showCase\")",
"url":"^http://newsweekjapan\\.jp/picture/",
"nextLink":"id(\"showCase\")//li[@class=\"next\"]/a"
},
{
"pageElement":"//table[@class=\"forumline forum\"]|id(\"topic_main\")",
"url":"^http://(?:www\\.)?rutracker\\.org/",
"nextLink":"//a[text()=\"\u0421\u043b\u0435\u0434.\"]"
},
{
"insertBefore":"//div[@class=\"wpPagination\"]",
"pageElement":"//div[@class=\"wpDisplay\"]",
"url":"^http://www\\.socwall\\.com/browse/",
"nextLink":"//div[@class=\"wpPagination\"]/a[last()]"
},
{
"pageElement":"//ul[@class='novel-list']",
"url":"^http://tategakibunko\\.mydns\\.jp/",
"nextLink":"//a[@rel='next']"
},
{
"insertBefore":"id(\"actions_bottom\")",
"pageElement":"id(\"bodycontent\")",
"url":"^http://(?:www\\.)?mdconsult\\.com/",
"nextLink":"id(\"bookPage\")/div[@class=\"prevnext_btm\"]/a[last()]"
},
{
"pageElement":"id(\"storybody\")",
"url":"^http://(?:www\\.)?wvgazette\\.com/",
"nextLink":"//a[@class=\"nextPage\"]"
},
{
"pageElement":"id(\"content\")/*[not(@id=\"paginateLinks\")]",
"url":"^http://(?:www\\.)?egotastic\\.com/",
"nextLink":"//a[contains(translate(text(), \"next\", \"NEXT\"), \"NEXT\")]"
},
{
"pageElement":"id(\"main-content\")",
"url":"^http://www\\.fringebloggers\\.com/",
"nextLink":".//div[@class=\"Nav\"]/strong[@class=\"on\"]/following-sibling::a[1]"
},
{
"pageElement":".//div[@class=\"section entry\"]",
"url":"^http://(?:www\\.)?ideaxidea\\.com/",
"nextLink":".//a[parent::li[@class=\"older\"]]"
},
{
"pageElement":"//div[starts-with(@id, \"description_short_\")]/ancestor::div[1]",
"url":"^http://(?:www\\.)?megavideo\\.com/",
"nextLink":"//a[@accesskey=\"n\"]"
},
{
"pageElement":"//div[@class=\"contents\"]/div/*[following-sibling::div[descendant::img[contains(@src, \"back.gif\") or contains(@src, \"next.gif\")]]] | //div[@class=\"contents\"]/*[following-sibling::div[descendant::img[contains(@src, \"back.gif\") or contains(@src, \"next.gif\")]]]",
"url":"^http://www\\.techscore\\.com/tech/",
"nextLink":"//a[img[@src=\"/image/next.gif\"]]"
},
{
"pageElement":"id(\"contents_inner\")/div[contains(@class, \"latest_posts\")]",
"url":"^http://www\\.secondtimes\\.net/vw/",
"nextLink":"//span[@class=\"next\"]/a"
},
{
"pageElement":"id(\"text\")",
"url":"^http://(?:www\\.)?mcstories\\.com/",
"nextLink":"//div[@class=\"arrows\"]/a[last()]"
},
{
"pageElement":"id(\"main\")/table/tbody/tr[td]",
"url":"^http://300\\.wi2\\.co\\.jp/area/1/",
"nextLink":"id(\"main\")/a[@title=\"next page\"]"
},
{
"insertBefore":"id(\"postnavi\")",
"pageElement":"//div[contains(@class,\"post\")]",
"url":"^http://tech\\.lampetty\\.net/tech/",
"nextLink":"//span[contains(@class,\"older\") or contains(@class,\"next\")]/a"
},
{
"pageElement":"//div[@class=\"entryBodyset\" or @class=\"pagetop\"]",
"url":"^http://sumitan\\.sakura\\.ne\\.jp/",
"nextLink":"//div[@class=\"pagemove\"]/a[text()=\"\u904e\u53bb>>\"]"
},
{
"pageElement":"//div[@class=\"blogEntry\"]|//div[contains(concat(\" \", @class, \" \"), \" section \")]",
"url":"^http://www\\.zackzack\\.jp/letter/",
"nextLink":"//div[@class=\"pager\"]/ul/li[./strong]/following-sibling::li[1]/a"
},
{
"pageElement":"id(\"tile_box\")/*",
"url":"^http://(?:[^./]+\\.)?giveapp\\.jp/",
"nextLink":"id(\"tile_boxs\")/div[@class=\"pager\"]/a[@title=\"next page\"]"
},
{
"pageElement":"//div[@class=\"tutorial\"]",
"url":"^http://www\\.good-tutorials\\.com/",
"nextLink":"//div[@class=\"pagination\"]/a[last()]"
},
{
"pageElement":"id(\"gallery-bottom\")/div[@class=\"block\"]/div[@class=\"common-block\"]",
"url":"^http://www\\.holytaco\\.com/photos",
"nextLink":"id(\"gallery-bottom\")//li[@class=\"pager-next\"]/a"
},
{
"pageElement":"id(\"pageElement\")",
"url":"https?://aipo-live\\.appspot\\.com/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"primary\")/ul[@class=\"applications\"]",
"url":"^http://[^./]+\\.androidzoom\\.com/",
"nextLink":"id(\"primary\")/ul[@class=\"pagination\"]/li[@class=\"next\"]/a"
},
{
"pageElement":"//div[@class=\"section\" or @class=\"chapter\" or @class=\"book\"]",
"url":"^http://diveintogreasemonkey\\.org/",
"nextLink":"//div[contains(text(), \"\u2192\")]/a"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" latest-story \")]|id(\"story\")/*|//ul[@class=\"archive-listing\"]",
"url":"^http://www\\.builderau\\.com\\.au/",
"nextLink":"//div[@class=\"pages\"]//a[contains(., \">\")]"
},
{
"pageElement":"//div[@class=\"list-content grid\"]",
"url":"^http://list\\.mall\\.taobao\\.com/",
"nextLink":"//a[@class=\"page-next\"]"
},
{
"pageElement":"//table[@class=\"brdr\"]",
"url":"^http://mai-net\\.ath\\.cx/bbs/sst/",
"nextLink":"//table[@class=\"brdr\"]//a[contains(text(), \"\u6b21\u3092\u8868\u793a\u3059\u308b\")]"
},
{
"insertBefore":"id(\"spell_form\")",
"pageElement":"id(\"quickModForm\")",
"url":"^http://foro\\.lawebdeltenis\\.net/",
"nextLink":"id(\"quickModForm\")//td[@class=\"middletext\"]/b[.!=\" ... \"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"main\")/div[@class=\"rounded_box\"]/p[@class=\"header\"]/following-sibling::*[./following-sibling::p[@class=\"footer\"]]",
"url":"^http://doujinshi\\.mugimugi\\.org/",
"nextLink":"//a[contains(concat(\" \", @class, \" \"), \" next \") and position()=last()]"
},
{
"pageElement":"id(\"posts\")",
"url":"^http://www\\.pagalguy\\.com/forum/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"yui-main\")/*[contains(concat(\" \",normalize-space(@class),\" \"), \" photo \") or self::br]",
"url":"^http://idoolphooot\\.oooooz\\.com/",
"nextLink":"//a[contains(concat(\" \",normalize-space(@class),\" \"), \" nextprev \") and contains(text(),\"Next\")]"
},
{
"pageElement":"//p[@class=\"ArticleBody\"]",
"url":"^http://(?:www\\.)?infoworld\\.com/",
"nextLink":"//div[@class=\"nextLink\"]/a"
},
{
"pageElement":"id(\"web\")/ol",
"url":"^http://search\\.yahoo\\.com/search",
"nextLink":"id(\"pg-next\")"
},
{
"pageElement":"//div[@class=\"column\"]",
"url":"^http://bizplus\\.nikkei\\.co\\.jp/",
"nextLink":"//div[@class=\"page_nation\"]/a[starts-with(text(),\"\u6b21\u306e\")]"
},
{
"insertBefore":"id(\"answers\")/node()[last()]",
"pageElement":"id(\"mainbar questions\")/div[@class=\"question-summary\"]|id(\"answers\")/div[@class=\"pager-answers\"][1]/following-sibling::*[./following-sibling::div[@class=\"pager-answers\"]]",
"url":"^http://meta\\.stackoverflow\\.com/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"clsfds_list\")",
"url":"^http://www\\.car\\.gr/classifieds/",
"nextLink":"//span[@class=\"next_page\"]/a"
},
{
"pageElement":"id(\"page6_contents\")/*[following::div[@class=\"article_paging\"]]",
"url":"^http://jp\\.ibtimes\\.com/article/",
"nextLink":"//a[text()=\"\u6b21\"]"
},
{
"pageElement":"id(\"incontents\")/div[./div[@class=\"pagePos\"]]",
"url":"^http://dictionary\\.goo\\.ne\\.jp/",
"nextLink":"id(\"incontents\")//a[@title=\"next page\"]"
},
{
"pageElement":"id(\"content\")/div[contains(@class,\"post\")]",
"url":"^http://www\\.kagitaku\\.com/diary/",
"nextLink":"//span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"GALLERY\")//table[@class=\"maintableb\"]/tbody/tr[position()<last()-1]",
"url":"^http://moefactor\\.fan-site\\.net/",
"nextLink":"id(\"GALLERY\")//td[@class=\"tableb_compact\"]/following-sibling::td[@class=\"navmenu\"][1]/a"
},
{
"pageElement":"id(\"threadlist\") | //div[@class=\"body_wrapper\"]/div[@class=\"block\" or @class=\"postlist\"]",
"url":"^http://xsellize\\.com/(?!threads/)",
"nextLink":"//span[@class=\"prev_next\"]/a[@rel=\"next\"]"
},
{
"pageElement":"id(\"headmenu\")/following-sibling::*[descendant::*[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\" or text()=\"\u524d\u306e\u30da\u30fc\u30b8\"]][1]/following-sibling::*[following-sibling::*/descendant::*[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\" or text()=\"\u524d\u306e\u30da\u30fc\u30b8\"]]",
"url":"^http://jibun\\.atmarkit\\.co\\.jp/",
"nextLink":"//a[descendant-or-self::*[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]]"
},
{
"pageElement":"//table[@class=\"plist\"]",
"url":"^http://(?:www\\.)?tuhan\\.ne\\.jp/",
"nextLink":"//a[text()=\">>\"]"
},
{
"pageElement":"//div[@class=\"mainbox\"]/div/table[@class=\"tl2\"]",
"url":"^http://www\\.kyoto-u\\.com/lounge/",
"nextLink":"//a[contains(text(), '\u3088\u308a\u53e4\u304430\u4ef6')]"
},
{
"pageElement":"id(\"primary\")/table/tbody/tr",
"url":"^http://[^.]+\\.getuploader\\.com/.",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"//li[@class=\"thumb\"]",
"url":"^http://www\\.animemahou\\.com/post",
"nextLink":"id(\"paginator\")/a[@class=\"arrow\"][last()]"
},
{
"pageElement":"//div[@class=\"listboxin\" and not(.//div[@class=\"google-title\"])]",
"url":"^http://knowledge\\.livedoor\\.com/",
"nextLink":"//div[@class=\"listboxfoot\"]//a[contains(., \"\u6b21\u306e\")]"
},
{
"pageElement":"//table[contains(concat(\" \",@class,\" \"),\" blog \")]//tr",
"url":"^http://(?:www\\.)?2lifeblog\\.com/",
"nextLink":"//a[contains(concat(\" \",@class,\" \"),\" pagenav \") and starts-with(text(),\"Next\")]"
},
{
"pageElement":"//div[@class=\"pagination\"]/preceding-sibling::div",
"url":"^http://(?:www\\.)?daitrombe\\.net/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"allfeatures\")/div[.//img]",
"url":"^http://(?:www\\.)?weardrobe\\.com/",
"nextLink":"//a[contains(concat(\" \",@class,\" \"),\" pagelink \")][last()]"
},
{
"pageElement":"//*[((self::h1 or self::h2) and @class=\"blueheadline-artikelnavi\") or (self::span and @class=\"general2\")]/../*|//div[contains(concat(\" \", @class, \" \"), \" mi-beitragsliste \") or contains(@class, \"mi-beitragsliste-download\")]|id(\"me-neueste_produkte\")/div[@class=\"produkt\" or @class=\"me-dummy\"]|id(\"serplist\")",
"url":"^http://(?:suche|www)\\.chip\\.de/",
"nextLink":"//a[@class=\"forward\" or @class=\"page_right\" or @class=\"page_next\"]|//img[@src=\"http://www.chip.de/c1_i/arrow_blue.gif\"]/parent::a"
},
{
"pageElement":"//div[@class=\"blog-posts hfeed\"]",
"url":"^http://www\\.nowimyourblog\\.com/",
"nextLink":"//a[text()=\"Older Posts\"]"
},
{
"pageElement":"//comment()[string()=\"results\"]/following-sibling::*[following::comment()[string()=\"end results\"]]",
"url":"^http://search\\.cpan\\.org/search",
"nextLink":"//div[@class=\"pages\"]//td//a[last()]"
},
{
"pageElement":"//div[contains(@class,\"Column1\")]",
"url":"^http://(?:www\\.)?buzzfeed\\.com/",
"nextLink":"//ul[@class=\"paging\"]//a[contains(text(),\"Older\")]"
},
{
"pageElement":"//table[@class=\"blog\"]",
"url":"^http://www\\.clustermonkey\\.net/",
"nextLink":"//a[@class=\"pagenav\"][@title=\"Next\"]"
},
{
"insertBefore":"id(\"pg\")",
"pageElement":"id(\"cols\")",
"url":"^http://de\\.search\\.yahoo\\.com/",
"nextLink":"id(\"pg-next\")"
},
{
"pageElement":"id(\"main\")/div[1]/div",
"url":"^http://backtweets\\.com/search\\?",
"nextLink":"id(\"main\")/div[1]/ol/li[2]/a"
},
{
"pageElement":"id(\"container\")/div[@class=\"main_loop\"]/div[@class=\"main\"]/table",
"url":"^http://aucfan\\.com/search[12]/s.",
"nextLink":"id(\"container\")/div[@class=\"pager\"]/span[@class=\"turn\"]/a[starts-with(text(),\"\u6b21\")]"
},
{
"pageElement":"id(\"dle-content\")/div[@class=\"news-head\"]",
"url":"^http://(?:www\\.)?softnull\\.com/",
"nextLink":"id(\"dle-content\")/div[@class=\"pagenavigation\"]/span[number()=normalize-space()]/following-sibling::a[1]"
},
{
"pageElement":"id(\"news-contents\") | id(\"right-box\")/table",
"url":"^http://(?:www\\.)?carp\\.co\\.jp/",
"nextLink":"//a[contains(text(), \"\uff1c\uff1c\u524d\u3078\")] | //a[contains(text(), \"<<BACK\")]"
},
{
"pageElement":"//div[@class=\"content\"]/div[@class=\"title\"]/following-sibling::*[following::a[text()=\"\u524d\u30da\u30fc\u30b8\" or text()=\"\u6b21\u30da\u30fc\u30b8\"]]",
"url":"^http://www\\.security-next\\.com/",
"nextLink":"//div[@class=\"content\"]//a[text()=\"\u6b21\u30da\u30fc\u30b8\"]"
},
{
"insertBefore":"//hr/following-sibling::table[@align=\"right\"]",
"pageElement":"//hr/following-sibling::table[@align=\"right\"]/preceding-sibling::node()[not(self::center or self::p or self::hr and @width)]",
"url":"^http://[^.]+\\.momi3\\.net/[^/]+/",
"nextLink":"//form[substring(@action, string-length(@action) - string-length(\".htm\") + 1) = \".htm\"][last()]"
},
{
"pageElement":"id(\"content\")/div[@class=\"post\"]",
"url":"^http://www\\.deletedimages\\.com/",
"nextLink":"id(\"content\")/div[@class=\"navigation\"]/div[@class=\"alignright\"]/a"
},
{
"pageElement":"id(\"content\")",
"url":"^http://www3?\\.atword\\.jp/gnome/",
"nextLink":"id(\"content\")//a[contains(text(), \"Previous Entries\")]"
},
{
"insertBefore":"//div[@class=\"footer\"]",
"pageElement":"//div[@class=\"t4\"]/following-sibling::*[self::div[@class=\"path\"] or self::ul]",
"url":"^http://search\\.cpan\\.org/recent",
"nextLink":"//td[1]/a[starts-with(@href, \"/recent?d=\")]"
},
{
"pageElement":"//div[@class=\"day\" and child::div[@class=\"body\"]]",
"url":"^http://www\\.rubyist\\.net/~matz/",
"nextLink":"//div[@class=\"adminmenu\"]//a[contains(text(),\"\u524d\")]"
},
{
"insertBefore":"id(\"posts\")/node()[last()]",
"pageElement":"id(\"posts\")/div[contains(concat(\" \", @class, \" \"), \" hentry \")]",
"url":"^http://[^.]+\\.venturebeat\\.com/",
"nextLink":"id(\"story_next_prev\")/a[@rel=\"next\"]"
},
{
"pageElement":"id(\"sayfalar\")/ancestor::tr[1]/following-sibling::tr[position()<last()]",
"url":"^http://www\\.mp3raid\\.com/music/",
"nextLink":"id(\"sayfalar\")/b/font/following-sibling::a[1]"
},
{
"pageElement":"//ul[@class=\"products-grid\"]|id(\"products-list\")",
"url":"^http://www\\.harborfreight\\.com/",
"nextLink":"//li[@class=\"current\"]/following-sibling::li[1]/a"
},
{
"insertBefore":"//*[@class=\"list-more\"]",
"pageElement":"//ol[@class=\"organic\"]",
"url":"^http://clusty\\.(?:com|jp)/search",
"nextLink":"//a[@class=\"listnext\"][1]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" brush_list \")]/ul",
"url":"^http://www\\.brushking\\.eu/(?!$)",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pagination \")]/a[starts-with(text(), \"next\")]"
},
{
"pageElement":"id(\"main-article-content\")/*[not(@class=\"ui-page-list clear\")]",
"url":"^http://[^.]+\\.ign\\.com/articles",
"nextLink":"//a[starts-with(text(),\"Next\")]"
},
{
"pageElement":"//table[@class=\"list\"]",
"url":"^http://twitter\\.1x1\\.jp/search/",
"nextLink":"//a[text()=\">>\"]"
},
{
"pageElement":"id(\"Blog1\")/node()[contains(@class,\"blog-posts\") or position()=last()]",
"url":"^http://labslog\\.scaltinof\\.net/",
"nextLink":"id(\"blog-pager-older-link\")[not(id(\"comments\"))]/a|id(\"blog-pager-newer-link\")/a[@title=\"\u6b21\u306e\u6295\u7a3f\"]"
},
{
"pageElement":"//div[@class=\"q\"]",
"url":"^http://bash\\.org\\.ru/(?!comics)",
"nextLink":"//a[text()=\">>\" or text()=\"\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f\"]"
},
{
"pageElement":"//p[@class=\"story2\"]",
"url":"^http://www\\.telegraph\\.co\\.uk/",
"nextLink":"//div[@class=\"psnext\"]/a"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" left \")]/div[@class=\"box\" and ./div[@class=\"video_box\"]]/div[not(@class=\"btitle\")]",
"url":"^http://(?:www\\.)?alotporn\\.com/",
"nextLink":"//span[@class=\"pagination_active\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"body\")/center[./a/img]",
"url":"^http://www\\.share-amateur\\.com/",
"nextLink":"id(\"body\")/div/a[1]"
},
{
"pageElement":"//ol[@class=\"goodsList\"]",
"url":"^http://books\\.rakuten\\.co\\.jp/",
"nextLink":"//div[@class=\"pageNav\"]/ul/li[last()]/a"
},
{
"insertBefore":"(//div[@class=\"navigator\"])[last()]",
"pageElement":"//div[@class=\"navigator\"]/ancestor::center/*[not(@class=\"navigator\")]",
"url":"^http://knuttz\\.net/hosted_pages/",
"nextLink":"((//div[@class=\"navigator\"])[last()]//a)[last()]"
},
{
"pageElement":"id(\"mu\")/*[((self::table and ./tbody/tr/td[./div//a and .//a/img]) or self::hr) and ./preceding-sibling::table[@class=\"text\" or @id=\"overmenu\"] and ./following-sibling::table[@class=\"text\" or @id=\"undermenu\"]]",
"url":"^http://www\\.dmm\\.co(?:m|\\.jp)/",
"nextLink":"id(\"mu\")/table[@class=\"text\" or @id=\"overmenu\"]//a[contains(text(), \"\u6b21\u3078\")]"
},
{
"pageElement":"//div[@class=\"article_content\"]",
"url":"^http://www\\.thetechlounge\\.com/",
"nextLink":"//a[text()=\"Next \"]"
},
{
"insertBefore":"//div[contains(@class,\"dbTabAreaBtm\") or contains(@class,\"myTabAreaBtm\") or contains(@class,\"myTab40AreaBtm\")]",
"pageElement":"//div[contains(@class,\"dbCntBoxInnerList\") or contains(@class,\"dbCntBoxInnerListNoPb\") or contains(@class,\"myCntBoxInnerList\")]",
"url":"^http://(?:[^.]+\\.)*?ganref\\.jp/",
"nextLink":"//a[@class=\"tabNext\"]"
},
{
"pageElement":"//div[@class=\"cep0\"]/*",
"url":"^http://(?:www\\.)?cepolina\\.com/",
"nextLink":"//div[@class=\"footer\"]/a[contains(., \">\")]"
},
{
"pageElement":"//div[starts-with(@id, \"illust_c\")]|//div[starts-with(@id, \"illust_c\")]/following-sibling::div[@class=\"clear\"]",
"url":"^http://www\\.pixiv\\.net/response",
"nextLink":"id(\"pixiv\")//a[starts-with(text(), \"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"dle-content\")/div[@class=\"news\"]",
"url":"^http://(?:www\\.)?freshwap\\.net/",
"nextLink":"id(\"dle-content\")/div[@class=\"ctitle\"]/span[number()=normalize-space()]/following-sibling::a[1]"
},
{
"pageElement":"id(\"presentation\")",
"url":"^http://www\\.swtspts\\.com/taste/",
"nextLink":"id(\"navigation\")/div/a[last()]"
},
{
"insertBefore":"id(\"hatena-search-pager\")",
"pageElement":"//div[@class=\"hatena-search-result-item\" or @class=\"hatena-search-result-item \" or @class=\"rakuten-item\" or @class=\"video-item-imagelist\"]",
"url":"^http://search\\.hatena\\.ne\\.jp/",
"nextLink":"id(\"hatena-search-pager\")//a[starts-with(text(), \"\u6b21\")]"
},
{
"pageElement":"id(\"content3\")/table",
"url":"^http://www\\.pixiv\\.net/ranking.",
"nextLink":"//div[1]/strong/following-sibling::a[1]"
},
{
"pageElement":"id(\"content\")/div",
"url":"^http://blog\\.bugyo\\.tk/lyrical/",
"nextLink":"//div[@class=\"navigation\"]/div[@class=\"alignleft\"]/a"
},
{
"pageElement":"id(\"resultBaidu\")/div[@class=\"web\"]",
"url":"^http://(?:www\\.)?baidu\\.jp/s\\?",
"nextLink":"id(\"pg\")/a[@class=\"nx\"]"
},
{
"pageElement":"id(\"body\")/div",
"url":"^http://book\\.cakephp\\.org/view/",
"nextLink":"//span[contains(concat(\" \",@class,\" \"),\" next \")]/a[last()]"
},
{
"pageElement":"id(\"categorylisting\")/ul[@class=\"gamelisting\"]",
"url":"^http://armorgames\\.com/category/",
"nextLink":"id(\"categorylisting\")/div[@class=\"pagination\"]/span[@class=\"numberselected\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"contArt\")/*[following-sibling::div[@class=\"pager\"]]",
"url":"^http://news\\.dengeki\\.com/elem/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"//div[@id=\"siteTable\"]/*",
"url":"^http://(?:[^.]+\\.)?reddit\\.com/",
"nextLink":"//p[@class=\"nextprev\"]/a[last()]"
},
{
"pageElement":"id(\"colLeftInner\")/div[contains(concat(\" \", @class, \" \"), \" blogPost \")]",
"url":"^http://lightroomkillertips\\.com/",
"nextLink":"//div[@class=\"navigation\"]/div[@class=\"alignleft\"]/a"
},
{
"pageElement":"id(\"main\")/div[@class=\"navigation\"]/preceding-sibling::*",
"url":"^http://sakaimaki\\.jp/blog(?:/|$)",
"nextLink":"id(\"main\")/div[@class=\"navigation\"]/div[@class=\"older\"]/span/a"
},
{
"pageElement":"//div[@class=\"container\"]/div[@class=\"wrapper\"]/div[@class=\"main_cont\"]/div[@class=\"entry_box\"]",
"url":"^http://fc23\\.blog63\\.fc2\\.com/",
"nextLink":"//a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"id(\"article-body\")",
"url":"^http://sourceforge\\.jp/magazine/",
"nextLink":"//a[@class=\"next-page\"]"
},
{
"pageElement":"id(\"content\")/*",
"url":"^http://www\\.downloadsquad\\.com/",
"nextLink":"//a[@class=\"next-page\"]"
},
{
"pageElement":"id(\"hslice\")//ul[@class=\"default-content\"]",
"url":"^http://suche\\.sueddeutsche\\.de/",
"nextLink":"id(\"hslice\")//li[@class=\"navi-pages\"]/a[contains(., \"n\u00e4chst\")]"
},
{
"pageElement":"id(\"video_title\")/div/*",
"url":"^http://(?:www\\.)?xhamster\\.com/",
"nextLink":"//span[@class=\"navNext\"]/a"
},
{
"pageElement":"id(\"rightCol\")/div[@class=\"block\"]",
"url":"^http://www\\.photoshoplady\\.com/",
"nextLink":"id(\"rightCol\")/div[@class=\"wp-pagenavi\"]/span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"diary\")/*",
"url":"http://www\\.alfasystem\\.net/a_m/",
"nextLink":"id(\"page\")/ul/li/a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"id(\"content\")/ol",
"url":"^http://www\\.nature\\.com/search/",
"nextLink":"id(\"constrain\")//ol[@class=\"pagination\"]/li[last()]/a"
},
{
"pageElement":"id(\"mnc\")/div[contains(@class, \"yfas-wr mg10\")]",
"url":"^http://fashion\\.yahoo\\.co\\.jp/",
"nextLink":"//a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":".//div[@class='entry']",
"url":"^http://fmusic\\.sakura\\.ne\\.jp/",
"nextLink":".//div[@class='ArchivePage-navi']/a[contains(text(),'Next')] | .//div[@class='main-next']/a[contains(text(),'NEXT')]"
},
{
"pageElement":"id(\"slide\")",
"url":"^http://www\\.ew\\.com/ew/gallery/",
"nextLink":"id(\"galnavlinks\")/li[@class=\"next\"]//a"
},
{
"pageElement":"id(\"content\")//div[@class=\"entry\"]",
"url":"^http://akane-m\\.net/lo/rakugaki/",
"nextLink":"id(\"content\")//p[@class=\"content-nav\"]/a[last()]"
},
{
"pageElement":"id(\"content\")/ul",
"url":"^http://userscripts\\.org/jetpacks",
"nextLink":"id(\"content\")/div[@class=\"pagination\"]/a[contains(@rel,\"next\")]"
},
{
"pageElement":"id(\"listings_jovanna\")/div[@class=\"listing-summary\"]",
"url":"^http://www\\.traderjoesfan\\.com/",
"nextLink":"//a[@title=\"Next\"][@class=\"pagenav\"]"
},
{
"pageElement":"id(\"article_main\") | //div[@class=\"article_main\"] | //tr[td[span[a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\") or contains(text(), \"\u524d\u306e\u30da\u30fc\u30b8\")]]]]/following-sibling::*[following::*[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\") or contains(text(), \"\u524d\u306e\u30da\u30fc\u30b8\")]]",
"url":"^https?://www\\.thinkit\\.co\\.jp/",
"nextLink":"descendant::a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")][last()]"
},
{
"pageElement":"//table[@class=\"search_result\"]/../*[not(self::hr and position() = last())]",
"url":"^http://(?:[^.]+\\.)?dlsite\\.com/",
"nextLink":"id(\"newsearch\")//a[@title=\"next page\"]"
},
{
"pageElement":"//table/tbody/tr/td[2]/table",
"url":"^http://www\\.boxshots\\.org/style",
"nextLink":"//a[text()=\"Prev \u00bb\"]"
},
{
"pageElement":"//table[contains(concat(\" \", @class, \" \"), \" revisions \")]",
"url":"^http://dic\\.nicovideo\\.jp/revs/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pager \")]/a[starts-with(text(), \"\u6b21\")]"
},
{
"pageElement":"id(\"Content\")/div[@class=\"media\"]/div[not(@class=\"paginate\")]",
"url":"^http://(?:www\\.)?humorpix\\.com/",
"nextLink":"id(\"Content\")//a[@class=\"next\"]"
},
{
"insertBefore":"//table[@cellpadding=\"30\"]/following-sibling::node()",
"pageElement":"//table[@cellpadding=\"30\"]",
"url":"^http://(?:www\\.)?419eater\\.com/",
"nextLink":"//a[child::img[contains(@src, \"nxt_page.gif\")]]"
},
{
"pageElement":"//div[@class=\"huP\"]",
"url":"^http://einestages\\.spiegel\\.de/",
"nextLink":"//a[@class=\"huGoRight\"]"
},
{
"pageElement":"id(\"contents_main\")/*",
"url":"^http://e-days\\.cc/music/feature/",
"nextLink":"//a[img[contains(@src,\"ico_next_on.gif\")]]"
},
{
"pageElement":"id(\"mainBox\")/div[contains(@class,\"dateBox\")]",
"url":"http://blog.shueisha.net/otsuichi/",
"nextLink":"id(\"mainBox\")/p[@class=\"nextNews\"]/a"
},
{
"pageElement":"/descendant::form[@name=\"cart\"][1]/ancestor::table[@width][1]/preceding-sibling::node()/following-sibling::table",
"url":"^http://www\\.e-hon\\.ne\\.jp/bec/",
"nextLink":"//a[./b[contains(text(), \">>\")]]"
},
{
"pageElement":"//div[@id=\"pageLinks\" and ./preceding-sibling::*[@id=\"articleInline\"]]/preceding-sibling::*[not(@id=\"articleInline\" or @name=\"secondParagraph\")]|//div[@class=\"articleBody\"]/*",
"url":"^http://(?:\\w+\\.)?nytimes\\.com/",
"nextLink":"id(\"pageLinks\")/a[@class=\"next\"]|//a[@class=\"nextPage\"]"
},
{
"pageElement":"id(\"art-body\")/*",
"url":"^http://www\\.foreignpolicy\\.com/",
"nextLink":"id(\"art-pag\")/span[@class=\"selected\"]/following-sibling::span[1]/a"
},
{
"pageElement":"id(\"ctl00_Main_GalleryList\")/tbody/tr",
"url":"^http://(?:www\\.)?ieaddons\\.com/",
"nextLink":"id(\"ctl00_Main_NavigationControl_NavigationContainer\")/div[@class=\"navpagination\"]/a[@class=\"PageNext\"]"
},
{
"pageElement":"id(\"view-photo-main\")/node()",
"url":"^http://twitpic\\.com/(?!photos/).",
"nextLink":"id(\"view-photo-more\")/a[1]"
},
{
"pageElement":"//ul[contains(concat(\" \", @class, \" \"), \" results \")]",
"url":"^http://www\\.apple\\.com/webapps/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id(\"pageElement\")",
"url":"^https?://[^.]+\\.aipolive\\.com/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//table[@id=\"result-table\"]/tbody/tr|id(\"change_zip\")/following-sibling::div[./* and not(@id=\"paging\")]|id(\"vtr_ans_bot\")/*",
"url":"^http://(?:news|www)\\.ask\\.com/",
"nextLink":"id(\"paging\")//a[contains(., \"\u00bb\")]"
},
{
"pageElement":"//ol[contains(@class, \"bookmarks\")]",
"url":"^http://vi\\.sualize\\.us/[\\w-]+",
"nextLink":"//a[contains(concat(\" \", @class, \" \"), \" next \")]"
},
{
"pageElement":"//center/*[self::a or self::img]",
"url":"^http://animemandara2\\.x0\\.com/",
"nextLink":"//center/p/a[contains(.,\">>\")]"
},
{
"pageElement":"id(\"main\")",
"url":"^http://jp\\.makezine\\.com/blog/",
"nextLink":"id(\"main\")/p[@class=\"box\"]/span/a[@rel=\"next\"]"
},
{
"pageElement":"id(\"article_body\")",
"url":"^http://(?:www\\.)?itworld\\.com/",
"nextLink":"//a[text()=\"next\"]"
},
{
"insertBefore":"id(\"footer\")",
"pageElement":"id(\"footer\")/preceding-sibling::p/preceding-sibling::p",
"url":"^http://[^.]+\\.craigslist\\.org/",
"nextLink":"id(\"footer\")/preceding-sibling::p/font/a"
},
{
"pageElement":"//h1 | //div[contains(concat(\" \",normalize-space(@class),\" \"),\" entry \")]",
"url":"^http://rapeme\\.org/mt/archives/",
"nextLink":"//li[@class=\"older\"]/a"
},
{
"pageElement":"//div[starts-with(@class,\"bg\")]",
"url":"^http://kanpoo\\.jp/search\\.cgi/",
"nextLink":"//div/a[contains(text(),\">>\")][@href]"
},
{
"pageElement":"id(\"intellitxt\")/*",
"url":"^http://www\\.pcmag\\.com/article",
"nextLink":"id(\"content\")//div[@class=\"btn-holder\"]/strong[contains(., \"Next\")]/a"
},
{
"insertBefore":"//h3[@class=\"main-navi\"]",
"pageElement":"//div[@class=\"entry\"][position()!=1]",
"url":"^http://labs\\.ceek\\.jp/hbnews/.",
"nextLink":"//h3[@class=\"main-navi\"]/a[last()]"
},
{
"insertBefore":"id(\"bodyMainAreaMain\")/node()[last()]",
"pageElement":"id(\"bodyMainAreaMain\")/div[@class=\"viewDiaryBox\"]|id(\"diaryComment\")",
"url":"^http://mixi\\.jp/view_diary\\.pl",
"nextLink":"id(\"bodyMainAreaMain\")/div[contains(concat(\" \", @class, \" \"), \" diaryPaging01 \")]/div[@class=\"diaryPagingLeft\"]/a"
},
{
"pageElement":"id(\"headmenu\")/following-sibling::*[not(position()=1 and local-name()=\"a\") and not(local-name()=\"h1\" and position()<10) and not(local-name()=\"font\" and @size=\"2\" and position()<10) and not(local-name()=\"blockquote\" and position()<10) and not(local-name()=\"br\" and position()<10) and not(local-name()=\"hr\" and position()<10) and following-sibling::table//img[(contains(@src, \"/next\") or contains(@src, \"/prev\")) and contains(@src, \".gif\")]] | id(\"centercol\")/div[@class=\"articleBox\"]/*[following-sibling::table//img[(contains(@src, \"next\") or contains(@src, \"prev\")) and contains(@src, \".gif\")]]",
"url":"^http://www\\.atmarkit\\.co\\.jp/",
"nextLink":"id(\"centercol\")//img[contains(@src, \"next\") and contains(@src, \".gif\")]/parent::a"
},
{
"pageElement":"id(\"content\")//table[@class=\"color\"]/ancestor::tr[1]|id(\"content\")/*[(self::div and @class=\"item\") or self::br and not(./preceding-sibling::table)]",
"url":"^http://freegamejp\\.com/modules/",
"nextLink":"id(\"content\")//a[./u[text()=\"\u00bb\"]]"
},
{
"insertBefore":"id(\"view_photo\")/div[@class=\"pagetext_bottom inlineList\"]",
"pageElement":"id(\"view_photo\")/div[@class=\"inner_line_list\"]",
"url":"^http://mixi\\.jp/view_album\\.pl",
"nextLink":"//a[starts-with(text(), \"\u6b21\u3092\")]"
},
{
"pageElement":"id(\"quickModForm\")",
"url":"^http://sc4devotion\\.com/forums/",
"nextLink":"id(\"quickModForm\")/table/tbody/tr/td[@class=\"middletext\"]/b[not(contains(text(),\"...\"))]/following-sibling::a[1]"
},
{
"pageElement":"//dl[contains(@class,\"article\")]/parent::td/*",
"url":"^http://www\\.graniph\\.com/news/",
"nextLink":"//img[@name=\"arrownext\"]/parent::a"
},
{
"insertBefore":"id(\"page_foot\")",
"pageElement":"id(\"content\")",
"url":"^http://ja\\.doukaku\\.org/unread",
"nextLink":"id(\"content\")/a[starts-with(text(),\"next\")]"
},
{
"pageElement":"id(\"content\")/div/*[self::h2 or self::div[@class=\"blogbody\"]]",
"url":"^http://[^/]+\\.shiga-saku\\.net/",
"nextLink":"//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\" or text()=\"\u524d\u306e\u8a18\u4e8b\"]"
},
{
"pageElement":"id(\"school-detail-body\") | //p[@class=\"next-vol\"] | id(\"contact-section\")",
"url":"^http://www\\.phppro\\.jp/school/",
"nextLink":"//li[@class=\"page-now\"]/following-sibling::li[1]/a"
},
{
"pageElement":"//table[@class='nzbtable']",
"url":"^http://nzbmatrix\\.com/nzb\\.php",
"nextLink":"//a[(b/text()='Next \u00bb')]"
},
{
"pageElement":"id(\"post-navigator\")/preceding-sibling::*",
"url":"^http://(?:www\\.)?thoranime.org/",
"nextLink":"id(\"post-navigator\")/span[@class=\"alignleft\"]/a"
},
{
"insertBefore":"//div[1]/img[2]",
"pageElement":"//div[1]/node()[self::text() or self::img[not(preceding-sibling::img)] or self::br or self::font[not(preceding-sibling::font)]][preceding-sibling::div[@align=\"center\"]]",
"url":"^http://no-ichigo\\.jp/read/page/",
"nextLink":"//a[@alt=\"#\"]"
},
{
"pageElement":"//ul[@class=\"databases autopagerize_page_element\"]",
"url":"^http://wedata\\.net/databases\\?",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//p",
"url":"^http://(?:www\\.)?gahako\\.com/.",
"nextLink":"//a[text()=\"\u2192\"]"
},
{
"pageElement":"id(\"path\")/following-sibling::table[.//span[@class=\"pageract\"]]/following-sibling::*[./following-sibling::table[.//span[@class=\"pageract\"]]]|//span[@class=\"pageract\"]/ancestor::table[@class=\"boxtbl\" and not(./preceding-sibling::div[@id=\"path\"])]/following-sibling::*",
"url":"^http://www\\.pcmicrostore\\.com/",
"nextLink":"//span[@class=\"pageract\"]/following-sibling::b[1]/a"
},
{
"pageElement":"//td[contains(text(), 'Page') and contains(text(), 'of')]/ancestor::table[1]/following-sibling::*[following::table[descendant::td[contains(text(), 'Page') and contains(text(), 'of')]]]",
"url":"^http://(?:www\\.)?lingoes\\.net/",
"nextLink":"//td[contains(text(), 'Page') and contains(text(), 'of')]//a[preceding-sibling::*[descendant::b]][1]"
},
{
"pageElement":"//div[@class=\"story_copy\"]",
"url":"^http://www\\.linux-mag\\.com/id/",
"nextLink":"//a[text()=\"Next \u00bb\"]"
},
{
"pageElement":"//div[@class=\"pagenavcounter\"]/following-sibling::table",
"url":"^http://www\\.hdwallpapers\\.net/",
"nextLink":"//a[@class=\"pagenav_next\"]"
},
{
"insertBefore":"//table[tbody/tr/td/span[@class=\"navartc\"]]",
"pageElement":"id(\"articletext\")",
"url":"^http://(?:[^.]+\\.)?pravda\\.ru/",
"nextLink":"//a[preceding-sibling::span[@class=\"navartc\"]]"
},
{
"pageElement":"id(\"main\")/table",
"url":"^http://up2?\\.pandoravote\\.net/",
"nextLink":"id(\"main\")/p/strong/following-sibling::a[1]"
},
{
"pageElement":"id(\"browse2-stream shop-browse browse-collections\")/descendant-or-self::div[contains(concat(\" \", @class, \" \"), \" stream \")][1]/div",
"url":"^http://[^.]+\\.deviantart\\.com/",
"nextLink":"id(\"output\")//div[contains(concat(\" \", @class, \" \"), \" nav \")]//a[text()=\"Next Page\"]"
},
{
"pageElement":"id(\"shutterstock_content_cell\")/table/tbody/tr[./td[@class=\"inactive-cell\"]]",
"url":"^http://www\\.shutterstock\\.com/",
"nextLink":"//span[@class=\"link\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"blog\")/div[contains(@class, \"blogbody\")]",
"url":"^http://blog\\.willcomnews\\.com/",
"nextLink":"id(\"blog\")/div[last()]/a[last()]"
},
{
"insertBefore":"id(\"pagelink_bottom\")",
"pageElement":"id(\"main\")/div[@class=\"genre\"]",
"url":"^http://diskunion\\.net/clubt/ct/",
"nextLink":"id(\"pagelink_bottom\")/a[contains(text(),\"\u6b21\u306e10\u4ef6\")]"
},
{
"pageElement":"id(\"dle-content\")/div[@class=\"shortstory\"]",
"url":"^http://www\\.area51warez\\.info/",
"nextLink":"id(\"dle-content\")/div[@class=\"ctitlev\"]/p/span[number()=normalize-space()]/following-sibling::a[1]"
},
{
"pageElement":"id(\"content\")/*[not(@class=\"navigation\")]",
"url":"^http://openlab\\.dino\\.co\\.jp/",
"nextLink":"id(\"content\")/div[@class=\"navigation\"]//a[text()=\"\u2190 Previous Entries\"]"
},
{
"insertBefore":"id(\"contentarea\")/div/div/br[last()]",
"pageElement":"id(\"contentarea\")/div/div/table",
"url":"^http://www\\.moviesforfree\\.tv/",
"nextLink":"id(\"contentarea\")/div/div/b/following-sibling::a[1]"
},
{
"insertBefore":"id(\"container\")/div[@class=\"basic\"]/div[@class=\"footer block-center\"]",
"pageElement":"id(\"search-item-body\")",
"url":"^https://www\\.moshimo\\.com/shop",
"nextLink":"id(\"search-item-body\")/div[@class=\"bottom-pager inline-center\"]/div[@class=\"pager\"]/a[number(last())-1]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" idea_twit \")]",
"url":"^http://ryo\\.hayamin\\.com/idea/",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"pageElement":"//div[@class=\"XbcMktGameResultList\"]/*",
"url":"^http://marketplace\\.xbox\\.com/",
"nextLink":"//div[@class=\"XbcRelative\"]/strong[number()=normalize-space()]/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"videosTable\"]/*",
"url":"^http://(?:www\\.)?redtube\\.com/",
"nextLink":"//a[@title=\"Next page\"]"
},
{
"pageElement":"//div[@class=\"date-outer\"]",
"url":"^http://www\\.miraikonishi\\.com/",
"nextLink":"id(\"Blog1_blog-pager-older-link\")"
},
{
"pageElement":"//ul[@class=\"site-list\"]",
"url":"^http://www\\.minimalsites\\.com/",
"nextLink":"//li[@class=\"pager-next\"]/a"
},
{
"pageElement":"id(\"searchResults\")/*|id(\"resultGallery\")",
"url":"^http://suche\\.gmx\\.net/search/",
"nextLink":"//li[@class=\"active\"]/following-sibling::li[1]/a"
},
{
"pageElement":"//a[@class=\"miniature\"]/ancestor::table[1]",
"url":"^http://(?:www\\.)?xvideos\\.com/",
"nextLink":"id(\"pag\")/a[.=\"Next\"]"
},
{
"pageElement":"//table[contains(@id,'post')]|//tr[contains(td/@id,'td_threadstatusicon_')]|id('message_list')|id('pagenumbers')/following-sibling::*[following-sibling::div[@id='copyright']]",
"url":"^http://forums\\.animesuki\\.com/",
"nextLink":"//a[@rel='next']|id('pagenumbers')/b[2]/following-sibling::a"
},
{
"pageElement":"id(\"container\")/table",
"url":"^http://q\\.hatena\\.ne\\.jp/list",
"nextLink":"id(\"container\")/div[@class=\"pager\"]/strong/following-sibling::*[1][self::a]"
},
{
"pageElement":"id(\"bodyMainArea\")//table/tbody/tr",
"url":"^http://mixi\\.jp/list_appli\\.pl",
"nextLink":"id(\"bodyMainArea\")//div[contains(@class,\"pageNavigation\")]/div[contains(@class,\"pageList\")]/ul/li/a[starts-with(text(),\"\u6b21\")]"
},
{
"pageElement":"//dl",
"url":"^http://dic\\.nicovideo\\.jp/b/c/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pager \")]/a[starts-with(text(), \"\u6b21\")]"
},
{
"pageElement":"id(\"posts\")/li",
"url":"^http://www\\.tumblr\\.com/iphone",
"nextLink":"id(\"footer\")/a[last()]"
},
{
"pageElement":"id(\"content-inner\")/div",
"url":"^http://www\\.kijineko\\.co\\.jp/",
"nextLink":"//a[@class=\"page-next\"]"
},
{
"pageElement":"//table[@class=\"repo\"]",
"url":"^http://github\\.com/repositories",
"nextLink":"//a[@hotkey=\"l\"]"
},
{
"pageElement":"id(\"container\")/a[img[@class=\"thumbnail\"]]",
"url":"^http://www\\.tumblr\\.com/photos",
"nextLink":"id(\"footer\")/a[contains(text(), \"next page\")]"
},
{
"pageElement":"id(\"content\")/*",
"url":"^http://(?:www\\.)?kamamoto\\.jp/",
"nextLink":"id(\"content\")/div[last()]/b/following-sibling::a[1]"
},
{
"pageElement":"id(\"contentPageShadow\")",
"url":"^http://www\\.ifixit\\.com/Guide/",
"nextLink":"id(\"contentPageFooter\")//a[contains(text(), \"next\")]"
},
{
"insertBefore":"//table[@class=\"MainTable\"]/tbody/tr/td[@class=\"Main\"]/div[@class=\"Menu\"]",
"pageElement":"//table[@class=\"MainTable\"]/tbody/tr/td[@class=\"Main\"]/div[@class=\"MessageParagraph\"]",
"url":"^http://bbs1\\.oebit\\.jp/amiami/",
"nextLink":"id(\"PageTextLinkBack\")/a"
},
{
"pageElement":"//ol[@class=\"suggestions\"]",
"url":"^http://[^.]+\\.uservoice\\.com/.",
"nextLink":"//a[@rel=\"next\"]"
},
{
"insertBefore":"id(\"content\")/div[last()]/following-sibling::node()",
"pageElement":"id(\"content\")/div",
"url":"^http://www\\.android-app\\.info/",
"nextLink":"//div[@class=\"navlink\"]/a[text()=\"\u53e4\u3044\u6295\u7a3f \u00bb\"]"
},
{
"insertBefore":"id(\"contents\")//div[contains(concat(\" \", @class, \" \"), \" genre_box \")]",
"pageElement":"id(\"contents\")//div[contains(concat(\" \", @class, \" \"), \" inner \")]/div[contains(concat(\" \", @class, \" \"), \" text_l \")]",
"url":"^http://www\\.sbbit\\.jp/article/",
"nextLink":"id(\"contents\")//li[contains(concat(\" \", @class, \" \"), \" next \")]/a"
},
{
"pageElement":"id(\"mini\")|id(\"content\")/div[@class=\"post\"]",
"url":"^http://www\\.mostinspired\\.com/",
"nextLink":"//span[@class=\"current\"]/following-sibling::*[1][self::a]|id(\"content\")/div[@class=\"navigation\"]/div[@class=\"alignleft\"]/a"
},
{
"pageElement":"id(\"itemList\")/*",
"url":"^http://www\\.selectsquare\\.com/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"mainContent\")",
"url":"^http://www\\.jstor\\.org/stable/",
"nextLink":"id(\"journalImageContainer\")//span[@class=\"next\"]/.."
},
{
"pageElement":"//center/table/tbody/tr[3]/td/table",
"url":"^http://news\\.ycombinator\\.com/",
"nextLink":"//a[text()=\"More\"]"
},
{
"pageElement":"id(\"tableTab\")/following-sibling::table",
"url":"^http://table\\.yahoo\\.co\\.jp/t",
"nextLink":"//a[contains(text(),\"\u6b21\")]"
},
{
"pageElement":"//table[3]",
"url":"^http://pentax\\.mydns\\.jp/exif/",
"nextLink":"//a[text()='+']"
},
{
"pageElement":"id(\"SrchObj\")/*",
"url":"^http://search\\.biccamera\\.com/",
"nextLink":"id(\"SrchBaseMain\")//a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\u2192\")]"
},
{
"pageElement":"id(\"main\")//table[@class=\"product_list\"][last()]",
"url":"^http://www\\.junodownload\\.com/",
"nextLink":"//table[@class=\"pagination\"]//a[text()=\"Next Page\"]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" list-tweet \")]",
"url":"^https?://mobile\\.twitter\\.com/",
"nextLink":"id(\"more_link\")"
},
{
"pageElement":".//table[@class=\"resultbox\"] | //table[@class=\"resultbox\"]/following-sibling::br",
"url":"^http://(?:www\\.)?skreemr\\.com/",
"nextLink":".//a[child::img[@alt=\"next\"]]"
},
{
"pageElement":"id(\"searchList searchList_text\")//tr",
"url":"^http://www\\.sports-ws\\.com/fp/",
"nextLink":"//img[@class=\"pageNext\"]/parent::a"
},
{
"pageElement":"//ul[@class=\"wallpapers\"]",
"url":"^http://(?:www\\.)?photos8\\.com/",
"nextLink":"//div[@class=\"pagination\"]/a[last()]"
},
{
"pageElement":"id(\"contents_column\")/div/div/node()[@id=false() or @id!=\"media_navi\"]",
"url":"^http://photozou\\.jp/photo/show/",
"nextLink":"//link[@rel=\"next\"]"
},
{
"pageElement":"id(\"article\")",
"url":"^http://mrs\\.allabout\\.co\\.jp/",
"nextLink":"id(\"pageChange\")//a[starts-with(text(),\"\u6b21\")]"
},
{
"pageElement":"id(\"content\")",
"url":"^http://fake\\.dj/secondlife/txp/",
"nextLink":"id(\"content\")/p[last()]/a[text()=\"\u53e4\u3044\u9806\"]"
},
{
"pageElement":"//table",
"url":"^http://crystal\\.opal\\.ne\\.jp/",
"nextLink":"//a[contains(text(),\"\u6b21\u3078\")]"
},
{
"pageElement":".//div[@class=\"contents-area\"]",
"url":"^http://eco\\.nikkeibp\\.co\\.jp/",
"nextLink":"id(\"article-navi-right-on\")/a"
},
{
"pageElement":"id(\"selectTemplate\")/div[@class=\"formArea clearfix\"]/div[@class=\"templateArea\"]/form/div[@class=\"itemboxL clearfix\"]",
"url":"^http://order\\.mixi-nenga\\.jp/.",
"nextLink":"id(\"selectTemplate\")/div[@class=\"formArea clearfix\"]/div[@class=\"templateArea\"]/form/div[@class=\"pagerNaviClass\"]/p[@class=\"pagerBtn\"]/a[last()]"
},
{
"pageElement":".//div[@class=\"gallery-box\"]",
"url":"^http://(?:www\\.)?pixdaus\\.com/",
"nextLink":".//ul[@class=\"menu-page\"]//a[contains(text(),\"next\")]"
},
{
"insertBefore":"id(\"container\")/*[last()]",
"pageElement":"id(\"content-body\")",
"url":"^http://guremike\\.chicappa\\.jp/",
"nextLink":"id(\"navigation-pagenation\")/a[@class=\"link_next\"]"
},
{
"pageElement":"//ul[@class=\"countlist\"]/li[contains(@class,\"countbox\")]",
"url":"^http://counting\\.hatelabo\\.jp/",
"nextLink":"(//div[contains(concat(\" \",@class,\" \"),\" pager-next \")][last()]/a[last()])[1]"
},
{
"pageElement":"id(\"cdTemplateBody ClSearchResults\")/table[@class=\"OTbl\"]|id(\"oCatalog\")/following-sibling::table[@class=\"OTbl\"]|id(\"m_dlAssistanceResults\")/tbody/tr",
"url":"^http://office\\.microsoft\\.com/",
"nextLink":"id(\"idPageNext\")"
},
{
"pageElement":"id(\"gsAllArticle665\")",
"url":"^http://tag\\.allabout\\.co\\.jp/",
"nextLink":"id(\"mainCulumnAllPager\")/div[@class=\"next\"]/a"
},
{
"insertBefore":"//div[@class=\"pageCtrl\"]/following-sibling::*[2]",
"pageElement":"//div[@class=\"pageCtrl\"]/following-sibling::*[1]",
"url":"^http://album\\.blog\\.yam\\.com/",
"nextLink":"//a[text()=\"\u4e0b\u4e00\u9801\"]"
},
{
"pageElement":"//form[@name=\"delform\"]/br[@clear=\"left\"][last()]/following-sibling::node()[1]/preceding-sibling::node()",
"url":"^http://[a-z0-9-]+\\.4chan\\.org/",
"nextLink":"//table[@class=\"pages\"]//b/following-sibling::*[1][self::a]"
},
{
"pageElement":"//div[@class=\"list\"]",
"url":"^http://(?:[^./]+\\.)*?bis\\.org/",
"nextLink":"//div[@class=\"navigation\"]//span[@class=\"navigate\"]/a[last()]"
},
{
"pageElement":"//div[@class=\"triple-product-col-box\"]/*",
"url":"^http://www\\.spreadshirt\\.net/.",
"nextLink":"//a[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"blogBody\")/div[@class=\"entryBody\"]/div",
"url":"^http://secondlife\\.drops\\.bz/.",
"nextLink":"id(\"blogBody\")/div[@class=\"pagingLink\"]/a[1]"
},
{
"pageElement":"//div[starts-with(@id, \"post-\")]",
"url":"^http://www\\.slconvention\\.org/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" alignleft \")]/a[contains(text(), \"Older\")]"
},
{
"pageElement":"//form[@name=\"articlelist\"]",
"url":"^http://ci\\.nii\\.ac\\.jp/search",
"nextLink":"//a[@rel=\"next\"]"
},
{
"insertBefore":"id(\"infobox\")",
"pageElement":"id(\"photobox\")",
"url":"^http://(?:www\\.)?jpgaday\\.com/",
"nextLink":"id(\"image-navigate\")/ul/li[@class=\"left\"]/a"
},
{
"pageElement":"//div[@class=\"centerSide\"]/*[self::span or (@class=\"clear\" and not(position()=last()))]",
"url":"^http://(?:www\\.)?empflix\\.com/",
"nextLink":"//div[@class=\"pagination\"]/span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"sectionTitle\"]/following-sibling::div[@id or @class=\"clear\"]",
"url":"^http://(?:www\\.)?tnaflix\\.com/",
"nextLink":"//li[@class=\"current\"]/following-sibling::li[1]/a"
},
{
"pageElement":"//table[@cellspacing=\"0\"][@cellpadding=\"2\"]",
"url":"^http://(?:[^.]+\\.)*?xnxx\\.com/",
"nextLink":"//a[@class=\"nP\"]"
},
{
"pageElement":"id(\"itemDetail\")/li",
"url":"^http://matome\\.naver\\.jp/odai/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id(\"Discussions\")/*",
"url":"^http://forum\\.userstyles\\.org/",
"nextLink":"id(\"Content\")//ol[@class=\"PageList\"]/li[last()]/a"
},
{
"pageElement":"id(\"articlebody\")/node()",
"url":"^http://(?:[^.]+\\.)?about\\.com/",
"nextLink":"id(\"pagination\")//a[@rel=\"next\"]"
},
{
"pageElement":"//center[1]/*[self::a or self::img][1]",
"url":"^http://s[^.]\\.artemisweb\\.jp/",
"nextLink":"//center[1]/p//a[contains(.,\">>\")]"
},
{
"pageElement":"id(\"result-list-spot\")/ul",
"url":"^http://local\\.yahoo\\.co\\.jp/",
"nextLink":"//a[@title=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"contents\")/div[@class=\"thumbBox\"]",
"url":"^http://(?:www\\.)?bookma\\.org/",
"nextLink":"id(\"page_next\")/a"
},
{
"pageElement":"//ul[@class=\"listStumble\" or contains(concat(\" \", @class, \" \"), \" gridUrls \")]",
"url":"^http://www\\.stumbleupon\\.com/",
"nextLink":"id(\"paginationNext\")"
},
{
"pageElement":"id(\"main\")/div[@class=\"blogbox\"]",
"url":"^http://blog\\.piapro\\.jp/\\d+/",
"nextLink":"id(\"main\")/div[contains(concat(\" \", @class, \" \"), \" blog_page_navi \")]/ul/li[last()]/a"
},
{
"pageElement":"id(\"gallery\")/ul/li[contains(@class,\"gallery-item\")]",
"url":"^http://www\\.getpersonas\\.com/",
"nextLink":"id(\"pagination\")/ul/li[last()]/a"
},
{
"pageElement":"id(\"sweepers\")/li",
"url":"^http://ffhh\\.sakura\\.ne\\.jp/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id(\"articleTextnews1\")//div[@class=\"child c2 cf\"]/div[@class=\"_LSUCS\" or (@class=\"image\" and following::div[@id=\"newsBack\"])]",
"url":"^http://sankei\\.jp\\.msn\\.com/",
"nextLink":"id(\"newsNext\")[self::a]|//div[@class=\"_LSUCS\"]/p[contains(text(),\"\uff1d\")]/a[contains(text(),\"\u7d9a\u304f\")]"
},
{
"pageElement":"//div[@class=\"story\"]|//table[@class=\"admin-list-table\"]/tbody/tr[position()>1]",
"url":"^http://www\\.macosxhints\\.com/",
"nextLink":"//div[@class=\"pagenav\"]/b/following-sibling::a[1]"
},
{
"pageElement":"id(\"threadslist\")|id(\"lastpost\")/preceding-sibling::*",
"url":"^http://www\\.tech-forums\\.net/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//table[@class=\"outside_table\"]/tbody/tr/td[@class=\"outer_content_cell\"]/table[@class=\"content_table\"]/tbody/tr/td[@class=\"content_cell\"]/table[@class=\"freestuff_result_table\"]",
"url":"^http://www\\.renderosity\\.com/",
"nextLink":"//table[@class=\"outside_table\"]/tbody/tr/td[@class=\"outer_content_cell\"]/table[@class=\"content_table\"]/tbody/tr/td[@class=\"content_cell\"]/div[@class=\"resultPageDisplay\"]/a[contains(text(), \"\u203a\")]"
},
{
"pageElement":"id(\"content\")/li[@class=\"post\"]",
"url":"^http://www\\.dailykitten\\.com/",
"nextLink":".//ul[@class=\"navigation\"]/li[@class=\"previous\"]/a"
},
{
"pageElement":"//article[@class=\"post clearfix\"]",
"url":"^http://[^.]+\\.posterous\\.com/",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"pageElement":"id(\"current-content\")/div[starts-with(@id,\"post-\")]",
"url":"^http://www\\.animecanvas\\.net/",
"nextLink":"id(\"nav-below\")/div[@class=\"nav-previous\"]/a"
},
{
"pageElement":"//table[contains(concat(\" \", @class, \" \"), \" comments \")]",
"url":"^http://comment\\.myspace\\.com/",
"nextLink":"//a[@class=\"pagingLink\"]"
},
{
"insertBefore":"//div[@id=\"content\" or @id=\"container\"]/div[last()]",
"pageElement":"//div[@id=\"content\" or @id=\"container\"]/div[@class!=\"footer\" or @class!=\"navigation\"]",
"url":"http://cornmeal.me/(page/\\d+)?$",
"nextLink":"//div[@id=\"content\" or @id=\"container\"]/div[last()]/a[last()]"
},
{
"insertBefore":"id(\"copy\")",
"pageElement":"id(\"entry\")",
"url":"^http://labs\\.gmo\\.jp/blog/ku/",
"nextLink":"//li[@class=\"previousentry\"]/a"
},
{
"pageElement":"//center/center/div",
"url":"^ttp://(?:[^./]+\\.)+mocosoft\\.",
"nextLink":"//font[@color=\"#ffff33\" and @size=7]/a"
},
{
"pageElement":"//div[@class=\"posts\"]",
"url":"^http://blog\\.iphone-dev\\.org/",
"nextLink":"//a[text()=\"Older Posts\"]"
},
{
"pageElement":"//td[@class=\"full_content\"]/table//table[contains(.//div,\"\u4ef6\u3092\u8868\u793a\")]/following-sibling::node()[self::table[not(contains(.//div,\"\u4ef6\u3092\u8868\u793a\"))] or position()=last()]",
"url":"^http://(?:www\\.)?amiz\\.jp/\\?",
"nextLink":"//div[@class=\"padding_s\"]/a[contains(.,\"\uff1c\uff1c\") and not(following::div[@class=\"padding_s\"]/a=\"\u6b21\u3092\u8868\u793a\") or .=\"\u6b21\u3092\u8868\u793a\"]"
},
{
"insertBefore":"id(\"column-inner-2\")/following-sibling::node()",
"pageElement":"id(\"main\")/div[@class=\"column-inner\"]/div[@class=\"column-inner-2\"]/div[@class=\"article-outer hentry\"]/div[@class=\"article-outer-2\"]/div[@class=\"article-outer-3\"]/div[@class=\"article-header\"]|id(\"main\")/div[@class=\"column-inner\"]/div[@class=\"column-inner-2\"]/div[@class=\"article-outer hentry\"]/div[@class=\"article-outer-2\"]/div[@class=\"article-outer-3\"]/div[@class=\"article-body entry-content\"]|id(\"main\")/div[@class=\"column-inner\"]/div[@class=\"column-inner-2\"]/div[@class=\"article-outer hentry\"]/div[@class=\"article-outer-2\"]/div[@class=\"article-outer-3\"]/div[@class=\"article-footer\"]|id(\"article-options\")",
"url":"^http://netatama\\.net/archives/",
"nextLink":"id(\"main\")/div[@class=\"column-inner\"]/div[@class=\"column-inner-2\"]/div[@class=\"article-outer hentry\"]/div[@class=\"article-outer-2\"]/div[@class=\"article-outer-3\"]/div[@class=\"pager article-pager-type2\"]/div[@class=\"pager-inner\"]/div[@class=\"article-pager-outer\"]/ul[@class=\"article-pager\"]/li[@class=\"prev\"]/a[1]"
},
{
"pageElement":"id(\"page\")/preceding-sibling::*",
"url":"^http://(?:www\\.)?p-tina\\.net/",
"nextLink":"id(\"next\")/parent::a"
},
{
"insertBefore":"((//a[@class=\"paging\"])[1]/ancestor::table)[2]",
"pageElement":"((//a[@class=\"paging\"])[1]/ancestor::table)[2]/preceding-sibling::table",
"url":"^http://thomasmayerarchive\\.de/",
"nextLink":"//a[@class=\"paging\"][starts-with(text(),\"Next page\")]"
},
{
"pageElement":"//div[@class=\"primaryContent\"]/div[starts-with(@id,\"post\")]",
"url":"^http://(?:[^.]+\\.)?woot\\.com/",
"nextLink":"//a[@class=\"next\"]"
},
{
"insertBefore":"//div[contains(concat(\" \", @class, \" \"), \" hr \") and contains(concat(\" \", @class, \" \"), \" footline \")]",
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" hfeed \")]",
"url":"^http://unknownplace\\.org/memo/",
"nextLink":"//p[@class=\"pager\"]/span[@class=\"current_page\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"search-results\")/*|//ul[@class=\"subCats\"]/span",
"url":"^http://[^.]+\\.answers\\.com/Q/",
"nextLink":"(id(\"upperPN\")|//div[@class=\"topicPgsLnk\"])//a[contains(., \">\")]"
},
{
"pageElement":"//div[@class=\"post\"]",
"url":"^http://(?:www\\.)?theync\\.com/",
"nextLink":"//a[@class=\"fs\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"ystcon\")/div[@class=\"yst-photo\"]/table",
"url":"^http://one\\.cn\\.yahoo\\.com/s",
"nextLink":"id(\"page\")/a[@class=\"nxt\"]"
},
{
"pageElement":"//td[@class=\"CELL_140\"]/..",
"url":"^http://cart\\d+\\.lolipop\\.jp/",
"nextLink":"//td[@style=\"text-align: left;\"]/a"
},
{
"insertBefore":"id(\"pagination\")",
"pageElement":"id(\"searchResultsContainer\")",
"url":"^http://[^.]+\\.cafepress\\.com/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"content\")/div[@class=\"post\"]",
"url":"^http://bungu\\.blueblack\\.net/",
"nextLink":"//div[@class=\"navigation\"]/div[@class=\"alignleft\"]/a[1]"
},
{
"pageElement":"//form[table/@class='forumline'] | //div[@id='page-body']",
"url":"^https?://.+?/viewforum\\.php\\?",
"nextLink":"//span[@class='gensmall']/b/b/following-sibling::a[1] | (//table/tbody/tr/td[@class='nav'])[last()]/b[last()]/following-sibling::a[1]  | //div[@class=\"pagination\"]/span/strong/following-sibling::a[1] | //a[text()='Next']"
},
{
"pageElement":"//div[@class=\"cover\"]",
"url":"^http://www\\.nearch\\.jp/[^/]+/",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"pageElement":"//td[@class=\"bg_01\"]/table | //div[@class=\"border_01\"]/table",
"url":"^http://yonige\\.so-netsns\\.jp/",
"nextLink":"//div[@class=\"padding_s\"]/a[last()]"
},
{
"insertBefore":"//form[@name=\"nr_form\"]",
"pageElement":"//p[@class=\"mainSearchUrls\"]",
"url":"^http://web\\.archive\\.org/web/",
"nextLink":"//a/b[text()=\"Next\"]/.."
},
{
"pageElement":"id(\"liveList\")/div[3]/div[@id=\"liveItemsWrap\"]",
"url":"^http://live\\.nicovideo\\.jp/my",
"nextLink":"id(\"liveList\")/div[@class=\"liveListInner4\"]/div[@class=\"pager\"]/a[@class=\"next\"]"
},
{
"pageElement":"id(\"center\")//div[@class=\"pager\"]/preceding-sibling::*[not(@id=\"article-bucket\")]|id(\"fc_river-inner\")/*",
"url":"^http://www\\.fastcompany\\.com/",
"nextLink":"id(\"center\")//strong[@class=\"pager-current\"]/following-sibling::a[1]|id(\"footer_pager\")//a[contains(concat(\" \", @class, \" \"), \" pager-next \")]"
},
{
"pageElement":"id(\"content\")//div[@class=\"entry\"]",
"url":"^http://fbrushes\\.com/category/",
"nextLink":"id(\"content\")/div[@class=\"navigation\"]/div[@class=\"alignleft\"]/a"
},
{
"pageElement":"//div[@id=\"m2\"]",
"url":"^http://www\\.yaoi-d\\.com/yaoi/",
"nextLink":"//div[@id=\"m2\"]/a[text()=\"\u6b21\u3078\"]"
},
{
"insertBefore":"id(\"pagination\")",
"pageElement":"//div[@class=\"body\"]",
"url":"^http://blogs\\.citypages\\.com/",
"nextLink":"id(\"pagination\")/a[starts-with(text(), \"Next\")]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" forumList \")]",
"url":"^http://www\\.woot\\.com/Forums/",
"nextLink":"id(\"ctl00_ctl00_ctl00_ContentPlaceHolderMainContent_ContentPlaceHolderPrimaryContent_ContentPlaceHolderPrimaryContent_HyperLinkOlderTop\")"
},
{
"pageElement":"//tr[following-sibling::tr//a[@class=\"storypaginator\"] and td/div[contains(@class,\"roundedcornr_box\")]]",
"url":"^http://(?:www\\.)?doggdot\\.us/",
"nextLink":"//a[@title=\">>>\"]"
},
{
"pageElement":"id(\"content\")/*",
"url":"^http://arstechnica\\.com/civis/",
"nextLink":"id(\"top-actionbar\")//li[@class=\"selected\"]/following-sibling::li[1]/a"
},
{
"pageElement":"//div[@class=\"article_content\"]",
"url":"^http://www\\.pcwelt\\.de/start/",
"nextLink":"//a[contains(concat(\" \", @class, \" \"), \" active \")]/following-sibling::a[1]"
},
{
"pageElement":"id(\"main-contents\")",
"url":"^http://diamond\\.jp/articles/-/",
"nextLink":"id(\"next-info\")/a"
},
{
"pageElement":"id(\"centerarea\")/div/h1/following-sibling::*[position()>1 and following::*[@class=\"pagenum\"]]",
"url":"^http://(?:[^.]+\\.)?tedia\\.jp/",
"nextLink":"//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"insertBefore":"id(\"pageNav\")",
"pageElement":"//div[@class=\"ListBetaItems\"]",
"url":"^http://www\\.betamarker\\.com/*",
"nextLink":"id(\"pageNav\")//a[@class=\"Next\"]"
},
{
"insertBefore":"//div[@class=\"navigation\"]",
"pageElement":"id(\"container\")",
"url":"^http://(www\\.)?webcreme\\.com/",
"nextLink":"//div[@class=\"navigation\"]/a[contains(text(), \"Next\")]"
},
{
"pageElement":"//font[.=\"\u25bc\"]/parent::a/ancestor::tbody[1]/tr[position()>1 and position()<last()]",
"url":"^http://tv\\.infoseek\\.co\\.jp/",
"nextLink":"//font[.=\"\u25bc\"]/parent::a"
},
{
"pageElement":"id(\"area-center-w-right\")/div[@class=\"mod-articletext\"]",
"url":"^http://articles\\.sfgate\\.com/",
"nextLink":"id(\"mod-pagination\")//a[contains(., \"Next\")]"
},
{
"insertBefore":"id(\"content\")/text()[last()]",
"pageElement":"id(\"content\")/div[contains(@id,\"post-\")]",
"url":"^http://www\\.sakurasaori\\.net/",
"nextLink":"id(\"content\")//div[@class=\"navigation\"]/div[@class=\"alignright\"]/a"
},
{
"pageElement":"//table[@class='ipbtable' or @class='tablepad' or @class='tborder'] | //div[@class='borderwrap' and div[1]/@class='maintitle' and div[2]/@class='tablepad'] | //table[tbody/tr/td/span/@id='page-jump']",
"url":"^http[^?]+\\?.*?\\bshowtopic=\\d",
"nextLink":"//a[text()='>' or text()='\u203a' or text()='Next']"
},
{
"pageElement":"id(\"ipbwrapper\")",
"url":"^http[^?]+\\?.*?\\bshowforum=\\d",
"nextLink":"//a[text()=\">\" or text()=\"\u203a\" or text()=\"Next\"]"
},
{
"pageElement":"id(\"content\")",
"url":"^http://pics\\.livedoor\\.com/u/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//div[@class=\"list\"]/table",
"url":"^http://smcb\\.jp/_photo_tr_list",
"nextLink":"//div[@class=\"pagelink\"]/table/tbody/tr/td[last()]/a[last()]"
},
{
"pageElement":"id(\"dual_list\")/*",
"url":"^http://www\\.dailymotion\\.com/",
"nextLink":"//div[@class=\"next\"]/a"
},
{
"pageElement":"//div[@class=\"node_body\"] | id(\"squeeze\")//div[contains(concat(\" \",normalize-space(@class),\" \"), \" view \")]",
"url":"^http://www\\.edge-online\\.com/",
"nextLink":"//a[contains(@title, \"Go to next page\")]"
},
{
"pageElement":"//a[contains(text(), \"\u00bb\")]/ancestor::table/following-sibling::table[1]",
"url":"^http://(www\\.)?noisemp3\\.com/",
"nextLink":"//a[contains(text(), \"\u00bb\")]"
},
{
"pageElement":"id(\"photos\")/p[contains(@class, \"entry\")]",
"url":"^http://(?:www\\.)?photie\\.com/",
"nextLink":"//span[last()]/a[last()]"
},
{
"pageElement":"id(\"articlePhotonews1\")",
"url":"^http://sankei\\.jp\\.msn\\.com/",
"nextLink":"id(\"photoNext\")"
},
{
"pageElement":"id('content')/node()[not(@id='ad-footer') and not(@class='wp-pagenavi')]",
"url":"^http://www\\.cinemaonline\\.jp/",
"nextLink":".//div[@class='wp-pagenavi']/span[@class='current']/following-sibling::a[1]"
},
{
"pageElement":"id(\"resultList\")//li",
"url":"^http://www\\.yahoo-search\\.jp/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id(\"body\")/div[@class=\"smallPreview\"]",
"url":"^http://www\\.freevectors\\.net/",
"nextLink":"id(\"body\")/p[@class=\"pageNumbers\"]/a[last()]"
},
{
"pageElement":"id(\"paging\")/preceding-sibling::*",
"url":"^http://www\\.sueddeutsche\\.de/",
"nextLink":"id(\"paging\")/p/span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"//table[@class=\"file\"]",
"url":"^http://balsamic\\d?\\.fam\\.cx/",
"nextLink":"//div[@class=\"page_info\"][2]/a[preceding-sibling::em]"
},
{
"pageElement":"id(\"result\")",
"url":"^http://video\\.baidu\\.com/v\\?",
"nextLink":"id(\"pg\")/a[last()][child::font]"
},
{
"pageElement":"id(\"art_story\")/p|id(\"search-main\")//div[@class=\"search-results\"]",
"url":"^http://www\\.nydailynews\\.com/",
"nextLink":"d(\"art_body_inner\")//a[@class=\"pagenumber_on\"]/following-sibling::a[1]|id(\"search-main\")//div[@class=\"pagination\"]//a[contains(., \"Next\")]"
},
{
"pageElement":"id(\"nowListArea\")",
"url":"^http://now\\.ameba\\.jp/now/top",
"nextLink":"//a[@class=\"right\"]"
},
{
"pageElement":"id(\"top_main\")/div",
"url":"^http://wintelmac\\.net/sqmovie/",
"nextLink":"id(\"next_navi_box\")/div[@class=\"l\"]/a"
},
{
"pageElement":"//div[@class=\"post\"] | //p[@class=\"page\"]",
"url":"^http://moeboard\\.net/egoboard/",
"nextLink":"//p[@class=\"page\"][1]/strong/following-sibling::a[1]"
},
{
"pageElement":"//table[.//a[@class=\"bar\"]]/following-sibling::*[./following-sibling::table[.//a[@class=\"bar\"]]]",
"url":"^http://www\\.movies-links\\.tv/",
"nextLink":"//a[@class=\"bar\" and contains(., \"Next\")]"
},
{
"pageElement":"id(\"album\")/ul[@class=\"album_list\"]",
"url":"^http://www\\.wretch\\.cc/album/",
"nextLink":"id(\"page_control_top\")/li[./span]/following-sibling::li[1]/a"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" blog-posts \")]",
"url":"^http://www\\.onlinemovies\\.ws/",
"nextLink":"id(\"Blog1_blog-pager-older-link\")"
},
{
"insertBefore":"//table[@class=\"nextprevious\"]",
"pageElement":"//div[@class=\"articlePageDiv\"]",
"url":"^http://www\\.startribune\\.com/",
"nextLink":"//td[@class=\"nextcell\"]/a"
},
{
"pageElement":"//ul[@class=\"photo-list\"]|//div[contains(concat(\" \", @class, \" \"), \" featured-holder \")]|//div[@class=\"member-table-box\"]",
"url":"^http://[^.]+\\.trekearth\\.com/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" page-nav \")]//li[./strong]/following-sibling::li[./a][1]/a"
},
{
"pageElement":"id(\"content\")/div[contains(concat(\" \", @class, \" \"), \" entry \")]",
"url":"^http://www\\.xuldev\\.org/blog/",
"nextLink":"id(\"content\")/div[@class=\"navigation\"]/a[contains(text(), \"\u00ab\")]"
},
{
"pageElement":"id(\"table_side\")/table/tbody/tr",
"url":"^http://www\\.searchplugin\\.jp/",
"nextLink":"id(\"table_side\")/table/caption/div[@class=\"nextnumber_b\"]/div[@class=\"navi\"]/span/following-sibling::a"
},
{
"insertBefore":"id(\"content\")/div[@class=\"hfeed\"]/node()[last()]",
"pageElement":"//div[@class=\"blog\"]",
"url":"^http://yamarena\\.seesaa\\.net/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id('PageBody')/*",
"url":"^http://pentax\\.photoble\\.net/",
"nextLink":"//a[contains(text(),'>>')]"
},
{
"pageElement":"id(\"alpha-block\")/div[@class=\"results-body\"]/ol[@class=\"entry\"]",
"url":"^http://search\\.blogmura\\.com/",
"nextLink":"id(\"alpha-block\")/div[@class=\"page-tab\"]//span[.=\"\u6b21\u3078\"]/parent::a"
},
{
"pageElement":"id(\"blogPhotoDtal\")/dl[@id=\"entrySortArea\"]/following-sibling::*",
"url":"^http://ameblo\\.jp/[^/]+/image-",
"nextLink":"id(\"blogPhotoDtal\")/ul/li[@class=\"nextLink\"]//a"
},
{
"pageElement":".//div[@class=\"clear_box\"]",
"url":"^http://yourfilehost-navi\\.com/",
"nextLink":".//a[child::img[contains(@src,\"/next.jpg\")]]"
},
{
"pageElement":"//table[contains(@class,\"pastes\")]",
"url":"^http://(?:www\\.)?hpaste\\.org/",
"nextLink":"//div[contains(@class,\"pager\")]//a[last()]"
},
{
"pageElement":"//div[@class=\"blog\"] | //table[@class=\"entry\"]",
"url":"^http://blog\\.oricon\\.co\\.jp/",
"nextLink":"//a[contains(text(),\"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"id(\"search_results\")",
"url":"^https?://www\\.daft\\.ie/search",
"nextLink":"id(\"content\")//div[@class=\"next\"]/a"
},
{
"pageElement":"//div[@id=\"tbl\"]",
"url":"^http://dl\\.rakuten\\.co\\.jp/",
"nextLink":"//div[@class=\"bg2\"]//b[@class=\"next\"]/a | //div[@class=\"bg2\"]/span[@class=\"lnk\"][last()]/a"
},
{
"insertBefore":"//div[@class=\"pager\" or @id=\"pager\"]",
"pageElement":"//div[@class=\"node\"]/div[@class=\"content\"]",
"url":"^http://[^.]+\\.impressrd\\.jp/",
"nextLink":"//a[@class=\"pager-next active\" or @class=\"pager-last active\"]"
},
{
"pageElement":"id(\"Content\")",
"url":"^http://userstyles\\.org/forum/",
"nextLink":"//ol[@class=\"PageList\"]/li[last()]/a"
},
{
"pageElement":"id(\"searchList\")",
"url":"^http://search\\.takamiya\\.jp/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"//div[@class=\"articlebody\"]",
"url":"^http://discovermagazine\\.com/",
"nextLink":"//span[@class=\"next\"]/a"
},
{
"pageElement":"id(\"contentColumn\")/div[contains(concat(\" \", @class, \" \"), \" articleText \")]/*[not(@class=\"pagination\")]",
"url":"^http://www\\.theatlantic\\.com",
"nextLink":"id(\"contentColumn\")//a[@class=\"nextLink\"]"
},
{
"insertBefore":"//h2[@class=\"shirttail\"]",
"pageElement":"id(\"storyBody\")",
"url":"^http://www\\.kansascity\\.com/",
"nextLink":"//a[b=\"Next page >\"]"
},
{
"pageElement":"id(\"body\")/div[@class=\"entries\"]/div[@class=\"entry\"]",
"url":"^http://hhs\\.trashsuite\\.org/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"main\")//div[@class=\"content-container\"]/*",
"url":"^http://www\\.vanityfair\\.com/",
"nextLink":"id(\"main\")//a[@class=\"paginationNext\"]"
},
{
"pageElement":"//div[@class=\"thumbnail_format\"]",
"url":"^http://(?:www\\.)?vimeo\\.com/",
"nextLink":"(//li[@class=\"arrow\"])[last()]/a"
},
{
"pageElement":"//div[@id='rightcontent']",
"url":"^http://www\\.elotrolado\\.net/",
"nextLink":"//a[contains(text(),'Siguiente')]"
},
{
"insertBefore":"//div[@class=\"item-list\"]",
"pageElement":"//ul[@class=\"images\"]",
"url":"^http://drupal\\.org/image/tid/",
"nextLink":"//li[@class=\"pager-next\"]/a"
},
{
"insertBefore":"//hr[last()]",
"pageElement":"(//html/body/node() | //html/node())[preceding-sibling::hr and following-sibling::hr]",
"url":"^http://(?:www\\.)?c-faq\\.com/",
"nextLink":"//a[img[@alt=\"next\"]]"
},
{
"pageElement":"id(\"list-item\")/*",
"url":"^http://ranking\\.cosme\\.net/.",
"nextLink":"id(\"nav-rank-header\")/ul/li[@class=\"on\"]/following-sibling::li[1]/a"
},
{
"pageElement":"id(\"story\")/div[@class=\"body\"]/node()",
"url":"^http://arstechnica\\.com/\\w+/",
"nextLink":"id(\"story\")//div[@class=\"next-page\"]/a"
},
{
"insertBefore":"//form/table/tbody/tr/td[@class=\"subnormal\"]",
"pageElement":"//form/table/tbody/tr/td[@class=\"bgctblframe\"]/table",
"url":"^https?://www2\\.it-ex\\.com/va",
"nextLink":"//form/table/tbody/tr/td/table/tbody/tr/td/a[@class=\"subnormal\"]"
},
{
"pageElement":"id(\"content\")/div[not(@class=\"post-nav\")]",
"url":"^http://www\\.japanprobe\\.com/",
"nextLink":"id(\"content\")/div[@class=\"post-nav\"]/p/a[contains(., \"\u00bb\")]"
},
{
"pageElement":"id(\"Stores\")",
"url":"^http://cat\\.gnavi\\.co\\.jp/.",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"//table[@class=\"contentpaneopen\"]/tbody//p",
"url":"^http://www\\.geek-pages\\.com/",
"nextLink":"//a[starts-with(text(), \"Next\")]"
},
{
"pageElement":"id('t_qcar')",
"url":"^http://www\\.funso\\.com\\.tw/",
"nextLink":"//a[text()=\"\u4e0b\u4e00\u9801\"]"
},
{
"pageElement":"(id(\"bodyline\")/form/table|id(\"bodyline\")/table[@class=\"viewtopic\"])/tbody/tr[@class=\"toplines\"]/following-sibling::tr[position()<last()]|id(\"content\")/div[contains(concat(\" \", @class, \" \"), \" post \")]",
"url":"^http://www\\.channel-ai\\.com/",
"nextLink":"id(\"bodyline\")/div[@class=\"bottombuttons\"]//a[contains(., \"Next\")]|id(\"content\")/div[@class=\"wp-pagenavi\"]/a[@class=\"nextpostslink\"]"
},
{
"pageElement":".//div[@class=\"result\"]",
"url":"^http://www\\.playlistnow\\.fm/",
"nextLink":"id(\"pagination\")/span[@class=\"selected\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"content\")/div[@class=\"post\"]",
"url":"^http://www\\.cssimpress\\.com/",
"nextLink":"//img[@src=\"http://www.cssimpress.com/images/next_button.jpg\"]/parent::a"
},
{
"pageElement":"id(\"center\")/div[@class=\"pics_list\" or @class=\"cl\" or (@style=\"clear: both;\" and not(./*))]",
"url":"^http://(?:www\\.)?picfor\\.me/",
"nextLink":"//div[@class=\"next\"]/parent::a"
},
{
"insertBefore":"id(\"contents_left\")/div[@class=\"wp-pagenavi\"]",
"pageElement":"id(\"contents_left\")/div[@class=\"content\"]",
"url":"^http://anjo\\.dekiteharu\\.jp/",
"nextLink":"id(\"contents_left\")/div[@class=\"wp-pagenavi\"]/a[contains(text(), \"\u00bb\")]"
},
{
"pageElement":"//table[@class=\"tbllist\"]",
"url":"^http://(?:www\\.)?gavie\\.net/",
"nextLink":"//a[@title=\"next page\"]"
},
{
"pageElement":"id(\"blog-posts\")/div[contains(concat(\" \", @class, \" \"), \" item \")]",
"url":"^http://www\\.hanselman\\.com/.",
"nextLink":"id(\"blog-posts\")/div[@class=\"post-paging\"]/div[@class=\"previous-posts\"]/a"
},
{
"pageElement":"//div[@class=\"left\"]/div[contains(@class, \"lbox_list\")]",
"url":"^http://www\\.sharenator\\.com/",
"nextLink":"//a[contains(concat(\" \", @class, \" \"), \" pages \")][last()]"
},
{
"pageElement":"id(\"content\")//div[contains(concat(\" \", @class, \" \"), \" views-row \")]",
"url":"^http://about\\.digg\\.com/blog",
"nextLink":"id(\"content\")//li[@class=\"pager-next\"]/a"
},
{
"pageElement":"id(\"bodycopy\")/*[not(@class=\"links\")]",
"url":"^http://www\\.globalpost\\.com/",
"nextLink":"//li[contains(concat(\" \", @class, \" \"), \" pager-next \")]/a"
},
{
"pageElement":"id(\"content\")",
"url":"^http://(?:www\\.)?globis\\.jp/",
"nextLink":"//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8>>\"]"
},
{
"pageElement":"id(\"oldfish\")/p[contains(concat(\" \",@class,\" \"),\" urllist \")]",
"url":"^http://megalodon\\.jp/history/",
"nextLink":"id(\"next\")/a"
},
{
"pageElement":"id(\"main\")/*[not(@id=\"ad_source\")]",
"url":"^http://bookcoverarchive\\.com/",
"nextLink":"id(\"nav_top\")//a[contains(., \"Next\")]"
},
{
"insertBefore":"id(\"ad_b\")",
"pageElement":"id(\"content\")/*[not(starts-with(@id, \"ad_\")) and not(@class=\"navigation\")]",
"url":"^http://www\\.rue89japon\\.com/",
"nextLink":"//a[contains(concat(\" \", normalize-space(@class), \" \"), \" next \")]"
},
{
"pageElement":"id(\"postlist\")",
"url":"^http://xsellize\\.com/threads/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" results \")]/*",
"url":"^http://(?:www\\.)?woopie\\.jp/",
"nextLink":"id(\"page-navigation-area\")//a[@class=\"page-next\"]"
},
{
"pageElement":"id(\"tableItems\")",
"url":"^http://www\\.esnips\\.com/web/",
"nextLink":"//span[@class=\"currentPage\"]/following-sibling::a[1]"
},
{
"pageElement":"//ul[contains(concat(\" \", @class, \" \"), \" pagination \")]/preceding-sibling::*[not(contains(concat(\" \", @class, \" \"), \" pagination \") or @class=\"adspacer\")]",
"url":"^http://www\\.kongregate\\.com/",
"nextLink":"//li[@class=\"next\"]/a|//li[@class=\"current\"]/following-sibling::li[1]/a"
},
{
"pageElement":"id(\"body\")/div[contains(concat(\" \", normalize-space(@class), \" \"), \" section \")]/div[contains(concat(\" \",normalize-space(@class),\" \"),\" entries \")]",
"url":"^http://bottle\\.hatelabo\\.jp/",
"nextLink":"id(\"body\")/div[@class=\"pager\"]/a[last()]"
},
{
"pageElement":"id(\"nav\")/preceding-sibling::ul",
"url":"^http://www\\.googlelabs\\.com/",
"nextLink":"id(\"nav\")//td[@class=\"cur\"]/following-sibling::td[1]/a"
},
{
"pageElement":"//ul[@class=\"logList01\"]",
"url":"^http://mixi\\.jp/show_log\\.pl",
"nextLink":"//div[@class=\"pageNavigation01 top\"]//a[starts-with(@href, \"show_log.pl?page=2\")]"
},
{
"pageElement":"id(\"content\")",
"url":"^https?://[^?#]+/torrents\\.php",
"nextLink":"//a[starts-with(strong/text(), \"Next\")]"
},
{
"pageElement":"//div[@class=\"NewsBody\"]",
"url":"^http://(?:www\\.)?mainichi.jp/",
"nextLink":"//a[@class=\"Next\"]"
},
{
"pageElement":"id(\"ajaxcontentarea\")/p[last()]/preceding-sibling::*",
"url":"^http://www\\.metafilter\\.com/",
"nextLink":"id(\"ajaxcontentarea\")/p[last()]/a[text()=\"Older posts\"]"
},
{
"pageElement":"//table[@class=\"torr_list_main_table\"]/tbody/tr[position() > 2]",
"url":"^http://www\\.cinemascope\\.ru/",
"nextLink":"//p[@align=\"center\"]/a[font[starts-with(text(), \"\u0412\u043f\u0435\u0440\u0435\u0434\")]]"
},
{
"insertBefore":"(//div[@class=\"blog-pager\"])[last()]",
"pageElement":"//div[contains(@class, \"blog-posts\")]",
"url":"^http://[^.]+\\.blogspot\\.com/",
"nextLink":"id(\"blog-pager-older-link\")/a"
},
{
"pageElement":"id(\"primary-content\")//ul[contains(concat(\" \", @class, \" \"), \" previous-continue \")]/preceding-sibling::*|id(\"allProductsCatagorySection\")/div[@class=\"productReviewSummary\"]|id(\"search-results\")/div[contains(concat(\" \", @class, \" \"), \" listing-item \")]",
"url":"^http://[^.]+\\.cnet\\.co\\.uk/",
"nextLink":"id(\"primary-content\")//li[@class=\"next\"]/a|id(\"reviewsPageNavigationTop search-results\")//a[contains(@title, \"Next\")]"
},
{
"pageElement":"//div[@class=\"listingBar\"]/preceding-sibling::*[not(@id or self::h1)]",
"url":"^http://(?:www\\.)?nanasi\\.jp/",
"nextLink":"//div[@class=\"listingBar\"]/span[@class=\"next\"]/a"
},
{
"pageElement":"//div[@class=\"container\"]/div[@id=\"welcome\" or @class=\"content\"]",
"url":"^http://learn\\.github\\.com/p/",
"nextLink":"//a[contains(text(), \"next\")]"
},
{
"pageElement":"//div[@class=\"customerInput\"]",
"url":"^http://ednjapan\\.rbi-j\\.com/",
"nextLink":"//span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"topContent\"]",
"url":"^http://www\\.47news\\.jp/news/",
"nextLink":"id(\"bt_body\")/a"
},
{
"pageElement":"//tr[./td[@class=\"cfakeLine\"]]",
"url":"^http://(?:www\\.)?cfake\\.com/",
"nextLink":"id(\"pageTDselect\")/following-sibling::td[1]/a"
},
{
"pageElement":"id(\"forum_table\")",
"url":"^http://www\\.msfn\\.org/board/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//div[@class=\"day\"]",
"url":"^http://diary\\.lampetty\\.net/",
"nextLink":"//span[@class=\"adminmenu\"][contains(string(.), \"\u524d\")]/a"
},
{
"pageElement":"//ul[@class=\"rstlist-info\" or @class=\"ranking-list\" or contains(concat(\" \", @class, \" \"), \" photograph-list \") or @class=\"rvwrlist-info\" or @class=\"blogreview-list\" or contains(concat(\" \", @class, \" \"), \" rstbm-list \") or @class=\"commu-list\" or @class=\"list-result\"]|//div[@class=\"diary-list\"]|//div[@class=\"list\"]/*|//table[@class=\"list\"]|id(\"column-main\")/div[@class=\"list-controll\"][last()]/preceding-sibling::*[((self::a and @name) or (self::div and (contains(concat(\" \", @class, \" \"), \" review-wrap \")) or (self::p and @class=\"contents-up\"))) and (count(../div[@class=\"list-controll\"])=1 or ./preceding-sibling::div[@class=\"list-controll\"])]|id(\"blogphoto-box\")/*|id(\"thumphoto-list\")",
"url":"^http://[coru]\\.tabelog\\.com/",
"nextLink":"//a[@rel=\"next\"]|//div[@class=\"page-move\"]/a[contains(., \">\")]"
},
{
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://zeak\\.air-nifty\\.com/",
"nextLink":"//div[@class=\"entry-nav\"]//a[1]"
},
{
"pageElement":"id(\"content\")//div[contains(concat(\" \", @class, \" \"), \" post \")]",
"url":"^http://www\\.orphanroad\\.com/",
"nextLink":"id(\"content\")//span[@class=\"next\"]/parent::a"
},
{
"pageElement":"//div[@class=\"paging\"]/parent::td/parent::tr/preceding-sibling::tr|id(\"text\")/div[@class=\"paging\"]/preceding-sibling::div",
"url":"^http://(?:www\\.)?cactco\\.jp/",
"nextLink":"//a[@title=\"next page\"]"
},
{
"pageElement":"//div[@class=\"fsize\"]/ancestor::table[1]",
"url":"^http://search\\.4shared\\.com/",
"nextLink":"//td[@class=\"pagerOn\"]/following-sibling::td[1]/a"
},
{
"pageElement":"id(\"content\")/*",
"url":"^http://stadt-bremerhaven\\.de/",
"nextLink":"//a[@class=\"nextpostslink\"]"
},
{
"pageElement":"id(\"nav-below\")/preceding-sibling::*",
"url":"^http://satully\\.lolipop\\.jp/",
"nextLink":"id(\"nav-below\")/div[@class=\"nav-previous\"]/a"
},
{
"pageElement":"id(\"art-main\")",
"url":"^http://japan\\.internet\\.com/",
"nextLink":"id(\"art-pager-next\")/a | //a[contains(concat(\" \",@class,\" \"), \" nav \")]"
},
{
"pageElement":"id(\"leftColumn\")/div[contains(@class,\"bookmarkItem\")]",
"url":"^http://www\\.diigo\\.com/user/",
"nextLink":"(//span[contains(concat(\" \",@class,\" \"),\" pagination \")]/a[last() - 1])[last()]"
},
{
"pageElement":"id(\"block_story\")/*|id(\"main_col\")//div[@class=\"more\" and ./*]/preceding-sibling::*[not(./div[@class=\"tac\"])]|id(\"main_col\")/div[@class=\"module_wrap\"]",
"url":"^http://japan\\.gamespot\\.com/",
"nextLink":"//div[@class=\"pagination\"]//a[@class=\"next\"]|id(\"main_col\")//div[@class=\"more\"]/b/following-sibling::a[1]"
},
{
"pageElement":"id(\"news-box\")/div[contains(concat(\" \", @class, \" \"), \" box2-body \")]",
"url":"^http://www\\.phppro\\.jp/news/",
"nextLink":"id(\"page-navi\")/p[last()]/a[last()]"
},
{
"pageElement":"id(\"ResultSet\")",
"url":"^http://shop\\.ebay\\.com\\.au/",
"nextLink":"//td[@class=\"next\"]/a[@class=\"enabled\" and text()=\"Next\"]"
},
{
"pageElement":"//div[@class=\"search_results_item\" or @class=\"search_image\"]/*",
"url":"^http://www\\.goodsearch\\.com/",
"nextLink":"//div[@class=\"search_numberpager\"]//a[.=\"Next\"]"
},
{
"pageElement":"//div[@class=\"videorownormal\"]",
"url":"^http://(?:www\\.)?flurl\\.com/",
"nextLink":"//a[@class=\"prevnext\" and contains(., \">\")]"
},
{
"pageElement":"id(\"browse-artists genres\")/table[@width=\"100%\"]",
"url":"^http://(?:www\\.)?drimr\\.com/",
"nextLink":".//p[@class=\"pagination\"]/strong/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"post\"]",
"url":"^http://welovetypography\\.com/",
"nextLink":"id(\"next\")"
},
{
"pageElement":"//table",
"url":"^http://labs\\.ceek\\.jp/wassr/",
"nextLink":"//div[@class=\"navi\"]/a[last()]"
},
{
"insertBefore":"//*[contains(concat(\" \",@class,\" \"), \" autopagerize_insert_before \")]",
"pageElement":"//*[contains(concat(\" \",@class,\" \"), \" autopagerize_page_element \")]",
"url":"^.+://[^/]+\\.tumblr\\.com/.*.*",
"nextLink":"//a[@rel=\"next\"] | //link[@rel=\"next\"]"
},
{
"pageElement":"id(\"postcontainer\")",
"url":"^http://www\\.siliconera\\.com/",
"nextLink":"//div[@id='nextprev']/div[@class='alignright']/p/a | //div[@id='nextprev2']/div[@class='alignleft']/p/a"
},
{
"pageElement":"id(\"contents\")//table[@class=\"list\" or @class=\"project-list-table\" or @class=\"signature-list-table\"]",
"url":"^http://(?:www\\.)?shomei\\.tv/",
"nextLink":"id(\"contents\")/descendant::div[@class=\"align_right\"][last()]/a[contains(., \"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"channel-list\")/ul[@class=\"listing\"]",
"url":"^http://www\\.livestream\\.com/",
"nextLink":"id(\"channel-list\")/div[@class=\"footer\"]//a[@class=\"next\"]"
},
{
"pageElement":"id(\"pagingBottom\")/preceding-sibling::*[self::input or (self::a and self::name) or (self::div and @class=\"mainResultList\")]",
"url":"^http://onsen\\.nifty\\.com/cs/",
"nextLink":"id(\"pagingTop\")//span[@class=\"next\"]/a"
},
{
"insertBefore":"id(\"content\")/text()[last()]",
"pageElement":"id(\"content\")/div[@class!=\"navigation\"]",
"url":"^http://www\\.avenew\\.jp/blog/",
"nextLink":"id(\"content\")//div[@class=\"navigation\"]/div[@class=\"alignright\"]/a"
},
{
"pageElement":"//div[@class=\"post\"]",
"url":"^http://www\\.diamondblog\\.jp/",
"nextLink":"//p[@class=\"navigation\"]/a[contains(., \"\u6b21\u306e\")]"
},
{
"pageElement":"//div[@class=\"post_container\"]",
"url":"^http://(?:www\\.)?picvi\\.com/",
"nextLink":"//li[@class=\"page_numbers_floating_selected\"]/following-sibling::li[1]/a"
},
{
"pageElement":"id(\"content\")/div[contains(@class,\"post\")]",
"url":"http://www\\.syuhari\\.jp/blog/",
"nextLink":"//span[contains(concat(\" \",@class,\" \"),\" previous-entries \")]/a"
},
{
"pageElement":"//div[@class=\"item\"]",
"url":"^http://www\\.esnips\\.com/_t_/",
"nextLink":"//a[text()=\"Next \u00bb\"]"
},
{
"pageElement":"//div[@class=\"thb_cell\"]",
"url":"^http://www\\.dreamstime\\.com/",
"nextLink":"id(\"nextP\")/a"
},
{
"pageElement":"id(\"resultBaidu\")/div[@class=\"container\"]",
"url":"^http://video\\.baidu\\.jp/v\\?",
"nextLink":"id(\"pg\")/a[@class=\"nx\"]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" display_area \")]/*",
"url":"^http://www\\.travel\\.co\\.jp/",
"nextLink":"//span[@class=\"next\"]/a"
},
{
"pageElement":"id(\"content\")//h3/following-sibling::table",
"url":"^http://rubyforge\\.org/search/",
"nextLink":"id(\"content\")//a[contains(text(),\"Next Results\")]"
},
{
"insertBefore":"//div[@class=\"othergame\"]",
"pageElement":"id(\"gametable\") | id(\"main\")/table[2]/following-sibling::*[self::br or self::table]",
"url":"^http://www\\.jsgoal\\.jp/game/",
"nextLink":"//div[@class=\"gamemore\"]/a"
},
{
"pageElement":"//div[@class=\"createList\"]/*|//table[@class=\"authorImages\" or @class=\"backnumber\"]",
"url":"^http://4koma\\.livedoor\\.com/",
"nextLink":"//a[@class=\"on\"]/following-sibling::a[1]"
},
{
"insertBefore":"//ul[@class=\"bookmark-list\"]/following-sibling::node()",
"pageElement":"//ul[@class=\"bookmark-list\"]",
"url":"^http://bm\\.straightline\\.jp/",
"nextLink":"//li[@class=\"next-page\"]/a"
},
{
"pageElement":"//ul[@class=\"linksOverview\" or @id=\"links\"]//li[@class=\"link\"]",
"url":"^http://www\\.cosmiq\\.de/lili/",
"nextLink":"//div[@id=\"pageNav\"]//span[@class=\"next\"]/a"
},
{
"pageElement":"//ul[contains(concat(\" \", @class, \" \"), \" bigList \")]",
"url":"^http://www\\.slideshare\\.net/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//div[@class=\"individualapps\" or @class=\"recitem\" or @class=\"comment\"]",
"url":"^http://[^.]+\\.iusethis\\.com/",
"nextLink":"id(\"pagenr\")/span/following-sibling::a[1]"
},
{
"insertBefore":"//table[@class=\"pager\"][2]",
"pageElement":"id(\"issues-table\")",
"url":"^https?://[^.]+\\.backlog\\.jp/",
"nextLink":"id(\"pager-next\")"
},
{
"pageElement":"id(\"artrelated\")/following-sibling::*",
"url":"^http://lifestyle\\.msn\\.com/",
"nextLink":"id(\"pagbot\")//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"searchResultList\")",
"url":"^http://na\\.blackberry\\.com/",
"nextLink":"id(\"search_results_wrapper\")/div[@class=\"search_navigation_bar\"]//span[@class=\"i\"]/following-sibling::a[1]"
},
{
"insertBefore":"id(\"pagenavi\")",
"pageElement":"id(\"main\")/div",
"url":"^http://www\\.juangotoh\\.net/",
"nextLink":"id(\"pagenavi\")/span[@class=\"older\"]/a"
},
{
"insertBefore":"id(\"content\")/p",
"pageElement":"id(\"content\")/div",
"url":"^http://aquapple\\.jugem\\.jp/",
"nextLink":"id(\"content\")/div[@class=\"pagingLink\"]/p/a[last()]"
},
{
"pageElement":"id(\"main\")/div[@id]/ul[@class=\"commonMovieList\"]",
"url":"^http://pia-eigaseikatsu\\.jp/",
"nextLink":"id(\"main\")/div[@id]/p[@class=\"pagedLink\"]/a[@title=\"next page\"]"
},
{
"insertBefore":"id(\"paging\")",
"pageElement":"id(\"content\")/*[not(self::ul[@id=\"paging\"])]",
"url":"^http://\\w+\\.engadget\\.com/",
"nextLink":"id(\"paging\")/li/a[contains(.,\"\u2192\")]"
},
{
"pageElement":"id(\"maincolumn\")/div[@class=\"post\"]",
"url":"^http://www\\.baysidenet\\.tv/",
"nextLink":"id(\"maincolumn\")/div[@class=\"browse\"]/a[1]"
},
{
"pageElement":"id(\"photo-area\")",
"url":"^http://(?:www\\.)?jiji\\.com/",
"nextLink":"//span[@class=\"bt_next\"]/a"
},
{
"pageElement":"//div[(contains(@class, \"SlidePhoto\") and child::a/child::img) or (contains(@class, \"caption\"))]",
"url":"^http://mainichi.jp/.+?/graph/",
"nextLink":"//li[contains(@class, \"Next\")]//a"
},
{
"pageElement":"id(\"conts\")",
"url":"^http://[^.]+\\.dtiblog\\.com/",
"nextLink":"id(\"entry_guide\")/a"
},
{
"pageElement":"//div[@class=\"list\"]",
"url":"^http://fridge\\.nettabo\\.jp/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//ol[@class=\"list\"]",
"url":"^http://slatest\\.slate\\.com/",
"nextLink":"//img[@src=\"http://img.slate.com/images/slatest/prev_edition.gif\"]/parent::a"
},
{
"pageElement":"id(\"main\")/div[h2]",
"url":"^http://www\\.milanello\\.net/",
"nextLink":"id(\"flip2\")/li[@class=\"older\"]/arn"
},
{
"pageElement":"id(\"tableContainer\")/*|id(\"productListing\")|//div[@class=\"downloadsSearch\"]/ul",
"url":"^http://download\\.cnet\\.com/",
"nextLink":"//ul[@class=\"pagination\"]//a[contains(., \"next\")]"
},
{
"insertBefore":"//div[@class=\"basicMainDotted clearfix\" and div[@class=\"paginationContainer\"]]",
"pageElement":"id(\"news-content\")",
"url":"^http://www\\.tomsguide\\.com/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"content\")/div[@class=\"content_list\"]/div[@class=\"list\" or @class=\"clear\"]",
"url":"^http://[^.]+\\.fotolia\\.com/",
"nextLink":"id(\"content\")//a[@class=\"next\"]"
},
{
"pageElement":"//div[@class=\"articlePost\"]",
"url":"^http://posterous\\.com/reader",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"pageElement":"//h2/a",
"url":"^http://www\\.taikaisyu\\.com/",
"nextLink":"//h2/a"
},
{
"pageElement":"id(\"bodyarea quickModForm\")/table[@class=\"bordercolor\"]",
"url":"^http://forums\\.comodo\\.com/",
"nextLink":"//a[@class=\"navPages\" and ./preceding-sibling::*[1][self::b and number()=normalize-space()]]"
},
{
"pageElement":"//div[@class=\"topic-path\"]//following-sibling::*",
"url":"^http://jintrick\\.net/agenda/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//div[@class=\"block_line_solid_b\"]",
"url":"^http://(:?www\\.)?meeda\\.jp/",
"nextLink":"//a[@class=\"page_next\"]"
},
{
"pageElement":"id(\"list\")",
"url":"^http://(?:[^.]+\\.)?asg\\.to/",
"nextLink":"id(\"list\")/p/node()[not(self::a) and (number(translate(self::text(),\"|\",\" \"))>0)]/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"diary\"]|id(\"disqus_thread\")/following-sibling::text()",
"url":"^http://youkoseki\\.com/diary/",
"nextLink":"//div[@class=\"arrow_menu_l\"]/a"
},
{
"insertBefore":"//div[contains(@class, \" tar\")]",
"pageElement":"//span[starts-with(@id, \"UC_FeatureArticle1_lblBody\")]",
"url":"^http://www\\.hollywood\\.com/",
"nextLink":"//a[text()=\"Next\"]"
},
{
"pageElement":"id(\"gallery\")/div[contains(@class,\"app\")]",
"url":"^http://www\\.appsafari\\.com/",
"nextLink":"//a[contains(concat(\" \",@class,\" \"),\" pagenext \")]"
},
{
"insertBefore":"//div[@class=\"pages\"]",
"pageElement":"//div[@class=\"gallery\"]",
"url":"^http://smile-pro\\.net/photo/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"container\")",
"url":"^http://h2\\.hatena\\.ne\\.jp/",
"nextLink":"//a[@accesskey=\"6\"]"
},
{
"insertBefore":"id(\"box-entry-page\")",
"pageElement":"id(\"box-entry-page\")/preceding-sibling::*",
"url":"^http://blog-log\\.jugem\\.jp/",
"nextLink":"id(\"txt-page-next\")/a"
},
{
"pageElement":"id(\"main-area\")/div[@class=\"vid-thumb\"]",
"url":"^http://www\\.spankwire\\.com/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"//div[contains(@class, \"blog-posts\")]",
"url":"^http://blog\\.kamicopi\\.net/",
"nextLink":"id(\"Blog1_blog-pager-older-link\")"
},
{
"pageElement":"//ul[@class=\"list-view hlisting sell \"]",
"url":"^http://search\\.taobao\\.com/",
"nextLink":"//a[@class=\"page-next\"]"
},
{
"insertBefore":"//div[@class=\"paging\"]",
"pageElement":"id(\"estresult\")/dl",
"url":"^https?://[^?]+?/estseek\\.cgi",
"nextLink":"//a[@class=\"navi\"][text()=\"NEXT\"]"
},
{
"pageElement":"id(\"content_main\")/div[contains(concat(\" \", @class, \" \"), \" question \") or @class=\"videoList\"]|id(\"content_main\")/div[@class=\"hint_block\"]/preceding-sibling::*[1]/following-sibling::*[./following-sibling::div[@class=\"pager\"]]|id(\"answers\")/*|id(\"topuser\")/tbody/tr[position()>1]",
"url":"^http://www\\.gutefrage\\.net/",
"nextLink":"id(\"content_main\")/div[@class=\"pager\"]//li[@class=\"current\"]/following-sibling::li[1]/a"
},
{
"insertBefore":"id(\"pagination\")",
"pageElement":"//div[@class=\"articlePage\"]",
"url":"^http://www\\.portfolio\\.com/",
"nextLink":"//a[starts-with(text(), \"NEXT\")]"
},
{
"pageElement":"id(\"profile-header\")/following-sibling::div[following-sibling::div[last()]]",
"url":"^http://twitpic\\.com/photos/.",
"nextLink":"id(\"profile-pagination\")/a[starts-with(text(), \"More\")]"
},
{
"pageElement":"id(\"main\")//div[contains(@class, \"newtopics\")]/div[@class=\"summary-a\"]",
"url":"^http://diamond\\.jp/category/",
"nextLink":"id(\"main\")//div[contains(@class, \"pagination\")]//a[@class=\"next\"]"
},
{
"pageElement":"id(\"content\")/div[not(@class=\"navigation\")]",
"url":"^http://www\\.cssheroes\\.com/",
"nextLink":"//span[@class=\"current\"]/following-sibling::*[1][self::a]"
},
{
"pageElement":"id(\"wideMainColumn\")//div[contains(@class,\"widePopList\")]",
"url":"^http://tv\\.rayrac\\.co\\.jp/",
"nextLink":"id(\"wideMainColumn\")//div[@class=\"page\"]/a[contains(text(),\"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"id(\"doc4\")/table/tbody/tr",
"url":"^http://sourceforge\\.net/top/",
"nextLink":"id(\"doc4\")/table/tfoot//a[contains(., \">\") or contains(., \"Next\")]"
},
{
"pageElement":"//div[@class=\"article_body\"]/div[@class=\"pager\"]/preceding-sibling::*",
"url":"^http://www\\.maximumpc\\.com/",
"nextLink":"//strong[@class=\"pager-current\"]/following-sibling::a[1]"
},
{
"pageElement":"//table[@class=\"thumbTable\"]",
"url":"http://(?:www\\.)?fapdb\\.com/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pageSystemBottom \")]/text()[normalize-space()=\"...\"][last()]/preceding-sibling::a[2]"
},
{
"pageElement":"id(\"wrapper\")//div[@class=\"entry\"]",
"url":"^http://lapilazu\\.jugem\\.jp/",
"nextLink":"id(\"wrapper\")//li[contains(@class,\"next\")]/a[contains(text(),\">>\")]"
},
{
"pageElement":"id(\"status_list\")",
"url":"^http://ibeer\\.appspot\\.com/",
"nextLink":"id(\"older\")"
},
{
"pageElement":"id(\"content\")/div[@class=\"blog\"]",
"url":"^http://figure\\.seesaa\\.net/",
"nextLink":"id(\"content\")/div[@class=\"wp-pagenavi\"]//span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"article\")/div[@class=\"section\"]",
"url":"^http://r25\\.yahoo\\.co\\.jp/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"//div[@class=\"pagenavbar\"]/preceding-sibling::node()[not(@id=\"related-resources\")]",
"url":"^http://www\\.eweek\\.com/c/a/",
"nextLink":"//div[@class=\"biglinknext\"]/parent::a"
},
{
"pageElement":"id(\"directoryDiv\")/*",
"url":"^http://(?:www\\.)?cam4\\.com/",
"nextLink":"//div[@class=\"pager\"]/span/following-sibling::a[1]"
},
{
"pageElement":"id(\"content\")/div[contains(concat(\" \", @class, \" \"), \" middleware \")]",
"url":"^http://coderack\\.org/entries",
"nextLink":"id(\"content\")//li[contains(concat(\" \", @class, \" \"), \" next \")]/a"
},
{
"pageElement":"id(\"body\")/div[@class=\"day\"]",
"url":"^http://anond\\.hatelabo\\.jp/",
"nextLink":"id(\"body\")/div[@class=\"pager-l\"]/strong/following-sibling::*[1][self::a]"
},
{
"pageElement":"id(\"content\")/div/div[@class=\"entFlm\"]",
"url":"^http://akiba\\.kakaku\\.com/.",
"nextLink":"id(\"content\")/div/div[@class=\"page\"]/*[last()][@href]"
},
{
"pageElement":"(id(\"sgmtMain\")|//div[@class=\"sgmtMain\"])/div[contains(concat(\" \", @class, \" \"), \" partPager \")][1]/following-sibling::*[./following-sibling::div[contains(concat(\" \", @class, \" \"), \" partPager \")]]",
"url":"^http://mediajam\\.info/topic/",
"nextLink":"//li[@class=\"nextPage\"]/a"
},
{
"pageElement":"id(\"primary-column\")/div[@class=\"section\"]",
"url":"^http://hlywd\\.dtiblog\\.com/",
"nextLink":"id(\"primary-column\")/center/p[@class=\"prev-next-navi\"] /a[contains(@title,\"\u6b21\")]"
},
{
"pageElement":"id(\"main-contents\")",
"url":"^http://number\\.bunshun\\.jp/",
"nextLink":".//div[@class=\"next_p\"]/a"
},
{
"insertBefore":"id(\"body\")/following-sibling::node()",
"pageElement":"id(\"body\")",
"url":"^http://serif\\.hatelabo\\.jp/",
"nextLink":"//a[@class=\"pager-next\"][1]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" searchresult \")]",
"url":"^http://www\\.similarr\\.com/.",
"nextLink":"//a[@class=\"linknext\"]"
},
{
"pageElement":"id(\"ctl00_ctl00_cpMain_TopBlogListing_ShowBlogs\")/div[@class=\"mpBlogRsltDiv\" or @class=\"mpBlogRsltDivider\"]|id(\"BlogTable\")",
"url":"^http://blogs\\.myspace\\.com/",
"nextLink":"//a[@class=\"pagingLink\"]|id(\"ctl00_ctl00_cpMain_cpMain_BlogList_btnOlder\")"
},
{
"pageElement":".//div[@class=\"result_block\"]//index",
"url":"^http://(?:www\\.)?tagoo\\.ru/",
"nextLink":".//div[@class=\"pages\"]/a[@class=\"next\"]"
},
{
"pageElement":"id(\"content\")/div[@class=\"navigation\" or @class=\"post\"] | id(\"content\")/h2",
"url":"^http://blog\\.suki\\.gr\\.jp/",
"nextLink":"id(\"content\")/div[last()]/a[contains(.,\"\u00bb\")]"
},
{
"pageElement":"id(\"contentFooter\")/preceding-sibling::div[@class=\"block\"]",
"url":"^http://blog\\.sharplab\\.net/",
"nextLink":"id(\"contentFooter\")//div[@class=\"nextLink\"]/a"
},
{
"pageElement":"id(\"center\")/div[@class=\"article_box\"]",
"url":"^http://blog\\.innx\\.co\\.jp/",
"nextLink":"id(\"center\")/div[@class=\"pagenavi\"]/a[contains(., \">\")]"
},
{
"pageElement":"id(\"content-body-inner\")/div[@class=\"books\"]",
"url":"^http://stack\\.nayutaya\\.jp/",
"nextLink":"id(\"content-body-inner\")/div[@class=\"pagination\" and last()]/a[last()]"
},
{
"pageElement":"id(\"main-contents\")/ul[not(./following-sibling::div[@id=\"category-columns\"])]",
"url":"^http://diamond\\.jp/category/",
"nextLink":"id(\"multipage\")/div[@class=\"next_p\"]/a"
},
{
"pageElement":"id(\"content\")/ul",
"url":"^http://www\\.brusheezy\\.com/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"insertBefore":"id(\"navright\")",
"pageElement":"//div[contains(@class,\"content\")]",
"url":"^http://www\\.citeulike\\.org/",
"nextLink":"//div[contains(@class,\"content\")]/table/tbody/tr/td/b/a"
},
{
"pageElement":"//div[@class=\"imagegallery2\"] ",
"url":"^http://cyanatrendland\\.com/ ",
"nextLink":"//div[@class=\"wp-pagenavi\"]/a[last()-1] "
},
{
"insertBefore":"//p[@class=\"sort bottom\"]",
"pageElement":"//table[@class=\"list\"]",
"url":"^http://www\\.askul\\.co\\.jp/",
"nextLink":"//a[@class=\"linkArrowRR\"][last()]"
},
{
"pageElement":"id(\"quotes\")",
"url":"^http://bash\\.org\\.ru/comics",
"nextLink":"//a[text()=\"\u2190\"]"
},
{
"pageElement":"id(\"articleText\")/*",
"url":"^http://dsc\\.discovery\\.com/",
"nextLink":"id(\"pagination\")/div/a[@class=\"nextprev\" and contains(text(),\"Next\")]"
},
{
"pageElement":"//div[@class=\"article\"]|//div[@class=\"tags\"]|//div[@class=\"article-meta clearfix\"]",
"url":"^http://(?:[^.]+\\.)?nnm\\.ru/",
"nextLink":"//span[@class=\"next\"]/a"
},
{
"insertBefore":"id(\"footer\")",
"pageElement":"id(\"comic\")",
"url":"^http://www\\.abominable\\.cc/",
"nextLink":"//div[@class=\"nav\"]/a[contains(text(),\"Next\")]"
},
{
"pageElement":"id(\"main\")/div[@class=\"entry\"][./div[@class=\"inner\"]/div[@class=\"entry_title\"]]",
"url":"^http://macholic\\.jugem\\.jp/",
"nextLink":"id(\"main\")/*[last()][self::div and @class=\"entry\"]/div[@class=\"entry_navi\"]/a[contains(.,\">>\")]"
},
{
"pageElement":"id(\"PageBodyMain\")/div[@class=\"NewsRank\"]/ol",
"url":"^http://www\\.2nn\\.jp/search/",
"nextLink":"id(\"SearchNavi\")/a[contains(., \">\")]"
},
{
"pageElement":"id(\"main\")",
"url":"^http://blog\\.makezine\\.com/",
"nextLink":"id(\"main\")/div[@class=\"box\"]/div/a[last()]"
},
{
"pageElement":"id(\"beta-inner\")/div[contains(concat(\" \", @class, \" \"), \" entry \")]",
"url":"^http://satoshi\\.blogs\\.com/",
"nextLink":"//span[@class=\"pager-right\"]/a"
},
{
"pageElement":"id(\"MovieListBox\")|id(\"MovieListBox\")/following-sibling::br",
"url":"^http://[^.]+\\.miterew\\.com/",
"nextLink":"id(\"pagenationnum_top\")/a[@class=\"paging_next\"]"
},
{
"pageElement":"id(\"posts\")/li",
"url":"^http://www\\.davidslog\\.com/",
"nextLink":"id(\"pagination\")/a[contains(text(),\"\u2192\")]"
},
{
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://usami-mi\\.jugem\\.jp/",
"nextLink":"/descendant::a[contains(., \"old\")][last()]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" center-itemlist \")]/*",
"url":"^http://web\\.meet-i\\.com/\\?",
"nextLink":"//li[contains(concat(\" \", @class, \" \"), \" current \")]/following-sibling::li[1]/a"
},
{
"pageElement":"id(\"resultBaidu\")/div[@class=\"blog\"]",
"url":"^http://blog\\.baidu\\.jp/s\\?",
"nextLink":"id(\"pg\")/a[@class=\"nx\"]"
},
{
"pageElement":"id(\"view-detail view-simple picture-content member-wrapper recent-photo mycure-simpleview guestbook-body\") | id(\"album-view-simple album-view-list recent-photos recent-diary-list schedule-content\")/table",
"url":"^http://[^.]+\\.curecos\\.com/",
"nextLink":"//li[@class=\"next\"]/a | //a[@class=\"next-navi\"]"
},
{
"pageElement":"id(\"ntwk\")/div",
"url":"^http://search\\.about\\.com/",
"nextLink":"//span[@class=\"cp\"]/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"post\"]",
"url":"^http://www\\.j-tokkyo\\.com/",
"nextLink":"id(\"content\")/a[contains(text(),\"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"//div[@class=\"post_header\" or @class=\"post_body\" or @class=\"post_uppers\"]",
"url":"^http://[^.]+\\.mopoto\\.com/",
"nextLink":"id(\"previous_page\")"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" story_body \")]/*|id(\"filter_results\")/div/table|//table[@class=\"board_topics\"]|id(\"forum_topic_msgs\")",
"url":"^http://www\\.gamespot\\.com/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id(\"content\")/div[contains(@class,\"tweet\")]",
"url":"^http://twitter\\.memol\\.us/",
"nextLink":"//a[contains(concat(\" \",@class,\" \"),\" next_page \")]"
},
{
"pageElement":"id(\"content\")/div[@class=\"apost\"]",
"url":"^http://\\w+\\.engrish\\.com/",
"nextLink":"id(\"content\")//li[@class=\"prev\"]/a"
},
{
"pageElement":"//div[@class=\"story-text\"]",
"url":"^http://www\\.politico\\.com/",
"nextLink":"//ul[@class=\"pagination\"]/li[@class=\"current\"]/following-sibling::li[1]/a"
},
{
"pageElement":"//table[@background=\"Images/fondo_02.jpg\"]",
"url":"^http://www\\.espalnds\\.com/",
"nextLink":"//a[@class=\"pagi_pv\" and position()=last()]"
},
{
"pageElement":"//*[contains(concat(\" \", @class, \" \"), \" hentry \")]",
"url":"^.+://[^/]+\\.tumblr\\.com/.*",
"nextLink":"//link[contains(concat(\" \", translate(normalize-space(@rel),\"NEXT\",\"next\"), \" \"), \" next \")] | //a[contains(concat(\" \", translate(normalize-space(@rel),\"NEXT\",\"next\"), \" \"), \" next \")]"
},
{
"pageElement":"id(\"content\")/div[2]",
"url":"^http://pcpp\\.jp/search/list",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"files\")/*",
"url":"^http://gist\\.github\\.com/.",
"nextLink":"//a[@hotkey=\"l\"]"
},
{
"pageElement":"//table[tbody/tr/td[text()=\"Name\"]] | //table[tbody/tr/td/a[text()=\"Name\"]]",
"url":"^https?://[^?#]+/browse\\.php",
"nextLink":"//a[starts-with(b/text(), \"Next\")]"
},
{
"pageElement":"id(\"content\")//div[contains(concat(\" \", @class, \" \"), \" post \")]",
"url":"^http://macguffin\\.sub\\.jp/",
"nextLink":"//span[@class=\"older\"]/a"
},
{
"insertBefore":"id(\"NewsDetail\")/div[@class=\"PageNavigation\"]",
"pageElement":"id(\"NewsDetail\")/div[@class=\"TextArea\"]",
"url":"^http://www\\.sankeibiz\\.jp/",
"nextLink":"id(\"NewsDetail\")/div[@class=\"PageNavigation\"]/ul/li[last()]/a"
},
{
"insertBefore":"id(\"content\")/div[last()]",
"pageElement":"id(\"content\")/div[@class=\"blog\"]",
"url":"^http://[^.]+\\.seesaa\\.net/",
"nextLink":"id(\"content\")/div[@class=\"navi\"]/a[contains(text(), \">>\")]"
},
{
"pageElement":"id(\"divChartVideos\")/*",
"url":"^http://vids\\.myspace\\.com/",
"nextLink":"//div[@class=\"nextWrapper\"]/a"
},
{
"pageElement":"//div[@class=\"rightColumnAreaCnt\"]|//div[@id=\"Contents\" and count(child::div[@class=\"entryBody\"]) > 0]/*[contains(@class, \"entry\")]|//div[@class=\"entryWrapper\"]",
"url":"^http://blog\\.kcg\\.ne\\.jp/",
"nextLink":"//div[@class=\"pager\"]/a[contains(child::text(), \">>\")]"
},
{
"pageElement":"id(\"content\")/div[@class=\"content-block\"]/div[starts-with(@id, \"post\")]",
"url":"^http://www\\.wowebook\\.com/",
"nextLink":"id(\"content\")/div[@class=\"content-block\"]/div[@class=\"wpmn_page_navi\"]/span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"//dl",
"url":"^https?://[^?]+?/namazu\\.cgi",
"nextLink":"//strong[text()=\"Page:\" or text()=\"\u30da\u30a4\u30b8:\"]/following-sibling::strong/following-sibling::a[1]"
},
{
"pageElement":"id(\"the_body\")/p",
"url":"^http://www\\.alternet\\.org/",
"nextLink":"id(\"the_body\")/div[@class=\"paging_options\"]//li[@class=\"last_option\"]/a"
},
{
"pageElement":"id(\"content\")/*",
"url":"^http://initial-kurita\\.com/",
"nextLink":"id(\"content\")/div[@class=\"navi\"]/a[contains(.,\">>\") and not(following::div/@class=\"navi\") or .=\"<<\" and following::div[@class=\"navi\"][2]/a[last()]!=\">>\"]"
},
{
"pageElement":"//div[a/@id='top']",
"url":"^http://www\\.ds-scene\\.net/",
"nextLink":"//td[contains(text(),'\u203a')]"
},
{
"insertBefore":"id(\"pager_bottom\")",
"pageElement":"//ol[2]",
"url":"^http://a\\.hatena\\.ne\\.jp/",
"nextLink":"id(\"pager_bottom\")/a[@class=\"navi_next\"]"
},
{
"pageElement":"//table[@class=\"table-list\"]/tbody/tr",
"url":"^http://i\\.hatena\\.ne\\.jp/",
"nextLink":"//div[@class=\"pager-r\"]/a[starts-with(text(), \"\u6b21\u306e\")]"
},
{
"pageElement":"//div[@class=\"ldb-entryies\"]",
"url":"^http://blog\\.lovedol\\.net/",
"nextLink":"//div[@class=\"back-entries\"]/a"
},
{
"insertBefore":"id(\"main\")/div[@class=\"pager\"]",
"pageElement":"id(\"main-body\")",
"url":"^http://r\\.hatena\\.ne\\.jp/",
"nextLink":"id(\"next_page\")"
},
{
"pageElement":"//div[@class=\"post\"]",
"url":"^http://www\\.kirainet\\.com/",
"nextLink":"//div[@class=\"navigation\"]/div[@class=\"left\" or @class=\"main\"]/a"
},
{
"pageElement":"//ul[@class=\"fotolist\"] | //div[@class=\"foto-body\"]",
"url":"^http://f\\.hatena\\.ne\\.jp/",
"nextLink":"//a[text()=\"next>\"]"
},
{
"pageElement":"id(\"main\")//div[@class=\"node\"]",
"url":"^http://archive\\.treet\\.tv/",
"nextLink":"id(\"main\")//div[@class=\"pager\"]/a[contains(., \"next\")]"
},
{
"pageElement":"//div[@class=\"page-controls\"]/following-sibling::*[./following-sibling::div[@class=\"page-controls\"]]",
"url":"^http://db\\.tigsource\\.com/",
"nextLink":"//div[@class=\"page-controls\"]/a[contains(., \"Next\")]"
},
{
"pageElement":".//div[@class=\"post_item clearfix\"]",
"url":"^http://pornrapidshare\\.com/",
"nextLink":".//div[contains(@class,\"paginator\")]/a[contains(text(),\"Next\")]"
},
{
"pageElement":"id(\"dle-content\")/div[@class=\"shortdiv\"]",
"url":"^http://www\\.infanata\\.org/",
"nextLink":"id(\"dle-content\")/div[@class=\"navigation\"][1]/a[text()=\"\u0412\u043f\u0435\u0440\u0435\u0434\"]"
},
{
"pageElement":"id(\"threadslist\")/tbody[@id]/tr|id(\"lastpost\")/preceding-sibling::*",
"url":"^http://www\\.fanforum\\.com/",
"nextLink":"//div[@class=\"pagenav\"]//a[contains(., \">\")]"
},
{
"pageElement":"id(\"listPhoto\")/ul",
"url":"^http://www\\.ashinari\\.com/",
"nextLink":"id(\"listPhoto\")/div[@class=\"container-pagelinks\"]/p/a[./img[@class=\"btn_pagenum_next\"] or contains(., \">\")]"
},
{
"pageElement":"id(\"albums images\")/*",
"url":"^http://pigmag\\.com/gallery/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"archive\")/div[contains(concat(\" \", @class, \" \"), \" archive_post \")]|id(\"article\")/span[@class=\"text\"]/*",
"url":"^http://www\\.king-mag\\.com/",
"nextLink":"id(\"archive\")/div[contains(concat(\" \", @class, \" \"), \" archive_nav \")]//a[contains(., \"Previous\")]|id(\"page-links\")/p/a[number()>position()][1]"
},
{
"pageElement":"//div[@class=\"ArticleText\"]/ul[./li/a[contains(., \"Next\")]][last()]/preceding-sibling::*[not(self::ul and ./li/a[contains(., \"Previous\")])]",
"url":"^https?://lwn\\.net/Articles/",
"nextLink":"(//div[@class=\"ArticleText\"]/ul/li/a[contains(., \"Next\")])[last()]"
},
{
"pageElement":"//table[@class=\"MB_BL_TBblock\" or @class=\"MB_LIdata\" or @class=\"MB_SCN_TB\"]/ancestor::tr[1]",
"url":"^http://www\\.itoyokado\\.jp/",
"nextLink":"//a[starts-with(text(),\"\u6b21\u306e\")]"
},
{
"insertBefore":"id(\"contents\")/div[@class=\"internalBlock\"]/div/form/a[last()]",
"pageElement":"id(\"contents\")/div[@class=\"internalBlock\"]/div/form/table",
"url":"^http://tv\\.yahoo\\.co\\.jp/",
"nextLink":"id(\"contents\")/div[@class=\"internalBlock\"]/div/form/a[last()]"
},
{
"insertBefore":"id(\"resultsCol\")/div[@class=\"pagination\"]",
"pageElement":"id(\"resultsCol\")/div[@class=\"row\"]",
"url":"^http://[^.]+\\.indeed\\.com/",
"nextLink":"id(\"resultsCol\")/div[@class=\"pagination\"]/b/following-sibling::a[1]"
},
{
"pageElement":"id(\"content\")/table[@class=\"maintable\"][1]",
"url":"^http://www\\.mininova\\.org/",
"nextLink":"//li[@class=\"current\"]/following-sibling::li[1]/a"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" OneMsg \")]|id(\"ChannelIndex\")/*|//ul[@class=\"user_list\" or @class=\"UserList\"]",
"url":"^https?://wassr\\.(?:com|jp)/",
"nextLink":"id(\"PagerNextLink\")"
},
{
"pageElement":"id(\"content\")/*",
"url":"^http://www\\.netoshin\\.com/",
"nextLink":"id(\"next\")"
},
{
"pageElement":"id(\"content\")/div[starts-with(@id, \"post\")]",
"url":"^http://www\\.textdrop\\.net/",
"nextLink":"//span[@class=\"previous\" or @class=\"previous-entries\"]/a"
},
{
"pageElement":"//div[@class=\"story\"]",
"url":"^http://www\\.newsweek\\.com/",
"nextLink":"//a[text()=\"Next Page \u00bb\"]"
},
{
"pageElement":".//div[@class=\"entry\"]",
"url":"^http://scenereleases\\.info/",
"nextLink":".//div[@class=\"wp-pagenavi\"]/span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"table1\")/tbody/tr",
"url":"^http://(?:www\\.)?wpdb\\.de/",
"nextLink":"//a[@class=\"selected\"]/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"main-center\"]/div[not(@style=\"font-size: 10pt; text-align: center;\")]",
"url":"^http://[^.]+\\.cscblog\\.jp/",
"nextLink":"//div[@style=\"font-size: 10pt; text-align: center;\"]/a[starts-with(text(), \"\u6b21\u3078\")]"
},
{
"pageElement":"//div[@class=\"content_box\"]",
"url":"^http://www\\.voiceblog\\.jp/",
"nextLink":"//div[@class=\"content_next\"]/a"
},
{
"pageElement":"//div[@class=\"list_item\"]",
"url":"^http://www\\.all4divx\\.com/",
"nextLink":"//div[@class=\"movie_row_nav\"]//a[contains(., \">\")]"
},
{
"pageElement":"//div[@class=\"articleBody\"]",
"url":"^http://www\\.techradar\\.com",
"nextLink":"//a[span=\"Next\"]"
},
{
"pageElement":"//ul[@class=\"pagination\"]/preceding-sibling::div[@class=\"post_content\"]",
"url":"^http://www\\.engadget\\.com/",
"nextLink":"//li[@class=\"older\"]/a"
},
{
"pageElement":"id(\"parkAndCompareVehicle\")/*",
"url":"^http://suchen\\.mobile\\.de/",
"nextLink":"id(\"pagination\")//div[@class=\"controls\"]/strong/following-sibling::a[1]"
},
{
"pageElement":".//table[@class=\"maintable\"]",
"url":"^http://www\\.filecrop\\.com/",
"nextLink":".//td/a[contains(text(),\"Next\")]"
},
{
"pageElement":"id(\"column-left\")//div[contains(concat(\" \", @class, \" \"), \" teaser \")]",
"url":"^http://www\\.holytaco\\.com/",
"nextLink":"id(\"column-left\")//div[@class=\"item-list\"]/ul/li[@class=\"pager-next\"]/a"
},
{
"pageElement":"id(\"cColContent\")",
"url":"^http://[a-z]+\\.hexus\\.net/",
"nextLink":"//td[@class=\"nextPage\"]/a"
},
{
"pageElement":"//td[@class=\"main\"]/div[@class=\"binder_data\"]",
"url":"^http://mediamarker\\.net/u/.",
"nextLink":"//div[@class=\"navi_binder\"]/a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"content\")/div[not(@class=\"post-nav\")]",
"url":"^http://upsidedowndogs\\.com/",
"nextLink":"id(\"content\")/div[@class=\"post-nav\"]//a[contains(., \"Next\")]"
},
{
"pageElement":"//b[@class=\"n\"]/ancestor::p[1]/preceding-sibling::*",
"url":"^http://(?:www\\.)?rara\\.jp/",
"nextLink":"//b[@class=\"n\"]/following-sibling::a[@class=\"n\"][1]"
},
{
"pageElement":"id(\"article_container\")/*|id(\"channel-nodes channel-blog-nodes\")/*[not(@class=\"blog-ad\" or @class=\"item-list\")]|id(\"gsearch_blitt gsearch_box\")/following-sibling::div[@class=\"list_item\"]",
"url":"^http://www\\.observer\\.com/",
"nextLink":"id(\"main_content\")/div[contains(concat(\" \", @class, \" \"), \" article_paging \")]/a[not(position()=normalize-space())][1]|//li[@class=\"pager-next\"]/a"
},
{
"pageElement":"id(\"cnetReview\")/div[contains(concat(\" \", @class, \" \"), \" listNav \")]/preceding-sibling::*",
"url":"^http://reviews\\.cnet\\.com/",
"nextLink":"id(\"cnetReview\")/div[contains(concat(\" \", @class, \" \"), \" listNav \")]/ul[@class=\"pagination\"]//a[contains(., \"next\")]"
},
{
"pageElement":"id(\"main-content\")",
"url":"^http://www\\.idollook\\.com/",
"nextLink":"//strong[@class=\"on\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"body\")/div[contains(concat(\" \", @class, \" \"), \" view \")]",
"url":"^http://book\\.cakephp\\.org/",
"nextLink":"id(\"body\")/div[@class=\"node-nav\"]/span[@class=\"next\"]/a"
},
{
"insertBefore":"id(\"contentFooter\")",
"pageElement":"id(\"contentBody\")",
"url":"^http://[^.]+\\.pixnet\\.net/",
"nextLink":"//a[@class=\"pageNext\"]"
},
{
"pageElement":"//div[@class=\"thumn-line\"]",
"url":"^http://www\\.nicovide\\.jp/.",
"nextLink":"//ul[@class=\"navi\"]/following-sibling::h4/a"
},
{
"pageElement":"id(\"Catalog1\")",
"url":"^http://www\\.metacafe\\.com/",
"nextLink":"id(\"Next\")/a"
},
{
"pageElement":"id(\"flip2\")/preceding-sibling::div",
"url":"^http://www\\.100shiki\\.com/",
"nextLink":"id(\"flip2\")/li[@class=\"older\"]/a"
},
{
"insertBefore":"//a[@class='cT-articleMore']",
"pageElement":"//div[@class='articleBody']",
"url":"^http://www\\.smh\\.com\\.au/",
"nextLink":"//a[@class='cT-articleMore']"
},
{
"pageElement":"id(\"article_body\")",
"url":"^http://thinkit\\.jp/article/",
"nextLink":"(//*[@class=\"article_page\"]//a)[last() and contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"id(\"newly-arrived-bbs-box\")/table[@class=\"question-table\"]",
"url":"^http://www\\.phppro\\.jp/qa/",
"nextLink":"id(\"newly-arrived-bbs-box\")/div[@class=\"pager-nav-box\"]//a[contains(., \">\")]"
},
{
"pageElement":"//div[@class=\"blog\"]",
"url":"^http://[^.]+\\.slmame\\.com/",
"nextLink":"id(\"content\")/div[@class=\"blog\"]/div[@class=\"blogbody\"]/div[@class=\"posted\"]/div[@class=\"menu\"]/a[@class=\"amenu\" and (position()=2)]"
},
{
"insertBefore":"id(\"content\")/div[@class=\"blog\"]/div[@class=\"menu\"]",
"pageElement":"id(\"content\")/div[@class=\"blog\"]",
"url":"^http://[^.]+\\.slmame\\.com/",
"nextLink":"id(\"content\")/div[@class=\"blog\"]/div[@class=\"menu\"]/a[last()]"
},
{
"pageElement":"//table[@class=\"infotable\"]/following-sibling::table[./following-sibling::table[@class=\"infotable\"]]",
"url":"^http://freerangestock\\.com/",
"nextLink":"//span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"gallery\")/div[@class=\"thumbs\"]|id(\"wp_page_numbers\")/preceding-sibling::div[@class=\"clear\"][1]'",
"url":"^http://123freevectors\\.com/",
"nextLink":"id(\"wp_page_numbers\")/ul/li[@class=\"active_page\"]/following-sibling::li[1]/a"
},
{
"pageElement":"id(\"mainBlock\")",
"url":"^http://www\\.phileweb\\.com/",
"nextLink":"id(\"pagenext\")/a"
},
{
"pageElement":"//*[contains(concat(\" \",@class,\" \"), \" itg \")] | //div[contains(concat(\" \",@class,\" \"), \" ido \")]/table[2] | id(\"gtt\") | //div[contains(@class,\"ssb\")]/*[@style or @href or @class=\"if\"]",
"url":"^http://gm?\\.e-hentai\\.org/",
"nextLink":"//a[normalize-space()=\">\"] | //div[contains(@class,\"ssb\")]/a"
},
{
"pageElement":"//div[@class=\"gradient\"]",
"url":"^http://www\\.tappgala\\.com/",
"nextLink":"//ol[@class=\"wp-paginate\"]/li/a[@class=\"next\"]"
},
{
"pageElement":"id(\"Center\")/div[contains(@class,\"tryBox\")]|//td[preceding-sibling::td[@class=\"sidebar\"] and following-sibling::td[@class=\"sidebar\"]]/table[position()<last()]|//table[@class=\"entry\"]",
"url":"^http://www\\.zkaiblog\\.com/",
"nextLink":"//a[normalize-space(text())=\"\u6b21\u3078\"]"
},
{
"pageElement":"//div[@class=\"cl_product_node\" or @class=\"cl_float_clear\"]",
"url":"^http://www\\.monotaro\\.com/",
"nextLink":"//div[@class=\"cl_page_selector\"]/b/following-sibling::a[1]"
},
{
"pageElement":"//div[contains(concat(\" \",normalize-space(@class),\" \"),\" container \")]/div[not(contains(concat(\" \",normalize-space(@class),\" \"),\" header \") or contains(concat(\" \",normalize-space(@class),\" \"),\" footer \") or contains(concat(\" \",@class,\" \"),\" last \"))]",
"url":"^http://book\\.git-scm\\.com/",
"nextLink":"//div[@class=\"nav\"]/a[normalize-space(text())=\"Next\"]"
},
{
"pageElement":"id(\"squeeze\")/div[@class=\"node\"]|id(\"project-overview\")/div[contains(concat(\" \", @class, \" \"), \" project-item \")]",
"url":"^http://drupal\\.org/project/",
"nextLink":"//li[@class=\"pager-next\"]/a"
},
{
"pageElement":"//div[@class=\"article_body\"]",
"url":"^http://media\\.yucasee\\.jp/",
"nextLink":"//li[@class=\"nextback\"]/a[contains(text(), \"\u6b21\u3078 >\")]"
},
{
"pageElement":".//div[@class='blog-posts hfeed']",
"url":"^http://cd\\.tamahobby\\.com/",
"nextLink":"id('blog-pager-older-link')/a[contains(@title,'\u524d\u306e\u6295\u7a3f')]"
},
{
"pageElement":"id('SelectAristByGenre')/div[@class='ListingRow1' or @class='ListingRow2']",
"url":"^http://www\\.mp3\\.com\\.au/",
"nextLink":".//li[@class='LHPagingSelected']/following-sibling::li[1]/a[1]"
},
{
"pageElement":"id(\"main\")//div[@class=\"homeContent\"]/parent::div",
"url":"^http://www\\.ajaxrain\\.com/",
"nextLink":"id(\"main\")//img[@src=\"images/next.gif\"]/parent::a"
},
{
"pageElement":".//td[@width='630' and @valign='top']//table[@cellspacing='0' and @cellpadding='13' and @border='0' and @width='100%']",
"url":"^http://www\\.tubeseek\\.com/",
"nextLink":".//tr[@class='tr_page_numbers']/td/a[contains(text(),'Next')]"
},
{
"pageElement":"id(\"content-body\")",
"url":"^http://rozen\\.sync2ch\\.cc/",
"nextLink":"id(\"roozen-next\")/a"
},
{
"pageElement":"id(\"shouhinlist\")/form[@name=\"listForm\"]/table",
"url":"^http://shop\\.kitamura\\.jp/",
"nextLink":"id(\"shouhinlist\")/descendant::a[.=\"\u6b21\u3078\"][1]rn"
},
{
"pageElement":"//ul[@class=\"theme_list\"]",
"url":"^http://cmsthemefinder\\.com/",
"nextLink":"//div[@class=\"next\"]/a"
},
{
"pageElement":"id(\"main\")/*",
"url":"^http://(.*)?tweetmeme\\.com/",
"nextLink":"id(\"main\")//div[contains(concat(\" \", @class, \" \"), \" pagination \")]/a[contains(concat(\" \", @title, \" \"), \" Next \")]"
},
{
"pageElement":"id(\"result\")/tbody/tr",
"url":"^http://www\\.bestgate\\.net/",
"nextLink":"id(\"main\")/div[@class=\"page_link_top\"]/b/following-sibling::a[1]"
},
{
"pageElement":"id(\"left-col\")/div[@class=\"content\"]",
"url":"^http://bestwebgallery\\.com/",
"nextLink":"//span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"gsArticle\")/node()|//div[@class=\"pager\"]/preceding::dl[./dt/a][1]/../dl",
"url":"^http://allabout\\.co\\.jp/.",
"nextLink":"//div[@class=\"next\"]//a"
},
{
"pageElement":"//div[@id=\"m2\"]",
"url":"^http://bara\\.blue12\\.net/",
"nextLink":"//div[@id=\"dt3\"]/a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"//ul[@class=\"SRList01\"]",
"url":"^http://search\\.naver\\.jp/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id(\"left\")/div[@class=\"entry\"]",
"url":"^http://www\\.moongift\\.jp/",
"nextLink":"id(\"left\")/div[@class=\"navigation\"]/div[@class=\"alignright\"]/a"
},
{
"pageElement":"//div[starts-with(@id, \"list_\")]/parent::div/*",
"url":"^http://interfacelift\\.com/",
"nextLink":"//a[@class=\"selector\" and contains(., \">\")]"
},
{
"pageElement":"id(\"contentsInner\")/div[@class=\"entry\"]'",
"url":"^http://bm\\.s5-style\\.com/",
"nextLink":"//div[@class=\"wp-pagenavi\"]/a[contains(text(),\"\u00bb\")]'"
},
{
"pageElement":"//div[@class=\"pagination\"][1]/following-sibling::*[./following-sibling::div[@class=\"pagination\"]]",
"url":"^http://www\\.userbars\\.be/",
"nextLink":"//span[@class=\"here\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"single\")/div[@class=\"orange_more\"]/preceding-sibling::*[./preceding-sibling::h5]|//table[@class=\"archives\"]/tbody/tr",
"url":"^http://www\\.xconomy\\.com/",
"nextLink":"id(\"single\")/div[@class=\"orange_more\"]/a[./img[contains(@alt, \"Next\")]]|//table[@class=\"archives\"]/tfoot/tr/td/a[contains(., \"\u00bb\")]"
},
{
"pageElement":"//div[@class=\"content MT\"]",
"url":"^http://www\\.cracked\\.com/",
"nextLink":"//a[text()=\"Next\"]"
},
{
"insertBefore":"//div[@class=\"paging\"]",
"pageElement":"//ul[@class=\"stream\"]",
"url":"^http://[^.]+\\.jaiku\\.com/",
"nextLink":"//div[@class=\"paging\"]/a[last()]"
},
{
"pageElement":"id(\"main\")/div[contains(@class,\"section\")]",
"url":"^http://blog\\.kyosuke\\.jp/",
"nextLink":"//li[contains(concat(\" \",@class,\" \"),\" older \")]/a"
},
{
"pageElement":"//div[@class=\"HomepageblockOneImage\"]/parent::div|//div[@class=\"SearchLine\"]",
"url":"^http://www\\.shufuni\\.com/",
"nextLink":"(//a[@class=\"activePage\"]|//b[@class=\"selectedPage\"])/following-sibling::a[1]"
},
{
"insertBefore":"id(\"footer\")",
"pageElement":"id(\"comic\")",
"url":"^http://mulele\\.com/comics/",
"nextLink":"//div[@class=\"nav\"]/a[last()]"
},
{
"pageElement":"id(\"contentBody\")/node()[./preceding-sibling::div[@class=\"storyMedia\"] and ./following-sibling::div[contains(concat(\" \", @class, \" \"), \" contBox \")]]",
"url":"^http://www\\.cbsnews\\.com/",
"nextLink":"id(\"contentBody\")//li[@class=\"next\"]/a"
},
{
"pageElement":"//ul",
"url":"^https?://m\\.twitter\\.com/",
"nextLink":"//a[@accesskey=\"6\"]"
},
{
"pageElement":".//div[@class=\"white-back\" or @class=\"channel-one\"]",
"url":"^http://(?:www\\.)?b92\\.fm/",
"nextLink":".//div[@class=\"next-active\"]/a"
},
{
"pageElement":"//table[@class=\"blog\"]/tbody/tr[position()<3]",
"url":"^http://www\\.slpulse\\.com/",
"nextLink":"//a[@title=\"Next\"]"
},
{
"pageElement":"id(\"_____01\")/../*",
"url":"^http://gdp\\.ms/chintai/pc/",
"nextLink":"id(\"Image32\")/parent::a"
},
{
"pageElement":"id(\"annaininBG\")/p[2]",
"url":"^http://allatanys\\.jp/B001/",
"nextLink":"id(\"movePage\")/ul/li[contains(concat(\" \",@class,\" \"), \" on \")]/following-sibling::*[1][self::li]/a"
},
{
"pageElement":"//div[@class=\"delform\"]/preceding-sibling::hr[1]/preceding-sibling::*",
"url":"^http://[^.]+\\.2chan\\.net/",
"nextLink":"//form[@action=\"futaba.php\"]/following-sibling::table[@align=\"left\"]//b/following-sibling::a[1]"
},
{
"pageElement":"id(\"pagination\")/preceding-sibling::*",
"url":"^http://www\\.esquire\\.com/",
"nextLink":"id(\"page_next\")/parent::a"
},
{
"pageElement":"//div[@class=\"boxBody\"]/div[@class=\"thickline_box\"]",
"url":"^http://www\\.jognote\\.com/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//div[@align=\"right\"]/following-sibling::*[following-sibling::a[text()=\"[\u623b\u308b]\"]]|//table/tbody/tr/td/*[following-sibling::a[text()=\"[\u623b\u308b]\"]]",
"url":"^http://m-pe\\.tv/u/m/album/",
"nextLink":"//a[@accesskey=\"#\"]"
},
{
"pageElement":"//div[@class=\"app-box\"]",
"url":"^http://www\\.apptism\\.com/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"insertBefore":"//div[contains(@class, 'pagination')]",
"pageElement":"//div[div[@id='articleText']]",
"url":"^http://www\\.pcworld\\.com/",
"nextLink":"//a[contains(translate(text(), 'next', 'NEXT'), 'NEXT')]"
},
{
"pageElement":"//div[@class=\"chapter-container\"]",
"url":"^http://dzfl\\.tumblr\\.com/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"cnnSCFontButtons\")/following-sibling::*[not(@class=\"cnnPagination\")]",
"url":"^http://[^.]+\\.cnn\\.com/rn",
"nextLink":"//div[@class=\"cnnContinue\"]//a"
},
{
"pageElement":"id(\"content\")",
"url":"^http://www\\.joystiq\\.com/",
"nextLink":"//a[@class=\"next-page\" and text()=\"Next Page\"]"
},
{
"pageElement":"//div[@class=\"post\"]",
"url":"^http://www\\.appbank\\.net/",
"nextLink":"//a[@class=\"nextpostslink\"]"
},
{
"pageElement":"id(\"alpha-inner\")",
"url":"^http://www\\.hiroike\\.com/",
"nextLink":"//link[@rel=\"prev\"]"
},
{
"pageElement":"id(\"maintable\")//div[@class=\"post\"]",
"url":"^http://blog\\.waybig\\.com/",
"nextLink":"id(\"maintable\")//a[contains(concat(\" \", @class, \" \"), \" next \")]"
},
{
"pageElement":"//form[@action=\"/servlet/Delete\"]",
"url":"^http://i-bbs\\.sijex\\.net/",
"nextLink":"//table//td[@class=\"normal\"]//b[text()=\"\uff1e\"]/parent::a"
},
{
"pageElement":"//hr[1]/following-sibling::node()[following-sibling::hr]",
"url":"^http://www\\.lua\\.org/pil/",
"nextLink":"//img[@alt=\"Next\"]/.."
},
{
"insertBefore":"//form[@name=\"form2\"]",
"pageElement":"id(\"contents\")//div[@class=\"goods\"]",
"url":"^http://www\\.hmv\\.co\\.jp/",
"nextLink":"id(\"contents\")//p[@class=\"nextPage\"]/a"
},
{
"pageElement":"id(\"main\")//div[@class=\"article-text\"]/*|id(\"main\")/div[@class=\"results\"]",
"url":"^http://www\\.details\\.com/",
"nextLink":"id(\"main\")//a[@class=\"paginationNext\"]"
},
{
"pageElement":"id(\"entries\")",
"url":"^http://blog\\.volume2\\.jp/",
"nextLink":"//ul[@class=\"pageBute\"]/li[@class=\"nextBtn\"]/a"
},
{
"pageElement":"id(\"alpha-inner\")/div[@class=\"entry-asset\"]",
"url":"^http://(www\\.)?cyzo\\.com/",
"nextLink":"id(\"alpha-inner\")/div[@class=\"content-nav\"]/a[contains(., \"\u00bb\")]"
},
{
"insertBefore":"id(\"mainResult\")/p",
"pageElement":"id(\"generalResult\")",
"url":"^http://search\\.ameba\\.jp/",
"nextLink":"id(\"mainResult\")/div[@class=\"paging\"]/a[contains(@class,\"nextPage\")]"
},
{
"pageElement":"//h2/following-sibling::node()[following-sibling::address]",
"url":"^http://tabesugi\\.net/memo/",
"nextLink":"//p[@class=\"nav\"]/a[not(contains(@href,\"index\"))]"
},
{
"pageElement":"//table[@class=\"list\"]",
"url":"^http://www\\.infocart\\.jp/",
"nextLink":"//td[@class=\"normal\"]/a[last()]"
},
{
"insertBefore":"//table[@width=533]/td/div[last()-1]",
"pageElement":"//table[@width=533]//div[contains(@style, \"525px\") and contains(@style, \"padding: 0px\") or contains(@style, \"ber02\\.jpg\")]",
"url":"^http://www\\.naps-jp\\.com/",
"nextLink":"//div[@class=\"j10\"]/a[@title=\"next page\"]"
},
{
"pageElement":"//div[@class=\"tab\"]/following-sibling::p[contains(., \">\")][1]/following-sibling::*[./following-sibling::p[contains(., \">\")]]",
"url":"^http://www\\.abcgames\\.sk/",
"nextLink":"//div[@class=\"tab\"]/following-sibling::p/a[contains(., \">\")]"
},
{
"pageElement":"id(\"newswrap\")/div[@class=\"news-summary\"]",
"url":"^http://www\\.meneame\\.net/",
"nextLink":"id(\"newswrap\")/div[@class=\"pages-margin\"]/span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"codelist\"]",
"url":"^http://let\\.hatelabo\\.jp/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"left\")/li[contains(@class, \"story\")]",
"url":"^http://www\\.rssmeme\\.com/",
"nextLink":"//span[contains(concat(\" \", @class, \" \"), \" next \")]/a[last()]"
},
{
"pageElement":"id(\"XbcShellBody\")/div/table[@class=\"tableBorder\"]",
"url":"^http://forums\\.xbox\\.com/",
"nextLink":"id(\"ctl00_ctl00_ctl00_MainContent_PageContent_BodyContentRegion_PostFlatView_ctl00_Pager_Next\")"
},
{
"insertBefore":"//div[@class=\"in\"]/div[@class=\"ido\"]",
"pageElement":"//div[@class=\"in\"]/*[@class=\"btitle\" or @class=\"bitem\" or @class=\"more\" or @class=\"iitem\"]",
"url":"^http://zapanet\\.info/blog/",
"nextLink":"//div[@class=\"in\"]/div[@class=\"ido\"]/span[@class=\"next\"]/a"
},
{
"pageElement":"id(\"contentleft\")/div[@class=\"postarea\"]/*[not(@class=\"breadcrumb\" or (self::p and last()))]",
"url":"^http://www\\.tv-dome\\.net/",
"nextLink":"id(\"contentleft\")/div[@class=\"postarea\"]/p[last()]/a[contains(., \"Next\")]"
},
{
"pageElement":"id(\"gallery-row-list\")",
"url":"^http://www\\.behance\\.net/",
"nextLink":"id(\"gallery-right\")//a[.=\"Next\"]"
},
{
"pageElement":"id(\"pagination\")/preceding-sibling::*",
"url":"^http://www\\.youjizz\\.com/",
"nextLink":"id(\"pagination\")/span/following-sibling::a[1]"
},
{
"pageElement":"id(\"story-body\")",
"url":"^http://www\\.latimes\\.com/",
"nextLink":"//li[@class=\"next\"]/a[text()=\"next\"]"
},
{
"pageElement":"id(\"mainContents\")/div[contains(@class, \"contentsKijiSpace\")]",
"url":"^http://find\\.teacup\\.com/",
"nextLink":"id(\"mainContents\")/div[@class=\"searchPage\" and position()=3]/a[last()]"
},
{
"insertBefore":"id(\"editor\")/following-sibling::node()[last()]",
"pageElement":"id(\"thread_title_ext\")/following-sibling::*[./following-sibling::div[@id=\"thread_footer\"]]|id(\"thread_list\")|id(\"search_list\")/div[@class=\"user\"]|id(\"pager\")/preceding-sibling::*",
"url":"^http://tieba\\.baidu\\.com/",
"nextLink":"(//span[@class=\"tP\" or @class=\"current\"]|id(\"pager\")/text()[not(normalize-space()=\"\")])/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://www\\.web2null\\.de/",
"nextLink":"//div[@class=\"pagenavi\"]//span[@class=\"curpage\"]/following-sibling::a"
},
{
"pageElement":"id(\"updates\")/div[contains(@class,\"url\")]",
"url":"^http://www\\.browzmi\\.com/",
"nextLink":"//div[@class=\"next\"]/span/a"
},
{
"pageElement":"//div[@class=\"maintable\"]",
"url":"^http://bbs\\.runsky\\.com/?",
"nextLink":"//a[@class=\"p_redirect\"]//a[contains(., \"\u00bb\")]"
},
{
"pageElement":"//ul[@class=\"nf-videos\"]",
"url":"^http://www\\.pornhub\\.com/",
"nextLink":"//li[@class=\"active\"]/following-sibling::li[1]/a"
},
{
"pageElement":".//div[@class='listchannel']",
"url":"^http://www\\.wisevid\\.com/",
"nextLink":".//div[@class='pagingnav']/span[@class='pagingnav']/following-sibling::a[1]"
},
{
"pageElement":"id(\"main\")/div[1]/div[2]/ul",
"url":"^http://twicco\\.jp/channels",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"contents\")/div",
"url":"^http://wii\\.com/jp/.+/crv/",
"nextLink":"id(\"next_page_btn\")/a"
},
{
"pageElement":"id(\"story-body story-body2\")",
"url":"^http://www\\.newsday\\.com/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"photos\")/div[@class=\"thumb\"]",
"url":"^http://getawallpaper\\.com/",
"nextLink":"id(\"paging\")/li[@class=\"active\"]/following-sibling::li[./a]/a"
},
{
"pageElement":"//ul[@class=\"pipelist\"]",
"url":"^http://pipes\\.yahoo\\.com/",
"nextLink":"//a[starts-with(text(),\"Next\")]"
},
{
"pageElement":"id(\"main\")/div[contains(concat(\" \", @class, \" \"), \" section \")]",
"url":"^http://blog\\.nrpg-a\\.com/",
"nextLink":"id(\"main\")//a[@class=\"nextpostslink\"]"
},
{
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://garari\\.jugem\\.jp/",
"nextLink":"//div[@class=\"paging\"]/a[contains(text(), \"old\")]"
},
{
"pageElement":"id('content-left')//div[@class='entrytitle-container']/parent::div/parent::div",
"url":"^http://blog\\.iwa-ya\\.net/",
"nextLink":"//div[@class='wp-pagenavi']/span[@class='current']/following-sibling::a[1]"
},
{
"pageElement":"//table[@width=\"520\"]",
"url":"^http://mago\\.pepper\\.jp/",
"nextLink":"//a[img[@src=\"index-img/tonexticon.jpg\"]]"
},
{
"pageElement":"//table[@class=\"listing\"]",
"url":"^http://mangahelpers\\.com/",
"nextLink":"//a[@class=\"button\" and contains(., \"next\")]"
},
{
"pageElement":"//div[@class=\"day\"]",
"url":"^http://shinh\\.skr\\.jp/m/",
"nextLink":"//div[@class=\"adminmenu\"]//a[contains(text(),\"\u524d\")]"
},
{
"pageElement":"id(\"mixes_container\")",
"url":"^http://8tracks\\.com/mixes",
"nextLink":"id(\"content\")//a[@class=\"next_page\"]"
},
{
"pageElement":"//div[@class=\"titlebar\"][1]/following-sibling::div[./form[@name=\"nb\"]][1]/following-sibling::*[./following-sibling::div[@class=\"titlebar\"]]",
"url":"^http://www\\.dafont\\.com/",
"nextLink":"//span[@class=\"select\"]/following-sibling::a[1]"
},
{
"insertBefore":"//div[@class=\"bottom_pages\"]",
"pageElement":"//div[@class=\"description\"]",
"url":"^http://www\\.askmen\\.com/",
"nextLink":"//a[@class=\"nav_prev_next\" and starts-with(text(), \"Next\")]"
},
{
"pageElement":"id(\"main\")/div[contains(@class,\"section\")]",
"url":"^http://youtube-spot\\.com/",
"nextLink":"//div[@class=\"wp-pagenavi\"]/a[last()]"
},
{
"pageElement":"//div[@class=\"modules\"]",
"url":"^http://frepan\\.64p\\.org/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"principal principal2\")/table|id(\"content\")/div[@class=\"item\"]|id(\"content\")/div[@class=\"item\"]/following-sibling::br[1]",
"url":"^http://www\\.koreus\\.com/",
"nextLink":"//span[@class=\"current\"]/following-sibling::a[1]|id(\"content\")/div/a[./u[.=\"\u00bb\"]]"
},
{
"pageElement":"id(\"MCEntryBody\")",
"url":"^http://www\\.j-cast\\.com/",
"nextLink":"//span[@class=\"next\"]/a"
},
{
"pageElement":"//table[@class=\"catalog_row\"] | //table[@class=\"catalog_row\"]/following::div[1]",
"url":"^http://store\\.otaku\\.ru/",
"nextLink":"/descendant::table[@class=\"catalog_row\"][1]/preceding::p[1]/text()[starts-with( normalize-space(), \"[\" )]/following-sibling::a[1]"
},
{
"pageElement":"id(\"pagination\")/following-sibling::div[1]/*",
"url":"^http://japan\\.cnet\\.com/",
"nextLink":"id(\"pagination\")//li[@class=\"next\"]/a"
},
{
"pageElement":"//td[@colspan=\"6\"]/..",
"url":"^http://beta\\.vreel\\.net/",
"nextLink":"//a[contains(text(), \"next\")]"
},
{
"pageElement":"//div[@class=\"post\"]",
"url":"^http://www\\.health\\.com/",
"nextLink":"//div[@class=\"next-page-link\"]/a"
},
{
"pageElement":"id(\"content\")/*",
"url":"^http://api\\.jquery\\.com/",
"nextLink":"//link[@rel=\"next\"]"
},
{
"pageElement":"//div[@class=\"maintxt\"]",
"url":"^http://www\\.4gamer\\.net/",
"nextLink":"//div[@class=\"paging\"]/*[last()][self::a]"
},
{
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://blog\\.stco\\.info/",
"nextLink":"//div[@class=\"page\"]/a[last()]"
},
{
"pageElement":"id(\"content\")/div[@class=\"post\"]",
"url":"^http://pinktentacle\\.com/",
"nextLink":"id(\"content\")/div[@class=\"navigation_1\"]/div[@class=\"alignleft\"]/a"
},
{
"pageElement":"//table[@class=\"bigtable\"]",
"url":"^http://selenic\\.com/repo/",
"nextLink":"//div[@class=\"navigate\"]/a[.=\"-60\"]"
},
{
"pageElement":"id(\"main\")/div[h2]",
"url":"^http://www\\.hide10\\.com/",
"nextLink":"id(\"flip2\")/li[@class=\"older\"]/a|//a[contains(text(),'\u6b21\u3078\u00bb')]"
},
{
"pageElement":"id(\"article_body\")",
"url":"^http://www\\.avclub\\.com/",
"nextLink":"//a[text()=\"Next \u00bb\"]"
},
{
"pageElement":"id(\"spArticleColumn\")/*[not(following-sibling::p/@id=\"spIntroTeaser\")][not(preceding-sibling::div/@id=\"spMultiPagerHeadlines\")][not(@class=\"spPhotoGallery\")]",
"url":"^http://www\\.spiegel\\.de/",
"nextLink":"id(\"spMultiPagerControl\")/ul/li[@class=\"spMultiPagerLink\"]/a"
},
{
"pageElement":"//div[@class=\"plurk\"]",
"url":"^http://www\\.plurk\\.com/m",
"nextLink":"//div[@class=\"pagination\"]/a[last()]"
},
{
"pageElement":"//table[@class=\"MessageTableOut\"]/parent::div|//table[@class=\"MessageTableOut\"]/parent::div/following-sibling::p[1][not(node())]",
"url":"^http://[^.]+\\.oebit\\.jp/",
"nextLink":"//b[.=\"BACK\"]/parent::a"
},
{
"pageElement":"id(\"content\")/div[contains(concat(\" \", @class, \" \"), \" post \")]",
"url":"^http://nerdapproved\\.com/",
"nextLink":"//p[contains(concat(\" \", @class, \" \"), \" previous \")]/a"
},
{
"insertBefore":"//div[@class=\"pager\"][2]",
"pageElement":"//div[@class=\"dot_list\"]",
"url":"^http://favicon2dots\\.com/",
"nextLink":"//div[@class=\"pager\"][1]/a[@class=\"pager-next\"]"
},
{
"pageElement":"id(\"items miniNews\")/div[@class=\"item\"]|//table[@class=\"datatable\"]/tbody[starts-with(@id, \"normalthread\")]|id(\"postlist\")/*",
"url":"^https?://www\\.hkepc\\.com",
"nextLink":"//span[@class=\"active\"]/following-sibling::a[1]|//a[@class=\"next\"]"
},
{
"pageElement":"//table[@class=\"tbl_sl\"]",
"url":"^http://www\\.coneco\\.net/",
"nextLink":"//div[@class=\"txt06re\"]/a[last()]"
},
{
"pageElement":"id(\"contents-wrap\")/div[@class=\"statuses\"]",
"url":"^http://twiple\\.jp/status/",
"nextLink":"id(\"contents-wrap\")/div[@class=\"paging\"]/a[last()]"
},
{
"pageElement":"//div[@class=\"result_tag_body\"]/div[contains(concat(\" \",@class,\" \"),\" result_tag_box \")]",
"url":"http://search\\.zoome\\.jp/",
"nextLink":"//ul[@class=\"change_page_ul\"]/li[@class=\"next change_page_li\"]/a[starts-with(text(),\"\u25b6\")]"
},
{
"pageElement":"id(\"content\")/div[contains(@id,\"post-\")]",
"url":"^http://cuteoverload\\.com/",
"nextLink":".//div[@class=\"wp-pagenavi\"]/span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"content\")/div[not(@class=\"navigation\")]",
"url":"^http://www\\.asaeda\\.com/",
"nextLink":"id(\"content\")/div[@class=\"navigation\"]//a[contains(., \"\u524d\")]"
},
{
"pageElement":"id(\"feed\")/div | id(\"page\")//table[@class=\"usergrid\"]",
"url":"^https?://friendfeed\\.com/",
"nextLink":"id(\"page\")//div[contains(concat(\" \",@class,\" \"),\" pager \")]/a[last()]"
},
{
"pageElement":"id(\"table13\")",
"url":"^http://rapidlibrary\\.com/",
"nextLink":"//span[@class='now']/following-sibling::a[1]"
},
{
"pageElement":"id(\"content\")/div[@class=\"navlink\"]/preceding-sibling::*",
"url":"^http://www\\.irfree\\.com/",
"nextLink":"id(\"content\")/div[@class=\"navlink\"]/a[@class=\"nextpostslink\"]"
},
{
"pageElement":"//div[@class=\"content\"]/*|id(\"results-div\")/*",
"url":"^http://health\\.msn\\.com/",
"nextLink":"id(\"pagecntltop\")/a[contains(., \">\")]|id(\"results_content_wrapper\")/div[@class=\"pager\"]/span[@class=\"pager_current\"]/following-sibling::a[1]"
},
{
"pageElement":"//table/tbody/tr",
"url":"^http://2d\\.moe\\.hm/miku/",
"nextLink":"//p[@class=\"bline\"]/strong/following-sibling::a"
},
{
"pageElement":"//*[count(child::*[.//a[@class=\"permalink\"] | .//a[child::img[@class=\"permalink\"]] | .//*[@class=\"date\"]/a | .//div[contains(concat(\" \",normalize-space(@class),\" \"),\" permalink \")]/a | .//a[contains(@title,\"permalink\")] | .//a[@class=\"fecha\"] |.//a[contains(@href,\"/post/\")]])>=4]/*[.//a[@class=\"permalink\"] | .//a[child::img[@class=\"permalink\"]] | .//*[@class=\"date\"]/a | .//div[contains(concat(\" \",normalize-space(@class),\" \"),\" permalink \")]/a | .//a[contains(@title,\"permalink\")] | .//a[@class=\"fecha\"] |.//a[contains(@href,\"/post/\")]]",
"url":"^.+://[^/]+\\.tumblr\\.com/",
"nextLink":"//a[contains(@href,\"/page/\")][number(substring-after(self::a/@href,\"/page/\"))-number(substring-after(preceding::a[contains(@href,\"/page/\")][1]/@href,\"/page/\")) = 2 or number(substring-after(self::a/@href,\"/page/\"))-number(substring-after(following::a[contains(@href,\"/page/\")][1]/@href,\"/page/\")) = 2]|//a[contains(@href,\"/page/\")][number(substring-after(self::a/@href,\"/page/\")) = 2][number(substring-after(following::a[contains(@href,\"/page/\")][1]/@href,\"/page/\")) != 4 and number(substring-after(preceding::a[contains(@href,\"/page/\")][1]/@href,\"/page/\")) != 4]"
},
{
"pageElement":"id(\"posts\")/*",
"url":"^http://www\\.tumblr\\.com/",
"nextLink":"id(\"next_page_link\")"
},
{
"insertBefore":"id(\"page_main_sub\")",
"pageElement":"id(\"page_main\")/*[@id=\"sam_exc\" or @id=\"page_main_sub\"]",
"url":"^http://[^.]+\\.20ch\\.net/",
"nextLink":"id(\"sam_foot\")/a[contains(., \">\")]"
},
{
"insertBefore":"id(\"content\")/table[last()]",
"pageElement":"id(\"content\")/table[last() - 1]",
"url":"^http://f1000biology\\.com/",
"nextLink":"//*[starts-with(@href, \"/browse?page\") and text()=\">>\"][position()=last()]"
},
{
"pageElement":"(//table[@width=478])[1]/tbody/*[preceding::*[@class=\"news_title_\"] and following::img[@alt=\"\u6b21\u306b\u9032\u3080\" or @alt=\"\u524d\u306b\u623b\u308b\"]] | (//table[@width=478])[2]/tbody/*[following::img[@alt=\"\u6b21\u306b\u9032\u3080\" or @alt=\"\u524d\u306b\u623b\u308b\"]]",
"url":"^http://zai\\.diamond\\.jp/",
"nextLink":"//a[descendant::img[@alt=\"\u6b21\u306b\u9032\u3080\"]]"
},
{
"pageElement":"//div[@class=\"modB\"]/table",
"url":"^http://www\\.emusic\\.com/",
"nextLink":"//span[@class=\"pager\"]/span[@class=\"pagerCurrentPage\"]/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"content\"]",
"url":"^http://www\\.zerosec\\.ws/",
"nextLink":"//a[text()=\"\u00bb\"]"
},
{
"pageElement":"id(\"content\")/ul|id(\"results-container\")/tbody/tr",
"url":"^http://www\\.verycd\\.com/",
"nextLink":"//span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"post_content\")/div[contains(concat(\" \", @class, \" \"), \" post \")]",
"url":"^http://www\\.cotopa\\.com/",
"nextLink":"id(\"foot-navi\")//li[@class=\"current\"]/following-sibling::li[1]/a"
},
{
"pageElement":"//div[@class=\"message\"] | //div[@class=\"listforum\"]",
"url":"^http://forum\\.golem\\.de/",
"nextLink":"//span[@class=\"right\"]/a[contains(@rel,\"next\")]"
},
{
"pageElement":".//ul[@class=\"fullTileList\" or @class=\"smallThumbList\"]",
"url":"^http://www\\.ustream\\.tv/",
"nextLink":".//ul[@class=\"pager\"]/li[last()]/a"
},
{
"insertBefore":"//div[@class=\"pagination\"]",
"pageElement":"//div[@class=\"result\"]",
"url":"^http://github\\.com/search",
"nextLink":"//span[@class=\"current\"]/following-sibling::a[contains(@href, \"start_value=\")]"
},
{
"pageElement":"id(\"content\")/*",
"url":"^http://www\\.zzrock\\.net/",
"nextLink":"id(\"foot-navi\")/div[@class=\"wp-pagenavi\"]/a[contains(text(), \"\u00bb\")]"
},
{
"pageElement":"id(\"spArticleBody\")",
"url":"^http://www\\.spiegel\\.de/",
"nextLink":"//a[text()=\"Next\"]"
},
{
"pageElement":"id(\"content\")/div[contains(concat(\" \", @class, \" \"), \" post \")]",
"url":"^http://blog\\.avenew\\.jp/",
"nextLink":"id(\"content\")/div[@class=\"navigation\"]/div[@class=\"alignleft\"]/a"
},
{
"insertBefore":"id(\"CONTENTS_MAIN\")/div[@class=\"cmn-section cmn-indent\"]/div[@class=\"cmn-article_keyword cmn-clearfix\"]",
"pageElement":"id(\"CONTENTS_MAIN\")",
"url":"^http://www\\.nikkei\\.com/",
"nextLink":"id(\"CONTENTS_MAIN\")/div[@class=\"cmn-section cmn-indent\"]/div[@class=\"cmn-article_nation\"]/ul/li/a"
},
{
"pageElement":"//div[@class=\"contentpaneopen\"]/*[position() < last() - 1]",
"url":"^http://www\\.ryuzee\\.com/",
"nextLink":"//div[@class=\"contentpaneopen\"]/p/a[contains(text(), \"\u524d\")]"
},
{
"pageElement":"id(\"main\")/div[@class=\"inner\"]",
"url":"^http://ipodtouchlab\\.com/",
"nextLink":"//div[@class=\"inner\"]/p[last()]/a[contains(text(),\"\u6b21\")]"
},
{
"pageElement":"id(\"article_listing\")",
"url":"^http://www\\.avclub\\.com/",
"nextLink":".//div[@class=\"pager onpage_\"]/a[@class=\"pager_nav next\"]"
},
{
"pageElement":"id(\"content-inner\")/div[contains(concat(\" \", @class, \" \"), \" content-main \")]/div[@class=\"content-main-section\"]",
"url":"^http://www\\.akiyan\\.com/",
"nextLink":"id(\"content-inner\")/div[contains(concat(\" \", @class, \" \"), \" content-main \")]/div[@class=\"navigation\"]/div[@class=\"alignleft\"]/a"
},
{
"pageElement":"id(\"primary\")",
"url":"^http://www\\.gnarbs\\.com/",
"nextLink":"id(\"paging\")/a[contains(text(),\"Next\")]"
},
{
"pageElement":"id(\"textArea\")/p | id(\"photoBox\")",
"url":"^http://www\\.sanspo\\.com/",
"nextLink":"//span[@class=\"nextP\"]/a"
},
{
"pageElement":"id(\"search_result\")/* | id(\"container\")//ul[contains(concat(\" \", @class, \" \"), \" thumb_movie \")]",
"url":"^http://www\\.fooooo\\.com/",
"nextLink":"id(\"container\")//li[@class=\"next\"]/a"
},
{
"insertBefore":"//div[@class=\"navigation nav-top\"]",
"pageElement":"//div[starts-with(@id, \"post-\")]",
"url":"^http://lolfbmoments\\.com/",
"nextLink":"//div[@id=\"wp_page_numbers\"]//a[text()=\">\"]"
},
{
"pageElement":"//div[@class=\"POST\" or @class=\"post\"]",
"url":"^http://blog\\.auone\\.jp/",
"nextLink":"//table//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"main\")/div[h2]",
"url":"^http://f14s\\.biz/makoto/",
"nextLink":"id(\"flip2\")/li[@class=\"older\"]/a"
},
{
"pageElement":"//div[@class=\"rpas\"]",
"url":"^http://www\\.kumby\\.com/",
"nextLink":"//span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"textArea\")/div[@class=\"subhead_fmt\"]/following-sibling::*",
"url":"^http://www\\.webmd\\.com/",
"nextLink":"//a[starts-with(text(),\"Next Page\")]"
},
{
"pageElement":"id(\"main\")/div[h2]",
"url":"^http://blog\\.y17e\\.com/",
"nextLink":"id(\"flip2\")/li[@class=\"older\"]/a"
},
{
"pageElement":"//div[@class=\"index_entry\" or @class=\"hulu_detail_entry\" or @class=\"ng_content_row_wht\" or @class=\"ng_content_row_shade\"]",
"url":"^http://www\\.break\\.com/",
"nextLink":"//span[@class=\"crnt_page_number\"]/following-sibling::a[1]|//*[(self::div and @class=\"top_cmore\") or (self::td and @class=\"ng_cat_paging\")]/a[contains(., \">\")]"
},
{
"pageElement":"//div[@class=\"pagination\"]/preceding-sibling::*[contains(concat(\" \", @class, \" \"), \" inset \")]",
"url":"^http://www\\.ohloh\\.net/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"contents\")",
"url":"^http://nyarla\\.net/blog/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//body/div",
"url":"^https?://.+/bbstcon\\.php",
"nextLink":"//a[contains(text(),\"\u4e0b\u4e00\u9875\")]"
},
{
"pageElement":"//div[contains(@class, \"news\")]/div[contains(@class, \"alert\")]",
"url":"^http://github\\.com/[^/?]",
"nextLink":"//a[@hotkey=\"l\"]"
},
{
"pageElement":"//div[starts-with(@id, \"post-\")]",
"url":"^http://stylecrunch\\.com/",
"nextLink":"//div[@class=\"wp-pagenavi\"]/span[contains(concat(\" \", @class, \" \"), \" current \")]/following-sibling::*[1][self::a]"
},
{
"insertBefore":"id(\"mainContent\")/div[@class=\"pages pkg\"]/div[@class=\"paginator\"]",
"pageElement":"id(\"mainContent\")/ol[@class=\"bookmarks clear\"]",
"url":"^http://vi\\.sualize\\.us/",
"nextLink":"id(\"mainContent\")/div[@class=\"pages pkg\"]/div[@class=\"paginator\"]/a[@class=\"next\"]"
},
{
"pageElement":"id(\"primarycontent\")/div[contains(concat(\" \", @class, \" \"), \" hentry \")]",
"url":"^http://ae-users\\.com/jp/",
"nextLink":"id(\"primarycontent\")/div[contains(concat(\" \", @class, \" \"), \" navigation \")]/div[@class=\"left\"]/a"
},
{
"pageElement":"//table[@class=\"en\"]/tbody/tr",
"url":"^http://www\\.shobon\\.jp/",
"nextLink":"id(\"fn\")/span[@class=\"fn\"]/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"view-content\"]",
"url":"^http://extendopera\\.org/",
"nextLink":"//a[@title=\"Go to next page\"]"
},
{
"pageElement":"id(\"content\")/div[@class=\"post\"]",
"url":"^http://onepagelove\\.com/",
"nextLink":"id(\"content\")/div[@class=\"navigation\"]/a[contains(text(), \"\u00ab\")]"
},
{
"pageElement":"id(\"search-result\")/ul[contains(concat(\" \", @class, \" \"), \" result \")]",
"url":"^http://nanapi\\.jp/search",
"nextLink":"id(\"search-result\")//em[contains(concat(\" \", @class, \" \"), \" next \")]/a"
},
{
"pageElement":"//div[@class=\"BodyTxt\"]",
"url":"^http://www\\.asahi\\.com/",
"nextLink":"//p[@class=\"Next\"]/a"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" post-asset \")]",
"url":"^http://[^.]+\\.vox\\.com/",
"nextLink":"//ul[@class=\"pager-list\"]/li[contains(concat(\" \", @class, \" \"), \" next \")]/a|//div[@class=\"stream-footer\"]//a[contains(@href, \"/page/2/\")]"
},
{
"pageElement":"id(\"wot-popular-table\")/tbody/tr",
"url":"^http://www\\.mywot\\.com/",
"nextLink":"//a[contains(concat(\" \", @class, \" \"), \" pager-next \")]"
},
{
"pageElement":"//div[@class=\"section\"]",
"url":"^http://pick\\.naver\\.jp/",
"nextLink":"//div[@class=\"moreLinkWrapper\"]"
},
{
"pageElement":"id(\"contentmiddle\")/div[contains(@id,\"post_wide\") or contains(@class,\"entry\") or contains(@id,\"comment_top\") or contains(@id,\"commentblock\")]",
"url":"^http://www\\.slzin\\.com/",
"nextLink":"//div[contains(concat(\" \",@class,\" \"),\" navigation \")]//a[text()=\"NEXT:>\"]"
},
{
"pageElement":"//div[starts-with(@id,\"entry\")]",
"url":"^http://alice\\.in2d\\.jp/",
"nextLink":"//div[@class=\"content-nav\"]/a[starts-with(text(),\"\u00ab\")]"
},
{
"insertBefore":"id(\"articlenavwrap\")",
"pageElement":"id(\"articlecontent\")",
"url":"^http://www\\.trutv\\.com/",
"nextLink":"id(\"nextchapter\")"
},
{
"pageElement":"//span[@class=\"pagination\"]/ancestor::div[@class=\"section\"][1]",
"url":"^http://www\\.4tube\\.com/",
"nextLink":"//span[@class=\"pagination\"]/a[@class=\"next\"]"
},
{
"pageElement":"id('main')/div[@class='entry']",
"url":"^http://poab\\.jugem\\.jp/",
"nextLink":".//ul[@class='navi']/li[@class='next']/a"
},
{
"insertBefore":"id(\"stream\")/hr[21]",
"pageElement":"id(\"stream\")",
"url":"^http://brightkite\\.com/.",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"pageElement":"id(\"articles\")/*",
"url":"^http://blog\\.s21g\\.com/",
"nextLink":"//a[@class=\"back\"]"
},
{
"pageElement":"id(\"main\")/table[@class=\"tblUsed\"]",
"url":"^http://kakaku\\.com/used/",
"nextLink":"id(\"main\")//span[@class=\"next\"]/a"
},
{
"pageElement":"//span[@class=\"mb_text\"]/ancestor::table[2]",
"url":"^http://4megaupload\\.com/",
"nextLink":"//td[@class=\"text_pages\"]/strong[.=number(.)]/following-sibling::a[1]"
},
{
"insertBefore":"//*[contains(@class, \"autopagerize_insert_before\")]",
"pageElement":"//*[contains(@class, \"autopagerize_page_element\")]",
"url":"^http://hail2u\\.net/blog/",
"nextLink":"//a[@class=\"autopagerize_follow_location\"]"
},
{
"pageElement":"//div[@class=\"body\"]",
"url":"^http://thinkit\\.co\\.jp/",
"nextLink":"//li[@class=\"pager-next\"]/a"
},
{
"pageElement":"//div[@class=\"blogbody\"]",
"url":"^http://la\\.ma\\.la/blog/",
"nextLink":"//div[@class=\"prev\"]/a"
},
{
"insertBefore":"id(\"content\")/table[3]",
"pageElement":"id(\"content\")/table[2]",
"url":"^http://infinitemma\\.com/",
"nextLink":"//a[text()=\"Next\"]"
},
{
"insertBefore":"id(\"afoot\")",
"pageElement":"id(\"abody\")",
"url":"^http://www\\.salon\\.com/",
"nextLink":"//p[@class=\"next_page\"]/a"
},
{
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://www\\.spike\\.com/",
"nextLink":"//li[@class=\"pagenext\"]/a"
},
{
"pageElement":"id(\"contents\")",
"url":"^http://typing-tube\\.net/",
"nextLink":"id(\"nextPage\")"
},
{
"pageElement":"id(\"main\")/div[h2]",
"url":"^http://blog\\.f14s\\.biz/",
"nextLink":"id(\"flip2\")/li[@class=\"older\"]/a"
},
{
"pageElement":"//div[@class=\"thumb-wrapper\"]|//div[@class=\"thumb-wrapper\"][last()]/following-sibling::*[1][self::div]",
"url":"^http://www\\.tube8\\.com/",
"nextLink":"//li[@class=\"active-pag\"]/following-sibling::li[1]/a"
},
{
"insertBefore":"id(\"main\")/table/following-sibling::node()",
"pageElement":"id(\"main\")/table",
"url":"^http://cal\\.syoboi\\.jp/",
"nextLink":"//a[text()=\"\u6b21\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"id(\"_nopad\")/div/table|id(\"forumTopics\")|id(\"content\")/div[@class=\"forum_border_around\" or @class=\"forum_boardrowspacer\"]",
"url":"^http://myanimelist\\.net/",
"nextLink":"//div[@class=\"borderClass\"]//a[.=\"\u00bb\" or contains(., \"Next\")]"
},
{
"pageElement":"//ul[contains(@class, \"people\")]/li[contains(@class,\"vcard\")]",
"url":"^http://tatsuj\\.in/people",
"nextLink":"(//a[contains(concat(\" \",@class,\" \"),\" next_page \")])[last()]"
},
{
"pageElement":"id(\"content\")",
"url":"^http://progit\\.org/book/",
"nextLink":"id(\"nav\")/a[text()=\"next\"]"
},
{
"pageElement":"id(\"Blog1\")/div[contains(concat(\" \", @class, \" \"), \" blog-posts \")]",
"url":"^http://blog\\.takuo\\.jp/",
"nextLink":"id(\"Blog1_blog-pager-older-link\")"
},
{
"pageElement":"id(\"mainContent\")/div[@class=\"box\"]",
"url":"^http://vector4free\\.com/",
"nextLink":"id(\"mainContent\")/div[@class=\"pagination\"]/strong/following-sibling::a[1]"
},
{
"insertBefore":"//div[@class=\"entry\"][last()]/p",
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://flickrbabes\\.com/",
"nextLink":"//span[@class=\"previous\"]/a"
},
{
"pageElement":"id(\"logos\")|id(\"primary\")/div/div[@class=\"view-content\"]",
"url":"^http://stocklogos\\.com/",
"nextLink":"id(\"primary\")//li[contains(concat(\" \", @class, \" \"), \" pager-next \")]/a"
},
{
"pageElement":"//ul[contains(concat(\" \", @class, \" \"), \" listings \") or contains(concat(\" \", @class, \" \"), \" listings-listview \")]",
"url":"^http://www\\.etsy\\.com/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id(\"rowsTbl\")//tr",
"url":"^http://gigapedia\\.info/",
"nextLink":"//a[@class=\"paginateLink\"][starts-with(text(), \"next\")]"
},
{
"pageElement":"id(\"AutoNumber300\")/ancestor::tr[1]/following-sibling::tr",
"url":"^http://www\\.eyje\\.com/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pagination \")]/a[starts-with(text(), \"next\")]"
},
{
"pageElement":"//div[@class=\"contents entry_list\"]",
"url":"^http://mashupaward\\.jp/",
"nextLink":"//div[@class=\"pager\"]/ul/li[last()]/a"
},
{
"pageElement":"//div[@class=\"articleContent\"]/p",
"url":"^http://www\\.time\\.com/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"contents\")//div[contains(@class, \"article-body\")]",
"url":"^http://kankyomedia\\.jp/",
"nextLink":"id(\"contents\")//img[contains(@title, \"\u6b21\u306e\u30da\u30fc\u30b8\")]/parent::a"
},
{
"pageElement":"//div[contains(concat(\" \",@class,\" \"), \" image_thread \")] | //div[contains(concat(\" \",@class,\" \"), \" thumbview \")] | id(\"tag_list\")",
"url":"^http://e-shuushuu\\.net/",
"nextLink":"/descendant::li[contains(concat(\" \",@class,\" \"), \" active \")]/following-sibling::*[1][self::li]/a"
},
{
"pageElement":"id(\"main\")",
"url":"^http://www\\.flatz\\.jp/",
"nextLink":"//div[@class=\"wp-pagenavi\"]//a[contains(text(), \"\u00bb\")]"
},
{
"pageElement":"id(\"searchResultsDisplay\")/*",
"url":"^http://www\\.bebe\\.com/",
"nextLink":"id(\"search-results\")/div[@class=\"searchPagination\"]/span[@class=\"nextPage\"]/a"
},
{
"pageElement":"id(\"content\")/div[@class=\"post\"]",
"url":"^http://infoisland\\.org/",
"nextLink":"id(\"content\")/div[@class=\"navigation\"]/div[@class=\"alignleft\"]/a"
},
{
"pageElement":"id(\"body\")/div[@class=\"wrap\"]",
"url":"^http://ejohn\\.org/blog/",
"nextLink":"id(\"body\")/div[@class=\"wrap\"]/a[last()]"
},
{
"pageElement":"id(\"businessresults\")/div[@class=\"businessresult clearfix\"]",
"url":"^http://www\\.yelp\\.com/",
"nextLink":"id(\"pager_page_next\")"
},
{
"pageElement":"id(\"posts\")/div[contains(concat(\" \",@class,\" \"),\" list \")]/ul/li",
"url":"^http://github\\.com/blog",
"nextLink":"//div[contains(concat(\" \",@class,\" \"),\" pagination \")]/a[contains(text(),\"Next\")]"
},
{
"pageElement":"id(\"main\")/div[contains(@class, \"section\")]",
"url":"^http://barca\\.daa\\.jp/",
"nextLink":"//p[@class=\"archives\"]/a"
},
{
"pageElement":"//div[@id=\"content\" and @class=\"narrowcolumn\"]/div[contains(@class, \"post\")]",
"url":"^http://mozillazine\\.jp/",
"nextLink":"//div[@class=\"alignleft\"]/a[last()]"
},
{
"pageElement":"id(\"offers_showListFlatDedicated\")/div[@class=\"showList\"]/div[not(@class=\"naviTab\")]",
"url":"^http://www\\.agito\\.pl/",
"nextLink":"id(\"offers_showListFlatDedicated\")//span[@class=\"navi_selected\"]/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"text\"]",
"url":"^http://www\\.more\\.com/",
"nextLink":"//a[contains(text(), \"NEXT\")]"
},
{
"pageElement":"id(\"results_list\")",
"url":"^http://www\\.hulu\\.com/",
"nextLink":"//a[img[starts-with(@id,\"pagination-arrow-next.gif\")]]"
},
{
"pageElement":"//div[@id=\"content\"]/ul",
"url":"^http://dailybooth\\.com/",
"nextLink":"//div[@id=\"pagination\"]/p[@class=\"right\"]/a"
},
{
"pageElement":"id(\"bd\")/div[@class=\"content-wrap\"]//ul[@class=\"hfeed\"]",
"url":"^http://www\\.mixx\\.com/",
"nextLink":"id(\"bd\")/div[@class=\"content-wrap\"]//a[@rel=\"next\"]"
},
{
"pageElement":"//div[@class=\"motiveWrapper\"]",
"url":"^http://www\\.skins\\.be/",
"nextLink":"id(\"pagination\")/span/following-sibling::a[1]"
},
{
"pageElement":"id(\"form-body-compare\")//div[contains(concat(\" \", @class, \" \"), \" product \") or contains(concat(\" \", @class, \" \"), \" product-row \")]",
"url":"^http://www\\.ceneo\\.pl/",
"nextLink":"id(\"form-body-compare\")//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"area_ct_article\")/div[@class=\"w467\" and ./div[contains(concat(\" \", @class, \" \"), \" pd-t17 \")] and count(./*)=1]|id(\"schlagwort\")/div[contains(concat(\" \", @class, \" \"), \" pd-b25 \")]",
"url":"^http://www\\.focus\\.de/",
"nextLink":"id(\"area_ct_article\")//div[@class=\"pfeil-right-17\"]/a|id(\"pager0\")/div[contains(concat(\" \", @class, \" \"), \" pager-right-17 \")]/a"
},
{
"pageElement":"id(\"bottom-paginator\")/preceding-sibling::ol",
"url":"^http://technorati\\.com/",
"nextLink":"id(\"bottom-paginator\")/strong/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"content_pane\"]//dl",
"url":"^http://find\\.2ch\\.net/",
"nextLink":"//a[text()=\"\u6b21\u3078\"] "
},
{
"insertBefore":"(//a[text()=\"Next page\"]/ancestor::table)[last()]",
"pageElement":"id(\"ctl00_ContentPlaceHolder1_dlImages\")",
"url":"^http://supermodels\\.nl/",
"nextLink":"//a[text()=\"Next page\"]"
},
{
"pageElement":"//p[@class=\"textBodyBlack\"]",
"url":"^http://www\\.cnbc\\.com/",
"nextLink":"//a[@id=\"gted\" and contains(., \"Next\")]"
},
{
"pageElement":"//ul[@class=\"appdetails\"]",
"url":"^http://appshopper\\.com/",
"nextLink":"//div[@class=\"pages\"]/a[contains(text(), \"Next\")]"
},
{
"pageElement":"id(\"photos\")/ul",
"url":"^http://idoltube\\.in/i/.",
"nextLink":"id(\"photos\")/div[contains(concat(\" \",@class,\" \"),\" nextpage \")]/a"
},
{
"pageElement":"id(\"content_inner\")/ul",
"url":"^http://identi\\.ca/group",
"nextLink":"//li[@class=\"nav_next\"]/a"
},
{
"pageElement":"id(\"Main\")/div[contains(@class, \"Review01\")]",
"url":"^http://crossreview\\.jp/",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"pageElement":"id(\"content\")/div[@*=\"blog\"]/*|(//h2[@class=\"date\"]|//div[starts-with(@class,\"cont_body\")])[../div/@class=\"blogbody\"]|//div[@class=\"blogbody\"][../h2/@class=\"date\"]",
"url":"^http://pub\\.ne\\.jp/\\w",
"nextLink":"id(\"menu page\")/a[contains(.,\"\u6b21\u306e\") or contains(.,\"\u00bb\") and not(contains(.,\"\u524d\u306e\"))]"
},
{
"pageElement":"id(\"content\")/div[@class=\"navigation\"]/preceding-sibling::*",
"url":"^http://lifehacking\\.jp/",
"nextLink":"id(\"content\")/div[@class=\"navigation\"]/div[@class=\"previous\"]/a"
},
{
"pageElement":"//ul[@class=\"list\"]",
"url":"^http://en\\.vpleer\\.ru/",
"nextLink":"//div[@class=\"pageactive\"]/following-sibling::div[1]/a"
},
{
"pageElement":"//div[@class=\"artikeltext\"]",
"url":"^http://www\\.golem\\.de/",
"nextLink":"//div[@class=\"artikeltext\"]/a[text()=\"weiter...\"]"
},
{
"pageElement":"id(\"div_currpage\")",
"url":".*xinhuanet.com/.+\\.htm",
"nextLink":"//a[starts-with(text(),\"\u4e0b\u4e00\u9875\")]"
},
{
"pageElement":"id(\"pagination_area\")/preceding-sibling::div[@class=\"entry\" or @class=\"clear\"]",
"url":"^http://weheartit\\.com/",
"nextLink":"id(\"pagination\")/div[@class=\"older\"]/a"
},
{
"pageElement":"id(\"maininfo\")/div/div",
"url":"^http://kakaku\\.com/tv/",
"nextLink":"//a[@class=\"next\" and text()=\"\u6b21\u3078\"]"
},
{
"insertBefore":"id(\"pagination_container\")",
"pageElement":"id(\"main_content\")//ul[@class=\"photo_list_centering\"]",
"url":"^http://photohito\\.com/",
"nextLink":"id(\"pagination\")//a[contains(concat(\" \", normalize-space(@rel), \" \"), \" next \")]"
},
{
"pageElement":"//div[@class=\"STR_StripFrame\"]",
"url":"^http://comics\\.com/\\w",
"nextLink":"//a[contains(@class,\"PAG_Next\")]"
},
{
"pageElement":"id(\"sortShowTop\")/following-sibling::*[(self::ul or (self::div and @class=\"cleardiv\")) and ./following-sibling::div[@id=\"sortShowBottom\"]]",
"url":"^http://www\\.rei\\.com/",
"nextLink":"id(\"sortShowTop\")//img[@class=\"nextBtn\"]/parent::a"
},
{
"pageElement":"id(\"content\")",
"url":"^http://nicometer\\.net/",
"nextLink":"//a[contains(@id, \"pager\")][@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"main\")/div[contains(concat(\" \", @class, \" \"), \" section \")]",
"url":"^http://sasapanda\\.net/",
"nextLink":"id(\"flip2\")/li[@class=\"older\"]/a"
},
{
"pageElement":"id(\"KIZI\")",
"url":"^http://furosiki\\.net/_",
"nextLink":"id(\"KIZI\")//a[starts-with(text(),\"NEXT\")]"
},
{
"pageElement":"id(\"myTable\")/tbody/tr",
"url":"^http://loda\\.jp/[^/]+/",
"nextLink":"//span[@class=\"pages\"]/strong/following-sibling::*[1][self::a[not(self::a[contains(text(),\"ALL\")])]]"
},
{
"pageElement":"id(\"main\")",
"url":"http://akibahobby\\.net/",
"nextLink":"//*[contains(concat(\" \", @class, \" \"), \" current \")]/following-sibling::a"
},
{
"insertBefore":"id(\"rcol\")/*[last() + 1]",
"pageElement":"id(\"rcontent\")",
"url":"^http://lart\\.no/lpaste",
"nextLink":"//link[@rel=\"next\"]"
},
{
"pageElement":"id(\"content\")/div[@class=\"regular\"]",
"url":"^http://kevinrose\\.com/",
"nextLink":"id(\"prev\")"
},
{
"pageElement":"id(\"content\")//ul[contains(concat(\" \", @class, \" \"), \" bookmarks \") and not(@id=\"bookmarklist_your\")]//li[contains(concat(\" \", @class, \" \"), \" post \")]",
"url":"^http://delicious\\.com/",
"nextLink":"id(\"pagination\")/a[contains(@class, \"next\")]"
},
{
"insertBefore":"//div[@class=\"referrerArea\"]",
"pageElement":"//ul[@class=\"memo\"]",
"url":"^http://1470\\.net/user/",
"nextLink":"//div[@class=\"pageNavigationArea\"][2]/a[1]"
},
{
"pageElement":"//div[@class=\"SC\"]/div[@class=\"Post\" or @class=\"clearer\"]",
"url":"^http://northisup\\.com/",
"nextLink":"//strong[@class=\"on\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"pager\")/preceding-sibling::*",
"url":"^http://qvectors\\.net/.",
"nextLink":"id(\"pager\")//li[@class=\"pager-current\"]/following-sibling::li[1]/a"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" node \") and not(./following-sibling::div[@id=\"comments\"])]|id(\"forum\")/table|id(\"comments\")/*[not(@class=\"content-bar\")]",
"url":"^http://userlogos\\.org/",
"nextLink":"//strong[@class=\"pager-current\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"content\")/div[@class=\"content_c\"]",
"url":"^http://iralog\\.net/b/.",
"nextLink":"id(\"content\")/div/div[@class=\"head_pager\"]/a[contains(text(), \"\u6b21\")]"
},
{
"pageElement":"id(\"content\")/div[contains(concat(\" \", @class, \" \"), \" post \")]",
"url":"^http://www\\.sjmp\\.de/",
"nextLink":"id(\"content\")/div[@class=\"pagebar\"]/span[@class=\"this-page\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"pagination\")/preceding-sibling::*[self::a or (self::div and @class=\"channers\")]|//div[@class=\"comments\"]/*",
"url":"^http://imagechan\\.com/",
"nextLink":"(id(\"pagination\")|//div[@class=\"pagination\"])/a[contains(., \"Next\")]"
},
{
"pageElement":"//div[@class=\"shop\"]",
"url":"^http://tabetime\\.com/.",
"nextLink":"//p[@class=\"nextback\"]/a[text()=\"\u6b21\u3092\u8868\u793a\"]"
},
{
"pageElement":"//div[@class=\"mod projects\"]/div[@class=\"bd\"]",
"url":"^http://repopular\\.com/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id('entry_block')/a/img | id('entry_block')/img",
"url":"^http://newsmanga\\.com/",
"nextLink":"//ul/li[@class=\"next_button\"]/a"
},
{
"pageElement":"id(\"PageContainer\")//table[@class=\"minidetail\"][following-sibling::br]/ancestor::tr[1]",
"url":"^http://www\\.ozon\\.ru/",
"nextLink":"id(\"PageContainer\")//td[1][@class=\"nowrap\"][normalize-space()=\"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430:\"]/following-sibling::td[child::b][1]/following-sibling::td[1]/a"
},
{
"pageElement":"id(\"mainContentsArea\")/ul",
"url":"^http://1470\\.net/list/",
"nextLink":"//span[@class=\"page\" and not(./*)]/following-sibling::span[1]/a"
},
{
"pageElement":"id(\"content\")//div[@class=\"post\"]",
"url":"^http://ikubon\\.com/wp/",
"nextLink":".//div[@class=\"navigation\"]//a[contains(text(),\"Older\")]"
},
{
"pageElement":"//td[@class=\"content\"]/table/tbody/tr/td/table[not(contains(.,\"Preis:\") and contains(.,\"aufsteigend\") and contains(.,\"absteigend\"))]/tbody/tr",
"url":"^http://www\\.elv\\.de/",
"nextLink":"//td[@class=\"content\"]/table/tbody/tr/td/table[contains(.,\"Preis:\") and contains(.,\"aufsteigend\") and contains(.,\"absteigend\")]//a[contains(./b,\"\u00bb\")]"
},
{
"pageElement":"id(\"content\")",
"url":"^http://oneclip\\.jp/my",
"nextLink":"id(\"users_view\")/div[2]/a[contains(text(),\"\u524d\u306e\")]"
},
{
"pageElement":"//div[@class=\"unit\"]",
"url":"^http://authority\\.jp/",
"nextLink":"//div[@class=\"pagination\"][2]//a[@class=\"prevnext\"]"
},
{
"pageElement":"//table[@width=\"100%\" and @cellspacing=\"0\" and @cellpadding=\"0\" and @border=\"0\" and @bgcolor=\"white\"]",
"url":"^http://joshinweb\\.jp/",
"nextLink":"//td[@class=\"fsM\" and @valign=\"bottom\" and @align=\"right\"]/a[font[@color=\"blue\" and @style=\"font-weight: bold;\"]]/following-sibling::a[1]"
},
{
"pageElement":"//div[@id='main_nobg']/div[@id='thumbs']",
"url":"^http://www\\.sxc\\.hu/",
"nextLink":"//form[@id='nav_form_2']/div/table/tbody/tr/td/a[contains(text(),'Next')]"
},
{
"pageElement":"//table[@cellspacing=\"4\"]",
"url":"^http://say-move\\.org/",
"nextLink":"//div[@class=\"page\"]/a[contains(text(),\"\u9032\u3080\")]"
},
{
"pageElement":"id(\"BoxA-2-0-0\")//div[@class=\"sectionEmbeddedBox\"]",
"url":"^http://www\\.ftd\\.de/",
"nextLink":"id(\"BoxA-2-0-0\")//a[contains(concat(\" \", @class, \" \"), \" next \")]"
},
{
"insertBefore":"(//div[@class=\"blog-pager\"])[last()]",
"pageElement":"//div[contains(@class, \"blog-posts\")]",
"url":"http://blog.kassyi.com/",
"nextLink":"id(\"blog-pager-older-link\")/a"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" gems \")]/ol",
"url":"^http://rubygems\\.org/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"content\")/table",
"url":"^http://sadsteve\\.com/",
"nextLink":".//td[@class=\"right\"]/a[contains(text(),\"Next\")]"
},
{
"insertBefore":"//p[a[starts-with(text(), \"Next\")]]",
"pageElement":"//div[@class=\"fstory\"]/p",
"url":"^http://www\\.nj\\.com/",
"nextLink":"//a[starts-with(text(), \"Next\")]"
},
{
"pageElement":"id(\"webr\")",
"url":"^http://jp\\.ask\\.com/",
"nextLink":"id(\"paging\")//a[contains(text(),\"\u6b21\u3078\")]"
},
{
"insertBefore":"id(\"assets\")/div[last()]",
"pageElement":"//blockquote",
"url":"^http://ffffound\\.com/",
"nextLink":"id(\"paging-next\")"
},
{
"pageElement":"//div[@id=\"normalmain\"]",
"url":"http://personalab\\.jp/",
"nextLink":"//div[@class=\"pagenav\"]//a[contains(text(), \"\u6b21\u3078\")]"
},
{
"pageElement":"id(\"contents_date\")/following-sibling::*[following-sibling::p[@id=\"page_index\"]]",
"url":"^http://manganavi\\.jp/",
"nextLink":"id(\"page_navigation\")/a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\u3078\"]"
},
{
"pageElement":".//div[@class=\"postbox\"]",
"url":"^http://thechive\\.com/",
"nextLink":"id(\"wp_page_numbers\")/ul/li[@class=\"active_page\"]/following-sibling::li[1]/a"
},
{
"pageElement":"id(\"content\")/div[@class=\"item\"]",
"url":"^http://cssmania\\.com/",
"nextLink":"id(\"paging\")/a[@class=\"next\"] | id(\"content\")/div[@class=\"mtpag\"]/strong[last()]/a | id(\"content\")/div[@class=\"mtpag\"]/p/strong[last()]/following-sibling::*[1][self::a]"
},
{
"pageElement":"id(\"wrapper\")//div[contains(concat(\" \", @class, \" \"), \" post \")]",
"url":"^http://fleshbot\\.com/",
"nextLink":"id(\"wrapper\")//a[@class=\"current_page\"]/following-sibling::a[1]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" post \")]",
"url":"^http://faildogs\\.com/",
"nextLink":"id(\"footer\")/a[last()]"
},
{
"pageElement":"//div[contains(@class, \"hentry\")]",
"url":"^http://habrahabr\\.ru/",
"nextLink":"//a[@class=\"next\"]"
},
{
"insertBefore":"id(\"content\")/div[@class=\"entry_area\"]/following-sibling::node()",
"pageElement":"//div[@class=\"entry_area\"]",
"url":"^http://jigokuno\\.com/",
"nextLink":"id(\"page_area\")/div[@class=\"page_navi\"]/a[text()=\">>\"]"
},
{
"pageElement":"id(\"content\")/div[@class=\"entry\"]",
"url":"^http://digimaga\\.net/",
"nextLink":"//div[@class=\"wp-pagenavi\"]/span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"contents\")/div[@class=\"entry\"]",
"url":"^http://lab\\.3fl\\.jp/",
"nextLink":"id(\"contents\")/p[@class=\"pnnavi\"]/span[@class=\"next\"]/a"
},
{
"pageElement":"//ul[contains(concat(\" \", @class, \" \"), \" logo_list \")]",
"url":"^http://logopond\\.com/",
"nextLink":"//span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"delform\")/*[not(@class=\"userdelete\" or (self::hr and not(./following-sibling::hr)))]",
"url":"^http://gurochan\\.net/",
"nextLink":"//input[@type=\"submit\" and @value=\"Next\"]/parent::form"
},
{
"pageElement":"id(\"primary\")/div[@class=\"post-list\"]/div",
"url":"^http://mashable\\.com/",
"nextLink":"id(\"primary\")/div[@class=\"post-list\"]/ul/li[@class=\"current\"]/following-sibling::li[1]/a"
},
{
"insertBefore":"id(\"content\")/div[@class=\"pagination\"]",
"pageElement":"id(\"content\")/ul[@class=\"gallery\"]",
"url":"^http://welovewp\\.com/",
"nextLink":"id(\"content\")/div[@class=\"pagination\"]/a[contains(text(), \"\u00bb\")]"
},
{
"pageElement":"id(\"intelliTxt\")/table[.//td[@class=\"newstext\"]]|//div[@class=\"archive\" or @class=\"newsteaser\"]|//td[@class=\"screenshotheadlins\"]/parent::tr/preceding-sibling::tr[position()<last()]|//div[@class=\"pager\"]/preceding-sibling::div[@id]",
"url":"^http://winfuture\\.de/",
"nextLink":"id(\"intelliTxt\")//img[@src=\"http://i.wfcdn.de/4/button_right.gif\"]/parent::a|//div[@class=\"paging\" or @class=\"pager\"]//strong/following-sibling::a[1]"
},
{
"pageElement":"id(\"thumb\")/tbody/tr",
"url":"^http://himado\\.in/\\?",
"nextLink":"//a[@class=\"pagelink\" and contains(., \">\")]"
},
{
"pageElement":"id(\"lvl-3\")/div[contains(concat(\" \", @class, \" \"), \" pagination \")]/preceding-sibling::*",
"url":"^http://cssremix\\.com/",
"nextLink":"id(\"lvl-3\")//div[@class=\"bar-next\"]/a"
},
{
"pageElement":"id(\"main\")/div[@class=\"content\"]/div[@class=\"entrys\"]",
"url":"^http://dezignus\\.com/",
"nextLink":"id(\"bg\")/div[@class=\"wp-pagenavi\"]/span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"main_wrapper\")//div[contains(@class,\"articleBody\")]",
"url":"^http://www\\.rr\\.com/",
"nextLink":"id(\"main_wrapper\")//p[@class=\"articlePagination\"]/span[last()]/a"
},
{
"pageElement":"//ol[@class=\"timeline\"]",
"url":"^http://myqq\\.name/t/",
"nextLink":"(id(\"pagination\")|//div[@class=\"pagination\"])/a[contains(., \"Next\")]"
},
{
"pageElement":"id(\"one-col\")//div[@class=\"recipe-preview\"]|id(\"tsukurepo-list\")/div[not(contains(@class, \"paginate\"))]",
"url":"^http://cookpad\\.com/",
"nextLink":"id(\"one-col\")//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"notices_primary\")//ol[contains(@class, \"notices\")]",
"url":"^http://chuitter\\.jp/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"content\")/*[not(./div[@class=\"entry\"] or @id=\"navigation\")]",
"url":"^http://tabetie\\.com/",
"nextLink":"id(\"navigation\")/a[@rel=\"next\"]"
},
{
"pageElement":"id(\"bookmarks\")",
"url":"^http://pinboard\\.in/",
"nextLink":"//a[contains(text(), \"earlier\")]"
},
{
"pageElement":"id(\"panel2\")//div[@class=\"post\"]|id(\"content-inner\")/div[@class=\"post\"]/div[@class=\"post-content\"]|id(\"searchresults\")/ul",
"url":"^http://vr-zone\\.com/",
"nextLink":"id(\"page_nav searchresults\")/span[@class=\"pagenav-next\"]/a|id(\"content-inner\")/div[@class=\"page-navigation\"]//a[contains(., \"Next\")]"
},
{
"insertBefore":"//div[@class=\"paging marg\"][2]",
"pageElement":"//ol[@class=\"snippets marg\"]",
"url":"^http://snipplr\\.com/",
"nextLink":"//div[@class=\"paging marg\"]/a[contains(text(), \"Next\")]"
},
{
"insertBefore":"id(\"paging\")",
"pageElement":"id(\"content\")/div[@class=\"section day\"]",
"url":"^http://lowreal\\.net/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"contents\")/div[contains(concat(\" \",@class,\" \"),\" list \")]",
"url":"^http://quetter\\.com/",
"nextLink":"id(\"contents\")/div[contains(concat(\" \",@class,\" \"),\" pagination \")]/span/a[contains(text(),\">\")]"
},
{
"pageElement":"//div[contains(concat(\" \",normalize-space(@class),\" \"),\" content \")]/div[contains(concat(\" \",normalize-space(@class),\" \"),\" aa-wrapper \")]",
"url":"^http://aahosyu\\.com/",
"nextLink":"//ul[contains(concat(\" \",normalize-space(@class),\" \"),\" pager \")]/li[contains(concat(\" \",normalize-space(@class),\" \"),\" next \")]/a"
},
{
"pageElement":"id(\"Image ctl00_BodyPlaceHolder_ProductListProductListing1_GridDataListPanel\")",
"url":"^http://myprops\\.org/",
"nextLink":"id(\"NextImageHyperLink ctl00_BodyPlaceHolder_ProductListProductListing1_ProductPager_HyperLinkNext\")"
},
{
"pageElement":"id(\"search_results\")|//table[@class=\"tabular_data\"]",
"url":"^http://pledgie\\.com/",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"pageElement":"id(\"main\")/*",
"url":"^http://greenpig\\.ru/",
"nextLink":"//a[text()=\"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f \u00bb\"]"
},
{
"insertBefore":"//div[contains(@id, \"footer_ad\")]",
"pageElement":"id(\"sub_main\")/div[contains(@class, \"entry\") or @id=\"comment_module\"]",
"url":"^http://ameblo\\.jp/.+",
"nextLink":"id(\"sub_main\")/div[contains(@class, \"page\")]/a[@class=\"nextPage\"]"
},
{
"pageElement":"//tr[@class=\"hlRow\"]",
"url":"^http://isohunt\\.com/",
"nextLink":"//table[@class=\"pager\"]//b/following-sibling::a[1]"
},
{
"pageElement":"id(\"content\")//div[contains(@class,\"hentry post\")]",
"url":"^http://hotjav\\.asia/",
"nextLink":".//div[@class=\"wp-pagenavi\"]/span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"div_update\"]",
"url":"^http://twitxr\\.com/",
"nextLink":"id(\"divTipBody\")/descendant::a[contains(., \"\u00bb\")][last()]"
},
{
"pageElement":"id(\"BlogContents\")/div",
"url":"^http://fidgit\\.com/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"post_items\")/div[@class=\"mini_post_item\"]",
"url":"^http://pshero\\.com/",
"nextLink":"//a[@class=\"nextpostslink\"]"
},
{
"pageElement":"//td[@class=\"td_w532\"]/node()[@class=\"topics-news\" or @class=\"table_w532\" or contains(@id,\"entry-\") or @width=\"528\"]",
"url":"^http://newsing\\.jp/",
"nextLink":"//a[child::img[@id=\"pager_next\"] or child::img[@id=\"pager-next-bottom\"]]"
},
{
"pageElement":"id(\"pankuzu\")/following-sibling::*",
"url":"^http://twilog\\.org/",
"nextLink":"//a[contains(text(),\"\u6b21\u306e\u30da\u30fc\u30b8 \u00bb\")]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" article \")]",
"url":"^http://breakr\\.net/",
"nextLink":"//a[contains(concat(\" \", @class, \" \"), \" next_page \")]"
},
{
"pageElement":"id(\"contentarea\")/div[@class=\"post\"]",
"url":"^http://usakura\\.jp/",
"nextLink":"id(\"contentarea\")/p/a[text()=\"Next \u00bb\"]"
},
{
"pageElement":"//form[@name=\"FrmPrdCompare\"]/table",
"url":"^http://kakaku\\.com/",
"nextLink":"//span[@class=\"next\"]/a"
},
{
"pageElement":"id(\"photo-list-inner\")/a[@class=\"iva\"]",
"url":"^http://kidol\\.jp/i/",
"nextLink":"//a[@accesskey=\"6\"]"
},
{
"pageElement":"id(\"content\")/div[@class=\"page_full\"]/*[(self::a and @name) or (self::div and @id)]",
"url":"^http://faveup\\.com/",
"nextLink":"id(\"content\")//a[@class=\"next_page\"]"
},
{
"pageElement":"//article[@class=\"entry\"]",
"url":"^http://rewish\\.org/",
"nextLink":"//div[@class=\"next\"]/a"
},
{
"pageElement":"//table[@class=\"app_list\"]/tbody/tr",
"url":"^http://buzzapp\\.jp/",
"nextLink":"//span[last()]/a"
},
{
"pageElement":"id(\"list_item\")/table[@class=\"list_itembox\"]",
"url":"^http://calamel\\.jp/",
"nextLink":"id(\"pagenate_bottom\")/p[@class=\"number\"]/*[last()][self::a]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" wf-main-body \")]",
"url":"^http://topsy\\.com/s",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" wf-main-body \")]//a[contains(concat(\" \", @class, \" \"), \" nav-pager-next \")]"
},
{
"pageElement":"id(\"txtlist\")/div[contains(concat(\" \",normalize-space(@class),\" \"), \" txt \")]",
"url":"^http://txt\\.io/\\w",
"nextLink":"id('content')//div[@class='pagination']/text()[contains(translate(.,'0123456789','**********'),'*')]/following-sibling::a[1]"
},
{
"insertBefore":"//div[@class=\"pagerRelative\"]/div[@class=\"pagerRelative\"]",
"pageElement":"//div[@class=\"parts\"]/dl",
"url":"^http://fesns\\.com/",
"nextLink":"//p[@class=\"next\"]/a[last()]"
},
{
"pageElement":"id(\"bookmarks\")/ul",
"url":"^http://memori\\.ru/",
"nextLink":"//a[@class=\"forward\"]"
},
{
"pageElement":"id(\"first-time\")/div",
"url":"^http://sinri\\.net/",
"nextLink":"id(\"first-time\")/p/a"
},
{
"pageElement":"id(\"notices\")",
"url":"^http://identi\\.ca/",
"nextLink":"id(\"nav_pagination\")/li[@class=\"after\"]/a[1]"
},
{
"pageElement":"id(\"honbun wpMainContent\")",
"url":"^http://kudok\\.com/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"content\")",
"url":"^http://drawr\\.net/",
"nextLink":"(//li[@class=\"left-food-link\"])[last()]/a"
},
{
"pageElement":"id(\"content Content mainContent\")/node()[following::*[@class=\"pager\"]]",
"url":"^http://okyuu\\.com/",
"nextLink":"id(\"content Content mainContent\")//div[@class=\"pager\"]//a[@rel=\"next\"]"
},
{
"pageElement":"//div[contains(concat(\" \", normalize-space(@class), \" \"), \" ui-widget \")][not(contains(concat(\" \", normalize-space(@class), \" \"), \" pagemove \") or contains(concat(\" \", normalize-space(@class), \" \"), \" news-area-content \"))]",
"url":"^http://bokete\\.jp/",
"nextLink":"//a[contains(concat(\" \", normalize-space(@class), \" \"), \" next-link \")]"
},
{
"pageElement":"id(\"recently-posted\")",
"url":"^http://hypem\\.com/",
"nextLink":"//span[@class=\"this-page\"]/following-sibling::a"
},
{
"pageElement":"id(\"content\")/node()[self::div[contains(concat(\" \",@class,\" \"),\" post \") or contains(concat(\" \",@class,\" \"),\" navigation \")] or self::h2]",
"url":"^http://s-tomo\\.jp/",
"nextLink":"id(\"content\")/div[last()]/a[contains(text(),\"\u00bb\")]"
},
{
"pageElement":"//ol[contains(concat(\" \", @class, \" \"), \" item-list \")]/li",
"url":"^http://cotoe\\.net/",
"nextLink":"//ul[contains(concat(\" \", @class, \" \"), \" pager \")]/li[last()]/a"
},
{
"pageElement":"id(\"search_result\")",
"url":"^http://zigsow\\.jp/",
"nextLink":"//span[@class=\"next\"][last()]/a"
},
{
"pageElement":"id(\"content\")",
"url":"^http://cyblog\\.jp/",
"nextLink":"id(\"content\")//a[child::u[contains(text(), \"\u00bb\")] or contains(text(), \"\u524d\u306e\u30a8\u30f3\u30c8\u30ea\")]"
},
{
"insertBefore":"rn",
"pageElement":"id(\"main\")//ul[@class]|id(\"main\")/div[@class=\"grid\"]/*|id(\"wrapper\")/div[@class=\"pagination\"]/preceding-sibling::*",
"url":"^http://mitter\\.jp/",
"nextLink":"id(\"main\")//div[@class=\"pagination\"]/a[@rel=\"next\"]"
},
{
"insertBefore":"//div[@class=\"ft\"]",
"pageElement":"//div[@class=\"mtb\"]",
"url":"^http://oekyo\\.org/",
"nextLink":"//li[last()]/a"
},
{
"pageElement":"id(\"zigsow-item-list\")",
"url":"^http://zigsow\\.jp/",
"nextLink":"//li[@class=\"selected-page\"]/following-sibling::li[1]/a"
},
{
"pageElement":"//a[text()=\"<<\u524d\u3078\" or text()=\"\u6b21\u3078>>\"][1]/following-sibling::table[1]",
"url":"^http://hissi\\.org/",
"nextLink":"//a[text()=\"\u6b21\u3078>>\"][1]"
},
{
"pageElement":"id(\"story\")",
"url":"^http://nymag\\.com/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"bodyArea\")//div[contains(concat(\" \", @class, \" \"), \" pageNavigation01 \")]/following-sibling::*[not(contains(translate(@class, \"NOPRS\", \"noprs\"), \"sponsor\")) and ./following-sibling::div[contains(concat(\" \", @class, \" \"), \" pageNavigation01 \")]]",
"url":"^https?://mixi\\.jp/",
"nextLink":"id(\"bodyArea\")//div[@class=\"pageList01\"]//li[@class=\"on\"]/following-sibling::li[1]/a|id(\"bodyArea\")//div[@class=\"pageList02\"]//a[starts-with(text(),\"\u6b21\")]"
},
{
"pageElement":"//div[@class=\"section\"]/div[@class=\"box\" and position()=3]",
"url":"^http://mf247\\.jp/",
"nextLink":"//a[@class=\"next\" or child::img[@class=\"next\"]]"
},
{
"pageElement":"id(\"wrapper\")/div/div[contains(@class, \"news-summary\")]",
"url":"^http://digg\\.com/",
"nextLink":"id(\"wrapper\")/div/div[@class=\"pages\"]/a[last()][@class=\"nextprev\"]"
},
{
"pageElement":"//ul[@class=\"mw-search-results\"]",
"url":".\\?(?:.+&)?search=",
"nextLink":"//a[@class=\"mw-nextlink\"]"
},
{
"pageElement":"id(\"primary\")/div[@class=\"articleIndex01C\"]/*",
"url":"^http://withd\\.jp/",
"nextLink":"//p[@class=\"next\"]/a"
},
{
"pageElement":"//div[@class=\"section\"]",
"url":"^http://naver\\.jp/",
"nextLink":"//div[@class=\"moreLinkWrapper\"]"
},
{
"pageElement":"//ul[@class=\"salelist_money\"]",
"url":"^http://duga\\.jp/.",
"nextLink":"//a[contains(text(),\"\u6b21\u306e10\u4ef6\")]"
},
{
"pageElement":"id(\"nextPrevBar\")/preceding-sibling::div",
"url":"^http://swik\\.net/",
"nextLink":"id(\"nextPrevBar\")/a[contains(., \">\")]"
},
{
"pageElement":"//p[contains(@class, \"c\")]",
"url":"^http://eiga\\.com/",
"nextLink":"//a[@title=\"Next\"]"
},
{
"pageElement":"id(\"main\")/*",
"url":"^http://miau\\.jp/",
"nextLink":"//a[@accesskey=\"n\"]"
},
{
"pageElement":"id(\"quotes\")/div[contains(@class,\"quote\") and not(.//*[@class=\"paging-big\"])]",
"url":"^http://inyo\\.jp/",
"nextLink":"id(\"paging-next\")"
},
{
"pageElement":"id(\"blog\")/div[@class=\"boxs\"]",
"url":"^http://cyta\\.jp/",
"nextLink":"//link[@rel=\"prev\"]"
},
{
"pageElement":"id(\"entry-list-target\")/div[contains(concat(\" \",normalize-space(@class),\" \"),\" page-title \") or contains(concat(\" \",normalize-space(@class),\" \"),\" entry \")]",
"url":"^http://femo\\.jp/",
"nextLink":"//p[contains(concat(\" \",normalize-space(@class),\" \"),\" pagenate \")]/a[contains(text(),\">\")]"
},
{
"pageElement":"id(\"header_holder\")/table[7]",
"url":"^http://eztv\\.it/",
"nextLink":"//a[contains(text(),\"next page\")]"
},
{
"pageElement":"//div[contains(@class, \"mainmaru\")]",
"url":"^http://10e\\.org/",
"nextLink":"//div[contains(@class, \"page\")]/a[text()=\"Next\"]"
},
{
"pageElement":"//div[starts-with(@id, \"nl-i\")]|//table[contains(concat(\" \", @class, \" \"), \" gridlist \")]",
"url":"^http://n4g\\.com/",
"nextLink":"//a[@class=\"nextpager-next\" or @class=\"next\"]"
},
{
"pageElement":"id(\"mini\")//h2[./*]/following-sibling::node()[./following-sibling::hr[./following-sibling::div/a[contains(.,\"\u6b21\u306e\u30da\u30fc\u30b8\")]]]",
"url":"^http://gazo\\.in/",
"nextLink":"id(\"mini\")/form/div/a[contains(.,\"\u6b21\u306e\u30da\u30fc\u30b8\")] | id(\"mini\")/div/a[contains(.,\"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"//table[@class=\"rejillavideos\" or @class=\"listado_videos\"]|id(\"rankinglist rankingblog\")",
"url":"^http://tu\\.tv/",
"nextLink":"id(\"actual\")/following-sibling::li[1]/a"
},
{
"pageElement":"//*[contains(concat(\" \", @class, \" \"), \" hentry \")]",
"url":"^https?://.",
"nextLink":"//link[contains(concat(\" \", translate(normalize-space(@rel),\"NEXT\",\"next\"), \" \"), \" next \")] | //a[contains(concat(\" \", translate(normalize-space(@rel),\"NEXT\",\"next\"), \" \"), \" next \")]"
},
{
"pageElement":"//div[@class=\"pico_container\"]",
"url":"^https?:",
"nextLink":"//td[@align=\"right\"]/a[@accesskey=\"F\"]"
},
{
"pageElement":"id(\"xigg-main-shownodes\")",
"url":"^https?:",
"nextLink":"//li[@class=\"pagesNext\"]/a"
},
{
"pageElement":"//div[@class=\"d3blogEntry clearFix\"]",
"url":"^https?:",
"nextLink":"//li[@class=\"pageNext\"]/a"
},
{
"insertBefore":"//div[@class=\"d3f_iconexps\"]",
"pageElement":"//table[@class=\"outer d3f_table\"]",
"url":"^https?:",
"nextLink":"//div[@class=\"d3f_pagenav\"]/b/following-sibling::a"
}
];

})();
