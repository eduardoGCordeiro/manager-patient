import React, { Component } from 'react';

import { Container, Row, Col, Card, Nav, Tab } from 'react-bootstrap';

import PatientForm from '../../store/containers/patientForm';
import PatientTable from '../patientTable';

export default class Body extends Component {
    render() {
        return (
            <main className="bg-light">
                <Container className='pt-5 pb-3'>
                    <Row>
                        <Col md={12}>
                            <Card>
                                <Tab.Container defaultActiveKey='patient-register'>
                                    <Card.Header>
                                        <Row>
                                            <Col>
                                                <Nav variant='pills' defaultActiveKey='patient-register'>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey='patient-register'>Cadastro de pacientes</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey='patient-list'>Lista de pacientes</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </Col>
                                        </Row>
                                    </Card.Header>
                                    <Card.Body>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="patient-register">
                                                <PatientForm />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="patient-list">
                                                <PatientTable />
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Card.Body>
                                </Tab.Container>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </main>
        );
    };
};

