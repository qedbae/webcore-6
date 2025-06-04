import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

const breakpoint = window.matchMedia("(min-width: 768px)");
let priceSwiper;

function enablePriceSwiper() {
  priceSwiper = new Swiper('.price-list__price-swiper', {
    modules: [Pagination],
    spaceBetween: 16,
    slidesPerView: 1.3,
    freeMode: true,
    pagination: {
      el: ".price-list__swiper-pagination",
      clickable: true,
    }
  })
};

function breakpointChecker() {
  if (breakpoint.matches) {
    if (priceSwiper) {
      priceSwiper.destroy(true, true);
      priceSwiper = undefined;
    } 
  } else {
    if (!priceSwiper) {
      enablePriceSwiper();
    }
  }
}; 

breakpoint.addEventListener('change', breakpointChecker);
breakpointChecker();