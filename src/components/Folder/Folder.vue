<template>
    <section class="folder folder__mobile--hidden">
      <h1 class="folder__title">
        Файлы
      </h1>

      <div v-if="mediaPlans.length === 0 && reports.length === 0" class="folder__wrapper">
        <img class="folder__img" src="../../assets/images/folder.png" />
        <p class="folder__paragraph">
          Закажи у личного помощника медиаплан. Он появится в этом разделе
        </p>
      </div>

      <div v-else>
        <FolderContent title="Медиапланы" :items="mediaPlans" />
        <FolderContent title="Отчеты" :items="reports" />
      </div>

    </section>
    <section class="folder__mobile">
      <div class="folder__buttons">
        <button
            class="folder__button"
            :class="{ 'folder__button--active': activeTab === 'media' }"
            @click="activeTab = 'media'"
        >
          Медиапланы
        </button>
        <button
            class="folder__button"
            :class="{ 'folder__button--active': activeTab === 'report' }"
            @click="activeTab = 'report'"
        >
          Отчеты
        </button>
      </div>
    </section>
</template>

<script>
import FolderContent from "../FolderContent/FolderContent.vue";

export default {
  name: 'Folder',
  components: {FolderContent},
  props: {
    mediaPlans: {
      type: Array,
      default: () => [],
    },
    reports: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      activeTab: null,
    };
  },
};
</script>


<style scoped>
    @import "Folder.scss";
</style>