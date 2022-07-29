const btnRock = document.querySelector('.btnrock');
const btnPaper = document.querySelector('.btnpaper');
const btnScissors = document.querySelector('.btnscissors');
const choice = document.querySelector('.choice');
const gameover = document.querySelector('.gameover');
const scoreP = document.querySelector('.own');
const scoreC = document.querySelector('.opp')
const gameResult = document.querySelector('.gameresult');
const rules = document.querySelector('.rules');
const roundNo = document.querySelector('.roundNo');
const playagain = document.querySelector('.playagain');

let playerChoice = '';
let gameNumber = 1;
let playerScore = 0;
let computerScore = 0;

btnRock.addEventListener('click', () => {
    playerChoice = 'Rock';
    gameRound(getComputerChoice(), playerChoice);
    scoreP.textContent = `Your Score: ${playerScore}`;
    scoreC.textContent = `Opponent's Score: ${computerScore}`;
    rules.textContent = '';
    roundNo.textContent = `Round ${gameNumber}`;
    gameNumber++;
    if (gameNumber === 6){
        gameover.textContent = 'Game Over!';
        choice.remove();
        const playAgain = document.createElement('button');
        playagain.appendChild(playAgain);
        playAgain.classList.add('playagainbutton');
        playAgain.textContent = 'Play Again';
        playAgain.addEventListener('click', () => {
            window.location.reload();
        });
    }
});

btnPaper.addEventListener('click', () => {
    playerChoice = 'Paper';
    gameRound(getComputerChoice(), playerChoice);
    scoreP.textContent = `Your Score: ${playerScore}`;
    scoreC.textContent = `Opponent's Score: ${computerScore}`;
    rules.textContent = '';
    roundNo.textContent = `Round ${gameNumber}`;
    gameNumber++;
    if (gameNumber === 6){
        gameover.textContent = 'Game Over!';
        choice.remove();
        const playAgain = document.createElement('button');
        playagain.appendChild(playAgain);
        playAgain.classList.add('playagainbutton');
        playAgain.textContent = 'Play Again';
        playAgain.addEventListener('click', () => {
            window.location.reload();
        });
    }
});

btnScissors.addEventListener('click', () => {
    playerChoice = 'Scissors';
    gameRound(getComputerChoice(), playerChoice);
    scoreP.textContent = `Your Score: ${playerScore}`;
    scoreC.textContent = `Opponent's Score: ${computerScore}`;
    rules.textContent = '';
    roundNo.textContent = `Round ${gameNumber}`;
    gameNumber++;
    if (gameNumber === 6){
        gameover.textContent = 'Game Over!';
        choice.remove();
        const playAgain = document.createElement('button');
        playagain.appendChild(playAgain);
        playAgain.classList.add('playagainbutton');
        playAgain.textContent = 'Play Again';
        playAgain.addEventListener('click', () => {
            window.location.reload();
        });
    }
});



function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let randchoice = choices[Math.floor(Math.random()*3)];
    return randchoice;
}

function gameRound(a,b) {
    if(a===b){
        gameResult.textContent = `Tie! You both chose ${a}!`;
    }
    else if((a==='Rock' && b==='Scissors') || (a==='Paper' && b==='Rock') || (a==='Scissors' && b==='Paper')){
        gameResult.textContent = `You lost! Opponent's choice: ${a}, you chose: ${b}.`;
        computerScore++;
    }
    else{
        gameResult.textContent = `You won! Opponent's choice: ${a}, You chose: ${b}.`;
        playerScore++;
    }
    
}

// function game(){
//     let pscore = 0;
//     let cscore = 0;
//     let r = 0;
//     while(r<5){
//         let s=gameRound(getComputerChoice(), getPlayerChoice());
//         if(s==0){         
//             r++;
//         }
//         else if(s==1){
//             cscore++;           
//             r++;
//         }
//         else if(s==2){
//             pscore++;
//             r++;
//         }
//         if(r<4){
//             alert(`Your Score: ${pscore}\nOpponent's Score: ${cscore}`);
//         }
//     }

//     if(pscore>cscore){
//         alert(`You won the match!\nYour Score: ${pscore}\nOpponent's Score: ${cscore}`);
//     }
//     else if(cscore>pscore){
//         alert(`You lost the match :/\nYour Score: ${pscore}\nOpponent's Score: ${cscore}`);
//     }
//     else{
//         alert(`Match ended in a draw!\nYour Score: ${pscore}\nOpponent's Score: ${cscore}`);
//     }
// }

// game();