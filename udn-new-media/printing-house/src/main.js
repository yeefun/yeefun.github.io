import Vue from 'vue';
// import VueScrollTo from 'vue-scrollto';
import App from './App.vue';

// Vue.use(VueScrollTo);

Vue.config.productionTip = false;

// VueScrollTo.setDefaults({
//   duration: 400,
// });

new Vue({
  render: h => h(App),
}).$mount('#app');
