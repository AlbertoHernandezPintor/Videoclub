/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './listMovie-component.css';
import { Card, Row, Col } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";

export default (props) =>  {
    if(props.isPending) {
        return (
            <Card className="mr-2 ml-2 mb-2">
                <Card.Body className="list-film-card d-flex align-items-center">
                    <Row>
                        <Col sm="6" className="d-flex align-items-center justify-content-center">
                            <Card.Title className="m-0">{ props.film.title }</Card.Title>
                        </Col>
    
                        <Col sm="6" className="d-flex align-items-center justify-content-center">
                            <Card.Title className="m-0"><i className="fa fa-trash fa-2x trash" onClick={ props.removeFilm } id={ props.id }></i></Card.Title>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    } else {
        return (
            <Card className="mr-2 ml-2 mb-2">
                <Card.Body className="list-film-card d-flex align-items-center">
                    <Row>
                        <Col sm="4" className="d-flex align-items-center justify-content-center">
                            <Card.Title className="m-0">{ props.film.title }</Card.Title>
                        </Col>
    
                        <Col sm="4" className="d-flex align-items-center justify-content-center">
                        <ReactStars
                            count={ 5 }
                            size={ 24 }
                            activeColor="#ffd700"
                            isHalf={ true }
                            value={ props.rating }
                            onChange={ props.changeRating }
                        />
                        </Col>
    
                        <Col sm="4" className="d-flex align-items-center justify-content-center">
                            <Card.Title className="m-0"><i className="fa fa-trash fa-2x trash" onClick={ props.removeFilm } id={ props.id }></i></Card.Title>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    }

};