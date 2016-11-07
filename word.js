// var Letter = require('./letter.js');
//
// var Word = function(word) {
//   this.letters = [];
//   this.word = word;
//   this.addLetter = function(letter) {
//     this.letters.push(new Letter(letter));
//   }
// }
//
// module.exports = Word;

var Letter = require('./letter');
module.exports = function() {
  var words = ['hello'];
  this.selectedWord = [];
  var valuesLeft = 0;
  this.selectWord = function() {
    var index = 0;
    var word = words[index];
    valuesLeft = word.length;

    word.split('').forEach(function (currentLetter) {
      this.selectedWord.push(new Letter(currentLetter));
    })
  }

  this.isWordGuessed = function() {
    var isGuessed = true;
    this.selectedWord.forEach(function () {
      if (letter.displayValue === '_') {
        isGuessed = false;
      }
    });
    return isGuessed;

  }

  this.isLetterInWord = function(guessedLetter) {
    var isInWord = false;
    this.selectedWord.forEach(function (letter) {

      if (letter === gussedLetter) {
        isInWord = true;
      }
    });

    return isInWord;
  }

}
