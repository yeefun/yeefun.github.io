<template>
<!-- FIXME use wheel event -->
  <div id="app" class="app" @wheel="pageScroll" @touchstart="pageTouchStart" @touchmove="pageTouchMove">
    <ProgressBar></ProgressBar>
    <transition name="cover-end-fade">
      <HeadBar :isHeadBarLight="isHeadBarLight" v-if="isHeadBarShow"></HeadBar>
    </transition>
    <div class="page-content" :style="{ transform: `translateY(${pageScrollY}px)` }" ref="pageContent">
      <Cover></Cover>
      <OpeningLine></OpeningLine>
    </div>
    <Youtube class="youtube--scroll" :youtubeId="youtubeId('first')" youtubeRef="first-youtube" ref="firstYoutube"></Youtube>
    <div class="scroll-content">
      <ContentDark v-if="$root.isMobileSize"></ContentDark>
      <FixedPhotoPage v-if="!$root.isMobileSize" :photoName="photoName" ref="fixedPhotoPage"></FixedPhotoPage>
      <PhotoPageContent class="photo-page-content" v-if="!$root.isMobileSize" ref="photoPageContent"></PhotoPageContent>
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
    </div>
  </div>
</template>

<script>
import YouTubePlayer from 'youtube-player';
import smoothscroll from 'smoothscroll-polyfill';

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
      bodyClass: document.body.classList,
      resizeTimer: null,
      scrollTimer: null,
      beforeWindowWidth: document.documentElement.clientWidth,
      // throttle touchpad mousewheel event & opening
      // canScroll: true,
      canScroll: false,
      pageScrollY: 0,
      touchStartX: 0,
      touchStartY: 0,
      photoName: 'legacy',
      beforeScrollY: window.pageYOffset,
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
      // isAnchorScroll: false,
    };
  },
  created() {
    window.addEventListener('beforeunload', this.beforeunloadHandler);
    window.addEventListener('resize', this.resizeHandler);
    window.addEventListener('scroll', this.photoPageControl);
    window.addEventListener('scroll', this.headBarChangeColor);
    window.addEventListener('scroll', this.youtubeControl);
  },
  mounted() {
    this.firstYoutube = YouTubePlayer('first-youtube');
    this.secondYoutube = YouTubePlayer('second-youtube');
    this.thirdYoutube = YouTubePlayer('third-youtube');
    this.firstYoutube.mute();
    this.secondYoutube.mute();
    this.thirdYoutube.mute();
  },
  methods: {
    photoPageControl() {
      // CONFUSED why need add windowHeight?
      // TODO OPT
      if (this.$root.isMobileSize) return;
      if (this.$root.cacheWindow.pageYOffset >= this.$refs.fixedPhotoPage.$el.offsetTop + this.$root.windowHeight) {
        this.$refs.fixedPhotoPage.$el.style.position = 'fixed';
      } else {
        this.$refs.fixedPhotoPage.$el.style.position = 'absolute';
      }
    },
    headBarChangeColor() {
      const scrollY = this.$root.cacheWindow.pageYOffset;
      const lightContentY = this.$refs.lightContent.getBoundingClientRect().top + scrollY;
      if (scrollY > lightContentY) {
        this.isHeadBarLight = true;
      } else {
        this.isHeadBarLight = false;
      }
    },
    beforeunloadHandler() {
      this.$root.cacheWindow.scroll({ top: 0 });
    },
    // TODO dynamic set this.$root.windowWidth
    resizeHandler() {
      if ((this.beforeWindowWidth < 576 && this.$root.windowWidth < 576) || (this.beforeWindowWidth >= 576 && this.$root.windowWidth >= 576)) return;
      if (this.resizeTimer) clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.$root.cacheWindow.location.reload();
        this.beforeWindowWidth = this.$root.windowWidth;
      }, 400);
    },
    pageTouchStart(evt) {
      if (this.$children[1].isInnerAnchorShow) this.$children[1].isInnerAnchorShow = false;
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
        // first youtube
        // if (this.firstYoutube) {
        //   if (this.pageScrollY === -this.$root.windowHeight) this.firstYoutube.pauseVideo();
        // }
        if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY < 0) {
          if (this.pageScrollY === -this.$root.windowHeight * 2) return;
          if (this.pageScrollY === -this.$root.windowHeight) {
            this.$refs.firstYoutube.$el.style.transform = 'translateY(0vh)';
            this.$root.cacheHTML.className = 'overflow-visible';
            this.bodyClass.add('overflow-visible');
          }
          // first youtube
          // if (this.firstYoutube) {
          if (this.pageScrollY === -this.$root.windowHeight) this.firstYoutube.playVideo();
          // }
          this.pageScrollY -= this.$root.windowHeight;
        } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 0) {
          if (this.pageScrollY === 0) return;
          if (this.pageScrollY === -this.$root.windowHeight * 2) {
            this.$refs.firstYoutube.$el.style.transform = 'translateY(100vh)';
            this.$root.cacheHTML.className = '';
            this.bodyClass.remove('overflow-visible');
            // first youtube
            if (this.firstYoutube) {
              this.firstYoutube.pauseVideo();
            }
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
        const scrollDirection = evt.deltaY;
        if (scrollDirection > 0) {
          if (this.pageScrollY === -this.$root.windowHeight * 2) return;
          if (this.pageScrollY === -this.$root.windowHeight) {
            this.$refs.firstYoutube.$el.style.transform = 'translateY(0vh)';
            this.$root.cacheHTML.className = 'overflow-visible';
            this.bodyClass.add('overflow-visible');
          }
          // first youtube
          if (this.firstYoutube) {
            if (this.pageScrollY === -this.$root.windowHeight) this.firstYoutube.playVideo();
          }
          this.pageScrollY -= this.$root.windowHeight;
        } else {
          if (this.pageScrollY === 0) return;
          if (this.pageScrollY === -this.$root.windowHeight * 2) {
            this.$refs.firstYoutube.$el.style.transform = 'translateY(100vh)';
            this.$root.cacheHTML.className = '';
            this.bodyClass.remove('overflow-visible');
            // first youtube
            if (this.firstYoutube) {
              this.firstYoutube.pauseVideo();
            }
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
    youtubeControlFn(evt, youtubeRef, isYoutubePlay, statement) {
      if (!statement()) return;
      evt.preventDefault();
      const scrollY = this.$root.cacheWindow.pageYOffset;
      const youtubeY = this.$refs[youtubeRef].$el.getBoundingClientRect().top + scrollY;
      const WH = this.$root.windowHeight;

      if (!this[isYoutubePlay] && scrollY > youtubeY - (WH / 2) && scrollY < youtubeY + (WH / 2)) {
        this[isYoutubePlay] = true;
        this[youtubeRef].playVideo();
      } else if (this[isYoutubePlay] && (scrollY > youtubeY + (WH / 2) || scrollY < youtubeY - (WH / 2))) {
        this[isYoutubePlay] = false;
        this[youtubeRef].pauseVideo();
      }
    },
    youtubeControl(evt) {
      // first youtube
      this.youtubeControlFn(evt, 'firstYoutube', 'isFirstYoutubePlay', () => {
        if (!this.firstYoutube) {
          return false;
        }
        return true;
      });
      // second youtube
      this.youtubeControlFn(evt, 'secondYoutube', 'isSecondYoutubePlay', () => {
        if (!this.secondYoutube) {
          return false;
        }
        return true;
      });
      // third youtube
      this.youtubeControlFn(evt, 'thirdYoutube', 'isThirdYoutubePlay', () => {
        if (!this.thirdYoutube || !this.canThirdYoutubePlay) {
          return false;
        }
        return true;
      });
    },
  },
};
</script>

<style lang="scss">
@import './css/vue-transition.scss';
@import './css/content.scss';

.app {
  background-color: #000;
}

.page-content {
  width: 100%;
  // height: 100vh;
  background-color: #000;
  z-index: 9;
  @media screen and (min-width: 576px) {
    height: 100%;
    position: fixed;
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

.scroll-content {
  position: static;
  @media screen and (min-width: 576px) {
    position: relative;
  }
}

.light-content {
  background-color: #fff;
  position: relative;
  // TODO do youtube need full screen? if yes, remove "max-width: 960px;" and add it in other places
  // max-width: 960px;
  // margin-right: auto;
  // margin-left: auto;
}

// .photo-page-content {
//   @media screen and (min-width: 576px) {
//     transform: translateY(100vh);
//     transition: transform 1s;
//   }
// }
.last-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 82px;
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
  & > img {
    width: 138px;
    height: auto;
    margin-bottom: 12px;
  }
}
// .youtube-third {
//   opacity: 0;
// }
</style>
