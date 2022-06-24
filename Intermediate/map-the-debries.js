// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
// The values should be rounded to the nearest whole number. The body being orbited is Earth.
function orbitalPeriod(arr) {
  
  // Starting variables, GM is the standard gravitational parameter (gravity * mass) (in this case, for Earth)
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  
  // Create arrays for the names and average altitudes of the body of mass(es)
  const names = arr.map(x => x.name);
  const avgAlts = arr.map(y => y.avgAlt);

  // This function does the math to calculate the orbital period from the average altitude
  function calcOrb(avgAlt){
    return Math.round(Math.sqrt(Math.pow(earthRadius + avgAlt, 3) / GM) * 2 * Math.PI);
  }
  
  // Create an array using map() by taking the average altitudes and calling our calcOrb function on them
  let orbitalPeriods = avgAlts.map(a => calcOrb(a));

  // An array to put all the planet objects in with style {name: ____, orbitalPeriod: ____}
  let planets = [];
  
  // Loop through all the average altitudes and push the new Objects in
  for (let i in names){
    planets.push({name: names[i], orbitalPeriod: orbitalPeriods[i]});
  }

  // Return and array of all the planets after having calculated the orbital period
  return planets;
  
}

// An example which will return [{name: "sputnik", orbitalPeriod: 86400}]
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
