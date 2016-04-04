// PLAYER
// - Single player
// - Starts with $100 bankroll
// - Bets money to guess a random number
// - All money lost = game over

// GAME 
// - Asks player to place bet between $5 and $10 to guess a number between 1 and 10
// -- Money value: 5-10
// -- Number guess: 1-10
// - If win, bankroll increases by number bet
// - Else if lose, bankroll decreases by number bet 
// - If off-by-one, no money lost 

// USE
// - prompt
// - alert

function bettingGame() {

  var bankroll = 100;
  playing = true;
  
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var randomNumber = getRandomNumber(0, 10);
  var value = prompt("Please enter a value between 5 and 10 that you want to bet: ");
  var userNumber = prompt("Please enter a number between 1 and 10 that you want to bet on: ");
  
  if (userNumber == randomNumber) {
    var bankroll = bankroll + value;
    alert("Good job! You've gained $" + value + " and your bankroll is now $" + bankroll);
  }
  else if (userNumber == (randomNumber + 1) || userNumber == (randomNumber -1)) {
    alert("Almost! Because you were SO close, your bankroll stays at $" + bankroll);
  }
  else if (userNumber != randomNumber) {
    var bankroll = bankroll - value;
    alert("Nope! You've lost $" + value + " and your bankroll is now $" + bankroll);
  }
    if (bankroll <= 0) {
      playing = false;
    }
}

bettingGame();