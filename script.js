document.addEventListener('DOMContentLoaded', () => {
  let secretNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;
  let lowestGuess = 1;
  let highestGuess = 100;
  const maxAttempts = 5; // Adjust the max number of allowed guesses

  // DOM elements
  const gameTitle = document.querySelector('h1'); // Assuming your title is within an <h1> tag
  const guessInput = document.getElementById('guess-input');
  const hint = document.getElementById('hint');
  const attemptCount = document.getElementById('attempt-count');
  const checkButton = document.getElementById('check-button');
  let playAgainButton; // This will hold the play again button if it's been added

  // Update game title based on guesses
  const updateGameTitle = () => {
    gameTitle.textContent = `Guess The Number (${lowestGuess} - ${highestGuess})`;
  };

  // Initially set game title
  updateGameTitle();

  const handleGuess = () => {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < lowestGuess || userGuess > highestGuess) {
      hint.textContent = `Enter a number between ${lowestGuess} and ${highestGuess}.`;
      return;
    }

    attempts++;
    attemptCount.textContent = `Attempts: ${attempts}`;

    if (userGuess === secretNumber) {
      hint.textContent = "Congratulations! You've guessed the right number!";
      endGame();
    } else {
      if (userGuess < secretNumber) {
        hint.textContent = `Guess higher!`;
        lowestGuess = userGuess + 1;
      } else {
        hint.textContent = `Guess lower!`;
        highestGuess = userGuess - 1;
      }
      updateGameTitle();
    }

    if (attempts >= maxAttempts) {
      hint.textContent = `Sorry, you've reached the maximum number of attempts. The number was ${secretNumber}.`;
      endGame();
    }

    guessInput.value = ''; // Clear the input for the next guess
  };

  const endGame = () => {
    guessInput.disabled = true;
    checkButton.disabled = true;
    if (!playAgainButton) showPlayAgainButton(); // Only show if it doesn't already exist
  };

  const resetGame = () => {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    lowestGuess = 1;
    highestGuess = 100;
    updateGameTitle();

    guessInput.disabled = false;
    checkButton.disabled = false;
    hint.textContent = 'Guess a number!';
    attemptCount.textContent = `Attempts: ${attempts}`;
    guessInput.value = '';

    if (playAgainButton) {
      playAgainButton.remove();
      playAgainButton = null; // Ensure it's reset so it can be added again next time
    }
  };

  const showPlayAgainButton = () => {
    playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'Play Again';
    playAgainButton.id = 'play-again-button';
    document.querySelector('.game-container').appendChild(playAgainButton); // Ensure the button is added within the container
    playAgainButton.addEventListener('click', resetGame);
  };

  checkButton.addEventListener('click', handleGuess);
});
