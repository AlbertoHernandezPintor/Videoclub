/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './login-component.css';
import Footer from '../../components/FooterComponent/footer-component';
import AlertDimissible from '../../components/AlertDimissibleComponent/AlertDimissible-component';
import { Container, Row, Col, Card, Form, Button, InputGroup, FormControl } from 'react-bootstrap';

export default (props) =>  {
    return (
        <Container fluid className="text-center login-page">
            <Row className="h-100">
                <Col sm="12">
                    <p className="page-title mt-5">EL VIDEOCLUB</p>
                </Col>

                <Col sm="12" className="justify-content-center d-flex mb-5">
                    <Card className="text-center login-card">
                        <Card.Body>
                            <Card.Title className="mb-3" >Introduce tu nombre de usuario</Card.Title>

                            <Form onSubmit={ props.login }>
                                <div className="d-flex justify-content-center">
                                    <InputGroup className="w-50 mb-3">
                                        <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1"><i className="fa fa-user"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                        placeholder = "Username"
                                        aria-label = "Username"
                                        aria-describedby = "basic-addon1"
                                        value = { props.username }
                                        onChange = { props.updateUsername }
                                        name = "username"/>
                                    </InputGroup>
                                </div>

                                <Button type="submit" className="mb-3 login-button">Iniciar sesión</Button>
                            </Form>

                            <AlertDimissible type="warning" message="Debe introducir un nombre de usuario" show={ props.showAlert } setShow={ props.setShow }></AlertDimissible>
                        </Card.Body>
                    </Card>
                </Col>

                <Col sm="12" className="p-0">
                    <Footer></Footer>
                </Col>
            </Row>
        </Container>
    );
};