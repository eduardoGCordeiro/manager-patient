import {
  ADD_CHANGES, 
  ADD_ERRORS, 
  CLEAR_DATA, 
  SAVE_DATA,
  EDIT_DATA, 
  SEND_DATA_SUCCESS,
  SEND_DATA_ERROR,
  CONFIRM_ALERT
} from '../actions/actionsType';

import * as ValidationsForm from '../../validations/patientForm';

export function clearData(){
  return {
    type: CLEAR_DATA
  }
};


export function saveData(){
  return {
    type: SAVE_DATA
  }
};


export function editData(data){
  return {
    type: EDIT_DATA,
    data: data
  }
};


export function confirmAlert(field, value){
  return {
    type: CONFIRM_ALERT,
    field: field,
    value: value
  }
};


export function validateForm(data){
  return (dispatch, getState) => {
    dispatch(addErrors(ValidationsForm.validateName(data.name)));
    dispatch(addErrors(ValidationsForm.validateLastName(data.last_name)));
    dispatch(addErrors(ValidationsForm.validateAgeOfBirth(data.age_of_birth))); 
    dispatch(addErrors(ValidationsForm.validatePhone(data.phone)));
    dispatch(addErrors(ValidationsForm.validateEmail(data.email)));
    dispatch(addErrors(ValidationsForm.validateCpf(data.cpf)));
    dispatch(addErrors(ValidationsForm.validateIdenty(data.identy)));
    dispatch(addErrors(ValidationsForm.validateZipCode(data.zip_code)));
    dispatch(addErrors(ValidationsForm.validateState(data.state)));
    dispatch(addErrors(ValidationsForm.validateCity(data.city)));
    dispatch(addErrors(ValidationsForm.validateAddress(data.address)));
    dispatch(addErrors(ValidationsForm.validateAddressNumber(data.address_number)));

    dispatch(checkErrors(getState()));
  }
};


export function checkErrors(data){
  return (dispatch, getState) => {
    
    let invalid_fields = false;

    for(let value of Object.values(data.patientForm.errors)){
      if(value === true){
        invalid_fields = true;
      }
    }

    if(!invalid_fields){
      dispatch(sendData(getState()));
    }
  }
}


export function sendData(data){
  return dispatch => {
    if(data.patientForm.patient_id === ''){
      dispatch(fetchSaveData(data));
    }else {
      dispatch(fetchEditData(data));
    }
  }
};


export function sendDataSuccess(){
  return {
    type: SEND_DATA_SUCCESS
  };
};


export function sendDataError(){
  return {
    type: SEND_DATA_ERROR
  };
};


export function addChanges(name_field, value_field){
  return {
    type: ADD_CHANGES,
    field: name_field,
    value: value_field,
  };
};


export function addErrors(data){
  return {
    type: ADD_ERRORS,
    field_error: data.field,
    field_error_msg: data.field + '_msg',
    value_error: data.error,
    value_error_msg: data.msg_error
  };
};


export function fetchSaveData(data) {
  return dispatch => {
      dispatch(saveData());
      fetch('https://ybht24vw4a.execute-api.us-east-2.amazonaws.com/Patient-Manager/patient-manager', {
          method: 'POST',     
          headers: {
              'x-api-key': 'jsxcKzoEKCag5Ix4dt88F46ZOizynbtN8LHoAJjH',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data.patientForm.patient_form_edit)
      }).then(response => response.json())
        .then(response => {
          if( response.errorType || response.statusCode === 500){
              throw (response);
          }
          dispatch(sendDataSuccess());
        })
        .catch(error => {
          dispatch(sendDataError());
        })
  }
};


export function fetchEditData(patient_id, data) {
  return dispatch => {
      dispatch(saveData());
      fetch('https://ybht24vw4a.execute-api.us-east-2.amazonaws.com/Patient-Manager/patient-manager/' + patient_id, {
          method: 'PUT',     
          headers: {
              'x-api-key': 'jsxcKzoEKCag5Ix4dt88F46ZOizynbtN8LHoAJjH',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data.patientForm.patient_form_edit)
      }).then(response => response.json())
        .then(response => {
          if( response.errorType || response.statusCode === 500){
              throw (response);
          }
          dispatch(sendDataSuccess());
        })
        .catch(error => {
          dispatch(sendDataError());
        })
  }
};