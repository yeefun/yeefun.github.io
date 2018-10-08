const mixin = {
  data() {
    return {
      windowWidth: document.documentElement.clientWidth,
    };
  },
  created() {
    window.addEventListener('resize', () => {
      this.windowWidth = document.documentElement.clientWidth;
    });
  },
  computed: {
    isMobileSize() {
      return this.windowWidth < 576;
    },
  },
};

export default mixin;
