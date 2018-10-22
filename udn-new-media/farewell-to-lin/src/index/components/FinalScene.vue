<template>
  <section class="final-scene" id="third-anchor" ref="finalScene">
    <transition name="final-text-fade" @after-leave="isYoutubeFadeIn = true">
      <div class="final-scene__text" v-if="!isTextFadeOut">
        <div class="final-scene__text--first" :class="{ 'fade-in': isTextFadeIn }">過去45年<br>林懷民用90齣舞作<br>不斷與台灣社會對話</div>
        <p><br></p>
        <div class="final-scene__text--last" :class="{ 'fade-in': isTextFadeIn }" @transitionend.once="isTextFadeOut = true" @webkitTransitionEnd.once="isTextFadeOut = true">退休前<br>他最後有段話<br>想對現在的台灣說</div>
      </div>
    </transition>
    <transition name="youtube-fade" @after-enter="lastContentShow">
      <div class="final-scene__youtube" v-show="isYoutubeFadeIn">
        <slot></slot>
      </div>
    </transition>
  </section>
</template>

<script>

export default {
  name: 'FinalScene',
  data() {
    return {
      isTextFadeIn: false,
      // isTextFadeIn: true,
      isTextFadeOut: false,
      isYoutubeFadeIn: false,
    };
  },
  created() {
    window.addEventListener('scroll', this.finalSceneFade);
  },
  methods: {
    // finalSceneFade() {
    //   // OPT
    //   // CONFUSED if not add this, this event probably fires in page scroll of beginning. see: https://javascript.info/size-and-scroll-window#width-height-of-the-document
    //   if (!this.$parent.isHeadBarLight) return;
    //   if (this.$root.cacheWindow.pageYOffset + this.$root.windowHeight >= this.$root.cacheHTML.scrollHeight - (this.$root.windowHeight / 3)) {
    //     this.isTextFadeIn = true;
    //   }
    // },
    finalSceneFade() {
      if (!this.$parent.isHeadBarLight) return;
      if ((this.$refs.finalScene.getBoundingClientRect().top - (this.$root.windowHeight * 0.25)) < 0) {
        this.isTextFadeIn = true;
      }
    },
    lastContentShow() {
      this.$parent.isLastContentShow = true;
      this.$parent.canThirdYoutubePlay = true;
      if (!this.$parent.isIOS) this.$parent.thirdYoutube.playVideo();
    },
  },
};
</script>

<style lang="scss">
.final-scene {
  // height: 100vh;
  // background-color: #fff;
  // CONFUSED if set position 'relative', IE & Edge bottom will exist blank, so use flex instead
  // position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  // flex-direction: column;
  &__text {
    min-width: 198px;
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    color: #b98e49;
    // font-weight: 700;
    font-size: 2rem;
    line-height: 1.83;
    letter-spacing: 2px;
    // transition: opacity 2s 1s;
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
    width: 100%;
    // position: absolute;
    // opacity: 0;
    // transition: opacity 2s;
  }
}
</style>

