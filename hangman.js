const words = ["computer", "elephant", "astronomy", "bicycle", "umbrella",
    "notebook", "giraffe", "keyboard", "sunglasses", "backpack",
    "penguin", "airplane", "mountain", "chocolate", "fireworks"];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let displayedWord = Array(selectedWord.length).fill("_");
let guessedLetters = [];
let remainingAttempts = 6;

// renders the entire game
function render() {
  document.getElementById("word").textContent = displayedWord.join(" ");
  document.getElementById(
    "guessed-letters"
  ).textContent = `Guessed Letters: ${guessedLetters.join(", ")}`;
  document.getElementById(
    "remaining-attempts"
  ).textContent = `Remaining Attempts: ${remainingAttempts}`;
}

// allows you to guess the letters
function guessLetter() {
  const letterInput = document.getElementById("letter");
  const letter = letterInput.value.toLowerCase();
  letterInput.value = "";

  if (letter === "" || guessedLetters.includes(letter)) {
    return;
  }

  guessedLetters.push(letter);

  if (selectedWord.includes(letter)) {
    for (let i = 0; i < selectedWord.length; i++) {
      if (selectedWord[i] === letter) {
        displayedWord[i] = letter;
      }
    }
  } else {
    remainingAttempts--;
  }

  if (!displayedWord.includes("_")) {
    document.getElementById("message").textContent = "You Win!";
    document.getElementById("letter").disabled = true;
  } else if (remainingAttempts === 0) {
    document.getElementById(
      "message"
    ).textContent = `You Lose! The word was: ${selectedWord}`;
    document.getElementById("letter").disabled = true;
  }

  render();
}

render();
