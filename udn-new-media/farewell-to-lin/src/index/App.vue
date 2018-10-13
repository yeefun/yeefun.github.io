<template>
<!-- FIXME use wheel event -->
  <!-- <div id="app" @mousewheel="pageScroll" @DOMMouseScroll="pageScroll" @touchstart="pageTouchStart" @touchmove="pageTouchMove"> -->
  <div id="app" class="app" @wheel="pageScroll" @touchstart="pageTouchStart" @touchmove="pageTouchMove">
  <!-- <div id="app"> -->
    <ProgressBar></ProgressBar>
    <transition name="cover-end-fade">
      <HeadBar :isHeadBarLight="isHeadBarLight" v-if="isHeadBarShow"></HeadBar>
    </transition>
    <div class="page-content" :style="pageTransform" ref="pageContent">
    <!-- <div class="page-content"> -->
      <Cover></Cover>
      <OpeningLine></OpeningLine>
      <Youtube :youtubeId="youtubeId('first')" youtubeRef="first-youtube"></Youtube>
      <component :is="$root.isMobileSize ? 'ContentDark' : 'FixedPhotoPage'" :photoName="photoName"></component>
    </div>
    <!-- <div class="scroll-content" ref="scrollContent"> -->
    <div>
      <PhotoPageContent class="photo-page-content" v-if="!$root.isMobileSize" ref="photoPageContent"></PhotoPageContent>
      <!-- <div ref="secondYoutube">
        <Youtube :youtubeId="youtubeId('second')" youtubeRef="second-youtube" ref="secondYoutube"></Youtube>
      </div> -->
      <Youtube :youtubeId="youtubeId('second')" youtubeRef="second-youtube" ref="secondYoutube"></Youtube>
      <div class="light-content" ref="lightContent">
        <ContentLight></ContentLight>
        <FinalScene>
          <Youtube :youtubeId="youtubeId('third')" youtubeRef="third-youtube" ref="thirdYoutube"></Youtube>
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
import YouTubePlayer from 'youtube-player';

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
      // throttle touchpad mousewheel event & opening
      canScroll: true,
      pageScrollY: 0,
      touchStartX: 0,
      touchStartY: 0,
      photoName: 'legacy',
      beforeScrollY: window.pageYOffset,
      isLastContentShow: false,
      isHeadBarShow: false,
      isHeadBarLight: false,
      firstYoutube: null,
      secondYoutube: null,
      thirdYoutube: null,
      isSecondYoutubePlay: false,
      canThirdYoutubePlay: false,
      isThirdYoutubePlay: true,
      // isAnchorScroll: false,
    };
  },
  created() {
    window.addEventListener('beforeunload', this.beforeunloadHandler);
    window.addEventListener('resize', this.resizeHandler);
    window.addEventListener('scroll', this.fixedPageMove);
    window.addEventListener('scroll', this.headBarChangeColor);
    window.addEventListener('scroll', this.thirdYoutubeControl);
  },
  mounted() {
    this.firstYoutube = YouTubePlayer('first-youtube');
    this.secondYoutube = YouTubePlayer('second-youtube');
    this.thirdYoutube = YouTubePlayer('third-youtube');
    this.firstYoutube.mute();
    this.secondYoutube.mute();
    this.thirdYoutube.mute();
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
      if (this.$root.cacheWindow.pageYOffset > this.$refs.lightContent.offsetTop) {
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
    // FIXME IE don't support 'youtube-player'
    fixedPageMove() {
      const youtubeY = this.$refs.secondYoutube.$el.offsetTop;
      const afterScrollY = this.$root.cacheWindow.pageYOffset;
      if (!this.$root.isMobileSize) {
        if (this.beforeScrollY > 8) this.$refs.pageContent.style.transitionProperty = 'none';

        const deltaScrollY = afterScrollY - this.beforeScrollY;
        const youtubeYLess = youtubeY - this.$root.windowHeight;

        if ((deltaScrollY > 0 && afterScrollY > this.$refs.lightContent.offsetTop)
          || (deltaScrollY > 0 && afterScrollY <= youtubeYLess)
          || (deltaScrollY < 0 && this.pageScrollY === -this.$root.windowHeight * 3)) return;

        if (deltaScrollY > 0 && afterScrollY >= youtubeYLess) {
          if (youtubeY - afterScrollY >= 0) {
            this.pageScrollY = -((this.$root.windowHeight * 3) + (afterScrollY - youtubeYLess));
          } else {
            this.pageScrollY = -this.$root.windowHeight * 4;
          }
        } else if (deltaScrollY < 0 && afterScrollY < youtubeY) {
          if (afterScrollY - youtubeYLess >= 0) {
            this.pageScrollY = -((this.$root.windowHeight * 4) - (youtubeY - afterScrollY));
          } else {
            this.pageScrollY = -this.$root.windowHeight * 3;
          }
        }
        this.beforeScrollY = afterScrollY;
      }

      // second youtube
      if (!this.secondYoutube) return;
      if (!this.isSecondYoutubePlay && afterScrollY > youtubeY - (this.$root.windowHeight / 2) && afterScrollY < youtubeY + (this.$root.windowHeight / 2)) {
        this.isSecondYoutubePlay = true;
        this.secondYoutube.playVideo();
      } else if (this.isSecondYoutubePlay && (afterScrollY > youtubeY + (this.$root.windowHeight / 2) || afterScrollY < youtubeY - (this.$root.windowHeight / 2))) {
        this.isSecondYoutubePlay = false;
        this.secondYoutube.pauseVideo();
      }
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
          this.$root.cacheHTML.className = 'overflow-visible';
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
            this.$refs.photoPageContent.$el.style.transform = 'translateY(0vh)';
            this.$root.cacheHTML.className = 'overflow-visible';
            this.bodyClass.add('overflow-visible');
          }
          this.pageScrollY -= this.$root.windowHeight;
        } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 0) {
          if (this.pageScrollY === 0) return;
          if (this.pageScrollY === -this.$root.windowHeight * 3) {
            this.$refs.photoPageContent.$el.style.transform = 'translateY(100vh)';
            this.$root.cacheHTML.className = '';
            this.bodyClass.remove('overflow-visible');
          }
          this.pageScrollY += this.$root.windowHeight;
        }
      }, 200);
    },
    // FIXME IE don't support 'youtube-player'
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
        // const scrollDirection = -evt.wheelDelta || evt.detail;
        const scrollDirection = evt.deltaY;
        if (scrollDirection > 0) {
          if (this.pageScrollY === -this.$root.windowHeight * 3) return;
          if (this.pageScrollY === -this.$root.windowHeight * 2) {
            this.$refs.photoPageContent.$el.style.transform = 'translateY(0vh)';
            this.$root.cacheHTML.className = 'overflow-visible';
            this.bodyClass.add('overflow-visible');
          }
          if (this.firstYoutube) {
            if (this.pageScrollY === -this.$root.windowHeight) this.firstYoutube.playVideo();
          }
          this.pageScrollY -= this.$root.windowHeight;
        } else {
          if (this.pageScrollY === 0) return;
          if (this.pageScrollY === -this.$root.windowHeight * 3) {
            this.$refs.pageContent.style.transitionProperty = 'transform';
            this.$refs.photoPageContent.$el.style.transform = 'translateY(100vh)';
            this.$root.cacheHTML.className = '';
            this.bodyClass.remove('overflow-visible');

            // first-youtube
            if (this.firstYoutube) {
              this.firstYoutube.playVideo();
            }
          }
          this.pageScrollY += this.$root.windowHeight;
        }
        if (this.firstYoutube) {
          if (this.pageScrollY === -this.$root.windowHeight * 2) this.firstYoutube.pauseVideo();
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
    // FIXME IE don't support 'youtube-player'
    thirdYoutubeControl(evt) {
      if (!this.thirdYoutube) return;
      if (!this.canThirdYoutubePlay) return;
      evt.preventDefault();
      const scrollY = this.$root.cacheWindow.pageYOffset;
      const youtubeY = this.$refs.thirdYoutube.$el.getBoundingClientRect().top + scrollY;

      if (!this.isThirdYoutubePlay && scrollY > youtubeY - (this.$root.windowHeight / 2) && scrollY < youtubeY + (this.$root.windowHeight / 2)) {
        this.isThirdYoutubePlay = true;
        this.thirdYoutube.playVideo();
      } else if (this.isThirdYoutubePlay && (scrollY > youtubeY + (this.$root.windowHeight / 2) || scrollY < youtubeY - (this.$root.windowHeight / 2))) {
        this.isThirdYoutubePlay = false;
        this.thirdYoutube.pauseVideo();
      }
    },
  },
};
</script>

<style lang="scss">
@import './css/vue-transition.scss';

.app {
  background-color: #000;
}

.page-content {
  width: 100%;
  background-color: #000;
  @media screen and (min-width: 576px) {
    position: fixed;
    top: 0;
    transition: transform 1s;
  }
}

.light-content {
  background-color: #fff;
  // TODO do youtube need full screen? if yes, remove "max-width: 960px;" and add it in other places
  // max-width: 960px;
  // margin-right: auto;
  // margin-left: auto;
}

.photo-page-content {
  @media screen and (min-width: 576px) {
    transform: translateY(100vh);
    transition: transform 1s;
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
    padding-left: 24px;
    padding-right: 24px;
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
