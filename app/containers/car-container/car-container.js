import { connect } from 'react-redux';
import CarComponent from '../../components/car-component/car-component';
// import { fetchCoordinates, chooseDestinationOnMap } from '../../actions/destination-actions';

const mapStateToProps = (state: Object) => ({
  coordinates: state.car.coordinates,
  // id: state.car.id,
  regNr: state.car.regNr,
});

// const mapDispatchToProps = (dispatch: Function) => ({
// });

export default connect(mapStateToProps)(CarComponent);
// mapDispatchToProps,
