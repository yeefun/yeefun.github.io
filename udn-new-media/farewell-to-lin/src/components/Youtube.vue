<template>
  <section class="youtube" :style="{ 'padding-bottom': aspectRatio }">
    <!-- TODO add "origin" -->
    <iframe class="youtube__player" id="player" :src="`https://www.youtube.com/embed/${youtubeID}?enablejsapi=1&modestbranding=1&rel=0&showinfo=0&controls=0&iv_load_policy=3&loop=1`" frameborder="0"></iframe>
  </section>
</template>

<script>
export default {
  name: 'Youtube',
  props: ['youtubeID'],
  // mixins: [resize],
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
      return `${(this.$root.windowHeight / this.$root.windowWidth) * 100}%`;
    },
  },
};
</script>

<style lang="scss">
.youtube {
  position: relative;
  // height: 0;
  width: 100%;
  &__player {
    width: 100%;
    height: 100%;
    position: absolute;
    // top: 0;
    // left: 0;
  }
}
</style>

