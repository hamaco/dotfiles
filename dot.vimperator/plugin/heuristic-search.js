var PLUGIN_INFO =
<VimperatorPlugin>
<name>heuristic-search</name>
<description>Heuristic search</description>
<author mail="hitode909@gmail.com" homepage="http://www.hatena.ne.jp/hitode909/">hitode909</author>
<version>0.1</version>
<detail><![CDATA[

== Commands ==
:heuristicsearch {keywords}
    Heuristic search with keywords

:setyahooappid
    Set Yahoo Application ID

== Dependencies ==
- Application ID for Yahoo! Developer Network
- Hatena Bookmark Extension for Firefox

== How this work ==
extract body -> get key phrases -> search with selected key phrases.

== More Information(Japanese) ==
http://d.hatena.ne.jp/hitode909/20100214/1266129415

]]></detail>
</VimperatorPlugin>;
(function(){
    var YahooAppHost = "chrome://vimperator-hsearch";
    var YahooAppRealm = "Yahoo Application ID";
    var prompts = Cc["@mozilla.org/embedcomp/prompt-service;1"].getService(Ci.nsIPromptService);
    var loginManager = Cc["@mozilla.org/login-manager;1"].getService(Ci.nsILoginManager);
	  
    var KeywordCache = {};

    function removeYahooAppID() {
        var logins = loginManager.findLogins({}, YahooAppHost, null, YahooAppRealm);
        if (logins.length > 0) {
            loginManager.removeLogin(logins[0]);
            return true;
        }
        return false;
    }

    function getYahooAppID() {
        var logins = loginManager.findLogins({}, YahooAppHost, null, YahooAppRealm);
        if (logins.length > 0) {
            return logins[0].password;
        }
        var password = {value:""};
        if (!prompts.promptPassword(window,"Heuristic Search","Yahoo Application ID", password,"",{})) {
            return null;
        }
        var loginInfo = Cc["@mozilla.org/login-manager/loginInfo;1"].createInstance(Ci.nsILoginInfo);
        loginInfo.init(YahooAppHost, null, YahooAppRealm, "username", password.value, "", "");
        try {
            loginManager.addLogin(loginInfo);
            return password.value;
        } catch(e) {
            liberator.echoerr(e);
            return null;
        }
    }
    function extractBody() {
        try {
            if (typeof ExtractContentJS == "undefined")
                liberator.loadScript('resource://hatenabookmark/modules/20-ExtractContentJS.jsm');
        } catch(e) {
            liberator.echoerr("resource://hatenabookmark/modules/20-ExtractContentJS.jsm is null");
            return null;
        }
        var ex = new ExtractContentJS.LayeredExtractor();
        ex.addHandler( ex.factory.getHandler('Heuristics') );
        var res = ex.extract(window.content.document);
        if (res.isSuccess) {
            return res.content.toString();
        } else {
            liberator.echoerr('ExtractContentJS not success');
            return null;
        }
    }

    function getKeyword() {
        var href = window.content.location.href;
        var selected = libly.$U.getSelectedString();
        var cache_key = [href, selected].join('-');

        if (KeywordCache[cache_key]) return KeywordCache[cache_key];

        var body = selected || extractBody();
        if (!body) return;
        var yahoo_id = getYahooAppID();
        if (!yahoo_id) {
            liberator.echoerr('Yahoo Application ID is null');
            return null;
        }

        var postbody = [
            'appid=',
            yahoo_id,
            '&output=json',
            '&sentence=',
            encodeURIComponent(body)
        ].join('');

        var req = new libly.Request(
            'http://jlp.yahooapis.jp/KeyphraseService/V1/extract',
            null,
            {postBody: postbody, asynchronous: false}
        );
        var result = [];
        req.addEventListener("onSuccess", function(res) {
            var got = eval("("+res.responseText+")");
            for(var k in got) if (got.hasOwnProperty(k)) {
                result.push([k, got[k]]);
            }
            KeywordCache[cache_key] = result;
        });
        req.addEventListener("onFailure", function(res) {
            liberator.echoerr(res.responseText);
            liberator.echoerr(":setyahooappid to set Yahoo Application ID.");
        });
        req.post();
        return result;
    }

    function showLicense() {
        if (window.content.document.querySelector('div#yahoo-api-license')) return;
        var dummy = window.content.document.createElement('div');
        dummy.innerHTML = '<!-- Begin Yahoo! JAPAN Web Services Attribution Snippet --><a href="http://developer.yahoo.co.jp/about"><img src="http://i.yimg.jp/images/yjdn/yjdn_attbtn2_88_35.gif" width="88" height="35" title="Webサービス by Yahoo! JAPAN" alt="Webサービス by Yahoo! JAPAN" border="0" style="margin:15px 15px 15px 15px"></a><!-- End Yahoo! JAPAN Web Services Attribution Snippet -->';
        dummy.id = "yahoo-api-license";
        window.content.document.body.insertBefore(dummy, window.content.document.body.firstChild);
    }

    commands.addUserCommand(["heuristicsearch"], "Heuristic search",
        function(args) {
            showLicense();
            var completions = getKeyword().map(function(pair){ return pair[0] });
            if (/\./.test(args.join('')) && completions.indexOf(args[0]) != -1 ) {
                args.unshift(options['defsearch']);
            };
            liberator.open(args.join(' '), liberator.NEW_TAB);
        }, {
            completer: function (context, args) {
                showLicense();
                context.ignoreCase = true;
                context.anchored = false;
                context.title = ["Keyword", "Score"];
                context.completions = getKeyword();
            }
        },
        true
    );

    commands.addUserCommand(["setyahooappid"], "Remove Yahoo Application ID",
        function(args) {
            removeYahooAppID();
            if (getYahooAppID()) {
                liberator.echo("Your Yahoo Application ID has been set.");
            }
        },
        null,
        true
    );

})();
// vim:sw=4 ts=4 et:
