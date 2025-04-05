
let humanScore = 0;
let computerScore = 0;




    const rock = document.createElement("button");
    rock.textContent="rock";
    document.body.appendChild(rock);
    const paper = document.createElement("button");
    paper.textContent="paper"
    document.body.appendChild(paper);
    const scissors = document.createElement("button");
    scissors.textContent="scissors";
    document.body.appendChild(scissors);

    function getComputerChoice(){

        const options=["rock", "paper", "scissors"];
    
        const randomIndex = Math.floor(Math.random()*options.length);
        return options[randomIndex];
    }

function getHumanChoice(event){
        const humanChoice=event.target.textContent.toLowerCase();
        const computerChoice= getComputerChoice();
        playRound(humanChoice, computerChoice); 
        let humch=`Human Choice: ${humanChoice}`;
        let comch=`Computer Choice: ${computerChoice}`;
        let humsc= `Human Score: ${humanScore}`;
        let comsc= `Computer Score: ${computerScore}`;
        const div = document.createElement("div");
        div.textContent= humch + ' '+ comch + ' ' + humsc + ' ' + comsc;
        document.body.appendChild(div);
        checkWinner();
    }

const buttons = [rock,paper,scissors];
buttons.forEach(button =>{
    button.addEventListener("click",getHumanChoice);
});

    
    



function playRound(humanChoice, computerChoice) {
       
    
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
    
        
    }
    function checkWinner(){
       if (humanScore=== 5 ){
            announceWinner("Human");
       } else if (computerScore === 5){
            announceWinner("Computer");
       }
    }
    function announceWinner(winner){
        const resultDiv=document.createElement("div");
        resultDiv.textContent=`${winner} wins the game!`;
        document.body.appendChild(resultDiv);
    }
  

   
    

    // treba napraviti opciju kada kliknes na dugme koje je povezano sa rock, da ono odigra partiju sa
        //  humanselection = rock

