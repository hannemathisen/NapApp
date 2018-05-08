import { connect } from 'react-redux';
import DirectionsComponent from '../../components/directions-component/directions-component';
// import { fetchDirections } from '../../actions/directions-actions';

const mapStateToProps = (state: Object) => ({
  directions: state.directions.routeToPickup.concat(state.directions.routeToDestination),
  color: state.directions.color,
  pickupCoordinates: state.directions.pickupCoordinates,
  destinationCoordinates: state.destination.coordinates,
});

// const mapDispatchToProps = (dispatch: Function) => ({
//   getDirections: (pickupCoordinates, destinationCoordinates) =>
//     dispatch(fetchDirections(pickupCoordinates, destinationCoordinates)),
// });

export default connect(mapStateToProps)(DirectionsComponent);
// mapDispatchToProps,
