// Function to validate email format
function isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to show popup message
function showPopup(message: string, color: string): void {
    const popup = document.getElementById('popupMessage') as HTMLDivElement;
    const popupText = document.getElementById('popupText') as HTMLParagraphElement;

    popupText.textContent = message;
    popupText.className = `text-${color}-600 font-bold`;
    popup.classList.remove('hidden');

    // Close the pop-up after 3 seconds
    setTimeout(() => {
        popup.classList.add('hidden');
    }, 3000);
}

// Event handler for form submission
function handleFormSubmit(event: Event): void {
    event.preventDefault();

    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const messageInput = document.getElementById('message') as HTMLTextAreaElement;
    const feedbackDiv = document.getElementById('formFeedback') as HTMLDivElement;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name === '' || email === '' || message === '') {
        feedbackDiv.textContent = 'All fields are required!';
        feedbackDiv.className = 'text-red-600 font-bold';
    } else if (!isValidEmail(email)) {
        feedbackDiv.textContent = 'Please enter a valid email address!';
        feedbackDiv.className = 'text-red-600 font-bold';
    } else {
        feedbackDiv.textContent = 'Sending your message...';
        feedbackDiv.className = 'text-blue-600 font-bold';

        // Simulate sending data to server
        fetch('https://example.com/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message,
            }),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to send message');
            }
        })
        .then(data => {
            feedbackDiv.textContent = 'Message sent successfully!';
            feedbackDiv.className = 'text-green-600 font-bold';
            (document.getElementById('contactForm') as HTMLFormElement).reset();

            // Display the pop-up message
            showPopup('Your message has been sent successfully!', 'green');
        })
        .catch(error => {
            feedbackDiv.textContent = error.message;
            feedbackDiv.className = 'text-red-600 font-bold';

            // Display the pop-up message for errors
            showPopup(error.message, 'red');
        });
    }
}

// Add event listener for form submission
document.getElementById('contactForm')?.addEventListener('submit', handleFormSubmit);

// Event handler to close the popup when clicking the close button
document.getElementById('closePopup')?.addEventListener('click', () => {
    document.getElementById('popupMessage')?.classList.add('hidden');
});

// Fade-in effect on scroll
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in');
    const scrollTop = window.scrollY;

    elements.forEach(element => {
        if (element.getBoundingClientRect().top + scrollTop < scrollTop + window.innerHeight) {
            element.classList.add('show');
        }
    });
});

// Carousel functionality
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

document.getElementById('prevBtn')?.addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    slides[currentSlide].classList.add('active');
});

document.getElementById('nextBtn')?.addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    slides[currentSlide].classList.add('active');
});

const feedbackDiv = document.getElementById('formFeedback') as HTMLDivElement | null;
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
