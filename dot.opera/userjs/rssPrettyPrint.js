// ==UserScript==
// @name Opera News Feed Prettifier
// @version 1.05
// @description  Applies an XSL Transform on RSS and Atom feeds to make them pretty
// @include *xml*
// @include *rss*
// @include *feed*
// @exclude http://1my.opera.com/*
// ==/UserScript==

// XSL and CSS based on http://www.xefteri.com/articles/show.cfm?id=24
// disable-output-escaping implementation based on code by Sean M. Burke (sburke@cpan.org)
/*
  fearphage notes:
    - i purposely stopped parsing tags in the title of the post/feed because no one else does
    - i can't get the sort by date to work if you do, i may continue unless you want to finish... either way works for me.
    - the by date sorting killed me
    - i left all the comments in so hopefully things would make sense
*/
opera.addEventListener('BeforeEvent.DOMContentLoaded'
  ,function(e) {
    opera.removeEventListener('BeforeEvent.DOMContentLoaded', arguments.callee, false);
    tag = {feed: 0, rss: 1, rdf: 2}[document.documentElement.localName.toLowerCase()];
    if (tag === undefined) return;
    
    sel = selectors[tag];
    var xsl = '\
<?xml version="1.0" encoding="ISO-8859-1"?>\n\
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1999/xhtml" '+sel.namespace+'>\n\
  <xsl:output method="xml" cdata-section-elements="script" />\n\
  <xsl:template match="'+sel.root+'">\n\
<html>\n\
  <head>\n\
    <style type="text/css"><![CDATA[\n\
      body { background: #ccc; font-family: Verdana, Arial, Sans-Serif; font-size: small; margin: 0; }\n\
      a:visited { color: #666; }\n\
      a:hover { color: #F00; }\n\
      #logo { border-top: 0.2em solid #235B9C; background: #4483C7; padding: 0.2em 0.4em 0.4em; color: #fff; font-family: "Trebuchet MS", Verdana, Arial, Sans-Serif; font-size: 240%; max-height: 90px }\n\
      #logo a:link, #logo a:visited { text-decoration: none; color: #fff; }\n\
      #tagline, #news { margin: 0 1em; }\n\
      #tagline { border-bottom: 1px solid #538620; color: #538620; font-family: Tahoma, "Lucida Sans Unicode", Verdana, sans-serif; letter-spacing: 0.1em; padding: .3em 1em; }\n\
      #tagline div { padding-top: 0.3em; }\n\
      #logo .count { color: #fff; font-size: 80%; float: right }\n\
      #news>dt { font-size: 130%; font-family: Tahoma, Verdana, Arial, Helvetica, sans-serif; margin: 0; text-indent: 0.2em; padding: 1em 0 0; }\n\
      #news>dt>a { text-decoration: none; font-weight: bold }\n\
      #news>dt>.date { color: #666;  font-size: 80%; /*border-top: 1px solid #CCC;*/ padding: 0; float: right }\n\
      #news>dd { font-size: 90%; line-height: 145%; margin: 0; padding: 0 /*.25em 1em 1em;*/ }\n\
      #footer { background: #000; font-size: 90%; color: #fff; padding: .25em 1em; }\n\
      a img { padding-right: 8px }\n\
      #left { margin-right: 220px; border-right: 1px solid #777; background-color: #fff; padding-bottom: 12px; }\n\
      #right { position: absolute; right: 0px; top: 63px; background-color: #ccc; width: 200px; margin: 0; padding: 10px 8px 10px 12px; }\n\
      #right > span { font-weight: bold }\n\
    ]]>\n\
    </style>\n\
    <title><xsl:apply-templates select="'+sel.feedTitle+'" /></title>\n\
    <base href="{@xml:base}"/>\n\
  </head>\n\
  <body>\n\
    <div id="logo">\n\
      <xsl:call-template name="createLinks" />\n\
      <!--<span class="count"><xsl:value-of select="count('+sel.newsItems+')" /> Total</span>-->\n\
      </div>\n\
    <div id="left">\n\
    <div id="tagline">\n\
      <span name="parse"><xsl:apply-templates select="'+sel.feedDesc+'" /></span>\n\
      <div>\n\
        <a href="http://reader.livedoor.com/subscribe/'+eLoc+'"><img src="data:image/gif;base64,R0lGODlhWwARANUAAABb/////4KCggAugv8vL/8xMf82Nv9sbP9UVP/6+v/4+P+AgP+4uP+Ojv+Fhf/9/f/z8//Hx//MzP9RUf9FRf9bW/92dv94eP9WVv/a2v/V1f+Tk/+bm/+Wlv80NP9qav/19f9ZWf/p6f/n5/9xcf/i4v+RkQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAABbABEAAAb/QIBwSCwaj8ikcslkBgCBqHRKrVqv2Kx2mwUIoNymeEweP7/cZ3nNXp/BAQKmUbIOo2R8ntrUK99SDiEFBCYPfEIDampLimWKAQOQTI5LgFEaICMXBB+HUkRqA2KMZoulSahHl3EGHAkdBBtToUJPeLiMoGB3t7ehp7bBwsG4d15wDAsECBAkBRm7tryOkZHVkrfZUNmQo71So9dP2+Pcit7HaFIJDAQLIh4O0lAAlb+0i/X1+pFFUZPg+PrFD5Q/dXAqUFBgwQCEAxPo6bPn75q4af0wGsEzyaK5fpIu1loX4AACBREISGhQQFqVaRQ5TknnTaJBgOFm6kQ0jaSWPSEhQyYCKimR0KJG7SE1WvRoU6dPg44U2KWN1aupkKXZyrWr1yvIsIodW0ZAAAFo06pdy7at27dw48qVGwQAOw==" alt="Subscribe with LDR" /></a>\n\
      </div>\n\
    </div>\n\
    <dl id="news"><xsl:apply-templates select="'+sel.newsItems+'" /></dl>\n\
    </div>\n\
    <div id="right">\n\
      <span>Filter Articles:</span><br/>\n\
      <input type="text" id="filter" /><br/><br/>\n\
      <span>Sort By:</span><br/>\n\
      <a href="javascript:ujsSort(0)" class="selected">Date</a><br/><br/>\n\
      <span>Actions:</span><br/>\n\
      <a href="http://reader.livedoor.com/subscribe/'+eLoc+'">Add to Livedoor Reader</a><br/><br/>\n\
      <a href="mailto:?subject=Check+out+this+RSS+Feed&amp;body='+unescape(eLoc)+'">Mail link to Friends</a></div>\n\
    <div id="footer" class="parse"><xsl:apply-templates select="'+sel.copyright+'" /></div>\n\
    <script type="text/javascript"><![CDATA[\n\
      (function(){\n\
        for (var i = 0, elem, elems = document.selectNodes("//*[@class=\'parse\']"), text; elem = elems[i]; i++ ) {\n\
          if ((text = elem.innerText) && (/[<&>]/.test(text))) elem.innerHTML = text;\n\
        }\n\
      })();\n\
      (function() {\n\
        var filter = document.getElementById("filter");\n\
        filter.addEventListener("input", function(e) { ujsFilter(e.target.value); }, false);\n\
      })();\n\
    ]]></script>\n\
  </body>\n\
</html>\n\
  </xsl:template>\n\
  <xsl:template name="createLinks">\n\
    <a class="parsed" href="{'+sel.linkHref+'}"><xsl:apply-templates select="'+sel.linkText+'" /></a>\n\
  </xsl:template>\n\
  <xsl:template match="'+sel.newsItems+'">\n\
    <dt>\n\
      <xsl:call-template name="createLinks" />\n\
      <div class="date"><xsl:apply-templates select="'+sel.newsDate+'" /></div>\n\
    </dt>\n\
    <dd class="parse"><xsl:apply-templates select="'+sel.newsDesc+'" /></dd>\n\
  </xsl:template>\n\
</xsl:stylesheet>';
//alert(xsl);
    ujsTransform(xsl);
  }
  ,false
);
var selectors = [
  { // Atom
    namespace:  'xmlns:atom="'+document.documentElement.namespaceURI+'"'
    ,root:      '/atom:feed'
    ,feedTitle: 'atom:title'
    ,feedDesc:  'atom:tagline | atom:subtitle'
    ,linkHref:  'atom:link/@href'
    ,linkText:  'atom:title'
    ,newsItems: 'atom:entry'
    ,newsDate:  'atom:published | atom:updated | atom:created | atom:modified'
    ,newsDesc:  'atom:content | atom:summary" mode="atomContent'
    ,copyright: 'atom:copyright | atom:rights'
    ,container: 'atom:feed'
  }
  ,{ // RSS 2.0
    namespace:  ''
    ,root:      '/rss'
    ,feedTitle: 'channel/title'
    ,feedDesc:  'channel/description'
    ,linkHref:  'link | channel/link'
    ,linkText:  'title | channel/title'
    ,newsItems: 'channel/item'
    ,newsDate:  'pubDate'
    ,newsDesc:  'description'
    ,copyright: 'channel/copyright'
    ,container: 'channel'
  }
  ,{ // RSS 1.0
    namespace:  'xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rss="http://purl.org/rss/1.0/"'
    ,root:      '/rdf:RDF'
    ,feedTitle: 'rss:channel/rss:title'
    ,feedDesc:  'rss:channel/rss:description'
    ,linkHref:  'rss:link | rss:channel/rss:link'
    ,linkText:  'rss:title | rss:channel/rss:title'
    ,newsItems: 'rss:item'
    ,newsDate:  'dc:date'
    ,newsDesc:  'rss:description'
    ,copyright: 'rss:channel/rss:copyright'
    ,container: 'rss:channel'
  }
], eLoc = escape(location.href);
function ujsTransform(xslt) {
  var processor = new XSLTProcessor(), xsl = (new DOMParser()).parseFromString(xslt, 'text/xml'), doc;
  if (typeof XMLDoc == 'undefined') {
    //opera.postError('setting document (XML) / document.childNodes.length = ' + document.childNodes.length + ' / ' + document.doctype);
    XMLDoc = document.implementation.createDocument("", "", null); 
    XMLDoc.appendChild(XMLDoc.importNode(document.documentElement, true));
  }
  XML = XMLDoc;//.cloneNode(true);
    
  processor.importStylesheet(xsl);
  if (!document.documentElement) {
    doc = processor.transformToFragment(XML, document);
    return doc;
  }
  doc = processor.transformToDocument(XML);
  //opera.postError('before return / ' + doc + ' / ' + doc.firstChild);
  if (!doc.documentElement) return;
  //opera.postError('after return');
  //opera.postError('BEFORE replacechild: doc.documentElement: ' + doc.documentElement + ' / document.documentElement: ' + document.documentElement + ' / XML.documentElement: ' + XML.documentElement);
  if (!document.documentElement) return doc;
  document.replaceChild(doc.documentElement, document.documentElement);
  //opera.postError('AFTER replacechild: doc.documentElement: ' + doc.documentElement + ' / document.documentElement: ' + document.documentElement + ' / XML.documentElement: ' + XML.documentElement);
}
function ujsFilter(text) {
  var tooShort = text.length < 3, nodes = document.firstChild.childNodes[1].getElementsByTagName('dt');
  for (var i = 0, node, textContent, state; node = nodes[i]; i++) {
    textContent = (node.textContent + '|' + (node.nextSibling ? node.nextSibling.textContent : '')).toLowerCase();
    state = (!tooShort && (textContent.indexOf(text) == -1) ? 'none' : 'block');
    node.style.display = state;
    
    if (node.nextSibling && (node.nextSibling.nodeType == 1))
      node.nextSibling.style.display = state;
  }
};
function ujsSort(sortBy) {
  if (typeof sortBy != 'number') return;
  if (typeof this.sort == 'undefined')
    this.sort = -1;
  if (typeof this.direction == 'undefined')
    this.direction = 1;
  // if sorting by the same paramater, switch direction
  var  d = (this.sort == sortBy ? this.direction : 1), dir = (d ? 'descending' : 'ascending'), type = ['newsDate', 'feedTitle'][sortBy],
      node = document.getElementById('news'), xsl =  '\
<?xml version="1.0" encoding="ISO-8859-1"?>\n\
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1999/xhtml" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:exsl="http://exslt.org/common" xmlns:str="http://exslt.org/strings" extension-element-prefixes="exsl str" '+sel.namespace+'>\n\
  <xsl:output method="xml" cdata-section-elements="script" />\n\
  <xsl:template match="'+sel.root+'">\n\
  <xsl:variable name="months">\n\
      <name value="1">Jan</name>\n\
      <name value="2">Feb</name>\n\
      <name value="3">Mar</name>\n\
      <name value="4">Apr</name>\n\
      <name value="5">May</name>\n\
      <name value="6">Jun</name>\n\
      <name value="7">Jul</name>\n\
      <name value="8">Aug</name>\n\
      <name value="9">Sep</name>\n\
      <name value="10">Oct</name>\n\
      <name value="11">Nov</name>\n\
      <name value="12">Dec</name>\n\
    </xsl:variable>\n\
<!--\n\
    <xsl:variable name="monthShortNames" select="\'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec\'"/>\n\
    <xsl:variable name="shortNames" select="str:tokenize($monthShortNames, \',\')"/>\n\
-->\n\
    <dl id="news">\n\
      <xsl:for-each select="'+sel.newsItems+'">\n\
        <xsl:sort select="substring(substring-after(substring-after(substring-after('+sel[type]+', \' \'), \' \'), \' \'), 1, 4)" order="'+dir+'"/>\n\
                <xsl:sort select="count(exsl:node-set($months)/name[.=substring(substring-after(substring-after(current()/'+sel[type]+', \' \'), \' \'), 1, 3)]/preceding-sibling::name)" data-type="number" order="'+dir+'"/>\n\
<!--\n\
        <xsl:sort select="exsl:node-set($months)/name[.=substring(substring-after(substring-after(current()/'+sel[type]+', \' \'), \' \'), 1, 3)]/@value" data-type="number" order="'+dir+'"/>\n\
        <xsl:sort select="$months[name[.=substring(substring-after(substring-after(current()/'+sel[type]+', \' \'), \' \'), 1, 3)]/@value" data-type="number" order="'+dir+'"/>\n\
        <xsl:sort select="count($shortNames[text()=(substring(substring-after(substring-after(current()/'+sel[type]+', \' \'), \' \'), 1, 3) )]/preceding-sibling::*)" order="'+dir+'" />\n\
-->\n\
        <xsl:sort select="substring(substring-after('+sel[type]+', \' \'), 1, 2)" data-type="number" order="'+dir+'"/>\n\
        <xsl:sort select="substring(substring-after(substring-after(substring-after(substring-after('+sel[type]+', \' \'), \' \'), \' \'), \' \'), 1, 8)" data-type="text" order="'+dir+'" />\n\
        <dt>\n\
          <xsl:call-template name="createLinks" />\n\
          <div class="date"><xsl:value-of select="'+sel.newsDate+'" /></div>\n\
        </dt>\n\
        <dd class="parse"><xsl:value-of disable-output-escaping="yes" select="'+sel.newsDesc+'" /></dd>\n\
      </xsl:for-each>\n\
      <script type="text/javascript"><![CDATA[\n\
      (function(){\n\
        for (var i = 0, elem, elems = document.selectNodes("//*[@class=\'parse\']"), text; elem = elems[i]; i++ ) {\n\
          if ((text = elem.innerText) && (/[<&>]/.test(text))) elem.innerHTML = text;\n\
        }\n\
      })();\n\
      ]]></script>\n\
    </dl>\n\
  </xsl:template>\n\
  <xsl:template name="createLinks"><a name="parsed" href="{'+sel.linkHref+'}"><xsl:apply-templates select="'+sel.linkText+'" /></a></xsl:template>\n\
  <xsl:template name="str:tokenize"><xsl:param name="string" select="\'\'" /><xsl:param name="delimiters" select="\' &#x9;&#xA;\'" /><xsl:choose><xsl:when test="not($string)" /><xsl:when test="not($delimiters)"><xsl:call-template name="str:_tokenize-characters"><xsl:with-param name="string" select="$string" /></xsl:call-template></xsl:when><xsl:otherwise><xsl:call-template name="str:_tokenize-delimiters"><xsl:with-param name="string" select="$string" />        <xsl:with-param name="delimiters" select="$delimiters" /></xsl:call-template></xsl:otherwise></xsl:choose></xsl:template>\n\
  <xsl:template name="str:_tokenize-characters"><xsl:param name="string" /><xsl:if test="$string"><token><xsl:value-of select="substring($string, 1, 1)" /></token><xsl:call-template name="str:_tokenize-characters"><xsl:with-param name="string" select="substring($string, 2)" /></xsl:call-template></xsl:if></xsl:template>\n\
  <xsl:template name="str:_tokenize-delimiters"><xsl:param name="string" /><xsl:param name="delimiters" /><xsl:variable name="delimiter" select="substring($delimiters, 1, 1)" /><xsl:choose><xsl:when test="not($delimiter)"><token><xsl:value-of select="$string" /></token></xsl:when><xsl:when test="contains($string, $delimiter)"><xsl:if test="not(starts-with($string, $delimiter))"><xsl:call-template name="str:_tokenize-delimiters"><xsl:with-param name="string" select="substring-before($string, $delimiter)" /><xsl:with-param name="delimiters" select="substring($delimiters, 2)" /></xsl:call-template></xsl:if><xsl:call-template name="str:_tokenize-delimiters"><xsl:with-param name="string" select="substring-after($string, $delimiter)" /><xsl:with-param name="delimiters" select="$delimiters" />      </xsl:call-template></xsl:when><xsl:otherwise><xsl:call-template name="str:_tokenize-delimiters"><xsl:with-param name="string" select="$string" /><xsl:with-param name="delimiters" select="substring($delimiters, 2)" /></xsl:call-template></xsl:otherwise></xsl:choose></xsl:template>\n\
</xsl:stylesheet>';
  //opera.postError('this.sort = ' + this.sort + ' / sortBy = ' + sortBy + ' / direction = ' + direction);
  this.sort = sortBy;
  this.direction = ++d % 2;
  //alert(xsl);
  var a = ujsTransform(xsl), b = document.getElementById('news');
  //alert(a.childNodes[1]);
  //alert(a.innerHTML);
  //opera.postError('b = ' + b + /*' / b.parentNode = ' + b.parentNode + */ ' / a = ' + a /*+ ' / ' + a.firstChild*/);
  b.parentNode.replaceChild(a, b);
}
//javascript:(function(){var count=0, text, regexp;try{regexp=new RegExp("(" + text +")", "i");}catch(er){alert("Unable to create regular expression using text '"+text+"'.\n\n"+er);return;}function searchWithinNode(node, re){var pos, skip, spannode, middlebit, endbit, middleclone;skip=0;if( node.nodeType==3 ){pos=node.data.search(re);if(pos>=0){spannode=document.createElement("SPAN");spannode.style.backgroundColor="yellow";middlebit=node.splitText(pos);endbit=middlebit.splitText(RegExp.$1.length);middleclone=middlebit.cloneNode(true);spannode.appendChild(middleclone);middlebit.parentNode.replaceChild(spannode,middlebit);++count;skip=1;}}else if( node.nodeType==1 && node.childNodes && node.tagName.toUpperCase()!="SCRIPT" && node.tagName.toUpperCase!="STYLE"){for (var child=0; child < node.childNodes.length; ++child){child=child+searchWithinNode(node.childNodes[child], re);}}return skip;}window.status="Searching for "+regexp+"...";searchWithinNode(document.body, regexp);window.status="Found "+count+" match"+(count==1?"":"es")+" for "+regexp+".";})();
