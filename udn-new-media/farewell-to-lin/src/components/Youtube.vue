<template>
  <section class="youtube" :style="{ 'padding-bottom': aspectRatio }">
    <!-- TODO add "origin" -->
    <iframe class="youtube__player" id="first-youtube" :src="`https://www.youtube.com/embed/${youtubeID}?enablejsapi=1&modestbranding=1&rel=0&showinfo=0&controls=0&iv_load_policy=3&loop=1`" frameborder="0"></iframe>
    <!-- <div class="test"></div> -->
  </section>
</template>

<script>
export default {
  name: 'Youtube',
  props: ['youtubeID'],
  // data() {
  //   return {
  //     firstYoutube: null,
  //   };
  // },
  mounted() {
  /* eslint-disable */
  // console.log(firstYoutube);
  /* eslint-enable */
  },
  computed: {
    aspectRatio() {
      if (this.$root.isMobileSize) return `${(this.$root.windowHeight / this.$root.windowWidth) * 100}%`;
      return false;
    },
  },
};
</script>

<style lang="scss">
.youtube {
  position: relative;
  // height: 0;
  // height: 100vh;
  width: 100%;
  // FIXME dark youtube need full version?
  @media screen and (min-width: 576px) {
    height: 100vh;
  }
  &__player {
    width: 100%;
    height: 100%;
    position: absolute;
    // pointer-events: none;
    // top: 0;
    // left: 0;
  }
}
</style>

