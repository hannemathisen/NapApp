import {
  FETCH_DIRECTIONS_SUCCESS,
  FETCH_BEST_CAR_SUCCESS,
  FETCH_ADDRESS_SUCCESS,
  FETCH_PICKUP_SUCCESS,
  CANCEL_RIDE,
  RIDE_FINISHED,
} from '../actions/action-types';

const initialState = {
  routeToPickup: [],
  timeToPickup: 0,
  pickupCoordinates: {
    latitude: 63,
    longitude: 10,
  },
  pickupAddress: '',
  pickupChanged: false,
  routeToDestination: [],
  timeToDestination: 0,
  destinationCoordinates: null,
  destinationAddress: '',
};

const directionsReducer = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case FETCH_DIRECTIONS_SUCCESS:
      return {
        ...state,
        routeToDestination: action.payload.directions,
        timeToDestination: action.payload.duration,
        destinationAddress: action.payload.address,
        destinationCoordinates: action.payload.coordinates,
      };
    case FETCH_BEST_CAR_SUCCESS:
      return {
        ...state,
        routeToPickup: action.payload.directions,
        timeToPickup: action.payload.duration,
        pickupChanged: false,
      };
    case FETCH_ADDRESS_SUCCESS:
      return {
        ...state,
        pickupCoordinates: action.payload.coordinates,
        pickupAddress: action.payload.address,
        pickupChanged: true,
      };
    case FETCH_PICKUP_SUCCESS:
      return {
        ...state,
        pickupCoordinates: action.payload.coordinates,
        pickupAddress: action.payload.address,
        pickupChanged: true,
      };
    case CANCEL_RIDE:
      return {
        ...state,
        routeToDestination: [],
        timeToDestination: 0,
        destinationCoordinates: null,
        destinationAddress: '',
      };
    case RIDE_FINISHED:
      return {
        ...state,
        routeToDestination: [],
        timeToDestination: 0,
        destinationCoordinates: null,
        destinationAddress: '',
      };
    default:
      return state;
  }
};

export default directionsReducer;
