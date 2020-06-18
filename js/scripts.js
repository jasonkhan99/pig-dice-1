//business interface logic
function AddUser(totalScore, turnScore, rollValueArray) {
  this.totalScore = totalScore;
  this.turnScore = turnScore;
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
  return this.totalScore;
}

AddUser.prototype.checkForWinner = function() {
  if (this.turnScore + this.totalScore >= 100) {
    return true;
  } else {
    return false;
  }
}

//user interface logic
$(document).ready(function() {
  let player1 = new AddUser(0, 0, 0);
  let player2 = new AddUser(0, 0, 0);

  $("#player1roll").click(function() {
    let rollResult1 = player1.diceRoll();
    $("#player1InitiallyHidden").show();
    $("#player1dice").text(rollResult1);
    $("#player1TotalDice").text(player1.turnScore);
    if(rollResult1 === 1){
      $(".player1buttons").hide();
      $(".not-player1s-turn").show();
      $(".not-player2s-turn").hide();
      $(".player2buttons").show();
    }
    let haveWon = player1.checkForWinner();
    if(haveWon) {
      $(".col-xs-6").hide();
      $(".col-xs-12").show();
      $("#winner").text("Player 1");
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
    $("#player2InitiallyHidden").show();
    $("#player2dice").text(rollResult2);
    $("#player2TotalDice").text(player2.turnScore);
    if(rollResult2 === 1){
      $(".player2buttons").hide();
      $(".not-player2s-turn").show()
      $(".not-player1s-turn").hide();
      $(".player1buttons").show();
    }
    let haveWon = player2.checkForWinner();
    if(haveWon) {
      $(".col-xs-6").hide();
      $(".col-xs-12").show();
      $("#winner").text("Player 2");
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

  $(".btn-danger").click(function() {
    location.reload();
  });
});