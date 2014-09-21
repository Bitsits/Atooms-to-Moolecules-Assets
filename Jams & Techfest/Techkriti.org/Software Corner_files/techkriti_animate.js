/* SRCPIT by Abhishek Jain-DaDevilRocks */
var gblPhotoShufflerDivId = "sponsor_div";
var gblPhotoShufflerImgId = "sponsorimg_div";
var gblImg = new Array(
	"/themes/techkriti/images/sponsors/microsoft.gif",
	"/themes/techkriti/images/sponsors/ntpc.gif",
	"/themes/techkriti/images/sponsors/hbr.gif",
	"/themes/techkriti/images/sponsors/kyrion.gif",
	"/themes/techkriti/images/sponsors/ce.gif",
	"/themes/techkriti/images/sponsors/finisar.gif",
	"/themes/techkriti/images/sponsors/maxim.gif",
	"/themes/techkriti/images/sponsors/nextbigidea.gif",
	"/themes/techkriti/images/sponsors/etihad.gif",
	"/themes/techkriti/images/sponsors/sbi.gif",
	"/themes/techkriti/images/sponsors/cetr.gif",
	"/themes/techkriti/images/sponsors/canada.gif",
	"/themes/techkriti/images/sponsors/techreview.gif",
	"/themes/techkriti/images/sponsors/digit.gif",
	"/themes/techkriti/images/sponsors/letmeknow.gif",
	"/themes/techkriti/images/sponsors/dare.gif",
	"/themes/techkriti/images/sponsors/bhash.gif",
	"/themes/techkriti/images/sponsors/google.gif"
    );
var gblPauseSeconds = 3;
var gblFadeSeconds = .85;
var gblRotations = 10000;
var gblDeckSize = gblImg.length;
var gblOpacity = 100;
var gblOnDeck = 0;
var gblStartImg;
var gblImageRotations = gblDeckSize * (gblRotations+1);
window.onload = photoShufflerLaunch;
function photoShufflerLaunch()
{
	var theimg = document.getElementById(gblPhotoShufflerImgId);
	gblStartImg = theimg.src;
	//document.getElementById(gblPhotoShufflerDivId).style.backgroundImage='url(' + gblImg[gblOnDeck] + ')';
	setTimeout("photoShufflerFade()",gblPauseSeconds*1000);
}
function photoShufflerFade()
{
	var theimg = document.getElementById(gblPhotoShufflerImgId);
	var fadeDelta = 100 / (30 * gblFadeSeconds);
	if (gblOpacity < 2*fadeDelta ) 
	{
		gblOpacity = 100;
		if (gblImageRotations < 1) return;
		photoShufflerShuffle();
		setTimeout("photoShufflerFade()",gblPauseSeconds*1000);
	}
	else
	{
		gblOpacity -= fadeDelta;
		setOpacity(theimg,gblOpacity);
		setTimeout("photoShufflerFade()",30);
	}
}
function photoShufflerShuffle()
{
	var thediv = document.getElementById(gblPhotoShufflerDivId);
	var theimg = document.getElementById(gblPhotoShufflerImgId);
	theimg.src = gblImg[gblOnDeck];
	setOpacity(theimg,100);
	gblOnDeck = ++gblOnDeck % gblDeckSize;
	if (--gblImageRotations < 1)
	{
		gblImg[gblOnDeck] = gblStartImg;
	}
	//alert(gblImg[gblOnDeck]);
	//thediv.style.backgroundImage='url(' + gblImg[gblOnDeck] + ')';
}
function setOpacity(obj, opacity) {
	opacity = (opacity == 100)?99.999:opacity;
	obj.style.filter = "alpha(opacity:"+opacity+")";
	obj.style.KHTMLOpacity = opacity/100;
	obj.style.MozOpacity = opacity/100;
	obj.style.opacity = opacity/100;
}