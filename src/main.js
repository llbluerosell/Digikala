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
