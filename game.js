var Word = require('./word');
var word = new Word();

module.exports = function () {
  this.tries = 10;
  this.wins = 0;
  this.losses = 0;
  this.lettersLeft = 0;

  this.startGame = function() {
    this.tries = 10;
    word.selectRandomWord();
    this.lettersLeft = word.valuesLeft;
  }

  this.endGame = function() {
    console.log("game over");
  }

  this.guessLetter = function(letter) {
    if (word.isLetterInWord(letter)) {
      return true;
    }

    return false;
  }

  this.showLetters = function(letter) {
    if (word.isLetterInWord(letter)) {
      var index = word.selectedWord.indexOf(letter);
      word.selectedWord[index].showLetter();
      this.valuesLeft--;
    }
  }

  this.isGameOver = function () {
    this.tries--;
    if (this.tries === 0) {
      return true;
    }

    return false;
  }
}
