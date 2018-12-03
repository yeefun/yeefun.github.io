<template>
  <section class="content-video">
    <div class="content-video-wrapper" @click.once="playMainVideo">
      <video class="content-video__main" src="../assets/video/main--mob.mp4" poster="../assets/video-backgroung.jpg" controls playsinline webkit-playsinline ref="mainVideo" @seeked="seekedMainVideo"></video>
      <video class="content-video__looping" src="../assets/video/looping.mp4" poster="../assets/video-backgroung.jpg" muted autoplay loop playsinline webkit-playsinline v-if="isLoopingVideoState"></video>
      <button type="button" v-if="isLoopingVideoState"></button>
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
.content-video {
  margin: 48px -20px 64px -20px;
  &-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    cursor: pointer;
    &:hover button {
      background-color: #fff;
      border-color: #fff;
      &:after {
        border-left-color: #111;
      }
    }
  }
  & button {
    position: absolute;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.64);
    transition: background-color 0.2s ease-out, border-color 0.2s ease-out;
    padding: 15px 15.9px 15px 17.8px;
    border-radius: 4px;
    border: 2px solid rgba(255, 255, 255, 0.64);
    left: 20px;
    bottom: 16px;
    box-sizing: border-box;
    &:after {
      content: '';
      display: block;
      border-style: solid;
      border-color: transparent transparent transparent #fff;
      border-width: 8.4px 0 8.4px 14.2px;
      transition: border-left-color 0.2s ease-out;
      @media screen and (min-width: 992px) {
        border-width: 28px 0 28px 44px;
      }
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
