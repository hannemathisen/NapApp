import { SET_FAKE_MARKER } from './action-types';

export const setFakeMarker = (coordinates: Object) => (
  {
    type: SET_FAKE_MARKER,
    payload: { coordinates },
  }
);
