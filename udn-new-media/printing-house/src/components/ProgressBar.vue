<template>
  <transition name="fade">
    <div class="progress" v-if="isShowProgressBar">
      <div class="progress-bar" :style="{ width: `${progress}%` }"></div>
    </div>
  </transition>
</template>

<script>
// import { detectPlatform } from 'udn-newmedia-utils';

export default {
  name: 'ProgressBar',
  created() {
    window.addEventListener('scroll', this.growProgressBar);
  },
  data() {
    return {
      progress: 0,
      windowEle: window,
      htmlEle: document.documentElement,
      // mainVideoEle: null,
      isShowProgressBar: false,
      // readProgress: 0,
    };
  },
  // mounted() {
  //   this.mainVideoEle = this.$parent.$refs.coverVideo.$refs.mainVideo;
  // },
  methods: {
    growProgressBar() {
      // if (this.$root.cacheHTML.className !== 'of-v') return;
      const currentHeight = this.windowEle.pageYOffset;
      const totalHeight = this.htmlEle.scrollHeight - this.htmlEle.clientHeight;
      this.progress = ((currentHeight / totalHeight) * 100).toFixed(2);
      if (!this.$parent.isMobSize) {
        const mainVideoEle = this.$parent.$refs.coverVideo.$refs.mainVideo;
        if (this.windowEle.pageYOffset > mainVideoEle.offsetHeight) {
          this.isShowProgressBar = true;
        } else {
          this.isShowProgressBar = false;
        }
      }
      // const currentReadProgress = Math.floor(this.progress / 10);
      // if (currentReadProgress > this.readProgress) {
      //   for (let i = this.readProgress + 1; i <= currentReadProgress; i += 1) {
      //     // GA: 用不同裝置的讀者分別閱讀文章多長？
      //     window.ga('newmedia.send', {
      //       hitType: 'event',
      //       eventCategory: 'Read',
      //       eventAction: 'Scroll',
      //       eventLabel: `[每晚與時間賽跑的印報人] [${detectPlatform()}] [閱讀${(i - 1) * 10}-${i * 10}%]`,
      //       eventValue: i * 10,
      //     });
      //   }
      //   this.readProgress = currentReadProgress;
      // }
    },
    destroyed() {
      window.removeEventListener('scroll', this.growProgressBar);
    },
  },
};
</script>

<style lang="scss">
.progress {
  position: fixed;
  width: 100%;
  z-index: 999;
  &-bar {
    background-color: #b98e49;
    height: 2px;
    transition: width 0.2s;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
