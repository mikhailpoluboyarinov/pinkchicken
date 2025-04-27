import { ref } from 'vue';

// Хук для загрузки моковых данных по одному элементу за раз
export function useFetchData(mockData) {
    const data = ref([]);

    const fetchData = () => {
        // Очищаем текущие данные
        data.value = [];

        let index = 0;

        // Функция для поочередной загрузки элементов
        const load = () => {
            if (index < mockData.length) {
                // Добавляем элемент с состоянием загрузки
                const item = { ...mockData[index], isLoading: true };
                data.value.push(item);

                // Запускаем таймер, чтобы изменить состояние isLoading через 400ms
                setTimeout(() => {
                    data.value[index].isLoading = false;
                    index++;
                    load();
                }, 400);
            }
        };

        // Начинаем загрузку
        load();
    };

    return {
        data,
        fetchData,
    };
}