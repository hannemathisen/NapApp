import { FETCH_LOCATION_ERROR, FETCH_LOCATION_REQUEST, FETCH_LOCATION_SUCCESS } from './action-types';
import { setRegion } from './map-actions';

/* global navigator */

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


const fetchLocationSuccess = (regionInfo: Object) => (
  {
    type: FETCH_LOCATION_SUCCESS,
    payload: { regionInfo },
  }
);

export const fetchLocation = () => (
  (dispatch: Function) => {
    console.log('fetch');
    dispatch(fetchLocationRequest);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        };
        dispatch(fetchLocationSuccess(region));
        dispatch(setRegion(region));
      },
      (error) => {
        dispatch(fetchLocationError);
      },
    );
  }
);
