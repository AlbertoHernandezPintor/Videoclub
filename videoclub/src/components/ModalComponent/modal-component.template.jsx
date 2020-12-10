/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './modal-component.css';
import { Modal, Button } from 'react-bootstrap';

export default (props) =>  {

    if (props.show && props.typeModal === "rent") {
        return (
            <Modal.Dialog className="modal-dialog">
                <Modal.Header>
                    <Modal.Title>Alquiler de película</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Va a proceder a alquilar la película por { props.film.price }€/día. ¿Está seguro?</p>
                </Modal.Body>

                <Modal.Footer className="d-flex justify-content-center">
                    <Button variant="secondary" onClick={ props.onHide }>Cancelar</Button>
                    <Button variant="primary" onClick={ props.confirmRent }>Continuar</Button>
                </Modal.Footer>
            </Modal.Dialog>
        );
    } else if (props.show && props.typeModal === "endRent"){ 
        return (
            <Modal.Dialog className="modal-dialog">
                <Modal.Header>
                    <Modal.Title>Alquiler de película</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Va a proceder a dejar de alquilar la película. Se le va a proceder a cobrar { props.total }€ debido a que la película se ha alquilado { props.days } días. ¿Está seguro?</p>
                </Modal.Body>

                <Modal.Footer className="d-flex justify-content-center">
                    <Button variant="secondary" onClick={ props.onHide }>Cancelar</Button>
                    <Button variant="primary" onClick={ props.confirmEndRent }>Continuar</Button>
                </Modal.Footer>
            </Modal.Dialog>
        );
    } else {
        return false
    }
};