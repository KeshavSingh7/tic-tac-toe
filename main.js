const cells = document.querySelectorAll(".cell");
const pa = document.getElementById("playarea");
xIndex = "";
oIndex = "";
const res = document.querySelector(".result");
const resText = document.querySelector(".result-text");
const reset = document.getElementById("restart");

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
  console.log(targetCell);
  const XorO = turn ? "x" : "o";
  placeMark(targetCell, XorO);
  checkResult(XorO, targetCell);
}

function placeMark(a, b) {
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
    xIndex = sortString(xIndex);
    for (i of winningCombination) {
      if (xIndex.includes(i)) {
        res.classList.add("show");
        resText.innerText = "X, Wins !";
      }
    }
  }
  if (c === "o") {
    oIndex += d.dataset.index;
    oIndex = sortString(oIndex);
    for (i of winningCombination) {
      if (oIndex.includes(i)) {
        res.classList.add("show");
        resText.innerText = "O, Wins !";
      }
    }
  }
}

function sortString(str) {
  return str.split("").sort().join("");
}

function resetGame() {
  location.reload();
}
