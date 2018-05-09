import {
  FETCH_DIRECTIONS_SUCCESS,
  CHOOSE_DESTINATION_ON_MAP,
  CHANGE_ADDRESS,
  FETCH_PICKUP_SUCCESS,
} from '../actions/action-types';

const initialState = {
  type: 'Destination',
  chooseOnMap: false,
  active: true,
};

const inputAddressReducer = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case FETCH_DIRECTIONS_SUCCESS:
      return {
        ...state,
        chooseOnMap: false,
        active: false,
      };
    case CHOOSE_DESTINATION_ON_MAP:
      return {
        ...state,
        chooseOnMap: true,
        active: false,
      };
    case CHANGE_ADDRESS:
      return {
        ...state,
        type: action.payload.type,
        active: true,
      };
    case FETCH_PICKUP_SUCCESS:
      return {
        ...state,
        active: false,
      };
    default:
      return state;
  }
};

export default inputAddressReducer;
