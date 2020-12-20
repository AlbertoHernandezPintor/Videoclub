import React from 'react';
import Template from './filmDetail-component.template';
import films from '../../assets/json/billboardFilms.json';
import rentFilms from '../../assets/json/rentFilms.json';
import ReactStars from "react-rating-stars-component";

/*  Página que muestra el detalle de una película */
class FilmDetailComponent extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          film: "",
          stars: 0,
          seen: false,
          pending: false
        }

        this.setStars = this.setStars.bind(this);
        this.markPendingMovie = this.markPendingMovie.bind(this);
        this.markSeenMovie = this.markSeenMovie.bind(this);
    }

    /*  Método que se ejecuta al montar la página   */
    componentDidMount() {
        let url = new URL(document.location.href);

        if(sessionStorage.getItem(url.searchParams.get("username")) === null){
            this.props.history.push({
                pathname: '/error',
            })
        } else  {
            let idFilm = url.searchParams.get("id");
            let isRent = url.searchParams.get("isRent");

            var user = JSON.parse(localStorage.getItem(url.searchParams.get("username")));
            
            for(let i = 0; i < user.seenMovies.length; i++) {
                if(user.seenMovies[i].id.toString() === idFilm) {
                    this.setState({
                        seen: true
                    })
                }
            }

            for(let i = 0; i < user.pendingMovies.length; i++) {
                if(user.pendingMovies[i].id.toString() === idFilm) {
                    this.setState({
                        pending: true
                    })
                }
            }

            /*  Buscamos la película seleccionada   */
            if (isRent === "true") {
                for(let i = 0; i < rentFilms.length; i++) {
                    if(rentFilms[i].id.toString() === idFilm) {
                        this.setState({
                            film: rentFilms[i],
                            stars: rentFilms[i].stars
                        })
                    }
                }
            } else {
                for(let i = 0; i < films.length; i++) {
                    if(films[i].id.toString() === idFilm) {
                        this.setState({
                            film: films[i],
                            stars: films[i].stars
                        })
                    }
                }
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

    markPendingMovie() {
        let url = new URL(document.location.href);
        let idFilm = url.searchParams.get("id");
        var user = JSON.parse(localStorage.getItem(url.searchParams.get("username")));
        user.pendingMovies.push(this.state.film);
        localStorage.setItem(url.searchParams.get("username"), JSON.stringify(user));

        for(let i = 0; i < user.seenMovies.length; i++) {
            if(user.seenMovies[i].id.toString() === idFilm) {
                var user1 = JSON.parse(localStorage.getItem(url.searchParams.get("username")));
                user1.seenMovies.splice(i, 1);
                localStorage.setItem(url.searchParams.get("username"), JSON.stringify(user1));
            }
        }

        this.setState({
            seen: false,
            pending: true
        })
    }

    markSeenMovie() {
        let url = new URL(document.location.href);
        let idFilm = url.searchParams.get("id");
        var user = JSON.parse(localStorage.getItem(url.searchParams.get("username")));
        user.seenMovies.push(this.state.film);
        localStorage.setItem(url.searchParams.get("username"), JSON.stringify(user));

        for(let i = 0; i < user.pendingMovies.length; i++) {
            if(user.pendingMovies[i].id.toString() === idFilm) {
                var user1 = JSON.parse(localStorage.getItem(url.searchParams.get("username")));
                user1.pendingMovies.splice(i, 1);
                localStorage.setItem(url.searchParams.get("username"), JSON.stringify(user1));
            }
        }

        this.setState({
            seen: true,
            pending: false
        })
    }
    
    render () {
        let props = {
            film: this.state.film,
            stars: this.setStars,
            seen: this.state.seen,
            pending: this.state.pending,
            markSeenMovie: this.markSeenMovie,
            markPendingMovie: this.markPendingMovie
        }

        return Template({ ...props });
    }
}

export default FilmDetailComponent;