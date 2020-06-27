$(document).ready(function(){
  AOS.init();
  // var swiper = new Swiper('.swiper-slider-card', {
  //   slidesPerView: 1,
  //   spaceBetween:0,
  //   // init: false,
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //   breakpoints: {
  //     640: {
  //       slidesPerView: 2,
  //       spaceBetween: 0,
  //     },
  //     768: {
  //       slidesPerView: 3,
  //       spaceBetween: 0,
  //     },
  //     1024: {
  //       slidesPerView: 3,
  //       spaceBetween: 0,
  //     },
  //   }
  // });

  $('.slider-department-card').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    loop: false,
    arrows: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  });

  $('.slider-top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: false,
    asNavFor: '.slider-bottom'
  });
  $('.slider-bottom').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-top',
    dots: false,
    centerMode: false,
    focusOnSelect: true
  });


    //trager Nice Scroll

    $(".extra-department").niceScroll({
      cursorcolor: 'rgb(152, 147, 147)',
      cursorwidth: '8px',
      cursorborder: '1px solid rgb(152, 147, 147)',
      // horizrailenabled:false,  
  });

});

var fileInput = document.querySelector('#file-input');
var fileName = document.querySelector('#file-name');
fileInput.addEventListener('change', ()=>{
  var nameOfFile = fileInput.value.replace(/.*[\/\\]/, '');
  fileName.textContent = nameOfFile;
  console.log(fileInput.value);
})


