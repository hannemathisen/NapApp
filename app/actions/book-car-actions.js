import { CANCEL_RIDE, BOOK_RIDE, MOVE_CAR } from './action-types';
import { setCarPosition } from './car-actions';

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

const moveCar = (car: Object) => (
  {
    type: MOVE_CAR,
    payload: { car },
  }
);

export function driveCar(directions: Array, car: Object, i: Number) {
  return (dispatch: Function) => {
    if (directions.length === 0) {
      dispatch(setCarPosition(car));
      return;
    }
    const dir = [...directions];
    const next = dir.shift();

    let newi = i;
    setTimeout(() => {
      const newCar = {
        id: car.id,
        coordinate: {
          latitude: next.latitude,
          longitude: next.longitude,
        },
        regNr: car.regNr,
      };
      dispatch(moveCar(newCar));
      dispatch(driveCar(dir, newCar, newi += 1));
    }, 200);
  };
}
