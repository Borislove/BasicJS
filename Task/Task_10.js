/*
Выведите на экран строку Do you want to eat, <name>?, где вместо <name> должна использоваться константа stark.
Вывод должен получиться таким:
Do you want to eat, Arya?
*/


//1
const name = 'Arya';
const message = 'Do you want to eat';
console.log(`${message}, ${name}?`);


//2
const stark = 'Arya';
// BEGIN (write your solution here)
console.log(`${message}, ${stark}?`);


//3
//console.log(`Do you want to eat, ${stark}?`);
//4
console.log(message, `${stark}?`);