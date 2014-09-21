function mycarousel_initCallback(carousel)
{
    carousel.clip.hover(function() {
        carousel.stopAuto();
    }, function() {
        carousel.startAuto();
    });
};

jQuery(document).ready(function() {
    jQuery('#sidebar_right_spotlight').jcarousel({
        auto: 2,
        wrap: 'circular',
		scroll: 1,
		visible: 1,
		easing: 'BounceEaseOut',
		animation: 1200,
        initCallback: mycarousel_initCallback
    });
	jQuery('#sidebar_right_updates').vTicker({
		speed: 800,
		pause: 3000,
		showItems: 1,
		animation: 'fade',
		mousePause: true,
		//height: 65,
		direction: 'up'
	});
});

jQuery.easing['BounceEaseOut'] = function(p, t, b, c, d) {
	if ((t/=d) < (1/2.75)) {
		return c*(7.5625*t*t) + b;
	} else if (t < (2/2.75)) {
		return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
	} else if (t < (2.5/2.75)) {
		return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
	} else {
		return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
	}
};