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
    async fetchDataFromServer(type) {
      if (type === 'mediaplan') {
        await this.fetchData(mediaPlansMock, 'mediaPlansData');
      } else if (type === 'report') {
        await this.fetchData(reportsMock, 'reportsData');
      }
    },

    // Ф-я для загрузки данных
    async fetchData(mockData, dataKey) {
      const { data, fetchData } = useFetchData(mockData);
      this[dataKey] = data;
      await fetchData();
    },
  },
};
</script>


<style scoped>
    @import "Main.scss";
</style>