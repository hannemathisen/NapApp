import { connect } from 'react-redux';
import ButtonComponent from '../../components/button-component/button-component';
import { fetchAddress } from '../../actions/destination-actions';

const mapStateToProps = (state: Object) => ({
  coordinates: {
    latitude: state.map.region.latitude,
    longitude: state.map.region.longitude,
  },
  active: state.destination.chooseOnMap,
});

const mapDispatchToProps = (dispatch: Function) => ({
  onPress: coordinates => dispatch(fetchAddress(coordinates)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ButtonComponent);
