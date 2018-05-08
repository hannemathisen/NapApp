import { connect } from 'react-redux';
import ButtonComponent from '../../components/button-component/button-component';
import { fetchAddress } from '../../actions/destination-actions';
import { getBestCar } from '../../actions/car-actions';

const mapStateToProps = (state: Object) => ({
  pickupCoordinates: state.directions.pickupCoordinates,
  destinationCoordinates: {
    latitude: state.map.region.latitude,
    longitude: state.map.region.longitude,
  },
  active: state.destination.chooseOnMap,
  cars: state.carList.cars,
  mustGetNewCar: state.directions.pickupChanged,
});

const mapDispatchToProps = (dispatch: Function) => ({
  getAddress: (destinationCoordinates, pickupCoordinates) =>
    dispatch(fetchAddress(destinationCoordinates, pickupCoordinates)),
  getCar: (cars, pickupCoordinates) => dispatch(getBestCar(cars, pickupCoordinates)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ButtonComponent);
