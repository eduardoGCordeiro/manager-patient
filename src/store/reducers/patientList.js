import {LIST_PATIENTS} from '../actions/actionsType';

const INITIAL_STATE = {
    patientFormData: {}
};

export default function patientList(state = INITIAL_STATE, action = {}){

    switch (action.type) {

        case LIST_PATIENTS:
            return {...state};
        
        default: 
            return state;
    }

}
