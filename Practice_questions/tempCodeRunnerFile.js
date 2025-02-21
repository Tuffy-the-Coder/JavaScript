let word2 = ["a", "b", "c"];
let newWord2 = word2.map((Element) => {
    return Element.toUpperCase();
}).join("");
console.log(newWord2);