const roles = ["Photographer", "Coder", "Designer", "Developer","Freelancer"];
let i = 0;
let j = 0;
let currentRole = '';
let isDeleting = false;

function typeEffect() {
  const roleElement = document.getElementById("role");
  const cursorElement = document.getElementById("cursor");

  if (isDeleting) {
    currentRole = roles[i].substring(0, j--);
  } else {
    currentRole = roles[i].substring(0, j++);
  }

  roleElement.textContent = currentRole;

  if (!isDeleting && j === roles[i].length) {
    setTimeout(() => {
      isDeleting = true;
    }, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
  }

  // Blink the cursor when typing
  cursorElement.style.visibility = (j === roles[i].length && !isDeleting) ? 'hidden' : 'visible';
}

window.onload = function() {
  setInterval(typeEffect, 150); // Type every 150ms
};


window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) { // When scrolled down 50px
      document.body.classList.add("scrolled");
  } else {
      document.body.classList.remove("scrolled");
  }
});


window.addEventListener('scroll', function () {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) { // 50px scroll ke baad
      nav.classList.add('scrolled');
  } else {
      nav.classList.remove('scrolled');
  }
});

// Active button ka logic
const buttons = document.querySelectorAll('nav button');
buttons.forEach(button => {
  button.addEventListener('click', function () {
      buttons.forEach(btn => btn.classList.remove('active')); // Remove active from all
      this.classList.add('active'); // Add active to clicked button
  });
});

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}
