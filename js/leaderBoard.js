Game.leaderBoard = function (game) {
    this.score;
};

Game.Leaderboard.prototype = {
    init: function(score) {
        this.score = score;
    },

    create: function() {
        this.add.image(0, 0, 'gameoverBackground');

        var username = prompt("Enter a username");

        $.ajax({
            url: "/scripts/submitScore.php",
            type: "POST",
            data: {username: username, score: this.score},
        });

        var top10;

        this.game.time.events.add(Phaser.Timer.SECOND * 2, function() {
            var continueState = this.continue();
            $.ajax({
                url: "/scripts/getBoard.php",
                success: function(leaders) {
                    try {
                        top10 = $.parseJSON(leaders);
                    } catch(e) {
                        alert('Could not connect to database');
                        continueState();
                    }
                }
            }, this);
        }, this);

        this.add.text(200, 10, "Rank", { fill: "#fff", font: "16px Arial" });
        this.add.text(290, 10, "Username", { fill: "#fff", font: "16px Arial" });
        this.add.text(470, 10, "Score", { fill: "#fff", font: "16px Arial" });
        this.game.time.events.add(Phaser.Timer.SECOND * 3, function() {
            var index = 1;
            top10.forEach(function(user) {
                this.add.text(220, 40 * index, index, { fill: "#fff", font: "16px Arial" });
                this.add.text(300, 40 * index, user.username, { fill: "#fff", font: "16px Arial" });
                this.add.text(470, 40 * index, user.score, { fill: "#fff", font: "16px Arial" });
                index++;

                this.continueButton = this.add.text(620, 550, "Continue", { fill: "#fff" });
                this.continueButton.inputEnabled = true;
                this.continueButton.events.onInputDown.add(this.continue, this);
            }, this);
        }, this);
    },

    continue: function() {
        this.state.start('gameOver', true, false, this.score);
    }
};
