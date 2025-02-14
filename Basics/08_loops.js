// for loop
for (let i = 0; i < 6; i++) {
    console.log(i);
}
// for-in loop
let student = {
    name: "Anurag",
    age: 20,
    course: "BCA",
    cgpa: 5.5,
};
for (let key in student) {
    console.log("key is " + key + " and its value is " + student[key]);
}
// for-of loop
let slogan = "Hello Bacchhoooo";
let letter = 1;
for (let i of slogan) {
    console.log(letter + " letter is " + i);
    letter++;
}
// while loop
let num = 0;
while (num<6) {
    console.log(num);
    num++
}
// do-while loop
num = 0;
do {
    console.log(num);
} while(num>10); // condition doesnt met yet loop will run onces