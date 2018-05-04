import { connect } from 'react-redux';
import AddressComponent from '../../components/address-component/address-component';
import { fetchCoordinates } from '../../actions/address-actions';

const mapStateToProps = (state: Object) => ({
  address: state.address.address,
  coordinates: state.address.coordinates,
});

const mapDispatchToProps = (dispatch: Function) => ({
  onPress: address => dispatch(fetchCoordinates(address)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressComponent);
