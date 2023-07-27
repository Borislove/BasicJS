// функция-предикат определяет, является ли число num четным
const isEven = (num) => {
    return num % 2 === 0;
}

// функция увеличивает полученное число num на 10
const increaseNum = (num) => {
    return num + 10;
}

const num = 6;

const result = isEven(increaseNum(num) + 1) ? num + 1 : 1 - num;
//-5 , значение переменной не меняется!  isEven(17) : 1 - (num=6)



