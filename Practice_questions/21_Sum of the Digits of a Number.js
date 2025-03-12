// Write a function that calculates the sum of all the digits in a given number.

const sumDig = (num) => {
    return num.toString().split("").map(Number).reduce((e1,e2) => e1+e2,0);

 }
 let num = 12345;
 console.log(sumDig(num));







 