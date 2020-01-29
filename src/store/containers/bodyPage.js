import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BodyPage from '../../components/bodyPage';
import * as PatientForm from '../actions/patientForm';

const mapStateToProps = state => ({
    body_state: state
});

const mapDispatchProps = dispatch => bindActionCreators(PatientForm, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(BodyPage);