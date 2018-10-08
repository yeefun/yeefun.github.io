<template>
  <section class="youtube">
    <iframe class="youtube__player" id="player" src="http://www.youtube.com/embed/6u2vkJCamD8" frameborder="0"></iframe>
  </section>
</template>

<script>
export default {
  name: 'Youtube',
  // created() {
  //   let player;
  //   function onYouTubeIframeAPIReady() {
  //     player = new YT.Player('player', {
  //       events: {

  //       }
  //     });
  //   }
  // },
};
</script>

<style lang="scss">
.youtube {
  position: relative;
  // 9:16
  // TODO JS dynamic set
  padding-bottom: 177.8%;
  // height: 0;
  width: 100%;
  // height: 100vh;
  // background-color: #000;
  &__player {
    width: 100%;
    height: 100%;
    position: absolute;
    // top: 0;
    // left: 0;
  }
}
</style>

