let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const choice = document.querySelectorAll(".choice");
const gameOver_dialog = document.querySelector(".game-over");
const gameOver_dialog_h2 = document.querySelector(".game-over h2");
const gameOver_dialog_p = document.querySelector(".game-over p");
const continue_button = document.querySelector(".continue-button");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  return computerChoice;
}

function Winner() {
  choice.forEach(function (e) {
    e.addEventListener("mouseup", () => {
      setTimeout(() => {
        if (userScore === 3) {
          userScore = 0;
          computerScore = 0;
          userScore_span.textContent = userScore;
          computerScore_span.textContent = computerScore;
          gameOver_dialog_h2.textContent = `You won the game!`;
          gameOver_dialog_p.textContent = `Congratulations!`;
          gameOver_dialog.showModal();
        }
        if (computerScore === 3) {
          userScore = 0;
          computerScore = 0;
          userScore_span.textContent = userScore;
          computerScore_span.textContent = computerScore;
          gameOver_dialog_h2.textContent = `You lost the game :(`;
          gameOver_dialog_p.textContent = `Try again!`;
          gameOver_dialog.showModal();
        }

        // if (userScore === 3 || computerScore === 3) {
        //   userScore = 0;
        //   computerScore = 0;
        //   userScore_span.textContent = userScore;
        //   computerScore_span.textContent = computerScore;
        //   gameOver_dialog.showModal();
        // }
      }, 300);
    });
  });
}

function main() {
  rock_div.addEventListener("click", function () {
    Winner();
    if (getComputerChoice() === "paper") {
      result_p.textContent = `Paper covers rock. You lose!`;
      computerScore++;
      computerScore_span.textContent = computerScore;
      rock_div.classList.add("red-glow");
      setTimeout(() => {
        rock_div.classList.remove("red-glow");
      }, 300);
    } else if (getComputerChoice() === "scissors") {
      result_p.textContent = `Rock beats scissors. You win!`;
      userScore++;
      userScore_span.textContent = userScore;
      rock_div.classList.add("green-glow");
      setTimeout(() => {
        rock_div.classList.remove("green-glow");
      }, 300);
    } else {
      result_p.textContent = `Rock meets rock. It's a draw!`;
      rock_div.classList.add("yellow-glow");
      setTimeout(() => {
        rock_div.classList.remove("yellow-glow");
      }, 300);
    }
  });

  paper_div.addEventListener("click", function () {
    Winner();
    if (getComputerChoice() === "rock") {
      result_p.textContent = `Paper covers rock. You win!`;
      userScore++;
      userScore_span.textContent = userScore;
      paper_div.classList.add("green-glow");
      setTimeout(() => {
        paper_div.classList.remove("green-glow");
      }, 300);
    } else if (getComputerChoice() === "scissors") {
      result_p.textContent = `Scissors beats Paper. You lose!`;
      computerScore++;
      computerScore_span.textContent = computerScore;
      paper_div.classList.add("red-glow");
      setTimeout(() => {
        paper_div.classList.remove("red-glow");
      }, 300);
    } else {
      result_p.textContent = `Paper meets Paper. It's a draw!`;
      paper_div.classList.add("yellow-glow");
      setTimeout(() => {
        paper_div.classList.remove("yellow-glow");
      }, 300);
    }
  });

  scissors_div.addEventListener("click", function () {
    Winner();
    if (getComputerChoice() === "rock") {
      result_p.textContent = `Rock beats scissors. You lose!`;
      computerScore++;
      computerScore_span.textContent = computerScore;
      scissors_div.classList.add("red-glow");
      setTimeout(() => {
        scissors_div.classList.remove("red-glow");
      }, 300);
    } else if (getComputerChoice() === "scissors") {
      result_p.textContent = `Scissors beats Paper. You win!`;
      userScore++;
      userScore_span.textContent = userScore;
      scissors_div.classList.add("green-glow");
      setTimeout(() => {
        scissors_div.classList.remove("green-glow");
      }, 300);
    } else {
      result_p.textContent = `Scissors meets scissors. It's a draw!`;
      scissors_div.classList.add("yellow-glow");
      setTimeout(() => {
        scissors_div.classList.remove("yellow-glow");
      }, 300);
    }
  });
}
continue_button.addEventListener("mousedown", function () {
  continue_button.classList.add("buttonclick");
  setTimeout(() => {
    gameOver_dialog.close();
  }, 200);
});
continue_button.addEventListener("mouseup", function () {
  continue_button.classList.remove("buttonclick");
});

main();
Winner();
