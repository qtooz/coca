import Swiper from 'swiper';
import 'swiper/css';


export const useAboutSlider = () => {
  new Swiper('.about__slider', {
    slidesPerView: 1.5,
    spaceBetween: 32,
    loop: true,
    centeredSlides: false,
    breakpoints: {
			768: {
				slidesPerView: 2.5,
			}
    },
  });
};

export const useTeamSlider = () => {
  new Swiper('.team__slider', {
    slidesPerView: 2,
    spaceBetween: 32,
    loop: true,
    centeredSlides: false,
    breakpoints: {
			768: {
				slidesPerView: 3,
				
			}
    },
  });
};
