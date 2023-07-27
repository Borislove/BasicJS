//Явное преобразование типов
const number = parseInt('12345');
console.log(number);


const value = '0';
// Внутри скобок можно указывать переменную
const number1 = parseInt(value);
console.log(number1); // => 0

// Или конкретное значение
const number2 = parseInt('10');
console.log(number2); // => 10

// Если преобразуется число с плавающей точкой
// то отбрасывается вся дробная часть
const number5 = parseInt(3.5);
console.log(number5); // => 3





