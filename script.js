function getComputerChoice(){

    const options=["rock", "paper", "scissors"];

    const randomIndex = Math.floor(Math.random()*options.length);
    return options[randomIndex];
}

console.log(getComputerChoice())

function getHumanChoice(){


    let userInput = prompt("Submit your choice");

    return userInput;
}

console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0; 