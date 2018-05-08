import { connect } from 'react-redux';
import ButtonComponent from '../../components/button-component/button-component';
import { fetchAddress } from '../../actions/destination-actions';

const mapStateToProps = (state: Object) => ({
  pickupCoordinates: state.directions.pickupCoordinates,
  destinationCoordinates: {
    latitude: state.map.region.latitude,
    longitude: state.map.region.longitude,
  },
  active: state.destination.chooseOnMap,
});

const mapDispatchToProps = (dispatch: Function) => ({
  onPress: (destinationCoordinates, pickupCoordinates) =>
    dispatch(fetchAddress(destinationCoordinates, pickupCoordinates)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ButtonComponent);
