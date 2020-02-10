import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BodyPage from '../../components/bodyPage';
import { clearData } from '../actions/patientForm';

const mapStateToProps = state => ({
    state: {}
});

const mapDispatchProps = dispatch => bindActionCreators({clearData}, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(BodyPage);