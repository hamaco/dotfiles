/**
 * ==VimperatorPlugin==
 * @name           hatena.js
 * @description    Access to Hatena Service quickly
 * @description-ja はてなのサービスに簡単にアクセス
 * @minVersion     2.1a1pre
 * @author         id:masa138, id:hitode909
 * @version        0.5.0
 * ==/VimperatorPlugin==
 *
 * Usage:
 * :hatena -> access to http://www.hatena.ne.jp/
 *
 * :hatena {host} -> access to http://{host}.hatena.ne.jp/
 *
 * :hatena {host} {user_id} -> access to http://{host}.hatena.ne.jp/{user_id}/
 *
 * :hatena {group_name}.g {user_id} -> access to http://{group_name}.g.hatena.ne.jp/{user_id}/
 *
 */
(function(){
	var alwaysCollect;
	var ignoreIds;

	var pageFor;
	var ids;

	function init() {
		alwaysCollect = liberator.globalVariables.alwaysCollect   || true;
		ignoreIds     = liberator.globalVariables.hatenaIgnoreIds || [];
		ignoreIds     = ignoreIds.concat(['login', 'entry', 'entrylist', 'auth', 'edit']);

		ids     = [];
		pageFor = [];
	}
	init();

	function collectLog() {
		init();
		var history = liberator.modules.history.get('.hatena.ne.jp');
		for (i in history) {
			var page = history[i];

			page.url.match('^https?://([a-zA-Z0-9.]*)\.hatena\.ne\.jp/([a-zA-Z0-9]{3,})?/?');
			var host = RegExp.$1;
			var id   = RegExp.$2;
			if (host != '') {
				if (!pageFor[host]) {
					pageFor[host] = page;
				}
				if (pageFor[host].url.length > page.url.length) {
					pageFor[host] = page;
				}
			}
			if (id != '' && !id.match(ignoreIds.join('|')) && ids.indexOf(id) == -1) {
				ids.push(id);
			}
		}
	}
	collectLog();

	commands.addUserCommand(["hatena"], "Access to Hatene Service Quickly",
	function(args) {
		var host = args[0] ? args[0].toString() : 'www';
		var id   = args[1] ? args[1].toString() + '/' : '';
		var uri = 'http://' + encodeURIComponent(host) + '.hatena.ne.jp/';
		liberator.open(uri + id, liberator.NEW_TAB);
	}, {
		completer: function (context, args) {
			if (args.length == 1) {
				if (alwaysCollect) collectLog();
				context.title = ["Host", "Service"];
				context.completions = [[h, pageFor[h].title] for (h in pageFor)];
			} else {
				context.title = ["ID", ''];
				context.completions = [[i, ''] for each (i in ids)];
			}
		}
	}
);
})();
// vim:sw=4 ts=4 et:
