import Polyline from '@mapbox/polyline';
import {
  FETCH_DIRECTIONS_REQUEST,
  FETCH_DIRECTIONS_SUCCESS,
  FETCH_DIRECTIONS_ERROR,
} from './action-types';
import API_KEY from '../lib/config';


const fetchDirectionsRequest = () => (
  {
    type: FETCH_DIRECTIONS_REQUEST,
    payload: { isLoading: true },
  }
);

const fetchDirectionsSuccess = (directions: Object) => (
  {
    type: FETCH_DIRECTIONS_SUCCESS,
    payload: { directions },
  }
);

const fetchDirectionsError = () => (
  {
    type: FETCH_DIRECTIONS_ERROR,
    payload: { error: true },
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
export function fetchDirections(startCoordinates: Object, endCoordinates: Object) {
  console.log('her');
  return function (dispatch) {
    dispatch(fetchDirectionsRequest());
    const start = `${63.419043},${10.293847}`;
    const end = `${endCoordinates.latitude},${endCoordinates.longitude}`;
    return fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${start}&destination=${end}&key=${API_KEY}`)
      .then(
        response => response.json(),
        error => console.log('error', error),
      )
      .then((myJson) => {
        const dir = getPoints(myJson.routes[0]);
        dispatch(fetchDirectionsSuccess(dir));
      });
  };
}
