<template>
  <section class="share">
    <div class="share__fb-like-wrapper" @click="shareToFb">
      <div class="fb-like" data-href="https://udn.com/upf/newmedia/2018_data/printing_plant/index.html" data-layout="button_count" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
    </div>
    <div @click="shareToLine">
      <img class="line-share" src="//media.line.me/img/button/zh-hant/84x20.png" alt="LINE分享給朋友" width="84" height="20">
    </div>
  </section>
</template>

<script>
import { detectPlatform, detectMob } from 'udn-newmedia-utils';

export default {
  name: 'ShareItem',
  methods: {
    shareToFb() {
      // GA: 有多少人用 FB 分享？
      window.ga('newmedia.send', {
        hitType: 'event',
        eventCategory: 'Share',
        eventAction: 'Click',
        eventLabel: `[每晚與時間賽跑的印報人] [${detectPlatform()}] [FB]`,
      });
    },
    shareToLine() {
      if (detectMob()) {
        window.open('https://line.me/R/msg/text/?【影音專題】每晚與時間賽跑的印報人%0D%0A%0D%0A大選那一夜，他們印到凌晨5點才收工…%0D%0A%0D%0Ahttps://p.udn.com.tw/upf/newmedia/2018_data/printing_plant/index.html');
      } else {
        window.open('https://lineit.line.me/share/ui?url=https://p.udn.com.tw/upf/newmedia/2018_data/printing_plant/index.html');
      }
      // GA: 有多少人用 Line 分享？
      window.ga('newmedia.send', {
        hitType: 'event',
        eventCategory: 'Share',
        eventAction: 'Click',
        eventLabel: `[每晚與時間賽跑的印報人] [${detectPlatform()}] [Line]`,
      });
    },
  },
};
</script>

<style lang="scss">
.share {
  display: flex;
  height: 20px;
  // margin-bottom: 32px;
  &__fb-like-wrapper {
    margin-right: 8px;
  }
  // &__button {
  //   cursor: pointer;
  // }
  // & img {
  //   vertical-align: top;
  // }
}
.fb-like, .line-share {
  cursor: pointer;
}
</style>
