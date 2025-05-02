
$(document).ready(function(){
  $("#collapsibleNavId").on("shown.bs.collapse", function () {
    $(".fa-bars").hide();
    $(".fa-xmark").show();
  });

  $("#collapsibleNavId").on("hidden.bs.collapse", function () {
    $(".fa-bars").show();
    $(".fa-xmark").hide();
  });

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    direction: 'horizontal',
    loop: true,
    breakpoints: {  
      320:{
        slidesPerView: 2,
        spaceBetween: 20,},
      480: {
        slidesPerView: 2,
        spaceBetween: 20,},
      640: {
        slidesPerView: 3,
        spaceBetween: 20, },
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  AOS.init();
});
