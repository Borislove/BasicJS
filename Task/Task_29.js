/*
* Реализуйте функцию getLetter(), которая извлекает из переданной строки указанный символ (по порядковому номеру, а не индексу)
*  и возвращает его наружу. Если такого символа нет, то функция возвращает пустую строку.

Примеры вызова:
const name = 'Hexlet';

// Обычное обращение возвращает undefined
name[10]; // undefined

// 11 символ соответствует 10 индексу
getLetter(name, 11); // ''

getLetter(name, 1); // 'H'
getLetter(name, 0); // ''
getLetter(name, 6); // 't'

* */

const name = 'Hexlet';
//const getLetter = (str, pos) => str[pos - 1] || '';

const empty = "";   //с этим читабельнее
const getLetter = (str, pos) => str[pos - 1] || empty;   //а так непонятно , что за переменная, визуально будет не поянть, лишняя переменная

console.log(getLetter(name, 1));
console.log(getLetter(name, 0));  // должны быть кавычки
console.log(getLetter(name, 6));
console.log(getLetter(name, 11));

