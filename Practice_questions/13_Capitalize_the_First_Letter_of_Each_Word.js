// Create a function that takes a sentence and capitalizes the first letter of each word.
const cap = (str) => {
    return str.split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
    .join(" "); 
}
let sentence = "hello world from javascript";
console.log(cap(sentence));