'use strict';

$('.carousel').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  adaptiveHeight: true,
  fade: true,
  autoplay:true,
  autoplaySpeed: 4500,
  // customPaging: function(slider, i) {
  //   // this example would render "tabs" with titles
  //   return '<span class="pagination__item"></span>';
  // }
});
