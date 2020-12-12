import React from 'react';
import Template from './menu-component.template';

/* Componente menú, aparece siempre arriba de las páginas de la web  */
class MenuComponent extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          billboardRoute: "",
          rentRoute: "",
          myFilmsRoute: "",
          myProfileRoute: "",
          listsRoute: ""
        }
    }

    /*  Método que se ejecuta al montar la página   */
    componentDidMount() {
        let url = new URL(document.location.href);

        /*  Creamos las referencias correctas a cada página   */
        this.setState(function(){
            return {
                billboardRoute: "/billboard?username=" + url.searchParams.get("username"),
                rentRoute: "/rent?username=" + url.searchParams.get("username"),
                myFilmsRoute: "/myFilms?username=" + url.searchParams.get("username"),
                myProfileRoute: "/myProfile?username=" + url.searchParams.get("username"),
                listsRoute: "/lists?username=" + url.searchParams.get("username")
            }
        });
    }

    render () {
        let props = {
            billboardRoute: this.state.billboardRoute,
            rentRoute: this.state.rentRoute,
            myFilmsRoute: this.state.myFilmsRoute,
            myProfileRoute: this.state.myProfileRoute,
            listsRoute: this.state.listsRoute
        }

        return Template({ ...props });
    }
}

export default MenuComponent;