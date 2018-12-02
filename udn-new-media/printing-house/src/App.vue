<template>
  <div id="app" class="app">
    <ProgressBar/>
    <CoverVideo v-if="!isMobSize" ref="coverVideo"/>
    <ContentContainer>
      <ShareItem class="share--top"/>
      <p>11月24日九合一選舉那一夜，台北市長的選情呈現拉鋸戰，台北市長候選人柯文哲和丁守中的支持者直到深夜仍不敢鬆懈。鏡頭轉到桃園縣龜山鄉，這裡有一群人也在等待開票結果，但比起擔心誰輸誰贏，他們還有項更急迫的任務──選舉結果沒出來，他們就沒辦法印報紙。</p>
      <p><br></p>
      <p>「這次選舉等到凌晨一點多，台北市都還沒有下文，記者沒辦法截稿，我們就沒辦法開印，滿頭痛的，」聯合報林口印刷廠廠長佟德中說道。</p>
      <p><br></p>
      <p>最後，台北市長選舉結果直到11月25日凌晨2時30分以後才出來，當天聯合報頭版一行小標題寫著「與丁纏鬥至凌晨二時卅分 柯險勝」，為了讓讀者獲得完整大選結果，聯合報林口印刷廠的技術員們和印刷機纏鬥至接近凌晨5時才把報紙印完。</p>
      <figure>
        <img src="./assets/ContentImg/huimin--web.jpg" alt="" class="article__img">
        <figcaption>聯合報11月25日頭版。圖／聯合報原版報紙資料庫</figcaption>
      </figure>
      <p>每個深夜，聯合報的印刷廠都在與時間賽跑，一旦遇到選舉、金馬獎、空難等重大事件，印刷廠的技術員們總是最晚下班的那群人，在記者寫好新聞稿、編輯排好報紙版面後，印刷廠得繼續為報紙品質把關，才能在隔日一早將最完整的報導呈現給讀者。</p>
      <p><br></p>
      <p>隨著2018年即將走入尾聲，聯合報的印刷廠也從幕後走到幕前，展示過去數十年來的每個夜晚，聯合報如何把當天的社會樣貌化為報紙上一行行文字，在數位化、碎片化閱讀興起的世代，努力延續著紙本報紙的溫度。</p>
      <h3>每晚在印刷廠的大隊接力賽</h3>
      <p>在聯合報林口印刷廠，技術員們與廠內的機具每天都在上演大隊接力賽，而時間，正是與他們競爭的對手。</p>
      <p><br></p>
      <p>印刷廠的製版技術員是每晚的第一棒。晚間11時20分，電子版報紙從台北傳到印刷廠的製版室，製版技術員們得在10分鐘內將電子版報紙製成色版，再交棒給印刷技術員。</p>
      <p><br></p>
      <p>晚間11時30分，印刷技術員把色版嵌入印刷機的滾筒上，接著，大隊接力的主將──印刷機上場。高約四層樓的印刷機一開，轟隆隆的印刷聲立刻佔據整間印刷廠。印刷機一小時可以印10萬份報紙，也就是說，每一秒鐘，都有近28份報紙持續從印刷機吐出，而一旁的印刷技術員也沒閒著，只見他們不斷隨機隨機抽檢報紙，檢查報紙的版序、顏色、日期，確保印刷機的速度再快，也能維持報紙的印刷品質。</p>
      <p><br></p>
      <p>在印刷機持續印製報紙的同時，印好的報紙會乘著夾報鏈，被送至樓上的發報作業廠，一份份報紙在這裡經過數報機、打包機，變成一落落報紙，再順著輸送帶，前往一樓的發報碼頭，最後再由派報車將報紙運至各個縣市。</p>
      <p><br></p>
      <p>在正常情況下，這場印報大隊接力賽會在凌晨2時30分結束，但如果遇上記者交稿晚，或是當天有重大新聞等特殊狀況，整個印刷流程便會延後，印刷廠技術員得連夜趕工，以將最新、最完整的資訊印在剛出爐的報紙上。</p>
      <p><br></p>
      <p><br></p>
      <div class="item-wrapper">
        <ShareItem class="share--bottom"/>
        <LogoItem/>
      </div>
      <EditorItem/>
      <FeedbackItem/>
      <RelatedItem/>
      <FbComment/>
      <FooterItem/>
    </ContentContainer>
  </div>
</template>

<script>
import ProgressBar from './components/ProgressBar.vue';
import CoverVideo from './components/CoverVideo.vue';
import ContentContainer from './components/ContentContainer.vue';
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
    CoverVideo,
    ContentContainer,
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
    };
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  computed: {
    isMobSize() {
      return this.htmlEleW < 768;
    },
  },
  methods: {
    handleResize() {
      this.htmlEleW = document.documentElement.clientWidth;
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
  // font-family: 'Noto Sans TC', sans-serif;
}

.app {
  position: relative;
}

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
</style>
