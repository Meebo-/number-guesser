/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;
      
// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  
  // Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  if(guess === winningNum){
    gameOver(true, `${winningNum} is correct, YOU WIN!`);
  } else {
    guessesLeft -= 1;

    if(guessesLeft === 0){
      //game  over  lost
      
    gameOver(false,`Game over, you lost. The corerct number was ${winningNum}`);

    }  else{
      guessInput.style.borderColor = 'red';
      //tell use is wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
      guessInput.value = '';
    }
  }
});

function gameOver(won, msg){
  let color;
  won === true  ? color ='green' : color = 'red';
  // Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  message.style.color = color;
  // Set message
  setMessage(msg);
}
// Set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}

