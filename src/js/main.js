import '../assets/scss/main.scss';
// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import {
  useInsightSlider,
  useTestimonialsSlider,
} from './components/home/slider.js';
import { resizableSwiper } from './components/home/slider-logo.js';
import { accordionMobile } from './components/home/accardion.js';
// import { usePricingAccordeon } from './components/pricing/pricingAccordeon.js';
useTheme();
useBurger();
useInsightSlider();
resizableSwiper();
useTestimonialsSlider();
accordionMobile();
// usePricingAccordeon();

