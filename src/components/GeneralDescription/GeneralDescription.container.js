import GeneralDescription from './GeneralDescription';
import { connect } from 'react-redux';

const mapToStateToProps = ({ history }) => ({ history });

export default connect(
  mapToStateToProps
) (GeneralDescription);