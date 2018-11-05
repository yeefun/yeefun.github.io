<template>
  <article class="test">
    <section class="test-answer" v-show="isAnswerShow">
      <!-- <img :id="`answer-head--${test.id}`" :src="test.answerImg" alt=""> -->
      <div :id="`answer-text--${test.id}`">
        <div class="candidate-name" :class="test.backgroundColorOfAnswerName">{{ test.answerName }}</div>
        <h2>{{ test.saying }}</h2>
        <p>{{ test.context }}</p>
        <button type="button" class="test-answer__next-btn">下一題</button>
      </div>
    </section>
    <!-- <section class="test-question" v-if="false"> -->
    <section class="test-question" :id="`question--${test.id}`" v-if="isQuestionShow">
      <div class="test-question__quotation">
        <img :id="`quotation-mark-top--${test.id}`" class="test-question__quotation-mark test-question__quotation-mark--top" src="../assets/quotation-mark.png" alt="" v-if="!hideForAnswerPop">
        <h2 :id="`quotation--${test.id}`" v-if="!hideForAnswerPop"></h2>
        <img :id="`quotation-mark-bottom--${test.id}`" class="test-question__quotation-mark test-question__quotation-mark--bottom" src="../assets/quotation-mark.png" alt="" v-if="!hideForAnswerPop">
      </div>
      <div class="test-question__drop-place" :id="`drop-place--${test.id}`">
        <img class="test-question__head" src="../assets/Candidates/pseudo_head.png" ref="droppedHead" :id="`droppedHead--${test.id}`" alt="" v-show="!hideForAnswerPop">
        <img :src="test.answerImg" class="test-question__answer-head" :id="`answer-head--${test.id}`" alt="">
        <p class="test-question__drop-place-prompt" v-show="!hideForAnswerPop">拖曳<br>頭像</p>

        <svg viewBox="0 0 86 86" v-show="!hideForAnswerPop">
          <g transform="translate(-19 -398)">
            <g class="cls-1" transform="translate(19 398)">
              <!-- <circle class="check-fill" :id="`correct-fill--${test.id}`" cx="43" cy="43" r="43"/> -->
              <circle class="check-fill" cx="43" cy="43" r="43"/>
              <circle class="check-stroke" :id="`correct-stroke--${test.id}`" cx="43" cy="43" r="41.5"/>
            </g>
            <path class="check-mark check-mark--tick" :id="`tick--${test.id}`" d="M36.082,1221.95l15.807,15.832,31.615-32.3" transform="translate(4 -781)"/>
          </g>
        </svg>

        <svg viewBox="0 0 86 86" v-show="!hideForAnswerPop">
          <g transform="translate(-113 -398)">
            <g transform="translate(113 398)">
              <!-- <circle class="check-fill" :id="`incorrect-fill--${test.id}`" cx="43" cy="43" r="43"/> -->
              <circle class="check-fill" cx="43" cy="43" r="43"/>
              <circle class="check-stroke" :id="`incorrect-stroke--${test.id}`" cx="43" cy="43" r="41.5"/>
            </g>
            <path class="check-mark check-mark--cross" :id="`cross-right--${test.id}`" d="M149,1182.4v48.783" transform="translate(903.972 -517.898) rotate(45)"/>
            <path class="check-mark check-mark--cross" :id="`cross-left--${test.id}`" d="M149,1182.4v48.783" transform="translate(-802.69 -307.18) rotate(-45)"/>
          </g>
        </svg>

      </div>
      <div class="test-question__candidate">
        <!-- <transition> -->
        <div v-for="(num, idx) in test.names.length" :key="test.names[idx]" :id="`candidate${idx + 1}--${test.id}`">
          <img @mousedown.prevent="!canDragHead || mouseDragStart($event)" @touchstart.prevent="!canDragHead || touchDragStart($event)" class="test-question__head test-question__head--candidate" :src="test.imgs[idx]" :data-name="test.names[idx]" alt="">
          <div class="candidate-name" :class="test.backgroundColorOfNames[idx]">{{ test.names[idx] }}</div>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
// import {
//   TweenLite, Power2, Power4, Back,
// } from 'gsap/TweenMax';

export default {
  name: 'Test',
  props: ['test'],
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      touchX: 0,
      touchY: 0,

      draggedHeadTotalMoveX: 0,
      draggedHeadTotalMoveY: 0,

      draggedHead: null,

      draggedHeadTop: 0,
      draggedHeadLeft: 0,
      droppedHeadOffsetTop: 0,
      droppedHeadOffsetLeft: 0,
      canDragHead: false,
      isDraggedHeadMatchDrop: false,

      windowEle: window,
      htmlEle: document.documentElement,
      resizeTimer: null,
      isAnswerShow: false,
      isQuestionShow: true,
      hideForAnswerPop: false,
      typeSayingTimer: null,
    };
  },
  computed: {
    triggerDropMatchRange() {
      return this.$test.computed.triggerDropMatchRange(this);
    },
  },
  methods: {
    setDroppedHeadOffset() {
      this.$test.methods.setDroppedHeadOffset(this);
    },
    resizeHandler() {
      this.$test.methods.resizeHandler(this);
    },
    slideInDynamic() {
      this.$test.methods.slideInDynamic(this);
    },
    typeQuotation() {
      this.$test.methods.typeQuotation(this);
    },
    mouseDragStart(evt) {
      this.$test.methods.mouseDragStart(evt, this);
    },
    mouseDragging(evt) {
      this.$test.methods.mouseDragging(evt, this);
    },
    mouseDrop(evt) {
      this.$test.methods.mouseDrop(evt, this);
    },
    touchDragStart(evt) {
      this.$test.methods.touchDragStart(evt, this);
    },
    touchDragging(evt) {
      this.$test.methods.touchDragging(evt, this);
    },
    touchDrop(evt) {
      this.$test.methods.touchDrop(evt, this);
    },
    headDropped() {
      this.$test.methods.headDropped(this);
    },
    checkAnswerDynamic() {
      this.$test.methods.checkAnswerDynamic(this);
    },
    switchQuestionToAnswer() {
      this.$test.methods.switchQuestionToAnswer(this);
    },
    checkDraggedHeadInDropRange() {
      this.$test.methods.checkDraggedHeadInDropRange(this);
    },
  },
};
</script>

<style lang="scss">
@import '../css/mixin.scss';

.check-stroke {
  fill: none;
  stroke: #efefef;
  stroke-width: 3px;
  stroke-dasharray: 260.8;
  stroke-dashoffset: 260.8;
  transform: rotate(-90deg);
  transform-origin: center;
}
.check-fill {
  stroke: none;
  // fill: #efefef;
  // opacity: 0;
  fill: none;
}

.check-mark {
  stroke: #fff;
  // stroke: #000;
  stroke-width: 10px;
  fill: none;
  &--tick {
    stroke-dasharray: 68;
    stroke-dashoffset: 68;
  }
  &--cross {
    stroke-dasharray: 50;
    stroke-dashoffset: 50;
  }
}

.candidate-name {
  text-align: center;
  border-radius: 100px;
  font-size: 1.3rem;
  line-height: 1.65;
  color: #fff;
  width: 80px;
}

.test {
  padding-right: 20px;
  padding-left: 20px;
  font-size: 2rem;
  // position: relative;
  // width: 100%;
  // flex: 0 0 100%;
  min-width: 100%;
  // width: 375px;
  // flex-shrink: 0;
  box-sizing: border-box;
  &-answer {
    top: 279px;

    position: absolute;
    width: 100%;
    // width: 375px;
    left: 0;
    padding-right: 20px;
    padding-left: 20px;
    box-sizing: border-box;
    margin-bottom: 14px;
    z-index: 49;
    text-align: center;
    // opacity: 0;
    & > div {
      text-align: left;
    }
    & img {
      // width: 100%;
      width: 80%;
      transform-origin: center bottom;
    }
    & h2 {
      font-weight: 700;
      line-height: 1.25;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    & p {
      line-height: 1.25;
      margin-bottom: 30px;
    }
    &__next-btn {
      width: 190px;
      height: 32px;
      background-color: #000;
      /* line-height: 2.2; */
      font-size: 15px;
    }
  }
  &-question {
    // margin-bottom: 32px;
    &__quotation {
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 18px;
      &-mark {
        width: 25px;
        opacity: 0;
        // height: auto;
        &--top {
          margin-bottom: 10px;
          transform: rotate(180deg);
        }
        &--bottom {
          margin-top: 10px;
          display: block;
          margin-left: auto;
        }
      }
    }
    &__answer-head {
      position: absolute;
      width: 80px;
      // left: 0;
      opacity: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    & h2 {
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1.4;
    }
    svg {
      fill: none;
      position: absolute;
      width: 86px;
      height: 86px;
      @include align-center;
      // left: 50%;
      // transform: translateX(-50%);
      z-index: 9;
      // top: 0;
      // left: 50%;
      // transform: translateX(-50%);
    }
    &__drop-place {
      position: relative;
      margin-bottom: 35px;
      text-align: center;
      opacity: 0;
      // width: 80px;
      margin-left: auto;
      margin-right: auto;
      // & img {
        // position: relative;
        // z-index: -9;
        // width: 100%;
      // }
      &-prompt {
        position: absolute;
        @include align-center;
        font-size: 1.5rem;
        color: #707070;
        line-height: 1.13;
        user-select: none;
      }
    }
    &__head {
      width: 80px;
      // height: auto;
      border-radius: 50%;
      box-sizing: border-box;
      &--candidate {
        border: 1px solid #d5d4d4;
        margin-bottom: 5px;
        // position: relative;
        // position: absolute;
        // top: 0;
        background-color: #fff;
        cursor: pointer;
        @supports (cursor: grab) {
          cursor: grab;
        }
      }
    }
    &__candidate {
      position: relative;
      display: flex;
      justify-content: space-between;
      // margin-bottom: 32px;
      // padding-top: 85px;
      & > div {
        transform: translateX(375px);
      }
      // &-name {
      //   text-align: center;
      //   border-radius: 100px;
      //   font-size: 1.3rem;
      //   line-height: 1.65;
      //   color: #fff;
      // }
    }
  }
}
</style>
