import React, { Component } from 'react';
import Datatable from "react-bs-datatable";
import { Row, Col, ButtonToolbar, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { css } from 'emotion';

import '../../style/patientTable.css';

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
        title: 'Código',
        prop: 'code', 
        sortable: true,
        filterable: true,
    },
    {
        title: 'Nome',
        prop: 'name', 
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
        prop: 'address', 
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
        prop: 'dateofbirth', 
        sortable: true,
        filterable: true,
    },
    {
        title: 'Ações',
        prop: 'actions', 
    }
]


const tableBody = [
    {
        code: '12',
        name:'Eduardo',
        age:'12',
        cpf:'10456436960',
        address:'uberlandia',
        phone:'99199999',
        dateofbirth:'03/31/20',
        actions: <ButtonToolbar className='btn-center'>
                    <Button variant="success" className="mr-1" size="sm">
                        <FontAwesomeIcon icon={ faEdit }/>
                    </Button>
                    <Button variant="danger" size="sm">
                        <FontAwesomeIcon icon={ faWindowClose }/>
                    </Button>
                 </ButtonToolbar>
    },
    {
        code: '1',
        name:'Luana Gaspar',
        age:'20',
        cpf:'091.090.709-90',
        address:'PR - Irati - Avn. João Protezeck - 2395 PR - Irati - Avn. João Protezeck - 2395 PR - Irati - Avn. João Protezeck - 2395',
        phone:'(42) 99853-5173',
        dateofbirth:'29/11/1999',
        actions: <ButtonToolbar className='btn-center'>
                    <Button variant="success" className="mr-1" size="sm">
                        <FontAwesomeIcon icon={ faEdit }/>
                    </Button>
                    <Button variant="danger" size="sm">
                        <FontAwesomeIcon icon={ faWindowClose }/>
                    </Button>
                 </ButtonToolbar>
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


export default class PatientTable extends Component{
    
    render(){
        return (
            <Row>
                <Col size={12}>
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
        );
    };
};
