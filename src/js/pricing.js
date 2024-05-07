import '/scss/pricing.scss';

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useInsightSlider, useTestimonialsSlider } from './components/home/slider.js';
import { resizableSwiper } from './components/home/slider-logo.js';
import { accordionMobile } from './components/home/accardion.js';
import { usePriceSwitcher } from './components/pricing/priceSwitcher.js';

useTheme();
useBurger();
useInsightSlider();
resizableSwiper();
useTestimonialsSlider();
accordionMobile();
usePriceSwitcher();