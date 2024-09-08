// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getMessaging, getToken, onMessage } from "firebase/messaging";
// import { getAnalytics } from "firebase/analytics";

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDGUBgwScN84_JnyCbMGiJiRVgg_tJdV2Y",
//   authDomain: "portfolio-85e65.firebaseapp.com",
//   projectId: "portfolio-85e65",
//   storageBucket: "portfolio-85e65.appspot.com",
//   messagingSenderId: "745526605121",
//   appId: "1:745526605121:web:7992cdf70e0ee961255dc0",
//   measurementId: "G-EBDZ515LRH"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const messaging = getMessaging(app);

// // Function to request permission and get FCM token
// function requestFCMPermission() {
//     return Notification.requestPermission()
//         .then((permission) => {
//             if (permission === 'granted') {
//                 return getToken(messaging, { vapidKey: 'YOUR_VAPID_KEY' });
//             } else {
//                 throw new Error('Notification permission denied');
//             }
//         })
//         .then((currentToken) => {
//             if (currentToken) {
//                 console.log('FCM Token:', currentToken);
//                 return currentToken;
//             } else {
//                 throw new Error('No FCM registration token available');
//             }
//         })
//         .catch((err) => {
//             console.error('An error occurred while retrieving token: ', err);
//             return null;
//         });
// }

// // Interface for form data
// interface ContactFormData {
//     name: string;
//     email: string;
//     message: string;
// }

// // Function to validate email format
// function isValidEmail(email: string): boolean {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailPattern.test(email);
// }

// // Function to show a popup message
// // function showPopup(message: string, color: string) {
// //     const popup = document.getElementById('popupMessage');
// //     const popupText = document.getElementById('popupText');
// //     if (popupText) {
// //         popupText.textContent = message;
// //         popupText.className = `text-${color}-600 font-bold`;
// //     }
// //     if (popup) {
// //         popup.classList.remove('hidden');
// //         setTimeout(() => {
// //             popup.classList.add('hidden');
// //         }, 3000);
// //     }
// // }

// // Function to show a popup message
// function showPopup(message: string, color: string) {
//     const popup = document.getElementById('popupMessage');
//     const popupText = document.getElementById('popupText');
    
//     console.log('showPopup called'); // Debugging: pastikan fungsi dipanggil
//     console.log('Popup element:', popup); // Debugging: pastikan elemen ditemukan
//     console.log('Popup text element:', popupText); // Debugging: pastikan elemen teks ditemukan

//     if (popupText) {
//         popupText.textContent = message;
//         popupText.className = `text-${color}-600 font-bold`;
//     }

//     if (popup) {
//         popup.classList.remove('hidden'); // Pastikan elemen pop-up tidak disembunyikan
//         console.log('Popup displayed'); // Debugging: konfirmasi bahwa pop-up ditampilkan

//         setTimeout(() => {
//             popup.classList.add('hidden'); // Sembunyikan pop-up setelah beberapa detik
//             console.log('Popup hidden'); // Debugging: konfirmasi bahwa pop-up disembunyikan
//         }, 3000);
//     }
// }


// // Event handler for form submission
// // function handleFormSubmit(event: Event): void {
// //     event.preventDefault();

// //     const nameInput = document.getElementById('name') as HTMLInputElement;
// //     const emailInput = document.getElementById('email') as HTMLInputElement;
// //     const messageInput = document.getElementById('message') as HTMLTextAreaElement;
// //     const feedbackDiv = document.getElementById('formFeedback') as HTMLDivElement;

// //     const name = nameInput.value.trim();
// //     const email = emailInput.value.trim();
// //     const message = messageInput.value.trim();

// //     if (name === '' || email === '' || message === '') {
// //         feedbackDiv.textContent = 'All fields are required!';
// //         feedbackDiv.className = 'text-red-600 font-bold';
// //         showPopup('All fields are required!', 'red'); // Tampilkan pop-up jika ada field yang kosong
// //     } else if (!isValidEmail(email)) {
// //         feedbackDiv.textContent = 'Please enter a valid email address!';
// //         feedbackDiv.className = 'text-red-600 font-bold';
// //         showPopup('Please enter a valid email address!', 'red'); // Tampilkan pop-up jika email tidak valid
// //     } else {
// //         feedbackDiv.textContent = 'Sending your message...';
// //         feedbackDiv.className = 'text-blue-600 font-bold';

// //         // Get FCM token and send message
// //         requestFCMPermission()
// //             .then((token) => {
// //                 if (token) {
// //                     sendMessageToDeveloper({ name, email, message, token });
// //                 } else {
// //                     showPopup('Failed to send message. No token available.', 'red'); // Tampilkan pop-up jika token tidak tersedia
// //                 }
// //             })
// //             .catch((err) => {
// //                 showPopup('Failed to send message. Error: ' + err.message, 'red'); // Tampilkan pop-up jika ada error saat pengiriman
// //             });
// //     }
// // }

// function handleFormSubmit(event: Event): void {
//     event.preventDefault();

//     const nameInput = document.getElementById('name') as HTMLInputElement;
//     const emailInput = document.getElementById('email') as HTMLInputElement;
//     const messageInput = document.getElementById('message') as HTMLTextAreaElement;
//     const feedbackDiv = document.getElementById('formFeedback') as HTMLDivElement;

//     const name = nameInput.value.trim();
//     const email = emailInput.value.trim();
//     const message = messageInput.value.trim();

//     if (name === '' || email === '' || message === '') {
//         feedbackDiv.textContent = 'All fields are required!';
//         feedbackDiv.className = 'text-red-600 font-bold';
//         console.log('Form validation failed: empty fields'); // Debugging

//         showPopup('All fields are required!', 'red'); // Tampilkan pop-up jika ada field yang kosong
//     } else if (!isValidEmail(email)) {
//         feedbackDiv.textContent = 'Please enter a valid email address!';
//         feedbackDiv.className = 'text-red-600 font-bold';
//         console.log('Form validation failed: invalid email'); // Debugging

//         showPopup('Please enter a valid email address!', 'red'); // Tampilkan pop-up jika email tidak valid
//     } else {
//         feedbackDiv.textContent = 'Sending your message...';
//         feedbackDiv.className = 'text-blue-600 font-bold';
//         console.log('Form validation succeeded'); // Debugging

//         // Get FCM token and send message
//         requestFCMPermission()
//             .then((token) => {
//                 if (token) {
//                     sendMessageToDeveloper({ name, email, message, token });
//                 } else {
//                     showPopup('Failed to send message. No token available.', 'red'); // Tampilkan pop-up jika token tidak tersedia
//                 }
//             })
//             .catch((err) => {
//                 showPopup('Failed to send message. Error: ' + err.message, 'red'); // Tampilkan pop-up jika ada error saat pengiriman
//             });
//     }
// }


// // Function to send message using Firebase Cloud Messaging
// function sendMessageToDeveloper(formData: ContactFormData & { token: string }) {
//     console.log('Sending message to developer with FCM token:', formData);
//     // Simulate sending data to a server or use Firebase Cloud Functions here
//     showPopup('Message sent successfully!', 'green'); // Tampilkan pop-up ketika pesan berhasil dikirim
// }

// // Receive messages from Firebase Cloud Messaging
// onMessage(messaging, (payload) => {
//     console.log('Message received: ', payload);
//     showPopup(`Message from developer: ${payload.notification?.body}`, 'blue');
// });

// // Add event listener for form submission
// document.getElementById('contactForm')?.addEventListener('submit', handleFormSubmit);

// // Event handler to close the popup when clicking the close button
// document.getElementById('closePopup')?.addEventListener('click', () => {
//     document.getElementById('popupMessage')?.classList.add('hidden');
// });


// // Fade-in effect on scroll
// window.addEventListener('scroll', () => {
//     const elements = document.querySelectorAll('.fade-in');
//     const scrollTop = window.scrollY;

//     elements.forEach(element => {
//         if (element.getBoundingClientRect().top + scrollTop < scrollTop + window.innerHeight) {
//             element.classList.add('show');
//         }
//     });
// });

// // Carousel functionality
// const slides = document.querySelectorAll('.carousel-slide');
// let currentSlide = 0;

// document.getElementById('prevBtn')?.addEventListener('click', () => {
//     slides[currentSlide].classList.remove('active');
//     currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
//     slides[currentSlide].classList.add('active');
// });

// document.getElementById('nextBtn')?.addEventListener('click', () => {
//     slides[currentSlide].classList.remove('active');
//     currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
//     slides[currentSlide].classList.add('active');
// });

// Mengambil elemen form dan elemen lainnya dari DOM
// const contactForm = document.getElementById('contactForm') as HTMLFormElement;
// const nameInput = document.getElementById('name') as HTMLInputElement;
// const emailInput = document.getElementById('email') as HTMLInputElement;
// const messageInput = document.getElementById('message') as HTMLTextAreaElement;
// const formFeedback = document.getElementById('formFeedback') as HTMLDivElement;

// // Fungsi untuk memvalidasi email menggunakan regex
// const isValidEmail = (email: string): boolean => {
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailPattern.test(email);
// };

// // Fungsi untuk menampilkan pesan error atau sukses
// const displayFeedback = (message: string, isSuccess: boolean) => {
//   formFeedback.innerText = message;
//   formFeedback.style.color = isSuccess ? 'green' : 'red';
// };

// // Event handling ketika form di-submit
// contactForm.addEventListener('submit', (event: Event) => {
//   event.preventDefault(); // Mencegah form untuk submit secara default

//   // Ambil nilai input dari form
//   const name = nameInput.value.trim();
//   const email = emailInput.value.trim();
//   const message = messageInput.value.trim();

//   // Validasi input
//   if (name === '') {
//     displayFeedback('Name is required!', false);
//     return;
//   }
  
//   if (email === '' || !isValidEmail(email)) {
//     displayFeedback('Please enter a valid email address!', false);
//     return;
//   }

//   if (message === '') {
//     displayFeedback('Message cannot be empty!', false);
//     return;
//   }

//   // Jika validasi berhasil, tampilkan pesan sukses
//   displayFeedback('Message sent successfully!', true);

//   // Reset form setelah submit berhasil
//   contactForm.reset();
// });


// Mengambil elemen form dan elemen lainnya dari DOM
const contactForm = document.getElementById('contactForm') as HTMLFormElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const messageInput = document.getElementById('message') as HTMLTextAreaElement;
const formFeedback = document.getElementById('formFeedback') as HTMLDivElement;
const successPopup = document.getElementById('successPopup') as HTMLDivElement;

// Fungsi untuk memvalidasi email menggunakan regex
const isValidEmail = (email: string): boolean => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

// Fungsi untuk menampilkan pesan error atau sukses di bawah form
const displayFeedback = (message: string, isSuccess: boolean) => {
  formFeedback.innerText = message;
  formFeedback.style.color = isSuccess ? 'green' : 'red';
};

// Fungsi untuk menampilkan pop-up pesan sukses
const showSuccessPopup = () => {
  successPopup.classList.remove('hidden'); // Tampilkan pop-up
  successPopup.classList.add('translate-y-0'); // Munculkan pop-up dengan animasi
  setTimeout(() => {
    successPopup.classList.add('-translate-y-full'); // Sembunyikan pop-up setelah 3 detik
    successPopup.classList.remove('translate-y-0');
  }, 3000);
};

// Event handling ketika form di-submit
contactForm.addEventListener('submit', (event: Event) => {
  event.preventDefault(); // Mencegah form untuk submit secara default

  // Ambil nilai input dari form
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // Validasi input
  if (name === '') {
    displayFeedback('Name is required!', false);
    return;
  }

  if (email === '' || !isValidEmail(email)) {
    displayFeedback('Please enter a valid email address!', false);
    return;
  }

  if (message === '') {
    displayFeedback('Message cannot be empty!', false);
    return;
  }

  // Jika validasi berhasil, tampilkan pesan sukses dan pop-up
  displayFeedback('Message sent successfully!', true);
  showSuccessPopup();

  // Reset form setelah submit berhasil
  contactForm.reset();
});
