import {ADD_NEW_PATIENT} from '../actions/actionsType';

const INITIAL_STATE = {
    patientForm: {},
    patientList: [],
};

export default function patient(state = INITIAL_STATE, action = {}){

    switch (action.type) {

        case ADD_NEW_PATIENT:
            return {...state};
        
        default: 
            return state;
    }

}
