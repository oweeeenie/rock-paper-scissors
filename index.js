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

function getHumanChoice() {
    let humanInput = prompt("rock, paper, or scissors?");
    return humanInput;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            alert("It's a TIE!!");
        } else if (
            (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") ||
            (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") ||
            (humanChoice.toLowerCase() === "paper" && computerChoice === "rock")
        ) {
            alert("YOU WIN! WINNER WINNER CHICKEN DINNER");
            ++humanScore;
            console.log("your score" , humanScore);
        } else {
            alert("YOU LOST YOU SUCK!");
            ++computerScore;
            console.log("computers score", computerScore);
        }
    }

    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    playRound(humanChoice.toLowerCase(), computerChoice);
    
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    playRound(humanChoice.toLowerCase(), computerChoice);

    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    playRound(humanChoice.toLowerCase(), computerChoice);

    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    playRound(humanChoice.toLowerCase(), computerChoice);

    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    playRound(humanChoice.toLowerCase(), computerChoice);
}

playGame();