'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 10;
document.querySelector('.score').textContent = 15;
console.log((document.querySelector('.guess').value = 16));
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'too high' : 'too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you loose the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// else if (guess > secretNumber) {
//if (score > 1) {
//document.querySelector('.message').textContent = 'Too High!';
//score--;
//document.querySelector('.score').textContent = score;
//} else {
//document.querySelector('.message').textContent = 'you lost the game';
//document.querySelector('.score').textContent = 0;
//}
//} else if (guess < secretNumber) {
//if (score > 1) {
//document.querySelector('.message').textContent = 'Too low!';
//score--;
//document.querySelector('.score').textContent = score;
//} else {
//document.querySelector('.message').textContent = 'you lost the game';
//document.querySelector('.score').textContent = 0;
//}
//}
//});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.message').textContent = 'Start Guessing.....';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgrounColor = '';
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
});
console.log(secretNumber);
