<template>
  <section class="fixed-page">
    <!-- <div class="fixed-page__photo" :style="{ backgroundImage: `url(${photo})` }"></div> -->
    <!-- <transition name="photo-fade"> -->
      <div class="fixed-page__photo-wrapper">
        <transition name="photo-fade" mode="out-in">
          <div class="fixed-page__photo" v-for="photo in photos" :key="photo.name" v-if="photoName === photo.name" :style="{ backgroundImage: `url(${photo.url})`}"></div>
        </transition>
        <transition name="caption-fade" mode="out-in">
          <div class="content__photo-caption content__photo-caption--dark content__photo-caption--photo-page" v-for="photo in photos" :key="photo.name" v-if="photoName === photo.name" v-html="photo.caption"></div>
        </transition>
      </div>
    <div class="fixed-page__mask"></div>
  </section>
</template>

<script>
import photoLegacy from '../assets/ContentImg/web_legacy.jpg';
import photoWanderers from '../assets/ContentImg/web_wanderers.jpg';

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
      }],
    };
  },
};
</script>

<style lang="scss">
@import '../css/content.scss';

.fixed-page {
  position: relative;
  height: 100vh;
  // background-color: #000;
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

.photo-fade-enter-active, .photo-fade-leave-active {
  transition: opacity, 0.5s;
}
.caption-fade-enter-active, .caption-fade-leave-active {
  transition: opacity, 0.5s 0.3s;
}
.photo-fade-enter, .caption-fade-enter, .photo-fade-leave-to, .caption-fade-leave-to {
  opacity: 0;
}
</style>

