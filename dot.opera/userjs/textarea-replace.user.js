// ==UserScript==
// @name        TEXTAREA Replace
// @description Adds replace functionality to TEXTAREA.
// @namespace   webos-goodies.jp
// @include     *
// ==/UserScript==

(function() {

var WebOSGoodies_replace = {

keyCode : 'H'.charCodeAt(0),

frameNodes : ['text', 'cmd'],
temporaryValues : ['target', 'targetWords', 'phase', 'left', 'right', 'input', 'confirm', 'yes', 'no', 'all', 'cancel', 'searchWord', 'replaceWord'],

baseStyle : [
  'color:black;',
  'font: normal normal normal 12px/1.2em monospace;'].join(''),

frameStyle : [
  'text-align:left;',
  'background-color:white;',
  'border:solid 1px black;',
  'padding:8px;',
  'margin:0px;',
  'position:fixed;',
  'overflow:auto;',
  'z-index:10000;'].join(''),

textStyle : [
  'line-height:1.3em;',
  window.opera ? 'white-space:pre-wrap;' : 'white-space:pre;',
  'top:20px;',
  'bottom:60px;',
  'left:20px;',
  'right:20px;'].join(''),

cmdStyle : [
  'white-space:normal;',
  'height:12px;',
  'bottom:20px;',
  'left:20px;',
  'right:20px;'].join(''),

innerStyle : [
  'position:static;',
  'overflow:hidden;',
  'text-align:left;',
  'border:none;',
  'padding:0px;',
  'margin:0px;',
  'height:100%;',
  'float:left;'].join(''),

leftStyle :
  'width:30%;',

rightStyle:
  'width:70%',

inputStyle: [
  'background-color:#ffc;',
  'width:100%;',
  'margin:0px;',
  'padding:0px;',
  'border:none;',
  'display:none;'].join(''),

confirmStyle: [
  'width:100%;',
  'margin:0px;',
  'padding:0px;',
  'border:none;',
  'display:none;'].join(''),

createElement : function(tag, children, text, style)
{
  var node = document.createElement(tag);
  if(style)
  {
    node.setAttribute('style', this.baseStyle + style);
  }
  if(children)
  {
    if(children.length == 1)
    {
      node.appendChild(children[0]);
    }
    else if(children.length > 1)
    {
      var f = document.createDocumentFragment();
      for(var i = 0 ; i < children.length ; ++i)
      {
        f.appendChild(children[i]);
      }
      node.appendChild(f);
    }
  }
  if(text)
  {
    node.appendChild(document.createTextNode(text));
  }
  return node;
},

onLoad : function()
{
  var keyDownHandler={
    handleEvent:function(e)
    {
      var module = WebOSGoodies_replace;
      if(!module.phase)
      {
        if(e.target.tagName && e.target.tagName == 'TEXTAREA' &&
           e.keyCode == module.keyCode && e.altKey && e.ctrlKey)
        {
          module.begin(e.target);
          e.stopPropagation();
          e.returnValue=false;
        }
      }
      else if(e.target != module.input || module.phase == module.phaseReplace)
      {
        module.onKeyDown(e);
        e.stopPropagation();
        e.returnValue=false;
      }
    }
  };
  var keyPressHandler={
    handleEvent:function(e)
    {
      var module = WebOSGoodies_replace;
      if(module.phase && e.target != module.input)
      {
        e.stopPropagation();
        e.returnValue=false;
      }
    }
  };
  window.addEventListener('keydown', keyDownHandler, true);
  window.addEventListener('keypress', keyPressHandler, true);
  window.addEventListener('keyup', keyPressHandler, true);
},

begin : function(target)
{
  this.end();

  this.target = target;

  var c = [
    this.yes = this.createElement('span', null, '[Y]es', null),
    document.createTextNode(' / '),
    this.no = this.createElement('span', null, '[N]o', null),
    document.createTextNode(' / '),
    this.all = this.createElement('span', null, '[A]ll', null),
    document.createTextNode(' / '),
    this.cancel = this.createElement('span', null, '[C]ancel', null)];

  this.input = this.createElement('input', null, null, this.inputStyle);
  this.input.addEventListener('keydown', this.onKeyDown, false);
  this.confirm = this.createElement('span', c, null, this.confirmStyle);

  this.left = this.createElement('div', null, null, this.innerStyle + this.leftStyle);
  this.right = this.createElement('div', [this.input, this.confirm], null, this.innerStyle + this.rightStyle);

  this.text = this.createElement('div', null, target.value, this.frameStyle + this.textStyle);
  this.cmd = this.createElement('div', [this.left, this.right], null, this.frameStyle + this.cmdStyle);

  var f = document.createDocumentFragment();
  f.appendChild(this.text);
  f.appendChild(this.cmd);
  document.body.appendChild(f);

  this.changePhase(this.phaseFrom);
},

end : function()
{
  if(this.phase)
  {
    this.sendPhaseMsg('end');
  }
  for(var i = 0 ; i < this.frameNodes.length ; ++i)
  {
    if(this[this.frameNodes[i]])
    {
      document.body.removeChild(this[this.frameNodes[i]]);
      this[this.frameNodes[i]] = null;
    }
  }
  for(var i = 0 ; i < this.temporaryValues.length ; ++i)
  {
    this[this.temporaryValues[i]] = null;
  }
},

extractWord : function(word)
{
  var str = this.target.value;
  var f = document.createDocumentFragment();
  var pos;
  this.targetWords = [];
  while((pos = str.indexOf(word)) >= 0)
  {
    f.appendChild(document.createTextNode(str.substr(0, pos)));
    var span = document.createElement('span');
    span.style.backgroundColor = '#ccc';
    span.appendChild(document.createTextNode(word));
    f.appendChild(span);
    this.targetWords.push(span);
    str = str.substr(pos+word.length);
  }
  if(str.length > 0)
  {
    f.appendChild(document.createTextNode(str));
  }
  while(this.text.hasChildNodes())
  {
    this.text.removeChild(this.text.lastChild);
  }
  this.text.appendChild(f);
},

sendPhaseMsg: function(msg, param)
{
  if(this.phase && this.phase[msg])
  {
    this.phase[msg](this, param);
  }
},

changePhase : function(nextPhase)
{
  this.sendPhaseMsg('end');
  this.phase = nextPhase;
  this.sendPhaseMsg('begin');
},

onKeyDown : function(e)
{
  WebOSGoodies_replace.sendPhaseMsg('onKeyDown', e);
},

phaseFrom : {
  begin : function(owner)
  {
    owner.left.innerHTML = 'Search for ?';
    owner.input.value = '';
    owner.input.style.display = 'inline';
    owner.input.focus();
  },
  end : function(owner)
  {
    owner.input.style.display = 'none';
  },
  onKeyDown : function(owner, e)
  {
    if(e.keyCode == 0x0d)
    {
      if(owner.input.value.length > 0)
      {
        owner.searchWord = owner.input.value;
        owner.extractWord(owner.searchWord);
        if(owner.targetWords.length > 0)
        {
          owner.changePhase(owner.phaseTo);
        }
        else
        {
          alert('"' + owner.searchWord + '" is not found.');
          owner.end();
        }
      }
      else
      {
        owner.end();
      }
    }
    else if(e.keyCode == 27)
    {
      owner.end();
    }
  }
},

phaseTo : {
  begin : function(owner)
  {
    owner.left.innerHTML = 'Replace with ?';
    owner.input.value = '';
    owner.input.style.display = 'inline';
    owner.input.focus();
  },
  end : function(owner)
  {
    owner.input.style.display = 'none';
  },
  onKeyDown : function(owner, e)
  {
    if(e.keyCode == 0x0d)
    {
      owner.replaceWord = owner.input.value;
      owner.changePhase(owner.phaseReplace);
    }
    else if(e.keyCode == 27)
    {
      owner.end();
    }
  }
},

phaseReplace : {
  options : ['yes', 'no', 'all', 'cancel'],

  begin : function(owner)
  {
    this.wordIndex = 0;
    this.selectIndex = 0;
    this.replaceCount = 0;
    this.live = true;
    this.update(owner);
    owner.confirm.style.display = 'inline';
  },
  end : function(owner)
  {
    this.live = false;
    owner.confirm.style.display = 'none';
  },
  onKeyDown : function(owner, e)
  {
    var k = e.keyCode;
    if(k == 0x0d)
    {
      if(this.selectIndex == 0)
      {
        this.replace(owner);
      }
      else if(this.selectIndex == 1)
      {
        this.skip(owner);
      }
      else if(this.selectIndex == 2)
      {
          this.replaceAll(owner);
      }
      else if(this.selectIndex == 3)
      {
        owner.end();
      }
    }
    else if(k == 89)
    {
      this.replace(owner);
    }
    else if(k == 78)
    {
      this.skip(owner);
    }
    else if(k == 65)
    {
      this.replaceAll(owner);
    }
    else if(k == 67)
    {
      owner.end();
    }
    else if(k == 37)
    {
      this.selectIndex = (this.selectIndex + this.options.length - 1) % this.options.length;
      this.update(owner);
    }
    else if(k == 39)
    {
      this.selectIndex = (this.selectIndex + 1) % this.options.length;
      this.update(owner);
    }
    else if(k == 27)
    {
      owner.end();
    }
  },
  update : function(owner)
  {
    for(var i = 0 ; i < this.options.length ; ++i)
    {
      owner[this.options[i]].style.backgroundColor = i == this.selectIndex ? '#cff' : 'white';
    }
    for(var i = 0 ; i < owner.targetWords.length ; ++i)
    {
      if(i == this.wordIndex)
      {
        owner.targetWords[i].style.backgroundColor = '#cff';
        owner.targetWords[i].scrollIntoView(false);
      }
      else
      {
        owner.targetWords[i].style.backgroundColor = '#ccc';
      }
    }
  },
  replace : function(owner, skipUpdate)
  {
    var n = document.createTextNode(owner.replaceWord);
    var o = owner.targetWords[this.wordIndex].lastChild;
    owner.targetWords[this.wordIndex].replaceChild(n, o);
    this.wordIndex++;
    this.selectIndex = 0;
    this.replaceCount += 1;
    if(!skipUpdate) { this.update(owner); }
    this.finish(owner);
  },
  replaceAll : function(owner)
  {
    if(confirm('Replace all?'))
    {
      while(this.live)
      {
        this.replace(owner, true);
      }
    }
  },
  skip : function(owner)
  {
    this.wordIndex++;
    this.selectIndex = 0;
    this.update(owner);
    this.finish(owner);
  },
  finish : function(owner)
  {
    if(this.wordIndex >= owner.targetWords.length)
    {
      if(this.replaceCount > 0)
      {
        var result = [];
        var nodes = owner.text.childNodes;
        for(var i = 0 ; i < nodes.length ; ++i)
        {
          if(nodes[i].nodeType == 3/* Node.TEXT_NODE is undefined on Firefox Greasemonkey extension. :( */)
            result[result.length] = nodes[i].data;
          else
            result[result.length] = nodes[i].lastChild.data;
        }
        owner.target.value = result.join('');
        alert('Finish : ' + this.replaceCount + ' words have been replaced.');
      }
      else
      {
        alert('Finish : no word has been replaced.');
      }
      owner.input.style.display = 'inline';
      owner.input.focus();
      owner.end();
    }
  }
}

};

WebOSGoodies_replace.onLoad();

})();
