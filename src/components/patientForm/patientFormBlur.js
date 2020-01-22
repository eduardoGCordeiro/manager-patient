export function validateName(value) {
  if(value === ''){
    this.setState({name_error: true, name_error_msg: 'Por favor! Insira o nome'});
  }else {
    this.setState({name_error: false});
  }
};


export function validateLastName(value) {
  if(value === ''){
    this.setState({last_name_error: true, last_name_error_msg: 'Por favor! Insira o sobrenome do paciente.'});
  }else {
    this.setState({last_name_error: false});
  }
};


export function validateAgeOfBirth(value) {
  if(value === ''){
    this.setState({age_of_birth_error: true, age_of_birth_error_msg: 'Por favor! Insira a data de nascimento.'});
  }else {
    this.setState({age_of_birth_error: false});
  }
};


export function validateEmail(value) {
  let regexValidationEmail = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(regexValidationEmail.test(value)){
    this.setState({ email: value, email_error: false});
  }else {
    this.setState({email_error: true, email_error_msg: 'Por favor! Insira um email válido.'}); 
  }
};


export function validatePhone(value) {
  if(value === ''){
    this.setState({phone_error: 'is-invalid', phone_error_msg: 'Por favor! Insira o número.'});
  }else {
    if(value.includes('_')){
      this.setState({phone_error: 'is-invalid', phone_error_msg: 'Por favor! Insira um número válido.'});
    }else {
      this.setState({phone_error: ''});
    }
  }
};


export function validateCpf(value) {
  if(value === ''){
    this.setState({cpf_error: 'is-invalid', cpf_error_msg: 'Por favor! Insira o cpf.'});
  }else {
    if(value.includes('_')){
      this.setState({cpf_error: 'is-invalid', cpf_error_msg: 'Por favor! Insira um cpf válido.'});
    }else {
      this.setState({cpf_error: ''});
    }
  }
};


export function validateIdenty(value) {
  if(value === ''){
    this.setState({identy_error: 'is-invalid', identy_error_msg: 'Por favor! Insira a identidade.'});
  }else {
    if(value.includes('_')){
      this.setState({identy_error: 'is-invalid', identy_error_msg: 'Por favor! Insira uma identidade válida.'});
    }else {
      this.setState({identy_error: ''});
    }
  }
}


export function validateZipCode(value) {
    if(value === ''){
      this.setState({zip_code_error: 'is-invalid', zip_code_error_msg: 'Por favor! Insira o cep.'});
    }else {
      if(value.includes('_')){
        this.setState({zip_code_error: 'is-invalid', zip_code_error_msg: 'Por favor! Insira um cep válido.'});
      }else {
        this.setState({zip_code_error: ''});
      }
    }
}


export function validateState(value) {
    if(value === ''){
      this.setState({state_error: true, state_error_msg: 'Por favor! Insira o estado.'});
    }else {
      if(value.includes('_')){
        this.setState({state_error: true, state_error_msg: 'Por favor! Insira um estado válido.'});
      }else {
        this.setState({state_error: false});
      }
    }
}


export function validateCity(value) {
    if(value === ''){
      this.setState({city_error: true, city_error_msg: 'Por favor! Insira a cidade.'});
    }else {
      if(value.includes('_')){
        this.setState({city_error: true, city_error_msg: 'Por favor! Insira uma cidade válida.'});
      }else {
        this.setState({city_error: false});
      }
    }
}


export function validateAddress(value) {
  if(value === ''){
    this.setState({address_error: true, address_error_msg: 'Por favor! Insira o endereço.'});
  }else {
    if(value.includes('_')){
      this.setState({address_error: true, address_error_msg: 'Por favor! Insira um endereço válido.'});
    }else {
      this.setState({address_error: false});
    }
  }
}