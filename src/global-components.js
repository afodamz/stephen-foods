import Vue from 'vue';
import VueCarousel from 'vue-carousel';
import ToastPlugin from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';

import VueSlickCarousel from "vue-slick-carousel";
// import "vue-slick-carousel/dist/vue-slick-carousel.css";
// // optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

// another way
const components = {
    'vue-toast': ToastPlugin,
    'vue-slick-carousel': VueSlickCarousel,
    'vue-carousel': VueCarousel,
    // 'comp2': () => import('components/comp2'),
}

Object.entries(components).forEach(([name, component]) => Vue.component(name, component))