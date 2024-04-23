import '../assets/scss/main.scss';
// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useInsightSlider, useTestimonialsSlider } from './components/home/slider.js';
import { resizableSwiper } from './components/home/slider-logo.js';
import { accordionMobile } from './components/home/accardion.js';
useTheme();
useBurger();
useInsightSlider();
resizableSwiper();
useTestimonialsSlider();
accordionMobile();

// const titles = document.querySelectorAll('.footer__block-title');
// const contents = document.querySelectorAll('.footer__block-content');

// titles.forEach((item) =>
//   item.addEventListener('click', () => {
//     const activeContent = document.querySelector('#' + item.dataset.tab);

//     if (activeContent.classList.contains(`active`)) {
//       activeContent.classList.remove('active');
//       item.classList.remove('active');
//       activeContent.style.maxHeight = 0;
//     } else {
//       contents.forEach((element) => {
//         element.classList.remove(`active`);
//         element.style.maxHeight = 0;
//       });
//       titles.forEach((element) => element.classList.remove('active'));

//       item.classList.add('active');
//       activeContent.classList.add('active');
//       activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
//     }
//   }),
// );

