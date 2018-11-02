<template>
  <article class="test">
    <section class="test-answer" v-show="isAnswerShow">
      <img id="answer-head" :src="test.answerImg" alt="">
      <div id="answer-text">
        <div class="candidate-name" :class="test.backgroundColorOfName">{{ test.answerName }}</div>
        <h2>{{ test.saying }}</h2>
        <p>{{ test.context }}</p>
        <button type="button" class="test-answer__next-btn">下一題</button>
      </div>
    </section>
    <!-- <section class="test-question" v-if="false"> -->
    <section class="test-question" id="question" v-if="isQuestionHide">
      <div class="test-question__quotation">
        <img class="test-question__quotation-mark test-question__quotation-mark--top" src="../assets/quotation-mark.png" alt="">
        <h2>{{ test.saying }}</h2>
        <img class="test-question__quotation-mark test-question__quotation-mark--bottom" src="../assets/quotation-mark.png" alt="">
      </div>
      <div class="test-question__drop-place">
        <img class="test-question__drop-place-head" src="../assets/Candidates/pseudo_head.png" ref="droppedHead" id="droppedHead" alt="">
        <p class="test-question__drop-place-prompt">拖曳<br>頭像</p>

        <svg viewBox="0 0 86 86">
          <g transform="translate(-19 -398)">
            <g class="cls-1" transform="translate(19 398)">
              <circle class="check-fill" id="correct-fill" cx="43" cy="43" r="43"/>
              <circle class="check-stroke" id="correct-stroke" cx="43" cy="43" r="41.5"/>
            </g>
            <path class="check-mark check-mark--tick" id="tick" d="M36.082,1221.95l15.807,15.832,31.615-32.3" transform="translate(4 -781)"/>
          </g>
        </svg>

        <svg viewBox="0 0 86 86">
          <g transform="translate(-113 -398)">
            <g transform="translate(113 398)">
              <circle class="check-fill" id="incorrect-fill" cx="43" cy="43" r="43"/>
              <circle class="check-stroke" id="incorrect-stroke" cx="43" cy="43" r="41.5"/>
            </g>
            <path class="check-mark check-mark--cross" id="cross-right" d="M149,1182.4v48.783" transform="translate(903.972 -517.898) rotate(45)"/>
            <path class="check-mark check-mark--cross" id="cross-left" d="M149,1182.4v48.783" transform="translate(-802.69 -307.18) rotate(-45)"/>
          </g>
        </svg>

      </div>
      <div class="test-question__candidate">
        <div>
          <img @mousedown.prevent="!canDragHead || mouseDragStart($event)" @touchstart.prevent="!canDragHead || touchDragStart($event)" class="test-question__candidate-head" :src="test.imgs[0]" :data-name="test.names[0]" alt="">
          <div class="candidate-name bg-blue">{{ test.names[0] }}</div>
        </div>
        <div>
          <img @mousedown.prevent="!canDragHead || mouseDragStart($event)" @touchstart.prevent="!canDragHead || touchDragStart($event)" class="test-question__candidate-head" :src="test.imgs[1]" :data-name="test.names[1]" alt="">
          <div class="candidate-name bg-grey">{{ test.names[1] }}</div>
        </div>
        <div>
          <img @mousedown.prevent="!canDragHead || mouseDragStart($event)" @touchstart.prevent="!canDragHead || touchDragStart($event)" class="test-question__candidate-head" :src="test.imgs[2]" :data-name="test.names[2]" alt="">
          <div class="candidate-name bg-blue">{{ test.names[2] }}</div>
        </div>
        <div>
          <img @mousedown.prevent="!canDragHead || mouseDragStart($event)" @touchstart.prevent="!canDragHead || touchDragStart($event)" class="test-question__candidate-head" :src="test.imgs[3]" :data-name="test.names[3]" alt="">
          <div class="candidate-name bg-green">{{ test.names[3] }}</div>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import {
  TweenLite, Power2, Power4, Back,
} from 'gsap/TweenMax';

export default {
  name: 'Test',
  props: ['test', 'answer'],
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
      canDragHead: true,
      isDraggedHeadMatchDrop: false,

      windowEle: window,
      htmlEle: document.documentElement,
      resizeTimer: null,
      isAnswerShow: false,
      isQuestionHide: true,
      // isCorrect: false,
    };
  },
  created() {
    window.addEventListener('load', this.loadHandler);
    window.addEventListener('resize', this.resetDroppedHeadOffset);
  },
  computed: {
    triggerDropMatchRange() {
      // const droppedHeadWidth = this.$refs.droppedHead.offsetWidth;
      // const droppedHeadHeight = this.$refs.droppedHead.offsetHeight;
      return {
        top: this.droppedHeadOffsetTop + (this.$refs.droppedHead.offsetHeight / 2),
        left: this.droppedHeadOffsetLeft + (this.$refs.droppedHead.offsetWidth / 2),
        // top: this.droppedHeadOffsetTop + (droppedHeadHeight / 3),
        // bottom: this.droppedHeadOffsetTop + (droppedHeadHeight / 3 * 2),
        // left: this.droppedHeadOffsetLeft + (droppedHeadWidth / 3),
        // right: this.droppedHeadOffsetLeft + (droppedHeadWidth / 3 * 2),
      };
    },
  },
  methods: {
    loadHandler() {
      const droppedHeadRect = this.$refs.droppedHead.getBoundingClientRect();
      this.droppedHeadOffsetTop = droppedHeadRect.top + this.windowEle.pageYOffset;
      this.droppedHeadOffsetLeft = droppedHeadRect.left + this.windowEle.pageXOffset;
    },
    resetDroppedHeadOffset() {
      if (this.resizeTimer) {
        clearTimeout(this.resizeTimer);
      }
      this.resizeTimer = setTimeout(() => {
        const droppedHeadRect = this.$refs.droppedHead.getBoundingClientRect();
        this.droppedHeadOffsetTop = droppedHeadRect.top + this.windowEle.pageYOffset;
        this.droppedHeadOffsetLeft = droppedHeadRect.left + this.windowEle.pageXOffset;
      }, 600);
    },
    mouseDragStart(evt) {
      this.draggedHead = evt.target;

      this.draggedHeadTop = this.draggedHead.getBoundingClientRect().top + this.windowEle.pageYOffset;
      this.draggedHeadLeft = this.draggedHead.getBoundingClientRect().left + this.windowEle.pageXOffset;

      TweenLite.to(this.draggedHead, 0.2, {
        scaleX: 1.2,
        scaleY: 1.2,
        ease: Power4.easeOut,
      });

      this.mouseX = evt.pageX;
      this.mouseY = evt.pageY;

      this.draggedHead.style.zIndex = '99';

      document.addEventListener('mousemove', this.mouseDragging);
    },
    touchDragStart(evt) {
      this.draggedHead = evt.target;

      this.draggedHeadTop = this.draggedHead.getBoundingClientRect().top + this.windowEle.pageYOffset;
      this.draggedHeadLeft = this.draggedHead.getBoundingClientRect().left + this.windowEle.pageXOffset;

      TweenLite.to(this.draggedHead, 0.2, {
        scaleX: 1.2,
        scaleY: 1.2,
        ease: Power4.easeOut,
      });

      this.touchX = evt.touches[0].pageX;
      this.touchY = evt.touches[0].pageY;

      this.draggedHead.style.zIndex = '99';

      this.draggedHead.addEventListener('touchmove', this.touchDragging);
    },
    mouseDragging(evt) {
      evt.preventDefault();
      const currentMouseX = evt.pageX;
      const currentMouseY = evt.pageY;
      this.draggedHeadTotalMoveX += currentMouseX - this.mouseX;
      this.draggedHeadTotalMoveY += currentMouseY - this.mouseY;

      TweenLite.set(this.draggedHead, {
        x: this.draggedHeadTotalMoveX,
        y: this.draggedHeadTotalMoveY,
      });

      this.checkDraggedHeadInDropRange();

      this.mouseX = currentMouseX;
      this.mouseY = currentMouseY;

      this.draggedHead.addEventListener('mouseup', this.mouseDrop);
    },
    touchDragging(evt) {
      evt.preventDefault();
      const currentTouchX = evt.changedTouches[0].pageX;
      const currentTouchY = evt.changedTouches[0].pageY;
      this.draggedHeadTotalMoveX += currentTouchX - this.touchX;
      this.draggedHeadTotalMoveY += currentTouchY - this.touchY;

      TweenLite.set(this.draggedHead, {
        x: this.draggedHeadTotalMoveX,
        y: this.draggedHeadTotalMoveY,
      });

      this.checkDraggedHeadInDropRange();

      this.touchX = currentTouchX;
      this.touchY = currentTouchY;

      this.draggedHead.addEventListener('touchend', this.touchDrop);
    },
    mouseDrop(evt) {
      evt.preventDefault();
      this.headDropped();
      this.draggedHead.style.zIndex = 'auto';

      document.removeEventListener('mousemove', this.mouseDragging);
      this.draggedHead.removeEventListener('mouseup', this.mouseDrop);
    },
    touchDrop(evt) {
      evt.preventDefault();
      this.headDropped();

      this.draggedHead.removeEventListener('touchmove', this.touchDragging);
      this.draggedHead.removeEventListener('touchend', this.touchDrop);
    },
    headDropped() {
      if (this.isDraggedHeadMatchDrop) {
        TweenLite.to(this.draggedHead, 0.2, {
          x: this.droppedHeadOffsetLeft - this.draggedHeadLeft,
          y: this.droppedHeadOffsetTop - this.draggedHeadTop,
          scaleX: 1,
          scaleY: 1,
          ease: Power4.easeOut,
        });
        this.canDragHead = false;

        TweenLite.to(this.draggedHead.nextElementSibling, 0.8, {
          opacity: 0,
          ease: Power2.easeInOut,
        });

        if (this.draggedHead.dataset.name === this.answer) {
          TweenLite.to('#correct-stroke', 0.8, {
            strokeDashoffset: 0,
            ease: Power2.easeInOut,
          });
          TweenLite.to('#correct-fill', 0.8, {
            opacity: 1,
            ease: Power2.easeInOut,
            delay: 0.8,
          });
          TweenLite.to('#tick', 0.8, {
            strokeDashoffset: 0,
            ease: Power2.easeInOut,
            delay: 1.6,
            onComplete: () => {
              this.switchQuestionToAnswer();
            },
          });
        } else {
          TweenLite.to('#incorrect-stroke', 0.8, {
            strokeDashoffset: 0,
            ease: Power2.easeInOut,
          });
          TweenLite.to('#incorrect-fill', 0.8, {
            opacity: 1,
            ease: Power2.easeInOut,
            delay: 0.8,
          });
          TweenLite.to('#cross-left', 0.4, {
            strokeDashoffset: 0,
            ease: Power2.easeInOut,
            delay: 1.6,
          });
          TweenLite.to('#cross-right', 0.4, {
            strokeDashoffset: 0,
            ease: Power2.easeInOut,
            delay: 2,
            onComplete: () => {
              this.switchQuestionToAnswer();
            },
          });
        }
      } else {
        TweenLite.to(this.draggedHead, 0.2, {
          x: 0,
          y: 0,
          scaleX: 1,
          scaleY: 1,
          ease: Power4.easeOut,
        });
      }

      this.draggedHead.style.zIndex = 'auto';
      this.draggedHeadTotalMoveX = 0;
      this.draggedHeadTotalMoveY = 0;
    },
    checkDraggedHeadInDropRange() {
      const draggedHeadRect = this.draggedHead.getBoundingClientRect();
      const scrollY = this.windowEle.pageYOffset;
      const scrollX = this.windowEle.pageXOffset;
      const dropDraggedHeadTop = draggedHeadRect.top + scrollY;
      const dropDraggedHeadBottom = draggedHeadRect.bottom + scrollY;
      const dropDraggedHeadLeft = draggedHeadRect.left + scrollX;
      const dropDraggedHeadRight = draggedHeadRect.right + scrollX;

      if (((dropDraggedHeadTop > this.droppedHeadOffsetTop && dropDraggedHeadTop < this.triggerDropMatchRange.top)
          || (dropDraggedHeadTop < this.droppedHeadOffsetTop && dropDraggedHeadBottom > this.triggerDropMatchRange.top))
        && ((dropDraggedHeadLeft < this.droppedHeadOffsetLeft && dropDraggedHeadRight > this.triggerDropMatchRange.left)
          || (dropDraggedHeadLeft > this.droppedHeadOffsetLeft && dropDraggedHeadLeft < this.triggerDropMatchRange.left))) {
        TweenLite.to(this.draggedHead, 0.2, {
          scaleX: 1,
          scaleY: 1,
          ease: Power4.easeOut,
        });

        this.isDraggedHeadMatchDrop = true;
      } else {
        TweenLite.to(this.draggedHead, 0.2, {
          scaleX: 1.2,
          scaleY: 1.2,
          ease: Power4.easeOut,
        });

        this.isDraggedHeadMatchDrop = false;
      }
    },
    switchQuestionToAnswer() {
      this.isAnswerShow = true;
      TweenLite.from('#answer-head', 0.4, {
        scaleX: 0,
        scaleY: 0,
        ease: Back.easeOut.config(1),
      });
      TweenLite.from('#answer-text', 0.4, {
        y: '50%',
        // y: this.htmlEle.clientHeight,
        // opacity: 0,
        ease: Power4.easeOut,
      });
      TweenLite.to('#question', 0.4, {
        y: '100%',
        // y: this.htmlEle.clientHeight,
        // opacity: 0,
        ease: Power4.easeOut,
        onComplete: () => {
          this.isQuestionHide = false;
        },
      });
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
  fill: #efefef;
  opacity: 0;
}

.check-mark {
  stroke: #fff;
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
  position: relative;
  &-answer {
    position: absolute;
    width: 100%;
    left: 0;
    padding-right: 20px;
    padding-left: 20px;
    box-sizing: border-box;
    margin-bottom: 14px;
    z-index: 49;
    // opacity: 0;
    & img {
      width: 100%;
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
      z-index: 9;
      // top: 0;
      // left: 50%;
      // transform: translateX(-50%);
    }
    &__drop-place {
      position: relative;
      margin-bottom: 35px;
      text-align: center;
      // &-head {
      //   position: relative;
      //   z-index: -9;
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
    &__drop-place-head, &__candidate-head {
      width: 80px;
      // height: auto;
      border-radius: 50%;
      box-sizing: border-box;
    }
    &__candidate {
      position: relative;
      display: flex;
      justify-content: space-between;
      // margin-bottom: 32px;
      padding-top: 85px;
      // & > div {
      //   width: 80px;
      // }
      &-head {
        border: 1px solid #d5d4d4;
        // margin-bottom: 5px;
        // position: relative;
        position: absolute;
        top: 0;
        background-color: #fff;
        cursor: pointer;
        @supports (cursor: grab) {
          cursor: grab;
        }
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
