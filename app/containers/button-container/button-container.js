import { connect } from 'react-redux';
import ButtonComponent from '../../components/button-component/button-component';
import { fetchLocation } from '../../actions/button-actions';

const mapStateToProps = (state: Object) => ({
  text: state.button.text,
});

const mapDispatchToProps = (dispatch: Function) => ({
  fetchLocation: () => dispatch(fetchLocation()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ButtonComponent);
