// Create a function that counts how many vowels (a, e, i, o, u) are present in a given string. Ignore case.

const func = (str) => {
    let vowel_count = 0;
    let i=0;
    while(i<str.length) {
        if ("aeiou".includes(str[i].toLowerCase())) {
            vowel_count++;
        }
        i++;
    }
    return vowel_count;
}

let str = "I Love JavaScript";
console.log(func(str));