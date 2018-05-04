import { connect } from 'react-redux';
import DestinationComponent from '../../components/destination-component/destination-component';
import { fetchCoordinates, chooseDestinationOnMap } from '../../actions/destination-actions';

const mapStateToProps = (state: Object) => ({
  address: state.destination.address,
  coordinates: state.destination.coordinates,
});

const mapDispatchToProps = (dispatch: Function) => ({
  onPress: address => dispatch(fetchCoordinates(address)),
  chooseOnMap: () => dispatch(chooseDestinationOnMap()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DestinationComponent);
