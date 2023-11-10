"use strict";

let score = 20;
let highscore = 0;

let guessNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;

  // Invalid Number
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ Not a valid number!";
    score--;
    document.querySelector(".score").textContent = score;
  }

  // When player wins
  else if (guess == guessNumber) {
    document.querySelector(".message").textContent = "🎉 Correct number";
    document.querySelector(".number").textContent = guessNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== guessNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess < guessNumber ? "📉 to low" : "📈 to high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  guessNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").style.width = "15rem";
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";
});
