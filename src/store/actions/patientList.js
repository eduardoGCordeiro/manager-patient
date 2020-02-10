import {
    LIST_PATIENTS, 
    DELETE_DATA,
    DELETE_DATA_PENDING,
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


export function editData(patient){
  return {
    type: EDIT_DATA,
    patient: patient
  }
}


export function deleteData(){
  return {
    type: DELETE_DATA,
  }
}


export function deleteDataPending(patient){
  return {
    type: DELETE_DATA_PENDING,
    patient: patient
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


export function fetchPatients() {
  return dispatch => {
      dispatch(listPatients());
      fetch('https://ybht24vw4a.execute-api.us-east-2.amazonaws.com/Patient-Manager/patient-manager', {
          method: 'GET',
          headers: {
              'x-api-key': 'jsxcKzoEKCag5Ix4dt88F46ZOizynbtN8LHoAJjH'
          }
      }).then(response => response.json())
        .then(response => {
          if( response.errorType || response.statusCode === 500){
              throw (response);
          }
          dispatch(listPatientsSuccess(response.body));
        })
        .catch(error => {
          dispatch(listPatientsError());
        })
  }
};


export function deletePatient(patient_id) {
  return dispatch => {
      dispatch(deleteData());
      fetch('https://ybht24vw4a.execute-api.us-east-2.amazonaws.com/Patient-Manager/patient-manager/' + patient_id, {
          method: 'DELETE',
          headers: {
              'x-api-key': 'jsxcKzoEKCag5Ix4dt88F46ZOizynbtN8LHoAJjH',
              'Content-Type': 'application/json'
          }
      }).then(response => response.json())
        .then(response => {
          console.log(response);
          if( response.errorType || response.statusCode === 500){
              throw (response);
          }
          dispatch(fetchPatients());
          dispatch(deleteDataSuccess());
        })
        .catch(error => {
          dispatch(deleteDataError());
        })
  }
};