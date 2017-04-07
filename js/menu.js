// The Variables for this State
Game.Menu = function(game) {
    this.singlePlayerButton;
};

// The Functions for this State
Game.Menu.prototype = {
	create: function() {
        this.add.image(0, 0, 'menuBackground');
        this.add.image(100, 50, 'title');

        this.singlePlayerButton = this.add.button(this.world.centerX, 260, 'singlePlayerButton', this.singlePlayer, this);
        this.singlePlayerButton.anchor.setTo(0.5);


	},

    singlePlayer: function() {
        this.state.start('singlePlayer', true, false, 'singlePlayer');
    },
};
