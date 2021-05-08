$(function(){
  $('.slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpead: 2000
  });

  $('.partners__item').slick({
    dots: false,
    arrows: false,    
    autoplay: true,
    autoplaySpead: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
  });

  $(".filter-price__input").ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });


  const mixin1 = document.querySelector('.products__items');
  const mixin2 = document.querySelector('.design__items');

  if (mixin1) {
    mixitup('.products__items', {
      selectors: {
        control: '.mixitup'
      }
    })
  }

  if (mixin2) {
    mixitup('.design__items', {
      selectors: {
        control: '.mixitup2'
      }
    })
  }


  // var mixer = mixitup('.products__items');
  // var mixer = mixitup('.design__items');
});