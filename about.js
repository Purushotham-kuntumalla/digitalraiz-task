// DOM Elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navbar = document.querySelector('.navbar');

// Toggle the nav menu on hamburger click
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

