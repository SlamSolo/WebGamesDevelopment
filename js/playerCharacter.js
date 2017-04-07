// The Variables for this Class
playerCharacter = function (game, key, player) {

    Phaser.Sprite.call(this, game, 32, 200, 'dude');
    this.anchor.setTo(0.5, 0.5);

    game.physics.arcade.enable(this);
    game.add.existing(this);

    this.body.bounce.y = 0.2;
    this.body.collideWorldBounds = true;
    this.body.setSize(20, 32, 5, 16);

    this.health = 10;

    this.invincibilityFramesActive = false;

}


// The functions for this Class
playerCharacter.prototype = Object.create(Phaser.Sprite.prototype);
playerCharacter.prototype.constuctor = playerCharacter;

playerCharacter.prototype.update = function() {
    this.bringToTop();

// The start of weapon functionality
/*
    this.weapon = this.game.add.weapon(1, 'laser');
    this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    this.weapon.bulletSpeed = 400;
    this.weapon.fireRate = 1000;
*/
}



playerCharacter.prototype.takeDamage = function() {
    if (!this.invincibilityFramesActive) {

        }

        this.health -= 1;
        if (this.health < 1) {
            this.kill();
        } else {
            this.enterInvincibilityFrames();
            game.camera.flash(0xffdddd, 150);
        }
    }



playerCharacter.prototype.enterInvincibilityFrames = function() {
    this.invincibilityFramesActive = true;

    game.time.events.add(Phaser.Timer.SECOND * 2, function() {
        this.invincibilityFramesActive = false;
    }, this);
}

