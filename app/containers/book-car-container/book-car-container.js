import { connect } from 'react-redux';
import BookCarComponent from '../../components/book-car-component/book-car-component';
import { cancelRide, bookRide } from '../../actions/book-car-actions';

const mapStateToProps = (state: Object) => ({
  active: state.directions.destinationCoordinates !== null &&
    !state.inputAddress.active &&
    !state.inputAddress.chooseOnMap &&
    !state.carList.carBooked,
});


const mapDispatchToProps = (dispatch: Function) => ({
  cancelRide: () => dispatch(cancelRide()),
  bookRide: () => dispatch(bookRide()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookCarComponent);
