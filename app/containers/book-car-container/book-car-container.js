import { connect } from 'react-redux';
import BookCarComponent from '../../components/book-car-component/book-car-component';
// import { fetchAddress } from '../../actions/input-address-actions';
// import { getBestCar } from '../../actions/car-actions';

const mapStateToProps = (state: Object) => ({
  active: state.directions.destinationCoordinates !== null &&
    !state.inputAddress.active && !state.inputAddress.chooseOnMap,
});

//
// const mapDispatchToProps = (dispatch: Function) => ({
//   getCar: (cars, pickup, mustGetNewCar) => dispatch(getBestCar(cars, pickup, mustGetNewCar)),
// });

export default connect(mapStateToProps)(BookCarComponent);
// mapDispatchToProps,
