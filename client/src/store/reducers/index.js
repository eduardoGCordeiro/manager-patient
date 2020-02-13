import { combineReducers } from 'redux';

import bodyPage from './bodyPage';
import patientForm from './patientForm';
import patientList from './patientList';

export default combineReducers({
    bodyPage,
    patientForm,
    patientList
});