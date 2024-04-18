import '../assets/scss/main.scss';
// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useInsightSlider, useTestimonialsSlider } from './components/home/slider.js';
import { resizableSwiper } from './components/home/slider-logo.js';
useTheme();
useBurger();
useInsightSlider();
resizableSwiper();
useTestimonialsSlider();
