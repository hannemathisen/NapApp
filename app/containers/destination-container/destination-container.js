import { connect } from 'react-redux';
import DestinationComponent from '../../components/destination-component/destination-component';
import { fetchCoordinates, chooseDestinationOnMap } from '../../actions/destination-actions';
import { getBestCar } from '../../actions/car-actions';

const mapStateToProps = (state: Object) => ({
  address: state.destination.address,
  pickup: state.directions.pickupCoordinates,
  active: !state.car.booked && !state.destination.chooseOnMap,
  cars: state.carList.cars,
  mustGetNewCar: state.directions.pickupChanged,

});
const mapDispatchToProps = (dispatch: Function) => ({
  getCoordinates: (address, pickup) => dispatch(fetchCoordinates(address, pickup)),
  getCar: (cars, pickup) => dispatch(getBestCar(cars, pickup)),
  chooseOnMap: () => dispatch(chooseDestinationOnMap()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DestinationComponent);
