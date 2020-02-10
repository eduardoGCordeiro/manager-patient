import {
    LIST_PATIENTS, 
    DELETE_DATA,
    DELETE_DATA_PENDING,
    DELETE_DATA_SUCCESS,
    DELETE_DATA_ERROR,
    LIST_PATIENTS_SUCCESS,
    LIST_PATIENTS_ERROR,
    CONFIRM_ALERT
} from '../actions/actionsType';

const INITIAL_STATE = {
    patient_list: [],
    patient_delete: '',
    patient_delete_success: false,
    patient_delete_warning: false, 
    patient_delete_error: false,
    patient_get_error: false,
    loading: false
};

export default function patientList(state = INITIAL_STATE, action){

    switch (action.type) {

        case DELETE_DATA:
            return {
                ...state,
                patient_delete_warning: false,
                loading: true
            }
        
        case DELETE_DATA_PENDING:
            return {
                ...state,
                patient_delete: action.patient,
                patient_delete_warning: true
            }

        case DELETE_DATA_SUCCESS:
            return{
                ...state,
                patient_delete_success: true,
                loading:  false
            }

        case DELETE_DATA_ERROR:
            return{
                ...state,
                patient_delete_error: true,
                loading: false
            }

        case CONFIRM_ALERT:
            return{
                ...state,
                [action.field]: action.value
            }

        case LIST_PATIENTS:
            return {
                ...state,
                loading: true
            };

        case LIST_PATIENTS_SUCCESS:
            return {
                ...state,
                patient_list: action.data,
                loading: false
            }
        
        case LIST_PATIENTS_ERROR:
            return {
                ...state,
                patient_get_error: true,
                loading: false
            }

        default: 
            return state;
    }

}
