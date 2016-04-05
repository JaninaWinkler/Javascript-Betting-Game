
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function promptForValue() {
  return prompt("Please enter a value between 5 and 10 that you want to bet: ");
}

function promptForNumber() {
  return prompt("Please enter a number between 1 and 10 that you want to bet on: ");
} 

var buttonClick = document.getElementById("btn"),
userValue =  button.form.userValue.value;
userNumber = button.form.userNumber.value;
button.onclick = function() {
    foo(value);
}

function playGame(bankroll) {
  var randomNumber = getRandomNumber(0, 10);
  var userValue = promptForValue();
  while (userValue < 5 || userValue > 10) {
    UserValue = promptForValue();
  }
  var userNumber = promptForNumber();
  while (userNumber < 1 || userNumber > 10) {
    userNumber = promptForNumber();
  }
  if (userNumber == randomNumber) {
    bankroll = bankroll + userValue;
    alert("Good job! You've gained $" + value + " and your bankroll is now $" + bankroll);
  }
  else if (userNumber == (randomNumber + 1) || userNumber == (randomNumber -1)) {
    alert("Almost! Because you were SO close, your bankroll stays at $" + bankroll);
  }
  else {
    bankroll = bankroll - userValue;
    alert("Nope! You've lost $" + userValue + " and your bankroll is now $" + bankroll);
    bankroll = bankroll 
  }
  return bankroll;
}

function bettingGame() {

  var bankroll = 100;
  playing = true;

  while (playing) {  
    if (bankroll <= 0) {
      playing = false;
      alert("Game Over. Sorry!");
      break;
    } else {
      bankroll = playGame(bankroll);
    }
  }
}

bettingGame();