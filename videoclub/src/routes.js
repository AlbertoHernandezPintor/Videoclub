import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginComponent from './pages/LoginComponent/login-component';
import BillboardComponent from './pages/BillboardComponent/billboard-component';
import RentComponent from './pages/RentComponent/rent-component';
import FilmDetailComponent from './pages/FilmDetailComponent/filmDetail-component';

// Rutas de la página web del videoclub
const Routes = () => {
    return(
        <Switch>
            <Route exact path = '/' component= { LoginComponent }/>
            <Route path = '/billboard' component = { BillboardComponent }/>
            <Route path = '/rent' component = { RentComponent }/>
            <Route path = '/filmDetail' component = { FilmDetailComponent }/>
        </Switch>
   );
}

export default Routes;