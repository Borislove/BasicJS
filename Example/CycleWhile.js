const printNumbers = (lastNumber) => {
    // i – сокращение от index (порядковый номер)
    // используется по общему соглашению во множестве языков
    // как счетчик цикла
    let i = 1;

    while (i <= lastNumber) {
        console.log(i);
        i = i + 1;
    }
    console.log('finished!');
};

printNumbers(3);