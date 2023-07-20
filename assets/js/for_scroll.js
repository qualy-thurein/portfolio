$(document).ready(function () {
    // Check if the user has scrolled to the top
function isScrolledToTop() {
    return window.pageYOffset === 0;
  }
  
  // Disable Animate Scroll Reveal when scrolled to top
  function disableScrollRevealOnTop() {
    var scrollRevealElements = document.querySelectorAll('.slide-up'); // Replace '.slide-up' with the appropriate selector for your elements
  
    if (isScrolledToTop()) {
      scrollRevealElements.forEach(function(element) {
        element.classList.remove('slide-up');
      });
    } else {
      scrollRevealElements.forEach(function(element) {
        element.classList.add('slide-up');
      });
    }
  }
  
  // Listen for scroll events
  window.addEventListener('scroll', disableScrollRevealOnTop);

});