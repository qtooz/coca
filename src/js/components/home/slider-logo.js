import Swiper from 'swiper';
import 'swiper/css';


const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
  let swiper;
  breakpoint = window.matchMedia(breakpoint);

  const enableSwiper = function (className, settings) {
    swiper = new Swiper(className, settings);
  };

  const checker = function () {
    if (breakpoint.matches) {
      return enableSwiper(swiperClass, swiperSettings);
    } else {
      if (swiper !== undefined) swiper.destroy(true, true);
      return;
    }
  };

  breakpoint.addEventListener('change', checker);
  checker();
};

resizableSwiper('(max-width: 576px)', '.partners__list', {
  loop: true,
  spaceBetween: 12,
  slidesPerView: 2,
	autoplay: {
		delay: 5000,
	},
  pagination: {
    el: '.partners__pagination',
    clickable: true,
  },
});

export { resizableSwiper };