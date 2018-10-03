<template>
  <div id="app" class="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <Page> -->
    <Cover></Cover>
    <!-- </Page> -->
    <!-- <div class="test"></div> -->
    <OpeningLine></OpeningLine>
    <Youtube></Youtube>
    <Youtube></Youtube>
    <Youtube></Youtube>
    <!-- <div class="test"></div> -->
  </div>
</template>

<script>
import Cover from './components/Cover.vue';
// import Page from './components/Page.vue';
import OpeningLine from './components/OpeningLine.vue';
import Youtube from './components/Youtube.vue';

export default {
  name: 'app',
  components: {
    Cover,
    // Page,
    OpeningLine,
    Youtube,
  },
  data() {
    return {
      startScrollTime: new Date(),
      pageScrollY: 0,
    };
  },
  created() {
    window.addEventListener('resize', this.resizeHandler);
    window.addEventListener('mousewheel', this.pageScroll);
    window.addEventListener('DOMMouseScroll', this.pageScroll);
    window.addEventListener('touchmove', this.pageScroll);
  },
  methods: {
    resizeHandler() {
      if (window.pageYOffset > 0) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    },
    pageScroll(evt) {
      if (window.innerWidth < 576) return;
      const currentTime = new Date();
      if (currentTime - this.startScrollTime < 800) return;
      const scrollDirection = -evt.wheelDelta || evt.detail;
      const { body } = document;
      if (scrollDirection > 0) {
        if (this.pageScrollY === -200) {
          body.classList.add('initial');
        } else if (this.pageScrollY === -300) {
          return;
        }
        this.pageScrollY -= 100;
      } else {
        if (this.pageScrollY === 0) return;
        console.log(window.pageYOffset);
        if (window.pageYOffset <= 0) body.classList.remove('initial');
        else return;
        this.pageScrollY += 100;
      }
      this.$el.style.transform = `translateY(${this.pageScrollY}vh)`;
      this.startScrollTime = currentTime;
    },
  },
};
</script>

<style lang="scss">
.app {
  height: 100vh;
  // overflow: hidden;
  transition: transform 1s;
}

// .test {
//   height: 60px;
// }
</style>
