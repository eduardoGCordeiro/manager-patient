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

import * as ValidationsForm from '../../utils/validationPatientForm';

export function clearData(){
  return {
    type: CLEAR_DATA
  }
};


export function pendingRequest(pending_request){
  return {
    type: PENDING_REQUEST,
    pending_request: pending_request 
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
      dispatch(verifyPatientExist(getState()));
    }
  }
};


export function patientNotExist(){
  return (dispatch, getState) => {
      dispatch(sendData(getState()));
  }
};


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
          dispatch(fetchSaveDataLocal(response));
        })
        .catch(error => {
          dispatch(sendDataError());
        })
  }
};


export function fetchSaveDataLocal(data) {
  return dispatch => {
      fetch('http://localhost:5000/patient', {
          method: 'POST',     
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      }).then(response => response.json())
        .then(response => {
          if( response.error){
              throw (response);
          }
          dispatch(sendDataSuccess());
        })
        .catch(error => {
          dispatch(sendDataError());
        })
  }
};


export function fetchEditData(data) {
  return dispatch => {
      fetch('https://ybht24vw4a.execute-api.us-east-2.amazonaws.com/Patient-Manager/patient-manager/' + data.patientForm.patient_id, {
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
          dispatch(fetchEditDataLocal(data));
        })
        .catch(error => {
          dispatch(sendDataError());
        })
  }
};


export function fetchEditDataLocal(data) {
  return dispatch => {
      fetch('http://localhost:5000/patient/' + data.patientForm.patient_id, {
          method: 'PUT',     
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data.patientForm.patient_form_edit)
      }).then(response => response.json())
        .then(response => {
          if( response.error){
              throw (response);
          }
          dispatch(sendDataSuccess());
        })
        .catch(error => {
          dispatch(sendDataError());
        })
  }
};


export function verifyPatientExist(data) {
  return dispatch => {
      
      dispatch(pendingRequest(true));

      fetch('https://ybht24vw4a.execute-api.us-east-2.amazonaws.com/Patient-Manager/patient-manager/' + data.patientForm.patient_form_edit.cpf, {
          method: 'GET',     
          headers: {
              'x-api-key': 'jsxcKzoEKCag5Ix4dt88F46ZOizynbtN8LHoAJjH',
              'Content-Type': 'application/json'
          }
      }).then(response => response.json())
        .then(response => {
          if( response.errorType || response.statusCode === 500 ){
              throw (response);
          }else {
            if(response.patient.length === 0){
              dispatch(patientNotExist());
            }else {
              if(response.patient.length === 1){
                if( data.patientForm.patient_id !== '' && response.patient[0].id === data.patientForm.patient_id){
                  dispatch(patientNotExist());      
                }else {
                  dispatch(addErrors({field: 'cpf_error', error: true, msg_error: 'Paciente já cadastrado, por favor verifique o cpf.'}));    
                  dispatch(pendingRequest(false));
                }
              }else {
                dispatch(addErrors({field: 'cpf_error', error: true, msg_error: 'Paciente já cadastrado, por favor verifique o cpf.'}));    
                dispatch(pendingRequest(false));
              }
            }
          }
        })
        .catch(error => {
          dispatch(sendDataError());
        })
  }
};