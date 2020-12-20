import React from 'react';
import Template from './myFilms-component.template';

/*  Página en la que se muestran las péliculas alquiladas por el usuario para su visualización   */
class MyFilmsComponent extends React.Component {

    constructor(props) {
        super(props);
    
        let url = new URL(document.location.href);

        this.state = {
            user: JSON.parse(localStorage.getItem(url.searchParams.get("username"))),
        }
    }

    componentDidMount() {
        let url = new URL(document.location.href);
        if(sessionStorage.getItem(url.searchParams.get("username")) === null){
            this.props.history.push({
                pathname: '/error',
            })
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