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
    let c = 0;
    if(a===b){
        alert(`Tie!\nComputers choice: ${a}\nYou chose: ${b}`);
    }
    else if((a==='rock' && b==='scissors') || (a==='paper' && b==='rock') || (a==='scissors' && b==='paper')){
        alert(`You lost!\nComputers choice: ${a}\nYou chose: ${b}`);
        c+=1;
    }
    else{
        alert(`You won!\nComputers choice: ${a}\nYou chose: ${b}`);
        c+=2;
    }
    return c;
}

function game(){
    let pscore = 0;
    let cscore = 0;
    let r = 0;
    while(r<5){
        let s=gameRound(getComputerChoice(), getPlayerChoice());
        if(s==0){         
            r++;
        }
        else if(s==1){
            cscore++;           
            r++;
        }
        else if(s==2){
            pscore++;
            r++;
        }
        if(r<4){
            alert(`Your Score: ${pscore}\nOpponent's Score: ${cscore}`);
        }
    }

    if(pscore>cscore){
        alert(`You won the match!\nYour Score: ${pscore}\nOpponent's Score: ${cscore}`);
    }
    else if(cscore>pscore){
        alert(`You lost the match :/\nYour Score: ${pscore}\nOpponent's Score: ${cscore}`);
    }
    else{
        alert(`Match ended in a draw!\nYour Score: ${pscore}\nOpponent's Score: ${cscore}`);
    }
}

game();