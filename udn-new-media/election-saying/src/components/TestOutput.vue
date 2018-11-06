<template>
  <section class="output">
    <img src="../assets/TestOutput/good.png" alt="">
    <h2>
      <div>選戰新聞達人</div>
    </h2>
    <Share></Share>
    <h3>天底下沒有我不知道的政事。</h3>
    <p>你的腦中內建候選人金句資料庫，蒐羅各候選人的經典語錄，選戰新聞達人非你莫屬！</p>
  </section>
</template>

<script>
import Share from './Share.vue';

export default {
  name: 'TestOutput',
  components: {
    Share,
  },
};
</script>

<style lang="scss">
.output {
  & img {
    width: 100%;
    height: auto;
  }
}
</style>
