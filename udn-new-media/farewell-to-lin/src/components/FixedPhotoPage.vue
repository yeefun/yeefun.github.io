<template>
  <section class="fixed-page">
    <transition name="photo-fade" v-for="photo in photos" :key="photo.name">
      <div class="fixed-page__photo-wrapper" v-show="photoName === photo.name">
        <div class="fixed-page__photo" :style="`background-image: url(${photo.url})`"></div>
        <transition name="caption-fade">
          <div class="content__photo-caption content__photo-caption--dark content__photo-caption--photo-page" v-show="photoName === photo.name" v-html="photo.caption" :key="photo.name"></div>
        </transition>
      </div>
    </transition>
    <div class="fixed-page__mask"></div>
  </section>
</template>

<script>
import photoLegacy from '../assets/ContentImg/web_legacy.jpg';
import photoWanderers from '../assets/ContentImg/web_wanderers.jpg';
import photoWatermoon from '../assets/ContentImg/web_watermoon.jpg';

export default {
  name: 'FixedPhotoPage',
  props: ['photoName'],
  data() {
    return {
      photos: [{
        name: 'legacy',
        url: photoLegacy,
        caption: '圖說預留的位置&ensp;/&ensp;誰誰&ensp;攝影',
      }, {
        name: 'wanderers',
        url: photoWanderers,
        caption: '圖說預留的位置&ensp;/&ensp;誰誰&ensp;攝影',
      }, {
        name: 'watermoon',
        url: photoWatermoon,
        caption: '圖說預留的位置&ensp;/&ensp;誰誰&ensp;攝影',
      }],
    };
  },
};
</script>

<style lang="scss">
@import '../css/content.scss';
@import '../css/vue-transition.scss';

.fixed-page {
  // background-color: #000;
  position: relative;
  height: 100vh;
  &__photo {
    // position: absolute;
    // width: 100%;
    height: 100%;
    // background-image: url('../assets/ContentImg/web_legacy.jpg');
    background-size: cover;
    background-position: center;
    &-wrapper {
      width: 100%;
      height: 100%;
      position: absolute;
    }
  }
  &__mask {
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.85);
  }
}
</style>

