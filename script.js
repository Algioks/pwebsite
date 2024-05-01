// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Example: Change background color when the page loads
    document.body.style.backgroundColor = 'lightgray';
});
// Add more JavaScript functionality as needed

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');

menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
});

const form = document.querySelector('form');
const nameInput = document.querySelector('input[type="text"]');
const emailInput = document.querySelector('input[type="email"]');

form.addEventListener('submit', e => {
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
        e.preventDefault();
        alert('Please fill in all fields.');
    }
});
