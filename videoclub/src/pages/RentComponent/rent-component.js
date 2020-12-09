import React from 'react';
import Template from './rent-component.template';
import films from '../../assets/json/rentFilms.json';

/*  Página en la que se muestran las péliculas disponibles para alquiler y la posibilidad de alquilarlas    */
class RentComponent extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            modalShow: false,
        }

        this.rent = this.rent.bind(this);
    }

    rent() {
        console.log("Hola");
        this.setState(function(){
            return {
              modalShow: true
            }
        });
    }

    render () {
        let props = {
            rentFilms: films,
            history: this.props.history,
            rent: this.rent,
            modalShow: this.state.modalShow
        }

        return Template({ ...props });
    }
}

export default RentComponent;