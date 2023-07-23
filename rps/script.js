////// VARIABLES /////////

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const newGameBtn = document.querySelector(".new-btn");
const message = document.querySelector(".message");
const iconsArr = ["🪨", "📄", "✂️"];

////// STARTING CONDITIONS //////////

let playerScoreCount = 0;
let computerScoreCount = 0;
let playing = true;

///////// COMPUTER CHOICE ///////////

let computerChoice;

const computerAnswer = function () {
  computerChoice = iconsArr[Math.floor(Math.random() * iconsArr.length)];
  console.log(computerChoice);
};

//////// GAME LOGIC ////////////

rock.addEventListener("click", function () {
  console.log("rock");
  if (playing) {
    computerAnswer();
    console.log(playing);
    {
      if (computerChoice === "🪨") {
        message.textContent = `It's a draw`;
      } else if (computerChoice === "📄") {
        message.textContent = `Computer wins`;
        computerScoreCount++;
        computerScore.textContent = computerScoreCount;
        winner();
      } else if (computerChoice === "✂️") {
        message.textContent = `Player wins!`;
        playerScoreCount++;
        playerScore.textContent = playerScoreCount;
        winner();
      }
    }
  }
});
paper.addEventListener("click", function () {
  console.log("paper");
  if (playing) {
    computerAnswer();

    if (computerChoice === "📄") {
      message.textContent = `It's a draw`;
    } else if (computerChoice === "✂️") {
      message.textContent = `Computer wins`;
      computerScoreCount++;
      computerScore.textContent = computerScoreCount;
      winner();
    } else if (computerChoice === "🪨") {
      message.textContent = `Player wins!`;
      playerScoreCount++;
      playerScore.textContent = playerScoreCount;
      winner();
    }
  }
});
scissors.addEventListener("click", function () {
  console.log("scissors");
  if (playing) {
    computerAnswer();
    if (computerChoice === "✂️") {
      message.textContent = `It's a draw`;
    } else if (computerChoice === "🪨") {
      message.textContent = `Computer wins`;
      computerScoreCount++;
      computerScore.textContent = computerScoreCount;
      winner();
    } else if (computerChoice === "📄") {
      message.textContent = `Player wins!`;
      playerScoreCount++;
      playerScore.textContent = playerScoreCount;
      winner();
    }
  }
});

console.log(playerScoreCount, computerScoreCount);

////// CHOOSE WINNER ////s//////

const winner = function () {
  if (playerScoreCount === 5) {
    playing = false;
    message.textContent = "Player Wins the Game 🎉";
  } else if (computerScoreCount === 5) {
    playing = false;
    message.textContent = "Computer Wins the Game 😢";
  }
};
/////// RESET GAME ///////////

newGameBtn.addEventListener("click", function () {});
