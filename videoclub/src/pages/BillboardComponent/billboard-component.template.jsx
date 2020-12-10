/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './billboard-component.css';
import Footer from '../../components/FooterComponent/footer-component';
import Menu from '../../components/MenuComponent/menu-component';
import Film from '../../components/FilmComponent/film-component';
import { Container, Carousel, Row, Col } from 'react-bootstrap';

export default (props) =>  {
    return (
        <Container fluid className="billboard-page p-0 text-center">
            <Menu></Menu>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="https://cdnmundo3.img.sputniknews.com/img/106290/75/1062907509_0:185:1024:738_1000x541_80_0_0_e7a171cb66555c14c2cb282c9eb61f48.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Descubre los últimos estrenos del cine</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="https://unbuendiaenmadrid.com/wp-content/uploads/2017/04/Mi%C3%A9rcoles-de-cine-CINESA.png"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289__340.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Disfruta del cine</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="page-title mt-3">
                CARTELERA
            </div>

            <Row className="mt-4 mb-5">
                { props.billboardFilms.map(film => <Col sm="4" className="mb-3" key={ film.id }><Film film={ film } history={ props.history } isRent={ false } myFilms={ false }></Film></Col>) }
            </Row>

            <Footer></Footer>
        </Container>
    );
};