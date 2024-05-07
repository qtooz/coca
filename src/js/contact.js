import '/scss/contact.scss';

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import {
  useInsightSlider,
  useTestimonialsSlider,
} from './components/home/slider.js';
import { resizableSwiper } from './components/home/slider-logo.js';
import { accordionMobile } from './components/home/accardion.js';
import { usePhone } from './components/contact/phone.js';
import { useValidation } from './components/contact/validation.js';

useTheme();
useBurger();
useInsightSlider();
resizableSwiper();
useTestimonialsSlider();
accordionMobile();
usePhone();
useValidation();


