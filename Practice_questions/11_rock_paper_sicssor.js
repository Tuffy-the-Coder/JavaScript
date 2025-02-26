// Rock Paper sicssors game
let wannaPlay = true;
while (wannaPlay) {
    let moves = ["rock", "paper", "scissors"];
    let computerMove = moves[Math.floor(Math.random() * 3)]; // gives random index value 0,1,2 
    let playerMove = prompt("Enter Your move", "rock,paper,sicssors").toLowerCase(); // takes user input and convert it into lowercase for comparission
    // checking if the input is valid or not
    if (!moves.includes(playerMove)) {  // checks if player move is included in moves array or not
        alert("Invalid input kindly check spelling");
        wannaPlay = confirm("Do you wanna try again");
        continue; // skips this iteration
    }
    alert("Computer move was " + computerMove);
    // game logic
    if (computerMove === playerMove) {

        alert("Its a draw");
    }
    else if (
        (computerMove === "rock" && playerMove === "paper") ||
        (computerMove === "paper" && playerMove === "scissors") ||
        (computerMove === "scissors" && playerMove === "rock")) {
        alert("Congrats! you won");
    }
    else {
        alert("You Lose");
    }
    wannaPlay = confirm("Do you wanna play again");
}
alert("Thanks for playing");