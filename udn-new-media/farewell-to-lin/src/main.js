import Vue from 'vue';
import App from './App.vue';

import 'reset-css'; // eslint-disable-line
import './css/common.scss';

require('./js/objectFitPolyfill.basic.min.js');

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

const tagContainYoutubeAPI = document.createElement('script');
tagContainYoutubeAPI.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tagContainYoutubeAPI, firstScriptTag);
