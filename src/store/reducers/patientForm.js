import {ADD_CHANGES, ADD_ERRORS, ADD_NEW_PATIENT, CLEAR_DATA} from '../actions/actionsType';

const INITIAL_STATE = {
    loading: false,
    patient_form_edit: {
        name: '',
        last_name: '',
        age_of_birth: '',
        phone: '',
        email: '',
        cpf: '',
        identy: '',
        zip_code: '',
        address: '',
        state: '',
        city: '',
    },
    errors: {
        name_error: false,
        last_name_error: false,
        age_of_birth_error: false,
        phone_error: '',
        email_error: false,
        cpf_error: '',
        identy_error: '',
        zip_code_error: '',
        address_error: false,
        state_error: false,
        city_error: false,
    },
    errors_msg: {
        name_error_msg: '',
        last_name_error_msg: '',
        age_of_birth_error_msg: '',
        phone_error_msg: '',
        email_error_msg: '',
        cpf_error_msg: '',
        identy_error_msg: '',
        zip_code_error_msg: '',
        address_error_msg: '',
        state_error_msg: '',
        city_error_msg: '',
    }

};

export default function patientForm(state = INITIAL_STATE, action){
    switch (action.type) {

        case CLEAR_DATA:
            return {
                ...state,
                patient_form_edit: INITIAL_STATE.patient_form_edit,
                errors: INITIAL_STATE.errors,
                errors_msg: INITIAL_STATE.errors_msg
            };

        case ADD_CHANGES:
            return {
                ...state, 
                patient_form_edit: {
                    ...state.patient_form_edit,
                    [action.field]: action.value
                } 
            };

        case ADD_ERRORS:
            return {
                ...state, 
                errors: {
                    ...state.errors,
                    [action.field_error]: action.value_error
                }, 
                errors_msg: {
                    ...state.errors_msg,
                    [action.field_error_msg]: action.value_error_msg
                } 
            };    

        case ADD_NEW_PATIENT:
            return {...state};
        
        default: 
            return state;
    }

}
