<template>
  <section class="final-scene" ref="finalScene">
    <div class="final-scene__text" :class="{ 'fade-out': isTextFadeOut }">
      <div class="final-scene__text--first" :class="{ 'fade-in': isTextFadeIn }">過去45年<br>林懷民用90齣舞作<br>不斷與台灣社會對話</div>
      <p><br></p>
      <div class="final-scene__text--last" :class="{ 'fade-in': isTextFadeIn }" @transitionend.once="textFadeInEnd" @webkitTransitionEnd.once="textFadeInEnd">退休前，<br>他最後有段話<br>想對現在的台灣說</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FinalScene',
  data() {
    return {
      // windowHeight: document.documentElement.clientHeight,
      // bodyClass: document.body.classList,
      root: document.documentElement,
      isTextFadeIn: false,
      isTextFadeOut: false,
    };
  },
  created() {
    window.addEventListener('scroll', this.finalSceneFade);
  },
  methods: {
    finalSceneFade() {
      if (window.pageYOffset + this.root.clientHeight === this.root.scrollHeight) {
        this.isTextFadeIn = true;
      }
    },
    textFadeInEnd() {
      this.isTextFadeOut = true;
    },
    // },
  //   finalSceneMove() {
  //     // const finalSceneY = this.$refs.finalScene.offsetTop。
  //     // const finalSceneYForScrollDown = finalSceneY - this.windowHeight;
  //     // if (window.pageYOffset + this.root.clientHeight === this.root.scrollHeight) {
  //     if (window.pageYOffset > document.getElementById('test').offsetTop - this.windowHeight) {
  //       console.log('done');
  //       this.$refs.finalScene.style.transform = 'translateY(0px)';
  //       window.scrollTo({
  //         top: document.getElementById('test').offsetTop - this.windowHeight,
  //         behavior: 'instant',
  //       });
  //       this.root.className = '';
  //       this.bodyClass.remove('overflow-visible');
  //       // console.log('success');
  //       // window.scrollBy({
  //       // top: this.windowHeight,
  //       // behavior: 'smooth',
  //       // });
  //       // this.root.className = '';
  //       // this.bodyClass.remove('overflow-visible');
  //     }
  //   },
  },
};
</script>

<style lang="scss">
.final-scene {
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__text {
    color: #b98e49;
    font-size: 3.6rem;
    line-height: 1.67;
    letter-spacing: 7.2px;
    transition: opacity 2s 1s;
    &--first {
      opacity: 0;
      transition: opacity 2s;
    }
    &--last {
      opacity: 0;
      transition: opacity 2s 2s;
    }
  }
}
</style>

