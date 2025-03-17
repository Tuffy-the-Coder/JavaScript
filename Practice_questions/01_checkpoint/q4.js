// You have an array of numbers. Use the map method to create a new array that contains each number squared.
let numbs = [2, 4, 6, 8, 10];
let sqNums = numbs.map((element) => {
    return element * element;
});
console.log(sqNums);