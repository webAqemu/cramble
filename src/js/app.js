import * as myFunctions from './modules/functions.js';
myFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const projectsSlider = new Swiper('.projects__slider', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 10,
  slideClass: 'projects__slide',
  pagination: {
    el: '.projects__pagination',
    type: 'bullets',
    bulletClass: 'projects__dot',
    bulletActiveClass: 'projects__dot--active',
  },
  navigation: {
    nextEl: '.slider__arrow--next',
    prevEl: '.slider__arrow--prev',
    disabledClass: 'slider__arrow--disabled',
  },
  breakpoints: {
    650: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

const knowledgeSlider = new Swiper('.knowledge__slider', {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 10,
  slideClass: 'knowledge__slide',
  navigation: {
    nextEl: '.slider__arrow--next',
    prevEl: '.slider__arrow--prev',
    disabledClass: 'slider__arrow--disabled',
  },
  breakpoints: {
    650: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 25,
    },
  },
});

const header = document.querySelector('.header');
const burger = document.querySelector('.header__burger');
const search = document.querySelector('.header__search');
const sidebar = document.querySelector('.sidebar');
const sidebarBurger = document.querySelector('.sidebar__burger');
const article = document.querySelector('.article');

if (header && burger && search) {
  header.addEventListener('click', function (e) {
    if (e.target.classList.contains('header__burger')) {
      header.classList.toggle('active');
      burger.classList.toggle('active');

      if (window.innerWidth < 768) {
        if (sidebar && !sidebar.classList.contains('active')) {
          document.documentElement.classList.toggle('active');
        } else if (!sidebar) {
          document.documentElement.classList.toggle('active');
        } else if (sidebar && sidebar.classList.contains('active') && article) {
          document.documentElement.classList.toggle('active');
        }
      }
    }
    if (e.target.classList.contains('header__btn') && window.innerWidth < 650) {
      e.preventDefault();
      search.classList.toggle('active');
    }
  });
}

if (sidebar && sidebarBurger) {
  sidebar.addEventListener('click', function (e) {
    if (e.target.classList.contains('sidebar__burger')) {
      sidebar.classList.toggle('active');
      sidebarBurger.classList.toggle('active');

      if (window.innerWidth < 768 && !article) {
        document.documentElement.classList.toggle('active');
      }
    }
  });
}

const loginPopup = document.querySelector('.login');
const regPopup = document.querySelector('.reg');

if (loginPopup && regPopup) {
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('popup__close')) {
      e.target.closest('.popup').classList.remove('active');
    }

    if (e.target.getAttribute('data-popup')) {
      const popup = e.target.getAttribute('data-popup');
      document.querySelector('.popup.active').classList.remove('active');
      document.querySelector(`.${popup}`).classList.add('active');
    }
  });
}

// for showing search options
setTimeout(function (e) {
  document.querySelector('.header__options.active').classList.remove('active');
}, 3000);
