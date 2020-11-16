/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let scores, roundScore, winningScore, winningScoreInput, activePlayer, gamePlaying, firstDice, secondDice; //lastDice;
init();

// innerHTML работи по същия начин като textContent, но поставя html елементи като string!!!
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// по този начин не променяме valuе-то, a само го четем !!!
// let x = document.querySelector('#score-0').textContent;
// console.log(x);

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {

        // if dice returns true ( has a value ) lastDice will get dice last value
        // if (dice) {
        //     lastDice = dice;
        // }

        firstDice = Math.floor(Math.random() * 6) + 1;
        console.log('this is the first dice', firstDice);

        secondDice = Math.floor(Math.random() * 6) + 1;
        console.log('this is the second dice', secondDice);

        // хваща само елемента на активния играч спрямо value-то на променливата activePlayer (0 - играч 1; 1 - играч 2)
        // textContent променя стойността в html елемента на string
        // document.querySelector('#current-' + activePlayer).textContent = dice;

        let firstDiceDOM = document.querySelector('.first-dice');
        let secondDiceDOM = document.querySelector('.second-dice');
        firstDiceDOM.style.display = "block";
        secondDiceDOM.style.display = "block";

        // снимките са с имена dice-1.png ... dice-6.png
        // най- лесния начин да смени src на <img> е чрез този лесен трик
        firstDiceDOM.src = 'dice-' + firstDice + '.png';
        secondDiceDOM.src = 'dice-' + secondDice + '.png';

        // if (dice === 6 && lastDice === 6) {
        //     // player loses score
        //     scores[activePlayer] = 0;
        //     document.querySelector('#score-' + activePlayer).textContent = 0;
        //     nextPlayer();
        // } else 
        if (firstDice !== 1 && secondDice !== 1) {
            roundScore = (firstDice + secondDice) + roundScore;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else if (firstDice === 1 || secondDice === 1) {
            nextPlayer();
        }
        // console.log('this is the lastDiceScore', lastDice);
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    scores[activePlayer] = roundScore + scores[activePlayer];

    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    if (winningScore) {
        if (scores[activePlayer] >= winningScore) {
            document.getElementById('score-0').innerHTML = '<strong>WINNER</strong>';
            document.querySelector('.first-dice').style.display = "none";
            document.querySelector('.second-dice').style.display = "none";
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

            gamePlaying = false;
        } else {
            nextPlayer();
        }
    } else {
        if (scores[activePlayer] >= 100) {
            document.getElementById('score-' + activePlayer).innerHTML = '<strong>WINNER</strong>';
            document.querySelector('.first-dice').style.display = "none";
            document.querySelector('.second-dice').style.display = "none";
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

// winningScore input field
winningScoreInput = document.getElementById('setWinningScore');

// winningScoreInput.oninput = function () {
//     let min = parseInt(this.min);

//     if (parseInt(this.min) < min) {
//         this.value = min;
//     }
// }

document.getElementById('newWinningScoreButton').addEventListener('click', function () {
    winningScore = winningScoreInput.value;
    console.log(winningScore, 'this is the winningScore');
});

console.log(winningScoreInput.value, 'winningScoreInput.value');

function nextPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1
    } else {
        activePlayer = 0;
    }

    roundScore = 0;
    document.getElementById('current-0').textContent = roundScore;
    document.getElementById('current-1').textContent = roundScore;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.first-dice').style.display = "none";
    document.querySelector('.second-dice').style.display = "none";
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.first-dice').style.display = "none";
    document.querySelector('.second-dice').style.display = "none";
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}