/**
 * ==VimperatorPlugin==
 * @name           account_switcher.js
 * @description    switch account easily
 * @description-ja 複数のアカウントを切り替える
 * @minVersion     2.1a1pre
 * @author         masa138
 * @version        0.0.3
 * ==/VimperatorPlugin==
 *
 * Usage:
 * :as {username}
 *
 */
(function(){
    var services = liberator.globalVariables.accountSwitcherServices;
    services     = (services != null) ? services : [];

    var manager = Components.classes["@mozilla.org/login-manager;1"].getService(Components.interfaces.nsILoginManager);
    var accounts = [];

    var ns         = 'http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul';
    var statusBar  = document.getElementById('status-bar');
    var targetElem = document.getElementById('page-report-button');
    var afterSLine = targetElem.nextSibling;
    var sbPannel   = document.createElementNS(ns, 'statusbarpannel');
    sbPannel.id    = 'account-switcher-pannel';
    var img        = document.createElementNS(ns, 'image');
    sbPannel.appendChild(img);

    var _services = {
        google: {
            host   : 'https://www.google.com',
            login  : '/accounts/LoginAuth',
            id     : 'Email',
            pw     : 'Passwd',
            logout : '/accounts/Logout',
            jump   : 'https://www.google.com/accounts/ManageAccount'
        },
        hatena: {
            host   : 'https://www.hatena.ne.jp',
            login  : '/login',
            id     : 'name',
            pw     : 'password',
            logout : '/logout'
        },
        hatelabo: {
            host   : 'https://www.hatelabo.jp',
            login  : '/login',
            id     : 'mode=enter&key',
            pw     : 'password',
            logout : '/logout',
            jump   : 'http://hatelabo.jp/'
        }
    };

    function init() {
        for (key in _services) {
            if (services[key] == null) {
                services[key] = _services[key];
            }
        }

        var hosts = [key for (key in services)];
        for (i in hosts) {
            var host = hosts[i];
            var logins = manager.findLogins({}, services[host].host, "", null);
            for (var i = 0; i < logins.length; i++) {
                var login = logins[i];
                var a = accounts[[login.username, host].join('@')] = {};
                a.username = login.username,
                a.password=login.password,
                a.host = host;
            }
        }
    }

    function changeAccount(user) {
        var username = accounts[user].username;
        var password = accounts[user].password;
        var service  = services[accounts[user].host];

        if (password == null) return;

        var req = new XMLHttpRequest();
        req.open("POST", service.host + service.logout, true);
        req.onload = function(e) {
            var req = new XMLHttpRequest();
            req.open("POST", service.host + service.login, true);
            req.onload = function(e) {
                if (service.jump != null) {
                    content.location = service.jump;
                } else if(content.location != 'about:blank') {
                    content.location.reload();
                }
                if (service.host.match(/hatena\.ne\.jp/)) {
                    img.setAttribute('src', 'http://www.hatena.ne.jp/users/' + username.substr(0, 2) + '/' + username + '/profile_s.gif');
                    if (!document.getElementById('account_switcher_pannel')) {
                        if (afterSLine != null) {
                            statusBar.insertBefore(sbPannel, afterSLine);
                        } else {
                            statusBar.appendChild(sbPannel);
                        }
                    }
                }
            }
            req.onerror = function(e) { liberator.echoerr('Login error in account_switcher.js'); }
            req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            req.send(
                service.id + '=' + encodeURIComponent(username) + '&' +
                service.pw + '=' + encodeURIComponent(password)
            );
        }
        req.onerror = function(e) { liberator.echoerr('Logout error in account_switcher.js'); }
        req.send(null);
    }

    commands.addUserCommand(["as"], "Account Switcher",
        function(args) {
            if ( !args ) {
                liberator.echo("Usage: as {username}");
            } else {
                changeAccount(args[0]);
            }
        }, {
            completer: function(context, args) {
                init();
                context.title = ["Account", "Service"];
                var compls = [[key, accounts[key].host] for (key in accounts)];
                if (args.length > 0) {
                    for (var i = 0; i < args.length; i++) {
                        var user = args[i];
                        if (user != '') {
                            compls = compls.filter(function(c) { return c[0].indexOf(user) != -1 });
                        }
                    }
                }
                return [0, compls];
            }
        }
    );
})();
// vim:sw=4 ts=4 et:
