"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
// Import the functions you need from the SDKs you need
var app_1 = require("firebase/app");
var messaging_1 = require("firebase/messaging");
var analytics_1 = require("firebase/analytics");
// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDGUBgwScN84_JnyCbMGiJiRVgg_tJdV2Y",
    authDomain: "portfolio-85e65.firebaseapp.com",
    projectId: "portfolio-85e65",
    storageBucket: "portfolio-85e65.appspot.com",
    messagingSenderId: "745526605121",
    appId: "1:745526605121:web:7992cdf70e0ee961255dc0",
    measurementId: "G-EBDZ515LRH"
};
// Initialize Firebase
var app = (0, app_1.initializeApp)(firebaseConfig);
var analytics = (0, analytics_1.getAnalytics)(app);
var messaging = (0, messaging_1.getMessaging)(app);
// Function to request permission and get FCM token
function requestFCMPermission() {
    return Notification.requestPermission()
        .then(function (permission) {
        if (permission === 'granted') {
            return (0, messaging_1.getToken)(messaging, { vapidKey: 'YOUR_VAPID_KEY' });
        }
        else {
            throw new Error('Notification permission denied');
        }
    })
        .then(function (currentToken) {
        if (currentToken) {
            console.log('FCM Token:', currentToken);
            return currentToken;
        }
        else {
            throw new Error('No FCM registration token available');
        }
    })
        .catch(function (err) {
        console.error('An error occurred while retrieving token: ', err);
        return null;
    });
}
// Function to validate email format
function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
// Function to show a popup message
function showPopup(message, color) {
    var popup = document.getElementById('popupMessage');
    var popupText = document.getElementById('popupText');
    if (popupText) {
        popupText.textContent = message;
        popupText.className = "text-".concat(color, "-600 font-bold");
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
        // Get FCM token and send message
        requestFCMPermission()
            .then(function (token) {
            if (token) {
                sendMessageToDeveloper({ name: name, email: email, message: message, token: token });
            }
            else {
                showPopup('Failed to send message. No token available.', 'red');
            }
        })
            .catch(function (err) {
            showPopup('Failed to send message. Error: ' + err.message, 'red');
        });
    }
}
// Function to send message using Firebase Cloud Messaging
function sendMessageToDeveloper(formData) {
    console.log('Sending message to developer with FCM token:', formData);
    // Simulate sending data to a server or use Firebase Cloud Functions here
    showPopup('Message sent successfully!', 'green');
}
// Receive messages from Firebase Cloud Messaging
(0, messaging_1.onMessage)(messaging, function (payload) {
    var _a;
    console.log('Message received: ', payload);
    showPopup("Message from developer: ".concat((_a = payload.notification) === null || _a === void 0 ? void 0 : _a.body), 'blue');
});
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
