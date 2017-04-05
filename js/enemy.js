/*

Zombie = function (game, player) {

    var rndDirection = game.rnd.integerInRange(1, 4);

    var x;
	var y;

    switch (rndDirection) {
        case 1:
            // North
            x = game.rnd.integerInRange(0, game.world.width);
            y = 0;
            break;
        case 2:
            // East
            x = 800;
            y = game.rnd.integerInRange(0, game.world.height);
            break;
        case 3:
            // South
            x = game.rnd.integerInRange(0, game.world.width);
            y = 600;
            break;
        case 4:
            // West
            x = 0;
            y = game.rnd.integerInRange(0, game.world.height);
            break;
    }

	Phaser.Sprite.call(this, game, x, y, 'zombie1');

	this.health = game.rnd.integerInRange(1, 3);

    this.game = game;
    this.player = player.sprite;
    this.MOVE_SPEED = 20;

    game.physics.arcade.enable(this);
    this.body.setCircle(27);

    this.anchor.x = 0.5;
    this.anchor.y = 0.5;

	game.add.existing(this);
};

Zombie.prototype = Object.create(Phaser.Sprite.prototype);
Zombie.prototype.constructor = Zombie;

Zombie.prototype.takeDamage = function() {
	this.health -= 1;

	if (this.health <= 0) {
		this.kill();
        this.destroy();
	}
};

Zombie.prototype.update = function() {
    this.rotation = this.game.physics.arcade.angleBetween(this, this.player);
    game.physics.arcade.moveToObject(this, this.player, this.MOVE_SPEED);
};

*/
