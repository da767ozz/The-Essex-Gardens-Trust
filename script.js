// script.js

// Responsive Navigation Menu
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu_visible');
});

// Contact Form Validation
const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', function(event) {
    const email = document.querySelector('#email').value;
    const name = document.querySelector('#name').value;
    if (!name || !email || !/\S+@\S+\.\S+/.test(email)) {
        event.preventDefault();
        alert('Please fill out all fields and enter a valid email.');
    }
});

// Interactive Elements Example
const interactiveButtons = document.querySelectorAll('.interactive-button');

interactiveButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });
});

