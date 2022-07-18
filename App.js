function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let randchoice = choices[Math.floor(Math.random()*3)];
    return randchoice;
}

function getPlayerChoice() {
    let selection = prompt("Rock, Paper, or Scissors?");
    playerchoice = selection.toLowerCase();
    if(playerchoice==='rock' || playerchoice==='paper' || playerchoice==='scissors'){
        return playerchoice.toLowerCase();
    }
}

function gameRound(a,b) {
    if(a===b){
        alert('Tie!');
    }
    else if((a==='rock' && b==='scissors') || (a==='paper' && b==='rock') || (a==='scissors' && b==='paper')){
        alert('You lost!');
    }
    else{
        alert('You won!');
    }
}



