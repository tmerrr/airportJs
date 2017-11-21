function Airport() {
  this.planes = [];
}

Airport.prototype = {
  receivePlane: function(plane) {
    this.planes.push(plane);
    plane.land();
  },

  takeOffPlane: function(plane) {
    var planeIndex = this.planes.indexOf(plane);
    this.planes.splice(planeIndex, 1);
    plane.takeOff();
  }
}
