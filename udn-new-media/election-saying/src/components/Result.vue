<template>
  <section class="result" id="result" v-show="isResultShow" ref="result">
    <HeadBar></HeadBar>
    <template v-if="isReaderSoso">
      <img src="../assets/TestOutput/soso.png" alt="">
      <div class="result__text">
        <h2>
          <div id="result__name"></div>
        </h2>
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
      <!-- 用 touchstart，在手機上會被封鎖
      <div class="result__share-line" @touchstart="shareToLine">
      -->
      <div class="result__share-line" @click="shareToLine">
        <p>分享至</p>
        <img src="../assets/Share/line.svg" alt="">
      </div>
      <div class="result__share-election" @click="gaRelateEvent">
        <a href="https://udn.com/vote2018/index" target="_blank">
          <p>選戰專區</p>
        </a>
      </div>
    </div>

  </section>
</template>

<script>
// import TweenLite from 'gsap/TweenLite';
// import {
//   TweenLite, Power2,
// } from 'gsap/TweenMax';
import { detectMob, detectPlatform } from 'udn-newmedia-utils';
import HeadBar from './HeadBar.vue';

export default {
  name: 'Result',
  components: {
    HeadBar,
    // Share,
  },
  data() {
    return {
      // FbShareMetaImg: 'https://udn.com/upf/newmedia/2018_data/2018election/game2/meta--soso--mob.jpg',
      isResultShow: false,
      // isResultShow: true,
      isReaderSoso: true,
      isReaderBad: true,
      resultNames: ['選舉觀測員', '政治絕緣體', '選戰新聞達人'],
      typeNameTimer: null,
    };
  },
  mounted() {
    if (detectMob() && !navigator.userAgent.match(/iPad/i)) {
      this.$refs.result.style.minHeight = '100vh';
    }
  },
  methods: {
    gaRelateEvent() {
      // GA: how many people enter realted website from this game?
      window.ga('newmedia.send', {
        hitType: 'event',
        eventCategory: 'Relate',
        eventAction: 'Click',
        eventLabel: `[候選人金句連連看] [${detectPlatform()}] [選戰專區]`,
      });
    },
    shareToLine() {
      if (detectMob()) {
        window.open(`https://line.me/R/msg/text/?${document.querySelector('title').innerHTML}%0D%0A%0D%0A${document.querySelector('meta[property="og:description"]').content}%0D%0A%0D%0Ahttps://p.udn.com.tw/upf/newmedia/2018_data/2018election/game2/index.html`);
      } else {
        window.open('https://lineit.line.me/share/ui?url=https://p.udn.com.tw/upf/newmedia/2018_data/2018election/game2/index.html');
      }
      // GA: how many people share this game to Line?
      window.ga('newmedia.send', {
        hitType: 'event',
        eventCategory: 'Share',
        eventAction: 'Click',
        eventLabel: `[候選人金句連連看] [${detectPlatform()}] [Line]`,
      });
    },
    shareToFb() {
      if (this.$parent.scores > 2 && this.$parent.scores < 6) {
        window.open('https://www.facebook.com/sharer/sharer.php?u=https://udn.com/upf/newmedia/2018_data/2018election/game2/soso.html');
      } else if (this.$parent.scores <= 2) {
        window.open('https://www.facebook.com/sharer/sharer.php?u=https://udn.com/upf/newmedia/2018_data/2018election/game2/bad.html');
      } else {
        window.open('https://www.facebook.com/sharer/sharer.php?u=https://udn.com/upf/newmedia/2018_data/2018election/game2/good.html');
      }
      // GA: how many people share this game to FB?
      window.ga('newmedia.send', {
        hitType: 'event',
        eventCategory: 'Share',
        eventAction: 'Click',
        eventLabel: `[候選人金句連連看] [${detectPlatform()}] [FB]`,
      });

      // if (detectMob()) {
      //   if (this.$parent.scores <= 2) {
      //     this.FbShareMetaImg = 'https://udn.com/upf/newmedia/2018_data/2018election/game2/meta--bad--mob.jpg';
      //   } else if (this.$parent.scores >= 6) {
      //     this.FbShareMetaImg = 'https://udn.com/upf/newmedia/2018_data/2018election/game2/meta--good--mob.jpg';
      //   }
      // } else if (this.$parent.scores > 2 && this.$parent.scores < 6) {
      //   this.FbShareMetaImg = 'https://udn.com/upf/newmedia/2018_data/2018election/game2/meta--soso--pc.jpg';
      // } else if (this.$parent.scores <= 2) {
      //   this.FbShareMetaImg = 'https://udn.com/upf/newmedia/2018_data/2018election/game2/meta--bad--pc.jpg';
      // } else {
      //   this.FbShareMetaImg = 'https://udn.com/upf/newmedia/2018_data/2018election/game2/meta--good--pc.jpg';
      // }

      // window.FB.ui({
      //   method: 'share_open_graph',
      //   action_type: 'og.shares',
      //   // action_type: 'og.likes',
      //   action_properties: JSON.stringify({
      //     object: {
      //       'og:url': 'https://udn.com/upf/newmedia/2018_data/2018election/game2/index.html',
      //       'og:title': '候選人金句連連看 這些政策是誰提的？',
      //       'og:description': '九合一選舉即將到來，每位候選人都積極喊出各種口號及政策，希望能獲得選民青睞。你知道這些金句出自哪幾位候選人嗎？來玩玩看這個小測驗吧！',
      //       'og:image': this.FbShareMetaImg,
      //       // 'og:image:width': '1280',
      //       // 'og:image:height': '680',
      //     },
      //   }),
      // });
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
            // GA: what is reader's score?
            window.ga('newmedia.send', {
              hitType: 'event',
              eventCategory: 'Game',
              eventAction: 'Answer',
              eventLabel: `[候選人金句連連看] [共得${this.$parent.scores}分]`,
              eventValue: this.$parent.scores,
            });
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
  // min-height: 100vh;
  // CONFUSED
  min-width: 100%;
  &__share {
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    @media screen and (min-width: 490px) {
      padding-right: 0;
      padding-left: 0;
    }
    justify-content: space-between;
    padding-top: 4px;
    padding-bottom: 45px;
    max-width: 450px;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
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
    width: 300px;
    display: block;
    margin-left: auto;
    margin-right: auto;
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
    line-height: 1.35;
    font-weight: 700;
    margin-bottom: 5px;
  }
  &__text {
    padding-right: 20px;
    padding-left: 20px;
    @media screen and (min-width: 490px) {
      padding-right: 0;
      padding-left: 0;
    }
    font-size: 2rem;
    transform: translateY(-30px);
    max-width: 450px;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    & p {
      line-height: 1.25;
    }
  }
  & a {
    color: #fff;
    display: block;
  }
}
</style>
