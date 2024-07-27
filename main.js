'use strict'

const overlay = document.getElementById('overlay');
const overlay1 = document.getElementById('overlay1');

const welcome = document.getElementById('welcome');
const startGame = document.getElementById('start-game');
const seeRules = document.getElementById('see-rules');


const rulesSection = document.getElementById('rules-section');
const x = document.getElementById('close');
const back = document.getElementById('backbtn');


const exit = document.getElementById('exit');
const giveUp = document.getElementById('give-up');
const nickname = document.getElementById('nicknameInput');
const enterGame = document.getElementById('enterGameBtn');

const remRounds = document.getElementById('rem-rounds');
const plScore = document.getElementById('player-score');
const cmpScore = document.getElementById('comp-score');


const game = document.getElementById('game');


const rockpic = document.getElementById('rock');
const paperpic = document.getElementById('paper');
const scissor = document.getElementById('scissor');

const numberRounds = document.getElementById('numberRounds');
const myScore = document.getElementById('myScore');
const ComputerScore = document.getElementById('ComputerScore');

const host = document.getElementById('host');
const you = document.getElementById('you');

const conti = document.getElementById('continue');

const messageText = document.getElementById('message-text');
const winLose = document.getElementById('win-lose');

const exitFromGame = document.getElementById('exitgame-btn');
const cyrcleColorPicker = document.getElementById('colorpicker');
const cyrcleColorPicker1 = document.getElementById('colorpicker1');

const overlay2 = document.getElementById('overlay2');
const playAgain = document.getElementById('playAgain-btn');
const finalResultMessage = document.getElementById('paragraph');

rulesSection.classList.add('displaynone');
game.classList.add('displaynone');
overlay.classList.add('displaynone');
overlay1.classList.add('displaynone');
overlay2.classList.add('displaynone');


seeRules.addEventListener('click', function(){
    welcome.classList.add('displaynone');
    rulesSection.classList.remove('displaynone');
});

x.addEventListener('click', function(){
    rulesSection.classList.add('displaynone');
    welcome.classList.remove('displaynone');
});

back.addEventListener('click', function(){
    rulesSection.classList.add('displaynone');
    welcome.classList.remove('displaynone');
})

startGame.addEventListener('click', function(){
    overlay.classList.remove('displaynone');
});

exit.addEventListener('click',function(){
    location.reload();  
})
giveUp.addEventListener('click',function(){
    location.reload();
})

exitFromGame.addEventListener('click', function(){
    location.reload();
})


const choicesImage = [{
    rock: "img/rock.png",
    paper: 'img/paper.jpeg',
    scissor: 'img/scissor.png'
}];




const choices = ['rock', 'paper', 'scissor'];

const rockPaperScissor = function(){

    let playersName = "";
    let randomNumber =0;
    let playerScore = 0;
    let compScore = 0;
    let playerChoice = "";
    let compChoice="";
    let rounds=3;


    const getPlayerName = () => { return playersName = nickname.value};

    const generateRandomNumber = () => {return randomNumber = Math.floor(Math.random()*3);};
    const getRandomNumber = () => {return randomNumber};

    const getPlayerScore = () => {return playerScore};
    const increasePlayerScore = () => {return playerScore++};

    const getCompScore = () => {return compScore};
    const increaseCompScore = () => {return compScore++};
    
    const getPlayerChoice = () => {return playerChoice};
    const setPlayerChoice = (value) => {return playerChoice=value};

    const getCompChoice = () => {return compChoice};
    const setCompChoice = (value) => {return compChoice=value};

    const getRounds = () => {return rounds};
    const decreaseRounds = () => {return rounds--};


    return{ getPlayerScore, getCompScore, generateRandomNumber, getPlayerChoice,
        getCompChoice, getRounds, getPlayerName, getRandomNumber, setCompChoice, setPlayerChoice, decreaseRounds, increaseCompScore, increasePlayerScore
    };

}

const playGame = rockPaperScissor();




enterGame.addEventListener('click', function(){
    welcome.classList.add('displaynone');
    game.classList.remove('displaynone');
    overlay.classList.add('displaynone');

    numberRounds.innerText = playGame.getRounds();
    ComputerScore.innerText = " "+ playGame.getCompScore();

    if(nickname.value === ""){
        myScore.innerText =  " "+playGame.getPlayerScore();
    } else {
        plScore.innerHTML = playGame.getPlayerName()+"'s Score: ";
        myScore.innerText = playGame.getPlayerScore();
    }
    
    
});


const setRoundsToDefault = function(){
    remRounds.textContent = "";
}

rockpic.addEventListener('click', function(ev){

    overlay1.classList.remove('displaynone'); 

    playGame.generateRandomNumber();
    playGame.setCompChoice(choices[playGame.getRandomNumber()]);

    host.src = choicesImage[0][playGame.getCompChoice()]; 

    cyrcleColorPicker.style.backgroundColor = "rgb(23, 96, 165)";

    playGame.setPlayerChoice(ev.target.id);
    you.src = choicesImage[0][playGame.getPlayerChoice()];

  
    
    match(playGame.getPlayerChoice(), playGame.getCompChoice());    
    
});


conti.addEventListener('click', function(){
    overlay1.classList.add('displaynone');
    if(playGame.getRounds() < 1){
        overlay2.classList.remove('displaynone');
        if(playGame.getPlayerScore() > playGame.getCompScore()){
            finalResultMessage.innerText = "VICTORY";
        } else {
            finalResultMessage.innerHTML = "DEFEAT";
        }
    }
});

playAgain.addEventListener('click', function(){
    location.reload();
});

const match = function(x, y){
    console.log(playGame.getCompChoice());
    console.log(playGame.getPlayerChoice());



    if(playGame.getRounds() > 0){
        switch(x) {
            case 'rock':
                switch(y) {
                    case 'rock':
                        messageText.innerHTML = "Well, well, well... looks like we've got ourselves a stalemate. It's like the universe is playing a prank on both of us. Time to flip a coin for the ultimate tiebreaker!";
                        winLose.textContent = "TIE";
                        cyrcleColorPicker1.style.backgroundColor = "rgb(23, 96, 165)";
                        break;
                    case 'paper':
                        messageText.innerHTML = "Oops! Looks like the computer's got the upper hand this time. Don't worry, losing builds character... or at least that's what I tell myself after a crushing defeat in rock, paper, scissors.";
                        winLose.textContent = "LOSE";
                        playGame.increaseCompScore();
                        ComputerScore.innerText = playGame.getCompScore();
                        playGame.decreaseRounds();
                        numberRounds.innerText = playGame.getRounds();
                        cyrcleColorPicker1.style.backgroundColor = "rgb(240, 179, 12)";
                        break;
                    case 'scissor':
                        messageText.innerHTML = "Congratulations! You've outsmarted a computer in a game of chance. Don't let it go to your head... but feel free to celebrate like a champion!";
                        winLose.textContent = "WIN";
                        playGame.increasePlayerScore();
                        myScore.innerText = playGame.getPlayerScore();
                        playGame.decreaseRounds();
                        numberRounds.innerText = playGame.getRounds();
                        myScore.innerText = playGame.getPlayerScore();
                        cyrcleColorPicker1.style.backgroundColor = "rgb(241, 55, 8)";
                        break;
                }
                break;
            case 'paper':
                switch(y) {
                    case 'rock':
                        messageText.innerHTML = "Congratulations! You've outsmarted a computer in a game of chance. Don't let it go to your head... but feel free to celebrate like a champion!";
                        winLose.textContent = "WIN";
                        playGame.increasePlayerScore();
                        myScore.innerText = playGame.getPlayerScore();
                        playGame.decreaseRounds();
                        numberRounds.innerText = playGame.getRounds();
                        myScore.innerText = playGame.getPlayerScore();
                        cyrcleColorPicker1.style.backgroundColor = "rgb(23, 96, 165)";
                        break;
                    case 'paper':
                        messageText.innerHTML = "Well, well, well... looks like we've got ourselves a stalemate. It's like the universe is playing a prank on both of us. Time to flip a coin for the ultimate tiebreaker!";
                        winLose.textContent = "TIE";
                        cyrcleColorPicker1.style.backgroundColor = "rgb(240, 179, 12)";
                        break;
                    case 'scissor':
                        messageText.innerHTML = "Oops! Looks like the computer's got the upper hand this time. Don't worry, losing builds character... or at least that's what I tell myself after a crushing defeat in rock, paper, scissors.";
                        winLose.textContent = "LOSE";
                        playGame.increaseCompScore();
                        ComputerScore.innerText = playGame.getCompScore();
                        playGame.decreaseRounds();
                        numberRounds.innerText = playGame.getRounds();
                        cyrcleColorPicker1.style.backgroundColor = "rgb(241, 55, 8)";
                        break;
                }
                break;
            case 'scissor':
                switch(y) {
                    case 'rock':
                        messageText.innerHTML = "Oops! Looks like the computer's got the upper hand this time. Don't worry, losing builds character... or at least that's what I tell myself after a crushing defeat in rock, paper, scissors.";
                        winLose.textContent = "LOSE";
                        playGame.increaseCompScore();
                        ComputerScore.innerText = playGame.getCompScore();
                        playGame.decreaseRounds();
                        numberRounds.innerText = playGame.getRounds();
                        cyrcleColorPicker1.style.backgroundColor = "rgb(23, 96, 165)";
                        break;
                    case 'paper':
                        messageText.innerHTML = "Congratulations! You've outsmarted a computer in a game of chance. Don't let it go to your head... but feel free to celebrate like a champion!";
                        winLose.textContent = "WIN";
                        playGame.increasePlayerScore();
                        myScore.innerText = playGame.getPlayerScore();
                        playGame.decreaseRounds();
                        numberRounds.innerText = playGame.getRounds();
                        myScore.innerText = playGame.getPlayerScore();
                        cyrcleColorPicker1.style.backgroundColor = "rgb(240, 179, 12)";
                        break;
                    case 'scissor':
                        messageText.innerHTML = "Well, well, well... looks like we've got ourselves a stalemate. It's like the universe is playing a prank on both of us. Time to flip a coin for the ultimate tiebreaker!";
                        winLose.textContent = "TIE";
                        cyrcleColorPicker1.style.backgroundColor = "rgb(241, 55, 8)";
                        break;
                }
                break;
        }
    } else {
        location.reload();
        
    }
}

    
paperpic.addEventListener('click', function(ev){

    overlay1.classList.remove('displaynone'); 

    playGame.generateRandomNumber();
    playGame.setCompChoice(choices[playGame.getRandomNumber()]);

    host.src = choicesImage[0][playGame.getCompChoice()]; 



    playGame.setPlayerChoice(ev.target.id);
    you.src = choicesImage[0][playGame.getPlayerChoice()];

    cyrcleColorPicker.style.backgroundColor = "rgb(240, 179, 12)";
    
    
    match(playGame.getPlayerChoice(), playGame.getCompChoice()); 
});

scissor.addEventListener('click', function(ev){

    overlay1.classList.remove('displaynone'); 

    playGame.generateRandomNumber();
    playGame.setCompChoice(choices[playGame.getRandomNumber()]);

    host.src = choicesImage[0][playGame.getCompChoice()]; 



    playGame.setPlayerChoice(ev.target.id);
    you.src = choicesImage[0][playGame.getPlayerChoice()];

    cyrcleColorPicker.style.backgroundColor = "rgb(241, 55, 8)";
    
    match(playGame.getPlayerChoice(), playGame.getCompChoice()); 
});
    







  
