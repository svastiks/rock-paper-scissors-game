function getComputerChoice() {

    let number = Math.floor(Math.random() * 3);
    let choice = "";
    if (number == 1) {
        choice = "paper";
    }
    else if (number == 2) {
        choice = "scissors";
    }
    else {
        choice = "rock";
    }
    return choice;
}

function playRound(player, computer) {

    console.log(`Computer has chosen => ` + computer);
    player.toLowerCase();
    computer.toLowerCase();
    const allChoices = ["rock", "paper", "scissors"];
    if (player === "rock" && computer === "paper") {
        console.log("Computer wins!, as paper beats paper.");
    }
    else if (player === "scissors" && computer === "rock") {
        console.log("Computer wins!, as rock beats scissors.");
    }
    else if (player === "paper" && computer === "scissors") {
        console.log("Computer wins!, as scissors beat paper.");
    }
    else if (player === "paper" && computer === "rock") {
        console.log("Player wins!, as paper beats rock.")
    }
    else if (player === "rock" && computer === "scissors") {
        console.log("Player wins!, as rock beats scissors.");
    }
    else if (player === computer) {
        console.log(`It's a tie!!, because ` + player + " and " + computer + " are the same.");
    }
    else {
        console.log("Wrong input.")
    }

}

const options = document.getElementsByClassName("options");


// const player = $(`<select name=option>

// <option value="rock"> Rock </select>
// <option value="scissors"> Scissors </select>
// <option value="rock"> Paper </select>
// `).appendTo(".options");

const player = window.prompt("PLEASE TYPE IN AN OPTION: ");

console.log("Player has chosen => " + player);
const computer = getComputerChoice();

playRound(player, computer);

function game() {

    for (i = 0; i < 4; i++) {
        playRound();
    }

}
//console.log(playRound);
//console.log(game);