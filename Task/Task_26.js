/*
Реализуйте функцию capitalize(), которая принимает непустую строку и приводит первую букву строки к верхнему регистру:

const name = 'arya';
console.log(capitalize(name)); // => "Arya"
Чтобы получить подстроку (или символ) из строки, используйте метод slice():

'welcome'.slice(2, 5); // "lco"
Для приведения строки к верхнему регистру используйте метод toUpperCase()

'welcome'.toUpperCase(); // "WELCOME"
 */

const name = 'arya';
const first_symbol = name[0].toUpperCase();
const name_slice = name.slice(1, name.length);

console.log(`${first_symbol}${name_slice}`);

//const capitalize = (name) => `${name[0].toUpperCase()}${name.slice(1, name.length)}`;
const capitalize = (name) => `${name[0].toUpperCase()}${name.slice(1)}`;  //до конца срез идет

