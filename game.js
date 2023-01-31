
function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"];
    let randomRPS = choice[Math.floor(Math.random() * choice.length)];
    return randomRPS;
  }
  
  let computerScore= 0;
    let userScore= 0;
 
 function singleRound(playerSelection,randomRPS){

   
    if(playerSelection== "Rock" && randomRPS== "Scissors"){
        console.log("You win, rock beats scissors." )
        userScore++
        console.log("Score is:" , userScore, "-" ,computerScore)
    }else if(playerSelection=="Rock" && randomRPS== "Paper"){
        console.log("You loose, paper beats rock.")
        computerScore++
        console.log("Score is:" , userScore, "-" ,computerScore)
    }else if(playerSelection=="Scissors" && randomRPS== "Paper"){
        console.log("You win, scissors beat paper.")
        userScore++
        console.log("Score is:" , userScore, "-" ,computerScore)    
    }else if(playerSelection=="Scissors" && randomRPS== "Rock"){
        console.log("You loose, rock beats scissors.", )
        computerScore++
        console.log("Score is:" , userScore, "-" ,computerScore)    
    }else if(playerSelection=="Paper" && randomRPS== "Scissors"){
        console.log("You loose,  scissors beat paper.", )
        computerScore++
        console.log("Score is:" , userScore, "-" ,computerScore)   
    }else if(playerSelection=="Paper" && randomRPS== "Rock"){
        console.log("You win, paper beats rock.")
        userScore++
        console.log("Score is:" , userScore, "-" ,computerScore) 
    }else if(playerSelection==randomRPS){
        console.log("Draw")
        console.log("Score is:" , userScore, "-" ,computerScore)
    }
 }

 function game(){
do {
        let playerSelection = prompt(
          "Enter Rock, Paper or Scissors(case-sensitive"
        );
        let randomRPS = getComputerChoice();
        console.log(singleRound(playerSelection, randomRPS));
<<<<<<< HEAD
        
 } while (userScore<5 && computerScore<5);

if(computerScore==5){
    console.log("You lost the game, good luck next time.")
}else console.log("Congrats, you defeated the computer.")
} 


game();
=======
 }
}
game();
>>>>>>> 9f7c8cc7a4329f1be9903bfb9cfab56d3faa5097
