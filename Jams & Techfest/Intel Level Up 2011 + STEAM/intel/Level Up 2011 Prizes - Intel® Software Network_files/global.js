/***************************************
FOR USE GLOBALLY ON ALL RELEVANT MODULES
***************************************/

"use strict";
// global window: true, document: true, jQuery: true, swfobject: true, Intel: true */
// Setting up jQuery for eventual use with Other Libraries
var Intel = (!Intel) ? {} : Intel;
Intel.gbl = {}; // for Global methods, vars, and objects
Intel.geo = {}; // for GEO LANGUAGE SETTINGS in the individual JS modules
Intel.mod = {}; //for Module specific methods, vars, and objects
(function ($) {

	// Fix mod box bottom rounded corners
	Intel.gbl.modBox = function () {
		$('.mod-box-210 .mod-box-inner-bottom:last, .mod-box-220 .mod-box-inner-bottom:last,').remove();
    };
    
	
	// SLIDER BUTTONS
	// * Slider Button Click Action Handler For Use With Forms
	// * @param formId string id attribute of the parent form
	Intel.gbl.doSubmit = function (formId) {
	
		// Display buttons when JS is enabled
		$('.button-script, .go-button').show();
		
		// Adds submit button functionality using given id
		if ($('#' + formId)) {
			$('#' + formId).submit();
		}
	};
	
	// Adds dotted border to links in IE7
	Intel.gbl.ie7Focus = function () {
		if ($.browser.msie && $.browser.version === "7.0") {
			$('body a').focus(function () {
				$(this).css('border', '1px dotted #aaa');
			});
			$('body a').blur(function () {
				$(this).css('border', 'none');
			});
		}
	};
	
	// NOSCRIPT tag alternate for better printing of ui elements
	Intel.gbl.noScriptInit = function () {
		if ($('.noscript')) {
			$('.noscript').css('display', 'none');
		}
	};
}(jQuery));

// Global JS Initializations using jQuery
jQuery(document).ready(function () {
	Intel.gbl.modBox();
	Intel.gbl.doSubmit();
	Intel.gbl.noScriptInit();
	//Intel.gbl.ie7Focus();
 if($("#loginForm").length) {
  $("#loginForm").cluetip({ activation: "click", dropShadow: false, sticky: true, arrows: false, showTitle: false, local: true, cursor: "pointer" });
 }
 if($("a.basic:visible").length) {
  $("a.basic").cluetip({ sticky: false, width: "165px", dropShadow: false, arrows: false, showTitle: false });
 }
});
