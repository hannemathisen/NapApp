import { FETCH_BEST_CAR_REQUEST, FETCH_BEST_CAR_SUCCESS, FETCH_BEST_CAR_ERROR, CAR_POSITION_SET } from './action-types';
// import API_KEY from '../lib/config';
import { fetchBestCar, setCarBooking } from '../services/http-requests';
import { fetchCars } from './map-actions';

const fetchBestCarRequest = () => (
  {
    type: FETCH_BEST_CAR_REQUEST,
    payload: { isLoading: true },
  }
);

const fetchBestCarSuccess = (car: Object, directions: Array, duration: Number) => (
  {
    type: FETCH_BEST_CAR_SUCCESS,
    payload: { car, directions, duration },
  }
);

const fetchBestCarError = () => (
  {
    type: FETCH_BEST_CAR_ERROR,
    payload: { error: true },
  }
);

const carPositionSet = () => (
  {
    type: CAR_POSITION_SET,
    payload: {},
  }
);

export const getBestCar = (available: Array, pickup: Object, mustGetNewCar: Boolean) => (
  (dispatch: Function) => {
    if (mustGetNewCar) {
      dispatch(fetchBestCarRequest());
      return fetchBestCar(available, pickup)
        .then(car => dispatch(fetchBestCarSuccess(car[0], car[1], car[2])))
        .catch(() => dispatch(fetchBestCarError()));
    }
    return null;
  }
);

export const setCarPosition = (car: Object) => (
  (dispatch: Function) => setCarBooking(0, car)
    .then(() => dispatch(carPositionSet()))
    .then(() => dispatch(fetchCars()))
);
