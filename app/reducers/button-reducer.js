import {
  FETCH_LOCATION_ERROR,
  FETCH_LOCATION_REQUEST,
  FETCH_LOCATION_SUCCESS,
} from '../actions/action-types';

const initialState = {
  isLoading: false,
  error: true,
  region: null,
  text: 'Click here',
};

const buttonReducer = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case FETCH_LOCATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        region: action.payload.regionInfo,
      };
    case FETCH_LOCATION_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
        error: false,
      });
    case FETCH_LOCATION_ERROR: {
      return Object.assign({}, state, {
        isLoading: false,
        error: true,
      });
    }
    default:
      return state;
  }
};

export default buttonReducer;
