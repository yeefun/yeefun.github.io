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
        caption: '1978年首演的《薪傳》以舞蹈描述先人在台灣開拓的艱辛。圖／雲門舞集提供，劉振祥攝影',
      }, {
        name: 'wanderers',
        url: photoWanderers,
        caption: '1994年首演的《流浪者之歌》是雲門舞集風格轉變的代表作。圖／雲門舞集提供，游輝弘攝影',
      }, {
        name: 'watermoon',
        url: photoWatermoon,
        caption: '1998年首演的《水月》運用太極導引的原理創作，舞者的肢體與明鏡、流水相互輝映，被國際譽為「當代舞蹈的里程碑」。圖／雲門舞集提供，劉振祥攝影',
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

