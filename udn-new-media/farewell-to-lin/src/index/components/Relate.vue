<template>
  <section class="relate">
    <h4>延伸閱讀</h4>
    <div class="relate__report-wrapper">
      <div class="relate__report relate__report--left">
        <a href="https://udn.com/upf/newmedia/2018_data/cloudgate/future.html" target="_blank" @click="relateClick('45年掌舵人將交棒 雲門大船的未來進行式')">
          <img src="../assets/ReadMore/readMore101.jpg" alt="">
          <p>45年掌舵人將交棒<br>雲門大船的未來進行式</p>
        </a>
      </div>
      <div class="relate__report relate__report--right">
        <a href="https://udn.com/news/story/7314/3389202" target="_blank" @click="relateClick('要讓林懷民不遺憾… 文化中心活化 核定52場')">
          <img src="../assets/ReadMore/readMore102.jpg" alt="">
          <p>要讓林懷民不遺憾…<br>文化中心活化 核定52場</p>
        </a>
      </div>
      <div class="relate__report relate__report--left">
        <a href="https://udn.com/news/story/7266/3389722" target="_blank" @click="relateClick('文化部將活化文化中心 林懷民：很棒很開心')">
          <img src="../assets/ReadMore/readMore103.jpg" alt="">
          <p :class="{ 'mb-0': $root.windowWidth > 375.98 }">文化部將活化文化中心<br>林懷民：很棒很開心</p>
        </a>
      </div>
      <div class="relate__report relate__report--right">
        <a href="https://udn.com/news/story/12564/3439121" target="_blank" @click="relateClick('72歲大限？預知死亡紀事 林懷民：可不信 但要尊敬')">
          <img src="../assets/ReadMore/readMore104.jpg" alt="">
          <p class="mb-0">72歲大限？預知死亡紀事<br>林懷民：可不信 但要尊敬</p>
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
      width: 100%;
    }
    & a {
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

