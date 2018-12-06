<template>
  <div id="app" class="app">
    <ProgressBar v-show="isShowHeadBar"/>
    <HeadBar v-show="isShowHeadBar"/>
    <CoverVideo ref="coverVideo"/>
    <!-- <CoverVideo ref="coverVideo"/> -->
    <!-- <div class="cover" v-else> -->
      <!-- <div class="cover__block"></div> -->
      <!-- <img src="./assets/cover-backgroung--mob-1.jpg" alt=""> -->
      <!-- <h1>每晚與時間<br>賽跑的印報人</h1> -->
      <!-- <img src="./assets/cover-backgroung--mob.jpg" alt="" v-if="isMobSize"> -->
      <!-- <img src="./assets/cover-backgroung--web.jpg" alt="" v-else> -->
    <!-- </div> -->
    <ContentContainer>
      <h1 v-if="!isWebSize">每晚與時間<br>賽跑的印報人</h1>
      <ShareItem class="share--top"/>
      <p>11月24日九合一選舉那一夜，台北市長選情呈現拉鋸戰，台北市長候選人柯文哲和丁守中的支持者直到深夜仍不敢鬆懈。鏡頭轉到桃園縣龜山鄉，這裡有一群人也在等待開票結果，但他們除了擔心誰輸誰贏，更擔心開票拖太久，他們沒辦法印報紙。</p>
      <p><br></p>
      <p>「這次選舉等到凌晨一點多，台北市都還沒有下文，記者沒辦法截稿，我們就沒辦法開印，滿頭痛的，」聯合報林口印刷廠廠長佟德中說道。</p>
      <p><br></p>
      <p>最後，台北市長選舉結果直到25日凌晨2時30分後才確定，當天聯合報頭版一行小標題寫著「與丁纏鬥至凌晨二時卅分 柯險勝」──為了讓讀者獲得完整大選結果，聯合報林口印刷廠的技術員和印刷機纏鬥到接近凌晨5時才把報紙印完。</p>
      <figure>
        <img src="./assets/ContentImg/ke-win--mob.jpg" alt="" class="article__img" v-if="isMobSize">
        <img src="./assets/ContentImg/ke-win--web.jpg" alt="" class="article__img" v-else>
        <figcaption>台北市長選舉結果直到11月25日凌晨才確定，聯合報林口印刷廠則到接近凌晨5時才把報紙印完。圖／報系資料照</figcaption>
      </figure>
      <!-- <ContentVideo v-if="!isWebSize" id="main-video"/> -->
      <!-- <p v-else><br></p> -->
      <p>聯合報印刷廠每晚都在與時間賽跑，在記者寫好新聞稿、編輯排好報紙版面後，印刷廠得繼續為報紙品質把關，才能在隔日一早將最完整的報導呈現給讀者。</p>
      <p><br></p>
      <p>2018年即將走入尾聲，聯合報印刷廠從幕後走到幕前，展示近70年來，聯合報每晚如何把當天的社會樣貌化為報紙上一行行文字，在數位時代，延續紙本報紙的溫度。</p>
      <h3>要開印了，快快快！</h3>
      <p>每個深夜，當街道上人潮逐漸稀疏，睡意開始在巷弄蔓延，聯合報林口印刷廠卻響起截然不同的節奏。</p>
      <p><br></p>
      <p>印刷廠製版室是揭開每晚序幕的第一站。</p>
      <p><br></p>
      <p>晚間11時20分，電子版報紙從台北傳到製版室，製版技術員們得在10分鐘內將電子版報紙製成印刷的色版。</p>
      <figure>
        <img src="./assets/ContentImg/color-version--mob.jpg" alt="" class="article__img" v-if="isMobSize">
        <img src="./assets/ContentImg/color-version--web.jpg" alt="" class="article__img" v-else>
        <figcaption>製版技術員將電子版報紙製成印刷的色板。</figcaption>
      </figure>
      <p>「11點30分了，要開印了，快快快！」隨著報紙開印時間愈來愈近，印刷廠主管催促著製版技術員把色板交給印刷技術員。</p>
      <p><br></p>
      <p>晚間11時30分，印刷技術員把色版嵌在印刷機的滾筒上，接著，高約4層樓的印刷機上場。兩台印刷機一開，轟隆隆的印刷聲立刻佔據整個印刷作業區，印刷機一小時可以印10萬份報紙，每一秒鐘，都有近28份報紙持續從印刷機吐出，而一旁的印刷技術員則不斷隨機抽檢報紙，檢查報紙的版序、顏色、日期，確保印刷機的速度再快，也能維持報紙的印刷品質。</p>
      <figure>
        <img src="./assets/ContentImg/check--mob.jpg" alt="" class="article__img" v-if="isMobSize">
        <img src="./assets/ContentImg/check--web.jpg" alt="" class="article__img" v-else>
        <figcaption>印刷技術員隨機抽檢報紙，檢查報紙的版序、顏色、日期。</figcaption>
      </figure>
      <p>在印刷機持續印製報紙的同時，印好的報紙會乘著夾報鏈，被送到樓上的發報作業廠，一份份報紙在這裡經過數報機、打包機，變成一落落報紙，再順著輸送帶，前往一樓的發報碼頭，最後由派報車將報紙運至各個縣市。</p>
      <p><br></p>
      <p>正常情況下，印刷流程會在凌晨2時30分結束，但總是有例外狀況。在聯合報印刷廠服務二十幾年的佟德中表示，他們最擔心遇上記者交稿晚，或是當天有重大新聞，「如果事情剛發生時，正好碰上截稿時間，前面沒有辦法馬上交版，整個流程就會延後」，這時，印刷廠技術員們便得連夜趕工，以將最新、最完整的資訊印在剛出爐的報紙上。</p>
      <h3>近70年來不變的堅持</h3>
      <p>過去，當報紙是民眾獲得資訊的主要管道，聯合報報紙由位於台北、林口、台中、高雄的4家印刷廠印製。</p>
      <p><br></p>
      <p>當時聯合報台北印刷廠總共開4台印刷機印報紙，一晚可印超過40萬至50萬份報紙，每晚印到凌晨3時30分左右收工。佟德中回憶道，「那時候到了深夜，台北廠外面還有很多小吃攤，都是為了做聯合報員工的生意。」</p>
      <p><br></p>
      <p>如今，隨著時代變遷，聯合報林口、高雄兩間印刷廠持續運作，也因為印刷流程改變，收工時間提早了一小時。</p>
      <p><br></p>
      <p>儘管如此，創報近70年來，聯合報仍不改對新聞堅持，努力在每個夜晚，將最詳盡的報導囊括在一份份報紙中；印刷廠技術員們也盡力為報紙品質把關，在每個深夜為隔日清晨出刊的報紙奮鬥。</p>
      <p><br></p>
      <p>「每天把報紙漂漂亮亮地印出去，我覺得滿有成就感的，」佟德中說道。</p>
      <p><br></p>
      <p><br></p>
      <div class="item-wrapper">
        <ShareItem class="share--bottom"/>
        <LogoItem/>
      </div>
      <EditorItem/>
      <FeedbackItem/>
      <RelatedItem>
        <template slot="img1">
          <img src="./assets/Related/related-01--small.jpg" v-if="isBigMobSize || isBigWebSize" />
          <img src="./assets/Related/related-01--big.jpg" v-else />
        </template>
        <template slot="img2">
          <img src="./assets/Related/related-02--small.jpg" v-if="isBigMobSize || isBigWebSize" />
          <img src="./assets/Related/related-02--big.jpg" v-else />
        </template>
        <template slot="img3">
          <img src="./assets/Related/related-03--small.jpg" v-if="isBigMobSize || isBigWebSize" />
          <img src="./assets/Related/related-03--big.jpg" v-else />
        </template>
        <template slot="img4">
          <img src="./assets/Related/related-04--small.jpg" v-if="isBigMobSize || isBigWebSize" />
          <img src="./assets/Related/related-04--big.jpg" v-else />
        </template>
      </RelatedItem>
      <FbComment/>
      <FooterItem/>
    </ContentContainer>
  </div>
</template>

<script>
import HeadBar from './components/HeadBar.vue';
import ProgressBar from './components/ProgressBar.vue';
import CoverVideo from './components/CoverVideo.vue';
import ContentContainer from './components/ContentContainer.vue';
// import ContentVideo from './components/ContentVideo.vue';
import ShareItem from './components/ShareItem.vue';
import LogoItem from './components/LogoItem.vue';
import EditorItem from './components/EditorItem.vue';
import FeedbackItem from './components/FeedbackItem.vue';
import FbComment from './components/FbComment.vue';
import FooterItem from './components/FooterItem.vue';
import RelatedItem from './components/RelatedItem.vue';

export default {
  name: 'app',
  components: {
    ProgressBar,
    HeadBar,
    CoverVideo,
    ContentContainer,
    // ContentVideo,
    ShareItem,
    LogoItem,
    EditorItem,
    FeedbackItem,
    RelatedItem,
    FbComment,
    FooterItem,
  },
  data() {
    return {
      htmlEleW: document.documentElement.clientWidth,
      windowEle: window,
      isShowHeadBar: false,
      mainVideoEle: null,
      afterClickAnchorTime: null,
    };
  },
  created() {
    window.addEventListener('scroll', this.controlHeadBarShow);
  },
  mounted() {
    this.mainVideoEle = this.$refs.coverVideo.$refs.mainVideo;
    // this.mainVideoEle = document.getElementById('video');
    window.addEventListener('resize', this.handleResize);
  },
  computed: {
    isWebSize() {
      return this.htmlEleW >= 768;
    },
    isBigWebSize() {
      return this.htmlEleW >= 992;
    },
    isMobSize() {
      return this.htmlEleW <= 479.98;
    },
    isBigMobSize() {
      return this.htmlEleW <= 575.98;
    },
  },
  methods: {
    handleResize() {
      this.htmlEleW = document.documentElement.clientWidth;
    },
    controlHeadBarShow() {
      // const mainVideoEle = this.$refs.coverVideo.$refs.mainVideo;
      if (this.windowEle.pageYOffset > this.mainVideoEle.offsetHeight) {
        this.isShowHeadBar = true;
      } else {
        this.isShowHeadBar = false;
      }
    // }
    // } else if (this.windowEle.pageYOffset > 8) {
    // this.isShowHeadBar = true;
    // } else {
    // this.isShowHeadBar = false;
    // }
    },
  },
};
</script>

<style lang="scss">
// html, body {
  // height: 100%;
  // background-color: #f7f8f8;
  // overflow: hidden;
// }

html {
  font-size: 10px !important;
  font-family: "Helvetica Neue", Arial, "微軟正黑體", "Microsoft JhengHei", sans-serif;
  color: #111;
  // font-family: 'Noto Sans TC', sans-serif;
}

.app {
  position: relative;
}

// .cover {
//   // background-color: #000;
//   height: 100vh;
//   // padding-bottom: 24px;
//   // box-sizing: border-box;
//   // max-width: 100%;
//   // position: relative;
//   // height: 100vh;
//   background-image: url(./assets/cover-backgroung--mob-1.jpg);
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   // &__block {
//   //   height: 0;
//   //   padding-bottom: 100.5%;
//   //   background-color: #fff;
//   //   margin-bottom: 24px;
//   // }
//   & h1 {
//     // position: absolute;
//     // left: 20px;
//     // top: 64%;
//     color: #fff;
//     font-size: 4.8rem;
//     // font-weight: 700;
//     line-height: 1.1;
//     padding-top: 32px;
//     // margin-bottom: 32px;
//     padding-left: 24px;
//     // margin-left: 24px;
//     // margin-bottom: 16px;
//   }
//   // height: 100%;
//   & img {
//     width: 100%;
//     // margin-bottom: 32px;
//   }
//   // & h1 {
//   //   font-size: 4.8rem;
//   //   font-weight: 700;
//   // }
// }

button {
  border: none;
  outline: none;
  cursor: pointer;
}

.item-wrapper {
  @media screen and (min-width: 992px) {
    display: flex;
    justify-content: space-between;
  }
}

.share {
  &--top {
    margin-bottom: 32px;
  }
  &--bottom {
    margin-bottom: 24px;
  }
}

a {
  text-decoration: none;
  height: 0;
}

img {
  vertical-align: top;
  height: auto;
}

.mr-0 {
  margin-right: 0 !important;
}

.mb-0 {
  margin-bottom: 0 !important;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
