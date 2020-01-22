import * as PatientFormBlur from './patientFormBlur';

export function submitForm(event, patientData){
    event.preventDefault();
    console.log(event.target.elements);
    return false;
    PatientFormBlur.validateName(patientData.name)
    PatientFormBlur.validateLastName(patientData.last_name)
    PatientFormBlur.validatePhone(patientData.phone)
    PatientFormBlur.validateEmail(patientData.email)
    PatientFormBlur.validateCpf(patientData.cpf)
    PatientFormBlur.validateIdenty(patientData.identy)
    PatientFormBlur.validateZipCode(patientData.zip_code)
    PatientFormBlur.validateState(patientData.state)
    PatientFormBlur.validateCity(patientData.city)
    PatientFormBlur.validateAddress(patientData.address)

    let validation_fields = true;

    patientData.forEach((input) => {
        console.log(input);
    })
    return false;
}