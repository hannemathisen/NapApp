import { CANCEL_RIDE, BOOK_RIDE } from './action-types';

export const cancelRide = () => (
  {
    type: CANCEL_RIDE,
    payload: {},
  }
);

export const bookRide = () => (
  {
    type: BOOK_RIDE,
    payload: {},
  }
);
