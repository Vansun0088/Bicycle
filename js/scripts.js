$(document).ready(function () {
  $('.menu-button').on(e: 'click', t: function () {
    $('.navigation-wrapper').addClass(t: 'active');

  })
  $('.close-menu').on( e: 'click', t: function() {
    $('.navigation-wrapper').renoveClass ( t: 'ac')
  })
})
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
