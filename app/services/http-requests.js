import API_KEY from '../lib/config';

/* global fetch: false */

const HOST = 'folk.ntnu.no/hannmath';

export const fetchCoordinatesData = (address: String) => (
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address.replace(' ', '+')}&key=${API_KEY}`)
  .then((res) => {
    return res.json();
  })
  .then((myJson) => {
    return myJson.results[0];
  })
  .then((destination) => {
    const coordinates = {
      latitude: destination.geometry.location.lat,
      longitude: destination.geometry.location.lng,
    };
    const newAdr = destination.formatted_address.split(',')[0];
    return [coordinates, newAdr];
  })
  .catch(err => err)
);

export const fetchCarsData = () => (
  fetch(`http://${HOST}/cars.php/`)
  .then((res) => {
    return res.json();
  })
  .then((cars) => {
    const availableCars = [];
    for (let i = 0; i < cars.length; i += 1) {
      const car = cars[i];
      if (car.booked === '0') {
        const availableCar = {
          id: parseInt(car.id, 10),
          coordinate: {
            latitude: parseFloat(car.latitude),
            longitude: parseFloat(car.longitude),
          },
          regNr: car.reg_number,
        };
        availableCars.push(availableCar);
      }
    }
    return availableCars;
  })
  .catch(err => err)
);
