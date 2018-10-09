const mixin = {
  data() {
    return {
      windowWidth: document.documentElement.clientWidth,
      windowHeight: document.documentElement.clientHeight,
    };
  },
  created() {
    window.addEventListener('load', () => {
      this.windowWidth = document.documentElement.clientWidth;
      this.windowHeight = document.documentElement.clientHeight;
      console.log('load', this.windowWidth, this.windowHeight);
    });
    window.addEventListener('resize', () => {
      this.windowWidth = document.documentElement.clientWidth;
      this.windowHeight = document.documentElement.clientHeight;
      console.log('resize', this.windowWidth, this.windowHeight);
    });
  },
  computed: {
    isMobileSize() {
      return this.windowWidth < 576;
    },
  },
};

export default mixin;
