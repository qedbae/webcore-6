const burgerButton = document.querySelector('.page-header__button--menu');
const sidePanel = document.querySelector('.side-panel');
const closeButton = document.querySelector('.side-panel__button--close');
const overlay = document.querySelector('.overlay');

function openMenu() {
  sidePanel.classList.add('side-panel--open');

  if (window.innerWidth >= 320) {
    overlay.classList.add('overlay--active');
  }
}

function closeMenu() {
  sidePanel.classList.remove('side-panel--open');
  overlay.classList.remove('overlay--active')
}

burgerButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);