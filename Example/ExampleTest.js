const multiplyNumbersFromRange = (start, finish) => {
    let i = start;
    let multiply =  1   ;
    while (i <= finish) {
        multiply *=  i;
        i ++;
    }
    return multiply;
}

console.log(multiplyNumbersFromRange(3, 5)); // 60