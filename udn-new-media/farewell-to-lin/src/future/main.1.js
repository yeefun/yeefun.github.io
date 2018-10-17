import Vue from 'vue';
import App from './App.vue';

new Vue({
  render: h => h(App),
  mounted() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(tag, firstScript);

    let player;

    function onYouTubeIframeAPIReady() {

      console.log('success');
      
      player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    };
  },
}).$mount('#app');