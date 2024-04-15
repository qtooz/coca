import '../assets/scss/main.scss';
// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useInsightSlider } from './components/slider.js';
import { resizableSwiper } from './components/slider-logo.js';
useTheme();
useBurger();
useInsightSlider();
resizableSwiper();
