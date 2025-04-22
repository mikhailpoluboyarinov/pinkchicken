<template>
    <section class="helper">
      <div class="helper__header">
        <h1 class="helper__title">
          Личный помощник
        </h1>
        <div class="helper__user-wrapper">
          <p class="helper__user-name">
            Jim Davidson
          </p>
          <p class="helper__user-mail">
            Jim Davidson@adaurum.ru
          </p>
        </div>
        <button class="helper__button">
          <img class="helper__button-icon" src="../../assets/icons/burger.svg" alt="Кнопка обратной связи">
        </button>
      </div>
      <div class="helper__main">
        <div class="helper__chat-wrapper">
          <div class="helper__chat-window">
            <div class="helper__chat-preview">
              <img class="helper__img" src="../../assets/images/chatters.png">
              <p class="helper__paragraph">Это чат с администратором. Ты можешь с ним пообщаться по любому вопросу о нашем сервисе и узнать о ходе работы</p>
            </div>
            <div class="helper__chat-buttons">
              <button class="helper__chat-button helper__chat-button--pink">Заказать медиаплан</button>
              <button class="helper__chat-button helper__chat-button--blue">Заказать отчет</button>
            </div>
            <div class="helper__chat-textarea-wrapper">
              <textarea class="helper__chat-textarea" placeholder="Введите сообщение для администратора"></textarea>
              <div class="helper__chat-buttons-wrapper">
                <button class="helper__button-media helper__button-media--left"></button>
                <button class="helper__button-media helper__button-media--right"></button>
              </div>
              <div class="helper__button-enter-wrapper">
                <button class="helper__button-enter"></button>
                <span class="helper__span-enter">Enter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: "Helper"
}
</script>

<style scoped>
    @import "Helper.scss";
</style>