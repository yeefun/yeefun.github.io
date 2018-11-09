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
        <button class="primary-btn" type="button" @touchstart.prevent="slideToFirstTestPage" @click="slideToFirstTestPage">開始</button>
      </div>
    </div>
  </section>
</template>

<script>
import {
  TweenLite, Back,
} from 'gsap/TweenMax';
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
      TweenLite.to('#total-container', 0.3, {
        x: '-=100%',
        ease: Back.easeIn.config(1.4),
        onComplete: () => {
          this.isCoverShow = false;
          this.$parent.$refs.test1[0].testSlideInDynamic();
          // this.$parent.$refs.test6[0].testSlideInDynamic();
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
  // padding-right: 20px;
  // padding-left: 20px;
  // padding-top: 8px;
  box-sizing: border-box;
  &__text-wrapper {
    transform: translateY(-30px);
    padding-right: 20px;
    padding-left: 20px;
  }
  & > img {
    width: 100%;
  }
  & h2 {
    width: 136px;
    border: 0.5px solid #707070;
    font-size: 1.3rem;
    // font-weight: 300;
    // line-height: 2.54;
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
    // font-weight: 300;
    margin-bottom: 30px;
  }
  // & img {
  //   width: 100%;
  // }
  // & button {
  //   transition: all 0.3s;
  //   &:hover {
  //     background-color: #c64033;
  //     opacity: 0.6;
  //   }
  // }
  // & svg {
  //   margin-left: 8px;
  //   // margin-left: 12px;
  //   margin-bottom: 6px;
  //   width: 33.69px;
  //   height: 33px;
  //   // cursor: pointer;
  //   fill: #040000;
  //   transition: transform 0.5s;
  //   &:hover {
  //     transform: rotate(15deg);
  //   }
  // }
}
</style>
