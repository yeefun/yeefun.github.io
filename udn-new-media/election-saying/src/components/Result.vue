<template>
  <section class="result" id="result" v-if="isResultShow">
    <HeadBar></HeadBar>
    <template v-if="isReaderSoso">
      <img src="../assets/TestOutput/soso.png" alt="">
      <div class="result__text">
        <h2>
          <div id="result__name"></div>
        </h2>
        <Share></Share>
        <h3>你不關心政治，政治會來關心你。</h3>
        <p>選舉只是一時的，關心政治卻是一輩子的功課。關注政治大小事，確保自己的權益不受損。</p>
        <!-- <button type="button" class="primary-btn"><a href="https://udn.com/vote2018/index" target="_blank">選戰專區</a></button> -->
      </div>
    </template>

    <template v-else-if="isReaderBad">
      <img src="../assets/TestOutput/bad.png" alt="">
      <div class="result__text">
        <h2>
          <div id="result__name"></div>
        </h2>
        <!-- <Share></Share> -->
        <h3>問世間，選舉為何物？</h3>
        <p>不論是柯文哲的經典語錄，還是韓國瑜的名言，選戰的喧鬧只要到你身邊就會立刻消音。</p>
        <!-- <button type="button" class="primary-btn"><a href="https://udn.com/vote2018/index" target="_blank">選戰專區</a></button> -->
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
        <!-- <button type="button" class="primary-btn"><a href="https://udn.com/vote2018/index" target="_blank">選戰專區</a></button> -->
      </div>
    </template>
    <div class="result__share">
      <div class="result__share-fb" @click="shareToFb">
        <p>分享至</p>
        <img src="../assets/Share/facebook.svg" alt="">
      </div>
      <div class="result__share-line">
        <p>分享至</p>
        <img src="../assets/Share/line.svg" alt="">
      </div>
      <div class="result__share-election">
        <a href="https://udn.com/vote2018/index" target="_blank">
          <p>選戰專區</p>
        </a>
      </div>
    </div>

  </section>
</template>

<script>
import {
  TweenLite, Power2,
} from 'gsap/TweenMax';
import HeadBar from './HeadBar.vue';
// import Share from './Share.vue';
import sosoFbShareMetaImg from '../assets/Share/meta--soso.jpg';
import badFbShareMetaImg from '../assets/Share/meta--bad.jpg';
import goodFbShareMetaImg from '../assets/Share/meta--good.jpg';

export default {
  name: 'Result',
  components: {
    HeadBar,
    // Share,
  },
  data() {
    return {
      FbShareMetaImg: sosoFbShareMetaImg,
      isResultShow: false,
      // isResultShow: true,
      isReaderSoso: true,
      isReaderBad: true,
      resultNames: ['選舉觀測員', '政治絕緣體', '選戰新聞達人'],
      typeNameTimer: null,
    };
  },
  methods: {
    shareToFb() {
      if (this.$parent.scores <= 2) {
        this.FbShareMetaImg = badFbShareMetaImg;
      } else if (this.$parent.scores >= 6) {
        this.FbShareMetaImg = goodFbShareMetaImg;
      }
      window.FB.ui({
        method: 'share_open_graph',
        action_type: 'og.shares',
        action_properties: JSON.stringify({
          object: {
            'og:title': '候選人金句連連看 這些政策是誰提的？',
            'og:url': 'https://udn.com/upf/newmedia/2018_data/cloudgate/index.html',
            'og:image': this.FbShareMetaImg,
            'og:description': '九合一選舉即將到來，每位候選人都積極喊出各種口號及政策，希望能獲得選民青睞。你知道這些金句出自哪幾位候選人嗎？來玩玩看這個小測驗吧！',
          },
        }),
      });
    },
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
  position: relative;
  &__share {
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: space-between;
    padding-top: 4px;
    padding-bottom: 45px;
    &-fb {
      background-color: #3b62b8;
      & p {
        margin-right: 6px;
      }
    }
    &-line {
      background-color: #00c329;
      & p {
        margin-right: 6px;
      }
    }
    &-election {
      background-color: #d14033;
      &:hover {
        opacity: 0.6;
        background-color: #c64033;
      }
    }
    & p {
      display: inline-block;
      font-size: 1.5rem;
      color: #fff;
    }
    & img {
      width: 20px;
      height: auto;
    }
    & > div {
      width: 31%;
      border-radius: 100px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        opacity: 0.6;
      }
    }
  }
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
    // margin-bottom: 22px;
    // margin-bottom: 10px;
    margin-bottom: 20px;
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
    margin-bottom: 5px;
  }
  &__text {
    padding-right: 20px;
    padding-left: 20px;
    font-size: 2rem;
    transform: translateY(-30px);
    & p {
      line-height: 1.25;
      // margin-bottom: 30px;
    }
  }
  & a {
    color: #fff;
    display: block;
  }
}
</style>
