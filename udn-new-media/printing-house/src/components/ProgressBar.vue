<template>
  <transition name="fade">
    <div class="progress">
      <div class="progress-bar" :style="{ width: `${progress}%` }"></div>
    </div>
  </transition>
</template>

<script>
import { detectPlatform } from 'udn-newmedia-utils';

export default {
  name: 'ProgressBar',
  created() {
    window.addEventListener('scroll', this.growProgressBar);
  },
  data() {
    return {
      progress: 0,
      // windowEle: window,
      htmlEle: document.documentElement,
      readProgress: 0,
    };
  },
  methods: {
    growProgressBar() {
      const currentHeight = this.$parent.windowEle.pageYOffset;
      const totalHeight = this.htmlEle.scrollHeight - this.htmlEle.clientHeight;
      this.progress = ((currentHeight / totalHeight) * 100).toFixed(2);
      const currentReadProgress = Math.ceil(this.progress / 10);
      // 後者判斷為防止部分瀏覽器會讓 currentReadProgress 大於 10
      if (currentReadProgress > this.readProgress && currentReadProgress <= 10) {
        for (let i = this.readProgress + 1; i <= currentReadProgress; i += 1) {
          // GA: 讀者讀文章讀了多長？
          window.ga('newmedia.send', {
            hitType: 'event',
            eventCategory: 'Article',
            eventAction: 'Read',
            eventLabel: `[每晚與時間賽跑的印報人] [${detectPlatform()}] [閱讀 ${(i - 1) * 10}-${i * 10}%]`,
            eventValue: i * 10,
          });
        }
        this.readProgress = currentReadProgress;
      }
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
    background-color: #2b61ad;
    height: 2px;
    transition: width 0.2s;
  }
}
</style>
