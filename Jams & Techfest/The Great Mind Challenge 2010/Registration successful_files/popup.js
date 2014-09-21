
function forceHeight () {
	if ((navigator.userAgent.indexOf("MSIE")!=-1)!=1) {
		/*if (window.innerHeight > 1000) {*/
		/*	document.getElementsByTagName('body')[0].style.height = window.innerHeight + 'px';*/
	/*	}*/
	}
}

window.onresize= function () {
		if ((navigator.userAgent.indexOf("MSIE")!=-1)!=1) {

			/*document.getElementsByTagName('body')[0].style.height = window.innerHeight + 'px';
			document.getElementsByTagName('body')[0].style.width = window.innerWidth + 'px';*/

		}
}