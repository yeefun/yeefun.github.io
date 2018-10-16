import Vue from 'vue';
// import 'promise-polyfill/src/polyfill';
import App from './App.vue';

import 'reset-css'; // eslint-disable-line
import './css/common.scss';

require('./js/objectFitPolyfill.basic.min');
// require('es6-symbol/implement');

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  data: {
    cacheWindow: window,
    cacheHTML: document.documentElement,
    windowWidth: document.documentElement.clientWidth,
    windowHeight: document.documentElement.clientHeight,
  },
  created() {
    window.addEventListener('load', this.loadHandler);
    window.addEventListener('resize', this.resizeHandler);
  },
  computed: {
    isMobileSize() {
      return this.windowWidth < 576;
    },
  },
  methods: {
    loadHandler() {
      this.windowWidth = document.documentElement.clientWidth;
      this.windowHeight = document.documentElement.clientHeight;
    },
    resizeHandler() {
      this.windowWidth = document.documentElement.clientWidth;
      this.windowHeight = document.documentElement.clientHeight;
    },
  },
}).$mount('#app');

// const tagContainYoutubeAPI = document.createElement('script');
// tagContainYoutubeAPI.src = 'https://www.youtube.com/iframe_api';
// const firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tagContainYoutubeAPI, firstScriptTag);

// let firstYoutube;

// function onYouTubeIframeAPIReady() {
//   firstYoutube = new YT.Player('first-youtube');
// };
