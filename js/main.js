$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 200,            // Integer: Speed of the transition, in milliseconds
  timeout: 10000,          // Integer: Time between slide transitions, in milliseconds
});

Visibility.onVisible(function(){
	setTimeout(function () {
		$(".home div").addClass("animated swing ");
	}, 400);
	setTimeout(function () {
		$(".about h2").addClass("animated fadeInDown");
	}, 800);
	setTimeout(function () {
		$(".skills h2").addClass("animated fadeInDown");
	}, 1700);
	setTimeout(function () {
		$(".contato h2").addClass("animated fadeInDown");
	}, 1900);

});
