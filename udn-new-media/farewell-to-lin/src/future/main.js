import Vue from 'vue';
import App from './App.vue';

import 'reset-css'; // eslint-disable-line
import './css/common.scss';

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
