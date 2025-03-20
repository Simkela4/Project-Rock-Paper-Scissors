function getComputerChoice(){

    const options=["rock", "paper", "scissors"];

    const randomIndex = Math.floor(Math.random()*options.length);
    return options[randomIndex];
}


function getHumanChoice(){


    let userInput = prompt("Submit your choice");

    return userInput;
}






  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
 
  
  function playGame(){
    let humanScore = 0;
    let computerScore = 0; 


    function playRound(humanChoice, computerChoice) {
        humanChoice=humanChoice.toLowerCase();
    
        console.log(`Human Choice: ${humanChoice}`);
        console.log(`Computer Choice: ${computerChoice}`);
    
        if(humanChoice===computerChoice){console.log ("Its a tie!");}
        else if (humanChoice==="scissors"&& computerChoice==="paper"){console.log( "You won! Scissors beat paper");
            humanScore++;
        }
        else if (humanChoice==="rock"&& computerChoice==="scissors"){console.log ("You won! Rock beat scissors");
            humanScore++;
        }
        else if(humanChoice==="paper"&& computerChoice==="rock") {console.log ("You won! Paper beat rock");
            humanScore++;
        }
        else if (humanChoice==="scissors"&& computerChoice==="rock"){console.log ("You lost! Rock beat scissors");
            computerScore++;
        }
        else if (humanChoice==="rock"&& computerChoice==="paper"){console.log ("You lost! Paper beat rock");
            computerScore++;
        }
        else if (humanChoice==="paper"&& computerChoice==="scissors"){console.log ("You lost! Scissors beat rock");
            computerScore++;
        }
    
        console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore}`);
    }
    const humanSelection1 = getHumanChoice();
    const computerSelection1 = getComputerChoice();
    playRound(humanSelection1, computerSelection1);

   
    const humanSelection2 = getHumanChoice();
    const computerSelection2 = getComputerChoice();
    playRound(humanSelection2, computerSelection2);

   
    const humanSelection3 = getHumanChoice();
    const computerSelection3 = getComputerChoice();
    playRound(humanSelection3, computerSelection3);

    
    const humanSelection4 = getHumanChoice();
    const computerSelection4 = getComputerChoice();
    playRound(humanSelection4, computerSelection4);

   
    const humanSelection5 = getHumanChoice();
    const computerSelection5 = getComputerChoice();
    playRound(humanSelection5, computerSelection5);

    console.log(`Final Score: Human ${humanScore} | Computer ${computerScore}`);

  }

  playGame();