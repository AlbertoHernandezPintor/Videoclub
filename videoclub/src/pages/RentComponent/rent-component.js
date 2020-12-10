import React from 'react';
import Template from './rent-component.template';
import films from '../../assets/json/rentFilms.json';

/*  Página en la que se muestran las péliculas disponibles para alquiler y la posibilidad de alquilarlas    */
class RentComponent extends React.Component {

    render () {
        let props = {
            rentFilms: films,
            history: this.props.history
        }

        return Template({ ...props });
    }
}

export default RentComponent;