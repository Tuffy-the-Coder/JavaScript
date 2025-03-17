// Write a function shuffleArray(arr) that randomly shuffles an array.
const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // generating random index btw 0-i+1
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(shuffleArray(arr));