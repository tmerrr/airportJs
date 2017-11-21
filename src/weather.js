function Weather(chance){
  this._chance = chance || Math.random()
}

Weather.prototype.isClear = function() {
  return this._chance < 0.8;
}
