import { SET_FAKE_MARKER } from '../actions/action-types';

const initialState = {
  coordinates: null,
  text: 'OK',
};

const buttonReducer = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case SET_FAKE_MARKER:
      return {
        ...state,
        coordinates: action.payload.coordinates,
      };
    default:
      return state;
  }
};

export default buttonReducer;
