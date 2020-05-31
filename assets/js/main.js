$(document).ready(function(){
  AOS.init();
  var swiper = new Swiper('.swiper-slider-card', {
    slidesPerView: 1,
    spaceBetween:0,
    // init: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    }
  });
});

var fileInput = document.querySelector('#file-input');
var fileName = document.querySelector('#file-name');
fileInput.addEventListener('change', ()=>{
  var nameOfFile = fileInput.value.replace(/.*[\/\\]/, '');
  fileName.textContent = nameOfFile;
  console.log(fileInput.value);
})


