
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