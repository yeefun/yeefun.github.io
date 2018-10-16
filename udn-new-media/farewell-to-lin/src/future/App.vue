<template>
  <div id="app" @wheel="pageScroll" @touchstart="pageTouchStart" @touchmove="pageTouchMove">
  <!-- <div id="app"> -->
    <ProgressBar></ProgressBar>
    <HeadBar :isHeadBarLight="isHeadBarLight"></HeadBar>
    <div class="page-content" :style="{ transform: `translateY(${pageScrollY}px)` }">
      <Cover></Cover>
      <OpeningLine></OpeningLine>
    </div>
    <Youtube class="youtube--scroll" ref="youtube"></Youtube>
    <!-- <div> -->
    <!-- <ContentLight class="content-light" ref="contentLight"></ContentLight> -->
    <ContentLight ref="contentLight"></ContentLight>
    <!-- </div> -->
    <div class="last-content">
      <div class="last-content__left">
        <div class="last-content__share">
          <Share></Share>
        </div>
        <section class="logo">
          <img src="../assets/Logo/blackUdnEveNews.png" alt="">
          <img src="../assets/Logo/blackUdnNews.png" alt="">
          <img class="mb-0" src="../assets/Logo/blackNewMidia.png" alt="">
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
import YouTubePlayer from 'youtube-player';
import smoothscroll from 'smoothscroll-polyfill';

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
      bodyClass: document.body.classList,
      isHeadBarLight: false,
      canScroll: true,
      pageScrollY: 0,
      youtube: null,
      isYoutubePlay: false,
      beforeScrollY: 0,
    };
  },
  created() {
    window.addEventListener('beforeunload', this.beforeunloadHandler);
    window.addEventListener('scroll', this.headBarChangeColor);
    window.addEventListener('scroll', this.youtubeControl);
    window.addEventListener('scroll', this.preventIframeBlockScroll);
  },
  mounted() {
    this.youtube = YouTubePlayer('youtube');
    this.youtube.mute();
  },
  methods: {
    preventIframeBlockScroll() {
      if (this.pageScrollY === -this.$root.windowHeight) return;
      const afterScrollY = this.$root.cacheWindow.pageYOffset;
      const deltaScrollY = afterScrollY - this.beforeScrollY;
      if (deltaScrollY < 0 && this.$root.cacheWindow.pageYOffset === 0) {
        this.$refs.youtube.$el.style.transform = 'translateY(100vh)';
        this.pageScrollY += this.$root.windowHeight;
        this.youtube.pauseVideo();
        this.$root.cacheHTML.className = '';
        this.bodyClass.remove('overflow-visible');
      }
      this.beforeScrollY = afterScrollY;
    },
    beforeunloadHandler() {
      this.$root.cacheWindow.scroll({ top: 0 });
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
          if (this.pageScrollY === -this.$root.windowHeight * 2) return;
          if (this.pageScrollY === -this.$root.windowHeight) {
            this.$refs.youtube.$el.style.transform = 'translateY(0vh)';
            // this.$root.cacheHTML.className = 'overflow-visible';
            this.bodyClass.add('overflow-visible');
          }
          // first youtube
          if (this.youtube) {
            if (this.pageScrollY === -this.$root.windowHeight) this.youtube.playVideo();
          }
          this.pageScrollY -= this.$root.windowHeight;
        } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 0) {
          if (this.pageScrollY === 0) return;
          // if (this.pageScrollY === -this.$root.windowHeight * 2) {
          // this.$refs.youtube.$el.style.transform = 'translateY(100vh)';
          // this.$root.cacheHTML.className = '';
          // this.bodyClass.remove('overflow-visible');
          // first youtube
          // if (this.youtube) {
          //   this.youtube.pauseVideo();
          // }
          // }
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
        // const scrollDirection = -evt.wheelDelta || evt.detail;
        const scrollDirection = evt.deltaY;
        if (scrollDirection > 0) {
          if (this.pageScrollY === -this.$root.windowHeight * 2) return;
          if (this.pageScrollY === -this.$root.windowHeight) {
            this.$refs.youtube.$el.style.transform = 'translateY(0vh)';
            this.$root.cacheHTML.className = 'overflow-visible';
            this.bodyClass.add('overflow-visible');
          }
          // first youtube
          if (this.youtube) {
            if (this.pageScrollY === -this.$root.windowHeight) this.youtube.playVideo();
          }
          this.pageScrollY -= this.$root.windowHeight;
        } else {
          if (this.pageScrollY === 0) return;
          // if (this.pageScrollY === -this.$root.windowHeight * 2) {
          // this.$refs.youtube.$el.style.transform = 'translateY(100vh)';
          // this.$root.cacheHTML.className = '';
          // this.bodyClass.remove('overflow-visible');
          // first youtube
          // if (this.youtube) {
          // this.youtube.pauseVideo();
          // }
          // }
          this.pageScrollY += this.$root.windowHeight;
        }
      }, 200);
    },
    headBarChangeColor() {
      if (this.$root.cacheWindow.pageYOffset >= this.$refs.contentLight.$el.offsetTop) {
        this.isHeadBarLight = true;
      } else {
        this.isHeadBarLight = false;
      }
    },
    youtubeControl(evt) {
      if (!this.youtube) return;
      evt.preventDefault();
      const scrollY = this.$root.cacheWindow.pageYOffset;
      const youtubeY = this.$refs.youtube.$el.offsetTop;
      const WH = this.$root.windowHeight;

      if (!this.isYoutubePlay && scrollY < youtubeY + (WH / 2)) {
        this.isYoutubePlay = true;
        this.youtube.playVideo();
      } else if (this.isYoutubePlay && (scrollY > youtubeY + (WH / 2) || scrollY < youtubeY - (WH / 2))) {
        this.isYoutubePlay = false;
        this.youtube.pauseVideo();
      }
    },
  },
};
</script>

<style lang="scss">
@import './css/vue-transition.scss';

.page-content {
  width: 100%;
  // height: 100%;
  // background-color: #000;
  @media screen and (min-width: 576px) {
    position: fixed;
    height: 100%;
    top: 0;
    transition: transform 1s;
  }
}

.youtube--scroll {
  @media screen and (min-width: 576px) {
    transform: translateY(100vh);
    transition: transform 1s;
  }
}

// .content-light {
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
  & > img {
    width: 138px;
    height: auto;
    margin-bottom: 12px;
  }
}
</style>
