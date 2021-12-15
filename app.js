// Computer and User Score Counter

    
let userScore = 0;
let computerScore = 0;

 
 // Array with 3 possible Choices
 const possibleChoices = [
    "Rock",
    "Paper",
    "Scissors"
]

// Function return a random number
function randomChoice() {
    return Math.floor(Math.random()*3);
}

 // Pick a random choice from array and return it
function computerPlay() {
    return possibleChoices[randomChoice()].toLowerCase();
}

// Function to let player make a choice

function playerPlay() {
    console.log("Choose between 'Rock', 'Paper' and 'Scissors'");

    let userInput = prompt("Choose between 'Rock', 'Paper' and 'Scissors'");

return userInput.toLowerCase();
    
}

// Play a round and increment the score for the winner

function playRound(playerSelection, computerSelection) {
    console.log(`Your Choice: ${playerSelection}`);
    console.log(`Computers Choice: ${computerSelection}`);

    if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        computerScore++;
    }

    else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log(`You Won! ${playerSelection} beats ${computerSelection}`);
        userScore++;
    }

    else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log(`You Won! ${playerSelection} beats ${computerSelection}`);
        userScore++;
    }

    else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        computerScore++;
    }

    else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log(`You Won! ${playerSelection} beats ${computerSelection}`);
        userScore++;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        computerScore++;
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log(`You Won! ${computerSelection} beats ${playerSelection}`);
        playerScore++;
    }

    else {
        console.log(`It's a Draw! ${computerSelection} can't beat ${playerSelection}`);
    }

    console.log(`Your Score: ${userScore}`);
    console.log(`Computer Score: ${computerScore}`);
}

function playGame() {

    while (computerScore || userScore !== 5) {
        playRound(playerPlay(), computerPlay());;
        
        if (computerScore == 5) {
            console.log("Computer WON");
            break;
        }

        else if (userScore == 5) {
            console.log("You Won");
            break;
        }

    

    }
    
}

playGame();



