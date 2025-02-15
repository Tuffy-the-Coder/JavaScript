function greet(person) {
    return "Hello " + person;
}
function avg(num1,num2) {
    return (num1+num2)/2;
}
// arrow function
const sum = (num1,num2)=> {
    return num1+num2;
}
let name = prompt("Enter your name : ");
console.log("Welcome " + greet(name) + ". This program is for finding sum & average  of two numbers. ");
let firstNum = Number(prompt("Enter first number : "));
let secondNum = Number(prompt("Enter second number : "));
console.log("average of " + firstNum + " & " + secondNum + " is " + avg(firstNum,secondNum));
console.log("Sum of " + firstNum + " & " + secondNum + " is " + sum(firstNum,secondNum));
