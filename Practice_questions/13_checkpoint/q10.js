/* Write a function isPalindrome(str) that checks if a given string is a palindrome (reads the same forward and backward).
Ignore case and spaces.*/

// const isPalindrome = (str) => {
//     str = str.split(" ").join("").toLowerCase();
//     // console.log(str);
//     let revStr="";
//     for(let i=str.length-1;i>=0;i--) {
//         revStr +=str[i];
//     }

//     // console.log(revStr);
//     return str === revStr;
// }
// console.log(isPalindrome("cat"));
// console.log(isPalindrome("tat"));
// console.log(isPalindrome("121"));
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("Was it a car or a cat I saw"));

// alternative way

const isPalindrome = (str) => {
    str = str.replace(/\s+/g, "").toLowerCase();
    revStr = str.split("").reverse().join("");
    return str === revStr;
}
console.log(isPalindrome("cat"));
console.log(isPalindrome("tat"));
