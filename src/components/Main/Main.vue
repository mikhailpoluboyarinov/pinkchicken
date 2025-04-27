<template>
  <main class="main">
    <Folder :media-plans="mediaPlansData" :reports="reportsData" />
    <Helper @fetch-data="fetchDataFromServer" />
  </main>
</template>

<script>
import Folder from '../Folder/Folder.vue';
import Helper from '../Helper/Helper.vue';
import { useFetchData } from '../../hooks/useFetchData';
import { mediaPlansMock, reportsMock } from '../../mocks/mockData';

export default {
  name: 'Main',
  components: {
    Folder,
    Helper,
  },
  data() {
    return {
      // Здесь храним данные для медиапланов и отчетов
      mediaPlansData: [],
      reportsData: [],
    };
  },
  methods: {
    // Диспетчер для загрузки данных
    fetchDataFromServer(type) {
      if (type === 'mediaplan') {
        this.fetchMediaPlans();
      } else if (type === 'report') {
        this.fetchReports();
      }
    },

    // Функция для загрузки медиапланов
    fetchMediaPlans() {
      const { data, fetchData } = useFetchData(mediaPlansMock);
      this.mediaPlansData = data;
      fetchData();
    },

    // Функция для загрузки отчетов
    fetchReports() {
      const { data, fetchData } = useFetchData(reportsMock);
      this.reportsData = data;
      fetchData();
    },
  },
};
</script>


<style scoped>
    @import "Main.scss";
</style>