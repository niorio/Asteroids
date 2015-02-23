(function(){

  if (window.Asteroids.GameView === "undefined"){
    window.Asteroids.GameView = {};
  }

  var GameView = Asteroids.GameView = function(ctx, game){
    this.ctx = ctx;
    this.game = game;
  };

  GameView.prototype.start = function() {
    this.game.draw(this.ctx);
    window.setInterval((function(){
      this.game.move();
      this.game.draw(this.ctx);
    }).bind(this), 1000/60);
  };
})();
