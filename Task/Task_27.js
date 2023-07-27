/*
Реализуйте функцию isInternationalPhone(),
которая проверяет формат указанного телефона. Если телефон начинается с +, значит это международный формат.

isInternationalPhone('89602223423'); // false
isInternationalPhone('+79602223423'); // true

 */


const isInternationalPhone = (str) => str[0] === '+';

isInternationalPhone('89602223423');
isInternationalPhone('+79602223423');

const test = '+79602223423';

