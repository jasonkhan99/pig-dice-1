//business logic to create user object
function AddUser(totalScore, turnScore, rollValue) {
  this.totalScore = totalScore;
  this.turnScore = turnScore;
  this.rollValue = rollValue;
}

AddUser.prototype.diceRoll = function() {
  let rollValue = Math.floor(Math.random() * 6) + 1;
  console.log(rollValue);
}

let player1 = new AddUser();
let player2 = new AddUser();

//user interface logic