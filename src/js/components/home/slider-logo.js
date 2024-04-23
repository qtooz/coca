import Swiper from 'swiper';
import 'swiper/css';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

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
  modules: [Pagination, Autoplay],
  loop: true,
  spaceBetween: 0,
  slidesPerView: 1,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: '.partners__pagination',
    clickable: true,
  },
});

export { resizableSwiper };
