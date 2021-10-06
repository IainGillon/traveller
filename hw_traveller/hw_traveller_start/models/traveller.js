const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  
  this.journeys.startLocation.forEach((location) => {
    return this.journeys.startLocation
  }) 
  
    
  };

  
  



Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.endLocation

};

Traveller.prototype.getJourneysByTransport = function (transport) { 
  const result = this.journeys.filter((journey) => {
    return journey.transport === transport
  })
  return result


};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter((journey) =>{
    return journey.distance >= minDistance
  } )
  return result

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const total = this.journeys.reduce((totalDistance, journey) => {
    return totalDistance + journey.distance;
  }, 0)
  
return total
  }



Traveller.prototype.getUniqueModesOfTransport = function () {
  const allModesOfTransport = []
  result = this.journeys.filter()


};


module.exports = Traveller;
