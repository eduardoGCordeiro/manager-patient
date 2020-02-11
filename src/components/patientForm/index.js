import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import SweetAlert from 'react-bootstrap-sweetalert';
import '../../style/patientForm.css';

import { Form, Col, ButtonToolbar, Button, Spinner } from 'react-bootstrap';
import { MIN_AGE_PATIENT, CURRENT_DATE } from '../../constants';


export default class PatientForm extends Component {
  
  /**** Funções para controle dos campos *****/

  handleInputName (value) {
    let regex_validation_name = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]*$/;
    if (regex_validation_name.test(value)) {
      this.props.addChanges('name', value.toUpperCase());
    }
  }


  handleInputLastName(value) {
    let regex_validation_last_name = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]*$/;
    if (regex_validation_last_name.test(value)) {
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


  handleInputState(value) {
    let regex_validation_state = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]*$/;
    if (regex_validation_state.test(value)) {
      this.props.addChanges('state', value.toUpperCase());
    }
  }


  handleInputCity(value) {
    var regex_validation_city = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]*$/;
    if (regex_validation_city.test(value)) {
      this.props.addChanges('city', value.toUpperCase());
    }
  }


  handleInputAddress(value) {
    let regex_validation_address = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]*$/;
    if (regex_validation_address.test(value)) {
      this.props.addChanges('address', value.toUpperCase());
    }
  }


  handleInputAddressNumber(value) {
    let regex_validation_address_number = /^[0-9]*$/;
    if (regex_validation_address_number.test(value)) {
      this.props.addChanges('address_number', value.toUpperCase());
    }
  }


  /**** Funções para validação dos dados *****/


  validateName() {
    if(this.props.patient_data.patient_form_edit.name === ''){
      this.props.addErrors('name_error', true,'Por favor, insira o nome');
    }else {
      this.props.addErrors('name_error', false, '');
    }
  };


  validateLastName() {
    if(this.props.patient_data.patient_form_edit.last_name === ''){
      this.props.addErrors('last_name_error', true, 'Por favor, insira o sobrenome do paciente.');
    }else {
      this.props.addErrors('last_name_error', false, '');
    }
  };


  validateAgeOfBirth() {
    if(this.props.patient_data.patient_form_edit.age_of_birth === ''){
      this.props.addErrors('age_of_birth_error', true, 'Por favor, insira a data de nascimento.');
    }else {
      if(this.props.patient_data.patient_form_edit.age_of_birth.includes('_')){
        this.props.addErrors('phone_error', true, 'Por favor, insira uma data válida.');
      }else {
        this.props.addErrors('age_of_birth_error', false, '');
      }
    }
  };


  validateEmail() {
    let regex_validation_email = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(this.props.patient_data.patient_form_edit.email !== ''){
      if(regex_validation_email.test(this.props.patient_data.patient_form_edit.email)){
        this.props.addErrors('email_error', false, '');
      }else {
        this.props.addErrors('email_error', true, 'Por favor, insira um email válido.');
      }
    }else {
      this.props.addErrors('email_error', false, '');
    }
  };


  validatePhone() {
    if(this.props.patient_data.patient_form_edit.phone === ''){
      this.props.addErrors('phone_error', true, 'Por favor, insira o número.');
    }else {
      if(this.props.patient_data.patient_form_edit.phone.includes('_')){
        this.props.addErrors('phone_error', true, 'Por favor, insira um número válido.');
      }else {
        this.props.addErrors('phone_error', false, '');
      }
    }
  };


  validateCpf() {
    if(this.props.patient_data.patient_form_edit.cpf === ''){
      this.props.addErrors('cpf_error', true, 'Por favor, insira o cpf.');
    }else {
      if(this.props.patient_data.patient_form_edit.cpf.includes('_')){
        this.props.addErrors('cpf_error', true, 'Por favor, insira um cpf válido.');
      }else {
        this.props.addErrors('cpf_error', false, '');
      }
    }
  };


  validateIdenty() {
    if(this.props.patient_data.patient_form_edit.identy === ''){
      this.props.addErrors('identy_error', true, 'Por favor, insira a identidade.');
    }else {
      if(this.props.patient_data.patient_form_edit.identy.includes('_')){
        this.props.addErrors('identy_error', true, 'Por favor, insira uma identidade válida.');
      }else {
        this.props.addErrors('identy_error', false, '');
      }
    }
  }


  validateZipCode() {
      if(this.props.patient_data.patient_form_edit.zip_code === ''){
        this.props.addErrors('zip_code_error', true, 'Por favor, insira o cep.');
      }else {
        if(this.props.patient_data.patient_form_edit.zip_code.includes('_')){
          this.props.addErrors('zip_code_error', true, 'Por favor, insira um cep válido.');
        }else {
          this.props.addErrors('zip_code_error', false, '');
        }
      }
  }


  validateState() {
      if(this.props.patient_data.patient_form_edit.state === ''){
        this.props.addErrors('state_error', true, 'Por favor, insira o estado.');
      }else {
        if(this.props.patient_data.patient_form_edit.state.includes('_')){
          this.props.addErrors('state_error', true, 'Por favor, insira um estado válido.');
        }else {
          this.props.addErrors('state_error', false, '');
        }
      }
  }


  validateCity() {
      if(this.props.patient_data.patient_form_edit.city === ''){
        this.props.addErrors('city_error', true, 'Por favor, insira a cidade.');
      }else {
        if(this.props.patient_data.patient_form_edit.city.includes('_')){
          this.props.addErrors('city_error', true, 'Por favor, insira uma cidade válida.');
        }else {
          this.props.addErrors('city_error', false, '');
        }
      }
  }


  validateAddress() {
    let regex_validation_address = /^[\pL\pM\p{Zs}.-]+$/;
    if(this.props.patient_data.patient_form_edit.address === ''){
      this.props.addErrors('address_error', true, 'Por favor, insira o endereço.');
    }else {
      if(regex_validation_address.test(this.props.patient_data.patient_form_edit.address)){
        this.props.addErrors('address_error', true, 'Por favor, insira um endereço válido.');
      }else {
        this.props.addErrors('address_error', false, '');
      }
    }
  }


  validateAddressNumber() {
    if(this.props.patient_data.patient_form_edit.address_number === ''){
      this.props.addErrors('address_number_error', true, 'Por favor, insira o número do endereço.');
    }else {
      this.props.addErrors('address_number_error', false, '');
    }
  }


  /**** Função para enviar os dados do paciente *****/


  submitForm(event){

    event.preventDefault();
    let invalid_fields = false;

    if(navigator.language !== 'pt-BR'){
      let age_of_birth_format = this.props.patient_data.patient_form_edit.age_of_birth.split('-');
      age_of_birth_format = age_of_birth_format[0] + '-' + age_of_birth_format[2] + '-' + age_of_birth_format[1];
      this.props.addChanges('age_of_birth', age_of_birth_format);
    }

    this.validateName();
    this.validateLastName();
    this.validateAgeOfBirth();
    this.validatePhone();
    this.validateEmail();
    this.validateCpf();
    this.validateIdenty();
    this.validateZipCode();
    this.validateState();
    this.validateCity();
    this.validateAddress();
    this.validateAddressNumber();

    for(let value of Object.values(this.props.patient_data.patient_form_edit)){
      if(value === ''){
        invalid_fields = true;
      }
    }

    if(invalid_fields){
      return false;
    }else {
      if(this.props.patient_data.patient_id === ''){
        this.props.fetchSaveData(this.props.patient_data.patient_form_edit);
      }else {
        this.props.fetchEditData(this.props.patient_data.patient_id, this.props.patient_data.patient_form_edit);
      }
    }

  }

  render() {
    return (
      <div>
      
        <SweetAlert 
          success
          title="Sucesso!"
          show={this.props.patient_data.send_data_success}
          onConfirm={() => this.props.confirmAlert('send_data_success', false)}> Dados atualizados com sucesso.
        </SweetAlert>

        <SweetAlert 
          error
          title="Erro!"
          show={this.props.patient_data.send_data_error}
          onConfirm={() => this.props.confirmAlert('send_data_error', false)}> Tente novamente mais tarde.
        </SweetAlert>
        
        {this.props.patient_data.loading ? <div className="spinner"><Spinner animation="border" variant="primary" /></div> : null}

        <Form>
          <Form.Row>
            <Form.Group as={Col} md="3">
              <Form.Label> Nome <label className="required">*</label> </Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o nome do paciente"
                value={this.props.patient_data.patient_form_edit.name}
                onChange={(event) => this.handleInputName(event.target.value)}
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
                isInvalid={this.props.patient_data.errors.age_of_birth_error}
              />
              <Form.Control.Feedback type="invalid">{this.props.patient_data.errors_msg.age_of_birth_error_msg}</Form.Control.Feedback>
            </Form.Group>


            <Form.Group as={Col} md="3">
              <Form.Label> Celular <label className="required">*</label> </Form.Label>
              <InputMask 
                placeholder="(__)_____-____"
                className={"form-control placeholder-color-mask " + (this.props.patient_data.errors.phone_error ? "is-invalid" : "")}
                mask="(99)99999-9999"
                value={this.props.patient_data.patient_form_edit.phone}
                onChange={(event) => this.handleInputPhone(event.target.value)}
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
                value={this.props.patient_data.patient_form_edit.email}
                onChange={(event) => this.handleInputEmail(event.target.value)}                
                isInvalid={this.props.patient_data.errors.email_error}
              />
              <Form.Control.Feedback type="invalid">{this.props.patient_data.errors_msg.email_error_msg}</Form.Control.Feedback>
            </Form.Group>


            <Form.Group as={Col} md="2">
              <Form.Label> CPF <label className="required">*</label> </Form.Label>
              <InputMask 
                placeholder="___.___.___-__"
                className={"form-control placeholder-color-mask" + (this.props.patient_data.errors.cpf_error ? "is-invalid" : "")}
                mask="999.999.999-99"
                value={this.props.patient_data.patient_form_edit.cpf}
                onChange={(event) => this.handleInputCpf(event.target.value)}
              />
              <Form.Control.Feedback type="invalid">{this.props.patient_data.errors_msg.cpf_error_msg}</Form.Control.Feedback>
            </Form.Group>


            <Form.Group as={Col} md="2">
              <Form.Label> Identidade <label className="required">*</label> </Form.Label>
              <InputMask 
                placeholder="__.___.___-_"
                className={"form-control placeholder-color-mask " + (this.props.patient_data.errors.identy_error ? "is-invalid" : "")}
                mask="99.999.999-9"
                value={this.props.patient_data.patient_form_edit.identy}
                onChange={(event) => this.handleInputIdenty(event.target.value)}
              />
              <Form.Control.Feedback type="invalid">{this.props.patient_data.errors_msg.identy_error_msg}</Form.Control.Feedback>
            </Form.Group>


            <Form.Group as={Col} md="2">
              <Form.Label> CEP <label className="required">*</label> </Form.Label>
              <InputMask 
                placeholder="_____-___"
                className={"form-control placeholder-color-mask " + (this.props.patient_data.errors.zip_code_error ? "is-invalid" : "")}
                mask="99999-999"
                value={this.props.patient_data.patient_form_edit.zip_code}
                onChange={(event) => this.handleInputZipCode(event.target.value)}
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
                isInvalid={this.props.patient_data.errors.address_error}
              />
              <Form.Control.Feedback type="invalid">{this.props.patient_data.errors_msg.address_error_msg}</Form.Control.Feedback>
            </Form.Group>


            <Form.Group as={Col} md="3">
              <Form.Label> Nº Endereço <label className="required">*</label> </Form.Label>
              <Form.Control
                type="text"
                placeholder="Número endereço"
                value={this.props.patient_data.patient_form_edit.address_number}
                onChange={(event) => this.handleInputAddressNumber(event.target.value)}
                isInvalid={this.props.patient_data.errors.address_number_error}
              />
              <Form.Control.Feedback type="invalid">{this.props.patient_data.errors_msg.address_number_error_msg}</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <ButtonToolbar className="d-flex justify-content-center">
                <Button type="button" variant="success" className="mr-1" onClick={(event) => this.submitForm(event)}>
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
