jQuery(document).ready(function(){
	lastloaded = "/#/";
	jQuery.history.init(callback);
	do_bind();

});

function do_bind(){
	jQuery('a([href^=\/\]):not([href^=\/#\]):not([href^=mailto]):not([href$=.doc]):not([href$=.docx]):not([href$=.pdf]):not([href$=.rar]):not([href$=.zip]):not([href*=.jpg]):not([href*=.png]):not([href*=.gif]):not([href*=.skp]):not([href^=http]):not([href^=https]):not([rel="noajax"]):not([href="/register/"]):not([href^="/forums/"])')
	//.css({outline: 'solid 1px red'})
	.livequery('click', function() {
		//if($(this).attr("href") == "/") $(this).attr("href") = "/home/";
		jQuery.history.load($(this).attr("href"));
		return false;
	});
}

function callback(requestUrl){
	if(requestUrl == "") return;
	if(requestUrl == lastloaded) {return;}
	loading_html = '<div id="loading" ><img src="/themes/techkriti/images/loading.gif" height="300px" width="300px" class="center"/></div>';
	jQuery('#content').html(loading_html);
	/*$('.the_content').fadeOut("slow", function(){
		$('#content').html(loading_html);
	});*/
	get_content(requestUrl);
	get_header(requestUrl);
	get_nav(requestUrl);
	try{
		_gaq.push(['_trackPageview', requestUrl]);
	}
	catch(error){}
	lastloaded = requestUrl;
	return false;
}

function get_content(requestUrl){
	jQuery.ajax({
		url: requestUrl,
		type: "GET",
		data: "ajax=1&content=1",
		cache: false,
		dataType: "html",
		success: function(data){
			if(data.search(/function.unlink/i) >= 0){
				get_content(requestUrl);
				return;
			}
			jQuery("#loading").fadeOut("slow");
			jQuery("#content").html(data);
			do_bind();
		},
		error: function(x,e){
			jQuery("#loading").fadeOut("slow");
			if(x.status==404){
				jQuery("#content").html("OOPS the page you were looking for was not found!!!<br/> Please check the url you have entered.");
			}else{
				jQuery("#content").html("Some unexpected error occured. <br/>Please try reloading the page after some time.");
			}
		}
	});
}
function get_nav(requestUrl){
	jQuery.ajax({
		url: requestUrl,
		type: "GET",
		data: "ajax=1&nav=1",
		cache: false,
		dataType: "html",
		success: function(data){
			if(data.search(/function.unlink/i) >= 0){
				get_nav(requestUrl);
				return;
			}
			jQuery("#sidebar_left").html(data);
			do_bind();
		},
		error: function(x,e){
		}
	});
}
function get_header(requestUrl){
	jQuery.ajax({
		url: requestUrl,
		type: "GET",
		data: "ajax=1&header=1",
		cache: true,
		dataType: "html",
		success: function(data){
			if(data.search(/function.unlink/i) >= 0){
				get_header(requestUrl);
				return;
			}
			jQuery("#header_logo").html(data);
			do_bind();
		},
		error: function(x,e){
		}
	});
}