// Write a program to take a user’s name as input and display a welcome message using template literals.
const greet = (name) => {
    alert(`Hello ${name}! Welcome to JavaScript.`);
}
let name = prompt("Enter your name : ");
greet(name);