<template>
  <section class="content-video">
    <div class="content-video-wrapper" @click.once="playMainVideo">
      <video class="content-video__main" src="../assets/video/main--mob.mp4" poster="../assets/video-backgroung.jpg" controls playsinline webkit-playsinline ref="mainVideo" @seeked="seekedMainVideo"></video>
      <video class="content-video__looping" src="../assets/video/looping.mp4" poster="../assets/video-backgroung.jpg" muted autoplay loop playsinline webkit-playsinline v-if="isLoopingVideoState"></video>
      <button type="button" v-if="isLoopingVideoState"></button>
      <p v-if="isLoopingVideoState">點擊影片觀賞<br>報紙印製流程</p>
    </div>
  </section>
</template>

<script>
// import { detectPlatform } from 'udn-newmedia-utils';

export default {
  name: 'ContentVideo',
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
      //   eventAction: 'Play',
      //   eventLabel: `[每晚與時間賽跑的印報人] [${detectPlatform()}] [content]`,
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
    //     eventLabel: `[每晚與時間賽跑的印報人] [${detectPlatform()}] [跳看${this.seekedNem}次] [已觀看${this.watchedTimes.join(',')}秒] [content]`,
    //     eventValue: this.watchedTimes[this.watchedTimes.length - 1],
    //   });
    // },
  },
};
</script>

<style lang="scss">
.content-video {
  margin: 48px -20px 64px -20px;
  &-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    cursor: pointer;
    &:hover button {
      background-color: #fff;
      // border-color: #fff;
      // &:after {
      //   border-left-color: #111;
      // }
    }
  }
  & button {
    position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    border-radius: 4px;
    // background-color: rgba(0, 0, 0, 0.64);
    background-color: rgba(255, 255, 255, 0.72);
    transition: background-color 0.2s ease-out, border-color 0.2s ease-out;
    // padding: 14.8px 16px 14.8px 17.8px;
    padding: 17.8px 19.2px 17.8px 21.4px;
    border-radius: 4px;
    // border: 2px solid rgba(255, 255, 255, 0.64);
    // border: 2px solid rgba(0, 0, 0, 0.64);
    left: 20px;
    bottom: 16px;
    box-sizing: border-box;
    @media screen and (min-width: 576px) {
      // top: 28%;
      // margin-bottom: 64px;
      // padding: 38px 68px 38px 76px;
      padding: 23.7px 25.6px 23.7px 28.5px;
      bottom: 20px;
    }
    &:after {
      content: '';
      display: block;
      border-style: solid;
      // border-color: transparent transparent transparent #fff;
      border-color: transparent transparent transparent #111;
      // border-width: 8.4px 0 8.4px 14.2px;
      border-width: 10px 0 10px 17px;
      transition: border-left-color 0.2s ease-out;
      @media screen and (min-width: 576px) {
        border-width: 13.4px 0 13.4px 22.7px;
      }
    }
  }
  & p {
    width: 100%;
    position: absolute;
    top: 50%;
    text-align: center;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 700;
    font-size: 1.8rem;
    color: #fff;
    // letter-spacing: 0.4px;
    text-shadow: 1.6px 1.6px 4px rgba(0, 0, 0, 0.8);
    // margin-left: 0.4px;
    line-height: 1.4;
    @media screen and (min-width: 376px) {
      font-size: 2rem;
    }
  }
}
video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

</style>
