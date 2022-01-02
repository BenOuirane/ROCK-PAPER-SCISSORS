

 let test ;
 const computer = ["Rock", "Paper", "Scissors"];
function computerPlay() {
    return computer[~~(Math.random() * computer.length)];
    // ~~ :  It cuts all fractional digits.
  //  return  Math.random() * computer.length;
    //  return p1 || p2 || p3;
  }

  test = computerPlay() ;
  console.log(test)


  function playRound(playerSelection, computerSelection) {

    if (playerSelection == computer[0] &  computerSelection == computer[1] ) {
        return  "You Lose! Paper beats Rock" ;
    }
       
     // else if (time < 20) {
     //   greeting = "Good day";
     // } 
 //     else {
  //      return  "test" ;
  //  }

}
const playerSelection = "Rock";
let  computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));