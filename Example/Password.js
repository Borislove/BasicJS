const isStrongPassword = (password) => {
    const length = password.length;
    return length > 8 && length < 20;
};

console.log(isStrongPassword('qwerty')); //false
console.log(isStrongPassword('qwerty1234')); //true
console.log(isStrongPassword('zxcvbnmasdfghjkqwertyui')); //false