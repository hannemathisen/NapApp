import { connect } from 'react-redux';
import DirectionsComponent from '../../components/directions-component/directions-component';

const mapStateToProps = (state: Object) => ({
  directions: state.directions.routeToPickup.concat(state.directions.routeToDestination),
});

export default connect(mapStateToProps)(DirectionsComponent);
