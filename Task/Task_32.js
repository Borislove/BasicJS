/*Реализуйте функцию getNumberExplanation(), которая принимает на вход число и возвращает объяснение этого числа.
 Если для числа нет объяснения, то возвращается just a number. Объяснения есть только для следующих чисел:

* 666 - devil number
* 42 - answer for everything
* 7 - prime number
Примеры вызова функции:

getNumberExplanation(8);   // just a number
getNumberExplanation(666); // devil number
getNumberExplanation(42);  // answer for everything
getNumberExplanation(7);   // prime number
*/

const getNumberExplanation = (num) => {
    switch (num) {
        case 666:
            return 'devil number';
        case 42:
            return 'answer for everything';
        case 7:
            return 'prime number';
        default:
            return 'just a number';
    }
};

console.log(getNumberExplanation(8));
console.log(getNumberExplanation(666));
console.log(getNumberExplanation(42));
console.log(getNumberExplanation(7));