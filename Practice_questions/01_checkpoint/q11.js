// Given an array, find the element that appears the most times. If there are multiple, return any one of them.
let arr = [1, 3, 2, 3, 4, 1, 3, 4, 3];
let highest_apperances = 0;
let most_repeated_number;
for (let i = 0; i < arr.length; i++) {
    let appears = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] == arr[i]) {
            appears++;
        }
    }
    if (appears > highest_apperances) {
        most_repeated_number = arr[i];
        highest_apperances = appears;
    }
}
console.log(most_repeated_number);