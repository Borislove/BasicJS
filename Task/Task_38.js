/*Сэмвелл обнаружил, что его сообщения перехватываются и читаются в замке «Близнецы»,
 поэтому его атаки перестали быть внезапными. Немного подумав, он разработал программу,
 которая будет шифровать передаваемые сообщения по следующему алгоритму:
 программа получает на вход строку и меняет местами в ней каждые 2 подряд идущих символа.
 Если длина строки нечётная, то последний символ остаётся на своём месте.

encrypt('move');   // 'omev'
encrypt('attack'); // 'taatkc'
encrypt('car!'); // 'ac!r'

// Если длина строки нечётная,
// то последний символ остаётся на своём месте
encrypt('go!'); // 'og!'
Реализуйте функцию encrypt(), которая принимает на вход исходное сообщение и возвращает зашифрованное.

Подсказки
В этом упражнении вам пригодятся знания из предыдущих уроков этого курса:
шаблонные строки
Логическое ИЛИ (||)*/

/*
const encrypt = (str) => {
    let result = '';
    const last = str[str.length-1];
    for (let i = 0; i < str.length; i += 2) {
            if ((i === str.length) && (str.length % 2 !== 0)) {
                //   result[last] = str[last];

           console.log(i);
           result += `${str[i + 1]}${str[i]}`;

        if (str.length % 2 === 0) {
            result += `${str[i + 1]}${str[i]}`;
        }
        if (str.length % 2 !== 0) {
              result += `${str[i + 1]}${str[i]}`;
            //result += 'ой незадача';

        }
    }
    return result;
};
*/

/*
const encrypt = (str) => {
    let result = '';
    for (let i = 1; i < (str.length) / 2; i += 1) {
        result += str[i+1]+str[i];
    }
    return result;
};

*/

const encrypt = (str) => isEvenUnevenLength(str);
const isEvenUnevenLength = (str) => {
    return str.length % 2 === 0 ? evenLength(str) : unevenLength(str);
}
//четная длина
const evenLength = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i += 2) {
        result += `${str[i + 1]}${str[i]}`;
    }
    return result;
}
//нечетная длина
const unevenLength = (str) => {
    let tmp = str.slice(0, str.length - 1);
    let result = '';
    for (let i = 0; i < tmp.length; i += 2) {
        result += `${str[i + 1]}${str[i]}`;
    }
    return `${result}${str[str.length - 1]}`;
}

console.log(encrypt('go!')); //
//console.log(encrypt('car!')); //'ac!r'
//console.log(encrypt('move')); //'omev'
//console.log(encrypt('attack')); //'taatkc'

