let str1 = "Anurag";
let str2 = 'Mohit';
let str3 = `Harish`;
console.log(str1 + str2 + str3);
// String methods
let text = "Javascript";
console.log(text.length); // lenght of string
console.log(text[0]); // Accessing characters
console.log(text.charAt(0)); // Accessing characters
console.log(text.toUpperCase()); // conver in UPPERCASE
console.log(text.toLowerCase()); // conver in lowercase
console.log(text.slice(0,4)); // slice string and print elements btw starting point(0) and ending point(4) element no. 4 will not get printed
console.log(text.slice(2)); // slice after the mentioned element
console.log(text.replace("Javascript","Java")); // replace existing element with given word.
console.log(text.replaceAll("a","z")); // replace all existing element with given word.
let str4 = "     Anurag Rawat  ";
console.log(str4.trim()); // Remove extra spaces
console.log(text.repeat(3)); // repeat elements
let firstName = "Anurag";
let middledName = "singh";
let lastName = "Rawat";
console.log(firstName.concat(lastName)); // add one string with another
console.log(firstName.concat(" ",middledName," ",lastName)); // adds multiple strings
console.log(firstName.includes("u")); // check if string includes given element
console.log(middledName.startsWith("R")); // checks if string starts with given element
console.log(middledName.endsWith("R")); // checks if string ends with given element
let fullName = "Mohit Anthwal";
let age = 21;
console.log(`Hi my name is ${fullName} and i am ${age} y/o`); // template literals
// Escape Charcaters
console.log("He said \"I got 999iq\"");
console.log('he\'s so dump.\nwe all know that');
