// if else if
let age = prompt("Enter your age : ");
if(age<0) {
    console.log("Invalid input");
}
else if(age<18) {
    console.log("your age is " + age + " hence you are underage for this website.");
}
else {
    console.log("Welcome to our website");
}
// switch case
let fruit = prompt("Enter fruit name in lowercase   ").toLowerCase();
switch(fruit) {
    case "apple" :
        console.log(fruit + " is 70 rupees per kg");
        break;

    case "mango" :
    case "banana" :  
        console.log((fruit === "mango" ? "Mangoes" : "Bananas") + " are 60 rupees per kg");
        break;
    default : 
    console.log("Out of stock or invalid input");
}
// ternary operators
let marks = prompt("Enter your marks : ");
marks = Number(marks);
console.log((marks>33 ? "pass" : "fail"));