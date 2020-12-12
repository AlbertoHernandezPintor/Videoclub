/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './lists-component.css';
import Footer from '../../components/FooterComponent/footer-component';
import Menu from '../../components/MenuComponent/menu-component';
import { Container, Row, Col } from 'react-bootstrap';
import ListMovie from '../../components/ListMovieComponent/listMovie-component';

export default (props) =>  {
    return (
        <Container fluid className="rent-page p-0">
            <Menu></Menu>

            <div className="page-title mt-3">
                LISTAS
            </div>

            <Row className="mt-3 text-center lists-text mb-5">
                <Col md="6" sm="12" className="seen-movies-list lists">
                    <h3>Películas vistas</h3>
                    <p hidden={ props.emptySeenFilms }>No hay películas añadidas a esta lista</p>
                    <Row>
                        { props.seenMovies.map(film => <Col sm="12" key={ film.id }>
                            <ListMovie film={ film } isPending={ false } removeFilm={ props.removeFilm }></ListMovie>
                        </Col>) }
                    </Row>
                </Col>

                <Col md="6" sm="12" className="lists">
                    <h3>Películas pendientes</h3>
                    <p hidden={ props.emptyPendingFilms }>No hay películas añadidas a esta lista</p>
                    <Row>
                        { props.pendingMovies.map(film => <Col sm="12" key={ film.id }>
                            <ListMovie film={ film } isPending={ true } removeFilm={ props.removeFilm }></ListMovie>
                        </Col>) }
                    </Row>
                </Col>
            </Row>

            <Footer></Footer>
        </Container>
    );
};