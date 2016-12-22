import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { reset } from '../actions';

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(reset());
  },
});

const Navigation = connect(
  null,
  mapDispatchToProps,
)(Navbar);

export default Navigation;
