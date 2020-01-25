import {ADD_CHANGES, ADD_ERRORS, ADD_NEW_PATIENT} from '../actions/actionsType';

const INITIAL_STATE = {
    patientFormEdit: {
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

        case ADD_CHANGES:
            return {
                ...state, 
                patientFormEdit: {
                    ...state.patientFormEdit,
                    [action.field]: action.value
                } 
            }

        case ADD_ERRORS:
            return {
                ...state, 
                errors: {
                    ...state.errors,
                    [action.field_error]: action.value_error,
                    [action.field_error_msg]: action.value_error_msg
                } 
            }    

        case ADD_NEW_PATIENT:
            return {...state};
        
        default: 
            return state;
    }

}
