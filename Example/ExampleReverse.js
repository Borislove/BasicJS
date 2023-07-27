const reverse = (str) => {
    let i = 0;
    // Нейтральный элемент для строк это пустая строка
    let result = '';
    while (i < str.length) {
        // Соединяем в обратном порядке
        result = `${str[i]}${result}`;
        // То же самое через конкатенацию
        // result = str[i] + result;
        i = i + 1;
    }

    return result;
};

const name = '12345';
console.log(reverse(name)); // narB
// Проверка нейтрального элемента
reverse(''); // ''