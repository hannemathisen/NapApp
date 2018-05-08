import { FETCH_BEST_CAR_REQUEST, FETCH_BEST_CAR_SUCCESS, FETCH_BEST_CAR_ERROR } from './action-types';
// import API_KEY from '../lib/config';
import { fetchBestCar } from '../services/http-requests';

const fetchBestCarRequest = () => (
  {
    type: FETCH_BEST_CAR_REQUEST,
    payload: { isLoading: true },
  }
);

const fetchBestCarSuccess = (car: Object, directions: Array) => (
  {
    type: FETCH_BEST_CAR_SUCCESS,
    payload: { car, directions },
  }
);

const fetchBestCarError = () => (
  {
    type: FETCH_BEST_CAR_ERROR,
    payload: { error: true },
  }
);


export const getBestCar = (available: Array, pickup: Object) => (
  (dispatch: Function) => {
    dispatch(fetchBestCarRequest());
    return fetchBestCar(available, pickup)
      .then(car => dispatch(fetchBestCarSuccess(car[0], car[1])))
      .catch(() => dispatch(fetchBestCarError()));
  }
);
