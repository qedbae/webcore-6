const chatButtonHeader = document.querySelector('.page-header__button--chat');
const chatButtonSide = document.querySelector('.side-panel__button--chat');
const modalFeedBack = document.querySelector('.modal-feedback');
const closeButton = document.querySelector('.modal-feedback__button--close');
const overlay = document.querySelector('.overlay-modal');

function openMenu() {
  modalFeedBack.classList.add('modal-feedback--open');

  if (window.innerWidth >= 320) {
    overlay.classList.add('overlay-modal--active');
  }
}

function closeMenu() {
  modalFeedBack.classList.remove('modal-feedback--open');
  overlay.classList.remove('overlay-modal--active')
}

chatButtonHeader.addEventListener('click', openMenu);
chatButtonSide.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);