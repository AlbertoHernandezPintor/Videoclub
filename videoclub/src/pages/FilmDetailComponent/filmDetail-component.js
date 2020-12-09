import React from 'react';
import Template from './filmDetail-component.template';
import films from '../../assets/json/billboardFilms.json';

/*  Página que muestra el detalle de una película */
class FilmDetailComponent extends React.Component {

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
        for(let i = 0; i < films.length; i++) {
            if(films[i].id.toString() === idFilm) {
                console.log("Hola");
                this.setState({
                    film: films[i]
                })
            }
        }

        
    }
    
    render () {
        let props = {
            film: this.state.film
        }

        return Template({ ...props });
    }
}

export default FilmDetailComponent;