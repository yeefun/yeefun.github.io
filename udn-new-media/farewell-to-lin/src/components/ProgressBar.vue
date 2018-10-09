<template>
  <div class="progress">
    <div class="progress-bar" :style="{ width: `${progress}%` }"></div>
  </div>
</template>

<script>
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
      const totalHeight = this.$root.cacheHTML.scrollHeight - this.$root.cacheHTML.clientHeight;
      this.progress = ((currentHeight / totalHeight) * 100).toFixed(2);
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

