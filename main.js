import './style.css'

'use strict'

const overlay = document.getElementById('overlay');
const overlay1 = document.getElementById('overlay1');

const welcome = document.getElementById('welcome');
const startGame = document.getElementById('start-game');
const seeRules = document.getElementById('see-rules');


const rulesSection = document.getElementById('rules-section');
const x = document.getElementById('close');
const back = document.getElementById('backbtn');


const game = document.getElementById('game');


const overlay2 = document.getElementById('overlay2');


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
