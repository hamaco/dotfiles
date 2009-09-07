// ==UserScript==
// @name        load style info
// @namespace   http://bmky.net/
// @description get lastupdate, total install, weekly install, from each styles
// @include     http://userstyles.org/users/*
// ==/UserScript==

( function( ) {
var button = document.createElement( "input" );
button.type = "button";
button.value = "load style info";
document.body.insertBefore( button, document.getElementById( "style-list" ) );
button.onclick = function( ) {
	button.style.display = "none";
	var style_list = document.getElementById( "style-list" );
	var styles = style_list.getElementsByTagName( "li" );
	var h2 = document.getElementsByTagName( "h2" )[0];
	var total_span = document.createElement( "span" );
	h2.appendChild( total_span );
	var total_install = 0;
	var total_week = 0;
	
	for( var i = 0, len = styles.length; i < len; i++ ) {
		var style = styles[i].firstChild;
		style.style.lineHeight = "1.3";
		
		var req = new XMLHttpRequest( );
		req.onreadystatechange = function( ) {
			if( req.readyState == 4 ) {
				if( req.status <= 200 && req.status < 300 ) {
					var html = req.responseText;
					html.match( /<div id="last-updated">\s*Last updated (\w+) (\d+) (\d+)\s*<\/div>/ );
					var mon = RegExp.$1;
					var day = RegExp.$2;
					var year = RegExp.$3;
					day = day.replace( /^(.)$/, "0$1" );
					mon = mon.replace( /Jan/i, "01" )
							.replace( /Feb/i, "02" )
							.replace( /Mar/i, "03" )
							.replace( /Apr/i, "04" )
							.replace( /May/i, "05" )
							.replace( /Jun/i, "06" )
							.replace( /Jul/i, "07" )
							.replace( /Aug/i, "08" )
							.replace( /Sep/i, "09" )
							.replace( /Oct/i, "10" )
							.replace( /Nov/i, "11" )
							.replace( /Dec/i, "12" )
							;
					
					html.match( /<div id="install-counts">\s*(\d+) installs this week, (\d+) total\.\s*<\/div>/ );
					var week = RegExp.$1;
					var total = RegExp.$2;
					
					style.parentNode.innerHTML =
						  '<span style="display:inline-block;width:5em;margin-right:10px;">'
						+ year + "-" + mon + "-" + day
						+ "</span>"
						+ '<span style="display:inline-block;width:5em;margin-right:10px;text-align:right;">'
						+ total + "(" + week + ")"
						+ "</span>"
						+ style.parentNode.innerHTML;
					
					total_install += parseInt( total );
					total_week += parseInt( week );
					total_span.innerHTML = total_install + "(" + total_week + ")";
				}
				else {
					opera.postError( "error: " + style.href );
				}
			}
		};
		req.open( "GET", style.href, false );
		req.send( null );
	}
}

} )( );
