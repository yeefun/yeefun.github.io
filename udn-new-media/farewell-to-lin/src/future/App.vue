<template>
  <div id="app">
    <ProgressBar></ProgressBar>
    <HeadBar :isHeadBarLight="isHeadBarLight"></HeadBar>
    <div class="page-content">
      <Cover></Cover>
      <OpeningLine></OpeningLine>
    </div>
  </div>
</template>

<script>
import ProgressBar from '../components/ProgressBar.vue';
import HeadBar from './components/HeadBar.vue';
import Cover from './components/Cover.vue';
import OpeningLine from './components/OpeningLine.vue';

export default {
  name: 'app',
  components: {
    ProgressBar,
    HeadBar,
    Cover,
    OpeningLine,
  },
  data() {
    return {
      isHeadBarLight: false,
    };
  },
};
</script>

<style lang="scss">
.page-content {
  width: 100%;
  // background-color: #000;
  @media screen and (min-width: 576px) {
    position: fixed;
    top: 0;
    transition: transform 1s;
  }
}

</style>
