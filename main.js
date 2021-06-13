const cells = document.querySelectorAll(".cell");
const pa = document.getElementById("playarea");
xIndex = "";
oIndex = "";
const res = document.querySelector(".result");
const resText = document.querySelector(".result-text");
const reset = document.getElementById("restart");
let count = 0;
let turn = 0;
let flag = true;

const winningCombination = [
  "123",
  "456",
  "789",
  "147",
  "258",
  "369",
  "159",
  "357",
];

let turn = true;

cells.forEach((cell) => {
  cell.addEventListener("click", select, { once: true });
});

reset.addEventListener("click", resetGame);

function select(e) {
  const targetCell = e.target;
  const XorO = turn ? "x" : "o";
  placeMark(targetCell, XorO);
  checkResult(XorO, targetCell);
}

function placeMark(a, b) {
  turn++;
  a.classList.add(b);
  if (b === "x") {
    a.innerText = "X";
    turn = false;
    pa.classList.remove("x");
    pa.classList.add("o");
  } else {
    a.innerText = "O";
    turn = true;
    pa.classList.remove("o");
    pa.classList.add("x");
  }
}

function checkResult(c, d) {
  if (c === "x") {
    xIndex += d.dataset.index;
    for (i of winningCombination) {
      for (j of i) {
        if (xIndex.includes(j)) {
          count++;
        }
      }
      if (count == 3) {
        res.classList.add("show");
        resText.innerText = "X, Wins !";
        flag = false;
      }
      count = 0;
    }

    if(flag && turn == 9) {
      res.classList.add("show");
      resText.innerText = "Draw !";
    }
  }
  if (c === "o") {
    oIndex += d.dataset.index;
    for (i of winningCombination) {
      for (j of i) {
        if (oIndex.includes(j)) {
          count++;
        }
      }
      if (count == 3) {
        res.classList.add("show");
        resText.innerText = "O, Wins !";
      }
      count = 0;
    }
  }
}

function resetGame() {
  location.reload();
}
