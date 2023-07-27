/*
Мы хотим купить квартиру, которая удовлетворяет условиям: площадь от 100 кв. метров и больше на любой улице ИЛИ площадь от 80 кв. метров и больше,
 но на центральной улице Main Street.
 */

//площадь - area (число)
//название улицы - street(строка)
const isGoodApartment = (area, street) => {
    // Через переменную, чтобы функция была не слишком длинной
    const result = area >= 100 || (area >= 80 && street === 'Main Street');
    return result;
};

isGoodApartment(91, 'Queens Street'); // false
isGoodApartment(78, 'Queens Street'); // false
isGoodApartment(70, 'Main Street');   // false

isGoodApartment(120, 'Queens Street'); // true
isGoodApartment(120, 'Main Street');   // true
isGoodApartment(80, 'Main Street');    // true