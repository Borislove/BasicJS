const saveEmail = () => {
    // В реальности email приходит из формы
    const email = '  SuppORT@hexlet.IO';
    // обрезаем пробельные символы
    const trimmedEmail = email.trim();
    const preparedEmail = trimmedEmail.toLowerCase();
    console.log(preparedEmail);
    // здесь будет запись в базу данных
};


saveEmail();


