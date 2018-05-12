import {
  FETCH_CARS_ERROR,
  FETCH_CARS_REQUEST,
  FETCH_CARS_SUCCESS,
  FETCH_BEST_CAR_ERROR,
  FETCH_BEST_CAR_REQUEST,
  FETCH_BEST_CAR_SUCCESS,
  CANCEL_RIDE,
  BOOK_RIDE,
} from '../actions/action-types';

const initialState = {
  cars: [],
  isLoading: false,
  error: false,
  reservedCar: null,
  carBooked: false,
};

const carListReducer = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case FETCH_CARS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_CARS_ERROR: {
      return {
        ...state,
        error: true,
      };
    }
    case FETCH_CARS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: false,
        cars: action.payload.cars,
      };
    }
    case FETCH_BEST_CAR_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_BEST_CAR_ERROR: {
      return {
        ...state,
        error: true,
      };
    }
    case FETCH_BEST_CAR_SUCCESS: {
      return {
        ...state,
        reservedCar: action.payload.car,
        isLoading: false,
        error: false,
      };
    }
    case CANCEL_RIDE: {
      return {
        ...state,
        reservedCar: null,
      };
    }
    case BOOK_RIDE:
      return {
        ...state,
        carBooked: true,
      };
    default:
      return state;
  }
};

export default carListReducer;
