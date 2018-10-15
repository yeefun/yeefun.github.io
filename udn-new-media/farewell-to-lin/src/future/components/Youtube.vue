<template>
  <!-- <section class="youtube" :style="{ 'padding-bottom': aspectRatio }"> -->
  <section class="youtube">
      <!-- TODO add "origin" -->
    <iframe class="youtube__player" id="first-youtube" src="https://www.youtube.com/embed/k5_iIp_Rab8?enablejsapi=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&loop=1" frameborder="0"></iframe>
    <!-- <div class="test" @click="iframe"></div> -->
  </section>
</template>

<script>
export default {
  name: 'Youtube',
  // methods: {
  //   iframe(evt) {
  //     evt.preventDefault();
  //     const $this = evt.currentTarget;
  //     $this.style.pointerEvents = 'none';
  //   },
  // },
  // computed: {
  //   aspectRatio() {
  //     if (this.$root.isMobileSize) return `${(this.$root.windowHeight / this.$root.windowWidth) * 100}%`;
  //     return false;
  //   },
  // },
  // methods: {
  // },
};
</script>

<style lang="scss">
.youtube {
  position: relative;
  // height: 0;
  // height: 100vh;
  width: 100%;
  // FIXME dark youtube need full version?
  height: 100vh;
  // @media screen and (min-width: 576px) {
  //   height: 100vh;
  // }
  &__player {
    width: 100%;
    height: 100%;
    position: absolute;
    pointer-events: none;
    // top: 0;
    // left: 0;
  }
}
// .test {
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   background-color: transparent;
//   opacity: 0.1;
//   pointer-events: none;
// }
</style>

