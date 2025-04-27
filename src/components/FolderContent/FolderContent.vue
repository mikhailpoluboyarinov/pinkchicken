<template>
  <div v-if="items.length" class="folder__content">
    <div class="folder__content-header">
      <h2 class="folder__content-title">{{ title }}</h2>
    </div>
    <div class="folder__content-wrapper">
      <p
          v-for="(item, index) in items"
          :key="index"
          class="folder__content-name"
      >
        {{ item }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped>
@import "FolderContent.scss";
</style>
