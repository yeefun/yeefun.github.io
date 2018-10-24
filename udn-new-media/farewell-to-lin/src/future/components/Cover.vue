<template>
  <article class="cover">
    <div class="cover__img" :style="{ backgroundImage: `url(${backgroundCover})` }"></div>
    <div class="cover__title">
      <h2>45年掌舵人將交棒</h2>
      <h1>雲門大船的<br>未來進行式</h1>
    </div>
    <img class="cover__arrow" src="../../assets/CoverImg/arrow.png" alt="">
  </article>
</template>

<script>
import mobileCover from '../assets/CoverImg/cover_mob.jpg';
import webCover from '../assets/CoverImg/cover_web.jpg';

export default {
  name: 'Cover',
  computed: {
    backgroundCover() {
      return this.$root.isMobileSize ? mobileCover : webCover;
    },
  },
};
</script>

<style lang="scss">
.cover {
  // height: 100%;
  position: relative;
  &__img {
    position: absolute;
    max-width: 100%;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
  }
  &__title {
    color: #fff;
    position: relative;
    min-width: 260px;
    text-align: center;
    font-weight: 700;
    top: 55.4%;
    @media screen and (min-width: 576px) {
      position: absolute;
      top: 29%;
      left: 13%;
    }
    & > h2 {
      font-size: 2.6rem;
      letter-spacing: 2.7px;
      margin-left: 1.35px;
      // line-height: 2.75;
      margin-bottom: 20px;
      text-shadow: 0 0 12.6px #000;
      @media screen and (min-width: 576px) {
        font-size: 4rem;
        letter-spacing: 4px;
        margin-left: 0;
      }
    }
    & > h1 {
      font-size: 4.5rem;
      letter-spacing: 4.5px;
      margin-left: 2.25px;
      line-height: 1.3;
      text-shadow: 0 0 12.6px #000;
      @media screen and (min-width: 576px) {
        font-size: 6.6rem;
        letter-spacing: 6.7px;
        line-height: 1.37;
        margin-left: 0;
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
  }
}
</style>

