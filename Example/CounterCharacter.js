const countChars = (str, char) => {
    let i = 0;
    let count = 0;
    while (i < str.length) {
        if (str[i] === char) {
            // Считаем только подходящие символы
            count = count + 1;
        }
        // Счетчик увеличивается в любом случае
        i = i + 1;
    }

    return count;
};

console.log(countChars('Fear cuts deeper than swords.', 'e'));