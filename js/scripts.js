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
}

let player1 = new AddUser(0, 0, 0);
let player2 = new AddUser(0, 0, 0);

//user interface logic

$(document).ready(function() {
  $("#player1roll").click(function() {

  });

  $("#player1hold").click(function() {

  });


  $("#player2roll").click(function() {

  });

  $("#player2hold").click(function() {

  });
});