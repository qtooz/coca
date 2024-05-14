import Swiper from 'swiper';
import 'swiper/css';


export const useBlogSlider = () => {
  new Swiper('.hero__blog-slider', {
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