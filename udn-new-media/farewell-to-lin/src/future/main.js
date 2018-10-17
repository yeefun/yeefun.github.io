import Vue from 'vue';
import App from './App.vue';

import 'reset-css'; // eslint-disable-line
import './css/common.scss';

Vue.config.productionTip = false;

document.addEventListener('DOMContentLoaded', () => {
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
    mounted() {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode.insertBefore(tag, firstScript);
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
});
