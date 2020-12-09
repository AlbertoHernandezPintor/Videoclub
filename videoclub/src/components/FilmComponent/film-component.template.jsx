/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './film-component.css';
import { Card } from 'react-bootstrap';

export default (props) =>  {
    return (
        <Card className="text-center film-card m-auto">
            <Card.Body className="film-card-body" onClick={ props.goToDetail }>
                <Card.Title className="mb-3" >{ props.film.title }</Card.Title>
                
                <img src={ props.film.image } alt={ props.film.title }></img>
            </Card.Body>
            <Card.Footer hidden={ !props.isRent }>
                <button type="button" className="rent-buttons mr-2" onClick={ props.rent }>Alquilar</button>
                <button type="button" className="rent-buttons">Finalizar alquiler</button>
            </Card.Footer>
        </Card>
    );
};