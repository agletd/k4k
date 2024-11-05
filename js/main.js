let steps__slider;

function initStepsSwiper() {
  if (window.innerWidth <= 1250) {
    if (!steps__slider) {
      steps__slider = new Swiper('.steps__slider', {
        slidesPerView: "auto",
        spaceBetween: '20px',
      
        pagination: {
          el: '.swiper-pagination',
        },
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });
    }
  } else {
    if (steps__slider) {
      steps__slider.destroy(true, true);
      steps__slider = null; 
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initStepsSwiper();

  const members__slider = new Swiper('.members__slider', {
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
        476: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
          init: function () {
              const currentIndex = this.realIndex + 1; 
              const totalSlides = this.slides.length - 2;
              document.getElementById('members__slider__current').innerHTML = `<span class="current">${currentIndex}</span> / ${totalSlides}`;
          },
          slideChange: function () {
              const currentIndex = this.realIndex + 1; 
              const totalSlides = this.slides.length - 2;
              document.getElementById('members__slider__current').innerHTML = `<span class="current">${currentIndex}</span> / ${totalSlides}`;
          },
      }
    
  });
    
})


window.addEventListener('resize', initStepsSwiper);