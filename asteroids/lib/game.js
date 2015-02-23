(function(){

  if (window.Asteroids.Game === "undefined"){
    window.Asteroids.Game = {};
  }

  var Game = Asteroids.Game = function(){
    this.asteroids = [];
  };

  Game.DIM_X = window.innerWidth;
  Game.DIM_Y = window.innerHeight;

  Game.NUM_ASTEROIDS = 4;

  Game.prototype.addAsteroids = function() {
    var that = this;
    for(var i = 0; i < Game.NUM_ASTEROIDS; i++){
      position = Game.randomPosition();
      this.asteroids.push(new Asteroids.Asteroid({pos: position, game: that}));
    }
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

  Game.prototype.wrap = function(pos){
    if (pos[0] < 0){
      pos[0] += Game.DIM_X;
    }
    else if (pos[0] > Game.DIM_X){
      pos[0] -= Game.DIM_X;
    }
    if (pos[1] < 0){
      pos[1] += Game.DIM_Y;
    }
    else if (pos[1] > Game.DIM_Y){
      pos[1] -= Game.DIM_Y;
    }
    return pos;
  }
})();
