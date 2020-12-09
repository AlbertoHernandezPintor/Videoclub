/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Alert } from 'react-bootstrap';

export default (props) =>  {

    if (props.show) {
        return (
                <Alert variant={ props.type } onClose={ props.setShow } dismissible>
                    <p>{ props.message }</p>
                </Alert>
        );
    } else {
        return false
    }
};