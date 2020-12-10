/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './myFilms-component.css';
import Footer from '../../components/FooterComponent/footer-component';
import Menu from '../../components/MenuComponent/menu-component';
import { Container, Row, Col } from 'react-bootstrap';
import Film from '../../components/FilmComponent/film-component';

export default (props) =>  {

    if(props.user.rentFilms.length === 0) {
        return (
            <Container fluid className="rent-page p-0">
                <Menu></Menu>
    
                <div className="page-title mt-3">
                    Mis películas
                </div>

                <div className="page-subtitle d-flex justify-content-center mt-5">
                    Debe alquilar películas, vaya al apartado de Alquiler
                </div>
    
                <Footer></Footer>
            </Container>
        );
    } else {
        return (
            <Container fluid className="rent-page p-0">
                <Menu></Menu>
    
                <div className="page-title mt-3">
                    Mis películas
                </div>
    
                <Row className="mt-4 mb-5">
                    { props.rentFilms.map(film => <Col sm="4" className="mb-3" key={ film.id }><Film film={ film } history={ props.history } isRent={ true } myFilms={ true }></Film></Col>) }
                </Row>

                <Footer></Footer>
            </Container>
        );
    }
};