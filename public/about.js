// PureCounter for Stats Section
document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.purecounter');
    counters.forEach(counter => {
      let start = 0;
      const end = parseInt(counter.getAttribute('data-purecounter-end'));
      const duration = counter.getAttribute('data-purecounter-duration') * 1000;
      const increment = end / duration * 50;
      
      const counterInterval = setInterval(() => {
        start += increment;
        if (start >= end) {
          counter.textContent = end;
          clearInterval(counterInterval);
        } else {
          counter.textContent = Math.floor(start);
        }
      }, 50);
    });
  });
  
  // AOS (Animate On Scroll) initialization
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true
  });
  

  
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
