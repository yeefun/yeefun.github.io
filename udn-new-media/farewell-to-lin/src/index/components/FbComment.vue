<template>
  <section class="fb-comment-wrapper">
    <div class="fb-comments" data-href="https://udn.com/upf/newmedia/2018_data/cloudgate/index.html" data-numposts="5" data-width="100%" data-order-by="reverse_time"></div>
  </section>
</template>

<script>
export default {
  name: 'FbComment',
};
</script>

<style lang="scss">
.fb-comment-wrapper {
  padding-right: 24px;
  padding-left: 24px;
  width: 100%;
  max-width: 100%;
  @media screen and (min-width: 768px) {
    padding-right: 0;
    padding-left: 0;
  }
}

// .fb_iframe_widget_lift {
//   width: 100% !important;
// }
</style>

