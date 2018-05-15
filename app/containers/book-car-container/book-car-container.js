import { connect } from 'react-redux';
import BookCarComponent from '../../components/book-car-component/book-car-component';
import { cancelRide, bookRide, driveCar } from '../../actions/book-car-actions';

const mapStateToProps = (state: Object) => ({
  active: state.directions.destinationCoordinates !== null &&
    !state.inputAddress.active &&
    !state.inputAddress.chooseOnMap &&
    !state.carList.carBooked,
  directions: state.directions.routeToPickup.concat(state.directions.routeToDestination),
  car: state.carList.reservedCar,
});


const mapDispatchToProps = (dispatch: Function) => ({
  cancelRide: () => dispatch(cancelRide()),
  bookRide: () => dispatch(bookRide()),
  driveCar: (directions, car, i) => dispatch(driveCar(directions, car, i)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookCarComponent);
