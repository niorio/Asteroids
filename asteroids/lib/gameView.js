(function(){

  if (typeof window.Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function (ctx, game) {
    this.ctx = ctx;
    this.game = game;
  };

  GameView.prototype.start = function () {
    this.bindKeyHandlers();
    this.img = new Image();
    this.img.src = 'lib/space.jpg';
    this.game.draw(this.ctx);
    window.setInterval((function(){
      this.ctx.clearRect(0, 0, Asteroids.Game.DIM_X, Asteroids.Game.DIM_Y);
      this.ctx.drawImage(this.img, 0, 0);
      this.game.step(ctx);
      this.overlay();
    }).bind(this), 1000/60);
  };

  GameView.prototype.bindKeyHandlers = function () {
    var ship = this.game.ship;
    key('down', function () { ship.power([0,1]) });
    key('up', function () { ship.power([0,-1]) });
    key('left', function () { ship.power([-1,0]) });
    key('right', function () { ship.power([1,0]) });
    key('space', function () { ship.fireBullet(); });
  };

  // GameView.prototype.drawImage = function (ctx) {
  //   ctx.drawImage(this.img, 0, 0);
  // };

  GameView.prototype.overlay = function() {
    var x = Math.floor(Asteroids.Game.DIM_X / 4);
    var y = Math.floor(Asteroids.Game.DIM_Y / 2);
    ctx.fillStyle = "#990000";
    ctx.font = 96+"pt Arial ";
    if (this.game.asteroids.length === 0){
      ctx.fillText("Game Over", x,y);
    }

  }

})();
