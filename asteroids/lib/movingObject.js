(function(){

  if (window.MovingObject === undefined){
    window.MovingObject = {};
  }

  var MovingObject= Asteroids.MovingObject = function(obj){
    this.pos = obj.pos;
    this.vel = obj.vel;
    this.radius = obj.radius;
    this.color = obj.color;
    this.game = obj.game;
  }

  MovingObject.prototype.draw = function(ctx){
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      true
    );

    ctx.fill();
  };

  MovingObject.prototype.move = function() {
    var newPos = []
    newPos[0] = this.pos[0] + this.vel[0];
    newPos[1] = this.pos[1] + this.vel[1];
    this.pos = this.game.wrap(newPos);
  };

  MovingObject.prototype.isCollidedWith = function(otherObject) {
    var dist = Math.sqrt(Math.pow((this.pos[0] - otherObject.pos[0]), 2) +
               Math.pow((this.pos[1] - otherObject.pos[1]), 2))
    if (dist < (this.radius + otherObject.radius)) {
      return true;
    } else {
      return false;
    }
  };

  MovingObject.prototype.collideWith = function(otherObject){
    firstObject = this;
    this.game.remove(firstObject);
    this.game.remove(otherObject);
  };

})();
