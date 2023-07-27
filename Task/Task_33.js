/*Модифицируйте функцию printNumbers() так, чтобы она выводила числа в обратном порядке.
Для этого нужно идти от верхней границы к нижней. То есть счётчик должен быть инициализирован максимальным значением,
а в теле цикла его нужно уменьшать до нижней границы.

printNumbers(4);
4
3
2
1
finished!
*/


//вывод по порядку
/*
const printNumbers = (initialNumber) => {
    // BEGIN (write your solution here)
    let i = 1;
    while (i <= initialNumber) {
        console.log(i);
        if(i == initialNumber){
            return 'finished!';
        }
        i++;
    }
    // END
};
*/

//если зайдет минусное значение, код будет бесконечным
const printNumbers = (num) => {
    while (num !== 0) {             //>=0 перекинет сразу в конец //num >= 1
        console.log(num);
        num--;
    }
    console.log('finished!');
};

console.log(printNumbers(4));
//printNumbers(-4);
