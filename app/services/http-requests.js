import API_KEY from '../lib/config';
import { getPoints } from '../actions/input-address-actions';

/* global fetch: false */
/* global Request */

const HOST = 'host';
// const HOST = '10.22.36.220/api';

export const fetchCoordinatesData = (address: String) => (
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address.replace(' ', '+')}&key=${API_KEY}`)
    .then(res => res.json())
    .then(myJson => myJson.results[0])
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

export const fetchAddressData = (coordinates: Object) => (
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.latitude},${coordinates.longitude}&key=${API_KEY}`)
    .then(res => res.json())
    .then(myJson => myJson.results[0])
    .then((destination) => {
      const address = destination.formatted_address.split(',')[0];
      return address;
    })
    .catch(err => err)
);

export const fetchCarsData = () => (
  fetch(`http://${HOST}/cars`)
    .then((res) => {
      const result = res.json();
      return result;
    })
    .then((cars) => {
      const availableCars = [];
      for (let i = 0; i < cars.length; i += 1) {
        const car = cars[i];
        // legg til if-en i php?
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

export async function setCarBooking(bookedBit, car) {
  const request = new Request(`http://${HOST}/cars/${car.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      booked: bookedBit,
      latitude: car.coordinate.latitude,
      longitude: car.coordinate.longitude,
    }),
  });
  // handle response
  const response = await fetch(request);
  console.log(response);
}

export async function addRide(car, places) {
  const request = new Request(`http://${HOST}/rides`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      car_id: car.id,
      user_id: 1,   // fix when handling login
      start_latitude: places.startCoordinates.latitude,
      start_longitude: places.startCoordinates.longitude,
      start_time: (Date.now() / 1000) - places.startTime,
      via_latitude: places.pickupCoordinates.latitude,
      via_longitude: places.pickupCoordinates.longitude,
      via_time: (Date.now() / 1000) - places.pickupTime,
      end_latitude: places.destinationCoordinates.latitude,
      end_longitude: places.destinationCoordinates.longitude,
      end_time: Date.now() / 1000,
    }),
  });
  // handle response
  const response = await fetch(request);
  console.log(response);
}

export async function fetchBestCar(available: Array, pickup: Object) {
  let duration = Infinity;
  let bestCar = null;
  let directions = [];
  let bounds = null;
  const destination = `${pickup.latitude},${pickup.longitude}`;
  await Promise.all(available.map(async (car) => {
    const start = `${car.coordinate.latitude},${car.coordinate.longitude}`;
    const resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${start}&destination=${destination}&key=${API_KEY}`);
    const respJson = await resp.json();
    const thisDuration = respJson.routes[0].legs[0].duration.value;
    if (thisDuration < duration) {
      duration = thisDuration;
      bestCar = car;
      directions = getPoints(respJson.routes[0]);
      bounds = respJson.routes[0].bounds;
    }
  }));
  return [bestCar, directions, duration, bounds];
}
