// Develop a function that counts how many times a specific substring appears within a larger string.

const repeat = (str,word) => {
    let matches = str.split(" ").filter(element =>  element.toLowerCase() == word.toLowerCase());
    return matches.length;
}

let sentence = "The quick brown fox jumps over the lazy dog.";
let word = "the";
console.log(repeat(sentence,word));