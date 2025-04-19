<template>
  <header class="header">
      <div class="header__logo-wrapper">
        <img class="header__logo" src="../../assets/images/logo.png" alt="Логотип" />
      </div>
      <div class="header__user-wrapper">
        <div class="header__user">
          <div class="header__user-block">
            <img class="header__user-icon" src="../../assets/icons/revenue.svg" alt="Выручка">
            <span class="header__user-value">5% <span class="header__user-label">выручки</span></span>
          </div>
          <div class="header__user-block">
            <img class="header__user-icon" src="../../assets/icons/user.svg" alt="Логотип юзера">
            <p class="header__user-email">Username@adaurum.ru</p>
          </div>
        </div>
        <div class="header__user-icons">
          <button class="header__button header__button--setup">
            <img class="header__button-icon" src="../../assets/icons/setup.svg" alt="Кнопка настройки">
          </button>
          <button class="header__button header__button--quit">
            <img class="header__button-icon" src="../../assets/icons/quit.svg" alt="Кнопка выхода">
          </button>
        </div>
      </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" scoped>
  @import "Header.scss";
</style>