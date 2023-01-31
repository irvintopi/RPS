
function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"];
    let randomRPS = choice[Math.floor(Math.random() * choice.length)];
    return randomRPS;
  }
  
  
 function singleRound(playerSelection,randomRPS){
    if(playerSelection== "Rock" && randomRPS== "Scissors"){
        console.log("You win, rock beats scissors.")
    }else if(playerSelection=="Rock" && randomRPS== "Paper"){
        console.log("You loose, paper beats rock.")
    }else if(playerSelection=="Scissors" && randomRPS== "Paper"){
        console.log("You win, scissors beat paper.")
    }else if(playerSelection=="Scissors" && randomRPS== "Rock"){
        console.log("You loose, rock beats scissors.")
    }else if(playerSelection=="Paper" && randomRPS== "Scissors"){
        console.log("You loose,  scissors beat paper.")
    }else if(playerSelection=="Paper" && randomRPS== "Rock"){
        console.log("You win, paper beats rock.")
    }else if(playerSelection==randomRPS){
        console.log("Draw")
    }
 }

 function game(){
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt(
          "Enter Rock, Paper or Scissors"
        );
        let randomRPS = getComputerChoice();
        console.log(singleRound(playerSelection, randomRPS));
 }
}
game();
