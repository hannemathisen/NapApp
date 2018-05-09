import { FETCH_DIRECTIONS_SUCCESS, FETCH_BEST_CAR_SUCCESS, FETCH_ADDRESS_SUCCESS } from '../actions/action-types';

const initialState = {
  routeToPickup: [],
  routeToDestination: [],
  pickupCoordinates: {
    latitude: 63,
    longitude: 10,
  },
  pickupAddress: '',
  pickupChanged: false,
};

const directionsReducer = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case FETCH_DIRECTIONS_SUCCESS:
      return {
        ...state,
        routeToDestination: action.payload.directions,
      };
    case FETCH_BEST_CAR_SUCCESS:
      return {
        ...state,
        routeToPickup: action.payload.directions,
        pickupChanged: false,
      };
    case FETCH_ADDRESS_SUCCESS:
      return {
        ...state,
        pickupCoordinates: action.payload.coordinates,
        pickupAddress: action.payload.address,
        pickupChanged: true,
      };
    default:
      return state;
  }
};

export default directionsReducer;
