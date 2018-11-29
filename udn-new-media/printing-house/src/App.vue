<template>
  <div id="app">
    <CoverVideo/>
  </div>
</template>

<script>
import CoverVideo from './components/CoverVideo.vue';

export default {
  name: 'app',
  components: {
    CoverVideo,
  },
};
</script>

<style lang="scss">
// html, body {
  // height: 100%;
  // background-color: #f7f8f8;
  // overflow: hidden;
// }

html {
  font-size: 10px !important;
  font-family: "Helvetica Neue", Arial, "微軟正黑體", "Microsoft JhengHei", sans-serif;
}

button {
  border: none;
  outline: none;
  cursor: pointer;
}
</style>
