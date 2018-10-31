<template>
  <section class="test">
    <div class="test__quotation">
      <img class="test__quotation-mark test__quotation-mark--top" src="../assets/quotation-mark.png" alt="">
      <h2>我們年輕時把馬子，絕對不會分人種...把馬子不分人種，賺錢為何要分幣種？今天能賺錢為什麼不賺？</h2>
      <img class="test__quotation-mark test__quotation-mark--bottom" src="../assets/quotation-mark.png" alt="">
    </div>
    <div class="test__drop-place">
      <img class="test__drop-place-head" src="../assets/Candidates/pseudo_head.png" ref="droppedPlace" alt="">
      <p class="test__drop-place-prompt">拖曳<br>頭像</p>
    </div>
    <div class="test__candidate">
      <div>
        <img @mousedown.prevent="mouseDragStart" class="test__candidate-photo" src="../assets/Candidates/hou.png" alt="">
        <p class="test__candidate-name bg-blue">侯友宜</p>
      </div>
      <div>
        <img @mousedown.prevent="mouseDragStart" class="test__candidate-photo" src="../assets/Candidates/ke.png" alt="">
        <p class="test__candidate-name bg-grey">柯文哲</p>
      </div>
      <div>
        <img @mousedown.prevent="mouseDragStart" class="test__candidate-photo" src="../assets/Candidates/han.png" alt="">
        <p class="test__candidate-name bg-blue">韓國瑜</p>
      </div>
      <div>
        <img @mousedown.prevent="mouseDragStart" class="test__candidate-photo" src="../assets/Candidates/yao.png" alt="">
        <p class="test__candidate-name bg-green">姚文智</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      totalMoveX: 0,
      totalMoveY: 0,
      draggedPhoto: null,
      draggedPhotoTop: 0,
      draggedPhotoLeft: 0,
    };
  },
  computed: {
    droppedPlaceRect() {
      const droppedPlaceRect = this.$refs.droppedPlace.getBoundingClientRect();
      return {
        top: droppedPlaceRect.top + document.body.scrollTop,
        left: droppedPlaceRect.left + document.body.scrollLeft,
      };
    },
    triggerDropMatchRange() {
      return {
        top: this.droppedPlaceRect.top + (this.$refs.droppedPlace.offsetHeight / 3),
        bottom: this.droppedPlaceRect.top + (this.$refs.droppedPlace.offsetHeight / 3 * 2),
        left: this.droppedPlaceRect.left + (this.$refs.droppedPlace.offsetWidth / 3),
        right: this.droppedPlaceRect.left + (this.$refs.droppedPlace.offsetWidth / 3 * 2),
      };
    },
  },
  methods: {
    mouseDragStart(evt) {
      this.draggedPhoto = evt.target;
      this.draggedPhotoTop = this.draggedPhoto.getBoundingClientRect().top + document.body.scrollTop;
      this.draggedPhotoLeft = this.draggedPhoto.getBoundingClientRect().left + document.body.scrollLeft;
      this.mouseX = evt.pageX;
      this.mouseY = evt.pageY;
      document.addEventListener('mousemove', this.mouseDragging);
    },
    mouseDragging(evt) {
      evt.preventDefault();
      const currentMouseX = evt.pageX;
      const currentMouseY = evt.pageY;
      this.totalMoveX += currentMouseX - this.mouseX;
      this.totalMoveY += currentMouseY - this.mouseY;
      this.draggedPhoto.style.transform = `translate(${this.totalMoveX}px, ${this.totalMoveY}px)`;
      this.mouseX = currentMouseX;
      this.mouseY = currentMouseY;
      document.addEventListener('mouseup', this.mouseDrop);
    },
    mouseDrop(evt) {
      evt.preventDefault();
      this.photoDropped();
      document.removeEventListener('mousemove', this.mouseDragging);
      document.removeEventListener('mouseup', this.mouseDrop);
    },
    photoDropped() {
      const draggedPhotoRect = this.draggedPhoto.getBoundingClientRect();
      const { scrollTop, scrollLeft } = document.body;
      const draggedPhotoDropTop = draggedPhotoRect.top + scrollTop;
      const draggedPhotoDropBottom = draggedPhotoRect.bottom + scrollTop;
      const draggedPhotoDropLeft = draggedPhotoRect.left + scrollLeft;
      const draggedPhotoDropRight = draggedPhotoRect.right + scrollLeft;

      if (((draggedPhotoDropTop > this.droppedPlaceRect.top && draggedPhotoDropTop < this.triggerDropMatchRange.bottom)
          || (draggedPhotoDropTop < this.droppedPlaceRect.top && draggedPhotoDropBottom > this.triggerDropMatchRange.top))
        && ((draggedPhotoDropLeft < this.droppedPlaceRect.left && draggedPhotoDropRight > this.triggerDropMatchRange.left)
          || (draggedPhotoDropLeft > this.droppedPlaceRect.left && draggedPhotoDropLeft < this.triggerDropMatchRange.right))) {
        // matched = true;
        this.draggedPhoto.style.transform = `translate(${this.droppedPlaceRect.left - this.draggedPhotoLeft}px, ${this.droppedPlaceRect.top - this.draggedPhotoTop}px)`;
      } else {
        this.draggedPhoto.style.transform = 'translate(0, 0)';
      }
      this.totalMoveX = 0;
      this.totalMoveY = 0;
    },
  },
};
</script>

<style lang="scss">
@import '../css/mixin.scss';

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
  &__drop-place {
    position: relative;
    margin-bottom: 35px;
    text-align: center;
    // margin-left: auto;
    // margin-right: auto;
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
      // z-index: -1;
      user-select: none;
    }
  }
  &__drop-place-head, &__candidate-photo {
    width: 80px;
    height: auto;
    border-radius: 50%;
    box-sizing: border-box;
  }
  &__candidate {
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
    &-photo {
      border: 1px solid #d5d4d4;
      margin-bottom: 5px;
      position: relative;
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
