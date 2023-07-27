/*
Реализуйте функцию convertText(), которая принимает на вход строку и,
если первая буква не заглавная, возвращает перевернутый вариант исходной строки.
Если первая буква заглавная, то строка возвращается без изменений. Если на вход передана пустая строка, функция должна вернуть пустую строку.

Примеры вызова:

convertText('Hello'); // 'Hello'
convertText('hello'); // 'olleh'

// Не забудьте учесть пустую строку
convertText(''); // ''
Перевернуть строчку можно используя функцию reverse(). В качестве аргумента в неё нужно передать строку, которую мы хотим перевернуть:

const result = reverse('Hello!');
console.log(result); // => '!olleH'
Есть разные подходы к решению этой задачи. Возможно, вам пригодится метод toUpperCase() и возможность получения символа из строки (например, str[0]).

Попробуйте написать два варианта функции: с обычным if-else, и с тернарным оператором.

Подсказки
Подумайте какую проверку нужно написать первым делом: проверку заглавности буквы или является ли пустой строка. Что первичнее?
 */

/*
const convertText = (str) => {
    if (str === '') {
        return '';
    } else if (str[0] === str[0].toUpperCase()) {
        return str;
    } else
        return str.split('').reverse().join('');
};

 */
const convertText = (str) => {
    if (str === '') return '';

    return str[0] === str[0].toUpperCase() ? str : str.split('').reverse().join('');
};

console.log(convertText(''));
console.log(convertText('Hello'));
console.log(convertText('hello'));


//let test = 'tester';
//console.log([test].reverse());

//console.log(test.reverse());
//console.log(reverse(test));