$(function () {

  $('.blog-details__button').on('click', function () {
    $('.blog-details__filter').toggleClass('blog-details__filter--active');
  });

  $('.blog-one__btn').on('click', function () {
    $('.blog-details__filter').toggleClass('blog-details__filter--active');
  });

  $('.shop__btn').on('click', function () {
    $('.shop__filters').toggleClass('shop__filters--active');
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.product-one__tabs-link').on('click', function (e) {
    e.preventDefault();
    $('.product-one__tabs-link').removeClass('product-one__tabs-link--active');
    $(this).addClass('product-one__tabs-link--active');

    $('.product-one__tabs-text').removeClass('product-one__tabs-text--active');
    $($(this).attr('href')).addClass('product-one__tabs-text--active');
  });

  $('.product-one__related-item').slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 300,
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="9" viewBox="0 0 22 9"><defs><style>.cls-1 {fill: #a3bbc8;fill-rule: evenodd;}</style></defs><path class="cls-1" d="M1460.7,1330.53h-16.94l0.1-2.86a0.3,0.3,0,0,0,.08-0.2,0.323,0.323,0,0,0-.08-0.21l-0.18-.17a0.267,0.267,0,0,0-.4,0l-4.2,4.21a0.3,0.3,0,0,0-.08.2,0.323,0.323,0,0,0,.08.21l4.2,4.21a0.29,0.29,0,0,0,.4,0l0.18-.17a0.323,0.323,0,0,0,.08-0.21,0.3,0.3,0,0,0-.08-0.2l-0.12-2.86h16.97a0.3,0.3,0,0,0,.29-0.3v-1.37A0.291,0.291,0,0,0,1460.7,1330.53Z" transform="translate(-1439 -1327)"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="9" viewBox="0 0 22 9"><defs><style>.cls-1 {fill: #a3bbc8;fill-rule: evenodd;}</style></defs><path class="cls-1" d="M1509.3,1332.47h16.94l-0.1,2.86a0.3,0.3,0,0,0-.08.2,0.323,0.323,0,0,0,.08.21l0.18,0.17a0.267,0.267,0,0,0,.4,0l4.2-4.21a0.3,0.3,0,0,0,.08-0.2,0.323,0.323,0,0,0-.08-0.21l-4.2-4.21a0.29,0.29,0,0,0-.4,0l-0.18.17a0.323,0.323,0,0,0-.08.21,0.318,0.318,0,0,0,.08.2l0.12,2.86h-16.97a0.3,0.3,0,0,0-.29.3v1.37A0.291,0.291,0,0,0,1509.3,1332.47Z" transform="translate(-1509 -1327)"/></svg></button>',
    infinite: false,
  })

  $('.product-slide__small').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });

  $('.product-slide__big').slick({
    asNavFor: '.product-slide__small',
    draggable: false,
    arrows: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active')
  });

  $('.buttons-list').on('click', function () {
    $('.products-item').addClass('products-item--list');
    $('.shop-content__inner').addClass('shop-content__inner--list');
  });

  $('.buttons-grid').on('click', function () {
    $('.products-item').removeClass('products-item--list');
    $('.shop-content__inner').removeClass('shop-content__inner--list');
  });

  $('.slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpead: 2000
  });

  $('.partners__list').slick({
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
    onStart: function (data) {
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

  $(".star").rateYo({
    starWidth: "17px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "15px",
    readOnly: true,
  });

  $(".select__style, .product-one__input").styler()



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