import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PatientTable from '../../components/patientTable';
import * as PatientListActions from '../actions/patientForm';

const mapStateToProps = state => ({
    patient_data: state.patientList,
});

const mapDispatchProps = dispatch => bindActionCreators(PatientListActions, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(PatientTable);