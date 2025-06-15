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
  });

// Contact Form Handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const submitButton = this.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  
  // Disable button and show loading state
  submitButton.disabled = true;
  submitButton.textContent = 'Sending...';
  
  // Get form data
  const formData = new FormData(this);
  
  // Send form data
  fetch(this.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      // Show success message
      submitButton.textContent = 'Message Sent!';
      submitButton.style.backgroundColor = '#4CAF50';
      
      // Reset form
      this.reset();
      
      // Reset button after 3 seconds
      setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.style.backgroundColor = '';
        submitButton.disabled = false;
      }, 3000);
    } else {
      throw new Error('Network response was not ok');
    }
  })
  .catch(error => {
    // Show error message
    submitButton.textContent = 'Error! Try Again';
    submitButton.style.backgroundColor = '#f44336';
    
    // Reset button after 3 seconds
    setTimeout(() => {
      submitButton.textContent = originalText;
      submitButton.style.backgroundColor = '';
      submitButton.disabled = false;
    }, 3000);
    
    console.error('Error:', error);
  });
});