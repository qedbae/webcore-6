const callButtonHeader = document.querySelector('.page-header__button--phone');
const callButtonSide = document.querySelector('.side-panel__button--phone');
const modalCallBack = document.querySelector('.modal-callback');
const closeButton = document.querySelector('.modal-callback__button--close');
const overlay = document.querySelector('.overlay-modal');

function openMenu() {
  modalCallBack.classList.add('modal-callback--open');

  if (window.innerWidth >= 320) {
    overlay.classList.add('overlay-modal--active');
  }
}

function closeMenu() {
  modalCallBack.classList.remove('modal-callback--open');
  overlay.classList.remove('overlay-modal--active')
}

callButtonHeader.addEventListener('click', openMenu);
callButtonSide.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);