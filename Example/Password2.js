
//const hasSpecialChars = (str) => /* проверяет содержание специальных символов в строке */;

//const hasCapitalChars = (str) => /* проверяет содержание заглавных букв в строке */;

const isStrongPassword = (password) => {
    const length = password.length;
    // Скобки задают приоритет. Понятно что к чему относится.
    return length > 8 && (hasSpecialChars(password) || hasCapitalChars(password));
};

