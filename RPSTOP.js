let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}.`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const choicesEl = document.getElementById("choices");
  const roundResultEl = document.getElementById("round-result");
  const scoreEl = document.getElementById("score-text");

  function handleButtonClick(choice) {
    const computerChoice = getComputerChoice();
    const result = playRound(choice, computerChoice);

    choicesEl.textContent = `Human: ${choice} • Computer: ${computerChoice}`;
    roundResultEl.textContent = result;
    scoreEl.textContent = `Scores — Human: ${humanScore}, Computer: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
      const winner = humanScore === 5 ? "You" : "Computer";
      roundResultEl.textContent = `${winner} won the match!`;
      document.getElementById("rock").disabled = true;
      document.getElementById("paper").disabled = true;
      document.getElementById("scissors").disabled = true;
    }
  }

  document.getElementById("rock").addEventListener("click", () => handleButtonClick("rock"));
  document.getElementById("paper").addEventListener("click", () => handleButtonClick("paper"));
  document.getElementById("scissors").addEventListener("click", () => handleButtonClick("scissors"));
});
