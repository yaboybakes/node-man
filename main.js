const Game = require('./game.js');

var inquirer = require('inquirer');

var game = new Game();
game.startGame();


function getLetter() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'letter',
        message: 'Next Letter'
      }
    ]).then (function (answer) {
       if (game.guessLetter(answer.letter) {
         game.showLetters(answer.letter);
         if (game.valuesLeft === 0) {
           console.log("you won!");
         }
       } else {
         if (game.isGameOver()) {
           console.log("you lose");
           game.endGame();
         } else  {
           getLetter();
         }

       }
       })
    })
}
