import {ADD_NEW_PATIENT} from '../actions/actionsType';

export function submitForm(newPatient){
  console.log(newPatient);
  return {
    type: ADD_NEW_PATIENT,
    newPatient: newPatient
  };
}
