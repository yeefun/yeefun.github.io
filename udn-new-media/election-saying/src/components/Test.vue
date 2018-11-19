<template>
  <article class="test">
    <div v-if="test.id !== 1 ? isTestShow : !isTestShow">
    <!-- <div v-if="test.id !== 5 ? isTestShow : !isTestShow"> -->
      <section class="test-answer" v-show="isAnswerShow">
        <div :id="`answer-text--test${test.id}`">
          <div class="candidate-name candidate-name--answer" :class="test.backgroundColorOfAnswerName">{{ test.answerName }}</div>
          <h2>{{ test.saying }}</h2>
          <p>{{ test.context }}</p>

          <button v-if="test.id !== 6" type="button" @click.once="slideToNextTestPage" @touchstart.prevent.once="slideToNextTestPage">下一題</button>
          <button type="button" v-else @click.once="slideToResult" @touchstart.prevent.once="slideToResult">看結果</button>
        </div>
      </section>

      <!-- why I can't remove class "test-question"? -->
      <section class="test-question" :id="`question--test${test.id}`" v-if="isQuestionShow">
        <div class="test-question__quotation">
          <img :id="`quotation-mark-top--test${test.id}`" class="test-question__quotation-mark test-question__quotation-mark--top" src="../assets/quotation-mark.png" alt="" v-if="!hideForAnswerPop">
          <h2 :id="`quotation--test${test.id}`" v-if="!hideForAnswerPop"></h2>
          <img :id="`quotation-mark-bottom--test${test.id}`" class="test-question__quotation-mark test-question__quotation-mark--bottom" src="../assets/quotation-mark.png" alt="" v-if="!hideForAnswerPop">
        </div>

        <div class="test-question__drop-place" :id="`drop-place--test${test.id}`">
          <img class="test-question__head" src="../assets/Candidates/pseudo_head.png" ref="droppedHead" :id="`droppedHead--test${test.id}`" alt="" v-show="!hideForAnswerPop">
          <img :src="test.answerImg" class="test-question__answer-head" :id="`answer-head--test${test.id}`" alt="">
          <p class="test-question__drop-place-prompt" v-show="!hideForAnswerPop">拖曳<br>頭像</p>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86 86" v-show="!hideForAnswerPop">
            <g transform="translate(-19 -398)">
              <g transform="translate(19 398)">
                <circle class="check-fill" cx="43" cy="43" r="43"/>
                <circle class="check-stroke" :id="`correct-stroke--test${test.id}`" cx="43" cy="43" r="41.5"/>
              </g>
              <path class="check-mark check-mark--tick" :id="`tick--test${test.id}`" d="M36.082,1221.95l15.807,15.832,31.615-32.3" transform="translate(4 -781)"/>
            </g>
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86 86" v-show="!hideForAnswerPop">
            <g transform="translate(-113 -398)">
              <g transform="translate(113 398)">
                <circle class="check-fill" cx="43" cy="43" r="43"/>
                <circle class="check-stroke" :id="`incorrect-stroke--test${test.id}`" cx="43" cy="43" r="41.5"/>
              </g>
              <path class="check-mark check-mark--cross" :id="`cross-right--test${test.id}`" d="M149,1182.4v48.783" transform="translate(903.972 -517.898) rotate(45)"/>
              <path class="check-mark check-mark--cross" :id="`cross-left--test${test.id}`" d="M149,1182.4v48.783" transform="translate(-802.69 -307.18) rotate(-45)"/>
            </g>
          </svg>

        </div>
        <div class="test-question__candidate">
          <div v-for="(num, idx) in test.names.length" :key="test.names[idx]" :id="`candidate${idx + 1}--test${test.id}`" class="test-question__candidate-wrapper">
            <img @mousedown.prevent="!canDragHead || mouseDragStart($event)" @touchstart.prevent="!canDragHead || touchDragStart($event)" class="test-question__head test-question__head--candidate" :src="test.imgs[idx]" :data-name="test.names[idx]" alt="">
            <div class="candidate-name" :class="test.backgroundColorOfNames[idx]">{{ test.names[idx] }}</div>
          </div>
        </div>
      </section>
    </div>
  </article>
</template>

<script>
// import {
//   TweenLite, Power2, Power4, Back,
// } from 'gsap/TweenMax';
// import TweenLite from 'gsap/TweenLite';
// import { Power2, Power4, Back } from 'gsap/EasePack';

export default {
  name: 'Test',
  props: ['test'],
  data() {
    return {
      isTestShow: false,
      // isTestShow: true,
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
      startTimeInAnswerPage: null,
      endTimeInAnswerPage: null,
    };
  },
  computed: {
    triggerDropMatchRange() {
      return {
        top: this.droppedHeadOffsetTop + (this.$refs.droppedHead.offsetHeight / 2),
        left: this.droppedHeadOffsetLeft + (this.$refs.droppedHead.offsetWidth / 2),
      };
      // return this.$test.computed.triggerDropMatchRange(this);
      // const droppedHeadWidth = vm.$refs.droppedHead.offsetWidth;
      // const droppedHeadHeight = vm.$refs.droppedHead.offsetHeight;
    },
  },
  methods: {
    setDroppedHeadOffset() {
      const droppedHeadRect = this.$refs.droppedHead.getBoundingClientRect();
      this.droppedHeadOffsetTop = droppedHeadRect.top + this.windowEle.pageYOffset;
      this.droppedHeadOffsetLeft = droppedHeadRect.left + this.windowEle.pageXOffset;
    },
    resizeHandler() {
      if (this.resizeTimer) {
        clearTimeout(this.resizeTimer);
      }
      this.resizeTimer = setTimeout(() => {
        this.setDroppedHeadOffset();
      }, 600);
    },
    testSlideInDynamic() {
      // this.$parent.$refs.app.scrollTop = 0;
      // this.htmlEle.scrollTop = 0;
      this.windowEle.scrollTo(0, 0);

      window.addEventListener('resize', this.resizeHandler);
      TweenLite.to(`#candidate1--test${this.test.id}`, 0.4, {
        x: 0,
        ease: Back.easeOut.config(1.4),
      });
      TweenLite.to(`#candidate2--test${this.test.id}`, 0.3, {
        x: 0,
        ease: Back.easeOut.config(1.4),
        delay: 0.1,
      });
      TweenLite.to(`#candidate3--test${this.test.id}`, 0.2, {
        x: 0,
        ease: Back.easeOut.config(1.4),
        delay: 0.2,
      });
      TweenLite.to(`#candidate4--test${this.test.id}`, 0.1, {
        x: 0,
        ease: Back.easeOut.config(1.4),
        delay: 0.3,
        onComplete: () => {
          this.setDroppedHeadOffset();
          this.typeQuotation();
        },
      });
    },
    typeQuotation() {
      // this.$parent.canStageMove = false;
      TweenLite.set(`#quotation-mark-top--test${this.test.id}, #quotation-mark-bottom--test${this.test.id}`, {
        opacity: 1,
      });
      const quotation = document.getElementById(`quotation--test${this.test.id}`);
      const splitSaying = this.test.saying.split('');
      let sayingStr = '';
      let idx = 0;
      // let delay = 100;
      let delay = 100;
      const typeSaying = () => {
        this.typeSayingTimer = setTimeout(() => {
          sayingStr += splitSaying[idx];
          quotation.textContent = sayingStr;
          // delay = Math.floor(Math.random() * (100 - 50 + 1) + 50);
          if (idx !== 4) {
            if (idx > 4 && idx < splitSaying.length - 5) {
              delay = 60;
            } else {
              delay = 100;
            }
          } else {
            delay = 160;
          }
          idx += 1;
          if (idx !== splitSaying.length) {
            typeSaying();
          } else {
            clearTimeout(this.typeSayingTimer);
            TweenLite.to(`#drop-place--test${this.test.id}`, 0.2, {
              opacity: 1,
              ease: Power2.easeIn,
              onComplete: () => {
                this.canDragHead = true;
                // this.$parent.canStageMove = true;
                // this.$parent.fixedStage();
              },
            });
          }
        }, delay);
      };
      typeSaying();
    },
    mouseDragStart(evt) {
      this.draggedHead = evt.target;

      this.draggedHeadTop = this.draggedHead.getBoundingClientRect().top + this.windowEle.pageYOffset;
      this.draggedHeadLeft = this.draggedHead.getBoundingClientRect().left + this.windowEle.pageXOffset;

      TweenLite.to(this.draggedHead, 0.2, {
        scale: 1.2,
        ease: Power4.easeOut,
      });

      this.mouseX = evt.pageX;
      this.mouseY = evt.pageY;

      this.draggedHead.parentNode.style.zIndex = '99';

      document.addEventListener('mousemove', this.mouseDragging);
      // can't bind the event to 'this.draggedHead'
      document.addEventListener('mouseup', this.mouseDrop);
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
      // this.draggedHead.addEventListener('mouseup', this.mouseDrop);
    },
    mouseDrop(evt) {
      evt.preventDefault();
      this.headDropped();

      document.removeEventListener('mousemove', this.mouseDragging);
      document.removeEventListener('mouseup', this.mouseDrop);
    },
    touchDragStart(evt) {
      this.draggedHead = evt.target;

      this.draggedHeadTop = this.draggedHead.getBoundingClientRect().top + this.windowEle.pageYOffset;
      this.draggedHeadLeft = this.draggedHead.getBoundingClientRect().left + this.windowEle.pageXOffset;

      TweenLite.to(this.draggedHead, 0.2, {
        scale: 1.2,
        ease: Power4.easeOut,
      });

      this.touchX = evt.touches[0].pageX;
      this.touchY = evt.touches[0].pageY;

      this.draggedHead.parentNode.style.zIndex = '99';

      this.draggedHead.addEventListener('touchmove', this.touchDragging);
      this.draggedHead.addEventListener('touchend', this.touchDrop);
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

      // this.draggedHead.addEventListener('touchend', this.touchDrop);
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
          scale: 1,
          ease: Power4.easeOut,
        });
        this.canDragHead = false;

        const candidates = this.draggedHead.parentNode.parentNode.children;
        const draggedHeadParent = this.draggedHead.parentNode;
        const newCandidates = [];
        for (let i = 0; i < candidates.length; i += 1) {
          if (candidates[i] !== draggedHeadParent) {
            newCandidates.push(candidates[i]);
          }
        }
        newCandidates.forEach((candidate) => {
          candidate.classList.add('check-answer-hide');
        });

        TweenLite.to(this.draggedHead.nextElementSibling, 0.8, {
          opacity: 0,
          ease: Power2.easeInOut,
        });
        TweenLite.to('.check-answer-hide', 0.8, {
          opacity: 0,
          ease: Power2.easeInOut,
          onComplete: () => {
            this.draggedHead.parentNode.style.zIndex = 'auto';
            this.checkAnswerDynamic();
          },
        });
      } else {
        TweenLite.to(this.draggedHead, 0.2, {
          x: 0,
          y: 0,
          scale: 1,
          ease: Power4.easeOut,
          onComplete: () => {
            this.draggedHead.parentNode.style.zIndex = 'auto';
          },
        });
      }

      this.draggedHeadTotalMoveX = 0;
      this.draggedHeadTotalMoveY = 0;
    },
    checkAnswerDynamic() {
      // correct
      if (this.draggedHead.dataset.name === this.test.answerName) {
        this.$parent.scores += 1;
        // CONFUSED why it can work in IE, but css or svg property can't?
        TweenLite.set(`#correct-stroke--test${this.test.id}`, {
          // transformOrigin: '50% 50%',
          svgOrigin: '43 43',
          // if set '-90', ipad can't rotate -90deg
          rotation: -89.99,
        });
        TweenLite.to(`#correct-stroke--test${this.test.id}`, 0.4, {
          strokeDashoffset: 0,
          ease: Power2.easeOut,
        });
        TweenLite.to(`#tick--test${this.test.id}`, 0.4, {
          strokeDashoffset: 0,
          ease: Power2.easeIn,
          delay: 0.4,
          onComplete: () => {
            this.switchQuestionToAnswer();
          },
        });
        // incorrect
      } else {
        TweenLite.set(`#incorrect-stroke--test${this.test.id}`, {
          // transformOrigin: '50% 50%',
          svgOrigin: '43 43',
          // if set '-90', ipad can't rotate -90deg
          rotation: -89.99,
        });
        TweenLite.to(`#incorrect-stroke--test${this.test.id}`, 0.4, {
          strokeDashoffset: 0,
          ease: Power2.easeOut,
        });
        TweenLite.to(`#cross-left--test${this.test.id}`, 0.2, {
          strokeDashoffset: 0,
          ease: Power2.easeIn,
          delay: 0.4,
        });
        TweenLite.to(`#cross-right--test${this.test.id}`, 0.2, {
          strokeDashoffset: 0,
          ease: Power2.easeIn,
          delay: 0.6,
          onComplete: () => {
            this.switchQuestionToAnswer();
          },
        });
      }
    },
    switchQuestionToAnswer() {
      if (this.test.id !== 6) {
        this.$parent.$refs[`test${this.test.id + 1}`][0].isTestShow = true;
        // this.$parent.$refs.test6[0].isTestShow = true;
      } else {
        this.$parent.$refs.result.isResultShow = true;
      }
      // this.$parent.$refs.testWrapper.style.paddingBottom = 0
      TweenLite.set(`#answer-head--test${this.test.id}`, {
        opacity: 1,
        delay: 0.3,
        onStart: () => {
          this.hideForAnswerPop = true;
          this.draggedHead.style.display = 'none';
          this.isAnswerShow = true;
          // this.$parent.$el.style.overflowY = 'hidden';
          this.$parent.$refs.testWrapper.style.paddingBottom = 0;
        },
      });
      TweenLite.to(`#answer-head--test${this.test.id}`, 0.3, {
        x: '-50%',
        y: -248,
        scale: 2,
        ease: Back.easeOut.config(1),
        delay: 0.3,
        onStart: () => {
          // this.$parent.$refs.app.scrollTop = 0;
          // this.htmlEle.scrollTop = 0;
          this.windowEle.scrollTo(0, 0);
        },
      });
      TweenLite.from(`#answer-text--test${this.test.id}`, 0.3, {
        y: 200,
        ease: Back.easeOut.config(1),
        delay: 0.3,
        // onComplete: () => {
        // this.$parent.$el.style.overflowY = '';
        // },
      });

      if (this.draggedHead.dataset.name === this.test.answerName) {
        TweenLite.to(`#stage-correct--test${this.test.id}`, 0.3, {
          scale: 1,
          ease: Back.easeOut.config(1.7),
          delay: 0.3,
          onStart: () => {
            document.getElementById(`stage-num--test${this.test.id}`).classList.add('correct');
          },
        });
      }
      // GA: how long does reader stay at this answer page?
      this.startTimeInAnswerPage = new Date();
    },
    checkDraggedHeadInDropRange() {
      const draggedHeadRect = this.draggedHead.getBoundingClientRect();
      const scrollY = this.windowEle.pageYOffset;
      const scrollX = this.windowEle.pageXOffset;
      const dropDraggedHeadTop = draggedHeadRect.top + scrollY;
      const dropDraggedHeadBottom = draggedHeadRect.bottom + scrollY;
      const dropDraggedHeadLeft = draggedHeadRect.left + scrollX;
      const dropDraggedHeadRight = draggedHeadRect.right + scrollX;

      if (((dropDraggedHeadTop > this.droppedHeadOffsetTop && dropDraggedHeadTop < this.triggerDropMatchRange.top) || (dropDraggedHeadTop < this.droppedHeadOffsetTop && dropDraggedHeadBottom > this.triggerDropMatchRange.top))
        && ((dropDraggedHeadLeft < this.droppedHeadOffsetLeft && dropDraggedHeadRight > this.triggerDropMatchRange.left) || (dropDraggedHeadLeft > this.droppedHeadOffsetLeft && dropDraggedHeadLeft < this.triggerDropMatchRange.left))) {
        TweenLite.to(this.draggedHead, 0.2, {
          scale: 1,
          ease: Power4.easeOut,
        });
        this.isDraggedHeadMatchDrop = true;
      } else {
        TweenLite.to(this.draggedHead, 0.2, {
          scale: 1.2,
          ease: Power4.easeOut,
        });
        this.isDraggedHeadMatchDrop = false;
      }
    },
    slideToNextTestPage() {
      // GA: how long does reader stay at this answer page?
      this.readerStayTimeInAnswerPage();

      this.$parent.$refs.testWrapper.style.paddingBottom = '';

      document.getElementById(`stage-num--test${this.test.id + 1}`).classList.add('active');

      const candidateWrappers = document.getElementsByClassName('test-question__candidate-wrapper');
      for (let i = 0; i < candidateWrappers.length; i += 1) {
        candidateWrappers[i].style.transform = `translateX(${this.$parent.$refs.app.offsetWidth}px)`;
      }

      TweenLite.to('#test-wrapper', 0.3, {
        x: '-=100%',
        ease: Back.easeIn.config(1.4),
        onComplete: () => {
          this.isTestShow = !this.isTestShow;
          this.$parent.currentStage += 1;
          window.removeEventListener('resize', this.resizeHandler);
          this.$parent.$refs[`test${this.test.id + 1}`][0].testSlideInDynamic();
        },
      });
    },
    slideToResult(evt) {
      // GA: how long does reader stay at this answer page?
      this.readerStayTimeInAnswerPage();

      this.$parent.$refs.result.isResultShow = true;
      if (this.$parent.scores <= 2) {
        this.$parent.$refs.result.isReaderSoso = false;
      } else if (this.$parent.scores >= 6) {
        this.$parent.$refs.result.isReaderSoso = false;
        this.$parent.$refs.result.isReaderBad = false;
      }

      TweenLite.to(evt.currentTarget, 0.3, {
        opacity: 0,
        ease: Power2.easeIn,
      });
      TweenLite.to('#total-container', 0.3, {
        x: '-=100%',
        ease: Back.easeIn.config(1.4),
        delay: 0.3,
        onComplete: () => {
          this.isTestShow = !this.isTestShow;
          this.$parent.isStageShow = false;
          window.removeEventListener('resize', this.resizeHandler);
          this.$parent.$refs.result.resultSlideInDynamic();
        },
      });
    },
    readerStayTimeInAnswerPage() {
      // GA: how long does reader stay at this answer page?
      this.endTimeInAnswerPage = new Date();
      const stayTime = Math.round((this.endTimeInAnswerPage - this.startTimeInAnswerPage) / 1000);

      window.ga('newmedia.send', {
        hitType: 'event',
        eventCategory: 'Game',
        eventAction: 'Stay',
        eventLabel: `[候選人金句連連看] [第${this.test.id}關] [停留${stayTime}秒]`,
        eventValue: stayTime,
      });
    },
    // setDroppedHeadOffset() {
    //   this.$test.methods.setDroppedHeadOffset(this);
    // },
    // resizeHandler() {
    //   this.$test.methods.resizeHandler(this);
    // },
    // testSlideInDynamic() {
    //   this.$test.methods.testSlideInDynamic(this);
    // },
    // typeQuotation() {
    //   this.$test.methods.typeQuotation(this);
    // },
    // mouseDragStart(evt) {
    //   this.$test.methods.mouseDragStart(evt, this);
    // },
    // mouseDragging(evt) {
    //   this.$test.methods.mouseDragging(evt, this);
    // },
    // mouseDrop(evt) {
    //   this.$test.methods.mouseDrop(evt, this);
    // },
    // touchDragStart(evt) {
    //   this.$test.methods.touchDragStart(evt, this);
    // },
    // touchDragging(evt) {
    //   this.$test.methods.touchDragging(evt, this);
    // },
    // touchDrop(evt) {
    //   this.$test.methods.touchDrop(evt, this);
    // },
    // headDropped() {
    //   this.$test.methods.headDropped(this);
    // },
    // checkAnswerDynamic() {
    //   this.$test.methods.checkAnswerDynamic(this);
    // },
    // switchQuestionToAnswer() {
    //   this.$test.methods.switchQuestionToAnswer(this);
    // },
    // checkDraggedHeadInDropRange() {
    //   this.$test.methods.checkDraggedHeadInDropRange(this);
    // },
    // slideToNextTestPage() {
    //   this.$test.methods.slideToNextTestPage(this);
    // },
    // slideToResult(evt) {
    //   this.$test.methods.slideToResult(evt, this);
    // },
    // readerStayTimeInAnswerPage() {
    //   this.$test.methods.readerStayTimeInAnswerPage(this);
    // },
  },
};
</script>

<style lang="scss">
@import '../css/mixin.scss';

.check-stroke {
  fill: none;
  stroke: #D14033;
  stroke-width: 3px;
  stroke-dasharray: 260.8;
  stroke-dashoffset: 260.8;
  // transform: rotate(-90deg);
}
.check-fill {
  stroke: none;
  fill: none;
}

.check-mark {
  stroke: #d14033;
  // stroke-width: 10px;
  // IE & Edge only can display 'stroke-dashoffset' animation in 6px
  stroke-width: 6px;
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
  // width: 80px;
  width: 100%;
  &--answer {
    width: 80px;
  }
}

.test {
  padding-right: 20px;
  padding-left: 20px;
  font-size: 2rem;
  position: relative;
  // width: 100%;
  // flex: 0 0 100%;
  min-width: 100%;
  // width: 375px;
  box-sizing: border-box;
  &-answer {
    top: 279px;
    padding-bottom: 30px;
    background-color: #fff;

    position: absolute;
    width: 100%;
    left: 0;
    padding-right: 20px;
    padding-left: 20px;
    @media screen and (min-width: 600px) {
      padding-left: 50px;
      padding-right: 50px;
    }
    box-sizing: border-box;
    z-index: 49;
    text-align: center;
    & > div {
      text-align: left;
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
    & a {
      color: #d14033;
      text-decoration: underline;
    }
    & button {
      height: 32px;
      background-color: #000;
      line-height: 32px;
      font-size: 15px;
      transition: all 0.3s;
      &:hover {
        background-color: #3e3a39;
        opacity: 0.6;
      }
    }
  }
  &-question {
    // max-width: 392px;
    max-width: 335px;
    margin-right: auto;
    margin-left: auto;
    &__quotation {
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 18px;
      &-mark {
        width: 25px;
        opacity: 0;
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
      opacity: 0;
      z-index: 99;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    & h2 {
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1.4;
    }
    svg {
      overflow: hidden;
      fill: none;
      position: absolute;
      width: 25.67%;
      // width: 100%;
      height: auto;
      // width: 86px;
      // height: 86px;
      @include align-center;
      z-index: 9;
    }
    &__drop-place {
      position: relative;
      margin-bottom: 35px;
      text-align: center;
      opacity: 0;
      margin-left: auto;
      margin-right: auto;
      // width: 23.88%;
      &-prompt {
        position: absolute;
        @include align-center;
        font-size: 1.5rem;
        // color: #707070;
        color: #000;
        line-height: 1.13;
        user-select: none;
      }
    }
    &__head {
      width: 23.88%;
      // width: 100%;
      // width: 80px;
      border-radius: 50%;
      box-sizing: border-box;
      &--candidate {
        width: 100%;

        border: 1px solid #d5d4d4;
        margin-bottom: 5px;
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
      &-wrapper {
        width: 23.88%;
      }
      // & > div {
      //   transform: translateX(375px);
      // }
    }
  }
}
</style>
