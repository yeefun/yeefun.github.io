<template>
  <div id="app" class="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Page>
      <Cover></Cover>
    </Page>
    <div class="test"></div>
  </div>
</template>

<script>
import Cover from './components/Cover.vue';
import Page from './components/Page.vue';

export default {
  name: 'app',
  components: {
    Cover,
    Page,
  },
};
</script>

<style lang="scss">
.app {
  height: 100vh;
  overflow: hidden;
}

.test {
  height: 600px;
}
</style>
