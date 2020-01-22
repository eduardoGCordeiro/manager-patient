import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PatientForm from '../components/patientForm';
import * as PatientFormActions from '../store/actions/patientForm';

const mapStateToProps = state => ({
    patientData: {}
});

const mapDispatchProps = dispatch => bindActionCreators(PatientFormActions, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(PatientForm);