import NavItem from './NavItem';
import { connect } from 'react-redux';

const mapToStateToProps = ({
  currentLocation
}) => ({
  currentLocation
});

export default connect(
  mapToStateToProps
) (NavItem);