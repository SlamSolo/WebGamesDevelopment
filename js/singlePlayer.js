// The Variables for this State
Game.singlePlayer = function(singleplayer) {

// Map
this.map;
this.tileset;
this.bg;
this.layer;
this.layer2;

// Player
this.player;
this.facing = 'left';
this.jumpTimer = 0;

// Controls
this.cursors;
this.fireUpKey;
this.fireDownKey;
this.fireLeftKey;
this.fireRightKey;

// Pickups
this.starsSmall;
this.starsBig;

// Enemies
this.droids;
this.spawning = 0;

// HUD
this.hud;
this.score;
this.scoreLabel;
this.healthBar;
this.gameTimer;

// Weapon
//this.weapon;

// Explosions
// this.explosions;

};

// The Functions for this State
Game.singlePlayer.prototype = {

    create: function(){

        // Physics
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 250;

        // Map
        this.game.stage.backgroundColor = '#000000';
        this.map = this.add.tilemap('level1');
        this.map.addTilesetImage('tiles-1');
        this.map.setCollisionByExclusion([13, 14, 15, 16, 46, 47, 48, 49, 50, 51]);
        this.layer2 = this.map.createLayer('Tile Layer 2');
        this.layer2.debug = true;
        this.layer2.resizeWorld();
        this.bg = this.add.tileSprite(0, 0, 800, 600, 'background');
        this.bg.fixedToCamera = true;
        this.layer = this.map.createLayer('Tile Layer 1');
        this.layer.resizeWorld();

        // Player
        this.player = new playerCharacter(this.game);
        this.player.animations.add('left', [0, 1, 2, 3], 10, true);
        this.player.animations.add('turn', [4], 20, true);
        this.player.animations.add('right', [5, 6, 7, 8], 10, true);
        this.game.camera.follow(this.player);
        this.setupHUD();

        // Inputs
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.fireRightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
        this.fireLeftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
        this.fireUpKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
        this.fireDownKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);

        // Pickups
        this.starsSmall = this.add.group();
        this.starsSmall.enableBody = true;
        this.map.createFromObjects('Object Layer 1', 21, 'starSmall', 0, true, false, this.starsSmall);
        this.starsBig = this.add.group();
        this.starsBig.enableBody = true;
        this.map.createFromObjects('Object Layer 1', 38, 'starBig', 0, true, false, this.starsBig);

        // Enemies
        this.droids = this.add.group();
        this.droids.enableBody = true;
        this.time.events.loop(Phaser.Timer.SECOND * 5, this.spawnDroids, this);
/*
        // Explosions
        this.explosions = this.add.group();
        for (var i = 0; i < 10; i++)
        {
        var explosionAnimation = this.explosions.create(0, 0, 'explosion', [0], false);
        explosionAnimation.anchor.setTo(0.5, 0.5);
        explosionAnimation.animations.add('explosion');
        }
*/

},


//
    update: function(){

        // Layer Collision
        game.physics.arcade.collide(this.player, this.layer);
        game.physics.arcade.collide(this.starsSmall, this.layer);
        game.physics.arcade.collide(this.starsBig, this.layer);
        game.physics.arcade.collide(this.droids, this.layer);

        game.physics.arcade.overlap(this.player, this.starsSmall, this.collectStar, null, this);
        game.physics.arcade.overlap(this.player, this.starsBig, this.collectStarTwo, null, this);
        this.physics.arcade.collide(this.player, this.droids, function(player, droid) {
            player.takeDamage();
            droid.kill();
            console.log("Ouch");
            this.score -= 5;

// Adding an explosion to play on destruction of enemies
/*
            var explosionAnimation = this.explosions.getFirstExists(false);
            explosionAnimation.reset(this.droid.x, this.droid.y);
            explosionAnimation.play('explosion', 30, false, true);
*/

        }, null, this);

    this.player.body.velocity.x = 0;

    if (this.cursors.left.isDown)
    {
        this.player.body.velocity.x = -150;

        if (this.facing != 'left')
        {
            this.player.animations.play('left');
            this.facing = 'left';
        }
    }
    else if (this.cursors.right.isDown)
    {
        this.player.body.velocity.x = 150;

        if (this.facing != 'right')
        {
            this.player.animations.play('right');
            this.facing = 'right';
        }
    }
    else
    {
        if (this.facing != 'idle')
        {
            this.player.animations.stop();

            if (this.facing == 'left')
            {
                this.player.frame = 0;
            }
            else
            {
                this.player.frame = 5;
            }

            this.facing = 'idle';
        }
    }

// The start of weapon functionality
/*
        if (this.fireRightKey.isDown)
    {
        this.weapon.fireAngle = Phaser.ANGLE_RIGHT;
        this.weapon.fire();
    }

    if (this.fireLeftKey.isDown)
    {
        this.weapon.fireAngle = Phaser.ANGLE_LEFT;
        this.weapon.fire();
    }

    if (this.fireUpKey.isDown)
    {
        this.weapon.fireAngle = Phaser.ANGLE_UP;
        this.weapon.fire();
    }

    if (this.fireDownKey.isDown)
    {
        this.weapon.fireAngle = Phaser.ANGLE_DOWN;
        this.weapon.fire();
    }
*/

    if (this.jumpButton.isDown && this.player.body.onFloor() && game.time.now > this.jumpTimer)
    {
        this.player.body.velocity.y = -250;
        this.jumpTimer = game.time.now + 750;
    }


        this.updateHUD();


        if (this.player.health < 1) {
            this.gameOver();
        }
},


    setupHUD: function() {

        this.hud = this.add.group();
        this.score = 0;
        this.scoreLabel = this.add.text(780, 45, 'Score: ' + this.score, { fill: "white", font: "32px Arial" });
        this.scoreLabel.anchor.set(1.0, 0.5);

        this.healthBar = this.add.sprite(30, 30, 'healthBar', this.player.health);

         this.gameTimer = this.time.events.loop(Phaser.Timer.SECOND * 1, function() {
             this.timerScore();
        }, this);

        this.gameTimerLabel = this.add.text(10, 570, "You have survived for: " + this.game.time.totalElapsedSeconds(),{ fill: "white", font: "32px Arial"});

        this.hud.add(this.scoreLabel);
        this.hud.add(this.healthBar);
        this.hud.add(this.gameTimerLabel);

        this.hud.fixedToCamera = true;

    },

    updateHUD: function() {

        this.scoreLabel.setText("Score: " + this.score);
        this.healthBar.frame = this.player.health;
        this.gameTimerLabel.setText("You have survived for: " + Math.floor(this.game.time.totalElapsedSeconds()));

    },



    timerScore: function(player, score){

    console.log("Score Increase");
    this.score += 1;

},


    collectStar: function(player, starsSmall){

    // Removes the star from the screen
    starsSmall.kill();
    console.log("Star Picked Up");
    this.score += 5;

},


    collectStarTwo: function(player, starsBig){

    // Removes the star from the screen
    starsBig.kill();
    console.log("Star Two Picked Up");
    this.score += 10;

},

    spawnDroids: function() {

        for (var i = 3; i < 10; i++)
        {
        var droid = new badGuy(this.game, this.player);
            this.droids.add(droid);
        }

},


    gameOver: function() {
        this.player.destroy();
        this.paused = true;
        this.state.start('gameOver', true, false, this.score);
    }
};
