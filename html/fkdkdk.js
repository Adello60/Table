// const hoverText = document.querySelector('.hover-text');

// const textArray = hoverText.textContent.split(' '); // Split by words

// hoverText.innerHTML = '';

// textArray.forEach((word) => {
//   const span = document.createElement('span');
//   span.textContent = word;
//   hoverText.appendChild(span);
//   hoverText.appendChild(document.createTextNode(' ')); // Add space after each word
// });
const hoverText = document.querySelector('.hover-text');

const textArray = hoverText.textContent.split(' '); // Split by words

hoverText.innerHTML = '';

textArray.forEach((word) => {
  const wordSpan = document.createElement('span');
  wordSpan.textContent = word;
  hoverText.appendChild(wordSpan);
  
  // Split each word into individual letters
  const letters = word.split('');
  letters.forEach((letter) => {
    const letterSpan = document.createElement('span');
    letterSpan.textContent = letter;
    letterSpan.style.fontSize = '36px'; // Set initial font size
    wordSpan.appendChild(letterSpan);
  });
  
  hoverText.appendChild(document.createTextNode(' ')); // Add space after each word
});

// const navBar = document.getElementById('nav-bar');
// const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF']; // Array of colors
// let colorIndex = 0;

// window.addEventListener('scroll', () => {
//   navBar.style.borderColor = colors[colorIndex]; // Update border color
//   colorIndex = (colorIndex + 1) % colors.length; // Cycle through colors
// });
const navBar = document.getElementById('nav-bar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > lastScrollY) {
    navBar.classList.add('scrolled'); // Add class when scrolling down
  } else if (currentScrollY < lastScrollY) {
    navBar.classList.add('scrolled'); // Add class when scrolling up
  } else {
    navBar.classList.remove('scrolled'); // Remove class when not scrolling
  }
  lastScrollY = currentScrollY;
});

const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) { // Adjust the value as needed
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// const imageContainer = document.querySelector('.image-container');
// const images = document.querySelectorAll('.image-container img');
// let currentImage = 0;
// let scrollTimeout;

// document.addEventListener('scroll', () => {
//   clearTimeout(scrollTimeout);
//   scrollTimeout = setTimeout(() => {
//     animateImages();
//   }, 100); // Adjust the delay as needed
// });

// function animateImages() {
//   currentImage++;
//   if (currentImage >= images.length) {
//     currentImage = 0;
//   }
//   images.forEach((image, index) => {
//     image.style.transform = `translateX(${(index - currentImage) * 100}%)`;
//   });
// }
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight) {
      const elements = section.querySelectorAll('.animate');
      elements.forEach((element, index) => {
        if (index % 2 === 0) {
          element.classList.add('animate-from-left');
        } else {
          element.classList.add('animate-from-right');
        }
      });
    }
  });
});
