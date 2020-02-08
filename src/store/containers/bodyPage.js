import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BodyPage from '../../components/bodyPage';
import { clearData } from '../actions/patientForm';
import fetchPatients from '../API/patientList/listPatients.js';

const mapStateToProps = state => ({
    state: {}
});

const mapDispatchProps = dispatch => bindActionCreators({clearData, fetchPatients}, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(BodyPage);