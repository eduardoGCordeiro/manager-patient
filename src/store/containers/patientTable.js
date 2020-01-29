import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PatientTable from '../../components/patientTable';
import * as PatientTableActions from '../actions/patientList';


const mapStateToProps = state => ({
    patient_data: state.patientList
});

const mapDispatchProps = dispatch => bindActionCreators(PatientTableActions, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(PatientTable);