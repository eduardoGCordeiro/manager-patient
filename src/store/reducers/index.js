import { combineReducers } from 'redux';

import patientForm from './patientForm';
import patientList from './patientList';

export default combineReducers({
    patientForm,
    patientList
});