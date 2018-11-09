<template>
  <section class="stage" :style="`transform: translateY(${stageMove}px)`">
    <div class="stage-wrapper">
      <div class="stage__squre" v-for="(num, idx) in 6" :key="idx">
        <div class="stage__num" :id="`stage-num--test${idx + 1}`" :class="idx === 0 ? 'active': ''">
          <div class="stage__correct-mark" :id="`stage-correct--test${idx + 1}`"></div>
          <p>{{ num }}</p>
        </div>
      </div>
      <!-- <div class="stage__squre">
        <div class="stage__num" :class="{ active: stages[0] }">
          <p>1</p>
        </div>
      </div>
      <div class="stage__squre">
        <div class="stage__num active correct">
          <div class="stage__correct-mark"></div>
          <p>2</p>
        </div>
      </div>
      <div class="stage__squre">
        <div class="stage__num active">
          <p>3</p>
        </div>
      </div>
      <div class="stage__squre">
        <div class="stage__num">
          <p>4</p>
        </div>
      </div>
      <div class="stage__squre">
        <div class="stage__num">
          <p>5</p>
        </div>
      </div>
      <div class="stage__squre">
        <div class="stage__num">
          <p>6</p>
        </div>
      </div>
      <div class="stage__squre">
        <div class="stage__num">
          <p>7</p>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'Stage',
  props: ['stageMove'],
  // data() {
  //   return {
  //     isStageShow: true,
  //   };
  // },
};
</script>

<style lang="scss">
// @import '../css/mixin.scss';

.stage {
  // width: 375px;
  position: relative;
  z-index: 199;
  box-sizing: border-box;
  padding: 10px 19px;
  background-color: #f7f7f7;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.16);
  font-size: 2rem;
  line-height: 1.65;
  color: #dcdddd;
  font-weight: 700;
  &-wrapper {
    display: flex;
    justify-content: space-between;
  }
  &__squre {
    box-sizing: border-box;
    // width: calc(100% / 6);
    width: 13.8%;
    text-align: center;
    // background-color: #fff;
    // padding-right: 1px;
    // padding-left: 1px;
    // position: relative;
  }
  &__num {
    background-color: #fff;
    border: 1px solid #dcdddd;
    position: relative;
    height: 38px;
    box-sizing: border-box;
    // transition: color
  }
  &__correct-mark {
    background-color: #d14033;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    position: absolute;
    // @include align-center;
    transform: translate(-50%, -50%) scale(0);
    // transform-origin: center;
  }
  & p {
    position: relative;
    line-height: 38px;
    // transform: translateY(1px);
  }
  & .active {
    border-color: #6d6d6d;
    color: #000;
  }
  & .correct {
    color: #fff;
  }
  // & .success {

  // }
}
</style>
