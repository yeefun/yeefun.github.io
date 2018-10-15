<template>
  <footer class="footer">
    <div class="footer-container">
      <span>
        <a class="footer-link no-padding" href="http://www.udngroup.com" target="_blank">聯合報系</a>
      </span>
      <span>
        <a class="footer-link" href="https://www.facebook.com/udnplus" target="_blank">粉絲團</a>
      </span>
      <span>
        <a class="footer-link" href="http://udndata.com/udnauthority.html" target="_blank">新聞授權</a>
      </span>
      <span>
        <a class="footer-link no-border" href="http://www.udngroup.com/members/udn_privacy" target="_blank">隱私權聲明</a>
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss">
.footer {
  width: 100%;
  padding-right: 24px;
  padding-left: 24px;
  margin-top: 64px;
  margin-bottom: 48px;
  font-size: 1.4rem;
  line-height: 1.8;
  @media screen and (min-width: 768px) {
    padding-right: 0;
    padding-left: 0;
  }
  &-container {
    border-top: 1px solid #dcdddd;
    padding-top: 20px;
    text-align: center;
  }
  &-link {
    // text-decoration: none;
    color: #a3a3a3;
    border-right: 1px solid #dcdddd;
    padding-left: 12px;
    padding-right: 12px;
    // cursor: pointer;
    &.no-border {
      border-right: none;
      padding-right: 0;
    }
    &.no-padding {
      padding-left: 0;
    }
    &:hover {
      color: #2b2b2b;
    }
  }
}


</style>

