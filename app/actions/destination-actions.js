import Polyline from '@mapbox/polyline';
import {
  FETCH_DESTINATION_REQUEST,
  FETCH_DESTINATION_SUCCESS,
  FETCH_DESTINATION_ERROR,
  CHOOSE_DESTINATION_ON_MAP,
  FETCH_DIRECTIONS_REQUEST,
} from './action-types';
import { fetchCoordinatesData, fetchAddressData } from '../services/http-requests';
import API_KEY from '../lib/config';

export const chooseDestinationOnMap = () => (
  {
    type: CHOOSE_DESTINATION_ON_MAP,
    payload: {},
  }
);

const fetchDestinationRequest = () => (
  {
    type: FETCH_DESTINATION_REQUEST,
    payload: { isLoading: true },
  }
);


const fetchDirectionsRequest = () => (
  {
    type: FETCH_DIRECTIONS_REQUEST,
    payload: { isLoading: true },
  }
);

const fetchDestinationSuccess = (coordinates: Object, address: Object, directions: Array) => (
  {
    type: FETCH_DESTINATION_SUCCESS,
    payload: { coordinates, address, directions },
  }
);

function getPoints(route) {
  let pointArray = [];
  const polyArray = route.legs[0].steps;
  for (let i = 0; i < polyArray.length; i += 1) {
    const points = Polyline.decode(polyArray[i].polyline.points);
    pointArray = pointArray.concat(points);
  }
  const directions = pointArray.map(point => ({
    latitude: point[0],
    longitude: point[1],
  }));
  return directions;
}

// startCoordinates: Object, `${startCoordinates.latitude},${startCoordinates.longitude}`;
export function fetchDirections(startCoordinates: Object, endCoordinates: Object, address: String) {
  return function (dispatch) {
    dispatch(fetchDirectionsRequest());
    const start = `${startCoordinates.latitude},${startCoordinates.longitude}`;
    const end = `${endCoordinates.latitude},${endCoordinates.longitude}`;
    return fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${start}&destination=${end}&key=${API_KEY}`)
      .then(
        response => response.json(),
        error => console.log('error', error),
      )
      .then((myJson) => {
        const dir = getPoints(myJson.routes[0]);
        dispatch(fetchDestinationSuccess(endCoordinates, address, dir));
      });
  };
}

const fetchDestinationError = () => (
  {
    type: FETCH_DESTINATION_ERROR,
    payload: { error: true },
  }
);

export const fetchCoordinates = (address: String, pickup: Object) => (
  (dispatch: Function) => {
    dispatch(fetchDestinationRequest);
    return fetchCoordinatesData(address)
      .then((destination) => {
        dispatch(fetchDirections(pickup, destination[0], destination[1]));
      })
      .catch(() => fetchDestinationError());
  }
);

export const fetchAddress = (coordinates: Object, pickup: Object) => (
  (dispatch: Function) => {
    dispatch(fetchDestinationRequest);
    return fetchAddressData(coordinates)
      .then((address) => {
        dispatch(fetchDirections(pickup, coordinates, address));
      })
      .catch(() => fetchDestinationError());
  }
);
