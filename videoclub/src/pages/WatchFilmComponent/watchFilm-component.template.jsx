/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './watchFilm-component.css';
import Footer from '../../components/FooterComponent/footer-component';
import Menu from '../../components/MenuComponent/menu-component';
import { Container } from 'react-bootstrap';

export default (props) =>  {
    return (
        <Container fluid className="rent-page p-0">
            <Menu></Menu>

            <div className="d-flex justify-content-center h-75 align-items-center">
                <iframe width="560" 
                title={ props.film.title }
                height="315" 
                src={ props.film.trailer } 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen></iframe>
            </div>

            <Footer></Footer>
        </Container>
    );
};