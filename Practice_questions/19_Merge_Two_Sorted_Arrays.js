// Write a function that takes two sorted arrays and merges them into one sorted array.
const compare = (num1, num2) => {
    return num1 - num2;
}
const mergArr = (arr1, arr2) => {
    return arr1.concat(arr2).sort(compare);
}
let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];
console.log(mergArr(arr1, arr2));