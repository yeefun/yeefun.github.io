<template>
  <div class="progress">
    <div class="progress-bar" :style="{ width: `${progress}%` }"></div>
  </div>
</template>

<script>
import { detectPlatform } from 'udn-newmedia-utils';

export default {
  name: 'ProgressBar',
  created() {
    window.addEventListener('scroll', this.progressBarGrow);
  },
  data() {
    return {
      progress: 0,
      readProgress: 0,
    };
  },
  methods: {
    progressBarGrow() {
      if (!this.$parent.isHeadBarShow) return;
      const currentHeight = this.$root.cacheWindow.pageYOffset;
      const totalHeight = this.$root.cacheHTML.scrollHeight - this.$root.windowHeight;
      this.progress = ((currentHeight / totalHeight) * 100).toFixed(2);
      const currentReadProgress = Math.floor(this.progress / 10);
      if (currentReadProgress > this.readProgress) {
        for (let i = this.readProgress + 1; i <= currentReadProgress; i += 1) {
          window.ga('send', {
            hitType: 'event',
            eventCategory: 'read',
            eventAction: 'scroll',
            eventLabel: `[${detectPlatform()}] [${document.querySelector('title').innerHTML}] [page read '${i * 10}%]`,
          });
        }
        this.readProgress = currentReadProgress;
      }
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
</style>

