import NavBar from './NavBar';
import { connect } from 'react-redux';
import {
  updateCurrentLocation,
  updateLocation
} from '../../redux/actions';

const mapToStateToProps = ({
  currentLocation,
  history
}) => ({
  currentLocation,
  history
});

const mapDispatchToProps = (dispatch) => ({
  updateCurrentLocation: (payload) => dispatch(updateCurrentLocation(payload)),
  updateLocation: (payload) => dispatch(updateLocation(payload))
});

export default connect(
  mapToStateToProps,
  mapDispatchToProps
) (NavBar);