(function(){

  if (window.Asteroids.Game === "undefined"){
    window.Asteroids.Game = {};
  }

  var Game = Asteroids.Game = function(){
    this.asteroids = Game.addAsteroids();
  };

  Game.DIM_X = window.innerWidth;
  Game.DIM_Y = window.innerHeight;

  Game.NUM_ASTEROIDS = 4;

  Game.addAsteroids = function() {
    var arr = [];
    for(var i = 0; i < Game.NUM_ASTEROIDS; i++){
      position = Game.randomPosition();
      arr.push(new Asteroids.Asteroid({pos: position}));
    }
    return arr;
  };

  Game.randomPosition = function() {
    var x = Math.floor(Math.random() * Game.DIM_X)
    var y = Math.floor(Math.random() * Game.DIM_Y)
    return [x,y];
  };

  Game.prototype.draw = function(ctx){
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    for (var i = 0; i< this.asteroids.length; i++){
      this.asteroids[i].draw(ctx);
    };
  };

  Game.prototype.move = function(){
    for (var i = 0; i< this.asteroids.length; i++){
      this.asteroids[i].move();
    };
  };
})();
