'use strict';

//slide header
$('.carousel').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  adaptiveHeight: true,
  fade: true,
  autoplay: true,
  autoplaySpeed: 4500
});




$('.certificate__box').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4500,
  arrows: false
});