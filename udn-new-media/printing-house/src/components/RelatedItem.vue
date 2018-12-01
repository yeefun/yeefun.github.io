<template>
  <section class="related">
    <div>
      <h4>延伸閱讀</h4>
      <div class="related__report-wrapper">
        <div class="related__report related__report--top">
          <a href="https://udn.com/news/story/7323/3335035" target="_blank">
            <img src="../assets/ReadMore/readMore101.jpg" />
            <p>參訪林口印刷廠 小小記者大開眼界</p>
          </a>
        </div>
        <div class="related__report related__report--top">
          <a href="https://udn.com/news/story/7326/3386219" target="_blank">
            <img src="../assets/ReadMore/readMore102.jpg" />
            <p>印刷廠存25萬枚鉛字 戒嚴時期撿錯遭調查</p>
          </a>
        </div>
        <div class="related__report">
          <a href="https://udn.com/news/story/7272/3463433" target="_blank">
            <img src="../assets/ReadMore/readMore103.jpg" />
            <p>買下女兒出生那天各報 18年後父送上時空膠囊暖哭大家</p>
          </a>
        </div>
        <div class="related__report">
          <a href="https://theme.udn.com/theme/story/6774/2497730" target="_blank">
            <img src="../assets/ReadMore/readMore104.jpg" />
            <p>老師傅的排版桌 見證活版印刷興衰</p>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

// import Utils from 'udn-newmedia-utils';
export default {
  name: 'RelatedItem',
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
  & p {
    font-size: 1.6rem;
    font-weight: 700;
    color: #000;
    margin-top: 12px;
    // line-height: 1.4;
  }
  &__report {
    box-sizing: border-box;
    flex-shrink: 0;
    width: 100%;
    @media screen and (min-width: 992px) {
      width: 25%;
      padding-left: 10px;
      padding-right: 10px;
    }
    @media screen and (min-width: 768px) and (max-width: 991.98px) {
      width: 50%;
      padding-left: 14px;
      padding-right: 14px;
    }
    &:hover img {
      opacity: 0.6;
    }
    &-wrapper {
      display: flex;
      flex-wrap: wrap;
      @media screen and (min-width: 992px) {
        margin-left: -10px;
        margin-right: -10px;
      }
      @media screen and (min-width: 768px) and (max-width: 991.98px) {
        margin-left: -14px;
        margin-right: -14px;
      }
    }
    &--top {
      @media screen and (min-width: 768px) and (max-width: 991.98px) {
        margin-bottom: 48px;
      }
    }
  }
  & img {
    width: 100%;
    transition: opacity 0.4s;
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
