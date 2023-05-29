'use strict';
// Se declara una variable mutable que nos dará un número al azar
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Se declara una variable mutable donde el puntaje va bajando conforme el usuario se equivoque
let score = 10;

// Se declara una variable mutable para el más alto puntaje
let highscore = 0;

// Se crea una función para mostrar el message y el secret number
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displaySecretNumber = function (secretNumber) {
  document.querySelector('.number').textContent = secretNumber;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
// Toda la lógica para manipular el DOM y así hacer funcionar el juego
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Cuando no hay input
  if (!guess) {
    displayMessage('⛔ No hay ningún número!');

    //Cuando el jugador gana
  } else if (guess === secretNumber) {
    displayMessage('🎉 Número Correcto!');
    displaySecretNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //Cuando guess está mal y/o el jugador pierde
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Muy alto!' : '📉 Muy bajo!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 Perdiste el juego!');
      displaySecretNumber('😔');
      displayScore(0);
    }
  }
});

// Lógica para efecto del botón 'Jugar de nuevo' y todo se resetee
document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('🎲 Empieza a adivinar...');
  displayScore(score);
  displaySecretNumber('?');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
