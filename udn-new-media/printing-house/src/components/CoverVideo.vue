<template>
  <section class="cover-video">
    <div class="cover-video-wrapper" @click.once="playMainVideo">
      <video class="cover-video__main" src="../assets/video/main--web.mp4" poster="../assets/video-backgroung.jpg" controls playsinline webkit-playsinline ref="mainVideo" @seeked="seekedMainVideo"></video>
      <!-- <transition name="fade"> -->
      <video class="cover-video__looping" src="../assets/video/looping.mp4" poster="../assets/video-backgroung.jpg" muted autoplay loop playsinline webkit-playsinline v-if="isLoopingVideoState"></video>
      <!-- </transition> -->
      <div class="cover-video__title-wrapper" v-if="isLoopingVideoState">
        <button type="button"></button>
        <h1>每晚與時間賽跑的印報人</h1>
      </div>
      <!-- <div class="bar"></div> -->
      <!-- <button type="button" v-if="isLoopingVideoState"></button> -->
      <!-- <div class="cover-video__title-wrapper" v-if="isLoopingVideoState"> -->
        <!-- <h2>票開完了，他們的工作才開始</h2> -->
        <!-- <h1 v-if="isLoopingVideoState">每晚與時間賽跑的印報人</h1> -->
      <!-- </div> -->
      <div class="cover-video__prompt" v-if="isLoopingVideoState">
        <p>看專題報導</p>
        <!-- <img src="../assets/arrow.png" alt=""> -->
        <div class="cover-video__arrow"></div>
      </div>
    </div>
  </section>
</template>

<script>
// import { detectPlatform } from 'udn-newmedia-utils';

export default {
  name: 'CoverVideo',
  data() {
    return {
      isLoopingVideoState: true,
      seekedNem: 0,
      watchedTimes: [],
    };
  },
  created() {
    window.addEventListener('beforeunload', this.handleBeforeUnload);
  },
  methods: {
    playMainVideo() {
      this.isLoopingVideoState = false;
      this.$refs.mainVideo.play();
      // GA: 多少人點擊觀看影片？
      // window.ga('newmedia.send', {
      //   hitType: 'event',
      //   eventCategory: 'Video',
      //   eventAction: 'Click',
      //   eventLabel: `[每晚與時間賽跑的印報人] [${detectPlatform()}]`,
      // });
    },
    seekedMainVideo(evt) {
      this.seekedNem += 1;
      this.watchedTimes.push(Math.floor(evt.currentTarget.currentTime));
    },
    // handleBeforeUnload() {
    //   // GA: 讀者影片看了多久？跳看幾次？
    //   window.ga('newmedia.send', {
    //     hitType: 'event',
    //     eventCategory: 'Video',
    //     eventAction: 'Watch',
    //     eventLabel: `[每晚與時間賽跑的印報人] [${detectPlatform()}] [跳看${this.seekedNem}次] [已觀看${this.watchedTimes.join(',')}秒]`,
    //     eventValue: this.watchedTimes[this.watchedTimes.length - 1],
    //   });
    // },
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
    border-radius: 4px;
    // left: 50%;
    // transform: translateX(-50%);
    // top: 30%;
    // background-color: rgba(0, 0, 0, 0.64);
    background-color: rgba(255, 255, 255, 0.72);
    transition: background-color 0.2s ease-out;
    // padding: 14px 14.8px 14px 16.6px;
    padding: 28.5px 51px 28.5px 57px;
    // padding: 26.6px 47.6px 26.6px 53.2px;
    border-radius: 5px;
    margin-bottom: 48px;
    // border: 2px solid rgba(255, 255, 255, 0.64);
    // left: 12px;
    // bottom: 12px;
    box-sizing: border-box;
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
      border-width: 21px 0 21px 33px;
      // border-width: 19.6px 0 19.6px 30.8px;
      // border-width: 8px 0 8px 12.6px;
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
  &__prompt {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    // top: 88%;
    bottom: 16px;
    // width: 100%;
    // width: 32px;
    @media screen and (min-width: 992px) {
      bottom: 32px;
    }
  }
  &__arrow {
    border-style: solid;
    border-color: #fff;
    width: 12px;
    height: 12px;
    border-right-width: 2.4px;
    border-bottom-width: 2.4px;
    box-sizing: border-box;
    transform: rotate(45deg);
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
