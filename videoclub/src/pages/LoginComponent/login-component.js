import React from 'react';
import Template from './login-component.template';
import User from '../../models/User';

/*  Página de login del videoclub   */
class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          username: "",
          showAlert: false
        }
    
        this.login = this.login.bind(this);
        this.updateUsername = this.updateUsername.bind(this);
        this.setShow = this.setShow.bind(this);
    }

    /*  Método que se ejecuta cuando se pulsa en el botón de iniciar sesión  */
    login(event) {
        event.preventDefault();

        /*  Si no se ha introducido ningún nombre se muestra una alerta, sino  */
        /*  se procede a acceder a la web con el usuario introducido           */
        if (this.state.username !== "") {
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            var startDate = day + "/" + month + "/" + year;

            var user = new User(this.state.username, [], [], [], [], startDate, "", "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png");
      
            /*  Si no existía el usuario, se crea, sino se guarda en la sesión el usuario con  */
            /*  el cual se está accediendo                                                     */
            if (localStorage.getItem(this.state.username) === null) {
                user.saveUserLocalStorage();
                user.saveUserSessionStorage();
            } else {
                user.saveUserSessionStorage();
            }
      
            /*  Se navega a la página inicial de la web, la de la cartelera y se pasa como queryString  */
            /*  el nombre del usuario con el que se está accediendo                                     */
            this.props.history.push({
              pathname: '/billboard',
              search: '?username=' + this.state.username
            })
              
          } else {
            this.setState(function(){
                return {
                  showAlert: true
                }
            });
          }
    }

    /*  Método que se ejecuta cada vez que se modifica el nombre de usuario en el input del form,  */
    /*  actualiza el valor del nombre de usuario                                                   */
    updateUsername(event) {
        const target = event.target;
    
        this.setState(function(){
          return {
            [target.name]: target.value
          }
        });
    }

    /*  Método que se ejecuta cuando se quiere cerrar la alerta  */
    setShow() {
        this.setState(function(){
          return {
            showAlert: false
          }
        });
    }

    render () {
        let props = {
            username: this.state.username,
            login: this.login,
            updateUsername: this.updateUsername,
            showAlert: this.state.showAlert,
            setShow: this.setShow
        }

        return Template({ ...props });
    }
}

export default LoginComponent;