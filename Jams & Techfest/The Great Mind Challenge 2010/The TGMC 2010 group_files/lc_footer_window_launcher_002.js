<!-- START HIDE SCRIPT from disabled or old browsers

// **************************************************
// * FILE:  lc_footer_window_launcher.js
// * DATE:  02.01.2009
// * 
// * AUTHOR: David Salinas
// *
// * Property of IBM. Copyright 2009
// * 
// **************************************************


function openFeedbackWithParam()
{
	openNewWindow('/developerworks/mydeveloperworks/feedback?referingURL='+document.location.href,'blank','location=no,scrollbars=yes');
} // end of method: openFeedbackWithParam

function openFeedback()
{
	var lang = GetCookie('conxnsCookie');
	if(lang=='zh') lang='dwchina';
	if(lang=='pt') lang='dwbrazil';
	if(lang=='pt_br') lang='dwbrazil';
	if(lang=='pt-br') lang='dwbrazil';
	if(lang=='es') lang='dwssa';
	if(lang=='ja') lang='dwjapan';
	if(lang=='ko') lang='dwkorea';
	if(lang=='ru') lang='dwrussia';
	openNewWindow('/developerworks/secure/feedback.jsp?domain='+lang,'blank','location=no,scrollbars=yes');
	//openNewWindow('/developerworks/secure/feedback.jsp','blank','location=no,scrollbars=yes');
} // end of method: openFeedback


function openReportAbuseWithParam()
{
	var lang = GetCookie('conxnsCookie');
	if(lang=='es_AR') lang='es';
	if(lang=='pt') lang='pt_br';
	if(lang=='pt_br') lang='pt_br';
	if(lang=='pt-br') lang='pt_br';
	
	openNewWindow('/developerworks/mydeveloperworks/report?lang='+lang+'&referingURL='+document.location.href,'blank','location=1,scrollbars=1,resizable=1,status=1');
	//document.location='/developerworks/mydeveloperworks/report?lang='+lang+'&referingURL='+document.location.href
	
	
	} // end of method: openReportAbuseWithParam

function openNewWindow(url,tar,arg)
{
	window.open(url,tar,arg);
} // end of method: openNewWindow


function openTerms()
{
	var lang = GetCookie('conxnsCookie');
	if(lang=='zh') lang='zh-cn';
	if(lang=='pt') lang='pt_br';
	if(lang=='pt_br') lang='pt_br';
	if(lang=='pt-br') lang='pt_br';
	if(lang=='ja') lang='jp';
	document.location='/developerworks/mydeveloperworks/terms?lang='+lang+'&referingURL='+document.location.href;

} // end of method: openTerms

function openDiscussion()
{
	var lang = GetCookie('conxnsCookie');
	//document.location='/developerworks/mydeveloperworks/discussion?lang='+lang+'&referingURL='+document.location.href;
	//DJM Seems lik ereferingURL is not needed
	if (lang=='en')
	document.location='/developerworks/mydeveloperworks/discussion'
	else if (lang=='ja')
	document.location='/developerworks/jp/mydeveloperworks/discussion'
	else if (lang=='pt_br'||lang=='pt'||lang=='pt_BR' ||lang=='pt-br')
	document.location='/developerworks/br/mydeveloperworks/discussion'
	else if (lang=='es'||lang=='es_AR')
	document.location='/developerworks/ssa/mydeveloperworks/discussion'
	else
	document.location='/developerworks/'+lang+'/mydeveloperworks/discussion'

} // end of method: openTerms

function openNewWindow(url,tar,arg)
{
	window.open(url,tar,arg);
} // end of method: openNewWindow


function getCookieVal(offset) {
  var endstr = document.cookie.indexOf (";", offset);
  if (endstr == -1) { endstr = document.cookie.length; }
  var cookieVal = unescape(document.cookie.substring(offset, endstr));

  // special case for English help matching the cookie value with prod
  if (cookieVal == "en_US" || cookieVal == "en_us" || cookieVal == "en-us")
  {
     cookieVal = "en";
  }  
  else if (cookieVal == "ja")  // special case b/c dW uses jp for locale and Lotus uses ja
  {
     cookieVal = "jp";
  }

  return cookieVal;
}

function GetCookie(name) {
  var arg = name + "=";
  var alen = arg.length;
  var clen = document.cookie.length;
  var i = 0;

  var defaultLangVal = "en";
  while (i < clen) {
    var j = i + alen;
    if (document.cookie.substring(i, j) == arg) {
      return getCookieVal (j);
      }
    i = document.cookie.indexOf(" ", i) + 1;
    if (i == 0) break; 
    }
  //ensures null isn't returned, "en" is
  return defaultLangVal;
}



// END - HIDE SCRIPT from disabled or old browsers -->