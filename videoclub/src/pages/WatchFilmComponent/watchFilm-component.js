import React from 'react';
import Template from './watchFilm-component.template';
import rentFilms from '../../assets/json/rentFilms.json';

/*  Página en la que se muestran las péliculas disponibles para alquiler y la posibilidad de alquilarlas    */
class WatchFilmComponent extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          film: "",
        }
    }

    /*  Método que se ejecuta al montar la página   */
    componentDidMount() {
        let url = new URL(document.location.href);
        let idFilm = url.searchParams.get("id");

        /*  Buscamos la película seleccionada   */
        for(let i = 0; i < rentFilms.length; i++) {
            if(rentFilms[i].id.toString() === idFilm) {
                this.setState({
                    film: rentFilms[i],
                })
            }
        } 
    }

    render () {
        let props = {
            film: this.state.film,
        }

        return Template({ ...props });
    }
}

export default WatchFilmComponent;