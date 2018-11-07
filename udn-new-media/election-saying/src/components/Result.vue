<template>
  <section class="result" id="result">

    <template v-if="isReaderSoso">
      <img src="../assets/TestOutput/soso.png" alt="">
      <div class="result__text">
        <h2>
          <div id="result__name"></div>
        </h2>
        <Share></Share>
        <h3>你不關心政治，政治會來關心你。</h3>
        <p>你的腦中內建候選人金句資料庫，蒐羅各候選人的經典語錄，選戰新聞達人非你莫屬！</p>
        <button type="button" class="primary-btn"><a href="https://udn.com/vote2018/index" target="_blank">選戰專區</a></button>
      </div>
    </template>

    <template v-else-if="isReaderBad">
      <img src="../assets/TestOutput/bad.png" alt="">
      <div class="result__text">
        <h2>
          <div id="result__name"></div>
        </h2>
        <Share></Share>
        <h3>問世間，選舉為何物？</h3>
        <p>不論是柯文哲的經典語錄，還是韓國瑜的霸氣名言，選戰的喧鬧只要到你身邊就會立刻消音。</p>
        <button type="button" class="primary-btn"><a href="https://udn.com/vote2018/index" target="_blank">選戰專區</a></button>
      </div>
    </template>

    <template v-else>
      <img src="../assets/TestOutput/good.png" alt="">
      <div class="result__text">
        <h2>
          <div id="result__name"></div>
        </h2>
        <Share></Share>
        <h3>天底下沒有我不知道的政事。</h3>
        <p>你的腦中內建候選人金句資料庫，蒐羅各候選人的經典語錄，選戰新聞達人非你莫屬！</p>
        <button type="button" class="primary-btn"><a href="https://udn.com/vote2018/index" target="_blank">選戰專區</a></button>
      </div>
    </template>

  </section>
</template>

<script>
import {
  TweenLite, Power2,
} from 'gsap/TweenMax';
import Share from './Share.vue';

export default {
  name: 'Result',
  components: {
    Share,
  },
  data() {
    return {
      isReaderSoso: true,
      isReaderBad: true,
      resultNames: ['選舉觀測員', '政治絕緣體', '選戰新聞達人'],
      typeNameTimer: null,
    };
  },
  methods: {
    resultSlideInDynamic() {
      TweenLite.to('#result', 0.3, {
        opacity: 1,
        ease: Power2.easeIn,
        onComplete: () => {
          if (this.isReaderSoso) {
            this.typeResultName(0);
          } else if (this.isReaderBad) {
            this.typeResultName(1);
          } else {
            this.typeResultName(2);
          }
        },
      });
    },
    typeResultName(resultNameIdx) {
      const ResultName = document.getElementById('result__name');
      const splitResultName = this.resultNames[resultNameIdx].split('');
      let resultNameStr = '';
      let idx = 0;
      const typeName = () => {
        this.typeNameTimer = setTimeout(() => {
          resultNameStr += splitResultName[idx];
          ResultName.textContent = resultNameStr;
          idx += 1;
          if (idx !== splitResultName.length) {
            typeName();
          } else {
            clearTimeout(this.typeNameTimer);
          }
        }, 160);
      };
      typeName();
    },
  },
};
</script>

<style lang="scss">
.result {
  opacity: 0;
  flex: 0 0 100%;
  box-sizing: border-box;
  & > img {
    width: 100%;
    height: auto;
  }
  & h2 {
    width: 100%;
    // position: relative;
    height: 50px;
    border: 0.5px solid #707070;
    font-size: 2.8rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
    box-sizing: border-box;
    background-color: #fff;
    margin-bottom: 22px;
    & > div {
      width: 100%;
      border: 0.5px solid #707070;
      height: 42px;
      box-sizing: border-box;
      line-height: 42px;
      text-align: center;
    }
  }
  & h3 {
    // font-size: 2rem;
    line-height: 1.35;
    font-weight: 700;
    margin-bottom: 16px;
  }
  & p {
    line-height: 1.25;
    margin-bottom: 30px;
  }
  &__text {
    padding-right: 20px;
    padding-left: 20px;
    font-size: 2rem;
    transform: translateY(-30px);
  }
  & a {
    color: #fff;
    display: block;
  }
}
</style>
