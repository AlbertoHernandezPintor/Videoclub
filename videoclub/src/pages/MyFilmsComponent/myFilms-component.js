import React from 'react';
import Template from './myFilms-component.template';

/*  Página en la que se muestran las péliculas disponibles para alquiler y la posibilidad de alquilarlas    */
class MyFilmsComponent extends React.Component {

    constructor(props) {
        super(props);
    
        let url = new URL(document.location.href);

        this.state = {
            user: JSON.parse(localStorage.getItem(url.searchParams.get("username"))),
        }
    }

    render () {
        let props = {
            history: this.props.history,
            user: this.state.user,
            rentFilms: this.state.user.rentFilms
        }

        return Template({ ...props });
    }
}

export default MyFilmsComponent;