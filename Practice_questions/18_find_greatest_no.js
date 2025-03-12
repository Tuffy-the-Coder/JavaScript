const greatNum = (num1, num2, num3) => {
    return num1 > num2 ? (num1 > num3 ? "Num1 is greatest" : "Num3 is greatest") : (num2 > num3 ? "Num2 is the greatest" : "num3 is the greatest");
}
let num1 = 10;
let num2 = 20;
let num3 = 30;
console.log(greatNum(num1, num2, num3));

