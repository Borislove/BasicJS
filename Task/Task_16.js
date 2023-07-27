/*
Выведите на экран первую и последнюю буквы предложения, записанного в константу text, в следующем формате:

First: N
Last: t
Постарайтесь создать только одну константу, в которую сразу запишется нужный текст перед печатью на экран.
В этом уроке мы отрабатываем умение собирать составное выражение.
 */

const text = 'Never forget what you are, for surely the world will not';
const output_1 = `${text[0]}${text[text.length-1]}`;    // !!!понятнее что берется последний элемент
console.log("First: " + `${output_1[0]}\n` + "Last: "+ `${output_1[1]}`);


const output = `First: ${text[0]}\nLast: ${text[length(text) - 1]}`;
console.log(output);