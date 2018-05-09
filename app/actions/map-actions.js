import {
  SET_REGION,
  FETCH_LOCATION_ERROR,
  FETCH_LOCATION_REQUEST,
  FETCH_CARS_REQUEST,
  FETCH_CARS_ERROR,
  FETCH_CARS_SUCCESS,
  FETCH_ADDRESS_REQUEST,
  FETCH_ADDRESS_SUCCESS,
  FETCH_ADDRESS_ERROR,
} from './action-types';
import { fetchCarsData, fetchAddressData } from '../services/http-requests';

/* global navigator */

export const setRegion = (region: Object) => (
  {
    type: SET_REGION,
    payload: { region },
  }
);

export const fetchAddressSuccess = (coordinates: Object, address: String) => (
  {
    type: FETCH_ADDRESS_SUCCESS,
    payload: { coordinates, address },
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

const fetchAddressRequest = () => (
  {
    type: FETCH_ADDRESS_REQUEST,
    payload: { isLoading: true },
  }
);

const fetchAddressError = () => (
  {
    type: FETCH_ADDRESS_ERROR,
    payload: { error: true },
  }
);

const fetchAddress = (coordinates: Object) => (
  (dispatch: Function) => {
    dispatch(fetchAddressRequest());
    return fetchAddressData(coordinates)
      .then((address) => {
        dispatch(fetchAddressSuccess(coordinates, address));
      })
      .catch(() => dispatch(fetchAddressError()));
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
        dispatch(fetchAddress(coordinates));
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
