import { connect } from 'react-redux';
import RideInfoComponent from '../../components/ride-info-component/ride-info-component';

// returns time in s seconds from now, format hh:mm
function formatTime(seconds) {
  const newSeconds = Date.now().valueOf() + (seconds * 1000);
  const date = new Date(newSeconds);
  const formattedTime = date.toString().substr(16, 5);
  return formattedTime;
}

const mapStateToProps = (state: Object) => ({
  active: state.carList.carBooked,
  pickupTime: formatTime(state.directions.timeToPickup),
  destinationTime: formatTime(state.directions.timeToPickup + state.directions.timeToDestination),
});

export default connect(mapStateToProps)(RideInfoComponent);
