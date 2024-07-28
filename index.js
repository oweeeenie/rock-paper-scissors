let humanScore = 0;
let computerScore = 0;
let tieScore = 0;

const scoreTracker = document.querySelector("#score"); 
const gameResults = document.createElement("div");
gameResults.id = "results";

const resultsAndScoreContainer = document.createElement("div");
resultsAndScoreContainer.classList.add("score-results-container");
resultsAndScoreContainer.appendChild(gameResults);
resultsAndScoreContainer.appendChild(scoreTracker);

const buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");

document.body.appendChild(resultsAndScoreContainer);
document.body.appendChild(buttonContainer);

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

buttonContainer.appendChild(rockButton);
buttonContainer.appendChild(paperButton);
buttonContainer.appendChild(scissorsButton);

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        gameResults.textContent = "IT'S A TIE!!!";
        ++tieScore;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        gameResults.textContent = "YOU WON YOU'RE THE BEST!";
        ++humanScore;
    } else {
        gameResults.textContent = "YOU LOST YOU ARE GARBAGE";
        ++computerScore;
    }

    updateScoreDisplay();

    if (humanScore === 5) {
        alert("YOU WIN THE ENTIRE GAME BROTHA!");
    } else if (computerScore === 5) {
        alert("YOU LOST THE WHOLE GAME YOU ARE TERRIBLE");
    }
}

rockButton.addEventListener('click', () => {
    playRound("rock", getComputerChoice());
});
paperButton.addEventListener('click', () => {
    playRound("paper", getComputerChoice());
});
scissorsButton.addEventListener('click', () => {
    playRound("scissors", getComputerChoice());
});

function updateScoreDisplay() {
    scoreTracker.textContent = `Your score: ${humanScore} | Computer score: ${computerScore} | Ties: ${tieScore}`;
}
