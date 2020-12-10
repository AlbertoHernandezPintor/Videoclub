import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginComponent from './pages/LoginComponent/login-component';
import BillboardComponent from './pages/BillboardComponent/billboard-component';
import RentComponent from './pages/RentComponent/rent-component';
import FilmDetailComponent from './pages/FilmDetailComponent/filmDetail-component';
import MyFilmsComponent from './pages/MyFilmsComponent/myFilms-component';
import WatchFilmComponent from './pages/WatchFilmComponent/watchFilm-component';
import CinemasComponent from './pages/CinemasComponent/cinemas-component';

// Rutas de la página web del videoclub
const Routes = () => {
    return(
        <Switch>
            <Route exact path = '/' component= { LoginComponent }/>
            <Route path = '/billboard' component = { BillboardComponent }/>
            <Route path = '/rent' component = { RentComponent }/>
            <Route path = '/filmDetail' component = { FilmDetailComponent }/>
            <Route path = '/watchFilm' component = { WatchFilmComponent }/>
            <Route path = '/myFilms' component = { MyFilmsComponent }/>
            <Route path = '/cinemas' component = { CinemasComponent }/>
        </Switch>
   );
}

export default Routes;