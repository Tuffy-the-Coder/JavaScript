// Write a function isEven(num) that takes a number as input and returns true if the number is even, otherwise false.

const isEven = (num) => {
    return num%2 == 0 ? true : false;
}
let num = Number(prompt("Enter a number:"));
alert(isEven(num));