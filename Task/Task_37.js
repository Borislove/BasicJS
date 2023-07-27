/*Напишите функцию makeItFunny(), которая принимает на вход строку и возвращает её копию,
у которой каждый n-ный элемент переведен в верхний регистр. n – задается на входе в функцию.

Для определения каждого n-ного элемента понадобится остаток от деления %. Подумайте, как его можно использовать.

const text = 'I never look back';
// Каждый третий элемент
makeItFunny(text, 3); // 'I NevEr LooK bAck'
Пример работы оператора остатка от деления:

console.log(20 % 3) // => 2
// Так как 3 * 6 = 18
*/


// не получилось
/*
const makeItFunny = (str, n) => {
    let result = '';
    let i = 0;
    while (i < str.length) {
        if (i % n-2 === 0) {   //n-2 работает
            result += str[i].toUpperCase();
        } else
            result += str[i];
        i++;
    }
    return result;
};
*/


//passed
/*const makeItFunny = (str, n) => {
    let result = '';
    let i = 0;
    while (i < str.length) {
        if ((i + 1) % n === 0) {
            result = `${result}${str[i].toUpperCase()}`;
        } else
            result = `${result}${str[i]}`;
        i++;
    }
    return result;
}
*/


//passed
/*const makeItFunny = (str, n) => {
    let result = '';
    let i = 0;
    while (i < str.length) {
        (i + 1) % n === 0 ? result = `${result}${str[i].toUpperCase()}` : result = `${result}${str[i]}`;
        i++;
    }
    return result;
}
*/

/*
const makeItFunny = (str, n) => {
    let result = '';
    let i = 0;
    while (i < str.length) {
        (i + 1) % n === 0 ? result += str[i].toUpperCase() : result += str[i];
        i++;
    }
    return result;
}

 */

/*
const makeItFunny = (str, n) => {
    let result = '';
    let i = 0;
        while (i < str.length) {
        if ((i + 1) % n === 0) {
            result += str[i].toUpperCase();
        }
        i++;
    }
    return result;
}
*/

const makeItFunny = (str, n) => {
    let result = '';
    let i = 0;
    while (i < str.length) {
        result +=str.split().join(str[i].toUpperCase());
        i++;
    }
    return result;
};

const text = 'I never look back';
console.log(makeItFunny(text, 3));
//console.log(makeItFunny('hello', 2));


