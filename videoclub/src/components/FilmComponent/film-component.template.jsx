/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './film-component.css';
import { Card } from 'react-bootstrap';
import Modal from '../../components/ModalComponent/modal-component';

export default (props) =>  {
    return (
        <Card className="text-center film-card m-auto">
            <Card.Body className="film-card-body" onClick={ props.goToDetail }>
                <Card.Title className="mb-3" >{ props.film.title }</Card.Title>
                
                <img src={ props.film.image } alt={ props.film.title }></img>
            </Card.Body>
            <Modal show={ props.modalShow } onHide={ props.onHide } days={ props.days } total={ props.total } film={ props.film } confirmRent={ props.confirmRent } confirmEndRent={ props.confirmEndRent } typeModal={ props.typeModal }></Modal>
            <Card.Footer hidden={ !props.isRent || props.myFilms}>
                <button type="button" className="rent-buttons mr-2" onClick={ props.rent } disabled={ props.allowRent }>Alquilar</button>
                <button type="button" className="rent-buttons"  onClick={ props.endRent } disabled={ props.allowEndRent }>Finalizar alquiler</button>
            </Card.Footer>
            <Card.Footer hidden={ !props.isRent || (props.isRent && !props.myFilms) }>
                <button type="button" className="rent-buttons mr-2" onClick={ props.watchFilm }>Ver</button>
            </Card.Footer>
        </Card>
    );
};