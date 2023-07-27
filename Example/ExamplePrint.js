//распечатывает каждую букву слова на отдельной строке
const printNameBySymbol = (name) => {
    let i = 0;
    // Такая проверка будет выполняться до конца строки
    // включая последний символ. Его индекс `length - 1`.
    while (i < name.length) {
        // Обращаемся к символу по индексу
        console.log(name[i]);
        i = i + 1;
    }
};

const name = 'Arya';
printNameBySymbol(name);
// => A
// => r
// => y
// => a