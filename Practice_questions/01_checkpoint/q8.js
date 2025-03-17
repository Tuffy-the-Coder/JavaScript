/* Ask the user if they want to continue using confirm(). If they click "OK",
display "You chose to continue", otherwise display "Goodbye!" */
let runAgn = confirm("Do you want to continue?");
if (runAgn) {
    alert("You choose to continue.");
}
else {
    alert("Goodbye");
}