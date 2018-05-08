import {
  SET_REGION,
  SET_PICKUP,
  FETCH_LOCATION_ERROR,
  FETCH_LOCATION_REQUEST,
  FETCH_CARS_REQUEST,
  FETCH_CARS_ERROR,
  FETCH_CARS_SUCCESS,
} from './action-types';
import { fetchCarsData } from '../services/http-requests';

/* global navigator */

export const setRegion = (region: Object) => (
  {
    type: SET_REGION,
    payload: { region },
  }
);

export const setPickup = (coordinates: Object) => (
  {
    type: SET_PICKUP,
    payload: { coordinates },
  }
);

const fetchLocationError = () => (
  {
    type: FETCH_LOCATION_ERROR,
    payload: { error: true },
  }
);

const fetchLocationRequest = () => (
  {
    type: FETCH_LOCATION_REQUEST,
    payload: { isLoading: true },
  }
);

export const fetchLocation = () => (
  (dispatch: Function) => {
    dispatch(fetchLocationRequest);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        };
        const coordinates = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        dispatch(setRegion(region));
        dispatch(setPickup(coordinates));
      },
      (error) => {
        dispatch(fetchLocationError);
      },
    );
  }
);

const fetchCarsError = () => (
  {
    type: FETCH_CARS_ERROR,
    payload: { error: true },
  }
);

const fetchCarsRequest = () => (
  {
    type: FETCH_CARS_REQUEST,
    payload: { isLoading: true },
  }
);

const fetchCarsSuccess = (cars: Array) => (
  {
    type: FETCH_CARS_SUCCESS,
    payload: { cars },
  }
);

export const fetchCars = () => (
  (dispatch: Function) => {
    dispatch(fetchCarsRequest);
    return fetchCarsData()
      .then(cars => dispatch(fetchCarsSuccess(cars)))
      .catch(() => dispatch(fetchCarsError()));
  }
);
