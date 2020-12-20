/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './error-component.css';
import { Container } from 'react-bootstrap';

export default (props) =>  {
    return (
        <Container fluid className="text-center error-page">
            <h1>No has inciado sesión</h1>
            <a href="/">Iniciar sesión</a>
        </Container>
    );
};