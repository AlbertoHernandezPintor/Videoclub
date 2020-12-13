/*  Clase usuario                   */
/*  username: Nombre del usuario    */
class User {

    constructor(username, rentFilms, seenMovies, pendingMovies, ratingFilms, startDate, lastRentFilm, profilePhoto) {
        this.username = username;
        this.rentFilms = rentFilms;
        this.seenMovies = seenMovies;
        this.pendingMovies = pendingMovies;
        this.ratingFilms = ratingFilms;
        this.startDate = startDate;
        this.lastRentFilm = lastRentFilm;
        this.profilePhoto = profilePhoto;
    }

    /*  Método para guardar el usuario en el local storage  */
    saveUserLocalStorage() {
        var jsonPlayer = JSON.stringify(this);
  
        localStorage.setItem(this.username, jsonPlayer);
    }

    /*  Método para guardar el usuario en el session storage  */
    saveUserSessionStorage() {
        sessionStorage.clear();
        sessionStorage.setItem(this.username, this.username);
    }

    static addRentFilm(film, username) {
        var user = JSON.parse(localStorage.getItem(username));

        var startDate = new Date();
        var year = startDate.getFullYear();
        var month = startDate.getMonth() + 1;
        var day = startDate.getDate();

        film.startDate = day + "/" + month + "/" + year;
        user.rentFilms.push(film);

        user.lastRentFilm = film;

        localStorage.setItem(username, JSON.stringify(user));
    }


    static deleteRentFilm(film, username) {
        var user = JSON.parse(localStorage.getItem(username));

        for(var i = 0; i < user.rentFilms.length; i++) {
            if(user.rentFilms[i].id === film.id) {
                user.rentFilms.splice(i, 1);
                break;
            }
        }

        localStorage.setItem(username, JSON.stringify(user));
    }

    static compareDates(startDate, endDate) {
        if(startDate === endDate) {
            return 1;
        } else {
            var aFecha1 = startDate.split('/');
            var aFecha2 = endDate.split('/');
            var fFecha1 = Date.UTC(aFecha1[2],aFecha1[1]-1,aFecha1[0]);
            var fFecha2 = Date.UTC(aFecha2[2],aFecha2[1]-1,aFecha2[0]);
            var dif = fFecha2 - fFecha1;
            var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
            return dias;
        }
    }

    static getWorstRating(ratingFilms) {
        var worstRating = ratingFilms[0];
        for(var i = 0; i < ratingFilms.length; i++) {
            if (ratingFilms[i].rating < worstRating.rating) {
                worstRating = ratingFilms[i];
            }
        }

        return worstRating;
    }

    static getBestRating(ratingFilms) {
        var bestRating = ratingFilms[0];
        for(var i = 0; i < ratingFilms.length; i++) {
            if (ratingFilms[i].rating > bestRating.rating) {
                bestRating = ratingFilms[i];
            }
        }

        return bestRating;
    }
}

export default User;