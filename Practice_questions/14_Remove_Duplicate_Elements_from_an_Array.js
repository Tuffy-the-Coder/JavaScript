// Develop a function that returns a new array with only unique values from the given array.
const newArr = (arr) => {
    let uniqueArr = [...new Set(arr)];

    return uniqueArr;
}
let arr = [1, 2, 2, 3, 4, 4, 5];
console.log(newArr(arr));