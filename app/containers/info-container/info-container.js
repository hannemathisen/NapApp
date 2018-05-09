import { connect } from 'react-redux';
import InfoComponent from '../../components/info-component/info-component';

// returns time in s seconds from now, format hh:mm
function formatTime(seconds) {
  const newSeconds = Date.now().valueOf() + (seconds * 1000);
  const date = new Date(newSeconds);
  const formattedTime = date.toString().substr(16, 5);
  return formattedTime;
}

const mapStateToProps = (state: Object) => ({
  active: state.destination.coordinates !== null,
  destinationAddress: state.destination.address,
  pickupAddress: state.directions.pickupAddress,
  destinationTime: formatTime(state.directions.timeToPickup + state.directions.timeToDestination),
  pickupTime: formatTime(state.directions.timeToPickup),
});

export default connect(mapStateToProps)(InfoComponent);
