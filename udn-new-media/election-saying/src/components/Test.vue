<template>
  <section class="test">
    <div class="test__quotation">
      <img class="test__quotation-mark test__quotation-mark--top" src="../assets/quotation-mark.png" alt="">
      <h2>我們年輕時把馬子，絕對不會分人種...把馬子不分人種，賺錢為何要分幣種？今天能賺錢為什麼不賺？</h2>
      <img class="test__quotation-mark test__quotation-mark--bottom" src="../assets/quotation-mark.png" alt="">
    </div>
    <div class="test__drop-place">
      <img class="test__drop-place-head" src="../assets/Candidates/pseudo_head.png" alt="">
      <p class="test__drop-place-prompt">拖曳<br>頭像</p>
    </div>
    <div class="test__candidate">
      <div>
        <img class="test__candidate-photo" src="../assets/Candidates/hou.png" alt="">
        <p class="test__candidate-name bg-blue">侯友宜</p>
      </div>
      <div>
        <img class="test__candidate-photo" src="../assets/Candidates/ke.png" alt="">
        <p class="test__candidate-name bg-grey">柯文哲</p>
      </div>
      <div>
        <img class="test__candidate-photo" src="../assets/Candidates/han.png" alt="">
        <p class="test__candidate-name bg-blue">韓國瑜</p>
      </div>
      <div>
        <img class="test__candidate-photo" src="../assets/Candidates/yao.png" alt="">
        <p class="test__candidate-name bg-green">姚文智</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Test',
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
    &-head {
      border: 1px dashed #707070;
      // display: block;
    }
    &-prompt {
      position: absolute;
      @include align-center;
      font-size: 1.5rem;
      color: #707070;
      line-height: 1.13;
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
    &-photo {
      border: 1px solid #d5d4d4;
      margin-bottom: 5px;
    }
    &-name {
      text-align: center;
      border-radius: 100px;
      background-color: #888;
      font-size: 1.3rem;
      padding-top: 4px;
      padding-bottom: 4px;
      // font-weight: 300;
      // line-height: 2.54;
      color: #fff;
    }
  }
}
</style>
