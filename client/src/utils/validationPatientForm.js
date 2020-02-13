import calculateDifferenceDate from '../utils/calculateDifferenceDate';

export function validateName(value) {
    if(value === ''){
      return {field: 'name_error', error: true, msg_error: 'Por favor, insira o nome'};
    }else {
      return {field: 'name_error', error: false, msg_error: ''};
    }
};


export function validateLastName(value) {
  if(value === ''){
    return {field: 'last_name_error', error: true, msg_error: 'Por favor, insira o sobrenome do paciente.'};
  }else {
    return {field: 'last_name_error', error: false, msg_error: ''};
  }
};


export function validateAgeOfBirth(value) {
  if(value === ''){
    return {field: 'age_of_birth_error', error: true, msg_error: 'Por favor, insira a data de nascimento.'};
  }else {
    if(value.includes('_')){
      return {field: 'age_of_birth_error', error: true, msg_error: 'Por favor, insira uma data válida.'};
    }else {
      
      let age_of_birth = new Date(value);
  
      if(age_of_birth > new Date()){
        return {field: 'age_of_birth_error', error: true, msg_error: 'Por favor, menor que a data atual.'};
      }else {
        if(calculateDifferenceDate(age_of_birth) > 150){
          return {field: 'age_of_birth_error', error: true, msg_error: 'Por favor, selecione uma data de no mínimo 150 anos atrás.'};
        }else {
          return {field: 'age_of_birth_error', error: false, msg_error:''};
        }
      }
    }
  }
};


export function validateEmail(value) {
  let regex_validation_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(value !== ''){
    if(regex_validation_email.test(value)){
      return {field: 'email_error', error: false, msg_error: ''};
    }else {
      return {field: 'email_error', error: true, msg_error: 'Por favor, insira um email válido.'};
    }
  }else {
    return {field: 'email_error', error: false, msg_error: ''};
  }
};


export function validatePhone(value) {
  if(value === ''){
    return {field: 'phone_error', error: true, msg_error: 'Por favor, insira o número.'};
  }else {
    if(value.includes('_')){
      return {field: 'phone_error', error: true, msg_error: 'Por favor, insira um número válido.'};
    }else {
      return {field: 'phone_error', error: false, msg_error: ''};
    }
  }
};


export function validateCpf(value) {
  if(value === ''){
    return {field: 'cpf_error', error: true, msg_error: 'Por favor, insira o cpf.'};
  }else {
    if(value.includes('_')){
      return {field: 'cpf_error', error: true, msg_error: 'Por favor, insira um cpf válido.'};
    }else {
      return {field: 'cpf_error', error: false, msg_error: ''};
    }
  }
};


export function validateIdenty(value) {
  if(value === ''){
    return {field: 'identy_error', error: true, msg_error: 'Por favor, insira a identidade.'};
  }else {
    if(value.includes('_')){
      return {field: 'identy_error', error: true, msg_error: 'Por favor, insira uma identidade válida.'};
    }else {
      return {field: 'identy_error', error: false, msg_error: ''};
    }
  }
};


export function validateZipCode(value) {
    if(value === ''){
      return {field: 'zip_code_error', error: true, msg_error: 'Por favor, insira o cep.'};
    }else {
      if(value.includes('_')){
        return {field: 'zip_code_error', error: true, msg_error: 'Por favor, insira um cep válido.'};
      }else {
        return {field: 'zip_code_error', error: false, msg_error: ''};
      }
    }
};


export function validateState(value) {
    if(value === ''){
      return {field: 'state_error', error: true, msg_error: 'Por favor, insira o estado.'};
    }else {
      if(value.includes('_')){
        return {field: 'state_error', error: true, msg_error: 'Por favor, insira um estado válido.'};
      }else {
        return {field: 'state_error', error: false, msg_error: ''};
      }
    }
};


export function validateCity(value) {
    if(value === ''){
      return {field: 'city_error', error: true, msg_error: 'Por favor, insira a cidade.'};
    }else {
      if(value.includes('_')){
        return {field: 'city_error', error: true, msg_error: 'Por favor, insira uma cidade válida.'};
      }else {
        return {field: 'city_error', error: false, msg_error: ''};
      }
    }
};


export function validateAddress(value) {
  let regex_validation_address = /^[\pL\pM\p{Zs}.-]+$/;
  if(value === ''){
    return {field: 'address_error', error: true, msg_error: 'Por favor, insira o endereço.'};
  }else {
    if(regex_validation_address.test(value)){
      return {field: 'address_error', error: true, msg_error: 'Por favor, insira um endereço válido.'};
    }else {
      return {field: 'address_error', error: false, msg_error: ''};
    }
  }
};


export function validateAddressNumber(value) {
  if(value === ''){
    return {field: 'address_number_error', error: true, msg_error: 'Por favor, insira o número do endereço.'};
  }else {
    return {field: 'address_number_error', error: false, msg_error: ''};
  }
};