<template>
  <section class="test">
    <div class="test__quotation">
      <img class="test__quotation-mark test__quotation-mark--top" src="../assets/quotation-mark.png" alt="">
      <h2>我們年輕時把馬子，絕對不會分人種...把馬子不分人種，賺錢為何要分幣種？今天能賺錢為什麼不賺？</h2>
      <img class="test__quotation-mark test__quotation-mark--bottom" src="../assets/quotation-mark.png" alt="">
    </div>
    <div class="test__drop-place">
      <img class="test__drop-place-head" src="../assets/Candidates/pseudo_head.png" ref="droppedHead" alt="">
      <p class="test__drop-place-prompt">拖曳<br>頭像</p>

      <!-- <svg viewBox="0 0 86 86">
        <g transform="translate(-113 -398)">
          <g class="cls-1" transform="translate(113 398)">
            <circle class="cls-4" cx="43" cy="43" r="43"/>
            <circle class="cls-5" cx="43" cy="43" r="41.5"/>
          </g>
          <path class="cls-2" d="M149,1182.4v48.783" transform="translate(903.972 -517.898) rotate(45)"/>
          <path class="cls-2" d="M149,1182.4v48.783" transform="translate(-802.69 -307.18) rotate(-45)"/> -->
          <!-- <g transform="translate(113 398)">
            <circle class="cls-4" cx="43" cy="43" r="43"/>
            <circle class="cls-5" cx="43" cy="43" r="41.5"/>
          </g> -->
        <!-- </g>
      </svg> -->

    </div>
    <div class="test__candidate">
      <div>
        <img @mousedown.prevent="!canDragHead || mouseDragStart($event)" @touchstart.prevent="!canDragHead || touchDragStart($event)" class="test__candidate-head" src="../assets/Candidates/hou.png" alt="">
        <p class="test__candidate-name bg-blue">侯友宜</p>
      </div>
      <div>
        <img @mousedown.prevent="!canDragHead || mouseDragStart($event)" @touchstart.prevent="!canDragHead || touchDragStart($event)" class="test__candidate-head" src="../assets/Candidates/ke.png" alt="">
        <p class="test__candidate-name bg-grey">柯文哲</p>
      </div>
      <div>
        <img @mousedown.prevent="!canDragHead || mouseDragStart($event)" @touchstart.prevent="!canDragHead || touchDragStart($event)" class="test__candidate-head" src="../assets/Candidates/han.png" alt="">
        <p class="test__candidate-name bg-blue">韓國瑜</p>
      </div>
      <div>
        <img @mousedown.prevent="!canDragHead || mouseDragStart($event)" @touchstart.prevent="!canDragHead || touchDragStart($event)" class="test__candidate-head" src="../assets/Candidates/yao.png" alt="">
        <p class="test__candidate-name bg-green">姚文智</p>
      </div>
    </div>
  </section>
</template>

<script>
import { TweenMax, Power4 } from 'gsap/TweenMax';

export default {
  name: 'Test',
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

      // bodyEle: document.body,
      // htmlEle: document.documentElement,
      windowEle: window,
      resizeTimer: null,
    };
  },
  created() {
    window.addEventListener('resize', this.resetDroppedHeadOffset);
  },
  mounted() {
    this.droppedHeadOffsetTop = this.$refs.droppedHead.getBoundingClientRect().top + this.windowEle.pageYOffset;
    this.droppedHeadOffsetLeft = this.$refs.droppedHead.getBoundingClientRect().left + this.windowEle.pageXOffset;
    // TweenMax.from('.draw-me', 5, {
    //   drawSVG: 0,
    // });
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
    resetDroppedHeadOffset() {
      if (this.resizeTimer) {
        clearTimeout(this.resizeTimer);
        // this.resizeTimer = null;
      }

      this.resizeTimer = setTimeout(() => {
        this.droppedHeadOffsetTop = this.$refs.droppedHead.getBoundingClientRect().top + this.windowEle.pageYOffset;
        this.droppedHeadOffsetLeft = this.$refs.droppedHead.getBoundingClientRect().left + this.windowEle.pageXOffset;
      }, 600);
    },
    mouseDragStart(evt) {
      this.draggedHead = evt.target;

      this.draggedHeadTop = this.draggedHead.getBoundingClientRect().top + this.windowEle.pageYOffset;
      this.draggedHeadLeft = this.draggedHead.getBoundingClientRect().left + this.windowEle.pageXOffset;

      TweenMax.to(this.draggedHead, 0.2, {
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

      TweenMax.to(this.draggedHead, 0.2, {
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

      TweenMax.set(this.draggedHead, {
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

      TweenMax.set(this.draggedHead, {
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
        TweenMax.to(this.draggedHead, 0.2, {
          x: this.droppedHeadOffsetLeft - this.draggedHeadLeft,
          y: this.droppedHeadOffsetTop - this.draggedHeadTop,
          scaleX: 1,
          scaleY: 1,
          ease: Power4.easeOut,
        });
        this.canDragHead = false;
      } else {
        TweenMax.to(this.draggedHead, 0.2, {
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
        TweenMax.to(this.draggedHead, 0.2, {
          scaleX: 1,
          scaleY: 1,
          ease: Power4.easeOut,
        });

        this.isDraggedHeadMatchDrop = true;
      } else {
        TweenMax.to(this.draggedHead, 0.2, {
          scaleX: 1.2,
          scaleY: 1.2,
          ease: Power4.easeOut,
        });

        this.isDraggedHeadMatchDrop = false;
      }
    },
  },
};
</script>

<style lang="scss">
@import '../css/mixin.scss';

.cls-1 {
  fill: #efefef;
  stroke-width: 10px;
  stroke-dashoffset: 600;
  stroke-dasharray: 500;
  transition: stroke-dashoffset 3s linear;
  // transform: translate(113px, 398px) rotate(45deg);
  transform-origin: center;
}

.cls-1, .cls-3 {
  stroke: #efefef;
  // stroke: #000;
  stroke-width: 3px;
}

.cls-2, .cls-3 {
  fill: none;
}

.cls-2 {
  stroke: #fff;
  // stroke-width: 10px;
  // stroke-dashoffset: 500;
  // stroke-dasharray: 500;
  // transition: stroke-dashoffset .5s linear;
}

.cls-4 {
  stroke: none;
}

// .draw-me {
//   stroke-width: 10px;
//   stroke: red;
// }

.test {
  padding-right: 20px;
  padding-left: 20px;
  &__quotation {
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 18px;
    &-mark {
      width: 25px;
      height: auto;
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
    top: 0;
    left: 50%;
    transform: translateX(-50%);
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
    height: auto;
    border-radius: 50%;
    box-sizing: border-box;
  }
  &__candidate {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
    padding-top: 85px;
    & > div {
      width: 80px;
    }
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
    &-name {
      text-align: center;
      border-radius: 100px;
      background-color: #888;
      font-size: 1.3rem;
      // line-height: 1.6;
      // padding-top: 4px;
      // padding-bottom: 4px;
      // font-weight: 300;
      line-height: 1.65;
      color: #fff;
    }
  }
}
</style>
