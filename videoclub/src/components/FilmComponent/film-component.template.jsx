/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './film-component.css';
import { Card } from 'react-bootstrap';

export default (props) =>  {
    return (
        <Card className="text-center film-card m-auto"  onClick={ props.goToDetail }>
            <Card.Body>
                <Card.Title className="mb-3" >{ props.film.title }</Card.Title>
                
                <img src={ props.film.image } alt={ props.film.title }></img>
            </Card.Body>
        </Card>
    );
};