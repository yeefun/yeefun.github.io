<template>
  <section class="youtube" :style="{ 'padding-bottom': aspectRatio }">
    <!-- TODO add "origin" -->
    <iframe class="youtube__player" :id="youtubeRef" :src="`https://www.youtube.com/embed/${youtubeId}?enablejsapi=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&loop=1`" frameborder="0"></iframe>
  </section>
</template>

<script>
// import YouTubePlayer from 'youtube-player';

export default {
  name: 'Youtube',
  props: ['youtubeId', 'youtubeRef'],
  computed: {
    aspectRatio() {
      if (this.$root.isMobileSize) return `${(this.$root.windowHeight / this.$root.windowWidth) * 100}%`;
      return false;
    },
  },
  // methods: {
  // },
};
</script>

<style lang="scss">
.youtube {
  position: relative;
  // height: 0;
  // height: 100vh;
  // width: 100%;
  // FIXME dark youtube need full version?
  @media screen and (min-width: 576px) {
    height: 100%;
  }
  &__player {
    width: 100%;
    // height: 100%;
    // modify
    height: 100vh;
    // position: absolute;
    // top: 0;
    // left: 0;
  }
}
</style>

