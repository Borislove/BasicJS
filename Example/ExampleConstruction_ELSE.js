const getTypeOfSentence = (sentence) => {
    // Объявляем переменную, в которую запишем тип предложения
    let sentenceType;
    // Предикат, проверяющий окончание текста
    // Если он оканчивается на символ '?', то вернется true,
    // иначе false
    if (sentence.endsWith('?')) {
        // Если условие выше сработало,
        // то это вопросительное предложение.
        // Присваиваем sentenceType соответствующее значение.
        sentenceType = 'Question';
    } else {
        // Во всех остальных случаях предложение — обычное
        sentenceType = 'General';
    }

    // С помощью интерполяции формируем строку
    return `${sentenceType} sentence`;
};