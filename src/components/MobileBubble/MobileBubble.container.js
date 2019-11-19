import MobileBubble from './MobileBubble';
import { connect } from 'react-redux';
import { toggleMobileBubble } from '../../redux/actions';

const mapToStateToProps = ({
  mobileBubble,
  currentLocation
}) => ({
  mobileBubble,
  currentLocation
});

const mapDispatchToProps = (dispatch) => ({
  toggleMobileBubble: (payload) => dispatch(toggleMobileBubble(payload))
});

export default connect(
  mapToStateToProps,
  mapDispatchToProps
) (MobileBubble);