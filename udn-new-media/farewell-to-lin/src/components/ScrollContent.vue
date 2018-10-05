<template>
  <section class="scroll-content">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'ScrollContent',
  data() {
    return {
      windowWidth: window.innerWidth,
      bodyClass: document.body.classList,
      resizeTimer: null,
      scrollTimer: null,
      canScroll: true,
      // startScrollTime: new Date(),
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
  // computed: {
  //   isFixedPage() {
  //     return this.windowWidth < 576 ? 'ContentDark' : 'FixedPhotoPage';
  //   },
  // },
  methods: {
    loadHandler() {
      if (this.windowWidth >= 576) {
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
      if (this.resizeTimer) clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        if (this.windowWidth < 576 && window.innerWidth >= 576) {
          window.scrollTo({
            top: 0,
            behavior: 'instant',
          });
          this.bodyClass.add('hidden');
          this.pageScrollY = 0;
        } else if (this.windowWidth >= 576 && window.innerWidth < 576) {
          this.bodyClass.remove('hidden');
          this.$el.style.transform = 'translateY(0vh)';
        }
        this.windowWidth = window.innerWidth;
      }, 400);
    },
    pageScroll(evt) {
      if (this.windowWidth < 576 || window.pageYOffset > 0 || !this.canScroll) return;
      // const currentTime = new Date();
      // if (currentTime - this.startScrollTime < 800) return;
      const scrollDirection = -evt.wheelDelta || evt.detail;
      if (
        (scrollDirection > 0 && this.pageScrollY === -300)
        || (scrollDirection < 0 && this.pageScrollY === 0)
        || (scrollDirection < 0 && window.pageYOffset > 0)) return;
      if (this.scrollTimer) {
        clearTimeout(this.scrollTimer);
        this.canScroll = false;
      }
      // this.$el.style.willChange = 'transform';
      this.scrollTimer = setTimeout(() => {
        if (scrollDirection > 0) {
          if (this.pageScrollY === -200) this.bodyClass.remove('hidden');
          this.pageScrollY -= 100;
        } else {
          this.bodyClass.add('hidden');
          this.pageScrollY += 100;
        }
        this.$el.style.transform = `translateY(${this.pageScrollY}vh)`;
        setTimeout(() => {
          this.canScroll = true;
        }, 800);
        // this.startScrollTime = currentTime;
        // this.$el.style.willChange = 'auto';
      }, 400);
    },
  },
};
</script>

<style lang="scss">
.scroll-content {
  height: 100vh;
  // overflow: hidden;
  transition: transform 1s;
}
</style>

