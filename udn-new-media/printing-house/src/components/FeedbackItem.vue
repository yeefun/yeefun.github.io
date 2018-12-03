<template>
    <section class="feedback">
      <a href="https://www.surveycake.com/s/KpQKN" target="_blank">
        <p>填寫閱讀體驗問卷</p>
      </a>
    </section>
</template>

<script>
export default {
  name: 'FeedbackItem',
};
</script>

<style lang="scss">
.feedback {
  margin-top: 64px;
  margin-bottom: 64px;
  width: 100%;
  max-width: 360px;
  // padding-top: 32px;
  // padding-bottom: 32px;
  // border: 0.8px solid #dcdcdc;
  border-radius: 48px;
  // box-shadow: 0 0 4px rgba(53, 53, 53, 0.32);
  box-shadow: 0 0 4px rgba(43, 97, 173, 0.32);
  margin-right: auto;
  margin-left: auto;
  transition: border-radius 0.2s ease-out;
  animation: shine 1.2s ease-out infinite alternate;
  @keyframes shine {
    0% {
      box-shadow: 0 0 8px rgba(43, 97, 173, 0.32);
    }
    100% {
      box-shadow: 0 0 24px rgba(43, 97, 173, 0.48);
    }
  }
  &:hover {
    border-radius: 8px;
    // background-color: #f2f2f2;
    animation-play-state: paused;
    & p {
      color: #2b61ad;
    }
  }
  & p {
    font-size: 1.8rem;
    text-align: center;
    color: #111;
    line-height: 96px;
    transition: color 0.2s ease-out;
  }
}
</style>
