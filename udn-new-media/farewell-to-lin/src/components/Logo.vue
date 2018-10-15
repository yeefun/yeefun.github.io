<template>
  <section class="logo">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'Logo',
};
</script>

<style lang="scss">
.logo {
  display: flex;
  flex-direction: column;
  & > img {
    width: 138px;
    height: auto;
    margin-bottom: 12px;
  }
}
</style>

