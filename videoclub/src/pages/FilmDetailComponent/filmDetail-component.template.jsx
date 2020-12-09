/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './filmDetail-component.css';
import Footer from '../../components/FooterComponent/footer-component';
import Menu from '../../components/MenuComponent/menu-component';
import { Container } from 'react-bootstrap';

export default (props) =>  {
    return (
        <Container fluid className="billboard-page p-0 text-center">
            <Menu></Menu>
            <div className="filmDetail mt-2">
                <h1>{ props.film.title }</h1>
            </div>
            <Footer></Footer>
        </Container>
    );
};