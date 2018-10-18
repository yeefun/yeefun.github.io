<template>
  <!-- <section class="youtube" :style="{ 'padding-bottom': aspectRatio }"> -->
  <section class="youtube">
      <!-- TODO add "&origin=https://udn.com" "&origin=http://nmdap.udn.com.tw" -->
    <iframe class="youtube__player" id="youtube" src="https://www.youtube.com/embed/k5_iIp_Rab8?enablejsapi=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&loop=1" frameborder="0" allowfullscreen></iframe>
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
  // FIXME dark youtube need full version?
  height: 100vh;
  &__player {
    width: 100%;
    height: 100%;
    position: absolute;
  }
}
</style>

