// State variables
Game.Menu = function(game) {
    this.singlePlayerButton;
};

// State functions
Game.Menu.prototype = {
	create: function() {
        this.add.image(0, 0, 'menu_bg');
        this.add.image(100, 50, 'logo');

        this.singlePlayerButton = this.add.button(this.world.centerX, 260, 'singlePlayerButton', this.singlePlayer, this);
        this.singlePlayerButton.anchor.setTo(0.5);


	},

    singlePlayer: function() {
        this.state.start('singlePlayer');
    },
};
