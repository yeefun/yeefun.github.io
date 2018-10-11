<template>
  <section class="youtube" :style="{ 'padding-bottom': aspectRatio }">
    <!-- TODO add "origin" -->
    <iframe class="youtube__player" :id="youtubeRef" :src="`https://www.youtube.com/embed/${youtubeId}?enablejsapi=1&modestbranding=1&rel=0&showinfo=0&controls=0&iv_load_policy=3&loop=1`" frameborder="0"></iframe>
  </section>
</template>

<script>
import YouTubePlayer from 'youtube-player';

export default {
  name: 'Youtube',
  props: ['youtubeId', 'youtubeRef'],
  data() {
    return {
      firstYoutube: null,
      secondYoutube: null,
    };
  },
  created() {
    window.addEventListener('wheel', this.playFirstYoutube);
  },
  mounted() {
    this.firstYoutube = YouTubePlayer('first-youtube');
    this.secondYoutube = YouTubePlayer('second-youtube');
    this.firstYoutube.mute();
    this.secondYoutube.mute();
  },
  computed: {
    aspectRatio() {
      if (this.$root.isMobileSize) return `${(this.$root.windowHeight / this.$root.windowWidth) * 100}%`;
      return false;
    },
  },
  methods: {
    playFirstYoutube(evt) {
      // console.log(this.$root);
      if (this.$parent.pageScrollY === -this.$root.windowHeight * 3 && this.$root.cacheWindow.pageYOffset >= 0) return;
      // console.log(this.$root.cacheWindow.pageYOffset >= 0);
      // console.log(this.$parent);
      // console.log(this.$parent.pageScrollY);
      // console.log(-this.$root.windowHeight * 3);
      // console.log(this.$parent.pageScrollY === -this.$root.windowHeight * 3);
      // console.log('success');
      evt.preventDefault();
      const scrollDirection = -evt.wheelDelta || evt.detail;
      if ((scrollDirection > 0 && this.$parent.pageScrollY === -this.$root.windowHeight)
        || (scrollDirection < 0 && this.$parent.pageScrollY === -this.$root.windowHeight * 3)) {
        this.firstYoutube.playVideo();
      } else if (this.$parent.pageScrollY === -this.$root.windowHeight * 2) {
        this.firstYoutube.pauseVideo();
      }
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
    pointer-events: none;
    // top: 0;
    // left: 0;
  }
}
</style>

