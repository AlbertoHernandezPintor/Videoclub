import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginComponent from './pages/LoginComponent/login-component';
import BillboardComponent from './pages/BillboardComponent/billboard-component';

// Rutas de la página web del videoclub
const Routes = () => {
    return(
        <Switch>
            <Route exact path = '/' component= { LoginComponent }/>
            <Route path = '/billboard' component = { BillboardComponent }/>
        </Switch>
   );
}

export default Routes;