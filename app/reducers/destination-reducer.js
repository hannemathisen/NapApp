import {
  FETCH_COORDINATES_SUCCESS,
  FETCH_ADDRESS_SUCCESS,
  CHOOSE_DESTINATION_ON_MAP,
} from '../actions/action-types';

const initialState = {
  address: '',
  coordinates: null,
  chooseOnMap: false,
};

const destinationReducer = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case FETCH_COORDINATES_SUCCESS:
      return {
        ...state,
        address: action.payload.address,
        coordinates: action.payload.coordinates,
      };
    case CHOOSE_DESTINATION_ON_MAP:
      return {
        ...state,
        chooseOnMap: true,
      };
    case FETCH_ADDRESS_SUCCESS:
      return {
        ...state,
        address: action.payload.address,
        coordinates: action.payload.coordinates,
        chooseOnMap: false,
      };
    default:
      return state;
  }
};

export default destinationReducer;
