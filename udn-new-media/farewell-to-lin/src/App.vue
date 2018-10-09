<template>
<!-- FIXME use wheel event -->
  <!-- <div id="app" @mousewheel="pageScroll" @DOMMouseScroll="pageScroll" @touchstart="pageTouchStart" @touchmove="pageTouchMove"> -->
  <div id="app">
    <div class="page-content" :style="pageTransform" ref="pageContent">
    <!-- <div class="page-content"> -->
      <!-- <Cover></Cover> -->
      <!-- <OpeningLine></OpeningLine> -->
      <!-- <Youtube :youtubeID="youtubeID('first')"></Youtube> -->
      <!-- <component :is="isMobileSize ? 'ContentDark' : 'FixedPhotoPage'" :photoName="photoName"></component> -->
    </div>
    <div class="scroll-content" ref="scrollContent">
      <!-- <PhotoPageContent v-if="windowWidth >= 576"></PhotoPageContent> -->
      <!-- <Youtube :youtubeID="youtubeID('second')"></Youtube> -->
      <ContentLight></ContentLight>
      <FinalScene>
        <Youtube :youtubeID="youtubeID('third')" @fade-out="console.log('success')"></Youtube>
      </FinalScene>
      <div></div>
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
import FinalScene from './components/FinalScene.vue';
import resize from './mixins/resize';

export default {
  name: 'app',
  mixins: [resize],
  components: {
    Cover,
    OpeningLine,
    Youtube,
    FixedPhotoPage,
    PhotoPageContent,
    ContentDark,
    ContentLight,
    FinalScene,
  },
  data() {
    return {
      // windowHeight: document.documentElement.clientHeight,
      bodyClass: document.body.classList,
      root: document.documentElement,
      resizeTimer: null,
      scrollTimer: null,
      beforeWindowWidth: document.documentElement.clientWidth,
      // throttle touchpad mousewheel event
      canScroll: true,
      pageScrollY: 0,
      touchStartX: 0,
      touchStartY: 0,
      photoName: '',
      beforeScrollY: window.pageYOffset,
      // startScrollTime: new Date(),
    };
  },
  created() {
    // window.addEventListener('load', this.loadHandler);
    window.addEventListener('beforeunload', this.beforeunloadHandler);
    window.addEventListener('resize', this.resizeHandler);
    window.addEventListener('scroll', this.fixedPageMove);
  },
  computed: {
    // isFixedPage() {
    //   return this.isMobileSize ? 'ContentDark' : 'FixedPhotoPage';
    // },
    pageTransform() {
      return {
        transform: `translateY(${this.pageScrollY}px)`,
        // '-webkit-transform': `translateY(${this.pageScrollY}px)`,
      };
    },
  },
  methods: {
    // youtubeID(ordinalNum) {
    //   if (ordinalNum === 'first') return this.windowWidth < 576 ? '4Cyyr2brm7U' : 'w-jS7Bf90bY';
    //   else if (ordinalNum === 'second') return this.windowWidth < 576 ? 'xhKWsXskhRM' : 'iVpdcGvj32s';
    //   else if (ordinalNum === 'third') return this.windowWidth < 576 ? '6u2vkJCamD8' : 'aNwTvyITqBY';
    //   return false;
    // },
    youtubeID(ordinalNum) {
      switch (ordinalNum) {
        case 'first':
          return this.windowWidth < 576 ? '4Cyyr2brm7U' : 'w-jS7Bf90bY';
        case 'second':
          return this.windowWidth < 576 ? 'xhKWsXskhRM' : 'iVpdcGvj32s';
        case 'third':
          return this.windowWidth < 576 ? '6u2vkJCamD8' : 'aNwTvyITqBY';
        default:
          return false;
      }
    },
    // loadHandler() {
    //   if (this.windowWidth >= 576) {
    //     this.bodyClass.add('hidden');
    //   }
    // },
    // TODO avoid pageContent css transition
    // TODO change this.pageScrollY
    // fixedPageMove() {
    //   const afterScrollY = window.pageYOffset;
    //   const deltaScrollY = afterScrollY - this.beforeScrollY;
    //   const youtubeY = this.$refs.youtube.$el.offsetTop;
    //   const youtubeYForScrollDown = youtubeY - this.windowHeight;
    //   if ((deltaScrollY > 0 && this.pageScrollY === -this.windowHeight)
    //     || (deltaScrollY > 0 && window.pageYOffset <= youtubeYForScrollDown)
    //     || (deltaScrollY < 0 && this.pageScrollY === 0)) return;
    //   // this.$refs.pageContent.style.transitionProperty = 'none';
    //   if (deltaScrollY > 0 && window.pageYOffset >= youtubeYForScrollDown) {
    //     if (youtubeY - window.pageYOffset >= 50) {
    //       // this.pageScrollY = (this.windowHeight * 3) + (youtubeTop - window.pageYOffset);
    //       this.pageScrollY = -(window.pageYOffset - youtubeYForScrollDown);
    //     } else {
    //       this.pageScrollY = -this.windowHeight;
    //     }
    //   } else if (deltaScrollY < 0 && window.pageYOffset < youtubeY) {
    //     if (this.pageScrollY === 0) return;
    //     if (window.pageYOffset - youtubeYForScrollDown >= 50) {
    //       this.pageScrollY = -this.windowHeight + (youtubeY - window.pageYOffset);
    //     } else {
    //       this.pageScrollY = 0;
    //     }
    //   }
    //   this.beforeScrollY = afterScrollY;
    // },
    beforeunloadHandler() {
      window.scrollTo({
        top: 0,
        behavior: 'instant',
      });
    },
    // TODO dynamic set this.windowHeight
    // resizeHandler() {
    //   if ((this.beforeWindowWidth < 576 && this.windowWidth < 576) || (this.beforeWindowWidth >= 576 && this.windowWidth >= 576)) return;
    //   if (this.resizeTimer) clearTimeout(this.resizeTimer);
    //   this.resizeTimer = setTimeout(() => {
    //     if (this.beforeWindowWidth < 576 && this.windowWidth >= 576) {
    //       window.scrollTo({
    //         top: 0,
    //         behavior: 'instant',
    //       });
    //       this.root.className = '';
    //       this.bodyClass.remove('overflow-visible');
    //       this.pageScrollY = 0;
    //     } else if (this.beforeWindowWidth >= 576 && this.windowWidth < 576) {
    //       this.root.className += 'overflow-visible';
    //       this.bodyClass.add('overflow-visible');
    //       this.pageScrollY = 0;
    //     }
    //     this.beforeWindowWidth = this.windowWidth;
    //   }, 400);
    // },
    // pageTouchStart(evt) {
    //   if (this.isMobileSize || window.pageYOffset > 0 || !this.canScroll) return;
    //   evt.preventDefault();
    //   this.touchStartX = evt.touches[0].pageX;
    //   this.touchStartY = evt.touches[0].pageY;
    // },
    // pageTouchMove(evt) {
    //   if (this.isMobileSize || window.pageYOffset > 0 || !this.canScroll) return;
    //   evt.preventDefault();
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
    //     if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY < 0) {
    //       if (this.pageScrollY === -document.documentElement.clientHeight * 3) return;
    //       if (this.pageScrollY === -document.documentElement.clientHeight * 2) {
    //         this.$refs.scrollContent.style.transform = 'translateY(0vh)';
    //         this.root.className += 'overflow-visible';
    //         this.bodyClass.add('overflow-visible');
    //       }
    //       this.pageScrollY -= document.documentElement.clientHeight;
    //     } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 0) {
    //       if (this.pageScrollY === -document.documentElement.clientHeight * 3) {
    //         this.$refs.scrollContent.style.transform = 'translateY(100vh)';
    //         this.root.className += 'overflow-visible';
    //         this.bodyClass.remove('overflow-visible');
    //       }
    //       if (this.pageScrollY === 0) return;
    //       this.pageScrollY += document.documentElement.clientHeight;
    //     }
    //   }, 200);
    // },
    // pageScroll(evt) {
    //   if (this.isMobileSize || window.pageYOffset > 0 || !this.canScroll) return;
    //   evt.preventDefault();
    //   if (this.scrollTimer) {
    //     clearTimeout(this.scrollTimer);
    //     this.canScroll = false;
    //   }
    //   this.scrollTimer = setTimeout(() => {
    //     setTimeout(() => {
    //       this.canScroll = true;
    //     }, 1000);
    //     const scrollDirection = -evt.wheelDelta || evt.detail;
    //     if (scrollDirection > 0) {
    //       if (this.pageScrollY === -document.documentElement.clientHeight * 3) return;
    //       if (this.pageScrollY === -document.documentElement.clientHeight * 2) {
    //         this.$refs.scrollContent.style.transform = 'translateY(0vh)';
    //         this.root.className += 'overflow-visible';
    //         this.bodyClass.add('overflow-visible');
    //       }
    //       this.pageScrollY -= document.documentElement.clientHeight;
    //     } else {
    //       if (this.pageScrollY === -document.documentElement.clientHeight * 3) {
    //         this.$refs.scrollContent.style.transform = 'translateY(100vh)';
    //         this.root.className = '';
    //         this.bodyClass.remove('overflow-visible');
    //       }
    //       if (this.pageScrollY === 0) return;
    //       this.pageScrollY += document.documentElement.clientHeight;
    //     }
    //   }, 200);
    // },
  },
};
</script>

<style lang="scss">
.page-content {
  width: 100%;
  background-color: #000;
  @media screen and (min-width: 576px) {
    position: fixed;
    top: 0;
    // transition: transform 1s；
  }
}
.scroll-content {
  @media screen and (min-width: 576px) {
    // transform: translateY(100vh);
    transition: transform 1s;
  }
}
// .youtube-third {
//   opacity: 0;
// }
</style>
