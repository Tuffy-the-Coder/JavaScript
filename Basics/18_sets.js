let data = new Set([1, 2, 3, 2, 1]);
console.log(data);

// Useful Methods:

let mySet = new Set();

// add(value)

mySet.add(1);
mySet.add(2);
mySet.add(1);
mySet.add(3);
mySet.add(4);
console.log(mySet);

// has(value)

console.log(mySet.has(1));
console.log(mySet.has(10));

// delete(value)

mySet.delete(4);
console.log(mySet);

// clear()

mySet.clear();
console.log(mySet);

// size

console.log(mySet.size);

// loop

mySet.forEach((item) => {
    console.log(item * 2);
})

// Convert Array to Set

let arr = [2, 4, 4, 6, 6, 8, 8];
let setArr = new Set(arr);
console.log(setArr);

// Convert Set into Array

let uniqueArr = [...setArr];
console.log(uniqueArr);

// Use Case: Removing Duplicates from an Array

let numbs = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let uniqueNums = [...new Set(numbs)];
console.log(uniqueNums);