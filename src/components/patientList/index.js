import React, { Component } from 'react';

import Datatable from "react-bs-datatable";
import { Row, Col, ButtonToolbar, Button, Spinner } from 'react-bootstrap';
import SweetAlert from 'react-bootstrap-sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { css } from 'emotion';

import '../../style/patientList.css';

const customLabels = {
    first: '<<',
    last: '>>',
    prev: '<',
    next: '>',
    show: 'Exiba',
    entries: 'linhas',
    noResults: 'Não existe nenhum paciente cadastrado!',
    filterPlaceholder: 'Busca avançada'
}

const tableHeader = [
     {
        title: 'Nome',
        prop: 'patient_name', 
        sortable: true,
        filterable: true,
    },
    {
        title: 'Sobrenome',
        prop: 'patient_last_name', 
        sortable: true,
        filterable: true,
    },
    {
        title: 'Idade',
        prop: 'age', 
        sortable: true,
        filterable: true,
    },
    {
        title: 'CPF',
        prop: 'patient_cpf', 
        sortable: true,
        filterable: true,
    },
    {
        title: 'Endereço',
        prop: 'patient_address', 
        sortable: true,
        filterable: true,
    },
    {
        title: 'Número endereço',
        prop: 'patient_address_number', 
        sortable: true,
        filterable: true,
    },
    {
        title: 'Telefone',
        prop: 'patient_phone', 
        sortable: true,
        filterable: true,
    },
    {
        title: 'Data de nascimento',
        prop: 'patient_age_of_birth', 
        sortable: true,
        filterable: true,
    },
    {
        title: 'Ações',
        prop: 'actions', 
    }
]

const classes = {
    table: css`{
        margin-top: 2%;
    } & td{
        vertical-align: middle;
        text-align: center;
        word-wrap: break-word;
    } & th{
        word-wrap: nowrap;
    } & .pull-right{
        float:none;
    }`,
    thead: css`{
        white-space: nowrap;
    }`,
    paginationOptsFormText: css`
    &:first-of-type {
      margin-right: 8px;
    }
    &:last-of-type {
      margin-left: 8px;
    }`,
}


export default class patientList extends Component{
    render(){
        var tableBody = this.props.patient_data.patient_list;
        return (
            <div>
                
                {this.props.patient_data.loading ? <div className="spinner"><Spinner animation="border" variant="primary" /></div> : null}

                <Row>
                    <Col size={12}>

                        <ButtonToolbar className='btn-center'>
                           <Button variant="success" className="mr-1" size="sm" onClick={() => this.props.editData()}>
                               <FontAwesomeIcon icon={ faEdit }/>
                           </Button>
                           <Button variant="danger" size="sm" onClick={() => this.props.deleteData()}>
                               <FontAwesomeIcon icon={ faWindowClose }/>
                           </Button>
                        </ButtonToolbar>

                        <SweetAlert 
                        success
                        title="Sucesso!"
                        show={ this.props.patient_data.patient_delete_success }
                        onConfirm={() =>  this.props.confirmAlert('patient_delete_success', false)}>Dados atualizados com sucesso.</SweetAlert>

                        <SweetAlert 
                          warning
                          title="Atenção!"
                          show={ this.props.patient_data.patient_delete_warning }
                          onConfirm={() => this.props.confirmAlert('patient_delete_warning', false)}
                          onCancel={() => this.props.confirmAlert('patient_delete_warning', false)}>Você realmente deseja deletar esse paciente?</SweetAlert>

                        <SweetAlert 
                          error
                          title="Erro!"
                          show={ this.props.patient_data.patient_delete_error }
                          onConfirm={() => this.props.confirmAlert('patient_delete_error', false)}>Tente novamente mais tarde.</SweetAlert>

                        <SweetAlert 
                          error
                          title="Erro!"
                          show={ this.props.patient_data.patient_get_error  }
                          onConfirm={() => this.props.confirmAlert('patient_get_error', false)}>Tente novamente mais tarde.</SweetAlert>

                        <Datatable 
                        tableHeaders = { tableHeader }
                        tableBody = { tableBody }
                        keyName = "patient-table"
                        tableClass="striped hover responsive"
                        rowsPerPage = {20}
                        filterText = "Busca avançada"
                        rowsPerPageOption = {[10, 20, 30]}
                        initialSort = {{ prop: 'code', isAscending: true}}
                        labels = { customLabels }
                        className = "filter"
                        classes = { classes }                 
                        />

                    </Col>
                </Row>
            </div>
        );
    };
};
