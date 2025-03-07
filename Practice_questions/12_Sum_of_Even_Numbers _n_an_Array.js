// Write a function that filters out odd numbers from an array and returns the sum of all even numbers.
const evenSum = (arr) => {
    arr = arr.filter(element => element%2===0);
    return arr.reduce((e1,e2) => e1+e2,0);
}
let arr1 = [1,2,3,4,5,6]
console.log(evenSum(arr1));