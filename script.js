let humanScore = 0;
let computerScore = 0;

console.log("Welcome to Rock-Paper-Scissors!");

playGame();

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice (){
    
    let input = prompt("Veuillez entrer votre choix");

    if (input === null)
    {
        console.log("Please type a correct answer : Rock, Paper or Scissors")
    }
    else if (input.toLowerCase()==="rock")
    {
        choice = "rock";
        console.log("You choose Rock");
        
    }
    else if (input.toLowerCase()==="paper")
    {
        console.log("You choose Paper");
        choice = "paper";
    }
    else if (input.toLowerCase()==="scissors")
    {
        console.log("You choose Scissors");
        choice = "scissors";
    }
    else{
        prompt("Please type a correct answer : Rock, Paper or Scissors");
    }

    return choice;
}

function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === computerChoice){
        console.log("Computer choose :" +computerChoice +" too !")
        console.log("Drawn game, try again !");
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("Computer choose : " +computerChoice)
        humanScore ++;
        console.log("Paper beats Rock : You win the round !");
    }
    else if (humanChoice === "scissors" && computerChoice === "rock")
    {
        console.log("Computer choose : " +computerChoice)
        computerScore ++;
        console.log("Rock beats Scissors : Computer wins the round");
    }   
    else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("Computer choose : " +computerChoice)
        computerScore ++;
        console.log("Paper beats Rock : Computer wins the round");
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("Computer choose : " +computerChoice)
        humanScore ++;
        console.log("Scissors beats Paper : You win the round !");
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("Computer choose : " +computerChoice)
        humanScore ++;
        console.log("Rock beats Scissors : You win the round !");
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("Computer choose : " +computerChoice)
        computerScore ++;
        console.log("Scissors beats Paper : Computer wins the round");
    }
    
    console.log(" Scores : Player: " +humanScore + " Computer :" +computerScore);
}

function playGame(){

    for (let i = 0; i<= 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if(humanScore < computerScore){
        console.log("Game over ! You loose the game :( ")
    }
    else {
        console.log("You win the game !")
    }
}