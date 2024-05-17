import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

export const useArticlesSlider = () => {
  new Swiper('.articles__slider', {
		modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 32,
    loop: true,
    
    breakpoints: {
      992: {
        slidesPerView: 3,
				centeredSlides:false,
      },
			576: {
				slidesPerView: 2,
			},
    },
		navigation: {
      prevEl: '.articles__slider-prev',
      nextEl: '.articles__slider-next',
    },
  });
};

