/*Функция countChars() из теории считает, сколько раз входит буква в предложение и при этом учитывает регистр букв.
 То есть A и a с её точки зрения разные символы. Реализуйте вариант этой же функции, так чтобы регистр букв был не важен:

countChars('HexlEt', 'e'); // 2
countChars('HexlEt', 'E'); // 2
*/

//сразу строку в нижний регистр, тут получается перебор и изменение каждого символа
const countChars = (str, char) => {
    let cnt = 0;
    let i = 0;
    while (i < str.length) {
        if (str[i].toLowerCase() === char.toLowerCase()) {
            cnt++;
        }
        i++;
    }
    return cnt;
};

console.log(countChars('HexlEt', 'e')); // 2);
console.log(countChars('HexlEt', 'E')); // 2);
