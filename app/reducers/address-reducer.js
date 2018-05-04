import { SET_ADDRESS } from '../actions/action-types';

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
    default:
      return state;
  }
};

export default addressReducer;
