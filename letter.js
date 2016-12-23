var Letter = function(letter) {

	this.character = letter;
	this.appear = false;
	this.show_letter = function() {
		return !(this.appear) ? " _ " : this.character;
	};
};

module.exports = Letter;
