import React from 'react';
import { Container, Row, Col, Card, Nav, Tab } from 'react-bootstrap';

import PatientForm from '../../store/containers/patientForm';
import PatientList from '../../store/containers/patientList';

const BodyPage = ({clearData, fetchPatients}) => (
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
                                                <Nav.Link eventKey='patient-register' onClick={ () => clearData() } >Cadastro de pacientes</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey='patient-list' onClick={ () => fetchPatients() } >Lista de pacientes</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                </Row>
                            </Card.Header>
                            <Card.Body>
                                <Tab.Content>
                                    <Tab.Pane eventKey="patient-register">
                                        <PatientForm/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="patient-list">
                                        <PatientList />
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

export default BodyPage;
