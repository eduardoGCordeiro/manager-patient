import {
    CHANGE_PAGE
} from '../actions/actionsType';

const INITIAL_STATE = {
    page: 'patient-form'
};

export default function patientList(state = INITIAL_STATE, action){

    switch (action.type) {

        case CHANGE_PAGE:
            return {
                ...state,
                page: action.page
            }

        default: 
            return state;
    }

}
