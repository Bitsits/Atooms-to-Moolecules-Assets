var personalizeNavBar = function personalizeNavBar(evt) {

// remove links from template since we are going to prepend the ul with the info from the loginInfo.do
//$('headerHelpLi').remove();
//$('logoutLi').remove();

//var loginInfo = Element.down($('headerInner'), '.userlist');
loginInfo = Element.down($('lotusBanner'), '.lotusInlinelist', 1);
//alert("*************"+loginInfo);

new Ajax.Updater(
loginInfo,
"/developerworks/mydeveloperworks/profiles/html/loginInfo.do?app=wikis",
{ 
method: 'get', evalScripts: true });
}

Event.observe(window, 'load', personalizeNavBar); 