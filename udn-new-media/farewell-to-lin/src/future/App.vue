<template>
  <!-- <div id="app" @wheel="!$root.isMobileSize && pageScroll($event)" @touchstart="!$root.isMobileSize && pageTouchStart($event)" @touchmove="!$root.isMobileSize && pageTouchMove($event)"> -->
  <div id="app">
    <ProgressBar></ProgressBar>
    <HeadBar :isHeadBarLight="isHeadBarLight"></HeadBar>
    <!-- <div class="page-content" :style="{ height: `${$root.windowHeight}px`, transform: `translateY(${pageScrollY}px)` }"> -->
    <Cover :style="`height: ${$root.windowHeight}px`"></Cover>
    <!-- </div> -->
    <OpeningLine></OpeningLine>
    <Youtube ref="youtube"></Youtube>
    <ContentLight ref="contentLight"></ContentLight>
    <div class="last-content">
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
</template>

<script>
import smoothscroll from 'smoothscroll-polyfill';
import { detectPlatform } from 'udn-newmedia-utils';

import ProgressBar from '../components/ProgressBar.vue';
import HeadBar from './components/HeadBar.vue';
import Cover from './components/Cover.vue';
import OpeningLine from './components/OpeningLine.vue';
import Youtube from './components/Youtube.vue';
import ContentLight from './components/ContentLight.vue';
import Share from './components/Share.vue';
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
    HeadBar,
    Cover,
    OpeningLine,
    Youtube,
    ContentLight,
    Share,
    Editor,
    Relate,
    Feedback,
    FbComment,
    Footer,
  },
  data() {
    return {
      // bodyClass: document.body.classList,
      isHeadBarLight: false,
      // canScroll: true,
      // pageScrollY: 0,
      youtube: null,
      isYoutubePlay: false,
      isIOS: !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
      // resizeTimer: null,
    };
  },
  created() {
    window.addEventListener('unload', this.unloadHandler);
    window.addEventListener('scroll', this.headBarChangeColor);
  },
  mounted() {
    window.onYouTubeIframeAPIReady = () => {
      this.youtube = new YT.Player('youtube', { // eslint-disable-line
        events: {
          onReady: () => {
            if (!this.isIOS) this.youtube.mute();
          },
          onStateChange: (evt) => {
            if (evt.data === 2 && !this.isIOS) window.removeEventListener('scroll', this.youtubeControl);
          },
        },
      });
      if (!this.isIOS) window.addEventListener('scroll', this.youtubeControl);
    };
  },
  methods: {
    unloadHandler() {
      const youtubeWatchTime = Math.floor(this.youtube.getCurrentTime());
      window.ga('send', {
        hitType: 'event',
        eventCategory: 'video',
        eventAction: 'play',
        eventLabel: `[${detectPlatform()}] [${document.querySelector('title').innerHTML}] [45年掌舵人將交棒 雲門大船的未來進行式] [已觀看${youtubeWatchTime}秒]`,
      });
    },
    // pageTouchStart(evt) {
    //   if (this.$root.cacheWindow.pageYOffset > 0 || !this.canScroll) return;
    //   // evt.preventDefault();
    //   this.touchStartX = evt.touches[0].pageX;
    //   this.touchStartY = evt.touches[0].pageY;
    // },
    // pageTouchMove(evt) {
    //   if (this.$root.cacheWindow.pageYOffset > 0 || !this.canScroll) return;
    //   // evt.preventDefault();

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
    //   // evt.preventDefault();
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
    headBarChangeColor() {
      if (this.$root.cacheWindow.pageYOffset >= this.$refs.contentLight.$el.offsetTop) {
        this.isHeadBarLight = true;
      } else {
        this.isHeadBarLight = false;
      }
    },
    youtubeControl() {
      // if (!this.youtube) return;
      // evt.preventDefault();
      const scrollY = this.$root.cacheWindow.pageYOffset;
      const youtubeY = this.$refs.youtube.$el.offsetTop;
      const WH = this.$root.windowHeight;

      if (!this.isYoutubePlay && scrollY > youtubeY) {
        this.isYoutubePlay = true;
        this.youtube.playVideo();
      // ASK pause timing is half or all
      } else if (this.isYoutubePlay && (scrollY > (youtubeY + (WH * 0.75)) || scrollY < (youtubeY - (WH * 0.75)))) {
        this.youtube.pauseVideo();
      }
    },
  },
};
</script>

<style lang="scss">
// @import 'reset-css';
@import './css/common.scss';
@import './css/vue-transition.scss';

// .page-content {
//   width: 100%;
//   // height: 100%;
//   // background-color: #000;
//   @media screen and (min-width: 576px) {
//     // position: fixed;
//     position: absolute;
//     // height: 100%;
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

.last-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 112px;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    padding-top: 187px;
    padding-left: 24px;
    padding-right: 24px;
  }
  &__left {
    // width: 100%;
    min-width: 201.62px;
    margin-left: auto;
    margin-right: auto;
    flex-shrink: 0;
    padding-right: 24px;
    padding-left: 24px;
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
