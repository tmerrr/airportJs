describe('airport', function() {
  var airport = new Airport
  it('should have no planes', function() {
    expect(airport.planes).toEqual([]);
  });
});
