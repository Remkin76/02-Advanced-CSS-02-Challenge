// Select the header, nav, and footer elements
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const footer = document.querySelector('#myFooter');

// Function to handle scroll event
function handleScroll() {
  // Check the scroll position
  if (window.scrollY > 0) {
    // Add the scrolled class to the header and nav elements
    header.classList.add('scrolled');
    nav.classList.add('scrolled');
  } else {
    // Remove the scrolled class from the header and nav elements
    header.classList.remove('scrolled');
    nav.classList.remove('scrolled');
  }

  // Check if the footer is in the viewport
  const footerRect = footer.getBoundingClientRect();
  if (footerRect.top < window.innerHeight) {
    // Add a class to the footer element to show the background color
    footer.classList.add('show-background');
  } else {
    // Remove the class from the footer element
    footer.classList.remove('show-background');
  }
}

// Attach scroll event listener to window
window.addEventListener('scroll', handleScroll);