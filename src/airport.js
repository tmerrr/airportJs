function Airport() {
  this.planes = [];
}

Airport.prototype = {
  receivePlane: function(plane) {
    if (plane.isFlying()) {
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
  }
}
