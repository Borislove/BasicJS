/*Реализуйте функцию getHiddenCard(), который принимает на вход номер кредитки (состоящий из 16 цифр)
в виде строки и возвращает его скрытую версию, которая может использоваться на сайте для отображения.
Если исходная карта имела номер 2034399002125581, то скрытая версия выглядит так ****5581.
Другими словами, функция заменяет первые 12 символов, на звездочки. Количество звездочек регулируется вторым необязательным параметром. Значение по умолчанию — 4.

// Кредитка передается внутрь как строка
getHiddenCard('1234567812345678', 2); // "**5678"
getHiddenCard('1234567812345678', 3); // "***5678"
getHiddenCard('1234567812345678');    // "****5678"
getHiddenCard('2034399002121100', 1); // "*1100"
Для выполнения задания вам понадобится метод строки repeat(), который повторяет строку указанное количество раз

'+'.repeat(5); // "+++++"
'o'.repeat(3); // "ooo"
*/


/*
const getHiddenCard = (card_number, base = 4) => {
    const text_toString = card_number.toString();  //приведение к строке
    const text_slice =  card_number.text_toString.slice(12);  //срез после 12
    const symbol_repeat = '*'.repeat(base); //повтор символа по базе
    return `${symbol_repeat}${text_slice}`;
}
*/
//ref
/*const getHiddenCard = (card_number, base = 4) => {
    const text_slice = card_number.toString().slice(12);  //приведение к строке и срез
    const symbol_repeat = '*'.repeat(base); //повтор символа по базе
    return `${symbol_repeat}${text_slice}`;
}
*/

//ref 2
/*
const getHiddenCard = (card_number, base = 4) => {
    return `${'*'.repeat(base)}${card_number.toString().slice(12)}`;
}
*/

//ref 3
/*
const getHiddenCard = (crdNum, starCnt = 4) => {  //cardNumber, starCounter
    return `${'*'.repeat(starCnt)}${crdNum.toString().slice(12)}`;
}*/

//ref 4
const getHiddenCard = (crdNum, starCnt = 4) => `${'*'.repeat(starCnt)}${crdNum.toString().slice(12)}`;

console.log(getHiddenCard(2034399002125581, 2));
console.log(getHiddenCard('1234567812345678', 3));
console.log(getHiddenCard('1234567812345678'));