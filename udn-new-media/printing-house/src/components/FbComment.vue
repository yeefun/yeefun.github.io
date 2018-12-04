<template>
  <section class="fb-comment-wrapper">
    <div class="fb-comments" data-href="https://udn.com/upf/newmedia/2018_data/printing_plant/index.html" data-numposts="5" data-width="100%" data-order-by="reverse_time"></div>
  </section>
</template>

<script>
export default {
  name: 'FbComment',
};
</script>

<style lang="scss">
.fb-comment-wrapper {
  width: 100%;
  max-width: 100%;
}

// for IE
.fb_iframe_widget_lift {
  width: 100% !important;
}
</style>
