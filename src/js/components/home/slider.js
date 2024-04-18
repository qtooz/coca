import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    modules: [Navigation, EffectFade, Autoplay],
    effect: 'fade',

    fadeEffect: {
      crossFade: true,
    },

    slidesPerView: 'auto',
    spaceBetween: 22,
    loop: true,

    autoplay: {
      delay: 1000,
    },
    speed: 300,

    navigation: {
      prevEl: '.testimonials__btn--prev',
      nextEl: '.testimonials__btn--next',
    },
  });
};
