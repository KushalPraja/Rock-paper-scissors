function getComputerChoice() {
    var choice = getRandomIntInclusive(1, 3);
    if (choice === 1) return "rock";
    else if (choice === 2) return "paper";
    else return "scissors";
}

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

var round = 0;
var human_score = 0;
var computer_score = 0;

while (round < 5) {
    console.log(`Round ${round + 1}:`);
    var computerchoice = getComputerChoice();
    let x = prompt("Enter rock, paper, or scissors:").toLowerCase();

    // Validate input
    if (!["rock", "paper", "scissors"].includes(x)) {
        console.log("Invalid input. Please enter rock, paper, or scissors.");
        continue;
    }

    console.log(`You chose: ${x}`);
    console.log(`Computer chose: ${computerchoice}`);

    if (x === computerchoice) {
        console.log("It's a tie!");
    } else if (
        (x === "rock" && computerchoice === "scissors") ||
        (x === "scissors" && computerchoice === "paper") ||
        (x === "paper" && computerchoice === "rock")
    ) {
        human_score++;
        console.log("You win this round!");
    } else {
        computer_score++;
        console.log("Computer wins this round!");
    }

    round++;
}

console.log("\nFinal Scores:");
console.log(`Human: ${human_score}`);
console.log(`Computer: ${computer_score}`);

if (human_score > computer_score) {
    console.log("HUMAN WINS!");
} else if (computer_score > human_score) {
    console.log("COMPUTER WINS!");
} else {
    console.log("It's a TIE!");
}
