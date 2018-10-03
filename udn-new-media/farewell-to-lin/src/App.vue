<template>
  <div id="app" class="app">
    <Cover></Cover>
    <OpeningLine></OpeningLine>
    <Youtube></Youtube>
    <PhotoScrollPage></PhotoScrollPage>
  </div>
</template>

<script>
import Cover from './components/Cover.vue';
import OpeningLine from './components/OpeningLine.vue';
import Youtube from './components/Youtube.vue';
import PhotoScrollPage from './components/PhotoScrollPage.vue';

export default {
  name: 'app',
  components: {
    Cover,
    OpeningLine,
    Youtube,
    PhotoScrollPage,
  },
  data() {
    return {
      bodyClass: document.body.classList,
      startScrollTime: new Date(),
      pageScrollY: 0,
    };
  },
  created() {
    window.addEventListener('load', this.loadHandler);
    window.addEventListener('beforeunload', this.beforeunloadHandler);
    window.addEventListener('resize', this.resizeHandler);
    window.addEventListener('mousewheel', this.pageScroll);
    window.addEventListener('DOMMouseScroll', this.pageScroll);
    // window.addEventListener('touchmove', this.pageScroll);
  },
  methods: {
    loadHandler() {
      if (window.innerWidth >= 576) {
        this.bodyClass.add('hidden');
      }
    },
    beforeunloadHandler() {
      window.scrollTo({
        top: 0,
        behavior: 'instant',
      });
    },
    resizeHandler() {
      if (window.innerWidth < 576) {
        this.bodyClass.remove('hidden');
        this.$el.style.transform = 'translateY(0vh)';
      } else {
        if (window.pageYOffset === 0) this.bodyClass.add('hidden');
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    },
    pageScroll(evt) {
      if (window.innerWidth < 576 || window.pageYOffset > 0) return;
      const currentTime = new Date();
      if (currentTime - this.startScrollTime < 800) return;
      const scrollDirection = -evt.wheelDelta || evt.detail;
      if (scrollDirection > 0) {
        if (this.pageScrollY === -200) {
          this.bodyClass.remove('hidden');
        } else if (this.pageScrollY === -300) {
          return;
        }
        this.pageScrollY -= 100;
      } else {
        if (this.pageScrollY === 0) return;
        if (window.pageYOffset <= 0) this.bodyClass.add('hidden');
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
</style>
