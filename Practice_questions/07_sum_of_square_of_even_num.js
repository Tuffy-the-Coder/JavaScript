// addtion of squares of all even numbers btw 0-100
let numbers = [];
for (let i = 0; i <= 100; i++) {
    numbers[i] = i;
};
let sum_of_even = numbers
    .filter((element) => { return element % 2 == 0 })
    .map((element) => { return element * element })
    .reduce((e1, e2) => { return e1 + e2 }, 0);
console.log(`Sum of squares of all even numbers btw 0-100 is ${sum_of_even}`);