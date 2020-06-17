//business logic to create user object
function AddUser(totalScore, turnScore, rollValue) {
  this.totalScore = totalScore;
  this.turnScore = turnScore;
  this.rollValue = rollValue;
}

AddUser.prototype.diceRoll = function() {
  let rollValue = Math.floor(Math.random() * 6) + 1;
  if (rollValue === 1) {
    this.turnScore = 0;
  } else {
    this.turnScore += rollValue;
  }
  return rollValue;
}

AddUser.prototype.calculateTotalScore = function() {
  this.totalScore += this.turnScore;
  this.turnScore = 0;
  if (this.totalScore >= 100) {
    this.totalScore = 0;
    alert("Game Over, Someone Wins!");
  }
  return this.totalScore;
}

let player1 = new AddUser(0, 0, 0);
let player2 = new AddUser(0, 0, 0);


//user interface logic

$(document).ready(function() {

  $("#player1roll").click(function() {
    let rollResult = player1.diceRoll()
    $("#player1dice").text(rollResult);
  });

  $("#player1hold").click(function() {
    let totalScore = player1.calculateTotalScore();
    $("#player1total").text(totalScore);
  });


  $("#player2roll").click(function() {
    let rollResult2 = player2.diceRoll()
    $("#player2dice").text(rollResult2);
  });

  $("#player2hold").click(function() {
    let totalScore2 = player2.calculateTotalScore();
    $("#player2total").text(totalScore2);
  });
});