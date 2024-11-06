// This is the array you have to use!
console.log(ufoSightings);

const ufoSightingsArray = ufoSightings.Sheet1;
console.log(ufoSightingsArray)

const latlng = [];

ufoSightingsArray.forEach(function(sighting) {
    const lantlngIndividual = sighting['lat, lng'];
    const latlngIndividualArray = lantlngIndividual.split(", ");

    const lat = parseFloat(latlngIndividualArray[0]);
    const lng = parseFloat(latlngIndividualArray[1]);

});
