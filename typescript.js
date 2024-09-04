var _a, _b, _c, _d;
// Function to validate email format
function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
// Menampilkan pesan popup dengan Tailwind CSS
function showPopup(message, color) {
    var popup = document.getElementById('popupMessage');
    var popupText = document.getElementById('popupText');
    if (popupText) {
        popupText.textContent = message;
        popupText.className = "text-".concat(color, "-600 font-bold"); // Template literal untuk kelas Tailwind
    }
    if (popup) {
        popup.classList.remove('hidden');
        setTimeout(function () {
            popup.classList.add('hidden');
        }, 3000);
    }
}
// Event handler for form submission
function handleFormSubmit(event) {
    event.preventDefault();
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
    var feedbackDiv = document.getElementById('formFeedback');
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var message = messageInput.value.trim();
    if (name === '' || email === '' || message === '') {
        feedbackDiv.textContent = 'All fields are required!';
        feedbackDiv.className = 'text-red-600 font-bold';
    }
    else if (!isValidEmail(email)) {
        feedbackDiv.textContent = 'Please enter a valid email address!';
        feedbackDiv.className = 'text-red-600 font-bold';
    }
    else {
        feedbackDiv.textContent = 'Sending your message...';
        feedbackDiv.className = 'text-blue-600 font-bold';
        // Simulate sending data to the server
        fetch('https://example.com/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: name, email: email, message: message }),
        })
            .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error('Failed to send message');
            }
        })
            .then(function () {
            var _a;
            feedbackDiv.textContent = 'Message sent successfully!';
            feedbackDiv.className = 'text-green-600 font-bold';
            (_a = document.getElementById('contactForm')) === null || _a === void 0 ? void 0 : _a.reset();
            // Display the pop-up message
            showPopup('Your message has been sent successfully!', 'green');
        })
            .catch(function (error) {
            feedbackDiv.textContent = error.message;
            feedbackDiv.className = 'text-red-600 font-bold';
            // Display the pop-up message for errors
            showPopup(error.message, 'red');
        });
    }
}
// Add event listener for form submission
(_a = document.getElementById('contactForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', handleFormSubmit);
// Event handler to close the popup when clicking the close button
(_b = document.getElementById('closePopup')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var _a;
    (_a = document.getElementById('popupMessage')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
});
// Fade-in effect on scroll
window.addEventListener('scroll', function () {
    var elements = document.querySelectorAll('.fade-in');
    var scrollTop = window.scrollY;
    elements.forEach(function (element) {
        if (element.getBoundingClientRect().top + scrollTop < scrollTop + window.innerHeight) {
            element.classList.add('show');
        }
    });
});
// Carousel functionality
var slides = document.querySelectorAll('.carousel-slide');
var currentSlide = 0;
(_c = document.getElementById('prevBtn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    slides[currentSlide].classList.add('active');
});
(_d = document.getElementById('nextBtn')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    slides[currentSlide].classList.add('active');
});
var feedbackDiv = document.getElementById('formFeedback');
if (feedbackDiv) {
    // Rest of the code
}
// // TypeScript for handling form submission and validation
// const contactForm = document.getElementById('contactForm') as HTMLFormElement | null;
// const formFeedback = document.getElementById('formFeedback') as HTMLDivElement | null;
// function validateEmail(email: string): boolean {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
// }
// function validateForm(name: string, email: string, message: string): boolean {
//     if (name.trim() === '') {
//         formFeedback!.textContent = 'Name is required!';
//         formFeedback!.style.color = 'red';
//         return false;
//     }
//     if (email.trim() === '' || !validateEmail(email)) {
//         formFeedback!.textContent = 'Please enter a valid email!';
//         formFeedback!.style.color = 'red';
//         return false;
//     }
//     if (message.trim() === '') {
//         formFeedback!.textContent = 'Message is required!';
//         formFeedback!.style.color = 'red';
//         return false;
//     }
//     return true;
// }
// contactForm?.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const name = (document.getElementById('name') as HTMLInputElement).value;
//     const email = (document.getElementById('email') as HTMLInputElement).value;
//     const message = (document.getElementById('message') as HTMLTextAreaElement).value;
//     if (validateForm(name, email, message)) {
//         // Form is valid, proceed with sending data
//         formFeedback!.textContent = 'Sending your message...';
//         formFeedback!.style.color = 'blue';
//         // Here you can use Fetch API, XMLHttpRequest, or any method to send form data
//         // For now, we'll just simulate a successful submission
//         setTimeout(() => {
//             formFeedback!.textContent = 'Message sent successfully!';
//             formFeedback!.style.color = 'green';
//             contactForm.reset();
//         }, 2000);
//     }
// });
