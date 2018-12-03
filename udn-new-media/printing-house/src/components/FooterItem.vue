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
  name: 'FooterItem',
};
</script>

<style lang="scss">
.footer {
  width: 100%;
  margin-top: 64px;
  margin-bottom: 48px;
  font-size: 1.4rem;
  line-height: 1.6;
  &-container {
    border-top: 0.8px solid #dcdddd;
    padding-top: 24px;
    text-align: center;
  }
  &-link {
    color: #a3a3a3;
    border-right: 0.8px solid #dcdddd;
    padding-left: 12px;
    padding-right: 12px;
    transition: color 0.2s ease-in-out;
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
