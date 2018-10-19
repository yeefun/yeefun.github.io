<template>
  <div class="progress">
    <div class="progress-bar" :style="{ width: `${progress}%` }"></div>
  </div>
</template>

<script>
import Utils from 'udn-newmedia-utils';

export default {
  name: 'ProgressBar',
  created() {
    window.addEventListener('scroll', this.progressBarGrow);
  },
  data() {
    return {
      progress: 0,
    };
  },
  methods: {
    progressBarGrow() {
      const currentHeight = this.$root.cacheWindow.pageYOffset;
      const totalHeight = this.$root.cacheHTML.scrollHeight - this.$root.windowHeight;
      const readPercent = (currentHeight / totalHeight) * 100;
      this.progress = readPercent.toFixed(2);
      window.ga('send', {
        hitType: 'event',
        eventCategory: 'read',
        eventAction: 'scroll',
        eventLabel: `[${Utils.detectPlatform()}] [${document.querySelector('title').innerHTML}] [page read '${readPercent.toFixed(2)}%]`,
      });
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

