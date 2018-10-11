<template>
<!-- FIXME use wheel event -->
  <div id="app" @mousewheel="pageScroll" @DOMMouseScroll="pageScroll" @touchstart="pageTouchStart" @touchmove="pageTouchMove">
  <!-- <div id="app"> -->
    <ProgressBar></ProgressBar>
    <HeadBar :isHeadBarLight="isHeadBarLight"></HeadBar>
    <div class="page-content" :style="pageTransform" ref="pageContent">
    <!-- <div class="page-content"> -->
      <Cover></Cover>
      <OpeningLine></OpeningLine>
      <Youtube :youtubeId="youtubeId('first')" youtubeRef="first-youtube"></Youtube>
      <component :is="$root.isMobileSize ? 'ContentDark' : 'FixedPhotoPage'" :photoName="photoName"></component>
    </div>
    <div class="scroll-content" ref="scrollContent">
      <PhotoPageContent v-if="!$root.isMobileSize"></PhotoPageContent>
      <Youtube :youtubeId="youtubeId('second')" youtubeRef="second-youtube"></Youtube>
      <div class="scroll-content__light" ref="contentLight">
        <ContentLight></ContentLight>
        <FinalScene>
          <Youtube :youtubeId="youtubeId('third')"></Youtube>
        </FinalScene>
        <div class="last-content" v-show="isLastContentShow">
          <div class="last-content__left">
            <div class="last-content__share">
              <Share></Share>
            </div>
            <Editor></Editor>
          </div>
          <Relate></Relate>
          <FbComment></FbComment>
          <Footer></Footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from './components/ProgressBar.vue';
import HeadBar from './components/HeadBar.vue';
import Cover from './components/Cover.vue';
import Youtube from './components/Youtube.vue';
import OpeningLine from './components/OpeningLine.vue';
import Share from './components/Share.vue';
import FixedPhotoPage from './components/FixedPhotoPage.vue';
import PhotoPageContent from './components/PhotoPageContent.vue';
import ContentDark from './components/ContentDark.vue';
import ContentLight from './components/ContentLight.vue';
import FinalScene from './components/FinalScene.vue';
import Editor from './components/Editor.vue';
import Relate from './components/Relate.vue';
import FbComment from './components/FbComment.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    ProgressBar,
    Cover,
    OpeningLine,
    Share,
    Youtube,
    FixedPhotoPage,
    PhotoPageContent,
    ContentDark,
    ContentLight,
    FinalScene,
    HeadBar,
    Editor,
    Relate,
    FbComment,
    Footer,
  },
  data() {
    return {
      bodyClass: document.body.classList,
      resizeTimer: null,
      scrollTimer: null,
      beforeWindowWidth: document.documentElement.clientWidth,
      // throttle touchpad mousewheel event
      canScroll: true,
      pageScrollY: 0,
      touchStartX: 0,
      touchStartY: 0,
      photoName: null,
      beforeScrollY: window.pageYOffset,
      isLastContentShow: false,
      isHeadBarLight: false,
    };
  },
  created() {
    window.addEventListener('beforeunload', this.beforeunloadHandler);
    window.addEventListener('resize', this.resizeHandler);
    window.addEventListener('scroll', this.fixedPageMove);
    window.addEventListener('scroll', this.headBarChangeColor);
  },
  computed: {
    pageTransform() {
      return {
        transform: `translateY(${this.pageScrollY}px)`,
        // '-webkit-transform': `translateY(${this.pageScrollY}px)`,
      };
    },
  },
  methods: {
    headBarChangeColor() {
      if (this.$root.cacheWindow.pageYOffset > this.$refs.contentLight.offsetTop) {
        this.isHeadBarLight = true;
      } else {
        this.isHeadBarLight = false;
      }
    },
    beforeunloadHandler() {
      this.$root.cacheWindow.scrollTo({
        top: 0,
        behavior: 'instant',
      });
    },
    fixedPageMove() {
      if (this.$root.isMobileSize) return;
      if (this.beforeScrollY > 8) this.$refs.pageContent.style.transitionProperty = 'none';
      const afterScrollY = this.$root.cacheWindow.pageYOffset;
      const deltaScrollY = afterScrollY - this.beforeScrollY;
      const youtubeY = this.$refs.secondYoutube.$el.offsetTop;
      const youtubeYLess = youtubeY - this.$root.windowHeight;
      if ((deltaScrollY > 0 && this.pageScrollY === -this.$root.windowHeight * 4)
        || (deltaScrollY > 0 && this.$root.cacheWindow.pageYOffset <= youtubeYLess)
        || (deltaScrollY < 0 && this.pageScrollY === -this.$root.windowHeight * 3)) return;
      // this.$refs.pageContent.style.transitionProperty = 'none';
      if (deltaScrollY > 0 && this.$root.cacheWindow.pageYOffset >= youtubeYLess) {
        if (youtubeY - this.$root.cacheWindow.pageYOffset >= 0) {
          this.pageScrollY = -((this.$root.windowHeight * 3) + (this.$root.cacheWindow.pageYOffset - youtubeYLess));
          // this.pageScrollY = -(this.$root.cacheWindow.pageYOffset - youtubeYLess);
        } else {
          // this.pageScrollY = -this.$root.windowHeight;
          this.pageScrollY = -this.$root.windowHeight * 4;
        }
      } else if (deltaScrollY < 0 && this.$root.cacheWindow.pageYOffset < youtubeY) {
        if (this.$root.cacheWindow.pageYOffset - youtubeYLess >= 0) {
          // this.pageScrollY = -this.$root.windowHeight + (youtubeY - this.$root.cacheWindow.pageYOffset);
          this.pageScrollY = -((this.$root.windowHeight * 4) - (youtubeY - this.$root.cacheWindow.pageYOffset));
        } else {
          // this.pageScrollY = 0;
          this.pageScrollY = -this.$root.windowHeight * 3;
        }
      }
      this.beforeScrollY = afterScrollY;
    },
    // TODO dynamic set this.$root.windowWidth
    resizeHandler() {
      if ((this.beforeWindowWidth < 576 && this.$root.windowWidth < 576) || (this.beforeWindowWidth >= 576 && this.$root.windowWidth >= 576)) return;
      if (this.resizeTimer) clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        if (this.beforeWindowWidth < 576 && this.$root.windowWidth >= 576) {
          this.$root.cacheWindow.scrollTo({
            top: 0,
            behavior: 'instant',
          });
          this.$root.cacheHTML.className = '';
          this.bodyClass.remove('overflow-visible');
          this.pageScrollY = 0;
        } else if (this.beforeWindowWidth >= 576 && this.$root.windowWidth < 576) {
          this.$root.cacheHTML.className += 'overflow-visible';
          this.bodyClass.add('overflow-visible');
          this.pageScrollY = 0;
        }
        this.beforeWindowWidth = this.$root.windowWidth;
      }, 400);
    },
    pageTouchStart(evt) {
      if (this.$root.isMobileSize || this.$root.cacheWindow.pageYOffset > 0 || !this.canScroll) return;
      evt.preventDefault();
      this.touchStartX = evt.touches[0].pageX;
      this.touchStartY = evt.touches[0].pageY;
    },
    // TODO set reasonable setTimeout for canScroll
    pageTouchMove(evt) {
      if (this.$root.isMobileSize || this.$root.cacheWindow.pageYOffset > 0 || !this.canScroll) return;
      evt.preventDefault();
      if (this.scrollTimer) {
        clearTimeout(this.scrollTimer);
        this.canScroll = false;
      }
      this.scrollTimer = setTimeout(() => {
        setTimeout(() => {
          this.canScroll = true;
        }, 600);
        const moveEndX = evt.changedTouches[0].pageX;
        const moveEndY = evt.changedTouches[0].pageY;
        const deltaX = moveEndX - this.touchStartX;
        const deltaY = moveEndY - this.touchStartY;
        if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY < 0) {
          if (this.pageScrollY === -this.$root.windowHeight * 3) return;
          if (this.pageScrollY === -this.$root.windowHeight * 2) {
            this.$refs.scrollContent.style.transform = 'translateY(0vh)';
            this.$root.cacheHTML.className += 'overflow-visible';
            this.bodyClass.add('overflow-visible');
          }
          this.pageScrollY -= this.$root.windowHeight;
        } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 0) {
          if (this.pageScrollY === -this.$root.windowHeight * 3) {
            this.$refs.scrollContent.style.transform = 'translateY(100vh)';
            this.$root.cacheHTML.className += 'overflow-visible';
            this.bodyClass.remove('overflow-visible');
          }
          if (this.pageScrollY === 0) return;
          this.pageScrollY += this.$root.windowHeight;
        }
      }, 200);
    },
    pageScroll(evt) {
      if (this.$root.isMobileSize || this.$root.cacheWindow.pageYOffset > 0 || !this.canScroll) return;
      evt.preventDefault();
      if (this.scrollTimer) {
        clearTimeout(this.scrollTimer);
        this.canScroll = false;
      }
      this.scrollTimer = setTimeout(() => {
        setTimeout(() => {
          this.canScroll = true;
        }, 600);
        const scrollDirection = -evt.wheelDelta || evt.detail;
        if (scrollDirection > 0) {
          if (this.pageScrollY === -this.$root.windowHeight * 3) return;
          if (this.pageScrollY === -this.$root.windowHeight * 2) {
            this.$refs.scrollContent.style.transform = 'translateY(0vh)';
            this.$root.cacheHTML.className += 'overflow-visible';
            this.bodyClass.add('overflow-visible');
          }
          this.pageScrollY -= this.$root.windowHeight;
          // this.pageScrollY -= this.$root.windowHeight;
        } else {
          if (this.pageScrollY === 0) return;
          if (this.pageScrollY === -this.$root.windowHeight * 3) {
            this.$refs.pageContent.style.transitionProperty = 'transform';
            this.$refs.scrollContent.style.transform = 'translateY(100vh)';
            this.$root.cacheHTML.className = '';
            this.bodyClass.remove('overflow-visible');
          }
          this.pageScrollY += this.$root.windowHeight;
        }
      }, 200);
    },
    youtubeId(ordinalNum) {
      switch (ordinalNum) {
        case 'first':
          return this.$root.windowWidth < 576 ? '4Cyyr2brm7U' : 'w-jS7Bf90bY';
        case 'second':
          return this.$root.windowWidth < 576 ? 'xhKWsXskhRM' : 'iVpdcGvj32s';
        case 'third':
          return this.$root.windowWidth < 576 ? '6u2vkJCamD8' : 'aNwTvyITqBY';
        default:
          return false;
      }
    },
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
    transition: transform 1s;
  }
}
.scroll-content {
  // background-color: #fff;
  @media screen and (min-width: 576px) {
    transform: translateY(100vh);
    transition: transform 1s;
  }
  &__light {
    background-color: #fff;
    // padding-right: 30px;
    // padding-left: 30px;
    // TODO do youtube need full screen? if yes, remove "max-width: 960px;" and add it in other places
    // max-width: 960px;
    // margin-right: auto;
    // margin-left: auto;
  }
}
.last-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 132px;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  // ASK break point 768 or 576?
  @media screen and (min-width: 768px) {
    padding-top: 270px;
  }
  &__left {
    // width: 100%;
    min-width: 201.62px;
    margin-left: auto;
    margin-right: auto;
    flex-shrink: 0;
    @media screen and (min-width: 768px) {
      width: 50%;
    }
  }
  &__share {
    margin-bottom: 48px;
  }
}
// .youtube-third {
//   opacity: 0;
// }
</style>
