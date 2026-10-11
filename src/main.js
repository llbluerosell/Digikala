var swiper1 = new Swiper(".slider1 .mySwiper", {
  spaceBetween: 1,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".slider1 .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".slider1 .swiper-button-next",
    prevEl: ".slider1 .swiper-button-prev",
  },
});

var redswiper = new Swiper(" .redswiper .swiper", {
  slidesPerView: 7,
  direction: getDirection(),
  navigation: {
    nextEl: " .redswiper .swiper-button-next",
    prevEl: " .redswiper .swiper-button-prev",
  },
  on: {
    resize: function () {
      redswiper.changeDirection(getDirection());
    },
  },
});
function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

  return direction;
}

var deliveryswiper = new Swiper(".deliveryswiper .mySwiper", {
  slidesPerView: 7,
  spaceBetween: 4,
  navigation: {
    nextEl: ".deliveryswiper .swiper-button-next",
    prevEl: ".deliveryswiper .swiper-button-prev",
  },
});

var greenswiper = new Swiper(".greenswiper .mySwiper", {
  slidesPerView: 7,
  spaceBetween: 4,
  navigation: {
    nextEl: ".greenswiper .swiper-button-next",
    prevEl: ".greenswiper .swiper-button-prev",
  },
});

var suggestionsswiper = new Swiper(".suggestionsswiper .mySwiper", {
  slidesPerView: 7,
  spaceBetween: 4,
  navigation: {
    nextEl: ".suggestionsswiper .swiper-button-next",
    prevEl: ".suggestionsswiper .swiper-button-prev",
  },
});

var popularbrandsswiper = new Swiper(".popularbrandsswiper .mySwiper", {
  slidesPerView: 12,
  navigation: {
    nextEl: ".popularbrandsswiper .swiper-button-next",
    prevEl: ".popularbrandsswiper .swiper-button-prev",
  },
});

var bestsellersswiper = new Swiper(".bestsellersswiper .mySwiper", {
  slidesPerView: 4,
  grid: {
    rows: 3,
  },
  navigation: {
    nextEl: ".bestsellersswiper .swiper-button-next",
    prevEl: ".bestsellersswiper .swiper-button-prev",
  },
});

var slidermenu = new Swiper(".slidermenu .mySwiper", {
  slidesPerView: 10,
  navigation: {
    nextEl: ".slidermenu .swiper-button-next",
    prevEl: ".slidermenu .swiper-button-prev",
  },
});

var dailyswiper = new Swiper(".dailyswiper .mySwiper", {
  slidesPerView: 2.5,
  navigation: {
    nextEl: ".dailyswiper .swiper-button-next",
    prevEl: ".dailyswiper .swiper-button-prev",
  },
});

var endingoffersswiper = new Swiper(".endingoffersswiper .mySwiper", {
  slidesPerView: 7,
  navigation: {
    nextEl: ".endingoffersswiper .swiper-button-next",
    prevEl: ".endingoffersswiper .swiper-button-prev",
  },
});

var customoffersswiper = new Swiper(".customoffersswiper .mySwiper", {
  slidesPerView: 7,
  navigation: {
    nextEl: ".customoffersswiper .swiper-button-next",
    prevEl: ".customoffersswiper .swiper-button-prev",
  },
});
