// Function to validate email format
function isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to handle form submission
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
        feedbackDiv.style.color = 'red';
    } else if (!isValidEmail(email)) {
        feedbackDiv.textContent = 'Please enter a valid email address!';
        feedbackDiv.style.color = 'red';
    } else {
        feedbackDiv.textContent = 'Sending your message...';
        feedbackDiv.style.color = 'blue';

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
            feedbackDiv.style.color = 'green';
            (document.getElementById('contactForm') as HTMLFormElement).reset();
        })
        .catch(error => {
            feedbackDiv.textContent = error.message;
            feedbackDiv.style.color = 'red';
        });
    }
}

// Add event listener for form submission
document.getElementById('contactForm')?.addEventListener('submit', handleFormSubmit);


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
