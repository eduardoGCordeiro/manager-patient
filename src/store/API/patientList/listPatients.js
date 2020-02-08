import {listPatients, listPatientsSuccess, listPatientsError} from '../../actions/patientList';

export default function fetchPatients() {
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