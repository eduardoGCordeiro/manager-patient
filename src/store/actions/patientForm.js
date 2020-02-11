import {
  ADD_CHANGES, 
  ADD_ERRORS, 
  ADD_NEW_PATIENT, 
  CLEAR_DATA, 
  SAVE_DATA,
  EDIT_DATA, 
  SEND_DATA_SUCCESS,
  SEND_DATA_ERROR,
  CONFIRM_ALERT
} from '../actions/actionsType';


export function clearData(){
  return {
    type: CLEAR_DATA
  }
}


export function saveData(){
  return {
    type: SAVE_DATA
  }
}


export function editData(data){
  return {
    type: EDIT_DATA,
    data: data
  }
}


export function confirmAlert(field, value){
  return {
    type: CONFIRM_ALERT,
    field: field,
    value: value
  }
}

export function sendDataSuccess(){
  return {
    type: SEND_DATA_SUCCESS
  }
}


export function sendDataError(){
  return {
    type: SEND_DATA_ERROR
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


export function fetchSaveData(data) {
  return dispatch => {
      dispatch(saveData());
      fetch('https://ybht24vw4a.execute-api.us-east-2.amazonaws.com/Patient-Manager/patient-manager', {
          method: 'POST',     
          headers: {
              'x-api-key': 'jsxcKzoEKCag5Ix4dt88F46ZOizynbtN8LHoAJjH',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
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
          body: JSON.stringify(data)
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