import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import swal from 'sweetalert';
import '../../style/patientForm.css';

import { Form, Col, ButtonToolbar, Button } from 'react-bootstrap';
import { MIN_AGE_PATIENT, CURRENT_DATE } from '../../constants';

export default class PatientForm extends Component {
  
  /**
   * Handle input control
  */

  handleInputName (value) {
    var letters = /^[A-Za-z]*$/;
    if (value.match(letters)) {
      this.props.addChanges('name', value.toUpperCase());
    }
  }


  handleInputLastName(value) {
    var letters = /^[A-Za-z]*$/;
    if (value.match(letters)) {
      this.props.addChanges('last_name', value.toUpperCase());
    }
  }


  handleInputAgeOfBirth(value) {
    this.props.addChanges('age_of_birth', value);
  }


  handleInputPhone(value) {
    this.props.addChanges('phone', value);
  }


  handleInputEmail(value) {
    this.props.addChanges('email', value);
  }


  handleInputCpf(value) {
    this.props.addChanges('cpf', value);
  }


  handleInputIdenty(value) {
    this.props.addChanges('identy', value);
  }


  handleInputZipCode(value) {
    this.props.addChanges('zip_code', value);
  }


  handleInputAddress(value) {
    var letters = /^[A-Za-z0-9]*$/;
    if (value.match(letters)) {
      this.props.addChanges('address', value.toUpperCase());
    }
  }


  handleInputState(value) {
    var letters = /^[A-Za-z\s]*$/;
    if (value.match(letters)) {
      this.props.addChanges('state', value.toUpperCase());
    }
  }


  handleInputCity(value) {
    var letters = /^[A-Za-z]*$/;
    if (value.match(letters)) {
      this.props.addChanges('city', value.toUpperCase());
    }
  }

  /**
   * Blur input control 
  */

  validateName(value) {
    if(value === ''){
      this.props.addErrors('name_error', true,'Por favor! Insira o nome');
    }else {
      this.props.addErrors('name_error', false, '');
    }
  };


  validateLastName(value) {
    if(value === ''){
      this.props.addErrors('last_name_error', true, 'Por favor! Insira o sobrenome do paciente.');
    }else {
      this.props.addErrors('last_name_error', false, '');
    }
  };


  validateAgeOfBirth(value) {
    if(value === ''){
      this.props.addErrors('age_of_birth_error', true, 'Por favor! Insira a data de nascimento.');
    }else {
      this.props.addErrors('age_of_birth_error', false, '');
    }
  };


  validateEmail(value) {
    let regexValidationEmail = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regexValidationEmail.test(value)){
      this.props.addErrors('email_error', false, '');
    }else {
      this.props.addErrors('email_error', true, 'Por favor! Insira um email válido.');
    }
  };


  validatePhone(value) {
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


  validateCpf(value) {
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


  validateIdenty(value) {
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


  validateZipCode(value) {
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


  validateState(value) {
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


  validateCity(value) {
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


  validateAddress(value) {
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

  /**
   * Submit control
  */

  validateFields(){
    this.validateName(this.props.patient_data.patient_form_edit.name);
    this.validateLastName(this.props.patient_data.patient_form_edit.last_name);
    this.validateAgeOfBirth(this.props.patient_data.patient_form_edit.age_of_birth);
    this.validatePhone(this.props.patient_data.patient_form_edit.phone);
    this.validateEmail(this.props.patient_data.patient_form_edit.email);
    this.validateCpf(this.props.patient_data.patient_form_edit.cpf);
    this.validateIdenty(this.props.patient_data.patient_form_edit.identy);
    this.validateZipCode(this.props.patient_data.patient_form_edit.zip_code);
    this.validateState(this.props.patient_data.patient_form_edit.state);
    this.validateCity(this.props.patient_data.patient_form_edit.city);
    this.validateAddress(this.props.patient_data.patient_form_edit.address);
  }

  submitForm(event){
    event.preventDefault();
    let invalid_fields = false;

    for(let value of Object.values(this.props.patient_data.errors)){
      if(value !== false && value !== ''){
        invalid_fields = true;
      }
    }

    if(invalid_fields){
      swal({
        icon: 'warning',
        title: 'Atenção!',
        text: 'Por favor, verifique os campos em destaque!',
      });
      return false;
    }else {
      //Action save patient data.
      swal({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Os dados foram salvos com sucesso!',
      })
    }
}

  render() {
    return (
      <div>
        <Form onSubmit={(event) => this.submitForm(event)}>
          <Form.Row>
            <Form.Group as={Col} md="3">
              <Form.Label> Nome <label className="required">*</label> </Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o nome do paciente"
                value={this.props.patient_data.patient_form_edit.name}
                onChange={(event) => this.handleInputName(event.target.value)}
                onBlur={(event) => this.validateName(event.target.value)}
                isInvalid={this.props.patient_data.errors.name_error}
              />
              <Form.Control.Feedback type="invalid">{this.props.patient_data.errors_msg.name_error_msg}</Form.Control.Feedback>
            </Form.Group>


            <Form.Group as={Col} md="3">
              <Form.Label> Sobrenome <label className="required">*</label> </Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o sobrenome do paciente"
                value={this.props.patient_data.patient_form_edit.last_name}
                onChange={(event) => this.handleInputLastName(event.target.value)}
                onBlur={(event) => this.validateLastName(event.target.value)}
                isInvalid={this.props.patient_data.errors.last_name_error}
              />
              <Form.Control.Feedback type="invalid">{this.props.patient_data.errors_msg.last_name_error_msg}</Form.Control.Feedback>
            </Form.Group>


            <Form.Group as={Col} md="3">
              <Form.Label> Data de nascimento <label className="required">*</label> </Form.Label>
              <Form.Control
                type="date"
                min={MIN_AGE_PATIENT}
                max={CURRENT_DATE}
                value={this.props.patient_data.patient_form_edit.age_of_birth}
                onChange={(event) => this.handleInputAgeOfBirth(event.target.value)}
                onBlur={(event) => this.validateAgeOfBirth(event.target.value)}
                isInvalid={this.props.patient_data.errors.age_of_birth_error}
              />
              <Form.Control.Feedback type="invalid">{this.props.patient_data.errors_msg.age_of_birth_error_msg}</Form.Control.Feedback>
            </Form.Group>


            <Form.Group as={Col} md="3">
              <Form.Label> Celular <label className="required">*</label> </Form.Label>
              <InputMask 
                placeholder="(__)_____-____"
                className={"form-control placeholder-color-mask " + this.props.patient_data.errors.phone_error}
                mask="(99)99999-9999"
                value={this.props.patient_data.patient_form_edit.phone}
                onChange={(event) => this.handleInputPhone(event.target.value)}
                onBlur={(event) => this.validatePhone(event.target.value)}
              />
              <Form.Control.Feedback type="invalid">{this.props.patient_data.errors_msg.phone_error_msg}</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
          <Form.Group as={Col} md="3">
              <Form.Label> E-mail <label className="required"></label> </Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o e-mail do paciente"
                defaultValue={this.props.patient_data.patient_form_edit.email}
                onChange={(event) => this.handleInputEmail(event.target.value)}
                onBlur={(event) => this.validateEmail(event.target.value)}
                isInvalid={this.props.patient_data.errors.email_error}
              />
              <Form.Control.Feedback type="invalid">{this.props.patient_data.errors_msg.email_error_msg}</Form.Control.Feedback>
            </Form.Group>


            <Form.Group as={Col} md="2">
              <Form.Label> CPF <label className="required">*</label> </Form.Label>
              <InputMask 
                placeholder="___.___.___-__"
                className={"form-control placeholder-color-mask " + this.props.patient_data.errors.cpf_error}
                mask="999.999.999-99"
                value={this.props.patient_data.patient_form_edit.cpf}
                onChange={(event) => this.handleInputCpf(event.target.value)}
                onBlur={(event) => this.validateCpf(event.target.value)}
              />
              <Form.Control.Feedback type="invalid">{this.props.patient_data.errors_msg.cpf_error_msg}</Form.Control.Feedback>
            </Form.Group>


            <Form.Group as={Col} md="2">
              <Form.Label> Identidade <label className="required">*</label> </Form.Label>
              <InputMask 
                placeholder="__.___.___-_"
                className={"form-control placeholder-color-mask " + this.props.patient_data.errors.identy_error}
                mask="99.999.999-9"
                value={this.props.patient_data.patient_form_edit.identy}
                onChange={(event) => this.handleInputIdenty(event.target.value)}
                onBlur={(event) => this.validateIdenty(event.target.value)}
              />
              <Form.Control.Feedback type="invalid">{this.props.patient_data.errors_msg.identy_error_msg}</Form.Control.Feedback>
            </Form.Group>


            <Form.Group as={Col} md="2">
              <Form.Label> CEP <label className="required">*</label> </Form.Label>
              <InputMask 
                placeholder="_____-___"
                className={"form-control placeholder-color-mask " + this.props.patient_data.errors.zip_code_error}
                mask="99999-999"
                value={this.props.patient_data.patient_form_edit.zip_code}
                onChange={(event) => this.handleInputZipCode(event.target.value)}
                onBlur={(event) => this.validateZipCode(event.target.value)}
              />
              <Form.Control.Feedback type="invalid">{this.props.patient_data.errors_msg.zip_code_error_msg}</Form.Control.Feedback>
            </Form.Group>


            <Form.Group as={Col} md="3">
              <Form.Label> Estado <label className="required">*</label> </Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o estado do paciente"
                value={this.props.patient_data.patient_form_edit.state}
                onChange={(event) => this.handleInputState(event.target.value)}
                onBlur={(event) => this.validateState(event.target.value)}
                isInvalid={this.props.patient_data.errors.state_error}
              />
              <Form.Control.Feedback type="invalid">{this.props.patient_data.errors_msg.state_error_msg}</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="3">
              <Form.Label> Cidade <label className="required">*</label> </Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira a cidade do paciente"
                value={this.props.patient_data.patient_form_edit.city}
                onChange={(event) => this.handleInputCity(event.target.value)}
                onBlur={(event) => this.validateCity(event.target.value)}
                isInvalid={this.props.patient_data.errors.city_error}
              />
              <Form.Control.Feedback type="invalid">{this.props.patient_data.errors_msg.city_error_msg}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4">
              <Form.Label> Endereço <label className="required">*</label> </Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o endereço do paciente"
                value={this.props.patient_data.patient_form_edit.address}
                onChange={(event) => this.handleInputAddress(event.target.value)}
                onBlur={(event) => this.validateAddress(event.target.value)}
                isInvalid={this.props.patient_data.errors.address_error}
              />
              <Form.Control.Feedback type="invalid">{this.props.patient_data.errors_msg.address_error_msg}</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>


          <ButtonToolbar className="d-flex justify-content-center">
            <Button type="submit" variant="success" className="mr-1" onClick={() => this.validateFields()}>
              Salvar
            </Button>
            <Button type="button" variant="secondary" onClick={() => this.props.clearData()}>
              Cancelar
            </Button>
          </ButtonToolbar>


        </Form>
      </div>
    );
  };
};
