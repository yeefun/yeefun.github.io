<template>
  <section class="stage" :style="`transform: translateY(${stageMove}px)`">
    <div class="stage-wrapper">
      <div class="stage__squre" v-for="(num, idx) in 6" :key="idx">
        <div class="stage__num" :id="`stage-num--test${idx + 1}`" :class="idx === 0 ? 'active': ''">
          <div class="stage__correct-mark" :id="`stage-correct--test${idx + 1}`"></div>
          <p>{{ num }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Stage',
  props: ['stageMove'],
};
</script>

<style lang="scss">
.stage {
  position: relative;
  // position: fixed;
  // position: absolute;
  // width: 100%;

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
    // max-width: 392px;
    max-width: 335px;
    margin-right: auto;
    margin-left: auto;
  }
  &__squre {
    box-sizing: border-box;
    width: 13.8%;
    text-align: center;
  }
  &__num {
    background-color: #fff;
    border: 1px solid #dcdddd;
    position: relative;
    height: 38px;
    box-sizing: border-box;
  }
  &__correct-mark {
    background-color: #d14033;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%) scale(0);
  }
  & p {
    position: relative;
    line-height: 38px;
  }
  & .active {
    border-color: #6d6d6d;
    color: #000;
  }
  & .correct {
    color: #fff;
  }
}
</style>
