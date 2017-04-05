/*

// State variables
Game.GameOver = function(game) {
    this.score;

    this.scoreLabel;
    this.retryButton;
    this.exitButton;
};

// State functions
Game.GameOver.prototype = {
    init: function(score) {
        this.score = score;
    },

	create: function() {
        this.add.image(0, 0, 'gameover_bg');
        this.add.image(100, 50, 'gameover_logo');

        this.scoreLabel = this.add.text(400, 300, 'Score: ' + this.score, { fill: "#eaaf0f", font: "48px Arial" });
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

*/
