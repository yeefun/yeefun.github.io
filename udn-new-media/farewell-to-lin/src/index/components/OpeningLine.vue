<template>
  <section class="opening-line">
    <div class="opening-line__wrapper">
      <p>去年雲門舞集創辦人、藝術總監林懷民宣布將於2019年底退休，為社會投下震撼彈。在驚訝與不捨之後，大家更關注林懷民以及雲門舞集的下一步，連林懷民本人都笑說：「好像我說要退休之後，大家對我更好奇了。」</p>
      <p><br></p>
      <p>回首雲門舞集一路走來，成立在1973年、台灣退出聯合國後隔年，林懷民帶領雲門舞集與台灣併肩走過45年光陰，創作出無數作品，不只是台灣在國際舞台上最亮麗的文化名片，更帶給許多台灣人一段寧靜、快樂的觀舞時光。</p>
      <p><br></p>
      <p>一直以來，林懷民作品風格的多變，都與他感受到的台灣息息相關。他口中退休前的最後一齣舞作《關於島嶼》，裡面同時有著和諧與衝突、挫敗與希望，是他對當今台灣的印象，以及感受到的氛圍。他自稱這是他的「懺悔錄」，問他懺悔何來，他字字沉重：</p>
      <p><br></p>
      <blockquote>「台灣的今天，都是我們的共業，是我們眼睜睜讓這些事發生。」</blockquote>
      <p><br></p>
      <p>對於這塊孕育雲門舞集的土地，他有滿懷的情感與憂心，日前林懷民接受《聯合晚報》與新媒體中心專訪，暢談他眼中的台灣變化、雲門歷程與內心感懷。</p>
      <div class="opening-line__share">
        <Share></Share>
      </div>
    </div>
    <!-- <Share></Share> -->
  </section>
</template>

<script>
import Share from './Share.vue';

export default {
  name: 'OpeningLine',
  components: {
    Share,
  },
};
</script>

<style lang="scss">
.opening-line {
  // background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: #000;
  color: #bcbcbc;
  padding-right: 30px;
  padding-left: 30px;
  padding-top: 120px;
  @media screen and (min-width: 576px) {
    padding-top: 0;
    height: 100vh;
    padding-right: 60px;
    padding-left: 60px;
  }
  &__wrapper {
    max-width: 943px;
  }
  &__share {
    margin-top: 50px;
    margin-bottom: 120px;
    @media screen and (min-width: 576px) {
      margin-top: 80px;
      margin-bottom: 0;
      display: flex;
      & > .share {
        margin-left: auto;
      }
    }
  }
  & p {
    font-size: 1.6rem;
    line-height: 2;
    letter-spacing: 0.5px;
    @media screen and (min-width: 576px) {
      font-size: 1.8rem;
      line-height: 1.56;
      letter-spacing: 0.9px;
    }
  }
  & blockquote {
    font-size: 2rem;
    line-height: 1.6;
    letter-spacing: 1px;
    color: #b98e49;
    font-weight: 700;
    @media screen and (min-width: 576px) {
      text-align: center;
      font-size: 2.2rem;
      line-height: 1.27;
      letter-spacing: 1.1px;
    }
  }
}
</style>

