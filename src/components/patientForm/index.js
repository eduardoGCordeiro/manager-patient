import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import '../../style/patientForm.css';

import * as PatientFormMask from './patientFormMask';
import * as PatientFormBlur from './patientFormBlur';
import * as PatientFormSubmit from './patientFormSubmit';

import { Form, Col, ButtonToolbar, Button } from 'react-bootstrap';
import { MIN_AGE_PATIENT, CURRENT_DATE } from '../../constants';

export default class PatientForm extends Component {
  
  constructor(props){  
    super(props);
    
    this.state = {
        name: '',
        last_name: '',
        age_of_birth: '',
        phone: '',
        email: '',
        cpf: '',
        identy: '',
        zip_code: '',
        address: '',
        state: '',
        city: '',
        name_error: false,
        last_name_error: false,
        age_of_birth_error: false,
        phone_error: '',
        email_error: false,
        cpf_error: '',
        identy_error: '',
        zip_code_error: '',
        address_error: false,
        state_error: false,
        city_error: false,
        name_error_msg: '',
        last_name_error_msg: '',
        age_of_birth_error_msg: '',
        phone_error_msg: '',
        email_error_msg: '',
        cpf_error_msg: '',
        identy_error_msg: '',
        zip_code_error_msg: '',
        address_error_msg: '',
        state_error_msg: '',
        city_error_msg: '',
    };
    
    this.PatientFormMask = {};
    this.PatientFormMask.handleInputName       = PatientFormMask.handleInputName.bind(this);
    this.PatientFormMask.handleInputLastName   = PatientFormMask.handleInputLastName.bind(this);
    this.PatientFormMask.handleInputAgeOfBirth = PatientFormMask.handleInputAgeOfBirth.bind(this);
    this.PatientFormMask.handleInputPhone      = PatientFormMask.handleInputPhone.bind(this);
    this.PatientFormMask.handleInputEmail      = PatientFormMask.handleInputEmail.bind(this);
    this.PatientFormMask.handleInputCpf        = PatientFormMask.handleInputCpf.bind(this);
    this.PatientFormMask.handleInputIdenty     = PatientFormMask.handleInputIdenty.bind(this);
    this.PatientFormMask.handleInputZipCode    = PatientFormMask.handleInputZipCode.bind(this);
    this.PatientFormMask.handleInputCity       = PatientFormMask.handleInputCity.bind(this);
    this.PatientFormMask.handleInputState      = PatientFormMask.handleInputState.bind(this);
    this.PatientFormMask.handleInputAddress    = PatientFormMask.handleInputAddress.bind(this);
    
    this.PatientFormBlur = {};
    this.PatientFormBlur.validateName       = PatientFormBlur.validateName.bind(this);
    this.PatientFormBlur.validateLastName   = PatientFormBlur.validateLastName.bind(this);
    this.PatientFormBlur.validateAgeOfBirth = PatientFormBlur.validateAgeOfBirth.bind(this);
    this.PatientFormBlur.validateEmail      = PatientFormBlur.validateEmail.bind(this);
    this.PatientFormBlur.validatePhone      = PatientFormBlur.validatePhone.bind(this);
    this.PatientFormBlur.validateCpf        = PatientFormBlur.validateCpf.bind(this);
    this.PatientFormBlur.validateIdenty     = PatientFormBlur.validateIdenty.bind(this);
    this.PatientFormBlur.validateZipCode    = PatientFormBlur.validateZipCode.bind(this);
    this.PatientFormBlur.validateState      = PatientFormBlur.validateState.bind(this);
    this.PatientFormBlur.validateCity       = PatientFormBlur.validateCity.bind(this);
    this.PatientFormBlur.validateAddress    = PatientFormBlur.validateAddress.bind(this);
    
    this.PatientFormSubmit = {};
    this.PatientFormSubmit.submitForm = PatientFormSubmit.submitForm.bind(this);

    this.submitForm = this.props.submitForm;
  }

  render() {
    return (
      <div>
        <Form onSubmit={(event) => this.PatientFormSubmit.submitForm(event, this.state)}>
          

          <Form.Row>
            <Form.Group as={Col} md="3">
              <Form.Label> Nome <label className="required">*</label> </Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o nome do paciente"
                value={this.state.name}
                onChange={(event) => this.PatientFormMask.handleInputName(event.target.value)}
                onBlur={(event) => this.PatientFormBlur.validateName(event.target.value)}
                isInvalid={this.state.name_error}
              />
              <Form.Control.Feedback type="invalid">{this.state.name_error_msg}</Form.Control.Feedback>
            </Form.Group>


            <Form.Group as={Col} md="3">
              <Form.Label> Sobrenome <label className="required">*</label> </Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o sobrenome do paciente"
                value={this.state.last_name}
                onChange={(event) => this.PatientFormMask.handleInputLastName(event.target.value)}
                onBlur={(event) => this.PatientFormBlur.validateLastName(event.target.value)}
                isInvalid={this.state.last_name_error}
              />
              <Form.Control.Feedback type="invalid">{this.state.last_name_error_msg}</Form.Control.Feedback>
            </Form.Group>


            <Form.Group as={Col} md="3">
              <Form.Label> Data de nascimento <label className="required">*</label> </Form.Label>
              <Form.Control
                type="date"
                min={MIN_AGE_PATIENT}
                max={CURRENT_DATE}
                value={this.state.age_of_birth}
                onChange={(event) => this.PatientFormMask.handleInputAgeOfBirth(event.taget.value)}
                onBlur={(event) => this.PatientFormBlur.validateAgeOfBirth(event.target.value)}
                isInvalid={this.state.age_of_birth_error}
              />
              <Form.Control.Feedback type="invalid">{this.state.age_of_birth_error_msg}</Form.Control.Feedback>
            </Form.Group>


            <Form.Group as={Col} md="3">
              <Form.Label> Celular <label className="required">*</label> </Form.Label>
              <InputMask 
                placeholder="(__)_____-____"
                className={"form-control placeholder-color-mask " + this.state.phone_error}
                mask="(99)99999-9999"
                value={this.state.phone}
                onChange={(event) => this.PatientFormMask.handleInputPhone(event.target.value)}
                onBlur={(event) => this.PatientFormBlur.validatePhone(event.target.value)}
              />
              <Form.Control.Feedback type="invalid">{this.state.phone_error_msg}</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
          <Form.Group as={Col} md="3">
              <Form.Label> E-mail <label className="required"></label> </Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o e-mail do paciente"
                defaultValue={this.state.email}
                onChange={(event) => this.PatientFormMask.handleInputEmail(event.target.value)}
                onBlur={(event) => this.PatientFormBlur.validateEmail(event.target.value)}
                isInvalid={this.state.email_error}
              />
              <Form.Control.Feedback type="invalid">{this.state.email_error_msg}</Form.Control.Feedback>
            </Form.Group>


            <Form.Group as={Col} md="2">
              <Form.Label> CPF <label className="required">*</label> </Form.Label>
              <InputMask 
                placeholder="___.___.___-__"
                className={"form-control placeholder-color-mask " + this.state.cpf_error}
                mask="999.999.999-99"
                value={this.state.cpf}
                onChange={(event) => this.PatientFormMask.handleInputCpf(event.target.value)}
                onBlur={(event) => this.PatientFormBlur.validateCpf(event.target.value)}
              />
              <Form.Control.Feedback type="invalid">{this.state.cpf_error_msg}</Form.Control.Feedback>
            </Form.Group>


            <Form.Group as={Col} md="2">
              <Form.Label> Identidade <label className="required">*</label> </Form.Label>
              <InputMask 
                placeholder="__.___.___-_"
                className={"form-control placeholder-color-mask " + this.state.identy_error}
                mask="99.999.999-9"
                value={this.state.identy}
                onChange={(event) => this.PatientFormMask.handleInputIdenty(event.target.value)}
                onBlur={(event) => this.PatientFormBlur.validateIdenty(event.target.value)}
              />
              <Form.Control.Feedback type="invalid">{this.state.identy_error_msg}</Form.Control.Feedback>
            </Form.Group>


            <Form.Group as={Col} md="2">
              <Form.Label> CEP <label className="required">*</label> </Form.Label>
              <InputMask 
                placeholder="_____-___"
                className={"form-control placeholder-color-mask " + this.state.zip_code_error}
                mask="99999-999"
                value={this.state.zip_code}
                onChange={(event) => this.PatientFormMask.handleInputZipCode(event.target.value)}
                onBlur={(event) => this.PatientFormBlur.validateZipCode(event.target.value)}
              />
              <Form.Control.Feedback type="invalid">{this.state.zip_code_error_msg}</Form.Control.Feedback>
            </Form.Group>


            <Form.Group as={Col} md="3">
              <Form.Label> Estado <label className="required">*</label> </Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o estado do paciente"
                value={this.state.state}
                onChange={(event) => this.PatientFormMask.handleInputState(event.target.value)}
                onBlur={(event) => this.PatientFormBlur.validateState(event.target.value)}
                isInvalid={this.state.state_error}
              />
              <Form.Control.Feedback type="invalid">{this.state.state_error_msg}</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="3">
              <Form.Label> Cidade <label className="required">*</label> </Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira a cidade do paciente"
                value={this.state.city}
                onChange={(event) => this.PatientFormMask.handleInputCity(event.target.value)}
                onBlur={(event) => this.PatientFormBlur.validateCity(event.target.value)}
                isInvalid={this.state.city_error}
              />
              <Form.Control.Feedback type="invalid">{this.state.city_error_msg}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4">
              <Form.Label> Endereço <label className="required">*</label> </Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o endereço do paciente"
                value={this.state.address}
                onChange={(event) => this.PatientFormMask.handleInputAddress(event.target.value)}
                onBlur={(event) => this.PatientFormBlur.validateAddress(event.target.value)}
                isInvalid={this.state.address_error}
              />
              <Form.Control.Feedback type="invalid">{this.state.address_error_msg}</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>


          <ButtonToolbar className="d-flex justify-content-center">
            <Button type="submit" variant="success" className="mr-1">
              Salvar
            </Button>
            <Button type="reset" variant="secondary">
              Cancelar
            </Button>
          </ButtonToolbar>


        </Form>
      </div>
    );
  };
};
