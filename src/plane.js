function Plane() {
  this._flying = true;
};

Plane.prototype = {
  isFlying: function() {
    return this._flying;
  },
  land: function() {
    this._flying = false;
  },
  takeOff: function() {
    this._flying = true;
  }
};
