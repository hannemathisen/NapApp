import { connect } from 'react-redux';
import MapComponent from '../../components/map-component/map-component';
import { setRegion, fetchLocation } from '../../actions/map-actions';

const mapStateToProps = (state: Object) => ({
  region: state.map.region,
});

const mapDispatchToProps = (dispatch: Function) => ({
  onRegionChange: region => dispatch(setRegion(region)),
  fetchLocation: () => dispatch(fetchLocation()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MapComponent);
