// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGUBgwScN84_JnyCbMGiJiRVgg_tJdV2Y",
  authDomain: "portfolio-85e65.firebaseapp.com",
  projectId: "portfolio-85e65",
  storageBucket: "portfolio-85e65.appspot.com",
  messagingSenderId: "745526605121",
  appId: "1:745526605121:web:7992cdf70e0ee961255dc0",
  measurementId: "G-EBDZ515LRH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);

// Function to request permission and get FCM token
function requestFCMPermission() {
    return Notification.requestPermission()
        .then((permission) => {
            if (permission === 'granted') {
                return getToken(messaging, { vapidKey: 'YOUR_VAPID_KEY' });
            } else {
                throw new Error('Notification permission denied');
            }
        })
        .then((currentToken) => {
            if (currentToken) {
                console.log('FCM Token:', currentToken);
                return currentToken;
            } else {
                throw new Error('No FCM registration token available');
            }
        })
        .catch((err) => {
            console.error('An error occurred while retrieving token: ', err);
            return null;
        });
}

// Interface for form data
interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

// Function to validate email format
function isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to show a popup message
function showPopup(message: string, color: string) {
    const popup = document.getElementById('popupMessage');
    const popupText = document.getElementById('popupText');
    if (popupText) {
        popupText.textContent = message;
        popupText.className = `text-${color}-600 font-bold`;
    }
    if (popup) {
        popup.classList.remove('hidden');
        setTimeout(() => {
            popup.classList.add('hidden');
        }, 3000);
    }
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

        // Get FCM token and send message
        requestFCMPermission()
            .then((token) => {
                if (token) {
                    sendMessageToDeveloper({ name, email, message, token });
                } else {
                    showPopup('Failed to send message. No token available.', 'red');
                }
            })
            .catch((err) => {
                showPopup('Failed to send message. Error: ' + err.message, 'red');
            });
    }
}

// Function to send message using Firebase Cloud Messaging
function sendMessageToDeveloper(formData: ContactFormData & { token: string }) {
    console.log('Sending message to developer with FCM token:', formData);
    // Simulate sending data to a server or use Firebase Cloud Functions here
    showPopup('Message sent successfully!', 'green');
}

// Receive messages from Firebase Cloud Messaging
onMessage(messaging, (payload) => {
    console.log('Message received: ', payload);
    showPopup(`Message from developer: ${payload.notification?.body}`, 'blue');
});

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