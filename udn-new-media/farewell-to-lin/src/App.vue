<template>
  <div id="app" class="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <Page> -->
      <Cover></Cover>
    <!-- </Page> -->
    <div class="test"></div>
  </div>
</template>

<script>
import Cover from './components/Cover.vue';
// import Page from './components/Page.vue';

export default {
  name: 'app',
  components: {
    Cover,
    // Page,
  },
  data() {
    return {
      isPreventScroll: true,
    };
  },
  created() {
    window.addEventListener('mousewheel', this.pageScroll);
    window.addEventListener('DOMMouseScroll', this.pageScroll);
    window.addEventListener('touchmove', this.pageScroll);
    window.addEventListener('scroll', this.preventScroll);
  },
  methods: {
    pageScroll(evt) {
      if (window.innerWidth < 576 || window.pageYOffset > window.innerHeight * 3) return;
      // 節流
      // setTimeout(() => {
      const scrollDirection = -evt.wheelDelta || evt.detail;
      if (scrollDirection > 0) {
        console.log('down');
        window.scrollBy({
          top: window.innerHeight,
          behavior: 'smooth',
        });
      } else {
        console.log('top');
        window.scrollBy({
          top: -window.innerHeight,
          behavior: 'smooth',
        });
      }
      // }, 2000);
    },
    preventScroll() {
      if (!this.isPreventScroll) return;
      window.scrollTo({
        top: 0,
        behavior: 'instant',
      });
    },
  },
};
</script>

<style lang="scss">
.app {
  height: 100vh;
  // overflow: hidden;
}

.test {
  height: 200vh;
}
</style>
