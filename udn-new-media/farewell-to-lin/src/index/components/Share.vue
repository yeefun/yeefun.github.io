<template>
  <section class="share">
    <div class="share__fb-like-wrapper">
      <!-- TODO change data-href -->
      <div class="fb-like" data-href="https://udn.com/upf/newmedia/2018_data/cloudgate/index.html" data-layout="button_count" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
      <!-- <div class="fb-like" data-href="http://nmdap.udn.com.tw/cloudgate/index.html" data-layout="button_count" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div> -->
    </div>
    <div @click="lineShare">
      <img class="line-share" src="//media.line.me/img/button/zh-hant/84x20.png" alt="LINE分享給朋友" width="84" height="20">
    </div>
  </section>
</template>

<script>
import Utils from 'udn-newmedia-utils';

export default {
  name: 'Share',
  methods: {
    lineShare() {
      if (Utils.detectMob()) {
        // mobile
        // TODO this.setProps('href')
        window.open(`//line.me/R/msg/text/?${document.querySelector('title').innerHTML}%0D%0A%0D%0A${document.querySelector('meta[property="og:description"]').content}%0D%0A%0D%0Ahttps://udn.com/upf/newmedia/2018_data/cloudgate/index.html`);
        // window.open(`//line.me/R/msg/text/?${document.querySelector('title').innerHTML}%0D%0A%0D%0A${document.querySelector('meta[property="og:description"]').content}%0D%0A%0D%0Ahttp://nmdap.udn.com.tw/cloudgate/index.html`);
      } else {
        window.open('https://lineit.line.me/share/ui?url=https://udn.com/upf/newmedia/2018_data/cloudgate/index.html');
        // window.open('https://lineit.line.me/share/ui?url=http://nmdap.udn.com.tw/cloudgate/index.html');
      }
    },
  },
};
</script>

<style lang="scss">
.share {
  display: flex;
  height: 20px;
  // margin-bottom: 48px;
  &__fb-like-wrapper {
    margin-right: 8px;
  }
  // &__button {
  //   cursor: pointer;
  // }
}
.fb-like, .line-share {
  cursor: pointer;
}
</style>

