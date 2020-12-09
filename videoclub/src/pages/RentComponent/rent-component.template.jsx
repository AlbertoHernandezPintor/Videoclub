/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './rent-component.css';
import Footer from '../../components/FooterComponent/footer-component';
import Menu from '../../components/MenuComponent/menu-component';
import { Container, Row, Col } from 'react-bootstrap';
import Film from '../../components/FilmComponent/film-component';
import Modal from '../../components/ModalComponent/modal-component';

export default (props) =>  {
    return (
        <Container fluid className="rent-page p-0">
            <Menu></Menu>

            <div className="page-title mt-3">
                ALQUILER
            </div>

            <Modal show={ props.modalShow }></Modal>

            <Row className="mt-4 mb-5">
                { props.rentFilms.map(film => <Col sm="4" className="mb-3" key={ film.id }><Film film={ film } history={ props.history } isRent={ true } rent={ props.rent }></Film></Col>) }
            </Row>

            <Footer></Footer>
        </Container>
    );
};