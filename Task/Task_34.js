/*Реализуйте функцию joinNumbersFromRange(), которая объединяет все числа из диапазона в строку и возвращает её:

joinNumbersFromRange(1, 1); // '1'
joinNumbersFromRange(2, 3); // '23'
joinNumbersFromRange(5, 10); // '5678910'
*/

const joinNumbersFromRange = (start, finish) => {
    let i = start;
    let str = ''; // Инициализация пустой строки
    while (i <= finish) {
        str += i;
        i++;
    }
    return str;
};


console.log(joinNumbersFromRange(1, 1));
console.log(joinNumbersFromRange(2, 3));
console.log(joinNumbersFromRange(5, 10));