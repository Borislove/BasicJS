/*Реализуйте функцию isLeapYear(), которая определяет, является ли год високосным.
Если год високосный, функция должна вернуть true, если нет – false.
Год считается високосным, если он кратен (то есть делится без остатка) 400 или он одновременно кратен 4 и не кратен 100.
 Как видите, в определении уже заложена вся необходимая логика, осталось только переложить её на код:

isLeapYear(2018); // false
isLeapYear(2017); // false
isLeapYear(2016); // true
Кратность можно проверять так:

// % - возвращает остаток от деления левого операнда на правый
// Проверяем что number кратен 10
number % 10 === 0

// Проверяем что number не кратен 10
number % 10 !== 0*/

const isLeapYear = (year) => (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0) ? true : false;
console.log(isLeapYear(2016));
console.log(isLeapYear(2017));
console.log(isLeapYear(2018));
console.log(isLeapYear(2000));


