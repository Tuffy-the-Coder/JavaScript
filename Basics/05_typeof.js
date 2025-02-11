const item = {
    title : "Pen",
    price : 99,
    inStock : true,
    productID : BigInt("798"),
    discount : undefined,
}
console.log(typeof item);
console.log(typeof item["price"]);
console.log(typeof item.inStock);
console.log(typeof item.productID);
console.log(typeof item.discount);
// outside object
const name = "Harry";
const age = 22;
const bankBalance = null;
console.log(typeof name);
console.log(typeof (age));
console.log(typeof bankBalance);
