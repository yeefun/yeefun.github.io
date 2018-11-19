<template>
  <section class="cover">
    <div v-if="isCoverShow">
      <HeadBar></HeadBar>
      <img src="../assets/cover-background.png" alt="">
      <div class="cover__text-wrapper">
        <h2>
          <div>候選人金句連連看</div>
        </h2>
        <h1>這些政策是誰提的？</h1>
        <p class="cover__intro">九合一選舉即將到來，每位候選人都積極喊出各種口號及政策，希望能獲得選民青睞。你知道這些金句出自哪幾位候選人嗎？來玩玩看這個小測驗吧！</p>
        <button type="button" @click.once="slideToFirstTestPage" @touchstart.prevent.once="slideToFirstTestPage">開始</button>
      </div>
    </div>
  </section>
</template>

<script>
// import TweenLite from 'gsap/TweenLite';
// import { Back } from 'gsap/EasePack.js';
// import {
//   TweenLite, Back,
// } from 'gsap/TweenMax';
import HeadBar from './HeadBar.vue';

export default {
  name: 'Cover',
  components: {
    HeadBar,
  },
  data() {
    return {
      isCoverShow: true,
    };
  },
  methods: {
    slideToFirstTestPage() {
      const candidateWrappers = document.getElementsByClassName('test-question__candidate-wrapper');
      for (let i = 0; i < candidateWrappers.length; i += 1) {
        candidateWrappers[i].style.transform = `translateX(${this.$parent.$refs.app.offsetWidth}px)`;
      }
      TweenLite.to('#total-container', 0.3, {
        x: '-=100%',
        ease: Back.easeIn.config(1.4),
        onComplete: () => {
          this.isCoverShow = false;
          this.$parent.currentStage += 1;
          this.$parent.$refs.test1[0].testSlideInDynamic();
          // this.$parent.$refs.test5[0].testSlideInDynamic();
        },
      });
    },
  },
};
</script>

<style lang="scss">
@import '../css/mixin.scss';

.cover {
  flex: 0 0 100%;
  // width: 100%;
  // flex-shrink: 0;
  box-sizing: border-box;
  &__text-wrapper {
    transform: translateY(-30px);
    padding-right: 20px;
    padding-left: 20px;
    @media screen and (min-width: 490px) {
      padding-right: 0;
      padding-left: 0;
    }
    max-width: 450px;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
  }
  // & > img {
  //   width: 100%;
  // }
  & img {
    display: block;
    max-width: 450px;
    margin-left: auto;
    margin-right: auto;
  }
  & h2 {
    width: 136px;
    border: 0.5px solid #707070;
    font-size: 1.3rem;
    text-align: center;
    box-sizing: border-box;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    background-color: #fff;
    transform: translateY(-8px);
    margin-bottom: 2px;
    & > div {
      width: 130px;
      height: 24px;
      border: 0.5px solid #707070;
      line-height: 24px;
      box-sizing: border-box;
    }
  }
  & h1 {
    font-size: 3.5rem;
    line-height: 1.14;
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;
  }
  &__intro {
    font-size: 2rem;
    line-height: 1.25;
    margin-bottom: 30px;
  }
  & button {
    position: relative;
    height: 40px;
    font-size: 2rem;
    background-color: #d14033;
    line-height: 40px;
    transition: all 0.3s;
    overflow: hidden;
    // &:hover {
    //   background-color: #c64033;
    //   opacity: 0.6;
    // }
    &:after {
      content: '';
      background-color: #ff5e5e;
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: 100px;
      transform: scale(0);
      opacity: 1;
      transition: all 0s;
      // content: '';
      // background-color: #ff5e5e;
      // display: block;
      // position: absolute;
      // width: 100%;
      // height: 100%;
      // top: 0;
      // left: 0;
      // border-radius: 100px;
      // transform: scale(2);
      // opacity: 0;
      // transition: all 0.3s ease-out;
    }
    &:hover:after {
      animation: ripple 0.8s infinite cubic-bezier(0.165, 0.84, 0.44, 1);
      @keyframes ripple {
        25% {
          transform: scale(0);
          opacity: 1;
        }
        100% {
          transform: scale(1);
          opacity: 0;
        }
      }
      // transform: scale(0);
      // opacity: 1;
      // transition: all 0s;
    }
  }
}
</style>
