import React from 'react';
import Template from './modal-component.template';

/*  Página en la que se muestran las péliculas disponibles para alquiler y la posibilidad de alquilarlas    */
class RentComponent extends React.Component {

    render () {
        let props = {
            onHide: this.props.onHide,
            show: this.props.show,
            film: this.props.film,
            confirmRent: this.props.confirmRent,
            typeModal: this.props.typeModal,
            confirmEndRent: this.props.confirmEndRent,
            days: this.props.days,
            total: this.props.total
        }

        return Template({ ...props });
    }
}

export default RentComponent;