function Airport(capacity) {
  const standardCapacity = 50;
  this._capacity = capacity || standardCapacity;
  this.planes = [];
}

Airport.prototype = {
  receivePlane: function(plane) {
    if (this.planes.length >= this._capacity) {
      throw 'Airport up to capacity';
    } else if (!this.isWeatherClear()) {
      throw "Can't land due to stormy weather"
    } else if (plane.isFlying()) {
        this.planes.push(plane);
        plane.land();
    } else {
        throw "Plane already landed";
    }
  },

  takeOffPlane: function(plane) {
    if (plane.isFlying()) {
      throw "Plane already flying";
    } else if (this.planes.includes(plane)) {
      var planeIndex = this.planes.indexOf(plane);
      this.planes.splice(planeIndex, 1);
      plane.takeOff();
    } else {
      throw "Plane not at airport";
    }
  },
  isWeatherClear: function() {
    var weather = new Weather;
    return weather.isClear();
  }
}
