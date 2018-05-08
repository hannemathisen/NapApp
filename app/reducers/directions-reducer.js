import { FETCH_DESTINATION_SUCCESS, FETCH_BEST_CAR_SUCCESS, SET_PICKUP } from '../actions/action-types';

const initialState = {
  routeToPickup: [],
  routeToDestination: [],
  color: 'red',
  pickupCoordinates: {
    latitude: 63,
    longitude: 10,
  },
  destinationCoordinates: null,
  pickupChanged: false,
};

const directionsReducer = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case FETCH_DESTINATION_SUCCESS:
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
    case SET_PICKUP:
      return {
        ...state,
        pickupCoordinates: action.payload.coordinates,
        pickupChanged: true,
      };
    default:
      return state;
  }
};

export default directionsReducer;
