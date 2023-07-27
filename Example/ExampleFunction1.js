//функция, которая принимает строку и проверяет, заглавная ли первая буква.

/*
Алгоритм:

1.Получим и запишем в константу первый символ из строки-параметра
2.Сравним, равен ли символ своей большой (заглавной) версии
3.Вернем результат
 */


const isFirstLetterInUpperCase = (string) => {
    const firstLetter = string[0];
    return firstLetter.toUpperCase() === firstLetter;
};

console.log(isFirstLetterInUpperCase('marmont')); // false
console.log(isFirstLetterInUpperCase('Robb'));    // true

