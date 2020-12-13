import React from 'react';
import Template from './myProfile-component.template';
import User from '../../models/User';

/*  Página en la que se muestran los cines mas cercanos */
class MyProfileComponent extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          startDate: "",
          username: "",
          bestRating: this.setBestRating(),
          worstRating: this.setWorstRating(),
          lastRentFilm: "",
          worstFilm: true,
          bestFilm: true,
          countRentFilms: 0,
          countSeenFilms: 0,
          countPendingFilms: 0, 
          profilePhoto: ""
        }

        this.changePhoto = this.changePhoto.bind(this);
    }

    componentDidMount() {
        let url = new URL(document.location.href);
        var user = JSON.parse(localStorage.getItem(url.searchParams.get("username")));

        var lastRentFilm;
        if(user.lastRentFilm === "") {
            lastRentFilm = "No se han alquilado películas aún";
        } else {
            lastRentFilm = user.lastRentFilm.title;
        }

        var bestFilm;
        var worstFilm;
        if(this.state.bestRating.filmTitle !== "No hay películas valoradas") {
            bestFilm = false;
            worstFilm = false;
        } else {
            bestFilm = true;
            worstFilm = true;
        }

        this.setState({
            startDate: user.startDate,
            username: url.searchParams.get("username"),
            lastRentFilm: lastRentFilm,
            bestFilm: bestFilm,
            worstFilm: worstFilm,
            countPendingFilms: user.pendingMovies.length,
            countRentFilms: user.rentFilms.length,
            countSeenFilms: user.seenMovies.length,
            profilePhoto: user.profilePhoto
        })
    }

    setBestRating() {
        let url = new URL(document.location.href);
        var user = JSON.parse(localStorage.getItem(url.searchParams.get("username")));
        
        var bestRating;
        if (user.ratingFilms.length === 0) {
            bestRating = {filmTitle: "No hay películas valoradas"};
        } else {
            bestRating = User.getBestRating(user.ratingFilms);
        }

        return bestRating;
    }


    setWorstRating() {
        let url = new URL(document.location.href);
        var user = JSON.parse(localStorage.getItem(url.searchParams.get("username")));
        
        var worstRating;
        if (user.ratingFilms.length === 0) {
            worstRating = {filmTitle: "No hay películas valoradas"};
        } else {
            worstRating = User.getWorstRating(user.ratingFilms);
        }

        return worstRating;
    }

    changePhoto(event) {
        var newProfilePhoto =  URL.createObjectURL(event.target.files[0]);

        let url = new URL(document.location.href);
        var user = JSON.parse(localStorage.getItem(url.searchParams.get("username")));

        user.profilePhoto = newProfilePhoto;

        localStorage.setItem(url.searchParams.get("username"), JSON.stringify(user));

        this.setState({
            profilePhoto: newProfilePhoto
        })
    }

    render () {
        let props = {
            username:  this.state.username,
            startDate: this.state.startDate,
            bestRating: this.state.bestRating.filmTitle,
            worstRating: this.state.worstRating.filmTitle,
            bestRate: this.state.bestRating.rating,
            worstRate: this.state.worstRating.rating,
            lastRentFilm: this.state.lastRentFilm,
            worstFilm: this.state.worstFilm,
            bestFilm: this.state.bestFilm,
            countRentFilms: this.state.countRentFilms,
            countPendingFilms: this.state.countPendingFilms,
            countSeenFilms: this.state.countSeenFilms,
            profilePhoto: this.state.profilePhoto,
            changePhoto: this.changePhoto
        }

        return Template({ ...props });
    }
}

export default MyProfileComponent;