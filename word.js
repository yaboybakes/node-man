var Letter = require('./letter.js');

var Word = function(word){
	this.word = word;
	this.letters = [];
	this.found = false;

	this.get_letter = function() {
		for(var i = 0; i < this.word.length; i++) {
			this.letters.push(new Letter(this.word[i]));
		}
	};

	this.check_word = function() {
	this.found = this.letters.every(function(current_letter) {
			return current_letter.appear;
		});

		return this.found;
	};

	this.check_letter = function(letter_guessed) {
		var return_value = 0;
		for(var i = 0; i < this.letters.length; i++) {
			if (this.letters[i].character == letter_guessed){
				this.letters[i].appear = true;
				return_value++;
			}
		}
		return return_value;
	};

	this.show_word = function() {
		var str = '';

		for(var i=0; i < this.letters.length; i++){
			str += this.letters[i].show_letter();
		}

		return str;
	};
}

module.exports = Word;
