// The Variables for this Class
badGuy = function(game, player) {

    var x = game.world.randomX;
    var y = game.world.randomY;

    Phaser.Sprite.call(this, game, x, y, 'droid');
    this.MOVE_SPEED = 20;
    this.player = player;

    game.add.existing(this);

};

// The Functions for this Class
badGuy.prototype = Object.create(Phaser.Sprite.prototype);
badGuy.prototype.constructor = badGuy;

badGuy.prototype.update = function() {
    game.physics.arcade.moveToObject(this, this.player, this.MOVE_SPEED);
};
