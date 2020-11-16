'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score, highScore;
score = 20;
highScore = 0;


//document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // console.log(guess, typeof guess);

    if (guess && score > 0) {
        if (guess === secretNumber) {
            document.querySelector('.message').textContent = 'Correct number!';
            document.querySelector('.number').textContent = secretNumber;
            document.body.style.backgroundColor = '#60b347';

            if (highScore < score) {
                document.querySelector('.highscore').textContent = guess;
            }
        } else if (guess > secretNumber) {
            document.querySelector('.message').textContent = 'Too high!';
            score = score - 1;
            document.querySelector('.score').textContent = score;
        } else if (guess < secretNumber) {
            document.querySelector('.message').textContent = 'Too low!';
            score = score - 1;
            document.querySelector('.score').textContent = score;
        }
    } else if (guess || score === 0) {
        console.log(score, 'else block');
        document.querySelector('.message').textContent = 'You lost the game!';
    } else {
        document.querySelector('.message').textContent = 'No number!';
    }

    console.log(score, 'score');
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.body.style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
});