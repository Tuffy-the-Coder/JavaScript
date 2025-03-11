// Create a function that finds and returns the longest word in a sentence.

const longWord = (str) => {
    return str.split(" ").reduce((e1, e2) => {
        return e1.length > e2.length ? e1 : e2;
    })

}
let str = "I Love JavaScript but it sometimes makes my head hurt";
console.log(longWord(str));