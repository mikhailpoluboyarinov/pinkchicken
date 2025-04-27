<template>
  <div v-if="items.length" class="folder__content">
    <div class="folder__content-header">
      <h2 class="folder__content-title">{{ title }}</h2>

      <button v-if="items.length" class="folder__toggle-button">
        <img
            :src="arrow"
            alt="Кнопка развернуть"
            class="folder__toggle-button-arrow"
            :class="{ rotated: !isExpanded }"
            @click="toggleContent"
        />
      </button>

    </div>
    <div v-if="isExpanded" class="folder__content-wrapper">
      <div
          v-for="(item, index) in items"
          :key="index"
          class="folder__content-item"
      >
        <div class="folder__content-name">
          <span>{{ item.text }}</span>
          <img
              v-if="item.isLoading"
              src="../../assets/icons/refresh.svg"
              alt="Loading"
              class="folder__icon"
          />
          <img
              v-else
              src="../../assets/icons/download.svg"
              alt="Download"
              class="folder__icon"
          />
        </div>
        <div class="folder__content-status">
          <img
              v-if="item.isLoading"
              src="../../assets/icons/subtract.svg"
              alt="Loading"
              class="folder__content-icon-status"
          />
          <img
              v-else
              src="../../assets/icons/checked.svg"
              alt="Загружено"
              class="folder__content-icon-status"
          />
          <span v-if="item.isLoading">
            {{ title === 'Медиапланы' ? 'Медиаплан в процессе составления' : 'Отчет формируется' }}
          </span>
          <span v-else>
            {{ title === 'Медиапланы' ? 'Медиаплан от 01.06.22 готов' : 'Отчет сформирован' }}
          </span>
        </div>
      </div>
      <button v-if="items.length > 2" class="folder__content-bottom">
        Показать еще
      </button>
    </div>
  </div>
</template>

<script>
import arrow from '../../assets/icons/arrow.svg';

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      arrow,
      isExpanded: true,
    };
  },
  methods: {
    toggleContent() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>

<style scoped>
    @import "FolderContent.scss";
</style>