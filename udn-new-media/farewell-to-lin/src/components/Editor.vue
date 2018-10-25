<template>
  <section class="editor">
    <p class="editor__time">2018.10.23</p>
    <div class="editor__content">
      <div>
        <p>文字&emsp;&emsp;&emsp;：</p>
        <p>影音、攝影：</p>
        <p><br></p>
        <p>剪輯&emsp;&emsp;&emsp;：</p>
        <p>網頁設計&emsp;：</p>
        <p>網頁製作&emsp;：</p>
      </div>
      <div>
        <p>何定照、洪欣慈</p>
        <p>蘇健忠、林伯東、林澔一、</p>
        <p>張心慈、報系資料照</p>
        <p>張心慈</p>
        <p>黃微庭</p>
        <p>林昱帆</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Editor',
};
</script>

<style lang="scss">
.editor {
  font-size: 1.6rem;
  line-height: 1.75;
  letter-spacing: 0.8px;
  margin-bottom: 120px;
  color: #2b2b2b;
  margin-top: 30px;
  // padding-left: 24px;
  // padding-right: 24px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
  &__time {
    margin-bottom: 80px;
  }
  &__content {
    display: flex;
  }
}
</style>

