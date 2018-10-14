<template>
  <section class="opening-line">
    <div class="opening-line__wrapper">
      <p>從林懷民成立雲門舞集起，外界幾乎就將雲門與林懷民畫上等號。前年林懷民車禍，右腳粉碎性骨折，促使他在去年宣布2019年把雲門交給雲門2的藝術總監鄭宗龍，這提早2年的預告，不僅是讓雲門從容準備，也是提醒外界面對不再是林懷民掌舵的雲門。</p>
      <p><br></p>
      <p>然而，與台灣相應相生近半世紀的雲門舞集，沒了林懷民，會是什麼樣？看似是個大命題，但林懷民本人態度輕鬆從容，言談間沒有流露出擔心，「有些西方的例子告訴我們，偉大的作品一直演下來，看起來一點都不偉大」。</p>
      <div class="opening-line__share">
        <Share></Share>
      </div>
    </div>
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
  // ASK
  background-color: #e1e1e1;
  color: #58595b;
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
}
</style>

