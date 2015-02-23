(function () {

  if (window.Asteroids.Util === "undefined"){
    window.Asteroids.Util = {};
  }

  var Util = Asteroids.Util = function (){};

  Util.inherits = function (ChildClass, BaseClass) {
    function Surrogate () {};
    Surrogate.prototype = BaseClass.prototype;
    ChildClass.prototype = new Surrogate();
  };

  Util.randomVec = function (length) {
    var vec, x, y;
    vec = [];
    x = Math.floor(Math.random() * (length - 1));
    y = Math.sqrt((Math.pow(length, 2)) - (Math.pow(x, 2)));
    vec.push(x)
    vec.push(y);
    return vec;
  };
})();
