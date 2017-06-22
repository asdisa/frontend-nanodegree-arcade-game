var Enemy = function() {
    this.sprite = 'images/enemy-bug.png';
    this.x = Functions.getRandomX();
    this.y = Functions.getRandomY();
    this.speed = Functions.getRandomSpeed();
};
Enemy.prototype.update = function(dt) {
    this.move(dt);
};
Enemy.prototype.move = function(dt) {
    if (this.x + this.speed * dt < 500) {
        this.x += this.speed * dt;
    }
    else {
        this.x = 0;
    }
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


var Player = function(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
}
Player.prototype.update = function(dt) {

};
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function(code) {
    if (code === "right") {
        if (this.x + 100 < 500) {
            this.x += 100;
        };
    }
    else if (code === "left") {
        if (this.x - 100 >= 0) {
            this.x -= 100;
        };
    }
    else if (code === "down") {
        if (this.y + 83 <= 403) {
            this.y += 83;
        };
    }
    else if (code === "up") {
        if (this.y - 83 >= 0) {
            this.y -= 83;
        };
    }
    console.log(this.x, this.y);
};

var allEnemies = [new Enemy(), new Enemy(), new Enemy(), new Enemy()]
var player = new Player(200, 373);

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    }
    player.handleInput(allowedKeys[e.keyCode]);
});
