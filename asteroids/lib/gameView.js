(function(){

  if (window.Asteroids.GameView === "undefined"){
    window.Asteroids.GameView = {};
  }

  var GameView = Asteroids.GameView = function(ctx, game){
    this.ctx = ctx;
    this.game = game;
  };

  GameView.prototype.start = function() {
    this.bindKeyHandlers();
    this.game.draw(this.ctx);
    window.setInterval((function(){
      this.game.step(ctx);
    }).bind(this), 1000/100);
  };

  GameView.prototype.bindKeyHandlers = function(){
    var ship = this.game.ship;
    key('down', function(){ ship.power([0,1]) });
    key('up', function(){ ship.power([0,-1]) });
    key('left', function(){ ship.power([-1,0]) });
    key('right', function(){ ship.power([1,0]) });
    key('space', function(){ ship.fireBullet(); });
  };
})();
