import NavBar from './NavBar';
import { connect } from 'react-redux';
import { toggleMobileBubble } from '../../redux/actions';

const mapToStateToProps = ({
  currentLocation,
  history,
  mobileBubble
}) => ({
  currentLocation,
  history,
  mobileBubble
});

const mapDispatchToProps = (dispatch) => ({
  toggleMobileBubble: (payload) => dispatch(toggleMobileBubble(payload))
});

export default connect(
  mapToStateToProps,
  mapDispatchToProps
) (NavBar);