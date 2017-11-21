describe("Plane", function() {
  var plane = new Plane()

  it('Can see if a plane is flying or landed', function() {
    expect(plane.isFlying()).toBe(true);
  });
});
