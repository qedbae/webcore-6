const aboutText = document.querySelector('.main-info__about-content');
const btn = document.querySelector('.main-info__read-more');
const paragraphs = aboutText.querySelectorAll('p');
const span = aboutText.querySelector('.main-info__more-text');

let isCollapsed = true;

function collapseText() {
  const screenWidth = window.innerWidth;

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].classList.remove('hidden');
}

if (screenWidth < 768) {
  paragraphs[1].classList.add('hidden');
  paragraphs[2].classList.add('hidden');
  } else if (screenWidth < 1366) {
    paragraphs[2].classList.add('hidden');
    span.classList.add('hidden');
  } else {
    paragraphs[2].classList.add('hidden');
  }
}

function expandText() {
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].classList.remove('hidden');
  }
  span.classList.remove('hidden')
}

collapseText();

btn.addEventListener('click', function() {
  if (isCollapsed) {
    expandText();
    btn.textContent = 'Свернуть';
    btn.classList.add('main-info__read-more--opened');
    isCollapsed = false;
  } else {
    collapseText();
    btn.textContent = 'Читать далее';
    btn.classList.remove('main-info__read-more--opened');
    isCollapsed = true;
  }
});