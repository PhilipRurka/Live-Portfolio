import Pages from './Pages';
import { connect } from 'react-redux';
import { updateCurrentLocation, updateHistory } from '../../redux/actions';

// const mapToStateToProps = ({ currentLocation }) => ({ currentLocation });

const mapDispatchToProps = (dispatch) => ({
  updateCurrentLocation: (payload) => dispatch(updateCurrentLocation(payload)),
  updateHistory: (payload) => dispatch(updateHistory(payload))
});

export default connect(
  null,
  // mapToStateToProps,
  mapDispatchToProps
) (Pages);