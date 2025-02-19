// Using for loop
console.log("For loop");
let num1 = [1,2,3,4,5];
for(let i=0;i<num1.length;i++) {
    console.log(num1[i]*num1[i]);
}
// for each loop
console.log("For-each loop");
num1.forEach((num) => {
    console.log(num*num*num);
});
// Array.from loop
console.log("Array.from loop");
let name = "harry";
let newName = Array.from(name);
console.log(newName,typeof newName);
// for of loop
console.log("For-of loop");
let num2 = [2,4,6,8];
for(let i of num2) {
    console.log(i);
}
// for in loop
console.log("For-in loop");
let num3 = [1,3,5,7];
for(let i in num3) {
    console.log(i);
}