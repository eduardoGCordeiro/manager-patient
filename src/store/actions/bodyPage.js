import { CHANGE_PAGE } from './actionsType';
import { clearData } from '../actions/patientForm';
import { fetchPatients } from '../actions/patientList';

export function changePage(page) {
    return {
        type: CHANGE_PAGE,
        page: page
    }
}

export function navigation(page) {
    return dispatch => {
        dispatch(changePage(page));

        if(page === 'patient-form') {
            dispatch(clearData());
        }else {
            dispatch(fetchPatients());
        }
    }
}