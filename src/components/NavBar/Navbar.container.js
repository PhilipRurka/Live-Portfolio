import NavBar from './NavBar';
import { connect } from 'react-redux';

const mapToStateToProps = ({
  currentLocation,
  history
}) => ({
  currentLocation,
  history
});

export default connect(
  mapToStateToProps
) (NavBar);