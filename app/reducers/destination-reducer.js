import {
  FETCH_DESTINATION_SUCCESS,
  CHOOSE_DESTINATION_ON_MAP,
} from '../actions/action-types';

const initialState = {
  address: '',
  coordinates: null,
  chooseOnMap: false,
};

const destinationReducer = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case FETCH_DESTINATION_SUCCESS:
      return {
        ...state,
        address: action.payload.address,
        coordinates: action.payload.coordinates,
        chooseOnMap: false,
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
