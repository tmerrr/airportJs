describe("Plane", function() {
  var plane = new Plane()

  it('Can see if a plane is flying or landed', function() {
    expect(plane.isFlying()).toBe(true);
  });
  it('landing a plane should change flying status to false', function() {
    plane.land();
    expect(plane.isFlying()).toBe(false);
  });
  it('should change flying to true', function() {
    plane.land();
    plane.takeOff();
    expect(plane.isFlying()).toBe(true);
  });
});
