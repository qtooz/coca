import '/scss/blog.scss';

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { accordionMobile } from './components/home/accardion.js';
import { useBlockTab } from './components/blog/tabBlock.js';
import { useBlogSlider } from './components/blog/heroSwiper.js';

useTheme();
useBurger();
accordionMobile();
useBlockTab();
useBlogSlider();