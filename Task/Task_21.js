/*
С помощью метода .slice() получите часть предложения, записанного в константу text, c 6 по 13 символы включительно.
В полученной подстроке с помощью метода .replace() замените слово you на someone и выведите на экран длину итоговой подстроки.
Выполните эти методы подряд в цепочке без создания промежуточных переменных.

slice()
replace()
 */


const text = 'When you play a game of thrones you win or you die.';
/*const text_slice = text.slice(5,13);
const text_replace = text_slice.replace('you', 'someone');
console.log(text_replace.length);
*/
console.log(text.slice(5,13).replace('you', 'someone').length);