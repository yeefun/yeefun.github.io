<template>
  <article class="article-container">
    <div class="article">
      <slot></slot>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ContentContainer',
};
</script>

<style lang="scss">
.article {
  width: 100%;
  max-width: 880px;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.8rem;
  @media screen and (min-width: 768px) {
    font-size: 2.0rem;
  }
  &-container {
    width: 100%;
    // padding-top: 64px;
    padding-top: 32px;
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
    @media (min-width: 576px) and (max-width: 767.98px) {
      padding-top: 48px;
    }
    @media screen and (min-width: 768px) and (max-width: 991.98px) {
      padding-left: 96px;
      padding-right: 96px;
      padding-top: 64px;
      // padding: 64px 96px;
    }
    @media screen and (min-width: 992px) {
      padding-top: 80px;
      padding-left: 0;
      padding-right: 0;
    }
  }
  & h1 {
    // font-size: 4.8rem;
    font-size: 3.6rem;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 12px;
    @media screen and (min-width: 321px) {
      font-size: 4rem;
    }
    @media screen and (min-width: 321px) {
      font-size: 4.4rem;
    }
    @media screen and (min-width: 376px) {
      font-size: 4.8rem;
    }
  }
  & p {
    // font-weight: 300;
    // font-size: 1.8rem;
    line-height: 1.64;
    // @media screen and (min-width: 768px) {
    //   font-size: 2.0rem;
    // }
  }
  & figure {
    margin: 48px -20px 56px -20px;
    @media screen and (min-width: 768px) {
      margin-right: 0;
      margin-left: 0;
    }
  }
  &__img {
    width: 100%;
  }
  & figcaption {
    margin-top: 12px;
    font-size: 1.6rem;
    color: #58595b;
    padding-left: 20px;
    padding-right: 20px;
    line-height: 1.48;
    @media screen and (min-width: 768px) {
      padding-left: 0;
      padding-right: 0;
    }
  }
  & h3 {
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 1.4;
    margin-top: 64px;
    margin-bottom: 24px;
    @media screen and (min-width: 768px) {
      font-size: 4.0rem;
      margin-top: 80px;
    }
  }
}
</style>
