import React from 'react';
import Template from './filmDetail-component.template';
import films from '../../assets/json/billboardFilms.json';
import ReactStars from "react-rating-stars-component";

/*  Página que muestra el detalle de una película */
class FilmDetailComponent extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          film: "",
          stars: 0,
        }

        this.setStars = this.setStars.bind(this);
    }

    /*  Método que se ejecuta al montar la página   */
    componentDidMount() {
        let url = new URL(document.location.href);
        let idFilm = url.searchParams.get("id");

        /*  Buscamos la película seleccionada   */
        for(let i = 0; i < films.length; i++) {
            if(films[i].id.toString() === idFilm) {
                this.setState({
                    film: films[i],
                    stars: films[i].stars
                })
            }
        }
    }

    setStars() {
        if(this.state.film) {
            return (
                <ReactStars
                    count={ 5 }
                    size={ 24 }
                    activeColor="#ffd700"
                    isHalf={ true }
                    value={ this.state.film.stars }
                />
            );
        }
    }
    
    render () {
        let props = {
            film: this.state.film,
            stars: this.setStars
        }

        return Template({ ...props });
    }
}

export default FilmDetailComponent;