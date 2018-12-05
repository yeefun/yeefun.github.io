<template>
  <section class="related">
    <div>
      <h4>延伸閱讀</h4>
      <div class="related__report-wrapper">
        <div class="related__report related__report--top" @click="ClickRelated('參訪林口印刷廠')">
          <a href="https://udn.com/news/story/7323/3335035" target="_blank">
            <!-- <img src="../assets/Related/related-01--small.jpg" /> -->
            <slot name="img1"></slot>
            <p>參訪林口印刷廠 小小記者大開眼界</p>
          </a>
        </div>
        <div class="related__report related__report--top" @click="ClickRelated('印刷廠存25萬枚鉛字')">
          <a href="https://udn.com/news/story/7326/3386219" target="_blank">
            <!-- <img src="../assets/Related/related-02--small.jpg" /> -->
            <slot name="img2"></slot>
            <p>印刷廠存25萬枚鉛字 戒嚴時期撿錯遭調查</p>
          </a>
        </div>
        <div class="related__report" @click="ClickRelated('買下女兒出生那天各報')">
          <a href="https://udn.com/news/story/7272/3463433" target="_blank">
            <!-- <img src="../assets/Related/related-03--small.jpg" /> -->
            <slot name="img3"></slot>
            <p>買下女兒出生那天各報 18年後父送上時空膠囊暖哭大家</p>
          </a>
        </div>
        <div class="related__report mb-0" @click="ClickRelated('老師傅的排版桌')">
          <a href="https://theme.udn.com/theme/story/6774/2497730" target="_blank">
            <!-- <img src="../assets/Related/related-04--small.jpg" /> -->
            <slot name="img4"></slot>
            <p>老師傅的排版桌 見證活版印刷興衰</p>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { detectPlatform } from 'udn-newmedia-utils';

export default {
  name: 'RelatedItem',
  methods: {
    ClickRelated(title) {
      // GA: 讀者點了哪幾篇延伸閱讀文章？
      window.ga('newmedia.send', {
        hitType: 'event',
        eventCategory: 'Related',
        eventAction: 'Click',
        eventLabel: `[每晚與時間賽跑的印報人] [${detectPlatform()}] [${title}]`,
      });
    },
  },
};
</script>

<style lang="scss">
.related {
  padding-top: 48px;
  padding-bottom: 48px;
  border-top: 0.8px solid #dcdddd;
  border-bottom: 0.8px solid #dcdddd;
  margin-bottom: 64px;
  & h4 {
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 20px;
  }
  &__report {
    box-sizing: border-box;
    flex-shrink: 0;
    width: 100%;
    cursor: pointer;
    margin-bottom: 16px;
    @media screen and (min-width: 768px) and (max-width: 991.98px) {
      width: 50%;
      padding-left: 12px;
      padding-right: 12px;
      margin-bottom: 0;
    }
    @media screen and (min-width: 992px) {
      width: 25%;
      padding-left: 8px;
      padding-right: 8px;
      margin-bottom: 0;
    }
    &:hover img {
      opacity: 0.64;
    }
    &-wrapper {
      display: flex;
      flex-wrap: wrap;
      @media screen and (min-width: 992px) {
        margin-left: -8px;
        margin-right: -8px;
      }
      @media screen and (min-width: 768px) and (max-width: 991.98px) {
        margin-left: -12px;
        margin-right: -12px;
      }
    }
    &--top {
      @media screen and (min-width: 768px) and (max-width: 991.98px) {
        margin-bottom: 48px;
      }
    }
  }
  & p {
    width: 48%;
    float: left;
    font-size: 1.6rem;
    // font-size: 1.8rem;
    line-height: 1.48;
    font-weight: 700;
    color: #111;
    // line-height: 1.4;
    @media screen and (min-width: 768px) {
      margin-top: 12px;
      width: 100%;
    }
  }
  & img {
    width: 48%;
    float: right;
    transition: opacity 0.4s;
    border-radius: 2px;
    // @media screen and (min-width: 576px) and (max-width: 991.98px) {
    //   border-radius: 4px;
    // }
    @media screen and (min-width: 768px) {
      width: 100%;
    }
  }
  & a {
    display: block;
    height: 100%;
  }
}
// #report{
//   padding: 50px 0;
//   border-top: 1px solid #363434;
//   border-bottom: 1px solid #363434;
//   color: #363434;
// }
// #report p{
//   font-size: 16px;
//   font-weight: bold;
// }
// #report a {
//   color: #363434;
//   text-decoration: none;
// }
// #report a:hover{
//   text-decoration: none;
// }
// #report img:hover{
//   opacity: .5;
//   transition: opacity .2s ease;
// }
// #report .col-sm-6 img{
//   width: 100%;
// }
// @media screen and (max-width: 767px){
//   #report{
//     padding: 30px 0;
//   }
//   #report .col-sm-6{
//     clear: both;
//   }
//   .people-contain img{
//     width: 100%;
//     height: auto;
//   }
//   #report p {
//     font-size: 16px;
//     float: left;
//     width: 45%;
//     margin-top: 10px;
//   }
//   #report .col-sm-6 img {
//     width: auto;
//     height: auto;
//     float: right;
//     width: 50%;
//     padding-left: 10px;
//     padding-bottom: 10px;
//   }
// }
// @media screen and (min-width: 768px) and (max-width: 1024px){
//   #report .col-sm-6 img{
//     width: 100%;
//     height: auto;
//   }
//   #report p{
//     margin-top: 10px;
//     margin-bottom: 32px;
//     min-height: 72px;
//   }
// }
// @media screen and (min-width: 1025px){
//   .row{
//     margin-left: -10px;
//     margin-right: -10px;
//   }
//   #report .col-md-3{
//     padding-left: 10px;
//     padding-right: 10px;
//   }
//   #report p{
//     margin-top: 10px;
//   }
// }
</style>
