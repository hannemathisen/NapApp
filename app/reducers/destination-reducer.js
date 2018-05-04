import { SET_ADDRESS, FETCH_COORDINATES_SUCCESS, CHOOSE_DESTINATION_ON_MAP } from '../actions/action-types';

const initialState = {
  address: '',
  coordinate: null,
  chooseOnMap: false,
};

const destinationReducer = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload.address,
      };
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
    default:
      return state;
  }
};

export default destinationReducer;
