<template>
  <section class="fixedPage">
    <div class="fixedPage__photo"></div>
    <div class="fixedPage__content"></div>
  </section>
</template>

<script>
export default {
  name: 'FixedPhotoPage',
};
</script>

<style scoped lang="scss">
.fixedPage {
  // height: 100vh;
  background-color: #000;
  &__photo {
    height: 100vh;
    background-image: url('../assets/ContentImg/web_legacy.jpg');
    background-size: cover;
    background-position: center;
  }
}
</style>

