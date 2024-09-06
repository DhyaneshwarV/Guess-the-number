'use strict';
/* 
DOM is an interface between html and java script.
It is automatically created while the html page loads.
Using DOM tree we can change or manuplate the html elements by javascript.
DOM or document.queryselector etc.. are not a part of javascript itself because it does not in the ECMA script.
DOM is an API available automaticaly while the html page is loaded.
*/

// document.querySelector('.class_name')
//.textContent -gives the text content the element haves
//.value- to get value from an input
//.style- to style with css properties eg ++(this will give an inline css to the html tags)

/*
NEW EXTRA POINTS LEARNED 
Math.trunc(Math.random() * 20) + 1 -to get 0 to 20 random numbers
state variable - variables that are used to change a stae in dom eg++++
input - always gives a empty string at initial .
*/

//initial state variables
let number = Math.trunc(Math.random() * 20) + 1; //++++
let score = 20; //++++
let highScore = 0;

const messages = message =>
  (document.querySelector('.message').textContent = message);

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  //No number
  if (!guess) {
    messages('No number');
  }
  //correct guess
  else if (guess === number) {
    messages('Correct guess');
    if (score > highScore)
      document.querySelector('.highscore').textContent = score;
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = 'green'; //++
  }
  //wrong guess
  else {
    guess > number ? messages('too high') : messages('too low');
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else document.querySelector('.score').textContent = 0;
  }
});

//again
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  messages('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
