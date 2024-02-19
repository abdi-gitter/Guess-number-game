let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let lowestGuess = 1;
let highestGuess = 100;
const maxAttempts = 5; // You can adjust the max number of allowed guesses here

// Grabbing the necessary DOM elements
const guessInput = document.getElementById('guess-input');
const hint = document.getElementById('hint');
const attemptCount = document.getElementById('attempt-count');
const checkButton = document.getElementById('check-button');

// Function to handle the guess
const handleGuess = () => {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < lowestGuess || userGuess > highestGuess) {
        hint.textContent = `Enter a number between ${lowestGuess} and ${highestGuess}.`;
        return;
    }

    attempts++;
    attemptCount.textContent = ` ${attempts}`;

    if (userGuess === secretNumber) {
        hint.textContent = "Congratulations! You've guessed the right number!";
        guessInput.disabled = true;
        checkButton.disabled = true;
        showPlayAgainButton();
    } else if (userGuess < secretNumber) {
        hint.textContent = `Enter a number higher than ${userGuess}.`;
        lowestGuess = userGuess + 1;
    } else {
        hint.textContent = `Enter a number lower than ${userGuess}.`;
        highestGuess = userGuess - 1;
    }

    // Check if the maximum number of attempts has been reached
    if (attempts >= maxAttempts) {
        hint.textContent = `Sorry, you've reached the maximum number of attempts. The number was ${secretNumber}.`;
        guessInput.disabled = true;
        checkButton.disabled = true;
        showPlayAgainButton();
    }

    // Clear the input for the next guess
    guessInput.value = '';
};

// Function to reset the game
const resetGame = () => {
    // Generate a new secret number
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    lowestGuess = 1;
    highestGuess = 100;

    // Reset the DOM elements
    guessInput.disabled = false;
    checkButton.disabled = false;
    hint.textContent = 'Write the number.';
    attemptCount.textContent = `: ${attempts}`;
    guessInput.value = '';

    // Remove the Play Again button
    const playAgainButton = document.getElementById('play-again-button');
    if (playAgainButton) {
        playAgainButton.remove();
    }
};

// Function to show the Play Again button
const showPlayAgainButton = () => {
    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'Play Again';
    playAgainButton.id = 'play-again-button';
    playAgainButton.addEventListener('click', resetGame);
    document.body.appendChild(playAgainButton);
};

// Adding event listener to the check button
checkButton.addEventListener('click', handleGuess);










/* let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let lowestGuess = 1;
let highestGuess = 100;

document.getElementById('check-button').onclick = function() {
    const guessInput = document.getElementById('guess-input');
    const userGuess = parseInt(guessInput.value);
    const hint = document.getElementById('hint');
    const attemptCount = document.getElementById('attempt-count');

    if (userGuess < lowestGuess || userGuess > highestGuess || isNaN(userGuess)) {
        hint.textContent = `Enter a number between ${lowestGuess} and ${highestGuess}.`;
        return;
    }

    attempts++;
    attemptCount.textContent = attempts;

    if (userGuess === secretNumber) {
        hint.textContent = "Congratulations! You've guessed the right number!";
        guessInput.disabled = true;
        document.getElementById('check-button').disabled = true;
    } else if (userGuess < secretNumber) {
        hint.textContent = `Enter a number between ${userGuess} and ${highestGuess}.`;
        lowestGuess = userGuess + 1;
    } else {
        hint.textContent = `Enter a number between ${lowestGuess} and ${userGuess}.`;
        highestGuess = userGuess - 1;
    }
}; */



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
