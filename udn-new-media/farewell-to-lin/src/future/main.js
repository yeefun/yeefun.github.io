import Vue from 'vue';
import App from './App.vue';

// import './css/common.scss';

Vue.config.productionTip = false;

// document.addEventListener('DOMContentLoaded', () => {
new Vue({
  render: h => h(App),
  data: {
    cacheWindow: window,
    cacheHTML: document.documentElement,
    windowWidth: document.documentElement.clientWidth,
    windowHeight: document.documentElement.clientHeight,
    resizeTimer: null,
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
      // this.beforeWindowWidth = this.windowWidth;
      this.windowHeight = document.documentElement.clientHeight;
    },
    resizeHandler() {
      if (this.resizeTimer) clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.windowWidth = document.documentElement.clientWidth;
        this.windowHeight = document.documentElement.clientHeight;
        // if ((this.beforeWindowWidth < 576 && this.windowWidth >= 576) || (this.beforeWindowWidth >= 576 && this.windowWidth < 576)) {
        //   this.cacheWindow.location.reload();
        //   this.beforeWindowWidth = this.windowWidth;
        // }
      }, 400);
    },
  },
}).$mount('#app');
// });
