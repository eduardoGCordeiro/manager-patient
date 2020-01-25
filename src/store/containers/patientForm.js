import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PatientForm from '../../components/patientForm';
import * as PatientFormActions from '../actions/patientForm';

const mapStateToProps = state => ({
    patient_data: state.patientForm,
});

const mapDispatchProps = dispatch => bindActionCreators(PatientFormActions, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(PatientForm);