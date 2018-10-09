<template>
  <header class="header">
    <div class="header-bar">
      <img class="header-bar__icon-udn" src="../assets/logo/udn-icon.svg" alt="">
      <div class="header-bar__icon-burger" v-if="$root.isMobileSize" @click="isListOpen=!isListOpen">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="header-list" v-if="isListOpen"></div>
  </header>
</template>

<script>
export default {
  name: 'HeadBar',
  data() {
    return {
      isListOpen: true,
    };
  },
};
</script>

<style lang="scss">
// @import '../css/udn-font.css';

.header {
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 99;
  &-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding-top: 8px;
    padding-right: 12px;
    padding-left: 8px;
    position: relative;
    z-index: 149;
    &__icon {
      &-udn {
        width: 34px;
        height: auto;
        cursor: pointer;
      }
      &-burger {
        height: 33.3px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        cursor: pointer;
        & div {
          background-color: #040000;
          width: 26px;
          height: 4px;
        }
      }
    }
  }
  &-list {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 99;
  }
}
</style>

