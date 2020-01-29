import {ADD_CHANGES, ADD_ERRORS, ADD_NEW_PATIENT, CLEAR_DATA} from '../actions/actionsType';


export function clearData(){
  return {
    type: CLEAR_DATA
  }
}


export function addChanges(name_field, value_field){
  return {
    type: ADD_CHANGES,
    field: name_field,
    value: value_field,
  };
}


export function addErrors(name_field, value_field, msg){
  return {
    type: ADD_ERRORS,
    field_error: name_field,
    field_error_msg: name_field+'_msg',
    value_error: value_field,
    value_error_msg: msg
  };
}


export function submitForm(newPatient){
  return {
    type: ADD_NEW_PATIENT,
    newPatient: newPatient
  };
}
