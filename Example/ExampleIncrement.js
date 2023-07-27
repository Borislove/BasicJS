const str = 'HELLO';
let result = '';
for (let i = 0; i < str.length; i++) {
    const current = str[i];
    ++i;
    result = `${result}${current.toLowerCase()}`
}


console.log(result);