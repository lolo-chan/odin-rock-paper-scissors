function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let randchoice = choices[Math.floor(Math.random()*3)];
    return randchoice;
}

function getPlayerChoice() {
    let playerchoice = prompt("Rock, Paper, or Scissors?");
    return playerchoice.toLowerCase();
}

function gameRound(b) {
    console.log(b);
}

gameRound(getPlayerChoice());

