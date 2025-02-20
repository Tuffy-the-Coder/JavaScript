// Create an array of numbers and add a new number taken from user in it until 0 is added to the array
let numbs = [1,2,3,4,5];
let a;
do {
a = prompt("Enter a value to add in array : ");
a = Number(a); 
numbs.push(a);
} while (a!=0);
console.log(numbs);
// filter numbers divisible by 10
let arr1 = [10,15,20,25,30,35,40];
let new_arr1 = arr1.filter((Element)=>{
    return Element%10 == 0;
});
console.log(new_arr1);
let arr2 = arr1.map((Element)=> {
    return Element*Element;
});
console.log(arr2);
// factorial of a given number
let given_number = prompt("Enter the number to for calculating factorial :");
given_number =Number(given_number);
let arr3 = [];
for(let i=1;i<=given_number;i++) {
    arr3.push(i);
}
let new_arr3 = arr3.reduce((acc,cum) => {
    return acc*cum;
},1);
console.log(new_arr3);
// Filter those months  which have letter 'm' in it.
    let months = ["January","Feburary","March","April","May","June","July","August","November"];
    let months_with_m = months.filter((Element) => {
       return Element.toLowerCase().includes('m');
    });
    console.log(months_with_m);