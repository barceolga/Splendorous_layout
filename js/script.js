/*jshint esversion: 6*/
$(function() {
  var $slider_carousel = $('.slider_carousel');
  var $listSliderCarousel = $('.slider_carousel-list');
  var $sliderCarouselItem = $('.slider_carousel-list .slider_carousel-list-item');
  var sliderCarouselLength = $sliderCarouselItem.length;
  var $arrowLeft = $('.slider_arrows .slider_arrow-left');
  var $arrowRight = $('.slider_arrows .slider_arrow-right');
  var currentSlide = 1;
  var firstSlide = $listSliderCarousel.find('li:first');
  var lastSlide = $listSliderCarousel.find('li:last');
  var slideWidth = $slider_carousel.width();

  $listSliderCarousel.width(slideWidth * (sliderCarouselLength + 1));

  function setSlide(x) {
    if (x < 0) {
      currentSlide = sliderCarouselLength -1;

      $listSliderCarousel.css({
        marginLeft: (currentSlide + 1) * slideWidth * -1
      });

      $listSliderCarousel.animate({
        marginLeft: (currentSlide) * slideWidth * -1
      }, slideWidth);

    } else if  (x > (sliderCarouselLength)) {
      currentSlide = 1;

      $listSliderCarousel.css({
        marginLeft: (currentSlide - 1) * slideWidth * -1
      });

      $listSliderCarousel.animate({
        marginLeft: (currentSlide) * slideWidth * -1
      }, slideWidth);
    } else {
      $listSliderCarousel.animate({
        marginLeft: (x) * slideWidth * -1
      }, slideWidth);
      currentSlide = x;
    }
  }
  firstSlide.before(lastSlide.clone(true).appendTo($listSliderCarousel));

   $arrowRight.click(() => {
      setSlide(currentSlide + 1);
   });

   $arrowLeft.click(() => {
      setSlide(currentSlide -1);
   });
});

$(function(){
		$('#menu').slicknav();
	});
