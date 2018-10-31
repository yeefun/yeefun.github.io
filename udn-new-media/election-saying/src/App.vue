<template>
  <div id="app" class="app">
    <Stage></Stage>
    <Test></Test>
  </div>
</template>

<script>
import Stage from './components/Stage.vue';
import Test from './components/Test.vue';

export default {
  name: 'app',
  components: {
    Stage,
    Test,
  },
};
</script>

<style lang="scss">
html, body {
  height: 100%;
  // position: relative;
  // overflow: hidden;
}

html {
  font-size: 10px !important;
  font-family: "Helvetica Neue", Arial, "微軟正黑體", "Microsoft JhengHei", sans-serif;
}

.app {
  height: 100%;
  max-width: 375px;
  margin-left: auto;
  margin-right: auto;
}
// .pr-0 {
//   padding-right: 0 !important;
// }

.bg-green {
  background-color: #8fc31f;
}

.bg-blue {
  background-color: #00a0e9;
}

.bg-grey {
  background-color: #959595;
}

img {
  user-select: none;
}
</style>
