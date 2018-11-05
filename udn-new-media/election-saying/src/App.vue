<template>
  <div id="app" class="app">
    <div class="total-container" id="total-container">
      <Cover>
        <button type="button" @click="slideToTestPage('test1')">開始</button>
      </Cover>
      <div class="test-container">
        <Stage></Stage>
        <div class="test-wrapper">
          <Test v-for="test in tests" :key="test.id" :test="test" :ref="test.id"></Test>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  TweenLite, Back,
} from 'gsap/TweenMax';

import Stage from './components/Stage.vue';
import Cover from './components/Cover.vue';
import Test from './components/Test.vue';

import houImgAnswer from './assets/Candidates/hou--answer.png';
import hanImgAnswer from './assets/Candidates/han--answer.png';

import houImgQueation from './assets/Candidates/hou--question.png';
import keImgQueation from './assets/Candidates/ke--question.png';
import linImgQueation from './assets/Candidates/lin--question.png';
import dingImgQueation from './assets/Candidates/ding--question.png';
import hanImgQueation from './assets/Candidates/han--question.png';
import yaoImgQueation from './assets/Candidates/yao--question.png';

export default {
  name: 'app',
  components: {
    Cover,
    Stage,
    Test,
  },
  data() {
    return {
      tests: [{
        id: 'test1',
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
        id: 'test2',
        saying: '我們年輕時把馬子，絕對不會分人種...把馬子不分人種，賺錢為何要分幣種？今天能賺錢為什麼不賺？',
        names: ['侯友宜', '柯文哲', '韓國瑜', '姚文智'],
        imgs: [houImgQueation, keImgQueation, hanImgQueation, yaoImgQueation],
        backgroundColorOfNames: ['bg-blue', 'bg-grey', 'bg-blue', 'bg-green'],
        answerName: '韓國瑜',
        answerImg: hanImgAnswer,
        backgroundColorOfAnswerName: 'bg-blue',
        context: '民進黨高雄市長參選人陳其邁曾表示，高雄觀光主力過度集中在陸客，對此國民黨高雄市長參選人韓國瑜以「把馬子不分人種，賺錢為何要分幣種？」形容，批評陳其邁的說法是劃地自限。民進黨高雄市黨部執行長林展鴻則抨擊韓國瑜的「把馬子說」侮辱女性。',
      }],
    };
  },
  methods: {
    slideToTestPage(testId) {
      TweenLite.to('#total-container', 0.3, {
        x: '-100%',
        ease: Back.easeIn.config(1.4),
        onComplete: () => {
          this.$refs[testId][0].slideInDynamic();
        },
      });
    },
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
  max-width: 375px;
  margin-left: auto;
  margin-right: auto;
  overflow-x: hidden;
  -ms-overflow-style: none;
}

.total-container {
  display: flex;
  position: relative;
}

.test-container {
  // width: 100%;
  // flex: 0 0 100%;
  // CONFUSED
  min-width: 100%;
}

.test-wrapper {
  display: flex;
  position: relative;
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
