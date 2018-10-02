<template>
  <section class="page"
  @mousewheel="toNextPage()" @DOMMouseScroll="toNextPage()" @touchmove="toNextPage()">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'Page',
  data() {
    return {
      windowHeight: window.innerHeight,
      windowScrollTop: window.pageYOffset,
    };
  },
  methods: {
    toNextPage() {
      let beforeScrollTop = window.pageYOffset;
      console.log('done');
      return () => {
        const afterScrollTop = window.pageYOffset;
        // console.log('done');
        if (afterScrollTop - beforeScrollTop > 0) {
          window.scrollBy({
            top: this.windowHeight,
            behavior: 'smooth',
          });
          beforeScrollTop = afterScrollTop;
        } else {
          window.scrollBy({
            top: -this.windowHeight,
            behavior: 'smooth',
          });
          beforeScrollTop = afterScrollTop;
        }
      };
    },
  },
};
</script>

<style lang="scss">
</style>

