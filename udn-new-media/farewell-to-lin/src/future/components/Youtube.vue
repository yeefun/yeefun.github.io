<template>
  <!-- <section class="youtube" :style="{ 'padding-bottom': aspectRatio }"> -->
  <section class="youtube">
    <!-- <iframe class="youtube__player" id="youtube" src="https://www.youtube.com/embed/XevUnSGZw2Y?enablejsapi=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1&loop=1&origin=https://udn.com" frameborder="0" allowfullscreen></iframe> -->
    <iframe class="youtube__player" id="youtube" src="https://www.youtube.com/embed/XevUnSGZw2Y?enablejsapi=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1&loop=1" frameborder="0" allowfullscreen></iframe>
  </section>
</template>

<script>
export default {
  name: 'Youtube',
};
</script>

<style lang="scss">
.youtube {
  position: relative;
  height: 100vh;
  &__player {
    width: 100%;
    height: 100%;
    position: absolute;
  }
}
</style>

