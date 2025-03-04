// Create a program that asks the user for a fruit name and displays the price per kg using a switch statement.
let fruitsInStock = ["Apple", "Mango", "Banana"];
let reqFruit = prompt("Enter fruit name:").toLowerCase();
switch (reqFruit) {
    case "apple":
        alert("Apple is ₹70 per kg");
        break;
    case "mango":
        alert("Mango is ₹80 per kg");
        break;
    case "mango":
        alert("Mango is ₹80 per kg");
        break;
    default:
        alert(`${reqFruit} is currently out of Stock`);
        break;
}