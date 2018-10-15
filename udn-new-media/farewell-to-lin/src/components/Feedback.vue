<template>
  <section class="feedback">
    <a href="" target="_blank">
      <p>填寫閱讀體驗問卷</p>
    </a>
  </section>
</template>

<script>
export default {
  name: 'Feedback',
};
</script>

<style lang="scss">
.feedback {
  width: 100%;
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  margin-bottom: 128px;
  padding-left: 24px;
  padding-right: 24px;
  line-height: 1.33;
  letter-spacing: 2.6px;
  @media screen and (min-width: 768px) {
    padding-left: 0;
    padding-right: 0;
    font-size: 1.8rem;
    letter-spacing: 3.6px;
    // margin-top: 150px;
    margin-top: 104px;
    margin-bottom: 120px;
  }
  & p {
    padding: 32px 64px;
    border: 0.5px solid #dcdcdc;
    border-radius: 45px;
    box-shadow: 0 0 5.6px 0.4px rgba(53, 53, 53, 0.3);
    color: #2b2b2b;
    @media screen and (min-width: 768px) {
      padding: 38px 86px;
    }
  }
}
</style>

