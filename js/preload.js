Game.Preload = function(game) {};

Game.Preload.prototype = {

        preload.function() {
                    this.load.tilemap('level1', 'assets/level1.json', null, Phaser.Tilemap.TILED_JSON);
                    this.load.image('tiles-1', 'assets/tiles-1.png');
                    this.load.spritesheet('dude', 'assets/dude.png', 32, 48);
                    this.load.spritesheet('droid', 'assets/droid.png', 32, 32);
                    this.load.image('starSmall', 'assets/star.png');
                    this.load.image('starBig', 'assets/star2.png');
                    this.load.image('background', 'assets/background2.png');

                    this.load.image('gameOverImg', 'assets/gameover.png');
                    this.load.image('logo', 'assets/logo.png');

                    this.load.spritesheet('healthBar', 'assets/health.png', 100, 34, 7);
                    this.load.image('menu_bg', 'assets/menu_bg.png');
                    this.load.image('gameover_bg', 'assets/gameover_bg.png');

                    this.load.image('singlePlayerButton', ' assets/singlePlayerButton.png');
                    this.load.image('exitButton', ' assets/exitButton.png');
                    this.load.image('retryButton', ' assets/retryButton.png');
                    },
        create: function() {
                this.state.start('menu');
        }
};
