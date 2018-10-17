<template>
  <section class="relate">
    <h4>延伸閱讀</h4>
    <div class="relate__report-wrapper">
      <div class="relate__report relate__report--left">
        <a href="https://udn.com/upf/newmedia/2018_data/cloudgate/future.html" target="_blank">
          <img src="../assets/ReadMore/readMore101.png" alt="">
          <!-- <div class="relate__report-img relate__report-img-1"></div> -->
          <p>45年掌舵人將交棒<br>雲門大船的未來進行式</p>
        </a>
      </div>
      <div class="relate__report relate__report--right">
        <a href="https://udn.com/news/story/7314/3389202" target="_blank">
          <img  src="../assets/ReadMore/readMore102.png" alt="">
          <!-- <div class="relate__report-img relate__report-img-2"></div> -->
          <p>要讓林懷民不遺憾…<br>文化中心活化 核定52場</p>
        </a>
      </div>
      <div class="relate__report relate__report--left">
        <a href="https://udn.com/news/story/7266/3389722" target="_blank">
          <img src="../assets/ReadMore/readMore103.png" alt="">
          <!-- <div class="relate__report-img relate__report-img-3"></div> -->
          <p :class="{ 'mb-0': $root.windowWidth > 375.98 }">文化部將活化文化中心<br>林懷民：很棒很開心</p>
        </a>
      </div>
      <div class="relate__report relate__report--right">
        <a href="https://ubrand.udn.com/ubrand/story/12117/3368053" target="_blank">
          <img src="../assets/ReadMore/readMore104.png" alt="">
          <!-- <div class="relate__report-img relate__report-img-4"></div> -->
          <p class="mb-0">捷運變游池＋台東熱氣球<br>幕後推手都是他</p>
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
// @import '../css/common.scss';

.relate {
  width: 100%;
  padding-right: 24px;
  padding-left: 24px;
  margin-bottom: 80px;
  // max-width: 960px;
  // position: relative;
  // margin-left: auto;
  // margin-right: auto;
  @media screen and (min-width: 768px) {
    width: 50%;
    margin-left: 0;
    margin-right: 0;
    padding-right: 0;
    padding-left: 0;
    margin-bottom: 0;
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
    @media screen and (max-width: 375.98px) {
      // text-align: left;
      width: 100%;
    }
    & a {
      // text-decoration: none;
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
      line-height: 1.5;
      font-size: 1.6rem;
      // font-size: 1.4rem;
      font-weight: 700;
      // line-height: 1.67;
      margin-bottom: 24px;
      color: #2b2b2b;
      // @media screen and (min-width: 768px) {
      //   line-height: 1.5;
      //   font-size: 1.6rem;
      // }
    }
    &--left {
      padding-right: 7px;
      @media screen and (min-width: 768px) {
        padding-right: 22px;
      }
      @media screen and (max-width: 375.98px) {
        padding-right: 0;
      }
    }
    &--right {
      padding-left: 7px;
      @media screen and (min-width: 576px) {
        padding-left: 22px;
      }
      @media screen and (max-width: 375.98px) {
        padding-left: 0;
      }
    }
  }
}
</style>

