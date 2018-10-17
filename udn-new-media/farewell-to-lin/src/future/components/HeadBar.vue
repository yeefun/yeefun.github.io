<template>
  <header class="header" :style="`background-color: ${isHeadBarLight ? 'rgba(255, 255, 255, 0.5)' : ''}`">
    <div class="header-bar">
      <a href="https://ubrand.udn.com/ubrand/index" target="_blank">
        <svg class="header-bar__icon-udn" viewBox="0 0 272.1 266.5" :class="{ active: isListOpen || !isHeadBarLight }">
          <path d="M105.4,155.2c1.4-2.2-.3-7.2-1.7-8.1s-3.9-4.4-7.1-1.6-4.2,5.2-6.2,6-4.6,2.3-4.6,2.3a5,5,0,0,0-3.5,6.7c1.2,3.1,8.3,10.8,11,12.6s7.5-1.1,8.5-4.7S104,157.3,105.4,155.2Z"/>
          <path d="M87.9,224.8c-3.4,2-12.6,10.7-21.1,19.1a130.2,130.2,0,0,0,15.6,8.4c5.7-6.5,11.1-13.1,13.2-17.3C99.3,227.2,91.9,222.5,87.9,224.8Z"/>
          <path d="M67.5,183.2c-5-4.3-5.1-5.5-9.9-2.7s-4.6,1.6-5.8,2.7-15.6,15.2-18.2,17.7l-5.7,5.3a131,131,0,0,0,8.6,11.3c3.9-4.1,8.7-8.8,11.4-11.3s8.6-8.7,11.1-9.4,3.4-.9,7.1-3.9S72.5,187.6,67.5,183.2Z"/>
          <path d="M39.5,156.3c-2.7,2.1-20.8,18.8-24.6,22.1l-1,.8a129.8,129.8,0,0,0,6.7,14.9c1.8-2.1,3.5-4.1,4.8-5.4,2.9-2.8,14.9-14.5,19.4-18.1s5.5-6,3.6-9.7S42.2,154.2,39.5,156.3Z"/>
          <path d="M167.1,82.4c0.5-2.2-2.3-5.8-4.7-4.3s-6.7,6.4-10.8,10-8.3,7-8.3,7c-1.7,1.5-6,7.9-7.4,10.1s-1.5,3.7.8,4.7,11.4-.4,16.9,3.2,8.6,4.3,10.6,3.1,1.4-4.5.4-7.8,0.3-12.3,1.5-17.2S166.7,84.6,167.1,82.4Z"/>
          <path d="M84.6,202.8c-1.3-4.9-5.7-7.9-9.6-6.9s-7,6.4-7,6.4-9,8.2-14.2,12.7L43,224.7a131.3,131.3,0,0,0,11,10c3-3.5,6.9-8,9.5-10.3s11.6-11.1,14-12.5S85.8,207.7,84.6,202.8Z"/>
          <path d="M215.2,32c-1.7,1.5-7.5,6.3-8.2,7.2s-3.9,3.1,1.6,6.4,9.8,4,15.6,4.1c4,0,10,1.6,14.7,3.3a131.3,131.3,0,0,0-22.7-22.7A5.1,5.1,0,0,1,215.2,32Z"/>
          <path d="M26,138.6c12.2-10.6,11.7-11.1,19.5-15.2s11.4-.7,16.6,3.2,6.6,3,9.5.1,1.4-6.3,1.9-10.9S74,98.5,74.9,92.3s0.1-8.8,5.5-13.6,12.3-3.8,20.1-3.4,17.8,5.2,20.4,6.5,6.8,4.3,10.3,4.9,6.2-3,6.6-4.5-0.5-8.8,0-11.4,0.4-15.4.5-17.6c1.2-17.4,1.6-21.6,4.8-30.6,2.5-7.2,3.3-8.6,6.4-8.5s13.5-1,22.8-.7c4.9,0.2,14.3,1.8,23,3.6A130.5,130.5,0,0,0,5.6,133.2a131.4,131.4,0,0,0,1.7,21.3C16.5,146.9,25.1,139.4,26,138.6Z"/>
          <path d="M185.6,83.1c1.2,1.7,3.3,3.1,5.9.9s11.1-10.6,13.1-12.1,4.3-3.4,2.3-5.6-9.1-8-11.1-8.3-4.1-1.6-6,.4-7.2,6.6-7.2,6.6-3.2,4.3-2.5,8.2S184.4,81.4,185.6,83.1Z"/>
          <path d="M249,128.3c-5.1-.4-8.1-2.8-10.7-5s-6.3-9-8.7-13.7-8.8-9.4-10-12.6,1.6-2.3,4.9-2.2l4.4-1.1c2.1-.7,7.9-3,11.5-4.7a43,43,0,0,0,10-5.8l4.6-3.6a130.2,130.2,0,0,0-9.4-17.2h0c-1.6,2.6-11.8,6.7-13.4,7.8s-4.5,4.5-9.2,7.7a63.5,63.5,0,0,1-10.5,5.5c-6.6,4.8-9.4,9.5-16.5,16.2-2.4,2.3-5.7,5-7.6,7.2s-2.1,5.1-6,8.1c-1.1.9-1.8,2.4-2.8,3.2s-2.8,1.5-4.2,2.8-5.2.5-6.3,1.5c-3.6,3.3-2.6,5.1-2.6,7.3s-3.4,3.9-4,5.3-1.5,4.9-.2,6.5,3.6,5.9,7,7.4,8.1,5.8,12.3,9.7,4.6,5.9,3.5,12.6-8.6,8.7-14.1,7.2-7.2-8.2-7.9-13.8-4.4-15.7-5.6-18.5-4.2-4.8-7.5-2.4-15,13.4-19.4,18.7-3,8-2.2,10.9,4.6,5.3,6.4,7,9.3,4.5,12.5,5.3,7.1,2,7.4,4.7-1.2,11-5.4,15.5-13.5,2.8-18.3-.6-1.3-8.5-.6-11.4-1.4-6.3-1.4-6.3c-0.6-6.7-2.2-8.9-4.6-11.6s-4-1.3-5.8.2-8.9,11-9.3,14.1,7.8,14,7.8,14c11.7,19.8,2,30.3-6.5,42.1-2.8,3.9-6.2,8.3-9.7,12.6A130.6,130.6,0,0,0,264.9,112.7C261.1,123.2,253.2,128.6,249,128.3Zm-34.8,28.9c-8.9,3.6-13.2-4.7-15.3-8.9s-7.3-11.1-9-14.4-0.8-9.6,0-13.8,3.1-3,4.8-2.1a82.7,82.7,0,0,1,8.6,3C208,123,217,132.9,221,140.2S223.1,153.7,214.2,157.2Z"/>
          <path d="M180.5,38.5c-2.1-1.7-6.6-6.6-8.2-7.3s-5.3-1-6.7-.1l-6.6,4.5a18.2,18.2,0,0,0-5.2,7.5c-0.8,2.8,1,6.6,2.6,9.2s3.7,7.3,8.4,4.7,13.5-11.5,15.3-13.1S182.7,40.3,180.5,38.5Z"/>
          <path d="M118.5,144.7c1,0.9,4.6,3.5,9.5-1.4s6.8-7.4,9-9.7,5.5-6,3.8-9.4-5.5-8.4-11.1-5.9a46.9,46.9,0,0,0-10.5,6.2l-2.7,2.4c-2.1,2.7-4.1,5.6-2.7,10.7S117.5,143.8,118.5,144.7Z"/>
          <path d="M115.9,109c3.1-3.3,1.7-4.8-.7-8.4S108,96.5,101,97.1s-10.4,7.3-11.1,9.7c0,0-1.9,5-1.6,7.4s4.4,8.2,7.8,10,6.3-.4,9.6-4.8S112.8,112.3,115.9,109Z"/>
        </svg>
      </a>
      <div class="header-bar__icon-burger" v-if="$root.isMobileSize" @click="isListOpen=!isListOpen" @touchstart.prevent="isListOpen=!isListOpen">
        <div :class="{ active: isListOpen || !isHeadBarLight }"></div>
        <div :class="{ active: isListOpen || !isHeadBarLight }"></div>
        <div :class="{ active: isListOpen || !isHeadBarLight }"></div>
      </div>
      <nav class="header-bar__anchor-menu" :class="{ 'header-bar__anchor-menu--light': isHeadBarLight }" v-else>
        <ul class="header-bar__anchor-item header-bar__anchor-item--outer">
          <li><a href="https://udn.com/upf/newmedia/2018_data/cloudgate/index.html" target="_blank">台灣是我們的共業</a></li>
          <!-- <li><a href="http://nmdap.udn.com.tw/cloudgate/index.html" target="_blank">台灣是我們的共業</a></li> -->
        </ul>
        <ul class="header-bar__anchor-item header-bar__anchor-item--inner">
          <li>雲門大船的未來進行式</li>
        </ul>
      </nav>
    </div>
    <transition name="list-fade">
      <div class="header-list" v-if="isListOpen && $root.isMobileSize" @click.self="isListOpen = false" @touchstart.self.prevent="isListOpen = false">
        <nav class="header-list__anchor-menu">
          <ul class="header-list__anchor-item header-list__anchor-item--inner">
            <li>雲門大船的未來進行式</li>
          </ul>
          <ul class="header-list__anchor-item header-list__anchor-item--outer">
            <li><a href="https://udn.com/upf/newmedia/2018_data/cloudgate/index.html" target="_blank">台灣是我們的共業</a></li>
            <!-- <li><a href="http://nmdap.udn.com.tw/cloudgate/index.html" target="_blank">台灣是我們的共業</a></li> -->
          </ul>
        </nav>
        <section class="logo">
          <a href="https://udn.com/news/index" target="_blank">
            <img src="../../assets/Logo/whiteUdnEveNews.png" alt="">
          </a>
          <a href="https://udn.com/news/index" target="_blank">
            <img src="../../assets/Logo/whiteUdnNews.png" alt="">
          </a>
          <a href="https://udn.com/upf/newmedia/ubrandstudio/" target="_blank">
            <img class="mb-0" src="../../assets/Logo/whiteNewMidia.png" alt="">
          </a>
        </section>
      </div>
    </transition>
  </header>
</template>

<script>
// import Logo from '../../components/Logo.vue';

export default {
  name: 'HeadBar',
  // components: {
  //   Logo,
  // },
  props: ['isHeadBarLight'],
  data() {
    return {
      isListOpen: false,
    };
  },
  methods: {
    innerAnchorShow() {
      this.isInnerAnchorShow = true;
    },
  },
};
</script>

<style lang="scss">
// @import '../css/vue-transition.scss';

.header {
  position: fixed;
  width: 100%;
  // height: 100vh;
  z-index: 99;
  &-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-right: 12px;
    padding-left: 8px;
    position: relative;
    z-index: 149;
    @media screen and (min-width: 576px) {
      padding-top: 12px;
      padding-right: 40px;
      padding-left: 12px;
    }
    &__icon {
      &-udn {
        width: 33.69px;
        height: 33px;
        // width: auto;
        cursor: pointer;
        fill: #040000;
        transition: transform 0.5s;
        &.active {
          fill: #fff;
        }
        &:hover {
          transform: rotate(15deg);
        }
      }
      &-burger {
        height: 33px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        cursor: pointer;
        & div {
          background-color: #040000;
          width: 26px;
          height: 4px;
          &.active {
            background-color: #fff;
          }
        }
      }
    }
    &__anchor {
      &-menu {
        font-size: 1.6rem;
        display: flex;
        color: #fff;
        letter-spacing: 1.6px;
        line-height: 1.88;
        text-align: center;
        user-select: none;
        &--light {
          color: #000;
          & .header-bar {
            &__anchor {
              &-item {
                background-color: #fff;
                & a {
                  color: #000;
                }
                &--outer:hover {
                  border-color: #000;
                }
                &--inner {
                  border-color: #000;
                }
              }
            }
          }
        }
      }
      &-item {
        height: 33px;
        box-sizing: border-box;
        border-width: 2px;
        border-style: solid;
        background-color: transparent;
        & > li {
          margin-left: 0.8px;
        }
        &--outer {
          border-color: transparent;
          transition: border-color 0.5s;
          margin-right: 28px;
          width: 188px;
          // cursor: pointer;
          &:hover {
            border-color: #fff;
          }
        }
        &--inner {
          width: 223.2px;
          border-color: #fff;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    &__anchor {
      &-menu {
        position: relative;
        top: 14.6%;
        // margin-right: auto;
        // margin-left: auto;
        font-size: 2rem;
        display: flex;
        flex-direction: column;
        color: #fff;
        letter-spacing: 2px;
        line-height: 2.1;
        user-select: none;
        width: 246px;
        text-align: center;
      }
      &-item {
        box-sizing: border-box;
        height: 44px;
        border-width: 2px;
        border-style: solid;
        & > li {
          margin-left: 1px;
        }
        &--inner {
          border-color: #fff;
          margin-bottom: 12px;
        }
        // &--outer {
        //   cursor: pointer;
        // }
      }
    }
  }
  & a {
    color: #fff;
  }
  & .logo {
    position: relative;
    top: 40%;
  }
}
</style>

