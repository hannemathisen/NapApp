import API_KEY from '../lib/config';

/* global fetch: false */


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
