<template>
  <div id="app" class="app">
    <div class="total-container" id="total-container">
      <Cover></Cover>
      <div class="test-container">
        <Stage></Stage>
        <div class="test-wrapper" id="test-wrapper">
          <Test v-for="test in tests" :key="`test${test.id}`" :test="test" :ref="`test${test.id}`"></Test>
          <TestOutput></TestOutput>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {
//   TweenLite, Back,
// } from 'gsap/TweenMax';

// import TweenLite from 'gsap/TweenLite.js';
// import { Back } from 'gsap/EasePack.js';

// import TweenLite from 'TweenLite';

import Stage from './components/Stage.vue';
import Cover from './components/Cover.vue';
import TestOutput from './components/TestOutput.vue';
import Test from './components/Test.vue';

import houImgAnswer from './assets/Candidates/hou--answer.png';
import hanImgAnswer from './assets/Candidates/han--answer.png';
import dingImgAnswer from './assets/Candidates/ding--answer.png';
import zhengImgAnswer from './assets/Candidates/zheng--answer.png';
import yaoImgAnswer from './assets/Candidates/yao--answer.png';
import keImgAnswer from './assets/Candidates/ke--answer.png';
import linImgAnswer from './assets/Candidates/lin--answer.png';

import houImgQueation from './assets/Candidates/hou--question.png';
import keImgQueation from './assets/Candidates/ke--question.png';
import linImgQueation from './assets/Candidates/lin--question.png';
import dingImgQueation from './assets/Candidates/ding--question.png';
import hanImgQueation from './assets/Candidates/han--question.png';
import yaoImgQueation from './assets/Candidates/yao--question.png';
import zhengImgQueation from './assets/Candidates/zheng--question.png';

export default {
  name: 'app',
  components: {
    Cover,
    Stage,
    Test,
    TestOutput,
  },
  data() {
    return {
      tests: [{
        id: 1,
        saying: '升旗是我心目中日常的工作，已經內化在心裡。',
        names: ['侯友宜', '柯文哲', '林佳龍', '丁守中'],
        imgs: [houImgQueation, keImgQueation, linImgQueation, dingImgQueation],
        backgroundColorOfNames: ['bg-blue', 'bg-grey', 'bg-green', 'bg-blue'],
        answerName: '侯友宜',
        answerImg: houImgAnswer,
        backgroundColorOfAnswerName: 'bg-blue',
        context: '國民黨新北市長參選人侯友宜去年底參加國民黨新北市黨部黨慶活動，因婉拒拿國旗，被前北縣長周錫瑋以「前幾天還看到有人不願意拿國旗、黨旗。」暗批不認同國民黨。侯友宜隨後在新北市元旦升旗活動記者會上表示，自己從小到大每天升旗，國旗已內化在他心裡。',
      },
      {
        id: 2,
        saying: '根據大數據分析，男性、無婚姻、獨居、缺乏親密友人、失業、人際關係不佳者，出現虐童、隨機殺人的機率較高，是社會上的不定時炸彈。',
        names: ['姚文智', '侯友宜', '丁守中', '鄭文燦'],
        imgs: [yaoImgQueation, houImgQueation, dingImgQueation, zhengImgQueation],
        backgroundColorOfNames: ['bg-green', 'bg-blue', 'bg-blue', 'bg-green'],
        answerName: '丁守中',
        answerImg: dingImgAnswer,
        backgroundColorOfAnswerName: 'bg-blue',
        context: '台北市日前發生當街擄童未遂案，國民黨台北市長參選人丁守中趁勢推出「婦幼安全政見」，認為應該運用大數據加強打擊犯罪；丁守中也列出大數據分析隨機殺人事件加害人可能具備的特質，引發外界批評對特定族群貼標籤。丁守中於隔日主動針對其發言道歉，但也強調自己引述的是衛福部資料。',
      },
      {
        id: 3,
        saying: '文化屬於大家，不應該收費。',
        names: ['鄭文燦', '丁守中', '柯文哲', '侯友宜'],
        imgs: [zhengImgQueation, dingImgQueation, keImgQueation, houImgQueation],
        backgroundColorOfNames: ['bg-green', 'bg-blue', 'bg-grey', 'bg-blue'],
        answerName: '鄭文燦',
        answerImg: zhengImgAnswer,
        backgroundColorOfAnswerName: 'bg-green',
        context: '綠光劇團日前在桃園高鐵站前廣場免費演出，競選連任的桃園市長鄭文燦在致詞時提到「文化屬於大家，不應該收費」，引發藝文界人士不滿。鄭文燦隨後澄清，桃園市政府對音樂、戲劇及舞蹈活動採取雙軌制，有付費及免費兩種。',
      },
      {
        id: 4,
        saying: '絕大部分的軍公教人員都是奉公守法，配合政府政策，犧牲自己來換取下一代的未來，他們百分之兩百不是王八蛋。',
        names: ['柯文哲', '丁守中', '林佳龍', '姚文智'],
        imgs: [keImgQueation, dingImgQueation, linImgQueation, yaoImgQueation],
        backgroundColorOfNames: ['bg-grey', 'bg-blue', 'bg-green', 'bg-green'],
        answerName: '姚文智',
        answerImg: yaoImgAnswer,
        backgroundColorOfAnswerName: 'bg-blue',
        context: '針對台北市政府打算將5萬個職缺優先給予退休軍公教人員，民進黨台北市長參選人姚文智表示，不會將職缺優先留給「參與反年改，然後再破壞世大運、鬧場的王八蛋」，但隨後也在臉書澄清，大部分軍公教人員「不是王八蛋」。',
      },
      {
        id: 5,
        saying: '我們年輕時把馬子，絕對不會分人種...把馬子不分人種，賺錢為何要分幣種？今天能賺錢為什麼不賺？',
        names: ['柯文哲', '韓國瑜', '侯友宜', '姚文智'],
        imgs: [keImgQueation, hanImgQueation, houImgQueation, yaoImgQueation],
        backgroundColorOfNames: ['bg-grey', 'bg-blue', 'bg-blue', 'bg-green'],
        answerName: '韓國瑜',
        answerImg: hanImgAnswer,
        backgroundColorOfAnswerName: 'bg-blue',
        context: '民進黨高雄市長參選人陳其邁曾表示，高雄觀光主力過度集中在陸客，對此國民黨高雄市長參選人韓國瑜以「把馬子不分人種，賺錢為何要分幣種？」形容，批評陳其邁的說法是劃地自限。民進黨高雄市黨部執行長林展鴻則抨擊韓國瑜的「把馬子說」侮辱女性。',
      },
      {
        id: 6,
        saying: '台灣是一個民主自由的社會，你有權利去質疑別人的時候，就要準備被人家質疑。',
        names: ['韓國瑜', '丁守中', '姚文智', '柯文哲'],
        imgs: [hanImgQueation, dingImgQueation, yaoImgQueation, keImgQueation],
        backgroundColorOfNames: ['bg-blue', 'bg-blue', 'bg-green', 'bg-grey'],
        answerName: '柯文哲',
        answerImg: keImgAnswer,
        backgroundColorOfAnswerName: 'bg-grey',
        context: '尋求連任的台北市長柯文哲深陷活摘器官爭議，博仁綜合醫院心臟外科主任蘇上豪在臉書表示，較相信指控柯文哲助長器官活摘的伊森．葛特曼，蘇上豪也因此遭到網友謾罵，柯文哲對此回應，質疑別人時就要準備被人質疑。',
      },
      {
        id: 7,
        saying: '在大自然面前，沒有人是神，也無法百分之百預測未來。',
        names: ['侯友宜', '林佳龍', '柯文哲', '鄭文燦'],
        imgs: [houImgQueation, linImgQueation, keImgQueation, zhengImgQueation],
        backgroundColorOfNames: ['bg-blue', 'bg-green', 'bg-grey', 'bg-green'],
        answerName: '林佳龍',
        answerImg: linImgAnswer,
        backgroundColorOfAnswerName: 'bg-green',
        context: '8月底時熱帶性低氣壓來襲，導致南臺灣豪雨不斷，南部許多縣市陸續宣布停班停課，台中則一直到8月23日晚間11點才宣布停班停課，引發不少市民抱怨，競選連任的台中市長林佳龍隨後在臉書坦言，「決定是否停班停課，確實是艱難的判斷」。',
      }],
    };
  },
};
</script>

<style lang="scss">
html, body {
  // height: 100%;
  background-color: #eee;
}

html {
  font-size: 10px !important;
  font-family: "Helvetica Neue", Arial, "微軟正黑體", "Microsoft JhengHei", sans-serif;
}

.app {
  background-color: #fff;
  // height: 100%;
  max-width: 392px;
  margin-left: auto;
  margin-right: auto;
  overflow-x: hidden;
  overflow-y: scroll;
  // -ms-overflow-style: none;
}

.total-container {
  display: flex;
  position: relative;
}

.test-container {
  padding-bottom: 30px;
  // width: 100%;
  // flex: 0 0 100%;
  // CONFUSED
  min-width: 100%;
}

.test-wrapper {
  display: flex;
  // position: relative;
}

.bg-green {
  background-color: #8fc31f;
}

.bg-blue {
  background-color: #00a0e9;
}

.bg-grey {
  background-color: #959595;
}

img {
  user-select: none;
  vertical-align: top;
  height: auto;
}

button {
  border: none;
  width: 190px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  cursor: pointer;
  outline: none;
  font-family: "Helvetica Neue", Arial, "微軟正黑體", "Microsoft JhengHei", sans-serif;
  border-radius: 100px;
  color: #fff;
  user-select: none;
}

a {
  text-decoration: none;
  cursor: pointer;
}
</style>
