$(function(){
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpead: 2000
  });

  $('.partners__item').slick({
    dots: false,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpead: 2000,
    slidesToShow: 5,
    slidesToScroll: 5,
  });



  var mixer = mixitup('.products__items');
  var mixer = mixitup('.design__items');
});