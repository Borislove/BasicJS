//округление
const round = (number, precision = 0) => {
    return Math.round( number * Math.pow(10, precision)) / Math.pow(10, precision);
};

console.log(round(2.49)); // 2
console.log(round(3.1231434, 2)); // 3.12