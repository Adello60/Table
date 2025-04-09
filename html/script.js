// const themeToggle = document.getElementById('theme-toggle');
// const body = document.body;

// themeToggle.addEventListener('click', () => {
//   body.classList.toggle('dark-mode');
// });
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

themeSwitch.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
});
// const themedark = document.getElementById('theme-dark');
// const themelight = document.getElementById('theme-light');
// const modeText = document.getElementById('mode-text');

// themedark.addEventListener('click', () => {
//   modeText.textContent = 'Dark theme';
//   modeText.style.display = 'block'; 
// });

// themelight.addEventListener('click', () => {
//   modeText.textContent = 'Light theme';
//   modeText.style.display = 'block'; 
// });

const nav = document.getElementById('nav');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      nav.classList.add('scrolled'); 
    } else if (currentScrollY < lastScrollY) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScrollY = currentScrollY;
  });

  


