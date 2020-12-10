/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './menu-component.css';
import { Navbar, Nav } from 'react-bootstrap';

export default (props) =>  {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href={ props.billboardRoute } className="menu-title">EL VIDEOCLUB</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto menu-pages">
                    <Nav.Link href={ props.billboardRoute } className="menu-link">Cartelera</Nav.Link>
                    <Nav.Link href={ props.rentRoute } className="menu-link">Alquiler</Nav.Link>
                    <Nav.Link href={ props.myFilmsRoute } className="menu-link">Mis películas</Nav.Link>
                    <Nav.Link href={ props.cinemasRoute } className="menu-link">Cines</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};