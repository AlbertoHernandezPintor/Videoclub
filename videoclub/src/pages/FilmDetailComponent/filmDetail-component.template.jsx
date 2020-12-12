/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './filmDetail-component.css';
import Footer from '../../components/FooterComponent/footer-component';
import Menu from '../../components/MenuComponent/menu-component';
import { Container, Row, Col } from 'react-bootstrap';

export default (props) =>  {
    return (
        <Container fluid className="billboard-page p-0">
            <Menu></Menu>
            <Row>
                <Col md="6" sm="12" className="d-flex align-items-center">
                    <Row>
                        <Col sm="12"  className="text-center">
                            <Row> 
                                <Col sm="12" className="filmDetail">
                                    <h1>{ props.film.title }</h1>
                                </Col>

                                <Col sm="12" className="filmDetail">
                                    <h5>{ props.film.originalTitle }</h5>
                                </Col>
                            </Row>
                        </Col>

                        <Col sm="12" className="filmDetails mt-4">
                            <h5>Año: { props.film.year }</h5>
                        </Col>

                        <Col sm="12" className="filmDetails mt-2">
                            <h5>País: { props.film.country }</h5>
                        </Col>

                        <Col sm="12" className="filmDetails mt-2">
                            <h5>Director: { props.film.director }</h5>
                        </Col>

                        <Col sm="12" className="filmDetails mt-2">
                            <h5>Sinopsis: { props.film.synopsis }</h5>
                        </Col>

                        <Col sm="12" className="filmDetails mt-2">
                            <h5>Género: { props.film.genre }</h5>
                        </Col>

                        <Col sm="12" className="filmDetails mt-2">
                            <h5>Duración: { props.film.duration }</h5>
                        </Col>

                        <Col sm="12" className="filmDetails mt-2 film-stars">
                            { props.stars() }
                        </Col>

                        <Col sm="12" className="text-center mt-2">
                            <button type="button" className="rent-buttons mr-2" onClick={ props.markSeenMovie } disabled={ props.seen }>Marcar como vista</button>
                            <button type="button" className="rent-buttons" onClick={ props.markPendingMovie } disabled={ props.pending }>Marcar como pendiente</button>
                        </Col>
                    </Row>
                </Col>
                <Col md="6" sm="12" className="d-flex justify-content-center align-items-center image-col">
                    <img src={ props.film.image } alt={ props.film.title }></img>
                </Col>
            </Row>
            <Footer></Footer>
        </Container>
    );
};