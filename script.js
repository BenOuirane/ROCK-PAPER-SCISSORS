

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
