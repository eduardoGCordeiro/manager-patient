import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PatientForm from '../components/patientTable';



const mapStateToProps = state => ({
    patientData: state.patient.patientForm
});

const mapDispatchProps = dispatch => bindActionCreators(PatientFormActions, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(PatientForm);