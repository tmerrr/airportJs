describe('airport', function() {

  beforeEach(function(){
    airport = new Airport;
    plane = new Plane;
  });

  it('should have no planes', function() {
    expect(airport.planes).toEqual([]);
  });

  it('should be able to land a plane: Plane is added to planes array', function() {
    airport.receivePlane(plane);
    expect(airport.planes).toEqual([plane]);
  });

  it('should be able to land a plane: tells plane to land', function() {
    airport.receivePlane(plane);
    expect(plane.isFlying()).toBe(false)
  });

  it('plane should be able to take off: Plane is removed from planes array', function() {
    airport.receivePlane(plane);
    airport.takeOffPlane(plane);
    expect(airport.planes).toEqual([]);
  });

  it('plane should be able to take off: tells plane to take off', function() {
    airport.receivePlane(plane);
    airport.takeOffPlane(plane);
    expect(plane.isFlying()).toBe(true)
  });

});
