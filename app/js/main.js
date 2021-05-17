$(function(){

  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active')
  });

  $('.buttons-list').on('click', function () {
    $('.products-item').addClass('products-item--list');
  });

  $('.buttons-grid').on('click', function () {
    $('.products-item').removeClass('products-item--list');
  });

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

  $(".filter-recent__star").rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "6px",
    readOnly: true,
  });

  $(".products-item__star").rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "6px",
    readOnly: true,
  });

  $(".select__style").styler()


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