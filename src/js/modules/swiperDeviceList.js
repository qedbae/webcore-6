import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

const breakpoint = window.matchMedia("(min-width: 768px)");
let deviceSwiper;

function enableDeviceSwiper() {
  deviceSwiper = new Swiper('.device-list__device-swiper', {
    modules: [Pagination],
    spaceBetween: 16,
    slidesPerView: 1.3,
    freeMode: true,
    pagination: {
      el: ".device-list__swiper-pagination",
      clickable: true,
    }
  })
};

function breakpointChecker() {
  if (breakpoint.matches) {
    if (deviceSwiper) {
      deviceSwiper.destroy(true, true);
      deviceSwiper = undefined;
    } 
  } else {
    if (!deviceSwiper) {
      enableDeviceSwiper();
    }
  }
}; 

breakpoint.addEventListener('change', breakpointChecker);
breakpointChecker();

const slides = document.querySelectorAll(".device-list__swiper-slide");
const btn = document.querySelector(".device-list__show-more");

let isOpen = false;

function showMore() {
  let screenWidth = window.innerWidth;
  let openCount = 0;

  if (screenWidth < 768) {
    btn.style.display = "none";
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("hidden");
    }
    return;
  }

  btn.style.display = "block";

  if (screenWidth >= 1366) {
    openCount = 4;
  } else if (screenWidth >= 768) {
    openCount = 3;
  } else {
    return;
  }

  if (isOpen) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("hidden");
    }
    btn.textContent = "Скрыть";
  } else {
    for (let i = 0; i < slides.length; i++) {
      if (i < openCount) {
        slides[i].classList.remove("hidden");
      } else {
        slides[i].classList.add("hidden");
      }
    }
    btn.textContent = "Показать все";
  }
}

btn.addEventListener("click", function () {
  isOpen = !isOpen;

  if (isOpen) {
    btn.classList.add("device-list__show-more--opened");
  } else {
    btn.classList.remove("device-list__show-more--opened");
  }

  showMore();
});

showMore();