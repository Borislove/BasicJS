/*
Реализуйте функцию sayHurrayThreeTimes(), которая возвращает строку 'hurray! hurray! hurray!'.

const hurray = sayHurrayThreeTimes();
console.log(hurray); // => hurray! hurray! hurray!
*/

/*
const sayHurrayThreeTimes = () => {
    return 'hurray! hurray! hurray!';
}

const hurray = sayHurrayThreeTimes();
console.log(hurray);
*/

const sayHurrayThreeTimes = () => {
    const message = 'hurray!';
    return `${message} ${message} ${message}`;
}

sayHurrayThreeTimes();