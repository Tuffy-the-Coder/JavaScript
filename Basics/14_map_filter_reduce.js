// Map
let arr1 = [2, 4, 6, 8];
let square_of_arr1 = arr1.map((element, index, arry) => {
    console.log(element, index, arry);
    return element * element;
});
console.log(square_of_arr1);
// Filter
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let even_arr2 = arr2.filter((element) => {
    return element % 2 == 0
});
console.log(even_arr2);
// Reduce
let arr3 = [10, 9, 8, 7, 6];
let sum_arr3 = arr3.reduce((acc, cur) => {
    return acc + cur;
});
console.log(sum_arr3);


