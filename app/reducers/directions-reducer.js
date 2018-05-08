import { FETCH_DESTINATION_SUCCESS, SET_PICKUP } from '../actions/action-types';

const initialState = {
  route: [],
  color: 'red',
  pickupCoordinates: {
    latitude: 63,
    longitude: 10,
  },
  destinationCoordinates: null,
};

const directionsReducer = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case FETCH_DESTINATION_SUCCESS:
      return {
        ...state,
        route: action.payload.directions,
      };
    case SET_PICKUP:
      return {
        ...state,
        pickupCoordinates: action.payload.coordinates,
      };
    default:
      return state;
  }
};

export default directionsReducer;
