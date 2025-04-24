<template>
  <section class="helper" ref="wrapper">
    <div class="helper__header">
      <div class="helper__assist">
        <h1 class="helper__title">Личный помощник</h1>
        <div class="helper__user-wrapper">
          <p class="helper__user-name">Jim Davidson</p>
          <p class="helper__user-mail">Jim Davidson@adaurum.ru</p>
        </div>
      </div>
      <div class="helper__popup-wrapper" ref="popupWrapper">
        <button class="helper__button" ref="button" @click="togglePopup">
          <img class="helper__button-icon" src="../../assets/icons/burger.svg" alt="Кнопка обратной связи">
        </button>

        <div
            v-if="showPopup"
            class="helper__popup"
        >
          <p class="helper__popup-item" @click="closePopup">Обратная связь о работе сервиса</p>
          <p class="helper__popup-item" @click="closePopup">Сменить помощника</p>
        </div>
      </div>
    </div>
      <div class="helper__main">
        <div class="helper__chat-wrapper">
          <div class="helper__chat-window">
            <div v-if="messages.length === 0" class="helper__chat-preview">
              <img class="helper__img" src="../../assets/images/chatters.png">
              <p class="helper__paragraph">
                Это чат с администратором. Ты можешь с ним пообщаться по любому вопросу о нашем сервисе и узнать о ходе работы
              </p>
            </div>

            <div v-else class="helper__chat-messages">
              <ChatMessage
                  v-for="(msg, index) in [...messages].reverse()"
                  :key="index"
                  :text="msg.text"
                  :isUser="msg.isUser"
              />
              <p class="helper__chat-time">Сегодня, {{ time }}</p>
            </div>

            <div class="helper__chat-buttons">
              <button class="helper__chat-button helper__chat-button--pink">Заказать медиаплан</button>
              <button class="helper__chat-button helper__chat-button--blue">Заказать отчет</button>
            </div>
            <div class="helper__chat-textarea-wrapper">
              <textarea
                  class="helper__chat-textarea"
                  placeholder="Введите сообщение для администратора"
                  maxlength="200"
                  v-model="message"
                  @keydown="handleKeyDown"
              />
              <div class="helper__chat-buttons-wrapper">
                <button class="helper__button-media helper__button-media--left"></button>
                <button class="helper__button-media helper__button-media--right"></button>
              </div>
              <div class="helper__button-enter-wrapper">
                <button class="helper__button-enter" @click="sendMessage"></button>
                <span class="helper__span-enter">Enter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import ChatMessage from '../ChatMessage/ChatMessage.vue';
export default {

  components: { ChatMessage },

  name: "Helper",
  data() {
    return {
      showPopup: false,
      message: '',
      messages: [

      ],
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
  },

  methods: {

    //Здесь я обрабатываю клик по кнопке "Бургер"

    togglePopup() {
      this.showPopup = !this.showPopup;
    },

    closePopup() {
      this.showPopup = false;
    },

    handleClickOutside(event) {
      const popupWrapper = this.$refs.popupWrapper;
      const button = this.$refs.button;
      if (
          popupWrapper &&
          !popupWrapper.contains(event.target) &&
          !button.contains(event.target)
      ) {
        this.showPopup = false;
      }
    },

    // Здесь я работаю с сообщениями. Как в макете тут я проверяю, если сообщение не пустое,
    // то пушу сначала сообщение админа, а потом уже свое с задержкой в 0.2. Эта ф-я для наглядности,
    // чтобы показать, что макет работает.

    sendMessage() {
      if (this.message.trim() !== '') {
        const userMessage = { text: this.message.trim(), isUser: true };
        this.message = '';

        this.messages.push({
          text: 'Lörem ipsum suparad pepött då satsig och soskap metrosocial.' +
              ' Sapongar trenåvis i hypol innan visiskap, heterovybelt.' +
              ' Besav ditugen stenosade om exopagt.',
          isUser: false
        });

        setTimeout(() => {
          this.messages.push(userMessage);
        }, 200);
      }
    },


    handleKeyDown(event) {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        this.sendMessage();
      }
    }
  },

  //Монтирую и размонтирую обработчик клика вне окна попапа

  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },

  unmounted() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>

<style scoped>
    @import "Helper.scss";
</style>