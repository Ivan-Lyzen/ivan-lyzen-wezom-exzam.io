'use strict';
/**
 * Данная функции заставляет прокручиваться слайдер
 * перемсенные:
 * paginationItem ===> пагинация для стайдов виде кирпичей
 * carouselPagination ===> блок с пагинацией для слайдера
 * carouselImg ===> Блок где содержатся сама картинка слайда, а также описание к слайду если оно необходимо
 * prevBtn ===> Кнопка для прокручивания слайдера назад
 * nextBtn ===> Кнопка для прокручивания слайдера вперед
 * slideIndex ===> Индексация слайда
 *
 * далее осуществляем проверку если индексация меньше длины блока в котором находятся пагинация слайдера то присваиваем ей эту длину
 * если же больше то присваиваем 1 блок
 *
 * потом зацикливем в первом циклу проверяем наличие количества блоков со слайдерами если их количество больше 1-го элемента то все остальные скрываем
 * далее зацикливаем пагинацию таким же образом только вместо скрытия мы присваеваем класс который будет выделять данный блок
 */
// (function() {
//   var paginationItem = document.getElementsByClassName('pagination__item'),
//       carouselPagination = document.getElementsByClassName('carousel__pagination')[0],
//       carouselImg = document.getElementsByClassName('carousel__img'),
//       prevBtn = document.getElementsByClassName('carousel__left'),
//       nextBtn = document.getElementsByClassName('carousel__right'),
//       slideIndex = 1;

//   showSlides(slideIndex);

//   function showSlides (n) {
//     if ( n < 1 ) {
//       slideIndex = carouselImg.length;
//     } else if ( n > carouselImg.length ) {
//       slideIndex = 1;
//     };

//     for ( var x = 0; x < carouselImg.length; x++ ) {
//       carouselImg[x].style.display = 'none';
//     };

//     for ( var x = 0; x < paginationItem.length; x++ ) {
//       paginationItem[x].classList.remove( 'carousel__is-active' );
//     };
//     carouselImg[slideIndex - 1].style.display = 'block';
//     paginationItem[slideIndex -1].classList.add( 'carousel__is-active' );
//   };

// /**
//  * функция которая листает слайды (принимает параметр) в этой функции мы добавляем showSlides и прибавляем к ней параметр
//  * затем навешиваем нашим кнопка пролистывания слайдо обработчик событий
//  */

//   function plusSlides ( n ) {
//     showSlides( slideIndex += n );
//   };
// /**
//  * при клике на точку должен отображаться коректный слайд
//  */

//   function currentSlide (n) {
//     showSlides( slideIndex = n );
//   };
//   prevBtn = onclick = function() {
//     plusSlides( -1 );
//   };

//   nextBtn = onclick = function() {
//     plusSlides( 1 );
//   };
// carouselPagination.onclick = function ( e ){
//   for ( var x = 0; x < paginationItem.length + 1; x++ ) {
//     if ( e.target.classList.contains( 'pagination__item' ) && e.target == paginationItem[x - 1]) {
//       currentSlide( x );
//     };
//   };
// };

// })();

$('.carousel').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  adaptiveHeight: true,
  fade: true,
  autoplay:true,
  autoplaySpeed: 4000,
  // customPaging: function(slider, i) {
  //   // this example would render "tabs" with titles
  //   return '<span class="pagination__item"></span>';
  // }
});