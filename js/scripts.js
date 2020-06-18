//business logic to create user object
function AddUser(totalScore, turnScore, rollValueArray) {
  this.totalScore = totalScore;
  this.turnScore = turnScore;
  this.rollValueArray = []; //not being by user logic at this time
}

AddUser.prototype.diceRoll = function() {
  let rollValue = Math.floor(Math.random() * 6) + 1;
  if (rollValue === 1) {
    this.turnScore = 0;
  } else {
    this.turnScore += rollValue;
  }
  this.rollValueArray.push(rollValue);
  console.log(this.rollValueArray);
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
    let rollResult1 = player1.diceRoll();
    $("#player1-roll-message").show();
    $("#player1dice").text(rollResult1);
    $("#player1TotalDice").text(player1.turnScore);
    if(rollResult1 === 1){
      $(".player1buttons").hide();
      $(".not-player1s-turn").show();
      $(".not-player2s-turn").hide();
      $(".player2buttons").show();
    } 
  });

  $("#player1hold").click(function() {
    let totalScore1 = player1.calculateTotalScore();
    $("#player1total").text(totalScore1);
    $(".player1buttons").hide();
    $(".not-player1s-turn").show()
    $(".not-player2s-turn").hide();
    $(".player2buttons").show();
  });


  $("#player2roll").click(function() {
    let rollResult2 = player2.diceRoll();
    $("#player2dice").text(rollResult2);
    if(rollResult2 === 1){
      $(".player2buttons").hide();
      $(".not-player2s-turn").show()
      $(".not-player1s-turn").hide();
      $(".player1buttons").show();
    }
  });

  $("#player2hold").click(function() {
    let totalScore2 = player2.calculateTotalScore();
    $("#player2total").text(totalScore2);
    $(".player2buttons").hide();
    $(".not-player2s-turn").show()
    $(".not-player1s-turn").hide();
    $(".player1buttons").show();
  });
});