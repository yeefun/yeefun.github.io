<template>
  <div id="app" class="app" ref="app" @scroll="fixedStage">
    <div class="total-container" id="total-container">
      <Cover></Cover>
      <div class="test-container">
        <Stage :stageMove="stageMove" v-if="isStageShow"></Stage>
        <div class="test-wrapper" id="test-wrapper" ref="testWrapper">
          <Test v-for="test in tests" :key="`test${test.id}`" :test="test" :ref="`test${test.id}`"></Test>
        </div>
      </div>
      <Result ref="result"></Result>
    </div>
  </div>
</template>

<script>
// import {
//   TweenLite, Back,
// } from 'gsap/TweenMax';

// import TweenLite from 'gsap/TweenLite.js';
// import { Back } from 'gsap/EasePack.js';
import { detectMob, detectPlatform } from 'udn-newmedia-utils';

import Stage from './components/Stage.vue';
import Cover from './components/Cover.vue';
import Result from './components/Result.vue';
import Test from './components/Test.vue';

import houImgAnswer from './assets/Candidates/hou--answer.png';
import hanImgAnswer from './assets/Candidates/han--answer.png';
import dingImgAnswer from './assets/Candidates/ding--answer.png';
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
    Result,
  },
  data() {
    return {
      isStageShow: true,
      stageMove: 0,
      currentStage: 0,
      scores: 0,
      // tests:
      tests: [{
        id: 1,
        saying: '捍衛多數人的居住正義，對付釘子戶，我說到做到。',
        names: ['姚文智', '侯友宜', '鄭文燦', '丁守中'],
        imgs: [yaoImgQueation, houImgQueation, zhengImgQueation, dingImgQueation],
        backgroundColorOfNames: ['bg-green', 'bg-blue', 'bg-green', 'bg-blue'],
        answerName: '丁守中',
        answerImg: dingImgAnswer,
        backgroundColorOfAnswerName: 'bg-blue',
        context: '國民黨台北市長參選人丁守中推出「三招救都更」政策，第一招是提高容積率，一坪換一坪；第二招是成立都更局，一條龍服務；第三招是加速修法，拔掉釘子戶。丁守中表示，在台北需要都更的老房子有60萬戶，「但是4年了，大家講到都更還是一句，麥作惘了（別做夢了）。」',
      },
      {
        id: 2,
        saying: '拆掉機場是為了不讓你輕易的離開我。',
        names: ['柯文哲', '林佳龍', '丁守中', '姚文智'],
        imgs: [keImgQueation, linImgQueation, dingImgQueation, yaoImgQueation],
        backgroundColorOfNames: ['bg-grey', 'bg-green', 'bg-blue', 'bg-green'],
        answerName: '姚文智',
        answerImg: yaoImgAnswer,
        backgroundColorOfAnswerName: 'bg-green',
        context: '民進黨台北市長參選人姚文智日前搭上「撩妹金句」風潮，以幽默風趣的圖文結合市政，向市民告白。姚文智也在金句中提及自己「廢松機，改中央公園」的政策，若當選台北市長，計劃在2022年將松山機場遷走。',
      },
      {
        id: 3,
        saying: '在我的心中，沒有圍牆。有了圍牆，處處不通。沒有圍牆，處處都通。',
        names: ['姚文智', '韓國瑜', '柯文哲', '侯友宜'],
        imgs: [yaoImgQueation, hanImgQueation, keImgQueation, houImgQueation],
        backgroundColorOfNames: ['bg-green', 'bg-blue', 'bg-grey', 'bg-blue'],
        answerName: '韓國瑜',
        answerImg: hanImgAnswer,
        backgroundColorOfAnswerName: 'bg-blue',
        context: '國民黨高雄市長參選人韓國瑜表示，若有機會執掌高雄市，對他來說，兩岸關係及對外關係通通都沒有圍牆，只有道路，他也主張「南南合作」，即台灣南部、中國大陸南方和東南亞結合起來，高雄走經濟之路。民進黨高雄市長參選人陳其邁則把招商引資列為高雄拚經濟的首要目標，強調將打造智慧城市及全世界最有價值的半導體聚落。',
      },
      {
        id: 4,
        saying: '當我們願意開始去關心那些跟我們不一樣的人，或我們願意跟他共享一些東西的時候，這就是共融社會的精神。',
        names: ['韓國瑜', '姚文智', '丁守中', '柯文哲'],
        imgs: [hanImgQueation, yaoImgQueation, dingImgQueation, keImgQueation],
        backgroundColorOfNames: ['bg-blue', 'bg-green', 'bg-blue', 'bg-grey'],
        answerName: '柯文哲',
        answerImg: keImgAnswer,
        backgroundColorOfAnswerName: 'bg-grey',
        context: '尋求連任的台北市長柯文哲透過影片宣傳「擁抱多元，全城平權」的理念，他提到台北市推動共融式遊具，讓健康的孩童與腦性麻痺、殘障、身障的朋友都可以到公園玩樂，柯文哲也以台北在去年舉辦開齋節和台北同志大遊行為例，證明台北能接納各個族群，是個多元、友善的城市。',
      },
      {
        id: 5,
        saying: '捷運蓋到哪裡，都更就做到哪裡。',
        names: ['侯友宜', '柯文哲', '丁守中', '林佳龍'],
        imgs: [houImgQueation, keImgQueation, dingImgQueation, linImgQueation],
        backgroundColorOfNames: ['bg-blue', 'bg-grey', 'bg-blue', 'bg-green'],
        answerName: '侯友宜',
        answerImg: houImgAnswer,
        backgroundColorOfAnswerName: 'bg-blue',
        context: '國民黨新北市長參選人侯友宜推出「三環六線」政策，計劃新增完成五股泰山輕軌、深坑輕軌、淡海輕軌延伸到八里等捷運路線，同時將積極推動共構，提高捷運站周邊的生活和商業機能，以讓更多人住在捷運站周邊。',
      },
      {
        id: 6,
        saying: '空氣品質不會一天變壞，它是經年累月的，但是我們這三年來的努力，空氣變好是看得見的。',
        names: ['侯友宜', '林佳龍', '柯文哲', '鄭文燦'],
        imgs: [houImgQueation, linImgQueation, keImgQueation, zhengImgQueation],
        backgroundColorOfNames: ['bg-blue', 'bg-green', 'bg-grey', 'bg-green'],
        answerName: '林佳龍',
        answerImg: linImgAnswer,
        backgroundColorOfAnswerName: 'bg-green',
        context: '競選連任的台中市長林佳龍與國民黨籍台中市長參選人盧秀燕在空汙議題上針鋒相對，盧秀燕曾批評，台中近年來成為全國空氣最糟的地方，林佳龍則表示，過去30年來，台中火力發電廠的空汙問題，沒有一位縣市長敢挑戰，他選擇扛起責任，今年上半年，台中空氣品質第一次來到全國前十名。',
      }],
      htmlEle: document.documentElement,
      // canStageMove: true,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.fixedStage);
    if (detectMob() && !navigator.userAgent.match(/iPad/i)) {
      this.$refs.app.style.minHeight = '100%';
    } else if (this.htmlEle.clientHeight > 643) {
      document.body.style.cssText = 'display: flex; align-items: center;';
      window.addEventListener('resize', this.handleResize);
    } else {
      document.body.style.cssText = '';
      window.addEventListener('resize', this.handleResize);
    }
    window.addEventListener('unload', this.unloadHandler);
  },
  methods: {
    handleResize() {
      if (this.htmlEle.clientHeight > 643) {
        document.body.style.cssText = 'display: flex; align-items: center;';
      } else {
        document.body.style.cssText = '';
      }
    },
    fixedStage() {
      // if (!this.canStageMove) return;
      if (this.htmlEle.clientHeight > 643) {
        this.stageMove = this.$refs.app.scrollTop;
      } else {
        this.stageMove = this.$refs.app.scrollTop + window.pageYOffset;
      }
    },
    unloadHandler() {
      // GA: what's the stage when reader exit from this game?
      window.ga('newmedia.send', {
        hitType: 'event',
        eventCategory: 'Game',
        eventAction: 'Exit',
        eventLabel: `[候選人金句連連看] [${detectPlatform()}] [第${this.currentStage}關跳出]`,
        eventValue: this.currentStage,
      });
    },
  },
};
</script>

<style lang="scss">
html, body {
  height: 100%;
  background-color: #f7f8f8;
  // overflow: hidden;
}

html {
  font-size: 10px !important;
  font-family: "Helvetica Neue", Arial, "微軟正黑體", "Microsoft JhengHei", sans-serif;
}

.app {
  background-color: #fff;
  position: relative;
  // height: 100%;
  width: 100%;
  // max-width: 392px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  overflow-x: hidden;
  overflow-y: scroll;
}

.total-container {
  display: flex;
  // position: relative;
  height: 100%;
}

.test-container {
  // padding-bottom: 30px;
  // width: 100%;
  // flex: 0 0 100%;
  // CONFUSED
  min-width: 100%;
}

.test-wrapper {
  display: flex;
  padding-bottom: 30px;
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
  width: 100%;
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

.mb-0 {
  margin-bottom: 0 !important;
}

svg {
  vertical-align: top;
}
</style>
