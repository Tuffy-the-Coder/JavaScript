// Implement a function that computes the factorial of a given number (using recursion or iteration).

const factorial = (num) => {
    if(num == 0) {
        return 1;
    }
    else {
       return num * factorial(num-1);
    }
}
let n = 5;
console.log(factorial(n));