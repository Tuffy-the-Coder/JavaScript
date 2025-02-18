// tostring
let num = [2, 4, 6, 8];
let b = num.toString();
console.log(b, typeof b);

// join method

let c = num.join("<");
console.log(c, typeof c);

// pop method

num.pop(); // removes(pop) last element
console.log(num);
console.log(num.pop()); // also return last(popped) element

// push method

num.push(6); //add(push) element at the end an array
console.log(num, num.push()); // also return length of new array 

//shift method

num.shift(); // removes first element
console.log(num);
console.log(num.shift()); // also return that element

// unshift method

num.unshift(2); //add element at the beginning of an array
console.log(num, num.unshift()); // also return length of new array 

// delete operator

let num1 = [1, 3, 5, 7, 9];
console.log(num1.length);
delete num1[0]; // delete selected element
console.log(num1, num1.length); // but length doesnt change

// concat method

let num2 = [2, 4, 6, 8];
let newNum = num1.concat(num2); // adds two or more arrys
console.log(newNum);

// sort method

const compare = (a, b) => {
    return a - b; // a-b for ascending sort & b-a for descending
}
let num3 = [10, 22, 33, 8, 90, 101];
num3.sort();
console.log(num3); // sorts alphabetically
num3.sort(compare); // using function to sort ascendingly
console.log(num3);

//reverse method

let num4 = [4, 3, 2, 1];
console.log(num4.reverse());

// splice method

let num5 = [10, 20, 30, 40, 50];
num5.splice(2, 3, 25, 35); // modify arry and returns removed elements
console.log(num5);

// slice method

let num6 = [9, 8, 7, 6, 5, 4];
let num7 = num6.slice(2); // slice from given index point
let num8 = num6.slice(2, 5); // slice given range
console.log(num7, num8);