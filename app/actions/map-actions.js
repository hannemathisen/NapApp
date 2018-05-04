import { SET_REGION, FETCH_LOCATION_ERROR, FETCH_LOCATION_REQUEST } from './action-types';

/* global navigator */

export const setRegion = (region: Object) => ({
  type: SET_REGION,
  payload: { region },
});

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
        dispatch(setRegion(region));
      },
      (error) => {
        dispatch(fetchLocationError);
      },
    );
  }
);
