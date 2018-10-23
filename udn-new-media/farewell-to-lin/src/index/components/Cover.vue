<template>
  <!-- <article class="cover" @wheel.once="dancerMove" @touchmove.once="ancerMove"> -->
  <article class="cover" @wheel="isLoad || dancerMove()" @touchmove="isLoad || dancerMove()">
    <!-- <video poster="../assets/CoverImg/empty.png" class="cover__video" data-object-fit muted autoplay loop playsinline webkit-playsinline :style="`background-image: url(${videoImg})`">
      <source src="../assets/video/mobile_video.mp4" v-if="$root.isMobileSize" type="video/mp4"/>
      <source src="../assets/video/web_video.mp4" v-else type="video/mp4"/>
    </video> -->

    <video src="../assets/video/mobile_bg.mp4" poster="../assets/CoverImg/video_mob.jpg" class="cover__video" data-object-fit muted autoplay loop playsinline webkit-playsinline v-show="$root.isMobileSize"></video>
    <video src="../assets/video/web_bg.mp4" poster="../assets/CoverImg/video_web.jpg" class="cover__video" data-object-fit muted autoplay loop v-show="!$root.isMobileSize"></video>

    <section class="cover__title-wrapper">
      <div class="cover__subtitle" :class="{ 'cover__subtitle-move': isCoverTitleMove }"
      @transitionend.once="subtitleMoveEnd" @webkitTransitionEnd.once="subtitleMoveEnd">
        <p>退</p>
        <p>休</p>
        <p>前</p>
        <p>&ensp;</p>
        <p>林</p>
        <p>懷</p>
        <p>民</p>
        <p>給</p>
        <p>土</p>
        <p>地</p>
        <p>的</p>
        <p>情</p>
        <p class="mb-0">書</p>
      </div>
      <transition name="title-fade" @after-enter="isCoverTitleMove = true">
        <div class="cover__title" v-if="isCoverTitleFadeIn" :class="{ 'cover__title-move': isCoverTitleMove }">
          <div class="cover__title-left">
            <p>都</p>
            <p>是</p>
            <p>我</p>
            <p>們</p>
            <p>的</p>
            <p>共</p>
            <p class="mb-0">業</p>
          </div>
          <div>
            <p>台</p>
            <p>灣</p>
            <p>無</p>
            <p>論</p>
            <p>好</p>
            <p>壞</p>
            <p class="mb-0">，</p>
          </div>
        </div>
      </transition>
    </section>

    <transition name="mask-fade" @after-leave="isCoverTitleFadeIn = true">
      <div class="cover__mask" v-if="!isCoverFadeOut">

        <div class="cover__prompt" v-if="isLoad">載入中…</div>

        <!-- <div class="cover__prompt" v-if="isCoverPromptExist"> -->
        <div class="cover__prompt-wrapper" v-else-if="isCoverPromptExist">
          <!-- <div class="cover__prompt-to-bottom">
            <p>請滑動</p>
          </div>
          <div class="cover__prompt-to-bottom cover__prompt-to-bottom--dashed"></div> -->
          <div class="cover__prompt cover__prompt-to-bottom">請滑動</div>
          <div class="cover__prompt cover__prompt-to-bottom cover__prompt-to-bottom--dashed"></div>
        </div>
        <!-- <div class="cover__img"> -->
        <div class="cover__img" :style="`opacity: ${imgOpacity};`">
          <img src="../assets/CoverImg/hito1.png" :class="dancerClass(1)"
          @transitionend="dancerMoveEnd" @webkitTransitionEnd="dancerMoveEnd" alt="">
          <img src="../assets/CoverImg/hito2.png" :class="dancerClass(2)" alt="">
          <img src="../assets/CoverImg/hito3.png" :class="dancerClass(3)" alt="">
          <img src="../assets/CoverImg/hito4.png" :class="dancerClass(4)" alt="">
          <img src="../assets/CoverImg/hito5.png" :class="dancerClass(5)" alt="">
        </div>
      </div>
    </transition>

    <transition name="cover-end-fade">
      <img v-if="$parent.isHeadBarShow" class="cover__arrow" src="../../assets/CoverImg/arrow.png" alt="">
    </transition>
  </article>
</template>

<script>
import videoImgMob from '../assets/CoverImg/video_mob.jpg';
import videoImgWeb from '../assets/CoverImg/video_web.jpg';

export default {
  name: 'Cover',
  data() {
    return {
      isLoad: true,
      loadingTimer: null,

      isDancerMove: false,
      isCoverPromptExist: true,
      isCoverFadeOut: false,
      isCoverTitleFadeIn: false,
      isCoverTitleMove: false,

      imgOpacity: 0,
      isImgOpacityReduce: false,
    };
  },
  created() {
    window.addEventListener('load', this.loadHandler);
    this.loadingHandler();
  },
  computed: {
    videoImg() {
      return this.$root.isMobileSize ? videoImgMob : videoImgWeb;
    },
  },
  methods: {

    loadingHandler() {
      this.loadTimer = setTimeout(() => {
        if (this.imgOpacity >= 1) {
          this.loadHandler();
          window.removeEventListener('load', this.loadHandler);
        }
        this.imgOpacity += 0.1;
        this.loadingHandler();
      }, 300);
    },
    loadHandler() {
      this.imgOpacity = 1;
      clearTimeout(this.loadTimer);
      this.isLoad = false;
      setTimeout(() => {
        this.isCoverPromptExist = false;
        this.isDancerMove = true;
      }, 6000);
    },

    dancerClass(idx) {
      const dancerClass = {
        'dancer-move': this.isDancerMove,
      };
      dancerClass[`dancer${idx}`] = true;
      dancerClass[`dancer${idx}-move`] = this.isDancerMove && idx !== 5;
      return dancerClass;
    },
    dancerMove() {
      this.isCoverPromptExist = false;
      this.isDancerMove = true;
    },
    dancerMoveEnd() {
      if (!this.isDancerMove) return;
      this.isCoverFadeOut = true;
    },
    subtitleMoveEnd() {
      // if (this.$root.isMobileSize) {
      setTimeout(() => {
        this.$root.cacheHTML.className = 'of-v';
        document.body.classList.add('of-v');
      }, 1000);
      // }
      // this.$parent.canScroll = true;
      this.$parent.isHeadBarShow = true;
    },
  },
};
</script>

<style lang="scss">
.cover {
  // height: 100vh;
  // height: 100%;
  position: relative;
  overflow: hidden;

  width: 100%;
  // background-color: #000;
  // z-index: 9;
  // @media screen and (min-width: 576px) {
  //   position: absolute;
  // }
  // IE 11 can't work properly
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // @media screen and (min-width: 576px) {
  //   height: 100%;
  // }
  &__video {
    // position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-size: cover;
    background-position: center;
  }

  &__mask {
    position: absolute;
    background-color: #000;
    // ORIGIN
    // transition: opacity 5s 2s;
    // transition: opacity 3s 1s;
    width: 100%;
    height: 100%;
    top: 0;
  }

  &__prompt {
    // width: 100%;
    // height: 100%;
    // width: 100px;
    // height: 100px;
    width: 120px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1.5px solid lightgrey;
    border-radius: 50%;
    color: lightgrey;
    font-size: 2.4rem;
    // line-height: 32px;
    box-sizing: border-box;

    &-wrapper {
      width: 100%;
      height: 100%;
    }

    &-to-bottom {
      // width: 100px;
      // height: 100px;
      // display: flex;
      // justify-content: center;
      // align-items: center;
      // position: absolute;
      // top: 20%;
      // left: 50%;
      // transform: translate(-50%, -50%);
      // border: 1.5px solid lightgrey;
      // border-radius: 50%;
      // color: lightgrey;
      // font-size: 2.4rem;
      // box-sizing: border-box;
      top: 20%;
      // animation: prompt-to-bottom 3s 1s infinite;
      animation: prompt-to-bottom 3s 0.5s infinite;

      @keyframes prompt-to-bottom {
        0% {
          opacity: 0;
        }

        20% {
          opacity: 0.5;
        }

        80% {
          opacity: 1;
        }

        90% {
          top: 50%;
          opacity: 0.5;
        }

        100% {
          top: 50%;
          opacity: 0;
        }
      }

      &--dashed {
        border-width: 2px;
        border-style: dashed;
        // animation-delay: 1.2s;
        animation-delay: 0.7s;
      }
    }
  }

  &__img {
    position: absolute;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // ORIGIN
    // transition: opacity 5s 2s;
    // transition: opacity 3s 1s;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    & img {
      // height: 20vh;
      height: 20%;
      width: auto;
      position: relative;
      // ORIGIN
      // transition: all 1s;
      transition: all 1.6s;
    }
  }

  &__title-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    // flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
  }

  &__title {
    position: relative;
    transform: translateX(-21px);
    left: 0%;
    /*  for vertical center
     ** noted "align-items: center;" can make BOX-MODEL (so include "margin-top") center
     */
    // margin-top: 14px;
    // opacity: 0;
    // right: 0;
    // ORIGIN
    // transition: opacity 4s, right 0.5s 2s;
    // transition: opacity 2s, right 2s 0.5s;
    transition: transform 1s 0.5s;
    color: #fff;
    font-weight: 700;
    display: flex;

    @media screen and (min-width: 576px) {
      // calculate for center
      transform: translateX(-30px);
      transition: left 2s 0.5s, transform 2s 0.5s;
    }

    &-left {
      margin-right: 20px;
      @media screen and (min-width: 576px) {
        margin-right: 28px;
      }
    }

    &-move {
      transform: translateX(0px);
      @media screen and (min-width: 576px) {
        left: 20%;
      }
    }

    & p {
      font-size: 4.0rem;
      // margin-bottom: 2.4vh;
      margin-bottom: 12px;
      @media screen and (min-width: 576px) {
        font-size: 6.0rem;
      }
    }
  }

  &__subtitle {
    position: relative;
    transform: translate(-8px, 48px);
    margin-right: 24px;
    opacity: 0;
    // transform: translate(54px, 30px);
    // right: 25%;
    // ORIGIN
    // transition: right 0.25s 2.25s;
    transition: all 0.75s 0.75s;

    @media screen and (min-width: 576px) {
      // transform: translate(144px, -16px);
      left: 20%;
      margin-right: 32px;
      transform: translate(-8px, 48px);
      transition: all 0.75s 1.75s;
    }

    &-move {
      transform: translate(0px, 48px);
      opacity: 1;

      // @media screen and (min-width: 576px) {
      //   transform: translate(128px, -16px);
      // }
    }

    & p {
      color: #fff;
      font-size: 1.8rem;
      margin-bottom: 2px;
      // letter-spacing: 4px;
      @media screen and (min-width: 576px) {
      // transform: translate(144px, -16px);
        font-size: 2.8rem;
      }
    }
  }

  &__arrow {
    position: absolute;
    // bottom: 30px;
    bottom: 4.5%;
    left: 50%;
    transform: translateX(-50%);
    width: 25px;
    height: auto;
    // animation: arrow-move 2s infinite;
    // @keyframes arrow-move {
    //   0% {
    //     bottom: 6.5%;
    //   }

    //   100% {
    //     bottom: 4.5%;
    //   }
    // }
  }
}

.dancer-move {
  // can't write only 0, otherwise IE can't work properly
  top: 0% !important;
  left: 0vw !important;
}

.dancer1 {
  top: -12%;
  left: 28vw;
  transform: translateY(80%) rotate(38deg);

  @media screen and (min-width: 576px) {
    top: 34%;
    left: -6vw;
    transform: translateY(80%);
  }

  &-move {
    transform: translateY(88%) rotate(0deg);
  }
}

.dancer2 {
  top: 14%;
  left: 8vw;
  transform: translateY(40%) rotate(-40deg);

  @media screen and (min-width: 576px) {
    top: -16%;
    left: -24vw;
    transform: translateY(40%);
  }

  &-move {
    transform: translateY(40%) rotate(0deg);
  }
}

.dancer3 {
  top: -24%;
  left: -26vw;
  transform: rotate(-16deg);

  @media screen and (min-width: 576px) {
    top: 24%;
    left: -36vw;
  }

  &-move {
    transform: rotate(0deg);
  }
}

.dancer4 {
  top: 14%;
  left: 30vw;
  transform: translateY(-40%);

  @media screen and (min-width: 576px) {
    top: -34%;
    left: 24vw;
    transform: translateY(-40%);
  }
  &-move {
    transform: translateY(-32%);
  }
}

.dancer5 {
  top: 12%;
  left: -32vw;
  transform: translateY(-80%);

  @media screen and (min-width: 576px) {
    top: 4%;
    left: 32vw;
    transform: translateY(-80%);
  }
}
</style>

