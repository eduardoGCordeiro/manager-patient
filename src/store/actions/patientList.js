import {
    LIST_PATIENTS, 
    DELETE_DATA,
    DELETE_DATA_SUCCESS,
    DELETE_DATA_ERROR,
    LIST_PATIENTS_SUCCESS,
    LIST_PATIENTS_ERROR,
    CONFIRM_ALERT, 
    EDIT_DATA
} from '../actions/actionsType';

export function listPatients(){
  return {
    type: LIST_PATIENTS,
  };
}


export function confirmAlert(field, value){
  return {
    type: CONFIRM_ALERT,
    field: field,
    value: value
  }
}


export function editData(){
  return {
    type: EDIT_DATA
  }
}


export function deleteData(){
  return {
    type: DELETE_DATA
  }
}


export function deleteDataSuccess(){
  return {
    type: DELETE_DATA_SUCCESS,
  }
}


export function deleteDataError(){
  return {
    type: DELETE_DATA_ERROR,
  }
}


export function listPatientsSuccess(data){
  return {
    type: LIST_PATIENTS_SUCCESS,
    data: data
  }
}


export function listPatientsError(){
  return {
    type: LIST_PATIENTS_ERROR,
  }
}