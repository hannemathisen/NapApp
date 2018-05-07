import {
  FETCH_COORDINATES_REQUEST,
  FETCH_COORDINATES_SUCCESS,
  FETCH_COORDINATES_ERROR,
  FETCH_ADDRESS_REQUEST,
  FETCH_ADDRESS_SUCCESS,
  FETCH_ADDRESS_ERROR,
  CHOOSE_DESTINATION_ON_MAP,
} from './action-types';
import { fetchCoordinatesData, fetchAddressData } from '../services/http-requests';

const fetchCoordinatesRequest = () => (
  {
    type: FETCH_COORDINATES_REQUEST,
    payload: { isLoading: true },
  }
);

const fetchCoordinatesSuccess = (coordinates: Object, address: Object) => (
  {
    type: FETCH_COORDINATES_SUCCESS,
    payload: { coordinates, address },
  }
);

const fetchCoordinatesError = () => (
  {
    type: FETCH_COORDINATES_ERROR,
    payload: { error: true },
  }
);

export const fetchCoordinates = (address: String) => (
  (dispatch: Function) => {
    dispatch(fetchCoordinatesRequest);
    return fetchCoordinatesData(address)
      .then(destination => dispatch(fetchCoordinatesSuccess(destination[0], destination[1])))
      .catch(() => fetchCoordinatesError());
  }
);

export const chooseDestinationOnMap = () => (
  {
    type: CHOOSE_DESTINATION_ON_MAP,
    payload: {},
  }
);

const fetchAddressRequest = () => (
  {
    type: FETCH_ADDRESS_REQUEST,
    payload: { isLoading: true },
  }
);

const fetchAddressSuccess = (coordinates: Object, address: Object) => (
  {
    type: FETCH_ADDRESS_SUCCESS,
    payload: { coordinates, address },
  }
);

const fetchAddressError = () => (
  {
    type: FETCH_ADDRESS_ERROR,
    payload: { error: true },
  }
);

export const fetchAddress = (coordinates: Object) => (
  (dispatch: Function) => {
    dispatch(fetchAddressRequest);
    return fetchAddressData(coordinates)
      .then(address => dispatch(fetchAddressSuccess(coordinates, address)))
      .catch(() => fetchAddressError());
  }
);

// const fetchDirectionsRequest = () => (
//   {
//     type: FETCH_DIRECTIONS_REQUEST,
//     payload: { isLoading: true },
//   }
// );
//
// const fetchDirectionsSuccess = (directions: Object) => (
//   {
//     type: FETCH_DIRECTIONS_SUCCESS,
//     payload: { directions },
//   }
// );
//
// const fetchDirectionsError = () => (
//   {
//     type: FETCH_DIRECTIONS_ERROR,
//     payload: { error: true },
//   }
// );
//
// export const fetchDirections = (address: String) => (
//   (dispatch: Function) => {
//     dispatch(fetchDirectionsRequest);
//
//   }
// );
