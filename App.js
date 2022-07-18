function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let randchoice = choices[Math.floor(Math.random()*3)];
    return randchoice;
}

function getPlayerChoice() {
    
    let n = 0;
    while(n==0){
        let selection = prompt("Rock, Paper, or Scissors?");
        playerchoice = selection.toLowerCase();
        if(playerchoice==='rock' || playerchoice==='paper' || playerchoice==='scissors'){
            return playerchoice.toLowerCase();
            n=1;
        }
        else{
            alert('Please choose a valid option');
        }
    }
}

function gameRound(a,b) {
    if(a===b){
        alert(`Tie!\nComputers choice: ${a}\nYou chose: ${b}`);
    }
    else if((a==='rock' && b==='scissors') || (a==='paper' && b==='rock') || (a==='scissors' && b==='paper')){
        alert(`You lost!\nComputers choice: ${a}\nYou chose: ${b}`);
    }
    else{
        alert(`You won!\nComputers choice: ${a}\nYou chose: ${b}`);
    }
}

gameRound(getComputerChoice(), getPlayerChoice());

