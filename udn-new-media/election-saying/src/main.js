import Vue from 'vue';
import App from './App.vue';
// import Test from './test';

// Vue.prototype.$test = Test;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
