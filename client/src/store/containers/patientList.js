import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import patientList from '../../components/patientList';
import * as patientListActions from '../actions/patientList';

const mapStateToProps = state => ({
    patient_data: state.patientList
});

const mapDispatchProps = dispatch => bindActionCreators(patientListActions, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(patientList);