import { connect } from 'react-redux';
import DestinationComponent from '../../components/destination-component/destination-component';
import { fetchCoordinates, chooseDestinationOnMap } from '../../actions/destination-actions';

const mapStateToProps = (state: Object) => ({
  address: state.destination.address,
  pickup: state.directions.pickupCoordinates,
  active: !state.car.booked && !state.destination.chooseOnMap,

});
const mapDispatchToProps = (dispatch: Function) => ({
  onPress: (address, pickup) => dispatch(fetchCoordinates(address, pickup)),
  chooseOnMap: () => dispatch(chooseDestinationOnMap()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DestinationComponent);
