const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  //Calculate your max fuel rate
  const fuelRate = distanceToPump / fuelLeft;
  
  //If your fuel rate is less than or equal too the fuel rate provided; return true because you can make it
  if(fuelRate <= mpg) {
    return true;
  } else {
    return false;
  }
};