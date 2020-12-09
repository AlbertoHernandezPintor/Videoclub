import React from 'react';
import Template from './login-component.template';

// Página de login del videoclub
class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          username: "",
        }
    
        this.login = this.login.bind(this);
        this.updateUsername = this.updateUsername.bind(this);
    }

    login(event) {
        event.preventDefault();
    }

    updateUsername(event) {
        const target = event.target;
    
        this.setState(function(){
          return {
            [target.name]: target.value
          }
        });
    }

    render () {
        let props = {
            username: this.state.username,
            login: this.login,
            updateUsername: this.updateUsername
        }

        return Template({ ...props });
    }
}

export default LoginComponent;