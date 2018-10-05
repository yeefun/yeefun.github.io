<template>
  <section class="fixed-page">
    <div class="fixed-page__photo"></div>
    <div class="fixed-page__photo-caption"></div>
    <div class="fixed-page__mask"></div>
  </section>
</template>

<script>
export default {
  name: 'FixedPhotoPage',
};
</script>

<style lang="scss">
.fixed-page {
  position: relative;
  height: 100vh;
  // background-color: #000;
  &__photo {
    height: 100%;
    background-image: url('../assets/ContentImg/web_legacy.jpg');
    background-size: cover;
    background-position: center;
  }
  &__mask {
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.85);
  }
}
</style>

