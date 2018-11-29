<template>
  <section class="cover-video">
    <div class="cover-video-wrapper">
      <video class="cover-video__main" src="../assets/video/cover-main.mp4" poster="../assets/cover-backgroung-img.jpg" controls playsinline webkit-playsinline ref="mainVideo"></video>
      <!-- <transition name="fade"> -->
      <video class="cover-video__looping" src="../assets/video/cover-looping.mp4" poster="../assets/cover-backgroung-img.jpg" muted autoplay loop playsinline webkit-playsinline v-if="isLoopingVideoState" @click="playMainVideo"></video>
      <!-- </transition> -->
      <button type="button" v-if="isLoopingVideoState"></button>
      <div class="cover-video__title-wrapper">
        <h2>票開完了，他們的工作才開始</h2>
        <h1>每晚與時間賽跑的印報人</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CoverVideo',
  data() {
    return {
      isLoopingVideoState: true,
    };
  },
  methods: {
    playMainVideo() {
      this.isLoopingVideoState = false;
      this.$refs.mainVideo.play();
    },
  },
};
</script>

<style lang="scss">
.cover-video {
  &-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    &:hover > button {
      background-color: rgba(255, 255, 255, 1);
    }
  }
  &__looping {
    cursor: pointer;
  }
  & button {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 16%;
    padding: 38px 68px 38px 76px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.72);
    transition: background-color 0.2s;
    &:after {
      content: '';
      display: block;
      border-style: solid;
      border-width: 28px 0 28px 44px;
      border-color: transparent transparent transparent #000;
    }
  }
  &__title-wrapper {
    position: absolute;
    color: #fff;
  }
}
video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // vertical-align: top
}

// .fade-enter-active, .fade-leave-active {
//   transition: opacity 0.4s ease-in-out;
// }
// .fade-enter, .fade-leave-to {
//   opacity: 0;
// }
</style>
