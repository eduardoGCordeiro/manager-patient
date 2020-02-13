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


  handleInputState(value) {
    let regex_validation_state = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]*$/;
    if (regex_validation_state.test(value)) {
      this.props.addChanges('state', value);
    }
  }


  handleInputCity(value) {
    var regex_validation_city = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]*$/;
    if (regex_validation_city.test(value)) {
      this.props.addChanges('city', value);
    }
  }


  handleInputAddress(value) {
    let regex_validation_address = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]*$/;
    if (regex_validation_address.test(value)) {
      this.props.addChanges('address', value);
    }
  }


  handleInputAddressNumber(value) {
    let regex_validation_address_number = /^[0-9]*$/;
    if (regex_validation_address_number.test(value)) {
      this.props.addChanges('address_number', value);
    }
  }

  /**** Função para enviar os dados do paciente *****/

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
                onChange={(event) => this.props.addChanges('age_of_birth', event.target.value)}
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
                onChange={(event) =>this.props.addChanges('phone', event.target.value)}
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
                onChange={(event) => this.props.addChanges('email', event.target.value)}                
                isInvalid={this.props.patient_data.errors.email_error}
              />
              <Form.Control.Feedback type="invalid">{this.props.patient_data.errors_msg.email_error_msg}</Form.Control.Feedback>
            </Form.Group>


            <Form.Group as={Col} md="2">
              <Form.Label> CPF <label className="required">*</label> </Form.Label>
              <InputMask 
                placeholder="___.___.___-__"
                className={"form-control placeholder-color-mask" + (this.props.patient_data.errors.cpf_error ? " is-invalid" : "")}
                mask="999.999.999-99"
                value={this.props.patient_data.patient_form_edit.cpf}
                onChange={(event) =>  this.props.addChanges('cpf', event.target.value)}
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
                onChange={(event) => this.props.addChanges('identy', event.target.value)}
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
                onChange={(event) => this.props.addChanges('zip_code', event.target.value)}
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
                <Button type="button" variant="success" className="mr-1" onClick={() => this.props.validateForm(this.props.patient_data.patient_form_edit)}>
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
