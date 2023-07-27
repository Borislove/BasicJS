/*
Напишите программу, которая берет исходное количество евро, записанное в константу eurosCount,
переводит евро в доллары и выводит на экран. Затем полученное значение переводит в рубли и выводит на новой строчке.

Пример вывода для 100 евро:

125
7500
Считаем, что:

1 евро = 1.25 долларов
1 доллар = 60 рублей
 */

const euroCount = 100;
const rublesPerDollar = 60;
const dollarsCount = euroCount * 1.25;
console.log(dollarsCount); //dollar
console.log(dollarsCount * rublesPerDollar); //rub

