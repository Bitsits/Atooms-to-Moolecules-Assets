$(function() {
	$('body').add('<div class="jqmWindow box" style="width:400px;left:50%;z-index:9999999" id="academic_access">' + '<div class="boxHeader" style="width:380px;background-color:#EAF3FA;"><a href="#" mce_href="#" class="jqmClose" style="color:#0861AD" mce_style="color:#0861AD"><b>[X]</b>&nbsp;</a>Take 2 minutes to submit your Demographic Survey</div>' + '<div align="left" class="boxBody">' + '<div id="ac_download_data" align="left"><div>In order to provide with free tools, programs and course materials to our members we need some additional information from you about your level of involvement teaching concepts of parallelism.<br /><br />  You will receive 10 Black-belt points for your participation and have the option of enrolling for free Intel Software Development licenses here.<br /><br /><input type="button" class="button" style="font-weight:bold" mce_style="font:bold" value="I&rsquo;ll answer now" onclick="opennewwindow()" />&nbsp;<input type="button" class="button" style="font-weight:bold" mce_style="font:bold" value="Please remind me later" onclick="cancelsurvey()" /><br /><br /></div><br>' + '<br>' + '</div>' + '</div>');
});

function init_academic() {
	$('#academic_access').jqm({
		overlay: 10,
		modal: true,
		onHide: function(hash) {
			hash.w.fadeOut('1000', function() {
				hash.o.remove();
			});
		}
	});
}

function opennewwindow() {
	window.open('http://software.intel.com/en-us/sites/college/university/facultyreporting.php');
	$('#academic_access').jqm().jqmHide();
}

function cancelsurvey() {
	$.post('/en-us/services/updateacademic/rnd='+Math.random(), function(data) {});
	$('#academic_access').jqm().jqmHide();
}
