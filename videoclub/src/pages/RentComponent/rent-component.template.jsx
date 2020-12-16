/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './rent-component.css';
import Footer from '../../components/FooterComponent/footer-component';
import Menu from '../../components/MenuComponent/menu-component';
import { Container, Row, Col } from 'react-bootstrap';
import Film from '../../components/FilmComponent/film-component';

export default (props) =>  {
    return (
        <Container fluid className="rent-page p-0">
            <Menu></Menu>

            <div className="page-title mt-3">
                ALQUILER
            </div>

            <div className="pl-5 mt-5">
                <button type="button" className="mr-2 rent-buttons mb-2" onClick={ props.sortByDateAsc }>Ordenar por fecha ascendente</button>
                <button type="button" className="mr-2 rent-buttons mb-2" onClick={ props.sortByDateDesc }>Ordenar por fecha descendente</button>
                <button type="button" className="mr-2 rent-buttons mb-2" onClick={ props.sortByBestRating }>Mejor valoradas primero</button>
                <button type="button" className="mr-2 rent-buttons mb-2" onClick={ props.sortByWorstRating }>Peor valoradas primero</button>
                <button type="button" className="mr-2 rent-buttons mb-2" onClick={ props.sortByPriceAsc }>Ordenar por precio ascendente</button>
                <button type="button" className="mr-2 rent-buttons" onClick={ props.sortByPriceDesc }>Ordenar por precio descendente</button>
            </div>

            <Row className="mt-4 mb-5">
                { props.rentFilms.map(film => <Col sm="4" className="mb-3" key={ film.id }><Film film={ film } history={ props.history } isRent={ true } myFilms={ false }></Film></Col>) }
            </Row>

            <Footer></Footer>
        </Container>
    );
};