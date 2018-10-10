<template>
  <section class="relate">
    <h4>延伸閱讀</h4>
    <div class="relate__report-wrapper">
      <div class="relate__report relate__report--left">
        <a href="https://udn.com/upf/newmedia/2018_data/childabuse/help.html" target="_blank">
          <img src="https://udn.com/upf/newmedia/2018_data/childabuse/static/img/helpkid.d99a31d.jpg" alt="">
          <!-- <div class="relate__report-img relate__report-img-1"></div> -->
          <p>家扶公布十大兒保新聞 半數與性侵相關</p>
        </a>
      </div>
      <div class="relate__report relate__report--right">
        <a href="https://udn.com/news/story/7272/2872246" target="_blank">
          <img  src="https://udn.com/upf/newmedia/2018_data/childabuse/static/img/badinkid.f5002ee.jpg" alt="">
          <!-- <div class="relate__report-img relate__report-img-2"></div> -->
          <p>流沙中年 棄6萬月薪顧爸媽我在貧窮</p>
        </a>
      </div>
      <div class="relate__report relate__report--left">
        <a href="https://udn.com/news/story/7266/2805019" target="_blank">
          <img src="https://udn.com/upf/newmedia/2018_data/childabuse/static/img/braindead.8427313.jpg" alt="">
          <!-- <div class="relate__report-img relate__report-img-3"></div> -->
          <p>兒虐6成腦傷 每4人有1人重殘</p>
        </a>
      </div>
      <div class="relate__report relate__report--right">
        <a href="https://health.udn.com/health/story/5999/2769721" target="_blank">
          <img src="https://udn.com/upf/newmedia/2018_data/childabuse/static/img/ghost.58c8ec0.jpg" alt="">
          <!-- <div class="relate__report-img relate__report-img-4"></div> -->
          <p>尋找幽靈受虐兒 漏打疫苗挖線索</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Relate',
};
</script>

<style lang="scss">
.relate {
  // ASK color?
  // width: 50%;
  width: 100%;
  // max-width: 960px;
  // position: relative;
  // margin-left: auto;
  // margin-right: auto;
  @media screen and (min-width: 768px) {
    width: 50%;
    margin-left: 0;
    margin-right: 0;
  }
  // background-color: #fff;
  & h4 {
    font-size: 1.8rem;
    margin-bottom: 26px;
    line-height: 1.56;
    letter-spacing: 0.9px;
    text-align: center;
    font-weight: 700;
    @media screen and (min-width: 768px) {
      text-align: left;
    }
  }
  &__report {
    width: 50%;
    box-sizing: border-box;
    // & > div {
    //   flex: auto 0 0;
    // }
    & a {
      text-decoration: none;
      color: #000;
    }
    &-wrapper {
      display: flex;
      flex-wrap: wrap;
    }
    & img {
      width: 100%;
      height: auto;
      margin-bottom: 10px;
    }
    & p {
      font-size: 1.2rem;
      font-weight: 700;
      line-height: 1.67;
      margin-bottom: 20px;
      @media screen and (min-width: 768px) {
        line-height: 1.5;
        font-size: 1.6rem;
      }
    }
    &--left {
      padding-right: 7px;
      @media screen and (min-width: 768px) {
        padding-right: 22px;
      }
    }
    &--right {
      padding-left: 7px;
      @media screen and (min-width: 576px) {
        padding-left: 22px;
      }
    }
  }
}
</style>

