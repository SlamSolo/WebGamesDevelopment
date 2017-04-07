// Creation of the Game Object
Game = {};

// The Variables for this State
Game.Boot = function(game) {};

// The Functions for this State
Game.Boot.prototype = {
	create: function() {
		this.state.start('preload');
	}
};
