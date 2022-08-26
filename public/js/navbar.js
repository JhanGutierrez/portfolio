const openNavbar = document.querySelector('#open-navbar');
const closeNavbar = document.querySelector('#close-navbar');
const navbar = document.querySelector('nav');

/**
 * Displays the navbar
 */
openNavbar.addEventListener('click', () => {
  navbar
    .querySelector('ul')
    .parentElement.classList.remove('translate-x-[-100%]');
  navbar.querySelector('ul').parentElement.classList.remove('md:translate-x-0');
  navbar.querySelector('ul').parentElement.classList.add('translate-x-0');
  document.querySelector('body').style.overflow = 'hidden';
});

/**
 * Hide the navbar
 */
closeNavbar.addEventListener('click', () => {
  navbar.querySelector('ul').parentElement.classList.add('translate-x-[-100%]');
  navbar.querySelector('ul').parentElement.classList.add('md:translate-x-0');
  navbar.querySelector('ul').parentElement.classList.remove('translate-x-0');
  document.querySelector('body').style.overflow = 'auto';
});
