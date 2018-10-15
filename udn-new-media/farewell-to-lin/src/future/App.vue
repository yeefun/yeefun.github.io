<template>
  <div id="app" @wheel="pageScroll" @touchstart="pageTouchStart" @touchmove="pageTouchMove">
  <!-- <div id="app"> -->
    <ProgressBar></ProgressBar>
    <HeadBar :isHeadBarLight="isHeadBarLight"></HeadBar>
    <div class="page-content" :style="{ transform: `translateY(${pageScrollY}px)` }">
      <Cover></Cover>
      <OpeningLine></OpeningLine>
      <Youtube ref="firstYoutube"></Youtube>
    </div>
    <!-- <div> -->
    <ContentLight class="content-light" ref="contentLight"></ContentLight>
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
      firstYoutube: null,
    };
  },
  created() {
    window.addEventListener('beforeunload', this.beforeunloadHandler);
    // window.addEventListener('wheel', this.pageScroll);
    // window.addEventListener('touchstart', this.pageScroll);
    // window.addEventListener('touchmove', this.pageScroll);
    // window.addEventListener('blur', (evt) => {
    //   evt.preventDefault();
    // });
  },
  mounted() {
    this.firstYoutube = YouTubePlayer('first-youtube');
    this.firstYoutube.mute();
  },
  methods: {
    beforeunloadHandler() {
      this.$root.cacheWindow.scrollTo({
        top: 0,
        behavior: 'instant',
      });
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
            this.$refs.contentLight.$el.style.transform = 'translateY(0vh)';
            this.$root.cacheHTML.className = 'overflow-visible';
            this.bodyClass.add('overflow-visible');
            this.isHeadBarLight = true;
          }
          // first youtube
          if (this.firstYoutube) {
            if (this.pageScrollY === -this.$root.windowHeight) this.firstYoutube.playVideo();
          }
          this.pageScrollY -= this.$root.windowHeight;
        } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 0) {
          if (this.pageScrollY === 0) return;
          if (this.pageScrollY === -this.$root.windowHeight * 3) {
            this.$refs.contentLight.$el.style.transform = 'translateY(100vh)';
            this.$root.cacheHTML.className = '';
            this.bodyClass.remove('overflow-visible');
            this.isHeadBarLight = false;
            // first youtube
            if (this.firstYoutube) {
              this.firstYoutube.playVideo();
            }
          }
          this.pageScrollY += this.$root.windowHeight;
        }
        // first youtube
        if (this.firstYoutube) {
          if (this.pageScrollY === -this.$root.windowHeight * 2) this.firstYoutube.pauseVideo();
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
        if (this.firstYoutube) {
          if (this.pageScrollY === -this.$root.windowHeight * 2) this.firstYoutube.pauseVideo();
        }
        if (scrollDirection > 0) {
          if (this.pageScrollY === -this.$root.windowHeight * 3) return;
          if (this.pageScrollY === -this.$root.windowHeight * 2) {
            this.$refs.contentLight.$el.style.transform = 'translateY(0vh)';
            this.$root.cacheHTML.className = 'overflow-visible';
            this.bodyClass.add('overflow-visible');
            this.isHeadBarLight = true;
          }
          // first youtube
          if (this.firstYoutube) {
            if (this.pageScrollY === -this.$root.windowHeight) this.firstYoutube.playVideo();
          }
          this.pageScrollY -= this.$root.windowHeight;
        } else {
          if (this.pageScrollY === 0) return;
          if (this.pageScrollY === -this.$root.windowHeight * 3) {
            this.$refs.contentLight.$el.style.transform = 'translateY(100vh)';
            this.$root.cacheHTML.className = '';
            this.bodyClass.remove('overflow-visible');
            this.isHeadBarLight = false;
            // first youtube
            if (this.firstYoutube) {
              this.firstYoutube.playVideo();
            }
          }
          this.pageScrollY += this.$root.windowHeight;
        }
      }, 200);
    },
    // headBarChangeColor() {
    //   if (this.$root.cacheWindow.pageYOffset >= this.$refs.contentLight.$el.offsetTop) {
    //     this.isHeadBarLight = true;
    //   } else {
    //     this.isHeadBarLight = false;
    //   }
    // },
  },
};
</script>

<style lang="scss">
// @import './css/common.scss';

.page-content {
  width: 100%;
  // background-color: #000;
  @media screen and (min-width: 576px) {
    position: fixed;
    top: 0;
    transition: transform 1s;
  }
}
.content-light {
  @media screen and (min-width: 576px) {
    transform: translateY(100vh);
    transition: transform 1s;
  }
}

.last-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 112px;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  // ASK break point 768 or 576?
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
