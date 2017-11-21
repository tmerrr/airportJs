function Plane() {
  this._flying = true;
};

Plane.prototype.isFlying = function() {
  return this._flying;
};
