const app = document.getElementById('app');

// Generate a random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 5; // Set a limit on the number of attempts

function startGame() {
  app.innerHTML = `<h1>Guess the Number</h1>
                   <p>You have ${attempts} attempts to guess the number between 1 and 100.</p>
                   <input type="number" id="guess" min="1" max="10" />
                   <button id="submit">Submit</button>`;
  
  const submitBtn = document.getElementById('submit');
  submitBtn.addEventListener('click', checkGuess);
}

function checkGuess() {
  const guess = parseInt(document.getElementById('guess').value);
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }
  
  attempts--;
  if (guess === secretNumber) {
    app.innerHTML = `<h1>Correct! You guessed the number!</h1>
                     <button onclick="restartGame()">Play Again</button>`;
  } else if (attempts > 0) {
    app.innerHTML = `<h1>Wrong! You have ${attempts} attempts left.</h1>
                     <button onclick="startGame()">Try Again</button>`;
  } else {
    app.innerHTML = `<h1>Game Over! The correct number was ${secretNumber}.</h1>
                     <button onclick="restartGame()">Play Again</button>`;
  }
}

function restartGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 3;
  startGame();
}

// Start the game
startGame();
