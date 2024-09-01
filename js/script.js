
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

// function isValidEmail(email) {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailPattern.test(email);
// }

// function showPopup(message, color) {
//     const popup = document.getElementById('popupMessage');
//     const popupText = document.getElementById('popupText');
    
//     popupText.textContent = message;
//     popupText.className = `text-${color}-600 font-bold`;
//     popup.classList.remove('hidden');

//     // Close the pop-up after 3 seconds
//     setTimeout(() => {
//         popup.classList.add('hidden');
//     }, 3000);
// }

// document.getElementById('closePopup').addEventListener('click', () => {
//     document.getElementById('popupMessage').classList.add('hidden');
// });

// function handleFormSubmit(event) {
//     event.preventDefault();

//     const nameInput = document.getElementById('name');
//     const emailInput = document.getElementById('email');
//     const messageInput = document.getElementById('message');
//     const feedbackDiv = document.getElementById('formFeedback');

//     const name = nameInput.value.trim();
//     const email = emailInput.value.trim();
//     const message = messageInput.value.trim();

//     if (name === '' || email === '' || message === '') {
//         feedbackDiv.textContent = 'All fields are required!';
//         feedbackDiv.className = 'text-red-600 font-bold';
//     } else if (!isValidEmail(email)) {
//         feedbackDiv.textContent = 'Please enter a valid email address!';
//         feedbackDiv.className = 'text-red-600 font-bold';
//     } else {
//         feedbackDiv.textContent = 'Sending your message...';
//         feedbackDiv.className = 'text-blue-600 font-bold';

//         // Simulate sending data to server
//         fetch('https://example.com/api/contact', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 name: name,
//                 email: email,
//                 message: message,
//             }),
//         })
//         .then(response => {
//             if (response.ok) {
//                 return response.json();
//             } else {
//                 throw new Error('Failed to send message');
//             }
//         })
//         .then(data => {
//             feedbackDiv.textContent = 'Message sent successfully!';
//             feedbackDiv.className = 'text-green-600 font-bold';
//             document.getElementById('contactForm').reset();

//             // Display the pop-up message
//             showPopup('Your message has been sent successfully!', 'green');
//         })
//         .catch(error => {
//             feedbackDiv.textContent = error.message;
//             feedbackDiv.className = 'text-red-600 font-bold';

//             // Display the pop-up message for errors
//             showPopup(error.message, 'red');
//         });
//     }
// }

// Add event listener for form submission
// document.getElementById('contactForm').addEventListener('submit', handleFormSubmit);
