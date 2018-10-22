<template>
  <section class="relate">
    <h4>延伸閱讀</h4>
    <div class="relate__report-wrapper">
      <div class="relate__report relate__report--left">
        <a href="https://udn.com/upf/newmedia/2018_data/cloudgate/index.html" target="_blank" @click="relateClick('台灣無論好壞 都是我們的共業')">
          <img src="../assets/ReadMore/readMore201.jpg" alt="">
          <p>台灣無論好壞<br>都是我們的共業</p>
        </a>
      </div>
      <div class="relate__report relate__report--right">
        <a href="https://udn.com/news/story/7266/3379502" target="_blank" @click="relateClick('45年舞作精選 林懷民：穿越時代與感情')">
          <img src="../assets/ReadMore/readMore202.jpg" alt="">
          <p>45年舞作精選<br>林懷民：穿越時代與感情</p>
        </a>
      </div>
      <div class="relate__report relate__report--left">
        <a href="https://reader.udn.com/reader/story/7012/3304480" target="_blank" @click="relateClick('林懷民舞作精選 看台灣小船的漂盪')">
          <img src="../assets/ReadMore/readMore203.jpg" alt="">
          <p :class="{ 'mb-0': $root.windowWidth > 375.98 }">林懷民舞作精選<br>看台灣小船的漂盪</p>
        </a>
      </div>
      <div class="relate__report relate__report--right">
        <a href="https://theme.udn.com/theme/story/6774/3325945" target="_blank" @click="relateClick('池上稻浪間 雲門再舞書法《松煙》')">
          <img src="../assets/ReadMore/readMore204.jpg" alt="">
          <p class="mb-0">池上稻浪間<br>雲門再舞書法《松煙》</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { detectPlatform } from 'udn-newmedia-utils';

export default {
  name: 'Relate',
  methods: {
    relateClick(target) {
      window.ga('send', {
        hitType: 'event',
        eventCategory: 'relate',
        eventAction: 'click',
        eventLabel: `[${detectPlatform()}] [${document.querySelector('title').innerHTML}] [${target}] [relate click]`,
      });
    },
  },
};
</script>

<style lang="scss">
.relate {
  width: 100%;
  padding-right: 24px;
  padding-left: 24px;
  margin-bottom: 80px;
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
      &:hover > img {
        opacity: 0.6;
      }
    }
    &-wrapper {
      display: flex;
      flex-wrap: wrap;
    }
    & img {
      width: 100%;
      height: auto;
      margin-bottom: 10px;
      transition: opacity 0.5s;
    }
    & p {
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 1.5;
      // line-height: 1.67;
      margin-bottom: 24px;
      color: #2b2b2b;
      // @media screen and (min-width: 576px) {
        // line-height: 1.5;
        // font-size: 1.6rem;
      // }
    }
    &--left {
      padding-right: 12px;
      @media screen and (min-width: 576px) {
        padding-right: 16px;
      }
      @media screen and (max-width: 375.98px) {
        padding-right: 0;
      }
    }
    &--right {
      padding-left: 12px;
      @media screen and (min-width: 576px) {
        padding-left: 16px;
      }
      @media screen and (max-width: 375.98px) {
        padding-left: 0;
      }
    }
  }
}
</style>

