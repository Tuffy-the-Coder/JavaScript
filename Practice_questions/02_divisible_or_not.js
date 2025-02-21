// Program to check wheather a number is divisible by both 2 & 3 or not
let num = prompt("Enter a number : ");
num = Number(num);
if (num % 2 == 0 && num % 3 == 0) {
    console.log(num + " is divisible by both 2 & 3");
}
else if (num % 2 == 0) {
    console.log(num + " is divisible by 2 only");
}
else if (num % 3 == 0) {
    console.log(num + " is divisible by 3 only");
}
else {
    console.log(num + " is not divisible by both  2 & 3");
}