/** @format */
(function () {
  const input = document.getElementById("input");
  const submit = document.getElementById("submit");
  const wScore = document.getElementById("wScore");
  const p1Btn = document.getElementById("p1Btn");
  const p2Btn = document.getElementById("p2Btn");
  const p1ScoreElm = document.getElementById("p1Score");
  const p2ScoreElm = document.getElementById("p2Score");
  const winner = document.getElementById("winner");
  const resetBtnElem = document.getElementById("reset");

  let winScore = 20;
  let player1Score = 0;
  let player2Score = 0;
  let turn = "player1";
  let turn1 = "player2";

  wScore.textContent = winScore;
  p1ScoreElm.textContent = player1Score;
  p2ScoreElm.textContent = player2Score;

  submit.addEventListener("click", function (event) {
    event.preventDefault();
    const inputVal = Number(input.value);
    if (inputVal === "" || inputVal < 1 || inputVal > 20) {
      winner.innerHTML = "Please enter valid number";
    } else if (inputVal) {
      winner.innerHTML = "";
      winScore = Number(input.value);
      wScore.textContent = winScore;
      input.value = "";
      intialplayState();
    }
  });
  // Player One
  p1Btn.addEventListener("click", function (event) {
    event.preventDefault();
    if ("player1" === turn) {
      player1Score = randomMaxNumber(winScore);
      p1ScoreElm.textContent = player1Score;
      p1ScoreElm.style.color = "red";
      turn1 = "player2";
      p1Btn.setAttribute("disabled", "disabled");
      p2Btn.removeAttribute("disabled");
      checkWinner();
    }
  });
  // Player Two
  p2Btn.addEventListener("click", function (event) {
    event.preventDefault();
    if ("player2" === turn1) {
      player2Score = randomMaxNumber(winScore);
      p2ScoreElm.textContent = player2Score;
      p2ScoreElm.style.color = "#e84393";
      turn = "player1";
      p2Btn.setAttribute("disabled", "disabled");
      p1Btn.removeAttribute("disabled");
      checkWinner();
    }
  });
  function checkWinner() {
    const isP1Winner = winScore === player1Score;
    const isP2Winner = winScore === player2Score;
    if (isP1Winner || isP2Winner) {
      p1Btn.setAttribute("disabled", "disabled");
      p2Btn.setAttribute("disabled", "disabled");
    }
    displayWinner(isP1Winner, isP2Winner);
  }
  function displayWinner(p1WinState, isP2State) {
    if (p1WinState) {
      winner.innerHTML = "Player1 is winner";
    } else if (isP2State) {
      winner.innerHTML = "Player2 is winner";
    }
  }
  resetBtnElem.addEventListener("click", function () {
    event.preventDefault();
    winScore = 20;
    intialplayState();
  });
  function intialplayState() {
    player1Score = 0;
    player2Score = 0;
    turn = "player1";
    turn1 = "player2";
    wScore.textContent = winScore;
    p1ScoreElm.textContent = player1Score;
    p2ScoreElm.textContent = player2Score;
    p1Btn.removeAttribute("disabled");
    p2Btn.removeAttribute("disabled");
  }
  function randomMaxNumber(max) {
    return Math.floor(Math.random() * max + 1);
  }
})();
// console.log(randomMaxNumber(winScore));
