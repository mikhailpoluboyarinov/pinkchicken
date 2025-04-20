<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__logo-wrapper">
        <img class="footer__logo" src="../../assets/images/logo-footer.png" alt="Логотип PinkChicken" />
      </div>
      <div class="footer__privacy">
        <p class="footer__privacy-paragraph">Политика конфиденциальности</p>
      </div>
      <div class="footer__email">
        <a href="mailto:pinkchicken@adaurum.ru" class="footer__email">
          <span class="footer__email-icon"></span>
          pinkchicken@adaurum.ru
        </a>
      </div>
      <div class="footer__languages">
        <span class="footer__lang-icon"></span>
        <span class="footer__lang footer__lang--active">RU</span>
        <span class="footer__lang">EN</span>
        <span class="footer__lang">TUR</span>
      </div>
      <div class="footer__socials">
        <a href="#" class="footer__social footer__social--telegram" aria-label="Telegram"></a>
        <a href="#" class="footer__social footer__social--whatsapp" aria-label="WhatsApp"></a>
      </div>
      </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
  @import "Footer.scss";
</style>