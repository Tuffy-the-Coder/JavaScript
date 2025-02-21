//Extract the last four characters of "JavaScript" using .slice().
let str1 = "JavaScript";
console.log(str1.slice(-4));
// Write a function to count the number of vowels in a given string.
const vowel = (name) => {
    let no_of_vowel = 0;
    for (let i = 0; i < name.length; i++) {
        if ("aeiou".includes(name[i].toLowerCase())) {
            no_of_vowel++;
        }
    }
    return no_of_vowel;
}
let str2 = prompt("Enter the word");
console.log(`${str2} has ${vowel(str2)} vowels`);