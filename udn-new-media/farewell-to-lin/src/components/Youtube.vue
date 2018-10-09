<template>
  <section class="youtube" :style="{ 'padding-bottom': aspectRatio }">
    <!-- TODO add "origin" -->
    <iframe class="youtube__player" id="player" :src="`http://www.youtube.com/embed/${youtubeID}?enablejsapi=1&modestbranding=1&rel=0&showinfo=0&controls=0&iv_load_policy=3&loop=1`" frameborder="0"></iframe>
    <!-- <iframe class="youtube__player" id="player" src="http://www.youtube.com/embed/aNwTvyITqBY?enablejsapi=1&modestbranding=1&rel=0&showinfo=0&controls=0&iv_load_policy=3&loop=1" frameborder="0" v-else></iframe> -->
  </section>
</template>

<script>
import resize from '../mixins/resize';

export default {
  name: 'Youtube',
  props: ['youtubeID'],
  mixins: [resize],
  // created() {
  //   let player;
  //   function onYouTubeIframeAPIReady() {
  //     player = new YT.Player('player', {
  //       events: {

  //       }
  //     });
  //   }
  // },
  computed: {
    aspectRatio() {
      // console.log(this.windowHeight, this.windowWidth, window.innerWidth);
      return `${(this.windowHeight / this.windowWidth) * 100}%`;
    },
  },
};
</script>

<style lang="scss">
.youtube {
  position: relative;
  // 9:16
  // height: 0;
  width: 100%;
  // height: 100vh;
  // background-color: #000;
  &__player {
    width: 100%;
    height: 100%;
    position: absolute;
    // top: 0;
    // left: 0;
  }
}
</style>

