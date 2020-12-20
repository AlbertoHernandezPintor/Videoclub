import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginComponent from './pages/LoginComponent/login-component';
import BillboardComponent from './pages/BillboardComponent/billboard-component';
import RentComponent from './pages/RentComponent/rent-component';
import FilmDetailComponent from './pages/FilmDetailComponent/filmDetail-component';
import MyFilmsComponent from './pages/MyFilmsComponent/myFilms-component';
import WatchFilmComponent from './pages/WatchFilmComponent/watchFilm-component';
import MyProfileComponent from './pages/MyProfileComponent/myProfile-component';
import ListsComponent from './pages/ListsComponent/lists-component';
import ErrorComponent from './pages/ErrorComponent/error-component';

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
            <Route path = '/myProfile' component = { MyProfileComponent }/>
            <Route path = '/lists' component = { ListsComponent }/>
            <Route path = '/error' component = { ErrorComponent }/>
        </Switch>
   );
}

export default Routes;