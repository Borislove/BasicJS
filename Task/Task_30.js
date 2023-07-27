/*
Реализуйте функцию normalizeUrl(), которая выполняет так называемую нормализацию данных.
Она принимает адрес сайта и возвращает его с https:// в начале.

Функция принимает адреса в виде АДРЕС или https://АДРЕС, но всегда возвращает адрес в виде https://АДРЕС

Можно использовать метод startsWith(), чтобы проверить, начинается ли строка с префикса https://.
А потом на основе этого добавлять или не добавлять https://.

Примеры вызова:

normalizeUrl("google.com"); // "https://google.com"
normalizeUrl("https://ai.fi"); // "https://ai.fi"

 */

/*const normalizerUrl = (str) => {
    const prefix = 'https://';
    if (str.startsWith(prefix)) {
        return str;
    } else
        return `${prefix}${str}`;
};
*/

const normalizeUrl = (str) => (str.startsWith('https://')) ? str : `${'https://'}${str}`;

//console.log(normalizerUrl("google.com"));
//console.log(normalizerUrl("https://ai.fi"));
console.log(normalizeUrl("google.com"));
console.log(normalizeUrl("https://yandex.ru"));
