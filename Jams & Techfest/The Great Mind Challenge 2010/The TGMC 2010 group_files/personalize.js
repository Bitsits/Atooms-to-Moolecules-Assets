/* Copyright IBM Corp. 2001, 2008  All Rights Reserved.              */

/* author: sberajaw   

badebiyi ******************* Deprecated in 2.5     */                                          

var personalizeNavBar = function personalizeNavBar(evt) {

	// remove links from template since we are going to prepend the ul with the info from the loginInfo.do
	//$('headerHelpLi').remove();
	//$('logoutLi').remove();

	//var loginInfo = Element.down($('headerInner'), '.userlist');
	loginInfo = Element.down($('lotusBanner'), '.lotusInlinelist', 1);
	//alert("*************"+loginInfo);

	var groupsReferrer = window.location.href;
	var groupsReferrerDecoded = decodeURIComponent(groupsReferrer);		
	var groupsReferrerSanitized = groupsReferrerDecoded.stripScripts();
	if (groupsReferrerDecoded!=groupsReferrerSanitized) {
		groupsReferrer = groupsReferrerSanitized; 		
	}
		
	
	new Ajax.Updater(
				loginInfo,
				"/developerworks/mydeveloperworks/profiles/html/loginInfo.do?app=groups&groupsRedirect=" + groupsReferrer,
				{  
				 method: 'get', evalScripts: true });

}

Event.observe(window, 'load', personalizeNavBar);

