import { connect } from 'react-redux';
import InfoComponent from '../../components/info-component/info-component';

const mapStateToProps = (state: Object) => ({
  active: state.destination.coordinates !== null,
  destinationAddress: state.destination.address,
  pickupAddress: state.directions.pickupAddress,
  time: 'tid',
});

export default connect(mapStateToProps)(InfoComponent);
