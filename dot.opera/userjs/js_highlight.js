// ==UserScript==
// @name      JSfile Highlighter for Opera
// @namespace http://misttrap.s101.xrea.com/
// @include   *//*/*.js*
// ==/UserScript==

(function() {
	var html = document.documentElement;
	var body = html.firstChild;
	var pre  = body.firstChild;
	if(pre.nodeName != 'PRE') return;

	var Configure = {
		rotation : [2, 4, 0 /* raw display */],
		index    : 0,
		tabkey   : 116, // "t" key
		wrapped  : true,
		wrapkey  : 119  // "w" key
	};

	var JSHighlighter = function(str) {
		this.str  = str.replace(/\r\n?/g, '\n');
		this.txt  = this.str.split('');
		this.len  = this.str.length;
		this.i    = 0;
		this.pos  = 0;
		this.code = [];
		this.callback = this.getCallback();
	};

	JSHighlighter.prototype = {
		getText : function() {
			for(var txt = this.txt, len = this.len; this.i < len; this.i++) {
				var now = txt[this.i];
				if(now == "'" || now == '"') {
					this.setBaseText();
					this.string(now);
				} else if(now == '/') {
					this.setBaseText();
					var next = txt[++this.i];
					if(next == '/') {
						this.singleComment();
					} else if(next == '*') {
						this.multiComment();
					} else if(this.isRegExpCase()) {
						this.regExp();
					} else if(next == "'" || next == '"') {
						this.setBaseText();
						this.string(next);
					}
				}
			}
			// 全ての文字を読み終えた時点で解析できていない分の処理
			this.pos < len && this.setBaseText();
			return this.code.join('');
		},
		string : function(quo) {
			for(var txt = this.txt, len = this.len;
				++this.i < len && (txt[this.i] != quo || this.isEscaped()););
			this.setExtraText('literal');
		},
		regExp : function() {
			for(var txt = this.txt, len = this.len;
				++this.i < len && (txt[this.i] != '/' || this.isEscaped()););
			// 正規表現修飾子の処理、"/"の直後の子文字の連続を検出
			while(++this.i < len && 'gimy'.indexOf(txt[this.i]) != -1);
			this.i--;
			this.setExtraText('literal');
		},
		singleComment : function() {
			for(var txt = this.txt, len = this.len; ++this.i < len && txt[this.i] != '\n';);
			this.setExtraText('comment');
		},
		multiComment : function() {
			// コメント3文字目("/*"の次)に対して終了判定を行わないようにする
			this.i++;
			for(var txt = this.txt, len = this.len;
				++this.i < len && (txt[this.i] != '/' || txt[this.i - 1] != '*'););
			this.setExtraText('comment');
		},
		// 除算演算子、あきらかな構文エラーに対してfalseを返す
		isRegExpCase : function() {
			// 記号タイプの演算子 ("&", "<", ">"の実体参照の";"を含む)
			var syms = '-+*/%!~^|=?:;,[({}';
			// Expression不要でStatementの"{}"が省略可能な宣言 (var, constを除く)
			// キーワードタイプの演算子
			var opes = />(case|delete|do|else|instanceof|in|new|return|throw|typeof|void)<\/span>$/;
			var code = this.code, i = code.length - 1, trio = code[i].match(/^([\s\S]*)(\S)/);
			if(trio) {
				return trio[2] == ')'
					? this.isExpression(i, trio[1])
					: syms.indexOf(trio[2]) != -1 || opes.test(trio[0]);
			}
			while(i-- > 0) {
				trio = code[i].match(/^([\s\S]*)(\S)/);
				if(!trio || trio[0].indexOf('<span class="comment">') != -1) continue;
				return trio[2] == ')'
					? this.isExpression(i, trio[1])
					: syms.indexOf(trio[2]) != -1 || opes.test(trio[0]);
			}
			return true; // スクリプト冒頭の"/"
		},
		isExpression : function(i, buf) {
			for(var pair, level = 1; pair = buf.match(/([()])[^()]*$/);) {
				buf = RegExp.leftContext;
				if(pair[1] == ')') {
					level++;
				} else if(!--level) {
					return this.isDeclaration(i, buf);
				}
			}
			for(var code = this.code; i-- > 0;) {
				if(/<span class="(literal|comment)">/.test(buf = code[i])) continue;
				while(pair = buf.match(/([()])[^()]*$/)) {
					buf = RegExp.leftContext;
					if(pair[1] == ')') {
						level++;
					} else if(!--level) {
						return this.isDeclaration(i, buf);
					}
				}
			}
			return false; // "()"の入れ子が不整合
		},
		isDeclaration : function(i, buf) {
			// Expression必須でStatementの"{}"が省略可能な宣言
			var decs = />(for|if|while|with)<\/span>\s*$/;
			if(/\S/.test(buf)) return decs.test(buf);
			for(var code = this.code; i-- > 0;) {
				if(!/^\s*$|<span class="comment">/.test(buf = code[i])) {
					return decs.test(buf);
				}
			}
			return false; // スクリプト冒頭の"("
		},
		// 現在の文字の直前に奇数個の"\"が存在していることを判定
		isEscaped : function() {
			for(var txt = this.txt, i = this.i, pos = this.pos; --i > pos && txt[i] == '\\';);
			return (this.i - i & 1) == 0;
		},
		setExtraText : function(className) {
			this.code.push(
				this.str.substring(this.pos, this.pos = this.i + 1).replace(
					// 空行及び空白のみ行以外で、両端の空白を取り除いた文字列にマッチ
					/\S.*\S|\S/gm, '<span class="' + className + '">$&</span>'
				)
			);
		},
		setBaseText : function() {
			this.code.push(
				this.str.substring(this.pos, this.pos = this.i).replace(/[\w$]+/g, this.callback)
			);
		},
		getCallback : function() {
			var list = this.extend('keyword', 'objects', 'spValue');
			return function(r0) {
				return Object.prototype.hasOwnProperty.call(list, r0) ? list[r0] : r0;
			};
		},
		// "単語 : 単語の属するクラス名"の対応表を作成
		extend : function() {
			for(var i = arguments.length, res = {}, val; i-- > 0;)
				for(var key = arguments[i], arr = this[key], j = arr.length; j-- > 0;)
					res[val = arr[j]] = '<span class="' + key + '">' + val + '</span>';
			return res;
		},
		keyword : [
			'arguments', 'break', 'case', 'catch', 'const',
			'continue', 'default', 'delete', 'do', 'else',
			'finally', 'for', 'function', 'if', 'instanceof',
			'in', 'new', 'return', 'switch', 'this',
			'throw', 'try', 'typeof', 'var', 'void',
			'while', 'with'
		],
		objects : [
			'ActiveXObject', 'Array', 'Boolean', 'Date', 'Element',
			'Event', 'Function', 'Image', 'Math', 'Node',
			'Number', 'Object', 'Option', 'RegExp', 'String',
			'WScript', 'XMLHttpRequest', 'document', 'history', 'location',
			'navigator', 'screen', 'undefined', 'window'
		],
		spValue : [
			'false', 'null', 'true'
		]
	};

	var TabChanger = function(args) {
		this.order = args.rotation;
		this.i     = args.index;
		this.key   = args.tabkey;
		this.width = 0;
		this.count = 0;
		this.spaces = this.getSpaces();
		this.exText = document.createExpression('//span[@class="tabchar"]/text()', null);
		[this.lists, this.times] = this.evaluate(document);
	};

	TabChanger.prototype = {
		setChars : function() {
			var chars = this.order[this.i], i = 0, len;
			if(chars > 0) {
				var lists = this.lists, times = this.times;
				for(len = lists.length; i < len;) {
					this.count = times[i];
					this.inspect(lists[i++], chars);
				}
			} else {
				var items = this.exText.evaluate(document, 7, null);
				for(len = items.snapshotLength; i < len;) {
					items.snapshotItem(i++).nodeValue = '\t';
				}
			}
		},
		inspect : function(parent, chars) {
			for(var i = 0, childs = parent.childNodes, len = childs.length;
				this.count > 0 && i < len;) {
				var child = childs[i++];
				if(child.nodeType == 3) {
					this.width += this.getWidth(child.nodeValue);
				} else if(child.className != 'tabchar') {
					this.inspect(child, chars);
				} else {
					child.firstChild.nodeValue = this.spaces[chars - this.width % chars];
					this.width = 0;
					this.count--;
				}
			}
		},
		getWidth : function(str) {
			for(var i = str.length, res = i, charCode; i-- > 0;)
				(charCode = str.charCodeAt(i)) > 0x7F    &&
				(charCode < 0xFF61 || charCode > 0xFF9F) && res++;
			return res;
		},
		getSpaces : function() {
			for(var i = 1, max = Math.max.apply(Math, this.order), res = ['']; i <= max;)
				res[i] = Array(++i).join(' ');
			return res;
		},
		evaluate : function(doc) {
			var lists = [], times = [];
			var items = doc.evaluate('//li[.//span[@class="tabchar"]]', doc, null, 7, null);
			var exTab = doc.createExpression('count(.//span[@class="tabchar"])', null);
			for(var i = 0, len = items.snapshotLength; i < len;)
				times[i] = exTab.evaluate(
					lists[i] = items.snapshotItem(i++), 1, null
				).numberValue;
			return [lists, times];
		},
		initEvent : function() {
			KeyBind.add(this.key, this.increment, this);
		},
		increment : function() {
			this.i = (this.i + 1) % this.order.length;
			this.setChars();
		}
	};

	var WrapChanger = function(args) {
		this.wrap  = args.wrapped;
		this.key   = args.wrapkey;
		this.style = this.getStyle();
	};

	WrapChanger.prototype = {
		getStyle : function() {
			var rules = document.styleSheets[0].cssRules;
			for(var i = rules.length; i-- > 0;) {
				var rule = rules[i];
				if(rule.selectorText.toLowerCase() == 'li') {
					return rule.style;
				}
			}
		},
		initEvent : function() {
			KeyBind.add(this.key, this.shift, this);
		},
		shift : function() {
			this.style.whiteSpace = (this.wrap = !this.wrap) ? 'pre-wrap' : 'pre';
		}
	};

	var KeyBind = {
		initialize : function() {
			var self = this;
			document.addEventListener('keypress', function(evt) {
				var funcs = self['key_' + evt.which];
				if(!funcs) return;
				for(var i = 0, len = funcs.length; i < len;) {
					var pair = funcs[i++]
					pair[0].call(pair[1], evt);
				}
				evt.preventDefault();
			}, false);
		},
		add : function(key, callback, thisObject) {
			var method = 'key_' + key;
			(this[method] || (this[method] = [])).push([callback, thisObject]);
		}
	};

	KeyBind.initialize();

	new function() {
		// add ">" mark (color : #cacaca, size : 5 x 9)
		var TAB_MARK = 'data:image/gif;base64,' +
			'R0lGODlhBQAJAIgAAP///8rKyiH5BAEAAAAALAAAAAAFAAkAAAIKDH6GoNjpIpynAAA7';

		// caching image data on hidden iframe
		var iframe = document.createElement('iframe');
		iframe.style.display = 'none';
		var ifrdoc = body.appendChild(iframe).contentDocument;
		ifrdoc.open('text/html');
		ifrdoc.write('<html><body><img src="' + TAB_MARK + '"></body></html>');
		ifrdoc.close();

		html.insertBefore(
			document.createElement('head'), body
		).innerHTML = [
			'<title>' + location.href + '</title>',
			'<style type="text/css">',
			'body {',
				'background-color: #fafafa;',
			'}',
			'li {',
				'font: 15px/1 monospace;',
				'border-bottom: 1px solid #fafafa;',
				/* don't delete! */
				'white-space: ' + (Configure.wrapped ? 'pre-wrap' : 'pre') + ';',
				/* don't delete! */
			'}',
			'li:hover {',
				'border-bottom-color: #808080;',
			'}',
			'.empty {',
				'content: "\\A";',
				'white-space: pre;',
			'}',
			'.keyword {',
				'color: #0000ff;',
			'}',
			'.objects {',
				'color: #ffa500;',
			'}',
			'.literal, .spValue {',
				'color: #008000;',
			'}',
			'.comment {',
				'color: #ff0000;',
			'}',
			'.tabchar {',
				'background: transparent url("' + TAB_MARK + '") no-repeat scroll 1px 50%;',
			'}',
			'</style>'
		].join('');

		var txts = new JSHighlighter(pre.innerHTML)
			.getText()
			.replace(/\t/g, '<span class="tabchar">\t</span>')
			.split('\n');
		for(var i = 0, len = txts.length, code = []; i < len; i++) {
			var txt = txts[i];
			code[i] = txt ? '<li>' + txt + '</li>' : '<li class="empty"></li>';
		}
		body.innerHTML = '<ol>' + code.join('') + '</ol>';

		var tc = new TabChanger(Configure);
		tc.setChars();
		tc.initEvent();

		new WrapChanger(Configure).initEvent();
	};

})();
