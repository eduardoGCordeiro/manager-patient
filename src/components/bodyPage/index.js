import React from 'react';
import { Container, Row, Col, Card, Nav, Tab } from 'react-bootstrap';

import PatientForm from '../../store/containers/patientForm';
import PatientList from '../../store/containers/patientList';

const BodyPage = ({body_page, navigation}) => (
    <main className="bg-light">
        <Container className='pt-5 pb-3'>
            <Row>
                <Col md={12}>
                    <Card>
                        <Tab.Container activeKey={body_page.page}>
                            <Card.Header>
                                <Row>    
                                    <Col>
                                        <Nav variant='pills'>
                                            <Nav.Item>
                                                <Nav.Link eventKey="patient-form" onClick={ () => navigation('patient-form') } >Cadastro de pacientes</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="patient-list" onClick={ () => navigation('patient-list') }>Lista de pacientes</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                </Row>
                            </Card.Header>
                            <Card.Body>
                                <Tab.Content>
                                    <Tab.Pane eventKey="patient-form">
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
