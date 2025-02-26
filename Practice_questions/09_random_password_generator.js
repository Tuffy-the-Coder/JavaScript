// Create a random password generator using random characters.
let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
const pswdSize = 8;
let password = "";
for (let i = 0; i < pswdSize; i++) {
    let index = Math.floor(Math.random() * letters.length);
    password += letters[index];
};
console.log(password);