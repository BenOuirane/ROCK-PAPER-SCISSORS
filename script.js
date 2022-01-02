

 let test ;
 const computer = ["ROCK", "PAPER", "SCISSORS"];
function computerPlay() {
    return computer[~~(Math.random() * computer.length)];
    // ~~ :  It cuts all fractional digits.
  //  return  Math.random() * computer.length;
    //  return p1 || p2 || p3;
  }

  //test = computerPlay() ;
  //console.log(test)


  function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toUpperCase() ;

    if (playerSelection  == computer[0] & computerSelection == computer[1] ) {
        return  "You Lose! Paper beats Rock" ;
    }
       
     // else if (time < 20) {
     //   greeting = "Good day";
     // } 
 //     else {
  //      return  "test" ;
  //  }

}
let playerSelection = "Rock";
//console.log(playerSelection.toUpperCase())
let  computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));



function game(){

 let a =   playRound(playerSelection, computerSelection);
 let b =    playRound(playerSelection, computerSelection);
 let c =   playRound(playerSelection, computerSelection);
 let d =   playRound(playerSelection, computerSelection);
 let e =   playRound(playerSelection, computerSelection);
 return a  + " " + b + " " + c + " " + d + " " + e ;
}
let gamy = game();
console.log(gamy)