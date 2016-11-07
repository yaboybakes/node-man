// var LetterSpace = function(alphabet) {
//   this.letter = alphabet;
//   this.blankspace = "_";
//   this.guessed = false;
// }
//
// module.exports = LetterSpace;

module.exports = function(letter) {
  this.displayValue = '_';

  this.letter = letter;
  this.showLetter = function() {
    this.displayValue = letter;
  }
}
