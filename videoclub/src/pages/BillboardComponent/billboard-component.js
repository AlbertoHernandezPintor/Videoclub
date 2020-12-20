import React from 'react';
import Template from './billboard-component.template';
import films from '../../assets/json/billboardFilms.json';

/*  Página en la que se muestra la cartelera actual */
class BillboardComponent extends React.Component {

    render () {
        let props = {
            billboardFilms: films,
            history: this.props.history
        }

        return Template({ ...props });
    }

    componentDidMount() {
        let url = new URL(document.location.href);
        if(sessionStorage.getItem(url.searchParams.get("username")) === null){
            this.props.history.push({
                pathname: '/error',
            })
        }
    }
}

export default BillboardComponent;