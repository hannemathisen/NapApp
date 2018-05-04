import { connect } from 'react-redux';
import ButtonComponent from '../../components/button-component/button-component';
import { setFakeMarker } from '../../actions/button-actions';

const mapStateToProps = (state: Object) => ({
  text: state.button.text,
  coordinates: {
    latitude: state.map.region.latitude,
    longitude: state.map.region.longitude,
  },
});

const mapDispatchToProps = (dispatch: Function) => ({
  onPress: coordinates => dispatch(setFakeMarker(coordinates)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ButtonComponent);
