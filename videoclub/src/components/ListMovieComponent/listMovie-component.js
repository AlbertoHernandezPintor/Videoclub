import React from 'react';
import Template from './listMovie-component.template';

/*  Componente que muestra cada película de una lista    */
class ListMovieComponent extends React.Component {

    constructor(props) {
        super(props); 

        this.state = {
            rating: this.setRating()
          }

        this.changeRating = this.changeRating.bind(this);
    }

    setRating() {
        let url = new URL(document.location.href);
        var user = JSON.parse(localStorage.getItem(url.searchParams.get("username")));

        for(let i = 0; i < user.ratingFilms.length; i++) {
            if(user.ratingFilms[i].id === this.props.film.id) {
                var filmRating = user.ratingFilms[i].rating;
                break;
            }
        }

        return filmRating;
    }

    changeRating = (newRating) => {
        let url = new URL(document.location.href);
        var find = false;
        var user = JSON.parse(localStorage.getItem(url.searchParams.get("username")));

        for(let i = 0; i < user.ratingFilms.length; i++) {
            if(user.ratingFilms[i].id === this.props.film.id) {
                find = true;
                user.ratingFilms[i].rating = newRating;
                break;
            }
        }

        if(!find) {
            user.ratingFilms.push({"filmTitle": this.props.film.title, "id": this.props.film.id, "rating": newRating});
        }

        localStorage.setItem(url.searchParams.get("username"), JSON.stringify(user));
    }

    render () {
        let props = {
            film: this.props.film,
            removeFilm: this.props.removeFilm,
            id: this.props.film.id + "-" + this.props.isPending,
            isPending: this.props.isPending,
            changeRating: this.changeRating,
            rating: this.state.rating
        }

        return Template({ ...props });
    }
}

export default ListMovieComponent;