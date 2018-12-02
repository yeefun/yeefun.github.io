<template>
  <section class="logo">
    <a href="https://udn.com/news/index" target="_blank">
      <img src="../assets/Logo/udn-news.png" alt="">
    </a>
    <a href="https://udn.com/upf/newmedia/ubrandstudio/" target="_blank" class="mr-0">
      <img src="../assets/Logo/new-midia.png" alt="">
    </a>
  </section>
</template>

<script>
export default {
  name: 'LogoItem',
};
</script>

<style lang="scss">
.logo {
  & img {
    width: 138px;
    margin-right: 16px;
    margin-bottom: 16px;
    vertical-align: middle;
  }
}
</style>
