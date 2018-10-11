<template>
  <section class="final-scene" ref="finalScene">
    <div class="final-scene__text" :class="{ 'fade-out': isTextFadeOut }" @transitionend.self.once="isYoutubeFadeIn = true" @webkitTransitionEnd.self.once="isYoutubeFadeIn = true">
      <div class="final-scene__text--first" :class="{ 'fade-in': isTextFadeIn }">過去45年<br>林懷民用90齣舞作<br>不斷與台灣社會對話</div>
      <p><br></p>
      <div class="final-scene__text--last" :class="{ 'fade-in': isTextFadeIn }" @transitionend.once="isTextFadeOut = true" @webkitTransitionEnd.once="isTextFadeOut = true">退休前，<br>他最後有段話<br>想對現在的台灣說</div>
    </div>
    <div class="final-scene__youtube" :class="{ 'fade-in': isYoutubeFadeIn }" @transitionend.once="$parent.isLastContentShow = true" @webkitTransitionEnd.once="$parent.isLastContentShow = true">
      <slot></slot>
    </div>
  </section>
</template>

<script>

export default {
  name: 'FinalScene',
  data() {
    return {
      isTextFadeIn: false,
      isTextFadeOut: false,
      isYoutubeFadeIn: false,
    };
  },
  created() {
    window.addEventListener('scroll', this.finalSceneFade);
  },
  methods: {
    finalSceneFade() {
      if (this.$root.cacheWindow.pageYOffset + this.$root.cacheHTML.clientHeight >= this.$root.cacheHTML.scrollHeight - 8) {
        this.isTextFadeIn = true;
      }
    },
  },
};
</script>

<style lang="scss">
.final-scene {
  height: 100vh;
  // background-color: #fff;
  position: relative;
  &__text {
    min-width: 198px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #b98e49;
    font-size: 2rem;
    line-height: 1.83;
    letter-spacing: 2px;
    transition: opacity 2s 1s;
    @media screen and (min-width: 576px) {
      min-width: 376px;
      font-size: 3.6rem;
      line-height: 1.67;
      letter-spacing: 7.2px;
    }
    &--first {
      opacity: 0;
      transition: opacity 2s;
    }
    &--last {
      opacity: 0;
      transition: opacity 2s 2s;
    }
  }
  &__youtube {
    opacity: 0;
    transition: opacity 2s;
  }
}
</style>

