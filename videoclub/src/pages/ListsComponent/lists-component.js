import React from 'react';
import Template from './lists-component.template';

/*  Página en la que se muestran las listas de  películas vistas y pendientes    */
class ListsComponent extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          username: "",
          showAlert: false,
          pendingMovies: [],
          seenMovies: [],
          emptySeenFilms: true,
          emptyPendingFilms: true
        }
    
        this.removeFilm = this.removeFilm.bind(this);
    }

    componentDidMount() {
        let url = new URL(document.location.href);
        var user = JSON.parse(localStorage.getItem(url.searchParams.get("username")));

        this.setState({
            pendingMovies: user.pendingMovies,
            seenMovies: user.seenMovies
        })

        if(user.seenMovies.length === 0) {
            this.setState({
                emptySeenFilms: false
            })
        }
        
        if (user.pendingMovies.length === 0) {
            this.setState({
                emptyPendingFilms: false
            })
        }
    }

    removeFilm(event) {
        let idFilm = event.target.id.split('-')[0];
        let isPending = event.target.id.split('-')[1];

        let url = new URL(document.location.href);
        var user = JSON.parse(localStorage.getItem(url.searchParams.get("username")));

        if(isPending === "true") {
            for(let i = 0; i < user.pendingMovies.length; i++) {
                if(user.pendingMovies[i].id.toString() === idFilm) {
                    user.pendingMovies.splice(i, 1);
                    localStorage.setItem(url.searchParams.get("username"), JSON.stringify(user));

                    this.setState({
                        pendingMovies: user.pendingMovies
                    })

                    break;
                }
            }
        } else {
            for(let i = 0; i < user.seenMovies.length; i++) {
                if(user.seenMovies[i].id.toString() === idFilm) {
                    user.seenMovies.splice(i, 1);
                    localStorage.setItem(url.searchParams.get("username"), JSON.stringify(user));

                    this.setState({
                        seenMovies: user.seenMovies
                    })

                    break;
                }
            }

            for(let i = 0; i < user.ratingFilms.length; i++) {
                if(user.ratingFilms[i].id.toString() === idFilm) {
                    user.ratingFilms.splice(i, 1);
                    localStorage.setItem(url.searchParams.get("username"), JSON.stringify(user));
                    break;
                }
            }
        }
    }

    render () {
        let props = {
            pendingMovies: this.state.pendingMovies,
            seenMovies: this.state.seenMovies,
            removeFilm: this.removeFilm,
            emptyPendingFilms: this.state.emptyPendingFilms,
            emptySeenFilms: this.state.emptySeenFilms
        }

        return Template({ ...props });
    }
}

export default ListsComponent;