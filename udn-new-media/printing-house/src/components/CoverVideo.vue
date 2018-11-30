<template>
  <section class="cover-video">
    <div class="cover-video-wrapper" @click.once="playMainVideo">
      <!-- <div class="cover-video__title-wrapper" v-if="isLoopingVideoState">
        <h2>票開完了，他們的工作才開始</h2>
        <h1>每晚與時間賽跑的印報人</h1>
      </div> -->
      <video class="cover-video__main" src="../assets/video/cover-main.mp4" poster="../assets/cover-backgroung-img.jpg" controls playsinline webkit-playsinline ref="mainVideo"></video>
      <!-- <transition name="fade"> -->
      <video class="cover-video__looping" src="../assets/video/cover-looping.mp4" poster="../assets/cover-backgroung-img.jpg" muted autoplay loop playsinline webkit-playsinline v-if="isLoopingVideoState"></video>
      <!-- </transition> -->
      <button type="button" v-if="isLoopingVideoState"></button>
      <div class="cover-video__title-wrapper" v-if="isLoopingVideoState">
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
      background-color: #4d7b9f;
      border-color: #4d7b9f;
      @media screen and (min-width: 992px) {
        background-color: rgba(255, 255, 255, 1);
      }
    }
  }
  &__looping {
    cursor: pointer;
  }
  & button {
    position: absolute;
    // padding: 38px 68px 38px 76px;
    border-radius: 4px;
    // background-color: rgba(255, 255, 255, 0.72);
    background-color: rgba(0, 0, 0, 0.64);
    transition: all 0.2s;
    padding: 14px 14.8px 14px 16.6px;
    border: 2px solid rgba(255, 255, 255, 0.64);
    left: 12px;
    bottom: 12px;
    box-sizing: border-box;
    @media screen and (min-width: 992px) {
      left: 50%;
      transform: translateX(-50%);
      top: 24%;
      background-color: rgba(255, 255, 255, 0.72);
      padding: 38px 68px 38px 76px;
      border-radius: 5px;
      border: none;
      bottom: auto;
    }
    &:after {
      content: '';
      display: block;
      border-style: solid;
      border-color: transparent transparent transparent #fff;
      border-width: 8px 0 8px 12.6px;
      @media screen and (min-width: 992px) {
        border-width: 28px 0 28px 44px;
        border-left-color: #000;
      }
    }
  }
  &__title-wrapper {
    position: absolute;
    color: #fff;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 56%;
    left: 50%;
    transform: translateX(-50%);
  }
  & h1 {
    font-size: 5.6rem;
    font-weight: 700;
    letter-spacing: 8px;
    margin-left: 4px;
    text-shadow: 1.6px 1.6px 8px rgba(0, 0, 0, 0.4);
  }
  & h2 {
    font-size: 3.2rem;
    margin-bottom: 24px;
    letter-spacing: 12px;
    margin-left: 6px;
    text-shadow: 0.8px 0.8px 4px rgba(0, 0, 0, 0.4);
    @media screen and (min-width: 992px) {

    }
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
