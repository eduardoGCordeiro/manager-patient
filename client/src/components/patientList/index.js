import React from 'react';

import { Container, ButtonToolbar, Button, Spinner } from 'react-bootstrap';
import { faEdit, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { css } from 'emotion';
import calculateDifferenceDate from '../../utils/calculateDifferenceDate';
import SweetAlert from 'react-bootstrap-sweetalert';
import Datatable from "react-bs-datatable";

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
        prop: 'name', 
        sortable: true,
        filterable: true,
    },
    {
        title: 'Sobrenome',
        prop: 'last_name', 
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
        prop: 'cpf', 
        sortable: true,
        filterable: true,
    },
    {
        title: 'Endereço',
        prop: 'complete_address', 
        sortable: true,
        filterable: true,
    },
    {
        title: 'Telefone',
        prop: 'phone', 
        sortable: true,
        filterable: true,
    },
    {
        title: 'Data de nascimento',
        prop: 'birth', 
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


const patientList = ({patient_data, confirmAlert, deletePatient, editPage, deleteDataPending}) => (
   
   <div className="table-responsive body-list">
            
        { patient_data.loading ? <div className="spinner"><Spinner animation="border" variant="primary" /></div> : null}

        <SweetAlert 
        success
        title="Sucesso!"
        show={ patient_data.patient_delete_success }
        onConfirm={() =>  confirmAlert('patient_delete_success', false)}>Dados atualizados com sucesso.</SweetAlert>
        
        <SweetAlert 
          warning
          title="Atenção!"
          show={ patient_data.patient_delete_warning }
          showCancel
          confirmBtnText="Sim, deletar paciente"
          confirmBtnBsStyle="danger"
          cancelBtnText="Cancelar"
          cancelBtnBsStyle="default"
          onConfirm={() => deletePatient(patient_data.patient_delete) }
          onCancel={() => confirmAlert('patient_delete_warning', false)}>Você realmente deseja deletar esse paciente?</SweetAlert>
        
        <SweetAlert 
          error
          title="Erro!"
          show={ patient_data.patient_delete_error }
          onConfirm={() => confirmAlert('patient_delete_error', false)}>Tente novamente mais tarde.</SweetAlert>
        
        <SweetAlert 
          error
          title="Erro!"
          show={ patient_data.patient_get_error  }
          onConfirm={() => confirmAlert('patient_get_error', false)}>Tente novamente mais tarde.</SweetAlert>
        <Container>
        <Datatable 
            tableHeaders = { tableHeader }
            tableBody = { patient_data.patient_list.map(function(data){
                                                                        data.actions =  <ButtonToolbar className='btn-center'>
                                                                                            <Button variant="success" className="mr-1" size="sm" onClick={() => editPage(data)}>
                                                                                                <FontAwesomeIcon icon={ faEdit }/>
                                                                                            </Button>
                                                                                            <Button variant="danger" size="sm" onClick={() => deleteDataPending(data.id)}>
                                                                                                <FontAwesomeIcon icon={ faWindowClose }/>
                                                                                            </Button>
                                                                                        </ButtonToolbar>;               
                                                                        data.complete_address = '';                                      
                                                                        data.birth = '';                                      
                                                                        data.age = '';                     
                                                                        data.complete_address = data.address + ' ' + data.address_number;
                                                                        data.birth = data.age_of_birth.split('-');
                                                                        data.birth =  data.birth[2] + '/' + data.birth[1] + '/' + data.birth[0];
                                                                        data.calculate_time = new Date(data.age_of_birth);
                                                                        data.age =  calculateDifferenceDate(data.calculate_time);
                                                                        return data;
                                                                    }, this) }
            keyName = "patient-table"
            tableClass="striped hover"
            rowsPerPage = {20}
            filterText = "Busca avançada"
            rowsPerPageOption = {[10, 20, 30]}
            initialSort = {{ prop: 'code', isAscending: true}}
            labels = { customLabels }
            className = "filter"
            classes = { classes }                 
            />
        </Container>
    </div>
);

export default patientList;
