<template>
  <section class="page"
  @mousewheel="toNextPage" @DOMMouseScroll="toNextPage" @touchmove="toNextPage">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'Page',
  data() {
    return {
      windowHeight: window.innerHeight,
      beforeScrollTop: window.pageYOffset,
    };
  },
  methods: {
    toNextPage() {
      const afterScrollTop = window.pageYOffset;
      if (afterScrollTop - this.beforeScrollTop > 0) {
        window.scrollBy({
          top: this.windowHeight,
          behavior: 'smooth',
        });
        this.beforeScrollTop = afterScrollTop;
      } else {
        window.scrollBy({
          top: -this.windowHeight,
          behavior: 'smooth',
        });
        this.beforeScrollTop = afterScrollTop;
      }
    },
  },
};
</script>

<style lang="scss">
</style>

