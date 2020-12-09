import React from 'react';
import Template from './modal-component.template';

/*  Página en la que se muestran las péliculas disponibles para alquiler y la posibilidad de alquilarlas    */
class RentComponent extends React.Component {

    render () {
        console.log(this.props.show);
        let props = {
            onHide: this.props.onHide,
            show: this.props.show
        }

        return Template({ ...props });
    }
}

export default RentComponent;