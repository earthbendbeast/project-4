const board = document.getElementById("board");
const winnerDisplay = document.getElementById("winner");
let cells = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

// makes it so that it displays the right winner, loser or draw.
function handleCellClick(index) {
  if (cells[index] !== "" || !gameActive) return;

  cells[index] = currentPlayer;
  renderBoard();

  if (checkWinner()) {
    winnerDisplay.textContent = `Player ${currentPlayer} Wins!`;
    gameActive = false;
  } else if (!cells.includes("")) {
    winnerDisplay.textContent = "It's a Draw!";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

// returns cells in the right spots and sets up the winning combinations of x'es and o'es
function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return winningCombinations.some((combination) => {
    const [a, b, c] = combination;
    return cells[a] && cells[a] === cells[b] && cells[a] === cells[c];
  });
}

// this function renders the board
function renderBoard() {
  board.innerHTML = "";
  cells.forEach((cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("cell");
    cellElement.textContent = cell;
    cellElement.addEventListener("click", () => handleCellClick(index));
    board.appendChild(cellElement);
  });
}

renderBoard();
