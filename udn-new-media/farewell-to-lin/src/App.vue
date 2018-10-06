<template>
  <div id="app" class="app">
    <div class="page-content" @mousewheel.prevent="pageScroll" @DOMMouseScroll.prevent="pageScroll" @touchstart="pageTouchStart" @touchmove="pageTouchMove" :style="pageTransform">
    <!-- <div id="page-content" class="page-content" @mousewheel.prevent="pageScroll" @DOMMouseScroll.prevent="pageScroll" :style="pageTransform"> -->
    <!-- <div class="page-content"> -->
      <Cover></Cover>
      <OpeningLine></OpeningLine>
      <Youtube></Youtube>
      <component :is="isFixedPage"></component>
    </div>
    <div class="scroll-content" ref="scrollContent">
      <PhotoPageContent v-if="windowWidth >= 576"></PhotoPageContent>
        <!-- <Youtube></Youtube> -->
      <ContentLight></ContentLight>
    </div>
  </div>
</template>

<script>
import Cover from './components/Cover.vue';
import OpeningLine from './components/OpeningLine.vue';
import Youtube from './components/Youtube.vue';
import FixedPhotoPage from './components/FixedPhotoPage.vue';
import PhotoPageContent from './components/PhotoPageContent.vue';
import ContentDark from './components/ContentDark.vue';
import ContentLight from './components/ContentLight.vue';

export default {
  name: 'app',
  components: {
    Cover,
    OpeningLine,
    Youtube,
    FixedPhotoPage,
    PhotoPageContent,
    ContentDark,
    ContentLight,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      bodyClass: document.body.classList,
      resizeTimer: null,
      scrollTimer: null,
      // throttle touchpad mousewheel event
      canScroll: true,
      pageScrollY: 0,
      touchStartX: 0,
      touchStartY: 0,
      // startScrollTime: new Date(),
    };
  },
  created() {
    // window.addEventListener('load', this.loadHandler);
    window.addEventListener('beforeunload', this.beforeunloadHandler);
    window.addEventListener('resize', this.resizeHandler);
    // window.addEventListener('mousewheel', this.pageScroll);
    // window.addEventListener('DOMMouseScroll', this.pageScroll);
    // window.addEventListener('touchstart', this.pageTouchStart);
  },
  // mounted() {
  //   const app = document.getElementById('app');
  //   const hammertime = new Hammer(app);
  //   hammertime.on('swipedown', () => {
  //     this.pageScrollY -= window.innerHeight;
  //   });
  //   hammertime.on('swipeup', () => {
  //     this.pageScrollY += window.innerHeight;
  //   });
  // },
  computed: {
    isFixedPage() {
      return this.windowWidth < 576 ? 'ContentDark' : 'FixedPhotoPage';
    },
    pageTransform() {
      // return {
      return `transform: translateY(${this.pageScrollY}px)`;
      // };
    },
  },
  methods: {
    // loadHandler() {
    //   if (this.windowWidth >= 576) {
    //     this.bodyClass.add('hidden');
    //   }
    // },
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
          this.bodyClass.remove('overflow-auto');
          this.pageScrollY = 0;
        } else if (this.windowWidth >= 576 && window.innerWidth < 576) {
          this.bodyClass.add('overflow-auto');
          this.pageScrollY = 0;
        }
        this.windowWidth = window.innerWidth;
      }, 400);
    },
    pageTouchStart(evt) {
      this.touchStartX = evt.touches[0].pageX;
      this.touchStartY = evt.touches[0].pageY;
      alert(this.touchStartX + '' + this.touchStartY);
      // alert('hi');
      this.pageScrollY -= window.innerHeight;
    },
    // pageTouchMove(evt) {
    //   if (this.windowWidth < 576 || window.pageYOffset > 0 || !this.canScroll) return;
    //   if (this.scrollTimer) {
    //     clearTimeout(this.scrollTimer);
    //     this.canScroll = false;
    //   }
    //   this.scrollTimer = setTimeout(() => {
    //     setTimeout(() => {
    //       this.canScroll = true;
    //     }, 1000);
    //     const moveEndX = evt.changedTouches[0].pageX;
    //     const moveEndY = evt.changedTouches[0].pageY;
    //     const deltaX = moveEndX - this.touchStartX;
    //     const deltaY = moveEndY - this.touchStartY;
    //     if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 0) {
    //       if (this.pageScrollY === -window.innerHeight * 3) return;
    //       if (this.pageScrollY === -window.innerHeight * 2) {
    //         this.$refs.scrollContent.style.marginTop = '0%';
    //         this.bodyClass.add('overflow-auto');
    //       }
    //     } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY < 0) {
    //       if (this.pageScrollY === -window.innerHeight * 3) {
    //         this.$refs.scrollContent.style.marginTop = '100%';
    //         this.bodyClass.remove('overflow-auto');
    //       }
    //       if (this.pageScrollY === 0) return;
    //       this.pageScrollY += window.innerHeight;
    //     }
    //     alert('hi-move');
    //   }, 200);
    // },
    // TODO 把事件委託給父層元素
    pageScroll(evt) {
      console.log('done');
      if (this.windowWidth < 576 || window.pageYOffset > 0 || !this.canScroll) return;
      if (this.scrollTimer) {
        clearTimeout(this.scrollTimer);
        this.canScroll = false;
      }
      // const { currentTarget } = evt;
      this.scrollTimer = setTimeout(() => {
        setTimeout(() => {
          this.canScroll = true;
        }, 1000);
        const scrollDirection = -evt.wheelDelta || evt.detail;
        if (scrollDirection > 0) {
          if (this.pageScrollY === -window.innerHeight * 3) return;
          if (this.pageScrollY === -window.innerHeight * 2) {
            // currentTarget.style.zIndex = 'auto';
            // this.$refs.scrollContent.style.transform = 'translateY(0vh)';
            // this.$refs.scrollContent.style.willChange = 'margin-top';
            this.$refs.scrollContent.style.marginTop = '0%';
            this.bodyClass.add('overflow-auto');
            // setTimeout(() => {
            // }, 1000);
          }
          this.pageScrollY -= window.innerHeight;
        } else {
          if (this.pageScrollY === -window.innerHeight * 3) {
            // currentTarget.style.zIndex = '99';
            // this.$refs.scrollContent.style.transform = 'translateY(100vh)';
            this.$refs.scrollContent.style.marginTop = '100%';
            // this.$refs.scrollContent.style.willChange = 'auto';
            this.bodyClass.remove('overflow-auto');
          }
          if (this.pageScrollY === 0) return;
          this.pageScrollY += window.innerHeight;
        }
      }, 200);
    },
    // resizeHandler() {
    //   if (this.resizeTimer) clearTimeout(this.resizeTimer);
    //   this.resizeTimer = setTimeout(() => {
    //     if (this.windowWidth < 576 && window.innerWidth >= 576) {
    //       window.scrollTo({
    //         top: 0,
    //         behavior: 'instant',
    //       });
    //       this.bodyClass.add('hidden');
    //       this.pageScrollY = 0;
    //     } else if (this.windowWidth >= 576 && window.innerWidth < 576) {
    //       this.bodyClass.remove('hidden');
    //       this.$el.style.transform = 'translateY(0vh)';
    //     }
    //     this.windowWidth = window.innerWidth;
    //   }, 400);
    // },
  //   pageScroll(evt) {
  //     if (this.windowWidth < 576 || window.pageYOffset > 0 || !this.canScroll) return;
  //     // const currentTime = new Date();
  //     // if (currentTime - this.startScrollTime < 800) return;
  //     const scrollDirection = -evt.wheelDelta || evt.detail;
  //     if (
  //       (scrollDirection > 0 && this.pageScrollY === -300)
  //       || (scrollDirection < 0 && this.pageScrollY === 0)
  //       || (scrollDirection < 0 && window.pageYOffset > 0)) return;
  //     if (this.scrollTimer) {
  //       clearTimeout(this.scrollTimer);
  //       this.canScroll = false;
  //     }
  //     // this.$el.style.willChange = 'transform';
  //     this.scrollTimer = setTimeout(() => {
  //       if (scrollDirection > 0) {
  //         if (this.pageScrollY === -200) this.bodyClass.remove('hidden');
  //         this.pageScrollY -= 100;
  //       } else {
  //         this.bodyClass.add('hidden');
  //         this.pageScrollY += 100;
  //       }
  //       this.$el.style.transform = `translateY(${this.pageScrollY}vh)`;
  //       setTimeout(() => {
  //         this.canScroll = true;
  //       }, 800);
  //       // this.startScrollTime = currentTime;
  //       // this.$el.style.willChange = 'auto';
  //     }, 400);
  //   },
  },
};
</script>

<style lang="scss">
.app {
  height: 100vh;
  // overflow: hidden;
  // transition: transform 1s;
}
.page-content {
  // position: fixed;
  width: 100%;
  // transition: transform 1s;
  // z-index: 99;
  @media screen and (min-width: 576px) {
    position: fixed;
    top: 0;
    transition: transform 1s;
    // will-change: transform;
    // z-index: 99;
  }
}
.scroll-content {
  @media screen and (min-width: 576px) {
    // position: relative;
    // top: 100%;
    // transform: translateY(100vh);
    // transition: transform 1s;
    margin-top: 100%;
    transition: margin-top 1s;
  }
}
</style>
