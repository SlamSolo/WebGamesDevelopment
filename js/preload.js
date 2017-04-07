// The Variables for this State
Game.Preload = function(game) {};

// The Functions for this State
Game.Preload.prototype = {

        preload: function() {

                    // Map, Character and Enemies
                    this.load.tilemap('level1', 'assets/level1.json', null, Phaser.Tilemap.TILED_JSON);
                    this.load.image('tiles-1', 'assets/tiles-1.png');
                    this.load.spritesheet('dude', 'assets/dude.png', 32, 48);
                    this.load.spritesheet('droid', 'assets/droid.png', 32, 32);
                    this.load.spritesheet('explosion', 'assets/explosion.png', 32, 32, 23);
                    this.load.image('starSmall', 'assets/star.png');
                    this.load.image('starBig', 'assets/star2.png');
                    this.load.image('background', 'assets/background2.png');
                    this.load.image('laser', 'assets/laser.png');
                    this.load.spritesheet('healthBar', 'assets/health.png', 204, 30, 10);

                    // Buttons, logos and backgrounds
                    this.load.image('gameOver', 'assets/gameover.png');
                    this.load.image('title', 'assets/title.png');
                    this.load.image('menuBackground', 'assets/menuBackground.png');
                    this.load.image('gameoverBackground', 'assets/gameoverBackground.png');
                    this.load.image('singlePlayerButton', ' assets/singlePlayerButton.png');
                    this.load.image('exitButton', ' assets/exitButton.png');
                    this.load.image('retryButton', ' assets/retryButton.png');
                    },
        create: function() {
                this.state.start('menu');
        }
};
