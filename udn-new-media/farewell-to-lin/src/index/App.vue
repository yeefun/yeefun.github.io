<template>
  <!-- <div id="app" class="app" @wheel="!$root.isMobileSize && pageScroll($event)" @touchstart="!$root.isMobileSize && pageTouchStart($event)" @touchmove="!$root.isMobileSize && pageTouchMove($event)"> -->
  <div id="app" class="app">
    <ProgressBar></ProgressBar>
    <transition name="cover-end-fade">
      <HeadBar :isHeadBarLight="isHeadBarLight" v-if="isHeadBarShow"></HeadBar>
    </transition>
    <!-- <div class="page-content" :style="{ height: `${$root.windowHeight}px`, transform: `translateY(${pageScrollY}px)` }"> -->
    <!-- <div class="page-content" :style="{ height: `${$root.windowHeight}px`, transform: `translateY(${pageScrollY}px)` }"> -->
    <!-- <Cover :style="`height: ${$root.windowHeight}px`"></Cover> -->
    <Cover></Cover>
    <!-- </div> -->
    <OpeningLine></OpeningLine>
    <Youtube :youtubeId="youtubeId('first')" youtubeRef="first-youtube" ref="firstYoutube"></Youtube>
    <div class="scroll-content">
      <ContentDark v-if="$root.isMobileSize"></ContentDark>
      <FixedPhotoPage v-if="!$root.isMobileSize" :photoName="photoName" ref="fixedPhotoPage" :hidden="hiddenMaskForIE"></FixedPhotoPage>
      <PhotoPageContent class="photo-page-content" v-if="!$root.isMobileSize"></PhotoPageContent>
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
            <section class="logo">
              <a href="https://udn.com/news/index" target="_blank">
                <img src="../assets/Logo/blackUdnEveNews.png" alt="">
              </a>
              <a href="https://udn.com/news/index" target="_blank">
                <img src="../assets/Logo/blackUdnNews.png" alt="">
              </a>
              <a href="https://udn.com/upf/newmedia/ubrandstudio/" target="_blank">
                <img class="mb-0" src="../assets/Logo/blackNewMidia.png" alt="">
              </a>
            </section>
            <Editor></Editor>
          </div>
          <Feedback v-if="$root.windowWidth < 768"></Feedback>
          <Relate></Relate>
          <Feedback v-if="$root.windowWidth >= 768"></Feedback>
          <FbComment></FbComment>
          <Footer></Footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import smoothscroll from 'smoothscroll-polyfill';
import { detectPlatform } from 'udn-newmedia-utils';

import ProgressBar from '../components/ProgressBar.vue';
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
import Editor from '../components/Editor.vue';
import Relate from './components/Relate.vue';
import Feedback from '../components/Feedback.vue';
import FbComment from './components/FbComment.vue';
import Footer from '../components/Footer.vue';

smoothscroll.polyfill();

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
    Feedback,
  },
  data() {
    return {
      // bodyClass: document.body.classList,
      // resizeTimer: null,
      // scrollTimer: null,
      // beforeWindowWidth: document.documentElement.clientWidth,
      // canScroll: true,
      // canScroll: false,
      // pageScrollY: 0,
      // touchStartX: 0,
      // touchStartY: 0,
      photoName: 'legacy',
      // beforeScrollY: window.pageYOffset,
      isLastContentShow: false,
      // isHeadBarShow: true,
      isHeadBarShow: false,
      isHeadBarLight: false,
      firstYoutube: null,
      secondYoutube: null,
      thirdYoutube: null,
      canThirdYoutubePlay: false,
      isFirstYoutubePlay: false,
      isSecondYoutubePlay: false,
      isThirdYoutubePlay: false,
      isIOS: !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
      hiddenMaskForIE: false,
    };
  },
  created() {
    window.addEventListener('unload', this.unloadHandler);
    window.addEventListener('scroll', this.headBarChangeColor);
    if (!this.$root.isMobileSize) {
      window.addEventListener('scroll', this.photoPageControl);
    }
  },
  mounted() {
    // if (window.onYouTubeIframeAPIReady) {
    window.onYouTubeIframeAPIReady = () => {
      this.firstYoutube = new YT.Player('first-youtube', { // eslint-disable-line
        events: {
          onReady: () => {
            if (!this.isIOS) this.firstYoutube.mute();
          },
          onStateChange: (evt) => {
            if (evt.data === 2 && !this.isIOS) window.removeEventListener('scroll', this.firstYoutubeControl);
          },
        },
      });
      this.secondYoutube = new YT.Player('second-youtube', { // eslint-disable-line
        events: {
          onReady: () => {
            if (!this.isIOS) this.secondYoutube.mute();
          },
          onStateChange: (evt) => {
            if (evt.data === 2 && !this.isIOS) window.removeEventListener('scroll', this.secondYoutubeControl);
          },
        },
      });
      this.thirdYoutube = new YT.Player('third-youtube', { // eslint-disable-line
        events: {
          onReady: () => {
            if (!this.isIOS) this.thirdYoutube.mute();
          },
          onStateChange: (evt) => {
            if (evt.data === 2 && !this.isIOS) window.removeEventListener('scroll', this.thirdYoutubeControl);
          },
        },
      });
      if (!this.isIOS) {
        window.addEventListener('scroll', this.firstYoutubeControl);
        window.addEventListener('scroll', this.secondYoutubeControl);
        window.addEventListener('scroll', this.thirdYoutubeControl);
      }
    };
    // }
  },
  methods: {
    photoPageControl() {
      // const afterScrollY = this.$root.cacheWindow.pageYOffset;
      // const deltaScrollY = afterScrollY - this.beforeScrollY;
      // const photoPage = this.$refs.fixedPhotoPage.$el;
      // if ((deltaScrollY > 0 && photoPage.style.position === 'fixed') || (deltaScrollY < 0 && photoPage.style.position === 'absolute')) {
      //   this.beforeScrollY = afterScrollY;
      //   return;
      // }
      const photoPageStyle = this.$refs.fixedPhotoPage.$el.style;
      const firstYoutubeY = this.$refs.firstYoutube.$el.getBoundingClientRect().bottom;
      if (firstYoutubeY <= 0) {
        photoPageStyle.position = 'fixed';
      } else {
        photoPageStyle.position = 'absolute';
      }
    },
    headBarChangeColor() {
      if (this.$refs.lightContent.getBoundingClientRect().top < 0) {
        this.isHeadBarLight = true;
        this.hiddenMaskForIE = true;
      } else {
        this.isHeadBarLight = false;
        this.hiddenMaskForIE = false;
      }
    },
    // pageTouchStart(evt) {
    //   if (this.$root.cacheWindow.pageYOffset > 0 || !this.canScroll) return;
    //   this.touchStartX = evt.touches[0].pageX;
    //   this.touchStartY = evt.touches[0].pageY;
    // },
    // pageTouchMove(evt) {
    //   if (this.$root.cacheWindow.pageYOffset > 0 || !this.canScroll) return;

    //   const moveEndX = evt.changedTouches[0].pageX;
    //   const moveEndY = evt.changedTouches[0].pageY;
    //   const deltaX = moveEndX - this.touchStartX;
    //   const deltaY = moveEndY - this.touchStartY;
    //   const WH = this.$root.windowHeight;

    //   if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY < 0) {
    //     if (this.pageScrollY === -WH) return;
    //     this.$refs.openingLine.$el.style.transform = 'translateY(0vh)';
    //     this.pageScrollY -= WH;
    //     setTimeout(() => {
    //       this.$root.cacheHTML.className = 'of-v';
    //       this.bodyClass.add('of-v');
    //     }, 1000);
    //   } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 0) {
    //     if (this.pageScrollY === 0) return;
    //     this.$refs.openingLine.$el.style.transform = 'translateY(100vh)';
    //     this.pageScrollY += WH;
    //     this.$root.cacheHTML.className = '';
    //     this.bodyClass.remove('of-v');
    //   }
    // },
    // pageScroll(evt) {
    //   if (this.$root.cacheWindow.pageYOffset > 0 || !this.canScroll) return;
    //   const scrollDirection = evt.deltaY;
    //   const WH = this.$root.windowHeight;

    //   if (scrollDirection > 0) {
    //     if (this.pageScrollY === -WH) return;
    //     this.$refs.openingLine.$el.style.transform = 'translateY(0vh)';
    //     this.pageScrollY -= WH;
    //     setTimeout(() => {
    //       this.$root.cacheHTML.className = 'of-v';
    //       this.bodyClass.add('of-v');
    //     }, 1000);
    //   } else {
    //     if (this.pageScrollY === 0) return;
    //     this.$refs.openingLine.$el.style.transform = 'translateY(100vh)';
    //     this.pageScrollY += WH;
    //     this.$root.cacheHTML.className = '';
    //     this.bodyClass.remove('of-v');
    //   }
    // },
    youtubeId(ordinalNum) {
      switch (ordinalNum) {
        case 'first':
          return this.$root.windowWidth < 576 ? 'ws1aS1SASdw' : 'Tg5a_R3rr6U';
        case 'second':
          return this.$root.windowWidth < 576 ? 'xGrKH4rkxxc' : 'QhmOfqHJQ64';
        case 'third':
          return this.$root.windowWidth < 576 ? 'j3QNQIcTuJg' : 'Nfi2mssgFqQ';
        default:
          return false;
      }
    },
    youtubeControlFn(evt, num, isNum, canPlay = true) {
      if (!canPlay) return;

      const youtubeY = this.$refs[`${num}Youtube`].$el.getBoundingClientRect().top;
      const WH = this.$root.windowHeight;

      if (!this[`is${isNum}YoutubePlay`] && youtubeY < 0) {
        this[`is${isNum}YoutubePlay`] = true;
        this[`${num}Youtube`].playVideo();
      } else if (this[`is${isNum}YoutubePlay`] && ((youtubeY + (WH * 0.75) < 0) || (youtubeY - (WH * 0.75) > 0))) {
        this[`${num}Youtube`].pauseVideo();
      }
    },
    firstYoutubeControl(evt) {
      this.youtubeControlFn(evt, 'first', 'First');
    },
    secondYoutubeControl(evt) {
      this.youtubeControlFn(evt, 'second', 'Second');
    },
    thirdYoutubeControl(evt) {
      this.youtubeControlFn(evt, 'third', 'Third', this.canThirdYoutubePlay);
    },
    unloadHandler() {
      const firstYoutubeWatchTime = Math.floor(this.firstYoutube.getCurrentTime());
      const secondYoutubeWatchTime = Math.floor(this.secondYoutube.getCurrentTime());
      const thirdYoutubeWatchTime = Math.floor(this.thirdYoutube.getCurrentTime());
      window.ga('send', {
        hitType: 'event',
        eventCategory: 'video',
        eventAction: 'play',
        eventLabel: `[${detectPlatform()}] [${document.querySelector('title').innerHTML}] [林懷民與台灣的對話] [已觀看${firstYoutubeWatchTime}秒]`,
      });
      window.ga('send', {
        hitType: 'event',
        eventCategory: 'video',
        eventAction: 'play',
        eventLabel: `[${detectPlatform()}] [${document.querySelector('title').innerHTML}] [林懷民真心話大告白] [已觀看${secondYoutubeWatchTime}秒]`,
      });
      window.ga('send', {
        hitType: 'event',
        eventCategory: 'video',
        eventAction: 'play',
        eventLabel: `[${detectPlatform()}] [${document.querySelector('title').innerHTML}] [退休前給台灣的一段話] [已觀看${thirdYoutubeWatchTime}秒]`,
      });
      // this.$root.cacheWindow.scroll({ top: 0 });
    },
  },
};
</script>

<style lang="scss">
@import 'reset-css';
@import './css/common.scss';
@import './css/vue-transition.scss';
@import './css/content.scss';

.app {
  background-color: #000;
}

// .page-content {
//   height: 100%;
//   width: 100%;
//   background-color: #000;
//   z-index: 9;
//   @media screen and (min-width: 576px) {
//     // height: 100%;
//     // position: fixed;
//     position: absolute;
//     top: 0;
//     transition: transform 1s;
//   }
// }

// .opening-line {
//   @media screen and (min-width: 576px) {
//     transform: translateY(100vh);
//     transition: transform 1s;
//   }
// }

.scroll-content {
  // z-index: 49;
  @media screen and (min-width: 576px) {
    position: relative;
  }
}

.light-content {
  background-color: #fff;
  position: relative;
}

.last-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 82px;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    padding-top: 270px;
    padding-left: 24px;
    padding-right: 24px;
  }
  &__left {
    min-width: 201.62px;
    margin-left: auto;
    margin-right: auto;
    padding-right: 24px;
    padding-left: 24px;
    flex-shrink: 0;
    @media screen and (min-width: 768px) {
      width: 50%;
      padding-right: 0;
      padding-left: 0;
    }
  }
  &__share {
    margin-bottom: 48px;
  }
}

.logo {
  display: flex;
  flex-direction: column;
  & img {
    width: 138px;
    height: auto;
    margin-bottom: 12px;
  }
}
</style>
