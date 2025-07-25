$(document).ready(function () {
    $(window).scroll(function () {
      //  sticky navbar on scroll script  //
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
  
      //  scroll-up button show/hide script  //
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
  
    //  slide-up script  //
  
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
      //  removing smooth scroll on slide-up button click  //
      $("html").css("scrollBehavior", "auto");
    });
  
    $(".navbar .menu li a").click(function () {
      //  Smooth scroll on Menu Items click  //
  
      $("html").css("scrollBehavior", "smooth");
    });
  
    //  Toggle Navbar  //
  
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
  
    //  Typing Text Animation  //
  
    var typed = new Typed(".typing", {
      strings: [
        "Fullstack Developer",
        "Software Developer",
        "Python Developer",
        "ML developer",
        "Singer"
      ],
      typeSpeed: 100,
      backSpeed: 90,
      loop: true
    });
  
    var typed = new Typed(".typing-2", {
      strings: [
        "Fullstack Developer",
        "Software Developer",
        "Python Developer",
        "ML developer",
        "Singer"
      ],
      typeSpeed: 100,
      backSpeed: 90,
      loop: true
    });
  
    //  Owl Carousel  //
  
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false
        }
      }
    });

    // Scroll-reveal animation for sections and cards
    // Adds 'visible' class when elements enter the viewport

    function revealOnScroll() {
      const revealElements = [
        ...document.querySelectorAll('section'),
        ...document.querySelectorAll('.project-card'),
        ...document.querySelectorAll('.testimonial-card')
      ];

      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              obs.unobserve(entry.target);
            }
          });
        }, { threshold: 0.15 });
        revealElements.forEach(el => observer.observe(el));
      } else {
        // Fallback: show all if IntersectionObserver not supported
        revealElements.forEach(el => el.classList.add('visible'));
      }
    }

    // Fade-in animation for sections and project cards
    function fadeInOnScroll() {
      const fadeEls = [
        ...document.querySelectorAll('.main-content > section'),
        ...document.querySelectorAll('.project-card-pro')
      ];
      fadeEls.forEach(el => el.classList.add('fade-in'));
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              obs.unobserve(entry.target);
            }
          });
        }, { threshold: 0.15 });
        fadeEls.forEach(el => observer.observe(el));
      } else {
        fadeEls.forEach(el => el.classList.add('visible'));
      }
    }

    document.addEventListener('DOMContentLoaded', () => {
      revealOnScroll();
      fadeInOnScroll();

      // Smooth scroll for sidebar nav links
      document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
          const href = this.getAttribute('href');
          if (href && href.startsWith('#')) {
            const target = document.querySelector(href);
            if (target) {
              e.preventDefault();
              window.scrollTo({
                top: target.offsetTop - 24,
                behavior: 'smooth'
              });
            }
          }
        });
      });

      // Floating Contact Button (FAB) scrolls to contact
      const fab = document.querySelector('.fab-contact');
      if (fab) {
        fab.addEventListener('click', function() {
          const contact = document.querySelector('#contact');
          if (contact) {
            window.scrollTo({
              top: contact.offsetTop - 24,
              behavior: 'smooth'
            });
          }
        });
      }
    });
  });