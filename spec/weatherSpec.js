describe("Weather", function() {

  it('is stormy when random number is above 0.8', function() {
    weather = new Weather(0.9)
    expect(weather.isClear()).toBe(false)
  });

  it('is clear  when random number is less than 0.8', function() {
    weather = new Weather(0.7)
    expect(weather.isClear()).toBe(true)
  });
});
