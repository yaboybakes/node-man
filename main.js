var prompt = require('prompt');
var Word = require('./word.js');
var choices = require('./game.js');
prompt.start();

game = {
    wordBank: choices,
    words_guessed_correctly: 0,
    guesses_left: 10,
    current_word: null,
    start_game: function(wrd) {
        this.reset_guesses();
        this.current_word = new Word(this.wordBank[Math.floor(Math.random() * this.wordBank.length)]);
        this.current_word.get_letter();
        this.keep_prompting_user();
    },
    reset_guesses: function() {
        this.guessRemaining = 10;
    },
    keep_prompting_user: function() {
        var self = this;
				console.log(self.current_word.show_word());
        prompt.get(['guess_a_letter'], function(err, result) {
            console.log('The letter you guessed was: ' + result.guess_a_letter);
            var guesses_so_far = self.current_word.check_letter(result.guess_a_letter);
            if (guesses_so_far == 0) {
                console.log('Sorry the guess was close but incorrect!');
                self.guesses_left--;
            } else {
                console.log('You guessed right on the money!');
                self.guesses_left--;
                if (self.current_word.check_word()) {
                    console.log('Congratulations, you guessed the hidden word correctly!!!');
                    return;
                }
            }
            console.log('You have ' + self.guesses_left+ ' guesses remaining');
            if ((self.guesses_left > 0) && (self.current_word.found == false)) {
                self.keep_prompting_user();
            } else if (self.guesses_left == 0) {
                console.log('Try again next time. The hidden word was ' + self.current_word.word);
            } else {
                console.log(self.current_word.show_word());
            }
        });
    }
};
game.start_game();
