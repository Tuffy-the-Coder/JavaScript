const greet = (person) => {
    console.log("Welcome " + person);
}
const num = 27;
let verify = false;
let name = prompt("Enter your name : ");
let age = Number(prompt("Enter Your age"));
if (age < 18) {
    alert("Sorry you are not eligible to play this game");
}
else {
    greet(name);
    console.log("This is a Number guessing game.\n" +
        "Rules are simple,there's a hidden number between 0-100 and you will get 10 attempts to guess it right.\n" +
        "Every time you guess a wrong number the program will give you a hint of whether it's higher or lower than the number you just entered.");
    console.log("So, without further delay let's get started.");
    for (let i = 1; i <= 10; i++) {
        let guessedNumber = Number(prompt("Enter your guess (" + i + "/10) : "));
        if (guessedNumber === num) {
            alert("Congrats! You got the right number.");
            verify = true;
            break;
        }
        else {
            console.log("Oops! wrong guess.");
            console.log(guessedNumber > num ? "Hint: Go Lower" : "Hint: Go Higher");
        }
    }
    if (!verify) {
        alert("Game Over! The Number was " + num);
    }
}
