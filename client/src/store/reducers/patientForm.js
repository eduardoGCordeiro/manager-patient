import {
    ADD_CHANGES, 
    ADD_ERRORS, 
    CLEAR_DATA, 
    PENDING_REQUEST,
    EDIT_DATA,
    SEND_DATA_SUCCESS,
    SEND_DATA_ERROR, 
    CONFIRM_ALERT
} from '../actions/actionsType';

const INITIAL_STATE = {
    patient_id: '',
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
        address_number: '',
        state: '',
        city: '',
    },
    errors: {
        name_error: false,
        last_name_error: false,
        age_of_birth_error: false,
        phone_error: false,
        email_error: false,
        cpf_error: false,
        identy_error: false,
        zip_code_error: false,
        address_error: false,
        address_number_error: false,
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
        address_number_error_msg: '',
        state_error_msg: '',
        city_error_msg: '',
    },
    send_data_success: false,
    send_data_error: false,
    loading: false,
    patient_exist: false
};

export default function patientForm(state = INITIAL_STATE, action){
    
    switch (action.type) {
        case CLEAR_DATA:
            return {
                ...state,
                patient_id: '',
                patient_form_edit: INITIAL_STATE.patient_form_edit,
                errors: INITIAL_STATE.errors,
                errors_msg: INITIAL_STATE.errors_msg
            };

        case PENDING_REQUEST:
            return {
                ...state,
                loading: action.pending_request
            };
        
        case EDIT_DATA:
            return {
                ...state,
                patient_id: action.data.id,
                patient_form_edit: {
                    ...state.patient_form_edit,
                    name: action.data.name,
                    last_name: action.data.last_name,
                    age_of_birth: action.data.age_of_birth,
                    phone: action.data.phone,
                    email: action.data.email,
                    cpf: action.data.cpf,
                    identy: action.data.identy,
                    zip_code: action.data.zip_code,
                    address: action.data.address,
                    address_number: action.data.address_number,
                    state: action.data.state,
                    city: action.data.city,
                }
            }; 

        case SEND_DATA_SUCCESS:             
            return {
                ...state,
                patient_id: '',
                patient_form_edit: INITIAL_STATE.patient_form_edit,
                errors: INITIAL_STATE.errors,
                errors_msg: INITIAL_STATE.errors_msg,
                send_data_success: true,
                loading: false
            }

        case SEND_DATA_ERROR:             
            return {
                ...state,
                send_data_error: true,
                loading: false
            }

        case CONFIRM_ALERT:
            return {
                ...state,
                [action.field]: action.value
            }

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
        
        default: 
            return state;
    }

}
