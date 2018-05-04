import { SET_ADDRESS, FETCH_COORDINATES_SUCCESS } from '../actions/action-types';

const initialState = {
  address: '',
};

const addressReducer = (state: Object = initialState, action: Object) => {
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
    default:
      return state;
  }
};

export default addressReducer;
