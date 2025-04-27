<template>
  <div :class="['chat-message-wrapper', isUser ? 'chat-message-wrapper--user' : 'chat-message-wrapper--admin']">
    <img
        v-if="!isUser"
        class="chat-message__avatar"
        src="../../assets/images/chatter.png"
        alt="Admin avatar"
    />
    <div class="chat-message__content">
      <div :class="['chat-message', isUser ? 'chat-message--user' : 'chat-message--admin']">
        <p class="chat-message__text">{{ text }}</p>
      </div>
      <div class="chat-message__meta" :class="{ 'chat-message__meta--user': isUser }">
        <template v-if="!isUser">
          <span class="chat-message__name">Jim</span> {{ time }}
        </template>
        <template v-else>
          {{ time }}
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  text: String,
  isUser: Boolean
});

const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
</script>

<style scoped>
  @import "ChatMessage.scss";
</style>