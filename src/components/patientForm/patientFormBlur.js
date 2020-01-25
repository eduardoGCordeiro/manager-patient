export function validateName(value) {
  if(value === ''){
    this.props.addErrors('name_error', true,'Por favor! Insira o nome');
  }else {
    this.props.addErrors('name_error', false, '');
  }
};


export function validateLastName(value) {
  if(value === ''){
    this.props.addErrors('last_name_error', true, 'Por favor! Insira o sobrenome do paciente.');
  }else {
    this.props.addErrors('last_name_error', false, '');
  }
};


export function validateAgeOfBirth(value) {
  if(value === ''){
    this.props.addErrors('age_of_birth_error', true, 'Por favor! Insira a data de nascimento.');
  }else {
    this.props.addErrors('age_of_birth_error', false, '');
  }
};


export function validateEmail(value) {
  let regexValidationEmail = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(regexValidationEmail.test(value)){
    this.props.addErrors('email_error', false, '');
  }else {
    this.props.addErrors('email_error', true, 'Por favor! Insira um email válido.');
  }
};


export function validatePhone(value) {
  if(value === ''){
    this.props.addErrors('phone_error', 'is-invalid', 'Por favor! Insira o número.');
  }else {
    if(value.includes('_')){
      this.props.addErrors('phone_error', 'is-invalid', 'Por favor! Insira um número válido.');
    }else {
      this.props.addErrors('phone_error', '', '');
    }
  }
};


export function validateCpf(value) {
  if(value === ''){
    this.props.addErrors('cpf_error', 'is-invalid', 'Por favor! Insira o cpf.');
  }else {
    if(value.includes('_')){
      this.props.addErrors('cpf_error', 'is-invalid', 'Por favor! Insira um cpf válido.');
    }else {
      this.props.addErrors('cpf_error', '', '');
    }
  }
};


export function validateIdenty(value) {
  if(value === ''){
    this.props.addErrors('identy_error', 'is-invalid', 'Por favor! Insira a identidade.');
  }else {
    if(value.includes('_')){
      this.props.addErrors('identy_error', 'is-invalid', 'Por favor! Insira uma identidade válida.');
    }else {
      this.props.addErrors('identy_error', '', '');
    }
  }
}


export function validateZipCode(value) {
    if(value === ''){
      this.props.addErrors('zip_code_error', 'is-invalid', 'Por favor! Insira o cep.');
    }else {
      if(value.includes('_')){
        this.props.addErrors('zip_code_error', 'is-invalid', 'Por favor! Insira um cep válido.');
      }else {
        this.props.addErrors('zip_code_error', '', '');
      }
    }
}


export function validateState(value) {
    if(value === ''){
      this.props.addErrors('state_error', true, 'Por favor! Insira o estado.');
    }else {
      if(value.includes('_')){
        this.props.addErrors('state_error', true, 'Por favor! Insira um estado válido.');
      }else {
        this.props.addErrors('state_error', false, '');
      }
    }
}


export function validateCity(value) {
    if(value === ''){
      this.props.addErrors('city_error', true, 'Por favor! Insira a cidade.');
    }else {
      if(value.includes('_')){
        this.props.addErrors('city_error', true, 'Por favor! Insira uma cidade válida.');
      }else {
        this.props.addErrors('city_error', false, '');
      }
    }
}


export function validateAddress(value) {
  if(value === ''){
    this.props.addErrors('address_error', true, 'Por favor! Insira o endereço.');
  }else {
    if(value.includes('_')){
      this.props.addErrors('address_error', true, 'Por favor! Insira um endereço válido.');
    }else {
      this.props.addErrors('address_error', false, '');
    }
  }
}