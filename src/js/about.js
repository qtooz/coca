import '/scss/about.scss';

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { accordionMobile } from './components/home/accardion.js';
import { useAboutSlider } from './components/about/heroSwiper.js';
import { useTeamSlider } from './components/about/heroSwiper.js';


useTheme();
useBurger();
accordionMobile();
useAboutSlider();
useTeamSlider();


