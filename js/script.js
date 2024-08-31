
//navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

document.getElementById('hamburger').addEventListener('click', function() {
    this.classList.toggle('hamburger-active');
    document.getElementById('nav-menu').classList.toggle('hidden');
  });
  

  window.addEventListener('resize', adjustLayout);

  function adjustLayout() {
      const skillsSection = document.getElementById('skills');
      const portfolioSection = document.getElementById('portfolio');
      const isMobile = window.innerWidth < 1024;
  
      if (isMobile) {
          skillsSection.classList.add('grid-cols-1');
          skillsSection.classList.remove('grid-cols-3');
          portfolioSection.classList.add('grid-cols-1');
          portfolioSection.classList.remove('grid-cols-3');
      } else {
          skillsSection.classList.add('grid-cols-3');
          skillsSection.classList.remove('grid-cols-1');
          portfolioSection.classList.add('grid-cols-3');
          portfolioSection.classList.remove('grid-cols-1');
      }
  }
  
  // Initial layout adjustment
  adjustLayout();
  
  document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // At 640px or higher, display 2 slides
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // At 768px or higher, display 3 slides
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });
});



// document.getElementById('submitButton').addEventListener('click', function() {
//     document.getElementById('contactForm').submit();
//   })