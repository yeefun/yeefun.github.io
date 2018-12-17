<template>
  <section class="cover-video">
    <div class="cover-video-wrapper" @click.once="firstPlayMainVideo">
      <template v-if="$parent.isWebSize">
        <video ref="mainVideo" class="cover-video__main" src="../assets/video/main--web.mp4" poster="../assets/video-backgroung.jpg" controls playsinline webkit-playsinline @play="playMainVideo" @seeked="seekedMainVideo" @pause="pauseMainVideo"></video>
        <video class="cover-video__looping" src="../assets/video/looping--web.mp4" poster="../assets/video-backgroung.jpg" muted autoplay loop playsinline webkit-playsinline v-if="isLoopingVideoState"></video>
      </template>
      <template v-else>
        <video ref="mainVideo" class="cover-video__main" src="../assets/video/main--mob.mp4" poster="../assets/video-backgroung.jpg" controls playsinline webkit-playsinline @play="playMainVideo" @seeked="seekedMainVideo" @pause="pauseMainVideo"></video>
        <video class="cover-video__looping" src="../assets/video/looping--mob.mp4" poster="../assets/video-backgroung.jpg" muted autoplay loop playsinline webkit-playsinline v-if="isLoopingVideoState"></video>
      </template>

      <div class="cover-video__title-wrapper" v-if="isLoopingVideoState">
        <button type="button"></button>
        <h1 v-if="$parent.isWebSize">每晚與時間賽跑的印報人</h1>
      </div>
        <!-- <div class="cover-video__prompt" v-if="isLoopingVideoState && $parent.isWebSize"> -->
          <!-- <p>看專題報導</p> -->
          <!-- <div class="cover-video__arrow"></div> -->
        <!-- </div> -->
      <div class="cover-video__arrow" v-if="isLoopingVideoState && $parent.isWebSize"></div>
      <!-- <template v-else>
        <h1>每晚與時間賽跑的印報人</h1>
      </template> -->
    </div>
  </section>
</template>

<script>
import { detectPlatform } from 'udn-newmedia-utils';

export default {
  name: 'CoverVideo',
  data() {
    return {
      isLoopingVideoState: true,
      seekedNem: 0,
      pauseNum: 0,
      skipToTimes: [],
      afterClickAnchorState: '',
      pageLoadTime: null,
      // pauseTimer: null,
      beforeWatchedTime: 0,
      // isVideoGaSend: false,
    };
  },
  created() {
    document.addEventListener('DOMContentLoaded', this.handleDOMContentLoaded);
    // window.addEventListener('beforeunload', this.handleBeforeUnload);
  },
  methods: {
    firstPlayMainVideo() {
      this.isLoopingVideoState = false;
      this.$refs.mainVideo.play();
      this.afterClickAnchorState = this.$parent.afterClickAnchorTime ? `點擊錨點後${Math.round((new Date() - this.$parent.afterClickAnchorTime) / 1000)}秒` : 'No';
      const beforeFirstPlayMainVideoSecond = Math.round((new Date() - this.pageLoadTime) / 1000);
      // GA: 在頁面載入多久後，有多少人按客製播放鈕觀看影片？（是否在點擊錨點後才按客製播放鈕？）
      window.ga('newmedia.send', {
        hitType: 'event',
        eventCategory: 'Video',
        eventAction: 'Start',
        eventLabel: `[每晚與時間賽跑的印報人] [${detectPlatform()}] [頁面載入後 ${beforeFirstPlayMainVideoSecond} 秒] [${this.afterClickAnchorState}]`,
        eventValue: beforeFirstPlayMainVideoSecond,
      });
    },
    // timeupdateMainVideo() {
    // 若暫停後 2 秒內讀者又按播放或跳看，便不發送 GA
    // if (this.pauseTimer) clearTimeout(this.pauseTimer);
    // if (this.$refs.mainVideo.seeking) {
    // },
    // seekingMainVideo() {
    //   if (this.pauseTimer) clearTimeout(this.pauseTimer);
    // },
    playMainVideo() {
      if (this.$parent.afterClickAnchorTime && this.afterClickAnchorState === 'No') {
        this.afterClickAnchorState = `點擊錨點後${Math.round((new Date() - this.$parent.afterClickAnchorTime) / 1000)}秒`;
        const curWatchedTime = Math.round(this.$refs.mainVideo.currentTime);
        // GA: 多少人在點擊錨點後，按原生播放鈕？
        window.ga('newmedia.send', {
          hitType: 'event',
          eventCategory: 'Video',
          eventAction: 'Play',
          eventLabel: `[每晚與時間賽跑的印報人] [${detectPlatform()}] [${this.afterClickAnchorState}] [影音在第 ${curWatchedTime} 秒]`,
          eventValue: curWatchedTime,
        });
      }
    },
    pauseMainVideo() {
      // 如果讀者暫停，且不是跳看影片，便發送 GA
      if (!this.$refs.mainVideo.seeking) {
        this.pauseNum += 1;
        // GA: 讀者看影片看了多久？
        const videoDuration = this.$refs.mainVideo.duration;
        const curWatchedTime = this.$refs.mainVideo.currentTime;
        const watchedProgress = Math.ceil((curWatchedTime / videoDuration) * 10);
        if (watchedProgress > this.beforeWatchedTime) {
          for (let i = this.beforeWatchedTime + 1; i <= watchedProgress; i += 1) {
            window.ga('newmedia.send', {
              hitType: 'event',
              eventCategory: 'Video',
              eventAction: 'Watch',
              eventLabel: `[每晚與時間賽跑的印報人] [${detectPlatform()}] [觀看 ${(i - 1) * 10}-${i * 10}%]`,
              eventValue: i * 10,
            });
          }
          this.beforeWatchedTime = watchedProgress;
        }
        // this.pauseTimer = setTimeout(() => {
        // GA: 讀者看影片看了多久？
        // window.ga('newmedia.send', {
        //   hitType: 'event',
        //   eventCategory: 'Video',
        //   eventAction: 'Watch',
        //   eventLabel: `[每晚與時間賽跑的印報人] [${detectPlatform()}] [已觀看 ${Math.round(this.$refs.mainVideo.currentTime)} 秒]`,
        //   eventValue: Math.round(this.$refs.mainVideo.currentTime),
        // });

        // GA: 讀者跳看影片幾次？
        window.ga('newmedia.send', {
          hitType: 'event',
          eventCategory: 'Video',
          eventAction: 'Skip',
          eventLabel: `[每晚與時間賽跑的印報人] [${detectPlatform()}] [跳看 ${this.seekedNem} 次]`,
          eventValue: this.seekedNem,
        });
        // GA: 讀者跳看影片跳至第幾秒？
        const skipToTimes = this.skipToTimes.length ? `跳看至第 ${this.skipToTimes.join(', ')} 秒` : '無跳看';
        window.ga('newmedia.send', {
          hitType: 'event',
          eventCategory: 'Video',
          eventAction: 'SkipTo',
          eventLabel: `[每晚與時間賽跑的印報人] [${detectPlatform()}] [${skipToTimes}]`,
          eventValue: this.skipToTimes[0],
        });
        // GA: 讀者暫停影片幾次？
        window.ga('newmedia.send', {
          hitType: 'event',
          eventCategory: 'Video',
          eventAction: 'Pause',
          eventLabel: `[每晚與時間賽跑的印報人] [${detectPlatform()}] [暫停 ${this.pauseNum} 次]`,
          eventValue: this.pauseNum,
        });
        // }, 2000);
      }
    },
    seekedMainVideo() {
      this.seekedNem += 1;
      this.skipToTimes.push(Math.round(this.$refs.mainVideo.currentTime));
    },
    handleDOMContentLoaded() {
      this.pageLoadTime = new Date();
    },
  },
};
</script>

<style lang="scss">
.cover-video {
  color: #fff;
  &-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    &:hover button {
      // background-color: #4d7b9f;
      // border-color: #4d7b9f;
      background-color: rgba(255, 255, 255, 1);
    }
  }
  // &__looping {
  //   cursor: pointer;
  // }
  & button {
    // position: absolute;
    // border-radius: 4px;
    // left: 50%;
    // transform: translateX(-50%);
    // top: 30%;
    // background-color: rgba(0, 0, 0, 0.64);
    background-color: rgba(255, 255, 255, 0.72);
    transition: background-color 0.2s ease-out;
    // padding: 14px 14.8px 14px 16.6px;
    // padding: 28.5px 51px 28.5px 57px;
    padding: 17.3px 30.9px 17.3px 34.5px;
    // padding: 26.6px 47.6px 26.6px 53.2px;
    // padding: 21px 37.8px 21px 42.2px;
    border-radius: 4px;
    // margin-bottom: 48px;
    // border: 2px solid rgba(255, 255, 255, 0.64);
    // left: 12px;
    // bottom: 12px;
    box-sizing: border-box;
    @media screen and (min-width: 376px) and (max-width: 575.98px) {
      padding: 21px 37.8px 21px 42.2px;
    }
    @media screen and (min-width: 576px) and (max-width: 991.98px) {
      padding: 28.5px 51px 28.5px 57px;
    }
    @media screen and (min-width: 768px) {
      border-radius: 5px;
      margin-bottom: 48px;
    }
    @media screen and (min-width: 992px) {
      // top: 28%;
      margin-bottom: 64px;
      padding: 38px 68px 38px 76px;
    }
    &:after {
      content: '';
      display: block;
      border-style: solid;
      border-color: transparent transparent transparent #111;
      // border-width: 15.6px 0 15.6px 24.4px;
      // border-width: 21px 0 21px 33px;
      // border-width: 19.6px 0 19.6px 30.8px;
      // border-width: 8px 0 8px 12.6px;
      border-width: 12.7px 0 12.7px 20px;
      @media screen and (min-width: 376px) and (max-width: 575.98px) {
        border-width: 15.6px 0 15.6px 24.4px;
      }
      @media screen and (min-width: 576px) and (max-width: 991.98px) {
        border-width: 21px 0 21px 33px;
      }
      @media screen and (min-width: 992px) {
        border-width: 28px 0 28px 44px;
      }
    }
  }
  &__title-wrapper {
    cursor: pointer;
    position: absolute;
    width: 100%;
    height: 100%;
  //   color: #fff;
  //   width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  //   top: 56%;
  //   left: 50%;
  //   transform: translateX(-50%);
  }
  & h1 {
    // font-size: 5.6rem;
    font-size: 5.2rem;
    letter-spacing: 8px;
    margin-left: 4px;
    font-weight: 700;
    // font-weight: 500;
    text-shadow: 1.6px 1.6px 8px rgba(0, 0, 0, 0.64);
    // position: absolute;
    width: 96%;
    // top: 60%;
    // left: 50%;
    // transform: translateX(-50%);
    text-align: center;
    @media screen and (min-width: 992px) {
      font-size: 6.4rem;
      letter-spacing: 12px;
      margin-left: 6px;
      // top: 62%;
    }
  }
  // &__prompt {
  //   position: absolute;
  //   left: 50%;
  //   transform: translateX(-50%);
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   // top: 88%;
  //   bottom: 16px;
  //   // width: 100%;
  //   // width: 32px;
  //   @media screen and (min-width: 992px) {
  //     bottom: 32px;
  //   }
  // }
  &__arrow {
    position: absolute;
    left: 50%;
    border-style: solid;
    border-color: #fff;
    width: 24px;
    height: 24px;
    border-right-width: 3.2px;
    border-bottom-width: 3.2px;
    box-sizing: border-box;
    transform: translateX(-50%) rotate(45deg);
    bottom: 40px;
    @media screen and (min-width: 992px) {
      bottom: 64px;
    }
  }
  & p {
    font-size: 1.8rem;
    letter-spacing: 1.6px;
    margin-bottom: 8px;
    margin-left: 0.8px;
    // @media screen and (min-width: 992px) {
    //   margin-bottom: 12px
    // }
  }
  // & h2 {
  //   font-size: 3.2rem;
  //   margin-bottom: 24px;
  //   letter-spacing: 12px;
  //   margin-left: 6px;
  //   text-shadow: 0.8px 0.8px 4px rgba(0, 0, 0, 0.4);
  // }
}
video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // vertical-align: top
}

// .fade-enter-active, .fade-leave-active {
//   transition: opacity 0.4s ease-in-out;
// }
// .fade-enter, .fade-leave-to {
//   opacity: 0;
// }
</style>
