/**********************
FOR USE ON SHARE MODULE
**********************/

"use strict";
// global window: true, document: true, jQuery: true, swfobject: true, Intel: true */

function modShare(){
	$(".mod-share").show();
	var shareTool = $('.share-tool li.drop');
	
	// On mouseenter / mouseleave, show/hide share module
	$(shareTool).each(function () {
		$(this).bind("mouseenter", function (e) {
			$(this).addClass('sfhover').find('.sec-nav').css('display', 'block');
			if($.browser.msie && $.browser.version < "7.0") $("#grid-06-sul .mod-language-selection .select-language, #grid-12-sup .mod-language-selection .select-language").hide();

		}).bind("mouseleave", function (e) {
			$(this).removeClass('sfhover').find('.sec-nav').css('display', 'none');
			if($.browser.msie && $.browser.version < "7.0") $("#grid-06-sul .mod-language-selection .select-language, #grid-12-sup .mod-language-selection .select-language").show();

		});
	});
}

(function ($) {

	// Initializes the share module
	Intel.mod.share = function () {

		$(".mod-share").show();
		var shareTool = $('.share-tool li.drop');
		
		// On mouseenter / mouseleave, show/hide share module
		$(shareTool).each(function () {
			$(this).bind("mouseenter", function (e) {
				$(this).addClass('sfhover').find('.sec-nav').css('display', 'block');
				if($.browser.msie && $.browser.version < "7.0") $("#grid-06-sul .mod-language-selection .select-language, #grid-12-sup .mod-language-selection .select-language").hide();

			}).bind("mouseleave", function (e) {
				$(this).removeClass('sfhover').find('.sec-nav').css('display', 'none');
				if($.browser.msie && $.browser.version < "7.0") $("#grid-06-sul .mod-language-selection .select-language, #grid-12-sup .mod-language-selection .select-language").show();

			});
		});
	};

}(jQuery));

// Append to Global JS Initializations using jQuery
jQuery(document).ready(function () {
	modShare();
});
