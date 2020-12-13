/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './myProfile-component.css';
import Footer from '../../components/FooterComponent/footer-component';
import Menu from '../../components/MenuComponent/menu-component';
import { Container, Row, Col } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";

export default (props) =>  {
    return (
        <Container fluid className="rent-page p-0">
            <Menu></Menu>

            <div className="page-title mt-3">
                MI PERFIL   
            </div>

            <Row className="myProfile mt-4 mb-5">
                <Col md="6" sm="12">
                    <Row>
                        <Col className="text-center" sm="12">
                            <h3>Hola { props.username }</h3>
                        </Col>
                        <Col className="myProfile-details mt-4 mb-2" sm="12">
                            <p>Fecha de inicio en el sistema: { props.startDate }</p>
                        </Col>
                        <Col className="myProfile-details mb-3" sm="12">
                            <Row>
                                <Col sm="6" className="d-flex align-items-center">
                                    <p className="m-0">Película mejor valorada: { props.bestRating }</p>
                                </Col>
                                <Col sm="4" className="rating" hidden={ props.bestFilm }>
                                    <ReactStars count={ 5 } size={ 24 } activeColor="#ffd700" isHalf={ true } value={ props.bestRate }/>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="myProfile-details mb-2" sm="12">
                            <Row>
                                <Col sm="6" className="d-flex align-items-center">
                                    <p className="m-0">Película peor valorada: { props.worstRating }</p>
                                </Col>
                                <Col sm="4" className="rating" hidden={ props.worstFilm }>
                                    <ReactStars count={ 5 } size={ 24 } activeColor="#ffd700" isHalf={ true } value={ props.worstRate }/>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="myProfile-details mt-4 mb-2" sm="12">
                            <p>Útima película alquilada: { props.lastRentFilm }</p>
                        </Col>
                        <Col className="myProfile-details mt-4 mb-2" sm="12">
                            <p>Películas alquiladas: { props.countRentFilms }</p>
                        </Col>
                        <Col className="myProfile-details mt-4 mb-2" sm="12">
                            <p>Películas vistas: { props.countSeenFilms }</p>
                        </Col>
                        <Col className="myProfile-details mt-4 mb-2" sm="12">
                            <p>Películas pendientes: { props.countPendingFilms }</p>
                        </Col>
                    </Row>
                </Col>

                <Col md="6" sm="12" className="d-flex justify-content-center align-items-center">
                    <Row>
                        <Col sm="12" className="d-flex justify-content-center align-items-center">
                            <img src={ props.profilePhoto } alt="Foto de perfil" className="profile-photo"></img>
                        </Col>
                        <Col sm="12 mt-2" className="d-flex justify-content-center align-items-center">
                            <input className="inputFile" type="file" id="avatar" name="avatar"accept="image/png, image/jpeg, image/jpg" onChange={ props.changePhoto }/>
                            <label htmlFor="avatar"><i className="fa fa-upload fa-2x mr-2"></i> Seleccione una imagen</label>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Footer></Footer>
        </Container>
    );
};