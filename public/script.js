// Scroll Event for Navbar
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled'); // Add 'scrolled' class when scrolled more than 50px
    } else {
        nav.classList.remove('scrolled'); // Remove 'scrolled' class when scrolled less than 50px
    }
});

// Active Button Logic
const buttons = document.querySelectorAll('.navbut, .navbut1, .navbut2'); // Target all nav buttons
buttons.forEach(button => {
    button.addEventListener('click', function () {
        // Remove active class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        this.classList.add('active');
    });
});

// Highlight Active Button Based on Current Page
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.navbut, .navbut1, .navbut2'); // All nav buttons
    const currentPage = window.location.pathname.split('/').pop(); // Get the current page name

    buttons.forEach(button => {
        const buttonPage = button.parentElement.getAttribute('href').split('/').pop(); // Get the page from button's href

        // Check if the button's href matches the current page
        if (buttonPage === currentPage) {
            button.classList.add('active'); // Add active class to the button that matches the current page
        }

        // Add event listener to each button for the click event
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            buttons.forEach(b => b.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');
        });
    });
});






function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }
  