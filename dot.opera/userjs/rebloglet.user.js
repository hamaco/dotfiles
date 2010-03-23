// ==UserScript==
// @name           Rebloglet
// @namespace      http://www.hatena.ne.jp/cxx/
// @include        http://www.tumblr.com/dashboard*
// @license        Public domain
// @version        0.3.20090822.0
// ==/UserScript==

(function(){

if (window.bookmarkletAlreadyExecuted)
  return;
window.bookmarkletAlreadyExecuted = true;

var isIPhoneView = (window.location.pathname.indexOf('/iphone') == 0);

function $(id) {
  return document.getElementById(id);
}

function $x(xpath, context) {
  context = context || document;
  var retval = [];
  var result = document.evaluate(xpath, context, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
  var node;
  while (node = result.iterateNext())
    retval.push(node);
  return retval;
}

function escapeSpecialChars(s) {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&apos;').replace(/</g, '&lt;').replace('>', '&gt;'); //"
}

function doXMLHttpRequest(options) {
  var client = new XMLHttpRequest();
  if (typeof options.data == 'string') {
    var method = 'POST';
    var data = options.data;
  }
  else {
    var method = 'GET';
    var data = null;
  }
  client.open(method, options.uri);
  if (typeof options.header == 'object')
    for (var name in options.header)
      client.setRequestHeader(name, options.header[name]);

  var timeoutId = null;
  if (typeof options.onError == 'function') {
    var timeoutHandler = function() {
      client.onreadystatechange = null;
      client.abort();
      options.onError(client);
    };
    var timeout = 1000 * 60 * 5;
    timeoutId = window.setTimeout(timeoutHandler, timeout);
  }

  client.onreadystatechange = function() {
    if (timeoutId)
      window.clearTimeout(timeoutId);
    if (client.readyState == 4) {
      if (200 <= client.status && client.status < 300) {
        if (typeof options.onLoad == 'function')
          options.onLoad(client);
      }
      else {
        if (typeof options.onError == 'function')
          options.onError(client);
      }
    }
    else if (timeoutId)
      timeoutId = window.setTimeout(timeoutHandler, timeout);
  };

  client.send(data);
}

function reblog(uri, options) {
  options = options || {};
  if (options.popup && isIPhoneView) {
    window.open(uri)
    return;
  }
  doXMLHttpRequest({
    uri: uri,
    onLoad: function(response) {
      var formExp = /<form action="\/reblog[\s\S]*?<\/form>/; //"
      var div = document.createElement('div');
      div.innerHTML = response.responseText.match(formExp)[0];
      var form = new Form(div.firstChild);
      form.onError = function() {
        if (window.confirm('Failed to reblog the post. Retry?'))
          form.submit();
      };
      if (options.comment) {
        var element = form.element;
        var type = element['post[type]'].value;
        var textarea = element[type == 'link' ? 'post[three]' : 'post[two]'];
        if (type == 'conversation')
          textarea.value = textarea.value + '\n' + options.comment;
        else if (textarea.value.match(/<p><\/p>$/))
          textarea.value = textarea.value.replace(/<p><\/p>$/, '<p>' + options.comment + '</p>');
        else
          textarea.value = textarea.value + '\n<p>' + options.comment + '</p>';
      }
      if (options.private)
        form.element['post[state]'].value = 'private';
      form[options.popup ? 'show' : 'submit']();
    },
    onError: function() {
      if (window.confirm('Failed to reblog the post. Retry?'))
        reblog(uri, options);
    }
  });
}

function enableScrollEvent(enable) {
  if (arguments.length == 0)
    enable = true;
  window[enable ? 'removeEventListener' : 'addEventListener']('scroll', enableScrollEvent.listener, true);
}

enableScrollEvent.listener = function(event) { event.stopPropagation(); };

function StyleSheet() {
  this.style = document.createElement('style');
  this.style.type = 'text/css';
  $x('//head')[0].appendChild(this.style);
}

StyleSheet.prototype.add = function(rule) {
  this.style.sheet.insertRule(rule, this.style.sheet.cssRules.length);
  return this;
};

function Dialog(foreground) {
  var self = this;
  this.background = document.createElement('div');
  this.background.className = 'background';
  this.background.addEventListener('click', function() { self.hide(); }, false);
  this.foreground = foreground;
}

Dialog.prototype.show = function() {
  enableScrollEvent(false);
  this.background.style.height = document.body.offsetHeight + 'px';
  document.body.appendChild(this.background);
  document.body.appendChild(this.foreground);
};

Dialog.prototype.hide = function() {
  document.body.removeChild(this.foreground);
  document.body.removeChild(this.background);
  enableScrollEvent(true);
};

function Form(element) {
  this.element = element;
}

Form.urlencode = function(s) {
  return encodeURIComponent(s).replace(/%20/g, '+');
};

Form.generateBoundary = function() {
  var length = 20;
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'()+_,-./:=?";
  var retval = '';
  for (var i = 0; i < length; i++)
    retval += chars.charAt(Math.floor(Math.random() * chars.length));
  return retval;
};

Form.prototype.extractData = function() {
  var form = this.element;
  var retval = [];
  var submitAppeared = false;
  for (var i = 0; i < form.length; i++) {
    var elem = form.elements[i];
    if (elem.disabled || ((elem.type == 'submit' || elem.type == 'image') && submitAppeared))
      continue;
    if (elem.type == 'submit' || elem.type == 'image')
      submitAppeared = true;
    if (!elem.name)
      continue;
    switch (elem.type) {
    case 'text':
    case 'password':
    case 'submit':
    case 'hidden':
    case 'image':
    case 'button':
    case 'textarea':
      retval.push({ name: elem.name, value: elem.value });
      break;
    case 'checkbox':
    case 'radio':
      if (elem.checked)
        retval.push({ name: elem.name, value: elem.value });
      break;
    case 'select-multiple':
      if (elem.selectedIndex != -1)
        for (var i = elem.selectedIndex; i < elem.length; i++)
          if (elem.options[i].selected)
            retval.push({ name: elem.name, value: elem.options[i].value });
      break;
    case 'select-one':
      if (elem.selectedIndex != -1)
        retval.push({ name: elem.name, value: elem.options[elem.selectedIndex].value });
      break;
    }
  }
  return retval;
};

Form.prototype.submit = function() {
  var form = this.element;
  var data = this.extractData();
  if (form.enctype == 'multipart/form-data') {
    for (;;) {
      var boundary = Form.generateBoundary();
      if (data.every(function(e) { return e.value.indexOf(boundary) == -1 }))
        break;
    }
    var contentType = 'multipart/form-data; boundary="' + boundary + '"';
    var dashBoundary = '--' + boundary;
    var delimiter = '\r\n' + dashBoundary;
    var body = dashBoundary + '\r\n' + data.map(function(e) {
      return 'Content-Disposition: form-data; name="' + e.name + '"\r\n\r\n' + e.value;
    }).join(delimiter + '\r\n') + delimiter + '--';
  }
  else {
    var contentType = 'application/x-www-form-urlencoded';
    var body = data.map(function(e) {
      return Form.urlencode(e.name) + '=' + Form.urlencode(e.value);
    }).join('&');
  }

  doXMLHttpRequest({
    uri: form.action,
    header: { 'Content-Type': contentType },
    data: body,
    onLoad: this.onLoad,
    onError: this.onError
  });
};

Form.prototype.show = function() {
  var self = this;
  $x('.//div[@id="left_column"]', this.element)[0].style.width = '400px';
  if (!this.submitListener) {
    this.submitListener = function(event) {
      self.dialog.hide();
      self.submit();
      event.preventDefault();
    };
    this.element.addEventListener('submit', this.submitListener, false);
  }
  this.container = document.createElement('div');
  this.container.className = 'form_container';
  this.container.style.top = window.pageYOffset + 'px';
  this.container.appendChild(this.element);
  this.dialog = new Dialog(this.container);
  this.dialog.show();
};

function Pager() {
  var self = this;
  if (isIPhoneView) {
    this.nextLinkNode = $x('//a[./div[@id="load_more_posts"]]')[0];
    this.paginationNode = this.nextLinkNode;
    this.postsExp = /<!-- START POSTS -->([\s\S]*)<!-- END POSTS -->/;
  }
  else {
    this.paginationNode = $('pagination');
    this.nextLinkNode = $x('./a[contains(text(),"Next page")]', this.paginationNode)[0];
    this.postsExp = /<!-- Posts -->\s*<ol id="posts" ?>([\s\S]*)<\/ol>\s*<!-- No posts found -->/;
  }
  nextLinkNode = this.nextLinkNode;
  paginationNode = this.paginationNode;

  var curUri = this.curUri = window.location.pathname.replace(/\/$/, '');
  curUri.match(/(.*\/(?:search|filter)\/[^\/]*)(?:\/(\d+))?$/)
    || curUri.match(/^(\/dashboard)(?:\/(\d+))?/)
    || curUri.match(/^(\/(?:tumblelog|liked\/by)\/[^\/]+)(?:\/(\d+))?$/)
    || curUri.match(/^(.*?)(?:\/(\d+))?\/?$/);
  this.baseUri = RegExp.$1;
  this.baseNum = Number(RegExp.$2 || 1);

  this.state = 'load';
  this.listeners = [];
  if (window.location.hash) {
    var range = document.createRange();
    range.selectNodeContents($('posts'));
    range.deleteContents();
    range.detach();
    this.nextUri = decodeURIComponent(window.location.hash.slice(1));
    this.minPostId = Infinity;
    window.setTimeout(function() { self.loadNext(); }, 0);
  }
  else {
    $x('id("posts")/text()').forEach(function(text) { postsNode.removeChild(text); });
    var last = $x('id("posts")/*[last()]')[0];
    this.minPostId = Number(last.id.match(/\d+/)[0]);
    if (this.baseUri == '/dashboard')
      this.nextUri = '/dashboard/' + (this.baseNum + 1) + '/' + this.minPostId;
    else if (this.baseUri == '/iphone')
      this.nextUri = '/iphone?offset=' + this.minPostId + '&page=' + (this.baseNum + 1);
    else if (this.baseUri.indexOf('/popular') == 0)
      this.nextUri = null;
    else
      this.nextUri = this.baseUri + '/' + (this.baseNum + 1) + '?offset=' + this.minPostId;
  }

  this.inProgress = false;
  this.failure = false;
  this.nextLinkNode.addEventListener('click', function(event) {
    if (self.loadNext())
      event.preventDefault();
  }, false);
  window.addEventListener('scroll', Pager.scrollListener, false);
  if (isIPhoneView) {
    this.addListener(function(posts) {
      posts.forEach(function(post) {
        var heart = $(post.id.replace('post_', 'post_heart_'));
        if (heart) {
          var meta = $x('.//div[@class="meta"]', post)[0];
          if (meta) {
            heart.style.cssFloat = 'right';
            heart.style.marginLeft = '10px';
            meta.insertBefore(heart, meta.firstChild);
          }
        }
        var photo = $x('.//img[@class="photo"]', post)[0];
        if (photo && post.innerHTML.match(/toggle_photo_thumbnail\(this, \['([^']+)'/)) { //'
          photo.style.width = 'auto';
          photo.style.height = 'auto';
          photo.style.maxWidth = (viewWidth - 86) + 'px';
          photo.style.marginLeft = '0';
          photo.src = RegExp.$1;
        }
      });
    });
  }
}

Pager.scrollListener = function() {
  if (window.pageYOffset == 0) {
    var posts = $('posts');
    var padding = $x('./*[@class="padding"]', posts)[0];
    if (padding)
      posts.removeChild(padding);
  }
};

Pager.prototype.loadNext = function() {
  var self = this;
  if (this.inProgress || !this.nextUri)
    return false;
  this.inProgress = true;
  this.failure = false;

  doXMLHttpRequest({
    uri: this.nextUri,
    onLoad: function(response) {
      var text = response.responseText;
      var div = document.createElement('div');
      div.innerHTML = text.match(self.postsExp)[1];
      var newPosts = $x('./*', div);
      self.minPostId = Number(newPosts[newPosts.length - 1].id.match(/\d+/)[0]);
      var fragment = document.createDocumentFragment();
      newPosts.forEach(function(post) { fragment.appendChild(post); });
      postsNode.appendChild(fragment);
      if (!postIterator.getCurrent())
        postIterator.setCurrent($x('id("posts")/*[contains(@id,"post")][1]')[0]);
      self.listeners.forEach(function(listener){ listener(newPosts, self.minPostId); });
      window.setTimeout(function() { self.removePassedPosts(); }, 0);

      var nextUri;
      self.baseNum += 1;
      switch (self.baseUri) {
      case '/dashboard':
        nextUri = '/dashboard/' + (self.baseNum + 1) + '/' + self.minPostId;
        break;
      case '/iphone':
        nextUri = '/iphone?offset=' + self.minPostId + '&page=' + (self.baseNum + 1);
        break;
      default:
        nextUri = self.baseUri + '/' + (self.baseNum + 1) + '?offset=' + self.minPostId;
        break;
      }
      window.location.hash = encodeURIComponent(self.curUri.match(/(?:http:\/\/www\.tumblr\.com)?(\/.*)/)[1]);
      self.curUri = self.nextUri;
      self.nextUri = nextUri;
      self.nextLinkNode.href = nextUri;
      self.inProgress = false;
      self.failure = false;
    },
    onError: function(response) {
      self.inProgress = false;
      self.failure = true;
      if (400 <= response.status && response.status < 500)
        self.nextUri = null;
    }
  });
  return true;
};

Pager.prototype.removePassedPosts = function() {
  var posts = $x('id("posts")/*[contains(@id,"post")][not(contains(@class,"controls"))][not(contains(@class,"history"))]');
  var maxPostNum = 23;
  var removedNum = Math.max(posts.length - maxPostNum, 0);
  if (removedNum > 0) {
    var remain = posts[removedNum];
    var current = postIterator.getCurrent();
    var removed = [];
    var elem;
    for (var i = 0; (elem = postsNode.childNodes[i]) != remain && elem != current; i++)
      removed.push(elem);
    var padding = document.createElement(isIPhoneView ? 'div' : 'li');
    padding.className = 'padding';
    postsNode.insertBefore(padding, postsNode.firstChild);
    removed.forEach(function(elem) { padding.appendChild(elem); });
    padding.style.height = (remain.offsetTop - padding.offsetTop) + 'px';
    var range = document.createRange();
    range.selectNodeContents(padding);
    range.deleteContents();
    range.detach();
  }
};

Pager.prototype.addListener = function(listener) {
  this.listeners.push(listener);
  listener($x('id("posts")/*'), self.minPostId);
};

function PostIterator() {
  var self = this;
  this.listeners = [];
  this.scrollListener = function() { self.refresh(); };
  this.refresh();
  window.addEventListener('scroll', this.scrollListener, false);
}

PostIterator.prototype.getCurrent = function() {
  return this.current;
};

PostIterator.prototype.prev = function() {
  var xpath = '(preceding-sibling::*[contains(@id,"post")][not(contains(@class,"controls"))])[last()]';
  if (this.current) {
    var prev = $x(xpath, this.current)[0];
    if (prev) {
      this.setCurrent(prev);
      return prev;
    }
  }
  return null;
};

PostIterator.prototype.next = function() {
  var xpath = 'following-sibling::*[contains(@id,"post")][not(contains(@class,"controls"))]';
  if (this.current) {
    var followings = $x(xpath, this.current);
    if (followings.length <= 10)
      pager.loadNext();
    var next = followings[0];
    if (next) {
      this.setCurrent(next);
      return next;
    }
  }
  return null;
};

PostIterator.prototype.setCurrent = function(current) {
  this.current = current;
  this.listeners.forEach(function(listener) { listener(current); });
};

PostIterator.prototype.refresh = function() {
  if (this.current && this.current.offsetTop == window.pageYOffset)
    return;
  var posts = $x('id("posts")/*[contains(@id,"post")][not(contains(@class,"controls"))]');
  for (var i = 0; i < posts.length; i++)
    if (posts[i].offsetTop >= window.pageYOffset - 5
      || posts[i].offsetTop + posts[i].offsetHeight >= window.pageYOffset + window.innerHeight / 2)
      break;
  this.setCurrent(posts[i]);
  if (posts.length - i <= 10)
    pager.loadNext();
};

PostIterator.prototype.addListener = function(listener) {
  this.listeners.push(listener);
  listener(this.current);
};

PostIterator.prototype.enableAutoRefresh = function(enable) {
  window[enable ? 'addEventListener' : 'removeEventListener']('scroll', this.scrollListener, false);
};

function ActionDispatcher() {
  var self = this;
  this.quadEnabled = false;
  this.exclusiveEnabled = false;
  ($('left_column') || $('posts')).addEventListener('click', ActionDispatcher.listenerBasic, true);
  prefs.addListener(function() {
    self.enableQuad(prefs.get('enableActions') == 'true');
    [ 'topLeft', 'topRight', 'bottomLeft', 'bottomRight' ].forEach(function(section) {
      self[section] = (prefs.get(section + 'Action') || 'nothing').split(',').map(function(name) { return ActionDispatcher.actions[name]; });
    });
    var keys = null;
    if (prefs.get('enableKeys') == 'true') {
      keys = {};
      ActionDispatcher.actions.slice(0, -2).forEach(function(action) {
        keys[prefs.get('key' + action.name.replace(/^./, function(c) { return c.toUpperCase(); }))] = action;
      });
    }
    self.setKeys(keys);
    self.enableExclusive(prefs.get('enableExclusive') == 'true');
  });
  pager.addListener(function(posts) {
    if (self.exclusiveEnabled) {
      posts.forEach(function(post) { post.style.display = 'none'; });
      $x('id("posts")/*[contains(@class,"history")]').forEach(function(history) { history.style.display = 'none'; });
      if (self.current)
        self.current.style.display = 'block';
    }
  });
  postIterator.addListener(function(current) {
    if (self.current) {
      self.current.style.backgroundColor = '#fff';
      if (self.exclusiveEnabled)
        self.current.style.display = 'none';
    }
    self.current = current;
    self.refresh();
  });
}

ActionDispatcher.actions = [
  {
    name: 'prev',
    longName: 'scroll to previous',
    action: function(post) {
      var current = postIterator.getCurrent();
      if (current.offsetTop < window.pageYOffset - 5)
        window.scrollTo(0, current.offsetTop);
      else {
        var prev = postIterator.prev();
        window.scrollTo(0, (prev ? prev.offsetTop : 0));
      }
    }
  },
  {
    name: 'next',
    longName: 'scroll to next',
    action: function(post) {
      var current = postIterator.getCurrent();
      //if (current.offsetTop > window.pageYOffset + 5)
      if (current.offsetTop > window.pageYOffset )
        window.scrollTo(0, current.offsetTop-5);
      else {
        var next = postIterator.next();
        window.scrollTo(0, (next ? next.offsetTop : document.body.offsetHeight));
        if (!next)
          pager.loadNext();
      }
    }
  },
  {
    name: 'reblog',
    longName: 'reblog',
    action: function(post) {
      var notify = function(elm){
        var duration = 600;
        FlashMessage.showFlashMessageWindow('ReBlog', duration);
        elm.style.webkitTransition = '';
        elm.style.backgroundColor = 'salmon';
        setTimeout(function(){
          elm.style.backgroundColor = '#ffc';
        }, 0);
      };
      var current = postIterator.getCurrent();
      notify(current);
      post.reblog();
    }
  },
  {
    name: 'comment',
    longName: 'reblog with comment',
    action: function(post) {
      var self = this;
      var div = document.createElement('div');
      var dialog = new Dialog(div);
      div.className = 'dialog';
      div.style.top = window.pageYOffset + 'px';
      div.innerHTML =
        '<form action="#">'
        + '<p><textarea name="comment" rows="9" cols="46"></textarea></p>'
        + '<p><input type="submit" value="OK"/>'
        + '<input type="button" name="cancel" value="Cancel"/></p>'
        +'</form>';
      var form = div.firstChild;
      form.addEventListener('submit', function(event) {
        var comment = form.comment.value;
        post.reblog(comment ? { comment: escapeSpecialChars(comment).replace(/\n/g, '<br/>') } : null);
        dialog.hide();
        event.preventDefault();
      }, false);
      form.cancel.addEventListener('click', function(event) { dialog.hide(); }, false);
      dialog.show();
      form.comment.focus();
    }
  },
  {
    name: 'private',
    longName: 'reblog as private',
    action: function(post) {
      post.reblog({ private: true });
    }
  },
  {
    name: 'form',
    longName: 'open reblog-form',
    action: function(post) {
      post.reblog({ popup: true });
    }
  },
  {
    name: 'open',
    longName: 'open permalink',
    action: function(post) {
      window.open(post.getPermalink());
    }
  },
  {
    name: 'source',
    longName: 'open original',
    action: function(post) {
      window.open(post.getSourceLink());
    }
  },
  {
    name: 'photo',
    longName: 'open high-res photo',
    action: function(post) {
      window.open(post.getPhotoLink());
    }
  },
  {
    name: 'like',
    longName: 'like/unlike',
    action: function(post) {
      post.toggleLike();
    }
  },
  {
    name: 'choice',
    longName: 'choice',
    action: function(post) {
      var div = document.createElement('div');
      div.className = 'choice_container';
      div.style.top = window.pageYOffset + 'px';
      ActionDispatcher.actions.slice(2, -2).forEach(function(action) {
        if (prefs.get('choice' + action.name.replace(/^./, function(c) { return c.toUpperCase(); }), 'true') == 'true') {
          var button = document.createElement('div');
          button.textContent = action.longName;
          button.className = 'choice_item';
          button.style.padding = '8px 0';
          button.style.margin = Math.floor(viewWidth * 0.05) + 'px 0';
          button.style.fontSize = Math.floor(viewWidth * 0.1) + 'px';
          button.addEventListener('click', function(event) {
            action.action(post);
            dialog.hide();
          }, false);
          div.appendChild(button);
        }
      });
      var dialog = new Dialog(div);
      dialog.show();
    }
  },
  {
    name: 'nothing',
    longName: 'do nothing',
    action: function() {}
  }
];

ActionDispatcher.actions.forEach(function(action) {
  ActionDispatcher.actions[action.name] = action;
});

ActionDispatcher.listenerBasic = function(event) {
  var target = event.target;

  if (target.tagName != 'IMG' && $x('ancestor-or-self::a[@href="#"] | ancestor::form', target)[0])
    return;

  if (target.tagName == 'A') {
    if (target.href.indexOf('http://www.tumblr.com/reblog/') == 0)
      reblog(target.href, { popup: true });
    else
      window.open(target.href);
    event.preventDefault();
    return;
  }

  if (target.tagName == 'BUTTON' && target.onclick.toString().match(/location\.href\s*=\s*['"]([\/\w]+)['"]/)) { //"
    reblog(RegExp.$1, { popup: true });
    event.stopPropagation();
    return;
  }

  var post = $x('ancestor-or-self::*[contains(@id,"post")][parent::*[@id="posts"]]', target)[0];
  if (post) {
    (new Post(post)).reblog();
    event.preventDefault();
    event.stopPropagation();
  }
};

ActionDispatcher.prototype.set = function(topLeft, topRight, bottomLeft, bottomRight) {
  this.topLeft = ActionDispatcher.actions[topLeft];
  this.topRight = ActionDispatcher.actions[topRight];
  this.bottomLeft = ActionDispatcher.actions[bottomLeft];
  this.bottomRight = ActionDispatcher.actions[bottomRight];
};

ActionDispatcher.prototype.setKeys = function(keys) {
  var self = this;
  var SCROLL_AMOUNT = 100;
  if (keys) {
    if (!this.keyListener) {
      this.keyListener = function(event) {
				if (event.altKey || event.ctrlKey || event.metaKey)
					return;
        var tag = event.target.tagName;
        if (tag == 'INPUT' || tag == 'TEXTAREA')
          return;
        var key = String.fromCharCode(event.keyCode);
        if (!event.shiftKey)
          key = key.toLowerCase();
        if (key == ' ') {
          window.scrollBy(0, event.shiftKey ? -SCROLL_AMOUNT : SCROLL_AMOUNT);
          event.preventDefault();
        }
        if (key in self.keys){
          event.preventDefault();
          self.keys[key].action(new Post(postIterator.getCurrent()));
        }
      };
    }
    window.addEventListener('keypress', this.keyListener, false);
  }
  else if (this.keyListener)
    window.removeEventListener('keypress', this.keyListener, false);
  this.keys = keys;
  this.refresh();
};

ActionDispatcher.prototype.enableQuad = function(enable) {
  if (this.quadEnabled == enable)
    return;
  if (enable) {
    var self = this;
    this.cover = document.createElement('div');
    this.cover.className = 'cover';
    this.scrollListener = function() {
      self.cover.style.top = postsNode.offsetTop + 'px';
      self.cover.style.height = (paginationNode.offsetTop + paginationNode.offsetHeight - postsNode.offsetTop) + 'px';
    };
    this.scrollListener();
    document.body.appendChild(this.cover);
    this.cover.addEventListener('click', function(event) {
      var x = event.pageX - window.pageXOffset;
      var y = event.pageY - window.pageYOffset;
      var vertical = (y < window.innerHeight / 2) ? 'top' : 'bottom';
      var horizontal = (x < window.innerWidth / 2) ? 'Left' : 'Right';
      var post = new Post(postIterator.getCurrent());
      self[vertical + horizontal].forEach(function(a) { a.action(post); });
    }, false);
    window.addEventListener('scroll', this.scrollListener, false);
    ($('left_column') || $('posts')).removeEventListener('click', ActionDispatcher.listenerBasic, true);
    color = '#cfc';
  }
  else {
    ($('left_column') || $('posts')).addEventListener('click', ActionDispatcher.listenerBasic, true);
    document.body.removeChild(this.cover);
    window.removeEventListener('scroll', this.scrollListener, false);
  }
  this.quadEnabled = enable;
  this.refresh();
};

ActionDispatcher.prototype.enableExclusive = function(enable) {
  enable = enable && (this.quadEnabled || (hasKeyboard && this.keys));
  if (this.exclusiveEnabled == enable)
    return;

  var style = 'block';
  if (enable) {
    style = 'none';
    postsNode.style.minHeight = '865px'; // 416 for /iphone
    this.scrollListener();
  }
  $x('id("posts")/*[not(contains(@class,"controls"))]').forEach(function(elem) { elem.style.display = style; });
  if (this.current)
    this.current.style.display = 'block';
  postIterator.enableAutoRefresh(!enable);
  this.exclusiveEnabled = enable;
  this.refresh();
};

ActionDispatcher.prototype.refresh = function() {
  if (this.current) {
    this.current.style.backgroundColor = (!this.exclusiveEnabled && (this.quadEnabled || (hasKeyboard && this.keys))) ? '#cfc' : '#fff';
    this.current.style.display = 'block';
  }
};

function Post(element) {
  this.element = element;
}

Post.prototype.reblog = function(options) {
  var post = this.element;
  var control = isIPhoneView ?
    $(post.id.replace('post', 'post_controls')) : $x('./*[@class="post_controls"]', post)[0];
  if (control && control.innerHTML.match(/(\/reblog\/\w+\/\w+)/))
    reblog(RegExp.$1, options);
};

Post.prototype.toggleLike = function() {
  var post = this.element;
  if (isIPhoneView) {
    var control = $(post.id.replace('post', 'post_controls'));
    if (control) {
      var button = $x('.//button[.//*[@id="' + post.id.replace('post', 'post_like_text') + '"]]', control)[0];
      if (button)
        button.onclick();
    }
  }
  else {
    var button = $x('.//form[contains(@action,"like")][@style=""]', post)[0];
    if (button)
      button.onsubmit();
  }
};

Post.prototype.getPostId = function() {
  return this.element.id.match(/\d+/)[0];
};

Post.prototype.getPermalink = function() {
  var permalink = $x('.//a[descendant-or-self::*[@class="permalink"]] | .//div[@class="meta"]//a', this.element)[0];
  return permalink ? permalink.href : null;
};

Post.prototype.getSourceLink = function() {
  var post = this.element;
  var body;
  var type;
  if (isIPhoneView) {
    body = $x('.//div[starts-with(@class,"post ")]', post)[0];
    if (!body)
      return this.getPermalink();
    type = body.className.match(/(\w+)_post/)[1];
  }
  else {
    body = post;
    if (!post.className.match(/(regular|photo|quote|link|conversation|audio|video)/))
      return this.getPermalink();
    type = RegExp.$1;
  }
  var link;
  switch (type) {
  case 'photo':
  case 'video':
    link = $x('((.//div[@class="caption"]//blockquote[.//a])[last()])//a', body)[0] || $x('.//div[@class="caption"]//a', body)[0];
    break;
  case 'quote':
    link = $x('(.//div[@class="source"] | .//td[@class="quote_source"])//a', body)[0];
    break;
  case 'link':
    link = $x('.//div[@class="link" or @class="post_title"]/a', body)[0];
    break;
  case 'audio':
    link = $x('.//div[@class="audio"]/a | .//a[text()="Listen"]', body)[0];
    break;
  };
  return link ? link.href : this.getPermalink();
};

Post.prototype.getPhotoLink = function() {
  var photo = $x('.//img[@class="photo" or @class="image"]', this.element)[0];
  if (!photo)
    return null;
  if (photo.src.match(/(\w+)o1_500/)) {
    var hash = RegExp.$1;
    if (this.getPermalink().match(/^(http:\/\/[^/]+\/)(?:post\/)?(\d+)/))
      return RegExp.$1 + 'photo/1280/' + RegExp.$2 + '/1/' + hash;
    else
      return photo.src;
  }
  else
    return photo.src;
};

function Preferences(callback) {
  var self = this;
  var after = function() {
    var showPrefNode = document.createElement('div');
    var showPrefButton = document.createElement('input');
    showPrefButton.type = 'button';
    showPrefButton.name = 'show_menu';
    showPrefButton.value = 'Preferences';
    showPrefButton.addEventListener('click', function(event) {
      self.showDialog();
    }, false);
    showPrefNode.appendChild(showPrefButton);
    postsNode.parentNode.insertBefore(showPrefNode, postsNode);
    self.listeners.forEach(function(listener) { listener(self); });
    if (typeof callback == 'function') callback(self);
  };
  this.table = {
    enableActions: 'false',
    topLeftAction: 'choice',
    topRightAction: 'prev',
    bottomLeftAction: 'reblog',
    bottomRightAction: 'next',
    enableKeys: String(hasKeyboard),
    keyPrev: 'k',
    keyNext: 'j',
    keyReblog: 't',
    keyComment: 'b',
    keyPrivate: 'y',
    keyForm: 'T',
    keyOpen: 'v',
    keySource: 'V',
    keyPhoto: 'P',
    keyLike: 'l',
    history: '[{ id: 0, time: 0 }]',
    enableExclusive: 'false',
    hideLeftColumn: 'true'
  };
  this.listeners = [];
  if (window.openDatabase) {
    try {
      this.db = window.openDatabase('Rebloglet', '1.0', 'Rebloglet', 1024 * 1024);
      this.db.transaction(function(transaction) {
        transaction.executeSql(
          "CREATE TABLE IF NOT EXISTS preferences(key TEXT, value TEXT, CONSTRAINT pk_prefs PRIMARY KEY (key));"
        );
        transaction.executeSql(
          "SELECT * FROM preferences;", null,
          function(transaction, results) {
            for (var i = 0; i < results.rows.length; i++) {
              var row = results.rows.item(i);
              self.table[row['key']] = row['value'];
            }
          }
        );
      }, after, after);
    }
    catch (e) {
      window.setTimeout(after, 0);
    }
  }
  else
    window.setTimeout(after, 0);
}

Preferences.prototype.get = function(key, defaultValue) {
  if (key in this.table)
    return this.table[key];
  else
    return defaultValue;
};

Preferences.prototype.set = function(key, value) {
  this.table[key] = String(value);
};

Preferences.prototype.dump = function() {
  for (var key in this.table)
    console.log(key + ': ' + this.table[key]);
};

Preferences.prototype.save = function() {
  var self = this;
  if (this.db) {
    this.db.transaction(function(transaction) {
      for (var key in self.table) {
        transaction.executeSql(
          "INSERT OR REPLACE INTO preferences(key, value) VALUES (?, ?);", [ key, self.table[key] ]
        );
      }
    });
  }
};

Preferences.prototype.addListener = function(listener) {
  this.listeners.push(listener);
  listener(this);
};

Preferences.prototype.showDialog = function() {
  var self = this;
  var div = document.createElement('div');
  var dialog = new Dialog(div);
  div.className = 'dialog';
  div.style.top = '0';
  div.innerHTML =
    '<form action="#">'
    + '<p><fieldset>'
    +   '<input type="checkbox" name="enableActions" value="enableActions"' + (self.get('enableActions') == 'true' ? ' checked="checked"' : '') + '/>'
    +   '<label for="enableActions">use the whole client area as 4 buttons</label>'
    +   '<table>'
    +     [ 'top left', 'top right', 'bottom left', 'bottom right' ].map(function(section) {
            var name = section.replace(/ ./, function(s) { return s.charAt(1).toUpperCase(); }) + 'Action';
            var selectedActions = self.get(name).split(',');
            return '<tr><td><label for="' + name + '">' + section + '</label></td><td><select name="' + name + '" multiple="multiple">'
              + ActionDispatcher.actions.map(function(action) {
                  return '<option value="' + action.name + '"'
                    + (selectedActions.some(function(a) { return a == action.name; }) ? ' selected="selected"' : '') + '>' + action.longName + '</option>';
                }).join('')
              + '</select></td></tr>';
          }).join('')
    +   '</table>'
    + '</fieldset></p>'
    + '<p><input type="checkbox" name="enableExclusive" value="enableExclusive"' + (self.get('enableExclusive') == 'true' ? ' checked="checked"' : '') + '/>'
    + '<label for="enableExclusive">show one post at a time</label></p>'
    + '<p><input type="checkbox" name="hideLeftColumn" value="hideLeftColumn"' + (self.get('hideLeftColumn') == 'true' ? ' checked="checked"' : '') + '/>'
    + '<label for="hideLeftColumn">hide left column on normal Dashboard</label></p>'
    + (hasKeyboard ? ('<p><input type="checkbox" name="enableKeys" value="enableKeys"' + (self.get('enableKeys') == 'true' ? ' checked="checked"' : '') + '/>'
    + '<label for="enableKeys">use key bindings</label></p>') : '')
    + '<p><fieldset>'
    +   '<table>'
    +     '<tr><th>action</th><th>in choice</th>' + (hasKeyboard ? '<th>key</th>' : '') + '</tr>'
    +     ActionDispatcher.actions.slice(hasKeyboard ? 0 : 2, -2).map(function(action) {
            var capi = action.name.replace(/^./, function(c) { return c.toUpperCase(); });
            return '<tr><td><label>' + action.longName + '</label></td>'
              + ((action.name != 'prev' && action.name != 'next') ? ('<td><input type="checkbox" name="choice' + capi + '" value="choice' + capi + '"'
              + (self.get('choice' + capi, 'true') == 'true' ? ' checked="checked"' : '') + '/></td>') : '<td></td>')
              + (hasKeyboard ? ('<td><input type="text" name="key' + capi + '" value="' + self.get('key' + capi) + '"/></td>') : '') + '</tr>';
          }).join('')
    +   '</table>'
    + '</fieldset></p>'
    + '<p><input type="submit" value="OK"/>'
    + '<input type="button" name="cancel" value="Cancel"/></p>'
    +'</form>';
  var form = div.firstChild;
  form.addEventListener('submit', function(event) {
    for (var i = 0; i < form.length; i++) {
      var elem = form.elements[i];
      switch (elem.type) {
      case 'checkbox':
        self.set(elem.name, elem.checked);
        break;
      case 'select-one':
        self.set(elem.name, elem.value);
        break;
      case 'select-multiple':
        var selected = [];
        for (var j = 0; j < elem.length; j++)
          if (elem.options[j].selected)
            selected.push(elem.options[j].value);
        self.set(elem.name, selected.join());
        break;
      }
    }
    dialog.hide();
    self.save();
    self.listeners.forEach(function(listener) { listener(self); });
    event.preventDefault();
  }, false);
  form.cancel.addEventListener('click', function(event) { dialog.hide(); }, false);
  dialog.show();
};

function History() {
  var self = this;
  this.history = eval(prefs.get('history'));
  var first = $x('id("posts")/*[contains(@class,"post")]')[0];
  if (first) {
    var id = Number(first.id.match(/\d+/)[0]);
    if (id >= this.history[0].id) {
      var appended = [{ id: id, time: (new Date()).valueOf() }].concat(this.history).slice(0, 5);
      prefs.set(
        'history',
        '[' + appended.map(function(i) { return '{ "id": ' + i.id + ', "time": ' + i.time + ' }'; }).join() + ']'
      );
      prefs.save();
    }
    else {
      while (this.history.length > 0 && this.history[0].id > id)
        this.history.shift();
    }
  }
  pager.addListener(function(posts, minId) {
    if (self.history.length > 0 && self.history[0].id >= minId) {
      for (var i = 0; i < posts.length; i++) {
        if (posts[i].id.match(/(\d+)/) && Number(RegExp.$1) <= self.history[0].id) {
          var elem = document.createElement(isIPhoneView ? 'div' : 'li');
          elem.id = 'post_history_' + self.history[0].id;
          elem.className = 'post history';
          elem.style.padding = '0';
          var div = document.createElement('div');
          div.textContent = new Date(self.history[0].time);
          div.style.backgroundColor = '#ff0';
          elem.appendChild(div);
          postsNode.insertBefore(elem, posts[i]);
          self.history.shift();
          if (self.history.length == 0)
            break;
        }
      }
    }
  });
}

var hasKeyboard = true;

if (window.navigator.userAgent.indexOf('AppleWebKit') != -1
  && window.navigator.userAgent.indexOf('Mobile') != -1
  && window.navigator.userAgent.indexOf('Iris') == -1) {
  window.scrollTo_ = window.scrollTo;
  window.scrollTo = function(x, y) {
    window.scrollTo_(x, y);
    var event = document.createEvent('HTMLEvents');
    event.initEvent('scroll', true, false);
    document.dispatchEvent(event);
  };
  hasKeyboard = false;
}

var postsNode = $('posts');
var nextLinkNode;
var paginationNode = isIPhoneView ? $('footer') : $('pagination');
var viewWidth = isIPhoneView ? 320 : 665;

var styleSheet = (new StyleSheet())
  .add('.bubble td { max-width:' + (viewWidth - 78) + 'px; }')
  .add('.background { position: absolute; top: 0; left: 0; width: 100%; background-color: #000; opacity: 0.5; }')
  .add('.cover { position: absolute; left: 0; width: 100%; opacity: 0; }')
  .add('.dialog { position: absolute; left: 0; background-color: #fff; }')
  .add('.form_container { position: absolute; left: 0; width: 100%; background-color: #fff; }')
  .add('.form_container input { width: auto; min-width: 0; max-width: 80%; }')
  .add('.form_container .wide { width: 100%; min-width: 100%; max-width: 100%; }')
  .add('.form_container img { max-width: 100%; }')
  .add('.form_container div[id=right_column] { background-color: #777; }')
  .add('.choice_container { position: absolute; left: 0; width: 100%; text-align: center; }')
  .add('.choice_item { width: 100%; color: #000; background-color: #ccc; }')
  .add('.padding { padding: 0; margin: 0; }');

if (isIPhoneView)
  $('viewport').content = $('viewport').content.replace('user-scalable = no', 'user-scalable = yes');
else {
  Ajax.PeriodicalUpdater.prototype.onTimerEvent = function() {};
  document.body.onclick = null;

  [ $('header_container'), $('content_top'), $('right_column'), $('content_bottom'), $('footer'), $x('id("posts")/*[contains(@class,"new_post")]')[0] ]
    .forEach(function(node) { if (node) node.parentNode.removeChild(node); });

  $('pagination').style.padding = '0';
  $('container').style.width = '665px';
  $('container').style.padding = '0';
  $('container').style.overflowX = 'hidden';
  $x('//meta[@name="viewport"]')[0].content = 'width = 665';
}

var pager;
var postIterator;
var actionDispatcher;
var prefs = new Preferences(function() {
  if (!isIPhoneView) {
    prefs.addListener(function() {
      if (prefs.get('hideLeftColumn') == 'true') {
        styleSheet.add('.so_ie_doesnt_treat_this_as_inline { display: none; }');
        $('posts').style.margin = '0';
        $('left_column').style.width = '540px';
        $('container').style.width = '580px';
        $x('//meta[@name="viewport"]')[0].content = 'width = 580';
        viewWidth = 580;
      }
      else {
        styleSheet.add('.so_ie_doesnt_treat_this_as_inline { display: block; }');
        $('posts').style.margin = '0 0 0 85px';
        $('left_column').style.width = '625px';
        $('container').style.width = '665px';
        $x('//meta[@name="viewport"]')[0].content = 'width = 665';
        viewWidth = 665;
      }
    });
  }
  pager = new Pager();
  postIterator = new PostIterator();
  new History();
  actionDispatcher = new ActionDispatcher();
});

/* Add */
var FlashMessage = new function(){
  var opacity = 0.9;
  var flash = document.createElement('div');
  flash.setAttribute('id', 'FLASH_MESSAGE');
  hide(flash);
  document.body.appendChild(flash);
  this.showFlashMessageWindow = function (string, duration) {
    duration || (duration = 400);
    hide(flash);
    flash.textContent = string;
    flash.style.opacity = opacity;
    show(flash);
    flash.style.marginLeft = (-(flash.offsetWidth/2))+'px';
    setTimeout(function(){
      flash.style.opacity = '0';
    }, 0);
  };
  function hide(target){
    target.style.display='none';
    target.style.webkitTransition = '';
  }
  function show(target, style){
    target.style.display=(style || '');
  }
};

})();
