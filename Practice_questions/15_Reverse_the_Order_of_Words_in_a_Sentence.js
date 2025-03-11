// Write a function that reverses the order of words in a sentence without reversing the letters of the individual words.
const revSent = (str) => {
    return str.split(" ").reverse().join(" ");
}

let str = "I Love JavaScript";
console.log(revSent(str));