/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './rent-component.css';
import Footer from '../../components/FooterComponent/footer-component';
import Menu from '../../components/MenuComponent/menu-component';
import { Container } from 'react-bootstrap';

export default () =>  {
    return (
        <Container fluid className="rent-page p-0">
            <Menu></Menu>
            <Footer></Footer>
        </Container>
    );
};