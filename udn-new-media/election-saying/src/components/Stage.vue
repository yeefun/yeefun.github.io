<template>
  <section class="stage">
    <div class="stage-wrapper">
      <div class="stage__squre">
        <div class="stage__num active">
          <!-- <div class="stage__correct"></div> -->
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
          <!-- <div class="stage__correct"></div> -->
          <p>3</p>
        </div>
      </div>
      <div class="stage__squre">
        <div class="stage__num">
          <!-- <div class="stage__correct"></div> -->
          <p>4</p>
        </div>
      </div>
      <div class="stage__squre">
        <div class="stage__num">
          <!-- <div class="stage__correct"></div> -->
          <p>5</p>
        </div>
      </div>
      <div class="stage__squre">
        <div class="stage__num">
          <!-- <div class="stage__correct"></div> -->
          <p>6</p>
        </div>
      </div>
      <div class="stage__squre">
        <div class="stage__num">
          <!-- <div class="stage__correct"></div> -->
          <p>7</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Stage',
};
</script>

<style lang="scss">
@import '../css/mixin.scss';

.stage {
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
    width: calc(100% / 7);
    text-align: center;
    // background-color: #fff;
    padding-right: 1px;
    padding-left: 1px;
    // position: relative;
  }
  &__num {
    background-color: #fff;
    border: 1px solid #dcdddd;
    position: relative;
  }
  &__correct-mark {
    background-color: #d14033;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    @include align-center;
  }
  & p {
    position: relative;
    transform: translateY(1px);
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
