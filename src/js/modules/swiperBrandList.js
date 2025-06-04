import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

const breakpoint = window.matchMedia('(min-width: 768px)')
let brandSwiper

function enableBrandSwiper() {
  brandSwiper = new Swiper('.brand-list__brand-swiper', {
    modules: [Pagination],
    spaceBetween: 16,
    slidesPerView: 1.3,
    freeMode: true,
    pagination: {
      el: '.brand-list__swiper-pagination',
      clickable: true
    }
  })
}

function breakpointChecker() {
  if (breakpoint.matches) {
    if (brandSwiper) {
      brandSwiper.destroy(true, true)
      brandSwiper = undefined
    }
  } else {
    if (!brandSwiper) {
      enableBrandSwiper()
    }
  }
}

breakpoint.addEventListener('change', breakpointChecker)
breakpointChecker()

const slides = document.querySelectorAll('.brand-list__swiper-slide')
const btn = document.querySelector('.brand-list__show-more')

let isOpen = false

function showMore() {
  let screenWidth = window.innerWidth
  let openCount = 0

  if (screenWidth < 768) {
    btn.style.display = 'none'
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('hidden')
    }
    return
  }

  btn.style.display = 'block'

  if (screenWidth >= 1366) {
    openCount = 8
  } else if (screenWidth >= 768) {
    openCount = 6
  } else {
    return
  }

  if (isOpen) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('hidden')
    }
    btn.textContent = 'Скрыть'
  } else {
    for (let i = 0; i < slides.length; i++) {
      if (i < openCount) {
        slides[i].classList.remove('hidden')
      } else {
        slides[i].classList.add('hidden')
      }
    }
    btn.textContent = 'Показать все'
  }
}

btn.addEventListener('click', function () {
  isOpen = !isOpen

  if (isOpen) {
    btn.classList.add('brand-list__show-more--opened')
  } else {
    btn.classList.remove('brand-list__show-more--opened')
  }

  showMore()
})

showMore()
