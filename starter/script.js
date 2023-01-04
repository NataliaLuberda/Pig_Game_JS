'use strict';
//Wynieranie elementów które będą często używane
const playerOne = document.querySelector('#score--0');
const playerTwo = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const roll = document.querySelector('.btn--roll');
const newGame = document.querySelector('.btn--new');
const hold = document.querySelector('.btn--hold');
const currentOne = document.getElementById('current--0');
const currentTWO = document.getElementById('current--1');
let activePlayer = 0;
const playerOneEl = document.querySelector('.player--0');
const playerTwoEl = document.querySelector('.player--1');
let activeGame = true;
let currrentScore = 0;
//co jest na starcie

diceEl.classList.add('hidden');

playerOne.textContent = 0;
playerTwo.textContent = 0;

roll.addEventListener('click', function(){
    if(activeGame){
        //wylosować randomwe kostkę
        const dice = Math.trunc(Math.random()*6)+1;
        //wyświetlić kostkę
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        //sprawdzić czy to 1
        if(dice != 1){
            //dodanie do wyniku
            currrentScore = currrentScore + dice;
            document.getElementById(`current--${activePlayer}`).textContent = currrentScore;
        } else{
            currrentScore = 0;
            document.getElementById(`current--${activePlayer}`).textContent =
            currrentScore;
            activePlayer = activePlayer === 0? 1 : 0;
            playerOneEl.classList.toggle('player--active'); //doda lub usunie jeśli jest
            playerTwoEl.classList.toggle('player--active');
        };
    }
});

hold.addEventListener('click', function () {
    if(activeGame){
        document.getElementById(`score--${activePlayer}`).textContent =
            Number(document.getElementById(`score--${activePlayer}`).textContent) +
            currrentScore;
        currrentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        if((Number)(document.getElementById(`score--${activePlayer}`).textContent)>= 20){
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add(`player--winner`);
            activeGame = false;
        } else{
            activePlayer = activePlayer === 0 ? 1 : 0;
            playerOneEl.classList.toggle('player--active');//doda lub usunie jeśli jest
            playerTwoEl.classList.toggle('player--active');
        };
    };
});

newGame.addEventListener('click', function () {
    document.getElementById(`score--${activePlayer}`).textContent = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.getElementById(`score--${activePlayer}`).textContent = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    diceEl.classList.add('hidden');
    activeGame = true;
    playerOneEl.classList.toggle('player--active'); //doda lub usunie jeśli jest
    playerTwoEl.classList.toggle('player--active');
    playerOneEl.classList.remove('player--winner'); //doda lub usunie jeśli jest
    playerTwoEl.classList.remove('player--winner');
});