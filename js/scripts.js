//business logic to create user object
function AddUser(totalScore, turnScore) {
  this.totalScore = totalScore;
  this.turnScore = turnScore;
  // this.rollValue = rollValue;
}

AddUser.prototype.diceRoll = function() {
  let rollValue = Math.floor(Math.random() * 6) + 1;
  return rollValue;
  if (rollValue === 1) {
    player1.turnScore = 0;
  } else {
    player1.turnScore = turnScore + rollValue;
  }
  console.log(rollValue);
}

//prototype.decideAction(currentDiceValue) {

//}

let player1 = new AddUser();
let player2 = new AddUser();
// let currentDiceValue = player1.diceRoll();
// console.log(player1.diceRoll());

//user interface logic