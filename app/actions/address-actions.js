import { SET_ADDRESS } from './action-types';

export const setAddress = (address: String) => ({
  type: SET_ADDRESS,
  payload: { address },
});
