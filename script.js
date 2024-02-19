document.addEventListener('DOMContentLoaded', () => {
  let secretNumber = Math.floor(Math.random() * 10) + 1;
  let attempts = 0;
  let lowestGuess = 1;
  let highestGuess = 10;
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
    secretNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    lowestGuess = 1;
    highestGuess = 10;
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


 /* const guessingGame = () => {
  let life = 5;
  const winnigNumber = Math.floor(Math.random() * 100 + 1)
  console.log(winnigNumber)
  let guessedNumber;
  do{
    guessedNumber = Number(prompt("Enter a number between 1 to 100;"))
    if(guessedNumber === winnigNumber){
      console.log("Congrats you have found our number!")
      break
    } else {
      console.log("You have " + (life - 1) + " number of lives")
      if(guessedNumber > winnigNumber){
        console.log("Guess lower")
      } else {
        console.log("Guess higher")
      }
    }
    life = life - 1
    console.log(guessedNumber)
  } while(life > 0)
  if(life === 0) {
    console.log ("Sorry but you lost! Our number was: " + winnigNumber)
  }
}  */
