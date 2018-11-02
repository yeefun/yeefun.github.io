<template>
  <div id="app" class="app">
    <Stage></Stage>
    <Test v-for="(test, idx) in tests" :key="idx" :test="test" answer="韓國瑜"></Test>
  </div>
</template>

<script>
import Stage from './components/Stage.vue';
import Test from './components/Test.vue';
import houImg from './assets/Candidates/hou.png';
import keImg from './assets/Candidates/ke.png';
import hanImg from './assets/Candidates/han.png';
import yaoImg from './assets/Candidates/yao.png';

export default {
  name: 'app',
  components: {
    Stage,
    Test,
  },
  data() {
    return {
      tests: [{
        saying: '我們年輕時把馬子，絕對不會分人種...把馬子不分人種，賺錢為何要分幣種？今天能賺錢為什麼不賺？',
        names: ['侯友宜', '柯文哲', '韓國瑜', '姚文智'],
        imgs: [houImg, keImg, hanImg, yaoImg],
        answerName: '韓國瑜',
        answerImg: hanImg,
        backgroundColorOfName: 'bg-blue',
        context: '民進黨高雄市長參選人陳其邁曾表示，高雄觀光主力過度集中在陸客，對此國民黨高雄市長參選人韓國瑜以「把馬子不分人種，賺錢為何要分幣種？」形容，批評陳其邁的說法是劃地自限。民進黨高雄市黨部執行長林展鴻則抨擊韓國瑜的「把馬子說」侮辱女性。',
      }],
    };
  },
};
</script>

<style lang="scss">
// html, body {
//   height: 100%;
//   // position: relative;
//   // overflow: hidden;
// }

html {
  font-size: 10px !important;
  font-family: "Helvetica Neue", Arial, "微軟正黑體", "Microsoft JhengHei", sans-serif;
}

.app {
  // height: 100%;
  max-width: 375px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
  // overflow-y: auto;
}
// .pr-0 {
//   padding-right: 0 !important;
// }

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
}
</style>
