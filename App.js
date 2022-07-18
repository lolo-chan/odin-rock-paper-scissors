function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randchoice = choices[Math.floor(Math.random()*3)];
    return randchoice;
}

function getPlayerChoice() {
    const playerchoice = prompt("Rock, Paper, or Scissors?");
    return playerchoice;
}


