// Create game object
Game = {};

// State variables
Game.Boot = function(game) {};

// State functions
Game.Boot.prototype = {
	create: function() {
		this.state.start('preload');
	}
};
