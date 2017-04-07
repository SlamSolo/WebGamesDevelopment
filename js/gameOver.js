// The Variables for this State
Game.GameOver = function(game) {
    this.score;
    this.scoreLabel;
    this.retryButton;
    this.exitButton;
};

// The Functions for this State
Game.GameOver.prototype = {
    init: function(score) {
        this.score = score;
    },

	create: function() {
        this.add.image(0, 0, 'gameoverBacgkround');
        this.add.image(100, 50, 'gameOver');

        this.scoreLabel = this.add.text(400, 300, 'Your Score Is: ' + this.score, {font: "48px Arial" });
        this.scoreLabel.anchor.setTo(0.5);

        this.retryButton = this.add.button(190, 400, 'retryButton', this.retry, this);

        this.exitButton = this.add.button(410, 400, 'exitButton', this.exit, this);
	},

    retry: function() {
        this.state.start('singlePlayer');
    },

    exit: function() {
        this.state.start('menu');
    }
};


