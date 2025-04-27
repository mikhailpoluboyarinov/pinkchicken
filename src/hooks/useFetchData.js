import { ref } from 'vue';


//хук для загрузки моковых данных
export function useFetchData(mockData) {
    const data = ref([]);

    const fetchData = () => {
        data.value = [];
        let index = 0;

        const load = () => {
            if (index < mockData.length) {
                data.value.push(mockData[index]);
                index++;
                setTimeout(load, 400);
            }
        };

        load();
    };

    return {
        data,
        fetchData,
    };
}
