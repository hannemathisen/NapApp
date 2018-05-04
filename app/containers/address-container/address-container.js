import { connect } from 'react-redux';
import AddressComponent from '../../components/address-component/address-component';
import { setAddress } from '../../actions/address-actions';

const mapStateToProps = (state: Object) => ({
  address: state.address.address,
});

const mapDispatchToProps = (dispatch: Function) => ({
  onPress: region => dispatch(setAddress(region)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressComponent);
